import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
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
Advanced table with nested columns, side panel, and column resizing. **Component Maturity: 100% Compliant**

**Features:** Nested headers • Column resizing • Side panel • Drag-and-drop • Sorting • Filtering • Pagination • Row selection

## Quick Start

\`\`\`tsx
import { AdvancedDataTable, getNestedColumnConfigs } from '@ajaysoni7832/lean-ids-components';

<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="My Table"
/>
\`\`\`

See stories below for detailed examples.
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
