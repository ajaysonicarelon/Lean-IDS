# Table Props Usage Explanation

## 🚨 **CRITICAL FINDING**

### **The Problem:**
The **new props are defined in `Table.types.ts` but ONLY implemented in the Advanced Table!**

- ✅ **Advanced Table** - Fully implements all new props
- ❌ **Basic Table** - Does NOT use `Table.types.ts`, has its own interface, missing new props

---

## 📊 **Current State**

### **1. Table.types.ts (Shared Type Definitions)**
Location: `/packages/components/src/Table/Table.types.ts`

**Defines:**
- `TableColumn` interface
- `TableProps` interface with ALL props (including new ones)
- `TableAction` interface

**New Props Defined Here:**
```typescript
// Server-Side Pagination
paginationMode?: 'client' | 'server';
onPageChange?: (page: number, itemsPerPage: number) => void;
currentPage?: number;
totalItems?: number;

// Column Menu & Pinning
showColumnMenu?: boolean;
allowUserLeftPin?: boolean;
allowUserRightPin?: boolean;
allowDevLeftPin?: boolean;
allowDevRightPin?: boolean;
```

### **2. Basic Table (Table.tsx)**
Location: `/packages/components/src/Table/Table.tsx`

**Status:** ❌ **Does NOT use Table.types.ts!**

**Has its own TableProps interface** (lines 64-153) which includes:
- ✅ Basic props (data, columns, selectable, paginated, etc.)
- ✅ Server-side sorting (`sortMode`, `onSort`, `sortColumn`, `sortDirection`)
- ❌ **Missing server-side pagination props**
- ❌ **Missing column menu props**

**Example from Basic Table:**
```typescript
// Line 64-153 in Table.tsx
export interface TableProps extends React.HTMLAttributes<HTMLDivElement> {
  data: any[];
  columns: TableColumn[];
  selectable?: boolean;
  paginated?: boolean;
  itemsPerPage?: number;
  sortMode?: 'client' | 'server';  // ✅ Has this
  onSort?: (columnId: string, direction: 'asc' | 'desc' | 'none') => void;  // ✅ Has this
  // ❌ Missing paginationMode
  // ❌ Missing onPageChange
  // ❌ Missing currentPage
  // ❌ Missing totalItems
  // ❌ Missing showColumnMenu
  // ❌ Missing allowUserLeftPin, etc.
}
```

### **3. Advanced Table (EnhancedTableTemplate.tsx)**
Location: `/packages/components/src/Table/EnhancedTableTemplate.tsx`

**Status:** ✅ **Fully implements all new props!**

---

## 🎯 **How Props Are Used in Advanced Table**

### **1. Server-Side Pagination Props**

#### **Prop Destructuring** (Lines 512-517):
```typescript
// Pagination
paginated = true,
itemsPerPage: propItemsPerPage = 10,
paginationMode = 'client',              // ✅ Default: 'client'
onPageChange,                            // ✅ Callback for server mode
currentPage: controlledCurrentPage,      // ✅ Controlled page
totalItems: propTotalItems,              // ✅ Total items for server mode
```

#### **State Management** (Lines 549-558):
```typescript
// Controlled/uncontrolled pagination state (similar to sorting pattern)
const [internalCurrentPage, setInternalCurrentPage] = useState(1);
const [internalItemsPerPage, setInternalItemsPerPage] = useState(propItemsPerPage);

// Use controlled values if provided (server mode), otherwise use internal state (client mode)
const currentPage = controlledCurrentPage !== undefined ? controlledCurrentPage : internalCurrentPage;
const itemsPerPage = propItemsPerPage;
```

