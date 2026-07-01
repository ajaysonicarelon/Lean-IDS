# Button Component

**The primary action component in Lean IDS. Use buttons for all user actions and interactions.**

---

## 📋 Overview

The Button component is a versatile, accessible button that supports multiple variants, sizes, and types for different use cases.

### **When to Use:**
- ✅ Primary actions (Submit, Save, Create)
- ✅ Secondary actions (Cancel, Back)
- ✅ Tertiary actions (Edit, Delete)
- ✅ Form submissions
- ✅ Navigation triggers

### **When NOT to Use:**
- ❌ For navigation links → Use `Link` component instead
- ❌ For icon-only actions in toolbars → Consider `IconButton` pattern

---

## 🚀 Quick Start

### **Installation:**

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
```

### **Setup:**

```tsx
import { ThemeProvider } from 'styled-components';
import { carelonTheme } from '@ajaysoni7832/lean-ids-tokens';
import { Button } from '@ajaysoni7832/lean-ids-components';

function App() {
  return (
    <ThemeProvider theme={carelonTheme}>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```

---

## 📖 Complete API

### **Required Props:**

| Prop | Type | Description |
|------|------|-------------|
| `children` | `ReactNode` | Button text/content (REQUIRED) |

### **Optional Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'tertiary'` | `'primary'` | Button style variant |
| `size` | `'xsmall' \| 'small' \| 'medium' \| 'large' \| 'xlarge'` | `'medium'` | Button size |
| `buttonType` | `'default' \| 'safe' \| 'warning' \| 'alert'` | `'default'` | Contextual button type |
| `disabled` | `boolean` | `false` | Disable button interaction |
| `leadingIcon` | `ReactNode` | - | Icon before text |
| `trailingIcon` | `ReactNode` | - | Icon after text |
| `showLabel` | `boolean` | `true` | Show/hide button text |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `onClick` | `(event: MouseEvent) => void` | - | Click handler |
| `fullWidth` | `boolean` | `false` | Button spans full width |
| `className` | `string` | - | Custom CSS class |

---

## 💡 Common Use Cases

### **1. Primary Button**

```tsx
import { Button } from '@ajaysoni7832/lean-ids-components';

<Button variant="primary" onClick={handleSubmit}>
  Submit
</Button>
```

### **2. Secondary Button**

```tsx
<Button variant="secondary" onClick={handleCancel}>
  Cancel
</Button>
```

### **3. Tertiary Button**

```tsx
<Button variant="tertiary" onClick={handleEdit}>
  Edit
</Button>
```

### **4. Button with Leading Icon**

```tsx
import { Add } from '@mui/icons-material';

<Button variant="primary" leadingIcon={<Add />}>
  Add Item
</Button>
```

### **5. Button with Trailing Icon**

```tsx
import { ArrowForward } from '@mui/icons-material';

<Button variant="primary" trailingIcon={<ArrowForward />}>
  Next
</Button>
```

### **6. Icon-Only Button**

```tsx
import { Delete } from '@mui/icons-material';

<Button 
  variant="tertiary" 
  leadingIcon={<Delete />}
  showLabel={false}
  aria-label="Delete item"
>
  Delete
</Button>
```

### **7. Button Sizes**

```tsx
<Button size="xsmall">XSmall</Button>
<Button size="small">Small</Button>
<Button size="medium">Medium</Button>
<Button size="large">Large</Button>
<Button size="xlarge">XLarge</Button>
```

### **8. Button Types (Contextual)**

```tsx
// Safe action (positive)
<Button buttonType="safe">Approve</Button>

// Warning action (caution)
<Button buttonType="warning">Archive</Button>

// Alert action (destructive)
<Button buttonType="alert">Delete</Button>
```

### **9. Disabled Button**

```tsx
<Button disabled>
  Cannot Click
</Button>
```

### **10. Full Width Button**

```tsx
<Button fullWidth>
  Full Width Button
</Button>
```

### **11. Form Submit Button**

```tsx
<form onSubmit={handleSubmit}>
  <input type="text" />
  <Button type="submit" variant="primary">
    Submit Form
  </Button>
</form>
```

---

## 🎨 Variants

### **Primary** (Default)
- Use for main actions
- Most prominent button on screen
- Example: Submit, Save, Create

### **Secondary**
- Use for secondary actions
- Less prominent than primary
- Example: Cancel, Back, Close

### **Tertiary**
- Use for tertiary actions
- Least prominent
- Example: Edit, Delete, View Details

---

## 🎯 Button Types (Contextual Colors)

### **Default**
- Neutral action
- Uses primary brand colors

### **Safe**
- Positive action
- Green color scheme
- Example: Approve, Confirm, Enable

### **Warning**
- Caution action
- Orange color scheme
- Example: Archive, Suspend, Warn

### **Alert**
- Destructive action
- Red color scheme
- Example: Delete, Remove, Reject

---

## 📏 Sizes

| Size | Height | Padding | Font Size | Use Case |
|------|--------|---------|-----------|----------|
| `xsmall` | 24px | 8px 12px | 12px | Compact UIs, tables |
| `small` | 32px | 8px 16px | 14px | Dense layouts |
| `medium` | 40px | 12px 20px | 14px | Default, most common |
| `large` | 48px | 14px 24px | 16px | Prominent actions |
| `xlarge` | 56px | 16px 28px | 18px | Hero sections |

---

## ♿ Accessibility

The Button component is fully accessible:

- ✅ **Keyboard Navigation:** Tab to focus, Enter/Space to activate
- ✅ **Focus Indicators:** Clear focus ring
- ✅ **ARIA Labels:** Use `aria-label` for icon-only buttons
- ✅ **Disabled State:** Properly communicated to screen readers
- ✅ **Semantic HTML:** Uses `<button>` element

**Best Practice for Icon-Only Buttons:**
```tsx
<Button 
  leadingIcon={<Delete />}
  showLabel={false}
  aria-label="Delete item"  // ← Required for accessibility
>
  Delete
</Button>
```

---

## 🔒 Best Practices

### **DO:**
✅ Use clear, action-oriented labels ("Save", "Submit", "Delete")  
✅ Use primary variant for main action  
✅ Use appropriate button types (alert for destructive actions)  
✅ Provide aria-label for icon-only buttons  
✅ Disable buttons during async operations  
✅ Use full-width buttons in mobile layouts  

### **DON'T:**
❌ Use vague labels ("OK", "Click here")  
❌ Have multiple primary buttons on one screen  
❌ Use buttons for navigation (use Link instead)  
❌ Forget to handle loading states  
❌ Make buttons too small (minimum 32px height)  
❌ Use icon-only buttons without aria-label  

---

## 🚫 Anti-Patterns

### **❌ WRONG - Multiple Primary Buttons:**
```tsx
<Button variant="primary">Save</Button>
<Button variant="primary">Submit</Button>  {/* Confusing! */}
<Button variant="primary">Create</Button>
```

### **✅ CORRECT - One Primary, Others Secondary:**
```tsx
<Button variant="secondary">Cancel</Button>
<Button variant="primary">Submit</Button>  {/* Clear hierarchy */}
```

### **❌ WRONG - Button for Navigation:**
```tsx
<Button onClick={() => navigate('/home')}>Go Home</Button>
```

### **✅ CORRECT - Use Link:**
```tsx
<Link href="/home">Go Home</Link>
```

### **❌ WRONG - Icon-Only Without Label:**
```tsx
<Button leadingIcon={<Delete />} showLabel={false}>
  Delete  {/* Missing aria-label! */}
</Button>
```

### **✅ CORRECT - Icon-Only With Aria-Label:**
```tsx
<Button 
  leadingIcon={<Delete />} 
  showLabel={false}
  aria-label="Delete item"
>
  Delete
</Button>
```

---

## 🎨 Styling

The Button uses Lean IDS design tokens and follows the design system strictly. Custom styling is not recommended.

**Theme Support:**
```tsx
import { carelonTheme, elevanceTheme } from '@ajaysoni7832/lean-ids-tokens';

// Carelon theme (default)
<ThemeProvider theme={carelonTheme}>
  <Button>Carelon Button</Button>
</ThemeProvider>

// Elevance theme
<ThemeProvider theme={elevanceTheme}>
  <Button>Elevance Button</Button>
</ThemeProvider>
```

---

## 🔄 Loading State Pattern

```tsx
import { useState } from 'react';
import { CircularProgress } from '@mui/icons-material';

function MyComponent() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await saveData();
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button 
      onClick={handleSubmit}
      disabled={loading}
      leadingIcon={loading ? <CircularProgress size={16} /> : undefined}
    >
      {loading ? 'Saving...' : 'Save'}
    </Button>
  );
}
```

---

## 📱 Responsive Behavior

```tsx
// Mobile: Full width
<Button fullWidth>Mobile Button</Button>

// Desktop: Auto width
<Button>Desktop Button</Button>

// Responsive pattern
<Button fullWidth={{ xs: true, md: false }}>
  Responsive Button
</Button>
```

---

## 🎯 Examples in Storybook

View live examples in Storybook:
- All Variants (Primary, Secondary, Tertiary)
- All Sizes (XSmall to XLarge)
- All Types (Default, Safe, Warning, Alert)
- With Icons (Leading, Trailing, Icon-Only)
- States (Default, Hover, Active, Disabled, Focus)

**Navigate to:** Components → Button

---

## 🆘 Troubleshooting

### **Button not clickable?**
- Check `disabled` prop
- Verify `onClick` handler is defined
- Check z-index conflicts

### **Icon not showing?**
- Verify icon is imported from `@mui/icons-material`
- Check `leadingIcon` or `trailingIcon` prop
- Ensure icon is wrapped in React element

### **Button too small?**
- Use `size` prop to adjust
- Minimum recommended: `small` (32px)

### **Styling not working?**
- Ensure `ThemeProvider` wraps your app
- Check theme is imported correctly
- Avoid custom CSS overrides

---

## 📞 Support

For questions or issues:
- **Storybook:** View live examples
- **Component API:** See `COMPONENT_API_REFERENCE.md`

---

## ✅ Summary

**The Button component is the standard way to create interactive buttons in Lean IDS.**

- Import from `@ajaysoni7832/lean-ids-components`
- Use `children` for button text (required)
- Choose appropriate `variant` (primary/secondary/tertiary)
- Use `buttonType` for contextual colors (safe/warning/alert)
- Add icons with `leadingIcon` or `trailingIcon`
- Always provide `aria-label` for icon-only buttons

**Consistent buttons = Better user experience!** 🎉
