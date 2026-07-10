# Deployment Error Resolution - v1.7.3

## Error Summary
**Date:** July 10, 2026  
**Environment:** Production Deployment  
**Status:** Build Failed  

## Errors Identified

### 1. Module Load Failure (CRITICAL)
```
ERROR - Could not load /app/node_modules/@storysonrT832/leanids-components/node_modules/@mui/icons-material/chunks/node-DKJK3jUe.js
```

**Root Cause:** Dynamic import chunks not found or corrupted installation

### 2. Deprecated Packages (WARNING)
- `@react-email/*` packages deprecated
- `@babel/plugin-proposal-*` packages deprecated

### 3. Build Process Failed
```
subprocess exited with status 1
x build(s) failed!
```

## Resolution Steps

### Step 1: Clean Installation (PRIORITY 1)
```bash
# In the consuming application (NOT the lean-ids repo)
cd /path/to/consuming-app

# Remove all cached dependencies
rm -rf node_modules
rm -rf package-lock.json
rm -rf .next  # if using Next.js
rm -rf dist   # if exists

# Clear npm cache
npm cache clean --force

# Fresh install
npm install

# Rebuild
npm run build
```

### Step 2: Verify Package Versions
```bash
# Check installed versions
npm list @ajaysoni7832/lean-ids-components
npm list @mui/icons-material

# Should show:
# @ajaysoni7832/lean-ids-components@1.7.3
# @mui/icons-material@^9.0.0
```

### Step 3: Check Vite Configuration
If using Vite, update `vite.config.js` or `vite.config.ts`:

```javascript
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: [
      '@ajaysoni7832/lean-ids-components',
      '@mui/icons-material',
    ],
    exclude: []
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'styled-components']
  }
});
```

### Step 4: Update Package.json
Ensure correct peer dependencies:

```json
{
  "dependencies": {
    "@ajaysoni7832/lean-ids-components": "^1.7.3",
    "@mui/icons-material": "^9.0.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "styled-components": "^6.1.13"
  }
}
```

### Step 5: Fix Deprecated Packages
```bash
# Update Babel plugins
npm install --save-dev @babel/preset-env@latest
npm install --save-dev @babel/plugin-transform-class-properties@latest
npm install --save-dev @babel/plugin-transform-object-rest-spread@latest

# Remove deprecated packages
npm uninstall @babel/plugin-proposal-class-properties
npm uninstall @babel/plugin-proposal-object-rest-spread
```

## Alternative: Rollback to v1.7.2

If issues persist, temporarily rollback:

```bash
npm install @ajaysoni7832/lean-ids-components@1.7.2
npm run build
```

**Note:** This will bring back the EMFILE error, so only use as temporary measure.

## Debugging Commands

### Check Node Modules Structure
```bash
# Verify @mui/icons-material is installed
ls -la node_modules/@mui/icons-material/

# Check if chunks directory exists
ls -la node_modules/@ajaysoni7832/lean-ids-components/node_modules/@mui/icons-material/ 2>/dev/null || echo "No nested @mui/icons-material"
```

### Check for Duplicate Installations
```bash
# Find all @mui/icons-material installations
find node_modules -name "@mui" -type d

# Should only show ONE installation, not nested ones
```

### Verify Build Output
```bash
# Check if lean-ids-components has correct externals
cat node_modules/@ajaysoni7832/lean-ids-components/package.json | grep -A 5 "peerDependencies"
```

## Expected Results

### ✅ Success Indicators
- Build completes without errors
- No "Could not load" errors
- Application starts successfully
- Icons render correctly

### ❌ Failure Indicators
- "Could not load" errors persist
- "Module not found" errors
- Build fails with status 1

## Root Cause: Why This Happened

The error suggests that:

1. **Nested node_modules:** The consuming app may have installed `@mui/icons-material` inside `lean-ids-components/node_modules/` instead of at the root level
2. **Incorrect resolution:** Vite is trying to load chunks from the wrong location
3. **Cache corruption:** Previous builds may have cached incorrect paths

## Prevention

### In lean-ids-components package.json
Ensure `@mui/icons-material` is in `peerDependencies`, not `dependencies`:

```json
{
  "peerDependencies": {
    "@mui/icons-material": "^9.0.0"
  }
}
```

### In consuming application
Always install peer dependencies explicitly:

```bash
npm install @ajaysoni7832/lean-ids-components @mui/icons-material
```

## Tekton Pipeline Specific

If deploying via Tekton:

### Update Pipeline Task
```yaml
- name: clean-install
  script: |
    #!/bin/sh
    rm -rf node_modules package-lock.json
    npm cache clean --force
    npm ci --legacy-peer-deps
```

### Add Build Verification
```yaml
- name: verify-dependencies
  script: |
    #!/bin/sh
    npm list @ajaysoni7832/lean-ids-components
    npm list @mui/icons-material
    if [ $? -ne 0 ]; then
      echo "Dependency verification failed"
      exit 1
    fi
```

## Contact & Escalation

If issues persist after trying all steps:

1. **Collect logs:**
   ```bash
   npm run build > build.log 2>&1
   ```

2. **Check versions:**
   ```bash
   node --version
   npm --version
   ```

3. **Share:**
   - `build.log`
   - `package.json`
   - `package-lock.json`
   - `vite.config.js` (if using Vite)

## Status Tracking

- [ ] Clean install completed
- [ ] Vite config updated
- [ ] Deprecated packages fixed
- [ ] Build successful
- [ ] Deployment successful
- [ ] Icons rendering correctly

**Updated by:** _______________  
**Date:** _______________  
**Status:** _______________
