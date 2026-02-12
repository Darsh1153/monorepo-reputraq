const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable instrumentation for database keep-alive
  experimental: {
    instrumentationHook: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Set output file tracing root to monorepo root to fix build trace collection
  outputFileTracingRoot: path.resolve(__dirname, '../../'),
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals.push("youtube-search-without-api-key");
    }
    return config;
  },
  transpilePackages: ["youtube-search-without-api-key"],
  sassOptions: {
    includePaths: ["./lib/styles"],
  },
};

module.exports = nextConfig;