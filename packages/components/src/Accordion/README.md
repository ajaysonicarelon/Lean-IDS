# Accordion

A collapsible content container with customizable header, content, and footer sections.

## Installation

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
```

## Quick Start

```tsx
import { Accordion } from '@ajaysoni7832/lean-ids-components';
import { CheckCircleOutlined } from '@mui/icons-material';

<Accordion
  heading="Accordion Heading"
  description="Put a short description related to the accordion heading"
  leadIcon={<CheckCircleOutlined />}
>
  <div style={{ padding: '20px' }}>
    Your content here
  </div>
</Accordion>
```

## Features

- ✅ **Collapsed and Expanded States** - Smooth transitions between states
- ✅ **Customizable Lead Icon** - 24px Material Icons support
- ✅ **Flexible Labels & Metadata** - Badges, chips, counters, or custom content
- ✅ **Optional Description** - Contextual text below heading
- ✅ **Expandable Content Area** - Any React content
- ✅ **Optional Footer** - Text and action buttons
- ✅ **Nested Accordions** - Accordions inside accordions
- ✅ **Controlled/Uncontrolled** - Flexible state management

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `heading` | `string` | `'Accordion Heading'` | Accordion heading text |
| `description` | `string` | - | Description text below heading |
| `leadIcon` | `ReactNode` | - | Lead icon (24px) shown before heading |
| `showLeadIcon` | `boolean` | `true` | Show/hide lead icon |
| `labelsAndMetadata` | `ReactNode` | - | Custom content for labels area (badges, chips, etc.) |
| `children` | `ReactNode` | - | Content to display when expanded |
| `footerText` | `string` | - | Footer text |
| `footerActions` | `ReactNode` | - | Footer action buttons |
| `showFooter` | `boolean` | `false` | Show/hide footer |
| `defaultExpanded` | `boolean` | `false` | Initially expanded state (uncontrolled) |
| `expanded` | `boolean` | - | Controlled expanded state |
| `onExpandChange` | `(expanded: boolean) => void` | - | Callback when expand/collapse state changes |
| `className` | `string` | - | Additional CSS class |
| `disabled` | `boolean` | `false` | Disable the accordion |

## Examples

### Basic Accordion

```tsx
<Accordion
  heading="Basic Accordion"
  description="A simple accordion with minimal configuration"
>
  <p>Your content here</p>
</Accordion>
```

### With Lead Icon

```tsx
import { CheckCircleOutlined } from '@mui/icons-material';

<Accordion
  heading="Accordion with Icon"
  leadIcon={<CheckCircleOutlined />}
  showLeadIcon={true}
>
  <p>Content with icon</p>
</Accordion>
```

### With Labels and Metadata

```tsx
import { Badge, Chip } from '@ajaysoni7832/lean-ids-components';

<Accordion
  heading="Accordion with Metadata"
  labelsAndMetadata={
    <>
      <Badge variant="info" label="New" />
      <Chip label="High Priority" />
      <span style={{ fontSize: '14px', color: '#909090' }}>
        Updated 2 hours ago
      </span>
    </>
  }
>
  <p>Content with metadata</p>
</Accordion>
```

### With Footer

```tsx
import { Button } from '@ajaysoni7832/lean-ids-components';
import { Done } from '@mui/icons-material';

<Accordion
  heading="Accordion with Footer"
  showFooter={true}
  footerText="Last updated: Today"
  footerActions={
    <>
      <Button variant="secondary" size="small">Cancel</Button>
      <Button variant="primary" size="small">
        <Done style={{ width: 16, height: 16 }} />
        Confirm
      </Button>
    </>
  }
>
  <p>Content with footer</p>
</Accordion>
```

### Nested Accordions

```tsx
<Accordion
  heading="Parent Accordion"
  description="This contains nested accordions"
  defaultExpanded={true}
