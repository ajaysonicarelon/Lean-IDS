# NPM Package Publishing Guide

## 🚀 Publishing Lean IDS to NPM

---

## 📋 Prerequisites

### 1. **NPM Account**
- Create account at: https://www.npmjs.com/signup
- Or login if you already have one

### 2. **Login to NPM**
```bash
npm login
```

You'll be prompted for:
- **Username:** Your npm username
- **Password:** Your npm password
- **Email:** Your npm email
- **OTP:** Two-factor authentication code (if enabled)

### 3. **Verify Login**
```bash
npm whoami
```

Should display your npm username.

---

## 📦 Packages to Publish

### 1. **@ajaysoni7832/lean-ids-components** (v1.2.0)
- React components for Lean IDS
- Main package with all UI components

### 2. **@ajaysoni7832/lean-ids-tokens** (v1.2.0)
- Design tokens (colors, spacing, fonts)
- Required by components package

---

## 🔨 Build & Publish Process

### **Step 1: Build All Packages**
```bash
cd /Users/AM07832/CascadeProjects/lean-ids

# Build all packages
npm run build
```

### **Step 2: Publish Tokens First**
```bash
# Tokens must be published first (components depend on it)
cd packages/tokens

# Check package before publishing
npm pack --dry-run

# Publish to npm
npm publish --access public
```

### **Step 3: Publish Components**
```bash
cd ../components

# Check package before publishing
npm pack --dry-run

# Publish to npm
npm publish --access public
```

---

## ⚙️ Publishing Options

### **Public Package (Recommended)**
```bash
npm publish --access public
```

### **Private Package (Requires paid npm account)**
```bash
npm publish --access restricted
```

### **Dry Run (Test without publishing)**
```bash
npm publish --dry-run
```

---

## 🔄 Version Update Process

### **Current Versions:**
- Components: `1.2.0`
- Tokens: `1.2.0`

### **To Update Version:**

#### **Patch Update (1.2.0 → 1.2.1)**
```bash
cd packages/components
npm version patch
```

#### **Minor Update (1.2.0 → 1.3.0)**
```bash
npm version minor
```

#### **Major Update (1.2.0 → 2.0.0)**
```bash
npm version major
```

---

## ✅ Pre-Publish Checklist

Before publishing, verify:

- [ ] Logged in to npm (`npm whoami`)
- [ ] All packages built (`npm run build`)
- [ ] No build errors
- [ ] Version numbers updated (if needed)
- [ ] Repository URLs point to Bitbucket ✅
- [ ] Package.json files are correct
- [ ] README files exist
- [ ] License is correct

---

## 📝 Complete Publishing Script

```bash
#!/bin/bash

# Navigate to project root
cd /Users/AM07832/CascadeProjects/lean-ids

# 1. Login to npm (if not already logged in)
npm login

# 2. Build all packages
echo "Building packages..."
npm run build

# 3. Publish tokens (must be first)
echo "Publishing tokens..."
cd packages/tokens
npm publish --access public

# 4. Publish components
echo "Publishing components..."
cd ../components
npm publish --access public

echo "✅ All packages published successfully!"
```

Save this as `publish.sh` and run:
```bash
chmod +x publish.sh
./publish.sh
```

---

## 🔍 Verify Published Packages

After publishing, check:

### **NPM Website:**
- https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components
- https://www.npmjs.com/package/@ajaysoni7832/lean-ids-tokens

### **Install Test:**
```bash
# Create test directory
mkdir /tmp/test-lean-ids
cd /tmp/test-lean-ids

# Initialize package.json
npm init -y

# Install your packages
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens

# Verify installation
ls node_modules/@ajaysoni7832/
```

---

## ⚠️ Common Issues

### **Issue 1: 401 Unauthorized**
```
npm error code E401
npm error 401 Unauthorized
```

**Solution:**
```bash
npm logout
npm login
```

### **Issue 2: Package Already Exists**
```
npm error code E403
npm error 403 Forbidden - PUT https://registry.npmjs.org/@ajaysoni7832/lean-ids-components
```

**Solution:** Update version number
```bash
npm version patch
npm publish --access public
```

### **Issue 3: Missing Build Files**
```
npm error Missing: dist/index.js
```

**Solution:** Build before publishing
```bash
npm run build
npm publish --access public
```

### **Issue 4: Scope Not Found**
```
npm error code E404
npm error 404 Not Found - PUT https://registry.npmjs.org/@ajaysoni7832/lean-ids-components
```

**Solution:** Use `--access public` flag
```bash
npm publish --access public
```

---

## 📊 Package Information

### **@ajaysoni7832/lean-ids-components**
```json
{
  "name": "@ajaysoni7832/lean-ids-components",
  "version": "1.2.0",
  "description": "React components for Lean IDS design system",
  "main": "dist/index.js",
  "repository": "https://bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git"
}
```

### **@ajaysoni7832/lean-ids-tokens**
```json
{
  "name": "@ajaysoni7832/lean-ids-tokens",
  "version": "1.2.0",
  "description": "Design tokens for Lean IDS",
  "main": "dist/index.js",
  "repository": "https://bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git"
}
```

---

## 🎯 Quick Commands

### **Login:**
```bash
npm login
```

### **Build:**
```bash
npm run build
```

### **Publish Tokens:**
```bash
cd packages/tokens && npm publish --access public
```

### **Publish Components:**
```bash
cd packages/components && npm publish --access public
```

### **Check Published:**
```bash
npm view @ajaysoni7832/lean-ids-components
npm view @ajaysoni7832/lean-ids-tokens
```

---

## 🎉 After Publishing

Once published, users can install your packages:

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens
```

And use them:

```tsx
import { Button, Input, PageLayout } from '@ajaysoni7832/lean-ids-components';
import { theme } from '@ajaysoni7832/lean-ids-tokens';
```

---

## 📞 Support

### **NPM Documentation:**
- https://docs.npmjs.com/cli/v10/commands/npm-publish

### **Troubleshooting:**
- https://docs.npmjs.com/troubleshooting

### **Package Access:**
- https://docs.npmjs.com/about-public-packages

---

## ✨ Summary

**Steps to publish:**
1. ✅ Login to npm: `npm login`
2. ✅ Build packages: `npm run build`
3. ✅ Publish tokens: `cd packages/tokens && npm publish --access public`
4. ✅ Publish components: `cd packages/components && npm publish --access public`
5. ✅ Verify on npmjs.com

**Your packages will now be available on npm with Bitbucket repository links!** 🚀
