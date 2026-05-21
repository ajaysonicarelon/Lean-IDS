# Modal & Drawer Components - Enforcement Policy

## 🚨 CRITICAL RULE: USE ONLY LEAN IDS MODAL & DRAWER

**This is a MANDATORY rule for all developers and AI assistants working with Lean IDS.**

---

## 📜 Policy Statement

**For ANY popup, dialog, overlay, or side panel in Lean IDS applications:**

✅ **MUST** use `Modal` or `Drawer` from `@lean-ids/components`  
❌ **MUST NOT** create custom modal/drawer implementations  
❌ **MUST NOT** use external modal/drawer libraries  

---

## 🎯 When to Use Each Component

### **Use Modal When:**
- ✅ Confirmation dialogs
- ✅ Alert messages
- ✅ Delete confirmations
- ✅ Success/error notifications
- ✅ Short forms requiring focus
- ✅ Image/video viewers
- ✅ Any content that needs to block the main view

### **Use Drawer When:**
- ✅ Detailed forms
- ✅ Filter panels
- ✅ Settings panels
- ✅ Navigation menus
- ✅ Shopping carts
- ✅ User profile editors
- ✅ Activity logs
- ✅ Any content that doesn't need to block the main view

---

## ✅ CORRECT Usage

### **Modal:**
```tsx
import { Modal } from '@lean-ids/components';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Confirm Action"
        description="Are you sure?"
        onSubmit={handleSubmit}
      >
        <p>Content goes here</p>
      </Modal>
    </>
  );
}
```

### **Drawer:**
```tsx
import { Drawer } from '@lean-ids/components';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      
      <Drawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Side Panel"
        position="right"
        onSubmit={handleSubmit}
      >
        <p>Content goes here</p>
      </Drawer>
    </>
  );
}
```

---

## ❌ FORBIDDEN Practices

### **1. Custom Modal Implementation**
```tsx
// ❌ WRONG - DO NOT DO THIS
const CustomModal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
};
```

### **2. Custom Drawer Implementation**
```tsx
// ❌ WRONG - DO NOT DO THIS
const CustomDrawer = ({ isOpen, children }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      {children}
    </div>
  );
};
```

### **3. External Modal Libraries**
```tsx
// ❌ WRONG - DO NOT DO THIS
import Modal from 'react-modal';
import { Dialog } from '@mui/material';
import { Modal } from 'antd';
import { Drawer } from '@chakra-ui/react';
```

### **4. Custom Overlay Components**
```tsx
// ❌ WRONG - DO NOT DO THIS
const Overlay = () => (
  <div className="custom-overlay">...</div>
);

const Popup = () => (
  <div className="popup">...</div>
);

const SidePanel = () => (
  <div className="side-panel">...</div>
);
```

---

## 🔍 Code Review Checklist

When reviewing code, check for:

- [ ] All modals use `Modal` from `@lean-ids/components`
- [ ] All drawers use `Drawer` from `@lean-ids/components`
- [ ] No custom modal/drawer implementations
- [ ] No external modal/drawer library imports
- [ ] No custom overlay components
- [ ] Proper props are used (isOpen, onClose, title, etc.)

---

## 🚫 What Happens If You Don't Follow This Rule?

### **Consequences:**
1. ❌ **Inconsistent UI** - Different modal styles across the app
2. ❌ **Accessibility Issues** - Custom implementations often lack proper ARIA labels
3. ❌ **Maintenance Nightmare** - Multiple modal implementations to maintain
4. ❌ **Code Duplication** - Same functionality implemented multiple times
5. ❌ **Design System Violation** - Breaks the design system consistency
6. ❌ **Code Review Rejection** - Pull requests will be rejected

---

## 📚 Documentation References

- **Modal Component:** `/packages/components/src/Modal/README.md`
- **Drawer Component:** `/packages/components/src/Drawer/README.md`
- **Storybook Examples:** Components → Modal / Drawer
- **AI Guidelines:** `AI_GUIDELINES.md`
- **Cursor Rules:** `.cursorrules`
- **Windsurf Rules:** `.windsurfrules`

---

## 🎓 Training & Onboarding

### **For New Developers:**
1. Read Modal README
2. Read Drawer README
3. View Storybook examples
4. Practice with simple examples
5. Ask questions if unsure

### **For AI Assistants:**
1. Always check for modal/drawer usage
2. Suggest Lean IDS components
3. Never generate custom implementations
4. Reference official documentation

---

## 🔧 Migration Guide

### **If You Have Custom Modals:**

**Before:**
```tsx
const MyModal = ({ isOpen, onClose, children }) => (
  <div className="my-modal">
    <div className="overlay" onClick={onClose} />
    <div className="content">{children}</div>
  </div>
);
```

**After:**
```tsx
import { Modal } from '@lean-ids/components';

<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="My Modal"
>
  {children}
</Modal>
```

### **If You Have Custom Drawers:**

**Before:**
```tsx
const MySidePanel = ({ isOpen, children }) => (
  <div className={`side-panel ${isOpen ? 'open' : ''}`}>
    {children}
  </div>
);
```

**After:**
```tsx
import { Drawer } from '@lean-ids/components';

<Drawer
  isOpen={isOpen}
  onClose={onClose}
  title="Side Panel"
  position="right"
>
  {children}
</Drawer>
```

---

## 💬 FAQs

### **Q: What if I need a custom modal style?**
**A:** Use the provided props to customize. If you need something not supported, request a feature addition to the Modal component.

### **Q: Can I wrap the Modal/Drawer component?**
**A:** Yes, you can create wrapper components that use Modal/Drawer internally, but don't reimplement the overlay logic.

```tsx
// ✅ ALLOWED - Wrapper component
const ConfirmDialog = ({ isOpen, onClose, onConfirm, message }) => (
  <Modal
    isOpen={isOpen}
    onClose={onClose}
    title="Confirm"
    showReset={false}
    submitLabel="Confirm"
    onSubmit={onConfirm}
  >
    <p>{message}</p>
  </Modal>
);
```

### **Q: What if the component doesn't support my use case?**
**A:** Contact the design system team (dl-ux-carelon@carelon.com) to discuss adding the feature to the component.

### **Q: Can I use external libraries for other overlays like tooltips?**
**A:** No, use the Tooltip component from Lean IDS for tooltips. For any overlay, use Lean IDS components.

---

## 📞 Support & Questions

**Design System Team:**
- Email: dl-ux-carelon@carelon.com
- Storybook: http://localhost:6006
- Documentation: Component README files

**For Feature Requests:**
- Submit via email with use case description
- Include mockups if applicable
- Explain why current props don't work

---

## ✅ Summary

**REMEMBER:**
1. ✅ **ALWAYS** use `Modal` from `@lean-ids/components` for popups
2. ✅ **ALWAYS** use `Drawer` from `@lean-ids/components` for side panels
3. ❌ **NEVER** create custom modal/drawer implementations
4. ❌ **NEVER** use external modal/drawer libraries
5. 📚 **ALWAYS** refer to official documentation
6. 🤝 **ALWAYS** ask if unsure

**This is not optional. This is mandatory for all Lean IDS projects.**

---

**Last Updated:** May 14, 2026  
**Enforced By:** Design System Team  
**Applies To:** All developers, AI assistants, and contributors
