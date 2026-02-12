# DNS Configuration Fix - Hostinger

## Issues Identified

Based on your Hostinger DNS configuration, I can see:

1. ✅ **A Record exists** for `reputraq.com` pointing to `76.76.21.21` (CORRECT)
2. ❌ **Duplicate A Record** pointing to `216.198.79.1` (WRONG - needs to be removed)
3. ❓ **Missing CNAME** for `app.reputraq.com` (needs to be added)
4. ❓ **www.reputraq.com** needs configuration

## Step-by-Step Fix

### Step 1: Remove the Incorrect A Record

1. Go to Hostinger DNS management: https://hpanel.hostinger.com/domain/reputraq.com/dns
2. Find the A record with value `216.198.79.1`
3. Click **"Delete"** on that record
4. **Keep only** the A record pointing to `76.76.21.21`

### Step 2: Add CNAME for app.reputraq.com

1. In the same DNS management page, look for an **"Add Record"** or **"+"** button
2. Click to add a new record
3. Configure:
   - **Type:** `CNAME`
   - **Name:** `app` (just "app", without .reputraq.com)
   - **Value/Target:** `cname.vercel-dns.com`
   - **TTL:** `3600` (or leave default)
4. Click **"Save"** or **"Add"**

### Step 3: Configure www.reputraq.com (Optional but Recommended)

You have two options:

**Option A: Point www to Vercel (Recommended)**
1. Add a CNAME record:
   - **Type:** `CNAME`
   - **Name:** `www`
   - **Value/Target:** `cname.vercel-dns.com`
   - **TTL:** `3600`

**Option B: Point www to main domain**
- Keep the existing CNAME: `www` → `reputraq.com`
- Then add `www.reputraq.com` in Vercel dashboard as well

### Step 4: Verify Your DNS Records

After making changes, your DNS records should look like:

```
Type    Name    Value/Target              TTL
A       @       76.76.21.21               3600
CNAME   app     cname.vercel-dns.com      3600
CNAME   www     cname.vercel-dns.com      3600  (or www → reputraq.com)
```

**Important:** Remove the A record pointing to `216.198.79.1`

### Step 5: Wait and Verify

1. **Wait 5-30 minutes** for DNS propagation
2. **Check DNS propagation:**
   - Visit: https://dnschecker.org
   - Check A record for `reputraq.com` → should show `76.76.21.21`
   - Check CNAME for `app.reputraq.com` → should show `cname.vercel-dns.com`
3. **Check Vercel Dashboard:**
   - Go to: https://vercel.com/darsh1153s-projects/landing/settings/domains
   - Status should change from "Verification Needed" to "Valid"
   - Go to: https://vercel.com/darsh1153s-projects/web/settings/domains
   - Status should change from "Verification Needed" to "Valid"

## Quick Action Items

- [ ] Delete A record: `@` → `216.198.79.1`
- [ ] Keep A record: `@` → `76.76.21.21`
- [ ] Add CNAME: `app` → `cname.vercel-dns.com`
- [ ] Configure `www` subdomain (CNAME to Vercel or main domain)
- [ ] Wait 15-30 minutes
- [ ] Check Vercel dashboard for "Valid" status
- [ ] Test: Visit `https://reputraq.com` and `https://app.reputraq.com`

## Troubleshooting

### If domains still show "Verification Needed" after 1 hour:

1. **Double-check DNS records** are exactly as specified
2. **Clear browser cache** and try again
3. **Check from different network** (mobile data, different WiFi)
4. **Verify in Vercel:** Click "Refresh" button next to the domain
5. **Check DNS propagation:** Use https://dnschecker.org to see global status

### If you see "Invalid Configuration":

1. Make sure you removed the duplicate A record (`216.198.79.1`)
2. Verify the A record points to `76.76.21.21` (not `216.198.79.1`)
3. Ensure CNAME for `app` points to `cname.vercel-dns.com`
4. Wait a bit longer for DNS to propagate

## Current Status Check

After making changes, verify:

1. **reputraq.com:**
   - Should have ONE A record: `@` → `76.76.21.21`
   - Should NOT have A record: `@` → `216.198.79.1`

2. **app.reputraq.com:**
   - Should have CNAME: `app` → `cname.vercel-dns.com`

3. **www.reputraq.com:**
   - Should have CNAME: `www` → `cname.vercel-dns.com` (or `www` → `reputraq.com`)

