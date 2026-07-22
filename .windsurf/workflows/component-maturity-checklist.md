---
description: Component Maturity Checklist - Refactor any component to enterprise standards
---

# Component Maturity Checklist Workflow

Use this checklist to refactor any component to meet enterprise-grade standards for customizability, accessibility, and maintainability.

## 🚀 Quick Usage

**Prompt:** "Refactor [ComponentName] using the Component Maturity Checklist"

Or use the shortcut: `/component-maturity-checklist [ComponentName]`

---

## ✅ THE CHECKLIST

### 1. API & COMPOSITION

#### Required:
- [ ] **Explicit TypeScript interface** for all props with comprehensive JSDoc comments
- [ ] **React.forwardRef** to expose the root DOM node
- [ ] **Polymorphism via 'as' prop** where applicable (render as different elements)
- [ ] **Slot/render props** for custom sub-content (e.g., customHeader, customFooter)
- [ ] **Passthrough of standard HTML attributes** (...restProps)

#### Implementation:
```typescript
export interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  // Required props
  /** Description */
  requiredProp: string;
  
  // Polymorphism
  as?: ElementType;
  
  // Slots
  customSlot?: ReactNode | ((props: any) => ReactNode);
  
  // ... other props
}

export const Component = forwardRef<HTMLDivElement, ComponentProps>(
  ({ as, ...restProps }, ref) => {
    const Container = as || 'div';
    return <Container ref={ref} {...restProps} />;
  }
);
```

---

### 2. LAYOUT & RESPONSIVENESS

#### Required:
- [ ] **Absolutely NO hardcoded pixel widths or heights**
  - Use: `rem`, `%`, `vw`, `vh`, `auto`, `min()`, `max()`
  - ❌ Never: `400px`, `600px`, `16px`
- [ ] **Use Flexbox or CSS Grid** with explicit gap and alignment rules
- [ ] **Use CSS variables/design tokens** for colors, spacing, typography
- [ ] **Use Typography component for all text** instead of custom `<h1>`, `<h2>`, `<p>` tags
  - Use: `<Typography variant="headingL">` instead of `<h2>`
  - Use: `<Typography variant="body">` instead of `<p>`
  - ❌ Never create custom styled text components
- [ ] **Ensure fluid layout** that adapts automatically to container

#### Implementation:
```typescript
import { Typography } from '../Typography';

const Container = styled.div`
  /* ✅ CORRECT - Use design tokens */
  width: ${({ $width }) => $width || 'min(90vw, 37.5rem)'};
  max-width: ${({ $maxWidth }) => $maxWidth || '90vw'};
  padding: ${({ theme }) => theme.spacing[4]};
  gap: ${({ theme }) => theme.spacing[2]};
  
  /* ❌ WRONG - Never hardcode */
  /* width: 600px; */
  /* padding: 16px; */
`;

// ✅ CORRECT - Use Typography component
<Typography variant="headingL" weight="semibold" as="h2">
  {title}
</Typography>
<Typography variant="body" as="p">
  {description}
</Typography>

// ❌ WRONG - Don't create custom styled text
const Title = styled.h2`
  font-size: 20px;
  font-weight: 600;
`;
```

---

### 3. OVERRIDES & THEMING

#### Required:
- [ ] **Allow styling overrides via 'className' prop**
- [ ] **Allow styling overrides via 'style' prop**
- [ ] **Multiple override points** for complex components (e.g., overlayClassName, headerClassName)

#### Implementation:
```typescript
interface Props {
  className?: string;
  style?: CSSProperties;
  overlayClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}

<Container className={className} style={style}>
  <Header className={headerClassName} />
  <Body className={bodyClassName} />
  <Footer className={footerClassName} />
</Container>
```

---

### 4. STATES & BEHAVIOR

#### Required - Implement ALL states:
- [ ] **default** - Normal state
- [ ] **hover** - Mouse hover state with visual feedback
- [ ] **focus-visible** - Keyboard focus indicator
- [ ] **active** - Active/pressed state
- [ ] **disabled** - Disabled state (opacity, cursor, interaction blocked)
- [ ] **loading (isLoading)** - Loading state with spinner/indicator
- [ ] **empty (isEmpty)** - Empty state with message
- [ ] **error (isInvalid)** - Error state with visual indicator

#### Required - Expose explicit event callbacks:
- [ ] **onClick, onChange, onSubmit** - Primary actions
- [ ] **onOpen, onClose** - Lifecycle events
- [ ] **onAfterOpen, onAfterClose** - Post-animation events
- [ ] **Custom event handlers** specific to component

