# Update Root Directories for Vercel Projects

Both projects need their root directories updated to work with the monorepo structure.

## Option 1: Via Vercel Dashboard (Easiest)

1. **Landing App:**
   - Visit: https://vercel.com/darsh1153s-projects/landing/settings/general
   - Find "Root Directory" setting
   - Change from `.` to `apps/landing`
   - Save

2. **Web App:**
   - Visit: https://vercel.com/darsh1153s-projects/web/settings/general
   - Find "Root Directory" setting
   - Change from `.` to `apps/web`
   - Save

## Option 2: Via API (Requires Token)

1. Get your Vercel token from: https://vercel.com/account/tokens
2. Run: `VERCEL_TOKEN=your_token ./update-both-projects.sh`

## Project IDs:
- Landing: prj_CYw7b2feZdDlT0pWxLKeN0khMnYy
- Web: prj_XiTdIbDbAOzjFjLG9j7dG78KHHvO
