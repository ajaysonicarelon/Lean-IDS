import type { Meta, StoryObj } from '@storybook/react';
import { AdvancedDataTable } from './EnhancedTableTemplate';

const meta: Meta<typeof AdvancedDataTable> = {
  title: 'Components/Table/Advanced Table',
  component: AdvancedDataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Advanced Data Table

The Advanced Data Table includes all the features of the standard table plus:

## New Features

### 1. Sub-Headers (Nested Columns)
- Support for nested column structures
- Parent columns can contain multiple sub-columns
- Example: "Claim ID" header with "First Name" and "Last Name" sub-headers

### 2. Column Search Filters
- Individual search bars for each column in sub-header row
- Toggle filters on/off via side panel
- Real-time filtering as you type

### 3. Side Panel Controls
- Alternative to modal settings
- Vertical panel on the right side of table
- Two action buttons: "Columns" and "Filters"
- Clicking "Columns" shows overlay with column visibility and ordering
- Clicking "Filters" toggles column search bars in sub-header
- Table border radius adjusts when side panel is active (left side only)

### 4. Nested Column Management
- Expandable/collapsible parent columns in settings
- Drag-and-drop reordering for both parent and child columns
- Individual visibility and lock controls for nested columns

## Usage Modes

### With Side Panel (Recommended for complex tables)
\`\`\`tsx
<AdvancedDataTable useSidePanel={true} />
\`\`\`

### With Modal (Traditional approach)
\`\`\`tsx
<AdvancedDataTable useModal={true} />
\`\`\`

### Both Modes
\`\`\`tsx
<AdvancedDataTable useSidePanel={true} useModal={true} />
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
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with sub-header support showing nested columns. The "Claim ID" column has two sub-columns: "First Name" and "Last Name". This demonstrates the hierarchical column structure.',
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
