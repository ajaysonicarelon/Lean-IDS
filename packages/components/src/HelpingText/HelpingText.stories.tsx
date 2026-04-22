import type { Meta, StoryObj } from '@storybook/react';
import { HelpingText } from './HelpingText';

const meta: Meta<typeof HelpingText> = {
  title: 'Components/HelpingText',
  component: HelpingText,
  parameters: {
    layout: 'centered',
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
