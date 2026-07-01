# Drawer Component

**The official Drawer (Side Panel) component for Lean IDS. Use this component for all side panel needs.**

⚠️ **IMPORTANT:** Do NOT create custom drawer/side panel components. Always use this Drawer component for consistency across the design system.

---

## 📋 Overview

The Drawer component is a reusable side panel that slides in from the left or right edge of the screen. It's designed to handle all drawer/side panel use cases in Lean IDS applications.

### **When to Use:**
- ✅ Detailed forms
- ✅ Filter panels
- ✅ Settings panels
- ✅ Navigation menus
- ✅ Shopping carts
- ✅ User profile editors
- ✅ Activity logs
- ✅ Any content that doesn't need to block the entire screen

### **When NOT to Use:**
- ❌ For centered dialogs → Use `Modal` component instead
- ❌ For tooltips → Use `Tooltip` component instead
- ❌ For dropdowns → Use `Select` component instead

---

## 🚀 Quick Start

### **Basic Usage:**

```tsx
import { Drawer } from '@ajaysoni7832/lean-ids-components';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Drawer</button>
      
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Side panel Heading"
        description="Put short description here"
        position="right"
        onSubmit={() => {
          // Handle submit
          setIsOpen(false);
        }}
      >
        <p>Your drawer content goes here</p>
      </Drawer>
    </>
  );
}
```

---

## 📖 Complete API

### **Required Props:**

| Prop | Type | Description |
|------|------|-------------|
| `isOpen` | `boolean` | Controls drawer visibility |
| `onClose` | `() => void` | Called when drawer should close |
| `title` | `string` | Drawer title in header |
| `children` | `ReactNode` | Drawer body content |

### **Optional Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `description` | `string` | - | Subtitle text below title |
| `position` | `'left' \| 'right'` | `'right'` | Side to slide from |
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
| `width` | `number` | `600` | Drawer width in pixels |
| `closeOnOverlayClick` | `boolean` | `true` | Close when clicking outside |
| `closeOnEscape` | `boolean` | `true` | Close on Escape key |
| `className` | `string` | - | Custom CSS class |

---

## 💡 Common Use Cases

### **1. Filter Panel**

```tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Filters"
  description="Refine your search"
  submitLabel="Apply Filters"
  onSubmit={handleApplyFilters}
  onReset={handleClearFilters}
>
  <div>
    <h4>Category</h4>
    <Checkbox label="Electronics" />
    <Checkbox label="Clothing" />
    
    <h4>Price Range</h4>
    <input type="range" min="0" max="1000" />
  </div>
</Drawer>
```

### **2. User Profile Editor**

```tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Edit Profile"
  description="Update your information"
  position="right"
  width={600}
  submitLabel="Save Changes"
  onSubmit={handleSave}
>
  <form>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="Email" />
    <input type="tel" placeholder="Phone" />
    <textarea placeholder="Bio" rows={4} />
  </form>
</Drawer>
```

### **3. Navigation Menu (Left Side)**

```tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Menu"
  position="left"
  width={300}
  showReset={false}
  showCancel={false}
  showSubmit={false}
>
  <nav>
    <a href="/dashboard">Dashboard</a>
    <a href="/profile">Profile</a>
    <a href="/settings">Settings</a>
    <a href="/logout">Logout</a>
  </nav>
</Drawer>
```

### **4. Activity Log (View Only)**

```tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Activity Log"
  description="Recent system activities"
  showReset={false}
  showSubmit={false}
  cancelLabel="Close"
>
  <div>
    {activities.map(activity => (
      <div key={activity.id}>
        <p>{activity.action}</p>
        <small>{activity.timestamp}</small>
      </div>
    ))}
  </div>
</Drawer>
```

### **5. Shopping Cart**

```tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Shopping Cart"
  description={`${itemCount} items`}
  position="right"
  showReset={false}
  cancelLabel="Continue Shopping"
  submitLabel="Checkout"
  onSubmit={handleCheckout}
>
  <div>
    {cartItems.map(item => (
      <CartItem key={item.id} {...item} />
    ))}
    <div>Total: ${total}</div>
  </div>
</Drawer>
```

---

## 🎨 Styling

The Drawer uses Lean IDS design tokens and cannot be customized beyond the provided props. This ensures consistency across all applications.

**Default Styles:**
- Width: 600px
- Height: Full screen
- Background: White
- Overlay: rgba(0, 0, 0, 0.5)
- Shadow: Elevation 2

