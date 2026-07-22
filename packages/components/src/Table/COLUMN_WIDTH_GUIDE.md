# Table Column Width Control Guide

## ✅ Available Width Properties

The Table component now supports **full control over column widths** with three properties:

1. **`width`** - Fixed or preferred width
2. **`minWidth`** - Minimum width constraint
3. **`maxWidth`** - Maximum width constraint

---

## 📦 TableColumn Interface

```typescript
interface TableColumn {
  id: string;
  label: string;
  width?: number;        // Fixed/preferred width in pixels
  minWidth?: number;     // Minimum width in pixels
  maxWidth?: number;     // Maximum width in pixels
  // ... other properties
}
```

---

## 🎯 Usage Examples

### Example 1: Fixed Width Columns

```tsx
const columns: TableColumn[] = [
  {
    id: 'checkbox',
    label: '',
    width: 56,           // Fixed 56px width
    minWidth: 56,
    maxWidth: 56,
  },
  {
    id: 'name',
    label: 'Name',
    width: 200,          // Fixed 200px width
    minWidth: 200,
    maxWidth: 200,
  },
  {
    id: 'email',
    label: 'Email',
    width: 250,          // Fixed 250px width
    minWidth: 250,
    maxWidth: 250,
  },
];
```

### Example 2: Flexible Width with Constraints

```tsx
const columns: TableColumn[] = [
  {
    id: 'name',
    label: 'Name',
    width: 200,          // Preferred width
    minWidth: 150,       // Can shrink to 150px
    maxWidth: 300,       // Can grow to 300px
  },
  {
    id: 'description',
    label: 'Description',
    minWidth: 200,       // At least 200px
    maxWidth: 500,       // At most 500px
    // No width = flexible
  },
  {
    id: 'status',
    label: 'Status',
    width: 120,
    minWidth: 100,
    maxWidth: 150,
  },
];
```

### Example 3: Responsive Columns

```tsx
const columns: TableColumn[] = [
  {
    id: 'id',
    label: 'ID',
    width: 80,
    minWidth: 60,        // Can shrink on small screens
    maxWidth: 100,
  },
  {
    id: 'title',
    label: 'Title',
    minWidth: 200,       // Always at least 200px
    // No maxWidth = can grow indefinitely
  },
  {
    id: 'actions',
    label: 'Actions',
    width: 120,
    minWidth: 120,       // Fixed minimum
    maxWidth: 120,       // Fixed maximum = truly fixed
  },
];
```

### Example 4: Resizable Columns with Constraints

```tsx
const columns: TableColumn[] = [
  {
    id: 'name',
    label: 'Name',
    width: 200,
    minWidth: 100,       // User can't resize below 100px
    maxWidth: 400,       // User can't resize above 400px
    resizable: true,     // Enable manual resizing
  },
  {
    id: 'email',
    label: 'Email',
    width: 250,
    minWidth: 150,
    maxWidth: 500,
    resizable: true,
  },
];
```

---

## 🔧 How It Works

### Width Priority

1. **`width`** - Sets the initial/preferred width
2. **`minWidth`** - Prevents column from shrinking below this value
3. **`maxWidth`** - Prevents column from growing above this value

### Behavior

- If **only `width`** is set: Column has fixed width
- If **`minWidth` and `maxWidth`** are set: Column is flexible within constraints
- If **only `minWidth`** is set: Column can grow indefinitely but has minimum
- If **only `maxWidth`** is set: Column can shrink but has maximum

### With Resizable Columns

When `resizable: true`:
- Users can drag to resize columns
- `minWidth` prevents resizing too small
- `maxWidth` prevents resizing too large
- Without constraints, users can resize freely

---

## 💡 Best Practices

### 1. **Fixed Width for Small Columns**
```tsx
{
  id: 'checkbox',
  label: '',
  width: 56,
  minWidth: 56,
  maxWidth: 56,
}
```

### 2. **Flexible Width for Content Columns**
```tsx
{
  id: 'description',
  label: 'Description',
  minWidth: 200,
  maxWidth: 600,
  resizable: true,
}
```

### 3. **Constrained Width for Status/Tags**
```tsx
{
  id: 'status',
  label: 'Status',
  width: 120,
  minWidth: 100,
  maxWidth: 150,
}
```

### 4. **Responsive Width for Names/Titles**
```tsx
{
  id: 'name',
  label: 'Name',
  width: 200,
  minWidth: 150,
  maxWidth: 300,
  resizable: true,
}
```

---

## 📋 Complete Example

```tsx
import { Table, TableColumn } from '@ajaysoni7832/lean-ids-components';

function MyTable() {
  const columns: TableColumn[] = [
    {
      id: 'checkbox',
      label: '',
      width: 56,
      minWidth: 56,
      maxWidth: 56,
    },
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
      resizable: true,
      sortable: true,
    },
    {
      id: 'email',
      label: 'Email',
      width: 250,
      minWidth: 200,
      maxWidth: 400,
      resizable: true,
    },
    {
      id: 'department',
      label: 'Department',
      width: 150,
      minWidth: 120,
      maxWidth: 200,
    },
    {
      id: 'status',
      label: 'Status',
      width: 120,
      minWidth: 100,
      maxWidth: 150,
    },
    {
      id: 'actions',
      label: 'Actions',
      width: 100,
      minWidth: 100,
      maxWidth: 100,
    },
  ];

  return (
    <Table
      data={employees}
      columns={columns}
      selectable
      paginated
    />
  );
}
```

---

## 🎨 Visual Behavior

### Without Constraints
```
Column: |--------flexible--------|
```

### With minWidth Only
```
Column: |--min--|--------flexible--------|
```

### With maxWidth Only
```
Column: |--------flexible--------|--max--|
```

### With Both Constraints
```
Column: |--min--|--flexible--|--max--|
```

### Fixed Width (all three equal)
```
Column: |------fixed------|
```

---

## ✨ Benefits

1. **Full Control** - Set exact widths or flexible ranges
2. **Responsive** - Columns adapt within constraints
3. **User-Friendly** - Resizable columns respect limits
4. **Consistent** - Prevents layout breaking
5. **Flexible** - Mix fixed and flexible columns
6. **Professional** - Tables look polished and intentional

---

## 🚀 Summary

- ✅ **`width`** - Preferred/initial width
- ✅ **`minWidth`** - Minimum constraint
- ✅ **`maxWidth`** - Maximum constraint
- ✅ Works with `resizable` columns
- ✅ All values in pixels
- ✅ Fully customizable per column

Developers now have **complete control** over column widths! 🎉
