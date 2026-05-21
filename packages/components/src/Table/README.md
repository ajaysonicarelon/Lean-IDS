# Table Component

A complete, production-ready data table component with all features built-in.

## Features

✅ **Column Freezing** - Lock up to 3 columns  
✅ **Sorting** - Ascending, descending, or none  
✅ **Row Selection** - Single and bulk selection  
✅ **Column Search** - Search within specific columns  
✅ **Pagination** - Built-in pagination controls  
✅ **Column Visibility** - Show/hide columns  
✅ **Column Reordering** - Drag & drop columns  
✅ **Resizable Columns** - Adjust column widths  
✅ **Custom Cell Rendering** - Full control over cell content  
✅ **Actions Column** - Built-in actions support  
✅ **Loading State** - Loading overlay  
✅ **Empty State** - Custom empty message  

---

## Basic Usage

```tsx
import { Table } from '@lean-ids/components';

const MyTable = () => {
  const data = [
    { id: '1', name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: '2', name: 'Bob', email: 'bob@example.com', role: 'User' },
  ];

  const columns = [
    { id: 'id', label: 'ID' },
    { id: 'name', label: 'Name', sortable: true },
    { id: 'email', label: 'Email', searchable: true },
    { id: 'role', label: 'Role' },
  ];

  return <Table data={data} columns={columns} />;
};
```

---

## Advanced Usage

### With All Features

```tsx
import { Table, TableColumn } from '@lean-ids/components';

const AdvancedTable = () => {
  const data = [
    {
      id: '1',
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Senior Developer',
      status: 'Active',
      salary: 125000,
      avatar: 'https://i.pravatar.cc/32?img=1',
    },
    // ... more data
  ];

  const columns: TableColumn[] = [
    {
      id: 'id',
      label: 'ID',
      sortable: true,
      resizable: true,
      width: 100,
    },
    {
      id: 'user',
      label: 'User',
      sortable: true,
      resizable: true,
      width: 250,
      accessor: (row) => row.name,
      renderCell: (value, row) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={row.avatar}
            alt={row.name}
            style={{ width: 32, height: 32, borderRadius: '50%' }}
          />
          <div>
            <div style={{ fontWeight: 600 }}>{row.name}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{row.role}</div>
          </div>
        </div>
      ),
    },
    {
      id: 'email',
      label: 'Email',
      sortable: true,
      searchable: true,
      resizable: true,
    },
    {
      id: 'status',
      label: 'Status',
      sortable: true,
      renderCell: (value) => (
        <span
          style={{
            padding: '4px 12px',
            borderRadius: '12px',
            fontSize: '12px',
            fontWeight: 600,
            backgroundColor: value === 'Active' ? '#D1FAE5' : '#FEE2E2',
            color: value === 'Active' ? '#065F46' : '#991B1B',
          }}
        >
          {value}
        </span>
      ),
    },
    {
      id: 'salary',
      label: 'Salary',
      sortable: true,
      resizable: true,
      renderCell: (value) => `$${value.toLocaleString()}`,
    },
  ];

  const actions = [
    {
      icon: 'Edit',
      label: 'Edit',
      onClick: (row) => console.log('Edit', row),
    },
    {
      icon: 'Delete',
      label: 'Delete',
      onClick: (row) => console.log('Delete', row),
    },
  ];

  return (
    <Table
      data={data}
      columns={columns}
      selectable
      paginated
      itemsPerPage={10}
      showSettings
      showActions
      actions={actions}
      onRowSelect={(selectedIds) => console.log('Selected:', selectedIds)}
      rowKey="id"
    />
  );
};
```

---

## Props

### TableProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `any[]` | **Required** | Array of data objects to display |
| `columns` | `TableColumn[]` | **Required** | Column configuration |
| `selectable` | `boolean` | `false` | Enable row selection checkboxes |
| `paginated` | `boolean` | `true` | Enable pagination |
| `itemsPerPage` | `number` | `10` | Number of items per page |
| `showSettings` | `boolean` | `true` | Show column settings button |
| `showActions` | `boolean` | `false` | Show actions column |
| `actions` | `TableAction[]` | `[]` | Custom actions for each row |
| `onRowSelect` | `(ids: string[]) => void` | - | Callback when rows are selected |
| `onRowAction` | `(action: string, row: any) => void` | - | Callback when action is triggered |
| `rowKey` | `string` | `'id'` | Property to use as unique row identifier |
| `emptyMessage` | `string` | `'No data available'` | Message when table is empty |
| `loading` | `boolean` | `false` | Show loading overlay |
| `className` | `string` | - | Custom CSS class |

