# Release Notes - v1.7.3

**Release Date:** July 10, 2026

## 🐛 Critical Bug Fix

### Material Icons Import Fix

This is a **critical hotfix** that resolves production build failures when deploying applications using Lean IDS components.

#### Problem
Applications were experiencing `EMFILE: too many open files` errors during Vite production builds:

```
error during build:
[vite:load-fallback] Could not load /app/node_modules/@ajaysoni7832/lean-ids-components/node_modules/@mui/icons-material/CasinoOutlined.mjs: EMFILE: too many open files
```

#### Root Cause
The Icon component was using a wildcard import that attempted to load all 2000+ Material Icon files simultaneously during the build process, exceeding the system's file descriptor limit.

#### Solution
- ✅ Replaced wildcard imports with dynamic on-demand imports
- ✅ Named icon exports now use direct imports for optimal tree-shaking
- ✅ Icons load only when needed at runtime

#### Impact
- **Production builds now complete successfully** without file descriptor errors
- **Smaller bundle sizes** through better tree-shaking
- **Improved performance** with on-demand icon loading
- **No breaking changes** - All existing APIs remain the same

## 📦 Installation

```bash
npm install @ajaysoni7832/lean-ids-components@1.7.3
```

## 🔄 Migration

**No migration required!** This is a drop-in replacement for v1.7.2.

All existing code will continue to work without any changes:

```tsx
// All these patterns continue to work
import { Icon, SearchIcon } from '@lean-ids/components';
import { Search } from '@mui/icons-material';

<Icon name="Search" />
<SearchIcon />
<Search />
```

## 📚 Documentation

For detailed technical information about this fix, see:
- `ICON_IMPORT_FIX.md` - Comprehensive explanation and best practices
- `CHANGELOG.md` - Full changelog entry

## 🚀 What's Next

This release focuses solely on fixing the critical build issue. The next release (v1.8.0) will include:
- New component features
- Additional accessibility improvements
- Performance optimizations

## 📞 Support

If you encounter any issues with this release:
1. Check `ICON_IMPORT_FIX.md` for troubleshooting
2. Verify you're using Vite 6.x or later
3. Report issues on the repository

---

**Upgrade Priority:** 🔴 **HIGH** - This fixes a critical production build issue. Upgrade immediately if you're experiencing build failures.
