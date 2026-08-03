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
- [ ] **Follow 5 Rules of ARIA** (prefer native HTML, no semantic conflicts, keyboard accessible, no aria-hidden on focusable, accessible names)
- [ ] **Proper ARIA roles** for component type (menuitem, dialog, tab, etc.)
- [ ] **Correct ARIA state attributes** (aria-selected for menus, NOT aria-current)
- [ ] **Semantic HTML elements** (button, nav, main, etc.)
- [ ] **Full keyboard navigation** (Tab, Enter, Space, Escape, Arrows, Home, End)
- [ ] **Focus management** (auto-focus, return focus, focus trap, visible indicators)
- [ ] **Accessible names** for all interactive elements
- [ ] **Proper relationships** (aria-describedby, aria-controls, aria-labelledby)

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
// ❌ WRONG - No semantic HTML, no ARIA
<div onClick={handleClick}>Click me</div>

// ✅ CORRECT - Native HTML (preferred)
<button onClick={handleClick} aria-label="Submit form">
  Click me
</button>

// ❌ WRONG - Using aria-current for menu selection
<li role="menuitem" aria-current="page">Dashboard</li>

// ✅ CORRECT - Use aria-selected for menu items
<li role="menuitem" aria-selected={true} tabIndex={0}>Dashboard</li>

// ❌ WRONG - Unnecessary ARIA (violates Rule 1)
<div role="button" onClick={handleClick}>Click</div>

// ✅ CORRECT - Use native HTML
<button onClick={handleClick}>Click</button>
```

### 🎯 THE 5 RULES OF ARIA (MUST FOLLOW)

**Rule 1: Don't use ARIA if native HTML works**
```typescript
// ❌ BAD
<div role="button" onClick={handleClick}>Click</div>

// ✅ GOOD
<button onClick={handleClick}>Click</button>
```

**Rule 2: Don't change native semantics**
```typescript
// ❌ BAD
<h1 role="button">Title</h1>

// ✅ GOOD
<h1>Title</h1>
<button>Action</button>
```

**Rule 3: All interactive elements must be keyboard accessible**
```typescript
// ❌ BAD
<div onClick={handleClick}>Click</div>

// ✅ GOOD
<div 
  role="button" 
  tabIndex={0} 
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') handleClick();
  }}
>
  Click
</div>

// ✅ BETTER - Use native button
<button onClick={handleClick}>Click</button>
```

**Rule 4: Don't hide focusable elements with aria-hidden**
```typescript
// ❌ BAD
<button aria-hidden="true">Click</button>

// ✅ GOOD
<button style={{ display: 'none' }}>Click</button>
```

**Rule 5: All interactive elements must have accessible names**
```typescript
// ❌ BAD
<button><CloseIcon /></button>

// ✅ GOOD (choose one method)
<button aria-label="Close dialog"><CloseIcon /></button>
<button aria-labelledby="close-label"><CloseIcon /></button>
<button>Close</button>
```

### 📋 ARIA BY COMPONENT TYPE

**Menu Items:**
```typescript
// ✅ CORRECT
<li 
  role="menuitem" 
  aria-selected={isActive}  // Use aria-selected
  tabIndex={isActive ? 0 : -1}
>
  Dashboard
</li>

// ❌ WRONG - Don't use aria-current for menu selection
<li role="menuitem" aria-current="page">Dashboard</li>
```

**Tabs:**
```typescript
<div role="tablist">
  <button 
    role="tab" 
    aria-selected={activeTab === 'general'}
    aria-controls="general-panel"
  >
    General
  </button>
</div>
<div role="tabpanel" id="general-panel">Content</div>
```

**Dialogs:**
```typescript
<div
  role="dialog"
  aria-modal={true}
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Confirm</h2>
  <p id="dialog-description">Are you sure?</p>
</div>
```

**Alerts:**
```typescript
// Immediate announcement
<div role="alert" aria-live="assertive">
  Error: Failed to save
</div>

// Polite announcement
<div role="status" aria-live="polite" aria-atomic="true">
  Saving... 3 items remaining
</div>
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
| **5 Rules of ARIA** | All rules followed | ⬜ |
| **ARIA roles** | Correct for component type | ⬜ |
| **ARIA state attributes** | aria-selected (not aria-current) for menus | ⬜ |
| **Semantic HTML** | Native elements preferred | ⬜ |
| **Keyboard nav** | Tab, Enter, Space, Escape, Arrows | ⬜ |
| **Focus management** | Auto-focus, trap, return, indicators | ⬜ |
| **Accessible names** | All interactive elements | ⬜ |
| **ARIA relationships** | describedby, controls, labelledby | ⬜ |
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
