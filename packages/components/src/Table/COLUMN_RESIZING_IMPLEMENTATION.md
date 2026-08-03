# Column Resizing Implementation - Complete Documentation

## 🎯 Overview

The Table component now supports **column resizing with width constraints**, allowing users to drag column borders to adjust widths while respecting minimum and maximum boundaries.

---

## 📋 Features Implemented

### ✅ Core Features
- **Drag-to-resize**: Drag column borders to adjust width
- **Width constraints**: Enforce `minWidth` and `maxWidth` boundaries
- **Visual feedback**: Cursor changes when hitting limits
- **Smooth resizing**: No snapping or jumps
- **Text truncation**: Ellipsis for overflow content
- **Triple width enforcement**: Width set on `<col>`, `<th>`, and `<td>` elements

### ✅ Technical Implementation
- **State management**: `columnWidths` state tracks dynamic widths
- **Clamping logic**: Initial widths clamped to min/max on mount
- **Performance optimization**: Only call `onResize` when width actually changes
- **Browser compatibility**: Works across Chrome, Firefox, Safari

---

## 🔧 Column Configuration

### TableColumn Interface

```typescript
export interface TableColumn {
  id: string;
  label: string;
  accessor?: string | ((row: any) => any);
  
  // Width control properties
  width?: number;        // Initial/preferred width in pixels
  minWidth?: number;     // Minimum width constraint
  maxWidth?: number;     // Maximum width constraint
  resizable?: boolean;   // Enable drag-to-resize
  
  // Other properties...
  sortable?: boolean;
  searchable?: boolean;
  renderCell?: (value: any, row: any, rowIndex: number) => React.ReactNode;
}
```

---

## 📖 Usage Examples

### 1. Basic Resizable Column

```tsx
const columns: TableColumn[] = [
  {
    id: 'name',
    label: 'Name',
    resizable: true,
    width: 200,
    minWidth: 150,
    maxWidth: 300,
  },
];
```

### 2. Fixed Width Column (Non-resizable)

```tsx
{
  id: 'id',
  label: 'ID',
  width: 80,
  minWidth: 80,
  maxWidth: 80,
  resizable: true, // Can enable, but won't resize due to equal min/max
}
```

### 3. Minimum Width Only (Unlimited Growth)

```tsx
{
  id: 'description',
  label: 'Description',
  resizable: true,
  minWidth: 200, // Can't shrink below 200px
  // No maxWidth - can grow indefinitely
}
```

### 4. Maximum Width Only (Unlimited Shrinking)

```tsx
{
  id: 'status',
  label: 'Status',
  resizable: true,
  maxWidth: 150, // Can't grow above 150px
  // No minWidth - can shrink to browser minimum (~48px due to padding)
}
```

### 5. Flexible Range

```tsx
{
  id: 'email',
  label: 'Email',
  resizable: true,
  width: 250,      // Starts at 250px
  minWidth: 150,   // Can shrink to 150px
  maxWidth: 400,   // Can grow to 400px
}
```

---

## 🎨 Visual Behavior

### Cursor Feedback

| State | Cursor | Meaning |
|-------|--------|---------|
| Normal resize | `col-resize` (↔️) | Can resize in both directions |
| Hit minimum | `w-resize` (←) | At minimum, can only grow right |
| Hit maximum | `e-resize` (→) | At maximum, can only shrink left |

### Text Truncation

When content exceeds column width:
- Text shows ellipsis (`...`)
- Full text visible on hover (via browser tooltip)
- Resize column wider to reveal more content

---

## 🏗️ Implementation Details

### Width Application Strategy

For each column, width is set in **three places** for maximum browser compatibility:

1. **`<col>` element** (in `<colgroup>`)
   ```tsx
   <col width="200px" style={{ width: '200px' }} />
   ```

2. **`<th>` element** (header cell)
   ```tsx
   <th style={{ 
     width: '200px', 
     minWidth: '200px', 
     maxWidth: '200px' 
   }}>
   ```

3. **`<td>` element** (body cells)
   ```tsx
   <td style={{ 
     width: '200px', 
     minWidth: '200px', 
     maxWidth: '200px' 
   }}>
   ```

### Why Triple Width?

- **`<col>` alone**: Unreliable across browsers, content can override
- **`<th>` alone**: Doesn't affect body cells
- **`<td>` alone**: Doesn't affect header
- **All three**: Ensures consistent width across entire column

### CSS Requirements

