---
description: Deploy a new version of Lean DS to NPM, GitHub, Bitbucket, and Storybook
---

# Lean DS Release Deployment Workflow

This workflow automates the complete deployment process for releasing a new version of Lean DS.

## Prerequisites

- [ ] You must be logged into NPM (`npm whoami` should show `ajaysoni7832`)
- [ ] All changes committed locally
- [ ] On the `main` branch
- [ ] Have write access to GitHub and Bitbucket repositories

## Step 1: Determine Version Number

Ask the user what version they want to release (e.g., `1.7.8`, `1.8.0`, `2.0.0`).

**Version format:** `MAJOR.MINOR.PATCH`
- **MAJOR:** Breaking changes
- **MINOR:** New features (backward compatible)
- **PATCH:** Bug fixes

## Step 2: Update Version Numbers

Update version in both packages:

```bash
# Update tokens package version
# Edit: /Users/AM07832/CascadeProjects/lean-ds/packages/tokens/package.json
# Change: "version": "X.X.X"

# Update components package version
# Edit: /Users/AM07832/CascadeProjects/lean-ds/packages/components/package.json
# Change: "version": "X.X.X"

# Update components dependency on tokens
# Edit: /Users/AM07832/CascadeProjects/lean-ds/packages/components/package.json
# Change: "@ajaysoni7832/lean-ids-tokens": "^X.X.X"
```

## Step 3: Update All Documentation

**Files to update:**
- ✅ Main README.md (root)
- ✅ Storybook updates.mdx
- ✅ RELEASE_NOTES.md (components)
- ✅ CHANGELOG.md (tokens)
- ✅ CHANGELOG.md (components)
- ✅ README.md (components package)
- ✅ GitHub Release Notes

### 3.1 Update Main README.md

**File:** `/Users/AM07832/CascadeProjects/lean-ds/README.md`

Update the version badges and latest version reference:

```markdown
# Lean DS - Design System

[![npm version](https://img.shields.io/npm/v/@ajaysoni7832/lean-ids-components.svg)](https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components)
[![npm downloads](https://img.shields.io/npm/dm/@ajaysoni7832/lean-ids-components.svg)](https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components)

## 📦 Latest Version: vX.X.X

[Update installation instructions if needed]
```

### 3.2 Update Components Package README

**File:** `/Users/AM07832/CascadeProjects/lean-ds/packages/components/README.md`

Update version references and what's new section:

```markdown
# @ajaysoni7832/lean-ids-components

Current Version: **X.X.X**

## What's New in vX.X.X

[Add brief summary of new features/components]

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components@X.X.X @ajaysoni7832/lean-ids-tokens@X.X.X
\`\`\`
```

### 3.3 Update Storybook updates.mdx

**File:** `/Users/AM07832/CascadeProjects/lean-ds/.storybook/updates.mdx`

Update in **3 locations**:
1. Line ~10: `const currentVersion = 'X.X.X';`
2. Line ~228: `const currentVersion = 'X.X.X';`
3. Line ~257: `<div className="stat-number">X.X.X</div>`
4. Line ~220: `<div className="message">Version X.X.X has been released...`
5. Line ~280: Add new version section with release notes

**Template for new version section:**
```mdx
## 🚀 Current Version

<div className="version-container">
  <div className="version-header">
    <div className="version-number">vX.X.X</div>
    <div className="version-date">[Current Date]</div>
  </div>
  <div className="version-content">
    
    <div className="change-section">
      <div className="change-title">
        <span className="change-icon">🎉</span>
        New Components
      </div>
      <ul className="change-list">
        <li className="change-item critical">
          <strong>ComponentName</strong> - Description
        </li>
      </ul>
    </div>

    <div className="change-section">
      <div className="change-title">
        <span className="change-icon">✨</span>
        Component Enhancements
      </div>
      <ul className="change-list">
        <li className="change-item">
          <strong>ComponentName</strong> - Description
        </li>
      </ul>
    </div>

    <div className="migration-note">
      <strong>📦 Installation</strong>
      <code>npm install @ajaysoni7832/lean-ids-components@X.X.X @ajaysoni7832/lean-ids-tokens@X.X.X</code>
    </div>

  </div>
</div>

---

## 📋 Previous Versions

[Keep existing content below]
```

### 3.4 Update Components RELEASE_NOTES.md

**File:** `/Users/AM07832/CascadeProjects/lean-ds/packages/components/RELEASE_NOTES.md`

Add new release section at the top:

```markdown
# Release Notes - Lean DS vX.X.X

**Release Date:** [Current Date]  
**Package:** `@ajaysoni7832/lean-ids-components`

---

## 🚀 What's New in vX.X.X

### 🎉 New Components
- **ComponentName** - Description with features

### ✨ Component Enhancements
- **ComponentName** - Description of improvements

### 🔧 Developer Experience
- Description of DX improvements

### 📚 Documentation
- Documentation updates

---

## 📦 Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components@X.X.X @ajaysoni7832/lean-ids-tokens@X.X.X
\`\`\`

---

[Keep previous versions below]
```

### 3.5 Update Tokens CHANGELOG.md

**File:** `/Users/AM07832/CascadeProjects/lean-ds/packages/tokens/CHANGELOG.md`

Add new version entry at the top:

```markdown
## [X.X.X] - YYYY-MM-DD

### 📦 Version Alignment

- **Version bump to X.X.X** to align with `@ajaysoni7832/lean-ids-components@X.X.X`
- [Describe any token changes, or state "No functional changes"]

### 🚀 [Category]
- List of changes

[Keep previous versions below]
```

### 3.6 Update Components CHANGELOG.md

**File:** `/Users/AM07832/CascadeProjects/lean-ds/packages/components/CHANGELOG.md`

Add new version entry at the top:

```markdown
## [X.X.X] - YYYY-MM-DD

### 🎉 New Components
- **ComponentName** - Description

### ✨ Enhancements
- **ComponentName** - Description of improvements

### 🐛 Bug Fixes
- **ComponentName** - Description of fix

### 📚 Documentation
- Updated README.md with vX.X.X
- Updated Storybook documentation

### 🔧 Technical
- Version alignment with tokens package

[Keep previous versions below]
```

## Step 4: Build Packages

// turbo
```bash
cd /Users/AM07832/CascadeProjects/lean-ds
npm run build -w @ajaysoni7832/lean-ids-tokens
```

// turbo
```bash
cd /Users/AM07832/CascadeProjects/lean-ds
npm run build -w @ajaysoni7832/lean-ids-components
```

## Step 5: Build Storybook

```bash
cd /Users/AM07832/CascadeProjects/lean-ds
npm run build-storybook
```

## Step 6: Run Pre-Deployment Validation

// turbo
```bash
cd /Users/AM07832/CascadeProjects/lean-ds
./scripts/pre-deploy-check.sh
```

**Expected:** All checks should pass. If there are failures, fix them before proceeding.

## Step 7: Commit and Push to GitHub

```bash
cd /Users/AM07832/CascadeProjects/lean-ds
git add -A
git commit -m "chore: release vX.X.X"
git push origin main
```

**Note:** This triggers GitHub Actions to auto-deploy Storybook to GitHub Pages.

## Step 8: Publish to NPM

**IMPORTANT:** Publish tokens FIRST, then components.

### 8.1 Publish Tokens

```bash
cd /Users/AM07832/CascadeProjects/lean-ds/packages/tokens
npm publish --access public --ignore-scripts
```

**Verify:** Check that tokens published successfully.

### 8.2 Publish Components

```bash
cd /Users/AM07832/CascadeProjects/lean-ds/packages/components
npm publish --access public --ignore-scripts
```

**Verify:** Check that components published successfully.

## Step 9: Trigger Artifactory Cache (Elevance Internal Registry)

Force Artifactory to fetch and cache the new versions immediately:

// turbo
```bash
cd /Users/AM07832/CascadeProjects/lean-ds
npm view @ajaysoni7832/lean-ids-tokens@X.X.X --registry=https://artifactory.elevancehealth.com/artifactory/api/npm/npm/
npm view @ajaysoni7832/lean-ids-components@X.X.X --registry=https://artifactory.elevancehealth.com/artifactory/api/npm/npm/
```

**Why this is needed:** Artifactory only fetches packages from public NPM on-demand. This step triggers the fetch immediately so internal users don't have to wait hours for the cache to update.

**Expected:** Both commands should display package information, confirming Artifactory has cached the new versions.

**Verify in Artifactory UI:**
- Tokens: https://artifactory.elevancehealth.com/ui/packages/npm:%2F%2F@ajaysoni7832%2Flean-ids-tokens/X.X.X
- Components: https://artifactory.elevancehealth.com/ui/packages/npm:%2F%2F@ajaysoni7832%2Flean-ids-components/X.X.X

## Step 10: Push to Bitbucket (Internal Elevance)

```bash
cd /Users/AM07832/CascadeProjects/lean-ds
git push bitbucket main
```

## Step 11: Update Storybook Repository

### 11.1 Copy Built Storybook

