import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { AdvancedDataTable, getNestedColumnConfigs } from './EnhancedTableTemplate';
import { Chip } from '../Chip';
import { Button } from '../Button';
import { Visibility, Edit, Delete } from '@mui/icons-material';

const meta: Meta<typeof AdvancedDataTable> = {
  title: 'Components/Table/Advanced Table',
  component: AdvancedDataTable,
  argTypes: {
    // Polymorphism
    as: {
      control: 'select',
      options: ['div', 'section', 'article', 'main'],
      description: 'Polymorphic component type',
      table: { category: 'Polymorphism' },
    },
    className: {
      control: 'text',
      description: 'Custom CSS class',
      table: { category: 'Polymorphism' },
    },
    
    // Data & Columns
    initialColumns: {
      control: false,
      description: 'Column configuration array. Each column supports: id, label, visible, locked, pinned ("left"|"right"|"none"), order, width, and render function. The render function signature is: (value, row, rowIndex) => ReactNode. Example: render: (value, row) => <Chip label={value} />',
      table: { category: 'Data & Columns' },
    },
    data: {
      control: false,
      description: 'Table data rows',
      table: { category: 'Data & Columns' },
    },
    rowKey: {
      control: 'text',
      description: 'Row key accessor',
      table: { category: 'Data & Columns' },
    },
    
    // Layout & Display
    useSidePanel: {
      control: 'boolean',
      description: 'Show side panel',
      table: { category: 'Layout & Display' },
    },
    useModal: {
      control: 'boolean',
      description: 'Show modal for settings',
      table: { category: 'Layout & Display' },
    },
    showToolbar: {
      control: 'boolean',
      description: 'Show toolbar',
      table: { category: 'Layout & Display' },
    },
    toolbarTitle: {
      control: 'text',
      description: 'Toolbar title',
      table: { category: 'Layout & Display' },
    },
    description: {
      control: 'text',
      description: 'Table description',
      table: { category: 'Layout & Display' },
    },
    showGlobalSearch: {
      control: 'boolean',
      description: 'Show global search',
      table: { category: 'Layout & Display' },
    },
    showFilter: {
      control: 'boolean',
      description: 'Show filter button',
      table: { category: 'Layout & Display' },
    },
    showDownload: {
      control: 'boolean',
      description: 'Show download button',
      table: { category: 'Layout & Display' },
    },
    maxHeight: {
      control: 'text',
      description: 'Max height for table body (e.g., "400px", "50vh"). Enables fixed header with scrollable body and always-visible 8px scrollbar',
      table: { category: 'Layout & Display' },
    },
    showColumnSearchByDefault: {
      control: 'boolean',
      description: 'Show column search bars',
      table: { category: 'Layout & Display' },
    },
    
    // Column Menu & Pinning
    showColumnMenu: {
      control: 'boolean',
      description: 'Enable column header menu (three-dot menu with sort, pin, autosize, and reset options). Default: true',
      table: { category: 'Column Menu & Pinning' },
    },
    enableUserPinning: {
      control: 'boolean',
      description: 'Allow users to pin columns (left or right) via column menu. When false, hides pin options from menu. Default: true',
      table: { category: 'Column Menu & Pinning' },
    },
    enableDevPinning: {
      control: 'boolean',
      description: 'Allow developers to set initial pinned columns via column config (pinned: "left" | "right"). When false, ignores pinned property in column config. Default: true',
      table: { category: 'Column Menu & Pinning' },
    },
    
    // Selection
    selectable: {
      control: 'boolean',
      description: 'Enable row selection',
      table: { category: 'Selection' },
    },
    
    // Pagination
    paginated: {
      control: 'boolean',
      description: 'Enable pagination',
      table: { category: 'Pagination' },
    },
    itemsPerPage: {
      control: 'number',
      description: 'Items per page',
      table: { category: 'Pagination' },
    },
    paginationMode: {
      control: 'select',
      options: ['client', 'server'],
      description: 'Pagination mode: "client" (default) handles data slicing automatically, "server" expects pre-paginated data and calls onPageChange callback',
      table: { category: 'Pagination' },
    },
    onPageChange: {
      action: 'pageChanged',
      description: 'Callback for server-side pagination. Called with (page, itemsPerPage) when page changes. Use with paginationMode="server"',
      table: { category: 'Pagination' },
    },
    currentPage: {
      control: 'number',
      description: 'Controlled current page (for server-side pagination). Use with paginationMode="server"',
      table: { category: 'Pagination' },
    },
    totalItems: {
      control: 'number',
      description: 'Total number of items across all pages (required for server-side pagination). Use with paginationMode="server"',
      table: { category: 'Pagination' },
    },
    
    // Sorting
    sortMode: {
      control: 'select',
      options: ['client', 'server'],
      description: 'Sorting mode',
      table: { category: 'Sorting' },
    },
    
    // Column Resizing
    defaultMinWidth: {
      control: 'number',
      description: 'Default min width for columns',
      table: { category: 'Column Resizing' },
    },
    defaultMaxWidth: {
      control: 'number',
      description: 'Default max width for columns',
      table: { category: 'Column Resizing' },
    },
    
    // States
    loading: {
      control: 'boolean',
      description: 'Loading state',
      table: { category: 'States' },
    },
    isInvalid: {
      control: 'boolean',
      description: 'Error state',
      table: { category: 'States' },
    },
    errorMessage: {
      control: 'text',
      description: 'Error message',
      table: { category: 'States' },
    },
    
    // Empty State
    emptyTitle: {
      control: 'text',
      description: 'Empty state title',
      table: { category: 'Empty State' },
    },
    emptyDescription: {
      control: 'text',
      description: 'Empty state description',
      table: { category: 'Empty State' },
    },
    emptyActionLabel: {
      control: 'text',
      description: 'Empty action button label',
      table: { category: 'Empty State' },
    },
    emptyIcon: {
      control: 'text',
      description: 'Empty state icon',
      table: { category: 'Empty State' },
    },
    
    // Customization
    containerClassName: {
      control: 'text',
      description: 'Container class',
      table: { category: 'Customization' },
    },
    scrollContainerClassName: {
      control: 'text',
      description: 'Scroll container class',
      table: { category: 'Customization' },
    },
    emptyStateClassName: {
      control: 'text',
      description: 'Empty state class',
      table: { category: 'Customization' },
    },
    loadingClassName: {
      control: 'text',
      description: 'Loading state class',
      table: { category: 'Customization' },
    },
    errorClassName: {
      control: 'text',
      description: 'Error state class',
      table: { category: 'Customization' },
    },
    
    // Events (actions)
    onRowClick: { action: 'row clicked', table: { category: 'Events' } },
    onRowSelect: { action: 'rows selected', table: { category: 'Events' } },
    onSort: { action: 'sorted', table: { category: 'Events' } },
    onDownload: { action: 'download clicked', table: { category: 'Events' } },
    onEmptyAction: { action: 'empty action clicked', table: { category: 'Events' } },
    onOpen: { action: 'panel opened', table: { category: 'Events' } },
    onClose: { action: 'panel closed', table: { category: 'Events' } },
    onAfterOpen: { action: 'after open', table: { category: 'Events' } },
    onAfterClose: { action: 'after close', table: { category: 'Events' } },
  },
  parameters: {
    layout: 'padded',
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
      description: {
        component: `
Advanced enterprise-grade table with **40+ props** for maximum flexibility. **Component Maturity: 100% Compliant**

## ✨ Features

**Core Features:**
- 🎯 Nested headers with sub-columns
- 📏 Column resizing with min/max constraints
- 🎨 Side panel & modal for settings
- 🔄 Drag-and-drop column reordering
- 🔍 Sorting & filtering
- 📄 Pagination
- ✅ Row selection
- 🎭 8 States (default, hover, focus, active, disabled, loading, empty, error)

**Enterprise Features:**
- 🔧 **forwardRef** support
- 🎨 **Polymorphic 'as' prop** - render as any element
- 📊 **Loading state** with customization
- ❌ **Error state** with custom messages
- 📭 **Empty state** with 7 customization props
- 🎛️ **10+ override points** for styling
- 🎨 **Typography component** integration
- 🔔 **Lifecycle callbacks** (onOpen, onClose, onAfterOpen, onAfterClose)
- 🛠️ **Custom toolbar** support
- 📦 **40+ props** for complete control

## 🚀 Quick Start

\`\`\`tsx
import { AdvancedDataTable, getNestedColumnConfigs } from '@ajaysoni7832/lean-ids-components';

// Basic usage
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="My Table"
/>

// With states
<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  loading={isLoading}
  isInvalid={hasError}
  errorMessage="Failed to load"
/>

// Full customization
<AdvancedDataTable
  as="section"
  ref={tableRef}
  initialColumns={getNestedColumnConfigs()}
  selectable={true}
  paginated={true}
  itemsPerPage={20}
  onRowSelect={(ids) => {}}
  containerClassName="custom-table"
/>
\`\`\`

## 📚 Props Overview

| Category | Props |
|----------|-------|
| **Polymorphism** | \`as\`, \`ref\` (forwardRef) |
| **Data** | \`initialColumns\`, \`data\`, \`rowKey\` |
| **Layout** | \`useSidePanel\`, \`useModal\`, \`showToolbar\`, \`toolbar\`, \`maxHeight\` |
| **Toolbar** | \`toolbarTitle\`, \`description\`, \`showGlobalSearch\`, \`showFilter\`, \`showDownload\` |
| **Column Menu** | \`showColumnMenu\`, \`allowUserLeftPin\`, \`allowUserRightPin\`, \`allowDevLeftPin\`, \`allowDevRightPin\` |
| **Selection** | \`selectable\`, \`onRowSelect\` |
| **Pagination** | \`paginated\`, \`itemsPerPage\`, \`paginationMode\`, \`onPageChange\`, \`currentPage\`, \`totalItems\` |
| **Sorting** | \`sortMode\`, \`onSort\`, \`sortColumn\`, \`sortDirection\` |
| **Resizing** | \`defaultMinWidth\`, \`defaultMaxWidth\` |
| **Events** | \`onRowClick\`, \`onOpen\`, \`onClose\`, \`onAfterOpen\`, \`onAfterClose\` |
| **States** | \`loading\`, \`isInvalid\`, \`errorMessage\` |
| **Empty State** | \`emptyTitle\`, \`emptyDescription\`, \`emptyActionLabel\`, \`onEmptyAction\` |
| **Customization** | 10+ className/style override props |

## 🎨 Custom Cell Rendering

Columns support custom rendering via the \`render\` function:

**Signature:** \`(value, row, rowIndex) => ReactNode\`

\`\`\`tsx
const columns = [
  {
    id: 'status',
    label: 'Status',
    // value = cell value, row = full row object, rowIndex = row index
    render: (value, row, rowIndex) => (
      <Chip label={value} type="success" />
    )
  },
  {
    id: 'actions',
    label: 'Actions',
    // For actions column, value is ignored, use row object
    render: (_value, row) => (
      <Button onClick={() => handleEdit(row)}>Edit</Button>
    )
  }
];
\`\`\`

See stories below for detailed examples of each feature.
        `,
      },
    },
  },
  args: {
    // Default args for all stories
    initialColumns: getNestedColumnConfigs(),
    useSidePanel: false,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Data Table',
    showGlobalSearch: true,
    showFilter: false,
    showDownload: false,
    showColumnSearchByDefault: false,
    showColumnMenu: true,
    enableUserPinning: true,
    enableDevPinning: true,
    selectable: false,
    paginated: true,
    itemsPerPage: 10,
    sortMode: 'client',
    defaultMinWidth: 50,
    defaultMaxWidth: 250,
    loading: false,
    isInvalid: false,
    errorMessage: '',
    emptyTitle: 'No Results Found',
    emptyDescription: 'Try adjusting your search criteria or filters',
    emptyActionLabel: '',
    rowKey: 'id',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AdvancedDataTable>;

/**
 * ## With Side Panel
 * 
 * Advanced table with side panel for column and filter controls. Recommended for complex tables.
 * 
 * **Usage:**
 * ```tsx
 * import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';
 * 
 * const data = [
 *   { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
 *   { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
 * ];
 * 
 * const columns = [
 *   { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
 *   { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
 *   { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
 *   { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
 *   { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
 * ];
 * 
 * <AdvancedDataTable
 *   data={data}
 *   columns={columns}
 *   useSidePanel={true}
 *   showToolbar={true}
 *   toolbarTitle="Claims Data"
 * />
 * ```
 */
export const WithSidePanel: Story = {
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Claims Data',
    onRowClick: fn(),
    onSort: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel. Column resizing works in both Canvas and Docs views.',
      },
      source: {
        code: `import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>`,
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

/**
 * ## With Modal
 * 
 * Traditional table with modal settings dialog. Click settings icon to configure columns.
 * 
 * **Usage:**
 * ```tsx
 * import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';
 * 
 * const data = [
 *   { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
 *   { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
 * ];
 * 
 * const columns = [
 *   { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
 *   { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
 *   { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
 *   { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
 *   { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
 * ];
 * 
 * <AdvancedDataTable
 *   data={data}
 *   columns={columns}
 *   useModal={true}
 *   showToolbar={true}
 *   toolbarTitle="Claims Data"
 * />
 * ```
 */
export const WithModal: Story = {
  args: {
    useSidePanel: false,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data',
    onRowClick: fn(),
    onSort: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings. Column resizing works in both Canvas and Docs views.',
      },
      source: {
        code: `import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>`,
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

export const WithBothControls: Story = {
  args: {
    useSidePanel: true,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data',
    onRowClick: fn(),
    onSort: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls. Column resizing works in both Canvas and Docs views.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

/**
 * ## With Sub-Headers (Nested Columns)
 * 
 * Table with hierarchical column structure using parent-child relationships.
 * 
 * **Usage:**
 * ```tsx
 * import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';
 * 
 * const data = [
 *   { 
 *     id: 1, 
 *     claimId: 'CLM-001', 
 *     firstName: 'John', 
 *     lastName: 'Doe',
 *     city: 'New York',
 *     state: 'NY',
 *     status: 'Approved'
 *   },
 * ];
 * 
 * const columns = [
 *   {
 *     id: 'claimId',
 *     label: 'Claim ID',
 *     accessor: 'claimId',
 *     sortable: true,
 *     resizable: true,
 *   },
 *   {
 *     id: 'userDetails',
 *     label: 'User Details',
 *     subColumns: [
 *       {
 *         id: 'firstName',
 *         label: 'First Name',
 *         accessor: 'firstName',
 *         sortable: true,
 *         resizable: true,
 *       },
 *       {
 *         id: 'lastName',
 *         label: 'Last Name',
 *         accessor: 'lastName',
 *         sortable: true,
 *         resizable: true,
 *       },
 *     ],
 *   },
 *   {
 *     id: 'address',
 *     label: 'Address',
 *     subColumns: [
 *       {
 *         id: 'city',
 *         label: 'City',
 *         accessor: 'city',
 *         sortable: true,
 *         resizable: true,
 *       },
 *       {
 *         id: 'state',
 *         label: 'State',
 *         accessor: 'state',
 *         sortable: true,
 *         resizable: true,
 *       },
 *     ],
 *   },
 * ];
 * 
 * <AdvancedDataTable
 *   data={data}
 *   columns={columns}
 *   useModal={true}
 *   showToolbar={true}
 *   toolbarTitle="Claims Data with Sub-Headers"
 * />
 * ```
 */
export const WithSubHeaders: Story = {
  args: {
    useSidePanel: false,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data with Sub-Headers',
    initialColumns: getNestedColumnConfigs(),
    onRowClick: fn(),
    onSort: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with sub-header support showing nested columns. The "User Details" parent column contains "First Name" and "Last Name" sub-columns, and the "Address" parent column contains "City" and "State" sub-columns. This demonstrates the hierarchical column structure with parent-child relationships. Column resizing works in both Canvas and Docs views.',
      },
      source: {
        code: `import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { 
    id: 1, 
    claimId: 'CLM-001', 
    firstName: 'John', 
    lastName: 'Doe',
    city: 'New York',
    state: 'NY',
    status: 'Approved'
  },
];

const columns = [
  {
    id: 'claimId',
    label: 'Claim ID',
    accessor: 'claimId',
    sortable: true,
    resizable: true,
  },
  {
    id: 'userDetails',
    label: 'User Details',
    subColumns: [
      {
        id: 'firstName',
        label: 'First Name',
        accessor: 'firstName',
        sortable: true,
        resizable: true,
      },
      {
        id: 'lastName',
        label: 'Last Name',
        accessor: 'lastName',
        sortable: true,
        resizable: true,
      },
    ],
  },
  {
    id: 'address',
    label: 'Address',
    subColumns: [
      {
        id: 'city',
        label: 'City',
        accessor: 'city',
        sortable: true,
        resizable: true,
      },
      {
        id: 'state',
        label: 'State',
        accessor: 'state',
        sortable: true,
        resizable: true,
      },
    ],
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data with Sub-Headers"
/>`,
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

/**
 * ## With Filters & Filter Count Badge
 * 
 * Table with column filters and visual filter count badge.
 * 
 * **Usage:**
 * ```tsx
 * import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';
 * 
 * const data = [
 *   { id: 1, claimId: 'CLM-001', firstName: 'John', status: 'Approved', amount: 1500 },
 *   { id: 2, claimId: 'CLM-002', firstName: 'Jane', status: 'Pending', amount: 2300 },
 * ];
 * 
 * const columns = [
 *   { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
 *   { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
 *   { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
 *   { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
 * ];
 * 
 * const filters = [
 *   {
 *     id: 'status',
 *     label: 'Status',
 *     type: 'select',
 *     options: [
 *       { label: 'All', value: '' },
 *       { label: 'Approved', value: 'approved' },
 *       { label: 'Pending', value: 'pending' },
 *       { label: 'Rejected', value: 'rejected' },
 *     ],
 *   },
 *   {
 *     id: 'dateRange',
 *     label: 'Date Range',
 *     type: 'dateRange',
 *   },
 * ];
 * 
 * <AdvancedDataTable
 *   data={data}
 *   columns={columns}
 *   useSidePanel={true}
 *   showToolbar={true}
 *   toolbarTitle="Table with Filters"
 *   columnFilters={filters}
 *   onFiltersChange={(filters) => {}}
 * />
 * ```
 * 
 * **Features:**
 * - Filter count badge shows number of active filters
 * - Smart search headers appear when filters are applied
 * - Search headers persist when side panel is closed
 */
export const WithFilterCountBadge: Story = {
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Filter Count Badge Demo',
    onRowClick: fn(),
    onSort: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '**Filter Count Badge & Smart Search Headers**: The Filter button now shows a purple badge with the count of active filters. Search headers only appear when filters are actually applied, not just when clicking the Filter button. This provides better visual feedback and cleaner UX.',
      },
      source: {
        code: `import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
      { label: 'Rejected', value: 'rejected' },
    ],
  },
  {
    id: 'dateRange',
    label: 'Date Range',
    type: 'dateRange',
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Table with Filters"
  columnFilters={filters}
  onFiltersChange={(filters) => {}}
/>`,
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

/**
 * ## New Feature: Always Show Search Headers
 * 
 * **What's New:**
 * - 🎛️ **Developer control** via showColumnSearchByDefault prop
 * - 📌 Force search headers to always be visible
 * - 🔧 Useful when you want search functionality always available
 * 
 * **Use Case:**
 * When you want column-specific search to be the primary filtering method,
 * set showColumnSearchByDefault to true to keep search headers always visible.
 */
export const WithAlwaysVisibleSearchHeaders: Story = {
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Always Visible Search Headers',
    showColumnSearchByDefault: true,
    onRowClick: fn(),
    onSort: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '**Always Visible Search Headers**: Set showColumnSearchByDefault to true to force search headers to always be visible, regardless of filter state. Useful when column search is the primary filtering method.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

/**
 * ## New Feature: Custom Tabs in Side Panel
 * 
 * **What's New:**
 * - ➕ **Add custom tabs** below Columns and Filters
 * - 🎯 Two modes: **Action-only** or **Content panel**
 * - 🔧 Fully customizable for developer needs
 * 
 * **Example Custom Tabs:**
 * - Export: Action-only tab that triggers export
 * - Settings: Content tab with custom settings panel
 * 
 * **Usage:**
 * ```tsx
 * import { DownloadIcon, SettingsIcon } from '@mui/icons-material';
 * 
 * <AdvancedDataTable
 *   customSidePanelTabs={[
 *     {
 *       id: 'export',
 *       label: 'Export',
 *       icon: <DownloadIcon />,
 *       onClick: () => handleExport()
 *     },
 *     {
 *       id: 'settings',
 *       label: 'Settings',
 *       icon: <SettingsIcon />,
 *       content: <CustomSettingsPanel />
 *     }
 *   ]}
 * />
 * ```
 */
export const WithCustomTabs: Story = {
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Custom Tabs Demo',
    customSidePanelTabs: [
      {
        id: 'export',
        label: 'Export',
        icon: '📥',
        onClick: () => alert('Export functionality triggered!'),
      },
      {
        id: 'info',
        label: 'Info',
        icon: 'ℹ️',
        content: (
          <div style={{ padding: '16px' }}>
            <h3 style={{ margin: '0 0 12px 0', fontSize: '16px', fontWeight: 600 }}>
              Custom Info Panel
            </h3>
            <p style={{ margin: 0, fontSize: '14px', color: '#666', lineHeight: 1.5 }}>
              This is a custom content panel. You can render any React component here.
              Perfect for settings, filters, analytics, or any custom functionality.
            </p>
          </div>
        ),
      },
    ],
    onRowClick: fn(),
    onSort: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '**Custom Tabs**: Add your own tabs to the side panel with customSidePanelTabs prop. Supports both action-only tabs (with onClick) and content tabs (with content ReactNode). Try clicking the "Export" and "Info" tabs!',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

/**
 * ## New Feature: Click Outside to Close
 * 
 * **What's New:**
 * - 🖱️ **Click outside** the expanded panel to close it
 * - 🛡️ **Protected closing** - prevents closing if there are unsaved filter changes
 * - ⚠️ **Shake animation** + warning message when trying to close with unsaved changes
 * 
 * **Try it:**
 * 1. Click "Filters" to open side panel
 * 2. Click outside the panel - it closes (no unsaved changes)
 * 3. Click "Filters" again, select a filter but DON'T click Apply
 * 4. Try clicking outside - panel shakes and shows warning
 * 5. Must click Apply/Cancel/Reset to close
 */
export const WithClickOutsideToClose: Story = {
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Click Outside to Close Demo',
    onRowClick: fn(),
    onSort: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '**Click Outside to Close**: The side panel now closes when clicking outside, providing standard overlay/modal behavior. However, if there are unsaved filter changes, the panel prevents closing and shows a warning with shake animation. This prevents accidental loss of filter selections.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

/**
 * ## New Feature: Unsaved Changes Protection
 * 
 * **What's New:**
 * - 💾 **Pending filter state** - filter selections aren't applied until you click Apply
 * - 🔒 **Prevents accidental loss** of filter selections
 * - 💥 **Shake animation** on action buttons when trying to close with unsaved changes
 * - ⚠️ **Inline warning message** explains what to do
 * 
 * **Behavior:**
 * - Select filters → stored as "pending" (not applied yet)
 * - Try to close → blocked with warning
 * - Must explicitly Apply, Cancel, or Reset
 * 
 * **Try it:**
 * 1. Open Filters panel
 * 2. Select any filter value from dropdown
 * 3. Try clicking outside or pressing ESC
 * 4. Notice the shake animation and warning message
 * 5. Click Apply to save, Cancel to discard, or Reset to clear all
 */
export const WithUnsavedChangesProtection: Story = {
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Unsaved Changes Protection Demo',
    onRowClick: fn(),
    onSort: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '**Unsaved Changes Protection**: Filter selections are now tracked as "pending" until you click Apply. If you try to close the panel with unsaved changes, it prevents closing and shows a shake animation with a warning message: "Please apply, cancel, or reset filters before closing." This ensures users never accidentally lose their filter selections.',
      },
      story: {
        inline: false,
        iframeHeight: 600,
      },
    },
  },
};

/**
 * ## Loading State
 * 
 * Display a loading state while data is being fetched.
 * 
 * **Usage:**
 * ```tsx
 * <AdvancedDataTable
 *   initialColumns={getNestedColumnConfigs()}
 *   loading={true}
 *   loadingClassName="custom-loading"
 *   loadingStyle={{ backgroundColor: '#f5f5f5' }}
 * />
 * ```
 */
export const LoadingState: Story = {
  args: {
    initialColumns: getNestedColumnConfigs(),
    loading: true,
    showToolbar: true,
    toolbarTitle: 'Loading Data',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows a loading state with Typography component. Customize with `loadingClassName` and `loadingStyle` props.',
      },
    },
  },
};

/**
 * ## Error State
 * 
 * Display an error state when data fails to load.
 * 
 * **Usage:**
 * ```tsx
 * <AdvancedDataTable
 *   initialColumns={getNestedColumnConfigs()}
 *   isInvalid={true}
 *   errorMessage="Failed to load data. Please try again."
 *   errorClassName="custom-error"
 *   errorStyle={{ color: 'red' }}
 * />
 * ```
 */
export const ErrorState: Story = {
  args: {
    initialColumns: getNestedColumnConfigs(),
    isInvalid: true,
    errorMessage: 'Failed to load data.',
    showToolbar: true,
    toolbarTitle: 'Error Loading Data',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows an error state with custom error message using Typography component. Customize with `errorClassName` and `errorStyle` props.',
      },
    },
  },
};

/**
 * ## Empty State
 * 
 * Display a custom empty state when no data is available.
 * 
 * **Usage:**
 * ```tsx
 * <AdvancedDataTable
 *   initialColumns={getNestedColumnConfigs()}
 *   data={[]}
 *   emptyTitle="No Claims Found"
 *   emptyDescription="Try adjusting your search criteria or filters"
 *   emptyActionLabel="Clear Filters"
 *   onEmptyAction={() => {}}
 *   emptyStateClassName="custom-empty"
 *   emptyStateStyle={{ padding: '60px' }}
 * />
 * ```
 */
export const EmptyState: Story = {
  args: {
    initialColumns: getNestedColumnConfigs(),
    data: [],
    emptyTitle: 'No Claims Found',
    emptyDescription: 'Try adjusting your search criteria or filters',
    emptyActionLabel: 'Clear Filters',
    onEmptyAction: fn(),
    showToolbar: true,
    toolbarTitle: 'Empty State Demo',
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows a custom empty state with title, description, and action button. All text uses Typography component. Customize with `emptyStateClassName` and `emptyStateStyle` props.',
      },
    },
  },
};

/**
 * ## With Selection
 * 
 * Enable row selection with callback.
 * 
 * **Usage:**
 * ```tsx
 * <AdvancedDataTable
 *   initialColumns={getNestedColumnConfigs()}
 *   selectable={true}
 *   onRowSelect={(selectedIds) => {}}
 * />
 * ```
 */
export const WithSelection: Story = {
  args: {
    initialColumns: getNestedColumnConfigs(),
    selectable: true,
    onRowSelect: fn(),
    showToolbar: true,
    toolbarTitle: 'Selectable Table',
  },
  parameters: {
    docs: {
      description: {
        story: 'Enable row selection with checkboxes. Use `onRowSelect` callback to handle selection changes.',
      },
    },
  },
};

/**
 * ## Custom Pagination
 * 
 * Control pagination settings.
 * 
 * **Usage:**
 * ```tsx
 * <AdvancedDataTable
 *   initialColumns={getNestedColumnConfigs()}
 *   paginated={true}
 *   itemsPerPage={25}
 * />
 * ```
 */
export const CustomPagination: Story = {
  args: {
    initialColumns: getNestedColumnConfigs(),
    paginated: true,
    itemsPerPage: 5,
    showToolbar: true,
    toolbarTitle: 'Custom Pagination (5 per page)',
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize pagination with `itemsPerPage` prop. This example shows 5 items per page.',
      },
    },
  },
};

/**
 * ## Polymorphic Rendering
 * 
 * Render as any HTML element using the `as` prop.
 * 
 * **Usage:**
 * ```tsx
 * const tableRef = useRef<HTMLDivElement>(null);
 * 
 * <AdvancedDataTable
 *   as="section"
 *   ref={tableRef}
 *   className="my-table-section"
 *   initialColumns={getNestedColumnConfigs()}
 * />
 * ```
 */
export const PolymorphicRendering: Story = {
  args: {
    as: 'section',
    initialColumns: getNestedColumnConfigs(),
    className: 'enterprise-table-section',
    showToolbar: true,
    toolbarTitle: 'Rendered as <section>',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the `as` prop to render as any HTML element. This example renders as a `<section>` element. Supports forwardRef for accessing the DOM element.',
      },
    },
  },
};

