# Deployment Checklist - v1.7.3

## Pre-Deployment Verification

### ✅ Code Changes Completed
- [x] Updated `Icon.tsx` with dynamic imports
- [x] Updated rollup config with external dependencies
- [x] Version bumped to 1.7.3
- [x] CHANGELOG.md updated
- [x] Documentation created (ICON_IMPORT_FIX.md, RELEASE_NOTES_1.7.3.md)

### ✅ Build Verification
```bash
cd packages/components
npm run build
```
**Expected:** Build completes successfully without EMFILE errors

### 🔍 Files Changed
```
packages/components/src/Icon/Icon.tsx
packages/components/package.json
packages/components/rollup.config.js
packages/components/CHANGELOG.md
packages/components/ICON_IMPORT_FIX.md
packages/components/RELEASE_NOTES_1.7.3.md
BUILD_FIX_SUMMARY.md
DEPLOYMENT_CHECKLIST.md
```

## Deployment Steps

### Step 1: Final Build & Test
```bash
cd packages/components
npm run build
```
- [ ] Build completes without errors
- [ ] No EMFILE warnings
- [ ] dist/ folder created with index.js and index.esm.js

### Step 2: Publish to npm
```bash
cd packages/components
npm publish
```
- [ ] Package published successfully
- [ ] Version 1.7.3 visible on npm

### Step 3: Update Dev Environment
```bash
# In your consuming application
npm install @ajaysoni7832/lean-ids-components@1.7.3
npm run build
```
- [ ] Installation successful
- [ ] Dev build completes without EMFILE errors
- [ ] Icons render correctly in the application

### Step 4: Deploy to Dev Server
```bash
# Deploy to dev environment
npm run deploy:dev  # or your deployment command
```
- [ ] Deployment successful
- [ ] No build errors in deployment logs
- [ ] Application loads correctly
- [ ] Icons render properly

### Step 5: Smoke Tests in Dev
- [ ] Navigate through application
- [ ] Verify icons display correctly
- [ ] Check console for errors
- [ ] Test Icon component with various names
- [ ] Test named exports (SearchIcon, SettingsIcon, etc.)
- [ ] Verify table components work (they use icons heavily)

### Step 6: Production Deployment
```bash
# Deploy to production
npm run deploy:prod  # or your deployment command
```
- [ ] Deployment successful
- [ ] Monitor build logs for any issues
- [ ] No EMFILE errors in production build

### Step 7: Post-Deployment Verification
- [ ] Production application loads
- [ ] Icons render correctly
- [ ] No console errors
- [ ] Monitor error tracking (Sentry, etc.) for any issues

## Rollback Plan

If issues occur:

### Option 1: Quick Rollback
```bash
npm install @ajaysoni7832/lean-ids-components@1.7.2
npm run build
npm run deploy
```

### Option 2: Emergency Fix
If rollback isn't feasible, increase file descriptor limit on server:
```bash
ulimit -n 65536
```

## Success Criteria

✅ **Build Success**
- No EMFILE errors during build
- Build completes in reasonable time (<10 minutes)

✅ **Runtime Success**
- All icons render correctly
- No console errors related to icons
- Application performance unchanged

✅ **Bundle Size**
- Bundle size should be smaller or similar to v1.7.2
- Check with: `npm run build && ls -lh dist/`

## Monitoring

After deployment, monitor for 24-48 hours:
- [ ] Error tracking dashboard (no new icon-related errors)
- [ ] Build logs (no EMFILE errors)
- [ ] User reports (no icon rendering issues)
- [ ] Performance metrics (no degradation)

## Communication

### Internal Team
- [ ] Notify dev team of deployment
- [ ] Share RELEASE_NOTES_1.7.3.md
- [ ] Update internal documentation

### External Users (if applicable)
- [ ] Publish release notes
- [ ] Update npm package description
- [ ] Notify in Slack/Teams channels

## Documentation Updates

- [ ] Update main README if needed
- [ ] Update Storybook if needed
- [ ] Update internal wiki/docs

## Sign-off

- [ ] Dev Lead Approval: _______________
- [ ] QA Verification: _______________
- [ ] Production Deployment: _______________
- [ ] Post-Deployment Verification: _______________

---

## Notes

**Deployment Date:** _____________
**Deployed By:** _____________
**Issues Encountered:** _____________
**Resolution:** _____________
