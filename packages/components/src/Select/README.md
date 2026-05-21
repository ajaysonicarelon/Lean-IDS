# Select Component

**The official Select/Dropdown component for Lean IDS. Use this component for all dropdown selection needs.**

⚠️ **IMPORTANT:** Do NOT create custom select/dropdown components. Always use this Select component for consistency across the design system.

---

## 📋 Overview

The Select component is a reusable dropdown with support for single/multiple selection, search functionality, and full integration with existing Lean IDS components (InputField, Checkbox, RadioButton, Icon, HelpingText, FieldImportance).

### **When to Use:**
- ✅ Single selection from a list
- ✅ Multiple selection with checkboxes
- ✅ Searchable dropdowns
- ✅ Required fields with validation
- ✅ Forms with dropdown inputs

### **When NOT to Use:**
- ❌ For navigation → Use `MenuItem` or `SideNavigation`
- ❌ For autocomplete → Consider extending this component
- ❌ For date selection → Use `DatePicker` (when available)

---

## 🚀 Quick Start

### **Basic Usage:**

```tsx
import { Select } from '@lean-ids/components';
import { useState } from 'react';

function MyComponent() {
  const [value, setValue] = useState('');

  const options = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ];

  return (
    <Select
      label="Country"
      placeholder="Select a country"
      options={options}
      value={value}
      onChange={setValue}
      helperText="Choose your country"
    />
  );
}
```

---

## 📖 Complete API

### **Required Props:**

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Field label text |
| `options` | `SelectOption[]` | Array of options |

### **Optional Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `placeholder` | `string` | `'Placeholder'` | Placeholder text |
| `value` | `string \| string[]` | - | Selected value(s) |
| `onChange` | `(value: string \| string[]) => void` | - | Change handler |
| `multiple` | `boolean` | `false` | Enable multiple selection |
| `searchable` | `boolean` | `false` | Enable search/filter |
| `showLeadingIcon` | `boolean` | `true` | Show search icon |
| `showTrailingIcon` | `boolean` | `true` | Show dropdown arrow |
| `required` | `boolean` | `false` | Required field indicator |
| `disabled` | `boolean` | `false` | Disabled state |
| `error` | `boolean` | `false` | Error state |
| `helperText` | `string` | `'Default helping message'` | Helper text below field |
| `size` | `'xsmall' \| 'small' \| 'default' \| 'large'` | `'default'` | Field size |
| `className` | `string` | - | Custom CSS class |

### **SelectOption Type:**

```tsx
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}
```

---

## 💡 Common Use Cases

### **1. Single Selection**

```tsx
<Select
  label="Country"
  placeholder="Select a country"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  helperText="Choose your country"
/>
```

### **2. Multiple Selection**

```tsx
<Select
  label="Favorite Fruits"
  placeholder="Select fruits"
  options={fruits}
  value={selectedFruits}
  onChange={setSelectedFruits}
  multiple={true}
  helperText="Select multiple options"
/>
```

### **3. Searchable Dropdown**

```tsx
<Select
  label="Country"
  placeholder="Search countries..."
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  searchable={true}
  helperText="Type to search"
/>
```

### **4. Required Field**

```tsx
<Select
  label="Country"
  placeholder="Select a country"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  required={true}
  helperText="This field is required"
/>
```

### **5. With Error State**

```tsx
<Select
  label="Country"
  placeholder="Select a country"
  options={countries}
  value={selectedCountry}
  onChange={setSelectedCountry}
  error={true}
  required={true}
  helperText="Please select a valid country"
/>
```

### **6. Disabled Options**

```tsx
const options = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom', disabled: true },
  { value: 'ca', label: 'Canada' },
];

<Select
  label="Country"
  options={options}
  helperText="Some options are disabled"
/>
```

### **7. Multiple Selection with Search**

