import { drizzle } from 'drizzle-orm/postgres-js';
import { sql } from 'drizzle-orm';
import postgres from 'postgres';
import * as schema from './schema';

const connectionString = process.env.DATABASE_URL!;

// Connection pool configuration - optimized for Render PostgreSQL
const connectionConfig = {
  prepare: false,
  max: 5, // Reduced for better stability
  idle_timeout: 30, // Keep connections alive longer
  connect_timeout: 90, // Increased timeout for sleeping databases (Render free tier can take 30-60s to wake)
  max_lifetime: 60 * 30, // Keep connections alive for 30 minutes
  onnotice: () => {}, // Disable notices to reduce noise
  transform: {
    undefined: null, // Transform undefined to null
  },
  // Enhanced SSL configuration for Render
  ssl: {
    rejectUnauthorized: false, // Allow self-signed certificates
    checkServerIdentity: () => undefined, // Skip hostname verification
  },
  // DNS resolution settings
  host_type: 'tcp', // Force TCP connection
  application_name: 'reputraq-app', // Identify the connection
};

// Global connection manager
class DatabaseManager {
  private static instance: DatabaseManager;
  private client: postgres.Sql | null = null;
  private dbInstance: ReturnType<typeof drizzle> | null = null;
  private isConnecting = false;

  private constructor() {}

  static getInstance(): DatabaseManager {
    if (!DatabaseManager.instance) {
      DatabaseManager.instance = new DatabaseManager();
    }
    return DatabaseManager.instance;
  }

  async getDatabase() {
    if (!this.client || !this.dbInstance) {
      if (this.isConnecting) {
        // Wait for existing connection attempt
        return this.waitForConnection();
      }
      await this.createConnection();
    }
    return this.dbInstance!;
  }

  async isHealthy(): Promise<boolean> {
    try {
      if (!this.dbInstance) return false;
      await this.dbInstance.execute(sql`SELECT 1 as health_check`);
      return true;
    } catch (error) {
      console.error('Database health check failed:', error);
      return false;
    }
  }

  private async createConnection(retryCount = 0) {
    if (this.isConnecting) return;
    
    this.isConnecting = true;
    const maxRetries = 5; // Increased retries for DNS issues
    const retryDelay = Math.min(2000 * Math.pow(2, retryCount), 30000); // Longer delays for DNS issues
    
    try {
      console.log(`Creating new database connection... (attempt ${retryCount + 1}/${maxRetries + 1})`);
      
      // Validate connection string
      if (!connectionString) {
        throw new Error('DATABASE_URL environment variable is not set');
      }
      
      // Log connection details (without password)
      const urlObj = new URL(connectionString);
      console.log(`Connecting to: ${urlObj.protocol}//${urlObj.hostname}:${urlObj.port}${urlObj.pathname}`);
      
      this.client = postgres(connectionString, connectionConfig);
      this.dbInstance = drizzle(this.client, { schema });
      
      // Test the connection with longer timeout for sleeping databases (Render free tier)
      // Free tier databases can take 30-90 seconds to wake up from sleep
      const testPromise = this.dbInstance.execute(sql`SELECT 1 as test`);
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Connection test timeout after 90 seconds. Database may be sleeping (Render free tier).')), 90000)
      );
      
      await Promise.race([testPromise, timeoutPromise]);
      console.log('Database connection established successfully');
    } catch (error) {
      console.error(`Failed to create database connection (attempt ${retryCount + 1}):`, error);
      
      // Enhanced error handling for DNS issues and sleeping databases
      if (error.code === 'EAI_AGAIN' || error.message.includes('getaddrinfo')) {
        console.error('DNS resolution failed. This could be due to:');
        console.error('1. Network connectivity issues');
        console.error('2. DNS server problems');
        console.error('3. Database hostname is incorrect');
        console.error('4. Database server is down or sleeping');
      }
      
      // Handle timeout errors (likely sleeping database on Render free tier)
      if (error.message.includes('timeout') || error.message.includes('Connection test timeout')) {
        console.error('⚠️  Connection timeout detected. This is likely because:');
        console.error('   - Render free tier database is sleeping (takes 30-90s to wake)');
        console.error('   - Database may need to be woken up by making a connection');
        console.error('   - Consider upgrading to a paid Render plan for always-on databases');
        if (retryCount === 0) {
          console.log('   - Retrying with longer timeout...');
        }
      }
      
      // Clean up failed connection
      if (this.client) {
        try {
          await this.client.end();
        } catch (cleanupError) {
          console.error('Error during cleanup:', cleanupError);
        }
      }
      this.client = null;
      this.dbInstance = null;
      
      // Retry logic with longer delays for DNS issues
      if (retryCount < maxRetries) {
        console.log(`Retrying in ${retryDelay}ms...`);
        this.isConnecting = false;
        await new Promise(resolve => setTimeout(resolve, retryDelay));
        return this.createConnection(retryCount + 1);
      }
      
      throw error;
    } finally {
      this.isConnecting = false;
    }
  }

  private async waitForConnection() {
    let attempts = 0;
    while (this.isConnecting && attempts < 50) { // Wait up to 5 seconds
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }
    return this.dbInstance!;
  }

  async closeDatabase() {
    if (this.client) {
      console.log('Closing database connection...');
      try {
        await this.client.end();
      } catch (error) {
        console.error('Error closing database connection:', error);
      }
      this.client = null;
      this.dbInstance = null;
    }
  }
}

// Create singleton instance
const dbManager = DatabaseManager.getInstance();

// Export functions
export async function getDatabase() {
  return await dbManager.getDatabase();
}

export async function closeDatabase() {
  return await dbManager.closeDatabase();
}

export async function isDatabaseHealthy() {
  return await dbManager.isHealthy();
}

// Graceful shutdown handler
if (typeof process !== 'undefined') {
  process.on('SIGINT', async () => {
    await closeDatabase();
    process.exit(0);
  });

  process.on('SIGTERM', async () => {
    await closeDatabase();
    process.exit(0);
  });
}

// Export the database instance (async)
export const db = getDatabase();

// Keep-alive mechanism for Render free tier databases
let keepAliveInterval: NodeJS.Timeout | null = null;

export function startKeepAlive() {
  if (keepAliveInterval) return; // Already running
  
  console.log('Starting database keep-alive mechanism...');
  keepAliveInterval = setInterval(async () => {
    try {
      const db = await getDatabase();
      await db.execute(sql`SELECT 1 as keep_alive`);
      console.log('Database keep-alive ping successful');
    } catch (error) {
      console.log('Database keep-alive ping failed:', error.message);
    }
  }, 300000); // Every 5 minutes
}

export function stopKeepAlive() {
  if (keepAliveInterval) {
    clearInterval(keepAliveInterval);
    keepAliveInterval = null;
    console.log('Database keep-alive mechanism stopped');
  }
}

// Start keep-alive automatically in production and development
// This prevents Render free tier databases from sleeping
// You can disable it by setting ENABLE_DB_KEEPALIVE=false
const shouldStartKeepAlive = process.env.ENABLE_DB_KEEPALIVE !== 'false' && 
                             (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development');

if (shouldStartKeepAlive) {
  // Start keep-alive after a short delay to ensure connection is established
  setTimeout(() => {
    startKeepAlive();
  }, 5000); // Start after 5 seconds
}
