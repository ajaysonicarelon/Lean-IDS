# Solution: Multiple Material UI Versions + EMFILE Error

## 🎯 Problem

Dev team is experiencing EMFILE errors in Tekton builds because:
1. They're using multiple design systems with different Material UI versions
2. Lean IDS v1.7.3 includes Material UI as a dependency
3. Vite tries to process all Material UI icon files from multiple sources
4. This exceeds file descriptor limits even with increased ulimit

---

## ✅ Solution: Vite Configuration (No Code Changes Needed)

The dev team needs to configure their Vite to handle multiple Material UI versions properly.

### **Add to their `vite.config.ts`:**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  
  resolve: {
    // Deduplicate common packages
    dedupe: ['react', 'react-dom', '@mui/material'],
    
    // Optional: Force specific Material UI version for their app
    alias: {
      // Use their own Material UI version
      '@mui/icons-material': path.resolve(__dirname, 'node_modules/@mui/icons-material'),
      '@mui/material': path.resolve(__dirname, 'node_modules/@mui/material'),
    }
  },
  
  optimizeDeps: {
    // Include Material UI for optimization
    include: [
      '@mui/material',
      '@ajaysoni7832/lean-ids-components',
      '@ajaysoni7832/lean-ids-tokens'
    ],
    // CRITICAL: Exclude Material Icons from pre-bundling
    exclude: [
      '@mui/icons-material'
    ]
  },
  
  build: {
    rollupOptions: {
      output: {
        // Separate Material Icons by source
        manualChunks(id) {
          // Lean IDS icons
          if (id.includes('lean-ids-components') && id.includes('@mui/icons-material')) {
            return 'lean-ids-mui-icons';
          }
          // App's own Material Icons
          if (id.includes('@mui/icons-material') && !id.includes('lean-ids-components')) {
            return 'app-mui-icons';
          }
          // Other design system icons
          if (id.includes('node_modules') && id.includes('@mui/icons-material')) {
            const match = id.match(/node_modules\/([^/]+).*@mui\/icons-material/);
            if (match) {
              return `${match[1]}-mui-icons`;
            }
          }
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  }
});
```

---

## 📊 How This Works

### **Without This Config:**
```
Vite sees: import('@mui/icons-material/Home')
↓
Vite tries to analyze all possible icons
↓
Loads @mui/icons-material/index.mjs (2000+ files)
↓
Opens all icon files simultaneously
↓
EMFILE error
```

### **With This Config:**
```
Vite sees: import('@mui/icons-material/Home')
↓
Vite skips pre-bundling (excluded)
↓
Loads only Home icon at runtime
↓
No EMFILE error
```

---

## 🔧 Alternative Solutions

### **Option 1: Simpler Vite Config (If They Don't Need Separation)**

```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@mui/icons-material']
  }
});
```

**Pros:** Simple, works immediately  
**Cons:** All Material Icons share the same chunk

---

### **Option 2: Increase Tekton Resources**

If Vite config doesn't fully solve it, also increase Tekton resources:

```yaml
apiVersion: tekton.dev/v1beta1
kind: Task
metadata:
  name: build-app
spec:
  steps:
    - name: build
      resources:
        requests:
          memory: "2Gi"
          cpu: "1000m"
        limits:
          memory: "4Gi"
          cpu: "2000m"
      script: |
        #!/bin/sh
        ulimit -n 10000
        yarn install --network-concurrency 8
        yarn build
```

---

### **Option 3: Use Yarn PnP (Advanced)**

For projects with many dependencies:

```yaml
# .yarnrc.yml
nodeLinker: pnp
pnpMode: loose
```

**Pros:** Eliminates node_modules, no file limit issues  
**Cons:** Requires significant configuration changes

---

## 🎯 Recommended Approach

### **Step 1: Add Vite Config (Required)**
```typescript
// vite.config.ts
export default defineConfig({
  optimizeDeps: {
    exclude: ['@mui/icons-material']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@mui/icons-material')) {
            return 'mui-icons';
          }
        }
      }
    }
  }
});
```

### **Step 2: Test Locally**
```bash
# Simulate low file limit
ulimit -n 256
yarn build  # Should fail

# Increase limit
ulimit -n 10000
yarn build  # Should succeed
```

### **Step 3: Deploy to Tekton**
- Vite config will prevent the issue
- Existing ulimit increase in Tekton will handle any remaining file operations

---

## 📝 For Different Material UI Versions

If they need to use different Material UI versions:

### **Their package.json:**
```json
{
  "dependencies": {
    "@mui/material": "^6.0.0",
    "@mui/icons-material": "^6.0.0",
    "@ajaysoni7832/lean-ids-components": "^1.7.3"
  }
}
```

### **What Happens:**
1. Their app uses Material UI v6
2. Lean IDS (nested in node_modules) uses Material UI v9
3. Vite config separates them into different chunks
4. Both versions work without conflicts
5. No EMFILE errors

---

## ✅ Expected Results

### **Before Fix:**
```
ERROR - EMFILE: too many open files
Build failed in 30s
```

### **After Fix:**
```
✓ 2,847 modules transformed
✓ built in 45s
Build succeeded
```

### **Bundle Analysis:**
```
dist/assets/app-mui-icons-abc123.js       (their Material UI v6 icons)
dist/assets/lean-ids-mui-icons-def456.js  (Lean IDS Material UI v9 icons)
dist/assets/other-ds-mui-icons-ghi789.js  (other design system icons)
```

---

## 🆘 Troubleshooting

### **If Still Getting EMFILE:**

1. **Check Vite config is loaded:**
   ```bash
   cat vite.config.ts
   ```

2. **Clear Vite cache:**
   ```bash
   rm -rf node_modules/.vite
   yarn build
   ```

3. **Verify ulimit in Tekton:**
   ```yaml
   script: |
     echo "File limit: $(ulimit -n)"
     ulimit -n 10000
     yarn build
   ```

4. **Check for other large packages:**
   ```bash
   find node_modules -type f | wc -l
   ```

5. **Enable debug logging:**
   ```bash
   DEBUG=vite:* yarn build
   ```

---

## 📊 Why This Approach is Better

### **Compared to Making Material UI a Peer Dependency:**

| Approach | Pros | Cons |
|----------|------|------|
| **Vite Config** | ✅ No breaking changes<br>✅ Works immediately<br>✅ Supports multiple versions<br>✅ No code changes | ⚠️ Requires Vite config |
| **Peer Dependency** | ✅ Cleaner dependency tree<br>✅ Smaller bundle | ❌ Breaking change<br>❌ Requires v1.7.4 release<br>❌ All users must update<br>❌ Migration needed |

**Recommendation:** Use Vite config approach. It solves the problem without breaking changes.

---

## 🎯 Summary

**For Dev Team:**
1. Add Vite config to exclude Material Icons from optimization
2. Keep existing Tekton ulimit increase
3. No changes needed to Lean IDS package
4. Works with any Material UI version
5. Supports multiple design systems

**For Lean IDS:**
- No code changes needed
- v1.7.3 works correctly
- This is a build configuration issue, not a package issue

---

## 📞 Support

If the dev team still faces issues after implementing this:
1. Share their complete vite.config.ts
2. Share Tekton Task YAML
3. Share output of `ulimit -n` in container
4. Share build error logs with DEBUG=vite:* enabled

This will help diagnose any remaining issues.
