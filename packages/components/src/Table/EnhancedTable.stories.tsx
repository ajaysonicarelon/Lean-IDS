import type { Meta, StoryObj } from '@storybook/react';
import { AdvancedDataTable, getNestedColumnConfigs } from './EnhancedTableTemplate';

const meta: Meta<typeof AdvancedDataTable> = {
  title: 'Components/Table/Advanced Table',
  component: AdvancedDataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Advanced Data Table

Advanced table with nested columns, column filters, side panel controls, and drag-and-drop.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel
  showToolbar
  toolbarTitle="Claims Data"
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

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| useSidePanel | boolean | false | Enable side panel for column/filter controls |
| useModal | boolean | false | Enable modal for column settings |
| showToolbar | boolean | true | Show toolbar with title and actions |
| toolbarTitle | string | 'Data Table' | Title displayed in toolbar |
| initialColumns | ColumnConfig[] | - | Custom column configuration (for nested columns) |

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

## Design Reference
Based on Figma designs:
- Sub-header structure: node-id=5450-11756
- Search filters: node-id=5450-11755
- Side panel overlay: node-id=4041-15211
- Table with side panel: node-id=4038-14309
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AdvancedDataTable>;

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
        story: 'Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel.',
      },
    },
  },
};

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
        story: 'Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings.',
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
        story: 'Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls.',
      },
    },
  },
};

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
        story: 'Table with sub-header support showing nested columns. The "User Details" parent column contains "First Name" and "Last Name" sub-columns, and the "Address" parent column contains "City" and "State" sub-columns. This demonstrates the hierarchical column structure with parent-child relationships.',
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
 * ## New Feature: Filter Count Badge & Smart Search Headers
 * 
 * **What's New:**
 * - 🔢 **Filter count badge** appears on Filter button showing active filter count
 * - 🔍 **Smart search headers** - only appear when filters are actually applied
 * - 🎯 Search headers persist even when side panel is closed (if filters are active)
 * - ✨ Better UX - no more confusion about when search headers appear
 * 
 * **Try it:**
 * 1. Click "Filters" button in side panel
 * 2. Select a filter value from any dropdown (e.g., Status = "Approved")
 * 3. Click "Apply" - notice search headers appear automatically
 * 4. See the purple badge on Filter button showing "1"
 * 5. Click "Filters" again to close panel - search headers remain visible
 * 6. Remove filter chip to clear - search headers disappear
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
    },
  },
};
