# Pagination Component

Page navigation control.

## Quick Start

```tsx
import { Pagination } from '@ajaysoni7832/lean-ids-components';
<Pagination 
  currentPage={1} 
  totalPages={10} 
  onPageChange={(page) => setPage(page)} 
/>
```

## API

| Prop | Type | Default |
|------|------|---------|
| `currentPage` | `number` | - |
| `totalPages` | `number` | - |
| `onPageChange` | `(page: number) => void` | - |
| `showFirstLast` | `boolean` | `true` |

## Examples

```tsx
<Pagination currentPage={3} totalPages={20} onPageChange={handlePageChange} />
```

## Summary

Use Pagination for navigating through paged content.
