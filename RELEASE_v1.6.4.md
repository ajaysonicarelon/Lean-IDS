# Release v1.6.4 - Deployment Guide

**Date:** July 1, 2026  
**Version:** 1.6.4  
**Status:** ✅ Ready to Deploy

---

## 📋 Pre-Deployment Checklist

- [x] All bugs fixed (4/4)
- [x] All components audited (19/19)
- [x] Documentation updated
- [x] Version bumped to 1.6.4
- [x] Build completed successfully
- [x] CHANGELOG.md created
- [ ] Git commit and push
- [ ] NPM publish
- [ ] Deploy Storybook

---

## 🚀 Deployment Commands

### **Step 1: Git Commit & Push**

```bash
# Navigate to project root
cd /Users/AM07832/CascadeProjects/lean-ids

# Check git status
git status

# Add all changes
git add .

# Commit with descriptive message
git commit -m "Release v1.6.4: Bug fixes, component audit, and UI improvements

- Fixed critical TableToolbar useState import bug
- Added prop validation warnings for Button and MetricCard
- Improved SideNavigation pin/unpin icons (filled vs outlined)
- Added spacing in Footer feedback section
- Audited and documented all 19 components
- Updated AI_GUIDELINES.md with complete component API reference
- Created COMPONENT_API_AUDIT.md and CHANGELOG.md"

# Push to remote
git push origin main
```

### **Step 2: Create Git Tag**

```bash
# Create annotated tag
git tag -a v1.6.4 -m "Release v1.6.4 - Bug fixes and component audit"

# Push tag to remote
git push origin v1.6.4
```

### **Step 3: Publish to NPM**

```bash
# Navigate to components package
cd packages/components

# Login to npm (if not already logged in)
npm login

# Publish package
npm publish --access public

# Verify publication
npm view @ajaysoni7832/lean-ids-components version
```

### **Step 4: Deploy Storybook** (Optional)

```bash
# Navigate back to root
cd /Users/AM07832/CascadeProjects/lean-ids

# Build Storybook
npm run build-storybook

# Deploy to your hosting service (e.g., Netlify, Vercel, GitHub Pages)
# Example for GitHub Pages:
# npm install -g gh-pages
# gh-pages -d storybook-static
```

---

## 📦 What's Included in This Release

### **Bug Fixes:**
1. ✅ TableToolbar - Added missing `useState` import
2. ✅ Button - Added prop validation for `label` and `icon`
3. ✅ MetricCard - Added prop validation for `label`
4. ✅ Table - Verified column structure is correct

### **UI Improvements:**
1. ✅ SideNavigation - Better pin/unpin icons (filled vs outlined)
2. ✅ Footer - Proper spacing between text and link

### **Documentation:**
1. ✅ AI_GUIDELINES.md - Complete component API reference
2. ✅ COMPONENT_API_AUDIT.md - Technical audit of 19 components
3. ✅ CHANGELOG.md - Release notes
4. ✅ DEV_REPORTED_BUGS.md - Bug tracking
5. ✅ COMPLETE_FIX_SUMMARY.md - Comprehensive summary

### **Files Modified:**
- `packages/components/package.json` - Version bump
- `packages/components/src/Table/TableToolbar.tsx` - useState fix
- `packages/components/src/Button/Button.tsx` - Prop validation
- `packages/components/src/MetricCard/MetricCard.tsx` - Prop validation
- `packages/components/src/SideNavigation/SideNavigation.tsx` - Icon improvements
- `packages/components/src/Footer/Footer.tsx` - Spacing fix
- `packages/components/src/Footer/Footer.styles.ts` - Gap styling
- `AI_GUIDELINES.md` - Component examples
- `CHANGELOG.md` - New file
- Multiple audit/summary docs

---

## 🔍 Verification Steps

### **After NPM Publish:**

```bash
# Create a test project
mkdir test-lean-ids-1.6.4
cd test-lean-ids-1.6.4
npm init -y

# Install the new version
npm install @ajaysoni7832/lean-ids-components@1.6.4

# Verify version
npm list @ajaysoni7832/lean-ids-components

# Test imports
node -e "const { Button, MetricCard } = require('@ajaysoni7832/lean-ids-components'); console.log('✅ Import successful');"
```

### **Test in Browser:**

```jsx
import { Button, MetricCard, SideNavigation } from '@ajaysoni7832/lean-ids-components';

// Test Button with wrong props (should show warning in dev mode)
<Button label="Test" />  // Should warn: use children instead

// Test MetricCard with wrong props (should show warning in dev mode)
<MetricCard label="Test" value="123" />  // Should warn: use metricName instead

// Test correct usage
<Button>Click Me</Button>  // ✅ Correct
<MetricCard metricName="Users" value="1,234" />  // ✅ Correct
```

---

## 📞 Post-Deployment

### **Notify Team:**
- Send email/Slack message about new release
- Link to CHANGELOG.md
- Highlight breaking changes (none in this release)
- Share migration guide if needed

### **Monitor:**
- Check npm download stats
- Monitor for bug reports
- Watch for GitHub/Bitbucket issues
- Check Sentry/error tracking

### **Update Documentation:**
- Update README if needed
- Update Storybook deployment
- Update internal wiki/docs

---

## 🎉 Success Criteria

- ✅ NPM package published successfully
- ✅ Version 1.6.4 visible on npm registry
- ✅ Git tag created and pushed
- ✅ Storybook deployed (if applicable)
- ✅ Team notified
- ✅ No critical issues reported in first 24 hours

---

## 🆘 Rollback Plan (If Needed)

If critical issues are discovered:

```bash
# Unpublish the version (within 72 hours)
npm unpublish @ajaysoni7832/lean-ids-components@1.6.4

# Or deprecate it
npm deprecate @ajaysoni7832/lean-ids-components@1.6.4 "Critical bug found, use 1.6.3 instead"

# Revert git changes
git revert v1.6.4
git push origin main
```

---

**Prepared by:** Windsurf AI  
**Date:** July 1, 2026  
**Status:** 🟢 Ready for Production
