# Tabs Component

**The official Tabs navigation component for Lean IDS with parent/child hierarchy support.**

---

## 📋 Overview

The Tabs component provides a flexible tab navigation system with support for two-level hierarchy (Parent and Child tabs), icons, badges, and various customization options.

### **Key Features:**
- ✅ **Parent (Primary) Tabs** - Larger tabs with bottom border
- ✅ **Child (Secondary) Tabs** - Smaller tabs with background highlight
- ✅ **Icons** - Leading and trailing icon support
- ✅ **Badges** - Count indicators
- ✅ **Disabled State** - Prevent interaction
- ✅ **Fully Accessible** - ARIA attributes and keyboard support

---

## 🎯 Usage Guidelines

### **IMPORTANT Rules (from Figma):**

1. ⚠️ **Tabs should never interfere with global navigation**
2. ✅ **Always use hierarchy:** Parent (Primary) > Child (Secondary)
3. ✅ **Parent tabs must be above child tabs** in visual hierarchy
4. ✅ **Child tabs subdivide parent tab content**
5. ⚠️ **Child tabs should not be more than one level deep**
6. ⚠️ **Use max 5-6 tabs horizontally** (consider scroll)

---

## 🚀 Quick Start

### **Basic Parent Tabs:**

```tsx
import { Tabs } from '@ajaysoni7832/lean-ids-components';
import { useState } from 'react';

function MyComponent() {
  const [activeTab, setActiveTab] = useState('1');

  const tabs = [
    { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
    { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12 },
    { id: '3', label: 'Reports', leadingIcon: 'Description', count: 7 },
  ];

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onChange={setActiveTab}
      type="parent"
    />
  );
}
```

### **Basic Child Tabs:**

```tsx
<Tabs
  tabs={childTabs}
  activeTab={activeChildTab}
  onChange={setActiveChildTab}
  type="child"
/>
```

---

## 📖 Complete API

### **TabsProps:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `TabItem[]` | **Required** | Array of tab items |
| `activeTab` | `string` | **Required** | Active tab ID |
| `onChange` | `(tabId: string) => void` | **Required** | Tab change handler |
| `type` | `'parent' \| 'child'` | `'parent'` | Tab type/hierarchy |
| `showLeadingIcon` | `boolean` | `true` | Show leading icons |
| `showTrailingIcon` | `boolean` | `false` | Show trailing icons |
| `showBadge` | `boolean` | `true` | Show badge counts |
| `className` | `string` | - | Custom CSS class |

### **TabItem Type:**

```tsx
interface TabItem {
  id: string;              // Unique identifier
  label: string;           // Tab label text
  count?: number;          // Optional badge count
  leadingIcon?: string;    // Leading icon name
  trailingIcon?: string;   // Trailing icon name
  disabled?: boolean;      // Disabled state
}
```

---

## 💡 Common Use Cases

### **1. Parent Tabs Only:**

```tsx
<Tabs
  tabs={[
    { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
    { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12 },
    { id: '3', label: 'Reports', leadingIcon: 'Description', count: 7 },
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
  type="parent"
/>
```

### **2. Child Tabs Only:**

```tsx
<Tabs
  tabs={[
    { id: '1', label: 'Overview', leadingIcon: 'Home', count: 3 },
    { id: '2', label: 'Details', leadingIcon: 'Info', count: 8 },
    { id: '3', label: 'History', leadingIcon: 'History', count: 15 },
  ]}
  activeTab={activeChildTab}
  onChange={setActiveChildTab}
  type="child"
/>
```

### **3. Parent + Child Hierarchy:**

```tsx
function TabbedContent() {
  const [activeParent, setActiveParent] = useState('1');
  const [activeChild, setActiveChild] = useState('1');

  return (
    <div>
      {/* Parent Tabs */}
      <Tabs
        tabs={parentTabs}
        activeTab={activeParent}
        onChange={setActiveParent}
        type="parent"
      />
      
      {/* Child Tabs */}
      <div style={{ marginTop: '16px' }}>
        <Tabs
          tabs={childTabs}
          activeTab={activeChild}
          onChange={setActiveChild}
          type="child"
        />
      </div>
      
      {/* Content */}
      <div>
        {renderContent(activeParent, activeChild)}
      </div>
    </div>
  );
}
```

### **4. Tabs Without Icons:**

```tsx
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
  type="parent"
  showLeadingIcon={false}
/>
```

### **5. Tabs Without Badges:**

```tsx
<Tabs
  tabs={tabs}
  activeTab={activeTab}
  onChange={setActiveTab}
  type="parent"
  showBadge={false}
/>
```

### **6. Minimal Tabs (No Icons, No Badges):**

```tsx
<Tabs
  tabs={[
    { id: '1', label: 'Dashboard' },
    { id: '2', label: 'Analytics' },
    { id: '3', label: 'Reports' },
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
  type="parent"
  showLeadingIcon={false}
  showBadge={false}
/>
```

### **7. With Disabled Tabs:**

```tsx
<Tabs
  tabs={[
    { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
    { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12, disabled: true },
    { id: '3', label: 'Reports', leadingIcon: 'Description', count: 7 },
  ]}
  activeTab={activeTab}
  onChange={setActiveTab}
  type="parent"
/>
```

