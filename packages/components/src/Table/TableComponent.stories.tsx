import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import type { TableColumn } from './Table.types';
import { Badge } from '../Badge';

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
      <Badge 
        label={value} 
        type={value === 'Active' ? 'success' : 'error'}
        style="default"
      />
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
 * Complete table with all features enabled - matches CompleteExample design
 */
export const Complete: Story = {
  args: {
    data: sampleData,
    columns: advancedColumns,
    selectable: true,
    paginated: true,
    itemsPerPage: 10,
    showSettings: true,
    showActions: true,
    showToolbar: true,
    title: 'Employee Directory',
    description: 'Manage and view all employee information',
    showGlobalSearch: true,
    showFilter: true,
    showDownload: true,
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
 * Loading state
 */
export const Loading: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    loading: true,
    title: 'Tabular View',
  },
};

/**
 * Empty state with action button
 */
export const Empty: Story = {
  args: {
    data: [],
    columns: basicColumns,
    showToolbar: true,
    title: 'Tabular View',
    emptyIcon: 'CloudOff',
    emptyTitle: 'Not able to sync',
    emptyDescription: 'Please check your internet connection',
    emptyActionLabel: 'Refresh',
    onEmptyAction: () => console.log('Refresh clicked'),
  },
};
