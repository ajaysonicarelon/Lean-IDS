# Table Component - API Integration Guide

Complete guide for developers on how to use the Table component with API data.

---

## 🚀 Quick Start

### **1. Basic Import**

```tsx
import { Table, TableColumn } from '@lean-ids/components';
```

### **2. Define Your Columns**

```tsx
const columns: TableColumn[] = [
  { id: 'id', label: 'ID', sortable: true },
  { id: 'name', label: 'Name', sortable: true, searchable: true },
  { id: 'email', label: 'Email', searchable: true },
  { id: 'status', label: 'Status', sortable: true },
];
```

### **3. Fetch Data from API**

```tsx
const [data, setData] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetch('https://api.example.com/users')
    .then(res => res.json())
    .then(data => {
      setData(data);
      setLoading(false);
    });
}, []);
```

### **4. Render Table**

```tsx
<Table
  data={data}
  columns={columns}
  loading={loading}
  selectable
  paginated
  showSettings
/>
```

---

## 📋 Complete Example with API

### **Example 1: Simple API Integration**

```tsx
import React, { useState, useEffect } from 'react';
import { Table, TableColumn } from '@lean-ids/components';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Define columns
  const columns: TableColumn[] = [
    {
      id: 'id',
      label: 'User ID',
      sortable: true,
      width: 100,
    },
    {
      id: 'name',
      label: 'Name',
      sortable: true,
      searchable: true,
      width: 200,
    },
    {
      id: 'email',
      label: 'Email',
      sortable: true,
      searchable: true,
    },
    {
      id: 'role',
      label: 'Role',
      sortable: true,
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
            backgroundColor: value === 'active' ? '#D1FAE5' : '#FEE2E2',
            color: value === 'active' ? '#065F46' : '#991B1B',
          }}
        >
          {value}
        </span>
      ),
    },
  ];

  // Fetch data from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.example.com/users', {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle row selection
  const handleRowSelect = (selectedIds) => {
    console.log('Selected user IDs:', selectedIds);
    // Do something with selected users
  };

  // Handle actions
  const handleEdit = (user) => {
    console.log('Edit user:', user);
    // Navigate to edit page or open modal
  };

  const handleDelete = async (user) => {
    if (confirm(`Delete user ${user.name}?`)) {
      try {
        await fetch(`https://api.example.com/users/${user.id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        });
        // Refresh data
        setUsers(users.filter(u => u.id !== user.id));
      } catch (err) {
        alert('Failed to delete user');
      }
    }
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Table
      data={users}
      columns={columns}
      loading={loading}
      selectable
      paginated
      itemsPerPage={10}
      showSettings
      showActions
      actions={[
        { icon: 'Edit', label: 'Edit', onClick: handleEdit },
        { icon: 'Delete', label: 'Delete', onClick: handleDelete },
      ]}
      onRowSelect={handleRowSelect}
      emptyMessage="No users found. Add your first user to get started."
    />
  );
};

