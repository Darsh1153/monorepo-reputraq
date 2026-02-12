# Complete DNS Fix Guide - Step by Step

## 🔴 Issues Found

1. **Duplicate A Record:** Two A records exist for `@` (root domain)
   - ✅ `76.76.21.21` (CORRECT - keep this)
   - ❌ `216.198.79.1` (WRONG - delete this)

2. **Wrong CNAME for app:** Currently `app` → `cname.vercel-dns.com`
   - Should be: `app` → `dc72de86a864c628.vercel-dns-017.com.`

3. **Missing TXT Records:** Need verification records for both domains
   - Missing: `_vercel` TXT record for ownership verification

4. **Domain Ownership:** Domains are linked to another Vercel account
   - Need to add TXT records to verify ownership

---

## ✅ Step-by-Step Fix in Hostinger

### Step 1: Delete the Wrong A Record

1. Go to: https://hpanel.hostinger.com/domain/reputraq.com/dns
2. Find the A record with value `216.198.79.1`
3. Click **"Delete"** on that record
4. **Keep only** the A record: `@` → `76.76.21.21`

### Step 2: Update CNAME for app.reputraq.com

1. Find the existing CNAME record: `app` → `cname.vercel-dns.com`
2. Click **"Edit"** on that record
3. Change the **Value/Content** from `cname.vercel-dns.com` to:
   ```
   dc72de86a864c628.vercel-dns-017.com.
   ```
   (Note: Include the trailing dot `.` at the end)
4. Click **"Save"**

### Step 3: Add TXT Record for Domain Verification

You need to add a TXT record to verify ownership. Vercel shows different values for each domain:

**For reputraq.com:**
1. Click **"Add Record"** or **"+"** button
2. Configure:
   - **Type:** `TXT`
   - **Name:** `_vercel`
   - **Value/Content:** `vc-domain-verify=reputraq.com,0788b514d5b8fed3cd21`
   - **TTL:** `3600` (or default)
3. Click **"Save"**

**For app.reputraq.com:**
1. Click **"Add Record"** or **"+"** button
2. Configure:
   - **Type:** `TXT`
   - **Name:** `_vercel`
   - **Value/Content:** `vc-domain-verify=app.reputraq.com,4af91917718d06b25...` 
     (Use the full value from Vercel dashboard - it's truncated in the image)
   - **TTL:** `3600` (or default)
3. Click **"Save"**

**Note:** If you can only add one `_vercel` TXT record, add the one for `reputraq.com` first. After verification, you can add the second one.

### Step 4: Update www CNAME (Optional but Recommended)

For `www.reputraq.com`, Vercel shows it should point to:
- **CNAME:** `www` → `2a4eff36d39dc972.vercel-dns-017.com.`

1. Find the existing CNAME: `www` → `reputraq.com`
2. Click **"Edit"**
3. Change **Value/Content** to: `2a4eff36d39dc972.vercel-dns-017.com.`
4. Click **"Save"**

---

## 📋 Final DNS Configuration

After all changes, your DNS records should be:

```
Type    Name        Value/Content                                    TTL
A       @           76.76.21.21                                      3600
CNAME   app         dc72de86a864c628.vercel-dns-017.com.             3600
CNAME   www         2a4eff36d39dc972.vercel-dns-017.com.             3600
TXT     _vercel     vc-domain-verify=reputraq.com,0788b514d5b8fed3cd21  3600
TXT     _vercel     vc-domain-verify=app.reputraq.com,4af91917718d06b25...  3600
```

**Important Notes:**
- ❌ **REMOVE:** A record `@` → `216.198.79.1`
- ✅ **KEEP:** A record `@` → `76.76.21.21`
- ✅ **UPDATE:** CNAME `app` → use Vercel's specific hash
- ✅ **ADD:** TXT `_vercel` records for verification

---

## 🔍 Verification Steps

### Step 1: Wait 15-30 Minutes
DNS changes need time to propagate.

### Step 2: Check DNS Propagation
Visit: https://dnschecker.org
- Check A record for `reputraq.com` → should show `76.76.21.21`
- Check CNAME for `app.reputraq.com` → should show `dc72de86a864c628.vercel-dns-017.com.`
- Check TXT for `_vercel.reputraq.com` → should show the verification string

### Step 3: Verify in Vercel Dashboard

**For Landing App:**
1. Go to: https://vercel.com/darsh1153s-projects/landing/settings/domains
2. Click **"Refresh"** next to `reputraq.com`
3. Status should change from "Verification Needed" to "Valid" ✅

**For Web App:**
1. Go to: https://vercel.com/darsh1153s-projects/web/settings/domains
2. Click **"Refresh"** next to `app.reputraq.com`
3. Status should change from "Verification Needed" to "Valid" ✅

### Step 4: Test Your Domains

After verification:
- Visit: `https://reputraq.com` → Should show landing page
- Visit: `https://app.reputraq.com` → Should show web app
- Visit: `https://www.reputraq.com` → Should redirect or show landing page

---

## 🚨 Important Notes

1. **TXT Records:** The `_vercel` TXT records are for verification only. You can remove them after verification is complete, but it's safe to keep them.

2. **Vercel Hash Values:** Vercel provides specific hash values (like `dc72de86a864c628.vercel-dns-017.com.`) for better routing. The old `cname.vercel-dns.com` will still work, but Vercel recommends using the new hash values.

3. **Multiple TXT Records:** If Hostinger doesn't allow multiple `_vercel` TXT records, add them one at a time. Verify `reputraq.com` first, then add the second one for `app.reputraq.com`.

4. **DNS Propagation:** Changes can take 5 minutes to 48 hours. Usually it's 15-30 minutes.

---

## 📝 Quick Checklist

- [ ] Delete A record: `@` → `216.198.79.1`
- [ ] Keep A record: `@` → `76.76.21.21`
- [ ] Update CNAME: `app` → `dc72de86a864c628.vercel-dns-017.com.`
- [ ] Update CNAME: `www` → `2a4eff36d39dc972.vercel-dns-017.com.`
- [ ] Add TXT: `_vercel` → `vc-domain-verify=reputraq.com,0788b514d5b8fed3cd21`
- [ ] Add TXT: `_vercel` → `vc-domain-verify=app.reputraq.com,4af91917718d06b25...` (full value)
- [ ] Wait 15-30 minutes
- [ ] Click "Refresh" in Vercel dashboard
- [ ] Verify status changes to "Valid"
- [ ] Test domains in browser

---

## 🆘 If Still Not Working

1. **Double-check all values** match exactly (including trailing dots)
2. **Wait longer** - DNS can take up to 48 hours
3. **Clear browser cache** and try again
4. **Check from different network** (mobile data)
5. **Verify TXT records** are visible in DNS checker
6. **Contact Vercel support** if verification fails after 24 hours

