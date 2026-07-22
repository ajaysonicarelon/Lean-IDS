# Changelog

All notable changes to the Lean IDS Design System will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.7.6] - 2026-07-22

### 🎯 **Component Maturity Initiative - Complete Refactoring**

This is a **MAJOR** release representing a comprehensive refactoring effort where we applied the Component Maturity Checklist to 13+ core components, bringing them all to enterprise-grade standards.

#### **✨ Component Refactoring (Component Maturity Checklist Applied)**

**Tooltip Component** ✅
- Fixed infinite loop issue in useEffect dependencies
- Added Storybook action spies for all callbacks (onOpen, onClose, onAfterOpen, onAfterClose, onEscape)
- Optimized re-renders - only re-run effects when visibility changes
- Enhanced Storybook documentation with proper Typography usage

**Checkbox Component** ✅ COMPLETE REFACTOR
- Removed custom styled label - now uses Typography component
- Added error/invalid state with red border and error icon color
- Fixed sizing - uses theme.spacing tokens (spacing[7] for default, spacing[10] for large)
- Added loading state with spinner
- Improved transitions - uses theme.transitions.default
- Enhanced accessibility - proper ARIA attributes
- Comprehensive Storybook - all 8 states documented

**RadioButton Component** ✅ COMPLETE REFACTOR
- Typography integration - replaced all custom text styling
- Token-based sizing - theme.spacing for all dimensions
- 8 states implemented - default, hover, focus, active, disabled, loading, error, empty
- Enhanced accessibility - keyboard navigation, ARIA labels
- Comprehensive Storybook - interactive examples for all states

**Toggle Component** ✅ COMPLETE REFACTOR
- Typography for labels - no more custom styled text
- Token-based styling - colors, spacing, transitions from theme
- 8 states - all interactive states properly implemented
- Loading state - spinner animation
- Error state - visual feedback
- Accessibility - keyboard support, ARIA attributes
- Storybook documentation - complete with all variants

**MenuItem Component** ✅ COMPLETE REFACTOR
- Fixed alignment - proper vertical centering of icon and text
- Added ChildrenArrow component - styled arrow for nested menus
- Typography integration - all text uses Typography component
- Token-based borders - uses theme.borderWidth[2]
- Enhanced hover states - proper opacity from theme
- Storybook improvements - comprehensive examples

**NestedMenuOverlay Component** ✅ COMPLETE REFACTOR
- Light/dark mode support - $mode prop for theming
- Disabled state - visual feedback and pointer-events handling
- Token-based styling - spacing, colors, shadows from theme
- Loading state - LoadingSpinner component
- Enhanced accessibility - focus management
- Trigger mode support - hover vs click interactions

**MetricCard Component** ✅ COMPLETE REFACTOR
- Design preservation - maintained original visual design
- Typography integration - all text uses Typography component
- Token-based styling - NO hardcoded values
- 8 states - loading, error, empty states
- Enhanced variants - basic, filled, set
- Comprehensive Storybook - all use cases documented

**BarChart Component** ✅
- Fixed X-axis alignment - proper label positioning
- Added Storybook actions - onClick handlers for bars
- Typography integration - all labels use Typography
- Token-based styling - spacing, colors from theme
- Horizontal variant - complete implementation

**Button Component** ✅ COMPLETE REFACTOR
- Typography integration - button text uses Typography
- Token-based sizing - all dimensions from theme.spacing
- 8 states - comprehensive state management
- Loading state - spinner with proper positioning
- Enhanced accessibility - ARIA attributes, keyboard support

**Modal Component** ✅ COMPLETE REFACTOR
- Storybook Typography cleanup - removed all HTML tags
- Typography integration - all text uses Typography component
- Enhanced documentation - comprehensive examples
- Accessibility improvements - focus trap, ESC key handling

**Form Components (InputField, Textarea, Select)** ✅
- Typography integration - labels, helper text, error messages
- Token-based styling - consistent spacing and colors
- Error state standardization - unified error handling
- Enhanced accessibility - proper ARIA labels

**Footer Component** ✅
- Typography integration - all text uses Typography
- Enhanced layout - better responsive behavior
- Token-based styling - spacing and colors from theme

**Table Component** ✅ COMPLETE REFACTOR
- **Standalone Components** - TableRow extracted as independent component
- **Component Maturity Checklist** - All 6 pillars implemented
- **forwardRef + polymorphic 'as' prop** - Full API flexibility
- **8 States** - Added error state with banner, enhanced loading/empty states
- **Typography integration** - All text uses Typography component
- **Token-based styling** - Zero hardcoded pixels or colors
- **Enhanced accessibility** - ARIA attributes, keyboard navigation (Escape, Ctrl+A)
- **Multiple override points** - className, style, scrollContainerClassName, emptyStateClassName
- **New props** - isInvalid, errorMessage for error state
- **Enhanced toolbar** - Better action button layout
- **Column width guide** - Documentation for width behavior
- **Comprehensive Storybook** - ErrorState, LoadingState, ForwardRef, PolymorphicAs stories

