# Fix for www.reputraq.com - Verification & SSL Error

## 🔴 Issues Found

1. **`www.reputraq.com` shows "Verification Needed"**
   - Status: Linked to another Vercel account
   - Needs TXT record for ownership verification

2. **SSL Certificate Error**
   - Error: `NET::ERR_CERT_COMMON_NAME_INVALID`
   - This happens because the domain isn't verified yet, so Vercel can't issue an SSL certificate

## ✅ Solution: Add TXT Record for www.reputraq.com

### Step 1: Add TXT Record in Hostinger

1. **Go to Hostinger DNS Management:**
   - Visit: https://hpanel.hostinger.com/domain/reputraq.com/dns

2. **Add New TXT Record:**
   - Click **"Add Record"** or **"+"** button
   - Configure:
     - **Type:** `TXT`
     - **Name:** `_vercel`
     - **Content/Value:** `vc-domain-verify=www.reputraq.com,2cfe243f36b347a...`
       **Important:** Copy the COMPLETE value from Vercel dashboard (it's truncated in the image)
     - **TTL:** `3600` (or default)
   - Click **"Save"**

3. **Get the Full TXT Value:**
   - Go to: https://vercel.com/darsh1153s-projects/landing/settings/domains
   - Find `www.reputraq.com`
   - Look at the TXT record section
   - Click the **copy icon** next to the TXT value
   - Use that complete value (it's longer than `2cfe243f36b347a...`)

### Step 2: Wait for DNS Propagation

- **Time:** 15-30 minutes (can take up to 48 hours)
- DNS changes need time to propagate globally

### Step 3: Verify in Vercel Dashboard

1. Go to: https://vercel.com/darsh1153s-projects/landing/settings/domains
2. Find `www.reputraq.com`
3. Click **"Refresh"** button next to it
4. Status should change from "Verification Needed" to **"Valid Configuration"** ✅

### Step 4: Wait for SSL Certificate

- Once verified, Vercel will automatically issue an SSL certificate
- This can take 5-15 minutes after verification
- The SSL error will disappear once the certificate is issued

### Step 5: Test the Domain

- Visit: `https://www.reputraq.com`
- Should now work without SSL errors
- Should redirect to or show the landing page

---

## 📋 Current DNS Records Summary

After adding the TXT record, you should have:

```
Type    Name        Content/Value                                    TTL
A       @           216.198.79.1                                    3600
CNAME   app         dc72de86a864c628.vercel-dns-017.com             3600
CNAME   www         2a4eff36d39dc972.vercel-dns-017.com             3600
TXT     _vercel     vc-domain-verify=reputraq.com,0788b514d5b8fed3cd21  3600
TXT     _vercel     vc-domain-verify=app.reputraq.com,4af91917718d06b25266  3600
TXT     _vercel     vc-domain-verify=www.reputraq.com,2cfe243f36b347a...  3600  ← ADD THIS
```

**Note:** You can have multiple `_vercel` TXT records - one for each domain/subdomain.

---

## 🎯 Quick Checklist

- [ ] Add TXT record: `_vercel` → `vc-domain-verify=www.reputraq.com,<full-value>`
- [ ] Wait 15-30 minutes for DNS propagation
- [ ] Click "Refresh" in Vercel dashboard for `www.reputraq.com`
- [ ] Verify status changes to "Valid Configuration"
- [ ] Wait 5-15 minutes for SSL certificate
- [ ] Test: Visit `https://www.reputraq.com` (should work without errors)

---

## 💡 Important Notes

1. **Multiple TXT Records:** Hostinger allows multiple `_vercel` TXT records, so you can have one for each domain:
   - `_vercel` → `vc-domain-verify=reputraq.com,...`
   - `_vercel` → `vc-domain-verify=app.reputraq.com,...`
   - `_vercel` → `vc-domain-verify=www.reputraq.com,...`

2. **SSL Certificate:** The SSL error will automatically resolve once:
   - The domain is verified (TXT record added and propagated)
   - Vercel issues the SSL certificate (automatic, takes 5-15 minutes)

3. **Full TXT Value:** Make sure to copy the COMPLETE value from Vercel dashboard. The value shown in the image is truncated - get the full value by clicking the copy icon in Vercel.

4. **After Verification:** You can optionally remove the `_vercel` TXT records after verification is complete, but it's safe to keep them.

---

## 🆘 If Still Not Working

1. **Double-check the TXT value** matches exactly (including the full hash)
2. **Wait longer** - DNS can take up to 48 hours
3. **Clear browser cache** and try again
4. **Check from different network** (mobile data, different WiFi)
5. **Verify TXT record** is visible using: https://dnschecker.org
   - Check TXT record for `_vercel.reputraq.com`
   - Should show the verification string

