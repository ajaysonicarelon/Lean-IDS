# Focus Indicator Standard

## Overview

All keyboard navigation focus indicators across the Lean IDS design system use **semantic focus colors**. This ensures consistent accessibility and visual feedback for keyboard users across all components.

### Semantic Focus Colors

- **`theme.colors.semantic.focus.indicator`**: For all interactive elements (buttons, links, breadcrumbs, checkboxes, toggles, etc.)
  - Currently: **turquoise-400** (`#1AC2C1`)
- **`theme.colors.semantic.focus.input`**: For input fields (text inputs, textareas, selects, etc.)
  - Currently: **primary-500** (brand blue)

### Why Semantic Colors?

Using semantic colors allows you to **change the focus color system-wide** by updating just one place:
```typescript
// /packages/tokens/src/semantic-colors.ts
focus: {
  indicator: carelonColors.secondary.turquoise[400], // Change this to update all components!
  input: carelonColors.primary[500],
}
```

## Design Tokens

```
Semantic Token: theme.colors.semantic.focus.indicator
Current Value: turquoise-400 (#1AC2C1)
Usage: Keyboard navigation focus for interactive elements

Semantic Token: theme.colors.semantic.focus.input
Current Value: primary-500 (brand blue)
Usage: Focus border for input fields
```

## Why Turquoise-400?

- **Accessibility**: High contrast against most backgrounds
- **Consistency**: Single focus color across entire design system
- **Distinction**: Clearly different from primary, error, and success colors
- **WCAG Compliance**: Meets WCAG 2.1 AA contrast requirements

---

## Implementation Guidelines

### React Components (styled-components)

**Recommended:** Use the provided focus utilities from `@/styles/focus`:

```tsx
import { focusOutline, focusBorder, focusRing } from '../styles/focus';

// For buttons, links, breadcrumbs, interactive elements
const Button = styled.button`
  ${focusOutline}  // Uses theme.colors.semantic.focus.indicator
`;

// For input fields (uses semantic.focus.input)
const InputWrapper = styled.div`
  ${focusBorder}  // Uses theme.colors.semantic.focus.input
`;

// For checkboxes, toggles, radio buttons
const Checkbox = styled.div`
  ${HiddenInput}:focus-visible + & {
    ${focusRing}  // Uses theme.colors.semantic.focus.indicator
  }
`;
```

**Manual Implementation** (if not using utilities):

```tsx
// For interactive elements
const Button = styled.button`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`;

// For input fields
const Input = styled.input`
  &:focus {
    border-color: ${({ theme }) => theme.colors.semantic.focus.input};
  }
`;
```

### Angular Components

Use the semantic focus CSS variables:

```scss
// For input fields
.input-field {
  border: 1px solid gray;
  
  &:focus {
    border-color: var(--focus-input, var(--primary-500, #5009B5));
  }
}

// For buttons and interactive elements
.button {
  &:focus-visible {
    outline: 2px solid var(--focus-indicator, var(--turquoise-400, #1AC2C1));
    outline-offset: 2px;
  }
}

// For checkboxes, toggles
.checkbox {
  &:focus-visible {
    box-shadow: 0 0 0 2px var(--focus-indicator, var(--turquoise-400, #1AC2C1));
  }
}
```

**CSS Variables Available:**
- `--focus-indicator`: For all interactive elements (currently turquoise-400)
- `--focus-input`: For input fields (currently primary-500)

---

## Component-Specific Guidelines

### Input Fields
**Exception:** Input fields use **primary-500** (brand blue) instead of turquoise-400

- **Focus**: Border changes to primary-500 (brand blue)
- **Error + Focus**: Border remains error-500 (red)
- **Disabled**: No focus indicator

```tsx
border-color: ${({ $isFocused, $error }) => {
  if ($error) return theme.colors.palette.error[500];
  if ($isFocused) return theme.colors.palette.primary[500]; // Input fields use primary
  return theme.colors.palette.neutral[400];
}};
```

