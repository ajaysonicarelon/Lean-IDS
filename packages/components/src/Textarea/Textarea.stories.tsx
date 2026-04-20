/**
 * Textarea - Storybook Stories
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Search } from 'lucide-react';

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

## Features

- **Multiple States**: Default, focused, error, disabled, and filled states
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
