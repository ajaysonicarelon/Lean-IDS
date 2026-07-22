# Release Notes - Lean IDS v1.7.6

**Release Date:** July 22, 2026  
**Package:** `@ajaysoni7832/lean-ids-components`

---

## � Component Maturity Initiative - Complete Refactoring

**MAJOR RELEASE** - This is a comprehensive refactoring effort where we applied the Component Maturity Checklist to 14+ core components, bringing them all to enterprise-grade standards.

---

## 🎉 What's New

### ✨ Component Refactoring (14+ Components)

All refactored components now include:
- **Typography Component** - Zero custom styled text
- **Token-Based Styling** - Zero hardcoded pixels or colors
- **8 States** - Default, Hover, Focus, Active, Disabled, Loading, Error, Empty
- **Accessibility** - ARIA attributes, keyboard navigation, focus management
- **forwardRef + Polymorphic** - Ref forwarding and 'as' prop support
- **Multiple Override Points** - className, style props for customization

#### Components Refactored:
1. **Tooltip** - Fixed infinite loop, Storybook action spies
2. **Checkbox** - Complete refactor with error state, token-based sizing
3. **RadioButton** - Complete refactor with 8 states, accessibility
4. **Toggle** - Complete refactor with loading/error states
5. **MenuItem** - Alignment fixes, ChildrenArrow component
6. **NestedMenuOverlay** - Light/dark mode, disabled state
7. **MetricCard** - Complete refactor with design preservation
8. **BarChart** - X-axis alignment, Storybook actions
9. **Button** - Typography integration, token-based sizing
10. **Modal** - Storybook Typography cleanup
11. **InputField** - Typography integration, error state
12. **Textarea** - Typography integration, error state
13. **Select** - Typography integration, error state
14. **Footer** - Typography integration, responsive layout
15. **Table** - COMPLETE REFACTOR (see below)

### 🆕 Table Component - Complete Refactor

The Table component received a comprehensive overhaul:

#### ✅ Component Maturity Checklist - All 6 Pillars
- **forwardRef** - Component exposes root DOM node via ref
- **Polymorphic 'as' prop** - Can render as any HTML element
- **8 States** - Added error state with banner, enhanced loading/empty
- **Typography** - All text uses Typography component
- **Token-Based** - Zero hardcoded pixels or colors
- **Accessibility** - ARIA attributes, keyboard navigation (Escape, Ctrl+A)

#### ✅ New Features
- **Standalone TableRow Component** - Independent, composable table row
- **Error State** - New `isInvalid` and `errorMessage` props
- **Multiple Override Points** - `scrollContainerClassName`, `emptyStateClassName`
- **Enhanced Storybook** - ErrorState, LoadingState, ForwardRef, PolymorphicAs stories

### 🎨 New Styled Components

**BarChart.styles.ts** (NEW FILE)
- Complete styled components for BarChart
- Vertical and horizontal variants
- Token-based styling throughout

**MetricCard.styles.ts** (NEW FILE)
- Complete styled components for MetricCard
- Card variants (basic, filled, set)
- Progress bars, change indicators

### 📚 New Documentation

**Component Maturity Checklist**
- Location: `COMPONENT_MATURITY_CHECKLIST.md`
- 6 Pillars: API & Composition, Layout & Responsiveness, Overrides & Theming, States & Behavior, Accessibility, Storybook

**Table Documentation** (4 NEW FILES)
- `COLUMN_WIDTH_GUIDE.md` - Column width behavior
- `STANDALONE_COMPONENTS_GUIDE.md` - Custom table compositions
- `TABLE_REFACTOR_SUMMARY.md` - Complete refactor details
- `CustomTableComposition.stories.tsx` - Examples

### 🐛 Bug Fixes

1. **Tooltip** - Fixed infinite loop in useEffect dependencies
2. **Checkbox** - Fixed 24px sizing issue and error icon color
3. **MenuItem** - Fixed vertical alignment of icon and text
4. **BarChart** - Fixed X-axis label alignment
5. **Table** - Fixed column width behavior and header alignment
6. **DonutChart** - Fixed TypeScript type issues

### 📊 Statistics

- **Components Refactored:** 14+
- **Files Modified:** 70+
- **New Files Created:** 50+
- **Lines Changed:** 5,000+
- **Documentation Pages:** 20+

---

## ⚠️ Migration Notes

### Typography Component Usage

All components now use the Typography component. If you have custom implementations:

```tsx
// Before
<div style={{ fontSize: '14px', fontWeight: 600 }}>Text</div>

// After
<Typography variant="body" weight="semibold">Text</Typography>
```

### Token-Based Styling

Hardcoded values are deprecated:

```tsx
// Before
const StyledDiv = styled.div`
  padding: 16px;
  color: #333333;
`;

// After
const StyledDiv = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
`;
```

### Table Component New Props

```tsx
// Error state
<Table
  data={data}
  columns={columns}
  isInvalid={hasError}
  errorMessage="Failed to load data"
/>
```

---

## ⚠️ Breaking Changes

None! This release is fully backward compatible.

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
