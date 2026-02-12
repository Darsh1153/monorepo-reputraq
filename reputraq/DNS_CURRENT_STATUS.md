# Current DNS Status & Next Steps

## ✅ What's Already Correct

1. **A Record for Root Domain:**
   - ✅ `@` → `76.76.21.21` (CORRECT - Keep this!)
   - ✅ Duplicate `216.198.79.1` has been removed (Good!)

## ❌ What Needs to be Fixed

Based on your current DNS records, here's what needs to be updated:

### 1. Update CNAME for `app.reputraq.com`
- **Current:** `app` → `cname.vercel-dns.com`
- **Should be:** `app` → `dc72de86a864c628.vercel-dns-017.com.`

### 2. Update CNAME for `www.reputraq.com`
- **Current:** `www` → `reputraq.com`
- **Should be:** `www` → `2a4eff36d39dc972.vercel-dns-017.com.`

### 3. Add TXT Records for Domain Verification
- **Missing:** `_vercel` TXT record for `reputraq.com`
- **Missing:** `_vercel` TXT record for `app.reputraq.com`

---

## 📝 Step-by-Step Instructions

### Step 1: Update `app` CNAME Record

1. Go to: https://hpanel.hostinger.com/domain/reputraq.com/dns
2. Find the CNAME record: `app` → `cname.vercel-dns.com`
3. Click **"Edit"** on that record
4. Change the **Content/Value** field from:
   ```
   cname.vercel-dns.com
   ```
   To:
   ```
   dc72de86a864c628.vercel-dns-017.com.
   ```
   **Important:** Include the trailing dot `.` at the end!
5. Click **"Save"**

### Step 2: Update `www` CNAME Record

1. Find the CNAME record: `www` → `reputraq.com`
2. Click **"Edit"** on that record
3. Change the **Content/Value** field from:
   ```
   reputraq.com
   ```
   To:
   ```
   2a4eff36d39dc972.vercel-dns-017.com.
   ```
   **Important:** Include the trailing dot `.` at the end!
4. Click **"Save"**

### Step 3: Add TXT Record for `reputraq.com` Verification

1. Click **"Add Record"** button (usually at the top or bottom of the DNS table)
2. Fill in the form:
   - **Type:** Select `TXT`
   - **Name:** Enter `_vercel`
   - **Content/Value:** Enter `vc-domain-verify=reputraq.com,0788b514d5b8fed3cd21`
   - **TTL:** `3600` (or leave default)
3. Click **"Save"** or **"Add"**

### Step 4: Add TXT Record for `app.reputraq.com` Verification

1. Click **"Add Record"** button again
2. Fill in the form:
   - **Type:** Select `TXT`
   - **Name:** Enter `_vercel`
   - **Content/Value:** Enter `vc-domain-verify=app.reputraq.com,4af91917718d06b25...`
     **Note:** Use the FULL value from Vercel dashboard. In the image it's truncated, so copy the complete value from:
     - Go to: https://vercel.com/darsh1153s-projects/web/settings/domains
     - Look at the TXT record value for `app.reputraq.com`
     - Copy the entire value (it's longer than what's shown)
   - **TTL:** `3600` (or leave default)
3. Click **"Save"** or **"Add"**

**Note:** If Hostinger only allows one `_vercel` TXT record at a time, add the one for `reputraq.com` first, wait for verification, then add the second one.

---

## 📋 Final DNS Configuration (After All Updates)

Your DNS records should look like this:

```
Type    Name        Content/Value                                    TTL
A       @           76.76.21.21                                     3600
CNAME   app         dc72de86a864c628.vercel-dns-017.com.             3600
CNAME   www         2a4eff36d39dc972.vercel-dns-017.com.             3600
TXT     _vercel     vc-domain-verify=reputraq.com,0788b514d5b8fed3cd21  3600
TXT     _vercel     vc-domain-verify=app.reputraq.com,4af91917718d06b25...  3600
```

Plus your existing email records (MX, CAA, etc.) - **keep those!**

---

## ✅ Verification Steps

### After Making Changes:

1. **Wait 15-30 minutes** for DNS propagation

2. **Check in Vercel Dashboard:**
   - **Landing App:** https://vercel.com/darsh1153s-projects/landing/settings/domains
     - Click **"Refresh"** next to `reputraq.com`
     - Status should change to **"Valid"** ✅
   
   - **Web App:** https://vercel.com/darsh1153s-projects/web/settings/domains
     - Click **"Refresh"** next to `app.reputraq.com`
     - Status should change to **"Valid"** ✅

3. **Test Your Domains:**
   - Visit: `https://reputraq.com` → Should show landing page
   - Visit: `https://app.reputraq.com` → Should show web app
   - Visit: `https://www.reputraq.com` → Should show landing page

---

## 🎯 Quick Checklist

- [x] ✅ Removed duplicate A record `216.198.79.1`
- [x] ✅ A record `@` → `76.76.21.21` is correct
- [ ] ⏳ Update CNAME: `app` → `dc72de86a864c628.vercel-dns-017.com.`
- [ ] ⏳ Update CNAME: `www` → `2a4eff36d39dc972.vercel-dns-017.com.`
- [ ] ⏳ Add TXT: `_vercel` → `vc-domain-verify=reputraq.com,0788b514d5b8fed3cd21`
- [ ] ⏳ Add TXT: `_vercel` → `vc-domain-verify=app.reputraq.com,4af91917718d06b25...` (full value)
- [ ] ⏳ Wait 15-30 minutes
- [ ] ⏳ Click "Refresh" in Vercel dashboard
- [ ] ⏳ Verify status is "Valid"
- [ ] ⏳ Test domains in browser

---

## 💡 Important Notes

1. **Trailing Dots:** Make sure to include the trailing dot `.` at the end of CNAME values (e.g., `dc72de86a864c628.vercel-dns-017.com.`)

2. **TXT Record Values:** Copy the COMPLETE value from Vercel dashboard. The value for `app.reputraq.com` is truncated in the image - get the full value from Vercel.

3. **Multiple TXT Records:** If Hostinger shows an error about duplicate `_vercel` records, add them one at a time. Verify `reputraq.com` first, then add the second one.

4. **Email Records:** Don't delete or modify the email-related records (MX, CAA, `_dmarc`, `autodiscover`, etc.) - those are for email functionality.

5. **DNS Propagation:** Changes can take 5 minutes to 48 hours, but usually 15-30 minutes is enough.

---

## 🆘 If You Need the Full TXT Value

To get the complete TXT value for `app.reputraq.com`:

1. Go to: https://vercel.com/darsh1153s-projects/web/settings/domains
2. Find `app.reputraq.com` in the list
3. Look at the TXT record section
4. Click the **copy icon** next to the TXT value
5. Use that complete value when adding the record in Hostinger

The value should start with `vc-domain-verify=app.reputraq.com,` and have a long hash after it.

