# 🔧 Fix: Icons Not Showing in Dev Environment

## ❌ Problem

Icons are not visible in:
- Select dropdown arrows
- Table settings modal
- Table side panel
- Accordion expand/collapse icons

## ✅ Solution

Install Material UI as peer dependencies in your project:

```bash
npm install @mui/icons-material@^5.0.0 @mui/material@^5.0.0
```

Or with Yarn:
```bash
yarn add @mui/icons-material@^5.0.0 @mui/material@^5.0.0
```

---

## 🔍 Why This Happens

Lean IDS components use Material UI icons via direct imports:
```typescript
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
```

These imports need Material UI to be installed in **your project**, not just in Lean IDS's nested node_modules.

---

## 📋 Your package.json Should Have:

```json
{
  "dependencies": {
    "@mui/material": "^5.x.x",
    "@mui/icons-material": "^5.x.x",
    "@ajaysoni7832/lean-ids-components": "^1.7.3",
    "@ajaysoni7832/lean-ids-tokens": "^1.7.3"
  }
}
```

---

## 🎯 After Installing

1. **Restart dev server:**
   ```bash
   yarn dev
   ```

2. **Clear browser cache** (Ctrl+Shift+R or Cmd+Shift+R)

3. **Icons should now appear** ✅

---

## 🔍 Verify Installation

Check that Material UI is installed:
```bash
npm list @mui/icons-material @mui/material
```

Should show:
```
├── @mui/icons-material@5.x.x
└── @mui/material@5.x.x
```

---

## 🆘 If Still Not Working

### 1. Check Browser Console

Open DevTools (F12) and look for errors like:
```
Failed to resolve module specifier "@mui/icons-material/Close"
```

### 2. Clear All Caches

```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Clear node_modules and reinstall
rm -rf node_modules
yarn install

# Restart dev server
yarn dev
```

### 3. Verify Vite Config

Make sure your `vite.config.ts` has:
```typescript
export default defineConfig({
  resolve: {
    dedupe: ['@mui/material', '@mui/icons-material']
  }
});
```

---

## 📊 What's Happening

### Without Material UI Installed:
```
Your App → Lean IDS → ❌ Can't find @mui/icons-material
                     → Icons don't render
```

### With Material UI Installed:
```
Your App → @mui/icons-material@5.x.x ✅
        → Lean IDS → Uses your Material UI ✅
                  → Icons render correctly ✅
```

---

## ✅ Summary

**The fix is simple:**
```bash
npm install @mui/icons-material@^5.0.0 @mui/material@^5.0.0
```

**Then restart your dev server and icons will appear!** 🎉

---

## 📝 Note

This is a **peer dependency requirement**. Lean IDS expects Material UI to be installed in the consuming application. This is standard practice for React component libraries to avoid version conflicts and reduce bundle size.
