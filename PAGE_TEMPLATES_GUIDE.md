# Page Templates Guide - Lean IDS

## Overview
Three vanilla page templates for building consistent layouts in Lean IDS applications. These templates provide the basic structure without any specific content - they're ready to be filled with your application's UI.

---

## Template Variants

### 1. **Top Bar Only** (`topbar-only`)
**Layout:** Dark top header with brand logo + main content area + footer

**Use When:**
- Simple applications without side navigation
- Dashboard-style layouts
- Content-focused pages

**Structure:**
```
┌─────────────────────────────────────────┐
│  🎨 Dark Top Header (78px)              │
│  [Logo] | Product Name  [Menu] [Avatar] │
├─────────────────────────────────────────┤
│  Breadcrumbs                            │
│  Page Title                             │
│  Description                            │
│                                         │
│  MAIN CONTENT AREA                      │
│  (Your components go here)              │
│                                         │
├─────────────────────────────────────────┤
│  Footer (40px)                          │
└─────────────────────────────────────────┘
```

**Figma:** @https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=5241-12158

---

### 2. **Side Bar Only** (`sidebar-only`)
**Layout:** Expanded side navigation (236px) + main content area + footer

**Use When:**
- Navigation-heavy applications
- Multi-section applications
- Admin panels

**Structure:**
```
┌────────┬────────────────────────────────┐
│  🎨    │  Breadcrumbs                   │
│  Logo  │  Page Title                    │
│        │  Description                   │
│ GROUP  │                                │
│ ├ Home │  MAIN CONTENT AREA             │
│ ├ About│  (Your components go here)     │
│ └ Serv │                                │
│        │                                │
│ [User] │                                │
├────────┼────────────────────────────────┤
│        │  Footer (40px)                 │
└────────┴────────────────────────────────┘
```

**Figma:** @https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=5241-13271

---

### 3. **Top Bar + Side Bar** (`topbar-sidebar`)
**Layout:** Light top bar (no logo) + collapsed sidebar (60px) + main content + footer

**Use When:**
- Complex applications needing both navigations
- Enterprise applications
- Multi-level navigation requirements

**Structure:**
```
┌───┬────────────────────────────────────┐
│ 🎨│  ⚪ Light Top Header (64px)        │
│   │  Product Name      [Menu] [Avatar]│
├───┼────────────────────────────────────┤
│ 🏠│  Breadcrumbs                       │
│ 📄│  Page Title                        │
│ ⚙️│  Description                       │
│   │                                    │
│ 👤│  MAIN CONTENT AREA                 │
│   │  (Your components go here)         │
│   │                                    │
├───┼────────────────────────────────────┤
│   │  Footer (40px)                     │
└───┴────────────────────────────────────┘
```

**Figma:** @https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS?node-id=5591-3542

**Important:** When using both navigations:
- ✅ Top bar is **light mode** (no dark background)
- ✅ Top bar has **NO brand logo** (logo is in sidebar)
- ✅ Sidebar is **collapsed** (60px wide, icons only)
- ✅ Sidebar shows **brand symbol** (not full logo)
- ✅ Product name stays in top bar

---

## Grid & Spacing Properties

### Content Area Padding
- **Horizontal:** 24px (`spacing-10`)
- **Vertical:** 16px (`spacing-7`)

### Section Gaps
- **Between sections:** 16px (`spacing-7`)
- **Within sections:** 8px (`spacing-3`)

### Component Heights
- **Dark Top Header:** 78px
- **Light Top Header:** 64px
- **Footer:** 40px (min-height)
- **Side Nav (Expanded):** 236px width
- **Side Nav (Collapsed):** 60px width

### Breadcrumbs
- **Font:** 14px Medium
- **Separator:** `/` with 4px padding
- **Active:** Semibold, gray-500
- **Links:** Medium, primary-500 (blue)

### Page Header
- **Title:** 28px Semibold, gray-900, 33px line-height, 1px letter-spacing
- **Description:** 16px Medium, gray-600, 19px line-height

---

## Usage Examples

### Example 1: Top Bar Only Template
```tsx
import { PageLayout, TopHeader, Footer } from '@lean-ids/components';

function MyPage() {
  return (
    <PageLayout
      variant="topbar-only"
      pageTitle="Dashboard"
      pageDescription="Overview of your application"
      breadcrumbs={[
        { label: 'Home', href: '/', isActive: false },
        { label: 'Dashboard', isActive: true }
      ]}
      topHeader={{
        appName: 'Product Name',
        showLogo: true,
        menuItems: [
          { label: 'Home', icon: 'Home', active: true },
          { label: 'Settings', icon: 'Settings' }
        ],
        avatar: {
          initials: 'AS',
          alt: 'Ajay Soni'
        }
      }}
      footer={{
        lastUpdated: 'Sept 23, 2024',
        version: '1.0',
        feedbackText: 'Send us a Feedback here',
        feedbackUrl: '/feedback'
      }}
    >
      {/* Your page content here */}
      <div>
        <h2>Welcome to Dashboard</h2>
        <p>Your content goes here...</p>
      </div>
    </PageLayout>
  );
}
```

