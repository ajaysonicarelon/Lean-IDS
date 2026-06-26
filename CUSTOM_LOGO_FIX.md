# Custom Logo Fix - Complete Solution

## 🐛 Problem
The `customLogoUrl` prop was not working. Even when developers passed it to `SideNavigation` or `TopHeader`, the default Elevance logo was still showing.

**Example of the issue:**
```html
<!-- Developer saw this in their DOM -->
<img src="Brand=Elevance Logo, Mode=Dark.svg" alt="Elevance Logo">
<!-- Instead of their custom logo -->
```

## ✅ Root Cause
The `customLogoUrl` prop was defined in the types but **not being passed down** to the `Brand` component in:
1. `SideNavigation` component
2. `TopHeader` component  
3. `PageLayout` component

## 🔧 What Was Fixed

### 1. **SideNavigation Component** ✅
**File:** `SideNavigation.tsx`

**Before:**
```tsx
<Brand 
  variant={effectiveState === 'collapsed' ? 'symbol' : 'logo'}
  mode="dark"
/>
```

**After:**
```tsx
<Brand 
  variant={effectiveState === 'collapsed' ? 'symbol' : 'logo'}
  mode="dark"
  customLogoUrl={customLogoUrl}
  logoAlignment={logoAlignment}
  logoPadding={logoPadding}
/>
```

---

### 2. **TopHeader Component** ✅
**File:** `TopHeader.tsx`

**Added to types:**
```typescript
// TopHeader.types.ts
export interface TopHeaderProps {
  // ... other props
  customLogoUrl?: string; // NEW!
}
```

**Before:**
```tsx
<Brand 
  variant="logo"
  mode={mode}
/>
```

**After:**
```tsx
<Brand 
  variant="logo"
  mode={mode}
  customLogoUrl={customLogoUrl}
/>
```

---

### 3. **PageLayout Component** ✅
**File:** `PageLayout.types.ts` & `PageLayout.tsx`

**Added to types:**
```typescript
topHeader?: {
  // ... other props
  customLogoUrl?: string; // NEW!
};

sideNav?: {
  // ... other props
  customLogoUrl?: string; // NEW!
  logoAlignment?: 'left' | 'center' | 'right'; // NEW!
  logoPadding?: string; // NEW!
};
```

**Updated component to pass props through:**
```tsx
// For TopHeader
<TopHeader
  // ... other props
  customLogoUrl={topHeader.customLogoUrl}
/>

// For SideNavigation
<SideNavigation
  // ... other props
  customLogoUrl={sideNav.customLogoUrl}
  logoAlignment={sideNav.logoAlignment}
  logoPadding={sideNav.logoPadding}
/>
```

---

## 📖 How to Use (For Developers)

### Option 1: Using SideNavigation Directly

```tsx
import { SideNavigation } from '@lean-ids/components';

<SideNavigation
  groups={navigationGroups}
  user={userProfile}
  customLogoUrl="/path/to/your/logo.png"
  logoAlignment="center"
  logoPadding="16px"
/>
```

### Option 2: Using TopHeader Directly

```tsx
import { TopHeader } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="My App"
  customLogoUrl="/path/to/your/logo.png"
  userInitials="JS"
/>
```

### Option 3: Using PageLayout (Recommended)

```tsx
import { PageLayout } from '@lean-ids/components';

<PageLayout
  variant="topbar-sidebar"
  
  // Custom logo in TopHeader
  topHeader={{
    appName: 'My Application',
    customLogoUrl: '/logos/my-logo.png',
    userInitials: 'JS',
  }}
  
  // Custom logo in SideNavigation
  sideNav={{
    groups: navigationGroups,
    user: userProfile,
    customLogoUrl: '/logos/my-sidebar-logo.png',
    logoAlignment: 'center',
    logoPadding: '20px',
  }}
  
  pageTitle="Dashboard"
  breadcrumbs={[{ label: 'Home' }]}
>
  {/* Your content */}
</PageLayout>
```

---

## 🎯 Logo Recommendations

### For SideNavigation:
- **Recommended size:** 120-150px wide
- **Format:** PNG or SVG (transparent background)
- **Aspect ratio:** Horizontal logo works best
- **Collapsed state:** Shows symbol variant automatically

### For TopHeader:
- **Recommended size:** 100-120px wide  
- **Format:** PNG or SVG
- **Height:** Around 32-40px

---

## ✅ Testing

After updating to the new version, test with:

```tsx
<SideNavigation
  customLogoUrl="https://via.placeholder.com/150x40/0000FF/FFFFFF?text=My+Logo"
  groups={[]}
/>
```

You should see your custom logo instead of the Elevance logo!

---

## 📦 Files Changed

1. `SideNavigation.tsx` - Added props to Brand component
2. `SideNavigation.types.ts` - Already had the types
3. `TopHeader.tsx` - Added customLogoUrl prop and passed to Brand
4. `TopHeader.types.ts` - Added customLogoUrl type
5. `PageLayout.tsx` - Pass customLogoUrl to both TopHeader and SideNavigation
6. `PageLayout.types.ts` - Added customLogoUrl to topHeader and sideNav configs

---

## 🚀 Next Steps

This fix will be included in the next npm release. Developers should:

1. Update to the latest version: `npm install @ajaysoni7832/lean-ids-components@latest`
2. Add `customLogoUrl` prop to their components
3. Test that their logo appears correctly

---

**Issue resolved!** 🎉
