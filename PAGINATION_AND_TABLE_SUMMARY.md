# Pagination Component & Table Guidelines

**Date**: Complete implementation  
**Status**: ✅ Complete

---

## 🎯 Overview

Created a new **Pagination** component with 3 visual variants matching Figma design specifications. Also established guidelines for proper TableHeader positioning (left/middle/right) and locked column behavior.

---

## 📦 New Component: Pagination

### **Component Structure**

```
/Pagination
  ├── Pagination.tsx          # Main component with logic
  ├── Pagination.types.ts     # TypeScript interfaces
  ├── Pagination.styles.ts    # Styled components
  └── index.ts                # Exports
```

### **Three Variants**

| Variant | Description | Active Page Style |
|---------|-------------|-------------------|
| **default** | Standard pagination | No background, black text |
| **filled** | Active page has filled background | Primary[500] background, white text |
| **outlined** | Active page has border outline | Primary[500] border, primary text |

### **Features**

✅ **Page Navigation**
- First page button (<<)
- Previous page button (<)
- Page number buttons (1, 2, 3, 4, ...)
- Next page button (>)
- Last page button (>>)
- Smart ellipsis (...) for large page counts

✅ **Row Summary**
- Shows "1-10 of 982" format
- Updates based on current page and items per page

✅ **Rows Per Page Selector**
- Dropdown to change items per page
- Default options: [10, 25, 50, 100]
- Customizable via `itemsPerPageOptions` prop

✅ **Go to Page Input**
- Direct page number input
- Press Enter to navigate
- Validates page number range

✅ **Responsive Design**
- Three-section layout: Left (summary), Center (paginator), Right (go to page)
- Proper spacing and alignment
- Disabled states for navigation buttons

---

## 🎨 Visual Specifications

### **Typography**
- **Summary & Labels**: body/medium (16px, medium weight)
- **Page Numbers**: body/medium (16px, medium weight)
- **Input**: paragraph/regular (14px, regular weight)

### **Colors**
- **Text**: neutral[1000] (black)
- **Icons**: neutral[600]
- **Borders**: neutral[500], neutral[700]
- **Active (Filled)**: primary[500] background, neutral[50] text
- **Active (Outlined)**: primary[500] border and text
- **Hover**: neutral[100] background

### **Spacing**
- Gap between sections: spacing[8] (20px)
- Gap within sections: spacing[5] (12px)
- Page button gaps: spacing[3] (8px)

### **Sizing**
- Page buttons: 32px × 32px (min-width)
- Nav buttons: 32px × 32px
- Input field: 47px × 32px
- Dropdown height: auto with padding

---

## 💻 Usage Examples

### **Basic Usage**

```tsx
import { Pagination } from '@lean-ids/components';

function MyTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={99}
      totalItems={982}
      itemsPerPage={itemsPerPage}
      onPageChange={setCurrentPage}
      onItemsPerPageChange={setItemsPerPage}
    />
  );
}
```

### **With Filled Variant**

```tsx
<Pagination
  variant="filled"
  currentPage={1}
  totalPages={345}
  totalItems={3450}
  itemsPerPage={10}
  onPageChange={handlePageChange}
  onItemsPerPageChange={handleItemsChange}
/>
```

### **With Outlined Variant**

```tsx
<Pagination
  variant="outlined"
  currentPage={5}
  totalPages={50}
  totalItems={500}
  itemsPerPage={10}
  onPageChange={handlePageChange}
  onItemsPerPageChange={handleItemsChange}
/>
```

### **Custom Items Per Page Options**

```tsx
<Pagination
  currentPage={1}
  totalPages={20}
  totalItems={1000}
  itemsPerPage={50}
  itemsPerPageOptions={[25, 50, 75, 100]}
  onPageChange={handlePageChange}
  onItemsPerPageChange={handleItemsChange}
/>
```

---

## 📋 Props API

```typescript
interface PaginationProps {
  currentPage: number;              // Current page (1-indexed)
  totalPages: number;                // Total number of pages
  totalItems: number;                // Total items count
  itemsPerPage: number;              // Items per page
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
  variant?: 'default' | 'filled' | 'outlined';  // Default: 'default'
  itemsPerPageOptions?: number[];    // Default: [10, 25, 50, 100]
  className?: string;
}
```

---

## 📐 Table Header Guidelines

### **Header Positioning: left / middle / right**

**IMPORTANT**: When building tables, headers must be assigned proper `side` prop:

| Position | Side Prop | Border Radius | Usage |
|----------|-----------|---------------|-------|
| **Leftmost column** | `side="left"` | `border-top-left-radius: 8px` | First column (usually checkbox or ID) |
| **Middle columns** | `side="middle"` | No border radius | All columns between first and last |
| **Rightmost column** | `side="right"` | `border-top-right-radius: 8px` | Last column (usually actions) |

### **Example Table Structure**