### TableColumn

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `id` | `string` | **Required** | Unique column identifier |
| `label` | `string` | **Required** | Column header label |
| `accessor` | `string \| function` | - | Property name or function to get cell value |
| `sortable` | `boolean` | `false` | Enable sorting for this column |
| `searchable` | `boolean` | `false` | Enable search for this column |
| `resizable` | `boolean` | `false` | Enable column resizing |
| `width` | `number` | - | Initial column width in pixels |
| `minWidth` | `number` | - | Minimum column width |
| `maxWidth` | `number` | - | Maximum column width |
| `visible` | `boolean` | `true` | Show/hide column |
| `locked` | `boolean` | `false` | Freeze column (max 3) |
| `renderCell` | `function` | - | Custom cell renderer |

### TableAction

| Property | Type | Description |
|----------|------|-------------|
| `icon` | `string` | Icon name from Icon component |
| `label` | `string` | Action label (for tooltip) |
| `onClick` | `(row: any) => void` | Click handler |

---

## Examples

### Simple Table

```tsx
<Table
  data={users}
  columns={[
    { id: 'name', label: 'Name' },
    { id: 'email', label: 'Email' },
  ]}
/>
```

### With Selection

```tsx
<Table
  data={users}
  columns={columns}
  selectable
  onRowSelect={(ids) => setSelectedUsers(ids)}
/>
```

### With Custom Cell Rendering

```tsx
const columns = [
  {
    id: 'status',
    label: 'Status',
    renderCell: (value) => (
      <Chip type={value === 'active' ? 'success' : 'error'}>
        {value}
      </Chip>
    ),
  },
];
```

### With Actions

```tsx
<Table
  data={users}
  columns={columns}
  showActions
  actions={[
    { icon: 'Edit', label: 'Edit', onClick: handleEdit },
    { icon: 'Delete', label: 'Delete', onClick: handleDelete },
  ]}
/>
```

### With Search

```tsx
const columns = [
  { id: 'name', label: 'Name', searchable: true },
  { id: 'email', label: 'Email', searchable: true },
];
```

### With Sorting

```tsx
const columns = [
  { id: 'name', label: 'Name', sortable: true },
  { id: 'date', label: 'Date', sortable: true },
  { id: 'amount', label: 'Amount', sortable: true },
];
```

### With Custom Accessor

```tsx
const columns = [
  {
    id: 'fullName',
    label: 'Full Name',
    accessor: (row) => `${row.firstName} ${row.lastName}`,
  },
  {
    id: 'age',
    label: 'Age',
    accessor: 'user.profile.age', // Nested property
  },
];
```

### Loading State

```tsx
<Table
  data={users}
  columns={columns}
  loading={isLoading}
/>
```

### Empty State

```tsx
<Table
  data={[]}
  columns={columns}
  emptyMessage="No users found. Add your first user to get started."
/>
```

---

## Column Freezing

Lock up to 3 columns to keep them visible while scrolling horizontally:

```tsx
const columns = [
  { id: 'id', label: 'ID', locked: true },
  { id: 'name', label: 'Name', locked: true },
  { id: 'email', label: 'Email' },
  // ... more columns
];
```

Users can also lock/unlock columns using the settings panel.

---

## Styling

The Table component uses theme tokens for all styling. Customize via ThemeProvider:

```tsx
import { ThemeProvider } from 'styled-components';
import { theme } from '@lean-ids/tokens';

<ThemeProvider theme={theme}>
  <Table data={data} columns={columns} />
</ThemeProvider>
```

---

## Best Practices

### 1. Always Provide Unique Row Keys

```tsx
<Table data={data} rowKey="id" />
```

### 2. Use Custom Renderers for Complex Cells

```tsx
{
  id: 'user',
  label: 'User',
  renderCell: (value, row) => (
    <UserCell user={row} />
  ),
}
```

### 3. Limit Locked Columns

Only lock the most important columns (max 3) to maintain usability.

### 4. Enable Features as Needed

Don't enable all features if you don't need them:

```tsx
// Minimal table
<Table data={data} columns={columns} paginated={false} showSettings={false} />
```

### 5. Handle Loading States

```tsx
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchData().then(data => {
    setData(data);
    setLoading(false);
  });
}, []);

<Table data={data} columns={columns} loading={loading} />
```

---

## Accessibility

The Table component is fully accessible:

- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ ARIA labels
- ✅ Focus management
- ✅ Semantic HTML

---

## Performance Tips

### 1. Memoize Columns

```tsx
const columns = useMemo(() => [
  { id: 'name', label: 'Name' },
  // ...
], []);
```

### 2. Use Pagination

For large datasets, always enable pagination:

```tsx
<Table data={data} paginated itemsPerPage={25} />
```

### 3. Lazy Load Data

Load data as needed instead of all at once.

---

## Migration from TableTemplate

If you're using the old `AdvancedDataTable` template:

**Before:**
```tsx
import { AdvancedDataTable } from '@lean-ids/components';

<AdvancedDataTable />
```

**After:**
```tsx
import { Table } from '@lean-ids/components';

<Table data={myData} columns={myColumns} />
```

The new `Table` component is more flexible and easier to use!

---

## Support

For issues or questions, contact: **dl-ux-carelon@carelon.com**
