# Basic Table - Server-Side Pagination Implementation

## ✅ **COMPLETED**

Successfully implemented server-side pagination in the Basic Table component to match the Advanced Table functionality.

---

## 📝 **Changes Made**

### **1. Added Props to TableProps Interface**

**File:** `/packages/components/src/Table/Table.tsx` (Lines 77-84)

```typescript
/** Pagination mode: 'client' (default) or 'server'. When 'server', use onPageChange callback */
paginationMode?: 'client' | 'server';
/** Callback for page change (server-side pagination). Called with (page, itemsPerPage) */
onPageChange?: (page: number, itemsPerPage: number) => void;
/** Current page (controlled, for server-side pagination) */
currentPage?: number;
/** Total number of items (required for server-side pagination) */
totalItems?: number;
```

---

### **2. Added Props to Component Destructuring**

**File:** `/packages/components/src/Table/Table.tsx` (Lines 352-355)

```typescript
paginationMode = 'client',
onPageChange,
currentPage: controlledCurrentPage,
totalItems: propTotalItems,
```

---

### **3. Updated State Management (Controlled/Uncontrolled Pattern)**

**File:** `/packages/components/src/Table/Table.tsx` (Lines 416-421)

```typescript
// Pagination state - controlled/uncontrolled pattern
const [internalCurrentPage, setInternalCurrentPage] = useState(1);
const [itemsPerPage, setItemsPerPage] = useState(initialItemsPerPage);

// Use controlled values if provided (server mode), otherwise use internal state (client mode)
const currentPage = controlledCurrentPage !== undefined ? controlledCurrentPage : internalCurrentPage;
```

**Pattern:** Same as Advanced Table - supports both controlled (server) and uncontrolled (client) modes.

---

### **4. Added Page Change Handlers**

**File:** `/packages/components/src/Table/Table.tsx` (Lines 607-626)

```typescript
const handlePageChange = (page: number) => {
  if (paginationMode === 'server' && onPageChange) {
    // Server-side pagination: call the callback
    onPageChange(page, itemsPerPage);
  } else {
    // Client-side pagination: update internal state
    setInternalCurrentPage(page);
  }
};

const handleItemsPerPageChange = (newItemsPerPage: number) => {
  if (paginationMode === 'server' && onPageChange) {
    // Server-side pagination: call the callback with page 1 and new items per page
    onPageChange(1, newItemsPerPage);
  } else {
    // Client-side pagination: update internal state
    setInternalCurrentPage(1);
    setItemsPerPage(newItemsPerPage);
  }
};
```

**Logic:**
- **Server mode:** Calls `onPageChange` callback, parent component handles data fetching
- **Client mode:** Updates internal state, component handles data slicing

---

### **5. Updated Pagination Logic**

**File:** `/packages/components/src/Table/Table.tsx` (Lines 924-931)

```typescript
// Pagination
// For server-side pagination, use the provided totalItems; for client-side, calculate from data
const totalItems = paginationMode === 'server' ? (propTotalItems || 0) : processedData.length;
const totalPages = paginated ? Math.ceil(totalItems / itemsPerPage) : 1;
const startIndex = paginated ? (currentPage - 1) * itemsPerPage : 0;
const endIndex = paginated ? startIndex + itemsPerPage : totalItems;
// For server-side pagination, data is already paginated; for client-side, slice it
const paginatedData = paginationMode === 'server' ? processedData : processedData.slice(startIndex, endIndex);
```

**Key Changes:**
- `totalItems`: Uses `propTotalItems` in server mode, calculates from data in client mode
- `paginatedData`: Uses data as-is in server mode (already paginated), slices in client mode

---

### **6. Updated Pagination Component Call**

**File:** `/packages/components/src/Table/Table.tsx` (Lines 1430-1439)

```typescript
{paginated && (
  <Pagination
    currentPage={currentPage}
    totalPages={totalPages}
    totalItems={totalItems}
    itemsPerPage={itemsPerPage}
    onPageChange={handlePageChange}              // ✅ Uses new handler
    onItemsPerPageChange={handleItemsPerPageChange}  // ✅ Uses new handler
  />
)}
```

