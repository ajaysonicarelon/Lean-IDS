/**
 * InputField Storybook Documentation
 * 
 * This file provides comprehensive documentation for the InputField component including:
 * - Specification
 * - Properties
 * - Configure (Interactive Playground)
 * - Examples
 * - Guidelines (About, Purpose, When to Use/Not Use)
 * - Accessibility
 */

import type { Meta, StoryObj } from '@storybook/react';
import { InputField } from './InputField';
import React from 'react';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Input Field Component

A fully accessible input field component designed for the Lean IDS design system, supporting both Carelon and Elevance brand themes.

## About

The Input Field is a fundamental form component that allows users to enter and edit text-based information. It provides a consistent, accessible interface for data collection across all applications.

## Purpose

- **Data Collection**: Enable users to input various types of information (text, email, password, numbers, etc.)
- **User Interaction**: Provide clear feedback through states (hover, focus, error, success)
- **Accessibility**: Ensure WCAG 2.1 AA compliance with proper ARIA labels and keyboard navigation
- **Brand Consistency**: Maintain visual consistency across Carelon and Elevance themes

## When to Use

✅ **Use Input Field when:**
- Collecting single-line text input from users
- Users need to enter email addresses, passwords, or search queries
- You need to validate user input and show error/success states
- Building forms that require accessible, keyboard-navigable inputs
- You want consistent styling across your application

## When NOT to Use

❌ **Don't use Input Field when:**
- You need multi-line text input (use TextArea instead)
- Users need to select from predefined options (use Select/Dropdown instead)
- You need binary choices (use Checkbox or Radio buttons instead)
- Collecting dates with a calendar picker (use DatePicker instead)
- The input is read-only display text (use Text component instead)

## Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets all accessibility standards
- **Keyboard Navigation**: Full keyboard support (Tab, Shift+Tab, Enter, Escape)
- **Screen Reader Support**: Proper ARIA labels and announcements
- **Focus Management**: Clear focus indicators and logical tab order
- **Error Announcements**: Errors are announced to screen readers via role="alert"
- **Label Association**: Labels properly associated with inputs for assistive technology
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text displayed above the input field',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text shown when input is empty',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    helperText: {
      control: 'text',
      description: 'Helper text displayed below the input',
      table: {
        type: { summary: 'string' },
        category: 'Content',
      },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message (overrides helperText when present)',
      table: {
        type: { summary: 'string' },
        category: 'Validation',
      },
    },
    successMessage: {
      control: 'text',
      description: 'Success message shown for valid input',
      table: {
        type: { summary: 'string' },
        category: 'Validation',
      },
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'number', 'email', 'search', 'tel', 'url', 'date', 'datetime-local', 'time'],
      description: 'Input type attribute',
      table: {
        type: { summary: 'InputType' },
        defaultValue: { summary: 'text' },
        category: 'Behavior',
      },
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
      description: 'Input field size',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
        category: 'Appearance',
      },
    },
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Validation',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the field is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    error: {
      control: 'boolean',
      description: 'Whether the field has an error',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    success: {
      control: 'boolean',
      description: 'Whether the field shows success state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the input takes full width of container',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Layout',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof InputField>;

// Default / Playground Story
export const Playground: Story = {
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    helperText: 'We will never share your email with anyone',
    type: 'email',
    size: 'medium',
    required: false,
    disabled: false,
    error: false,
    success: false,
    fullWidth: false,
  },
};

// Specification Examples
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <InputField
        label="Small Input"
        placeholder="Small size"
        size="small"
      />
      <InputField
        label="Medium Input (Default)"
        placeholder="Medium size"
        size="medium"
      />
      <InputField
        label="Large Input"
        placeholder="Large size"
        size="large"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input fields are available in three sizes: small (32px), medium (40px), and large (48px).',
      },
    },
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <InputField
        label="Default State"
        placeholder="Enter text"
      />
      <InputField
        label="Disabled State"
        placeholder="Disabled input"
        disabled
        value="Cannot edit this"
      />
      <InputField
        label="Error State"
        placeholder="Enter text"
        error
        errorMessage="This field is required"
      />
      <InputField
        label="Success State"
        placeholder="Enter text"
        success
        successMessage="Looks good!"
        value="valid@email.com"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input fields support multiple states: default, hover (automatic), focused (automatic), disabled, error, and success.',
      },
    },
  },
};

