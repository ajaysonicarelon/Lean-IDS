# NPM Publishing Guide - Lean IDS

## ✅ GitHub Push Complete!

All changes have been pushed to GitHub with proper commits:
- **8 commits** created with detailed messages
- **Repository:** https://github.com/ajaysonicarelon/Lean-IDS
- **Branch:** main

### Commits Summary:
1. ✅ Advanced data table with column freezing
2. ✅ Pagination and Icon components  
3. ✅ React table template for developers
4. ✅ Angular 17 implementation
5. ✅ Semantic tokens and design system
6. ✅ Component refactoring for semantic tokens
7. ✅ Comprehensive documentation
8. ✅ Dependencies and version bump to 1.1.0

---

## 📦 NPM Publishing Steps

### **Prerequisites**

1. **Check if you're logged into npm:**
   ```bash
   npm whoami
   ```
   
   If not logged in:
   ```bash
   npm login
   ```
   Enter your npm credentials.

2. **Verify package names are available:**
   - `lean-ids-components` (already published as 1.0.1)
   - `lean-ids-tokens` (already published as 1.0.1)

---

## 🚀 Publishing Process

### **Step 1: Build the Packages**

```bash
# Navigate to project root
cd /Users/AM07832/CascadeProjects/lean-ids

# Build tokens first (components depend on it)
cd packages/tokens
npm run build

# Build components
cd ../components
npm run build
```

### **Step 2: Test Builds Locally**

```bash
# Check dist folders exist
ls packages/tokens/dist
ls packages/components/dist

# Verify package.json files are correct
cat packages/tokens/package.json
cat packages/components/package.json
```

### **Step 3: Publish to npm**

#### **Option A: Publish Both Packages (Recommended)**

```bash
# Publish tokens first
cd packages/tokens
npm publish

# Publish components
cd ../components
npm publish
```

#### **Option B: Publish with Access Control (if scoped)**

If you want to make them public:
```bash
npm publish --access public
```

### **Step 4: Verify Publication**

```bash
# Check on npm
npm view lean-ids-tokens
npm view lean-ids-components

# Or visit:
# https://www.npmjs.com/package/lean-ids-tokens
# https://www.npmjs.com/package/lean-ids-components
```

---

## 📋 What's Being Published

### **lean-ids-tokens@1.1.0**

**New in 1.1.0:**
- ✅ Semantic color tokens (primary, secondary, success, warning, error, info)
- ✅ Accessibility tokens (focus, contrast, ARIA states)
- ✅ Animation tokens (duration, easing, transitions)
- ✅ Elevation tokens (box shadows)
- ✅ Opacity tokens
- ✅ Token mapping configuration for Figma sync

**Files included:**
- `dist/index.js` - CommonJS bundle
- `dist/index.esm.js` - ES Module bundle
- `dist/index.d.ts` - TypeScript definitions

### **lean-ids-components@1.1.0**

**New in 1.1.0:**
- ✅ Advanced Data Table with column freezing (max 3)
- ✅ TableSettings modal for column management
- ✅ Pagination component
- ✅ Icon component (Lucide React)
- ✅ Textarea component
- ✅ All components updated with semantic tokens
- ✅ React template for developers
- ✅ Comprehensive documentation

**Files included:**
- `dist/index.js` - CommonJS bundle
- `dist/index.esm.js` - ES Module bundle
- `dist/index.d.ts` - TypeScript definitions

---

## 🔧 Troubleshooting

### **Issue: "You do not have permission to publish"**

**Solution:**
```bash
# Check if package name is taken
npm view lean-ids-components

# If taken, you need to use a scoped package
# Update package.json:
"name": "@your-username/lean-ids-components"

# Then publish with:
npm publish --access public
```

### **Issue: "Version already exists"**

**Solution:**
```bash
# Bump version
npm version patch  # 1.1.0 -> 1.1.1
npm version minor  # 1.1.0 -> 1.2.0
npm version major  # 1.1.0 -> 2.0.0

# Then publish
npm publish
```

### **Issue: "Build failed"**

**Solution:**
```bash
# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### **Issue: "Missing dependencies"**

**Solution:**
```bash
# Install all dependencies
npm install

# Check peer dependencies are correct
npm ls
```

---

## 📝 Post-Publication Checklist

After publishing, verify:

- [ ] Packages appear on npm registry
- [ ] Version numbers are correct (1.1.0)
- [ ] README displays correctly on npm
- [ ] Installation works: `npm install lean-ids-components`
- [ ] TypeScript types are available
- [ ] Dependencies resolve correctly

---

## 🎯 Using Published Packages

### **Installation**

```bash
# Install both packages
npm install lean-ids-tokens lean-ids-components

# Or with specific versions
npm install lean-ids-tokens@1.1.0 lean-ids-components@1.1.0
```

### **Usage**

```typescript
// Import tokens
import { theme, colors, spacing } from 'lean-ids-tokens';

// Import components
import { Button, DataTable, Pagination } from 'lean-ids-components';

// Use in your app
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="primary">Click me</Button>
      <DataTable data={data} columns={columns} />
    </ThemeProvider>
  );
}
```

---

## 🔄 Future Updates

### **For Patch Updates (1.1.0 -> 1.1.1)**
```bash
npm version patch
npm run build
npm publish
git push --tags
```

### **For Minor Updates (1.1.0 -> 1.2.0)**
```bash
npm version minor
npm run build
npm publish
git push --tags
```

### **For Major Updates (1.1.0 -> 2.0.0)**
```bash
npm version major
npm run build
npm publish
git push --tags
```

---

## 📊 Package Stats

### **Current Versions:**
- `lean-ids-tokens`: **1.1.0** (was 1.0.1)
- `lean-ids-components`: **1.1.0** (was 1.0.1)

### **Bundle Sizes (estimated):**
- Tokens: ~15KB (minified)
- Components: ~120KB (minified)

### **Dependencies:**
- Tokens: 0 dependencies
- Components: styled-components, lucide-react, lean-ids-tokens

---

## 🎉 Summary

**GitHub:** ✅ All changes pushed with 9 commits  
**Versions:** ✅ Bumped to 1.1.0  
**Ready to Publish:** ✅ Just run the build and publish commands  

### **Quick Publish Commands:**

```bash
# From project root
cd packages/tokens && npm run build && npm publish
cd ../components && npm run build && npm publish
```

---

## 📞 Support

If you encounter issues:
1. Check npm documentation: https://docs.npmjs.com/
2. Verify npm account permissions
3. Check package.json configuration
4. Review build output for errors

---

**Created:** April 21, 2026  
**Version:** 1.1.0  
**Status:** ✅ Ready to Publish to npm
