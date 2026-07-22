/**
 * Textarea - Storybook Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Typography } from '../Typography';
import { Search } from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Textarea Component

A fully accessible textarea component for multi-line text input based on the Figma design system.

## Enhanced with Component Maturity Checklist

✅ **Polymorphic 'as' prop** - NEW!  
✅ **Loading & Empty states** - NEW!  
✅ **Multiple className overrides** - 4 override points  
✅ **Comprehensive event callbacks** - 4 new events  
✅ **All 8 states** - default, hover, focus, active, disabled, loading, empty, error  

## Features

- **Multiple States**: Default, focused, error, disabled, filled, loading, empty
- **Helper Text**: Support for helper text and error messages
- **Field Importance**: Optional required indicator (asterisk)
- **Icons**: Optional leading and trailing icons
- **Resizable**: Configurable vertical resize capability
- **Accessibility**: Full WCAG 2.1 AA compliance with proper ARIA attributes

## Usage

\`\`\`tsx
import { Textarea } from '@lean-ids/components';

function MyForm() {
  return (
    <Textarea
      label="Comments"
      placeholder="Enter your comments here..."
      helperText="Maximum 500 characters"
      required
      showFieldImportance
    />
  );
}
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the textarea',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the textarea',
    },
    errorMessage: {
      control: 'text',
      description: 'Error message - overrides helperText when present',
    },
    required: {
      control: 'boolean',
      description: 'Whether the textarea is required',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the textarea is disabled',
    },
    error: {
      control: 'boolean',
      description: 'Whether the textarea has an error state',
    },
    showLabel: {
      control: 'boolean',
      description: 'Whether to show the label',
    },
    showFieldImportance: {
      control: 'boolean',
      description: 'Whether to show the field importance indicator',
    },
    showInlineText: {
      control: 'boolean',
      description: 'Whether to show helper/error text',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the textarea should take full width',
    },
    rows: {
      control: 'number',
      description: 'Number of visible text rows',
    },
    resizable: {
      control: 'boolean',
      description: 'Whether the textarea is resizable',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: false,
    disabled: false,
    error: false,
    resizable: true,
    rows: 4,
  },
};

export const Filled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    defaultValue: 'This is some filled content in the textarea.',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: false,
    disabled: false,
    error: false,
    resizable: true,
  },
};

export const FilledUneditable: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    defaultValue: 'This content cannot be edited.',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: false,
    disabled: true,
    error: false,
    resizable: false,
  },
};

export const WithError: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    errorMessage: 'This field has an error',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: true,
    error: true,
    resizable: true,
  },
};

export const WithLeadingIcon: Story = {
  args: {
    label: 'Search Query',
    placeholder: 'Enter your search query...',
    helperText: 'Use keywords to refine your search',
    leadingIcon: <Search size={16} />,
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    resizable: true,
  },
};

export const Required: Story = {
  args: {
    label: 'Comments',
    placeholder: 'Please provide your feedback...',
    helperText: 'This field is required',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: true,
    resizable: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    helperText: 'This field cannot be edited',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    disabled: true,
    resizable: false,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter a detailed description...',
    helperText: 'Provide as much detail as possible',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    fullWidth: true,
    resizable: true,
  },
  parameters: {
    layout: 'padded',
  },
};

export const NonResizable: Story = {
  args: {
    label: 'Fixed Size',
    placeholder: 'This textarea cannot be resized',
    helperText: 'The size is fixed',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    resizable: false,
    rows: 3,
  },
};

export const LargeTextarea: Story = {
  args: {
    label: 'Long Form Content',
    placeholder: 'Write your content here...',
    helperText: 'You have plenty of space',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    resizable: true,
    rows: 10,
  },
};

// NEW: Loading State
export const LoadingState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="headingM" weight="semibold">Loading State</Typography>
      <Typography variant="body">Shows a loading spinner while data is being fetched.</Typography>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <Textarea
          label="Comments"
          isLoading={true}
        />
        <Textarea
          label="Description"
          isLoading={true}
          helperText="Loading content..."
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `isLoading` prop to show a loading spinner. The textarea is disabled and shows "Loading..." placeholder.',
      },
    },
  },
};

// NEW: Empty State
export const EmptyState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="headingM" weight="semibold">Empty State</Typography>
      <Typography variant="body">Shows an empty state message when no data is available.</Typography>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <Textarea
          label="Recent Notes"
          isEmpty={true}
          emptyMessage="No notes available"
        />
        <Textarea
          label="Comments"
          isEmpty={true}
          emptyMessage="No comments yet"
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use `isEmpty` prop with custom `emptyMessage` to show empty states.',
      },
    },
  },
};

// NEW: Event Callbacks
export const EventCallbacks: Story = {
  render: () => {
    const [logs, setLogs] = useState<string[]>([]);
    const addLog = (message: string) => {
      setLogs(prev => [...prev.slice(-4), `${new Date().toLocaleTimeString()}: ${message}`]);
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <Typography variant="headingM" weight="semibold">Event Callbacks</Typography>
        <Typography variant="body">All available event callbacks demonstrated.</Typography>
        
        <Textarea
          label="Interactive Textarea"
          placeholder="Try focusing, typing, and pressing Escape"
          onFocus={() => addLog('onFocus fired')}
          onAfterFocus={() => addLog('onAfterFocus fired (200ms delay)')}
          onBlur={() => addLog('onBlur fired')}
          onAfterBlur={() => addLog('onAfterBlur fired (200ms delay)')}
          onChange={(e) => addLog(`onChange: ${e.target.value.substring(0, 20)}...`)}
          onEscape={() => addLog('onEscape fired (Escape key pressed)')}
          style={{ width: '400px' }}
        />
        
        <div style={{ 
          marginTop: '16px', 
          padding: '12px', 
          background: '#f5f5f5', 
          borderRadius: '4px',
          maxHeight: '150px',
          overflow: 'auto'
        }}>
          <Typography variant="caption" weight="semibold" style={{ marginBottom: '8px', display: 'block' }}>
            Event Log:
          </Typography>
          {logs.length === 0 ? (
            <Typography variant="caption" style={{ color: '#666' }}>No events yet...</Typography>
          ) : (
            logs.map((log, i) => (
              <Typography key={i} variant="caption" style={{ display: 'block', marginBottom: '4px' }}>
                {log}
              </Typography>
            ))
          )}
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
New event callbacks available:
- **onAfterFocus**: Fired 200ms after focus (after animation)
- **onAfterBlur**: Fired 200ms after blur (after animation)
- **onEscape**: Fired when Escape key is pressed
- **onClear**: Fired when textarea is cleared
        `,
      },
    },
  },
};

// NEW: className Overrides
export const ClassNameOverrides: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="headingM" weight="semibold">className Overrides</Typography>
      <Typography variant="body">Multiple override points for custom styling.</Typography>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '400px' }}>
        <Textarea
          label="Custom Styled Textarea"
          placeholder="All parts can be styled"
          helperText="Each part has its own className prop"
          className="custom-container"
          labelClassName="custom-label"
          wrapperClassName="custom-wrapper"
          textareaClassName="custom-textarea"
          helperTextClassName="custom-helper"
          style={{ marginBottom: '20px' }}
        />
      </div>
      
      <div style={{ 
        padding: '12px', 
        background: '#f5f5f5', 
        borderRadius: '4px'
      }}>
        <Typography variant="caption" weight="semibold" style={{ marginBottom: '8px', display: 'block' }}>
          Available className Props:
        </Typography>
        <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• className - Root container</Typography>
        <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• labelClassName - Label element</Typography>
        <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• wrapperClassName - Textarea wrapper</Typography>
        <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• textareaClassName - Textarea element</Typography>
        <Typography variant="caption" style={{ display: 'block' }}>• helperTextClassName - Helper text</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use multiple className props to customize different parts of the component.',
      },
    },
  },
};

// Component Maturity Summary
export const ComponentMaturity: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px', maxWidth: '800px' }}>
      <Typography variant="headingL" weight="semibold">Component Maturity Enhancements</Typography>
      <Typography variant="body">Textarea now meets enterprise-grade standards with the following enhancements:</Typography>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '16px' }}>
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>✅ API & Composition</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• forwardRef support</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• Polymorphic 'as' prop</Typography>
          <Typography variant="caption" style={{ display: 'block' }}>• ...restProps passthrough</Typography>
        </div>
        
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>✅ States & Behavior</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• isLoading state</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• isEmpty state</Typography>
          <Typography variant="caption" style={{ display: 'block' }}>• isInvalid alias</Typography>
        </div>
        
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>✅ Overrides & Theming</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• style prop</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• 4 className overrides</Typography>
          <Typography variant="caption" style={{ display: 'block' }}>• Full customization</Typography>
        </div>
        
        <div style={{ padding: '16px', background: '#f5f5f5', borderRadius: '8px' }}>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>✅ Event Callbacks</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• onAfterFocus/Blur</Typography>
          <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• onEscape</Typography>
          <Typography variant="caption" style={{ display: 'block' }}>• onClear</Typography>
        </div>
      </div>
      
      <div style={{ marginTop: '16px', padding: '16px', background: '#e3f2fd', borderRadius: '8px', borderLeft: '4px solid #2196f3' }}>
        <Typography variant="body" weight="semibold" style={{ marginBottom: '8px' }}>📊 Total Enhancements</Typography>
        <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• 9 new props</Typography>
        <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• 4 new event callbacks</Typography>
        <Typography variant="caption" style={{ display: 'block', marginBottom: '4px' }}>• 4 className override points</Typography>
        <Typography variant="caption" style={{ display: 'block' }}>• Zero breaking changes</Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Summary of all Component Maturity Checklist enhancements applied to Textarea.',
      },
    },
  },
};
