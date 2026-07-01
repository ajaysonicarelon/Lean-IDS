# Component API Audit - Actual Implementation vs Documentation

**Purpose:** Document the ACTUAL API of each component to fix documentation mismatches.

**Date:** July 1, 2026

---

## ✅ AUDITED COMPONENTS

### **1. Button**

#### **Actual Implementation:**
```tsx
// From Button.types.ts
interface ButtonProps {
  children: ReactNode;              // ✅ REQUIRED - Button text/content
  size?: ButtonSize;                // 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'
  variant?: ButtonVariant;          // 'primary' | 'secondary' | 'tertiary'
  buttonType?: ButtonType;          // 'default' | 'safe' | 'warning' | 'alert'
  disabled?: boolean;
  leadingIcon?: ReactNode;          // ✅ Icon BEFORE text
  trailingIcon?: ReactNode;         // ✅ Icon AFTER text
  showLabel?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  fullWidth?: boolean;
}
```

#### **Correct Usage:**
```tsx
// ✅ CORRECT
<Button variant="primary" size="medium">
  Click Me
</Button>

// ✅ CORRECT - With icon
<Button leadingIcon={<Icon name="Add" />}>
  Add Item
</Button>

// ❌ WRONG - These props don't exist!
<Button label="Click Me" />           // NO 'label' prop!
<Button icon={<Icon />} />            // NO 'icon' prop!
```

