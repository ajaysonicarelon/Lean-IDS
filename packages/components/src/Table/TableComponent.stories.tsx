import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Table } from './Table';
import type { TableColumn } from './Table.types';
import { Badge } from '../Badge';
import { TableToolbar, TableToolbarSection, TableToolbarTitle, TableToolbarActions } from './TableToolbar';
import { Button } from '../Button';
import { Icon } from '../Icon';
import { Typography } from '../Typography';

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'padded',
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
      description: {
        component: `
# Basic Table

Complete data table with sorting, filtering, pagination.

## Installation
\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage
\`\`\`tsx
import { Table } from '@ajaysoni7832/lean-ids-components';

const columns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
];

<Table data={data} columns={columns} />
\`\`\`

## Features
✅ Sorting, filtering, pagination
✅ Row selection
✅ Custom cell rendering
✅ Responsive
        `,
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
  {
    id: '6',
    name: 'Frank Miller',
    email: 'frank.miller@company.com',
    role: 'Backend Developer',
    department: 'Engineering',
    status: 'Active',
    salary: 118000,
    avatar: 'https://i.pravatar.cc/32?img=6',
  },
  {
    id: '7',
    name: 'Grace Lee',
    email: 'grace.lee@company.com',
    role: 'Data Analyst',
    department: 'Analytics',
    status: 'Active',
    salary: 98000,
    avatar: 'https://i.pravatar.cc/32?img=7',
  },
  {
    id: '8',
    name: 'Henry Wilson',
    email: 'henry.wilson@company.com',
    role: 'QA Engineer',
    department: 'Engineering',
    status: 'Inactive',
    salary: 92000,
    avatar: 'https://i.pravatar.cc/32?img=8',
  },
  {
    id: '9',
    name: 'Iris Martinez',
    email: 'iris.martinez@company.com',
    role: 'Frontend Developer',
    department: 'Engineering',
    status: 'Active',
    salary: 112000,
    avatar: 'https://i.pravatar.cc/32?img=9',
  },
  {
    id: '10',
    name: 'Jack Anderson',
    email: 'jack.anderson@company.com',
    role: 'Sales Manager',
    department: 'Sales',
    status: 'Active',
    salary: 108000,
    avatar: 'https://i.pravatar.cc/32?img=10',
  },
  {
    id: '11',
    name: 'Karen Taylor',
    email: 'karen.taylor@company.com',
    role: 'HR Manager',
    department: 'Human Resources',
    status: 'Active',
    salary: 95000,
    avatar: 'https://i.pravatar.cc/32?img=11',
  },
  {
    id: '12',
    name: 'Leo Thomas',
    email: 'leo.thomas@company.com',
    role: 'Security Engineer',
    department: 'Engineering',
    status: 'Active',
    salary: 125000,
    avatar: 'https://i.pravatar.cc/32?img=12',
  },
  {
    id: '13',
    name: 'Maria Garcia',
    email: 'maria.garcia@company.com',
    role: 'Content Writer',
    department: 'Marketing',
    status: 'Active',
    salary: 75000,
    avatar: 'https://i.pravatar.cc/32?img=13',
  },
  {
    id: '14',
    name: 'Nathan Moore',
    email: 'nathan.moore@company.com',
    role: 'System Administrator',
    department: 'IT',
    status: 'Inactive',
    salary: 88000,
    avatar: 'https://i.pravatar.cc/32?img=14',
  },
  {
    id: '15',
    name: 'Olivia Jackson',
    email: 'olivia.jackson@company.com',
    role: 'UI Designer',
    department: 'Design',
    status: 'Active',
    salary: 102000,
    avatar: 'https://i.pravatar.cc/32?img=15',
  },
  {
    id: '16',
    name: 'Paul White',
    email: 'paul.white@company.com',
    role: 'Business Analyst',
    department: 'Product',
    status: 'Active',
    salary: 96000,
    avatar: 'https://i.pravatar.cc/32?img=16',
  },
  {
    id: '17',
    name: 'Quinn Harris',
    email: 'quinn.harris@company.com',
    role: 'Mobile Developer',
    department: 'Engineering',
    status: 'Active',
    salary: 115000,
    avatar: 'https://i.pravatar.cc/32?img=17',
  },
  {
    id: '18',
    name: 'Rachel Clark',
    email: 'rachel.clark@company.com',
    role: 'Scrum Master',
    department: 'Product',
    status: 'Active',
    salary: 105000,
    avatar: 'https://i.pravatar.cc/32?img=18',
  },
  {
    id: '19',
    name: 'Samuel Lewis',
    email: 'samuel.lewis@company.com',
    role: 'Cloud Architect',
    department: 'Engineering',
    status: 'Active',
    salary: 135000,
    avatar: 'https://i.pravatar.cc/32?img=19',
  },
  {
    id: '20',
    name: 'Tina Robinson',
    email: 'tina.robinson@company.com',
    role: 'Customer Success Manager',
    department: 'Support',
    status: 'Active',
    salary: 85000,
    avatar: 'https://i.pravatar.cc/32?img=20',
  },
];

