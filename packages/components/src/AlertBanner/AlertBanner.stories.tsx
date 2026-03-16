/**
 * AlertBanner Storybook stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { AlertBanner } from './AlertBanner';

const meta: Meta<typeof AlertBanner> = {
  title: 'Components/AlertBanner',
  component: AlertBanner,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# AlertBanner

A feedback component for system messages that combines text and iconography for clear communication.

## Features
- **4 types**: Warning, Success, Error, Info
- **3 styles**: Default (solid), Subdued (light), Accent Border
- **Customizable**: Optional leading/trailing icons, action button
- **Accessible**: Proper ARIA attributes and keyboard support
- **Flexible**: Full-width design, customizable callbacks

## Usage

\`\`\`tsx
import { AlertBanner } from '@lean-ids/components';

<AlertBanner
  type="warning"
  style="default"
  text="This is a sample message text"
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
      description: 'Alert type (determines color scheme)',
      table: {
        type: { summary: 'warning | success | error | info' },
        defaultValue: { summary: 'warning' },
        category: 'Appearance',
      },
    },
    style: {
      control: 'select',
      options: ['default', 'subdued', 'accentBorder'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'default | subdued | accentBorder' },
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
    showLeadingIcon: {
      control: 'boolean',
      description: 'Whether to show the leading icon',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Appearance',
      },
    },
    showTrailingIcon: {
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
type Story = StoryObj<typeof AlertBanner>;

export const Playground: Story = {
  args: {
    type: 'warning',
    style: 'default',
    text: 'This is a sample message text',
    showLeadingIcon: true,
    showTrailingIcon: true,
    action: true,
    buttonText: 'Button',
  },
};

// Types - Default Style
export const WarningDefault: Story = {
  args: {
    type: 'warning',
    style: 'default',
    text: 'This is a warning message',
  },
};

export const SuccessDefault: Story = {
  args: {
    type: 'success',
    style: 'default',
    text: 'Operation completed successfully',
  },
};

export const ErrorDefault: Story = {
  args: {
    type: 'error',
    style: 'default',
    text: 'An error occurred',
  },
};

export const InfoDefault: Story = {
  args: {
    type: 'info',
    style: 'default',
    text: 'Here is some important information',
  },
};

// Types - Subdued Style
export const WarningSubdued: Story = {
  args: {
    type: 'warning',
    style: 'subdued',
    text: 'This is a warning message',
  },
};

export const SuccessSubdued: Story = {
  args: {
    type: 'success',
    style: 'subdued',
    text: 'Operation completed successfully',
  },
};

export const ErrorSubdued: Story = {
  args: {
    type: 'error',
    style: 'subdued',
    text: 'An error occurred',
  },
};

export const InfoSubdued: Story = {
  args: {
    type: 'info',
    style: 'subdued',
    text: 'Here is some important information',
  },
};

// Types - Accent Border Style
export const WarningAccentBorder: Story = {
  args: {
    type: 'warning',
    style: 'accentBorder',
    text: 'This is a warning message',
  },
};

export const SuccessAccentBorder: Story = {
  args: {
    type: 'success',
    style: 'accentBorder',
    text: 'Operation completed successfully',
  },
};

export const ErrorAccentBorder: Story = {
  args: {
    type: 'error',
    style: 'accentBorder',
    text: 'An error occurred',
  },
};

export const InfoAccentBorder: Story = {
  args: {
    type: 'info',
    style: 'accentBorder',
    text: 'Here is some important information',
  },
};

// Without Icons
export const WithoutIcons: Story = {
  args: {
    type: 'warning',
    style: 'default',
    text: 'Alert without icons',
    showLeadingIcon: false,
    showTrailingIcon: false,
  },
};

// Without Action Button
export const WithoutAction: Story = {
  args: {
    type: 'info',
    style: 'default',
    text: 'Alert without action button',
    action: false,
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Default Style</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <AlertBanner type="warning" style="default" text="Warning: This is a warning message" />
          <AlertBanner type="success" style="default" text="Success: Operation completed successfully" />
          <AlertBanner type="error" style="default" text="Error: An error occurred" />
          <AlertBanner type="info" style="default" text="Info: Here is some important information" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Subdued Style</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <AlertBanner type="warning" style="subdued" text="Warning: This is a warning message" />
          <AlertBanner type="success" style="subdued" text="Success: Operation completed successfully" />
          <AlertBanner type="error" style="subdued" text="Error: An error occurred" />
          <AlertBanner type="info" style="subdued" text="Info: Here is some important information" />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Accent Border Style</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <AlertBanner type="warning" style="accentBorder" text="Warning: This is a warning message" />
          <AlertBanner type="success" style="accentBorder" text="Success: Operation completed successfully" />
          <AlertBanner type="error" style="accentBorder" text="Error: An error occurred" />
          <AlertBanner type="info" style="accentBorder" text="Info: Here is some important information" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all AlertBanner variants across all types and styles.',
      },
    },
  },
};
