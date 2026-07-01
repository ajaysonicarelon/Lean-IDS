# Migration Guide - Lean IDS v1.7.0

This guide helps you migrate from v1.6.x to v1.7.0.

---

## Overview

**v1.7.0** introduces framework compatibility improvements and makes `styled-components` a peer dependency. This is a **minor breaking change** that requires a simple installation step.

---

## Quick Migration (5 minutes)

### Step 1: Update Package

```bash
npm install @ajaysoni7832/lean-ids-components@1.7.0
```

### Step 2: Install styled-components

If you don't already have it:

```bash
npm install styled-components
```

### Step 3: Verify (No Code Changes Needed!)

```tsx
// Your existing code works as-is! ✅
import { Button } from '@ajaysoni7832/lean-ids-components';
import { ThemeProvider } from 'styled-components';
import { carelonTheme } from '@ajaysoni7832/lean-ids-tokens';

function App() {
  return (
    <ThemeProvider theme={carelonTheme}>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

**That's it!** No code changes required.

---

## What Changed?

### styled-components is now a Peer Dependency

**Before (v1.6.x):**
```json
{
  "dependencies": {
    "@ajaysoni7832/lean-ids-components": "^1.6.4"
    // styled-components was bundled automatically
  }
}
```

**After (v1.7.0):**
```json
{
  "dependencies": {
    "@ajaysoni7832/lean-ids-components": "^1.7.0",
    "styled-components": "^6.1.15"  // ← Must install manually
  }
}
```

### Why This Change?

1. **Prevents Conflicts** - Ensures single styled-components instance across your app
2. **Standard Practice** - All major component libraries (Material-UI, Chakra UI) do this
3. **Smaller Bundles** - styled-components not duplicated in your bundle
4. **Version Control** - You control which styled-components version to use

---

## Framework-Specific Migration

### Next.js Projects

If you're using Next.js, add this configuration for optimal performance:

#### 1. Update `next.config.js` (or `next.config.ts`)

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,  // ← Add this
  },
};

module.exports = nextConfig;
```

#### 2. Create Theme Provider (App Router)

```tsx
// app/providers.tsx
'use client';

import { ThemeProvider } from 'styled-components';
import { carelonTheme } from '@ajaysoni7832/lean-ids-tokens';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={carelonTheme}>
      {children}
    </ThemeProvider>
  );
}
```

#### 3. Wrap App in Layout

```tsx
// app/layout.tsx
import { Providers } from './providers';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
```

#### 4. Use Components

```tsx
// app/page.tsx
'use client';  // ← Add for components using hooks

import { Button } from '@ajaysoni7832/lean-ids-components';

export default function Page() {
  return <Button variant="primary">Click me</Button>;
}
```

📖 **See [FRAMEWORK_SUPPORT.md](./FRAMEWORK_SUPPORT.md) for complete Next.js guide**

---

### Vite Projects

No special configuration needed! Just install and use:

```bash
npm install @ajaysoni7832/lean-ids-components@1.7.0 styled-components
```

```tsx
// src/App.tsx
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

---

### Create React App Projects

No changes needed! Just install styled-components:

```bash
npm install styled-components
```

Your existing code continues to work.

---

## New Features in v1.7.0

### Table Component Enhancements

If you're using the Table component, you now have access to:

#### 1. Select All Checkbox

```tsx
<Table
  columns={columns}
  data={data}
  selectable={true}  // ← Now includes "select all" in header
/>
```

#### 2. Global Search

```tsx
<Table
  columns={columns}
  data={data}
  showGlobalSearch={true}  // ← New prop
  globalSearchValue={searchValue}
  onGlobalSearchChange={setSearchValue}
  globalSearchPlaceholder="Search..."
/>
```

#### 3. Sorting Visual Feedback

Headers automatically change background color when sorting is active (no code changes needed).

---

## Theme Options

v1.7.0 clarifies that you can choose between two themes:

### Carelon Theme (Default)

```tsx
import { carelonTheme } from '@ajaysoni7832/lean-ids-tokens';

<ThemeProvider theme={carelonTheme}>
  {/* Your app */}
</ThemeProvider>
```

### Elevance Theme

```tsx
import { elevanceTheme } from '@ajaysoni7832/lean-ids-tokens';

<ThemeProvider theme={elevanceTheme}>
  {/* Your app */}
</ThemeProvider>
```

---

## Troubleshooting

### Issue: "Cannot find module 'styled-components'"

**Solution:** Install styled-components:
```bash
npm install styled-components
```

---

### Issue: "Multiple instances of styled-components"

**Cause:** You have styled-components installed in multiple places.

**Solution:**

1. Check your package.json:
```bash
npm ls styled-components
```

2. If you see duplicates, add resolutions (npm 8.3+):
```json
{
  "overrides": {
    "styled-components": "^6.1.15"
  }
}
```

Or for Yarn:
```json
{
  "resolutions": {
    "styled-components": "^6.1.15"
  }
}
```

---

### Issue: Next.js styles not working

**Solution:** Add compiler config:

```js
// next.config.js
module.exports = {
  compiler: {
    styledComponents: true,
  },
};
```

---

### Issue: Theme not applied

**Solution:** Ensure ThemeProvider wraps your app:

```tsx
// ✅ CORRECT
<ThemeProvider theme={carelonTheme}>
  <YourApp />
</ThemeProvider>

// ❌ WRONG - Missing ThemeProvider
<YourApp />
```

---

## Rollback (If Needed)

If you need to rollback to v1.6.4:

```bash
npm install @ajaysoni7832/lean-ids-components@1.6.4
```

Note: v1.6.4 bundles styled-components, so you can uninstall it if not used elsewhere:

```bash
npm uninstall styled-components
```

---

## Breaking Changes Summary

| Change | Impact | Action Required |
|--------|--------|-----------------|
| styled-components is peer dependency | Low | Install styled-components manually |
| No API changes | None | No code changes needed |
| New Table features | None | Optional - use if needed |

---

## Version Compatibility

| Lean IDS | styled-components | React | Next.js | Vite |
|----------|-------------------|-------|---------|------|
| 1.7.0 | ^6.0.0 | 18.x, 19.x | 13+, 14+, 15+, 16+ | 5.x, 6.x |
| 1.6.x | Bundled | 18.x | 13+, 14+ | 5.x |

---

## Need Help?

### Documentation
- [README.md](./README.md) - Getting started
- [FRAMEWORK_SUPPORT.md](./FRAMEWORK_SUPPORT.md) - Framework-specific guides
- [CHANGELOG.md](./CHANGELOG.md) - Full changelog
- [RELEASE_NOTES.md](./RELEASE_NOTES.md) - Release notes

### Support
- Email: ajay@carelon.com
- Report issues on GitHub/Bitbucket

---

## Summary

**Migration is simple:**

1. ✅ Update package: `npm install @ajaysoni7832/lean-ids-components@1.7.0`
2. ✅ Install styled-components: `npm install styled-components`
3. ✅ (Optional) Configure Next.js if using App Router
4. ✅ No code changes needed!

**Benefits:**
- ✅ Better framework compatibility
- ✅ No version conflicts
- ✅ Smaller bundle sizes
- ✅ New Table features

**Questions?** See [FRAMEWORK_SUPPORT.md](./FRAMEWORK_SUPPORT.md) or contact support.

---

**Welcome to Lean IDS v1.7.0!** 🎉
