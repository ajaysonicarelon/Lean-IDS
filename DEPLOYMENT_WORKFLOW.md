# 🚀 Lean IDS Deployment Workflow

Complete step-by-step guide for deploying new versions of Lean IDS to NPM, GitHub, Bitbucket, and Storybook.

---

## 📋 Pre-Deployment Checklist

### **Step 1: Run Pre-Deployment Validation**

```bash
./scripts/pre-deploy-check.sh
```

This script validates **9 critical phases**:

1. ✅ **Version Management** - Tokens & Components versions match
2. ✅ **Package Names & Scopes** - Correct NPM package names
3. ✅ **Build Verification** - Both packages built successfully
4. ✅ **Storybook Organization** - Story files properly organized
5. ✅ **Documentation Sync** - All docs up to date
6. ✅ **Git Status** - On main branch, all changes committed
7. ✅ **NPM Registry Check** - Logged in, new version not published
8. ✅ **GitHub Workflows** - CI/CD workflows exist
9. ✅ **Storybook Documentation** - Version updates in Storybook docs

---

## 📝 Documentation Updates (BEFORE Deployment)

### **1. Update Storybook Updates Page**

**File:** `.storybook/updates.mdx`

Update the version in **TWO places**:

```javascript
// Line 10
const currentVersion = '1.7.7'; // ← Update this

// Line 228
const currentVersion = '1.7.7'; // ← Update this too
```

Add release notes to the updates page with the new version details.

### **2. Update Release Notes**

**File:** `packages/components/RELEASE_NOTES.md`

Add a new section at the top:

```markdown
# Release Notes - Lean IDS v1.7.7

**Release Date:** [Current Date]  
**Package:** `@ajaysoni7832/lean-ids-components`

---

## 🎉 What's New

### ✨ New Features
- Feature 1
- Feature 2

### 🐛 Bug Fixes
- Fix 1
- Fix 2

### 📚 Documentation
- Doc update 1
- Doc update 2

---
```

### **3. Update Changelog**

**File:** `packages/tokens/CHANGELOG.md`

Add a new version entry:

```markdown
## [1.7.7] - 2026-08-03

### Changes
- Change 1
- Change 2

**Recommended pairing:** `lean-ids-components@1.7.7` + `lean-ids-tokens@1.7.7`
```

### **4. Bump Version Numbers**

Update version in **BOTH** package.json files:

```bash
# packages/tokens/package.json
{
  "version": "1.7.7"
}

# packages/components/package.json
{
  "version": "1.7.7",
  "dependencies": {
    "@ajaysoni7832/lean-ids-tokens": "^1.7.7"
  }
}
```

---

## 🔨 Build & Validate

### **Step 2: Build All Packages**

```bash
# Build tokens
npm run build -w @ajaysoni7832/lean-ids-tokens

# Build components
npm run build -w @ajaysoni7832/lean-ids-components

# Build Storybook
npm run build-storybook
```

### **Step 3: Run Pre-Deployment Check Again**

```bash
./scripts/pre-deploy-check.sh
```

Ensure **ALL checks pass** before proceeding.

---

## 🚀 Deployment Process

### **Step 4: Commit All Changes**

```bash
git add -A
git commit -m "chore: release v1.7.7"
```

### **Step 5: Push to GitHub (Main Repo)**

```bash
git push origin main
```

**What happens automatically:**
- ✅ GitHub Actions CI runs security checks
- ✅ GitHub Actions builds Storybook
- ✅ Storybook auto-deploys to GitHub Pages
- ✅ Storybook available at: https://ajaysonicarelon.github.io/Lean-IDS/

### **Step 6: Publish to NPM**

**IMPORTANT:** Publish tokens FIRST, then components.

```bash
# 1. Publish tokens
cd packages/tokens
npm publish --access public

# 2. Publish components
cd ../components
npm publish --access public

# 3. Return to root
cd ../..
```

### **Step 7: Push to Bitbucket (Internal Elevance)**

```bash
git push bitbucket main
```

**Bitbucket Repository:**
- URL: https://bitbucket.elevancehealth.com/users/am07832/repos/lean-ids/browse
- Remote: `https://bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git`