// Basic columns with width constraints
const basicColumns: TableColumn[] = [
  { 
    id: 'id', 
    label: 'ID',
    width: 80,
    minWidth: 60,
    maxWidth: 100,
  },
  { 
    id: 'name', 
    label: 'Name',
    width: 200,
    minWidth: 150,
    maxWidth: 300,
  },
  { 
    id: 'email', 
    label: 'Email',
    width: 250,
    minWidth: 200,
    maxWidth: 400,
  },
  { 
    id: 'role', 
    label: 'Role',
    width: 180,
    minWidth: 150,
    maxWidth: 250,
  },
];

// Advanced columns with all features including width constraints
const advancedColumns: TableColumn[] = [
  {
    id: 'id',
    label: 'ID',
    sortable: true,
    resizable: true,
    width: 80,
    minWidth: 60,
    maxWidth: 100,
  },
  {
    id: 'user',
    label: 'User',
    sortable: true,
    resizable: true,
    width: 250,
    minWidth: 200,
    maxWidth: 400,
    accessor: (row) => row.name,
    renderCell: (_value, row) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
          src={row.avatar}
          alt={row.name}
          style={{ width: 32, height: 32, borderRadius: '50%' }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <Typography variant="body" weight="semibold">{row.name}</Typography>
          <Typography variant="caption" color="secondary">{row.role}</Typography>
        </div>
      </div>
    ),
  },
  {
    id: 'email',
    label: 'Email',
    accessor: 'email',
    sortable: true,
    searchable: true,
    resizable: true,
    width: 250,
    minWidth: 200,
    maxWidth: 400,
  },
  {
    id: 'department',
    label: 'Department',
    accessor: 'department',
    sortable: true,
    width: 150,
    minWidth: 120,
    maxWidth: 200,
  },
  {
    id: 'status',
    label: 'Status',
    accessor: 'status',
    sortable: true,
    width: 120,
    minWidth: 100,
    maxWidth: 150,
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
    accessor: 'salary',
    sortable: true,
    resizable: true,
    width: 120,
    minWidth: 100,
    maxWidth: 180,
    renderCell: (value) => `$${value.toLocaleString()}`,
  },
];

/**
 * Complete table with all features enabled - matches CompleteExample design
 * 
 * **Features:**
 * - ✅ Row selection with checkboxes
 * - ✅ **Shift-click multi-select**: Click first row, hold Shift, click another row to select range
 * - ✅ Pagination
 * - ✅ Column settings
 * - ✅ Row actions
 * - ✅ Global search
 * - ✅ Filters
 * - ✅ Download
 * - ✅ **Column resizing**: Drag column borders to resize (works in both Canvas and Docs)
 * - ✅ **Width constraints**: Columns have `minWidth` and `maxWidth` to prevent over-shrinking or over-growing
 * 
 * **Column Width Control:**
 * Each column is configured with:
 * - `width` - Preferred/initial width
 * - `minWidth` - Minimum width constraint (prevents shrinking too small)
 * - `maxWidth` - Maximum width constraint (prevents growing too large)
 * 
 * When resizing columns, they respect these constraints for a professional, consistent layout.
 * 
 * **Note:** Column resizing is fully interactive in both Canvas and Docs views.
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
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

/**
 * Fixed Header with Scroll - demonstrates maxHeight prop for fixed header with internal scrolling
 * 
 * When you set maxHeight, the table header stays fixed and only the body scrolls.
 * This is useful for tables with many rows where you want to keep the header visible.
 */
