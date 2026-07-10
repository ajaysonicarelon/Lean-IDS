# Final Deployment Checklist - v1.7.3

## ✅ Pre-Deployment (COMPLETED)

### Build Verification
- [x] **Tokens built** - Success (601ms)
- [x] **Components built** - Success (5.3s)  
- [x] **Storybook built** - Success (9.68s)
- [x] All dist files generated
- [x] No build errors

### Code Changes
- [x] Icon.tsx - Dynamic imports implemented
- [x] Unused dependencies removed
- [x] rollup.config.js updated
- [x] package.json versions bumped to 1.7.3
- [x] CHANGELOG.md updated
- [x] Documentation created

### Quality Checks
- [x] No breaking changes
- [x] All imports verified safe
- [x] No wildcard imports (except fixed one)
- [x] Dependencies cleaned up
- [x] Build tested successfully

---

## 📋 Deployment Steps (TO DO)

### Step 1: Run Deployment Script

**Option A: Automated (Recommended)**
```bash
cd /Users/AM07832/CascadeProjects/lean-ids
./deploy-v1.7.3.sh
```

The script will:
1. ✅ Verify builds
2. ✅ Check git status
3. ✅ Create git tag v1.7.3
4. ✅ Publish tokens to npm
5. ✅ Publish components to npm
6. ✅ Push to GitHub
7. ✅ Push to Bitbucket
8. ✅ Guide Storybook deployment

**Option B: Manual Steps**

If you prefer manual control, follow these steps:

---

### Step 2: Publish to npm

#### 2a. Publish Tokens
```bash
cd packages/tokens
npm publish
```

**Expected output:**
```
+ @ajaysoni7832/lean-ids-tokens@1.7.3
```

#### 2b. Publish Components
```bash
cd packages/components
npm publish
```

**Expected output:**
```
+ @ajaysoni7832/lean-ids-components@1.7.3
```

**Verify on npm:**
- https://www.npmjs.com/package/@ajaysoni7832/lean-ids-tokens
- https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components

---

### Step 3: Git Operations

#### 3a. Commit Changes (if not already)
```bash
cd /Users/AM07832/CascadeProjects/lean-ids
git add .
git commit -m "Release v1.7.3: Fix EMFILE build error and cleanup dependencies"
```

#### 3b. Create Tag
```bash
git tag -a v1.7.3 -m "v1.7.3: Critical build fix and dependency cleanup"
```

#### 3c. Push to GitHub
```bash
git push origin main
git push origin v1.7.3
```

**Verify:**
- https://github.com/ajaysonicarelon/Lean-IDS/releases

#### 3d. Push to Bitbucket
```bash
git push bitbucket main
git push bitbucket v1.7.3
```

**Verify:**
- https://bitbucket.elevancehealth.com/users/am07832/repos/lean-ids/browse

---

### Step 4: Deploy Storybook

#### 4a. Locate Storybook Repo
```bash
# Navigate to your storybook repo
cd /path/to/lean-ids-storybook
```

#### 4b. Copy Built Storybook
```bash
# Copy from main repo
cp -r /Users/AM07832/CascadeProjects/lean-ids/storybook-static/* .
```

#### 4c. Commit and Push
```bash
git add .
git commit -m "Update Storybook for v1.7.3 - Icon import fix"
git push origin main
```

**Storybook will auto-deploy to:**
- https://github.com/ajaysonicarelon/lean-ids-storybook

**Verify deployment:**
- Check Netlify/Vercel dashboard
- Visit live Storybook URL

---

## 📝 Post-Deployment Verification

### npm Verification
- [ ] Visit https://www.npmjs.com/package/@ajaysoni7832/lean-ids-tokens
  - [ ] Version shows 1.7.3
  - [ ] Published timestamp is recent
- [ ] Visit https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components
  - [ ] Version shows 1.7.3
  - [ ] Published timestamp is recent

### GitHub Verification
- [ ] Visit https://github.com/ajaysonicarelon/Lean-IDS
  - [ ] Latest commit shows v1.7.3 changes
  - [ ] Tag v1.7.3 exists
  - [ ] Release notes visible

### Bitbucket Verification
- [ ] Visit https://bitbucket.elevancehealth.com/users/am07832/repos/lean-ids/browse
  - [ ] Latest commit shows v1.7.3 changes
  - [ ] Tag v1.7.3 exists

### Storybook Verification
- [ ] Visit live Storybook URL
  - [ ] Loads without errors
  - [ ] All components render
  - [ ] Icons display correctly
  - [ ] No console errors

---

## 💬 Notify Dev Team

### Message Template

```
🚀 Lean IDS v1.7.3 Released!

Critical build fix is now available.

**What's Fixed:**
✅ EMFILE build error (production builds now succeed)
✅ Removed unused dependencies (cleaner, faster)
✅ Zero breaking changes (drop-in replacement)

**Update Now:**
npm install @ajaysoni7832/lean-ids-components@1.7.3

**For Dev Team:**
1. Clean install recommended:
   rm -rf node_modules package-lock.json
   npm install

2. Build and deploy:
   npm run build
   npm run deploy

**Documentation:**
- Release Notes: [link to RELEASE_NOTES_1.7.3.md]
- Icon Fix Details: [link to ICON_IMPORT_FIX.md]
- Full Changelog: [link to CHANGELOG.md]

Questions? Contact [your name/team]
```

---

## 🎯 Success Criteria

### Critical (Must Pass)
- [ ] npm packages published successfully
- [ ] GitHub updated with v1.7.3
- [ ] Bitbucket updated with v1.7.3
- [ ] Storybook deployed and accessible

### Important (Should Pass)
- [ ] Dev team notified
- [ ] Documentation accessible
- [ ] No errors in Storybook
- [ ] Icons render correctly

### Nice to Have
- [ ] README updated (has encoding issue, can fix later)
- [ ] Release notes on GitHub
- [ ] Social media announcement (if applicable)

---

## 🔄 Rollback Plan (If Needed)

If critical issues are discovered:

### Quick Rollback
```bash
# Unpublish from npm (within 72 hours)
npm unpublish @ajaysoni7832/lean-ids-components@1.7.3
npm unpublish @ajaysoni7832/lean-ids-tokens@1.7.3

# Or deprecate
npm deprecate @ajaysoni7832/lean-ids-components@1.7.3 "Use v1.7.2 instead"
```

### Revert Git
```bash
git revert v1.7.3
git push origin main
```

---

## 📊 Deployment Timeline

**Estimated Time:** 15-20 minutes

1. npm publish (2 min)
2. Git operations (3 min)
3. Storybook deployment (5 min)
4. Verification (5 min)
5. Team notification (5 min)

---

## ✅ Final Sign-Off

- [ ] All builds successful
- [ ] All packages published
- [ ] All repos updated
- [ ] Storybook deployed
- [ ] Team notified
- [ ] Documentation complete

**Deployed by:** _______________  
**Date:** July 10, 2026  
**Time:** _______________  
**Status:** _______________

---

## 🚀 Ready to Deploy!

Everything is prepared and tested. You can now:

1. **Run the automated script:**
   ```bash
   ./deploy-v1.7.3.sh
   ```

2. **Or follow manual steps above**

Good luck with the deployment! 🎉