/**
 * ## Custom Toolbar
 * 
 * Replace the default toolbar with custom content.
 * 
 * **Usage:**
 * ```tsx
 * <AdvancedDataTable
 *   initialColumns={getNestedColumnConfigs()}
 *   toolbar={
 *     <div style={{ padding: '16px', background: '#f5f5f5' }}>
 *       <Typography variant="headingM">Custom Toolbar</Typography>
 *       <Button>Export</Button>
 *       <Button>Import</Button>
 *     </div>
 *   }
 * />
 * ```
 */
export const CustomToolbar: Story = {
  args: {
    initialColumns: getNestedColumnConfigs(),
    toolbar: (
      <div style={{ padding: '16px', background: '#f5f5f5', borderBottom: '1px solid #ddd' }}>
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 600 }}>Custom Toolbar Content</h3>
        <p style={{ margin: '8px 0 0', fontSize: '14px', color: '#666' }}>
          You can pass any React component as the toolbar prop
        </p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Replace the default toolbar with custom content using the `toolbar` prop. Pass any React component.',
      },
    },
  },
};

/**
 * ## Toolbar Customization
 * 
 * Customize the default toolbar with various options.
 * 
 * **Usage:**
 * ```tsx
 * <AdvancedDataTable
 *   initialColumns={getNestedColumnConfigs()}
 *   showToolbar={true}
 *   toolbarTitle="Claims Management"
 *   description="View and manage all claims"
 *   showGlobalSearch={true}
 *   showFilter={true}
 *   showDownload={true}
 *   onDownload={() => {}}
 * />
 * ```
 */
