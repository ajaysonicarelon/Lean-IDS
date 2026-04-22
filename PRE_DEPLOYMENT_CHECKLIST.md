# 🚀 Pre-Deployment Checklist for Lean IDS

This checklist ensures all packages, versions, documentation, and configurations are properly synced before deploying to GitHub and NPM.

## 📋 Complete Checklist

### Phase 1: Version Management ✅

- [ ] **1.1 Check Current Versions**
  ```bash
  # Check tokens version
  cat packages/tokens/package.json | grep version
  
  # Check components version
  cat packages/components/package.json | grep version
  ```

- [ ] **1.2 Verify Version Consistency**
  - [ ] Both packages have the same version number
  - [ ] Components package.json references correct tokens version in dependencies
  - [ ] Version follows semantic versioning (MAJOR.MINOR.PATCH)

- [ ] **1.3 Decide Version Bump**
  - [ ] **PATCH (x.x.X)**: Bug fixes, minor updates
  - [ ] **MINOR (x.X.0)**: New features, backward compatible
  - [ ] **MAJOR (X.0.0)**: Breaking changes

### Phase 2: Package Names & Scopes ✅

- [ ] **2.1 Verify Package Names**
  ```bash
  # Should be: @ajaysoni7832/lean-ids-tokens
  grep '"name"' packages/tokens/package.json
  
  # Should be: @ajaysoni7832/lean-ids-components
  grep '"name"' packages/components/package.json
  ```

- [ ] **2.2 Check All Import Statements**
  ```bash
  # Search for old package names
  grep -r "@lean-ids" packages/
  grep -r "lean-ids-tokens" packages/ --exclude-dir=node_modules
  grep -r "lean-ids-components" packages/ --exclude-dir=node_modules
  ```

- [ ] **2.3 Verify Storybook Documentation**
  - [ ] Check `.storybook/react-guide.mdx` for correct package names
  - [ ] Check `.storybook/angular-guide.mdx` for correct package names
  - [ ] Check `packages/components/src/Introduction.mdx` for correct imports

### Phase 3: Build Verification ✅

- [ ] **3.1 Clean Previous Builds**
  ```bash
  rm -rf packages/tokens/dist
  rm -rf packages/components/dist
  rm -rf storybook-static
  ```

- [ ] **3.2 Build Tokens Package**
  ```bash
  cd packages/tokens
  npm run build
  # Verify fonts.css is copied to dist
  ls -la dist/fonts.css
  ```

- [ ] **3.3 Build Components Package**
  ```bash
  cd packages/components
  npm run build
  # Check for critical errors (warnings are okay)
  ```

- [ ] **3.4 Build Storybook**
  ```bash
  npm run build-storybook
  # Verify storybook-static folder exists
  ls -la storybook-static
  ```

### Phase 4: Storybook Organization ✅

- [ ] **4.1 Check Story Titles**
  ```bash
  # All component stories should use 'Components/' prefix
  grep -r "title:" packages/components/src --include="*.stories.tsx"
  ```

- [ ] **4.2 Verify Story Files Exist**
  - [ ] All components have `.stories.tsx` files
  - [ ] HelpingText has story file
  - [ ] Pagination has story file
  - [ ] No numbered prefixes (e.g., '3. Components/')

### Phase 5: Documentation Sync ✅

- [ ] **5.1 Font Loading Documentation**
  - [ ] `packages/tokens/FONTS_README.md` exists
  - [ ] `packages/tokens/src/fonts.css` exists
  - [ ] Angular guide has font import instructions
  - [ ] React guide mentions GlobalStyles

- [ ] **5.2 README Files**
  - [ ] Root README.md has correct package names
  - [ ] NPM_PUBLISHING_GUIDE.md has correct scope
  - [ ] STORYBOOK_GUIDELINES.md exists

- [ ] **5.3 Package.json Files**
  - [ ] Repository URLs are correct
  - [ ] Homepage URLs are correct
  - [ ] License is specified
  - [ ] Keywords are relevant

### Phase 6: Git Status ✅

- [ ] **6.1 Check Working Directory**
  ```bash
  git status
  # Ensure no unexpected files
  ```

