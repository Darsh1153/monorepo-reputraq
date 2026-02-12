# Quick Start Guide - How to Run the App

## 🚀 Step-by-Step Instructions

### Step 1: Install Dependencies (First Time Only)

```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq
pnpm install
```

This installs all dependencies for both apps.

### Step 2: Run the Apps

You have three options:

#### Option A: Run Both Apps Together (Recommended)

```bash
pnpm dev
```

This starts:
- **Landing App** → http://localhost:3000
- **Web App** → http://localhost:3001

#### Option B: Run Only the Web App (with Admin Dashboard)

```bash
pnpm dev:web
```

Access at: http://localhost:3001

#### Option C: Run Only the Landing App

```bash
pnpm dev:landing
```

Access at: http://localhost:3000

---

## 🔐 Access Admin Dashboard

### 1. Create Admin User (First Time Only)

```bash
cd apps/web
pnpm create-admin
```

This creates:
- **Email:** `admin@reputraq.com`
- **Password:** `admin123`

### 2. Start the Web App

```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq
pnpm dev:web
```

### 3. Login

1. Open browser: http://localhost:3001/signin
2. Enter:
   - Email: `admin@reputraq.com`
   - Password: `admin123`
3. You'll be redirected to `/admin` dashboard

---

## 📍 Access Points

| App | URL | What It Is |
|-----|-----|------------|
| Landing Page | http://localhost:3000 | Marketing website |
| Web App Home | http://localhost:3001 | Main application |
| Sign In | http://localhost:3001/signin | Login page |
| Admin Dashboard | http://localhost:3001/admin | Admin panel (after login) |
| User Dashboard | http://localhost:3001/dashboard | User dashboard (after login) |

---

## ⚡ Quick Commands Reference

```bash
# Install dependencies
pnpm install

# Run both apps
pnpm dev

# Run web app only
pnpm dev:web

# Run landing app only
pnpm dev:landing

# Create admin user
cd apps/web && pnpm create-admin
```

---

## 🛠️ Troubleshooting

### Port Already in Use?

**Kill process on port 3000:**
```bash
lsof -ti:3000 | xargs kill -9
```

**Kill process on port 3001:**
```bash
lsof -ti:3001 | xargs kill -9
```

### Dependencies Not Found?

```bash
cd /Users/darshan/Desktop/Founditup/monorepo-reputraq/reputraq
pnpm install
```

### Database Connection Error?

Make sure you have a `.env` file in `apps/web/` with:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/reputraq"
```

---

## ✅ Verify It's Working

1. **Landing App:** Visit http://localhost:3000 → Should show landing page
2. **Web App:** Visit http://localhost:3001 → Should show home/signin page
3. **Admin Login:** 
   - Go to http://localhost:3001/signin
   - Login with `admin@reputraq.com` / `admin123`
   - Should redirect to admin dashboard