export default UsersTable;
```

---

## 🔐 API Authentication Examples

### **Example 2: With API Key in Headers**

```tsx
const fetchData = async () => {
  const response = await fetch('https://api.example.com/data', {
    headers: {
      'X-API-Key': process.env.REACT_APP_API_KEY,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  setData(data);
};
```

### **Example 3: With Bearer Token**

```tsx
const fetchData = async () => {
  const token = localStorage.getItem('authToken');
  
  const response = await fetch('https://api.example.com/data', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  setData(data);
};
```

### **Example 4: With OAuth**

```tsx
const fetchData = async () => {
  const accessToken = await getOAuthToken(); // Your OAuth function
  
  const response = await fetch('https://api.example.com/data', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  setData(data);
};
```

---

## 🔄 Advanced API Integration

### **Example 5: With Server-Side Pagination**

```tsx
const UsersTableWithServerPagination = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.example.com/users?page=${currentPage}&limit=${itemsPerPage}`,
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
          }
        );
        const result = await response.json();
        setUsers(result.data);
        setTotalItems(result.total);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage]);

  return (
    <Table
      data={users}
      columns={columns}
      loading={loading}
      paginated
      itemsPerPage={itemsPerPage}
      // Note: For server-side pagination, you'll need to handle this manually
      // The component currently supports client-side pagination only
    />
  );
};
```

### **Example 6: With Search and Filter**

```tsx
const UsersTableWithSearch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams({
          search: searchTerm,
          ...filters,
        });

        const response = await fetch(
          `https://api.example.com/users?${params}`,
          {
            headers: {
              'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            },
          }
        );
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search
    const timer = setTimeout(fetchUsers, 300);
    return () => clearTimeout(timer);
  }, [searchTerm, filters]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <Table
        data={users}
        columns={columns}
        loading={loading}
        selectable
        paginated
      />
    </div>
  );
};
```

### **Example 7: With Real-Time Updates (WebSocket)**

```tsx
const UsersTableWithRealTime = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initial fetch
    const fetchUsers = async () => {
      const response = await fetch('https://api.example.com/users', {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
        },
      });
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();

    // WebSocket for real-time updates
    const ws = new WebSocket('wss://api.example.com/users/updates');
    
    ws.onmessage = (event) => {
      const update = JSON.parse(event.data);
      
      if (update.type === 'user_added') {
        setUsers(prev => [...prev, update.user]);
      } else if (update.type === 'user_updated') {
        setUsers(prev => prev.map(u => 
          u.id === update.user.id ? update.user : u
        ));
      } else if (update.type === 'user_deleted') {
        setUsers(prev => prev.filter(u => u.id !== update.userId));
      }
    };

    return () => ws.close();
  }, []);

  return (
    <Table
      data={users}
      columns={columns}
      loading={loading}
      selectable
      paginated
    />
  );
};
```

---

## 🎨 Custom Cell Rendering with API Data

### **Example 8: Rendering Complex Data**

```tsx
const columns: TableColumn[] = [
  {
    id: 'user',
    label: 'User',
    accessor: (row) => row.firstName + ' ' + row.lastName,
    renderCell: (value, row) => (
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <img
          src={row.avatar || 'https://via.placeholder.com/32'}
          alt={value}
          style={{ width: 32, height: 32, borderRadius: '50%' }}
        />
        <div>
          <div style={{ fontWeight: 600 }}>{value}</div>
          <div style={{ fontSize: '12px', color: '#666' }}>
            {row.email}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'createdAt',
    label: 'Created',
    sortable: true,
    renderCell: (value) => new Date(value).toLocaleDateString(),
  },
  {
    id: 'permissions',
    label: 'Permissions',
    renderCell: (value) => (
      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        {value.map(permission => (
          <span
            key={permission}
            style={{
              padding: '2px 8px',
              background: '#E5E7EB',
              borderRadius: '4px',
              fontSize: '11px',
            }}
          >
            {permission}
          </span>
        ))}
      </div>
    ),
  },
];
```

---

## 🔧 Environment Variables Setup

### **.env File**

```bash
# API Configuration
REACT_APP_API_URL=https://api.example.com
REACT_APP_API_KEY=your_api_key_here

# For Angular
NG_APP_API_URL=https://api.example.com
NG_APP_API_KEY=your_api_key_here
```

### **Using in Code**

```tsx
// React
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

// Angular
const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;
```

---

## 📦 Complete Working Example

### **UserManagement.tsx**

```tsx
import React, { useState, useEffect } from 'react';
import { Table, TableColumn } from '@lean-ids/components';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  avatar: string;
  createdAt: string;
}

