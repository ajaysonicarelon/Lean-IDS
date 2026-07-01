# Lean IDS - AI Assistant Guidelines
**Universal guidelines for all AI coding assistants (Cursor, Windsurf, Cline, GitHub Copilot, etc.)**

---

## � IMPORTANT: Have You Read All Required Files?

**⚠️ If you haven't read these files yet, STOP and read them first:**

1. ✅ **AI_READING_FLOW.md** - Master reading flow
2. ✅ **.cursorrules** or **.windsurfrules** - IDE-specific rules
3. ✅ **This file (AI_GUIDELINES.md)** - You're reading it now
4. ✅ **AI_SETUP_COMPLETE.md** - System overview
5. ✅ **packages/components/README.md** - Package docs

**If you've read all files above, continue. Otherwise, go to AI_READING_FLOW.md first.**

---

## � CRITICAL RULE #1: LIBRARY USAGE

### **USE ONLY LEAN IDS COMPONENTS**

This is the **MOST IMPORTANT** rule. All AI assistants MUST follow this strictly.

#### ✅ ALLOWED IMPORTS:
```tsx
import { Button, Input, Card } from '@lean-ids/components';
import { theme } from '@lean-ids/tokens';
import { IconName } from '@lean-ids/icons';
```

#### ❌ FORBIDDEN IMPORTS:
```tsx
// ❌ NEVER import these
import { Button } from '@mui/material';
import { Input } from 'antd';
import { Card } from '@chakra-ui/react';
import { Button } from 'react-bootstrap';
import { Input } from '@mantine/core';
import { Button } from '@radix-ui/react';
```

### **Complete Forbidden List:**
- Material-UI (MUI) - `@mui/material`
- Ant Design - `antd`
- Chakra UI - `@chakra-ui/react`
- Bootstrap - `react-bootstrap`
- Tailwind UI - `@tailwindui/react`
- Shadcn/ui - `@shadcn/ui`
- Radix UI - `@radix-ui/react`
- Mantine - `@mantine/core`
- Semantic UI - `semantic-ui-react`
- Blueprint - `@blueprintjs/core`
- Evergreen - `evergreen-ui`
- Grommet - `grommet`
- Rebass - `rebass`
- Theme UI - `theme-ui`

---

## 🚨 CRITICAL RULE #2: MODAL & DRAWER COMPONENTS

### **ALWAYS USE LEAN IDS MODAL AND DRAWER COMPONENTS**

**For ANY popup, dialog, or overlay:**
```tsx
// ✅ CORRECT - Use Lean IDS Modal
import { Modal } from '@lean-ids/components';

<Modal
  isOpen={isOpen}
  onClose={onClose}
  title="My Dialog"
>
  {content}
</Modal>
```

**For ANY side panel or drawer:**
```tsx
// ✅ CORRECT - Use Lean IDS Drawer
import { Drawer } from '@lean-ids/components';

<Drawer
  isOpen={isOpen}
  onClose={onClose}
  title="Side Panel"
  position="right"
>
  {content}
</Drawer>
```

### ❌ NEVER CREATE CUSTOM MODALS OR DRAWERS:

```tsx
// ❌ WRONG - Custom modal implementation
const CustomModal = () => (
  <div className="modal-overlay">
    <div className="modal-content">...</div>
  </div>
);

// ❌ WRONG - Custom drawer implementation
const CustomDrawer = () => (
  <div className="drawer-panel">...</div>
);

// ❌ WRONG - Using external modal libraries
import Modal from 'react-modal';
import { Drawer } from '@mui/material';
```

### **ENFORCEMENT:**
- **ALWAYS** use `Modal` from `@lean-ids/components` for popups
- **ALWAYS** use `Drawer` from `@lean-ids/components` for side panels
- **NEVER** create custom overlay components
- **NEVER** use external modal/drawer libraries

---

## 🎯 DECISION TREE

### When User Asks to Create UI:

