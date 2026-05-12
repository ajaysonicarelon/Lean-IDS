# Storybook Deployment Guide

## ✅ **Storybook Built Successfully!**

Your Storybook has been built with all the latest components and changes.

**Build Output:** `/Users/AM07832/CascadeProjects/lean-ids/storybook-static`

---

## 📦 **What's Included:**

### **New Components in Storybook:**
- ✅ PageLayout (3 variants)
- ✅ TopHeader
- ✅ SideNavigation
- ✅ Footer
- ✅ Brand
- ✅ MenuItem
- ✅ PageHeader
- ✅ Breadcrumb

### **Existing Components:**
- Button, Input, Checkbox, Radio, Toggle
- Chip, Badge, Avatar
- Table, Pagination
- Alert Banner, Toast, Inline Message
- And more...

### **Design Tokens:**
- Colors, Typography, Spacing
- Borders, Shadows, Breakpoints

---

## 🚀 **Deployment Options:**

### **Option 1: GitHub Pages (Recommended)**

#### **Setup:**
1. Create `.github/workflows/deploy-storybook.yml`:

```yaml
name: Deploy Storybook

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build Storybook
        run: npm run build-storybook
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

#### **Enable GitHub Pages:**
1. Go to GitHub repository settings
2. Navigate to "Pages"
3. Source: Deploy from a branch
4. Branch: `gh-pages` / `root`
5. Save

**URL:** `https://ajaysonicarelon.github.io/Lean-IDS/`

---

### **Option 2: Netlify**

#### **Method A: Drag & Drop**
1. Go to https://app.netlify.com/drop
2. Drag the `storybook-static` folder
3. Get instant URL

#### **Method B: Netlify CLI**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd /Users/AM07832/CascadeProjects/lean-ids
netlify deploy --prod --dir=storybook-static
```

#### **Method C: Continuous Deployment**
1. Connect repository to Netlify
2. Build command: `npm run build-storybook`
3. Publish directory: `storybook-static`

**URL:** `https://your-site-name.netlify.app`

---

### **Option 3: Vercel**

#### **Vercel CLI:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
cd /Users/AM07832/CascadeProjects/lean-ids
vercel --prod
```

#### **Configuration (vercel.json):**
```json
{
  "buildCommand": "npm run build-storybook",
  "outputDirectory": "storybook-static"
}
```

**URL:** `https://your-project.vercel.app`

---

### **Option 4: Chromatic (Storybook Official)**

```bash
# Install Chromatic
npm install --save-dev chromatic

# Deploy
npx chromatic --project-token=<your-token>
```

Get token from: https://www.chromatic.com/

**Benefits:**
- Visual regression testing
- Component review
- Automatic deployments
- Storybook hosting

---

### **Option 5: AWS S3 + CloudFront**

```bash
# Install AWS CLI
# Configure: aws configure

# Sync to S3
aws s3 sync storybook-static/ s3://your-bucket-name/ --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DIST_ID --paths "/*"
```

---

### **Option 6: Azure Static Web Apps**

```bash
# Install Azure CLI
# Login: az login

# Deploy
az staticwebapp create \
  --name lean-ids-storybook \
  --resource-group your-resource-group \
  --source storybook-static
```

---

### **Option 7: Self-Hosted (Internal Server)**

```bash
# Install serve globally
npm install -g serve

# Serve storybook
serve -s storybook-static -p 8080
```

**URL:** `http://your-server:8080`

---

## 📝 **Quick Deploy Scripts:**

### **Add to package.json:**

```json
{
  "scripts": {
    "deploy:netlify": "npm run build-storybook && netlify deploy --prod --dir=storybook-static",
    "deploy:vercel": "npm run build-storybook && vercel --prod",
    "deploy:chromatic": "npm run build-storybook && npx chromatic",
    "deploy:gh-pages": "npm run build-storybook && gh-pages -d storybook-static"
  }
}
```

---

## 🔧 **Recommended Setup:**

### **For Public Access:**
1. **GitHub Pages** - Free, easy, integrated with GitHub
2. **Netlify** - Free tier, custom domains, fast
3. **Vercel** - Free tier, excellent performance

### **For Internal/Enterprise:**
1. **Self-hosted** - Full control, internal network
2. **AWS S3 + CloudFront** - Scalable, secure
3. **Azure Static Web Apps** - Enterprise integration

---

## 📊 **Current Build Stats:**

- **Total Size:** ~886 KB (minified)
- **Gzip Size:** ~273 KB
- **Files:** 256+ assets
- **Components:** 30+ documented
- **Stories:** 50+ examples

---

## 🎯 **Next Steps:**

### **1. Choose Deployment Method**
Pick one of the options above based on your needs.

### **2. Deploy Storybook**
Follow the instructions for your chosen method.

### **3. Update Documentation**
Add Storybook URL to:
- README.md
- package.json (homepage field)
- Bitbucket repository description

### **4. Share with Team**
Send Storybook URL to developers and designers.

---

## 🚀 **Quick Deploy (Netlify):**

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
cd /Users/AM07832/CascadeProjects/lean-ids
netlify deploy --prod --dir=storybook-static
```

---

## 🔄 **Continuous Deployment:**

### **GitHub Actions (Recommended):**

Create `.github/workflows/deploy-storybook.yml`:

```yaml
name: Deploy Storybook

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install
        run: npm ci
        
      - name: Build
        run: npm run build-storybook
        
      - name: Deploy to Netlify
        uses: nwtgck/actions-netlify@v2
        with:
          publish-dir: './storybook-static'
          production-deploy: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

---

## 📞 **Support:**

### **Storybook Documentation:**
- https://storybook.js.org/docs/react/sharing/publish-storybook

### **Deployment Guides:**
- GitHub Pages: https://pages.github.com/
- Netlify: https://docs.netlify.com/
- Vercel: https://vercel.com/docs
- Chromatic: https://www.chromatic.com/docs/

---

## ✅ **Summary:**

- ✅ Storybook built successfully
- ✅ All new components included
- ✅ Ready to deploy
- ✅ Multiple deployment options available
- ✅ Continuous deployment setup available

**Choose a deployment method and your Storybook will be live!** 🎉
