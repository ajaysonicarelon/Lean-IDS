# Lean IDS Components

A comprehensive React component library for building consistent, accessible user interfaces. Part of the Lean Internal Design System (IDS).

[![npm version](https://img.shields.io/npm/v/@ajaysoni7832/lean-ids-components.svg)](https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 🎉 What's New in v1.7.1

- ✨ **New Components** - TableSidePanel, Accordion, DateTimePickers (DateTimePicker, TimePicker, DateTimeRangePicker)
- 📊 **EnhancedTableTemplate** - Advanced table with sorting, filtering, pagination, and side panel integration
- 📦 **New Dependency** - Added date-fns@4.4.0 for date handling
- 📚 **Updates Page** - New Updates & Changelog page in Storybook with version history
- **Update Notifications** - localStorage-based notification system for new releases
- 🔧 **Component Improvements** - Enhanced Table, TableHeader, TableSettings, Select, and PageLayout

📖 **[Read Full Release Notes](./RELEASE_NOTES.md)** | **[Migration Guide](./MIGRATION_GUIDE.md)**

---

## 🤖 AI Assistant Setup (CRITICAL - READ FIRST!)

**⚠️ If you're using AI coding assistants (Cursor, Windsurf, GitHub Copilot, etc.), you MUST set up AI guidelines first!**

### **Why This Matters:**
Without proper setup, AI assistants will suggest external UI libraries (Material-UI, Ant Design, etc.) instead of Lean IDS components, breaking design system consistency.

### **Quick Setup (Choose One):**

#### **Option 1: Automatic Setup (Recommended)**
After installing the package, copy the AI guidelines to your project root:

```bash
# Copy AI guidelines from node_modules
cp node_modules/@ajaysoni7832/lean-ids-components/.cursorrules .
cp node_modules/@ajaysoni7832/lean-ids-components/.windsurfrules .
cp node_modules/@ajaysoni7832/lean-ids-components/AI_GUIDELINES.md .
cp node_modules/@ajaysoni7832/lean-ids-components/AI_READING_FLOW.md .
```

#### **Option 2: Manual Download**
Download these files from the repository and place them in your project root:
- [AI_READING_FLOW.md](https://github.com/ajaysonicarelon/Lean-IDS/blob/main/AI_READING_FLOW.md) - Start here
- [.cursorrules](https://github.com/ajaysonicarelon/Lean-IDS/blob/main/.cursorrules) - For Cursor IDE
- [.windsurfrules](https://github.com/ajaysonicarelon/Lean-IDS/blob/main/.windsurfrules) - For Windsurf IDE
- [AI_GUIDELINES.md](https://github.com/ajaysonicarelon/Lean-IDS/blob/main/AI_GUIDELINES.md) - Universal guidelines

#### **Option 3: Quick Prompt**
If you can't set up files, tell your AI assistant:

> "Use ONLY components from @ajaysoni7832/lean-ids-components. Do NOT use Material-UI, Ant Design, Chakra UI, or any other external UI library. Import all components from @ajaysoni7832/lean-ids-components and use theme tokens from @ajaysoni7832/lean-ids-tokens. Never create custom modal or drawer components - always use Modal and Drawer from Lean IDS."

### **Verification:**
After setup, test by asking your AI:
```
"Create a button component"
```

**Expected Response:**
```tsx
import { Button } from '@ajaysoni7832/lean-ids-components';
```

**Wrong Response (means setup failed):**
```tsx
import { Button } from '@mui/material'; // ❌ This means AI didn't read guidelines
```

---

## 📦 Installation

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
```

**Note:** `styled-components` is a peer dependency. You must install it separately.

### Framework-Specific Setup

Lean IDS works with all modern React frameworks:
- ✅ **Next.js** (App Router & Pages Router)
- ✅ **Vite**
- ✅ **Create React App**
- ✅ **Remix**

📖 **See [FRAMEWORK_SUPPORT.md](./FRAMEWORK_SUPPORT.md) for detailed setup guides.**

## 🚀 Quick Start

### 1. Wrap your app with ThemeProvider

Lean IDS provides **two brand themes**: `carelonTheme` (default) and `elevanceTheme`.

```tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { carelonTheme, elevanceTheme } from '@ajaysoni7832/lean-ids-tokens';
import { GlobalStyles } from '@ajaysoni7832/lean-ids-components';

function App() {
  return (
    <ThemeProvider theme={carelonTheme}> {/* or elevanceTheme */}
      <GlobalStyles />
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

### 2. Import and use components

```tsx
import { Button, Avatar, Badge, InputField } from '@ajaysoni7832/lean-ids-components';

function MyComponent() {
  return (
    <div>
      <Avatar size="large" initials="JD" color="purple" />
      <InputField label="Email" placeholder="Enter your email" />
      <Badge label="Active" type="success" />
      <Button label="Submit" variant="primary" />
    </div>
  );
}
```

## 📚 Available Components

### Form Components
- **Button** - Primary, secondary, tertiary, ghost variants
- **InputField** - Text inputs with labels, errors, helper text
- **Checkbox** - Single or grouped checkboxes
- **RadioButton** - Radio button groups
- **Toggle** - On/off switch

### Display Components
- **Avatar** - User profile pictures or initials (3 sizes, 7 colors)
- **Badge** - Status indicators
- **Chip** - Removable tags
- **Toast** - Temporary notifications
- **AlertBanner** - Persistent alerts
- **InlineMessage** - Contextual messages

### Navigation Components
- **Breadcrumb** - Individual breadcrumb item
- **BreadcrumbSeparator** - Separator
- **Breadcrumbs** - Complete navigation

### Data Display Components
- **Table** - Full-featured data table with:
  - Row selection (single/multiple)
  - Sortable columns with visual indicators
  - Pagination
  - Column visibility controls
  - Column reordering
  - Locked columns (left/right)
  - Global search
  - Row actions
  - Settings panel
  - Toolbar with title and description
  - Responsive design
- **EnhancedTableTemplate** - Advanced table template with sorting, filtering, pagination, and side panel integration
- **TableHeader** - Sortable column headers
- **TableCell** - Flexible cells
- **TableSidePanel** - Collapsible/expandable side panel for table detail views
- **TableSubHeader** - Enhanced table header component
- **TableSettings** - Column visibility controls
- **Accordion** - Expand/collapse component for organizing content
- **DateTimePickers** - Date and time selection components:
  - **DateTimePicker** - Combined date and time picker
  - **TimePicker** - Time selection only
  - **DateTimeRangePicker** - Date and time range selection

## ⚠️ Important: Do's and Don'ts

### ✅ Do's
- Always wrap your app with `ThemeProvider`
- Include `GlobalStyles` component
- Use theme tokens for custom styling
- Follow TypeScript types

### ❌ Don'ts
- Don't override styles with `!important`
- Don't mix with other UI libraries
- Don't hardcode colors/spacing
- Don't forget to install `@ajaysoni7832/lean-ids-tokens`

## 📖 Documentation

- **GitHub:** https://github.com/ajaysonicarelon/Lean-IDS
- **Figma:** https://www.figma.com/design/krtBe5bwqddbHpFjYC5S13/Lean---IDS

## 📄 License

MIT © Ajay Soni
