---
name: mature-component
description: Component Maturity Checklist - Refactor any component to enterprise standards
---

# Component Maturity Checklist Workflow

Use this checklist to refactor any component to meet enterprise-grade standards for customizability, accessibility, and maintainability.

## 🚀 Quick Usage

**Prompt:** "Refactor [ComponentName] using the Component Maturity Checklist"

Or use the shortcut: `/mature-component [ComponentName]`

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
- [ ] **Width control props for responsive design**
  - Add `width`, `maxWidth`, `minWidth` props
  - Accept string values: px, rem, %, vw, vh, min(), max()
  - Default to fluid/auto width if not specified
  - Improves developer experience and responsive design
- [ ] **Use Flexbox or CSS Grid** with explicit gap and alignment rules
- [ ] **Use CSS variables/design tokens** for colors, spacing, typography
- [ ] **Use Typography component for all text** instead of custom `<h1>`, `<h2>`, `<p>` tags
  - Use: `<Typography variant="headingL">` instead of `<h2>`
  - Use: `<Typography variant="body">` instead of `<p>`
  - ❌ Never create custom styled text components
- [ ] **Icon containers must be minimum 16px (spacing[7])**
  - Use: `width: ${({ theme }) => theme.spacing[7]}` (16px)
  - ❌ Never use spacing[3] (8px) or spacing[4] (10px) for icon wrappers
  - Ensures proper touch targets and accessibility
- [ ] **Ensure fluid layout** that adapts automatically to container

#### Implementation:
```typescript
import { Typography } from '../Typography';

// Add width props to interface
interface ComponentProps {
  /** Custom width (e.g., '200px', '50%', 'min(90vw, 600px)') */
  width?: string;
  /** Maximum width constraint */
  maxWidth?: string;
  /** Minimum width constraint */
  minWidth?: string;
}

const Container = styled.div<{ $width?: string; $maxWidth?: string; $minWidth?: string }>`
  /* ✅ CORRECT - Use design tokens and width props */
  width: ${({ $width }) => $width || 'auto'};
  max-width: ${({ $maxWidth }) => $maxWidth};
  min-width: ${({ $minWidth }) => $minWidth};
  padding: ${({ theme }) => theme.spacing[4]};
  gap: ${({ theme }) => theme.spacing[2]};
  
  /* ❌ WRONG - Never hardcode */
  /* width: 600px; */
  /* padding: 16px; */
`;

// Usage
<Component width="min(90vw, 37.5rem)" maxWidth="600px" />

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

// ✅ CORRECT - Icon container minimum 16px
const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing[7]}; /* 16px minimum */
  height: ${({ theme }) => theme.spacing[7]}; /* 16px minimum */
`;

// ❌ WRONG - Icon container too small
const IconWrapper = styled.span`
  width: ${({ theme }) => theme.spacing[3]}; /* 8px - too small! */
  height: ${({ theme }) => theme.spacing[4]}; /* 10px - too small! */
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
- [ ] **Apply proper ARIA attributes** following the 5 Rules of ARIA
- [ ] **Use semantic HTML elements** (prefer native over ARIA when possible)
- [ ] **Keyboard navigation support** (Tab, Enter, Space, Escape, Arrows)
- [ ] **Focus management** (auto-focus, focus trap, visible indicators)
- [ ] **Accessible names** for all interactive elements
- [ ] **State communication** via ARIA attributes for assistive technologies

---

#### **THE 5 RULES OF ARIA** (MUST FOLLOW)

**Rule 1: Don't use ARIA if native HTML works**
```typescript
// ❌ BAD - Unnecessary ARIA
<div role="button" onClick={handleClick}>Click</div>

// ✅ GOOD - Use native HTML
<button onClick={handleClick}>Click</button>
```

**Rule 2: Don't change native semantics**
```typescript
// ❌ BAD - Conflicting semantics
<h1 role="button">Title</h1>
<button role="heading">Action</button>

// ✅ GOOD - Preserve native semantics
<h1>Title</h1>
<button>Action</button>
```

**Rule 3: All interactive elements must be keyboard accessible**
```typescript
// ❌ BAD - Not keyboard accessible
<div onClick={handleClick}>Click</div>

// ✅ GOOD - Keyboard accessible
<div 
  role="button" 
  tabIndex={0} 
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Click
</div>

// ✅ BETTER - Use native button
<button onClick={handleClick}>Click</button>
```

**Rule 4: Don't hide focusable elements with aria-hidden**
```typescript
// ❌ BAD - Focusable but hidden from screen readers
<button aria-hidden="true">Click</button>