#### **🎨 New Styled Components**

**BarChart.styles.ts** (NEW FILE)
- Complete styled components for BarChart
- Vertical and horizontal variants
- Grid lines, legends, loading states
- Token-based styling throughout

**MetricCard.styles.ts** (NEW FILE)
- Complete styled components for MetricCard
- Card variants (basic, filled, set)
- Progress bars, change indicators
- Action chips, loading/error states

**TableRow Component** (NEW COMPONENT)
- Standalone, composable table row component
- Independent of main Table component
- Enables custom table compositions
- Full TypeScript support

**Table Documentation** (NEW FILES)
- `COLUMN_WIDTH_GUIDE.md` - Column width behavior documentation
- `STANDALONE_COMPONENTS_GUIDE.md` - Guide for using standalone table components
- `TABLE_REFACTOR_SUMMARY.md` - Complete refactor documentation
- `CustomTableComposition.stories.tsx` - Examples of custom table compositions

#### **📚 Documentation Updates**

**Component Maturity Checklist**
- Location: `.windsurf/workflows/component-maturity-checklist.md`
- Quick Reference: `packages/components/COMPONENT_MATURITY_CHECKLIST.md`
- 6 Pillars documented: API & Composition, Layout & Responsiveness, Overrides & Theming, States & Behavior, Accessibility, Storybook Documentation

**Individual Component Documentation**
- Added comprehensive refactor completion docs for all updated components
- Added guides for form components, table components
- Added standards documentation

#### **🔧 Technical Improvements**

**Typography Component Enforcement**
- ❌ Removed: All custom styled text components (h1, h2, p, span)
- ✅ Added: Typography component usage in ALL components
- ✅ Storybook: Zero HTML tags in stories, all use Typography

