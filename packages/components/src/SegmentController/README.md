# SegmentController

A tab-like interface component for switching between different views or options with full accessibility support and keyboard navigation.

## Features

- ✅ **Multiple Sizes**: Small, Medium, Large
- ✅ **8 Component States**: Default, Hover, Focus, Active, Selected, Disabled, Loading (N/A), Error (N/A)
- ✅ **Full Accessibility**: ARIA roles, keyboard navigation, screen reader support
- ✅ **Keyboard Navigation**: Arrow keys, Home, End
- ✅ **Customization**: Lead/trail icon slots, polymorphic `as` prop
- ✅ **Typography Integration**: Uses Typography component (no hardcoded text)
- ✅ **Design Tokens**: 100% token-based styling (no hardcoded values)
- ✅ **forwardRef Support**: Full ref forwarding
- ✅ **Composition**: Works standalone or within SegmentControllerGroup

## Installation

```bash
npm install @lean-ids/components
```

## Basic Usage

**IMPORTANT: Always use Material-UI icons from `@mui/icons-material`. Never use custom SVGs.**

### Standalone Segment

```tsx
import { SegmentController } from '@lean-ids/components';
import { Home } from '@mui/icons-material'; // ✅ Material-UI icons only

function App() {
  return (
    <SegmentController
      size="large"
      selected
      leadIcon={<Home />}
    >
      Home
    </SegmentController>
  );
}
```

### Segment Group (Recommended)

```tsx
import { SegmentControllerGroup, SegmentController } from '@lean-ids/components';
import { Home, Architecture, School } from '@mui/icons-material';

function App() {
  const [value, setValue] = React.useState('home');

  return (
    <SegmentControllerGroup
      size="large"
      value={value}
      onChange={setValue}
      aria-label="Navigation"
    >
      <SegmentController value="home" leadIcon={<Home />}>
        Home
      </SegmentController>
      <SegmentController value="architecture" leadIcon={<Architecture />}>
        Architecture
      </SegmentController>
      <SegmentController value="school" leadIcon={<School />}>
        School
      </SegmentController>
    </SegmentControllerGroup>
  );
}
```

## Props

### SegmentController

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string \| number` | - | Value identifier (required when used in Group) |
| `size` | `'small' \| 'medium' \| 'large'` | `'large'` | Size variant |
| `selected` | `boolean` | `false` | Whether segment is selected |
| `disabled` | `boolean` | `false` | Whether segment is disabled |
| `leadIcon` | `ReactNode` | - | Icon to display before text |
| `trailIcon` | `ReactNode` | - | Icon to display after text |
| `showLeadIcon` | `boolean` | `true` | Show/hide lead icon |
| `showTrailIcon` | `boolean` | `true` | Show/hide trail icon |
| `children` | `ReactNode` | - | Segment label text |
| `onClick` | `(event) => void` | - | Click handler |
| `onFocus` | `(event) => void` | - | Focus handler |
| `onBlur` | `(event) => void` | - | Blur handler |
| `onKeyDown` | `(event) => void` | - | KeyDown handler |
| `as` | `React.ElementType` | `'button'` | Polymorphic element type |
| `className` | `string` | - | Custom CSS class |
| `style` | `React.CSSProperties` | - | Inline styles |
| `aria-label` | `string` | - | Accessibility label |
| `role` | `string` | `'tab'` | ARIA role |
| `tabIndex` | `number` | - | Tab index |

### SegmentControllerGroup

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'small' \| 'medium' \| 'large'` | `'large'` | Size for all children |
| `value` | `string \| number` | - | Controlled selected value |
| `defaultValue` | `string \| number` | - | Uncontrolled default value |
| `onChange` | `(value) => void` | - | Selection change handler |
| `disabled` | `boolean` | `false` | Disable all segments |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `width` | `string \| number` | `'fit-content'` | Container width (px or string) |
| `minWidth` | `string \| number` | `'auto'` | Minimum width (px or string) |
| `maxWidth` | `string \| number` | `'none'` | Maximum width (px or string) |
| `children` | `ReactNode` | - | SegmentController children |
| `className` | `string` | - | Custom CSS class |
| `style` | `React.CSSProperties` | - | Inline styles |
| `aria-label` | `string` | - | Accessibility label |
| `aria-labelledby` | `string` | - | ID of labeling element |

## Accessibility

### ARIA Roles
- `role="tablist"` on SegmentControllerGroup
- `role="tab"` on each SegmentController
- `aria-selected` indicates selected state
- `aria-disabled` indicates disabled state

### Keyboard Navigation
- **Tab**: Focus the segment group
- **Arrow Left/Right** (horizontal): Navigate between segments
- **Arrow Up/Down** (vertical): Navigate between segments
- **Home**: Jump to first segment
- **End**: Jump to last segment
- **Enter/Space**: Select focused segment

### Focus Management
- Only selected segment is in tab order (`tabIndex={0}`)
- Other segments have `tabIndex={-1}`
- Visible focus indicator on focus
- Focus moves with arrow key navigation

## Design Tokens Used

### Colors
- `theme.colors.palette.neutral[900]` - Default text
- `theme.colors.palette.neutral[50]` - Background (selected)
- `theme.colors.palette.neutral[500]` - Disabled text
- `theme.colors.palette.primary[500]` - Selected text
- `theme.colors.palette.primary[100]` - Hover/group background
- `theme.colors.palette.primary[200]` - Active background

### Typography
- **Large**: `headingS` variant (20px, Medium/Semibold)
- **Small**: `body` variant (16px, Medium/Semibold)