**To customize width:**
```tsx
<Drawer
  width={400}      // Narrow drawer
  {...otherProps}
>
  {children}
</Drawer>

<Drawer
  width={800}      // Wide drawer
  {...otherProps}
>
  {children}
</Drawer>
```

---

## ♿ Accessibility

The Drawer component is fully accessible:

- ✅ **Keyboard Navigation:** Escape key closes drawer
- ✅ **Focus Management:** Traps focus within drawer
- ✅ **ARIA Labels:** Proper labeling for screen readers
- ✅ **Semantic HTML:** Uses proper panel structure

---

## 🔒 Best Practices

### **DO:**
✅ Use Drawer for side content that doesn't block the main view  
✅ Use left position for navigation menus  
✅ Use right position for forms and details  
✅ Keep drawer width appropriate for content  
✅ Provide clear action buttons  

### **DON'T:**
❌ Create custom drawer components  
❌ Use drawer for critical alerts (use Modal instead)  
❌ Make drawer too wide (max 800px recommended)  
❌ Nest drawers inside drawers  
❌ Forget to handle the close action  

---

## 🚫 Anti-Patterns

### **❌ WRONG - Custom Drawer:**
```tsx
// DON'T DO THIS
const CustomDrawer = () => (
  <div className="my-custom-drawer">
    <div className="drawer-content">
      {/* Custom implementation */}
    </div>
  </div>
);
```

### **✅ CORRECT - Use Lean IDS Drawer:**
```tsx
// DO THIS
import { Drawer } from '@ajaysoni7832/lean-ids-components';

<Drawer
  isOpen={isOpen}
  onClose={onClose}
  title="My Drawer"
  position="right"
>
  {content}
</Drawer>
```

---

## 📊 Component Hierarchy

```
Drawer (from @ajaysoni7832/lean-ids-components)
├── Overlay (backdrop)
└── DrawerContainer
    ├── Header
    │   ├── Title
    │   ├── Description
    │   └── CloseButton (Icon)
    ├── Body (scrollable)
    │   └── {children}
    └── Footer
        ├── Reset Button (optional)
        ├── Cancel Button (optional)
        └── Submit Button (optional)
```

---

## 🔄 State Management

The Drawer component is **controlled** - you manage the open/closed state:

```tsx
const [isDrawerOpen, setIsDrawerOpen] = useState(false);

// Open drawer
setIsDrawerOpen(true);

// Close drawer
setIsDrawerOpen(false);
```

---

## 📱 Responsive Behavior

- **Desktop:** 600px width (default)
- **Tablet:** Max 90vw width
- **Mobile:** Max 90vw width, full height

**Recommended widths:**
- Navigation: 300px
- Filters: 400px
- Forms: 600px
- Details: 600-800px

---

## 🎯 Examples in Storybook

View live examples in Storybook:
- Default Drawer (Right)
- Left Position Drawer
- Form Drawer
- Filter Panel
- View-Only Drawer
- Narrow Drawer (400px)
- Wide Drawer (800px)

**Navigate to:** Components → Drawer

---

## 🆘 Troubleshooting

### **Drawer not appearing?**
- Check that `isOpen={true}`
- Verify z-index conflicts
- Ensure Drawer is rendered in DOM

### **Can't close drawer?**
- Verify `onClose` is implemented
- Check `closeOnOverlayClick` and `closeOnEscape` props
- Ensure state is being updated

### **Content not scrolling?**
- Drawer body is scrollable by default
- Check content height
- Verify no CSS overflow conflicts

### **Drawer appears on wrong side?**
- Check `position` prop (`'left'` or `'right'`)
- Default is `'right'`

---

## 🔄 Modal vs Drawer

**When to use Modal:**
- Critical actions requiring immediate attention
- Confirmations and alerts
- Short forms
- Centered focus

**When to use Drawer:**
- Detailed forms
- Filters and settings
- Navigation
- Supplementary content
- Content that doesn't need to block the main view

---

## 📞 Support

For questions or issues:
- **Email:** dl-ux-carelon@carelon.com
- **Storybook:** View live examples
- **GitHub:** Report issues

---

## ✅ Summary

**The Drawer component is the ONLY way to create side panels in Lean IDS applications.**

- Import from `@ajaysoni7832/lean-ids-components`
- Use for all drawer/side panel needs
- Do NOT create custom drawer components
- Follow the examples and best practices

**Consistent drawers = Better user experience!** 🎉
