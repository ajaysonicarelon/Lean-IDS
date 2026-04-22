# 🚀 Lean IDS Deployment Workflow

## Quick Reference: Deploy in 3 Steps

### **Step 1: Run Pre-Deployment Check** ✅
```bash
npm run pre-deploy-check
```

**What it checks:**
- ✅ Version consistency between packages
- ✅ Package names and scopes
- ✅ Build artifacts exist
- ✅ Storybook organization
- ✅ Documentation sync
- ✅ Git status
- ✅ NPM login and published versions
- ✅ GitHub workflows

**If it fails:** Fix the errors shown and run again.

---

### **Step 2: Deploy to GitHub** 📤
```bash
git add -A
git commit -m "chore: release v1.2.0"
git push origin main
```

**This triggers:**
- ✅ GitHub Actions CI/CD
- ✅ Storybook build and deployment to GitHub Pages
- ✅ Automated tests

---

### **Step 3: Publish to NPM** 📦
```bash
# Publish tokens first (components depends on it)
cd packages/tokens
npm publish --access public

# Then publish components
cd ../components
npm publish --access public
```

**Verify:**
```bash
npm view @ajaysoni7832/lean-ids-tokens
npm view @ajaysoni7832/lean-ids-components
```

---

## 📋 Before You Start Checklist

### 1. **Decide Version Bump**
- **Patch (1.2.X)**: Bug fixes only
- **Minor (1.X.0)**: New features, backward compatible
- **Major (X.0.0)**: Breaking changes

### 2. **Update Version Numbers**
Edit both files:
- `packages/tokens/package.json` → `"version": "1.2.0"`
- `packages/components/package.json` → `"version": "1.2.0"`
- `packages/components/package.json` → Update tokens dependency version

### 3. **Build Packages**
```bash
# Build tokens
cd packages/tokens && npm run build

# Build components
cd ../components && npm run build

# Build storybook
cd ../.. && npm run build-storybook
```

### 4. **Test Locally**
```bash
# Run storybook locally
npm run storybook

# Verify all components appear correctly
# Check fonts are loading
# Test all interactive features
```

---

## 🔄 Complete Workflow Diagram

```
┌─────────────────────────────────────────────────────────┐
│  1. Make Changes                                        │
│     - Update components                                 │
│     - Fix bugs                                          │
│     - Add features                                      │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  2. Update Versions                                     │
│     - packages/tokens/package.json                      │
│     - packages/components/package.json                  │
│     - Update dependency versions                        │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  3. Build Everything                                    │
│     npm run build                                       │
│     npm run build-storybook                             │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  4. Run Pre-Deployment Check                            │
│     npm run pre-deploy-check                            │
│                                                          │
│     ❌ FAILS? → Fix issues and run again                │
│     ✅ PASSES? → Continue                               │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  5. Commit & Push to GitHub                             │
│     git add -A                                          │
│     git commit -m "chore: release v1.2.0"               │
│     git push origin main                                │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  6. Wait for GitHub Actions                             │
│     - CI tests run                                      │
│     - Storybook builds                                  │
│     - Deploys to GitHub Pages                           │
│                                                          │
│     Check: github.com/ajaysonicarelon/Lean-IDS/actions  │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  7. Publish to NPM                                      │
│     cd packages/tokens                                  │
│     npm publish --access public                         │
│                                                          │
│     cd ../components                                    │
│     npm publish --access public                         │
└────────────────┬────────────────────────────────────────┘
                 │
                 ▼
┌─────────────────────────────────────────────────────────┐
│  8. Verify Deployment                                   │
│     ✅ NPM: npm view @ajaysoni7832/lean-ids-tokens      │
│     ✅ NPM: npm view @ajaysoni7832/lean-ids-components  │
│     ✅ Pages: ajaysonicarelon.github.io/Lean-IDS/       │
└─────────────────────────────────────────────────────────┘
```

---

## 🚨 Troubleshooting Guide

### Problem: Pre-deployment check fails

**Solution:**
1. Read the error message carefully
2. Fix the specific issue mentioned
3. Run `npm run pre-deploy-check` again
4. Repeat until all checks pass

### Problem: Version already published

**Error:**
```
You cannot publish over the previously published versions: 1.2.0
```

**Solution:**
```bash
# Bump version in both package.json files
# tokens: 1.2.0 → 1.2.1 (or 1.3.0)
# components: 1.2.0 → 1.2.1 (or 1.3.0)

# Rebuild
npm run build

# Run check again
npm run pre-deploy-check
```

### Problem: GitHub Pages deployment fails

**Error:**
```
Error: Creating Pages deployment failed
Error: HttpError: Not Found
```

**Solution:**
1. Go to: https://github.com/ajaysonicarelon/Lean-IDS/settings/pages
2. Under "Build and deployment"
3. Set **Source** to: **"GitHub Actions"**
4. Save
5. Re-run the failed workflow

### Problem: NPM authentication error

**Error:**
```
npm error code ENEEDAUTH
```

**Solution:**
```bash
# Login to NPM
npm login

# Username: ajaysoni7832
# Follow prompts

# Verify
npm whoami
# Should output: ajaysoni7832
```

### Problem: Package name error

**Error:**
```
npm error code EPRIVATE
npm error This package has been marked as private
```

**Solution:**
- Make sure you're in the package directory (not root)
- Check package.json doesn't have `"private": true`
- Use correct package directory:
  - `cd packages/tokens` OR
  - `cd packages/components`

---

## 📝 Version History Template

Keep this updated in your CHANGELOG.md:

```markdown
# Changelog

## [1.2.0] - 2026-04-22

### Added
- Automatic font loading for Elevance Sans
- HelpingText component with Figma design
- Pagination component stories
- Pre-deployment validation script
- STORYBOOK_GUIDELINES.md

### Changed
- Updated HelpingText to match Figma specifications
- Standardized all Storybook story titles
- Improved Angular font loading documentation

### Fixed
- Font import instructions for Angular projects
- Storybook component organization

## [1.1.0] - 2026-04-XX

### Added
- Initial scoped package release
- ...
```

---

## 🎯 Best Practices

### ✅ DO:
- Always run `npm run pre-deploy-check` before deploying
- Bump versions in both packages simultaneously
- Test locally before pushing
- Write meaningful commit messages
- Update CHANGELOG.md with each release
- Verify deployment after publishing

### ❌ DON'T:
- Skip the pre-deployment check
- Publish from the root directory
- Publish without building first
- Use different versions for tokens and components
- Forget to update dependency versions
- Push without committing version bumps

---

## 🔗 Quick Links

- **Repository**: https://github.com/ajaysonicarelon/Lean-IDS
- **Storybook**: https://ajaysonicarelon.github.io/Lean-IDS/
- **NPM Tokens**: https://www.npmjs.com/package/@ajaysoni7832/lean-ids-tokens
- **NPM Components**: https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components
- **GitHub Actions**: https://github.com/ajaysonicarelon/Lean-IDS/actions
- **GitHub Pages Settings**: https://github.com/ajaysonicarelon/Lean-IDS/settings/pages

---

## 📞 Need Help?

If you encounter issues not covered here:
1. Check `PRE_DEPLOYMENT_CHECKLIST.md` for detailed checks
2. Review `STORYBOOK_GUIDELINES.md` for component standards
3. Check GitHub Actions logs for build errors
4. Verify NPM package settings

---

**Remember:** The pre-deployment check is your friend! It catches 99% of issues before they become problems. 🛡️