```
START
  ↓
Is this a FRESH project?
  ├─ YES → Use ONLY Lean IDS ✅
  └─ NO → Does external library already exist in package.json?
           ├─ YES → Can continue using (unless user says otherwise) ✅
           └─ NO → Use ONLY Lean IDS ✅

Did user say "use only Lean IDS" or "replace with Lean IDS"?
  ├─ YES → Replace ALL external components with Lean IDS ✅
  └─ NO → Follow above logic

Does Lean IDS have this component?
  ├─ YES → Use it from @lean-ids/components ✅
  └─ NO → ASK USER what to do ⚠️
```

---

## 📦 AVAILABLE LEAN IDS COMPONENTS

### **Core UI Components:**
- `Button` - Primary, secondary, tertiary variants
- `Input` - Text input with label, error, helper text
- `TextArea` - Multi-line text input
- `Select` - Dropdown select
- `Checkbox` - Checkbox with label
- `Radio` - Radio button with label
- `Toggle` - Toggle/switch component
- `Card` - Container card
- `Chip` - Tag/chip component
- `Badge` - Badge/counter
- `Avatar` - User avatar
- `Divider` - Horizontal/vertical divider
- `Link` - Styled link
- `Tooltip` - Tooltip component
- `Icon` - Icon component

### **Layout Components:**
- `PageLayout` - Main page layout (3 variants)
- `TopHeader` - Top navigation header
- `SideNavigation` - Sidebar navigation
- `Footer` - Page footer
- `PageHeader` - Page title and description
- `Breadcrumb` - Breadcrumb navigation
- `MenuItem` - Menu item component
- `Brand` - Brand logo component

### **Design Tokens:**
- `theme.colors` - Color palette
- `theme.spacing` - Spacing scale
- `theme.fonts` - Typography
- `theme.fontSizes` - Font sizes
- `theme.fontWeights` - Font weights
- `theme.lineHeights` - Line heights
- `theme.radii` - Border radius
- `theme.shadows` - Box shadows

---

## 🎨 PAGE LAYOUT TEMPLATES

### **Template 1: Top Bar Only**
Use when: App needs only top navigation

```tsx
import { PageLayout } from '@lean-ids/components';

<PageLayout
  variant="topbar-only"
  pageTitle="Dashboard"
  pageDescription="Welcome to your dashboard"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: 'Dashboard', isActive: true }
  ]}
  topHeader={{
    appName: "My Application",
    showLogo: true,
    menuItems: [
      { id: '1', label: 'Menu 1', onClick: () => {} },
      { id: '2', label: 'Menu 2', onClick: () => {} }
    ],
    userInitials: "JD",
    userAvatarUrl: "/avatar.jpg"
  }}
  footer={{
    lastUpdated: "May 12, 2026",
    version: "v1.0.0",
    feedbackText: "Facing any issues?",
    feedbackUrl: "/feedback"
  }}
>
  {/* Your page content */}
</PageLayout>
```

### **Template 2: Sidebar Only**
Use when: App needs only sidebar navigation

```tsx
<PageLayout
  variant="sidebar-only"
  pageTitle="Settings"
  breadcrumbs={[...]}
  sideNav={{
    groups: [
      {
        title: "Main",
        items: [
          {
            id: '1',
            label: 'Dashboard',
            icon: <DashboardIcon />,
            active: true,
            onClick: () => {}
          }
        ]
      }
    ],
    user: {
      name: "John Doe",
      subtitle: "john@example.com",
      initials: "JD",
      avatarUrl: "/avatar.jpg"
    },
    isPinned: false,
    onPinChange: (pinned) => console.log('Pinned:', pinned)
  }}
>
  {/* Your page content */}
</PageLayout>
```

### **Template 3: Top Bar + Sidebar**
Use when: App needs both top and sidebar navigation

```tsx
<PageLayout
  variant="topbar-sidebar"
  pageTitle="Dashboard"
  breadcrumbs={[...]}
  topHeader={{
    appName: "My App",
    menuItems: [...],
    userInitials: "JD"
  }}
  sideNav={{
    groups: [...],
    user: {...},
    isPinned: false,
    onPinChange: (pinned) => {}
  }}
>
  {/* Your page content */}
</PageLayout>
```

---

## 🎯 SIDEBAR BEHAVIOR (IMPORTANT!)

