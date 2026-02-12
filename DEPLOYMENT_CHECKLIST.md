# ✅ Deployment Checklist

Use this checklist to ensure you complete all deployment steps correctly.

## Pre-Deployment

- [ ] Code is committed and pushed to Git repository
- [ ] All environment variables are documented
- [ ] Build commands work locally (`pnpm build` in both apps)
- [ ] Database is set up and accessible
- [ ] Domain `reputraq.com` is owned/accessible
- [ ] DNS access is available for domain configuration

## Landing App Deployment (`reputraq.com`)

- [ ] Created Vercel project for landing app
- [ ] Set Root Directory to: `reputraq/apps/landing`
- [ ] Verified Build Command: `cd ../.. && pnpm install --frozen-lockfile && pnpm --filter landing build`
- [ ] Verified Output Directory: `.next`
- [ ] Added all required environment variables
- [ ] Initial deployment successful
- [ ] Added domain `reputraq.com` in Vercel
- [ ] Configured DNS records for `reputraq.com`
- [ ] DNS verification completed
- [ ] SSL certificate provisioned (automatic, wait up to 24h)
- [ ] Tested `https://reputraq.com` - all pages working

## Web App Deployment (`app.reputraq.com`)

- [ ] Created Vercel project for web app
- [ ] Set Root Directory to: `reputraq/apps/web`
- [ ] Verified Build Command: `cd ../.. && pnpm install --frozen-lockfile && pnpm --filter web build`
- [ ] Verified Output Directory: `.next`
- [ ] Added all required environment variables (including DATABASE_URL)
- [ ] Initial deployment successful
- [ ] Added domain `app.reputraq.com` in Vercel
- [ ] Configured DNS records for `app.reputraq.com`
- [ ] DNS verification completed
- [ ] SSL certificate provisioned (automatic, wait up to 24h)
- [ ] Tested `https://app.reputraq.com` - authentication working
- [ ] Tested `https://app.reputraq.com` - core features working

## Post-Deployment

- [ ] Both domains accessible via HTTPS
- [ ] All pages load correctly
- [ ] Navigation works on both sites
- [ ] API endpoints working (web app)
- [ ] Database connections working (web app)
- [ ] Error tracking/monitoring set up (optional)
- [ ] Analytics configured (optional)
- [ ] Team members have access to Vercel projects

## DNS Records Reference

### For `reputraq.com`:
```
Type: A or CNAME
Name: @
Value: [Provided by Vercel]
```

### For `app.reputraq.com`:
```
Type: CNAME
Name: app
Value: [Provided by Vercel]
```

## Quick Commands

### Test builds locally:
```bash
# Landing app
cd reputraq/apps/landing && pnpm build

# Web app
cd reputraq/apps/web && pnpm build
```

### Check DNS propagation:
```bash
# Check reputraq.com
dig reputraq.com

# Check app.reputraq.com
dig app.reputraq.com
```

## Troubleshooting Notes

- **Build fails**: Check Vercel build logs, verify pnpm-lock.yaml is committed
- **Domain not verifying**: Double-check DNS records, wait for propagation
- **SSL not working**: Wait up to 24 hours after DNS verification
- **Environment variables missing**: Add in Vercel Settings → Environment Variables

---

**Status**: ⏳ Not Started
**Last Updated**: [Date]

