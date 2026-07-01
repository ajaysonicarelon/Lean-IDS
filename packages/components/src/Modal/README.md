# Modal Component

**The official Modal component for Lean IDS. Use this component for all popup dialogs.**

⚠️ **IMPORTANT:** Do NOT create custom modal/popup components. Always use this Modal component for consistency across the design system.

---

## 📋 Overview

The Modal component is a reusable dialog overlay that appears centered on the screen. It's designed to handle all modal use cases in Lean IDS applications.

### **When to Use:**
- ✅ Confirmation dialogs
- ✅ Alert messages
- ✅ Forms that require user focus
- ✅ Delete confirmations
- ✅ Success/error notifications
- ✅ Any content that needs user attention

### **When NOT to Use:**
- ❌ For side panels → Use `Drawer` component instead
- ❌ For tooltips → Use `Tooltip` component instead
- ❌ For inline messages → Use `InlineMessage` component instead

---

## 🚀 Quick Start

### **Basic Usage:**

```tsx
import { Modal } from '@ajaysoni7832/lean-ids-components';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        description="Are you sure you want to proceed?"
        onSubmit={() => {
          // Handle submit
          setIsOpen(false);
        }}
      >
        <p>This action cannot be undone.</p>
      </Modal>
    </>
  );
}
```

---

## 📖 Complete API

### **Required Props:**

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Controls modal visibility |
| `onClose` | `() => void` | Called when modal should close |
| `title` | `string` | Modal title in header |
| `children` | `ReactNode` | Modal body content |

### **Optional Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `description` | `string` | - | Subtitle text below title |
| `showReset` | `boolean` | `true` | Show reset button in footer |
| `resetLabel` | `string` | `'Reset'` | Reset button text |
| `onReset` | `() => void` | - | Reset button callback |
| `showCancel` | `boolean` | `true` | Show cancel button |
| `cancelLabel` | `string` | `'Cancel'` | Cancel button text |
| `onCancel` | `() => void` | - | Cancel callback (defaults to onClose) |
| `showSubmit` | `boolean` | `true` | Show submit button |
| `submitLabel` | `string` | `'Submit'` | Submit button text |
| `onSubmit` | `() => void` | - | Submit button callback |
| `submitType` | `'default' \| 'safe' \| 'warning' \| 'alert'` | `'default'` | Submit button variant |
| `customFooter` | `ReactNode` | - | Replace default footer |
| `width` | `number` | `600` | Modal width in pixels |
| `height` | `number` | `442` | Modal body height in pixels |
| `closeOnOverlayClick` | `boolean` | `true` | Close when clicking outside |
| `closeOnEscape` | `boolean` | `true` | Close on Escape key |
| `className` | `string` | - | Custom CSS class |

---

## 💡 Common Use Cases

### **1. Confirmation Dialog**

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Delete Item?"
  description="This action cannot be undone"
  showReset={false}
  submitLabel="Delete"
  submitType="alert"
  onSubmit={handleDelete}
>
  <p>Are you sure you want to delete this item?</p>
</Modal>
```

### **2. Form Modal**

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit Profile"
  description="Update your information"
  submitLabel="Save Changes"
  onSubmit={handleSave}
  onReset={handleReset}
>
  <form>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <textarea placeholder="Bio" />
  </form>
</Modal>
```

### **3. Success Message**

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Success!"
  description="Your changes have been saved"
  showReset={false}
  showCancel={false}
  submitLabel="OK"
  onSubmit={() => setIsOpen(false)}
>
  <p>✓ Your profile has been updated successfully.</p>
</Modal>
```

### **4. Warning Dialog**

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Warning"
  description="Please review before proceeding"
  showReset={false}
  submitLabel="Proceed Anyway"
  submitType="warning"
  onSubmit={handleProceed}
>
  <p>⚠️ This action may have unintended consequences.</p>
</Modal>
```

### **5. Custom Footer**

