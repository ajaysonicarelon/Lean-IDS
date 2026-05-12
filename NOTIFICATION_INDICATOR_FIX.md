# Notification Indicator Position Fix

## Issue
The notification indicator (red dot) on menu items in the **TopHeader** was overlapping with the menu text, while it worked correctly in **SideNavigation**.

## Root Cause
The `NotificationIndicator` component had the same positioning for both:
- **Horizontal layout** (TopHeader with `border="bottom"`)
- **Vertical layout** (SideNavigation with `border="left"`)

## Solution
Updated `NotificationIndicator` to accept a `$border` prop and position differently based on layout orientation.

## Changes Made

### 1. MenuItem.styles.ts
Added `$border` prop to `NotificationIndicatorProps` and conditional positioning:

```typescript
interface NotificationIndicatorProps {
  $mode: MenuItemMode;
  $border: MenuItemBorder;  // Added
}

export const NotificationIndicator = styled.div<NotificationIndicatorProps>`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.palette.error[500]};
  
  ${({ $border }) => {
    // For top header (horizontal), position above the text
    if ($border === 'bottom') {
      return css`
        right: 8px;
        top: 8px;
      `;
    }
    // For side nav (vertical), position on the right side
    return css`
      right: 16px;
      top: 15px;
    `;
  }}
`;
```

### 2. MenuItem.tsx
Pass `border` prop to `NotificationIndicator`:

```typescript
{showIndicator && state === 'inactive' && (
  <NotificationIndicator $mode={mode} $border={border} />
)}
```

## Position Details

### TopHeader (Horizontal - border="bottom")
- **Position:** `right: 8px; top: 8px;`
- **Result:** Indicator appears in the top-right corner, above the text
- **No overlap** with menu item label

### SideNavigation (Vertical - border="left")
- **Position:** `right: 16px; top: 15px;`
- **Result:** Indicator appears on the right side, centered vertically
- **Works well** with the vertical layout

## Visual Result

### Before
```
TopHeader:  [Home] 🔴  ← Overlapping text
SideNav:    [Home    ] 🔴  ← Good position
```

### After
```
TopHeader:      🔴
            [Home]     ← No overlap
            
SideNav:    [Home    ] 🔴  ← Still good
```

## Testing
View in Storybook:
1. **Navigation/TopHeader** → Check "About" menu item with notification
2. **Navigation/SideNavigation** → Check "About Us" menu item with notification

Both should now display the red notification indicator without overlapping text.

---

**Status:** ✅ Fixed  
**Date:** May 8, 2026  
**Files Modified:**
- `MenuItem.styles.ts` - Added border-based positioning
- `MenuItem.tsx` - Pass border prop to indicator
