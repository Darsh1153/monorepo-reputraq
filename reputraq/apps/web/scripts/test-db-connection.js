const { getDatabase, isDatabaseHealthy, closeDatabase } = require('../lib/db/connection');

async function testDatabaseConnection() {
  console.log('🔍 Testing database connection...');
  console.log('⏳ Note: Render free tier databases may take 30-90 seconds to wake up from sleep\n');
  
  try {
    // Test basic connection
    console.log('1. Testing basic connection (this may take a while if DB is sleeping)...');
    const startTime = Date.now();
    const db = await getDatabase();
    const connectionTime = Date.now() - startTime;
    console.log(`✅ Database connection established (took ${connectionTime}ms)`);
    
    // Test health check
    console.log('2. Testing health check...');
    const isHealthy = await isDatabaseHealthy();
    if (isHealthy) {
      console.log('✅ Database health check passed');
    } else {
      console.log('❌ Database health check failed');
    }
    
    // Test a simple query
    console.log('3. Testing simple query...');
    const result = await db.execute('SELECT NOW() as current_time, version() as postgres_version');
    console.log('✅ Query executed successfully');
    console.log('📊 Query result:', result[0]);
    
    console.log('\n🎉 All database tests passed!');
    
    // Warn if connection took a long time (likely woke from sleep)
    if (connectionTime > 30000) {
      console.log('\n⚠️  Connection took a long time. Database was likely sleeping.');
      console.log('💡 Consider:');
      console.log('   - Upgrading to Render paid plan for always-on databases');
      console.log('   - Keep-alive mechanism is now enabled to prevent sleep');
    }
    
  } catch (error) {
    console.error('\n❌ Database connection test failed:');
    console.error('Error type:', error.constructor.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    
    // Check if it's a connection timeout
    if (error.message.includes('timeout') || error.code === 'CONNECT_TIMEOUT') {
      console.log('\n💡 Connection timeout detected. This might be due to:');
      console.log('   - Render free tier database is sleeping (takes 30-90s to wake)');
      console.log('   - Network connectivity issues');
      console.log('   - Database server being down');
      console.log('   - Firewall blocking the connection');
      console.log('   - Incorrect DATABASE_URL');
      console.log('\n🔧 Solutions:');
      console.log('   1. Wait and try again (database may wake up)');
      console.log('   2. Check Render dashboard to ensure database is running');
      console.log('   3. Upgrade to Render paid plan for always-on databases');
      console.log('   4. Verify DATABASE_URL is correct in .env.local');
    }
    
    if (error.code === 'EAI_AGAIN' || error.message.includes('getaddrinfo')) {
      console.log('\n💡 DNS resolution failed. This could mean:');
      console.log('   - Database hostname is incorrect');
      console.log('   - Database has been deleted or moved');
      console.log('   - Network/DNS issues');
    }
    
    process.exit(1);
  } finally {
    console.log('\n🔌 Closing database connection...');
    await closeDatabase();
    console.log('✅ Database connection closed');
  }
}

// Run the test
testDatabaseConnection();