```css
/* Table must use fixed layout */
table {
  table-layout: fixed;
}

/* Cells must use border-box sizing */
th, td {
  box-sizing: border-box;
  overflow: hidden;
}

/* Text truncation for labels */
.header-label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
```

---

## 📊 Storybook Documentation

### Available Stories

1. **`TableComponent.stories.tsx`**
   - Main table documentation
   - Includes `ColumnWidthControl` story
   - Demonstrates all width constraint patterns

2. **`Table.WidthTest.stories.tsx`**
   - Dedicated width testing stories
   - `WithNarrowColumns`: Tests small widths (60-80px)
   - `WithMixedWidths`: Tests varied column sizes
   - `WithWideColumns`: Tests large widths (250-500px)

3. **`EnhancedTable.stories.tsx`**
   - Advanced table with nested columns
   - Documents width properties in component description

### Testing in Storybook

1. Open Storybook: `npm run storybook`
2. Navigate to: `Components > Table > Width Constraints Test`
3. Try the "Mixed Width Columns" story
4. Drag column borders to test resizing
5. Verify min/max constraints are enforced

---

## ⚙️ Configuration Defaults

### Browser Minimums

Due to padding (`8px 16px` = 32px horizontal), the **practical minimum width** is:
- **~48px**: Padding (32px) + minimal content/ellipsis (16px)
- Setting `minWidth` below 48px may not render correctly

### Recommended Minimums by Column Type

| Column Type | Recommended Min | Reason |
|-------------|----------------|--------|
| ID/Number | 60px | Short numeric values |
| Status/Badge | 80px | Badge component width |
| Name/Text | 120px | Readable text with ellipsis |
| Email/URL | 150px | Partial visibility |
| Description | 200px | Meaningful content preview |

---

## 🐛 Known Limitations

### 1. Padding Constraint
- Columns cannot be smaller than their padding (32px)
- Setting width < 48px may cause layout issues

### 2. Content Overflow
- Very long words without spaces may not truncate properly
- Use `word-break: break-word` for such cases

### 3. Sticky Columns
- Resizing locked/sticky columns works but may have visual artifacts during drag
- Width is still correctly applied after resize completes

---

## 🔍 Debugging

### Check Column Width in DevTools

1. Inspect the column header `<th>`
2. Check computed styles:
   - `width` should match your config
   - `min-width` should match `minWidth` prop
   - `max-width` should match `maxWidth` prop
3. Verify `<col>` element has same width
4. Verify `<td>` elements have same width

### Common Issues

**Issue**: Column not resizing
- **Check**: Is `resizable={true}` set?
- **Check**: Is `minWidth === maxWidth`? (creates fixed width)

**Issue**: Column wider than expected
- **Check**: Is content forcing expansion?
- **Check**: Is `overflow: hidden` applied?
- **Check**: Are all three width locations set (col, th, td)?

**Issue**: Resize jumps or snaps
- **Check**: Are min/max values too close together?
- **Check**: Is `startWidth` reading correct initial value?

---

## 📚 Related Files

### Core Implementation
- `Table.tsx` - Main table component, width state management
- `TableHeader.tsx` - Resize logic, mouse event handlers
- `TableCell.tsx` - Cell width application
- `Table.types.ts` - TypeScript interfaces

### Styling
- `TableHeader.styles.ts` - Header cell styles
- `TableCell.styles.ts` - Body cell styles
- `Table.styles.ts` - Table container styles

### Documentation
- `TableComponent.stories.tsx` - Main stories
- `Table.WidthTest.stories.tsx` - Width testing stories
- `EnhancedTable.stories.tsx` - Advanced features

---

## 🚀 Future Enhancements

### Potential Improvements
- [ ] Auto-fit column to content (double-click border)
- [ ] Save column widths to localStorage
- [ ] Column width presets (compact, comfortable, spacious)
- [ ] Responsive column hiding based on viewport
- [ ] Virtual scrolling for large datasets

---

## 📝 Changelog

### v1.0.0 - Initial Implementation
- ✅ Basic column resizing with drag
- ✅ Width constraints (min/max)
- ✅ Triple width enforcement (col, th, td)
- ✅ Cursor feedback on limits
- ✅ Performance optimization (prevent unnecessary re-renders)
- ✅ Comprehensive Storybook documentation

---

## 👥 Credits

Implemented as part of the Lean IDS component library.

For questions or issues, please refer to the main Table component documentation.
