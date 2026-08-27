# Lean IDS - Internal Design System

A comprehensive React design system for Carelon and Elevance, built with TypeScript and Storybook.

## 🎨 Features

- **React Support**: React 16.8+ to 19.x
- **Dual-Brand Theming**: Support for Carelon and Elevance brand themes
- **Accessibility First**: WCAG 2.1 AA compliant components
- **TypeScript**: Full type safety and IntelliSense support
- **Storybook**: Interactive documentation and component playground
- **Design Tokens**: Centralized design tokens extracted from Figma

## 📦 Packages

This monorepo contains the following packages:

- `@ajaysoni7832/lean-ids-tokens` - Design tokens (colors, spacing, typography, etc.)
- `@ajaysoni7832/lean-ids-components` - React component library (React 16.8-19.x)

## 🚀 Getting Started

### Installation

```bash
npm install @ajaysoni7832/lean-ids-components@1.7.8 @ajaysoni7832/lean-ids-tokens@1.7.8
```

### Usage

```tsx
import { ThemeProvider } from '@lean-ids/components';
import { carelonTheme } from '@lean-ids/tokens';
import { InputField } from '@lean-ids/components';

function App() {
  return (
    <ThemeProvider theme={carelonTheme}>
      <InputField
        label="Email"
        type="email"
        placeholder="Enter your email"
        required
      />
    </ThemeProvider>
  );
}
```

## 🛠️ Development

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

```bash
# Install dependencies
npm install

# Start development mode
npm run dev

# Run Storybook
npm run storybook
```

### Build

```bash
# Build all packages
npm run build

# Build Storybook for deployment
npm run build-storybook
```

## 📚 Documentation

Visit our [Storybook documentation](https://your-github-username.github.io/lean-ids) for:

- Component specifications and properties
- Interactive examples and playground
- Accessibility guidelines
- Design principles and usage guidelines

## 🎯 Component Structure

Each component includes:

- **Specification**: Overview, anatomy, and technical details
- **Properties**: Complete props API with TypeScript definitions
- **Configure**: Interactive playground with live preview
- **Examples**: Common use cases and patterns
- **Guidelines**: When to use, when not to use, do's and don'ts
- **Accessibility**: WCAG compliance and keyboard navigation

## 🔧 Architecture

### Web Components + React Wrappers

Components are built as framework-agnostic web components with React wrappers for optimal developer experience:

```
Component Architecture:
├── Web Component (core)
│   └── Framework-agnostic, reusable
└── React Wrapper
    └── React-specific API and hooks
```

This approach ensures:
- Consistent behavior across the application
- Smaller bundle sizes through code reuse

## 🎨 Theming

Switch between Carelon and Elevance themes:

```tsx
import { ThemeProvider } from '@lean-ids/components';
import { carelonTheme, elevanceTheme } from '@lean-ids/tokens';

// Carelon theme
<ThemeProvider theme={carelonTheme}>
  <App />
</ThemeProvider>

// Elevance theme
<ThemeProvider theme={elevanceTheme}>
  <App />
</ThemeProvider>
```

## 📄 License

UNLICENSED - Private package for Carelon and Elevance

## 👥 Author

Ajay Soni <ajay@carelon.com>