export const FixedHeaderScroll: Story = {
  args: {
    data: sampleData,
    columns: advancedColumns,
    selectable: true,
    paginated: true,
    itemsPerPage: 20,  // Show all 20 rows
    maxHeight: '500px',  // Fixed height - header stays visible
    showToolbar: true,
    title: 'Fixed Header Table',
    description: 'Header stays fixed while body scrolls. Try changing items per page!',
    showSettings: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The `maxHeight` prop enables a fixed header with internal scrolling. The table height stays constant regardless of how many items per page you select. Perfect for dashboards and constrained layouts.',
      },
      story: {
        inline: false,
        iframeHeight: 700,
      },
    },
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
 * Custom Toolbar - demonstrates how to create a fully custom toolbar using TableToolbar helper components
 * 
 * **How to use:**
 * ```tsx
 * import { 
 *   Table, 
 *   TableToolbar, 
 *   TableToolbarSection, 
 *   TableToolbarTitle,
 *   TableToolbarActions,
 *   Button,
 *   Icon
 * } from '@ajaysoni7832/lean-ids-components';
 * 
 * <Table
 *   data={data}
 *   columns={columns}
 *   toolbar={
 *     <TableToolbar>
 *       <TableToolbarSection align="left">
 *         <TableToolbarTitle>Custom Title</TableToolbarTitle>
 *       </TableToolbarSection>
 *       <TableToolbarSection align="right">
 *         <TableToolbarActions>
 *           <Button variant="secondary">Export</Button>
 *           <Button variant="primary">Add New</Button>
 *         </TableToolbarActions>
 *       </TableToolbarSection>
 *     </TableToolbar>
 *   }
 * />
 * ```
 */
export const CustomToolbar: Story = {
  args: {
    data: sampleData,
    columns: advancedColumns,
    selectable: true,
    paginated: true,
    itemsPerPage: 10,
    toolbar: (
      <TableToolbar>
        <TableToolbarSection align="left">
          <TableToolbarTitle>Custom Employee Directory</TableToolbarTitle>
        </TableToolbarSection>
        <TableToolbarSection align="right">
          <TableToolbarActions>
            <Button
              variant="secondary"
              size="medium"
              showLabel={false}
              leadingIcon={<Icon name="Download" size="medium" />}
              onClick={() => console.log('Export clicked')}
              aria-label="Export"
            >
              Export
            </Button>
            <Button
              variant="secondary"
              size="medium"
              showLabel={false}
              leadingIcon={<Icon name="FilterAlt" size="medium" />}
              onClick={() => console.log('Filter clicked')}
              aria-label="Filter"
            >
              Filter
            </Button>
            <Button
              variant="primary"
              size="medium"
              onClick={() => console.log('Add Employee clicked')}
            >
              Add Employee
            </Button>
          </TableToolbarActions>
        </TableToolbarSection>
      </TableToolbar>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a custom toolbar using `TableToolbar`, `TableToolbarSection`, `TableToolbarTitle`, and `TableToolbarActions` helper components. These components provide a consistent layout and styling while allowing full customization. You can add any Lean IDS components (Button, Input, Select, etc.) inside the toolbar sections.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

/**
 * Empty state with action button
 */
/**
 * Server-Side Sorting - demonstrates how to implement server-side sorting
 * 
 * In this example, the parent component manages the sort state and simulates
 * a server request. In a real application, you would fetch sorted data from your API.
 */
export const ServerSideSorting: Story = {
  render: (args) => {
    const [sortedData, setSortedData] = React.useState(sampleData);
    const [sortCol, setSortCol] = React.useState('');
    const [sortDir, setSortDir] = React.useState<'asc' | 'desc' | 'none'>('none');
    const [loading, setLoading] = React.useState(false);

    const handleSort = async (columnId: string, direction: 'asc' | 'desc' | 'none') => {
      setSortCol(columnId);
      setSortDir(direction);
      setLoading(true);

      // Simulate server request
      await new Promise(resolve => setTimeout(resolve, 500));

      // Simulate server-side sorting
      if (direction === 'none') {
        setSortedData([...sampleData]);
      } else {
        const sorted = [...sampleData].sort((a, b) => {
          const aVal = a[columnId as keyof typeof a];
          const bVal = b[columnId as keyof typeof b];
          if (aVal < bVal) return direction === 'asc' ? -1 : 1;
          if (aVal > bVal) return direction === 'asc' ? 1 : -1;
          return 0;
        });
        setSortedData(sorted);
      }

      setLoading(false);
    };

    return (
      <Table
        {...args}
        data={sortedData}
        loading={loading}
        sortMode="server"
        sortColumn={sortCol}
        sortDirection={sortDir}
        onSort={handleSort}
      />
    );
  },
  args: {
    columns: advancedColumns,
    paginated: true,
    itemsPerPage: 10,
    title: 'Server-Side Sorting Example',
    description: 'Click column headers to sort. Data is "fetched" from server.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of server-side sorting. The parent component manages `sortColumn` and `sortDirection` state, and fetches sorted data when `onSort` is called. Set `sortMode="server"` to enable this mode.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

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

export const ErrorState: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'Employee Directory',
    isInvalid: true,
    errorMessage: 'Failed to load data. Please try again later.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with error state. Use `isInvalid` and `errorMessage` props to display error messages.',
      },
    },
  },
};

export const LoadingState: Story = {
  args: {
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'Employee Directory',
    loading: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in loading state. Shows skeleton rows while data is being fetched.',
      },
    },
  },
};

