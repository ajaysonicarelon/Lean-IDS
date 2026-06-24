import type { Meta, StoryObj } from '@storybook/react';
import { Brand } from './Brand';

const meta: Meta<typeof Brand> = {
  title: 'Components/Brand',
  component: Brand,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Brand logo component supporting Carelon and Elevance brands with custom logo options.',
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