### Buttons
- **Focus**: 2px outline in turquoise-400
- **Offset**: 2px from button edge
- **Only on keyboard focus**: Use `:focus-visible`

```tsx
&:focus-visible {
  outline: 2px solid ${({ theme }) => theme.colors.palette.turquoise[400]};
  outline-offset: 2px;
}
```

### Links
- **Focus**: 2px outline in turquoise-400
- **Underline**: Maintain existing underline style

### Checkboxes & Radio Buttons
- **Focus**: Ring around control in turquoise-400
- **Size**: 2px ring with 2px offset

### Dropdowns & Selects
- **Focus**: Border changes to turquoise-400
- **Open state**: Maintain turquoise-400 border

### Tabs
- **Focus**: Outline in turquoise-400
- **Active tab**: Keep active indicator, add focus outline

---

## Accessibility Requirements

### WCAG 2.1 AA Compliance

✅ **Required:**
- Focus indicators MUST be visible
- Focus indicators MUST have 3:1 contrast ratio with background
- Focus indicators MUST be at least 2px thick
- Focus indicators MUST be visible on all interactive elements

❌ **Forbidden:**
- Do NOT remove focus indicators without replacement
- Do NOT use `outline: none` without custom focus style
- Do NOT use colors other than turquoise-400 for focus

### Keyboard Navigation

All interactive elements must support:
- **Tab**: Move to next focusable element
- **Shift + Tab**: Move to previous focusable element
- **Enter/Space**: Activate element (context-dependent)
- **Escape**: Close/cancel (for modals, dropdowns)

---

## Testing Checklist

Before deploying any component, verify:

- [ ] Focus indicator is visible on keyboard navigation
- [ ] Focus indicator uses turquoise-400
- [ ] Focus indicator has sufficient contrast (3:1 minimum)
- [ ] Focus indicator is at least 2px thick
- [ ] `:focus-visible` is used (not just `:focus`)
- [ ] Focus indicator works in all component states
- [ ] Tab order is logical and predictable
- [ ] Screen readers announce focus changes

---

## Examples

### ✅ Correct Implementation

```tsx
// Input Field
const InputWrapper = styled.div`
  border: 1px solid gray;
  
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.palette.turquoise[400]};
  }
`;

// Button
const Button = styled.button`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.palette.turquoise[400]};
    outline-offset: 2px;
  }
`;
```

### ❌ Incorrect Implementation

```tsx
// DON'T: Using primary color for focus
&:focus {
  border-color: ${({ theme }) => theme.colors.palette.primary[500]}; // ❌
}

// DON'T: Removing focus without replacement
&:focus {
  outline: none; // ❌
}

// DON'T: Using :focus instead of :focus-visible
&:focus {
  outline: 2px solid turquoise; // ❌ Should use :focus-visible
}
```

---

## Migration Guide

If you have existing components using different focus colors:

1. **Find all focus styles:**
   ```bash
   grep -r "focus" packages/components/src --include="*.ts" --include="*.tsx"
   ```

2. **Replace with turquoise-400:**
   - Change `primary[500]` → `turquoise[400]`
   - Change custom colors → `turquoise[400]`
   - Use focus utilities from `@/styles/focus`

3. **Test keyboard navigation:**
   - Tab through all interactive elements
   - Verify focus indicator is visible
   - Check contrast ratios

4. **Update documentation:**
   - Document focus behavior in Storybook
   - Add accessibility notes

---

## Resources

- **Focus Utilities**: `/packages/components/src/styles/focus.ts`
- **Color Tokens**: `/packages/tokens/src/colors.ts`
- **WCAG 2.1 Focus Visible**: https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html
- **Storybook Accessibility Addon**: For automated testing

---

## Questions?

For questions or clarifications about focus indicator standards, please refer to:
- Design System Team
- Accessibility Guidelines
- Figma Design Specifications
