# Figma Make to Lean IDS - Cheatsheet

**Quick reference for designers rebuilding with Lean IDS**

---

## 🎯 Component Mapping

| Figma Element | Lean IDS Component | Import From |
|---------------|-------------------|-------------|
| Button | `Button` | `@ajaysoni7832/lean-ids-components` |
| Text Input | `InputField` | `@ajaysoni7832/lean-ids-components` |
| Text Area | `TextArea` | `@ajaysoni7832/lean-ids-components` |
| Dropdown | `Select` | `@ajaysoni7832/lean-ids-components` |
| Checkbox | `Checkbox` | `@ajaysoni7832/lean-ids-components` |
| Radio Button | `RadioButton` | `@ajaysoni7832/lean-ids-components` |
| Toggle/Switch | `Toggle` | `@ajaysoni7832/lean-ids-components` |
| Modal/Dialog | `Modal` | `@ajaysoni7832/lean-ids-components` |
| Side Panel | `Drawer` | `@ajaysoni7832/lean-ids-components` |
| Data Table | `Table` | `@ajaysoni7832/lean-ids-components` |
| Card/Container | `Card` | `@ajaysoni7832/lean-ids-components` |
| User Avatar | `Avatar` | `@ajaysoni7832/lean-ids-components` |
| Status Badge | `Badge` | `@ajaysoni7832/lean-ids-components` |
| Tag/Chip | `Chip` | `@ajaysoni7832/lean-ids-components` |
| Alert Banner | `AlertBanner` | `@ajaysoni7832/lean-ids-components` |
| Toast | `Toast` | `@ajaysoni7832/lean-ids-components` |
| Tabs | `Tabs` | `@ajaysoni7832/lean-ids-components` |
| Breadcrumbs | `Breadcrumbs` | `@ajaysoni7832/lean-ids-components` |
| Top Navigation | `TopHeader` | `@ajaysoni7832/lean-ids-components` |
| Sidebar | `SideNavigation` | `@ajaysoni7832/lean-ids-components` |
| Page Layout | `PageLayout` | `@ajaysoni7832/lean-ids-components` |
| **Any Text** | `Typography` | `@ajaysoni7832/lean-ids-components` |
| Icons | Material Icons | `@mui/icons-material` |

---

## 🚨 Critical Rules

### ✅ ALWAYS DO
```tsx
// ✅ Use Lean IDS components
import { Button, InputField } from '@ajaysoni7832/lean-ids-components';

// ✅ Use theme tokens
padding: ${({ theme }) => theme.spacing[4]}
color: ${({ theme }) => theme.colors.semantic.text.primary}

// ✅ Use Typography for text
<Typography variant="headingL">Title</Typography>

// ✅ Use responsive units
width: min(90vw, 75rem)

// ✅ Use Material Icons
import { Home, Settings } from '@mui/icons-material';
```

### ❌ NEVER DO
```tsx
// ❌ External UI libraries
import { Button } from '@mui/material';
import { Input } from 'antd';

// ❌ Hardcoded values
padding: 16px
color: #333333
width: 600px

// ❌ HTML text tags
<h1>Title</h1>
<p>Text</p>

// ❌ Gradients
background: linear-gradient(...)

// ❌ Custom components
const CustomButton = styled.button`...`;
```

---

## 🎨 Theme Token Reference

### Colors
```tsx
// Semantic colors (preferred)
theme.colors.semantic.text.primary
theme.colors.semantic.text.secondary
theme.colors.semantic.background.primary
theme.colors.semantic.background.secondary
theme.colors.semantic.border.default
theme.colors.semantic.focus.indicator

// Palette colors
theme.colors.palette.primary[600]
theme.colors.palette.neutral[900]
theme.colors.palette.success[500]
theme.colors.palette.error[500]
theme.colors.palette.warning[500]
theme.colors.palette.info[500]
```

### Spacing
```tsx
theme.spacing[1]  // 2px
theme.spacing[2]  // 4px
theme.spacing[3]  // 8px
theme.spacing[4]  // 12px
theme.spacing[5]  // 16px
theme.spacing[6]  // 20px
theme.spacing[7]  // 24px
theme.spacing[8]  // 32px
theme.spacing[9]  // 40px
theme.spacing[10] // 48px
```