export const ToolbarCustomization: Story = {
  args: {
    initialColumns: getNestedColumnConfigs(),
    showToolbar: true,
    toolbarTitle: 'Claims Management',
    description: 'View and manage all claims in the system',
    showGlobalSearch: true,
    showFilter: true,
    showDownload: true,
    onDownload: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: 'Customize the default toolbar with title, description, and toggle various features like global search, filter, and download buttons.',
      },
    },
  },
};

/**
 * ## Full Customization
 * 
 * Demonstrates all customization options together including column pinning.
 * 
 * **Column Pinning:**
 * - Claim ID and User columns are pinned to the LEFT
 * - Actions column is pinned to the RIGHT
 * - Users can change pinning via column menu (enableUserPinning: true)
 * - Developers can set initial pins in config (enableDevPinning: true)
 * 
 * **Usage:**
 * ```tsx
 * <AdvancedDataTable
 *   as="section"
 *   className="enterprise-table"
 *   initialColumns={[
 *     { id: 'claimId', label: 'Claim ID', pinned: 'left' },
 *     { id: 'userDetails', label: 'User', pinned: 'left' },
 *     { id: 'status', label: 'Status' },
 *     { id: 'actions', label: 'Actions', pinned: 'right' }
 *   ]}
 *   
 *   // Column Pinning Control
 *   enableUserPinning={true}  // Users can pin via menu
 *   enableDevPinning={true}   // Respect dev's initial pins
 *   
 *   // Layout
 *   showToolbar={true}
 *   toolbarTitle="Enterprise Table"
 *   description="Full customization example"
 *   maxHeight="500px"
 *   
 *   // Selection
 *   selectable={true}
 *   onRowSelect={(ids) => {}}
 *   
 *   // Pagination
 *   paginated={true}
 *   itemsPerPage={10}
 *   
 *   // Customization
 *   containerClassName="custom-container"
 *   scrollContainerClassName="custom-scroll"
 *   emptyStateClassName="custom-empty"
 * />
 * ```
 */
