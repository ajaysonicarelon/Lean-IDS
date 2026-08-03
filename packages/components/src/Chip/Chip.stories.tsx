/**
 * Chip Storybook Documentation
 * 
 * Enterprise-grade Chip component with comprehensive state management,
 * accessibility, and customization options.
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Chip, CloseIcon } from './Chip';
import { Typography } from '../Typography';
import { useState, useRef } from 'react';

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
    layout: 'padded',
    docs: {
      description: {
        component: `
Enterprise-grade Chip component for displaying compact, interactive tags, categories, or selections.

## ✨ Features

- **Three Sizes**: Small, Medium, Large
- **Two Variants**: Filled, Outlined  
- **Five Types**: Default, Success, Warning, Error, Neutral
- **Eight States**: Default, Hover, Focus, Active, Disabled, Loading, Error, Empty
- **Polymorphic**: Render as any HTML element via 'as' prop
- **Slots**: Custom render functions for icons and labels
- **forwardRef**: Direct DOM access
- **Keyboard Navigation**: Full keyboard support (Enter, Space, Escape)
- **WCAG 2.1 AA**: Fully accessible with ARIA attributes
- **Multiple Customization Points**: className overrides, style props

## 📦 Installation

\`\`\`bash
npm install @lean-ids/components
\`\`\`

## 🚀 Basic Usage

\`\`\`tsx
import { Chip } from '@lean-ids/components';

<Chip label="React" variant="filled" size="medium" />
\`\`\`

## 🎯 Advanced Usage

\`\`\`tsx
// With loading state
<Chip label="Processing" isLoading loadingText="Processing data" />

// With error state
<Chip label="Failed" isInvalid errorMessage="Operation failed" />

// With custom render slots
<Chip 
  label="Custom"
  renderLeadingIcon={({ size, type }) => <CustomIcon />}
  renderLabel={(label) => <strong>{label}</strong>}
/>

// Polymorphic - render as button
<Chip as="button" label="Click me" onClick={handleClick} />

// With forwardRef
const chipRef = useRef<HTMLElement>(null);
<Chip ref={chipRef} label="Ref example" />
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
    width: {
      control: 'text',
      description: 'Custom width (e.g., "200px", "50%", "min(90vw, 600px)")',
      table: {
        type: { summary: 'string' },
        category: 'Layout',
      },
    },
    maxWidth: {
      control: 'text',
      description: 'Maximum width constraint',
      table: {
        type: { summary: 'string' },
        category: 'Layout',
      },
    },
    minWidth: {
      control: 'text',
      description: 'Minimum width constraint',
      table: {
        type: { summary: 'string' },
        category: 'Layout',
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Chip Sizes</Typography>
      <Typography variant="body">Chips are available in three sizes: small, medium, and large.</Typography>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Chip label="Small" size="small" />
        <Chip label="Medium" size="medium" />
        <Chip label="Large" size="large" />
      </div>
    </div>
  ),
};

// Variants - Filled
export const FilledVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Filled Variants</Typography>
      <Typography variant="body">Filled chips with solid backgrounds for different semantic types.</Typography>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Chip label="Default" variant="filled" type="default" />
        <Chip label="Success" variant="filled" type="success" />
        <Chip label="Warning" variant="filled" type="warning" />
        <Chip label="Error" variant="filled" type="error" />
        <Chip label="Neutral" variant="filled" type="neutral" />
      </div>
    </div>
  ),
};

// Variants - Outlined
export const OutlinedVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Outlined Variants</Typography>
      <Typography variant="body">Outlined chips with borders for a lighter visual weight.</Typography>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Chip label="Default" variant="outlined" type="default" />
        <Chip label="Success" variant="outlined" type="success" />
        <Chip label="Warning" variant="outlined" type="warning" />
        <Chip label="Error" variant="outlined" type="error" />
        <Chip label="Neutral" variant="outlined" type="neutral" />
      </div>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Chips with Icons</Typography>
      <Typography variant="body">Chips can have leading and/or trailing icons for enhanced visual communication.</Typography>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant="headingM" weight="semibold">Removable Chips</Typography>
        <Typography variant="body">Click the close icon to remove chips. Fully keyboard accessible (Tab + Enter/Space).</Typography>
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
      </div>
    );
  },
};

// Clickable Chips
export const Clickable: Story = {
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant="headingM" weight="semibold">Clickable Chips</Typography>
        <Typography variant="body">Chips can be clickable for selection or filtering. Use isActive prop to show selected state.</Typography>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {['React', 'Vue', 'Angular', 'Svelte'].map(framework => (
            <Chip
              key={framework}
              label={framework}
              variant={selected === framework ? 'filled' : 'outlined'}
              isActive={selected === framework}
              onClick={() => setSelected(framework)}
            />
          ))}
        </div>
        <Typography variant="body" style={{ color: '#666' }}>
          Selected: {selected || 'None'}
        </Typography>
      </div>
    );
  },
};

// States - Loading
export const LoadingState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Loading State</Typography>
      <Typography variant="body">Chips automatically show a spinner when isLoading is true. User interaction is disabled during loading.</Typography>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Chip label="Processing" isLoading />
        <Chip label="Uploading" isLoading loadingText="Uploading file" variant="outlined" />
        <Chip label="Saving" isLoading size="medium" type="success" />
        <Chip label="Loading" isLoading size="large" type="neutral" />
      </div>
    </div>
  ),
};

// States - Error
export const ErrorState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Error State</Typography>
      <Typography variant="body">Chips display error styling and icon when isInvalid is true. Error message is announced to screen readers.</Typography>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Chip label="Failed" isInvalid errorMessage="Operation failed" />
        <Chip label="Invalid" isInvalid errorMessage="Invalid input" variant="outlined" />
        <Chip label="Error" isInvalid errorMessage="Network error" size="medium" />
        <Chip label="Rejected" isInvalid errorMessage="Request rejected" size="large" />
      </div>
    </div>
  ),
};

// States - Disabled
export const DisabledState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Disabled State</Typography>
      <Typography variant="body">Disabled chips have reduced opacity and cannot be interacted with.</Typography>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Chip label="Disabled" disabled />
        <Chip label="Disabled" disabled variant="outlined" />
        <Chip label="Disabled" disabled leadingIcon={<LeadingIconSample />} />
        <Chip label="Disabled" disabled trailingIcon={<CloseIcon />} onTrailingIconClick={() => {}} />
      </div>
    </div>
  ),
};

// States - Active
export const ActiveState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Active/Selected State</Typography>
      <Typography variant="body">Use isActive prop to show a chip is selected or in an active state.</Typography>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Chip label="Active" isActive />
        <Chip label="Active" isActive variant="outlined" />
        <Chip label="Active" isActive type="success" />
        <Chip label="Active" isActive type="warning" variant="outlined" />
      </div>
    </div>
  ),
};

// Advanced - Slots
export const CustomSlots: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Custom Render Slots</Typography>
      <Typography variant="body">Use render props to fully customize icons and labels.</Typography>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Chip 
          label="Custom Label"
          renderLabel={(label) => <strong style={{ textTransform: 'uppercase' }}>{label}</strong>}
        />
        <Chip 
          label="Custom Icon"
          renderLeadingIcon={() => (
            <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
            </svg>
          )}
        />
        <Chip 
          label="Both Custom"
          renderLeadingIcon={() => <span>⭐</span>}
          renderLabel={(label) => <em>{label}</em>}
        />
      </div>
    </div>
  ),
};

// Advanced - Polymorphic
export const PolymorphicAs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Polymorphic 'as' Prop</Typography>
      <Typography variant="body">Render chips as different HTML elements using the 'as' prop.</Typography>
      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Chip as="button" label="Button" onClick={() => alert('Clicked!')} />
        <Chip as="span" label="Span" />
      </div>
      <Typography variant="caption">Note: When using 'as', ensure you pass appropriate props for that element type.</Typography>
    </div>
  ),
};

// Advanced - ForwardRef
export const WithForwardRef: Story = {
  render: () => {
    const chipRef = useRef<HTMLElement>(null);
    
    const focusChip = () => {
      chipRef.current?.focus();
    };
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <Typography variant="headingM" weight="semibold">forwardRef Support</Typography>
        <Typography variant="body">Access the underlying DOM element using React refs.</Typography>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
          <Chip ref={chipRef} label="Focusable Chip" onClick={() => {}} />
          <button onClick={focusChip} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Focus Chip
          </button>
        </div>
      </div>
    );
  },
};

// Accessibility
export const AccessibilityExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Accessibility Features</Typography>
      <Typography variant="body">Chips are fully accessible with ARIA attributes, keyboard navigation, and screen reader support.</Typography>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <Typography variant="headingS" weight="semibold">Keyboard Navigation</Typography>
          <Typography variant="caption">Tab to focus, Enter/Space to activate, Escape to blur</Typography>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
            <Chip label="Press Tab" onClick={() => {}} />
            <Chip label="Then Enter" onClick={() => {}} />
            <Chip label="Or Space" onClick={() => {}} />
          </div>
        </div>
        
        <div>
          <Typography variant="headingS" weight="semibold">ARIA Labels</Typography>
          <Typography variant="caption">Custom labels for screen readers</Typography>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
            <Chip label="Delete" aria-label="Delete item from list" trailingIcon={<CloseIcon />} onTrailingIconClick={() => {}} />
            <Chip label="Filter" aria-label="Filter results by category" onClick={() => {}} />
          </div>
        </div>
        
        <div>
          <Typography variant="headingS" weight="semibold">Loading & Error States</Typography>
          <Typography variant="caption">States are announced to screen readers</Typography>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
            <Chip label="Processing" isLoading loadingText="Processing your request" />
            <Chip label="Failed" isInvalid errorMessage="Upload failed, please try again" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Width Control
export const WidthControl: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Width Control Props</Typography>
      <Typography variant="body">Control chip width for responsive design using width, maxWidth, and minWidth props.</Typography>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <Typography variant="headingS" weight="semibold">Fixed Width</Typography>
          <Typography variant="caption">Set specific widths for consistent sizing</Typography>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
            <Chip label="100px" width="100px" />
            <Chip label="150px" width="150px" />
            <Chip label="200px" width="200px" />
          </div>
        </div>
        
        <div>
          <Typography variant="headingS" weight="semibold">Responsive Width</Typography>
          <Typography variant="caption">Use min(), max(), or percentage for fluid layouts</Typography>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
            <Chip label="50% width" width="50%" />
            <Chip label="min(90vw, 200px)" width="min(90vw, 200px)" />
          </div>
        </div>
        
        <div>
          <Typography variant="headingS" weight="semibold">Max & Min Width</Typography>
          <Typography variant="caption">Constrain chip sizing with boundaries</Typography>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
            <Chip label="Max 150px" maxWidth="150px" />
            <Chip label="Min 200px" minWidth="200px" />
            <Chip label="Min 100px, Max 300px" minWidth="100px" maxWidth="300px" />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Customization
export const CustomizationExample: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Typography variant="headingM" weight="semibold">Customization Options</Typography>
      <Typography variant="body">Multiple className overrides and style props for fine-grained control.</Typography>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <Typography variant="headingS" weight="semibold">Custom Styles</Typography>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
            <Chip 
              label="Custom Style" 
              style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            />
            <Chip 
              label="Custom Label" 
              labelClassName="custom-label"
              style={{ fontWeight: 'bold' }}
            />
          </div>
        </div>
        
        <div>
          <Typography variant="headingS" weight="semibold">Multiple Override Points</Typography>
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
            <Chip 
              label="Overrides" 
              className="custom-chip"
              labelClassName="custom-label"
              leadingIconClassName="custom-icon"
              leadingIcon={<LeadingIconSample />}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
