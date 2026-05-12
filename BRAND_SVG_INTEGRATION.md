# Brand SVG Integration

## Overview
Integrated actual SVG files for **Carelon** and **Elevance** brand logos with support for dark/light modes and logo/symbol variants.

---

## SVG Assets Added

### Location
```
/packages/components/src/Brand/assets/
```

### Files (8 SVG files)
```
Brand=Carelon Logo, Mode=Dark.svg      (6018 bytes)
Brand=Carelon Logo, Mode=Light.svg     (6011 bytes)
Brand=Carelon Symbol, Mode=Dark.svg    (2613 bytes)
Brand=Carelon Symbol, Mode=Light.svg   (2606 bytes)
Brand=Elevance Logo, Mode=Dark.svg     (5250 bytes)
Brand=Elevance Logo, Mode=Light.svg    (5241 bytes)
Brand=Elevance Symbol, Mode=Dark.svg   (385 bytes)
Brand=Elevance Symbol, Mode=Light.svg  (381 bytes)
```

---

## Component Updates

### 1. Brand.types.ts ✅
Added new types for brand selection and mode:

```typescript
export type BrandVariant = 'logo' | 'symbol';
export type BrandName = 'carelon' | 'elevance';
export type BrandMode = 'dark' | 'light';

export interface BrandProps {
  variant?: BrandVariant;   // 'logo' or 'symbol'
  brand?: BrandName;        // 'carelon' or 'elevance'
  mode?: BrandMode;         // 'dark' or 'light'
  className?: string;
  alt?: string;
}
```

### 2. Brand.tsx ✅
Updated to import and use actual SVG files:

```typescript
// Import all 8 SVG variants
import CarelonLogoDark from './assets/Brand=Carelon Logo, Mode=Dark.svg';
import CarelonLogoLight from './assets/Brand=Carelon Logo, Mode=Light.svg';
// ... (8 total imports)

export const Brand: React.FC<BrandProps> = ({
  variant = 'logo',
  brand = 'carelon',
  mode = 'dark',
  className,
  alt,
}) => {
  // Select appropriate SVG based on props
  // When background is dark, use light logo (and vice versa)
  const getBrandSvg = () => {
    if (brand === 'carelon') {
      if (variant === 'logo') {
        return mode === 'dark' ? CarelonLogoLight : CarelonLogoDark;
      }
      return mode === 'dark' ? CarelonSymbolLight : CarelonSymbolDark;
    } else {
      // elevance
      if (variant === 'logo') {
        return mode === 'dark' ? ElevanceLogoLight : ElevanceLogoDark;
      }
      return mode === 'dark' ? ElevanceSymbolLight : ElevanceSymbolDark;
    }
  };

  const BrandSvg = getBrandSvg();
  
  return (
    <StyledBrand $variant={variant} className={className}>
      <img src={BrandSvg} alt={alt} />
    </StyledBrand>
  );
};
```

### 3. SideNavigation.tsx ✅
Updated to pass brand and mode props:

```typescript
<Brand 
  variant={isCollapsed ? 'symbol' : 'logo'}
  brand="carelon"
  mode="dark"
/>
```

**Behavior:**
- **Expanded:** Shows Carelon logo (light variant on dark background)
- **Collapsed:** Shows Carelon symbol (light variant on dark background)

### 4. TopHeader.tsx ✅
Updated to pass brand and mode props:

```typescript
<Brand 
  variant="logo"
  brand="carelon"
  mode={mode}  // Uses TopHeader's mode prop
/>
```

**Behavior:**
- **Dark mode:** Shows Carelon logo (light variant on dark background)
- **Light mode:** Shows Carelon logo (dark variant on light background)

### 5. TypeScript Support ✅
Added SVG module declaration:

```typescript
// Brand/assets/svg.d.ts
declare module '*.svg' {
  const content: string;
  export default content;
}
```

---

## Usage Examples

### Basic Usage
```tsx
import { Brand } from '@lean-ids/components';

// Carelon logo, dark mode (default)
<Brand variant="logo" brand="carelon" mode="dark" />

// Carelon symbol, dark mode
<Brand variant="symbol" brand="carelon" mode="dark" />

// Elevance logo, light mode
<Brand variant="logo" brand="elevance" mode="light" />
```

### In Navigation Components

