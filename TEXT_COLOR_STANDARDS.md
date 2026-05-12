# Text Color Standards

## Overview
All text in the design system now follows a consistent color scheme using **gray-900** for primary text and **gray-500** for muted/caption text.

---

## Color Rules

### ✅ Primary Text (gray-900)
**Use for ALL text content:**
- Paragraphs (`<p>`)
- Headings (`<h1>` - `<h6>`)
- Headlines
- Body text
- Links (`<a>`)
- List items (`<li>`)
- Table cells (`<td>`, `<th>`)
- All other text elements

**Token:** `theme.colors.semantic.text.primary`  
**Value:** `neutral[900]` (gray-900)

### ✅ Secondary Text (gray-700)
**Use for muted, caption, and tertiary text:**
- Captions (`<caption>`)
- Helper text
- Placeholder text
- Metadata
- Timestamps
- Small print (`<small>`)
- Tertiary information

**Token:** `theme.colors.semantic.text.secondary`  
**Value:** `neutral[700]` (gray-700)

### ❌ Never Use
- **gray-1000** - Do not use for any text
- **gray-600** - Replaced with gray-700 for secondary text
- **gray-500** - Not used for text

---

## Implementation

### Semantic Tokens Updated

**File:** `/packages/tokens/src/semantic-colors.ts`

```typescript
export interface SemanticColors {
  text: {
    primary: string;       // All text (paragraphs, headings, headlines) - gray-900
    secondary: string;     // Muted, caption, tertiary text - gray-700
    disabled: string;
    inverse: string;
    error: string;
    success: string;
    warning: string;
  };
}

// Carelon Theme
export const carelonSemanticColors: SemanticColors = {
  text: {
    primary: carelonColors.neutral[900],      // gray-900
    secondary: carelonColors.neutral[700],    // gray-700
    // ...
  },
};

// Elevance Theme
export const elevanceSemanticColors: SemanticColors = {
  text: {
    primary: elevanceColors.neutral[900],     // gray-900
    secondary: elevanceColors.neutral[700],   // gray-700
    // ...
  },
};
```

### Global Styles Updated

**File:** `/packages/components/src/GlobalStyles.ts`

```typescript
body {
  color: ${({ theme }) => theme.colors.semantic.text.primary}; /* gray-900 - default for custom text */
}
```

**Note:** Only the `body` default is set. This ensures custom text elements inherit gray-900, but **existing components maintain their own styles** and are not affected.

---

## Usage in Components

### Custom Text (gray-900)
Custom text elements will automatically inherit gray-900 from body:

```tsx
// Custom text - automatically gray-900
<div>
  <h1>Custom Heading</h1>
  <p>Custom paragraph text</p>
  <span>Custom inline text</span>
</div>
```

**Important:** Existing components (Button, MenuItem, etc.) maintain their own text colors and are **not affected** by this change.

### Muted/Caption Text (gray-500)
Use semantic token for custom muted text:

```tsx
// Using semantic token
<p style={{ color: theme.colors.semantic.text.secondary }}>
  Muted text
</p>

// In styled components
const MutedText = styled.p`
  color: ${({ theme }) => theme.colors.semantic.text.secondary};
`;
```

### In Styled Components
```typescript
// Primary text (gray-900)
const Heading = styled.h1`
  color: ${({ theme }) => theme.colors.semantic.text.primary};
`;

// Secondary/muted text (gray-500)
const Caption = styled.p`
  color: ${({ theme }) => theme.colors.semantic.text.secondary};
`;
```

---

## CSS Utility Classes

### Available Classes

```css
/* Primary text - gray-900 (default) */
.text-primary {
  color: theme.colors.semantic.text.primary;
}

/* Secondary/muted text - gray-500 */
.caption { color: gray-500; }
.muted { color: gray-500; }
.tertiary-text { color: gray-500; }
```