### **Current Implementation:**
1. **Default:** Always collapsed (60px wide)
2. **Hover:** Temporarily expands to 236px
3. **Pin Button:**
   - Located on **right side** of brand logo
   - **Hidden by default**, visible on hover
   - Only shown when sidebar is expanded
   - When pinned: sidebar locks at 236px, content adjusts

### **Code Pattern:**
```tsx
const [isPinned, setIsPinned] = useState(false);

<PageLayout
  variant="topbar-sidebar"
  sideNav={{
    groups: [...],
    isPinned: isPinned,
    onPinChange: (pinned) => setIsPinned(pinned)
  }}
/>
```

### **Key Points:**
- ✅ Sidebar is ALWAYS collapsed (60px) by default
- ✅ No `expanded` prop anymore
- ✅ Use `isPinned` to lock sidebar expanded
- ✅ Pin button appears on hover over brand area
- ✅ Content width auto-adjusts when pinned

---

## 🎨 STYLING GUIDELINES

### **1. Always Use Theme Tokens**

```tsx
import styled from 'styled-components';
import { theme } from '@lean-ids/tokens';

// ✅ CORRECT
const StyledComponent = styled.div`
  color: ${({ theme }) => theme.colors.semantic.text.primary};
  background: ${({ theme }) => theme.colors.semantic.background.primary};
  padding: ${({ theme }) => theme.spacing[4]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  border-radius: ${({ theme }) => theme.radii.medium};
`;

// ❌ WRONG - Hardcoded values
const StyledComponent = styled.div`
  color: #333333;
  background: #ffffff;
  padding: 16px;
  font-family: 'Arial';
  font-size: 14px;
  border-radius: 4px;
`;
```

### **2. Theme Provider Required**

```tsx
import { ThemeProvider } from 'styled-components';
import { theme } from '@lean-ids/tokens';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app */}
    </ThemeProvider>
  );
}
```

### **3. NO GRADIENTS - EVER (Unless User Explicitly Requests)**

**CRITICAL:** NEVER use gradients on your own. Only use if user explicitly says "use gradient".

```tsx
// ❌ FORBIDDEN - Never use gradients automatically
const Container = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const Button = styled.button`
  background: linear-gradient(to right, #ff0000, #00ff00);
`;

// ✅ CORRECT - Always use solid colors from theme
const Container = styled.div`
  background: ${({ theme }) => theme.colors.palette.primary[600]};
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.semantic.background.primary};
`;
```

**RULE:**
- ❌ Do NOT use gradients for backgrounds, cards, buttons, or ANY element
- ❌ Do NOT suggest gradients in your code
- ✅ ONLY use gradients if user explicitly requests: "add a gradient" or "use gradient"
- ✅ Always default to solid colors from theme tokens

---

## ✅ CORRECT EXAMPLES

### **Example 1: Login Form**
```tsx
import { Button, Input, Card } from '@lean-ids/components';

function LoginForm() {
  return (
    <Card>
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter your password"
      />
      <Button variant="primary">
        Login
      </Button>
    </Card>
  );
}
```

### **Example 2: Dashboard Page**
```tsx
import { PageLayout, Card, Button } from '@lean-ids/components';

function Dashboard() {
  return (
    <PageLayout
      variant="topbar-sidebar"
      pageTitle="Dashboard"
      topHeader={{ appName: "My App", userInitials: "JD" }}
      sideNav={{ groups: [...], user: {...} }}
    >
      <Card>
        <h2>Welcome to Dashboard</h2>
        <Button variant="primary">Get Started</Button>
      </Card>
    </PageLayout>
  );
}
```

---

## ❌ INCORRECT EXAMPLES

### **Example 1: Using External Library (WRONG)**
```tsx
// ❌ FORBIDDEN
import { Button } from '@mui/material';
import { Input } from 'antd';

function LoginForm() {
  return (
    <div>
      <Input placeholder="Email" />
      <Button>Login</Button>
    </div>
  );
}
```

### **Example 2: Hardcoded Styles (WRONG)**
```tsx
// ❌ WRONG - Hardcoded values
const StyledDiv = styled.div`
  color: #333;
  padding: 16px;
`;

// ✅ CORRECT - Use theme tokens
const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.semantic.text.primary};
  padding: ${({ theme }) => theme.spacing[4]};
`;
```

---

## 🎨 COMPONENT CREATION RULES

### **CRITICAL: Build ONLY from Existing Lean IDS Components**

When creating new features or components, you MUST:

1. **ONLY use existing Lean IDS components** - Never create custom versions
2. **ALWAYS use tokens** from `@lean-ids/tokens` - Never hardcode values
3. **Compose from Lean IDS** - Build complex components from simple ones

### **Examples:**

**Need a form?**
```tsx
// ✅ CORRECT - Use Lean IDS components
import { Input, Button, Card } from '@lean-ids/components';

function LoginForm() {
  return (
    <Card>
      <Input label="Email" type="email" />
      <Input label="Password" type="password" />
      <Button variant="primary">Login</Button>
    </Card>
  );
}

// ❌ WRONG - Creating custom input
const CustomInput = styled.input`
  padding: 12px;
  border: 1px solid #ccc;
`; // Don't do this!
```

**Need chips/tags?**
```tsx
// ✅ CORRECT - Use Lean IDS Chip
import { Chip } from '@lean-ids/components';

<Chip label="Tag" onRemove={() => {}} />

// ❌ WRONG - Creating custom chip
const CustomChip = styled.div`
  padding: 4px 8px;
  border-radius: 16px;
`; // Don't do this!
```

**Building complex components?**
```tsx
// ✅ CORRECT - Compose from Lean IDS components
import { Card, Button, Avatar, Badge } from '@lean-ids/components';
import { theme } from '@lean-ids/tokens';

const UserCard = styled(Card)`
  padding: ${({ theme }) => theme.spacing[4]};
  gap: ${({ theme }) => theme.spacing[2]};
  display: flex;
  align-items: center;
`;

function UserProfile() {
  return (
    <UserCard>
      <Avatar initials="JD" size="large" />
      <Badge label="Active" type="success" />
      <Button variant="secondary">View Profile</Button>
    </UserCard>
  );
}
```

### **Token Usage - MANDATORY:**

**ALWAYS use tokens for:**
- Colors (semantic and palette)
- Spacing (padding, margin, gap)
- Typography (fonts, sizes, weights, line heights)
- Border radius
- Shadows
- Breakpoints

```tsx
// ✅ CORRECT - Always use tokens
const Styled = styled.div`
  color: ${({ theme }) => theme.colors.semantic.text.primary};
  background: ${({ theme }) => theme.colors.semantic.background.primary};
  padding: ${({ theme }) => theme.spacing[4]};
  margin: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  border-radius: ${({ theme }) => theme.radii.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

// ❌ WRONG - Never hardcode
const Styled = styled.div`
  color: #333333;
  background: #ffffff;
  padding: 16px;
  margin: 8px;
  font-family: 'Arial';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;
```

---

## 🎨 ICON USAGE RULES

### **CRITICAL: Icons from Material Icons ONLY**

**For now, we use Material Icons library (`@mui/icons-material`) for all icons.**

```tsx
// ✅ CORRECT - Import ONLY icons from Material
import { Home, Settings, Person, Search, Menu, Close } from '@mui/icons-material';

function MyComponent() {
  return (
    <>
      <Home />
      <Settings />
      <Person />
      <Search />
    </>
  );
}

// ❌ FORBIDDEN - Do NOT import other MUI components
import { Button } from '@mui/material'; // ❌ WRONG!
import { Input } from '@mui/material'; // ❌ WRONG!
import { Card } from '@mui/material'; // ❌ WRONG!
import { TextField } from '@mui/material'; // ❌ WRONG!
```

**RULE:**
- ✅ Import icons from `@mui/icons-material` ONLY
- ❌ Do NOT import Button, Input, Card, TextField, or ANY other UI component from `@mui/material`
- ✅ For UI components, ALWAYS use `@lean-ids/components`
- ✅ Material Icons are the ONLY exception to the "no external libraries" rule

**Why this exception?**
- Material Icons is our temporary icon solution
- We import ONLY icons, nothing else from MUI
- All other UI components must come from Lean IDS

---

## 🚫 WHAT NOT TO DO

### **1. Don't Install External UI Libraries**
```bash
# ❌ FORBIDDEN
npm install @mui/material
npm install antd
npm install chakra-ui
```

### **2. Don't Import External Components**
```tsx
// ❌ FORBIDDEN
import { Button } from '@mui/material';
```

### **3. Don't Create Custom Components When Lean IDS Has Them**
```tsx
// ❌ WRONG
const CustomButton = styled.button`...`;

// ✅ CORRECT
import { Button } from '@lean-ids/components';
```

### **4. Don't Use Inline Styles**
```tsx
// ❌ WRONG
<div style={{ color: '#333', padding: '16px' }}>

// ✅ CORRECT
const StyledDiv = styled.div`
  color: ${({ theme }) => theme.colors.semantic.text.primary};
  padding: ${({ theme }) => theme.spacing[4]};
`;
```

---

## 📋 QUALITY CHECKLIST

Before suggesting code, verify:
- [ ] All UI components from `@lean-ids/components`
- [ ] No external UI library imports (unless pre-existing)
- [ ] Using theme tokens for colors, spacing, fonts
- [ ] Following PageLayout templates for layouts
- [ ] Sidebar behavior matches current implementation
- [ ] TypeScript types are correct
- [ ] Accessibility attributes included
- [ ] Responsive design considered
- [ ] No hardcoded values
- [ ] Theme provider included

---

## 🎓 WHEN TO ASK USER

Ask user for clarification when:
1. ✅ Component doesn't exist in Lean IDS
2. ✅ Unsure if they want to override existing library
3. ✅ Multiple valid approaches exist
4. ✅ Breaking changes would occur
5. ✅ Need to install external library

### **Example Prompts:**
```
"Lean IDS doesn't have a DatePicker component. Would you like me to:
1. Create a custom one using Lean IDS styling
2. Use an external library (react-datepicker)
3. Wait for Lean IDS to add it"
```

```
"I see you have Material-UI in your project. Would you like me to:
1. Continue using MUI for this component
2. Replace it with Lean IDS equivalent
3. Keep both (not recommended)"
```

---

## 🚀 QUICK REFERENCE

### **Import Pattern:**
```tsx
// Components
import { Button, Input, Card } from '@lean-ids/components';

// Tokens
import { theme } from '@lean-ids/tokens';

// Icons
import { IconName } from '@lean-ids/icons';

// Styled Components
import styled from 'styled-components';

// React
import React, { useState, useEffect } from 'react';
```

### **Component Usage:**
```tsx
<Button variant="primary" size="medium">Click Me</Button>
<Input label="Email" placeholder="Enter email" />
<Card>Content</Card>
```

### **Styling:**
```tsx
const Styled = styled.div`
  color: ${({ theme }) => theme.colors.semantic.text.primary};
  padding: ${({ theme }) => theme.spacing[4]};
`;
```

---

## 📞 SUPPORT

For questions or clarifications:
1. Check `/packages/components/src/` for available components
2. Check `/packages/tokens/src/` for design tokens
3. Refer to `PAGE_TEMPLATES_UPDATES.md` for layout guidelines
4. Refer to `SIDEBAR_COLLAPSED_ONLY.md` for sidebar behavior
5. Ask the user if still unclear

---

## 🎯 SUMMARY

**Golden Rules:**
1. 🚨 **USE ONLY LEAN IDS** - No external UI libraries
2. 🎨 **USE THEME TOKENS** - No hardcoded values
3. 📐 **FOLLOW TEMPLATES** - Use PageLayout variants
4. 🤔 **ASK WHEN UNSURE** - Don't guess

**Priority Order:**
1. Lean IDS components (ALWAYS FIRST)
2. Existing project libraries (if already present)
3. Custom components (only if Lean IDS doesn't have it)
4. External libraries (LAST RESORT, ask user first)

---

**Remember:** The goal is to maintain consistency across the design system by using Lean IDS components exclusively for all new development.

**This is a STRICT requirement. All AI assistants MUST follow these guidelines.**
