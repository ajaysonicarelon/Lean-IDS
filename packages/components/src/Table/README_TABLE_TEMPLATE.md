# Advanced Data Table Template

## 📋 Overview

This is a production-ready, feature-rich data table template with enterprise-grade functionality. All core features (freezing, sorting, selection, search, pagination) are **locked and ready to use**. Developers only need to customize the data structure and column configuration.

## ✨ Features (All Built-in)

### 🔒 **Column Freezing**
- Freeze up to 3 columns (excluding checkbox)
- Locked columns stick to the left during horizontal scroll
- Visual feedback with background color and shadow
- Lock/unlock via header icons or settings panel

### 🔄 **Sorting**
- Three-state sorting: ascending → descending → none
- Click column headers to sort
- Supports text, numbers, dates, and currency
- Visual indicators for sort direction

### ☑️ **Row Selection**
- Individual row selection via checkbox
- "Select All" functionality
- Bulk operations support
- Selected state persists across pagination

### 🔍 **Column Search**
- Real-time filtering
- Search icon in column header
- Clear search functionality
- Works with pagination

### 📄 **Pagination**
- Configurable items per page (10, 25, 50, 100)
- Page navigation (first, previous, next, last)
- Total items and page count display
- Responsive to filtered data

### ⚙️ **Column Management**
- Show/hide columns
- Reorder columns (drag & drop)
- Resize columns
- Settings modal with all controls

### 📱 **Responsive Design**
- Horizontal scroll for wide tables
- Sticky headers
- Mobile-friendly controls

## 🚀 Quick Start

### 1. Define Your Data Structure

```typescript
interface DataRow {
  id: string;
  name: string;
  email: string;
  // Add your fields here
}
```

### 2. Configure Columns

```typescript
const getInitialColumnConfigs = (): ColumnConfig[] => [
  { id: 'checkbox', label: 'Select', visible: true, locked: true, order: 0 },
  { id: 'id', label: 'ID', visible: true, locked: false, order: 1 },
  { id: 'name', label: 'Name', visible: true, locked: false, order: 2 },
  // Add your columns here
];
```

### 3. Replace Sample Data with API Data

```typescript
// Option 1: Static data
const sampleData = getSampleData();

// Option 2: API call
const [data, setData] = useState<DataRow[]>([]);

useEffect(() => {
  fetch('/api/data')
    .then(res => res.json())
    .then(setData);
}, []);
```

### 4. Customize Cell Rendering

Find the render section and customize cells:

```typescript
// Example: Custom status cell
if (col.id === 'status') {
  return (
    <TableCell ...>
      <StatusChip status={row.status} />
    </TableCell>
  );
}
```

## 📝 Customization Guide

### Adding a New Column

1. **Add field to DataRow interface**
```typescript
interface DataRow {
  // ... existing fields
  newField: string;
}
```

2. **Add column config**
```typescript
{ id: 'newField', label: 'New Field', visible: true, locked: false, order: X }
```

3. **Add header rendering** (in render section)
```typescript
if (col.id === 'newField') {
  return (
    <TableHeader
      label="New Field"
      sortable
      sortDirection={sortColumn === 'newField' ? sortDirection : 'none'}
      onSort={() => handleSort('newField')}
      // ... other props
    />
  );
}
```

4. **Add cell rendering**
```typescript
if (col.id === 'newField') {
  return (
    <TableCell ...>
      {row.newField}
    </TableCell>
  );
}
```

### Making a Column Searchable

```typescript
<TableHeader
  label="Email"
  variant="search"
  searchValue={emailSearch}
  onSearchChange={setEmailSearch}
  // ... other props
/>
```

### Making a Column Resizable

```typescript
const [columnWidth, setColumnWidth] = useState(150);

<TableHeader
  variant="resizeable"
  resizable={true}
  width={columnWidth}
  onResize={setColumnWidth}
  // ... other props
/>
```

### Custom Sorting Logic

Modify the `sortedData` calculation:

```typescript
const sortedData = [...filteredData].sort((a, b) => {
  if (sortDirection === 'none') return 0;
  
  // Add custom sorting for your field
  if (sortColumn === 'customField') {
    // Your custom logic here
    return customCompare(a.customField, b.customField);
  }
  
  // ... rest of sorting logic
});
```

### Custom Filtering

Modify the `filteredData` calculation:

```typescript
const filteredData = sampleData.filter(row => {
  // Email search
  if (emailSearch && !row.email.includes(emailSearch)) {
    return false;
  }
  
  // Add more filters
  if (statusFilter && row.status !== statusFilter) {
    return false;
  }
  
  return true;
});
```

## 🎨 Styling

All components use your design system:
- `TableHeader` - Column headers
- `TableCell` - Data cells
- `Pagination` - Pagination controls
- `TableSettings` - Settings modal
- `Icon` - Icons
- `InlineMessage` - Warning messages

Colors and spacing come from your theme tokens.

## 🔧 Advanced Customization

### Bulk Actions

```typescript
const handleBulkDelete = () => {
  const selectedIds = selectedRows.map(index => paginatedData[index].id);
  // Call your API
  deleteItems(selectedIds);
};

// Add button in UI
<button onClick={handleBulkDelete} disabled={selectedRows.length === 0}>
  Delete Selected ({selectedRows.length})
</button>
```

### Export Data

```typescript
const handleExport = () => {
  const csv = sortedData.map(row => 
    Object.values(row).join(',')
  ).join('\n');
  
  // Download CSV
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'data.csv';
  a.click();
};
```

### Infinite Scroll

Replace pagination with infinite scroll:

```typescript
const [displayCount, setDisplayCount] = useState(20);

useEffect(() => {
  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      setDisplayCount(prev => prev + 20);
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const displayedData = sortedData.slice(0, displayCount);
```

## 📦 What's Included

- ✅ Column freezing (max 3)
- ✅ Multi-column sorting
- ✅ Row selection (single & bulk)
- ✅ Column search
- ✅ Pagination
- ✅ Column visibility toggle
- ✅ Column reordering
- ✅ Column resizing
- ✅ Settings modal
- ✅ Responsive design
- ✅ Keyboard navigation
- ✅ Accessibility (ARIA labels)

## 🚫 What NOT to Modify

**Do not change these core functions:**
- `handleColumnLock` - Freezing logic
- `handleSort` - Sorting logic
- `handleSelectAll` / `handleRowSelect` - Selection logic
- `useEffect` for column offsets - Sticky positioning
- `useEffect` for scroll handler - Stuck state styling

These are battle-tested and handle edge cases.

## 🐛 Troubleshooting

### Columns not freezing
- Check that max 3 columns are locked (excluding checkbox)
- Verify `data-locked` attribute is set
- Check console for errors

### Sorting not working
- Ensure `sortColumn` matches your column `id`
- Check data type handling in sort logic
- Verify `onSort` handler is connected

### Search not filtering
- Check `filteredData` calculation
- Verify search state is connected to input
- Ensure field exists in data

### Pagination issues
- Check `totalItems` calculation
- Verify `itemsPerPage` state
- Ensure `paginatedData` slice is correct

## 📞 Support

For issues or questions:
1. Check this README
2. Review the inline comments in `TableTemplate.tsx`
3. Check the original `Table.stories.tsx` for reference
4. Contact the design system team

## 🎯 Next Steps

1. Copy `TableTemplate.tsx` to your project
2. Customize `DataRow` interface
3. Update column configs
4. Replace sample data with API
5. Customize cell rendering
6. Test all features
7. Deploy! 🚀