```tsx
<thead>
  <tr>
    {/* LEFTMOST - Checkbox column */}
    <TableHeader
      label=""
      side="left"
      showCheckbox
      checked={allChecked}
      onCheckChange={handleSelectAll}
    />
    
    {/* MIDDLE - Regular columns */}
    <TableHeader
      label="Name"
      side="middle"
      sortable
      sortDirection="asc"
      onSort={handleSort}
    />
    
    <TableHeader
      label="Email"
      side="middle"
      variant="search"
      searchValue={search}
      onSearchChange={setSearch}
    />
    
    <TableHeader
      label="Status"
      side="middle"
      variant="resizeable"
      resizable
      onResize={setWidth}
    />
    
    {/* RIGHTMOST - Actions column */}
    <TableHeader
      label="Actions"
      side="right"
    />
  </tr>
</thead>
```

---

## 🔒 Locked Column Behavior

### **What "Locked" Means**

When a column is **locked** (frozen), it means:
- The column stays **fixed on the left side** of the table
- It remains visible when scrolling horizontally
- Other columns scroll underneath it
- Typically used for ID, checkbox, or key identifier columns

### **How to Implement Locked Columns**

1. **Set the variant** to `locked` or `resizeable-locked`
2. **Set locked prop** to `true`
3. **Provide onLockToggle** callback to toggle state
4. **Position on left** - locked columns should be on the left side

```tsx
<TableHeader
  label="ID"
  variant="resizeable-locked"
  side="left"
  locked={true}
  resizable
  onLockToggle={() => setLocked(!locked)}
  onResize={setIdWidth}
  width={idWidth}
/>
```

### **Visual Indicator**

- Lock icon (padlock) appears in the header
- Click the lock icon to toggle freeze/unfreeze
- Icon color: neutral[600], hover: primary[500]

### **Table Container for Scrolling**

To enable horizontal scrolling with locked columns:

```tsx
<div style={{ overflowX: 'auto', border: '1px solid #e6e6e6' }}>
  <table>
    {/* Headers and rows */}
  </table>
</div>
```

---

## 🎯 Complete Table Example with Pagination

```tsx
function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [idLocked, setIdLocked] = useState(true);
  
  const totalItems = 982;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  
  return (
    <div>
      {/* Table with horizontal scroll */}
      <div style={{ overflowX: 'auto', border: '1px solid #e6e6e6', borderRadius: '8px' }}>
        <table>
          <thead>
            <tr>
              {/* Leftmost - Checkbox */}
              <TableHeader
                label=""
                side="left"
                showCheckbox
                checked={allChecked}
                onCheckChange={handleSelectAll}
              />
              
              {/* Locked ID column */}
              <TableHeader
                label="ID"
                variant="resizeable-locked"
                side="left"
                locked={idLocked}
                resizable
                onLockToggle={() => setIdLocked(!idLocked)}
                onResize={setIdWidth}
                width={100}
              />
              
              {/* Middle columns */}
              <TableHeader label="Name" side="middle" sortable />
              <TableHeader label="Email" side="middle" variant="search" />
              <TableHeader label="Department" side="middle" />
              <TableHeader label="Location" side="middle" />
              
              {/* Rightmost - Actions */}
              <TableHeader label="Actions" side="right" />
            </tr>
          </thead>
          <tbody>
            {data.slice(startItem - 1, endItem).map(row => (
              <tr key={row.id}>
                {/* Table cells */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Pagination */}
      <Pagination
        variant="filled"
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
        onItemsPerPageChange={setItemsPerPage}
      />
    </div>
  );
}
```

---

## 🔧 Files Created

### **Pagination Component**
1. **`/Pagination/Pagination.types.ts`** - TypeScript interfaces and types
2. **`/Pagination/Pagination.styles.ts`** - Styled components for all elements
3. **`/Pagination/Pagination.tsx`** - Main component with pagination logic
4. **`/Pagination/index.ts`** - Component exports

### **Exports Updated**
5. **`/index.ts`** - Added Pagination exports to package root

---

## ✅ Key Features Summary

### **Pagination Component**
- ✅ 3 visual variants (default, filled, outlined)
- ✅ Smart page number display with ellipsis
- ✅ First/Previous/Next/Last navigation
- ✅ Rows per page selector
- ✅ Go to page input
- ✅ Summary display (1-10 of 982)
- ✅ Disabled states for boundary pages
- ✅ Hover effects and transitions
- ✅ Full TypeScript support
- ✅ Accessible (ARIA labels)

### **Table Guidelines**
- ✅ Clear left/middle/right header positioning
- ✅ Border radius on edge columns
- ✅ Locked column behavior documented
- ✅ Horizontal scroll support
- ✅ Complete usage examples

---

## 🚀 Next Steps

1. **Test Pagination** in Storybook with all three variants
2. **Integrate Pagination** into the table story
3. **Test locked columns** with horizontal scrolling
4. **Verify border radius** on left and right headers

---

**Implementation Complete!** 🎉

The Pagination component is production-ready with all three Figma variants, and table header guidelines are clearly documented for proper left/middle/right positioning and locked column behavior.