---

## 🔍 Verification

### **Step 8: Verify Deployment**

1. **NPM Packages Published:**
   ```bash
   npm view @ajaysoni7832/lean-ids-tokens version
   npm view @ajaysoni7832/lean-ids-components version
   ```

2. **Storybook Deployed:**
   - Visit: https://ajaysonicarelon.github.io/Lean-IDS/
   - Check "About > Updates & Changelog" shows new version

3. **GitHub Repository:**
   - Visit: https://github.com/ajaysonicarelon/Lean-IDS
   - Check latest commit is visible

4. **Bitbucket Repository:**
   - Visit: https://bitbucket.elevancehealth.com/users/am07832/repos/lean-ids/browse
   - Check latest commit is synced

---

## 📊 Complete Deployment Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ 1. UPDATE DOCUMENTATION                                     │
│    • .storybook/updates.mdx (lines 10 & 228)               │
│    • packages/components/RELEASE_NOTES.md                   │
│    • packages/tokens/CHANGELOG.md                           │
│    • Bump versions in package.json files                    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 2. BUILD & VALIDATE                                         │
│    • npm run build (tokens & components)                    │
│    • npm run build-storybook                                │
│    • ./scripts/pre-deploy-check.sh                          │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 3. COMMIT & PUSH TO GITHUB                                  │
│    • git add -A && git commit -m "chore: release v1.x.x"   │
│    • git push origin main                                   │
│    ✅ Triggers Storybook auto-deploy                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 4. PUBLISH TO NPM                                           │
│    • cd packages/tokens && npm publish --access public      │
│    • cd ../components && npm publish --access public        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 5. SYNC TO BITBUCKET                                        │
│    • git push bitbucket main                                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ 6. VERIFY                                                   │
│    • Check NPM packages published                           │
│    • Check Storybook deployed                               │
│    • Check GitHub & Bitbucket synced                        │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Quick Command Reference

```bash
# Complete deployment in one go (after docs are updated)
./scripts/pre-deploy-check.sh && \
git add -A && \
git commit -m "chore: release v1.7.7" && \
git push origin main && \
cd packages/tokens && npm publish --access public && \
cd ../components && npm publish --access public && \
cd ../.. && \
git push bitbucket main
```

---

## ⚠️ Important Notes

1. **Version Consistency:** Tokens and Components must have the same version number
2. **Publish Order:** ALWAYS publish tokens before components
3. **Documentation First:** Update all docs BEFORE pushing to GitHub
4. **Storybook Auto-Deploy:** Happens automatically on push to main
5. **NPM Login:** Ensure you're logged in as `ajaysoni7832` before publishing

---

## 🔗 Repository Links

- **GitHub (Public):** https://github.com/ajaysonicarelon/Lean-IDS
- **Bitbucket (Internal):** https://bitbucket.elevancehealth.com/users/am07832/repos/lean-ids/browse
- **Storybook (Live):** https://ajaysonicarelon.github.io/Lean-IDS/
- **NPM Tokens:** https://www.npmjs.com/package/@ajaysoni7832/lean-ids-tokens
- **NPM Components:** https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components

---

## 🆘 Troubleshooting

### Pre-deployment check fails?
- Review the error messages
- Fix issues one by one
- Re-run the script until all checks pass

### NPM publish fails?
- Check you're logged in: `npm whoami`
- Check version not already published: `npm view @ajaysoni7832/lean-ids-tokens version`
- Ensure you have publish permissions

### Storybook not deploying?
- Check GitHub Actions: https://github.com/ajaysonicarelon/Lean-IDS/actions
- Ensure deploy.yml workflow exists
- Check GitHub Pages settings in repository

### Bitbucket push fails?
- Check remote is configured: `git remote -v`
- Add if missing: `git remote add bitbucket https://bitbucket.elevancehealth.com/scm/~am07832/lean-ids.git`
- Check credentials are valid

---

## 📞 Support

For issues or questions:
- Email: ajay@carelon.com
- GitHub Issues: https://github.com/ajaysonicarelon/Lean-IDS/issues
