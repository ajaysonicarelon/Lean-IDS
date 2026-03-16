/**
 * Toast Storybook stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toast } from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Toast

A compact notification component for temporary feedback messages. Toasts are typically used for brief, non-intrusive notifications.

## Features
- **4 types**: Warning, Success, Error, Info
- **2 styles**: Default (solid), Subdued (light)
- **Compact**: Fixed width (404px) for consistent sizing
- **Customizable**: Optional leading/trailing icons, action button
- **Accessible**: Proper ARIA attributes and keyboard support

## Usage

\`\`\`tsx
import { Toast } from '@lean-ids/components';

<Toast
  type="success"
  style="default"
  text="Operation completed successfully"
  onActionClick={() => console.log('Action clicked')}
  onClose={() => console.log('Closed')}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['warning', 'success', 'error', 'info'],
      description: 'Toast type (determines color scheme)',
      table: {
        type: { summary: 'warning | success | error | info' },
        defaultValue: { summary: 'warning' },
        category: 'Appearance',
      },
    },
    style: {
      control: 'select',
      options: ['default', 'subdued'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'default | subdued' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    text: {
      control: 'text',
      description: 'Message text to display',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    showLeadIcon: {
      control: 'boolean',
      description: 'Whether to show the leading icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Appearance',
      },
    },
    showTrailIcon: {
      control: 'boolean',
      description: 'Whether to show the trailing (close) icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Appearance',
      },
    },
    action: {
      control: 'boolean',
      description: 'Whether to show the action button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Appearance',
      },
    },
    buttonText: {
      control: 'text',
      description: 'Action button text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Button' },
        category: 'Content',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Playground: Story = {
  args: {
    type: 'warning',
    style: 'default',
    text: 'Description',
    showLeadIcon: true,
    showTrailIcon: true,
    action: true,
    buttonText: 'Button',
  },
};

// Types - Default Style
export const WarningDefault: Story = {
  args: {
    type: 'warning',
    style: 'default',
    text: 'Warning notification',
  },
};

export const SuccessDefault: Story = {
  args: {
    type: 'success',
    style: 'default',
    text: 'Success notification',
  },
};

export const ErrorDefault: Story = {
  args: {
    type: 'error',
    style: 'default',
    text: 'Error notification',
  },
};

export const InfoDefault: Story = {
  args: {
    type: 'info',
    style: 'default',
    text: 'Info notification',
  },
};

// Types - Subdued Style
export const WarningSubdued: Story = {
  args: {
    type: 'warning',
    style: 'subdued',
    text: 'Warning notification',
  },
};

export const SuccessSubdued: Story = {
  args: {
    type: 'success',
    style: 'subdued',
    text: 'Success notification',
  },
};

export const ErrorSubdued: Story = {
  args: {
    type: 'error',
    style: 'subdued',
    text: 'Error notification',
  },
};

export const InfoSubdued: Story = {
  args: {
    type: 'info',
    style: 'subdued',
    text: 'Info notification',
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Default Style</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Toast type="warning" style="default" text="Warning notification" />
          <Toast type="success" style="default" text="Success notification" />
          <Toast type="error" style="default" text="Error notification" />
          <Toast type="info" style="default" text="Info notification" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Subdued Style</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Toast type="warning" style="subdued" text="Warning notification" />
          <Toast type="success" style="subdued" text="Success notification" />
          <Toast type="error" style="subdued" text="Error notification" />
          <Toast type="info" style="subdued" text="Info notification" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Toast variants across all types and styles.',
      },
    },
  },
};