export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <InputField
        label="Text Input"
        type="text"
        placeholder="Enter text"
      />
      <InputField
        label="Email Input"
        type="email"
        placeholder="email@example.com"
      />
      <InputField
        label="Password Input"
        type="password"
        placeholder="Enter password"
      />
      <InputField
        label="Number Input"
        type="number"
        placeholder="Enter number"
      />
      <InputField
        label="Search Input"
        type="search"
        placeholder="Search..."
      />
      <InputField
        label="Date Input"
        type="date"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input fields support various HTML5 input types including text, email, password, number, search, date, and more.',
      },
    },
  },
};

// Examples Section
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <InputField
        label="Search"
        type="search"
        placeholder="Search..."
        leadingIcon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        }
      />
      <InputField
        label="Email"
        type="email"
        placeholder="email@example.com"
        trailingIcon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        }
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Input fields can include leading or trailing icons to provide visual context.',
      },
    },
  },
};

export const RequiredFields: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <InputField
        label="Full Name"
        placeholder="John Doe"
        required
        helperText="Required field"
      />
      <InputField
        label="Email Address"
        type="email"
        placeholder="email@example.com"
        required
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Required fields are indicated with an asterisk (*) next to the label.',
      },
    },
  },
};

export const FullWidthLayout: Story = {
  render: () => (
    <div style={{ width: '100%', maxWidth: '600px' }}>
      <InputField
        label="Full Width Input"
        placeholder="This input takes full width"
        fullWidth
        helperText="Use fullWidth prop for responsive layouts"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the fullWidth prop to make the input field responsive and fill its container.',
      },
    },
  },
};

export const FormExample: Story = {
  render: () => (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '400px' }}>
      <InputField
        label="First Name"
        placeholder="Enter your first name"
        required
      />
      <InputField
        label="Last Name"
        placeholder="Enter your last name"
        required
      />
      <InputField
        label="Email"
        type="email"
        placeholder="email@example.com"
        required
        helperText="We'll never share your email"
      />
      <InputField
        label="Phone Number"
        type="tel"
        placeholder="(555) 123-4567"
      />
      <InputField
        label="Password"
        type="password"
        placeholder="Enter password"
        required
        helperText="Must be at least 8 characters"
      />
    </form>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete form using multiple input fields with various types and configurations.',
      },
    },
  },
};

// Do's and Don'ts
export const BestPractices: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', width: '800px' }}>
      <div>
        <h3 style={{ color: '#10B981', marginBottom: '16px' }}>✓ Do</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <InputField
            label="Email address"
            type="email"
            placeholder="email@example.com"
            helperText="Use sentence case for labels"
          />
          <InputField
            label="Search products"
            type="search"
            placeholder="Search..."
            helperText="Provide clear, concise labels"
          />
        </div>
      </div>
      <div>
        <h3 style={{ color: '#EF4444', marginBottom: '16px' }}>✗ Don't</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <InputField
            label="EMAIL ADDRESS"
            type="email"
            placeholder="EMAIL@EXAMPLE.COM"
            helperText="Don't use all caps"
          />
          <InputField
            label="Enter Your Complete Email Address Here"
            type="email"
            placeholder="Please type your email"
            helperText="Don't use overly verbose labels"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Do's
- Use sentence case for labels (not Title Case or ALL CAPS)
- Provide clear, concise labels and placeholders
- Show helper text for additional context
- Use appropriate input types for better mobile experience
- Indicate required fields clearly
- Provide immediate validation feedback

### Don'ts
- Don't use vague or ambiguous labels
- Don't override core design tokens
- Don't ignore accessibility requirements
- Don't use placeholder text as the only label
- Don't make inputs too narrow for expected content
- Don't use input fields for read-only data display
        `,
      },
    },
  },
};

// Accessibility Story
export const AccessibilityDemo: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '400px' }}>
      <InputField
        label="Accessible Input"
        placeholder="Try tabbing to this field"
        helperText="Press Tab to navigate, Enter to submit"
      />
      <InputField
        label="Email with ARIA"
        type="email"
        placeholder="email@example.com"
        aria-label="Email address input"
        helperText="Screen readers announce this properly"
      />
      <InputField
        label="Error with Announcement"
        placeholder="Enter text"
        error
        errorMessage="This error is announced to screen readers"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Keyboard Navigation
- **Tab**: Move focus to the input field
- **Shift + Tab**: Move focus to previous element
- **Enter**: Submit form (if in a form)
- **Escape**: Clear input (browser default)

### Screen Reader Support
- Labels are properly associated with inputs
- Helper text is announced via aria-describedby
- Error messages use role="alert" for immediate announcement
- Required fields are announced as required
- Disabled state is properly communicated

### Focus Management
- Clear focus indicators (2px outline with offset)
- Focus ring uses theme color for brand consistency
- Logical tab order maintained
- Focus visible on keyboard navigation only
        `,
      },
    },
  },
};
