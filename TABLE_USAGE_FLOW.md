# Table Component - Usage Flow Diagram

## 🔄 Complete Data Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                        YOUR APPLICATION                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 1: Import Table Component                                 │
│  ────────────────────────────────────────────────────────────   │
│  import { Table, TableColumn } from '@lean-ids/components';     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 2: Define Columns Configuration                           │
│  ────────────────────────────────────────────────────────────   │
│  const columns: TableColumn[] = [                               │
│    { id: 'id', label: 'ID', sortable: true },                   │
│    { id: 'name', label: 'Name', searchable: true },             │
│    { id: 'email', label: 'Email' },                             │
│  ];                                                              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 3: Fetch Data from API                                    │
│  ────────────────────────────────────────────────────────────   │
│  useEffect(() => {                                              │
│    fetch('https://api.example.com/users', {                     │
│      headers: {                                                 │
│        'Authorization': `Bearer ${API_KEY}`,                    │
│      }                                                           │
│    })                                                            │
│    .then(res => res.json())                                     │
│    .then(data => setData(data));                                │
│  }, []);                                                         │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 4: Pass Data to Table Component                           │
│  ────────────────────────────────────────────────────────────   │
│  <Table                                                          │
│    data={data}                                                   │
│    columns={columns}                                             │
│    loading={loading}                                             │
│    selectable                                                    │
│    paginated                                                     │
│  />                                                              │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    TABLE COMPONENT                               │
│  ────────────────────────────────────────────────────────────   │
│  ✅ Renders data in table format                                │
│  ✅ Handles sorting automatically                               │
│  ✅ Handles pagination automatically                            │
│  ✅ Handles search automatically                                │
│  ✅ Handles column resizing                                     │
│  ✅ Handles row selection                                       │
│  ✅ Handles column freezing                                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    USER INTERACTIONS                             │
│  ────────────────────────────────────────────────────────────   │
│  → User clicks sort → Table re-sorts data                       │
│  → User searches → Table filters data                           │
│  → User selects rows → onRowSelect callback fires               │
│  → User clicks action → action.onClick fires                    │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📊 Component Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                      Table Component                            │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Props Input                                             │  │
│  │  • data: any[]                                           │  │
│  │  • columns: TableColumn[]                                │  │
│  │  • selectable, paginated, showSettings, etc.             │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           │                                     │
│                           ▼                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Internal State Management                               │  │
│  │  • Sorting state                                         │  │
│  │  • Pagination state                                      │  │
│  │  • Selection state                                       │  │
│  │  • Search filters                                        │  │
│  │  • Column visibility                                     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           │                                     │
│                           ▼                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Sub-Components                                          │  │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐         │  │
│  │  │ TableHeader│  │ TableCell  │  │ Pagination │         │  │
│  │  └────────────┘  └────────────┘  └────────────┘         │  │
│  │  ┌────────────┐  ┌────────────┐                         │  │
│  │  │TableSettings│ │   Icon     │                         │  │
│  │  └────────────┘  └────────────┘                         │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           │                                     │
│                           ▼                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Rendered Output                                         │  │
│  │  • Fully functional data table                           │  │
│  │  • All features working                                  │  │
│  │  • Responsive and accessible                             │  │
│  └──────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘
```

---

## 🔐 API Integration Flow

```
┌─────────────┐
│ Your App    │
└──────┬──────┘
       │
       │ 1. Component mounts
       ▼
┌─────────────────────────────┐
│ useEffect Hook              │
│ • Set loading = true        │
└──────┬──────────────────────┘
       │
       │ 2. Make API request
       ▼
┌─────────────────────────────┐
│ API Server                  │
│ • Authenticate with API key │
│ • Fetch data                │
└──────┬──────────────────────┘
       │
       │ 3. Receive response
       ▼
┌─────────────────────────────┐
│ Process Data                │
│ • Parse JSON                │
│ • Transform if needed       │
│ • Handle errors             │
└──────┬──────────────────────┘
       │
       │ 4. Update state
       ▼