export const FullCustomization: Story = {
  args: {
    as: 'section',
    className: 'enterprise-table',
    initialColumns: [
      { id: 'checkbox', label: '', visible: true, locked: true, order: 0 },
      { id: 'claimId', label: 'Claim ID', visible: true, locked: false, pinned: 'left', order: 1, width: 120 },
      { id: 'userDetails', label: 'User', visible: true, locked: false, pinned: 'left', order: 2, width: 200 },
      { 
        id: 'status', 
        label: 'Status', 
        visible: true, 
        locked: false, 
        order: 3,
        width: 150,
        // Custom render with Chip component
        render: (value: any, _row: any) => {
          const statusMap: Record<string, { type: 'success' | 'warning' | 'error' | 'default', label: string }> = {
            'approved': { type: 'success', label: 'Approved' },
            'pending': { type: 'warning', label: 'Pending' },
            'rejected': { type: 'error', label: 'Rejected' },
            'review': { type: 'default', label: 'In Review' },
          };
          const status = statusMap[String(value || '').toLowerCase()] || { type: 'default', label: value };
          return <Chip label={status.label} type={status.type} variant="filled" size="small" />;
        }
      },
      { 
        id: 'priority', 
        label: 'Priority', 
        visible: true, 
        locked: false, 
        order: 4,
        width: 120,
        // Custom render with Chip component
        render: (value: any, _row: any) => {
          const priorityMap: Record<string, { type: 'success' | 'warning' | 'error', label: string }> = {
            'high': { type: 'error', label: 'High' },
            'medium': { type: 'warning', label: 'Medium' },
            'low': { type: 'success', label: 'Low' },
          };
          const priority = priorityMap[String(value || '').toLowerCase()] || { type: 'warning', label: value };
          return <Chip label={priority.label} type={priority.type} variant="outlined" size="small" />;
        }
      },
      { id: 'amount', label: 'Amount', visible: true, locked: false, order: 5, width: 120 },
      { id: 'contact', label: 'Contact', visible: true, locked: false, order: 6, width: 150 },
      { id: 'nrCodes', label: 'NR Codes', visible: true, locked: false, order: 7, width: 120 },
      { id: 'paidAmount', label: 'Paid Amount', visible: true, locked: false, order: 8, width: 130 },
      { id: 'acrLoadDates', label: 'ACR Load Date', visible: true, locked: false, order: 9, width: 140 },
      { id: 'firstName', label: 'First Name', visible: true, locked: false, order: 10, width: 120 },
      { id: 'lastName', label: 'Last Name', visible: true, locked: false, order: 11, width: 120 },
      { 
        id: 'actions', 
        label: 'Actions', 
        visible: true, 
        locked: false,
        pinned: 'right', // Pin to right side
        order: 12,
        width: 180,
        // Custom render with icon action buttons
        // Signature: (value, row, rowIndex) - value is ignored for actions column
        render: (_value: any, row: any) => (
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <Button 
              variant="tertiary" 
              size="small" 
              onClick={() => console.log('View', row.claimId)}
              aria-label="View"
            >
              <Visibility style={{ fontSize: '16px' }} />
            </Button>
            <Button 
              variant="tertiary" 
              size="small" 
              onClick={() => console.log('Edit', row.claimId)}
              aria-label="Edit"
            >
              <Edit style={{ fontSize: '16px' }} />
            </Button>
            <Button 
              variant="tertiary" 
              size="small" 
              onClick={() => console.log('Delete', row.claimId)}
              aria-label="Delete"
            >
              <Delete style={{ fontSize: '16px' }} />
            </Button>
          </div>
        )
      },
    ],
    data: [
      { id: '1', claimId: 'CLM-1001', firstName: 'John', lastName: 'Doe', userDetails: 'John Doe', status: 'approved', priority: 'high', amount: '$15,200', paidAmount: '$15,200', contact: '(555) 100-1001', nrCodes: 'NR-001', acrLoadDates: '2024-01-15', avatar: 'https://i.pravatar.cc/32?img=1' },
      { id: '2', claimId: 'CLM-1002', firstName: 'Jane', lastName: 'Smith', userDetails: 'Jane Smith', status: 'pending', priority: 'medium', amount: '$8,500', paidAmount: '$8,500', contact: '(555) 100-1002', nrCodes: 'NR-002', acrLoadDates: '2024-01-16', avatar: 'https://i.pravatar.cc/32?img=2' },
      { id: '3', claimId: 'CLM-1003', firstName: 'Bob', lastName: 'Wilson', userDetails: 'Bob Wilson', status: 'review', priority: 'low', amount: '$12,300', paidAmount: '$12,300', contact: '(555) 100-1003', nrCodes: 'NR-003', acrLoadDates: '2024-01-17', avatar: 'https://i.pravatar.cc/32?img=3' },
      { id: '4', claimId: 'CLM-1004', firstName: 'Alice', lastName: 'Brown', userDetails: 'Alice Brown', status: 'rejected', priority: 'high', amount: '$22,100', paidAmount: '$22,100', contact: '(555) 100-1004', nrCodes: 'NR-004', acrLoadDates: '2024-01-18', avatar: 'https://i.pravatar.cc/32?img=4' },
      { id: '5', claimId: 'CLM-1005', firstName: 'Charlie', lastName: 'Davis', userDetails: 'Charlie Davis', status: 'approved', priority: 'medium', amount: '$9,800', paidAmount: '$9,800', contact: '(555) 100-1005', nrCodes: 'NR-005', acrLoadDates: '2024-01-19', avatar: 'https://i.pravatar.cc/32?img=5' },
    ] as any,
    
    // Layout
    showToolbar: true,
    toolbarTitle: 'Enterprise Table with Custom Renders & Right Pinning',
    description: 'Scroll horizontally to see the Actions column pinned to the right. Status and Priority use custom Chip renders.',
    showGlobalSearch: true,
    showFilter: true,
    showDownload: true,
    onDownload: fn(),
    maxHeight: '500px',
    
    // Selection
    selectable: true,
    onRowSelect: fn(),
    
    // Pagination
    paginated: true,
    itemsPerPage: 10,
    
    // Events
    onRowClick: fn(),
    onOpen: fn(),
    onClose: fn(),
    
    // Customization
    containerClassName: 'custom-container',
    scrollContainerClassName: 'custom-scroll',
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete example showing all customization options including **right-side column pinning** (Actions column) and **custom cell rendering** (Status and Priority columns with Chips). Try scrolling horizontally to see the Actions column stay fixed on the right.',
      },
    },
  },
};

