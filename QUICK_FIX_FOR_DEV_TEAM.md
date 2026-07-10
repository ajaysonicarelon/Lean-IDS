# 🚀 Quick Fix: EMFILE Error in Tekton

## ⚡ TL;DR

Add this to your `vite.config.ts`:

```typescript
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    exclude: ['@mui/icons-material']
  }
});
```

**That's it!** This fixes the EMFILE error.

---

## 📋 Complete vite.config.ts (If You Don't Have One)

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
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

---

## ✅ Why This Works

**Problem:**
- You use Material UI v5
- Lean IDS uses Material UI v9 (nested)
- Vite tries to load ALL icons from BOTH versions
- 4000+ files → EMFILE error

**Solution:**
- Tell Vite to skip pre-bundling icons
- Icons load on-demand at runtime
- No file limit issues

---

## 🎯 Your Setup (Perfect!)

```
✅ Your Material UI v5.x.x
✅ Lean IDS v1.7.3 (with Material UI v9)
✅ Tekton ulimit already increased
✅ Just need Vite config
```

**No other changes needed!**

---

## 📝 Steps

1. **Create/update `vite.config.ts`** in your project root
2. **Add the config** (see above)
3. **Commit and push**
4. **Tekton build will succeed** ✅

---

## 🆘 If Still Failing

```bash
# Clear cache
rm -rf node_modules/.vite dist

# Rebuild
yarn build
```

---

## 📞 Questions?

- Material UI v5 + Lean IDS v1.7.3 = ✅ Compatible
- No dependency changes needed
- No code changes needed
- Just Vite config

**See `DEV_TEAM_SOLUTION_MUI_v5.md` for detailed explanation.**
