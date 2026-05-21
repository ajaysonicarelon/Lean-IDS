# Version Compatibility Quick Reference

## ✅ Supported Versions

### React Components
```
@ajaysoni7832/lean-ids-components v1.3.0+
```

| React Version | Status | Notes |
|---------------|--------|-------|
| 16.8.x        | ✅ Supported | Minimum version (Hooks required) |
| 17.x          | ✅ Supported | Fully compatible |
| 18.x          | ✅ Supported | Fully compatible |
| 19.x          | ✅ Supported | Fully compatible |
| 20.x          | ⚠️ Not tested | Will be added after testing |

### Angular Components
```
@ajaysoni7832/lean-ids-angular v1.3.0+
```

| Angular Version | Status | Notes |
|-----------------|--------|-------|
| 14.x            | ❌ Not supported | Use Angular 15+ |
| 15.x            | ✅ Supported | Minimum version |
| 16.x            | ✅ Supported | Fully compatible |
| 17.x            | ✅ Supported | Fully compatible |
| 18.x            | ✅ Supported | Fully compatible |
| 19.x            | ✅ Supported | Fully compatible |
| 20.x            | ⚠️ Not tested | Will be added after testing |

## 🚀 Installation Commands

### React
```bash
# Works with React 16.8, 17, 18, and 19
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens
```

### Angular
```bash
# Works with Angular 15, 16, 17, 18, and 19
npm install @ajaysoni7832/lean-ids-angular @ajaysoni7832/lean-ids-tokens
```

## 🔧 Troubleshooting

### Error: "unable to resolve dependency tree"

**Before v1.3.0:**
```bash
npm install --legacy-peer-deps
```

**After v1.3.0:**
```bash
# Should work without flags!
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens
```

### Still getting errors?

1. **Clear npm cache:**
   ```bash
   npm cache clean --force
   ```

2. **Delete node_modules and package-lock.json:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Check your framework version:**
   ```bash
   # For React
   npm list react
   
   # For Angular
   npm list @angular/core
   ```

4. **Upgrade to supported version:**
   ```bash
   # React 18
   npm install react@^18.3.1 react-dom@^18.3.1
   
   # Angular 17
   ng update @angular/core@17 @angular/cli@17
   ```

## 📊 Migration Guide

### Upgrading from v1.2.x to v1.3.0

**No breaking changes!** Just update the version:

```bash
npm install @ajaysoni7832/lean-ids-components@latest
```

**Benefits:**
- ✅ No more `--legacy-peer-deps` needed
- ✅ Works with React 19
- ✅ Works with Angular 15-19
- ✅ Better compatibility across projects

## 🎯 Best Practices

### For New Projects
- Use the latest stable version of React (18.x) or Angular (17.x)
- Install Lean IDS without any flags
- Test thoroughly before production

### For Existing Projects
- Upgrade Lean IDS to v1.3.0+
- Remove `--legacy-peer-deps` from your install commands
- Test all components after upgrade

### For Teams
- Standardize on React 18.x or Angular 17.x when possible
- Document your framework version in README
- Update Lean IDS regularly for bug fixes

## 📞 Need Help?

- **Documentation**: See `MULTI_VERSION_SUPPORT.md`
- **Issues**: Open a ticket in Bitbucket
- **Contact**: ajay@carelon.com

---

**Last Updated**: May 13, 2026
