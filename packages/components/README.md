# Lean IDS Components

A comprehensive React component library for building consistent, accessible user interfaces. Part of the Lean Internal Design System (IDS).

[![npm version](https://img.shields.io/npm/v/@ajaysoni7832/lean-ids-components.svg)](https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 📦 Installation

```bash
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
```

## 🚀 Quick Start

### 1. Wrap your app with ThemeProvider

```tsx
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@ajaysoni7832/lean-ids-tokens';
import { GlobalStyles } from '@ajaysoni7832/lean-ids-components';

function App() {
  return (
    <ThemeProvider theme={theme}>
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

### Table Components
- **TableHeader** - Sortable column headers
- **TableCell** - Flexible cells

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