// ✅ GOOD - Properly hidden
<button style={{ display: 'none' }}>Click</button>
```

**Rule 5: All interactive elements must have accessible names**
```typescript
// ❌ BAD - No accessible name
<button><CloseIcon /></button>

// ✅ GOOD - Has accessible name (choose one method)
<button aria-label="Close dialog"><CloseIcon /></button>
<button aria-labelledby="close-label"><CloseIcon /></button>
<button>Close</button>
```

---

#### **ARIA ATTRIBUTES BY COMPONENT TYPE**

**Navigation & Menus:**
```typescript
// SideMenu, MenuItem, Tabs
<nav role="navigation" aria-label="Main navigation">
  <ul role="menu">
    <li 
      role="menuitem" 
      aria-selected={isActive}  // ✅ Use aria-selected for menu items
      tabIndex={isActive ? 0 : -1}
    >
      Dashboard
    </li>
  </ul>
</nav>

// ❌ WRONG - Don't use aria-current for menu selection state
<li role="menuitem" aria-current="page">Dashboard</li>

// ✅ CORRECT - Use aria-selected for menu items
<li role="menuitem" aria-selected={true}>Dashboard</li>

// Tabs
<div role="tablist" aria-label="Settings tabs">
  <button 
    role="tab" 
    aria-selected={activeTab === 'general'}
    aria-controls="general-panel"
    id="general-tab"
  >
    General
  </button>
</div>
<div 
  role="tabpanel" 
  aria-labelledby="general-tab"
  id="general-panel"
>
  Content
</div>
```

**Form Controls:**
```typescript
// Input, Select, Checkbox
<label htmlFor="email-input">Email</label>
<input
  id="email-input"
  type="email"
  aria-required={true}
  aria-invalid={hasError}
  aria-describedby={hasError ? "email-error" : undefined}
/>
{hasError && (
  <span id="email-error" role="alert">
    {errorMessage}
  </span>
)}

// Checkbox with description
<input
  type="checkbox"
  id="terms"
  aria-describedby="terms-description"
/>
<label htmlFor="terms">Accept terms</label>
<span id="terms-description">
  By checking this, you agree to our terms of service
</span>
```

**Dialogs & Modals:**
```typescript
<div
  role="dialog"
  aria-modal={true}
  aria-labelledby="dialog-title"
  aria-describedby="dialog-description"
>
  <h2 id="dialog-title">Confirm Action</h2>
  <p id="dialog-description">Are you sure you want to proceed?</p>
  <button onClick={onConfirm}>Confirm</button>
  <button onClick={onCancel}>Cancel</button>
</div>
```

**Alerts & Status:**
```typescript
// AlertBanner, Toast
<div 
  role="alert"  // Announces immediately
  aria-live="assertive"  // Interrupts screen reader
>
  Error: Failed to save
</div>

<div 
  role="status"  // Announces politely
  aria-live="polite"  // Waits for screen reader pause
  aria-atomic="true"  // Reads entire content
>
  Saving... 3 items remaining
</div>

// ProgressBar
<div
  role="progressbar"
  aria-valuenow={progress}
  aria-valuemin={0}
  aria-valuemax={100}
  aria-label="Upload progress"
>
  {progress}%
</div>
```

**Expandable/Collapsible:**
```typescript
// Accordion, Dropdown
<button
  aria-expanded={isOpen}
  aria-controls="content-id"
  onClick={toggleOpen}
>
  Show Details
</button>
<div id="content-id" hidden={!isOpen}>
  Content
</div>
```

**Data Display:**
```typescript
// Table
<table role="table" aria-label="User data">
  <thead>
    <tr role="row">
      <th role="columnheader" aria-sort="ascending">Name</th>
      <th role="columnheader">Email</th>
    </tr>
  </thead>
  <tbody>
    <tr role="row">
      <td role="cell">John Doe</td>
      <td role="cell">john@example.com</td>
    </tr>
  </tbody>
