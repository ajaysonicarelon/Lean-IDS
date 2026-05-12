# Theme-Aware Branding

## Overview
The Brand component now automatically switches between **Carelon** and **Elevance** logos based on the active theme, making it easy to support multi-brand applications.

---

## How It Works

### Automatic Brand Detection
The Brand component reads `theme.name` from the styled-components theme context:

```typescript
const theme = useTheme();
const brandName = brand || (theme.name as 'carelon' | 'elevance') || 'carelon';
```

**Logic:**
1. If `brand` prop is explicitly provided → Use that brand
2. Else, use `theme.name` from the active theme
3. Fallback to `'carelon'` if neither is available

---

## Theme Structure

Your project has two themes defined in `@lean-ids/tokens`:

```typescript
// Carelon Theme
export const carelonTheme: Theme = {
  name: 'carelon',
  colors: { palette: carelonColors, semantic: semanticColors },
  // ... other theme properties
};

// Elevance Theme
export const elevanceTheme: Theme = {
  name: 'elevance',
  colors: { palette: elevanceColors, semantic: semanticColors },
  // ... other theme properties
};
```

---

## Usage

### Automatic (Recommended)
Simply use the Brand component without the `brand` prop - it will automatically use the theme:

```tsx
import { Brand } from '@lean-ids/components';

// Automatically uses theme.name
<Brand variant="logo" mode="dark" />
<Brand variant="symbol" mode="light" />
```

**Result:**
- With `carelonTheme` → Shows Carelon logo
- With `elevanceTheme` → Shows Elevance logo

### Manual Override
You can still explicitly specify a brand if needed:

```tsx
// Force Carelon regardless of theme
<Brand variant="logo" brand="carelon" mode="dark" />

// Force Elevance regardless of theme
<Brand variant="logo" brand="elevance" mode="dark" />
```

---

## Navigation Components

### SideNavigation
Now automatically uses the theme brand:

```tsx
<Brand 
  variant={isCollapsed ? 'symbol' : 'logo'}
  mode="dark"
  // No brand prop - uses theme.name automatically
/>
```

**Behavior:**
- With `carelonTheme` → Shows Carelon logo/symbol
- With `elevanceTheme` → Shows Elevance logo/symbol

### TopHeader
Now automatically uses the theme brand:

```tsx
<Brand 
  variant="logo"
  mode={mode}
  // No brand prop - uses theme.name automatically
/>
```

**Behavior:**
- With `carelonTheme` → Shows Carelon logo
- With `elevanceTheme` → Shows Elevance logo

---

## Switching Themes

### Method 1: At App Root
Wrap your app with the appropriate theme:

```tsx
import { ThemeProvider } from '@lean-ids/components';
import { carelonTheme, elevanceTheme } from '@lean-ids/tokens';

// Carelon App
function CarelonApp() {
  return (
    <ThemeProvider theme={carelonTheme}>
      <App />
    </ThemeProvider>
  );
}

// Elevance App
function ElevanceApp() {
  return (
    <ThemeProvider theme={elevanceTheme}>
      <App />
    </ThemeProvider>
  );
}
```

### Method 2: Dynamic Theme Switching
Allow users to switch themes at runtime:

```tsx
import { useState } from 'react';
import { ThemeProvider } from '@lean-ids/components';
import { carelonTheme, elevanceTheme, themes } from '@lean-ids/tokens';

function App() {
  const [currentTheme, setCurrentTheme] = useState(carelonTheme);

  const switchTheme = (themeName: 'carelon' | 'elevance') => {
    setCurrentTheme(themes[themeName]);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <button onClick={() => switchTheme('carelon')}>Carelon</button>
      <button onClick={() => switchTheme('elevance')}>Elevance</button>
      
      <SideNavigation />
      <TopHeader />
    </ThemeProvider>
  );
}
```

### Method 3: Environment-Based
Use environment variables to set the theme:

```tsx
import { ThemeProvider } from '@lean-ids/components';
import { themes } from '@lean-ids/tokens';

const themeName = process.env.REACT_APP_BRAND || 'carelon';
const theme = themes[themeName as 'carelon' | 'elevance'];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
```

---

## Brand Matrix with Theme

| Theme | Variant | Mode | SVG Used |
|-------|---------|------|----------|
| `carelonTheme` | Logo | Dark | Carelon Logo Light |
| `carelonTheme` | Logo | Light | Carelon Logo Dark |
| `carelonTheme` | Symbol | Dark | Carelon Symbol Light |
| `carelonTheme` | Symbol | Light | Carelon Symbol Dark |
| `elevanceTheme` | Logo | Dark | Elevance Logo Light |
| `elevanceTheme` | Logo | Light | Elevance Logo Dark |
| `elevanceTheme` | Symbol | Dark | Elevance Symbol Light |
| `elevanceTheme` | Symbol | Light | Elevance Symbol Dark |

---

## Complete Example

```tsx
import { ThemeProvider } from '@lean-ids/components';
import { SideNavigation, TopHeader, Footer } from '@lean-ids/components';
import { carelonTheme, elevanceTheme } from '@lean-ids/tokens';
import { useState } from 'react';

function MultiTenantApp() {
  const [theme, setTheme] = useState(carelonTheme);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex', height: '100vh' }}>
        {/* Sidebar - automatically shows correct brand */}
        <SideNavigation
          state="expanded"
          groups={navigationGroups}
          user={currentUser}
        />
        
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Header - automatically shows correct brand */}
          <TopHeader
            mode="dark"
            appName="My Application"
            menuItems={headerMenuItems}
          />
          
          {/* Theme Switcher */}
          <div style={{ padding: '20px' }}>
            <button onClick={() => setTheme(carelonTheme)}>
              Switch to Carelon
            </button>
            <button onClick={() => setTheme(elevanceTheme)}>
              Switch to Elevance
            </button>
          </div>
          
          <main style={{ flex: 1 }}>
            {/* Your content */}
          </main>
          
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
```

---

## Benefits

✅ **Automatic Brand Switching** - Change theme, brand updates automatically  
✅ **No Code Changes** - Navigation components don't need updates  
✅ **Centralized Control** - Theme controls both colors and branding  
✅ **Flexible** - Can still override brand manually if needed  
✅ **Multi-Tenant Ready** - Easy to support multiple brands in one app  

---

## Testing in Storybook

To test theme switching in Storybook, you can create stories with different themes:

```tsx
import { ThemeProvider } from '@lean-ids/components';
import { carelonTheme, elevanceTheme } from '@lean-ids/tokens';

export const CarelonBrand: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={carelonTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    state: 'expanded',
  },
};

export const ElevanceBrand: Story = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={elevanceTheme}>
        <Story />
      </ThemeProvider>
    ),
  ],
  args: {
    state: 'expanded',
  },
};
```

---

## Migration Guide

### Before (Hardcoded Brand)
```tsx
<Brand variant="logo" brand="carelon" mode="dark" />
```

### After (Theme-Aware)
```tsx
<Brand variant="logo" mode="dark" />
```

The brand is now automatically determined by the active theme!

---

## Summary

🎯 **Key Change:** Brand component now reads `theme.name` automatically  
🔄 **Automatic Switching:** Change theme → Brand updates  
📦 **Navigation Components:** SideNavigation and TopHeader use theme brand  
🎨 **Flexible:** Can still override with explicit `brand` prop if needed  

**Status:** ✅ Complete  
**Date:** May 8, 2026  
**Impact:** All navigation components now respond to theme changes automatically
