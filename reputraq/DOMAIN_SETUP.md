# Domain Configuration Guide

## ✅ Deployment Status

Both apps have been successfully deployed:

1. **Landing App** → `darsh1153s-projects/landing`
   - Production URL: https://landing-fhdco6o78-darsh1153s-projects.vercel.app
   - Domain to configure: `reputraq.com`

2. **Web App** → `darsh1153s-projects/web`
   - Production URL: https://web-34eb0hilr-darsh1153s-projects.vercel.app
   - Domain to configure: `app.reputraq.com`

## 🔧 Domain Configuration Steps

### Option 1: Via Vercel Dashboard (Recommended)

1. **For Landing App (reputraq.com):**
   - Go to: https://vercel.com/darsh1153s-projects/landing/settings/domains
   - Click "Add Domain"
   - Enter: `reputraq.com`
   - Follow the DNS configuration instructions

2. **For Web App (app.reputraq.com):**
   - Go to: https://vercel.com/darsh1153s-projects/web/settings/domains
   - Click "Add Domain"
   - Enter: `app.reputraq.com`
   - Follow the DNS configuration instructions

### Option 2: DNS Configuration

After adding domains in Vercel, configure your DNS records:

#### For reputraq.com (Apex Domain):
- **Type:** A Record
- **Name:** @ (or leave blank)
- **Value:** `76.76.21.21` (Vercel's IP address)
- **TTL:** 3600 (or default)

#### For app.reputraq.com (Subdomain):
- **Type:** CNAME Record
- **Name:** app
- **Value:** `cname.vercel-dns.com`
- **TTL:** 3600 (or default)

### DNS Propagation

- DNS changes can take 24-48 hours to propagate globally
- Vercel will automatically issue SSL certificates once DNS is verified
- You can check DNS propagation status using tools like: https://dnschecker.org

## 📝 Notes

- Both apps are live and accessible via their Vercel URLs
- Once DNS is configured, the custom domains will automatically work
- SSL certificates are automatically provisioned by Vercel
- The landing app's `app-links.ts` is configured to use `https://app.reputraq.com` in production

## 🔍 Verification

After DNS configuration:
1. Visit `https://reputraq.com` - should show landing page
2. Visit `https://app.reputraq.com` - should show web app
3. Check SSL certificate status in Vercel dashboard (should show "Valid")