>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '16px' }}>
    <Accordion
      heading="Child Accordion 1"
      description="First nested accordion"
    >
      <p>Child content 1</p>
    </Accordion>
    
    <Accordion
      heading="Child Accordion 2"
      description="Second nested accordion"
    >
      <p>Child content 2</p>
    </Accordion>
  </div>
</Accordion>
```

### Controlled Mode

```tsx
import { useState } from 'react';
import { Button } from '@ajaysoni7832/lean-ids-components';

function ControlledAccordion() {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <>
      <Button onClick={() => setExpanded(!expanded)}>
        {expanded ? 'Collapse' : 'Expand'}
      </Button>
      
      <Accordion
        heading="Controlled Accordion"
        expanded={expanded}
        onExpandChange={setExpanded}
      >
        <p>Controlled content</p>
      </Accordion>
    </>
  );
}
```

## Design Tokens

The Accordion uses the following design tokens from `@ajaysoni7832/lean-ids-tokens`:

### Colors
- `neutral[50]` - White background (header)
- `neutral[100]` - Light gray background (footer)
- `neutral[200]` - Gray background (content area)
- `neutral[400]` - Gray border (collapsed)
- `neutral[600]` - Gray text (description)
- `neutral[900]` - Dark text (heading, footer text)
- `primary[400]` - Purple border (expanded)

### Spacing
- `spacing[3]` - 8px (small gaps)
- `spacing[5]` - 12px (icon-heading gap)
- `spacing[6]` - 14px (heading-metadata gap)
- `spacing[7]` - 16px (padding)

### Typography
- `fontSizes[14]` - Footer text
- `fontSizes[16]` - Description text
- `fontSizes[20]` - Heading text
- `fontWeights.regular` - Description, footer text
- `fontWeights.semibold` - Heading text

### Border Radius
- `radii.medium` - 8px (rounded corners)

## Accessibility

- ✅ **Keyboard Navigation** - Click to expand/collapse
- ✅ **Semantic HTML** - Proper heading hierarchy
- ✅ **Focus Indicators** - Visible focus states
- ✅ **Screen Reader Support** - Descriptive labels

## Best Practices

### Do's ✅
- Use descriptive headings that clearly indicate content
- Keep descriptions concise (1-2 lines)
- Use lead icons consistently across similar accordions
- Group related accordions together
- Use badges/chips for status indicators
- Provide footer actions for common tasks

### Don'ts ❌
- Don't nest more than 3 levels deep
- Don't use very long headings (keep under 50 characters)
- Don't put critical information only in collapsed state
- Don't use too many labels/metadata (max 3-4 items)
- Don't make footers too complex

## Common Use Cases

### FAQ Section
```tsx
<Accordion heading="What is Lean IDS?" description="Learn about our design system">
  <p>Lean IDS is a comprehensive design system...</p>
</Accordion>
```

### Settings Panel
```tsx
<Accordion
  heading="Advanced Settings"
  leadIcon={<SettingsOutlined />}
  showFooter={true}
  footerActions={<Button variant="primary">Save Changes</Button>}
>
  {/* Settings form */}
</Accordion>
```

### Status Updates
```tsx
<Accordion
  heading="Recent Updates"
  labelsAndMetadata={
    <>
      <Badge variant="success" label="3 New" />
      <span>Last checked: 5 min ago</span>
    </>
  }
>
  {/* Update list */}
</Accordion>
```

## Troubleshooting

### Accordion not expanding
- Check if `disabled` prop is set to `true`
- Verify `expanded` prop is not locked to `false` in controlled mode

### Content not showing
- Ensure `children` prop contains valid React content
- Check if content has proper styling/dimensions

### Footer not visible
- Set `showFooter={true}`
- Ensure accordion is in expanded state

### Nested accordions overlapping
- Add proper spacing between nested accordions
- Use padding in parent content area

## Support

For issues or questions:
- Check Storybook examples
- Review API documentation
- Contact Lean IDS team

---

**Version:** 1.7.0+  
**Component Type:** Interactive Container  
**Design System:** Lean IDS