┌─────────────────────────────┐
│ React State                 │
│ • setData(apiData)          │
│ • setLoading(false)         │
└──────┬──────────────────────┘
       │
       │ 5. Pass to Table
       ▼
┌─────────────────────────────┐
│ Table Component             │
│ • Receives data prop        │
│ • Renders table             │
└──────┬──────────────────────┘
       │
       │ 6. Display to user
       ▼
┌─────────────────────────────┐
│ User sees table with data   │
└─────────────────────────────┘
```

---

## 🎯 Feature Flow

### **Sorting:**
```
User clicks column header
  → Table updates sortDirection state
  → Data is re-sorted
  → Table re-renders with sorted data
```

### **Search:**
```
User types in search field
  → Table updates searchValues state
  → Data is filtered
  → Table re-renders with filtered data
```

### **Selection:**
```
User clicks checkbox
  → Table updates selectedRows state
  → onRowSelect callback fires
  → Your app receives selected IDs
```

### **Pagination:**
```
User clicks page number
  → Table updates currentPage state
  → Data is sliced for current page
  → Table re-renders with page data
```

### **Actions:**
```
User clicks action button
  → action.onClick fires
  → Your handler receives row data
  → You perform action (edit, delete, etc.)
```

---

## 📝 Code Example with Flow

```tsx
// 1. IMPORT
import { Table, TableColumn } from '@lean-ids/components';

const MyComponent = () => {
  // 2. STATE
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. COLUMNS
  const columns: TableColumn[] = [
    { id: 'name', label: 'Name', sortable: true },
    { id: 'email', label: 'Email', searchable: true },
  ];

  // 4. FETCH DATA
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('API_URL', {
          headers: { 'Authorization': `Bearer ${API_KEY}` }
        });
        const result = await response.json();
        setData(result);  // ← Data flows to Table
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 5. HANDLERS
  const handleRowSelect = (ids) => {
    console.log('Selected:', ids);
    // Your logic here
  };

  const handleEdit = (row) => {
    console.log('Edit:', row);
    // Your logic here
  };

  // 6. RENDER
  return (
    <Table
      data={data}              // ← Data from API
      columns={columns}        // ← Your column config
      loading={loading}        // ← Loading state
      selectable               // ← Enable features
      paginated
      showActions
      actions={[
        { icon: 'Edit', label: 'Edit', onClick: handleEdit }
      ]}
      onRowSelect={handleRowSelect}  // ← Your callback
    />
  );
};
```

---

## 🎨 Data Transformation Flow

```
API Response                Transform               Table Data
─────────────              ─────────              ────────────

{                          map()                  {
  user_id: "1",       →    transform         →     id: "1",
  first_name: "John",      fields                  name: "John Doe",
  last_name: "Doe",                                email: "john@example.com"
  email_address: "..."                           }
}
```

**Example:**
```tsx
const transformedData = apiData.map(item => ({
  id: item.user_id,
  name: `${item.first_name} ${item.last_name}`,
  email: item.email_address,
}));

setData(transformedData);
```

---

## ✅ Summary

**The Table component handles ALL the UI logic:**
- ✅ Sorting
- ✅ Filtering
- ✅ Pagination
- ✅ Selection
- ✅ Resizing
- ✅ Column management

**You only need to:**
1. Fetch data from your API
2. Define columns
3. Pass data to the component
4. Handle callbacks (optional)

**That's it!** The Table does the rest. 🎉

---

## 📚 Documentation Files

- **Quick Start:** `QUICK_START.md`
- **API Integration:** `TABLE_API_INTEGRATION_GUIDE.md`
- **Complete Guide:** `README.md`
- **Summary:** `TABLE_COMPONENT_SUMMARY.md`

---

## 📞 Support

**Email:** dl-ux-carelon@carelon.com
