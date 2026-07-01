# Table Component - Quick Start Guide

## 🚀 3-Step Setup

### **Step 1: Import**
```tsx
import { Table, TableColumn } from '@ajaysoni7832/lean-ids-components';
```

### **Step 2: Define Columns**
```tsx
const columns: TableColumn[] = [
  { id: 'id', label: 'ID' },
  { id: 'name', label: 'Name', sortable: true },
  { id: 'email', label: 'Email', searchable: true },
];
```

### **Step 3: Use with API Data**
```tsx
const MyTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.example.com/data', {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Table
      data={data}
      columns={columns}
      loading={loading}
      selectable
      paginated
    />
  );
};
```

---

## 📋 Common Props

| Prop | Type | Description |
|------|------|-------------|
| `data` | `any[]` | **Required** - Your API data |
| `columns` | `TableColumn[]` | **Required** - Column config |
| `loading` | `boolean` | Show loading overlay |
| `selectable` | `boolean` | Enable row selection |
| `paginated` | `boolean` | Enable pagination |
| `showActions` | `boolean` | Show actions column |
| `actions` | `TableAction[]` | Action buttons |

---

## 🎯 Column Features

```tsx
{
  id: 'name',              // Required: unique ID
  label: 'Name',           // Required: display name
  sortable: true,          // Enable sorting
  searchable: true,        // Enable search
  resizable: true,         // Enable resizing
  width: 200,              // Initial width
  renderCell: (value) => <CustomCell value={value} />  // Custom renderer
}
```

---

## 🔐 API Authentication

### With API Key:
```tsx
headers: {
  'X-API-Key': process.env.REACT_APP_API_KEY,
}
```

### With Bearer Token:
```tsx
headers: {
  'Authorization': `Bearer ${token}`,
}
```

---

## 💡 Pro Tips

✅ **Always use environment variables for API keys**  
✅ **Handle loading and error states**  
✅ **Memoize columns to avoid re-renders**  
✅ **Use custom renderCell for complex data**  
✅ **Enable only features you need**  

---

## 📖 Full Documentation

- **API Integration:** `TABLE_API_INTEGRATION_GUIDE.md`
- **Complete Guide:** `README.md`
- **Examples:** Check Storybook → Components → Table

---

## 📞 Need Help?

**Email:** dl-ux-carelon@carelon.com