### Usage
```html
<p>This is primary text (gray-900)</p>
<p class="muted">This is muted text (gray-500)</p>
<p class="caption">This is caption text (gray-500)</p>
```

---

## Color Matrix

| Text Type | Token | Color | Usage |
|-----------|-------|-------|-------|
| **Primary** | `text.primary` | gray-900 | All text, headings, paragraphs |
| **Secondary** | `text.secondary` | gray-700 | Captions, muted, helper text |
| **Disabled** | `text.disabled` | gray-400 | Disabled state text |
| **Inverse** | `text.inverse` | gray-50 | Text on dark backgrounds |
| **Error** | `text.error` | error-600 | Error messages |
| **Success** | `text.success` | success-600 | Success messages |
| **Warning** | `text.warning` | warning-700 | Warning messages |

---

## Examples

### Headings and Body Text
```tsx
// All use gray-900 by default
<h1>Main Heading</h1>
<h2>Subheading</h2>
<p>Body paragraph text</p>
```

### Form Labels and Helper Text
```tsx
<label>Email Address</label>  {/* gray-900 */}
<input type="email" />
<small className="muted">We'll never share your email</small>  {/* gray-500 */}
```

### Card with Mixed Text
```tsx
<Card>
  <h3>Card Title</h3>  {/* gray-900 */}
  <p>Card description text</p>  {/* gray-900 */}
  <small className="muted">Last updated 2 hours ago</small>  {/* gray-500 */}
</Card>
```

### Table with Caption
```tsx
<table>
  <caption>Monthly Sales Report</caption>  {/* gray-500 */}
  <thead>
    <tr>
      <th>Month</th>  {/* gray-900 */}
      <th>Sales</th>  {/* gray-900 */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>  {/* gray-900 */}
      <td>$10,000</td>  {/* gray-900 */}
    </tr>
  </tbody>
</table>
```

---

## Migration Guide

### Before
```typescript
// Old - using gray-600 or gray-1000
color: ${({ theme }) => theme.colors.palette.neutral[600]};
color: ${({ theme }) => theme.colors.palette.neutral[1000]};
```

### After
```typescript
// New - using semantic tokens
// For primary text (gray-900)
color: ${({ theme }) => theme.colors.semantic.text.primary};

// For muted/caption text (gray-500)
color: ${({ theme }) => theme.colors.semantic.text.secondary};
```

---

## Benefits

✅ **Consistent Text Colors** - All text uses gray-900 by default  
✅ **Clear Hierarchy** - gray-500 for secondary/muted text  
✅ **Semantic Tokens** - Use `text.primary` and `text.secondary`  
✅ **Global Defaults** - No need to specify colors for every element  
✅ **Accessibility** - Proper contrast ratios  
✅ **No gray-1000** - Removed from usage  

---

## Testing

View the updated text colors in Storybook at http://localhost:6006:

1. **Typography** - Check all heading and text styles
2. **Components** - Verify text colors in all components
3. **Forms** - Check labels, helper text, and captions
4. **Tables** - Verify table text and captions

---

## Summary

🎨 **Primary Text:** gray-900 (neutral[900]) for custom text  
📝 **Secondary Text:** gray-700 (neutral[700]) for captions/muted  
🚫 **Never Use:** gray-1000 for text  
✅ **Custom Text Default:** Inherits gray-900 from body  
✅ **Components Unchanged:** Buttons, MenuItem, etc. keep their own styles  
✅ **Semantic Tokens:** Use `theme.colors.semantic.text.primary` and `text.secondary`  

**Status:** ✅ Complete  
**Date:** May 11, 2026  
**Files Updated:**
- `/packages/tokens/src/semantic-colors.ts` - Updated secondary text to gray-700
- `/packages/components/src/GlobalStyles.ts` - Set body default to gray-900

**What Changed:**
- ✅ Semantic token `text.secondary` now uses gray-700 (was gray-600)
- ✅ Body default color set to gray-900 for custom text
- ✅ **No changes to existing components** - they maintain their own styles
