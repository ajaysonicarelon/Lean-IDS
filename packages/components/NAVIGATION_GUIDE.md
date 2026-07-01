# Navigation Components - Quick Start Guide

## Component Overview

### 📦 What We Built

5 navigation components following Figma designs with proper component hierarchy:

```
Base Components (Reusable)
├── MenuItem      → Navigation item with states
└── Brand         → Carelon logo (full/symbol)

Composite Components (Use base components)
├── SideNavigation → Vertical sidebar
├── TopHeader      → Horizontal header
└── Footer         → Footer bar
```

---

## Quick Usage

### 1. SideNavigation (Vertical Sidebar)

```tsx
import { SideNavigation } from '@ajaysoni7832/lean-ids-components';
import { Icon } from '@ajaysoni7832/lean-ids-components';

<SideNavigation
  state="expanded"  // or "collapsed"
  groups={[
    {
      title: 'MAIN MENU',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="home" size={24} />,
          active: true,
        },
        {
          id: 'about',
          label: 'About Us',
          icon: <Icon name="info" size={24} />,
          showIndicator: true,  // Red notification dot
        },
      ],
    },
  ]}
  user={{
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
  }}
/>
```

**Features:**
- ✅ Expands/collapses (236px ↔ 60px)
- ✅ Multiple navigation groups
- ✅ Active state with left border
- ✅ Notification indicators
- ✅ User profile with avatar

---

### 2. TopHeader (Horizontal Header)

```tsx
import { TopHeader } from '@ajaysoni7832/lean-ids-components';
import { Icon } from '@ajaysoni7832/lean-ids-components';

<TopHeader
  mode="dark"  // or "light"
  appName="Product Name"
  showLogo={true}
  showDivider={true}
  menuItems={[
    {
      id: 'home',
      label: 'Home',
      icon: <Icon name="home" />,
      active: true,
    },
    {
      id: 'notifications',
      label: 'Notifications',
      icon: <Icon name="info" />,
      showIndicator: true,
    },
  ]}
  userInitials="AS"
/>
```

**Features:**
- ✅ Dark/light modes
- ✅ Brand logo + app name
- ✅ Horizontal menu items
- ✅ Active state with bottom border
- ✅ User avatar

---

### 3. Footer (Footer Bar)

```tsx
import { Footer } from '@ajaysoni7832/lean-ids-components';

<Footer
  lastUpdated="May 7, 2026"
  version="1.0"
  feedbackUrl="https://feedback.example.com"
  feedbackText="Send us a Feedback here"
/>
```

**Features:**
- ✅ Last updated timestamp
- ✅ Version display
- ✅ Feedback link

---

## Component Props Reference

### SideNavigation Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `state` | `'expanded' \| 'collapsed'` | `'expanded'` | Sidebar width state |
| `groups` | `NavigationGroup[]` | `[]` | Navigation groups with items |
| `user` | `UserProfile` | - | User profile info |
| `className` | `string` | - | Additional CSS class |

**NavigationGroup:**
```typescript
{
  title?: string;           // Group title (e.g., "MAIN MENU")
  items: NavigationItem[];  // Menu items in this group
}
```

**NavigationItem:**
```typescript
{
  id: string;              // Unique identifier
  label: string;           // Display text
  icon?: ReactNode;        // Icon component (24px)
  active?: boolean;        // Active state
  showIndicator?: boolean; // Show notification dot
  onClick?: () => void;    // Click handler
}
```

**UserProfile:**
```typescript
{
  initials: string;   // e.g., "AS"
  name: string;       // e.g., "Ajay Soni"
  subtitle: string;   // e.g., "Employee ID"
  avatarUrl?: string; // Optional avatar image
}
```

---

### TopHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'dark' \| 'light'` | `'dark'` | Color theme |
| `appName` | `string` | `'Product Name'` | Application name |
| `showLogo` | `boolean` | `true` | Show brand logo |
| `showAppName` | `boolean` | `true` | Show app name |
| `showDivider` | `boolean` | `true` | Show divider between logo and name |
| `showMenuItems` | `boolean` | `true` | Show menu items |
| `showAvatar` | `boolean` | `true` | Show user avatar |
| `menuItems` | `TopHeaderMenuItem[]` | `[]` | Menu items |
| `userInitials` | `string` | `'AS'` | User initials for avatar |
| `userAvatarUrl` | `string` | - | User avatar image URL |

**TopHeaderMenuItem:**
```typescript
{
  id: string;              // Unique identifier
  label: string;           // Display text
  icon?: ReactNode;        // Icon component (16px)
  active?: boolean;        // Active state
  showIndicator?: boolean; // Show notification dot
  onClick?: () => void;    // Click handler
}
```