### Typography
```tsx
// Font families
theme.fonts.primary
theme.fonts.secondary

// Font sizes
theme.fontSizes.displayL
theme.fontSizes.displayM
theme.fontSizes.displayS
theme.fontSizes.headingXL
theme.fontSizes.headingL
theme.fontSizes.headingM
theme.fontSizes.headingS
theme.fontSizes.body
theme.fontSizes.paragraph
theme.fontSizes.caption
theme.fontSizes.code

// Font weights
theme.fontWeights.regular
theme.fontWeights.medium
theme.fontWeights.semibold
theme.fontWeights.bold

// Line heights
theme.lineHeights.tight
theme.lineHeights.normal
theme.lineHeights.relaxed
```

### Border Radius
```tsx
theme.borderRadius.sm   // 4px
theme.borderRadius.md   // 8px
theme.borderRadius.lg   // 12px
theme.borderRadius.xl   // 16px
theme.borderRadius.full // 9999px
```

### Shadows
```tsx
theme.shadows.small
theme.shadows.medium
theme.shadows.large
theme.shadows.xlarge
```

---

## 📐 Layout Patterns

### Page Layout Variants

**Top Bar Only:**
```tsx
<PageLayout
  variant="topbar-only"
  pageTitle="Dashboard"
  topHeader={{ appName: "My App", userInitials: "JD" }}
>
  {content}
</PageLayout>
```

**Sidebar Only:**
```tsx
<PageLayout
  variant="sidebar-only"
  pageTitle="Settings"
  sideNav={{ groups: [...], user: {...} }}
>
  {content}
</PageLayout>
```

**Top Bar + Sidebar:**
```tsx
<PageLayout
  variant="topbar-sidebar"
  pageTitle="Dashboard"
  topHeader={{ appName: "My App", userInitials: "JD" }}
  sideNav={{ groups: [...], user: {...} }}
>
  {content}
</PageLayout>
```

---

## 🎯 Typography Variants

```tsx
// Display (largest)
<Typography variant="displayL">Display Large</Typography>
<Typography variant="displayM">Display Medium</Typography>
<Typography variant="displayS">Display Small</Typography>

// Headings
<Typography variant="headingXL">Heading XL</Typography>
<Typography variant="headingL">Heading Large</Typography>
<Typography variant="headingM">Heading Medium</Typography>
<Typography variant="headingS">Heading Small</Typography>

// Body text
<Typography variant="body">Body text</Typography>
<Typography variant="paragraph">Paragraph text</Typography>
<Typography variant="caption">Caption text</Typography>
<Typography variant="code">Code text</Typography>

// With semantic HTML
<Typography variant="headingL" as="h1">Page Title</Typography>
<Typography variant="body" as="p">Body paragraph</Typography>

// With weight
<Typography variant="headingM" weight="semibold">Bold heading</Typography>
<Typography variant="body" weight="medium">Medium text</Typography>
```

---

## 🎨 Button Variants

```tsx
// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="tertiary">Tertiary</Button>

// Sizes
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>

// Types
<Button buttonType="default">Default</Button>
<Button buttonType="success">Success</Button>
<Button buttonType="danger">Danger</Button>
<Button buttonType="warning">Warning</Button>

// States
<Button disabled>Disabled</Button>
<Button isLoading>Loading</Button>

// With icon
import { Add } from '@mui/icons-material';
<Button startIcon={<Add />}>Add Item</Button>
```

---

## 📝 Form Components

```tsx
// Input Field
<InputField
  label="Email"
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  error={hasError}
  errorMessage="Invalid email"
  helperText="We'll never share your email"
/>

// Select
<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' }
  ]}
  value={country}
  onChange={(e) => setCountry(e.target.value)}
/>

// Checkbox
<Checkbox
  label="Accept terms"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
/>

// Radio Button
<RadioButton
  label="Option 1"
  name="options"
  value="option1"
  checked={selected === 'option1'}
  onChange={(e) => setSelected(e.target.value)}
/>

// Toggle
<Toggle
  label="Enable notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

---

## 🎭 Modal & Drawer

```tsx
// Modal (for dialogs, popups)
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  size="medium"
>
  <Typography variant="body">Are you sure?</Typography>
  <Button onClick={handleConfirm}>Confirm</Button>
</Modal>

// Drawer (for side panels)
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Filters"
  position="right"
  size="medium"
>
  {/* Filter content */}
</Drawer>
```

---

## 📊 Data Display

```tsx
// Table
<Table
  columns={[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email', sortable: true },
    { key: 'status', label: 'Status' }
  ]}
  data={users}
  selectable={true}
  showGlobalSearch={true}
  onSort={handleSort}
  onSelectionChange={handleSelection}
/>