### Example 2: Side Bar Only Template
```tsx
import { PageLayout } from '@lean-ids/components';

function MyPage() {
  return (
    <PageLayout
      variant="sidebar-only"
      pageTitle="Services"
      pageDescription="Manage your services"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Services', isActive: true }
      ]}
      sideNav={{
        expanded: true,
        navigationGroups: [
          {
            groupName: 'MAIN MENU',
            items: [
              { label: 'Home', icon: 'Home', active: false, href: '/' },
              { label: 'Services', icon: 'Settings', active: true },
              { label: 'About', icon: 'Info', hasNotification: true }
            ]
          }
        ],
        user: {
          initials: 'AS',
          name: 'Ajay Soni',
          subtitle: 'Employee ID',
          avatarUrl: '/avatar.jpg'
        }
      }}
    >
      {/* Your page content */}
      <div>Services content...</div>
    </PageLayout>
  );
}
```

### Example 3: Both Navigations Template
```tsx
import { PageLayout } from '@lean-ids/components';

function MyPage() {
  return (
    <PageLayout
      variant="topbar-sidebar"
      pageTitle="Settings"
      pageDescription="Configure your application"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Settings', isActive: true }
      ]}
      topHeader={{
        appName: 'Product Name',
        // NO logo in this variant!
        menuItems: [
          { label: 'Help', icon: 'Help' }
        ],
        avatar: {
          initials: 'AS'
        }
      }}
      sideNav={{
        // Automatically collapsed in this variant
        navigationGroups: [
          {
            items: [
              { icon: 'Home', href: '/' },
              { icon: 'Settings', active: true },
              { icon: 'Info', href: '/about' }
            ]
          }
        ],
        user: {
          initials: 'AS',
          name: 'Ajay Soni'
        }
      }}
    >
      {/* Your page content */}
      <div>Settings content...</div>
    </PageLayout>
  );
}
```

---

## Component Breakdown

### Components Used
1. **TopHeader** - Dark (topbar-only) or Light (topbar-sidebar)
2. **SideNavigation** - Expanded (sidebar-only) or Collapsed (topbar-sidebar)
3. **Breadcrumb** - Navigation breadcrumbs
4. **PageHeader** - Page title + description
5. **Footer** - Last updated, version, feedback link

### Content Area
The main content area is a flex container that:
- Takes remaining vertical space
- Has 24px horizontal padding
- Has 16px vertical padding
- Contains breadcrumbs, page header, and your custom content

---

## Design Tokens Reference

### Colors
- **Background:** `primary-50` (theme-specific)
- **Text Primary:** `gray-900`
- **Text Secondary:** `gray-700`
- **Text Muted:** `gray-600`
- **Borders:** `gray-300` (default), `gray-400` (hover)
- **Links:** `primary-500` (#0064ef)

### Spacing
- `spacing-3`: 8px
- `spacing-7`: 16px
- `spacing-10`: 24px

### Typography
- **Page Title:** 28px/33px Semibold
- **Description:** 16px/19px Medium
- **Breadcrumb:** 14px/16px Medium/Semibold
- **Body:** 16px/19px Regular/Medium

---

## Rules & Guidelines

### ✅ DO
- Use these templates as starting points for all pages
- Keep content area padding consistent (24px sides, 16px top/bottom)
- Always include breadcrumbs for navigation context
- Provide clear page titles and descriptions
- Use the Footer component for consistency

### ❌ DON'T
- Don't show brand logo in top bar when using both navigations
- Don't use dark top bar with sidebar (use light mode)
- Don't hardcode spacing - use design tokens
- Don't skip breadcrumbs (helps with navigation)
- Don't use gray-1000 for text

### When Using Both Navigations
- ⚠️ **CRITICAL:** Top bar must be **light mode**
- ⚠️ **CRITICAL:** NO brand logo in top bar (it's in sidebar)
- ⚠️ **CRITICAL:** Sidebar must be **collapsed** (icons only)
- ✅ Product name stays in top bar
- ✅ Menu items and avatar optional in top bar

---

## Storybook

All three templates are available in Storybook for visual reference and testing:

**Location:** `Components/PageLayout`

**Stories:**
- `TopBarOnly` - Template with top header only
- `SideBarOnly` - Template with side navigation only
- `TopBarAndSideBar` - Template with both navigations

**URL:** http://localhost:6006

---

## Customization

### Override Styles
```tsx
<PageLayout
  className="custom-page-layout"
  variant="topbar-only"
  // ... other props
>
  {/* content */}
</PageLayout>
```

### Custom Content Layout
```tsx
<PageLayout variant="sidebar-only" {...props}>
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
    <Card>Left content</Card>
    <Card>Right content</Card>
  </div>
</PageLayout>
```

---

## Summary

🎨 **Three Templates:** Top Bar Only, Side Bar Only, Both  
📏 **Consistent Spacing:** 24px sides, 16px gaps  
🧭 **Always Include:** Breadcrumbs, Page Header, Footer  
⚡ **Flexible Content:** Drop in any components  
✅ **Design System:** Uses Lean IDS components  
📱 **Responsive:** Grid-based layout system  

**Status:** ✅ Ready to Use  
**Figma:** All designs linked above  
**Storybook:** http://localhost:6006  

Use these templates as the foundation for all your pages in Lean IDS!
