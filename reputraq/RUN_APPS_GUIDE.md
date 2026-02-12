# How to Run the Apps - Complete Guide

## 📋 Overview

This monorepo contains two applications:
- **Landing App** (Port 3000) - Marketing/landing page
- **Web App** (Port 3001) - Main application with admin dashboard

---

## 🚀 Quick Start (Run Both Apps)

### From Monorepo Root:

```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq
pnpm install
pnpm dev
```

This will start:
- Landing app at: http://localhost:3000
- Web app at: http://localhost:3001

---

## 📱 Run Individual Apps

### Option 1: Run Landing App Only

```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq
pnpm dev:landing
```

**Access at:** http://localhost:3000

### Option 2: Run Web App Only (with Admin Dashboard)

```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq
pnpm dev:web
```

**Access at:** http://localhost:3001

---

## 🔐 Access Admin Dashboard

### Step 1: Ensure Admin User Exists

Before logging in, make sure the admin user is created in the database:

```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq/apps/web
pnpm create-admin
```

This creates an admin user with:
- **Email:** `admin@reputraq.com`
- **Password:** `admin123`

### Step 2: Start the Web App

```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq
pnpm dev:web
```

### Step 3: Login to Admin Dashboard

1. Open browser: http://localhost:3001/signin
2. Enter credentials:
   - **Email:** `admin@reputraq.com`
   - **Password:** `admin123`
3. After login, you'll be redirected to `/admin` (admin dashboard)

---

## 🗄️ Database Setup (If Not Already Done)

### Prerequisites

1. **PostgreSQL Database:**
   - Make sure you have a PostgreSQL database running
   - Get your database connection string

2. **Environment Variables:**
   Create `.env` file in `apps/web/`:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/reputraq"
   ```

### Setup Steps

```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq/apps/web

# Generate database migrations
pnpm db:generate

# Run migrations
pnpm db:migrate

# Create admin user
pnpm create-admin
```

---

## 📝 Available Scripts

### From Monorepo Root (`reputraq/`):

```bash
# Run both apps simultaneously
pnpm dev

# Run only landing app
pnpm dev:landing

# Run only web app
pnpm dev:web

# Build both apps
pnpm build
```

### From Web App Directory (`reputraq/apps/web/`):

```bash
# Development server (port 3001)
pnpm dev

# Production build
pnpm build

# Production server
pnpm start

# Database operations
pnpm db:generate    # Generate migrations
pnpm db:migrate     # Run migrations
pnpm db:studio      # Open Drizzle Studio (database GUI)

# Create admin user
pnpm create-admin
```

### From Landing App Directory (`reputraq/apps/landing/`):

```bash
# Development server (port 3000)
pnpm dev

# Production build
pnpm build

# Production server
pnpm start
```

---

## 🌐 Access Points

After starting the apps:

| App | URL | Description |
|-----|-----|-------------|
| Landing Page | http://localhost:3000 | Marketing/landing page |
| Web App | http://localhost:3001 | Main application |
| Sign In | http://localhost:3001/signin | Login page |
| Admin Dashboard | http://localhost:3001/admin | Admin panel (after login) |
| User Dashboard | http://localhost:3001/dashboard | User dashboard (after login) |

---

## 🔑 Default Login Credentials

### Admin User:
- **Email:** `admin@reputraq.com`
- **Password:** `admin123`
- **Role:** Admin
- **Access:** Admin dashboard at `/admin`

### Test User (if created):
- **Email:** `test@example.com`
- **Password:** `password123`
- **Role:** User
- **Access:** User dashboard at `/dashboard`

---

## 🛠️ Troubleshooting

### Issue: Port Already in Use

If you get "port already in use" error:

**For Landing App (port 3000):**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

**For Web App (port 3001):**
```bash
# Kill process on port 3001
lsof -ti:3001 | xargs kill -9
```

### Issue: Database Connection Error

1. Check your `DATABASE_URL` in `.env` file
2. Ensure PostgreSQL is running
3. Verify database credentials are correct

### Issue: Admin User Not Found

Run the create-admin script:
```bash
cd reputraq/apps/web
pnpm create-admin
```

### Issue: Dependencies Not Installed

Install dependencies:
```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq
pnpm install
```

---

## 📦 Package Manager

This project uses **pnpm** as the package manager. Make sure you have it installed:

```bash
npm install -g pnpm
```

---

## 🎯 Quick Reference

```bash
# 1. Install dependencies
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq
pnpm install

# 2. Setup database (if needed)
cd apps/web
pnpm db:migrate
pnpm create-admin

# 3. Run both apps
cd ../..
pnpm dev

# Or run individually:
pnpm dev:landing  # Landing at localhost:3000
pnpm dev:web      # Web app at localhost:3001
```

---

## 🔍 Verify Everything is Working

1. **Landing App:** Visit http://localhost:3000 → Should show landing page
2. **Web App:** Visit http://localhost:3001 → Should show home/signin page
3. **Admin Login:** 
   - Go to http://localhost:3001/signin
   - Login with `admin@reputraq.com` / `admin123`
   - Should redirect to `/admin` dashboard

---

## 📚 Additional Resources

- **Database Studio:** Run `pnpm db:studio` in `apps/web/` to open Drizzle Studio
- **API Routes:** Available at `http://localhost:3001/api/*`
- **Admin Routes:** Available at `http://localhost:3001/admin/*`
