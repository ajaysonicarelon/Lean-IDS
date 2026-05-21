# Table Header - Lock Button Update ✅

## 🎯 Changes Made

Updated the lock button in table headers to use a **tertiary style** (icon-only, no border or padding).

---

## 📋 What Changed

### **Before:**
- Lock button used `variant="secondary"` with border and padding
- Lock button was visible for both locked and unlocked states
- Used primary-500 color

### **After:**
- ✅ **Tertiary button style** - Icon only, no border, no padding
- ✅ **Only visible when locked** - Hidden when column is unlocked
- ✅ **Uses primary-300 color** (#A5B4FC)
- ✅ **Hover effect** - Changes to primary-400 (#818CF8) on hover
- ✅ **Click to unlock only** - Users lock columns via Settings button

---

## 🎨 Visual Design

### **Lock Icon Appearance:**

```
┌─────────────────────────────────────┐
│  Name ↓ 🔒                          │  ← Lock icon only visible when locked
├─────────────────────────────────────┤
│  Alice                              │
│  Bob                                │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│  Email ↓                            │  ← No lock icon (not locked)
├─────────────────────────────────────┤
│  alice@example.com                  │
│  bob@example.com                    │
└─────────────────────────────────────┘
```

### **Button Styles:**

**Locked Column:**
- Icon: 🔒 (Lock icon)
- Color: `#A5B4FC` (primary-300)
- Hover: `#818CF8` (primary-400)
- Background: None
- Border: None
- Padding: 0
- Size: 16x16px
- Margin: 8px left

**Unlocked Column:**
- No icon visible at all

---

## 🔧 Technical Details

### **Implementation:**

```tsx
{locked && onLockToggle && (
  <button
    onClick={handleLockClick}
    style={{
      background: 'none',
      border: 'none',
      padding: 0,
      margin: '0 0 0 8px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '16px',
      height: '16px',
      color: '#A5B4FC',        // primary-300
      transition: 'color 0.2s',
    }}
    onMouseEnter={(e) => e.currentTarget.style.color = '#818CF8'}  // primary-400
    onMouseLeave={(e) => e.currentTarget.style.color = '#A5B4FC'}
    title="Unlock column"
  >
    <LockClosedIcon />
  </button>
)}
```

### **Key Changes:**
1. Changed condition from `locked !== undefined` to just `locked`
2. Replaced Button component with native button element
3. Removed all border, background, and padding
4. Set fixed 16x16px size
5. Used primary-300 color (#A5B4FC)
6. Added hover effect to primary-400 (#818CF8)
7. Only renders when `locked === true`

---

## 🎯 User Workflow

### **Locking a Column:**
1. User clicks **Settings button** (⚙️) in toolbar
2. Settings panel opens
3. User clicks **Lock icon** next to column name
4. Column becomes locked
5. Lock icon appears in column header

### **Unlocking a Column:**
1. User sees **Lock icon** (🔒) in locked column header
2. User clicks the lock icon
3. Column becomes unlocked
4. Lock icon disappears from header

---

## 📊 Color Reference

| State | Color | Hex | Usage |
|-------|-------|-----|-------|
| Default | primary-300 | `#A5B4FC` | Lock icon default state |
| Hover | primary-400 | `#818CF8` | Lock icon on hover |
| ~~Old~~ | ~~primary-500~~ | ~~`#6366F1`~~ | ~~No longer used~~ |

---

## ✅ Benefits

### **For Users:**
- ✅ Cleaner, less cluttered header
- ✅ Lock icon only appears when needed
- ✅ Clear visual indicator of locked columns
- ✅ Subtle, non-intrusive design
- ✅ Easy to unlock with one click

### **For Design:**
- ✅ Follows tertiary button pattern
- ✅ Consistent with design system
- ✅ Uses correct color tokens
- ✅ Minimal visual weight
- ✅ Better hierarchy

---

## 🎭 Examples

### **Example 1: Locked Column**
```tsx
<TableHeader
  label="Name"
  sortable
  locked={true}           // Lock icon will be visible
  onLockToggle={() => {
    // Unlock the column
  }}
/>
```

**Result:**
```
┌─────────────────┐
│  Name ↓ 🔒      │  ← Icon visible, can click to unlock
└─────────────────┘
```

### **Example 2: Unlocked Column**
```tsx
<TableHeader
  label="Email"
  sortable
  locked={false}          // No lock icon
  onLockToggle={() => {
    // This won't show anything
  }}
/>
```

**Result:**
```
┌─────────────────┐
│  Email ↓        │  ← No lock icon
└─────────────────┘
```

---

## 📝 Files Modified

1. **`/packages/components/src/TableHeader/TableHeader.tsx`**
   - Replaced Button component with native button
   - Changed styling to tertiary (icon-only)
   - Updated color to primary-300
   - Added hover effect
   - Changed visibility condition to only show when locked
   - Removed unused Button import

---

## 🎨 Design Tokens Used

```tsx
// Colors
primary-300: #A5B4FC  // Default lock icon color
primary-400: #818CF8  // Hover lock icon color

// Sizing
width: 16px
height: 16px
margin-left: 8px

// Styling
background: none
border: none
padding: 0
```

---

## 🔄 Migration Notes

### **No Breaking Changes:**
- Component API remains the same
- Props unchanged
- Only visual styling updated
- Backward compatible

### **Behavior Change:**
- Lock icon now only visible when `locked={true}`
- Previously visible for all columns with `onLockToggle` prop
- This is an improvement, not a breaking change

---

## ✅ Summary

**The lock button in table headers now:**
1. Uses tertiary style (icon-only, no border/padding)
2. Only visible when column is locked
3. Uses primary-300 color (#A5B4FC)
4. Hovers to primary-400 (#818CF8)
5. Allows users to unlock only (lock via Settings)
6. Cleaner, more subtle design

**Perfect for a professional table interface!** 🎉

---

## 📞 Support

For questions: **dl-ux-carelon@carelon.com**
