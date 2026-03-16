/**
 * Checkbox Storybook Documentation
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import React, { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Checkbox Component

A fully accessible checkbox component for the Lean IDS design system.

## Features

- **Two Sizes**: Default (16px) and Large (24px)
- **Multiple States**: Unchecked, Checked, Disabled
- **Optional Label**: Display text next to checkbox
- **Trailing Icon**: Optional info icon
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes

## Usage

\`\`\`tsx
import { Checkbox } from '@lean-ids/components';

<Checkbox
  label="Accept terms and conditions"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed next to the checkbox',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    size: {
      control: 'radio',
      options: ['default', 'large'],
      description: 'Checkbox size',
      table: {
        type: { summary: 'default | large' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the checkbox is checked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the checkbox is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    showTrailingIcon: {
      control: 'boolean',
      description: 'Whether to show trailing info icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Playground Story
export const Playground: Story = {
  args: {
    label: 'Default Checkbox message',
    size: 'default',
    checked: false,
    disabled: false,
    showTrailingIcon: false,
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Checkbox label="Default size (16px)" size="default" />
      <Checkbox label="Large size (24px)" size="large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes are available in two sizes: default (16px) and large (24px).',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Checkbox label="Unchecked" checked={false} />
      <Checkbox label="Checked" checked={true} />
      <Checkbox label="Disabled Unchecked" checked={false} disabled={true} />
      <Checkbox label="Disabled Checked" checked={true} disabled={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes support multiple states: unchecked, checked, disabled unchecked, and disabled checked.',
      },
    },
  },
};

// With Trailing Icon
export const WithTrailingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Checkbox label="Default with icon" showTrailingIcon />
      <Checkbox label="Large with icon" size="large" showTrailingIcon />
      <Checkbox label="Checked with icon" checked showTrailingIcon />
      <Checkbox label="Disabled with icon" disabled showTrailingIcon />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes can display an optional trailing info icon.',
      },
    },
  },
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox
          label="Toggle me"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <p style={{ fontSize: '14px', color: '#666' }}>
          Status: {checked ? 'Checked' : 'Unchecked'}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive checkbox with state management.',
      },
    },
  },
};

// Form Example
export const FormExample: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      updates: false,
    });
    
    return (
      <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Sign Up Preferences</h3>
        <Checkbox
          label="I agree to the terms and conditions"
          checked={formData.terms}
          onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
          showTrailingIcon
        />
        <Checkbox
          label="Subscribe to newsletter"
          checked={formData.newsletter}
          onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
        />
        <Checkbox
          label="Receive product updates"
          checked={formData.updates}
          onChange={(e) => setFormData({ ...formData, updates: e.target.checked })}
        />
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of checkboxes used in a form with multiple options.',
      },
    },
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', padding: '20px' }}>
      <div>
        <h4 style={{ marginBottom: '16px' }}>Default Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox label="Default Checkbox message" />
          <Checkbox label="Default Checkbox message" checked />
          <Checkbox label="Default Checkbox message" disabled />
          <Checkbox label="Default Checkbox message" checked disabled />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '16px' }}>Large Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Checkbox label="Default Checkbox message" size="large" />
          <Checkbox label="Default Checkbox message" size="large" checked />
          <Checkbox label="Default Checkbox message" size="large" disabled />
          <Checkbox label="Default Checkbox message" size="large" checked disabled />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All checkbox variants showing both sizes and all states.',
      },
    },
  },
};
