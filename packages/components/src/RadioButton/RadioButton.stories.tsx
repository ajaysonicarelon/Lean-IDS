/**
 * RadioButton Storybook Documentation
 */

import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';
import React, { useState } from 'react';

const meta: Meta<typeof RadioButton> = {
  title: 'Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# RadioButton Component

A fully accessible radio button component for the Lean IDS design system.

## Features

- **Two Sizes**: Default (16px) and Large (24px)
- **Multiple States**: Unchecked, Checked, Disabled
- **Optional Label**: Display text next to radio button
- **Trailing Icon**: Optional info icon
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes
- **Groups**: Works seamlessly in radio button groups

## Usage

\`\`\`tsx
import { RadioButton } from '@lean-ids/components';

<RadioButton
  label="Option 1"
  name="options"
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
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
      description: 'Label text displayed next to the radio button',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    size: {
      control: 'radio',
      options: ['default', 'large'],
      description: 'Radio button size',
      table: {
        type: { summary: 'default | large' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the radio button is checked',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the radio button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    showTrailingIcon: {
      control: 'boolean',
      description: 'Whether to show trailing expand icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Appearance',
      },
    },
    name: {
      control: 'text',
      description: 'Name attribute for radio group',
      table: {
        type: { summary: 'string' },
        category: 'Behavior',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioButton>;

// Playground Story
export const Playground: Story = {
  args: {
    label: 'Default Radio message',
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
      <RadioButton label="Default size (16px)" size="default" name="size-demo" />
      <RadioButton label="Large size (24px)" size="large" name="size-demo" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons are available in two sizes: default (16px) and large (24px).',
      },
    },
  },
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <RadioButton label="Unselected" checked={false} name="state-demo-1" />
      <RadioButton label="Selected" checked={true} name="state-demo-2" />
      <RadioButton label="Disabled Unselected" checked={false} disabled={true} name="state-demo-3" />
      <RadioButton label="Disabled Selected" checked={true} disabled={true} name="state-demo-4" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons support multiple states: unselected, selected, disabled unselected, and disabled selected.',
      },
    },
  },
};

// With Trailing Icon
export const WithTrailingIcon: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <RadioButton label="Default with icon" showTrailingIcon name="icon-demo-1" />
      <RadioButton label="Large with icon" size="large" showTrailingIcon name="icon-demo-2" />
      <RadioButton label="Selected with icon" checked showTrailingIcon name="icon-demo-3" />
      <RadioButton label="Disabled with icon" disabled showTrailingIcon name="icon-demo-4" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons can display an optional trailing expand_more icon.',
      },
    },
  },
};

// Radio Group Example
export const RadioGroup: Story = {
  render: () => {
    const [selected, setSelected] = useState('option1');
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Select an option:</h3>
        <RadioButton
          label="Option 1"
          name="radio-group"
          value="option1"
          checked={selected === 'option1'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <RadioButton
          label="Option 2"
          name="radio-group"
          value="option2"
          checked={selected === 'option2'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <RadioButton
          label="Option 3"
          name="radio-group"
          value="option3"
          checked={selected === 'option3'}
          onChange={(e) => setSelected(e.target.value)}
        />
        <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>
          Selected: {selected}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons work together in groups where only one option can be selected at a time.',
      },
    },
  },
};

// Form Example
export const FormExample: Story = {
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [shippingSpeed, setShippingSpeed] = useState('standard');
    
    return (
      <form style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
        <div>
          <h3 style={{ margin: '0 0 12px 0' }}>Payment Method</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioButton
              label="Credit Card"
              name="payment"
              value="credit-card"
              checked={paymentMethod === 'credit-card'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <RadioButton
              label="PayPal"
              name="payment"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <RadioButton
              label="Bank Transfer"
              name="payment"
              value="bank-transfer"
              checked={paymentMethod === 'bank-transfer'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </div>
        </div>
        
        <div>
          <h3 style={{ margin: '0 0 12px 0' }}>Shipping Speed</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <RadioButton
              label="Standard (5-7 days)"
              name="shipping"
              value="standard"
              checked={shippingSpeed === 'standard'}
              onChange={(e) => setShippingSpeed(e.target.value)}
            />
            <RadioButton
              label="Express (2-3 days)"
              name="shipping"
              value="express"
              checked={shippingSpeed === 'express'}
              onChange={(e) => setShippingSpeed(e.target.value)}
            />
            <RadioButton
              label="Overnight"
              name="shipping"
              value="overnight"
              checked={shippingSpeed === 'overnight'}
              onChange={(e) => setShippingSpeed(e.target.value)}
            />
          </div>
        </div>
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of radio buttons used in a form with multiple groups.',
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
          <RadioButton label="Default Radio message" name="default-1" />
          <RadioButton label="Default Radio message" checked name="default-2" />
          <RadioButton label="Default Radio message" disabled name="default-3" />
          <RadioButton label="Default Radio message" checked disabled name="default-4" />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '16px' }}>Large Size</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <RadioButton label="Default Radio message" size="large" name="large-1" />
          <RadioButton label="Default Radio message" size="large" checked name="large-2" />
          <RadioButton label="Default Radio message" size="large" disabled name="large-3" />
          <RadioButton label="Default Radio message" size="large" checked disabled name="large-4" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All radio button variants showing both sizes and all states.',
      },
    },
  },
};