---

### Footer Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lastUpdated` | `string` | `'Sept 23, 2024'` | Last updated date |
| `version` | `string` | `'1.0'` | Version number |
| `feedbackUrl` | `string` | `'#'` | Feedback link URL |
| `feedbackText` | `string` | `'Send us a Feedback here'` | Feedback link text |

---

## Layout Examples

### Full Page Layout

```tsx
import { SideNavigation, TopHeader, Footer } from '@ajaysoni7832/lean-ids-components';

function AppLayout({ children }) {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <SideNavigation
        state="expanded"
        groups={navigationGroups}
        user={currentUser}
      />
      
      {/* Main Content Area */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <TopHeader
          mode="dark"
          appName="My Application"
          menuItems={headerMenuItems}
          userInitials="AS"
        />
        
        {/* Page Content */}
        <main style={{ flex: 1, overflow: 'auto', padding: '24px' }}>
          {children}
        </main>
        
        {/* Footer */}
        <Footer
          lastUpdated="May 7, 2026"
          version="1.0"
        />
      </div>
    </div>
  );
}
```

---

## Styling & Theming

All components use the design system theme:

```typescript
// Colors
theme.colors.palette.primary[800]  // Dark purple background
theme.colors.palette.neutral[50]   // White
theme.colors.palette.neutral[900]  // Dark gray

// Spacing
theme.spacing[3]  // 8px
theme.spacing[4]  // 10px
theme.spacing[5]  // 12px
theme.spacing[7]  // 16px

// Typography
theme.fonts.primary              // Elevance Sans
theme.fontSizes.body            // 16px
theme.fontSizes.paragraph       // 14px
theme.fontWeights.semibold      // 600
theme.fontWeights.regular       // 400
```

---

## Accessibility

All components include:

✅ **ARIA labels** - Proper labeling for screen readers  
✅ **Semantic HTML** - `<nav>`, `<header>`, `<footer>`  
✅ **Keyboard navigation** - Tab, Enter, Space support  
✅ **Focus indicators** - Visible focus states  
✅ **Role attributes** - `role="button"`, `role="img"`, etc.  

---

## Common Patterns

### Toggle Sidebar

```tsx
const [sidebarState, setSidebarState] = useState('expanded');

const toggleSidebar = () => {
  setSidebarState(prev => prev === 'expanded' ? 'collapsed' : 'expanded');
};

<SideNavigation
  state={sidebarState}
  groups={groups}
  user={user}
/>
```

### Active Route Highlighting

```tsx
import { useLocation } from 'react-router-dom';

const location = useLocation();

const menuItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <HomeIcon />,
    active: location.pathname === '/home',
    onClick: () => navigate('/home'),
  },
  // ... more items
];
```

### Notification Count

```tsx
const [notifications, setNotifications] = useState(5);

const menuItems = [
  {
    id: 'notifications',
    label: 'Notifications',
    icon: <BellIcon />,
    showIndicator: notifications > 0,
    onClick: () => navigate('/notifications'),
  },
];
```

---

## Storybook Documentation

View all component variations in Storybook:

```bash
npm run storybook
```

Navigate to:
- **Navigation/SideNavigation** - 5 stories
- **Navigation/TopHeader** - 5 stories  
- **Navigation/Footer** - 3 stories

---

## Troubleshooting

### Icons not showing?
Make sure to import icons from the design system:
```tsx
import { Icon } from '@ajaysoni7832/lean-ids-components';
<Icon name="home" size={24} />
```

### Sidebar not collapsing?
Check that you're passing the correct state prop:
```tsx
state="collapsed"  // Not state={collapsed}
```

### Theme colors not working?
Ensure ThemeProvider wraps your app:
```tsx
import { ThemeProvider } from '@ajaysoni7832/lean-ids-components';

<ThemeProvider>
  <App />
</ThemeProvider>
```

### TypeScript errors?
Import types explicitly:
```tsx
import type { NavigationItem, UserProfile } from '@ajaysoni7832/lean-ids-components';
```

---

## Next Steps

1. **Test in Storybook** - View all variations
2. **Integrate with routing** - Connect to React Router/Next.js
3. **Add analytics** - Track navigation events
4. **Customize icons** - Use your own icon set
5. **Add animations** - Enhance transitions

---

## Support

- 📚 **Storybook:** http://localhost:6006
- 📝 **Full Docs:** `NAVIGATION_COMPONENTS_IMPLEMENTATION.md`
- 🎨 **Figma:** Check original designs for reference

---

**Created:** May 7, 2026  
**Version:** 1.0  
**Components:** 5 (MenuItem, Brand, SideNavigation, TopHeader, Footer)
