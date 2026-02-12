# Vercel Deployment Guide

This guide will help you deploy both the **landing** and **web** apps to Vercel with the following domain configuration:
- **Landing App** → `reputraq.com`
- **Web App** → `app.reputraq.com`

## Prerequisites

1. Install Vercel CLI globally (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Login to Vercel with your account:
   ```bash
   vercel login
   ```
   Use the email: `darsh19102002@gmail.com`

## Deployment Steps

### Step 1: Deploy Landing App (reputraq.com)

1. Navigate to the landing app directory:
   ```bash
   cd apps/landing
   ```

2. Link to a new Vercel project:
   ```bash
   vercel link
   ```
   - When prompted, select "Create a new project"
   - Project name: `reputraq-landing` (or any name you prefer)
   - Directory: `apps/landing`
   - Override settings: No (use existing vercel.json)

3. Deploy to production:
   ```bash
   vercel --prod
   ```

4. Configure the domain in Vercel Dashboard:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your `reputraq-landing` project
   - Go to **Settings** → **Domains**
   - Add domain: `reputraq.com`
   - Follow the DNS configuration instructions provided by Vercel

### Step 2: Deploy Web App (app.reputraq.com)

1. Navigate to the web app directory:
   ```bash
   cd apps/web
   ```

2. Link to a new Vercel project:
   ```bash
   vercel link
   ```
   - When prompted, select "Create a new project"
   - Project name: `reputraq-web` (or any name you prefer)
   - Directory: `apps/web`
   - Override settings: No (use existing vercel.json)

3. Deploy to production:
   ```bash
   vercel --prod
   ```

4. Configure the domain in Vercel Dashboard:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Select your `reputraq-web` project
   - Go to **Settings** → **Domains**
   - Add domain: `app.reputraq.com`
   - Follow the DNS configuration instructions provided by Vercel

### Step 3: Configure Environment Variables

For both projects, you may need to set environment variables in the Vercel Dashboard:

1. Go to your project in Vercel Dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add any required environment variables (e.g., `NEXT_PUBLIC_APP_URL`)

For the **landing app**, set:
- `NEXT_PUBLIC_APP_URL=https://app.reputraq.com` (points to the web app)

For the **web app**, set any required environment variables for your application.

## DNS Configuration

After adding domains in Vercel, you'll need to configure your DNS records:

1. **For reputraq.com (Landing App)**:
   - Add an A record pointing to Vercel's IP addresses, OR
   - Add a CNAME record pointing to Vercel's domain (recommended)

2. **For app.reputraq.com (Web App)**:
   - Add a CNAME record pointing to Vercel's domain

Vercel will provide specific DNS instructions when you add each domain in the dashboard.

## Continuous Deployment

Both projects are configured to automatically deploy when you push to the main branch:
- The `vercel.json` files include `git.deploymentEnabled.main: true`
- Make sure your repository is connected to Vercel in the project settings

## Troubleshooting

### Build Failures

If builds fail, check:
1. The build commands in `vercel.json` are correct for your monorepo structure
2. All dependencies are properly listed in `package.json`
3. The root directory is correctly set in Vercel project settings

### Domain Issues

If domains aren't working:
1. Verify DNS records are correctly configured (can take up to 48 hours to propagate)
2. Check SSL certificate status in Vercel Dashboard
3. Ensure the domain is properly added in Vercel project settings

### Monorepo Build Issues

The `vercel.json` files are configured to:
- Install dependencies from the monorepo root (`cd ../..`)
- Use pnpm workspace filters to build specific apps
- Ensure the lockfile is used (`--frozen-lockfile`)

If you encounter issues, verify:
- The root directory in Vercel project settings points to the monorepo root
- The build command correctly navigates to the monorepo root

## Quick Reference

```bash
# Landing App
cd apps/landing
vercel link
vercel --prod

# Web App
cd apps/web
vercel link
vercel --prod
```

## Notes

- Each app needs to be a separate Vercel project to use different domains
- The `.vercel` directory in each app folder stores the project link
- Environment variables should be set in the Vercel Dashboard for each project
- The landing app's `app-links.ts` is configured to use `https://app.reputraq.com` in production

