# Component Maturity Checklist

**Quick Reference for Enterprise-Grade Component Development**

Use this checklist to ensure all Lean IDS components meet enterprise standards for customizability, accessibility, and maintainability.

---

## 🎯 Quick Command

**Prompt AI with:** 
```
Refactor [ComponentName] using /component-maturity-checklist
```

Or:
```
Build [ComponentName] according to the Component Maturity Checklist
```

---

## ✅ THE 6 PILLARS

### 1. API & COMPOSITION ✨
- [ ] Explicit TypeScript interface with JSDoc
- [ ] React.forwardRef for DOM access
- [ ] Polymorphism via 'as' prop
- [ ] Slot/render props (customHeader, customFooter, etc.)
- [ ] Passthrough HTML attributes (...restProps)

### 2. LAYOUT & RESPONSIVENESS 📐
- [ ] **NO hardcoded pixels** (use rem, %, vw, vh, auto)
- [ ] Flexbox/Grid with explicit gap and alignment
- [ ] CSS variables/design tokens for ALL styling
- [ ] **Use Typography component** for all text (not custom `<h1>`, `<h2>`, `<p>`)
- [ ] Fluid layout that adapts to container

### 3. OVERRIDES & THEMING 🎨
- [ ] className prop for custom styles
- [ ] style prop for inline styles
- [ ] Multiple override points (overlayClassName, headerClassName, etc.)

### 4. STATES & BEHAVIOR ⚡
- [ ] All 8 states: default, hover, focus-visible, active, disabled, loading, empty, error
- [ ] Explicit event callbacks (onClick, onChange, onOpen, onClose, etc.)
- [ ] Loading state with spinner
- [ ] Error state with message
- [ ] Empty state with message

### 5. ACCESSIBILITY ♿
- [ ] Proper ARIA attributes (role, aria-label, aria-modal, etc.)
- [ ] Semantic HTML elements (button, nav, main, etc.)
- [ ] Keyboard navigation (Tab, Enter, Escape, Arrows)
- [ ] Focus management (auto-focus, return focus, focus trap)

### 6. STORYBOOK DOCUMENTATION 📚
- [ ] **Typography component in ALL stories** (no `<h1>`, `<p>`, etc.)
- [ ] Comprehensive component description
- [ ] Stories for all states (loading, error, empty)
- [ ] Stories for all sizes/variants
- [ ] Stories for customization (render props, slots)
- [ ] Story for forwardRef usage
- [ ] Copy-paste ready examples

---

## 🚫 NEVER DO

### ❌ Hardcoded Values
```typescript
// ❌ WRONG
width: 600px;
padding: 16px;
color: #333333;
font-size: 14px;

// ✅ CORRECT
width: ${({ $width }) => $width || 'min(90vw, 37.5rem)'};
padding: ${({ theme }) => theme.spacing[4]};
color: ${({ theme }) => theme.colors.semantic.text.primary};
font-size: ${({ theme }) => theme.fontSizes[14]};
```

### ❌ Missing States
```typescript
// ❌ WRONG - Only default state
<Button>Click</Button>

// ✅ CORRECT - All states
<Button
  disabled={isDisabled}
  isLoading={isLoading}
  onClick={handleClick}
  onHover={handleHover}
>
```

### ❌ Poor Accessibility
```typescript
// ❌ WRONG
<div onClick={handleClick}>Click me</div>

// ✅ CORRECT
<button
  onClick={handleClick}
  aria-label="Submit form"
  role="button"
>
  Click me
</button>
```

---

## ✅ ALWAYS DO

### Design Tokens
```typescript
// Colors
theme.colors.semantic.background.primary
theme.colors.semantic.text.primary
theme.colors.palette.primary[600]

// Spacing
theme.spacing[2], theme.spacing[4], theme.spacing[8]

// Typography - Use Typography Component!
import { Typography } from '../Typography';

<Typography variant="headingL" weight="semibold">Title</Typography>
<Typography variant="body">Body text</Typography>
<Typography variant="caption">Small text</Typography>

// Border & Shadows
theme.borderRadius.sm, theme.borderRadius.md
theme.shadows.md, theme.shadows.xl
theme.borderWidth[1], theme.borderWidth[2]
```

### forwardRef Pattern
```typescript
export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ as, className, style, ...restProps }, ref) => {
    const Container = as || 'div';
    
    return (
      <Container
        ref={ref}
        className={className}
        style={style}
        {...restProps}
      >
        {/* content */}
      </Container>
    );
  }
);

Component.displayName = 'Component';
```

