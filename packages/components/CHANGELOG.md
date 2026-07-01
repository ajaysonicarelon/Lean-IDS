# Changelog

All notable changes to the Lean IDS Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.7.0] - 2026-07-02

### 🚀 Major Features

#### **Framework Compatibility**
- ✅ **Next.js Support** - Full compatibility with Next.js 13+ (App Router & Pages Router)
- ✅ **Vite Support** - Zero-config compatibility with Vite
- ✅ **SSR Ready** - All components are server-side rendering compatible
- ✅ **Tree Shaking** - Optimized bundle sizes with proper module exports

#### **Table Component Enhancements**
- ✅ **Select All Checkbox** - Added "select all" checkbox in table header
- ✅ **Sorting Visual Feedback** - Header background changes to 2 shades darker when sorting is active
- ✅ **Global Search** - Added universal search bar in table toolbar
- ✅ **72px Row Height** - Selection border now spans full cell height (72px)

### 📦 Breaking Changes

#### **styled-components is now a Peer Dependency**
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

**Migration:** Users must now install `styled-components` manually:
```bash
npm install styled-components
```

**Why:** Prevents multiple styled-components instances and version conflicts. This is standard practice for component libraries.

### ✨ Enhancements

#### **Package Configuration**
- Added modern `exports` field for better module resolution
- Added `sideEffects: false` for improved tree-shaking
- Externalized styled-components in build output

#### **Table Component**
- Fixed "select all" checkbox rendering in table header
- Added `sortDirection` prop to TableHeader for visual feedback
- Added global search functionality to TableToolbar
- Improved selection border styling (full 72px height)

### 📚 Documentation

#### **New Documentation Files**
- **FRAMEWORK_SUPPORT.md** - Complete setup guides for Next.js, Vite, CRA, Remix
- **NEXT_JS_TEST_RESULTS.md** - Test results and findings
- **FRAMEWORK_COMPATIBILITY_COMPLETE.md** - Implementation summary

#### **Updated Documentation**
- **README.md** - Added framework compatibility section
- **README.md** - Updated installation instructions with peer dependency note
- **README.md** - Added comprehensive Table component features list
- **CHANGELOG.md** - This file!

### 🔧 Technical Changes

#### **Build System**
- Verified styled-components is properly externalized in rollup config
- Confirmed SSR safety (no window/document usage at import time)
- Build output uses import statements for styled-components (not bundled)

#### **Type Safety**
- All TypeScript types maintained
- Peer dependency types properly configured

### 🎯 Benefits

- ✅ **No Conflicts** - Single styled-components instance across app
- ✅ **Smaller Bundles** - styled-components not bundled in package
- ✅ **Better DX** - Works seamlessly with all React frameworks
- ✅ **Future Proof** - Follows component library best practices

---

## [1.6.4] - 2026-07-01

### 🐛 Bug Fixes
- **TableToolbar**: Fixed critical bug - added missing `useState` import from React
- **Button**: Added runtime prop validation warnings for deprecated `label` and `icon` props
- **MetricCard**: Added runtime prop validation warning for deprecated `label` prop (use `metricName` instead)

### ✨ Enhancements
- **SideNavigation**: Improved pin/unpin button icons - now uses filled icon when pinned and outlined icon when unpinned for better visual distinction
- **Footer**: Added proper spacing (4px gap) between "Facing any issues?" text and feedback link

### 📚 Documentation
- **AI_GUIDELINES.md**: Added comprehensive component API reference with correct usage examples for all 19 components
- **COMPONENT_API_AUDIT.md**: Created complete technical audit documentation for all components
- **DEV_REPORTED_BUGS.md**: Documented all reported bugs and their resolutions
- Updated component examples to show actual APIs (Button uses `children` + `leadingIcon`/`trailingIcon`, MetricCard uses `metricName`, etc.)

### 🔍 Component Audit
Audited and documented 19 components:
- **Core UI (9)**: Button, InputField, Chip, Select, Checkbox, RadioButton, Toggle, Avatar, Badge, Textarea
- **Layout (6)**: PageLayout, TopHeader, SideNavigation, PageHeader, Breadcrumbs, Footer
- **Data Display (7)**: MetricCard, Table, Pagination, Modal, Drawer, Toast, AlertBanner, Tooltip, TableToolbar

### ⚠️ Breaking Changes
None - all changes are backward compatible

### 📝 Notes
- The `customSymbolUrl` prop already exists in SideNavigation component for custom sidebar symbols
- All prop validation warnings only appear in development mode (process.env.NODE_ENV !== 'production')

---

## [1.6.3] - Previous Release

(Previous changelog entries...)
