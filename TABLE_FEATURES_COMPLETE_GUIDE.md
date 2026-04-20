# Complete Table Features Implementation Guide

**Date**: April 20, 2026  
**Status**: ✅ Production Ready

---

## 🎉 Overview

Comprehensive table system with advanced features including:
- ✅ Selected row state with visual highlighting
- ✅ Table Settings modal for column management
- ✅ Sticky headers for vertical scrolling
- ✅ Material Design Icons integration
- ✅ Proper header positioning (left/middle/right)
- ✅ All header variants (locked, resizable, search, sortable)

---

## 📋 Table of Contents

1. [Selected Row State](#selected-row-state)
2. [Table Settings Modal](#table-settings-modal)
3. [Sticky Headers](#sticky-headers)
4. [Header Positioning](#header-positioning)
5. [Complete Example Usage](#complete-example-usage)
6. [Sub-Headers (Future Feature)](#sub-headers)

---

## 🎨 Selected Row State

### **Visual Design**
When a row is selected (checkbox checked):
- **Background Color**: `primary-50` (#f8f7fb)
- **Left Border**: 2px solid `primary-500` (#6366f1) on the **first cell only**
- **Smooth Transition**: 0.2s ease for background color

### **Implementation**

#### **TableCell Props**
```typescript
interface TableCellProps {
  // ... other props
  selected?: boolean;  // NEW: Indicates if row is selected
}
```

#### **Styled Component**
```typescript
export const StyledTableCell = styled.td<StyledTableCellProps>`
  background-color: ${({ theme, $selected }) => 
    $selected ? theme.colors.palette.primary[50] : theme.colors.palette.neutral[50]};
  border-left: ${({ theme, $selected, $isFirst }) => 
    $selected && $isFirst ? `2px solid ${theme.colors.palette.primary[500]}` : 'none'};
  padding: ${({ theme, $selected, $isFirst }) => 
    $selected && $isFirst 
      ? `${theme.spacing[3]} ${theme.spacing[7]} ${theme.spacing[3]} calc(${theme.spacing[7]} - 2px)` 
      : `${theme.spacing[3]} ${theme.spacing[7]}`};
  transition: background-color 0.2s ease;
`;
```

#### **Usage Example**
```tsx
const [selectedRows, setSelectedRows] = useState<number[]>([]);

{filteredData.map((row, index) => {
  const isSelected = selectedRows.includes(index);
  return (
    <tr key={row.id}>
      <TableCell 
        showCheckbox 
        checked={isSelected}
        selected={isSelected}  // Pass selected state
      />
      <TableCell showText text={row.name} selected={isSelected} />
      <TableCell showText text={row.email} selected={isSelected} />
    </tr>
  );
})}
```

---

## ⚙️ Table Settings Modal

### **Features**
1. **Toggle Column Visibility** - Show/hide columns with checkboxes
2. **Lock/Unlock Columns** - Freeze columns to left side
3. **Reorder Columns** - Drag and drop to change column order
4. **Apply/Cancel** - Save changes or discard

### **Component Structure**

#### **Types**
```typescript
export interface ColumnConfig {
  id: string;
  label: string;
  visible: boolean;
  locked: boolean;
  order: number;
}

export interface TableSettingsProps {
  isOpen: boolean;
  onClose: () => void;
  columns: ColumnConfig[];
  onColumnsChange: (columns: ColumnConfig[]) => void;
}
```

#### **Usage Example**
```tsx
const [settingsOpen, setSettingsOpen] = useState(false);
const [columnConfigs, setColumnConfigs] = useState<ColumnConfig[]>([
  { id: 'checkbox', label: 'Select', visible: true, locked: false, order: 0 },
  { id: 'id', label: 'ID', visible: true, locked: true, order: 1 },
  { id: 'user', label: 'User', visible: true, locked: false, order: 2 },
  { id: 'email', label: 'Email', visible: true, locked: false, order: 3 },
  // ... more columns
]);

// Settings button
<ActionButton onClick={() => setSettingsOpen(true)}>
  <Icon name="Settings" size="medium" />
</ActionButton>

// Modal
<TableSettings
  isOpen={settingsOpen}
  onClose={() => setSettingsOpen(false)}
  columns={columnConfigs}
  onColumnsChange={(newConfigs) => {
    setColumnConfigs(newConfigs);
    // Update locked states
    const idConfig = newConfigs.find(c => c.id === 'id');
    if (idConfig) setIdLocked(idConfig.locked);
  }}
/>
```

### **Modal Features**

#### **1. Drag and Drop Reordering**
- Drag handle icon on the left
- Reorder columns by dragging
- Visual feedback during drag

#### **2. Visibility Toggle**
- Checkbox for each column
- Show/hide columns dynamically
- Cannot hide all columns

#### **3. Lock/Unlock**
- Lock icon button
- Locked columns freeze to left
- Visual indicator (Lock/LockOpen icon)

#### **4. Modal Controls**
- **Cancel**: Discard changes, close modal
- **Apply Changes**: Save configuration, close modal

---

## 📌 Sticky Headers

### **Implementation**

#### **Styled Component**
```typescript
const StickyThead = styled.thead`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #f8f7fb;
`;
```

#### **Scroll Container**
```typescript
const ScrollContainer = styled.div`
  overflow-x: auto;
  max-height: 600px;  // Enable vertical scrolling
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  position: relative;
`;
```

#### **Usage**
```tsx
<ScrollContainer>
  <StyledTable>
    <StickyThead>  {/* Use StickyThead instead of StyledThead */}
      <tr>
        <TableHeader label="Name" />
        <TableHeader label="Email" />
      </tr>
    </StickyThead>
    <tbody>
      {/* Many rows... */}
    </tbody>
  </StyledTable>
</ScrollContainer>
```

### **Behavior**
- Headers stay fixed at top when scrolling vertically
- Background color prevents content showing through
- Z-index ensures headers stay above table content
- Works with horizontal scrolling

---

## 🎯 Header Positioning

### **Critical Rule**
**Only ONE `left` and ONE `right` in a table!**

### **Side Values**
- **`left`**: Leftmost column only (usually checkbox)
- **`middle`**: All columns between left and right
- **`right`**: Rightmost column only (usually actions)

### **Border Radius Application**
- **Left**: Top-left corner rounded
- **Middle**: No border radius
- **Right**: Top-right corner rounded

### **Example Structure**
```tsx
<thead>
  <tr>
    {/* ONLY ONE LEFT */}
    <TableHeader label="" side="left" showCheckbox />
    
    {/* ALL MIDDLE COLUMNS */}
    <TableHeader label="ID" side="middle" />
    <TableHeader label="User" side="middle" />
    <TableHeader label="Email" side="middle" />
    <TableHeader label="Amount" side="middle" />
    <TableHeader label="Date" side="middle" />
    <TableHeader label="Department" side="middle" />
    <TableHeader label="Status" side="middle" />
    
    {/* ONLY ONE RIGHT */}
    <TableHeader label="Actions" side="right" />
  </tr>
</thead>
```

### **❌ Wrong**
```tsx
<TableHeader label="" side="left" showCheckbox />
<TableHeader label="ID" side="left" />  {/* WRONG! Only one left allowed */}
```

### **✅ Correct**
```tsx
<TableHeader label="" side="left" showCheckbox />
<TableHeader label="ID" side="middle" />  {/* Correct! */}
```

---

## 🚀 Complete Example Usage

### **Full Implementation**
```tsx
import { useState } from 'react';
import { 
  TableHeader, 
  TableCell, 
  Pagination, 
  TableSettings, 
  Icon,
  ColumnConfig 
} from '@lean-ids/components';

function CompleteTable() {
  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [columnConfigs, setColumnConfigs] = useState<ColumnConfig[]>([
    { id: 'checkbox', label: 'Select', visible: true, locked: false, order: 0 },
    { id: 'id', label: 'ID', visible: true, locked: true, order: 1 },
    { id: 'user', label: 'User', visible: true, locked: false, order: 2 },
    { id: 'email', label: 'Email', visible: true, locked: false, order: 3 },
    { id: 'actions', label: 'Actions', visible: true, locked: false, order: 4 },
  ]);

  const sampleData = [
    { id: '1001', name: 'Alice', email: 'alice@example.com' },
    { id: '1002', name: 'Bob', email: 'bob@example.com' },
    // ... more data
  ];

  return (
    <div>
      {/* Table Heading */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Tabular View</h2>
        <button onClick={() => setSettingsOpen(true)}>
          <Icon name="Settings" size="medium" />
        </button>
      </div>

      {/* Table with Sticky Headers */}
      <div style={{ maxHeight: '600px', overflowY: 'auto' }}>
        <table>
          <thead style={{ position: 'sticky', top: 0, zIndex: 10 }}>
            <tr>
              <TableHeader label="" side="left" showCheckbox />
              <TableHeader label="ID" side="middle" locked />
              <TableHeader label="User" side="middle" sortable />
              <TableHeader label="Email" side="middle" />
              <TableHeader label="Actions" side="right" />
            </tr>
          </thead>
          <tbody>
            {sampleData.map((row, index) => {
              const isSelected = selectedRows.includes(index);
              return (
                <tr key={row.id}>
                  <TableCell 
                    showCheckbox 
                    checked={isSelected}
                    selected={isSelected}
                  />
                  <TableCell showText text={row.id} selected={isSelected} />
                  <TableCell showText text={row.name} selected={isSelected} />
                  <TableCell showText text={row.email} selected={isSelected} />
                  <TableCell showEditAction showDeleteAction selected={isSelected} />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={10}
        onPageChange={setCurrentPage}
      />

      {/* Settings Modal */}
      <TableSettings
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        columns={columnConfigs}
        onColumnsChange={setColumnConfigs}
      />
    </div>
  );
}
```

---

## 🔮 Sub-Headers (Future Feature)

### **Concept**
Based on Figma designs, sub-headers allow:
- **Primary Header**: Main column grouping
- **Secondary Headers**: Sub-columns under primary
- **Hierarchical Structure**: Tree-like column organization

### **Example Structure**
```
┌─────────────────────────────────────┐
│ Claim ID                            │  ← Primary Header
├──────────────┬──────────────────────┤
│ First Name   │ Last Name            │  ← Secondary Headers
├──────────────┼──────────────────────┤
│ Alice        │ Johnson              │
│ Bob          │ Smith                │
└──────────────┴──────────────────────┘
```

### **Implementation Plan**
1. Add `subHeaders` prop to TableHeader
2. Support nested header rows
3. Colspan/rowspan for grouping
4. Expand/collapse functionality

**Status**: 🚧 Planned for future release

---

## 📊 Feature Comparison

| Feature | Status | Description |
|---------|--------|-------------|
| **Selected Row State** | ✅ Complete | Primary-50 bg + primary-500 left border |
| **Table Settings Modal** | ✅ Complete | Show/hide, lock, reorder columns |
| **Sticky Headers** | ✅ Complete | Headers fixed during vertical scroll |
| **Header Positioning** | ✅ Complete | Left/middle/right with proper borders |
| **Material Icons** | ✅ Complete | 2,100+ icons from @mui/icons-material |
| **Locked Columns** | ✅ Complete | Freeze columns to left side |
| **Resizable Columns** | ✅ Complete | Drag to adjust column width |
| **Search Headers** | ✅ Complete | Filter data by column |
| **Sortable Headers** | ✅ Complete | Asc/desc/none sorting |
| **Pagination** | ✅ Complete | 3 variants (default, filled, outlined) |
| **Sub-Headers** | 🚧 Planned | Hierarchical column grouping |

---

## 🎯 Best Practices

### **1. Header Positioning**
```tsx
// ✅ Correct
<TableHeader side="left" />   // First column
<TableHeader side="middle" />  // All middle columns
<TableHeader side="right" />   // Last column

// ❌ Wrong
<TableHeader side="left" />
<TableHeader side="left" />    // Only one left allowed!
```

### **2. Selected State**
```tsx
// ✅ Pass selected to ALL cells in the row
<TableCell showCheckbox checked={isSelected} selected={isSelected} />
<TableCell showText text={data} selected={isSelected} />
<TableCell showBadge label="Active" selected={isSelected} />

// ❌ Don't forget selected prop
<TableCell showText text={data} />  // Won't highlight!
```

### **3. Sticky Headers**
```tsx
// ✅ Use StickyThead with ScrollContainer
<ScrollContainer>
  <table>
    <StickyThead>...</StickyThead>
  </table>
</ScrollContainer>

// ❌ Don't use regular thead
<table>
  <thead>...</thead>  // Won't stick!
</table>
```

### **4. Table Settings**
```tsx
// ✅ Sync column configs with table state
onColumnsChange={(newConfigs) => {
  setColumnConfigs(newConfigs);
  // Update related states
  const idConfig = newConfigs.find(c => c.id === 'id');
  if (idConfig) setIdLocked(idConfig.locked);
}}

// ❌ Don't ignore config changes
onColumnsChange={setColumnConfigs}  // Locked state won't update!
```

---

## 📚 Related Documentation

- **Material Icons Guide**: `@/ICON_SYSTEM_GUIDE.md`
- **Pagination Guide**: `@/PAGINATION_AND_TABLE_SUMMARY.md`
- **Table Header Features**: `@/TABLEHEADER_FEATURES_SUMMARY.md`

---

## ✅ Summary

### **What's Been Implemented**

1. ✅ **Selected Row State**
   - Primary-50 background color
   - Primary-500 2px left border on first cell
   - Smooth transitions

2. ✅ **Table Settings Modal**
   - Column visibility toggle
   - Lock/unlock columns
   - Drag-and-drop reordering
   - Apply/Cancel actions

3. ✅ **Sticky Headers**
   - Fixed position during vertical scroll
   - Z-index layering
   - Background color overlay

4. ✅ **Header Positioning**
   - Only one left (leftmost)
   - Only one right (rightmost)
   - All others middle
   - Proper border radius

5. ✅ **Material Icons**
   - Settings icon for modal
   - Drag indicator for reordering
   - Lock/unlock icons
   - All table action icons

### **Files Created/Modified**

**New Components:**
- `/TableSettings/TableSettings.tsx`
- `/TableSettings/TableSettings.styles.ts`
- `/TableSettings/TableSettings.types.ts`
- `/TableSettings/index.ts`

**Modified Components:**
- `/TableCell/TableCell.tsx` - Added selected prop
- `/TableCell/TableCell.styles.ts` - Selected state styling
- `/TableCell/TableCell.types.ts` - Selected prop type
- `/Table/Table.stories.tsx` - Complete Example with all features
- `/index.ts` - TableSettings exports

**Documentation:**
- `/TABLE_FEATURES_COMPLETE_GUIDE.md` - This file

---

**🎉 All requested features have been successfully implemented and are ready for use in Storybook!**
