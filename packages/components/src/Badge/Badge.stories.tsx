import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import React from 'react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Badge Component

A compact element for labels or status indicators that combines text and iconography for clear communication.

## Purpose

The Badge is designed to display status indicators, category labels, notification counts, tags, and filters. It provides visual feedback and categorization in a compact, scannable format.

## Features

- **5 Types**: Info, Success, Warning, Error, Neutral
- **3 Styles**: Default (filled), Subdued (light background), Outlined (border only)
- **Customizable Icons**: Optional leading and trailing icons
- **Compact Design**: Small footprint with clear typography
- **Semantic Colors**: Color-coded for different message types

## Usage

\`\`\`tsx
import { Badge } from '@lean-ids/components';

<Badge label="Active" type="success" style="default" />

<Badge 
  label="New" 
  type="info" 
  style="subdued"
  showLeadingIcon={true}
/>

<Badge 
  label="Removable" 
  type="neutral" 
  style="outlined"
  showTrailingIcon={true}
/>
\`\`\`

## When to Use

✅ **Use Badge when:**
- Displaying status indicators (active, pending, completed)
- Showing category labels or tags
- Indicating notification counts
- Creating filter chips
- Highlighting important attributes

## When NOT to Use

❌ **Don't use Badge when:**
- You need interactive elements (use Chip instead)
- Displaying long text (badges are for short labels)
- You need a button-like action (use Button instead)
- The information is critical and needs more prominence

## Accessibility Features

- **Semantic HTML**: Uses appropriate HTML elements
- **Color Contrast**: Meets WCAG 2.1 AA standards
- **Clear Typography**: Readable font size and weight
- **Icon Support**: Icons enhance visual communication
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'The text content of the badge',
    },
    type: {
      control: 'select',
      options: ['info', 'success', 'warning', 'error', 'neutral'],
      description: 'The semantic type of the badge',
    },
    style: {
      control: 'select',
      options: ['default', 'subdued', 'outlined'],
      description: 'The visual style of the badge',
    },
    showLeadingIcon: {
      control: 'boolean',
      description: 'Whether to show the leading icon',
    },
    showTrailingIcon: {
      control: 'boolean',
      description: 'Whether to show the trailing icon',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Label',
    type: 'info',
    style: 'default',
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

export const WithLeadingIcon: Story = {
  args: {
    label: 'Label',
    type: 'info',
    style: 'default',
    showLeadingIcon: true,
    showTrailingIcon: false,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    label: 'Label',
    type: 'info',
    style: 'default',
    showLeadingIcon: false,
    showTrailingIcon: true,
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Label',
    type: 'info',
    style: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true,
  },
};

export const AllTypesDefault: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge label="Info" type="info" style="default" showLeadingIcon />
      <Badge label="Success" type="success" style="default" showLeadingIcon />
      <Badge label="Warning" type="warning" style="default" showLeadingIcon />
      <Badge label="Error" type="error" style="default" showLeadingIcon />
      <Badge label="Neutral" type="neutral" style="default" showLeadingIcon />
    </div>
  ),
};

export const AllTypesSubdued: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge label="Info" type="info" style="subdued" showLeadingIcon />
      <Badge label="Success" type="success" style="subdued" showLeadingIcon />
      <Badge label="Warning" type="warning" style="subdued" showLeadingIcon />
      <Badge label="Error" type="error" style="subdued" showLeadingIcon />
      <Badge label="Neutral" type="neutral" style="subdued" showLeadingIcon />
    </div>
  ),
};

export const AllTypesOutlined: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge label="Info" type="info" style="outlined" showLeadingIcon />
      <Badge label="Success" type="success" style="outlined" showLeadingIcon />
      <Badge label="Warning" type="warning" style="outlined" showLeadingIcon />
      <Badge label="Error" type="error" style="outlined" showLeadingIcon />
      <Badge label="Neutral" type="neutral" style="outlined" showLeadingIcon />
    </div>
  ),
};

export const InfoVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge label="Default" type="info" style="default" showLeadingIcon />
      <Badge label="Subdued" type="info" style="subdued" showLeadingIcon />
      <Badge label="Outlined" type="info" style="outlined" showLeadingIcon />
    </div>
  ),
};

export const SuccessVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge label="Default" type="success" style="default" showLeadingIcon />
      <Badge label="Subdued" type="success" style="subdued" showLeadingIcon />
      <Badge label="Outlined" type="success" style="outlined" showLeadingIcon />
    </div>
  ),
};

export const WarningVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge label="Default" type="warning" style="default" showLeadingIcon />
      <Badge label="Subdued" type="warning" style="subdued" showLeadingIcon />
      <Badge label="Outlined" type="warning" style="outlined" showLeadingIcon />
    </div>
  ),
};

export const ErrorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge label="Default" type="error" style="default" showLeadingIcon />
      <Badge label="Subdued" type="error" style="subdued" showLeadingIcon />
      <Badge label="Outlined" type="error" style="outlined" showLeadingIcon />
    </div>
  ),
};

export const NeutralVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Badge label="Default" type="neutral" style="default" showLeadingIcon />
      <Badge label="Subdued" type="neutral" style="subdued" showLeadingIcon />
      <Badge label="Outlined" type="neutral" style="outlined" showLeadingIcon />
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Badge label="Active" type="success" style="default" showLeadingIcon />
      <Badge label="Pending" type="warning" style="subdued" showLeadingIcon />
      <Badge label="Inactive" type="neutral" style="outlined" />
      <Badge label="Failed" type="error" style="default" showLeadingIcon />
      <Badge label="New" type="info" style="subdued" showLeadingIcon />
    </div>
  ),
};

export const CategoryLabels: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge label="React" type="info" style="subdued" />
      <Badge label="TypeScript" type="info" style="subdued" />
      <Badge label="Design System" type="neutral" style="subdued" />
      <Badge label="Component" type="success" style="subdued" />
    </div>
  ),
};

export const RemovableTags: Story = {
  args: {
    type: "success"
  },

  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge label="Filter 1" type="neutral" style="outlined" showTrailingIcon />
      <Badge label="Filter 2" type="neutral" style="outlined" showTrailingIcon />
      <Badge label="Filter 3" type="neutral" style="outlined" showTrailingIcon />
    </div>
  )
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Default Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Badge label="Info" type="info" style="default" showLeadingIcon />
          <Badge label="Success" type="success" style="default" showLeadingIcon />
          <Badge label="Warning" type="warning" style="default" showLeadingIcon />
          <Badge label="Error" type="error" style="default" showLeadingIcon />
          <Badge label="Neutral" type="neutral" style="default" showLeadingIcon />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Subdued Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Badge label="Info" type="info" style="subdued" showLeadingIcon />
          <Badge label="Success" type="success" style="subdued" showLeadingIcon />
          <Badge label="Warning" type="warning" style="subdued" showLeadingIcon />
          <Badge label="Error" type="error" style="subdued" showLeadingIcon />
          <Badge label="Neutral" type="neutral" style="subdued" showLeadingIcon />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Outlined Style</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Badge label="Info" type="info" style="outlined" showLeadingIcon />
          <Badge label="Success" type="success" style="outlined" showLeadingIcon />
          <Badge label="Warning" type="warning" style="outlined" showLeadingIcon />
          <Badge label="Error" type="error" style="outlined" showLeadingIcon />
          <Badge label="Neutral" type="neutral" style="outlined" showLeadingIcon />
        </div>
      </div>
      
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>With Trailing Icons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Badge label="Removable" type="info" style="outlined" showTrailingIcon />
          <Badge label="Removable" type="success" style="outlined" showTrailingIcon />
          <Badge label="Removable" type="warning" style="outlined" showTrailingIcon />
          <Badge label="Removable" type="error" style="outlined" showTrailingIcon />
          <Badge label="Removable" type="neutral" style="outlined" showTrailingIcon />
        </div>
      </div>
    </div>
  ),
};
