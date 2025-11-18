#!/usr/bin/env node

/**
 * Simple Database Connection Test
 * This script tests the database connection with the provided URL
 */

// Set the environment variable
process.env.DATABASE_URL = 'postgresql://reputraq_pg_user:9vxweFKpwaCIFyQIOYduPliAqIwlXSzl@dpg-d33igebe5dus73ea2fcg-a.singapore-postgres.render.com/reputraq_pg?sslmode=require';

const postgres = require('postgres');

async function testConnection() {
  console.log('🔍 Testing database connection...');
  
  const connectionString = process.env.DATABASE_URL;
  
  // Connection configuration optimized for Render PostgreSQL
  const connectionConfig = {
    prepare: false,
    max: 5,
    idle_timeout: 30,
    connect_timeout: 60,
    max_lifetime: 60 * 30,
    onnotice: () => {},
    transform: {
      undefined: null,
    },
    ssl: {
      rejectUnauthorized: false,
      checkServerIdentity: () => undefined,
    },
    host_type: 'tcp',
    application_name: 'reputraq-test',
  };

  let client = null;
  
  try {
    console.log('1. Creating connection...');
    client = postgres(connectionString, connectionConfig);
    
    console.log('2. Testing basic query...');
    const result = await client`SELECT NOW() as current_time, version() as postgres_version`;
    
    console.log('✅ Database connection successful!');
    console.log('📊 Query result:', result[0]);
    
    // Test if users table exists
    console.log('3. Checking users table...');
    const usersTable = await client`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = 'users'
      ) as table_exists
    `;
    
    if (usersTable[0].table_exists) {
      console.log('✅ Users table exists');
      
      // Check if there are any users
      const userCount = await client`SELECT COUNT(*) as count FROM users`;
      console.log(`📊 Total users in database: ${userCount[0].count}`);
      
      // Show sample users (without passwords)
      if (userCount[0].count > 0) {
        const sampleUsers = await client`
          SELECT id, name, email, role, status, created_at 
          FROM users 
          LIMIT 3
        `;
        console.log('👥 Sample users:', sampleUsers);
      }
    } else {
      console.log('❌ Users table does not exist');
      console.log('💡 You may need to run database migrations');
    }
    
  } catch (error) {
    console.error('❌ Database connection failed:');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    
    if (error.code === 'EAI_AGAIN') {
      console.log('\n💡 DNS resolution error. This could be due to:');
      console.log('   - Network connectivity issues');
      console.log('   - DNS server problems');
      console.log('   - Database hostname is incorrect');
    } else if (error.code === 'CONNECT_TIMEOUT') {
      console.log('\n💡 Connection timeout. This could be due to:');
      console.log('   - Database server is down or sleeping');
      console.log('   - Firewall blocking the connection');
      console.log('   - Network issues');
    } else if (error.message.includes('authentication')) {
      console.log('\n💡 Authentication error. Check:');
      console.log('   - Username and password in DATABASE_URL');
      console.log('   - Database user permissions');
    }
    
    process.exit(1);
  } finally {
    if (client) {
      console.log('\n🔌 Closing database connection...');
      await client.end();
      console.log('✅ Database connection closed');
    }
  }
}

// Run the test
testConnection();
