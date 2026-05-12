# Semantic Color Updates Summary

## Overview
Updated semantic color tokens with clear "gray" naming and corrected background.secondary to use gray-50.

---

## Changes Made

### 1. Background Secondary Color
**Changed from:** `neutral[100]` (gray-100)  
**Changed to:** `neutral[50]` (gray-50)

This makes cards, panels, and sidebars have a lighter, cleaner background.

### 2. Added Gray Comments
All color references now include "gray" in comments for clarity, even though the code uses `neutral` (which maps to gray colors).

---

## Complete Semantic Color Mapping

### Text Colors
| Token | Color | Usage |
|-------|-------|-------|
| `text.primary` | **gray-900** | All text (paragraphs, headings, headlines) |
| `text.secondary` | **gray-700** | Muted, caption, tertiary text |
| `text.disabled` | **gray-400** | Disabled text |
| `text.inverse` | **gray-50** | Text on dark backgrounds |
| `text.error` | error-600 | Error messages |
| `text.success` | success-600 | Success messages |
| `text.warning` | warning-700 | Warning messages |

### Background Colors
| Token | Color | Usage |
|-------|-------|-------|
| `background.primary` | **primary-50** | Main app background (theme-specific: Carelon/Elevance) |
| `background.secondary` | **gray-50** ✅ | Cards, panels, sidebars |
| `background.tertiary` | **gray-200** | Nested sections, hover states |
| `background.inverse` | **gray-900** | Dark backgrounds (headers, footers) |
| `background.disabled` | **gray-200** | Disabled element backgrounds |

### Border Colors
| Token | Color | Usage |
|-------|-------|-------|
| `border.default` | **gray-300** | Default borders |
| `border.hover` | **gray-400** | Hover state borders |
| `border.focus` | primary-500 | Focus state borders |
| `border.error` | error-500 | Error state borders |
| `border.disabled` | **gray-200** | Disabled borders |

### Interactive Colors
| Token | Color | Usage |
|-------|-------|-------|
| `interactive.default` | primary-500 | Default interactive elements |
| `interactive.hover` | primary-600 | Hover state |
| `interactive.active` | primary-700 | Active/pressed state |
| `interactive.disabled` | **gray-300** | Disabled interactive elements |

### Focus Colors
| Token | Color | Usage |
|-------|-------|-------|
| `focus.indicator` | turquoise-400 | Keyboard navigation focus (buttons, links, etc.) |
| `focus.input` | turquoise-400 | Input field focus borders |

---

## Visual Hierarchy

```
Background Layers (lightest to darkest):
┌─────────────────────────────────────────┐
│  background.primary (primary-50)        │  ← Main page (theme-specific)
│  ┌───────────────────────────────────┐  │
│  │ background.secondary (gray-50) ✅ │  │  ← Cards, panels (lighter now!)
│  │  ┌─────────────────────────────┐  │  │
│  │  │ background.tertiary         │  │  │  ← Nested sections (gray-200)
│  │  │      (gray-200)             │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘

Dark Background:
┌─────────────────────────────────────────┐
│  background.inverse (gray-900)          │  ← Dark headers, footers
│  [white text on dark background]        │
└─────────────────────────────────────────┘
```

---

## Code Reference

```typescript
// Carelon Theme
export const carelonSemanticColors: SemanticColors = {
  text: {
    primary: carelonColors.neutral[900],      // gray-900
    secondary: carelonColors.neutral[700],    // gray-700
    disabled: carelonColors.neutral[400],     // gray-400
    inverse: carelonColors.neutral[50],       // gray-50
    error: carelonColors.error[600],
    success: carelonColors.success[600],
    warning: carelonColors.warning[700],
  },
  background: {
    primary: carelonColors.primary[50],       // primary-50 (theme-specific)
    secondary: carelonColors.neutral[50],     // gray-50 ✅ UPDATED
    tertiary: carelonColors.neutral[200],     // gray-200
    inverse: carelonColors.neutral[900],      // gray-900
    disabled: carelonColors.neutral[200],     // gray-200
  },
  border: {
    default: carelonColors.neutral[300],      // gray-300
    hover: carelonColors.neutral[400],        // gray-400
    focus: carelonColors.primary[500],
    error: carelonColors.error[500],
    disabled: carelonColors.neutral[200],     // gray-200
  },
  interactive: {
    default: carelonColors.primary[500],
    hover: carelonColors.primary[600],
    active: carelonColors.primary[700],
    disabled: carelonColors.neutral[300],     // gray-300
  },
  focus: {
    indicator: carelonColors.secondary.turquoise[400],
    input: carelonColors.secondary.turquoise[400],
  },
};

// Elevance Theme - Same structure with elevanceColors
```

---

## Usage Examples

### Text Colors
```typescript
// Primary text (gray-900)
<h1 style={{ color: theme.colors.semantic.text.primary }}>
  Heading
</h1>

// Secondary text (gray-700)
<p style={{ color: theme.colors.semantic.text.secondary }}>
  Muted text
</p>

// Disabled text (gray-400)
<span style={{ color: theme.colors.semantic.text.disabled }}>
  Disabled
</span>
```

### Background Colors
```typescript
// Main background (primary-50 - theme-specific)
<body style={{ backgroundColor: theme.colors.semantic.background.primary }}>

// Card background (gray-50) ✅
<Card style={{ backgroundColor: theme.colors.semantic.background.secondary }}>
  Card content
</Card>

// Nested section (gray-200)
<Section style={{ backgroundColor: theme.colors.semantic.background.tertiary }}>
  Nested content
</Section>

// Dark header (gray-900)
<Header style={{ backgroundColor: theme.colors.semantic.background.inverse }}>
  Dark header
</Header>
```

### Border Colors
```typescript
// Default border (gray-300)
<div style={{ border: `1px solid ${theme.colors.semantic.border.default}` }}>
  Content
</div>

// Hover border (gray-400)
<div onHover={{ borderColor: theme.colors.semantic.border.hover }}>
  Hover me
</div>
```

---

## Key Points

✅ **background.secondary** now uses **gray-50** (was gray-100)  
✅ **text.disabled** uses **gray-400**  
✅ All colors documented with "gray" in comments  
✅ `neutral` in code = gray colors (naming convention)  
✅ Both Carelon and Elevance themes updated  

---

## Note on "neutral" vs "gray"

**In the code:** We use `neutral` (e.g., `carelonColors.neutral[900]`)  
**In comments:** We say "gray" (e.g., `// gray-900`)  

This is because:
- The token system uses `neutral` as the technical name
- "Gray" is the common name designers and developers understand
- `neutral[900]` maps to gray-900 color values

Both refer to the same colors - it's just a naming convention! 🎨

---

## Summary

🎨 **Text:** gray-900 (primary), gray-700 (secondary), gray-400 (disabled)  
📦 **Backgrounds:** primary-50 (main), gray-50 (cards), gray-200 (nested)  
🔲 **Borders:** gray-300 (default), gray-400 (hover), gray-200 (disabled)  
🖱️ **Interactive:** gray-300 (disabled)  
✅ **All comments now include "gray" for clarity**  

**Status:** ✅ Complete  
**Date:** May 11, 2026  
**File Updated:** `/packages/tokens/src/semantic-colors.ts`