```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Multi-Step Form"
  customFooter={
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <Button variant="tertiary" onClick={handlePrevious}>
        Previous
      </Button>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Button variant="secondary" onClick={() => setIsOpen(false)}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleNext}>
          Next
        </Button>
      </div>
    </div>
  }
>
  <p>Step 1 of 3</p>
</Modal>
```

---

## 🎨 Styling

The Modal uses Lean IDS design tokens and cannot be customized beyond the provided props. This ensures consistency across all applications.

**Default Styles:**
- Width: 600px
- Border radius: 12px
- Background: White
- Overlay: rgba(0, 0, 0, 0.5)
- Shadow: Elevation 3

**To customize dimensions:**
```tsx
<Modal
  width={800}      // Custom width
  height={600}     // Custom body height
  {...otherProps}
>
  {children}
</Modal>
```

---

## ♿ Accessibility

The Modal component is fully accessible:

- ✅ **Keyboard Navigation:** Escape key closes modal
- ✅ **Focus Management:** Traps focus within modal
- ✅ **ARIA Labels:** Proper labeling for screen readers
- ✅ **Semantic HTML:** Uses proper dialog structure

---

## 🔒 Best Practices

### **DO:**
✅ Use Modal for focused user actions  
✅ Keep content concise and scannable  
✅ Provide clear action buttons  
✅ Use appropriate button types (alert for destructive actions)  
✅ Close modal after successful actions  

### **DON'T:**
❌ Create custom modal components  
❌ Nest modals inside modals  
❌ Put too much content (use Drawer for complex forms)  
❌ Use modals for non-critical information  
❌ Forget to handle the close action  

---

## 🚫 Anti-Patterns

### **❌ WRONG - Custom Modal:**
```tsx
// DON'T DO THIS
const CustomModal = () => (
  <div className="my-custom-modal">
    <div className="modal-content">
      {/* Custom implementation */}
    </div>
  </div>
);
```

### **✅ CORRECT - Use Lean IDS Modal:**
```tsx
// DO THIS
import { Modal } from '@ajaysoni7832/lean-ids-components';

<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="My Modal"
>
  {content}
</Modal>
```

---

## 📊 Component Hierarchy

```
Modal (from @ajaysoni7832/lean-ids-components)
├── Overlay (backdrop)
└── ModalContainer
    ├── Header
    │   ├── Title
    │   ├── Description
    │   └── CloseButton (Icon)
    ├── Body
    │   └── {children}
    └── Footer
        ├── Reset Button (optional)
        ├── Cancel Button (optional)
        └── Submit Button (optional)
```

---

## 🔄 State Management

The Modal component is **controlled** - you manage the open/closed state:

```tsx
const [isModalOpen, setIsModalOpen] = useState(false);

// Open modal
setIsModalOpen(true);

// Close modal
setIsModalOpen(false);
```

---

## 📱 Responsive Behavior

- **Desktop:** 600px width (default)
- **Tablet:** Max 90vw width
- **Mobile:** Max 90vw width, full height scrollable

---

## 🎯 Examples in Storybook

View live examples in Storybook:
- Default Modal
- Form Modal
- Confirmation Dialog
- Warning Dialog
- Custom Footer
- Scrollable Content
- Small Modal

**Navigate to:** Components → Modal

---

## 🆘 Troubleshooting

### **Modal not appearing?**
- Check that `isOpen={true}`
- Verify z-index conflicts
- Ensure Modal is rendered in DOM

### **Can't close modal?**
- Verify `onClose` is implemented
- Check `closeOnOverlayClick` and `closeOnEscape` props
- Ensure state is being updated

### **Content not scrolling?**
- Modal body is scrollable by default
- Check content height vs modal height
- Verify no CSS overflow conflicts

---

## 📞 Support

For questions or issues:
- **Email:** dl-ux-carelon@carelon.com
- **Storybook:** View live examples
- **GitHub:** Report issues

---

## ✅ Summary

**The Modal component is the ONLY way to create popups in Lean IDS applications.**

- Import from `@ajaysoni7832/lean-ids-components`
- Use for all dialog/popup needs
- Do NOT create custom modal components
- Follow the examples and best practices

**Consistent modals = Better user experience!** 🎉
