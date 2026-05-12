# Color Usage Guide

## Overview
This guide explains the correct way to access colors from the theme to prevent runtime errors.

## Color Structure

The theme has a **two-level color structure**:

### Primary Colors (Direct Access)
These colors are accessed directly from `palette`:

```typescript
theme.colors.palette.primary[500]    // ✅ Correct
theme.colors.palette.neutral[400]    // ✅ Correct
theme.colors.palette.error[500]      // ✅ Correct
theme.colors.palette.success[600]    // ✅ Correct
theme.colors.palette.warning[500]    // ✅ Correct
theme.colors.palette.info[400]       // ✅ Correct
```

### Secondary Colors (Nested Access)
These colors are accessed through `palette.secondary`:

```typescript
theme.colors.palette.secondary.turquoise[400]  // ✅ Correct
theme.colors.palette.secondary.blue[500]       // ✅ Correct
theme.colors.palette.secondary.cyan[300]       // ✅ Correct
theme.colors.palette.secondary.tealgreen[400]  // ✅ Correct
theme.colors.palette.secondary.terracotta[500] // ✅ Correct
theme.colors.palette.secondary.yellow[400]     // ✅ Correct
theme.colors.palette.secondary.pink[500]       // ✅ Correct
theme.colors.palette.secondary.orange[500]     // ✅ Correct
theme.colors.palette.secondary.pantone[400]    // ✅ Correct
```

## Common Mistakes

### ❌ WRONG - Direct access to secondary colors
```typescript
theme.colors.palette.turquoise[400]  // ❌ ERROR: Cannot read properties of undefined
theme.colors.palette.blue[500]       // ❌ ERROR: Cannot read properties of undefined
```

### ✅ CORRECT - Nested access to secondary colors
```typescript
theme.colors.palette.secondary.turquoise[400]  // ✅ Works!
theme.colors.palette.secondary.blue[500]       // ✅ Works!
```

## Color Scale Reference

All color scales follow this pattern (except pink and orange which only have 500):

```typescript
50   // Lightest
100
200
300
400
500  // Base/Default
600
700  // Darkest
800  // (Not available for all colors)
900  // (Not available for all colors)
```

### Neutral Scale (Special Case)
Neutral has an additional `1000` value for true black:

```typescript
theme.colors.palette.neutral[50]    // White
theme.colors.palette.neutral[500]   // Mid gray
theme.colors.palette.neutral[1000]  // True black
```

## Usage Examples

### Buttons
```typescript
// Primary button
background-color: ${({ theme }) => theme.colors.palette.primary[500]};

// Hover state
&:hover {
  background-color: ${({ theme }) => theme.colors.palette.primary[600]};
}

// Focus indicator (turquoise)
&:focus-visible {
  outline: 2px solid ${({ theme }) => theme.colors.palette.secondary.turquoise[400]};
}
```

### Text Colors
```typescript
// Primary text
color: ${({ theme }) => theme.colors.palette.neutral[900]};

// Secondary text
color: ${({ theme }) => theme.colors.palette.neutral[600]};

// Disabled text
color: ${({ theme }) => theme.colors.palette.neutral[400]};
```

### Borders
```typescript
// Default border
border: 1px solid ${({ theme }) => theme.colors.palette.neutral[300]};

// Error border
border: 1px solid ${({ theme }) => theme.colors.palette.error[500]};

// Focus border (turquoise)
border-color: ${({ theme }) => theme.colors.palette.secondary.turquoise[400]};
```

### Backgrounds
```typescript
// Success background
background-color: ${({ theme }) => theme.colors.palette.success[100]};

// Warning background
background-color: ${({ theme }) => theme.colors.palette.warning[100]};

// Info background (using secondary color)
background-color: ${({ theme }) => theme.colors.palette.secondary.cyan[100]};
```

## Focus Indicator Standard

**All keyboard navigation focus indicators MUST use turquoise-400:**

```typescript
// Use the pre-built utilities from /src/styles/focus.ts
import { focusOutline, focusRing, focusBorder } from '../styles/focus';

// For buttons, links, breadcrumbs
const Button = styled.button`
  ${focusOutline}
`;

// For checkboxes, toggles, radio buttons
const Checkbox = styled.div`
  ${HiddenInput}:focus-visible + & {
    ${focusRing}
  }
`;

// For input fields (exception: uses primary-500)
const InputWrapper = styled.div`
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.palette.primary[500]};
  }
`;
```

## Quick Reference Table

| Color Category | Access Path | Example |
|---------------|-------------|---------|
| Primary | `palette.primary[scale]` | `palette.primary[500]` |
| Neutral | `palette.neutral[scale]` | `palette.neutral[400]` |
| Error | `palette.error[scale]` | `palette.error[500]` |
| Success | `palette.success[scale]` | `palette.success[600]` |
| Warning | `palette.warning[scale]` | `palette.warning[500]` |
| Info | `palette.info[scale]` | `palette.info[400]` |
| **Turquoise** | `palette.secondary.turquoise[scale]` | `palette.secondary.turquoise[400]` |
| **Blue** | `palette.secondary.blue[scale]` | `palette.secondary.blue[500]` |
| **Cyan** | `palette.secondary.cyan[scale]` | `palette.secondary.cyan[300]` |
| **Teal Green** | `palette.secondary.tealgreen[scale]` | `palette.secondary.tealgreen[400]` |
| **Terracotta** | `palette.secondary.terracotta[scale]` | `palette.secondary.terracotta[500]` |
| **Yellow** | `palette.secondary.yellow[scale]` | `palette.secondary.yellow[400]` |
| **Pink** | `palette.secondary.pink[500]` | `palette.secondary.pink[500]` (only) |
| **Orange** | `palette.secondary.orange[500]` | `palette.secondary.orange[500]` (only) |
| **Pantone** | `palette.secondary.pantone[scale]` | `palette.secondary.pantone[400]` |

## Type Safety

The theme is fully typed. If you're getting TypeScript errors about missing properties, it means:

1. You're using the wrong path (e.g., `palette.turquoise` instead of `palette.secondary.turquoise`)
2. You're using a scale that doesn't exist (e.g., `pink[400]` - only `pink[500]` exists)
3. The theme typing needs to be updated

## Migration Checklist

When adding new components or updating existing ones:

- [ ] Use `palette.secondary.turquoise[400]` for focus indicators
- [ ] Never access secondary colors directly from `palette`
- [ ] Use the focus utilities from `/src/styles/focus.ts`
- [ ] Test in Storybook to ensure colors render correctly
- [ ] Check browser console for color-related errors

## Related Files

- **Theme Definition**: `/packages/tokens/src/theme.ts`
- **Semantic Colors**: `/packages/tokens/src/semantic-colors.ts`
- **Focus Utilities**: `/packages/components/src/styles/focus.ts`
- **Focus Standard**: `/FOCUS_INDICATOR_STANDARD.md`
