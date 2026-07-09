import type { Meta, StoryObj } from '@storybook/react';
import { HelpingText } from './HelpingText';

const meta: Meta<typeof HelpingText> = {
  title: 'Components/HelpingText',
  component: HelpingText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# HelpingText

Helper text component with different states (default, info, warning, error) and optional icons.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { HelpingText } from '@ajaysoni7832/lean-ids-components';

function MyForm() {
  return (
    <div>
      <InputField label="Email" />
      <HelpingText
        text="Enter a valid email address"
        state="default"
        showIcon
      />
    </div>
  );
}
\`\`\`

## Features

✅ **Four States** - Default, info, warning, error
✅ **State Icons** - Contextual icons for each state
✅ **Two Sizes** - Default and large
✅ **Flexible** - Use with any form field
✅ **Accessible** - Proper ARIA attributes

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | required | Helper text message |
| state | 'default' \\| 'info' \\| 'warning' \\| 'error' | 'default' | Text state/color |
| size | 'default' \\| 'large' | 'default' | Text size |
| showIcon | boolean | true | Show state icon |
| className | string | - | Custom CSS class |

## States

### Default
- Neutral gray color
- Info icon
- Use for general guidance

### Info
- Blue color
- Info icon
- Use for helpful information

### Warning
- Orange/yellow color
- Warning icon
- Use for cautions or important notes

### Error
- Red color
- Error icon
- Use for validation errors

## Examples

### Default State
\`\`\`tsx
<HelpingText
  text="This is a helpful message"
  state="default"
  showIcon
/>
\`\`\`

### Info State
\`\`\`tsx
<HelpingText
  text="Additional information about this field"
  state="info"
  showIcon
/>
\`\`\`

### Warning State
\`\`\`tsx
<HelpingText
  text="This action cannot be undone"
  state="warning"
  showIcon
/>
\`\`\`

### Error State
\`\`\`tsx
<HelpingText
  text="This field is required"
  state="error"
  showIcon
/>
\`\`\`

### Without Icon
\`\`\`tsx
<HelpingText
  text="Simple text without icon"
  state="default"
  showIcon={false}
/>
\`\`\`

### Large Size
\`\`\`tsx
<HelpingText
  text="Larger helper text"
  state="info"
  size="large"
  showIcon
/>
\`\`\`

## Best Practices

1. **Use with form fields** - Provide context and guidance
2. **Match state to purpose** - Error for validation, info for help
3. **Keep text concise** - One or two sentences max
4. **Show icons** - They provide quick visual cues
5. **Use error state sparingly** - Only for actual errors

## Common Use Cases

- **Field requirements** - "Password must be 8+ characters"
- **Validation errors** - "Email address is invalid"
- **Helpful hints** - "We'll never share your email"
- **Warnings** - "This will delete all data"
- **Success messages** - "Changes saved successfully"

## Accessibility

- ✅ Proper color contrast
- ✅ Icon + text (not icon alone)
- ✅ ARIA live regions for errors
- ✅ Associated with form fields via aria-describedby
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description: 'Helper text message',
    },
    state: {
      control: 'select',
      options: ['default', 'info', 'warning', 'error'],
      description: 'State of the helper text',
    },
    size: {
      control: 'select',
      options: ['default', 'large'],
      description: 'Size variant',
    },
    showIcon: {
      control: 'boolean',
      description: 'Whether to show the leading icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof HelpingText>;

export const Default: Story = {
  args: {
    text: 'Default helping message',
    state: 'default',
    size: 'default',
    showIcon: true,
  },
};

export const Informational: Story = {
  args: {
    text: 'This is informational text',
    state: 'info',
    size: 'default',
    showIcon: true,
  },
};

export const Warning: Story = {
  args: {
    text: 'This is a warning message',
    state: 'warning',
    size: 'default',
    showIcon: true,
  },
};

export const Error: Story = {
  args: {
    text: 'This is an error message',
    state: 'error',
    size: 'default',
    showIcon: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    text: 'Helper text without icon',
    state: 'default',
    size: 'default',
    showIcon: false,
  },
};

export const LargeSize: Story = {
  args: {
    text: 'Large size helper text',
    state: 'default',
    size: 'large',
    showIcon: true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <HelpingText text="Default helping message" state="default" showIcon={true} />
      <HelpingText text="Informational message" state="info" showIcon={true} />
      <HelpingText text="Warning message" state="warning" showIcon={true} />
      <HelpingText text="Error message" state="error" showIcon={true} />
    </div>
  ),
};

export const AllStatesWithoutIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <HelpingText text="Default helping message" state="default" showIcon={false} />
      <HelpingText text="Informational message" state="info" showIcon={false} />
      <HelpingText text="Warning message" state="warning" showIcon={false} />
      <HelpingText text="Error message" state="error" showIcon={false} />
    </div>
  ),
};