- [ ] **6.2 Review Changes**
  ```bash
  git diff
  # Review all changes before committing
  ```

- [ ] **6.3 Check Branch**
  ```bash
  git branch
  # Should be on 'main' branch
  ```

### Phase 7: NPM Registry Check ✅

- [ ] **7.1 Check NPM Login**
  ```bash
  npm whoami
  # Should return: ajaysoni7832
  ```

- [ ] **7.2 Check Published Versions**
  ```bash
  npm view @ajaysoni7832/lean-ids-tokens version
  npm view @ajaysoni7832/lean-ids-components version
  # New version should be higher than published
  ```

- [ ] **7.3 Verify Package Access**
  ```bash
  npm access list packages
  # Verify you have access to both packages
  ```

### Phase 8: GitHub Pages Setup ✅

- [ ] **8.1 Verify GitHub Pages Enabled**
  - Visit: https://github.com/ajaysonicarelon/Lean-IDS/settings/pages
  - Source should be: "GitHub Actions"

- [ ] **8.2 Check Workflow Files**
  ```bash
  ls -la .github/workflows/
  # Should have: ci.yml, deploy.yml
  ```

- [ ] **8.3 Verify Workflow Permissions**
  - Check `.github/workflows/deploy.yml` has:
    - `pages: write`
    - `id-token: write`

---

## 🤖 Automated Pre-Deployment Script

Run this script before every deployment:

```bash
./scripts/pre-deploy-check.sh
```

This will automatically verify:
- ✅ Version consistency
- ✅ Package names
- ✅ Build success
- ✅ Story file organization
- ✅ Documentation sync
- ✅ Git status

---

## 📝 Deployment Commands (After Checklist Passes)

### Step 1: Commit and Push to GitHub
```bash
git add -A
git commit -m "chore: release v1.2.0"
git push origin main
```

### Step 2: Publish to NPM
```bash
# Publish tokens first (components depends on it)
cd packages/tokens
npm publish --access public

# Then publish components
cd ../components
npm publish --access public
```

### Step 3: Verify Deployment
```bash
# Check NPM
npm view @ajaysoni7832/lean-ids-tokens
npm view @ajaysoni7832/lean-ids-components

# Check GitHub Pages (wait 2-3 minutes after push)
# Visit: https://ajaysonicarelon.github.io/Lean-IDS/
```

---

## 🚨 Common Issues & Solutions

### Issue 1: Version Already Published
**Error:** `You cannot publish over the previously published versions`

**Solution:**
```bash
# Bump version in both package.json files
# tokens/package.json
# components/package.json
# Then rebuild and try again
```

### Issue 2: Package Name Mismatch
**Error:** `EPRIVATE: This package has been marked as private`

**Solution:**
- Ensure you're in the package directory (not root)
- Check package.json doesn't have `"private": true`

### Issue 3: GitHub Pages 404
**Error:** `Creating Pages deployment failed`

**Solution:**
- Enable GitHub Pages in repository settings
- Set source to "GitHub Actions"

### Issue 4: Storybook Stories Not Showing
**Problem:** Components missing from Storybook sidebar

**Solution:**
- Ensure `.stories.tsx` file exists
- Check title format: `'Components/ComponentName'`
- No numbered prefixes

### Issue 5: Font Not Loading
**Problem:** Elevance Sans font not displaying

**Solution:**
- Verify `fonts.css` in tokens dist folder
- Check GlobalStyles imports fonts.css
- For Angular: Add manual import to styles.css

---

## 📊 Version History Template

Keep track of releases:

```markdown
## v1.2.0 (2026-04-22)
### Added
- Automatic font loading for Elevance Sans
- HelpingText component stories
- Pagination component stories
- STORYBOOK_GUIDELINES.md

### Changed
- Updated HelpingText to match Figma design
- Standardized all story titles under 'Components/'

### Fixed
- Font import instructions for Angular
```

---

## ✅ Final Pre-Deployment Command

Before running deployment commands, execute:

```bash
# Run automated checks
npm run pre-deploy-check

# If all checks pass, proceed with deployment
# If any check fails, fix the issue and run again
```
