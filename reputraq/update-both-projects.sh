#!/bin/bash
# Script to update both Vercel projects' root directories
# Requires VERCEL_TOKEN environment variable

LANDING_PROJECT_ID="prj_CYw7b2feZdDlT0pWxLKeN0khMnYy"
WEB_PROJECT_ID="prj_XiTdIbDbAOzjFjLG9j7dG78KHHvO"

if [ -z "$VERCEL_TOKEN" ]; then
  echo "Error: VERCEL_TOKEN environment variable is required"
  echo "Get your token from: https://vercel.com/account/tokens"
  exit 1
fi

echo "Updating landing project root directory..."
curl -X PATCH "https://api.vercel.com/v9/projects/${LANDING_PROJECT_ID}" \
  -H "Authorization: Bearer ${VERCEL_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"rootDirectory": "apps/landing"}' \
  -w "\nStatus: %{http_code}\n"

echo ""
echo "Updating web project root directory..."
curl -X PATCH "https://api.vercel.com/v9/projects/${WEB_PROJECT_ID}" \
  -H "Authorization: Bearer ${VERCEL_TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{"rootDirectory": "apps/web"}' \
  -w "\nStatus: %{http_code}\n"

echo ""
echo "Done! Both projects' root directories have been updated."