### Spacing
- `theme.spacing[1]` - 4px
- `theme.spacing[2]` - 6px
- `theme.spacing[3]` - 8px
- `theme.spacing[4]` - 10px
- `theme.spacing[5]` - 12px

### Border Radius
- `theme.borderRadius.sm` - 4px (small/medium)
- `theme.borderRadius.md` - 8px (large)
- `theme.borderRadius.lg` - 12px (group)

### Shadows
- `Icons

**✅ DO: Use Material-UI Icons**
```tsx
import { Home, Settings, Search, Person } from '@mui/icons-material';

<SegmentController leadIcon={<Home />}>Home</SegmentController>
```

**❌ DON'T: Use Custom SVGs**
```tsx
// ❌ NEVER DO THIS
<SegmentController leadIcon={<svg>...</svg>}>Home</SegmentController>
```

**Material-UI Icon Library**: [https://mui.com/material-ui/material-icons/](https://mui.com/material-ui/material-icons/)

---

## theme.shadows.xs` - Selected state shadow

## Examples

### With Icons

```tsx
<SegmentController
  size="large"
  leadIcon={<Home />}
  trailIcon={<Search />}
>
  Home
</SegmentController>
```

### Disabled State

```tsx
<SegmentController
  size="large"
  disabled
  leadIcon={<Architecture />}
>
  Disabled
</SegmentController>
```

### Polymorphic (as Link)

```tsx
<SegmentController
  as="a"
  href="/home"
  size="large"
  leadIcon={<Home />}
>
  Navigate
</SegmentController>
```

### Controlled Group

```tsx
const [value, setValue] = React.useState('tab1');

<SegmentControllerGroup
  value={value}
  onChange={setValue}
>
  <SegmentController value="tab1">Tab 1</SegmentController>
  <SegmentController value="tab2">Tab 2</SegmentController>
  <SegmentController value="tab3">Tab 3</SegmentController>
</SegmentControllerGroup>
```

### Uncontrolled Group

```tsx
<SegmentControllerGroup defaultValue="tab2">
  <SegmentController value="tab1">Tab 1</SegmentController>
  <SegmentController value="tab2">Tab 2</SegmentController>
  <SegmentController value="tab3">Tab 3</SegmentController>
</SegmentControllerGroup>
```

### Width Control

```tsx
// Default: Hug content (fit-content)
<SegmentControllerGroup>
  <SegmentController value="tab1">Tab 1</SegmentController>
  <SegmentController value="tab2">Tab 2</SegmentController>
</SegmentControllerGroup>

// Fixed width (pixels)
<SegmentControllerGroup width={400}>
  <SegmentController value="tab1">Tab 1</SegmentController>
  <SegmentController value="tab2">Tab 2</SegmentController>
</SegmentControllerGroup>

// Full width (percentage)
<SegmentControllerGroup width="100%">
  <SegmentController value="tab1">Tab 1</SegmentController>
  <SegmentController value="tab2">Tab 2</SegmentController>
</SegmentControllerGroup>

// Min/Max width
<SegmentControllerGroup minWidth={300} maxWidth={600}>
  <SegmentController value="tab1">Tab 1</SegmentController>
  <SegmentController value="tab2">Tab 2</SegmentController>
</SegmentControllerGroup>
```

### Horizontal Scroll

When content width exceeds container width, horizontal scrolling is automatically enabled:

```tsx
// Container smaller than content - horizontal scroll enabled
<SegmentControllerGroup maxWidth={400}>
  <SegmentController value="tab1">Dashboard</SegmentController>
  <SegmentController value="tab2">Analytics</SegmentController>
  <SegmentController value="tab3">Reports</SegmentController>
  <SegmentController value="tab4">Settings</SegmentController>
  <SegmentController value="tab5">Profile</SegmentController>
</SegmentControllerGroup>
```

**Features:**
- ✅ Smooth scrolling behavior
- ✅ Styled scrollbar (thin, themed)
- ✅ Keyboard navigation works with scroll
- ✅ Touch/trackpad scrolling supported
- ✅ Vertical orientation also supports scrolling

## Component Maturity Checklist

✅ **API & Composition**
- forwardRef support
- Polymorphic `as` prop
- Multiple slots (leadIcon, trailIcon, children)
- restProps spreading

✅ **Layout & Responsiveness**
- Typography component (NO hardcoded text)
- Design tokens (NO hardcoded pixels/colors)
- Responsive sizing (small/medium/large)

✅ **Overrides & Theming**
- className prop
- style prop
- Theme token integration

✅ **States & Behavior**
1. Default ✅
2. Hover ✅
3. Focus ✅
4. Active ✅
5. Disabled ✅
6. Selected ✅
7. Loading ❌ (not applicable)
8. Error ❌ (not applicable)

✅ **Accessibility**
- ARIA roles (`tab`, `tablist`)
- ARIA attributes (`aria-selected`, `aria-disabled`)
- Keyboard navigation (arrows, home, end)
- Focus management
- Screen reader support

✅ **Storybook Documentation**
- All variants and sizes
- All states
- Interactive examples
- Accessibility examples
- Typography in ALL stories

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Related Components

- [Tabs](/docs/components-tabs--docs)
- [Button](/docs/components-button--docs)
- [Chip](/docs/components-chip--docs)

## Changelog

### v1.0.0 (2026-07-30)
- Initial release
- Full accessibility support
- Keyboard navigation
- Three sizes (small, medium, large)
- Icon slots
- Polymorphic `as` prop
- SegmentControllerGroup composition
