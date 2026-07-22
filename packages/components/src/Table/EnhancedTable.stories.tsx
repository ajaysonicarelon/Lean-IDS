import type { Meta, StoryObj } from '@storybook/react';
import { AdvancedDataTable, getNestedColumnConfigs } from './EnhancedTableTemplate';

const meta: Meta<typeof AdvancedDataTable> = {
  title: 'Components/Table/Advanced Table',
  component: AdvancedDataTable,
  parameters: {
    layout: 'padded',
    docs: {
      story: {
        inline: false,
        iframeHeight: 600,
      },
      description: {
        component: `
## Details:

Advanced table with nested columns, column filters, side panel controls, and drag-and-drop.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Complete Usage Example

\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

// 1. Define your data
const data = [
  { 
    id: 1, 
    claimId: 'CLM-001', 
    firstName: 'John', 
    lastName: 'Doe',
    status: 'Approved', 
    amount: 1500,
    date: '2024-01-15'
  },
  { 
    id: 2, 
    claimId: 'CLM-002', 
    firstName: 'Jane', 
    lastName: 'Smith',
    status: 'Pending', 
    amount: 2300,
    date: '2024-01-16'
  },
];

// 2. Define columns with nested structure
const columns = [
  {
    id: 'claimId',
    label: 'Claim ID',
    accessor: 'claimId',
    sortable: true,
    resizable: true,
    width: 150,
  },
  {
    id: 'patient',
    label: 'Patient Name',
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
    id: 'status',
    label: 'Status',
    accessor: 'status',
    sortable: true,
    resizable: true,
  },
  {
    id: 'amount',
    label: 'Amount',
    accessor: 'amount',
    sortable: true,
    resizable: true,
    renderCell: (value) => \`$\${value.toLocaleString()}\`,
  },
];

// 3. Define filters (optional)
const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select' as const,
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
    type: 'dateRange' as const,
  },
];

// 4. Use the component
<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
  columnFilters={filters}
  onFiltersChange={(filters) => console.log('Filters changed:', filters)}
/>
\`\`\`

## Customization Guide

### How to Customize the Advanced Table

**1. Custom Toolbar**

Use the toolbar prop to replace the default toolbar with your own:

\`\`\`tsx
import { AdvancedDataTable, TableToolbar, TableToolbarSection, TableToolbarTitle, TableToolbarActions } from '@ajaysoni7832/lean-ids-components';
import { Button } from '@ajaysoni7832/lean-ids-components';
import { Download, Upload } from '@mui/icons-material';

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  toolbar={
    <TableToolbar>
      <TableToolbarSection>
        <TableToolbarTitle>My Custom Title</TableToolbarTitle>
      </TableToolbarSection>
      <TableToolbarActions>
        <Button variant="outlined" size="small" startIcon={<Upload />}>
          Import
        </Button>
        <Button variant="contained" size="small" startIcon={<Download />}>
          Export
        </Button>
      </TableToolbarActions>
    </TableToolbar>
  }
/>
\`\`\`

**2. Custom Filters in Side Panel**

Add column filters using the columnFilters prop (Note: This feature is in the base Table component):

\`\`\`tsx
const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
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
  columnFilters={filters}
  onFiltersChange={(filters) => console.log('Applied filters:', filters)}
/>
\`\`\`

**3. Custom Tabs in Side Panel**

Add custom tabs with your own content using customSidePanelTabs:

\`\`\`tsx
import { Settings, Info } from '@mui/icons-material';

const customTabs = [
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings />,
    content: (
      <div style={{ padding: '16px' }}>
        <h3>Custom Settings</h3>
        <p>Add your custom settings UI here</p>
      </div>
    ),
  },
  {
    id: 'info',
    label: 'Info',
    icon: <Info />,
    onClick: () => {
      alert('Info clicked!');
    },
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  customSidePanelTabs={customTabs}
/>
\`\`\`

**4. Always Show Search Headers**

Force column search headers to be visible by default:

\`\`\`tsx
<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showColumnSearchByDefault={true}
/>
\`\`\`

**5. Handle Row Clicks**

Add custom row click behavior:

\`\`\`tsx
<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  onRowClick={(row, rowIndex, event) => {
    console.log('Clicked row:', row);
    console.log('Row index:', rowIndex);
  }}
/>
\`\`\`

## Features

The Advanced Data Table includes all standard table features plus:

## Core Features

### 1. Sub-Headers (Nested Columns)
- Support for nested column structures
- Parent columns can contain multiple sub-columns
- Example: "Claim ID" header with "First Name" and "Last Name" sub-headers

### 2. Column Search Filters
- Individual search bars for each column in sub-header row
- NEW: Smart search headers - only appear when filters are applied
- Real-time filtering as you type

### 3. Side Panel Controls
- Alternative to modal settings
- Vertical panel on the right side of table
- Two action buttons: "Columns" and "Filters"
- NEW: Filter count badge shows active filter count
- NEW: Custom tabs support for extensibility
- Clicking "Columns" shows overlay with column visibility and ordering
- Clicking "Filters" toggles column search bars in sub-header
- NEW: Click outside to close panel
- Table border radius adjusts when side panel is active (left side only)

### 4. Nested Column Management
- Expandable/collapsible parent columns in settings
- Drag-and-drop reordering for both parent and child columns
- Individual visibility and lock controls for nested columns

## ✨ Latest Enhancements (v2.0)

### 5. Filter Count Badge
- Purple badge on Filter button showing active filter count
- Instant visual feedback without opening panel

### 6. Smart Search Headers
- Search headers only appear when filters are applied
- No more confusion about when search is available
- Developer control via showColumnSearchByDefault prop

### 7. Custom Tabs
- Add your own tabs to the side panel
- Two modes: action-only (onClick) or content panel
- Perfect for export, settings, analytics, etc.

### 8. Click Outside to Close
- Standard overlay behavior - click outside to dismiss
- Protected closing prevents accidental loss of unsaved changes

### 9. Unsaved Changes Protection
- Filter selections tracked as "pending" until Apply is clicked
- Shake animation + warning when trying to close with unsaved changes
- Prevents accidental loss of filter selections

## Props Reference

### Core Props

**data** (optional): Array of data objects to display in the table. If not provided, demo data will be used.

**columns** (optional): Column configuration array with support for nested columns via subColumns property. If not provided, demo columns will be used.

**useSidePanel**: Enable side panel for column/filter controls (default: false, recommended for complex tables)

**useModal**: Enable modal for column settings (default: false, traditional approach)

**showToolbar**: Show toolbar with title and actions (default: true)

**toolbarTitle**: Title displayed in toolbar (default: 'Data Table')

**toolbar**: Custom toolbar content - overrides default toolbar when provided

**initialColumns**: Custom column configuration for nested columns (use with getNestedColumnConfigs helper)

### Customization Props

**customSidePanelTabs**: Array of custom tab configurations to add to side panel - add your own tabs with custom content or actions

**showColumnSearchByDefault**: Force column search headers to always be visible (default: false)

**onRowClick**: Callback when a row is clicked: (row, rowIndex, event) => void

**columnFilters**: Array of filter configurations for the side panel (Note: This is a base Table prop)

**onFiltersChange**: Callback when filters are applied: (filters) => void

### Column Configuration Props

Each column object supports:

**id** (required): Unique identifier for the column

**label** (required): Display label for column header

**accessor**: Property key (string) or function to extract cell value

**sortable**: Enable sorting for this column (default: false)

**resizable**: Enable column resizing (default: false)

**width**: Initial column width in pixels

**minWidth**: Minimum column width (default: 50)

**maxWidth**: Maximum column width

**visible**: Initial visibility state (default: true)

**locked**: Lock column to left side with sticky positioning (default: false)

**subColumns**: Array of nested columns for sub-header structure

**renderCell**: Custom cell renderer function: (value, row, rowIndex) => ReactNode

### Filter Props

**columnFilters**: Array of filter configurations for the side panel

**onFiltersChange**: Callback when filters are applied: (filters) => void

**showColumnSearchByDefault**: Show column search headers by default without clicking Filter button (default: false)

### Custom Tabs

**customTabs**: Array of custom tab configurations to add additional functionality to side panel

### Filter Configuration Interface

\`\`\`tsx
interface ColumnFilter {
  id: string;                    // Must match column id
  label: string;                 // Display label
  type: 'select' | 'dateRange';  // Filter type
  options?: Array<{              // For select type
    label: string;
    value: string;
  }>;
}
\`\`\`

### Custom Tab Configuration Interface

\`\`\`tsx
interface CustomTabConfig {
  id: string;                    // Unique tab identifier
  label: string;                 // Tab button label
  icon?: React.ReactNode;        // Optional icon
  onClick?: () => void;          // Action-only mode (no panel)
  content?: React.ReactNode;     // Panel content mode
}
\`\`\`

## Usage Modes

### With Side Panel (Recommended for complex tables)
\`\`\`tsx
<AdvancedDataTable 
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>
\`\`\`

### With Modal (Traditional approach)
\`\`\`tsx
<AdvancedDataTable 
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>
\`\`\`

### With Sub-Headers (Nested Columns)
\`\`\`tsx
import { AdvancedDataTable, getNestedColumnConfigs } from '@ajaysoni7832/lean-ids-components';

<AdvancedDataTable 
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data with Sub-Headers"
  initialColumns={getNestedColumnConfigs()}
/>
\`\`\`

### Both Modes
\`\`\`tsx
<AdvancedDataTable 
  useSidePanel={true} 
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>
\`\`\`

## Main Reference
Complete basic example:
- Global Search
- Pagination
- Side Panel
        `,
      },
    },
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

export const DefaultTable: Story = {
  args: {
    useSidePanel: false,
    useModal: false,
    showToolbar: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic table without toolbar or settings controls. Useful when column configuration is managed externally.',
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
 *   onFiltersChange={(filters) => console.log('Filters:', filters)}
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
    toolbarTitle: 'Table with Filter Count Badge',
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
  onFiltersChange={(filters) => console.log('Filters:', filters)}
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
    toolbarTitle: 'Always Show Search Headers',
    showColumnSearchByDefault: true,
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
    toolbarTitle: 'Table with Custom Tabs',
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
