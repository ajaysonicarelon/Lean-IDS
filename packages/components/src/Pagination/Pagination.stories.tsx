import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    currentPage: {
      control: { type: 'number', min: 1 },
      description: 'Current active page number',
    },
    totalPages: {
      control: { type: 'number', min: 1 },
      description: 'Total number of pages',
    },
    totalItems: {
      control: { type: 'number', min: 0 },
      description: 'Total number of items',
    },
    itemsPerPage: {
      control: { type: 'number', min: 1 },
      description: 'Number of items per page',
    },
    onPageChange: {
      action: 'page-changed',
      description: 'Callback when page changes',
    },
    onItemsPerPageChange: {
      action: 'items-per-page-changed',
      description: 'Callback when items per page changes',
    },
    variant: {
      control: 'select',
      options: ['default', 'filled', 'outlined'],
      description: 'Visual variant',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
    variant: 'default',
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 5,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 10,
    totalPages: 10,
    totalItems: 100,
    itemsPerPage: 10,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
    totalItems: 30,
    itemsPerPage: 10,
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 15,
    totalPages: 50,
    totalItems: 500,
    itemsPerPage: 10,
  },
};

export const WithCustomItemsPerPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    totalItems: 120,
    itemsPerPage: 25,
    itemsPerPageOptions: [10, 25, 50, 100],
  },
};
