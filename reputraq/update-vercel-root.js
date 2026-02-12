#!/usr/bin/env node

/**
 * Script to update Vercel project root directory via API
 * This updates the landing project's root directory to the monorepo root
 */

const https = require('https');

const PROJECT_ID = 'prj_CYw7b2feZdDlT0pWxLKeN0khMnYy';
const ROOT_DIRECTORY = 'apps/landing';

// Get token from environment or prompt user
const token = process.env.VERCEL_TOKEN;

if (!token) {
  console.error('Error: VERCEL_TOKEN environment variable is required');
  console.error('Get your token from: https://vercel.com/account/tokens');
  process.exit(1);
}

const data = JSON.stringify({
  rootDirectory: ROOT_DIRECTORY
});

const options = {
  hostname: 'api.vercel.com',
  path: `/v9/projects/${PROJECT_ID}`,
  method: 'PATCH',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let responseData = '';

  res.on('data', (chunk) => {
    responseData += chunk;
  });

  res.on('end', () => {
    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log('✅ Successfully updated root directory to:', ROOT_DIRECTORY);
      console.log('Response:', JSON.parse(responseData));
    } else {
      console.error('❌ Error updating root directory');
      console.error('Status:', res.statusCode);
      console.error('Response:', responseData);
      process.exit(1);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ Request error:', error);
  process.exit(1);
});

req.write(data);
req.end();