/**
 * ## Table with Row Grouping
 * 
 * Group table rows into collapsible sections with custom headers.
 * 
 * **Features:**
 * - ✅ Expand/collapse groups
 * - ✅ Sorting within each group
 * - ✅ Group-level selection (checkbox in header)
 * - ✅ Custom content (chips, buttons, etc.)
 * - ✅ Works with all table features
 * 
 * **Usage:**
 * ```tsx
 * const groups = [
 *   {
 *     id: 'active',
 *     groupName: 'Active Claims',
 *     groupDescription: 'Currently processing',
 *     defaultExpanded: true,
 *     rows: [...],
 *     customContent: <Chip label="5 items" />
 *   }
 * ];
 * 
 * <AdvancedDataTable
 *   groups={groups}
 *   initialColumns={columns}
 *   selectable
 *   groupConfig={{
 *     expandPosition: 'left',
 *     onGroupToggle: (id, expanded) => {}
 *   }}
 * />
 * ```
 */
export const WithGrouping: Story = {
  args: {
    groups: [
      {
        id: 'high-priority',
        groupName: 'High Priority Claims',
        groupDescription: 'Urgent claims requiring immediate attention',
        defaultExpanded: true,
        rows: [
          { 
            id: '1001', 
            claimId: 'CLM-1001', 
            firstName: 'Sarah', 
            lastName: 'Johnson', 
            userDetails: 'Senior Analyst',
            nrCodes: 'NR-H001',
            paidAmount: '$15,200',
            acrLoadDates: 'March 10, 2025',
            contact: '(555) 100-1001',
            amount: '$15,200',
            avatar: 'https://i.pravatar.cc/32?img=1',
            city: 'New York',
            state: 'NY',
            status: 'Pending',
            priority: 'High'
          },
          { 
            id: '1002', 
            claimId: 'CLM-1002', 
            firstName: 'Michael', 
            lastName: 'Chen', 
            userDetails: 'Lead Processor',
            nrCodes: 'NR-H002',
            paidAmount: '$22,500',
            acrLoadDates: 'March 12, 2025',
            contact: '(555) 100-1002',
            amount: '$22,500',
            avatar: 'https://i.pravatar.cc/32?img=2',
            city: 'Los Angeles',
            state: 'CA',
            status: 'Approved',
            priority: 'High'
          },
          { 
            id: '1003', 
            claimId: 'CLM-1003', 
            firstName: 'Emily', 
            lastName: 'Rodriguez', 
            userDetails: 'Manager',
            nrCodes: 'NR-H003',
            paidAmount: '$18,900',
            acrLoadDates: 'March 14, 2025',
            contact: '(555) 100-1003',
            amount: '$18,900',
            avatar: 'https://i.pravatar.cc/32?img=3',
            city: 'Chicago',
            state: 'IL',
            status: 'Pending',
            priority: 'High'
          },
        ],
        customContent: (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <Chip label="3 claims" size="small" />
            <Chip label="Urgent" size="small" />
            <Button variant="tertiary" size="small">Process All</Button>
          </div>
        ),
      },
      {
        id: 'medium-priority',
        groupName: 'Medium Priority Claims',
        groupDescription: 'Standard processing timeline',
        defaultExpanded: true,
        rows: [
          { 
            id: '2001', 
            claimId: 'CLM-2001', 
            firstName: 'David', 
            lastName: 'Thompson', 
            userDetails: 'Associate',
            nrCodes: 'NR-M001',
            paidAmount: '$8,400',
            acrLoadDates: 'March 16, 2025',
            contact: '(555) 200-2001',
            amount: '$8,400',
            avatar: 'https://i.pravatar.cc/32?img=4',
            city: 'Houston',
            state: 'TX',
            status: 'Approved',
            priority: 'Medium'
          },
          { 
            id: '2002', 
            claimId: 'CLM-2002', 
            firstName: 'Jessica', 
            lastName: 'Martinez', 
            userDetails: 'Specialist',
            nrCodes: 'NR-M002',
            paidAmount: '$12,100',
            acrLoadDates: 'March 18, 2025',
            contact: '(555) 200-2002',
            amount: '$12,100',
            avatar: 'https://i.pravatar.cc/32?img=5',
            city: 'Phoenix',
            state: 'AZ',
            status: 'Pending',
            priority: 'Medium'
          },
        ],
        customContent: (
          <Chip label="2 claims" size="small" />
        ),
      },
      {
        id: 'completed',
        groupName: 'Completed Claims',
        groupDescription: 'Successfully processed and closed',
        defaultExpanded: false,
        rows: [
          { 
            id: '3001', 
            claimId: 'CLM-3001', 
            firstName: 'Robert', 
            lastName: 'Wilson', 
            userDetails: 'Senior Associate',
            nrCodes: 'NR-C001',
            paidAmount: '$9,750',
            acrLoadDates: 'March 5, 2025',
            contact: '(555) 300-3001',
            amount: '$9,750',
            avatar: 'https://i.pravatar.cc/32?img=6',
            city: 'Philadelphia',
            state: 'PA',
            status: 'Approved',
            priority: 'Low'
          },
          { 
            id: '3002', 
            claimId: 'CLM-3002', 
            firstName: 'Amanda', 
            lastName: 'Taylor', 
            userDetails: 'Analyst',
            nrCodes: 'NR-C002',
            paidAmount: '$6,800',
            acrLoadDates: 'March 7, 2025',
            contact: '(555) 300-3002',
            amount: '$6,800',
            avatar: 'https://i.pravatar.cc/32?img=7',
            city: 'San Antonio',
            state: 'TX',
            status: 'Approved',
            priority: 'Low'
          },
          { 
            id: '3003', 
            claimId: 'CLM-3003', 
            firstName: 'Christopher', 
            lastName: 'Anderson', 
            userDetails: 'Lead',
            nrCodes: 'NR-C003',
            paidAmount: '$14,300',
            acrLoadDates: 'March 8, 2025',
            contact: '(555) 300-3003',
            amount: '$14,300',
            avatar: 'https://i.pravatar.cc/32?img=8',
            city: 'San Diego',
            state: 'CA',
            status: 'Approved',
            priority: 'Low'
          },
          { 
            id: '3004', 
            claimId: 'CLM-3004', 
            firstName: 'Jennifer', 
            lastName: 'White', 
            userDetails: 'Supervisor',
            nrCodes: 'NR-C004',
            paidAmount: '$11,200',
            acrLoadDates: 'March 9, 2025',
            contact: '(555) 300-3004',
            amount: '$11,200',
            avatar: 'https://i.pravatar.cc/32?img=9',
            city: 'Dallas',
            state: 'TX',
            status: 'Approved',
            priority: 'Low'
          },
        ],
        customContent: (
          <Chip label="4 claims" size="small" />
        ),
      },
    ],
    groupConfig: {
      expandPosition: 'left',
      onGroupToggle: fn(),
    },
    initialColumns: [
      { id: 'checkbox', label: 'Select', visible: true, locked: true, order: 0, width: 48 },
      { id: 'claimId', label: 'Claim ID', visible: true, locked: false, order: 1, width: 120 },
      { id: 'firstName', label: 'First Name', visible: true, locked: false, order: 2, width: 150 },
      { id: 'lastName', label: 'Last Name', visible: true, locked: false, order: 3, width: 150 },
      { id: 'userDetails', label: 'Role', visible: true, locked: false, order: 4, width: 180 },
      { id: 'paidAmount', label: 'Amount', visible: true, locked: false, order: 5, width: 120 },
      { id: 'status', label: 'Status', visible: true, locked: false, order: 6, width: 100 },
      { id: 'priority', label: 'Priority', visible: true, locked: false, order: 7, width: 100 },
    ],
    showToolbar: true,
    toolbarTitle: 'Claims Management',
    description: 'Grouped by priority level',
    selectable: true,
    paginated: false,
    showGlobalSearch: true,
    showFilter: true,
    onRowSelect: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: `
Advanced Table with row grouping feature. Groups can be expanded/collapsed, and support:
- **Sorting within groups** - Click column headers to sort rows within each group independently
- **Group-level selection** - Checkbox in group header selects all rows in that group
- **Custom content** - Add chips, buttons, or any components to group headers
- **All table features** - Works seamlessly with selection, filtering, sorting, etc.

**Try it:**
1. Click column headers to sort within groups
2. Click group checkboxes to select all rows in a group
3. Expand/collapse groups with the arrow button
4. Use global search to filter across all groups
        `,
      },
    },
  },
};