#### SideNavigation
```tsx
<SideNavigation
  state="expanded"  // Shows logo
  // or
  state="collapsed" // Shows symbol
  // Brand is always: carelon, dark mode
/>
```

#### TopHeader
```tsx
<TopHeader
  mode="dark"  // Shows dark logo
  // or
  mode="light" // Shows light logo
  // Brand is always: carelon, logo variant
/>
```

---

## Brand Matrix

| Brand | Variant | Mode | SVG File |
|-------|---------|------|----------|
| Carelon | Logo | Dark | `Brand=Carelon Logo, Mode=Dark.svg` |
| Carelon | Logo | Light | `Brand=Carelon Logo, Mode=Light.svg` |
| Carelon | Symbol | Dark | `Brand=Carelon Symbol, Mode=Dark.svg` |
| Carelon | Symbol | Light | `Brand=Carelon Symbol, Mode=Light.svg` |
| Elevance | Logo | Dark | `Brand=Elevance Logo, Mode=Dark.svg` |
| Elevance | Logo | Light | `Brand=Elevance Logo, Mode=Light.svg` |
| Elevance | Symbol | Dark | `Brand=Elevance Symbol, Mode=Dark.svg` |
| Elevance | Symbol | Light | `Brand=Elevance Symbol, Mode=Light.svg` |

---

## Component Behavior

### SideNavigation
- **Brand:** Carelon (fixed)
- **Mode:** Dark (fixed) = Dark background → Light logo
- **Variant:** 
  - Expanded → Logo (light)
  - Collapsed → Symbol (light)

### TopHeader
- **Brand:** Carelon (fixed)
- **Mode:** Follows TopHeader mode prop
  - Dark mode = Dark background → Light logo
  - Light mode = Light background → Dark logo
- **Variant:** Logo (fixed)

### Important: Mode Logic
The `mode` prop represents the **background color**, not the logo color:
- `mode="dark"` = Dark background → Uses **light** logo for contrast
- `mode="light"` = Light background → Uses **dark** logo for contrast

---

## Switching Brands

To use **Elevance** instead of **Carelon**, update the components:

### SideNavigation
```typescript
<Brand 
  variant={isCollapsed ? 'symbol' : 'logo'}
  brand="elevance"  // Change here
  mode="dark"
/>
```

### TopHeader
```typescript
<Brand 
  variant="logo"
  brand="elevance"  // Change here
  mode={mode}
/>
```

---

## Future Enhancements

### Make Brand Configurable
Add brand prop to navigation components:

```typescript
// SideNavigationProps
interface SideNavigationProps {
  brand?: BrandName;  // Add this
  // ... other props
}

// Usage
<SideNavigation brand="elevance" />
```

### Theme-Based Brand Selection
```typescript
const brand = theme.brand || 'carelon';
<Brand brand={brand} />
```

---

## File Structure

```
Brand/
├── assets/
│   ├── Brand=Carelon Logo, Mode=Dark.svg
│   ├── Brand=Carelon Logo, Mode=Light.svg
│   ├── Brand=Carelon Symbol, Mode=Dark.svg
│   ├── Brand=Carelon Symbol, Mode=Light.svg
│   ├── Brand=Elevance Logo, Mode=Dark.svg
│   ├── Brand=Elevance Logo, Mode=Light.svg
│   ├── Brand=Elevance Symbol, Mode=Dark.svg
│   ├── Brand=Elevance Symbol, Mode=Light.svg
│   ├── svg.d.ts
│   └── README.md
├── Brand.tsx
├── Brand.types.ts
├── Brand.styles.ts
└── index.ts
```

---

## Testing

View in Storybook at http://localhost:6006:

1. **Navigation/SideNavigation**
   - Check expanded state (logo)
   - Check collapsed state (symbol)
   - Both should show Carelon dark variants

2. **Navigation/TopHeader**
   - Check dark mode (Carelon logo dark)
   - Check light mode (Carelon logo light)

---

## Summary

✅ **8 SVG files** integrated (Carelon + Elevance, Logo + Symbol, Dark + Light)  
✅ **Brand component** updated to use actual SVG files  
✅ **SideNavigation** uses Carelon dark mode (logo/symbol based on state)  
✅ **TopHeader** uses Carelon with mode matching header mode  
✅ **TypeScript support** for SVG imports  
✅ **Flexible API** supports both brands and all variants  

**Status:** ✅ Complete  
**Date:** May 8, 2026