</table>
```

---

#### **KEYBOARD NAVIGATION PATTERNS**

```typescript
// Standard keyboard handlers
const handleKeyDown = (e: React.KeyboardEvent) => {
  switch (e.key) {
    case 'Enter':
    case ' ':  // Space
      e.preventDefault();
      handleActivate();
      break;
    case 'Escape':
      handleClose();
      break;
    case 'ArrowDown':
      e.preventDefault();
      focusNext();
      break;
    case 'ArrowUp':
      e.preventDefault();
      focusPrevious();
      break;
    case 'Home':
      e.preventDefault();
      focusFirst();
      break;
    case 'End':
      e.preventDefault();
      focusLast();
      break;
    case 'Tab':
      // Let default behavior work, but track focus
      if (e.shiftKey) {
        handleShiftTab();
      } else {
        handleTab();
      }
      break;
  }
};
```

---

#### **FOCUS MANAGEMENT**

```typescript
// Auto-focus on open
useEffect(() => {
  if (isOpen) {
    // Store previous focus
    previousFocusRef.current = document.activeElement as HTMLElement;
    
    // Focus first focusable element
    const firstFocusable = containerRef.current?.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as HTMLElement;
    
    firstFocusable?.focus();
  } else {
    // Return focus on close
    previousFocusRef.current?.focus();
  }
}, [isOpen]);

// Focus trap for modals
useEffect(() => {
  if (!isOpen) return;
  
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;
    
    const focusableElements = containerRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    if (!focusableElements || focusableElements.length === 0) return;
    
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;
    
    if (e.shiftKey && document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  };
  
  document.addEventListener('keydown', handleKeyDown);
  return () => document.removeEventListener('keydown', handleKeyDown);
}, [isOpen]);

// Visible focus indicators
const StyledButton = styled.button`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  /* Remove default outline, but keep for :focus-visible */
  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
```

---

#### **COMMON ARIA PATTERNS REFERENCE**

| Component Type | Role | Key Attributes |
|----------------|------|----------------|
| Button | `button` | `aria-label`, `aria-pressed`, `aria-expanded` |
| Menu Item | `menuitem` | `aria-selected`, `tabIndex` |
| Tab | `tab` | `aria-selected`, `aria-controls` |
| Dialog | `dialog` | `aria-modal`, `aria-labelledby`, `aria-describedby` |
| Alert | `alert` | `aria-live="assertive"` |
| Status | `status` | `aria-live="polite"`, `aria-atomic` |
| Checkbox | `checkbox` | `aria-checked`, `aria-labelledby` |
| Radio | `radio` | `aria-checked`, `aria-labelledby` |
| Switch | `switch` | `aria-checked`, `aria-label` |
| Tooltip | `tooltip` | `aria-describedby` (on trigger) |
| Combobox | `combobox` | `aria-expanded`, `aria-controls`, `aria-activedescendant` |

---

#### **TESTING ACCESSIBILITY**

```typescript
// Test with keyboard only
// - Can you reach all interactive elements with Tab?
// - Can you activate with Enter/Space?
// - Can you close with Escape?
// - Does focus trap work in modals?

// Test with screen reader (VoiceOver, NVDA, JAWS)
// - Are all elements announced correctly?
// - Are states communicated (selected, expanded, etc.)?
// - Are relationships clear (labels, descriptions)?

// Automated testing
import { render, screen } from '@testing-library/react';

test('has proper ARIA attributes', () => {
  render(<MenuItem state="active" label="Dashboard" />);
  
  const menuItem = screen.getByRole('menuitem', { name: 'Dashboard' });
  expect(menuItem).toHaveAttribute('aria-selected', 'true');
  expect(menuItem).toHaveAttribute('tabIndex', '0');
});
```

---

#### **WHY THIS MATTERS**

- **Users**: 15% of world population has disabilities - ARIA makes your product usable
- **Developers**: Semantic attributes enable better styling (`[aria-selected="true"]`) and testing
- **Business**: Legal compliance (WCAG 2.1, ADA, Section 508), broader market reach
- **Quality**: Forces you to think about component states and behavior clearly

---

### 6. STORYBOOK DOCUMENTATION

#### Required:
- [ ] **Typography component in ALL stories** (no `<h1>`, `<p>`, etc.)
- [ ] **Comprehensive component description**
- [ ] **Stories for all states** (loading, error, empty)
- [ ] **Stories for all sizes/variants**
- [ ] **Stories for customization** (render props, slots)
- [ ] **Story for forwardRef usage**
- [ ] **Copy-paste ready examples**

---

### 7. PERFORMANCE & SCALABILITY ⚡

**Applies to ALL components:**

- [ ] **Memoization** of expensive computations
  - Use `useMemo()` for heavy calculations (filtering, sorting, mapping large arrays)
  - Use `React.memo()` for expensive child components
  - Use `useCallback()` for stable function references passed as props
  
