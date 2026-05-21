# Table Component - Toolbar Added ✅

## 🎉 What Was Added

A complete **TableToolbar** component has been added to the Table component by default!

---

## 📦 New Components

### **1. TableToolbar Component**
Location: `/packages/components/src/Table/TableToolbar.tsx`

**Features:**
- ✅ Table title and description
- ✅ Global search bar
- ✅ Filter button (dropdown)
- ✅ Download button (with format options: CSV, Excel, PDF)
- ✅ Settings button
- ✅ Selected rows count display
- ✅ Bulk actions bar (when rows are selected)
- ✅ Custom actions support

---

## 🎯 Default Table Now Includes

When you use the Table component, it **automatically includes** the toolbar with:

1. **Title & Description** - Optional header section
2. **Global Search** - Search across all data
3. **Download Button** - Export data in multiple formats
4. **Settings Button** - Column visibility and configuration
5. **Filter Button** - Filter data (optional)
6. **Bulk Actions** - Actions for selected rows

---

## 🚀 How to Use

### **Basic Usage (Toolbar Enabled by Default):**

```tsx
import { Table } from '@lean-ids/components';

<Table
  data={myData}
  columns={myColumns}
  title="User Management"
  description="Manage all users in your organization"
  // Toolbar is shown by default!
/>
```

### **With All Toolbar Features:**

```tsx
<Table
  data={myData}
  columns={myColumns}
  title="User Management"
  description="Manage all users in your organization"
  showToolbar={true}              // Default: true
  showGlobalSearch={true}         // Default: true
  showFilter={true}               // Default: false
  showDownload={true}             // Default: true
  onDownload={() => {
    // Handle download
    console.log('Downloading data...');
  }}
  selectable
  paginated
/>
```

### **Disable Toolbar:**

```tsx
<Table
  data={myData}
  columns={myColumns}
  showToolbar={false}  // Hide the entire toolbar
/>
```

---

## 📋 New Props Added to Table

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | - | Table title |
| `description` | `string` | - | Table description |
| `showToolbar` | `boolean` | `true` | Show/hide toolbar |
| `showGlobalSearch` | `boolean` | `true` | Show global search |
| `showFilter` | `boolean` | `false` | Show filter button |
| `showDownload` | `boolean` | `true` | Show download button |
| `onDownload` | `function` | - | Download handler |

---

## 🎨 Toolbar Features

### **1. Title & Description**
```tsx
<Table
  title="Employee Directory"
  description="View and manage all employees"
  data={data}
  columns={columns}
/>
```

### **2. Global Search**
Automatically searches across all visible data:
```tsx
<Table
  showGlobalSearch={true}
  data={data}
  columns={columns}
/>
```

### **3. Download Button**
Provides multiple export formats:
```tsx
<Table
  showDownload={true}
  onDownload={() => {
    // Export data as CSV, Excel, or PDF
    exportData(data, 'csv');
  }}
  data={data}
  columns={columns}
/>
```

### **4. Filter Button**
```tsx
<Table
  showFilter={true}
  data={data}
  columns={columns}
/>
```

### **5. Bulk Actions**
Automatically shown when rows are selected:
```tsx
<Table
  selectable
  onRowSelect={(selectedIds) => {
    console.log('Selected:', selectedIds);
  }}
  data={data}
  columns={columns}
/>
```

---

## 🎯 Visual Structure

```
┌─────────────────────────────────────────────────────────┐
│  TABLE TOOLBAR (NEW!)                                   │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Title: "User Management"                         │  │
│  │  Description: "Manage all users..."               │  │
│  │                                    [Download] [⚙] │  │
│  ├───────────────────────────────────────────────────┤  │
│  │  [🔍 Search...]  [Filter ▼]                       │  │
│  └───────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│  TABLE DATA                                             │
│  ┌───────────────────────────────────────────────────┐  │
│  │ ☐ | ID | Name      | Email          | Actions    │  │
│  ├───────────────────────────────────────────────────┤  │
│  │ ☐ | 1  | Alice     | alice@...      | [✏] [🗑]  │  │
│  │ ☐ | 2  | Bob       | bob@...        | [✏] [🗑]  │  │
│  └───────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────┤
│  PAGINATION                                             │
│  ← 1 2 3 4 5 →                      Showing 1-10 of 50  │
└─────────────────────────────────────────────────────────┘
```

---

## 📝 Complete Example

```tsx
import React, { useState, useEffect } from 'react';
import { Table, TableColumn } from '@lean-ids/components';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns: TableColumn[] = [
    { id: 'id', label: 'ID', sortable: true },
    { id: 'name', label: 'Name', sortable: true, searchable: true },
    { id: 'email', label: 'Email', searchable: true },
    { id: 'role', label: 'Role', sortable: true },
  ];

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const handleDownload = () => {
    // Export data logic
    const csv = convertToCSV(users);
    downloadFile(csv, 'users.csv');
  };

  return (
    <Table
      // Toolbar props
      title="User Management"
      description="Manage all users in your organization"
      showToolbar={true}
      showGlobalSearch={true}
      showFilter={true}
      showDownload={true}
      onDownload={handleDownload}
      
      // Table props
      data={users}
      columns={columns}
      loading={loading}
      selectable
      paginated
      itemsPerPage={10}
      showSettings
      showActions
      actions={[
        { icon: 'Edit', label: 'Edit', onClick: (row) => console.log('Edit', row) },
        { icon: 'Delete', label: 'Delete', onClick: (row) => console.log('Delete', row) },
      ]}
      onRowSelect={(ids) => console.log('Selected:', ids)}
    />
  );
};
```

---

## ✅ Benefits

### **For Developers:**
- ✅ No need to build table headers manually
- ✅ All common features built-in
- ✅ Consistent UI across all tables
- ✅ Easy to customize

### **For Users:**
- ✅ Familiar table interface
- ✅ Search, filter, and download out of the box
- ✅ Clear table title and description
- ✅ Bulk actions support

---

## 🎨 Customization

### **Hide Specific Features:**
```tsx
<Table
  title="Simple Table"
  showGlobalSearch={false}  // Hide search
  showDownload={false}      // Hide download
  showFilter={false}        // Hide filter
  data={data}
  columns={columns}
/>
```

### **Hide Entire Toolbar:**
```tsx
<Table
  showToolbar={false}  // No toolbar at all
  data={data}
  columns={columns}
/>
```

---

## 📚 Files Modified/Created

1. **Created:** `/packages/components/src/Table/TableToolbar.tsx`
2. **Modified:** `/packages/components/src/Table/Table.tsx`
3. **Modified:** `/packages/components/src/Table/index.ts`
4. **Modified:** `/packages/components/src/index.ts`

---

## 🎭 View in Storybook

The toolbar is now visible in all Table examples in Storybook!

Navigate to: **Components → Table**

---

## 📞 Support

For questions: **dl-ux-carelon@carelon.com**

---

## ✅ Summary

**The Table component now includes a complete toolbar by default with:**
- Title & Description
- Global Search
- Filter Button
- Download Button (CSV, Excel, PDF)
- Settings Button
- Bulk Actions Support

**Developers can now use a fully-featured table with just:**
```tsx
<Table
  title="My Table"
  data={data}
  columns={columns}
/>
```

**Everything else is handled automatically!** 🎉
