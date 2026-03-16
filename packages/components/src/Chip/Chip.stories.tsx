/**
 * Chip Storybook Documentation
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Chip, CloseIcon } from './Chip';
import React, { useState } from 'react';

// Sample leading icon
const LeadingIconSample = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6" fill="currentColor" />
  </svg>
);

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Chip Component

A compact element for displaying tags, categories, or selections.

## Features

- **Three Sizes**: Small, Medium, Large
- **Two Variants**: Filled, Outlined
- **Two Types**: Default, Removable
- **Optional Icons**: Leading and trailing icons
- **Interactive**: Clickable and removable options
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes

## Usage

\`\`\`tsx
import { Chip } from '@lean-ids/components';

<Chip
  label="React"
  variant="filled"
  size="medium"
  type="removable"
  onRemove={() => console.log('Removed')}
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
      description: 'Chip label text',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Chip size',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'small' },
        category: 'Appearance',
      },
    },
    variant: {
      control: 'radio',
      options: ['filled', 'outlined'],
      description: 'Visual variant',
      table: {
        type: { summary: 'filled | outlined' },
        defaultValue: { summary: 'filled' },
        category: 'Appearance',
      },
    },
    type: {
      control: 'radio',
      options: ['default', 'success', 'warning', 'error', 'neutral'],
      description: 'Color scheme type',
      table: {
        type: { summary: 'default | success | warning | error | neutral' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the chip is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

// Playground Story
export const Playground: Story = {
  args: {
    label: 'Label',
    size: 'small',
    variant: 'filled',
    type: 'default',
    disabled: false,
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
      <Chip label="Large" size="large" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips are available in three sizes: small, medium, and large.',
      },
    },
  },
};

// Variants - Filled
export const FilledVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Chip label="Default" variant="filled" type="default" />
        <Chip label="Success" variant="filled" type="success" />
        <Chip label="Warning" variant="filled" type="warning" />
        <Chip label="Error" variant="filled" type="error" />
        <Chip label="Neutral" variant="filled" type="neutral" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Filled chips with different color types.',
      },
    },
  },
};

// Variants - Outlined
export const OutlinedVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Chip label="Default" variant="outlined" type="default" />
        <Chip label="Success" variant="outlined" type="success" />
        <Chip label="Warning" variant="outlined" type="warning" />
        <Chip label="Error" variant="outlined" type="error" />
        <Chip label="Neutral" variant="outlined" type="neutral" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Outlined chips with different color types.',
      },
    },
  },
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Chip label="Leading Icon" leadingIcon={<LeadingIconSample />} />
        <Chip label="Trailing Icon" trailingIcon={<CloseIcon />} />
        <Chip 
          label="Both Icons" 
          leadingIcon={<LeadingIconSample />} 
          trailingIcon={<CloseIcon />} 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Chips can have leading and/or trailing icons.',
      },
    },
  },
};

// Interactive - Removable
export const Removable: Story = {
  render: () => {
    const [chips, setChips] = useState([
      { id: 1, label: 'React' },
      { id: 2, label: 'TypeScript' },
      { id: 3, label: 'Styled Components' },
      { id: 4, label: 'Storybook' },
    ]);

    const removeChip = (id: number) => {
      setChips(chips.filter(chip => chip.id !== id));
    };

    return (
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {chips.map(chip => (
          <Chip
            key={chip.id}
            label={chip.label}
            trailingIcon={<CloseIcon />}
            onTrailingIconClick={() => removeChip(chip.id)}
          />
        ))}
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing removable chips.',
      },
    },
  },
};

// Clickable Chips
export const Clickable: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['React', 'Vue', 'Angular', 'Svelte'].map(framework => (
            <Chip
              key={framework}
              label={framework}
              variant={selected === framework ? 'filled' : 'outlined'}
              onClick={() => setSelected(framework)}
            />
          ))}
        </div>
        <p style={{ fontSize: '14px', color: '#666' }}>
          Selected: {selected || 'None'}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Chips can be clickable for selection or filtering.',
      },
    },
  },
};

// All Sizes and Types
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', padding: '20px' }}>
      {(['small', 'medium', 'large'] as const).map(size => (
        <div key={size}>
          <h4 style={{ marginBottom: '12px', textTransform: 'capitalize' }}>{size}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <strong style={{ width: '100%', fontSize: '12px' }}>Filled:</strong>
              <Chip label="Label" size={size} variant="filled" type="default" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="filled" type="success" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="filled" type="warning" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="filled" type="error" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="filled" type="neutral" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
            </div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <strong style={{ width: '100%', fontSize: '12px' }}>Outlined:</strong>
              <Chip label="Label" size={size} variant="outlined" type="default" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="outlined" type="success" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="outlined" type="warning" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="outlined" type="error" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="outlined" type="neutral" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all chip variants, sizes, and types.',
      },
    },
  },
};
