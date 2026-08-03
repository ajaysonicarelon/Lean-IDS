# npm Provenance Setup Guide

This guide explains how to enable npm provenance for supply chain security and package authenticity verification.

## What is npm Provenance?

npm provenance provides:
- **Authenticity**: Cryptographic proof of where packages were built
- **Transparency**: Public build logs and source verification
- **Trust**: Verifiable connection between source code and published package
- **Supply Chain Security**: Protection against package tampering

## Prerequisites

- npm 9.5.0 or later
- GitHub Actions (for automated provenance)
- Public repository (provenance requires public builds)

## How It Works

When you publish with `--provenance`:
1. npm generates a signed attestation linking the package to its source
2. The attestation includes:
   - Repository URL
   - Commit SHA
   - Build environment details
   - Timestamp
3. Attestation is stored on npm registry
4. Anyone can verify the package authenticity

## Manual Publishing with Provenance

### One-time setup
```bash
# Ensure npm is up to date
npm install -g npm@latest

# Verify version (must be 9.5.0+)
npm --version
```

### Publish with provenance
```bash
# Navigate to package
cd packages/components

# Build for production
npm run build

# Publish with provenance
npm publish --provenance --access public
```

**Note**: Manual publishing requires:
- Public repository
- Clean git state (no uncommitted changes)
- Valid npm authentication

## Automated Publishing with GitHub Actions

### Setup GitHub Actions Workflow

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      id-token: write # Required for provenance
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'

      - name: Install dependencies
        run: npm ci --legacy-peer-deps

      - name: Build packages
        run: |
          npm run build -w @ajaysoni7832/lean-ids-tokens
          npm run build -w @ajaysoni7832/lean-ids-components

      - name: Publish tokens package
        run: npm publish --provenance --access public
        working-directory: packages/tokens
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

      - name: Publish components package
        run: npm publish --provenance --access public
        working-directory: packages/components
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

### Required GitHub Secrets

Add to repository secrets (Settings → Secrets → Actions):

1. **NPM_TOKEN**
   - Generate at: https://www.npmjs.com/settings/YOUR_USERNAME/tokens
   - Type: **Automation** token
   - Permissions: **Read and write**

### Required Permissions

The workflow needs `id-token: write` permission for provenance attestation.

## Publishing to JFrog Artifactory

For internal Elevance Health JFrog Artifactory:

### Setup .npmrc
```bash
# In package directory
echo "registry=https://your-org.jfrog.io/artifactory/api/npm/npm-local/" > .npmrc
echo "//your-org.jfrog.io/artifactory/api/npm/npm-local/:_authToken=\${NPM_TOKEN}" >> .npmrc
```

### Publish to Artifactory
```bash
# Set token
export NPM_TOKEN="your-artifactory-token"

# Publish (provenance may not be supported on Artifactory)
npm publish --access public
```

**Note**: JFrog Artifactory may not support npm provenance. Check with your Artifactory admin.

## Verifying Provenance

### Verify a published package
```bash
# Install package
npm install @ajaysoni7832/lean-ids-components

# View provenance
npm audit signatures
```

Expected output:
```
audited 1 package in 0.5s

1 package has a verified registry signature

✓ @ajaysoni7832/lean-ids-components@1.7.6
  Provenance: https://github.com/ajaysonicarelon/Lean-IDS
  Commit: abc123...
  Build: https://github.com/ajaysonicarelon/Lean-IDS/actions/runs/123456
```

### View provenance on npm
Visit: `https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components`

Look for the **Provenance** section showing:
- ✅ Verified by GitHub
- Repository link
- Commit SHA
- Build workflow link

## Troubleshooting

### "Provenance generation failed"

**Cause**: Not running in supported CI environment

**Solution**: 
- Use GitHub Actions with `id-token: write` permission
- Or publish manually from a public repository

### "npm ERR! need auth"

**Cause**: Not authenticated to npm

**Solution**:
```bash
npm login
# Or set NPM_TOKEN environment variable
```

### "npm ERR! 403 Forbidden"

**Cause**: No publish permissions for package

**Solution**:
- Verify you're a maintainer: `npm owner ls @ajaysoni7832/lean-ids-components`
- Add yourself: `npm owner add USERNAME @ajaysoni7832/lean-ids-components`

### "Provenance not showing on npm"

**Cause**: Package published without `--provenance` flag

**Solution**:
- Republish with `--provenance` flag
- Or wait for next automated release

### "id-token permission denied"

**Cause**: Workflow missing required permission

**Solution**: Add to workflow:
```yaml
permissions:
  contents: read
  id-token: write
```

## Security Best Practices

1. ✅ **Always use provenance** for public packages
2. ✅ **Use automation tokens** (not personal tokens) in CI
3. ✅ **Rotate tokens regularly** (every 90 days)
4. ✅ **Limit token scope** to specific packages
5. ✅ **Enable 2FA** on npm account
6. ✅ **Review provenance** before installing packages
7. ⚠️ **Never commit tokens** to git
8. ⚠️ **Use GitHub Secrets** for sensitive data

## Pre-publish Checklist

Before publishing, ensure:

- [ ] Version bumped in package.json
- [ ] CHANGELOG.md updated
- [ ] All tests passing
- [ ] No uncommitted changes
- [ ] npm audit shows no vulnerabilities
- [ ] Build successful (`npm run build`)
- [ ] Provenance flag included (`--provenance`)
- [ ] Access set correctly (`--access public`)

## Publishing Workflow

### 1. Prepare Release
```bash
# Update version
npm version patch  # or minor, major

# Update CHANGELOG.md
# Commit changes
git add .
git commit -m "chore: release v1.7.7"
git push
```

### 2. Create GitHub Release
1. Go to GitHub → Releases → New Release
2. Tag: `v1.7.7`
3. Title: `v1.7.7`
4. Description: Copy from CHANGELOG.md
5. Click **Publish release**

### 3. Automated Publishing
- GitHub Actions workflow triggers automatically
- Builds packages with NODE_ENV=production
- Publishes with provenance
- Verifies signatures

### 4. Verify Publication
```bash
# Check npm
npm view @ajaysoni7832/lean-ids-components

# Verify provenance
npm audit signatures
```

## Resources

- [npm Provenance Documentation](https://docs.npmjs.com/generating-provenance-statements)
- [GitHub Actions OIDC](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
- [npm Audit Signatures](https://docs.npmjs.com/cli/v9/commands/npm-audit)

## Quick Reference

```bash
# Publish with provenance (manual)
npm publish --provenance --access public

# Verify provenance
npm audit signatures

# View package provenance
npm view @ajaysoni7832/lean-ids-components

# Check npm version
npm --version  # Must be 9.5.0+
```

---

**Last Updated**: July 28, 2026  
**Maintained By**: Ajay Soni (@ajaysonicarelon)
