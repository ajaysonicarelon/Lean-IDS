# Button Color Specification

## Overview
All button variants (Primary, Secondary, Tertiary) now follow a consistent color scheme across all button types (Default, Safe, Warning, Alert).

---

## Color Scheme Rules

### Base Colors (Default State)
- **Default:** `primary-400`
- **Safe:** `success-500` (green-500)
- **Warning:** `warning-700` (yellow-700)
- **Alert:** `error-500` (red-500)

### Hover State
**2 shades lighter** than default:
- **Default:** `primary-300`
- **Safe:** `success-300` (green-300)
- **Warning:** `warning-500` (yellow-500)
- **Alert:** `error-300` (red-300)

### Active/Focus State
**1 shade lighter** than default:
- **Default:** `primary-400`
- **Safe:** `success-400` (green-400)
- **Warning:** `warning-600` (yellow-600)
- **Alert:** `error-400` (red-400)

---

## Complete Color Matrix

### PRIMARY VARIANT (Filled Background)

| Button Type | Default | Hover | Active |
|------------|---------|-------|--------|
| **Default** | primary-400 | primary-300 | primary-400 |
| **Safe** | success-500 | success-300 | success-400 |
| **Warning** | warning-700 | warning-500 | warning-600 |
| **Alert** | error-500 | error-300 | error-400 |

**Text Color:** `neutral-50` (white) for all states

---

### SECONDARY VARIANT (Border + Transparent)

| Button Type | Default | Hover | Active |
|------------|---------|-------|--------|
| **Default** | primary-400 | primary-300 | primary-400 |
| **Safe** | success-500 | success-300 | success-400 |
| **Warning** | warning-700 | warning-500 | warning-600 |
| **Alert** | error-500 | error-300 | error-400 |

**Background:** Transparent for all states  
**Border & Text:** Use the same color as shown in the table

---

### TERTIARY VARIANT (Text Only)

| Button Type | Default | Hover | Active |
|------------|---------|-------|--------|
| **Default** | primary-400 | primary-300 | primary-400 |
| **Safe** | success-500 | success-300 | success-400 |
| **Warning** | warning-700 | warning-500 | warning-600 |
| **Alert** | error-500 | error-300 | error-400 |

**Background:** Transparent for all states  
**Border:** None  
**Text:** Use the color shown in the table

---

## Visual Examples

### Primary Buttons
```
Default:  [primary-400 bg] → hover: [primary-300 bg] → active: [primary-400 bg]
Safe:     [green-500 bg]   → hover: [green-300 bg]   → active: [green-400 bg]
Warning:  [yellow-700 bg]  → hover: [yellow-500 bg]  → active: [yellow-600 bg]
Alert:    [red-500 bg]     → hover: [red-300 bg]     → active: [red-400 bg]
```

### Secondary Buttons
```
Default:  [primary-400 border] → hover: [primary-300 border] → active: [primary-400 border]
Safe:     [green-500 border]   → hover: [green-300 border]   → active: [green-400 border]
Warning:  [yellow-700 border]  → hover: [yellow-500 border]  → active: [yellow-600 border]
Alert:    [red-500 border]     → hover: [red-300 border]     → active: [red-400 border]
```

### Tertiary Buttons
```
Default:  [primary-400 text] → hover: [primary-300 text] → active: [primary-400 text]
Safe:     [green-500 text]   → hover: [green-300 text]   → active: [green-400 text]
Warning:  [yellow-700 text]  → hover: [yellow-500 text]  → active: [yellow-600 text]
Alert:    [red-500 text]     → hover: [red-300 text]     → active: [red-400 text]
```

---

## Implementation Details

### Primary Variant
```typescript
// Safe button example
background-color: ${theme.colors.palette.success[500]};  // green-500
color: ${theme.colors.palette.neutral[50]};              // white

&:hover {
  background-color: ${theme.colors.palette.success[300]}; // green-300 (2 lighter)
}

&:active {
  background-color: ${theme.colors.palette.success[400]}; // green-400 (1 lighter)
}
```

### Secondary Variant
```typescript
// Safe button example
background-color: transparent;
color: ${theme.colors.palette.success[500]};             // green-500
border: 1px solid ${theme.colors.palette.success[500]};  // green-500

&:hover {
  border-color: ${theme.colors.palette.success[300]};    // green-300 (2 lighter)
  color: ${theme.colors.palette.success[300]};
}

&:active {
  border-color: ${theme.colors.palette.success[400]};    // green-400 (1 lighter)
  color: ${theme.colors.palette.success[400]};
}
```

### Tertiary Variant
```typescript
// Safe button example
background-color: transparent;
color: ${theme.colors.palette.success[500]};             // green-500
border: none;

&:hover {
  color: ${theme.colors.palette.success[300]};           // green-300 (2 lighter)
}

&:active {
  color: ${theme.colors.palette.success[400]};           // green-400 (1 lighter)
}
```

---

## Disabled State
All variants use the same disabled colors:
- **Background:** `neutral-300` (Primary) or `transparent` (Secondary/Tertiary)
- **Text:** `neutral-400` or `neutral-500`
- **Border:** `neutral-300` (Secondary only)

---

## Usage in Storybook

View all button variants at http://localhost:6006:

**Components/Button**
- Primary Default, Safe, Warning, Alert
- Secondary Default, Safe, Warning, Alert
- Tertiary Default, Safe, Warning, Alert
- All sizes: xsmall, small, medium, large, xlarge
- Disabled states

---

## Summary

✅ **Consistent Colors** across all variants  
✅ **Primary-400** for default buttons  
✅ **Green-500** for safe buttons  
✅ **Yellow-700** for warning buttons  
✅ **Red-500** for alert buttons  
✅ **2 shades lighter** on hover  
✅ **1 shade lighter** on active/focus  

**Status:** ✅ Complete  
**Date:** May 11, 2026  
**Files Updated:** `Button.styles.ts`
