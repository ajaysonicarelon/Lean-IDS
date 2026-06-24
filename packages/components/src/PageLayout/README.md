# PageLayout Component - Usage Guide

## 🚨 CRITICAL: Avoid Overlap Issues

**PageLayout MUST be the root component of your application!** It uses fixed positioning for headers and navigation.

---

## ✅ CORRECT Usage

```tsx
// App.tsx or main layout file
import { PageLayout } from '@ajaysoni7832/lean-ids-components';

function App() {
  return (
    <PageLayout
      variant="topbar-sidebar"
      pageTitle="Dashboard"
      pageDescription="Your dashboard description"
      breadcrumbs={[
        { label: 'Home', href: '/', isActive: false },
        { label: 'Dashboard', isActive: true },
      ]}
      topHeader={{
        appName: 'Product Name',
        menuItems: [
          { id: '1', label: 'Help', icon: <HelpIcon />, active: false },
          { id: '2', label: 'Notifications', icon: <BellIcon />, showIndicator: true },
        ],
        userInitials: 'AS',
      }}
      sideNav={{
        groups: [
          {
            items: [
              { id: '1', label: 'Home', icon: <HomeIcon />, active: false },
              { id: '2', label: 'Dashboard', icon: <DashIcon />, active: true },
              { id: '3', label: 'Settings', icon: <SettingsIcon />, active: false },
            ],
          },
        ],
        user: {
          initials: 'AS',
          name: 'Ajay Soni',
          subtitle: 'Employee ID',
        },
      }}
    >
      {/* Your page content here */}
      <YourPageContent />
    </PageLayout>
  );
}

export default App;
```

---

## ❌ INCORRECT Usage (Causes Overlap)

### Don't Wrap PageLayout

```tsx
// ❌ DON'T DO THIS!
function App() {
  return (
    <div className="app-wrapper">  {/* ❌ Extra wrapper causes issues */}
      <PageLayout variant="topbar-sidebar" {...props}>
        <YourPageContent />
      </PageLayout>
    </div>
  );
}
```

### Don't Add Custom Headers

```tsx
// ❌ DON'T DO THIS EITHER!
function App() {
  return (
    <>
      <CustomHeader />  {/* ❌ Don't add your own headers */}
      <PageLayout variant="topbar-sidebar" {...props}>
        <YourPageContent />
      </PageLayout>
    </>
  );
}
```

---

## 📋 Key Points

1. **PageLayout should be at the root** - Don't wrap it in divs or containers
2. **No custom CSS on body/html** - PageLayout handles all positioning
3. **Use children prop** - Pass your page content as children
4. **Fixed positioning** - TopHeader and SideNav are position: fixed
5. **Automatic spacing** - Content area has proper margins for headers/nav
6. **Z-index layering** - Sidebar (101) > TopBar (100) for proper expansion

---

## 🎯 How It Works (topbar-sidebar variant)

### Component Positioning:

- **SideNavigation**: 
  - `position: fixed`
  - `left: 0`
  - `z-index: 101`
  - Width: 60px (collapsed) or 236px (pinned)

- **TopHeader**: 
  - `position: fixed`
  - `top: 0`
  - `left: 60px` (or 236px when pinned)
  - `z-index: 100`
  - Width: `calc(100% - 60px)` (or `calc(100% - 236px)`)

- **Main content**: 
  - `margin-left: 60px` (or 236px when pinned)
  - `padding-top: 64px`

### Why Sidebar Appears Above TopBar:

When you hover over the sidebar, it expands from 60px to 236px. The higher z-index (101 > 100) ensures it slides over the TopBar smoothly, creating the correct visual hierarchy.

---

## 📦 Installation

```bash
npm install @ajaysoni7832/lean-ids-components
```

---

## 🎨 Variants

### 1. topbar-only

Dark top header with brand logo. No sidebar.

```tsx
<PageLayout
  variant="topbar-only"
  pageTitle="Dashboard"
  breadcrumbs={[...]}
  topHeader={{
    appName: 'Product Name',
    showLogo: true,  // Logo visible in this variant
    menuItems: [...],
    userInitials: 'AS',
  }}
>
  <YourContent />
</PageLayout>
```

**Use for:** Simple applications, dashboards, content-focused pages

---

### 2. sidebar-only

Expanded side navigation (236px) with brand logo. No top bar.

```tsx
<PageLayout
  variant="sidebar-only"
  pageTitle="Services"
  breadcrumbs={[...]}
  sideNav={{
    groups: [...],
    user: {...},
  }}
>
  <YourContent />
</PageLayout>
```

**Use for:** Navigation-heavy apps, admin panels, multi-section applications

---

### 3. topbar-sidebar

