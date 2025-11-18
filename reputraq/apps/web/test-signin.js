const { drizzle } = require('drizzle-orm/postgres-js');
const postgres = require('postgres');
const { sql } = require('drizzle-orm');
const { users } = require('./lib/db/schema');

// Test database connection and create a test user
async function testSignin() {
  console.log('Testing sign-in functionality...');
  
  // You'll need to set your DATABASE_URL environment variable
  const connectionString = process.env.DATABASE_URL;
  
  if (!connectionString) {
    console.error('❌ DATABASE_URL environment variable is not set');
    console.log('Please create a .env.local file with your database connection string');
    console.log('Example: DATABASE_URL=postgresql://username:password@host:port/database');
    return;
  }
  
  try {
    console.log('🔌 Connecting to database...');
    const client = postgres(connectionString);
    const db = drizzle(client);
    
    // Test connection
    const result = await db.execute(sql`SELECT 1 as test`);
    console.log('✅ Database connection successful');
    
    // Check if there are any users
    const existingUsers = await db.select().from(users);
    console.log(`📊 Found ${existingUsers.length} existing users`);
    
    if (existingUsers.length === 0) {
      console.log('👤 Creating test user...');
      
      // Create a test user
      const testUser = await db.insert(users).values({
        name: 'Test User',
        email: 'test@example.com',
        password: 'password123', // In production, this should be hashed
        phone: '+1234567890',
        companyName: 'Test Company',
        plan: 'normal',
        role: 'user',
        status: 'approved'
      }).returning();
      
      console.log('✅ Test user created:', testUser[0]);
      console.log('📧 Email: test@example.com');
      console.log('🔑 Password: password123');
    } else {
      console.log('👥 Existing users:');
      existingUsers.forEach(user => {
        console.log(`  - ${user.name} (${user.email}) - Status: ${user.status}`);
      });
    }
    
    await client.end();
    console.log('✅ Test completed successfully');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('Full error:', error);
  }
}

testSignin();
