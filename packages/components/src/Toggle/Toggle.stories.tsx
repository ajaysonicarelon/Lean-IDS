/**
 * Toggle Storybook Documentation
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';
import React, { useState } from 'react';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Toggle Component

A fully accessible toggle switch component for the Lean IDS design system.

## Features

- **Two States**: On (checked) and Off (unchecked)
- **Disabled State**: Visual feedback for non-interactive state
- **Optional Label**: Display text next to toggle
- **Smooth Animation**: Transition between states
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes

## Usage

\`\`\`tsx
import { Toggle } from '@lean-ids/components';

<Toggle
  label="Enable notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
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
      description: 'Label text displayed next to the toggle',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    checked: {
      control: 'boolean',
      description: 'Whether the toggle is on (checked)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the toggle is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toggle>;

// Playground Story
export const Playground: Story = {
  args: {
    label: 'Toggle label',
    checked: false,
    disabled: false,
  },
};

// States
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Toggle label="Off" checked={false} />
      <Toggle label="On" checked={true} />
      <Toggle label="Disabled Off" checked={false} disabled={true} />
      <Toggle label="Disabled On" checked={true} disabled={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggles support multiple states: off, on, disabled off, and disabled on.',
      },
    },
  },
};

// Without Label
export const WithoutLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Toggle checked={false} />
      <Toggle checked={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toggles can be used without labels.',
      },
    },
  },
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [isOn, setIsOn] = useState(false);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Toggle
          label="Toggle me"
          checked={isOn}
          onChange={(e) => setIsOn(e.target.checked)}
        />
        <p style={{ fontSize: '14px', color: '#666' }}>
          Status: {isOn ? 'On' : 'Off'}
        </p>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive toggle with state management.',
      },
    },
  },
};

// Settings Form Example
export const SettingsForm: Story = {
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      analytics: false,
    });
    
    return (
      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '300px' }}>
        <h3 style={{ margin: '0 0 8px 0' }}>Settings</h3>
        <Toggle
          label="Enable notifications"
          checked={settings.notifications}
          onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
        />
        <Toggle
          label="Dark mode"
          checked={settings.darkMode}
          onChange={(e) => setSettings({ ...settings, darkMode: e.target.checked })}
        />
        <Toggle
          label="Auto-save"
          checked={settings.autoSave}
          onChange={(e) => setSettings({ ...settings, autoSave: e.target.checked })}
        />
        <Toggle
          label="Analytics tracking"
          checked={settings.analytics}
          onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
        />
      </form>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of toggles used in a settings form.',
      },
    },
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <div>
        <h4 style={{ marginBottom: '16px' }}>With Labels</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle label="Switch off" checked={false} />
          <Toggle label="Switch on" checked={true} />
          <Toggle label="Disabled - Switch off" checked={false} disabled={true} />
          <Toggle label="Disabled - Switch on" checked={true} disabled={true} />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: '16px' }}>Without Labels</h4>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Toggle checked={false} />
          <Toggle checked={true} />
          <Toggle checked={false} disabled={true} />
          <Toggle checked={true} disabled={true} />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All toggle variants showing all states with and without labels.',
      },
    },
  },
};
