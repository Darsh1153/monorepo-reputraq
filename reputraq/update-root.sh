#!/bin/bash
# Script to update Vercel project root directory
# Requires VERCEL_TOKEN environment variable

PROJECT_ID="prj_CYw7b2feZdDlT0pWxLKeN0khMnYy"
ROOT_DIR="apps/landing"

if [ -z "$VERCEL_TOKEN" ]; then
  echo "Error: VERCEL_TOKEN environment variable is required"
  echo "Get your token from: https://vercel.com/account/tokens"
  exit 1
fi

curl -X PATCH "https://api.vercel.com/v9/projects/${PROJECT_ID}" \
  -H "Authorization: Bearer ${VERCEL_TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"rootDirectory\": \"${ROOT_DIR}\"}"
