# Multi-Version Support - Lean IDS

This document explains how Lean IDS supports multiple versions of React and Angular frameworks.

## 🎯 Supported Versions

### React Components (`@ajaysoni7832/lean-ids-components`)

**Supported React Versions**: `16.8.0` to `19.x`

```json
"peerDependencies": {
  "react": ">=16.8.0 <20.0.0",
  "react-dom": ">=16.8.0 <20.0.0"
}
```

**Compatible with:**
- ✅ React 16.8+ (Hooks support required)
- ✅ React 17.x
- ✅ React 18.x
- ✅ React 19.x

### Angular Components (`@ajaysoni7832/lean-ids-angular`)

**Supported Angular Versions**: `15.x` to `19.x`

```json
"peerDependencies": {
  "@angular/common": ">=15.0.0 <20.0.0",
  "@angular/core": ">=15.0.0 <20.0.0",
  "@angular/forms": ">=15.0.0 <20.0.0",
  "rxjs": ">=7.0.0 <9.0.0"
}
```

**Compatible with:**
- ✅ Angular 15.x
- ✅ Angular 16.x
- ✅ Angular 17.x
- ✅ Angular 18.x
- ✅ Angular 19.x

## 📋 Why This Range?

### React 16.8+ Requirement
- **Hooks Support**: Our components use React Hooks (useState, useEffect, etc.)
- **React 16.8** was the first version to introduce Hooks
- Versions before 16.8 are not supported

### Angular 15+ Requirement
- **Standalone Components**: Modern Angular architecture
- **Improved TypeScript Support**: Better type inference
- **Performance**: Significant improvements in Angular 15+

## 🔧 Version Range Syntax Explained

### `>=16.8.0 <20.0.0`
- `>=16.8.0` - Minimum version (inclusive)
- `<20.0.0` - Maximum version (exclusive)
- This means: 16.8.0, 16.9.0, 17.0.0, 18.0.0, 19.x are all supported
- 20.0.0 and above are NOT supported (until we test and verify)

## 📦 Installation Examples

### React Projects

#### With React 16.8+
```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens
```

#### With React 17.x
```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens
```

#### With React 18.x
```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens
```

#### With React 19.x
```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens
```

All installations work without `--legacy-peer-deps` or `--force` flags!

### Angular Projects

#### With Angular 15+
```bash
npm install @ajaysoni7832/lean-ids-angular @ajaysoni7832/lean-ids-tokens
```

#### With Angular 17+
```bash
npm install @ajaysoni7832/lean-ids-angular @ajaysoni7832/lean-ids-tokens
```

#### With Angular 19+
```bash
npm install @ajaysoni7832/lean-ids-angular @ajaysoni7832/lean-ids-tokens
```

All installations work seamlessly!

## 🚨 Troubleshooting

### If You Still Get Peer Dependency Warnings

Even with our wide version range, npm might show warnings if:

1. **Your version is outside the range**
   - Solution: Upgrade/downgrade to a supported version
   - React: Use 16.8.0 or higher
   - Angular: Use 15.0.0 or higher

2. **Conflicting dependencies from other packages**
   - Solution: Use `npm install --legacy-peer-deps`
   - This is safe and won't break anything

3. **npm cache issues**
   - Solution: Clear npm cache
   ```bash
   npm cache clean --force
   npm install
   ```

## 🔄 Version Update Strategy

### When We Update Supported Versions

We follow this strategy:
1. **Test new major versions** (e.g., React 20, Angular 20)
2. **Update peer dependencies** to include new versions
3. **Publish new minor version** (e.g., 1.3.0 → 1.4.0)
4. **Update documentation**

### Deprecation Policy

We support:
- **Current version** and **2 previous major versions**
- Example: If React 20 is current, we support 18, 19, and 20

## 📊 Version Compatibility Matrix

| Lean IDS Version | React Support | Angular Support |
|------------------|---------------|-----------------|
| 1.0.x - 1.2.x    | 18.x only     | Not available   |
| 1.3.0+           | 16.8+ to 19.x | 15.x to 19.x    |

## 🎯 Best Practices

### For Developers

1. **Use the latest stable version** of React/Angular when possible
2. **Test thoroughly** when upgrading framework versions
3. **Check release notes** for breaking changes
4. **Report issues** if you find compatibility problems

### For Teams

1. **Standardize framework versions** across projects when possible
2. **Plan upgrades** together with Lean IDS updates
3. **Test in staging** before production deployments

## 📝 Changelog

### Version 1.3.0 (Current)
- ✅ Added React 16.8+ to 19.x support
- ✅ Added Angular 15.x to 19.x support
- ✅ Removed need for `--legacy-peer-deps` flag
- ✅ Improved compatibility across versions

### Version 1.2.1 (Previous)
- ⚠️ React 18.x only
- ⚠️ No Angular support

## 🤝 Contributing

If you encounter version compatibility issues:

1. **Open an issue** with:
   - Framework and version
   - Error message
   - Steps to reproduce

2. **Submit a PR** if you have a fix

3. **Test with multiple versions** before submitting

## 📞 Support

For version-related questions:
- Email: ajay@carelon.com
- Repository: Bitbucket Elevance Health

---

**Last Updated**: May 13, 2026
**Document Version**: 1.0
