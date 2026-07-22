/**
 * Button Storybook Documentation
 */

import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { Typography } from '../Typography';

// Sample icons
const CheckIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.5 4.5L6 12L2.5 8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Component

An enterprise-grade interactive control that triggers actions with comprehensive state management and accessibility.

## ✨ Features

### Variants & Sizes
- **Five Sizes**: XSmall, Small, Medium, Large, XLarge
- **Three Variants**: Primary (filled), Secondary (outlined), Tertiary (text)
- **Four Button Types**: Default, Safe, Warning, Alert
- **Optional Icons**: Leading and trailing icons with token-based sizing

### States & Behavior
- **8 Interactive States**: Default, Hover, Focus, Active, Disabled, Loading, Error, Empty
- **Loading State**: Built-in spinner with custom indicator support
- **Error State**: Visual feedback for validation errors
- **Event Callbacks**: onClick, onMouseEnter, onMouseLeave, onFocus, onBlur

### Customization
- **Polymorphic Rendering**: Render as any element via \`as\` prop
- **Style Overrides**: className, style, iconClassName, labelClassName
- **Slot Props**: Custom loading indicator
- **Design Tokens**: 100% token-based (zero hardcoded pixels)

### Accessibility
- **WCAG 2.1 AA Compliant**: Full keyboard navigation and screen reader support
- **ARIA Attributes**: aria-label, aria-busy, aria-invalid, aria-disabled
- **Semantic HTML**: Proper button element with type attribute
- **Focus Management**: Visible focus indicators with outline

## 📖 Usage

### Basic Usage
\`\`\`tsx
import { Button } from '@lean-ids/components';

<Button
  variant="primary"
  buttonType="default"
  size="medium"
  onClick={() => console.log('Clicked')}
>
  Click me
</Button>
\`\`\`

### Loading State
\`\`\`tsx
<Button isLoading>
  Saving...
</Button>
\`\`\`

### Error State
\`\`\`tsx
<Button isInvalid>
  Invalid Action
</Button>
\`\`\`

### Polymorphic Rendering
\`\`\`tsx
<Button as="a" href="/link">
  Link Button
</Button>
\`\`\`

### Event Callbacks
\`\`\`tsx
<Button
  onClick={() => console.log('clicked')}
  onMouseEnter={() => console.log('hover')}
  onFocus={() => console.log('focused')}
>
  Interactive
</Button>
\`\`\`

### Icon-Only (Accessible)
\`\`\`tsx
<Button
  leadingIcon={<CloseIcon />}
  showLabel={false}
  aria-label="Close dialog"
>
  Close
</Button>
\`\`\`

### Custom Styling
\`\`\`tsx
<Button
  className="custom-class"
  style={{ minWidth: '200px' }}
  iconClassName="custom-icon"
>
  Styled Button
</Button>
\`\`\`

## 🎯 Component Maturity

This component meets all 6 pillars of the Component Maturity Checklist:
1. ✅ **API & Composition** - forwardRef, polymorphic 'as' prop, slot props
2. ✅ **Layout & Responsiveness** - 100% design tokens, zero hardcoded pixels
3. ✅ **Overrides & Theming** - className, style, and slot-level customization
4. ✅ **States & Behavior** - All 8 states with comprehensive event callbacks
5. ✅ **Accessibility** - Full ARIA support, keyboard navigation, focus management
6. ✅ **Documentation** - Comprehensive Storybook with interactive examples

## 📚 Related Components

- **Input** - Form input fields
- **Modal** - Dialog overlays (reference implementation)
- **Card** - Content containers
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Button label text',
      table: {
        type: { summary: 'ReactNode' },
        category: 'Content',
      },
    },
    size: {
      control: 'radio',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      description: 'Button size',
      table: {
        type: { summary: 'xsmall | small | medium | large | xlarge' },
        defaultValue: { summary: 'medium' },
        category: 'Appearance',
      },
    },
    variant: {
      control: 'radio',
      options: ['primary', 'secondary', 'tertiary'],
      description: 'Visual variant',
      table: {
        type: { summary: 'primary | secondary | tertiary' },
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
    },
    buttonType: {
      control: 'radio',
      options: ['default', 'safe', 'warning', 'alert'],
      description: 'Button type (semantic meaning)',
      table: {
        type: { summary: 'default | safe | warning | alert' },
        defaultValue: { summary: 'default' },
        category: 'Appearance',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether the button takes full width',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'Layout',
      },
    },
    isLoading: {
      control: 'boolean',
      description: 'Loading state - shows spinner and disables interaction',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    isInvalid: {
      control: 'boolean',
      description: 'Invalid/error state - shows error styling',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    isEmpty: {
      control: 'boolean',
      description: 'Empty state (for specialized use cases)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    as: {
      control: 'text',
      description: 'Polymorphic prop - render as different element',
      table: {
        type: { summary: 'ElementType' },
        defaultValue: { summary: 'button' },
        category: 'API',
      },
    },
    style: {
      control: 'object',
      description: 'Custom inline styles for root element',
      table: {
        type: { summary: 'CSSProperties' },
        category: 'Customization',
      },
    },
    iconClassName: {
      control: 'text',
      description: 'Custom class name for icon wrapper',
      table: {
        type: { summary: 'string' },
        category: 'Customization',
      },
    },
    labelClassName: {
      control: 'text',
      description: 'Custom class name for label wrapper',
      table: {
        type: { summary: 'string' },
        category: 'Customization',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
      table: {
        type: { summary: '(event: MouseEvent) => void' },
        category: 'Events',
      },
    },
    onMouseEnter: {
      action: 'mouse-enter',
      description: 'Mouse enter handler',
      table: {
        type: { summary: '(event: MouseEvent) => void' },
        category: 'Events',
      },
    },
    onMouseLeave: {
      action: 'mouse-leave',
      description: 'Mouse leave handler',
      table: {
        type: { summary: '(event: MouseEvent) => void' },
        category: 'Events',
      },
    },
    onFocus: {
      action: 'focused',
      description: 'Focus handler',
      table: {
        type: { summary: '(event: FocusEvent) => void' },
        category: 'Events',
      },
    },
    onBlur: {
      action: 'blurred',
      description: 'Blur handler',
      table: {
        type: { summary: '(event: FocusEvent) => void' },
        category: 'Events',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Playground Story
export const Playground: Story = {
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'primary',
    disabled: false,
  },
};

// Sizes
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button size="xsmall">Extra Small</Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="xlarge">Extra Large</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons are available in five sizes: xsmall, small, medium, large, and xlarge.',
      },
    },
  },
};

// Variants - Primary
export const PrimaryVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons for main actions.',
      },
    },
  },
};

// Variants - Secondary
export const SecondaryVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons (outlined) for secondary actions.',
      },
    },
  },
};

// Variants - Tertiary
export const TertiaryVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="tertiary" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tertiary buttons (text-only) for tertiary actions.',
      },
    },
  },
};


// Button Types - Safe
export const SafeType: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" buttonType="safe">Safe Primary</Button>
      <Button variant="secondary" buttonType="safe">Safe Secondary</Button>
      <Button variant="primary" buttonType="safe" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Safe/Success buttons for positive actions and confirmations.',
      },
    },
  },
};

// Button Types - Warning
export const WarningType: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" buttonType="warning">Warning Primary</Button>
      <Button variant="secondary" buttonType="warning">Warning Secondary</Button>
      <Button variant="primary" buttonType="warning" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Warning buttons for cautionary actions.',
      },
    },
  },
};

// Button Types - Alert
export const AlertType: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button variant="primary" buttonType="alert">Alert Primary</Button>
      <Button variant="secondary" buttonType="alert">Alert Secondary</Button>
      <Button variant="primary" buttonType="alert" disabled>Disabled</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Alert/Error buttons for destructive or critical actions.',
      },
    },
  },
};

// With Icons
export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button leadingIcon={<CheckIcon />}>Leading Icon</Button>
        <Button trailingIcon={<ArrowRightIcon />}>Trailing Icon</Button>
        <Button leadingIcon={<CheckIcon />} trailingIcon={<CloseIcon />}>Both Icons</Button>
      </div>
      <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant="secondary" leadingIcon={<CheckIcon />}>Secondary with Icon</Button>
        <Button variant="tertiary" trailingIcon={<ArrowRightIcon />}>Tertiary with Icon</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can have leading and/or trailing icons.',
      },
    },
  },
};

// Icon Only
export const IconOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Button leadingIcon={<CheckIcon />} showLabel={false} aria-label="Check">Icon</Button>
      <Button leadingIcon={<CloseIcon />} showLabel={false} aria-label="Close" variant="secondary">Icon</Button>
      <Button leadingIcon={<ArrowRightIcon />} showLabel={false} aria-label="Next" size="large">Icon</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons without label text. Always provide aria-label for accessibility.',
      },
    },
  },
};

// Full Width
export const FullWidth: Story = {
  render: () => (
    <div style={{ width: '400px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Button fullWidth>Full Width Primary</Button>
      <Button fullWidth variant="secondary">Full Width Secondary</Button>
      <Button fullWidth variant="tertiary">Full Width Tertiary</Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Buttons can take the full width of their container.',
      },
    },
  },
};

// Button Groups
export const ButtonGroups: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>Horizontal Group</Typography>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Button>Save</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </div>
      <div>
        <Typography variant="headingS" weight="semibold" style={{ marginBottom: '12px' }}>Vertical Group</Typography>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '200px' }}>
          <Button fullWidth>Primary Action</Button>
          <Button fullWidth variant="secondary">Secondary Action</Button>
          <Button fullWidth variant="tertiary">Tertiary Action</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Examples of button groups in horizontal and vertical layouts.',
      },
    },
  },
};

// Loading State
export const LoadingState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="headingM" weight="semibold">Loading State</Typography>
      <Typography variant="body">Buttons show a spinner and are disabled when loading.</Typography>
      
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button isLoading>Loading Primary</Button>
        <Button isLoading variant="secondary">Loading Secondary</Button>
        <Button isLoading variant="tertiary">Loading Tertiary</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button isLoading size="small">Small Loading</Button>
        <Button isLoading size="large">Large Loading</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button isLoading leadingIcon={<CheckIcon />}>With Icon</Button>
        <Button isLoading buttonType="safe">Safe Loading</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading state disables interaction and shows a spinner. Use `isLoading` prop.',
      },
    },
  },
};

// Error/Invalid State
export const ErrorState: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="headingM" weight="semibold">Error/Invalid State</Typography>
      <Typography variant="body">Buttons can show error styling with the isInvalid prop.</Typography>
      
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button isInvalid>Invalid Primary</Button>
        <Button isInvalid variant="secondary">Invalid Secondary</Button>
        <Button isInvalid variant="tertiary">Invalid Tertiary</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button isInvalid leadingIcon={<CloseIcon />}>Error Action</Button>
        <Button isInvalid size="large">Large Error</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Error state shows error colors. Use `isInvalid` prop for validation errors.',
      },
    },
  },
};

// Polymorphic Rendering
export const PolymorphicAs: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="headingM" weight="semibold">Polymorphic Rendering</Typography>
      <Typography variant="body">Button can render as different HTML elements using the 'as' prop.</Typography>
      
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button>Default (button)</Button>
        <Button as="a" onClick={(e: any) => e.preventDefault()}>Render as Link</Button>
        <Button as="div">Render as Div</Button>
      </div>
      
      <Typography variant="caption" style={{ marginTop: '12px' }}>
        Note: When rendering as 'a', you can pass href and other anchor attributes.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use the `as` prop to render Button as different elements while maintaining button styling.',
      },
    },
  },
};

// Event Callbacks
export const EventCallbacks: Story = {
  render: () => {
    const [events, setEvents] = React.useState<string[]>([]);
    const addEvent = (event: string) => setEvents(prev => [...prev.slice(-4), event]);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <Typography variant="headingM" weight="semibold">Event Callbacks</Typography>
        <Typography variant="body">Button exposes comprehensive event handlers.</Typography>
        
        <Button
          onClick={() => addEvent('onClick')}
          onMouseEnter={() => addEvent('onMouseEnter')}
          onMouseLeave={() => addEvent('onMouseLeave')}
          onFocus={() => addEvent('onFocus')}
          onBlur={() => addEvent('onBlur')}
        >
          Interact with me
        </Button>
        
        <div style={{ padding: '12px', backgroundColor: '#f5f5f5', borderRadius: '4px', minHeight: '100px' }}>
          <Typography variant="caption" weight="semibold">Event Log:</Typography>
          {events.length === 0 ? (
            <Typography variant="caption">No events yet. Interact with the button above.</Typography>
          ) : (
            events.map((event, i) => (
              <Typography key={i} variant="caption" style={{ display: 'block' }}>
                {i + 1}. {event}
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
        story: 'Button supports onClick, onMouseEnter, onMouseLeave, onFocus, and onBlur callbacks.',
      },
    },
  },
};

// Style Overrides
export const StyleOverrides: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
      <Typography variant="headingM" weight="semibold">Style Overrides</Typography>
      <Typography variant="body">Button supports className and style props for customization.</Typography>
      
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button style={{ textTransform: 'uppercase' }}>Uppercase Style</Button>
        <Button style={{ minWidth: '200px' }}>Min Width Override</Button>
        <Button className="custom-button-class">Custom Class</Button>
      </div>
      
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
        <Button iconClassName="custom-icon" labelClassName="custom-label" leadingIcon={<CheckIcon />}>
          Custom Slot Classes
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Use className, style, iconClassName, and labelClassName props for customization.',
      },
    },
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      {(['xsmall', 'small', 'medium', 'large', 'xlarge'] as const).map(size => (
        <div key={size}>
          <Typography variant="headingS" weight="semibold" style={{ marginBottom: '16px', textTransform: 'capitalize' }}>{size}</Typography>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant="caption" weight="semibold" style={{ width: '100%' }}>Primary Default:</Typography>
              <Button size={size} leadingIcon={<CheckIcon />}>Button</Button>
              <Button size={size} leadingIcon={<CheckIcon />} trailingIcon={<CloseIcon />}>Button</Button>
              <Button size={size} disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant="caption" weight="semibold" style={{ width: '100%' }}>Primary Safe:</Typography>
              <Button size={size} buttonType="safe" leadingIcon={<CheckIcon />}>Safe</Button>
              <Button size={size} buttonType="safe" disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant="caption" weight="semibold" style={{ width: '100%' }}>Primary Warning:</Typography>
              <Button size={size} buttonType="warning" leadingIcon={<CheckIcon />}>Warning</Button>
              <Button size={size} buttonType="warning" disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant="caption" weight="semibold" style={{ width: '100%' }}>Primary Alert:</Typography>
              <Button size={size} buttonType="alert" leadingIcon={<CloseIcon />}>Alert</Button>
              <Button size={size} buttonType="alert" disabled leadingIcon={<CloseIcon />}>Disabled</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant="caption" weight="semibold" style={{ width: '100%' }}>Secondary:</Typography>
              <Button size={size} variant="secondary" leadingIcon={<CheckIcon />}>Button</Button>
              <Button size={size} variant="secondary" disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography variant="caption" weight="semibold" style={{ width: '100%' }}>Tertiary:</Typography>
              <Button size={size} variant="tertiary">Tertiary Button</Button>
              <Button size={size} variant="tertiary" disabled>Disabled</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all button variants, sizes, types, and states.',
      },
    },
  },
};