export const WithForwardRef: Story = {
  render: (args) => {
    const tableRef = React.useRef<HTMLDivElement>(null);
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Button
            variant="secondary"
            size="small"
            onClick={() => {
              if (tableRef.current) {
                tableRef.current.scrollIntoView({ behavior: 'smooth' });
                console.log('Table ref:', tableRef.current);
              }
            }}
          >
            Scroll to Table
          </Button>
          <Button
            variant="secondary"
            size="small"
            onClick={() => {
              if (tableRef.current) {
                console.log('Table dimensions:', {
                  width: tableRef.current.offsetWidth,
                  height: tableRef.current.offsetHeight,
                });
              }
            }}
          >
            Log Dimensions
          </Button>
        </div>
        <Table
          ref={tableRef}
          {...args}
        />
      </div>
    );
  },
  args: {
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'ForwardRef Example',
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with forwardRef support. The ref is forwarded to the root container element, allowing parent components to access the DOM node.',
      },
    },
  },
};

export const ColumnWidthControl: Story = {
  render: () => {
    const widthControlColumns: TableColumn[] = [
      {
        id: 'fixed',
        label: 'Fixed Width',
        accessor: 'name',
        width: 150,
        minWidth: 150,
        maxWidth: 150,
        resizable: true,
      },
      {
        id: 'flexible',
        label: 'Flexible (150-400px)',
        accessor: 'email',
        width: 250,
        minWidth: 150,
        maxWidth: 400,
        resizable: true,
      },
      {
        id: 'minOnly',
        label: 'Min Only (200px+)',
        accessor: 'department',
        minWidth: 200,
        resizable: true,
      },
      {
        id: 'maxOnly',
        label: 'Max Only (≤300px)',
        accessor: 'role',
        maxWidth: 300,
        resizable: true,
      },
    ];

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <Typography variant="headingM" weight="semibold">Column Width Control Demo</Typography>
          <Typography variant="body" color="secondary">
            Try resizing the columns by dragging their borders. Each column has different width constraints:
          </Typography>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', padding: '16px', background: '#f9fafb', borderRadius: '8px' }}>
            <Typography variant="body" weight="semibold">Column Configurations:</Typography>
            <ul style={{ margin: 0, paddingLeft: '20px' }}>
              <li>
                <Typography variant="body">
                  <strong>Fixed Width:</strong> width=150, minWidth=150, maxWidth=150 (cannot resize)
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  <strong>Flexible:</strong> width=250, minWidth=150, maxWidth=400 (can resize between 150-400px)
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  <strong>Min Only:</strong> minWidth=200 (can grow indefinitely, but not below 200px)
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  <strong>Max Only:</strong> maxWidth=300 (can shrink, but not above 300px)
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        <Table
          data={sampleData.slice(0, 5)}
          columns={widthControlColumns}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
Demonstrates column width control with \`width\`, \`minWidth\`, and \`maxWidth\` properties.

**Width Properties:**
- \`width\` - Sets the initial/preferred width
- \`minWidth\` - Prevents column from shrinking below this value
- \`maxWidth\` - Prevents column from growing above this value

**Use Cases:**
- **Fixed Width**: Set all three properties to the same value
- **Flexible with Constraints**: Set different min and max values
- **Minimum Only**: Set only minWidth to allow unlimited growth
- **Maximum Only**: Set only maxWidth to allow unlimited shrinking

Try resizing the columns to see how the constraints work!
        `,
      },
      source: {
        code: `
const columns: TableColumn[] = [
  {
    id: 'fixed',
    label: 'Fixed Width',
    width: 150,
    minWidth: 150,
    maxWidth: 150,
    resizable: true,
  },
  {
    id: 'flexible',
    label: 'Flexible',
    width: 250,
    minWidth: 150,
    maxWidth: 400,
    resizable: true,
  },
  {
    id: 'minOnly',
    label: 'Min Only',
    minWidth: 200,
    resizable: true,
  },
  {
    id: 'maxOnly',
    label: 'Max Only',
    maxWidth: 300,
    resizable: true,
  },
];

<Table data={data} columns={columns} />
        `,
      },
    },
  },
};

export const PolymorphicAs: Story = {
  args: {
    as: 'section',
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'Polymorphic Table',
  },
  parameters: {
    docs: {
      description: {
        story: 'Table rendered as a different HTML element using the `as` prop. In this example, the table is rendered as a `<section>` instead of a `<div>`.',
      },
    },
  },
};