// turbo
```bash
cd /Users/AM07832/CascadeProjects/lean-ds
rsync -av --delete --exclude='.git' storybook-static/ /Users/AM07832/CascadeProjects/lean-ds-storybook/
```

### 11.2 Commit and Push Storybook Repo

```bash
cd /Users/AM07832/CascadeProjects/lean-ds-storybook
git add -A
git commit -m "chore: update Storybook to vX.X.X"
git pull origin main --rebase || git rebase --abort
git push origin main --force
```

## Step 12: Verification

Verify the deployment across all platforms:

### NPM Packages
// turbo
```bash
npm view @ajaysoni7832/lean-ids-tokens version
npm view @ajaysoni7832/lean-ids-components version
```

**Expected:** Both should show `X.X.X`

### GitHub
- Visit: https://github.com/ajaysonicarelon/Lean-IDS
- Check latest commit shows "chore: release vX.X.X"

### Bitbucket
- Visit: https://bitbucket.elevancehealth.com/users/am07832/repos/lean-ids/browse
- Check latest commit matches GitHub

### Storybook
- Visit: https://ajaysonicarelon.github.io/Lean-IDS/
- Check "About > Updates & Changelog" shows vX.X.X
- Verify new components appear in sidebar

### Storybook Repository
- Visit: https://github.com/ajaysonicarelon/lean-ds-storybook
- Check latest commit shows Storybook update

### Artifactory (Elevance Internal)
- Visit: https://artifactory.elevancehealth.com/ui/packages/npm:%2F%2F@ajaysoni7832%2Flean-ids-tokens/X.X.X
- Visit: https://artifactory.elevancehealth.com/ui/packages/npm:%2F%2F@ajaysoni7832%2Flean-ids-components/X.X.X
- Verify both packages show the new version

## Step 13: Post-Deployment

### Create GitHub Release (Optional)
1. Go to: https://github.com/ajaysonicarelon/Lean-IDS/releases/new
2. Tag: `vX.X.X`
3. Title: `Release vX.X.X`
4. Description: Copy from RELEASE_NOTES.md
5. Publish release

### Announce Release (Optional)
- Notify team via Slack/Email
- Share NPM package links
- Share Storybook link

## Troubleshooting

### NPM Publish Fails with Audit Error
**Solution:** Use `--ignore-scripts` flag to skip prepublishOnly audit

### Git Push Rejected
**Solution:** Pull latest changes first: `git pull origin main --rebase`

### Storybook Build Fails
**Solution:** Check for TypeScript errors, fix them, then rebuild

### Version Mismatch Error
**Solution:** Ensure tokens and components have matching versions

### Artifactory Not Showing New Version
**Problem:** New version published to NPM but not visible in Artifactory after several hours

**Solution:** Artifactory caches packages on-demand. Manually trigger the cache:
```bash
npm view @ajaysoni7832/lean-ids-tokens@X.X.X --registry=https://artifactory.elevancehealth.com/artifactory/api/npm/npm/
npm view @ajaysoni7832/lean-ids-components@X.X.X --registry=https://artifactory.elevancehealth.com/artifactory/api/npm/npm/
```

**Alternative:** Contact Artifactory admin to clear the cache or reduce cache TTL

## Quick Reference

**Repositories:**
- GitHub (Main): https://github.com/ajaysonicarelon/Lean-IDS
- Bitbucket (Internal): https://bitbucket.elevancehealth.com/users/am07832/repos/lean-ids/browse
- Storybook Repo: https://github.com/ajaysonicarelon/lean-ds-storybook
- Storybook Live: https://ajaysonicarelon.github.io/Lean-IDS/

**NPM Packages:**
- Tokens: https://www.npmjs.com/package/@ajaysoni7832/lean-ids-tokens
- Components: https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components

**Artifactory (Elevance Internal):**
- Base URL: https://artifactory.elevancehealth.com
- Registry: https://artifactory.elevancehealth.com/artifactory/api/npm/npm/

**NPM User:** ajaysoni7832

---

## Success Criteria

✅ Version updated in both package.json files  
✅ **All documentation updated:**
   - Main README.md (root)
   - Components README.md
   - Storybook updates.mdx
   - Components RELEASE_NOTES.md
   - Tokens CHANGELOG.md
   - Components CHANGELOG.md
✅ Packages built successfully  
✅ Pre-deployment checks passed  
✅ Committed and pushed to GitHub  
✅ Published to NPM (tokens first, then components)  
✅ Artifactory cache triggered for new versions  
✅ Pushed to Bitbucket  
✅ Storybook repository updated  
✅ All verification checks passed  
✅ GitHub Release created (optional)  

**Deployment Complete! 🎉**