#### Implementation:
```typescript
interface Props {
  // States
  isLoading?: boolean;
  isInvalid?: boolean;
  isEmpty?: boolean;
  disabled?: boolean;
  
  // Event callbacks
  onClick?: (e: MouseEvent) => void;
  onChange?: (value: any) => void;
  onOpen?: () => void;
  onClose?: () => void;
  onAfterOpen?: () => void;
  onAfterClose?: () => void;
}

// In styled component
const StyledButton = styled.button`
  &:hover {
    background: ${({ theme }) => theme.colors.semantic.background.secondary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  &:active {
    background: ${({ theme }) => theme.colors.semantic.background.tertiary};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

// Loading overlay
{isLoading && (
  <LoadingOverlay>
    <Spinner />
  </LoadingOverlay>
)}

// Empty state
{isEmpty && (
  <EmptyState>
    <p>{emptyMessage}</p>
  </EmptyState>
)}

// Error state
{isInvalid && errorMessage && (
  <ErrorMessage>{errorMessage}</ErrorMessage>
)}
```

---

### 5. ACCESSIBILITY

#### Required:
- [ ] **Apply proper ARIA attributes**
  - `role`, `aria-label`, `aria-labelledby`, `aria-describedby`
  - `aria-modal`, `aria-expanded`, `aria-selected`, etc.
- [ ] **Use semantic HTML elements**
  - `<button>` not `<div onClick>`
  - `<h1>-<h6>` for headings
  - `<nav>`, `<main>`, `<section>`, etc.
- [ ] **Keyboard navigation support**
  - Tab, Shift+Tab, Enter, Space, Escape, Arrow keys
  - Focus trap for modals/dialogs
- [ ] **Focus management**
  - Auto-focus on open
  - Return focus on close
  - Visible focus indicators

#### Implementation:
```typescript
// ARIA attributes
<Component
  role="dialog"
  aria-modal={true}
  aria-labelledby={titleId}
  aria-describedby={descriptionId}
>

// Semantic HTML
<button onClick={handleClick}>  {/* ✅ */}
<div onClick={handleClick}>     {/* ❌ */}

// Keyboard navigation
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'Enter') onSubmit();
  };
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, []);

// Focus management
useEffect(() => {
  if (isOpen) {
    previousFocus.current = document.activeElement;
    firstFocusable?.focus();
  } else {
    previousFocus.current?.focus();
  }
}, [isOpen]);
```

---

## 🎯 DESIGN TOKEN USAGE

### Always use tokens for:
- ✅ **Colors**: `theme.colors.semantic.*` or `theme.colors.palette.*`
- ✅ **Spacing**: `theme.spacing[*]`
- ✅ **Typography**: `theme.fontSizes[*]`, `theme.fontWeights.*`, `theme.lineHeights[*]`
- ✅ **Border Radius**: `theme.borderRadius.*`
- ✅ **Shadows**: `theme.shadows.*`
- ✅ **Border Width**: `theme.borderWidth[*]`

### Never hardcode:
- ❌ Colors: `#333333`, `rgba(0,0,0,0.5)`
- ❌ Spacing: `16px`, `20px`, `8px`
- ❌ Typography: `14px`, `Arial`, `600`
- ❌ Dimensions: `400px`, `600px`

---

## 📋 VERIFICATION CHECKLIST

Before finalizing, verify:

### API & Composition
- [ ] TypeScript interface with JSDoc comments
- [ ] forwardRef implemented
- [ ] 'as' prop for polymorphism
- [ ] Slot/render props for customization
- [ ] ...restProps passthrough

### Layout & Responsiveness
- [ ] Zero hardcoded pixels in component
- [ ] Flexbox/Grid with gap
- [ ] All tokens used (no hardcoded values)
- [ ] Typography component used (no custom styled text)
- [ ] Fluid and responsive

### Overrides & Theming
- [ ] className prop
- [ ] style prop
- [ ] Multiple override points

### States & Behavior
- [ ] All 8 states implemented
- [ ] All event callbacks exposed
- [ ] Loading state works
- [ ] Error state works
- [ ] Empty state works

### Accessibility
- [ ] ARIA attributes
- [ ] Semantic HTML
- [ ] Keyboard navigation
- [ ] Focus management

### Storybook Documentation
- [ ] Typography imported in stories file
- [ ] **Zero HTML tags** (<h1>, <h2>, <h3>, <p>, <ul>, <li>) in ALL stories
- [ ] All text uses Typography component
- [ ] Comprehensive component description
- [ ] Basic usage example with imports
- [ ] Stories for all states (loading, error, empty)
- [ ] Stories for all sizes/variants
- [ ] Stories for customization (render props, slots)
- [ ] Story for forwardRef usage
- [ ] Each story has descriptive comment
- [ ] Copy-paste ready examples

