# GitHub Branch Protection Setup Guide

This document provides step-by-step instructions for configuring branch protection rules on GitHub to enhance security and code quality.

## Why Branch Protection?

Branch protection prevents:
- Direct commits to production branches
- Unreviewed code from being merged
- Bypassing CI/CD checks
- Accidental force pushes
- Unauthorized changes

## Setup Instructions

### 1. Navigate to Branch Protection Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Branches**
3. Under "Branch protection rules", click **Add rule**

### 2. Configure Protection for `main` Branch

#### Basic Settings
- **Branch name pattern**: `main`
- ✅ **Require a pull request before merging**
  - ✅ Require approvals: **1** (minimum)
  - ✅ Dismiss stale pull request approvals when new commits are pushed
  - ✅ Require review from Code Owners (if CODEOWNERS file exists)
  - ⬜ Require approval of the most recent reviewable push

#### Status Checks
- ✅ **Require status checks to pass before merging**
  - ✅ Require branches to be up to date before merging
  - **Required checks** (select these):
    - `security / Run npm audit`
    - `security / Check for vulnerabilities in components`
    - `security / Check for vulnerabilities in tokens`
    - `lint-and-type-check / Lint`
    - `lint-and-type-check / Type check`
    - `build / Build packages`
    - `analyze / Analyze Code (javascript)`
    - `analyze / Analyze Code (typescript)`

#### Additional Settings
- ✅ **Require conversation resolution before merging**
- ✅ **Require signed commits** (optional, see GPG setup guide)
- ✅ **Require linear history** (prevents merge commits)
- ✅ **Include administrators** (apply rules to admins too)
- ✅ **Restrict who can push to matching branches**
  - Add: Repository maintainers only
- ⬜ Allow force pushes (keep disabled)
- ⬜ Allow deletions (keep disabled)

### 3. Configure Protection for `develop` Branch

Repeat the same settings as `main`, but with slightly relaxed rules:

- **Branch name pattern**: `develop`
- ✅ Require a pull request before merging
  - Require approvals: **1**
- ✅ Require status checks to pass before merging
  - Same required checks as `main`
- ✅ Require conversation resolution before merging
- ⬜ Require signed commits (optional)
- ⬜ Require linear history (optional for develop)
- ✅ Include administrators

### 4. Configure Protection for Release Branches

For branches matching `release/*`:

- **Branch name pattern**: `release/*`
- ✅ Require a pull request before merging
  - Require approvals: **2** (higher for releases)
- ✅ Require status checks to pass before merging
- ✅ Require conversation resolution before merging
- ✅ Require signed commits
- ✅ Include administrators
- ✅ Restrict who can push to matching branches

## Verification

After setup, verify by attempting to:

1. ❌ **Direct push to main** → Should be blocked
2. ❌ **Merge PR without approval** → Should be blocked
3. ❌ **Merge PR with failing checks** → Should be blocked
4. ✅ **Merge PR with approval + passing checks** → Should succeed

## Testing Branch Protection

```bash
# This should fail (direct push to main)
git checkout main
git commit -m "test" --allow-empty
git push origin main
# Expected: Error - protected branch

# This should work (via PR)
git checkout -b feature/test
git commit -m "test" --allow-empty
git push origin feature/test
# Then create PR on GitHub
```

## Recommended CODEOWNERS File

Create `.github/CODEOWNERS` to automatically request reviews:

```
# Default owners for everything
*                           @ajaysonicarelon

# Component owners
/packages/components/       @ajaysonicarelon
/packages/tokens/           @ajaysonicarelon
/packages/angular-components/ @ajaysonicarelon

# Security-sensitive files
/SECURITY.md                @ajaysonicarelon
/.github/workflows/         @ajaysonicarelon
/package.json               @ajaysonicarelon
/packages/*/package.json    @ajaysonicarelon

# Documentation
*.md                        @ajaysonicarelon
```

## Troubleshooting

### "Required status check is not available"

If a required check doesn't appear:
1. Run the workflow at least once
2. Wait for GitHub to register the check
3. Refresh the branch protection settings page

### "Cannot enable branch protection"

Ensure you have:
- Admin access to the repository
- At least one commit on the branch
- The branch exists

### "Checks are not running"

Verify:
- Workflow files are in `.github/workflows/`
- Workflows are enabled in Settings → Actions
- Branch triggers match your branch name

## Security Best Practices

1. **Never bypass protection rules** - Even for "quick fixes"
2. **Review all PRs thoroughly** - Don't rubber-stamp approvals
3. **Keep checks up to date** - Add new checks as needed
4. **Monitor failed checks** - Investigate all failures
5. **Regular audits** - Review protection rules quarterly

## Related Documentation

- [GitHub Branch Protection Docs](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches)
- [CODEOWNERS Documentation](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)
- [Signed Commits Guide](./GPG_SIGNED_COMMITS_SETUP.md)

## Checklist

- [ ] Branch protection enabled for `main`
- [ ] Branch protection enabled for `develop`
- [ ] Branch protection enabled for `release/*`
- [ ] Required status checks configured
- [ ] Require pull request reviews enabled
- [ ] Require conversation resolution enabled
- [ ] Include administrators enabled
- [ ] CODEOWNERS file created
- [ ] Tested branch protection (attempted direct push)
- [ ] Documented in team wiki/handbook

---

**Last Updated**: July 28, 2026  
**Maintained By**: Ajay Soni (@ajaysonicarelon)