- [ ] **Performance warnings** in development
  - Console warnings for inefficient usage patterns
  - Prop validation for performance-critical configurations
  - Documentation of performance best practices

**Applies to components with user input (Search, Filter, Autocomplete):**

- [ ] **Debounced inputs** for search/filter operations
  - Default: 300ms delay
  - Configurable via `debounceDelay` prop
  - Separate immediate (`onInput`) and debounced (`onChange`) callbacks
  - Update UI immediately, delay expensive operations

**Applies to components with continuous events (Scroll, Resize, MouseMove):**

- [ ] **Throttled event handlers**
  - Default: 100-200ms interval
  - Configurable via `throttleDelay` prop
  - Prevents browser overload during continuous events

**Applies to list-based components (Select, Table, Menu, Tree, Autocomplete):**

- [ ] **Virtual scrolling** for large datasets (100+ items)
  - Use `react-window` or `react-virtual` library
  - Configurable via `enableVirtualization` prop
  - Auto-warn if disabled with large datasets
  - Document `itemHeight` prop requirement
  
- [ ] **Lazy loading** for heavy content
  - Load items on-demand as user scrolls
  - Pagination support as alternative to virtualization
  
- [ ] **Performance documentation**
  - Document performance characteristics
  - Provide examples with large datasets (1000+ items)
  - Storybook story demonstrating performance with large data
  - Clear guidance on when to enable optimizations

#### Implementation:

```typescript
// ============================================================================
// PERFORMANCE PROPS
// ============================================================================

interface SelectProps {
  // Debouncing
  /**
   * Debounce delay for search input (ms)
   * Reduces API calls and re-renders
   * @default 300
   */
  searchDebounceDelay?: number;
  
  /**
   * Callback fired when search query changes (debounced)
   */
  onSearchChange?: (query: string) => void;
  
  /**
   * Callback fired on every keystroke (immediate, not debounced)
   */
  onSearchInput?: (query: string) => void;
  
  // Virtual Scrolling
  /**
   * Enable virtual scrolling for large datasets
   * Recommended for 100+ options
   * @default false
   */
  enableVirtualization?: boolean;
  
  /**
   * Height of each item in pixels (required for virtualization)
   * @default 40
   */
  itemHeight?: number;
  
  /**
   * Maximum items to render without virtualization warning
   * @default 100
   */
  maxItemsBeforeWarning?: number;
}

// ============================================================================
// MEMOIZATION
// ============================================================================

const Select = ({ options, searchQuery, enableVirtualization = false }) => {
  // ✅ Memoize expensive filtering operation
  const filteredOptions = useMemo(() => {
    if (!searchQuery) return options;
    return options.filter(opt => 
      opt.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [options, searchQuery]); // Only recalculate when these change
  
  // ✅ Memoize callback to prevent child re-renders
  const handleSelect = useCallback((value: string) => {
    onChange?.(value);
  }, [onChange]);
  
  // ...
};

// ✅ Memoize expensive child component
const OptionItem = React.memo(({ option, onSelect }) => {
  return <div onClick={() => onSelect(option.value)}>{option.label}</div>;
});

// ============================================================================
// DEBOUNCING
// ============================================================================

import { debounce } from 'lodash';

const Select = ({ onSearchChange, searchDebounceDelay = 300 }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // ✅ Debounce search to reduce API calls
  const debouncedSearch = useMemo(
    () => debounce((query: string) => {
      onSearchChange?.(query); // External callback (e.g., API call)
    }, searchDebounceDelay),
    [onSearchChange, searchDebounceDelay]
  );
  
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);      // Update UI immediately
    debouncedSearch(query);      // Debounced callback
  };
  
  // Cleanup on unmount
  useEffect(() => {
    return () => debouncedSearch.cancel();
  }, [debouncedSearch]);
  
  return <InputField value={searchQuery} onChange={handleSearchChange} />;
};

// ============================================================================
// THROTTLING
// ============================================================================

import { throttle } from 'lodash';

const InfiniteScroll = ({ onScroll, throttleDelay = 100 }) => {
  // ✅ Throttle scroll handler
  const throttledScroll = useMemo(
    () => throttle((e: Event) => {
      onScroll?.(e);
    }, throttleDelay),
    [onScroll, throttleDelay]
  );
  
  useEffect(() => {
    window.addEventListener('scroll', throttledScroll);
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      throttledScroll.cancel();
    };
  }, [throttledScroll]);
};

// ============================================================================
// VIRTUAL SCROLLING
// ============================================================================

import { FixedSizeList } from 'react-window';

const Select = ({ 
  options, 
  enableVirtualization = false,
  itemHeight = 40,
  maxItemsBeforeWarning = 100
}) => {
  // ⚠️ Performance warning
  useEffect(() => {
    if (options.length > maxItemsBeforeWarning && !enableVirtualization) {
      console.warn(
        `⚠️ Select has ${options.length} options. ` +
        `Enable virtualization for better performance:\n` +
        `<Select enableVirtualization={true} itemHeight={40} />`
      );
    }
  }, [options.length, enableVirtualization, maxItemsBeforeWarning]);
  
  return (
    <DropdownContainer>
      {enableVirtualization ? (
        // ✅ Virtual: Renders only ~10 visible items
        <FixedSizeList
          height={300}
          itemCount={options.length}
          itemSize={itemHeight}
          width="100%"
        >
          {({ index, style }) => (
            <OptionItem style={style} option={options[index]} />
          )}
        </FixedSizeList>
      ) : (
        // Non-virtual: Renders ALL items
        <div style={{ maxHeight: '300px', overflow: 'auto' }}>
          {options.map(opt => (
            <OptionItem key={opt.value} option={opt} />
          ))}
        </div>
      )}
    </DropdownContainer>
  );
};

// ============================================================================
// PERFORMANCE WARNINGS
// ============================================================================

// Warn about large datasets
if (process.env.NODE_ENV === 'development') {
  if (options.length > 100 && !enableVirtualization) {
    console.warn(
      `⚠️ Performance Warning: Select component has ${options.length} options.\n` +
      `Consider enabling virtualization:\n` +
      `<Select enableVirtualization={true} />`
    );
  }
  
  if (searchable && !searchDebounceDelay) {
    console.warn(
      `⚠️ Performance Warning: Searchable Select should use debouncing.\n` +
      `Add searchDebounceDelay prop (default: 300ms)`
    );
  }
}
```