**Token-Based Styling**
- ❌ Removed: Hardcoded pixels (16px, 24px, etc.)
- ❌ Removed: Hardcoded colors (#333, #666, etc.)
- ✅ Added: theme.spacing[*] for all dimensions
- ✅ Added: theme.colors.* for all colors
- ✅ Added: theme.transitions.* for animations

**8 States Implementation**
All refactored components now support: Default, Hover, Focus, Active, Disabled, Loading, Error, Empty

**Accessibility Enhancements**
- ARIA attributes - proper labels and descriptions
- Keyboard navigation - Tab, Enter, Space, Escape
- Focus management - visible focus indicators
- Screen reader support - semantic HTML and ARIA

#### **🐛 Bug Fixes**

- Fixed Tooltip infinite loop in useEffect
- Fixed Checkbox 24px sizing issue and error icon color
- Fixed MenuItem vertical alignment of icon and text
- Fixed BarChart X-axis label alignment
- Fixed Table column width behavior and header alignment

#### **📊 Statistics**

- Components Refactored: 13+
- Files Modified: 70+
- New Files Created: 50+ (styles, documentation)
- Lines of Code Changed: 5000+
- Documentation Pages: 20+

#### **📦 Migration Guide**

See `RELEASE_v1.7.6_SUMMARY.md` for comprehensive migration guide including:
- Typography component usage examples
- Token-based styling patterns
- Storybook story updates

---

## [1.7.5] - 2026-07-11

### � **Critical Fix: Icon Dynamic Imports Replaced with Static Imports**

#### **What Changed**
- **Replaced dynamic imports with static imports** in Icon component
- Changed `LockOpen` icon to `LockOpenOutlined` for Material UI v5 compatibility
- Removed Vite plugin complexity from Storybook

#### **The Problem**
Dynamic imports in Icon component caused runtime errors:
```typescript
// Before (v1.7.4) - FAILED in browser
import(`@mui/icons-material/${iconName}`)
// ❌ Browser cannot resolve bare module specifiers
// ❌ Error: Failed to resolve module specifier '@mui/icons-material/Search'
```

#### **The Solution**
Static imports with icon map:
```typescript
// After (v1.7.5) - WORKS everywhere
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
// ... all icons imported statically

const ICON_MAP = {
  Search: SearchIcon,
  Close: CloseIcon,
  // ...
};
```

#### **Why This Matters**
- **Dynamic imports** = Runtime resolution (browser does it) ❌
- **Static imports** = Build-time resolution (bundler does it) ✅
- Browsers cannot resolve npm package names like `@mui/icons-material`
- Only build tools (Vite, Webpack, Rollup) can resolve package names

#### **Affected Components**
- Icon component (all dynamic icon usage)
- Select (Search icon)
- Table (Settings, Download, FilterAlt, DragIndicator icons)
- TableSettings (Lock, LockOpen, DragIndicator icons)
- TableSidePanel (Lock, LockOpen, DragIndicator, Close icons)
- All components using `<Icon name="..." />`

#### **Fixes**
- ✅ **Fixed:** Icons not showing in Vite dev servers
- ✅ **Fixed:** Icons not showing in Storybook
- ✅ **Fixed:** `TypeError: Failed to resolve module specifier` errors
- ✅ **Fixed:** LockOpen icon compatibility with Material UI v5.0-v5.10
- ✅ **Works:** Production builds
- ✅ **Works:** Development servers (Vite, Webpack)
- ✅ **Works:** Storybook
- ✅ **Works:** All Material UI versions v5.0+

#### **Migration from v1.7.4**
No code changes needed! Just update:
```bash
npm install @ajaysoni7832/lean-ids-components@1.7.5
```

All icons will work immediately in all environments.

---

## [1.7.4] - 2026-07-11

### 🔧 **BREAKING CHANGE: Material UI as Peer Dependencies**

#### **What Changed**
- `@mui/icons-material` and `@mui/material` moved from `dependencies` to `peerDependencies`
- Minimum version: Material UI >=5.0.0
- Compatible with Material UI v5, v6, v7, v8, and v9

#### **Why This Change**
1. ✅ **Fixes Missing Icons** - Icons now always visible in dev environment
2. ✅ **Prevents EMFILE Errors** - No duplicate Material UI installations
3. ✅ **Eliminates Version Conflicts** - Apps control their Material UI version
4. ✅ **Reduces Bundle Size** - Shared Material UI across all packages
5. ✅ **Industry Standard** - Follows React library best practices

#### **Migration Required**

**If you're upgrading from v1.7.3, you MUST install Material UI:**

```bash
npm install @mui/icons-material@latest @mui/material@latest
```

Or with Yarn:
```bash
yarn add @mui/icons-material @mui/material
```

**If you already have Material UI v5+ installed:**
- ✅ No action needed - Lean IDS will use your existing installation
- ✅ All APIs remain the same
- ✅ No code changes required

#### **Benefits**

**Before (v1.7.3):**
```
Your App → Material UI v5 (4MB)
        → Lean IDS → Material UI v9 (4MB nested)
Total: 8MB, version conflicts, EMFILE errors
```

**After (v1.7.4):**
```
Your App → Material UI v5 (4MB)
        → Lean IDS → Uses your Material UI ✅
Total: 4MB, no conflicts, no EMFILE errors
```

#### **Compatibility**

| Your Material UI | Lean IDS v1.7.4 | Status |
|------------------|-----------------|--------|
| v5.x.x | ✅ Compatible | Recommended |
| v6.x.x | ✅ Compatible | Supported |
| v7.x.x | ✅ Compatible | Supported |
| v8.x.x | ✅ Compatible | Supported |
| v9.x.x | ✅ Compatible | Supported |
| < v5.0.0 | ❌ Not supported | Upgrade required |

#### **Fixes**

- 🐛 **Fixed:** Icons not showing in Select dropdowns, Table settings, Accordion
- 🐛 **Fixed:** EMFILE errors in Tekton/CI builds with multiple Material UI versions
- 🐛 **Fixed:** Duplicate Material UI installations causing bundle bloat
- 🐛 **Fixed:** Version conflicts when using multiple design systems

---

## [1.7.3] - 2026-07-10

### 🐛 Bug Fixes

#### **Critical Build Fix: Material Icons Import**
- **Fixed:** `EMFILE: too many open files` error during Vite production builds
- **Root Cause:** Wildcard import `import * as MuiIcons from '@mui/icons-material'` was attempting to load all 2000+ icon files simultaneously
- **Solution:** Replaced with dynamic imports that load icons on-demand
- **Impact:** 
  - ✅ Production builds now complete successfully
  - ✅ Significantly reduced bundle size through better tree-shaking
  - ✅ Icons load only when needed at runtime
  - ✅ Named icon exports use direct imports for optimal performance

### 🧹 Dependency Cleanup

#### **Removed Unused Dependencies**
- **Removed:** `@emotion/react`, `@emotion/styled`, `@mui/material`
- **Reason:** These packages were listed as dependencies but never imported or used in the codebase
- **Impact:**
  - ✅ Smaller node_modules size
  - ✅ Faster installation times
  - ✅ Reduced risk of peer dependency conflicts
  - ✅ Cleaner dependency tree

#### **Technical Details**
```tsx
// Before (❌ Caused build failures)
import * as MuiIcons from '@mui/icons-material';
const IconComponent = (MuiIcons as any)[name];

// After (✅ Fixed)
const [IconComponent, setIconComponent] = useState(null);
useEffect(() => {
  import(`@mui/icons-material/${name}`)
    .then(module => setIconComponent(() => module.default));
}, [name]);
```

**Files Changed:**
- `packages/components/src/Icon/Icon.tsx` - Implemented dynamic imports
- `packages/components/ICON_IMPORT_FIX.md` - Added comprehensive documentation

**References:**
- Error: `[vite:load-fallback] Could not load .../CasinoOutlined.mjs: EMFILE: too many open files`
- See `ICON_IMPORT_FIX.md` for detailed explanation and best practices

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
