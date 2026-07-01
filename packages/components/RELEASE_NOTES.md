# Release Notes - Lean IDS v1.7.0

**Release Date:** July 2, 2026  
**Package:** `@ajaysoni7832/lean-ids-components`

---

## 🎉 What's New

### 🚀 Framework Compatibility (Major Feature!)

Lean IDS now works seamlessly with **all modern React frameworks**:

- ✅ **Next.js 13+** (App Router & Pages Router)
- ✅ **Vite**
- ✅ **Create React App**
- ✅ **Remix**
- ✅ **SSR Ready** - All components support server-side rendering
- ✅ **Tree Shaking** - Optimized bundle sizes

📖 **See [FRAMEWORK_SUPPORT.md](./FRAMEWORK_SUPPORT.md) for setup guides**

---

### 📊 Table Component Enhancements

The Table component now includes powerful new features:

#### ✅ Select All Checkbox
- Added "select all" checkbox in table header
- Properly integrated with row selection
- Full keyboard accessibility

#### ✅ Sorting Visual Feedback
- Table headers change background color when sorting is active
- 2 shades darker (`primary[100]`) for active sort
- Clear visual indication of sort direction

#### ✅ Global Search
- Universal search bar in table toolbar
- Search across all table data
- Clean, integrated UI

#### ✅ Improved Selection Styling
- Selection border now spans full 72px cell height
- Consistent visual feedback
- Better user experience

---

## ⚠️ Breaking Changes

### styled-components is now a Peer Dependency

**What Changed:**
```json
// Before (v1.6.x)
"dependencies": {
  "styled-components": "^6.1.15"
}

// After (v1.7.0)
"peerDependencies": {
  "styled-components": "^6.0.0"
}
```

**Migration Required:**

Users must now install `styled-components` manually:

```bash
npm install styled-components
```

**Why This Change?**

1. **Prevents Conflicts** - Ensures single styled-components instance
2. **Standard Practice** - All major component libraries do this
3. **Smaller Bundles** - styled-components not bundled in package
4. **Version Flexibility** - Users control their styled-components version

**Impact:** Low - Most projects already have styled-components installed

---

## 📦 Installation

### New Projects

```bash
npm install @ajaysoni7832/lean-ids-components@1.7.0 @ajaysoni7832/lean-ids-tokens styled-components
```

### Upgrading from v1.6.x

```bash
# 1. Update package
npm install @ajaysoni7832/lean-ids-components@1.7.0

# 2. Install styled-components (if not already installed)
npm install styled-components

# 3. No code changes needed!
```

---

## 🚀 Quick Start

### Basic Setup

```tsx
import { ThemeProvider } from 'styled-components';
import { carelonTheme } from '@ajaysoni7832/lean-ids-tokens';
import { Button } from '@ajaysoni7832/lean-ids-components';

function App() {
  return (
    <ThemeProvider theme={carelonTheme}>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

### Next.js Setup

```tsx
// app/providers.tsx
'use client';

import { ThemeProvider } from 'styled-components';
import { carelonTheme } from '@ajaysoni7832/lean-ids-tokens';

export function Providers({ children }) {
  return (
    <ThemeProvider theme={carelonTheme}>
      {children}
    </ThemeProvider>
  );
}

// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// next.config.js
module.exports = {
  compiler: {
    styledComponents: true,
  },
};
```

📖 **See [FRAMEWORK_SUPPORT.md](./FRAMEWORK_SUPPORT.md) for complete guides**

---

## 🔧 Technical Improvements

### Package Configuration
- ✅ Added modern `exports` field for better module resolution
- ✅ Added `sideEffects: false` for tree-shaking
- ✅ Externalized styled-components in build output

### Build System
- ✅ Verified SSR safety (no window/document at import time)
- ✅ Proper TypeScript types maintained
- ✅ Optimized bundle output

---

## 📚 Documentation Updates

### New Documentation
- **FRAMEWORK_SUPPORT.md** - Complete framework setup guides
- **NEXT_JS_TEST_RESULTS.md** - Test results and findings
- **FRAMEWORK_COMPATIBILITY_COMPLETE.md** - Implementation details
- **This file** - Release notes!

### Updated Documentation
- **README.md** - Added framework compatibility section
- **README.md** - Updated installation instructions
- **README.md** - Added Table component features
- **CHANGELOG.md** - Complete v1.7.0 changelog

---

## 🎯 Benefits

### For Developers
- ✅ **Works Everywhere** - Use with any React framework
- ✅ **No Conflicts** - Single styled-components instance
- ✅ **Better DX** - Clear setup guides for each framework
- ✅ **Type Safe** - Full TypeScript support

### For Users
- ✅ **Faster Loads** - Smaller bundle sizes
- ✅ **Better Performance** - Optimized tree-shaking
- ✅ **More Features** - Enhanced Table component

---

## 🐛 Bug Fixes

### Table Component
- Fixed "select all" checkbox rendering in header
- Fixed selection border height (now full 72px)
- Improved sort direction visual feedback

---

## 📊 Component Updates

### Table Component

**New Props:**

```tsx
// TableToolbar
showGlobalSearch?: boolean;
globalSearchValue?: string;
onGlobalSearchChange?: (value: string) => void;
globalSearchPlaceholder?: string;

// TableHeader
sortDirection?: 'asc' | 'desc' | 'none'; // Now affects background color
```

**Usage Example:**

```tsx
<Table
  columns={columns}
  data={data}
  selectable={true}
  showGlobalSearch={true}
  onGlobalSearchChange={(value) => setSearch(value)}
/>
```

---

## 🔄 Migration Guide

### From v1.6.x to v1.7.0

#### Step 1: Update Package
```bash
npm install @ajaysoni7832/lean-ids-components@1.7.0
```

#### Step 2: Install styled-components (if needed)
```bash
npm install styled-components
```

#### Step 3: Verify Setup
```tsx
// Should work without any code changes!
import { Button } from '@ajaysoni7832/lean-ids-components';
```

#### Step 4: (Optional) Framework-Specific Setup
If using Next.js, see [FRAMEWORK_SUPPORT.md](./FRAMEWORK_SUPPORT.md) for optimal configuration.

---

## ✅ Testing

### Verified Compatibility
- ✅ Next.js 16.x (App Router)
- ✅ Next.js 14.x (Pages Router)
- ✅ Vite 6.x
- ✅ Create React App 5.x
- ✅ TypeScript 5.x
- ✅ React 18.x & 19.x

### SSR Testing
- ✅ All components render server-side
- ✅ No hydration errors
- ✅ Proper theme context

---

## 📞 Support

### Documentation
- [README.md](./packages/components/README.md) - Getting started
- [FRAMEWORK_SUPPORT.md](./FRAMEWORK_SUPPORT.md) - Framework guides
- [AI_GUIDELINES.md](./AI_GUIDELINES.md) - AI assistant setup
- [CHANGELOG.md](./CHANGELOG.md) - Full changelog

### Issues
- Report bugs on GitHub/Bitbucket
- Contact: ajay@carelon.com

---

## 🎉 Thank You!

Thank you for using Lean IDS! This release represents a major step forward in framework compatibility and developer experience.

**Happy coding!** 🚀

---

## Next Steps

1. ✅ **Upgrade** - Update to v1.7.0
2. ✅ **Install** - Add styled-components if needed
3. ✅ **Configure** - Set up for your framework (if using Next.js)
4. ✅ **Explore** - Try the new Table features
5. ✅ **Share** - Tell your team about the update!