// Tabs
<Tabs
  tabs={[
    { id: 'tab1', label: 'Tab 1', content: <div>Content 1</div> },
    { id: 'tab2', label: 'Tab 2', content: <div>Content 2</div> }
  ]}
  activeTab="tab1"
  onChange={setActiveTab}
/>

// Badge
<Badge label="Active" type="success" />
<Badge label="Pending" type="warning" />
<Badge label="Error" type="error" />

// Chip
<Chip label="React" onRemove={() => removeTag('react')} />
```

---

## ♿ Accessibility Checklist

### ARIA Attributes
```tsx
// Buttons
<button aria-label="Close dialog">×</button>

// Menu items
<li role="menuitem" aria-selected={isActive}>Dashboard</li>

// Modals
<div role="dialog" aria-modal="true" aria-labelledby="title">
  <h2 id="title">Dialog Title</h2>
</div>

// Form inputs
<input
  aria-required={true}
  aria-invalid={hasError}
  aria-describedby="error-message"
/>

// Loading states
<div role="status" aria-live="polite" aria-busy={isLoading}>
  Loading...
</div>
```

### Keyboard Navigation
- **Tab** - Move focus forward
- **Shift + Tab** - Move focus backward
- **Enter** - Activate button/link
- **Space** - Activate button/checkbox
- **Escape** - Close modal/drawer
- **Arrow keys** - Navigate menus/tabs
- **Home/End** - First/last item

### Focus Management
```tsx
// Visible focus indicator
&:focus-visible {
  outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
  outline-offset: 2px;
}

// Auto-focus on open
useEffect(() => {
  if (isOpen) {
    firstFocusableElement?.focus();
  }
}, [isOpen]);
```

---

## 🎨 Responsive Design

### Breakpoints
```tsx
// Mobile first approach
const Container = styled.div`
  /* Mobile (default) */
  padding: ${({ theme }) => theme.spacing[4]};
  
  /* Tablet */
  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing[6]};
  }
  
  /* Desktop */
  @media (min-width: 1024px) {
    padding: ${({ theme }) => theme.spacing[8]};
  }
`;
```

### Flexible Layouts
```tsx
// Use relative units
width: min(90vw, 75rem)
max-width: 100%
padding: ${({ theme }) => theme.spacing[4]}

// Flexbox with gap
display: flex;
gap: ${({ theme }) => theme.spacing[2]};
flex-wrap: wrap;

// Grid
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
gap: ${({ theme }) => theme.spacing[4]};
```

---

## 🚀 Quick Setup

```bash
# 1. Create project
npm create vite@latest my-app -- --template react-ts

# 2. Install Lean IDS
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components

# 3. Install icons
npm install @mui/icons-material

# 4. Install types
npm install --save-dev @types/styled-components
```

```tsx
// 5. Setup theme in App.tsx
import { ThemeProvider } from 'styled-components';
import { carelonTheme } from '@ajaysoni7832/lean-ids-tokens';

function App() {
  return (
    <ThemeProvider theme={carelonTheme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

---

## 📋 Pre-Flight Checklist

Before starting:
- [ ] Figma Make URL ready
- [ ] Project name decided
- [ ] Theme chosen (Carelon or Elevance)
- [ ] AI IDE ready (Cursor, Windsurf, etc.)

While building:
- [ ] Using ONLY Lean IDS components
- [ ] Using theme tokens (no hardcoded values)
- [ ] Typography component for ALL text
- [ ] No gradients (unless requested)
- [ ] Responsive layouts (no fixed widths)
- [ ] All states implemented
- [ ] Accessibility added

Before finishing:
- [ ] All screens built
- [ ] All interactions work
- [ ] Keyboard navigation works
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Code reviewed

---

## 🆘 Quick Fixes

### Problem: AI uses external library
**Fix:** "Use Button from @ajaysoni7832/lean-ids-components"

### Problem: Hardcoded values
**Fix:** "Use theme.spacing[4] not 16px"

### Problem: Custom components
**Fix:** "Use existing Lean IDS Modal, don't create custom"

### Problem: HTML text tags
**Fix:** "Use Typography component, not <h1>"

### Problem: Gradients
**Fix:** "Use solid colors from theme.colors.*"

---

## 📚 Full Documentation

- **Complete Prompt:** `FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md`
- **Quick Prompt:** `FIGMA_TO_LEAN_IDS_QUICK_PROMPT.md`
- **Guidelines:** `AI_GUIDELINES.md`
- **Checklist:** `COMPONENT_MATURITY_CHECKLIST.md`

---

**Print this cheatsheet and keep it handy while building! 📌**