const UserManagement = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Column configuration
  const columns: TableColumn[] = [
    {
      id: 'user',
      label: 'User',
      sortable: true,
      searchable: true,
      width: 250,
      accessor: (row: User) => `${row.firstName} ${row.lastName}`,
      renderCell: (value, row: User) => (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img
            src={row.avatar}
            alt={value}
            style={{ width: 32, height: 32, borderRadius: '50%' }}
          />
          <div>
            <div style={{ fontWeight: 600 }}>{value}</div>
            <div style={{ fontSize: '12px', color: '#666' }}>{row.email}</div>
          </div>
        </div>
      ),
    },
    {
      id: 'role',
      label: 'Role',
      sortable: true,
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
            backgroundColor: value === 'active' ? '#D1FAE5' : '#FEE2E2',
            color: value === 'active' ? '#065F46' : '#991B1B',
          }}
        >
          {value}
        </span>
      ),
    },
    {
      id: 'createdAt',
      label: 'Created',
      sortable: true,
      renderCell: (value) => new Date(value).toLocaleDateString(),
    },
  ];

  // Fetch users from API
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setUsers(data);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch users');
        console.error('Error fetching users:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Handle user edit
  const handleEdit = async (user: User) => {
    console.log('Edit user:', user);
    // Navigate to edit page or open modal
    // router.push(`/users/${user.id}/edit`);
  };

  // Handle user delete
  const handleDelete = async (user: User) => {
    if (!confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}?`)) {
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/${user.id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to delete user');
      }

      // Remove from local state
      setUsers(users.filter(u => u.id !== user.id));
      alert('User deleted successfully');
    } catch (err) {
      alert('Failed to delete user');
      console.error('Error deleting user:', err);
    }
  };

  // Handle row selection
  const handleRowSelect = (selectedIds: string[]) => {
    console.log('Selected user IDs:', selectedIds);
    // You can perform bulk actions here
  };

  if (error) {
    return (
      <div style={{ padding: '20px', color: 'red' }}>
        Error: {error}
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Management</h1>
      
      <Table
        data={users}
        columns={columns}
        loading={loading}
        selectable
        paginated
        itemsPerPage={10}
        showSettings
        showActions
        actions={[
          { icon: 'Edit', label: 'Edit User', onClick: handleEdit },
          { icon: 'Delete', label: 'Delete User', onClick: handleDelete },
        ]}
        onRowSelect={handleRowSelect}
        rowKey="id"
        emptyMessage="No users found. Add your first user to get started."
      />
    </div>
  );
};

export default UserManagement;
```

---

## 🎯 Best Practices

### **1. Error Handling**

```tsx
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  const data = await response.json();
  setData(data);
} catch (err) {
  setError(err.message);
  console.error(err);
}
```

### **2. Loading States**

```tsx
setLoading(true);
try {
  // fetch data
} finally {
  setLoading(false); // Always set loading to false
}
```

### **3. Secure API Keys**

```tsx
// ✅ CORRECT - Use environment variables
const API_KEY = process.env.REACT_APP_API_KEY;

// ❌ WRONG - Never hardcode API keys
const API_KEY = 'abc123xyz';
```

### **4. Data Transformation**

```tsx
// Transform API data to match your table structure
const transformedData = apiData.map(item => ({
  id: item.userId,
  name: `${item.first_name} ${item.last_name}`,
  email: item.email_address,
  // ... other fields
}));

setData(transformedData);
```

### **5. Memoize Columns**

```tsx
const columns = useMemo(() => [
  { id: 'name', label: 'Name' },
  // ... other columns
], []); // Only create once
```

---

## 📚 Summary

**To use the Table component with API data:**

1. **Import** the Table component
2. **Define** your columns configuration
3. **Fetch** data from your API (with proper authentication)
4. **Pass** data and columns to the Table component
5. **Handle** loading and error states
6. **Add** actions and callbacks as needed

The Table component handles all the UI features (sorting, pagination, search, etc.) - you just provide the data!

---

## 📞 Support

For questions: **dl-ux-carelon@carelon.com**
