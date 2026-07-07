# Table Component Enhancements

## Overview

The table component has been enhanced with several new features based on Figma designs:

1. **Sub-header support** for nested columns
2. **Column search filters** in sub-header row
3. **Side panel** for column/filter controls
4. **Conditional border radius** when using side panel

## New Components

### 1. TableSubHeader

A component for rendering search inputs in a sub-header row beneath the main table headers.

**Location:** `src/TableSubHeader/`

**Props:**
- `searchValue?: string` - Current search value
- `searchPlaceholder?: string` - Placeholder text
- `onSearchChange?: (value: string) => void` - Search change handler
- `locked?: boolean` - Whether column is locked/frozen
- `leftOffset?: number` - Left offset for sticky positioning
- `width?: string | number` - Column width
- `className?: string` - Custom class name

**Usage:**
```tsx
<TableSubHeader
  searchValue={searchValue}
  searchPlaceholder="Search Name"
  onSearchChange={setSearchValue}
  locked={false}
/>
```

### 2. TableSidePanel

A vertical panel on the right side of the table for column and filter controls.

**Location:** `src/TableSidePanel/`

**Props:**
- `columns: ColumnConfig[]` - Column configurations
- `onColumnsChange: (columns: ColumnConfig[]) => void` - Column change handler
- `onFilterToggle?: () => void` - Filter toggle handler
- `showFilters?: boolean` - Whether filters are active
- `lockWarning?: boolean` - Show lock warning message
- `className?: string` - Custom class name

**Features:**
- Two action buttons: "Columns" and "Filters"
- Clicking "Columns" opens overlay with column settings
- Clicking "Filters" toggles column search bars
- Supports nested columns with expand/collapse
- Drag-and-drop reordering
- Individual visibility and lock controls

**Usage:**
```tsx
<TableSidePanel
  columns={columnConfigs}
  onColumnsChange={setColumnConfigs}
  onFilterToggle={handleFilterToggle}
  showFilters={showFilters}
  lockWarning={lockWarning}
/>
```

## Enhanced Features

### Sub-Headers (Nested Columns)

Columns can now have sub-columns, creating a two-level header structure.

**Type Updates:**
```tsx
interface TableColumn {
  // ... existing props
  subColumns?: TableColumn[];  // NEW
}

interface ColumnConfig {
  // ... existing props
  subColumns?: ColumnConfig[];  // NEW
  parentId?: string;            // NEW
}
```

**Example:**
```tsx
const columns = [
  {
    id: 'claimId',
    label: 'Claim ID',
    subColumns: [
      { id: 'firstName', label: 'First Name' },
      { id: 'lastName', label: 'Last Name' }
    ]
  }
];
```

### Column Search Filters

Individual search bars for each column in a sub-header row.

**Features:**
- Toggle on/off via side panel "Filters" button
- Real-time filtering as you type
- Respects locked column positioning
- Integrated with existing table filtering logic

### Side Panel Integration

**Border Radius Behavior:**
- When `useSidePanel={true}`: Table has `border-radius: 8px 0 0 8px` (left side only)
- When `useSidePanel={false}`: Table has `border-radius: 8px` (all corners)
- Side panel has `border-radius: 0 8px 8px 0` (right side only)

**Layout:**
```tsx
<TableWrapper $hasSidePanel={useSidePanel}>
  <ScrollContainer $hasSidePanel={useSidePanel}>
    {/* Table content */}
  </ScrollContainer>
  
  {useSidePanel && (
    <TableSidePanel {...props} />
  )}
</TableWrapper>
```

## Usage Examples

### Basic Table with Side Panel

```tsx
import { EnhancedDataTable } from '@lean-ids/components';

function MyTable() {
  return <EnhancedDataTable useSidePanel={true} />;
}
```

### Table with Modal Settings

```tsx
import { EnhancedDataTable } from '@lean-ids/components';

function MyTable() {
  return (
    <EnhancedDataTable 
      useModal={true}
      showToolbar={true}
      toolbarTitle="Claims Data"
    />
  );
}
```

**Important:** The settings modal is triggered by the settings icon button in the TableToolbar, not a floating action button (FAB). This provides better integration with the table's existing UI.

### Table with Both Controls

```tsx
import { EnhancedDataTable } from '@lean-ids/components';

function MyTable() {
  return (
    <EnhancedDataTable 
      useSidePanel={true} 
      useModal={true} 
    />
  );
}
```

## Design References

Based on Figma designs from: `figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS`

1. **Sub-header structure**: `node-id=5450-11756`
   - Shows parent header with two sub-headers beneath

2. **Search filters**: `node-id=5450-11755`
   - Shows search input in sub-header with filter icon

3. **Side panel overlay**: `node-id=4041-15211`
   - Shows column list with checkboxes, drag handles, and lock icons
   - Supports nested columns with expand/collapse

4. **Table with side panel**: `node-id=4038-14309`
   - Shows complete table layout with side panel attached
   - Demonstrates border radius behavior

## Migration Guide

### From Standard Table to Enhanced Table

1. **Update imports:**
```tsx
// Before
import { Table } from '@lean-ids/components';

// After
import { EnhancedDataTable } from '@lean-ids/components';
```

2. **Add nested columns (optional):**
```tsx
const columns = [
  {
    id: 'parent',
    label: 'Parent Column',
    subColumns: [
      { id: 'child1', label: 'Child 1' },
      { id: 'child2', label: 'Child 2' }
    ]
  }
];
```

3. **Enable side panel (optional):**
```tsx
<EnhancedDataTable useSidePanel={true} />
```

4. **Enable column filters (optional):**
```tsx
// Controlled via side panel "Filters" button
// Or programmatically:
const [showFilters, setShowFilters] = useState(false);
```

## Component Files

### New Files Created
- `src/TableSubHeader/TableSubHeader.tsx`
- `src/TableSubHeader/TableSubHeader.types.ts`
- `src/TableSubHeader/TableSubHeader.styles.ts`
- `src/TableSubHeader/index.ts`
- `src/TableSidePanel/TableSidePanel.tsx`
- `src/TableSidePanel/TableSidePanel.types.ts`
- `src/TableSidePanel/TableSidePanel.styles.ts`
- `src/TableSidePanel/index.ts`
- `src/Table/EnhancedTableTemplate.tsx`
- `src/Table/EnhancedTable.stories.tsx`

### Modified Files
- `src/Table/Table.types.ts` - Added `subColumns`, `showSidePanel`, `showColumnFilters`
- `src/TableSettings/TableSettings.types.ts` - Added `subColumns`, `parentId`
- `src/index.ts` - Added exports for new components

## Testing

View the enhanced table in Storybook:

```bash
npm run storybook
```

Navigate to: **Components > Table > Enhanced Table**

Stories available:
- With Side Panel
- With Modal
- With Both Controls
- Default Table

## Notes

- The `handleColumnLock` function in `EnhancedTableTemplate.tsx` is currently unused but kept for future integration
- TypeScript lint warnings about `rootDir` are expected and don't affect functionality
- All styling uses theme tokens (no hardcoded values)
- Components follow Lean IDS design system guidelines