#### **Page Change Handler** (Lines 906-914):
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
```

#### **Items Per Page Change Handler** (Lines 916-924):
```typescript
const handleItemsPerPageChange = (newItemsPerPage: number) => {
  if (paginationMode === 'server' && onPageChange) {
    // Server-side pagination: call the callback with page 1 and new items per page
    onPageChange(1, newItemsPerPage);
  } else {
    // Client-side pagination: update internal state
    setInternalCurrentPage(1);
    setInternalItemsPerPage(newItemsPerPage);
  }
};
```

#### **Data Calculation** (Lines 1152-1158):
```typescript
// For server-side pagination, use the provided totalItems; for client-side, calculate from data
const totalItems = paginationMode === 'server' ? (propTotalItems || 0) : sortedData.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
// For server-side pagination, data is already paginated; for client-side, slice it
const paginatedData = paginationMode === 'server' ? sortedData : sortedData.slice(startIndex, endIndex);
```

#### **Pagination Component Usage** (Lines 1937-1942):
```typescript
<Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  totalItems={totalItems}
  itemsPerPage={itemsPerPage}
  onPageChange={handlePageChange}
  onItemsPerPageChange={handleItemsPerPageChange}
/>
```

---

### **2. Column Menu & Pinning Props**

#### **Prop Destructuring** (Lines 501-505):
```typescript
// Column Menu & Pinning
showColumnMenu = true,           // ✅ Default: true
allowUserLeftPin = true,         // ✅ Default: true
allowUserRightPin = true,        // ✅ Default: true
allowDevLeftPin = true,          // ✅ Default: true
allowDevRightPin = true,         // ✅ Default: true
```

#### **Passed to TableHeader** (Implementation):
```typescript
<TableHeader
  // ... other props
  showColumnMenu={showColumnMenu}
  allowUserLeftPin={allowUserLeftPin}
  allowUserRightPin={allowUserRightPin}
  allowDevLeftPin={allowDevLeftPin}
  allowDevRightPin={allowDevRightPin}
  // ... other props
/>
```

The TableHeader then passes these to ColumnMenu component which:
- Shows/hides the three-dot menu based on `showColumnMenu`
- Enables/disables pin options based on `allowUserLeftPin` and `allowUserRightPin`
- Respects developer-set pins based on `allowDevLeftPin` and `allowDevRightPin`

---

## 📝 **Usage Examples**

### **Advanced Table - Server-Side Pagination**

```typescript
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

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

  return (
    <AdvancedDataTable
      data={data}                          // Pre-paginated data from server
      initialColumns={columns}
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

### **Advanced Table - Column Menu Control**

```typescript
<AdvancedDataTable
  data={data}
  initialColumns={columns}
  showColumnMenu={true}          // ✅ Show three-dot menu (default)
  allowUserLeftPin={true}        // ✅ Allow users to pin left (default)
  allowUserRightPin={false}      // ❌ Disable right pinning
  allowDevLeftPin={true}         // ✅ Respect developer left pins (default)
  allowDevRightPin={true}        // ✅ Respect developer right pins (default)
/>
```

### **Advanced Table - Combined Server-Side Sorting & Pagination**

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
    <AdvancedDataTable
      data={data}
      initialColumns={columns}
      
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

## ⚠️ **ISSUE: Basic Table Missing Implementation**

### **What's Missing in Basic Table:**

1. **Props not in interface** - `paginationMode`, `onPageChange`, `currentPage`, `totalItems`, `showColumnMenu`, etc.
2. **No handlers** - No `handlePageChange`, no `handleItemsPerPageChange`
3. **No logic** - No server-side pagination logic, no column menu support

### **Options:**

#### **Option 1: Add Props to Basic Table** (Recommended)
- Add new props to Basic Table's TableProps interface
- Implement handlers and logic similar to Advanced Table
- Ensures consistency between both tables

#### **Option 2: Document Limitation**
- Clearly document that server-side pagination and column menu are Advanced Table only
- Update Storybook to reflect this
- Remove props from Basic Table stories

#### **Option 3: Deprecate Basic Table**
- Encourage migration to Advanced Table
- Mark Basic Table as legacy

---

## 🎯 **Recommendation**

**Add the missing props and implementation to Basic Table** to maintain consistency and avoid confusion. The implementation is already proven in Advanced Table and can be adapted.

---

**Generated:** August 27, 2026  
**Status:** Documentation Complete - Implementation Needed for Basic Table
