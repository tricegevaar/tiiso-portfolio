# 🚀 Deploy Your Portfolio to Vercel

## Method 1: Deploy via Vercel Website (Recommended)

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" 
3. Choose "Continue with GitHub" (recommended)
4. Authorize Vercel to access your GitHub

### Step 2: Push to GitHub
1. Create a new repository on GitHub:
   - Go to [github.com](https://github.com)
   - Click "New repository"
   - Name it: `tiiso-portfolio` or similar
   - Make it Public
   - Don't initialize with README (you already have one)

2. Push your code to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/tiiso-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Deploy on Vercel
1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
5. Click "Deploy"

### Step 4: Custom Domain (Optional)
1. After deployment, go to Project Settings
2. Click "Domains"
3. Add your custom domain (if you have one)

---

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Login to Vercel
```bash
vercel login
```

### Step 3: Deploy
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- What's your project's name? `tiiso-portfolio`
- In which directory is your code located? `./`

### Step 4: Production Deployment
```bash
vercel --prod
```

---

## 🎯 Expected Results

After deployment, you'll get:
- **Live URL**: `https://tiiso-portfolio.vercel.app` (or similar)
- **Automatic HTTPS**: SSL certificate included
- **Global CDN**: Fast loading worldwide
- **Automatic deployments**: Updates when you push to GitHub

---

## 🔧 Troubleshooting

### Build Errors
If you get build errors:
1. Check that all dependencies are in `package.json`
2. Run `npm run build` locally first
3. Fix any TypeScript errors

### Environment Variables
If you need environment variables:
1. Go to Vercel Dashboard → Project → Settings → Environment Variables
2. Add any required variables

### Custom Domain Issues
1. Make sure DNS is pointing to Vercel
2. Wait for DNS propagation (up to 24 hours)

---

## 📱 Post-Deployment Checklist

✅ **Test all functionality:**
- Navigation works
- WhatsApp widget opens correctly
- Email links work
- Live demo buttons work
- Mobile responsiveness

✅ **SEO Optimization:**
- Update meta tags in `app/layout.tsx`
- Add favicon
- Test page speed

✅ **Analytics (Optional):**
- Add Google Analytics
- Set up Vercel Analytics

---

## 🎉 Your Portfolio Will Be Live!

Once deployed, your portfolio will be accessible worldwide with:
- ⚡ Lightning-fast loading
- 📱 Perfect mobile experience  
- 🔒 Secure HTTPS
- 🌍 Global CDN distribution
- 🔄 Automatic updates from GitHub

Share your live portfolio URL with potential employers and clients! 🚀