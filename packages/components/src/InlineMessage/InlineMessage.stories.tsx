/**
 * InlineMessage Storybook stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { InlineMessage } from './InlineMessage';

const meta: Meta<typeof InlineMessage> = {
  title: 'Components/InlineMessage',
  component: InlineMessage,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# InlineMessage

A contextual message component for inline feedback with title, description, and optional actions. Perfect for form validation, contextual help, and inline notifications.

## Features
- **4 types**: Warning, Success, Error, Info
- **2 styles**: Subdued (light), Accent Border
- **Rich content**: Title, description, link, and action button
- **Customizable**: Optional leading/trailing icons
- **Accessible**: Proper ARIA attributes and keyboard support

## Usage

\`\`\`tsx
import { InlineMessage } from '@lean-ids/components';

<InlineMessage
  type="warning"
  style="subdued"
  text="Title"
  descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  linkText="Learn more"
  onLinkClick={() => console.log('Link clicked')}
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
      description: 'Message type (determines color scheme)',
      table: {
        type: { summary: 'warning | success | error | info' },
        defaultValue: { summary: 'warning' },
        category: 'Appearance',
      },
    },
    style: {
      control: 'select',
      options: ['subdued', 'accentBorder'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'subdued | accentBorder' },
        defaultValue: { summary: 'subdued' },
        category: 'Appearance',
      },
    },
    text: {
      control: 'text',
      description: 'Title text',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    descriptionText: {
      control: 'text',
      description: 'Description text',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    linkText: {
      control: 'text',
      description: 'Link text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Link' },
        category: 'Content',
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
    link: {
      control: 'boolean',
      description: 'Whether to show the link',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
        category: 'Appearance',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InlineMessage>;

export const Playground: Story = {
  args: {
    type: 'warning',
    style: 'subdued',
    text: 'Title',
    descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    linkText: 'Link',
    buttonText: 'Button',
    showLeadingIcon: true,
    showTrailingIcon: true,
    action: true,
    link: true,
  },
};

// Types - Subdued Style
export const WarningSubdued: Story = {
  args: {
    type: 'warning',
    style: 'subdued',
    text: 'Warning',
    descriptionText: 'This is a warning message with important information',
  },
};

export const SuccessSubdued: Story = {
  args: {
    type: 'success',
    style: 'subdued',
    text: 'Success',
    descriptionText: 'Your action was completed successfully',
  },
};

export const ErrorSubdued: Story = {
  args: {
    type: 'error',
    style: 'subdued',
    text: 'Error',
    descriptionText: 'An error occurred while processing your request',
  },
};

export const InfoSubdued: Story = {
  args: {
    type: 'info',
    style: 'subdued',
    text: 'Information',
    descriptionText: 'Here is some helpful information for you',
  },
};

// Types - Accent Border Style
export const WarningAccentBorder: Story = {
  args: {
    type: 'warning',
    style: 'accentBorder',
    text: 'Warning',
    descriptionText: 'This is a warning message with important information',
  },
};

export const SuccessAccentBorder: Story = {
  args: {
    type: 'success',
    style: 'accentBorder',
    text: 'Success',
    descriptionText: 'Your action was completed successfully',
  },
};

export const ErrorAccentBorder: Story = {
  args: {
    type: 'error',
    style: 'accentBorder',
    text: 'Error',
    descriptionText: 'An error occurred while processing your request',
  },
};

export const InfoAccentBorder: Story = {
  args: {
    type: 'info',
    style: 'accentBorder',
    text: 'Information',
    descriptionText: 'Here is some helpful information for you',
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Subdued Style</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <InlineMessage
            type="warning"
            style="subdued"
            text="Warning"
            descriptionText="This is a warning message with important information"
          />
          <InlineMessage
            type="success"
            style="subdued"
            text="Success"
            descriptionText="Your action was completed successfully"
          />
          <InlineMessage
            type="error"
            style="subdued"
            text="Error"
            descriptionText="An error occurred while processing your request"
          />
          <InlineMessage
            type="info"
            style="subdued"
            text="Information"
            descriptionText="Here is some helpful information for you"
          />
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Accent Border Style</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <InlineMessage
            type="warning"
            style="accentBorder"
            text="Warning"
            descriptionText="This is a warning message with important information"
          />
          <InlineMessage
            type="success"
            style="accentBorder"
            text="Success"
            descriptionText="Your action was completed successfully"
          />
          <InlineMessage
            type="error"
            style="accentBorder"
            text="Error"
            descriptionText="An error occurred while processing your request"
          />
          <InlineMessage
            type="info"
            style="accentBorder"
            text="Information"
            descriptionText="Here is some helpful information for you"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all InlineMessage variants across all types and styles.',
      },
    },
  },
};