### All States
```typescript
// Loading
{isLoading && <LoadingOverlay><Spinner /></LoadingOverlay>}

// Error
{isInvalid && errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

// Empty
{isEmpty && <EmptyState>{emptyMessage}</EmptyState>}

// Disabled
<Button disabled={disabled || isLoading}>

// Hover, Focus, Active in CSS
&:hover { background: ${({ theme }) => theme.colors.semantic.background.secondary}; }
&:focus-visible { outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator}; }
&:active { background: ${({ theme }) => theme.colors.semantic.background.tertiary}; }
```

---

## 📊 VERIFICATION TABLE

| Requirement | Check | Status |
|------------|-------|--------|
| **TypeScript interface** | Comprehensive with JSDoc | ⬜ |
| **forwardRef** | Exposes DOM node | ⬜ |
| **'as' prop** | Polymorphic rendering | ⬜ |
| **Slot props** | Custom content slots | ⬜ |
| **...restProps** | HTML attribute passthrough | ⬜ |
| **Zero hardcoded pixels** | All relative units | ⬜ |
| **Design tokens** | 100% token usage | ⬜ |
| **Typography component** | Used in component & stories | ⬜ |
| **Flexbox/Grid** | Proper layout | ⬜ |
| **className prop** | Style override | ⬜ |
| **style prop** | Inline style override | ⬜ |
| **8 states** | All implemented | ⬜ |
| **Event callbacks** | All exposed | ⬜ |
| **ARIA attributes** | Proper accessibility | ⬜ |
| **Semantic HTML** | Correct elements | ⬜ |
| **Keyboard nav** | Full support | ⬜ |
| **Focus management** | Auto-focus, return focus | ⬜ |
| **Storybook stories** | All states & variants | ⬜ |
| **No HTML tags in stories** | Only Typography | ⬜ |
| **Copy-paste examples** | Ready to use | ⬜ |

---

## 🎯 COMPONENT TEMPLATE

```typescript
/**
 * [Component] Component
 * 
 * [Description]
 * 
 * Meets Component Maturity Checklist:
 * - Explicit TypeScript interface
 * - React.forwardRef for DOM access
 * - Polymorphism via 'as' prop
 * - Slot/render props
 * - NO hardcoded pixels
 * - Design tokens for all styling
 * - All states implemented
 * - Full accessibility
 */

import React, { forwardRef, useEffect, useRef, useId } from 'react';
import styled from 'styled-components';
import { ComponentProps } from './Component.types';

// Styled components using tokens
const Container = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => theme.spacing[4]};
  background: ${({ theme }) => theme.colors.semantic.background.primary};
  
  &:hover {
    background: ${({ theme }) => theme.colors.semantic.background.secondary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
  }
`;

export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  (
    {
      // Required
      children,
      
      // Polymorphism
      as,
      
      // States
      isLoading = false,
      isInvalid = false,
      isEmpty = false,
      disabled = false,
      
      // Events
      onClick,
      onChange,
      
      // Overrides
      className,
      style,
      
      // Accessibility
      'aria-label': ariaLabel,
      role = 'region',
      
      // Rest
      ...restProps
    },
    ref
  ) => {
    const Container = as || 'div';
    const id = useId();
    
    return (
      <Container
        ref={ref}
        className={className}
        style={style}
        role={role}
        aria-label={ariaLabel}
        {...restProps}
      >
        {isLoading && <LoadingOverlay />}
        {isInvalid && <ErrorMessage />}
        {isEmpty ? <EmptyState /> : children}
      </Container>
    );
  }
);

Component.displayName = 'Component';
```

---

## 📚 REFERENCE IMPLEMENTATION

**See:** `/packages/components/src/Modal/`
- ✅ 50+ props
- ✅ All 5 pillars complete
- ✅ Zero hardcoded values
- ✅ Full accessibility
- ✅ Comprehensive Storybook

---

## 🚀 USAGE

1. **Start refactor:** "Refactor Button using /component-maturity-checklist"
2. **AI follows checklist:** All 5 pillars implemented
3. **Verify:** Check all boxes in verification table
4. **Update Storybook:** Add examples for all features
5. **Done:** Enterprise-ready component! 🎉

---

**Last Updated:** Modal component refactor (Jul 2026)
**Status:** Production-ready template
