import type { Meta, StoryObj } from '@storybook/react';
import { Brand } from './Brand';

const meta: Meta<typeof Brand> = {
  title: 'Components/Brand',
  component: Brand,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Brand

Brand logo component supporting Carelon and Elevance brands with custom logo options.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Brand } from '@ajaysoni7832/lean-ids-components';

function Header() {
  return (
    <Brand
      variant="logo"
      brand="carelon"
      mode="dark"
      size="medium"
    />
  );
}
\`\`\`

## Features

✅ **Two Brands** - Carelon and Elevance Health
✅ **Two Variants** - Full logo or symbol only
✅ **Light/Dark Modes** - Adapts to theme
✅ **Multiple Sizes** - Small, medium, large
✅ **Custom Logos** - Use your own logo
✅ **Accessible** - Proper alt text and ARIA labels

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | 'logo' \\| 'symbol' | 'logo' | Full logo or symbol only |
| brand | 'carelon' \\| 'elevance' | 'carelon' | Brand name |
| mode | 'dark' \\| 'light' | 'dark' | Color mode |
| size | 'small' \\| 'medium' \\| 'large' | 'medium' | Logo size |
| customLogo | string | - | Custom logo URL |
| customSymbol | string | - | Custom symbol URL |
| alt | string | - | Alt text for accessibility |
| onClick | () => void | - | Click handler |
| className | string | - | Custom CSS class |

## Examples

### Carelon Full Logo
\`\`\`tsx
<Brand variant="logo" brand="carelon" mode="dark" size="medium" />
\`\`\`

### Elevance Symbol Only
\`\`\`tsx
<Brand variant="symbol" brand="elevance" mode="light" size="small" />
\`\`\`

### Custom Logo
\`\`\`tsx
<Brand
  variant="logo"
  customLogo="/path/to/logo.svg"
  alt="Company Logo"
  size="large"
/>
\`\`\`

### Clickable Logo
\`\`\`tsx
<Brand
  variant="logo"
  brand="carelon"
  onClick={() => navigate('/dashboard')}
/>
\`\`\`

## Best Practices

1. **Use full logo in headers** - Better brand recognition
2. **Use symbol in compact spaces** - Navigation, mobile
3. **Match mode to theme** - Dark logo on light bg, light logo on dark bg
4. **Provide alt text** - For custom logos
5. **Make it clickable** - Usually links to home/dashboard

## Accessibility

- ✅ Proper alt text for screen readers
- ✅ ARIA labels
- ✅ Keyboard focusable when clickable
- ✅ High contrast in both modes
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['logo', 'symbol'],
      description: 'Logo variant - full logo or symbol only',
    },
    brand: {
      control: 'radio',
      options: ['carelon', 'elevance'],
      description: 'Brand name',
    },
    mode: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Color mode',
    },
    customLogoUrl: {
      control: 'text',
      description: 'Custom logo image URL (overrides default brand logos)',
    },
    logoAlignment: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      description: 'Logo alignment',
    },
    logoPadding: {
      control: 'text',
      description: 'Logo padding (e.g., "10px", "20px 10px")',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Brand>;

export const CarelonLogo: Story = {
  args: {
    variant: 'logo',
    brand: 'carelon',
    mode: 'light',
  },
};

export const CarelonSymbol: Story = {
  args: {
    variant: 'symbol',
    brand: 'carelon',
    mode: 'light',
  },
};

export const ElevanceLogo: Story = {
  args: {
    variant: 'logo',
    brand: 'elevance',
    mode: 'light',
  },
};

export const ElevanceSymbol: Story = {
  args: {
    variant: 'symbol',
    brand: 'elevance',
    mode: 'light',
  },
};

export const CustomLogo: Story = {
  args: {
    variant: 'logo',
    customLogoUrl: 'https://via.placeholder.com/120x40/6366f1/ffffff?text=Custom+Logo',
    logoAlignment: 'center',
    logoPadding: '10px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Brand with custom logo URL, centered alignment, and padding.',
      },
    },
  },
};

export const CustomLogoWithPadding: Story = {
  args: {
    variant: 'logo',
    customLogoUrl: 'https://via.placeholder.com/120x40/10b981/ffffff?text=My+Brand',
    logoAlignment: 'left',
    logoPadding: '20px',
  },
};
