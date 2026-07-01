# InputField Component

**Text input component for forms and data entry in Lean IDS.**

---

## 📋 Overview

The InputField component provides a consistent, accessible text input with label, helper text, and error states.

### **When to Use:**
- ✅ Single-line text input
- ✅ Email, password, number inputs
- ✅ Form fields with validation
- ✅ Search inputs

### **When NOT to Use:**
- ❌ Multi-line text → Use `TextArea` component
- ❌ Dropdown selection → Use `Select` component
- ❌ Date/time → Use specialized date pickers

---

## 🚀 Quick Start

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
```

```tsx
import { ThemeProvider } from 'styled-components';
import { carelonTheme } from '@ajaysoni7832/lean-ids-tokens';
import { InputField } from '@ajaysoni7832/lean-ids-components';

function App() {
  return (
    <ThemeProvider theme={carelonTheme}>
      <InputField 
        label="Email"
        placeholder="Enter your email"
        type="email"
      />
    </ThemeProvider>
  );
}
```

---

## 📖 Complete API

### **Required Props:**

| Prop | Type | Description |
|------|------|-------------|
| `label` | `string` | Input label text |

### **Optional Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'` | Input type |
| `placeholder` | `string` | - | Placeholder text |
| `value` | `string` | - | Controlled value |
| `defaultValue` | `string` | - | Uncontrolled default value |
| `onChange` | `(e: ChangeEvent) => void` | - | Change handler |
| `onBlur` | `(e: FocusEvent) => void` | - | Blur handler |
| `onFocus` | `(e: FocusEvent) => void` | - | Focus handler |
| `error` | `boolean` | `false` | Error state |
| `errorMessage` | `string` | - | Error message text |
| `helperText` | `string` | - | Helper text below input |
| `disabled` | `boolean` | `false` | Disable input |
| `required` | `boolean` | `false` | Required field |
| `readOnly` | `boolean` | `false` | Read-only state |
| `maxLength` | `number` | - | Maximum character length |
| `autoComplete` | `string` | - | Autocomplete attribute |
| `autoFocus` | `boolean` | `false` | Auto-focus on mount |
| `fullWidth` | `boolean` | `false` | Full width input |
| `className` | `string` | - | Custom CSS class |

---

## 💡 Common Use Cases

### **1. Basic Text Input**

```tsx
<InputField 
  label="Full Name"
  placeholder="Enter your name"
/>
```

### **2. Email Input**

```tsx
<InputField 
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  autoComplete="email"
  required
/>
```

### **3. Password Input**

```tsx
<InputField 
  label="Password"
  type="password"
  placeholder="Enter password"
  autoComplete="current-password"
  required
/>
```

### **4. Input with Helper Text**

```tsx
<InputField 
  label="Username"
  placeholder="Choose a username"
  helperText="Must be 3-20 characters"
/>
```

### **5. Input with Error**

```tsx
<InputField 
  label="Email"
  type="email"
  value={email}
  error={!isValidEmail}
  errorMessage="Please enter a valid email address"
/>
```

### **6. Controlled Input**

```tsx
const [value, setValue] = useState('');

<InputField 
  label="Name"
  value={value}
  onChange={(e) => setValue(e.target.value)}
/>
```

### **7. Disabled Input**

```tsx
<InputField 
  label="Account ID"
  value="12345"
  disabled
/>
```

### **8. Read-Only Input**

```tsx
<InputField 
  label="Created Date"
  value="2026-07-02"
  readOnly
/>
```

### **9. Number Input**

```tsx
<InputField 
  label="Age"
  type="number"
  placeholder="Enter your age"
  min={0}
  max={120}
/>
```

### **10. Full Width Input**

```tsx
<InputField 
  label="Address"
  placeholder="Enter full address"
  fullWidth
/>
```

---

## ♿ Accessibility

- ✅ **Labels:** Always associated with input
- ✅ **Error Messages:** Announced to screen readers
- ✅ **Required Fields:** Properly marked
- ✅ **Keyboard Navigation:** Full keyboard support
- ✅ **Focus Indicators:** Clear focus states

---

## 🔒 Best Practices

### **DO:**
✅ Always provide a label  
✅ Use appropriate input types  
✅ Show clear error messages  
✅ Use helper text for guidance  
✅ Mark required fields  
✅ Provide autocomplete attributes  

### **DON'T:**
❌ Use placeholder as label  
❌ Forget error messages  
❌ Make inputs too narrow  
❌ Disable without reason  
❌ Use generic error messages  

---

## 📞 Support

For questions: See `COMPONENT_API_REFERENCE.md`

---

## ✅ Summary

**Use InputField for all text input needs in Lean IDS applications.**

- Always provide a `label`
- Use appropriate `type` for input
- Show `errorMessage` for validation
- Use `helperText` for guidance

**Consistent inputs = Better forms!** 🎉