---

## 🎨 Visual Differences

### **Parent Tabs:**
- **Size:** Larger (16px font)
- **Padding:** 8px 16px
- **Active State:** Purple bottom border (2px)
- **Inactive State:** Gray bottom border (2px)
- **Font Weight:** Semibold (600) when active, Medium (500) when inactive

### **Child Tabs:**
- **Size:** Smaller (14px font)
- **Padding:** 4px 8px
- **Active State:** Purple background (#EFE6F8)
- **Inactive State:** Transparent background
- **Border Radius:** 4px
- **Font Weight:** Semibold (600) when active, Medium (500) when inactive

---

## 🎯 Design Specifications

### **Parent Tab (Active):**
- Font: Elevance Sans Semibold, 16px
- Color: #6222BC (primary-400)
- Border Bottom: 2px solid #6222BC
- Padding: 8px 16px

### **Parent Tab (Inactive):**
- Font: Elevance Sans Medium, 16px
- Color: #909090 (gray-600)
- Border Bottom: 2px solid #D5D5D5
- Padding: 8px 16px

### **Child Tab (Active):**
- Font: Elevance Sans Semibold, 14px
- Color: #6222BC (primary-400)
- Background: #EFE6F8 (primary-100)
- Border Radius: 4px
- Padding: 4px 8px

### **Child Tab (Inactive):**
- Font: Elevance Sans Medium, 14px
- Color: #909090 (gray-600)
- Background: Transparent
- Padding: 4px 8px

### **Badge (Active):**
- Background: #6222BC (primary-400)
- Color: #FFFFFF (white)
- Padding: 2px 6px
- Border Radius: 999px (pill)

### **Badge (Inactive):**
- Background: #F8F8F8 (gray-200)
- Border: 1px solid #464646 (gray-800)
- Color: #464646 (gray-800)
- Padding: 2px 6px
- Border Radius: 999px (pill)

---

## ♿ Accessibility

The Tabs component is fully accessible:

- ✅ **ARIA Attributes:** `role="tab"`, `aria-selected`, `aria-disabled`
- ✅ **Keyboard Support:** Tab, Enter, Space
- ✅ **Focus Management:** Proper focus indicators
- ✅ **Screen Readers:** Descriptive labels

---

## 🔒 Best Practices

### **DO:**
✅ Use parent tabs for main navigation  
✅ Use child tabs to subdivide parent content  
✅ Keep parent tabs above child tabs  
✅ Limit to 5-6 tabs horizontally  
✅ Use clear, concise labels  
✅ Show badge counts when relevant  
✅ Disable tabs when content is unavailable  

### **DON'T:**
❌ Nest child tabs more than one level  
❌ Use tabs for global navigation  
❌ Use too many tabs (causes scroll issues)  
❌ Mix tab types in the same row  
❌ Use vague labels  
❌ Forget to handle tab changes  

---

## 🚫 Anti-Patterns

### **❌ WRONG - Too Many Levels:**
```tsx
// DON'T DO THIS
<Tabs type="parent" />
  <Tabs type="child" />
    <Tabs type="grandchild" /> {/* ❌ Too deep! */}
```

### **✅ CORRECT - Max Two Levels:**
```tsx
// DO THIS
<Tabs type="parent" />
<Tabs type="child" />
```

### **❌ WRONG - Child Above Parent:**
```tsx
// DON'T DO THIS
<Tabs type="child" />
<Tabs type="parent" />
```

### **✅ CORRECT - Parent Above Child:**
```tsx
// DO THIS
<Tabs type="parent" />
<Tabs type="child" />
```

---

## 📊 Examples in Storybook

View live examples in Storybook:
- Parent Tabs
- Child Tabs
- Parent Tabs (No Icons)
- Parent Tabs (No Badges)
- Parent Tabs (Minimal)
- Child Tabs (No Icons)
- Child Tabs (No Badges)
- Child Tabs (Minimal)
- With Disabled Tabs
- Hierarchy Example
- Many Tabs
- Long Labels
- With Trailing Icons

**Navigate to:** Components → Tabs

---

## 🆘 Troubleshooting

### **Tab not changing?**
- Verify `onChange` handler is updating state
- Check that `activeTab` prop is controlled
- Ensure tab IDs are unique

### **Icons not showing?**
- Set `showLeadingIcon={true}`
- Verify icon names are correct
- Check Icon component is available

### **Badges not showing?**
- Set `showBadge={true}`
- Ensure `count` property is defined
- Check count is a number

### **Styling issues?**
- Verify `type` prop is correct ('parent' or 'child')
- Check for CSS conflicts
- Ensure theme is properly configured

---

## 📞 Support

For questions or issues:
- **Email:** dl-ux-carelon@carelon.com
- **Storybook:** View live examples
- **GitHub:** Report issues

---

## ✅ Summary

**The Tabs component provides flexible tab navigation with parent/child hierarchy support.**

- Import from `@ajaysoni7832/lean-ids-components`
- Use for content organization
- Follow hierarchy guidelines
- Limit to 5-6 tabs horizontally
- Support icons, badges, and disabled states

**Consistent tabs = Better navigation!** 🎉
