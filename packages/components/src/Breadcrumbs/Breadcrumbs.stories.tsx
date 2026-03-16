import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Usage

\`\`\`tsx
import { Breadcrumbs } from '@lean-ids/components';

function MyComponent() {
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Electronics', href: '/products/electronics' },
    { label: 'Laptops' }
  ];

  return <Breadcrumbs items={items} separator="slash" />;
}
\`\`\`

Breadcrumbs provide navigation context and allow users to understand their location within a hierarchical structure.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    separator: {
      control: 'radio',
      options: ['slash', 'arrow'],
      description: 'The separator style between breadcrumb items',
    },
    items: {
      description: 'Array of breadcrumb items with label, href, and optional onClick',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Laptops' },
    ],
    separator: 'slash',
  },
};

export const WithArrowSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Laptops' },
    ],
    separator: 'arrow',
  },
};

export const ShortPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Dashboard' },
    ],
    separator: 'slash',
  },
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Electronics', href: '/products/electronics' },
      { label: 'Computers', href: '/products/electronics/computers' },
      { label: 'Laptops', href: '/products/electronics/computers/laptops' },
      { label: 'Gaming Laptops' },
    ],
    separator: 'slash',
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      { 
        label: 'Home', 
        onClick: () => alert('Navigating to Home') 
      },
      { 
        label: 'Products', 
        onClick: () => alert('Navigating to Products') 
      },
      { 
        label: 'Current Page' 
      },
    ],
    separator: 'arrow',
  },
};

export const SingleItem: Story = {
  args: {
    items: [
      { label: 'Current Page' },
    ],
    separator: 'slash',
  },
};