#### **Common Mistakes:**
- ❌ Using `label` prop (doesn't exist)
- ❌ Using `icon` prop (use `leadingIcon` or `trailingIcon`)
- ❌ Not providing `children`

---

### **2. MetricCard**

#### **Actual Implementation:**
```tsx
// From MetricCard.types.ts
interface MetricCardProps {
  variant?: 'basic' | 'filled' | 'set';
  metricName?: string;              // ✅ Use this, not 'label'
  value?: string | number;          // ✅ Metric value
  showChange?: boolean;
  changeValue?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  comparisonText?: string;
  showProgressBar?: boolean;
  progressValue?: number;
  showActionChip?: boolean;
  actionText?: string;
  actionType?: 'warning' | 'error' | 'info';
  onActionClick?: () => void;
  sectionHeading?: string;
  showInfoIcon?: boolean;
  onInfoClick?: () => void;
  showDropdown?: boolean;
  dropdownValue?: string;
  onDropdownChange?: () => void;
  metrics?: MetricData[];           // For 'set' variant
  className?: string;
}
```

#### **Correct Usage:**
```tsx
// ✅ CORRECT
<MetricCard
  variant="basic"
  metricName="Total Users"
  value="1,234"
  showChange={true}
  changeValue="+12%"
  changeType="positive"
/>

// ❌ WRONG
<MetricCard label="Total Users" value="1,234" />  // NO 'label' prop!
```

---

### **3. Table / TableToolbar**

#### **Critical Bug Found:**
- **File:** `TableToolbar.tsx`
- **Issue:** Missing `import { useState } from 'react'`
- **Status:** ✅ FIXED

#### **Actual Implementation:**
```tsx
// TableToolbar requires these props
interface TableToolbarProps {
  title?: string;
  description?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  showFilter?: boolean;
  filterOptions?: FilterOption[];
  selectedFilter?: string;
  onFilterChange?: (filterId: string) => void;
  showDownload?: boolean;
  onDownload?: () => void;
  downloadFormats?: Array<{ label: string; format: string }>;
  showSettings?: boolean;
  onSettingsClick?: () => void;
  customActions?: React.ReactNode;
  selectedCount?: number;
  bulkActions?: React.ReactNode;
}
```

---

### **4. InputField**

#### **Actual Implementation:**
```tsx
// From InputField.types.ts
interface InputFieldProps {
  label?: string;                   // ✅ Input label
  helperText?: string;              // ✅ Helper text below input
  helperTextState?: 'default' | 'info' | 'warning' | 'error';
  type?: InputType;                 // 'text' | 'password' | 'email' | etc.
  size?: 'xsmall' | 'small' | 'default' | 'large';
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  error?: boolean;
  showLabel?: boolean;
  showFieldImportance?: boolean;
  fieldImportanceVariant?: 'mandatory' | 'optional' | 'asterisk';
  showInlineText?: boolean;
  leadingIcon?: React.ReactNode;   // ✅ Icon at start
  trailingIcon?: React.ReactNode;  // ✅ Icon at end
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  name?: string;
  id?: string;
  className?: string;
}
```

#### **Correct Usage:**
```tsx
// ✅ CORRECT
<InputField
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  size="default"
/>

// ✅ CORRECT - With icons
<InputField
  label="Search"
  leadingIcon={<Icon name="Search" />}
  placeholder="Search..."
/>
```

---

### **5. Chip**

#### **Actual Implementation:**
```tsx
// From Chip.types.ts
interface ChipProps {
  label: string;                    // ✅ REQUIRED - Chip text
  size?: 'small' | 'medium' | 'large';
  variant?: 'filled' | 'outlined';
  type?: 'default' | 'success' | 'warning' | 'error' | 'neutral';
  leadingIcon?: ReactNode;          // ✅ Icon BEFORE text
  trailingIcon?: ReactNode;         // ✅ Icon AFTER text (close icon)
  onClick?: () => void;
  onTrailingIconClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  className?: string;
}
```

#### **Correct Usage:**
```tsx
// ✅ CORRECT
<Chip
  label="Active"
  type="success"
  size="small"
/>

// ✅ CORRECT - With remove icon
<Chip
  label="Tag"
  trailingIcon={<Icon name="Close" />}
  onTrailingIconClick={() => console.log('Remove')}
/>

// ❌ WRONG
<Chip>Active</Chip>               // NO children! Use 'label' prop
```

---

### **6. Table**

#### **Actual Implementation:**
```tsx
// From Table.types.ts
interface TableColumn {
  id: string;                       // ✅ Column identifier
  label: string;                    // ✅ Column header text
  accessor?: string | ((row: any) => any);
  sortable?: boolean;
  searchable?: boolean;
  resizable?: boolean;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  visible?: boolean;
  locked?: boolean;
  renderCell?: (value: any, row: any, rowIndex: number) => React.ReactNode;
}

interface TableProps {
  data: any[];                      // ✅ Array of data objects
  columns: TableColumn[];           // ✅ Column configuration
  selectable?: boolean;
  paginated?: boolean;
  itemsPerPage?: number;
  showSettings?: boolean;
  showActions?: boolean;
  actions?: TableAction[];
  onRowSelect?: (selectedIds: string[]) => void;
  onRowAction?: (action: string, row: any) => void;
  rowKey?: string;
  emptyMessage?: string;
  loading?: boolean;
  className?: string;
}
```

#### **Correct Usage:**
```tsx
// ✅ CORRECT
<Table
  columns={[
    { id: 'name', label: 'Name', accessor: 'name' },
    { id: 'email', label: 'Email', accessor: 'email' },
    { id: 'status', label: 'Status', accessor: 'status' }
  ]}
  data={employees}
  selectable={true}
  paginated={true}
/>
```

#### **Note:**
The Table API is actually **correct** as documented. The dev's error was likely a TypeScript configuration issue or missing type definitions, not an API mismatch.

---

### **7. Select**

#### **Actual Implementation:**
```tsx
interface SelectProps {
  label: string;                    // ✅ REQUIRED - Field label
  placeholder?: string;
  options: SelectOption[];          // ✅ Array of {value, label, disabled?}
  value?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  searchable?: boolean;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  size?: 'xsmall' | 'small' | 'default' | 'large';
  className?: string;
}
```

#### **Correct Usage:**
```tsx
<Select
  label="Country"
  placeholder="Select a country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' }
  ]}
  onChange={(value) => console.log(value)}
/>
```

---

### **8. Checkbox**

#### **Actual Implementation:**
```tsx
interface CheckboxProps {
  label?: string;                   // ✅ Optional label text
  size?: 'default' | 'large';
  checked?: boolean;
  disabled?: boolean;
  showTrailingIcon?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  value?: string;
}
```

#### **Correct Usage:**
```tsx
<Checkbox
  label="Accept terms and conditions"
  checked={accepted}
  onChange={(e) => setAccepted(e.target.checked)}
/>
```

---

### **9. RadioButton**

#### **Actual Implementation:**
```tsx
interface RadioButtonProps {
  label?: string;                   // ✅ Optional label text
  size?: 'default' | 'large';
  checked?: boolean;
  disabled?: boolean;
  showTrailingIcon?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;                    // ✅ Required for radio groups
  value?: string;
}
```

#### **Correct Usage:**
```tsx
<RadioButton
  label="Option 1"
  name="options"
  value="option1"
  checked={selected === 'option1'}
  onChange={(e) => setSelected(e.target.value)}
/>
```

---

### **10. Toggle**

#### **Actual Implementation:**
```tsx
interface ToggleProps {
  label?: string;                   // ✅ Optional label text
  checked?: boolean;
  disabled?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  value?: string;
}
```

#### **Correct Usage:**
```tsx
<Toggle
  label="Enable notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
```

---

### **11. Avatar**

#### **Actual Implementation:**
```tsx
interface AvatarProps {
  size?: 'large' | 'medium' | 'small';
  color?: 'default' | 'purple' | 'amber' | 'cyan' | 'lime' | 'yellow' | 'grey';
  src?: string;                     // ✅ Image URL
  alt?: string;
  initials?: string;                // ✅ Fallback initials (e.g., "JD")
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}
```

#### **Correct Usage:**
```tsx
// With image
<Avatar src="/user.jpg" alt="John Doe" size="medium" />

// With initials
<Avatar initials="JD" color="purple" size="large" />
```

---

### **12. Badge**

#### **Actual Implementation:**
```tsx
interface BadgeProps {
  label: string;                    // ✅ REQUIRED - Badge text
  type?: 'info' | 'success' | 'warning' | 'error' | 'neutral';
  style?: 'default' | 'subdued' | 'outlined';
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  className?: string;
}
```

#### **Correct Usage:**
```tsx
<Badge
  label="Active"
  type="success"
  style="default"
/>

<Badge
  label="Warning"
  type="warning"
  leadingIcon={<Icon name="Warning" />}
  showLeadingIcon={true}
/>
```

---

### **13. Textarea**

#### **Actual Implementation:**
```tsx
interface TextareaProps {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  showLabel?: boolean;
  showFieldImportance?: boolean;
  fieldImportanceVariant?: 'mandatory' | 'optional';
  showInlineText?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  fullWidth?: boolean;
  rows?: number;
  maxRows?: number;
  resizable?: boolean;
}
```

#### **Correct Usage:**
```tsx
<Textarea
  label="Description"
  placeholder="Enter description..."
  rows={4}
  helperText="Max 500 characters"
  fullWidth={true}
/>
```

---

## 🔍 COMPONENTS TO AUDIT NEXT

### **Priority 1 (Commonly Used):** ✅ COMPLETE
- [x] InputField
- [x] Chip
- [x] Select
- [x] Checkbox
- [x] RadioButton
- [x] Toggle
- [x] Avatar
- [x] Badge
- [x] Textarea

### **Priority 2 (Layout):** ✅ COMPLETE
- [x] PageLayout - Complex layout component with topbar/sidebar variants
- [x] TopHeader - Header with app name, menu items, user profile
- [x] SideNavigation - Collapsible sidebar with navigation groups
- [x] PageHeader - Page title, breadcrumbs, actions
- [x] Breadcrumbs - Navigation breadcrumb trail
- [x] Footer - Page footer with links and copyright

**Note:** These components were already audited and documented in previous sessions. APIs are correct and match implementation.

### **Priority 3 (Data Display):** ✅ COMPLETE
- [x] Table - Already audited (column structure correct)
- [x] Pagination
- [x] Modal
- [x] Drawer
- [x] Toast
- [x] Tooltip
- [x] AlertBanner

### **14. Modal**

#### **Actual Implementation:**
```tsx
interface ModalProps {
  isOpen: boolean;                  // ✅ REQUIRED - Modal visibility
  onClose: () => void;              // ✅ REQUIRED - Close callback
  title: string;                    // ✅ REQUIRED - Modal title
  description?: string;
  children: ReactNode;              // ✅ REQUIRED - Modal content
  showReset?: boolean;
  resetLabel?: string;
  onReset?: () => void;
  showCancel?: boolean;
  cancelLabel?: string;
  onCancel?: () => void;
  showSubmit?: boolean;
  submitLabel?: string;
  onSubmit?: () => void;
  submitType?: 'default' | 'safe' | 'warning' | 'alert';
  customFooter?: ReactNode;
  width?: number;
  height?: number;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}
```

#### **Correct Usage:**
```tsx
<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  description="Are you sure you want to proceed?"
  showSubmit={true}
  submitLabel="Confirm"
  onSubmit={handleSubmit}
  showCancel={true}
>
  <p>Modal content goes here</p>
</Modal>
```

---

### **15. Drawer**

#### **Actual Implementation:**
```tsx
interface DrawerProps {
  isOpen: boolean;                  // ✅ REQUIRED
  onClose: () => void;              // ✅ REQUIRED
  title: string;                    // ✅ REQUIRED
  description?: string;
  children: ReactNode;              // ✅ REQUIRED
  position?: 'left' | 'right';      // ✅ Drawer position
  showReset?: boolean;
  resetLabel?: string;
  onReset?: () => void;
  showCancel?: boolean;
  cancelLabel?: string;
  onCancel?: () => void;
  showSubmit?: boolean;
  submitLabel?: string;
  onSubmit?: () => void;
  submitType?: 'default' | 'safe' | 'warning' | 'alert';
  customFooter?: ReactNode;
  width?: number;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
}
```

#### **Correct Usage:**
```tsx
<Drawer
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Settings"
  position="right"
  width={400}
>
  <div>Drawer content</div>
</Drawer>
```

---

### **16. Toast**

#### **Actual Implementation:**
```tsx
interface ToastProps {
  type?: 'warning' | 'success' | 'error' | 'info';
  style?: 'default' | 'subdued';
  text: string;                     // ✅ REQUIRED - Toast message
  showLeadIcon?: boolean;
  showTrailIcon?: boolean;
  action?: boolean;
  leadIcon?: ReactNode;
  trailIcon?: ReactNode;
  buttonText?: string;
  onActionClick?: () => void;
  onClose?: () => void;
  className?: string;
}
```

#### **Correct Usage:**
```tsx
<Toast
  type="success"
  text="Changes saved successfully"
  showLeadIcon={true}
  action={true}
  buttonText="Undo"
  onActionClick={handleUndo}
/>
```

---

### **17. Tooltip**

#### **Actual Implementation:**
```tsx
interface TooltipProps {
  visible?: boolean;
  heading?: string;                 // ✅ Main text
  description?: string;             // ✅ Secondary text
  x?: number;                       // ✅ Screen X position
  y?: number;                       // ✅ Screen Y position
  variant?: 'default' | 'pointer';
  pointerPosition?: 'top' | 'bottom' | 'left' | 'right';
  className?: string;
}
```

#### **Correct Usage:**
```tsx
<Tooltip
  visible={true}
  heading="Tooltip Title"
  description="Additional information"
  x={100}
  y={200}
  variant="pointer"
  pointerPosition="top"
/>
```

---

### **18. Pagination**

#### **Actual Implementation:**
```tsx
interface PaginationProps {
  currentPage: number;              // ✅ REQUIRED - Current page (1-indexed)
  totalPages: number;               // ✅ REQUIRED - Total pages
  totalItems: number;               // ✅ REQUIRED - Total items
  itemsPerPage: number;             // ✅ REQUIRED - Items per page
  onPageChange: (page: number) => void;  // ✅ REQUIRED
  onItemsPerPageChange: (itemsPerPage: number) => void;  // ✅ REQUIRED
  variant?: 'default' | 'filled' | 'outlined';
  itemsPerPageOptions?: number[];
  className?: string;
}
```

#### **Correct Usage:**
```tsx
<Pagination
  currentPage={1}
  totalPages={10}
  totalItems={100}
  itemsPerPage={10}
  onPageChange={(page) => setCurrentPage(page)}
  onItemsPerPageChange={(items) => setItemsPerPage(items)}
  variant="default"
/>
```

---

### **19. AlertBanner**

#### **Actual Implementation:**
```tsx
interface AlertBannerProps {
  type?: 'warning' | 'success' | 'error' | 'info';
  style?: 'default' | 'subdued' | 'accentBorder';
  text: string;                     // ✅ REQUIRED - Alert message
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  action?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
  buttonText?: string;
  onActionClick?: () => void;
  onClose?: () => void;
  className?: string;
}
```

#### **Correct Usage:**
```tsx
<AlertBanner
  type="warning"
  text="Your session will expire in 5 minutes"
  showLeadingIcon={true}
  action={true}
  buttonText="Extend Session"
  onActionClick={handleExtend}
/>
```

---

## 📊 AUDIT COMPLETE SUMMARY

### **Total Components Audited: 19**

✅ **Priority 1 (Core UI):** 9 components
- Button, InputField, Chip, Select, Checkbox, RadioButton, Toggle, Avatar, Badge, Textarea

✅ **Priority 2 (Layout):** 6 components  
- PageLayout, TopHeader, SideNavigation, PageHeader, Breadcrumbs, Footer

✅ **Priority 3 (Data Display):** 7 components
- Table, Modal, Drawer, Toast, Tooltip, Pagination, AlertBanner

✅ **Already Fixed:** MetricCard, TableToolbar

---

## 📝 AUDIT PROCESS

For each component:
1. ✅ Read actual TypeScript interface
2. ✅ Check component implementation
3. ✅ Document correct API
4. ✅ List common mistakes
5. ✅ Provide correct examples
6. ❌ Compare with AI_GUIDELINES.md
7. ❌ Update guidelines if mismatch found

---

## 🐛 BUGS FOUND & FIXED

### **1. TableToolbar - Missing useState Import**
- **Status:** ✅ FIXED
- **File:** `packages/components/src/Table/TableToolbar.tsx`
- **Fix:** Added `import { useState } from 'react'`

### **2. Button - No Prop Validation**
- **Status:** ✅ FIXED
- **File:** `packages/components/src/Button/Button.tsx`
- **Fix:** Added runtime warnings for `label` and `icon` props

---

## 📋 NEXT STEPS

1. ✅ Complete bug fixes for Button, MetricCard, Table
2. ⏳ Audit remaining components (Input, Card, Chip, etc.)
3. ⏳ Update AI_GUIDELINES.md with correct examples
4. ⏳ Create COMPONENT_API_REFERENCE.md
5. ⏳ Update .cursorrules and .windsurfrules
6. ⏳ Bump version to 1.6.4
7. ⏳ Build and publish to npm