---

## 🚀 EXECUTION STEPS

### Step 1: Analyze Current Component
- Read existing component code
- Identify missing checklist items
- List hardcoded values to replace

### Step 2: Update Types
- Create comprehensive TypeScript interface
- Add all new props (states, events, overrides)
- Extend HTMLAttributes for passthrough

### Step 3: Refactor Styled Components
- Replace ALL hardcoded values with tokens
- Change pixel units to relative units
- Add all state styles (hover, focus, active, disabled)

### Step 4: Implement forwardRef
- Wrap component with forwardRef
- Combine refs if needed
- Add displayName

### Step 5: Add States
- Implement loading overlay
- Implement error message
- Implement empty state
- Add disabled logic

### Step 6: Add Accessibility
- Add ARIA attributes
- Implement keyboard handlers
- Add focus management
- Use semantic HTML

### Step 7: Add Customization
- Add slot/render props
- Add className overrides
- Add polymorphic 'as' prop

### Step 8: Update Storybook Documentation

#### **CRITICAL: All story examples MUST use Typography component**

**Required Stories (Minimum):**
- [ ] **Default** - Basic usage with all features
- [ ] **All States** - Loading, Error, Empty, Disabled
- [ ] **All Sizes** - If component has size variants
- [ ] **Customization** - Render props, custom slots, className overrides
- [ ] **With Ref** - Demonstrate forwardRef usage
- [ ] **Advanced** - Complex use cases

**Documentation Requirements:**
- [ ] **Component Description** - Comprehensive overview with features list
- [ ] **Basic Usage** - Copy-paste ready example with imports
- [ ] **Size/Variant Guide** - If applicable
- [ ] **States Guide** - How to use loading, error, empty states
- [ ] **Customization Guide** - Render props, slots, overrides
- [ ] **Accessibility Section** - ARIA, keyboard, focus features
- [ ] **Advanced Features** - forwardRef, polymorphism, events

**Typography in Stories:**
- [ ] **Import Typography** - Add to imports: `import { Typography } from '../Typography';`
- [ ] **Replace ALL HTML tags** - No `<h1>`, `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`
- [ ] **Use correct variants** - `headingM` for h3, `body` for p, etc.
- [ ] **Consistent formatting** - Use flexbox with gap for spacing
- [ ] **Bullet lists** - Use Typography with bullet character (•)

**Example Story Pattern:**
```tsx
export const ExampleStory: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div>
        <Button onClick={() => setIsOpen(true)}>Open</Button>
        <Component>
          <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* ✅ CORRECT - Use Typography */}
            <Typography variant="headingM" weight="semibold">Section Title</Typography>
            <Typography variant="body">Body text content</Typography>
            
            {/* ❌ WRONG - Don't use HTML tags */}
            {/* <h3>Section Title</h3> */}
            {/* <p>Body text content</p> */}
          </div>
        </Component>
      </div>
    );
  },
};
```

**Story Documentation Pattern:**
```tsx
/**
 * Story title and description.
 * Explains when to use this pattern and what it demonstrates.
 */
export const StoryName: Story = { ... };
```

---

## 📝 EXAMPLE PROMPT

```
Refactor the [Button/Input/Card/etc] component using the Component Maturity Checklist.

Follow all 5 sections:
1. API & Composition (forwardRef, 'as' prop, slots, restProps)
2. Layout & Responsiveness (NO hardcoded pixels, use tokens)
3. Overrides & Theming (className, style props)
4. States & Behavior (all 8 states, event callbacks)
5. Accessibility (ARIA, semantic HTML, keyboard, focus)

Then update the Storybook documentation with new examples.
```

---

## 🎉 SUCCESS CRITERIA

Component is ready when:
- ✅ All 5 checklist sections complete
- ✅ Zero hardcoded values (component AND stories)
- ✅ All states work
- ✅ Fully accessible
- ✅ Highly customizable
- ✅ Storybook updated with comprehensive documentation
- ✅ **All Storybook examples use Typography component**
- ✅ **No HTML tags (<h1>, <p>, etc.) in any story**
- ✅ TypeScript compliant
- ✅ No layout bugs

---

## 📚 REFERENCE

See completed example: `/packages/components/src/Modal/`
- Modal.types.ts - Comprehensive interface
- Modal.tsx - Full implementation
- Modal.stories.tsx - Complete documentation
- MODAL_REFACTOR_COMPLETE.md - Detailed summary
