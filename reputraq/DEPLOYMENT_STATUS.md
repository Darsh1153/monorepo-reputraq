# Vercel Deployment Status

## ✅ Completed Steps

1. **Logged into Vercel** - Using account: darsh1153 (darsh19102002@gmail.com)
2. **Linked Landing App** - Project: `darsh1153s-projects/landing`
   - Project ID: `prj_CYw7b2feZdDlT0pWxLKeN0khMnYy`
   - Project URL: https://vercel.com/darsh1153s-projects/landing
3. **Linked Web App** - Project: `darsh1153s-projects/web`
   - Project ID: `prj_XiTdIbDbAOzjFjLG9j7dG78KHHvO`
   - Project URL: https://vercel.com/darsh1153s-projects/web

## ⚠️ Required: Update Root Directories

Both projects need their root directories updated to work with the monorepo structure. This must be done before deployment will succeed.

### Quick Fix via Dashboard:

1. **Landing App:**
   - Go to: https://vercel.com/darsh1153s-projects/landing/settings/general
   - Click on **"Build and Deployment"** in the left sidebar
   - Find **"Root Directory"** setting
   - Change from `.` to `apps/landing`
   - Click "Save"

2. **Web App:**
   - Go to: https://vercel.com/darsh1153s-projects/web/settings/general
   - Click on **"Build and Deployment"** in the left sidebar
   - Find **"Root Directory"** setting
   - Change from `.` to `apps/web`
   - Click "Save"

### Alternative: Via API Script

If you have a Vercel API token:
```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq
VERCEL_TOKEN=your_token_here ./update-both-projects.sh
```

Get your token from: https://vercel.com/account/tokens

## 📋 Next Steps After Root Directory Update

1. **Deploy Landing App:**
   ```bash
   cd apps/landing
   vercel --prod --yes
   ```

2. **Deploy Web App:**
   ```bash
   cd apps/web
   vercel --prod --yes
   ```

3. **Configure Domains:**
   - Landing App → Add domain: `reputraq.com`
   - Web App → Add domain: `app.reputraq.com`
   - Configure DNS records as instructed by Vercel

## 📝 Notes

- Both projects are properly linked to your Vercel account
- Build commands are correctly configured in `vercel.json` files
- The `app-links.ts` file is configured to use `https://app.reputraq.com` in production
- Once root directories are updated, deployments should succeed

