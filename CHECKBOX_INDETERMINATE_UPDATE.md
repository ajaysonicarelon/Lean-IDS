# Checkbox Indeterminate State - Implementation Summary

## ✅ What Was Added

Added **indeterminate state** support to the Checkbox component for "select all" scenarios in tables and lists.

---

## 🎯 Use Case

When you have a table with selectable rows:
- **Unchecked** (☐): No rows selected
- **Indeterminate** (☑ with minus `-`): Some rows selected
- **Checked** (☑ with checkmark `✓`): All rows selected

---

## 📝 API Changes

### New Prop: `indeterminate`

```tsx
interface CheckboxProps {
  // ... existing props
  
  /**
   * Indeterminate state - shows minus icon (for "select all" scenarios)
   * Used when some (but not all) child items are selected
   * @default false
   */
  indeterminate?: boolean;
}
```

---

## 💻 Usage Example

### Basic Table Selection Pattern

```tsx
import { Checkbox } from '@ajaysoni7832/lean-ids-components';

function TableWithSelection() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', selected: false },
    { id: 2, name: 'Item 2', selected: false },
    { id: 3, name: 'Item 3', selected: false },
  ]);

  const selectedCount = items.filter(item => item.selected).length;
  const allSelected = selectedCount === items.length;
  const someSelected = selectedCount > 0 && selectedCount < items.length;

  const handleSelectAll = () => {
    setItems(items.map(item => ({ ...item, selected: !allSelected })));
  };

  return (
    <div>
      {/* Header checkbox with indeterminate state */}
      <Checkbox
        label="Select All"
        checked={allSelected}
        indeterminate={someSelected}
        onChange={handleSelectAll}
      />

      {/* Individual row checkboxes */}
      {items.map(item => (
        <Checkbox
          key={item.id}
          label={item.name}
          checked={item.selected}
          onChange={() => {
            setItems(items.map(i => 
              i.id === item.id ? { ...i, selected: !i.selected } : i
            ));
          }}
        />
      ))}
    </div>
  );
}
```

---

## 🎨 Visual States

| State | Icon | Description |
|-------|------|-------------|
| Unchecked | ☐ | No items selected |
| **Indeterminate** | ☑ with `-` | **Some items selected** |
| Checked | ☑ with `✓` | All items selected |

---

## ♿ Accessibility

The component properly sets `aria-checked="mixed"` when in indeterminate state, following WCAG 2.1 AA guidelines.

```tsx
<input
  type="checkbox"
  aria-checked={indeterminate ? 'mixed' : checked}
  // ... other props
/>
```

---

## 📚 Storybook Documentation

Added a new story: **"Indeterminate State"** that demonstrates:
- Interactive table selection example
- All three checkbox states
- Real-time status updates
- Copy-paste ready code

---

## 🔧 Implementation Details

### Files Modified:

1. **`Checkbox.types.ts`**
   - Added `indeterminate?: boolean` prop

2. **`Checkbox.tsx`**
   - Added `MinusIcon` SVG component
   - Updated `renderCheckboxIcon()` to show minus when indeterminate
   - Updated `StyledCheckbox` to treat indeterminate as checked (filled background)
   - Updated `aria-checked` to return `'mixed'` when indeterminate
   - Updated component documentation

3. **`Checkbox.stories.tsx`**
   - Added comprehensive "Indeterminate State" story
   - Updated component description to mention indeterminate feature

---

## ✅ Testing Checklist

- [x] Visual appearance (minus icon shows correctly)
- [x] Filled background when indeterminate
- [x] ARIA attribute set to "mixed"
- [x] Works with both sizes (default and large)
- [x] Works with disabled state
- [x] Storybook documentation complete
- [x] TypeScript types updated

---

## 🚀 Ready to Use!

The indeterminate state is now fully implemented and ready for use in table selection scenarios!
