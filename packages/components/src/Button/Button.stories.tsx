/**
 * Button Storybook Documentation
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import React from 'react';

// Sample icons
const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Component

An interactive control that triggers actions with clear visual feedback.

## Features

- **Five Sizes**: XS, Small, Medium, Large, XL
- **Three Variants**: Primary (filled), Outlined, Link
- **Optional Icons**: Leading and trailing icons
- **Multiple States**: Default, Hover, Focused, Disabled, Success, Warning, Alert
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes

## Usage

\`\`\`tsx
import { Button } from '@lean-ids/components';

<Button
  variant="primary"
  size="medium"
  onClick={() => console.log('Clicked')}
>
  Click me
</Button>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label text',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    size: {
      control: 'radio',
      options: ['xs', 'small', 'medium', 'large', 'xl'],
      description: 'Button size',
      table: {
        type: { summary: 'xs | small | medium | large | xl' },
        defaultValue: { summary: 'medium' },
        category: 'Appearance',
      },
    },
    variant: {
      control: 'radio',
      options: ['primary', 'outlined', 'link', 'success', 'warning', 'alert'],
      description: 'Visual variant',
      table: {
        type: { summary: 'primary | outlined | link | success | warning | alert' },
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Layout',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Playground Story
export const Playground: Story = {
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'primary',
    disabled: false,
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="xs">Extra Small</Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons are available in five sizes: xs, small, medium, large, and xl.',
      },
    },
  },
};

// Variants - Primary
export const PrimaryVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons for main actions.',
      },
    },
  },
};

// Variants - Outlined
export const OutlinedVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="outlined">Outlined</Button>
      <Button variant="outlined" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outlined buttons for secondary actions.',
      },
    },
  },
};

// Variants - Link
export const LinkVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="link">Link Button</Button>
      <Button variant="link" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Link buttons for tertiary actions.',
      },
    },
  },
};

// Variants - Success
export const SuccessVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="success">Success</Button>
      <Button variant="success" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Success buttons for positive actions and confirmations.',
      },
    },
  },
};

// Variants - Warning
export const WarningVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="warning">Warning</Button>
      <Button variant="warning" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Warning buttons for cautionary actions.',
      },
    },
  },
};

// Variants - Alert
export const AlertVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="alert">Alert</Button>
      <Button variant="alert" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert/Error buttons for destructive or critical actions.',
      },
    },
  },
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button leadingIcon={<CheckIcon />}>Leading Icon</Button>
        <Button trailingIcon={<ArrowRightIcon />}>Trailing Icon</Button>
        <Button leadingIcon={<CheckIcon />} trailingIcon={<CloseIcon />}>Both Icons</Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="outlined" leadingIcon={<CheckIcon />}>Outlined with Icon</Button>
        <Button variant="link" trailingIcon={<ArrowRightIcon />}>Link with Icon</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can have leading and/or trailing icons.',
      },
    },
  },
};

// Icon Only
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button leadingIcon={<CheckIcon />} showLabel={false} aria-label="Check" />
      <Button leadingIcon={<CloseIcon />} showLabel={false} aria-label="Close" variant="outlined" />
      <Button leadingIcon={<ArrowRightIcon />} showLabel={false} aria-label="Next" size="large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons without label text. Always provide aria-label for accessibility.',
      },
    },
  },
};

// Full Width
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Button fullWidth>Full Width Primary</Button>
      <Button fullWidth variant="outlined">Full Width Outlined</Button>
      <Button fullWidth variant="link">Full Width Link</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can take the full width of their container.',
      },
    },
  },
};

// Button Groups
export const ButtonGroups: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Horizontal Group</h4>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button>Save</Button>
          <Button variant="outlined">Cancel</Button>
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '12px' }}>Vertical Group</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '200px' }}>
          <Button fullWidth>Primary Action</Button>
          <Button fullWidth variant="outlined">Secondary Action</Button>
          <Button fullWidth variant="link">Tertiary Action</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of button groups in horizontal and vertical layouts.',
      },
    },
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      {(['xs', 'small', 'medium', 'large', 'xl'] as const).map(size => (
        <div key={size}>
          <h4 style={{ marginBottom: '16px', textTransform: 'capitalize' }}>{size}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <strong style={{ width: '100%', fontSize: '12px' }}>Primary:</strong>
              <Button size={size} leadingIcon={<CheckIcon />}>Button</Button>
              <Button size={size} leadingIcon={<CheckIcon />} trailingIcon={<CloseIcon />}>Button</Button>
              <Button size={size} disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <strong style={{ width: '100%', fontSize: '12px' }}>Outlined:</strong>
              <Button size={size} variant="outlined" leadingIcon={<CheckIcon />}>Button</Button>
              <Button size={size} variant="outlined" leadingIcon={<CheckIcon />} trailingIcon={<CloseIcon />}>Button</Button>
              <Button size={size} variant="outlined" disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <strong style={{ width: '100%', fontSize: '12px' }}>Link:</strong>
              <Button size={size} variant="link">Link Button</Button>
              <Button size={size} variant="link" disabled>Disabled</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <strong style={{ width: '100%', fontSize: '12px' }}>Success:</strong>
              <Button size={size} variant="success" leadingIcon={<CheckIcon />}>Success</Button>
              <Button size={size} variant="success" disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <strong style={{ width: '100%', fontSize: '12px' }}>Warning:</strong>
              <Button size={size} variant="warning" leadingIcon={<CheckIcon />}>Warning</Button>
              <Button size={size} variant="warning" disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <strong style={{ width: '100%', fontSize: '12px' }}>Alert:</strong>
              <Button size={size} variant="alert" leadingIcon={<CloseIcon />}>Alert</Button>
              <Button size={size} variant="alert" disabled leadingIcon={<CloseIcon />}>Disabled</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all button variants, sizes, and states.',
      },
    },
  },
};
