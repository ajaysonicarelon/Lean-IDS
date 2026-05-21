import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import type { TableColumn } from './Table.types';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A complete data table component with sorting, filtering, pagination, and more. Use this as your default table for all data display needs.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Table>;

// Sample data
const sampleData = [
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@company.com',
    role: 'Senior Developer',
    department: 'Engineering',
    status: 'Active',
    salary: 125000,
    avatar: 'https://i.pravatar.cc/32?img=1',
  },
  {
    id: '2',
    name: 'Bob Smith',
    email: 'bob.smith@company.com',
    role: 'Product Manager',
    department: 'Product',
    status: 'Active',
    salary: 115000,
    avatar: 'https://i.pravatar.cc/32?img=2',
  },
  {
    id: '3',
    name: 'Carol Williams',
    email: 'carol.williams@company.com',
    role: 'UX Designer',
    department: 'Design',
    status: 'Active',
    salary: 95000,
    avatar: 'https://i.pravatar.cc/32?img=3',
  },
  {
    id: '4',
    name: 'David Brown',
    email: 'david.brown@company.com',
    role: 'DevOps Engineer',
    department: 'Engineering',
    status: 'Inactive',
    salary: 110000,
    avatar: 'https://i.pravatar.cc/32?img=4',
  },
  {
    id: '5',
    name: 'Eve Davis',
    email: 'eve.davis@company.com',
    role: 'Marketing Manager',
    department: 'Marketing',
    status: 'Active',
    salary: 105000,
    avatar: 'https://i.pravatar.cc/32?img=5',
  },
];

// Basic columns
const basicColumns: TableColumn[] = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name' },
  { id: 'email', label: 'Email' },
  { id: 'role', label: 'Role' },
];

// Advanced columns with all features
const advancedColumns: TableColumn[] = [
  {
    id: 'id',
    label: 'ID',
    sortable: true,
    resizable: true,
    width: 80,
  },
  {
    id: 'user',
    label: 'User',
    sortable: true,
    resizable: true,
    width: 250,
    accessor: (row) => row.name,
    renderCell: (value, row) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
          src={row.avatar}
          alt={row.name}
          style={{ width: 32, height: 32, borderRadius: '50%' }}
        />
        <div>
          <div style={{ fontWeight: 600 }}>{row.name}</div>
          <div style={{ fontSize: '12px', color: '#666' }}>{row.role}</div>
        </div>
      </div>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    sortable: true,
    searchable: true,
    resizable: true,
  },
  {
    id: 'department',
    label: 'Department',
    sortable: true,
  },
  {
    id: 'status',
    label: 'Status',
    sortable: true,
    renderCell: (value) => (
      <span
        style={{
          padding: '4px 12px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: 600,
          backgroundColor: value === 'Active' ? '#D1FAE5' : '#FEE2E2',
          color: value === 'Active' ? '#065F46' : '#991B1B',
        }}
      >
        {value}
      </span>
    ),
  },
  {
    id: 'salary',
    label: 'Salary',
    sortable: true,
    resizable: true,
    renderCell: (value) => `$${value.toLocaleString()}`,
  },
];

/**
 * Basic table with minimal configuration
 */
export const Basic: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    paginated: false,
    showSettings: false,
  },
};

/**
 * Table with sorting enabled on all columns
 */
export const WithSorting: Story = {
  args: {
    data: sampleData,
    columns: basicColumns.map(col => ({ ...col, sortable: true })),
    paginated: false,
    showSettings: false,
  },
};

/**
 * Table with row selection
 */
export const WithSelection: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    selectable: true,
    paginated: false,
    showSettings: false,
    onRowSelect: (ids) => console.log('Selected rows:', ids),
  },
};

/**
 * Table with pagination
 */
export const WithPagination: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    paginated: true,
    itemsPerPage: 3,
    showSettings: false,
  },
};

/**
 * Table with search functionality
 */
export const WithSearch: Story = {
  args: {
    data: sampleData,
    columns: [
      { id: 'id', label: 'ID' },
      { id: 'name', label: 'Name', searchable: true },
      { id: 'email', label: 'Email', searchable: true },
      { id: 'role', label: 'Role' },
    ],
    paginated: false,
    showSettings: false,
  },
};

/**
 * Table with actions column
 */
export const WithActions: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    showActions: true,
    actions: [
      {
        icon: 'Edit',
        label: 'Edit',
        onClick: (row) => console.log('Edit:', row),
      },
      {
        icon: 'Delete',
        label: 'Delete',
        onClick: (row) => console.log('Delete:', row),
      },
    ],
    paginated: false,
    showSettings: false,
  },
};

/**
 * Complete table with all features enabled
 */
export const Complete: Story = {
  args: {
    data: sampleData,
    columns: advancedColumns,
    selectable: true,
    paginated: true,
    itemsPerPage: 5,
    showSettings: true,
    showActions: true,
    actions: [
      {
        icon: 'Edit',
        label: 'Edit',
        onClick: (row) => console.log('Edit:', row),
      },
      {
        icon: 'Delete',
        label: 'Delete',
        onClick: (row) => console.log('Delete:', row),
      },
    ],
    onRowSelect: (ids) => console.log('Selected:', ids),
  },
};

/**
 * Empty state
 */
export const Empty: Story = {
  args: {
    data: [],
    columns: basicColumns,
    emptyMessage: 'No data available. Add your first item to get started.',
  },
};

/**
 * Loading state
 */
export const Loading: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    loading: true,
  },
};

/**
 * With custom cell rendering
 */
export const CustomCells: Story = {
  args: {
    data: sampleData,
    columns: advancedColumns,
    paginated: false,
    showSettings: false,
  },
};