#### Performance Impact Examples:

**Search with 1000 options:**
- ❌ No debounce: 13 filter operations for "United States" = ~260ms
- ✅ With debounce: 1 filter operation = ~20ms
- **92% faster!**

**Scroll event:**
- ❌ No throttle: 500+ events per second = browser lag
- ✅ With 100ms throttle: 10 events per second = smooth
- **98% fewer events!**

**Select with 5000 options:**
- ❌ No virtualization: 5000 DOM nodes = 2000ms lag
- ✅ With virtualization: 10 DOM nodes = 50ms smooth
- **97% faster!**

**Filtering without memoization:**
- ❌ No memo: Filters on every render = 100ms × 10 renders = 1000ms
- ✅ With memo: Filters once = 100ms
- **90% faster!**

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
- [ ] Follows 5 Rules of ARIA (prefer native HTML, no semantic conflicts, keyboard accessible, no aria-hidden on focusable, accessible names)
- [ ] Proper ARIA roles for component type (menuitem, dialog, tab, etc.)
- [ ] Correct ARIA state attributes (aria-selected for menus, NOT aria-current)
- [ ] Semantic HTML elements (button, nav, main, etc.)
- [ ] Full keyboard navigation (Tab, Enter, Space, Escape, Arrows, Home, End)
- [ ] Focus management (auto-focus, focus trap, return focus, visible indicators)
- [ ] Accessible names for all interactive elements (aria-label, aria-labelledby, or text content)
- [ ] Proper relationships (aria-describedby, aria-controls, aria-labelledby)

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

### Performance & Scalability
- [ ] Memoization (useMemo, useCallback, React.memo)
- [ ] Performance warnings for large datasets
- [ ] Debounced inputs (if searchable/filterable)
- [ ] Throttled handlers (if scroll/resize/mousemove)
- [ ] Virtual scrolling (if list with 100+ items)
- [ ] Performance documentation
- [ ] Storybook story with large dataset (1000+ items)

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

Follow all 7 pillars:
1. API & Composition (forwardRef, 'as' prop, slots, restProps)
2. Layout & Responsiveness (NO hardcoded pixels, use tokens)
3. Overrides & Theming (className, style props)
4. States & Behavior (all 8 states, event callbacks)
5. Accessibility (ARIA, semantic HTML, keyboard, focus)
6. Storybook Documentation (Typography in ALL stories)
7. Performance & Scalability (memoization, debouncing, virtualization)

Then update the Storybook documentation with new examples.
```

---

## 🎉 SUCCESS CRITERIA

Component is ready when:
- ✅ All 7 checklist pillars complete
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