Light top bar + collapsed sidebar (60px). **Most common variant.**

```tsx
<PageLayout
  variant="topbar-sidebar"
  pageTitle="Settings"
  breadcrumbs={[...]}
  topHeader={{
    appName: 'Product Name',
    // NO showLogo prop - logo is in sidebar!
    menuItems: [...],
    userInitials: 'AS',
  }}
  sideNav={{
    groups: [...],
    user: {...},
  }}
>
  <YourContent />
</PageLayout>
```

**Important Rules for topbar-sidebar:**
- ✅ Top bar is **LIGHT mode** (no dark background)
- ✅ Top bar has **NO brand logo** (logo is in sidebar)
- ✅ Sidebar is **COLLAPSED** (60px wide, icons only)
- ✅ Product name stays in top bar
- ✅ Sidebar appears **ABOVE** top bar when expanding (z-index: 101)
- ✅ TopBar starts **after** sidebar (left offset: 60px or 236px)

**Use for:** Complex applications needing both navigations, enterprise apps

---

## 🔧 Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| **Headers overlapping** | PageLayout wrapped in container | Make PageLayout the root component |
| **Content hidden behind header** | Custom body/html CSS | Remove custom margins/padding from body |
| **Sidebar not expanding on hover** | Wrong variant | Use `variant="topbar-sidebar"` or `"sidebar-only"` |
| **TopBar appearing over sidebar** | Old version | Update to v1.5.0+ with z-index fix |
| **Sidebar not hovering over TopBar** | Z-index issue | Ensure using v1.5.0+ (sidebar z-index: 101) |
| **Nested menus not showing** | Hover timing | Wait 100ms for hover delay |
| **Content area too narrow** | Missing margin | PageLayout automatically adds margin-left |

---

## 💡 Best Practice Example with React Router

```tsx
// src/App.tsx
import { PageLayout } from '@ajaysoni7832/lean-ids-components';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';
import Profile from './pages/Profile';

function AppContent() {
  const location = useLocation();
  
  // Determine active page for breadcrumbs
  const getBreadcrumbs = () => {
    const path = location.pathname;
    if (path === '/') return [{ label: 'Home', isActive: true }];
    if (path === '/settings') return [
      { label: 'Home', href: '/', isActive: false },
      { label: 'Settings', isActive: true },
    ];
    // Add more breadcrumb logic...
    return [];
  };

  return (
    <PageLayout
      variant="topbar-sidebar"
      pageTitle="My Application"
      breadcrumbs={getBreadcrumbs()}
      topHeader={{
        appName: 'Product Name',
        menuItems: [
          { id: '1', label: 'Help', icon: <HelpIcon />, active: false },
          { id: '2', label: 'Notifications', icon: <BellIcon />, showIndicator: true },
        ],
        userInitials: 'AS',
      }}
      sideNav={{
        groups: [
          {
            items: [
              { 
                id: '1', 
                label: 'Home', 
                icon: <HomeIcon />, 
                active: location.pathname === '/',
                onClick: () => navigate('/'),
              },
              { 
                id: '2', 
                label: 'Settings', 
                icon: <SettingsIcon />, 
                active: location.pathname === '/settings',
                onClick: () => navigate('/settings'),
              },
            ],
          },
        ],
        user: {
          initials: 'AS',
          name: 'Ajay Soni',
          subtitle: 'Employee ID',
        },
      }}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </PageLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
```

---

## 📐 Grid & Spacing

- **Content Padding:** 24px horizontal, 16px vertical
- **Content Gaps:** 16px between sections
- **Top Bar Height:** 78px (dark mode), 64px (light mode)
- **Side Nav Width:** 236px (expanded), 60px (collapsed)
- **Footer Height:** 40px minimum

---

## 🎭 Z-Index Hierarchy

```
NestedMenuOverlay: 1000  (highest - menus above everything)
SideNavigation: 101      (middle - sidebar over topbar)
TopHeader: 100           (lowest - topbar under sidebar)
```

This ensures:
- Nested menus appear above all navigation
- Sidebar slides over TopBar when expanding
- TopBar stays in the main content area

---

## 📚 Related Components

- **TopHeader** - Horizontal navigation bar
- **SideNavigation** - Vertical sidebar with nested menus
- **PageHeader** - Page title and description
- **Breadcrumb** - Navigation breadcrumbs
- **Footer** - Page footer with version info

---

## 🆘 Need Help?

Check the Storybook documentation for interactive examples:
- TopBarOnly variant
- SideBarOnly variant  
- TopBarAndSideBar variant (most common)
- Minimal example
- Custom content layout

Or refer to the TypeScript types in `PageLayout.types.ts` for all available props.
