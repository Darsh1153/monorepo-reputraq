# DNS Configuration Guide - Step by Step

This guide will help you configure DNS records to connect `reputraq.com` and `app.reputraq.com` to your Vercel deployments.

## Prerequisites

1. Access to your domain registrar (where you purchased `reputraq.com`)
2. Access to your Vercel account
3. Both apps should already be deployed on Vercel (✅ Done)

---

## Step 1: Add Domains in Vercel Dashboard

### For Landing App (reputraq.com):

1. **Open Vercel Dashboard:**
   - Go to: https://vercel.com/darsh1153s-projects/landing/settings/domains
   - Or navigate: Dashboard → `landing` project → Settings → Domains

2. **Add Domain:**
   - Click the **"Add Domain"** button
   - Enter: `reputraq.com`
   - Click **"Add"**

3. **Copy DNS Configuration:**
   - Vercel will show you the DNS records needed
   - **Note down the values** (usually shows A record or CNAME)

### For Web App (app.reputraq.com):

1. **Open Vercel Dashboard:**
   - Go to: https://vercel.com/darsh1153s-projects/web/settings/domains
   - Or navigate: Dashboard → `web` project → Settings → Domains

2. **Add Domain:**
   - Click the **"Add Domain"** button
   - Enter: `app.reputraq.com`
   - Click **"Add"**

3. **Copy DNS Configuration:**
   - Vercel will show you the DNS records needed
   - **Note down the values** (usually shows CNAME)

---

## Step 2: Access Your Domain Registrar

1. **Identify Your Registrar:**
   - Common registrars: GoDaddy, Namecheap, Google Domains, Cloudflare, Name.com, etc.
   - Log in to your account

2. **Find DNS Management:**
   - Look for: "DNS Management", "DNS Settings", "Manage DNS", or "DNS Records"
   - This is usually under "Domain Settings" or "Advanced Settings"

---

## Step 3: Configure DNS Records

### For reputraq.com (Apex Domain):

**Option A: Using A Record (Recommended for apex domains)**

1. **Find "Add Record" or "Create Record" button**
2. **Select Record Type:** Choose **"A"** or **"A Record"**
3. **Fill in the details:**
   - **Name/Host:** `@` or leave blank (some registrars use `@`, others use blank)
   - **Value/Target/Points to:** `76.76.21.21` (Vercel's IP address)
   - **TTL:** `3600` or leave as default (1 hour)
4. **Save the record**

**Option B: Using CNAME (If your registrar supports CNAME flattening)**

1. **Select Record Type:** Choose **"CNAME"** or **"ALIAS"**
2. **Fill in the details:**
   - **Name/Host:** `@` or leave blank
   - **Value/Target:** `cname.vercel-dns.com`
   - **TTL:** `3600` or default
3. **Save the record**

### For app.reputraq.com (Subdomain):

1. **Find "Add Record" or "Create Record" button**
2. **Select Record Type:** Choose **"CNAME"**
3. **Fill in the details:**
   - **Name/Host:** `app` (just the subdomain part, without `.reputraq.com`)
   - **Value/Target/Points to:** `cname.vercel-dns.com`
   - **TTL:** `3600` or leave as default
4. **Save the record**

---

## Step 4: Verify DNS Configuration

### Check Your DNS Records:

After saving, your DNS records should look like this:

```
Type    Name    Value                    TTL
A       @       76.76.21.21              3600
CNAME   app     cname.vercel-dns.com     3600
```

### Verify Using DNS Checker:

1. **Visit:** https://dnschecker.org
2. **Check A Record for reputraq.com:**
   - Select record type: **A**
   - Enter domain: `reputraq.com`
   - Click "Search"
   - Should show: `76.76.21.21` globally (may take time to propagate)

3. **Check CNAME Record for app.reputraq.com:**
   - Select record type: **CNAME**
   - Enter domain: `app.reputraq.com`
   - Click "Search"
   - Should show: `cname.vercel-dns.com` globally

---

## Step 5: Wait for DNS Propagation

- **Typical Time:** 5 minutes to 48 hours
- **Average Time:** 1-2 hours
- **What's happening:** DNS changes are propagating to DNS servers worldwide

### While Waiting:

1. **Check Vercel Dashboard:**
   - Go to your project's Domains settings
   - Status should change from "Pending" to "Valid" when ready
   - SSL certificate will be automatically issued

2. **Test Your Domains:**
   - Try visiting: `https://reputraq.com`
   - Try visiting: `https://app.reputraq.com`
   - If you see "Not Found" or "Invalid", DNS hasn't propagated yet

---

## Step 6: Verify SSL Certificates

Once DNS is verified:

1. **Vercel automatically issues SSL certificates**
2. **Check in Vercel Dashboard:**
   - Go to Domains settings
   - You should see "Valid" status with a green checkmark
3. **Test HTTPS:**
   - Visit `https://reputraq.com` (should work with SSL)
   - Visit `https://app.reputraq.com` (should work with SSL)

---

## Common Issues & Solutions

### Issue 1: "Not authorized to use domain" in Vercel
**Solution:** Add the domain through Vercel Dashboard first, then configure DNS

### Issue 2: DNS not propagating after 24 hours
**Solutions:**
- Double-check DNS records are correct
- Clear your browser cache
- Try from different network/location
- Contact your registrar support

### Issue 3: SSL certificate not issued
**Solutions:**
- Wait a bit longer (can take up to 24 hours)
- Ensure DNS is fully propagated
- Check Vercel dashboard for any error messages

### Issue 4: Wrong record type
**Solutions:**
- For apex domain (`reputraq.com`): Use A record or CNAME (if supported)
- For subdomain (`app.reputraq.com`): Use CNAME record

---

## Registrar-Specific Instructions

### GoDaddy:
1. Go to "My Products" → "DNS"
2. Click "Add" under Records
3. Select type, enter name and value
4. Click "Save"

### Namecheap:
1. Go to "Domain List" → Click "Manage"
2. Go to "Advanced DNS" tab
3. Click "Add New Record"
4. Select type, enter host and value
5. Click save (checkmark icon)

### Cloudflare:
1. Go to your domain → "DNS" section
2. Click "Add record"
3. Select type, enter name and target
4. Click "Save"

### Google Domains:
1. Go to "DNS" section
2. Scroll to "Custom resource records"
3. Click "Add custom record"
4. Enter type, name, and data
5. Click "Add"

---

## Quick Reference

| Domain | Record Type | Name | Value | TTL |
|--------|-------------|------|-------|-----|
| reputraq.com | A | @ (or blank) | 76.76.21.21 | 3600 |
| app.reputraq.com | CNAME | app | cname.vercel-dns.com | 3600 |

---

## Final Checklist

- [ ] Added `reputraq.com` in Vercel Dashboard (landing project)
- [ ] Added `app.reputraq.com` in Vercel Dashboard (web project)
- [ ] Configured A record for `reputraq.com` at registrar
- [ ] Configured CNAME record for `app.reputraq.com` at registrar
- [ ] Verified DNS records using dnschecker.org
- [ ] Waited for DNS propagation (1-48 hours)
- [ ] Verified SSL certificates are issued in Vercel
- [ ] Tested both domains in browser (HTTPS)

---

## Need Help?

If you encounter issues:
1. Check Vercel deployment logs
2. Verify DNS records are correct
3. Wait for full DNS propagation
4. Contact your domain registrar support
5. Check Vercel documentation: https://vercel.com/docs/domains

---

**Note:** DNS changes can take time to propagate. Be patient and check back in a few hours if domains aren't working immediately.

