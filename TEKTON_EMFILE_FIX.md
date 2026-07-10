# Tekton EMFILE Error - Complete Fix Guide

## 🔴 Problem Analysis

### Error:
```
Could not load /app/node_modules/@ajaysoni7832/lean-ids-components/node_modules/@mui/icons-material/index.mjs
EMFILE: too many open files
```

### Root Cause:
Vite's build process is trying to load `@mui/icons-material/index.mjs` (the barrel export that contains ALL 2000+ icons), causing the file descriptor limit to be exceeded in the Tekton container.

---

## ✅ Solution 1: Fix Vite Configuration (REQUIRED)

The dev team MUST add this to their `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  // CRITICAL: Prevent Vite from pre-bundling Material Icons
  optimizeDeps: {
    include: [
      '@mui/material',
      '@ajaysoni7832/lean-ids-components',
      '@ajaysoni7832/lean-ids-tokens'
    ],
    exclude: [
      '@mui/icons-material'  // Don't pre-bundle icons
    ]
  },
  
  build: {
    rollupOptions: {
      output: {
        // Chunk Material Icons separately
        manualChunks(id) {
          if (id.includes('@mui/icons-material')) {
            return 'mui-icons';
          }
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  
  // CRITICAL: Handle dynamic imports properly
  resolve: {
    dedupe: ['react', 'react-dom', '@mui/material']
  }
});
```

---

## ✅ Solution 2: Update Tekton Task (REQUIRED)

Add ulimit increase to the Tekton Task:

```yaml
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: build-frontend
spec:
  steps:
    - name: build
      image: node:18-alpine
      script: |
        #!/bin/sh
        set -e
        
        # CRITICAL: Increase file descriptor limit
        ulimit -n 10000
        
        echo "File descriptor limit: $(ulimit -n)"
        
        # Install dependencies
        yarn install --frozen-lockfile
        
        # Build application
        yarn build
      
      # Allow ulimit changes
      securityContext:
        runAsNonRoot: false
        capabilities:
          add:
            - SYS_RESOURCE
```

---

## ✅ Solution 3: Alternative - Use Custom Docker Image

If Tekton doesn't allow ulimit changes, build a custom image:

### Dockerfile:
```dockerfile
FROM node:18-alpine

# Increase file descriptor limits at system level
RUN echo "* soft nofile 10000" >> /etc/security/limits.conf && \
    echo "* hard nofile 10000" >> /etc/security/limits.conf && \
    echo "root soft nofile 10000" >> /etc/security/limits.conf && \
    echo "root hard nofile 10000" >> /etc/security/limits.conf

# Set ulimit in shell
RUN echo "ulimit -n 10000" >> /etc/profile

WORKDIR /app

# Default command
CMD ["sh", "-c", "ulimit -n 10000 && yarn install && yarn build"]
```

### Use in Tekton:
```yaml
steps:
  - name: build
    image: your-registry/node-high-ulimit:18
    script: |
      #!/bin/sh
      yarn install
      yarn build
```

---

## ✅ Solution 4: Optimize Package Installation

Add to Tekton Task to reduce concurrent file operations:

```yaml
steps:
  - name: install
    script: |
      #!/bin/sh
      ulimit -n 10000
      
      # Use Yarn with reduced concurrency
      yarn install --frozen-lockfile --network-concurrency 8
      
  - name: build
    script: |
      #!/bin/sh
      ulimit -n 10000
      yarn build
```

---

## 🧪 Testing Locally

Before deploying to Tekton, test locally:

```bash
# 1. Simulate low file limit
ulimit -n 256

# 2. Try to build (should fail)
yarn build

# 3. Increase limit
ulimit -n 10000

# 4. Try again (should succeed)
yarn build
```

---

## 📊 Why This Happens

### The Chain of Events:

1. **Lean IDS v1.7.3** uses dynamic imports:
   ```typescript
   import(`@mui/icons-material/${name}`)
   ```

2. **Vite's optimizer** sees the dynamic import pattern

3. **Vite tries to analyze** what icons might be needed

4. **Vite loads** `@mui/icons-material/index.mjs` to understand exports

5. **index.mjs contains** references to ALL 2000+ icon files

6. **Vite tries to open** all these files simultaneously

7. **Container hits** file descriptor limit (usually 1024)

8. **EMFILE error** occurs

### The Fix:

- Tell Vite to **exclude** `@mui/icons-material` from optimization
- Increase container's file descriptor limit
- Let dynamic imports work at runtime, not build time

---

## ✅ Complete Deployment Checklist

### For Dev Team:

- [ ] Add Vite configuration (Solution 1)
- [ ] Update Tekton Task with ulimit (Solution 2)
- [ ] Test build locally with low ulimit
- [ ] Test build locally with high ulimit
- [ ] Deploy to Tekton
- [ ] Verify build succeeds

### For DevOps Team:

- [ ] Review Tekton security context requirements
- [ ] Consider custom Docker image if ulimit changes not allowed
- [ ] Update pipeline documentation
- [ ] Add monitoring for EMFILE errors

---

## 🎯 Expected Results

### Before Fix:
```
ERROR - EMFILE: too many open files
subprocess exited with status 1
```

### After Fix:
```
✓ built in 45s
Build completed successfully
```

---

## 📝 Summary

**This is NOT a bug in Lean IDS v1.7.3.**

This is a combination of:
1. Vite's aggressive optimization trying to analyze dynamic imports
2. Tekton container's low default file descriptor limit
3. Material Icons package having 2000+ files

**Both fixes are required:**
1. ✅ Vite config to exclude Material Icons from optimization
2. ✅ Tekton ulimit increase to handle file operations

---

## 🆘 If Still Failing

If the error persists after applying all fixes:

1. **Check actual ulimit in container:**
   ```bash
   ulimit -n
   ```
   Should show 10000 or higher

2. **Verify Vite config is loaded:**
   ```bash
   cat vite.config.ts
   ```

3. **Check Vite cache:**
   ```bash
   rm -rf node_modules/.vite
   yarn build
   ```

4. **Enable Vite debug logging:**
   ```bash
   DEBUG=vite:* yarn build
   ```

5. **Contact us with:**
   - Exact error message
   - Vite config
   - Tekton Task YAML
   - Output of `ulimit -n` in container

---

## ✅ Final Note

Lean IDS v1.7.3 is working correctly. The dynamic imports are implemented properly. This is purely an infrastructure/configuration issue that needs to be fixed in the consuming application's build pipeline.

**Once fixed, this will work for all future builds!**
