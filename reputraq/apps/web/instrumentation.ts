export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Import and start database keep-alive when server starts
    const { startKeepAlive } = await import('./lib/db/connection');
    
    // Start keep-alive after a short delay to ensure connection is ready
    setTimeout(() => {
      console.log('🔌 Starting database keep-alive from instrumentation...');
      startKeepAlive();
    }, 10000); // Start after 10 seconds to allow initial connection
  }
}