```tsx
<Select
  label="Countries"
  placeholder="Search and select"
  options={countries}
  value={selectedCountries}
  onChange={setSelectedCountries}
  multiple={true}
  searchable={true}
  helperText="Search and select multiple"
/>
```

---

## 🎨 Component Architecture

### **Reuses Lean IDS Components:**
- ✅ **InputField** - For the trigger/display field
- ✅ **Checkbox** - For multiple selection
- ✅ **RadioButton** - For single selection
- ✅ **Icon** - For search and dropdown icons
- ✅ **HelpingText** - For helper messages
- ✅ **FieldImportance** - For required indicator

### **Component Hierarchy:**
```
Select
├── Label + FieldImportance (if required)
├── InputField (trigger)
│   ├── Leading Icon (Search)
│   └── Trailing Icon (ExpandMore/ExpandLess)
└── Dropdown Container
    ├── Search Input (if searchable)
    └── Options List
        └── Option Items
            ├── Checkbox/RadioButton
            └── Label
```

---

## ♿ Accessibility

The Select component is fully accessible:

- ✅ **Keyboard Navigation:** Arrow keys, Enter, Escape
- ✅ **Focus Management:** Proper focus handling
- ✅ **Screen Readers:** ARIA labels and roles
- ✅ **Required Fields:** Visual and semantic indicators

---

## 🔒 Best Practices

### **DO:**
✅ Use Select for dropdown selections  
✅ Provide clear labels  
✅ Use helper text for guidance  
✅ Enable search for long lists (>10 items)  
✅ Mark required fields  
✅ Show error states with helpful messages  

### **DON'T:**
❌ Create custom select components  
❌ Use for navigation (use MenuItem)  
❌ Forget to handle onChange  
❌ Use without labels  
❌ Disable without explanation  

---

## 🚫 Anti-Patterns

### **❌ WRONG - Custom Select:**
```tsx
// DON'T DO THIS
const CustomSelect = () => (
  <div className="custom-select">
    <select>...</select>
  </div>
);
```

### **✅ CORRECT - Use Lean IDS Select:**
```tsx
// DO THIS
import { Select } from '@lean-ids/components';

<Select
  label="Country"
  options={countries}
  value={value}
  onChange={setValue}
/>
```

---

## 📊 Features

### **Single Selection:**
- Radio buttons for visual feedback
- Click to select
- Closes on selection

### **Multiple Selection:**
- Checkboxes for visual feedback
- Click to toggle selection
- Stays open for multiple selections
- Shows count when multiple selected

### **Search:**
- Filter options by typing
- Case-insensitive search
- Shows "No options found" when empty

### **States:**
- Default (empty)
- Filled (has value)
- Disabled (non-interactive)
- Error (validation failed)

---

## 🎯 Examples in Storybook

View live examples in Storybook:
- Default Select
- Required Field
- Searchable
- Multiple Selection
- Multiple + Searchable
- Error State
- Disabled
- Pre-selected Value
- No Icons
- Disabled Options
- Different Sizes
- Long List

**Navigate to:** Components → Select

---

## 🆘 Troubleshooting

### **Dropdown not opening?**
- Check that `disabled` is not `true`
- Verify `options` array is not empty
- Ensure component is rendered

### **Search not working?**
- Set `searchable={true}`
- Verify options have `label` property
- Check search is case-insensitive

### **Multiple selection not working?**
- Set `multiple={true}`
- Use array for `value` prop
- Handle array in `onChange`

### **Options not showing?**
- Check `options` array format
- Verify each option has `value` and `label`
- Check for console errors

---

## 📞 Support

For questions or issues:
- **Email:** dl-ux-carelon@carelon.com
- **Storybook:** View live examples
- **GitHub:** Report issues

---

## ✅ Summary

**The Select component is the ONLY way to create dropdowns in Lean IDS applications.**

- Import from `@lean-ids/components`
- Use for all dropdown selection needs
- Do NOT create custom select components
- Follow the examples and best practices

**Consistent selects = Better user experience!** 🎉