---

### **7. Updated Storybook Documentation**

**File:** `/packages/components/src/Table/TableComponent.stories.tsx`

**Added:**
- Server-side pagination props documentation (Lines 122-142)
- Server-side sorting props documentation (Lines 144-166)
- Code examples in component description (Lines 40-69)

**Removed (Advanced Table Only):**
- ❌ `showColumnMenu` - Column menu is Advanced Table only
- ❌ `allowUserLeftPin` - Pin controls are Advanced Table only
- ❌ `allowUserRightPin` - Pin controls are Advanced Table only
- ❌ `allowDevLeftPin` - Pin controls are Advanced Table only
- ❌ `allowDevRightPin` - Pin controls are Advanced Table only
- ❌ `showSidePanel` - Side panel is Advanced Table only
- ❌ `showColumnFilters` - Column filters are Advanced Table only

---

## 🎯 **Feature Parity**

### **✅ Both Tables Now Support:**
1. **Server-Side Pagination** - Same implementation
2. **Server-Side Sorting** - Already existed in both
3. **Always-Visible Scrollbar** - Already implemented
4. **Selected Row Styling** - Already implemented
5. **Custom Cell Rendering** - Already implemented

### **🔒 Advanced Table Only:**
1. **Column Menu** (three-dot menu) - NOT in Basic Table
2. **Column Pinning** (user-controlled) - NOT in Basic Table
3. **Side Panel** - NOT in Basic Table
4. **Column Search Bars** - NOT in Basic Table
5. **Groups/Nested Headers** - NOT in Basic Table

---

## 📖 **Usage Example**

### **Basic Table - Server-Side Pagination**

```typescript
import { Table } from '@ajaysoni7832/lean-ids-components';

function MyTable() {
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const fetchData = async (page: number, itemsPerPage: number) => {
    const response = await api.get(`/users?page=${page}&limit=${itemsPerPage}`);
    setData(response.data.items);
    setTotalCount(response.data.total);
    setPage(page);
  };

  useEffect(() => {
    fetchData(1, 10);
  }, []);

  return (
    <Table
      data={data}                          // Pre-paginated data from server
      columns={columns}
      paginated
      paginationMode="server"              // ✅ Enable server-side pagination
      currentPage={page}                   // ✅ Controlled page state
      totalItems={totalCount}              // ✅ Total items from server
      onPageChange={(page, itemsPerPage) => {  // ✅ Callback when page changes
        fetchData(page, itemsPerPage);
      }}
    />
  );
}
```

### **Basic Table - Combined Server-Side Sorting & Pagination**

```typescript
function MyTable() {
  const [page, setPage] = useState(1);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('none');
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const fetchData = async (page: number, itemsPerPage: number, column: string, direction: string) => {
    const response = await api.get('/users', {
      params: { page, limit: itemsPerPage, sortBy: column, sortDir: direction }
    });
    setData(response.data.items);
    setTotalCount(response.data.total);
  };

  return (
    <Table
      data={data}
      columns={columns}
      
      // Server-side pagination
      paginated
      paginationMode="server"
      currentPage={page}
      totalItems={totalCount}
      onPageChange={(newPage, itemsPerPage) => {
        setPage(newPage);
        fetchData(newPage, itemsPerPage, sortColumn, sortDirection);
      }}
      
      // Server-side sorting
      sortMode="server"
      sortColumn={sortColumn}
      sortDirection={sortDirection}
      onSort={(column, direction) => {
        setSortColumn(column);
        setSortDirection(direction);
        fetchData(page, 10, column, direction);
      }}
    />
  );
}
```

---

## ✅ **Implementation Complete**

**Status:** Ready for testing and deployment

**Next Steps:**
1. Test server-side pagination manually
2. Test combined server-side sorting + pagination
3. Update CHANGELOG.md
4. Deploy to npm

---

**Generated:** August 27, 2026  
**Version:** 1.7.9 (Pre-release)  
**Implementation:** Complete ✅
