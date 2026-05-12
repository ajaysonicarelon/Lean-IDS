# Background Color Update

## Overview
The primary background color now uses **theme-specific primary-50** instead of neutral-50, allowing the background to change based on the active theme (Carelon or Elevance).

---

## What Changed

### Before
```typescript
background: {
  primary: carelonColors.neutral[50],  // Same for both themes
  // ...
}
```

### After
```typescript
// Carelon Theme
background: {
  primary: carelonColors.primary[50],  // Carelon-specific primary-50
  // ...
}

// Elevance Theme
background: {
  primary: elevanceColors.primary[50],  // Elevance-specific primary-50
  // ...
}
```

---

## Impact

### Theme-Aware Background
The primary background color now changes automatically when switching between themes:

- **Carelon Theme:** Uses Carelon's `primary[50]` color
- **Elevance Theme:** Uses Elevance's `primary[50]` color

This creates a more branded experience where the background reflects the active theme's primary color palette.

---

## Usage

### In Components
```typescript
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.semantic.background.primary};
`;
```

When the theme switches from Carelon to Elevance, the background will automatically update to use the new theme's primary-50 color.

### In GlobalStyles
```typescript
body {
  background-color: ${({ theme }) => theme.colors.semantic.background.primary};
}
```

The body background will now reflect the active theme's primary color.

---

## Background Color Tokens

| Token | Color | Usage |
|-------|-------|-------|
| `background.primary` | **primary-50** (theme-specific) | Main background - changes per theme |
| `background.secondary` | neutral-100 | Secondary background |
| `background.tertiary` | neutral-200 | Tertiary background |
| `background.inverse` | neutral-900 | Dark background |
| `background.disabled` | neutral-200 | Disabled state background |

---

## Examples

### Carelon Theme
```typescript
// When Carelon theme is active
background.primary → carelonColors.primary[50]
// Uses Carelon's primary-50 color
```

### Elevance Theme
```typescript
// When Elevance theme is active
background.primary → elevanceColors.primary[50]
// Uses Elevance's primary-50 color
```

### Component Example
```tsx
import { useTheme } from 'styled-components';

const MyComponent = () => {
  const theme = useTheme();
  
  return (
    <div style={{ 
      backgroundColor: theme.colors.semantic.background.primary 
    }}>
      {/* Background changes with theme */}
    </div>
  );
};
```

---

## Benefits

✅ **Theme-Aware Backgrounds** - Background reflects active theme  
✅ **Branded Experience** - Uses theme's primary color palette  
✅ **Automatic Updates** - Changes when theme switches  
✅ **Consistent API** - Still uses `background.primary` token  
✅ **No Component Changes** - Existing components work as-is  

---

## Implementation Details

**File:** `/packages/tokens/src/semantic-colors.ts`

```typescript
export interface SemanticColors {
  background: {
    primary: string;       // primary-50 (theme-specific: Carelon/Elevance)
    secondary: string;
    tertiary: string;
    inverse: string;
    disabled: string;
  };
}

// Carelon Theme
export const carelonSemanticColors: SemanticColors = {
  background: {
    primary: carelonColors.primary[50],       // Carelon primary-50
    secondary: carelonColors.neutral[100],
    tertiary: carelonColors.neutral[200],
    inverse: carelonColors.neutral[900],
    disabled: carelonColors.neutral[200],
  },
  // ...
};

// Elevance Theme
export const elevanceSemanticColors: SemanticColors = {
  background: {
    primary: elevanceColors.primary[50],      // Elevance primary-50
    secondary: elevanceColors.neutral[100],
    tertiary: elevanceColors.neutral[200],
    inverse: elevanceColors.neutral[900],
    disabled: elevanceColors.neutral[200],
  },
  // ...
};
```

---

## Testing

View the updated background colors in Storybook at http://localhost:6006:

1. Switch between **Carelon** and **Elevance** themes
2. Observe the background color change
3. Verify all components display correctly with the new background

---

## Summary

🎨 **Background:** Now uses theme-specific primary-50  
🔄 **Dynamic:** Changes automatically with theme  
✅ **Carelon:** Uses Carelon's primary-50  
✅ **Elevance:** Uses Elevance's primary-50  
✅ **Components:** No changes needed - automatic update  

**Status:** ✅ Complete  
**Date:** May 11, 2026  
**File Updated:** `/packages/tokens/src/semantic-colors.ts`
