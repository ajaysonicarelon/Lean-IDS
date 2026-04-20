# Angular Components - Lean IDS

Angular implementation of the Lean IDS design system components.

## 📋 Overview

This package contains Angular components that match the React design system exactly. All components use the same design tokens, colors, spacing, and behavior.

## 🎯 Compatibility

- **Angular 17** (primary)
- **Compatible with Angular 15, 16, 17, 18, 19**
- **TypeScript 5.0+**
- **RxJS 7.0+**

## 📦 Installation

```bash
# Install dependencies
npm install

# Build the library
npm run build

# Run tests
npm test
```

## 🚀 Usage

```typescript
import { DataTableModule } from '@lean-ids/angular-components';

@NgModule({
  imports: [DataTableModule],
})
export class AppModule {}
```

## 📁 Structure

```
angular-components/
├── src/
│   ├── lib/
│   │   ├── data-table/           # Advanced data table
│   │   ├── table-header/         # Table header component
│   │   ├── table-cell/           # Table cell component
│   │   ├── pagination/           # Pagination component
│   │   ├── table-settings/       # Settings modal
│   │   ├── inline-message/       # Warning messages
│   │   └── shared/               # Shared utilities
│   ├── models/                   # TypeScript interfaces
│   ├── services/                 # Data services
│   └── styles/                   # Global styles
├── README.md
└── package.json
```

## 🎨 Design System

All components use design tokens from `@lean-ids/tokens`:
- Colors
- Spacing
- Typography
- Borders
- Shadows

## 📚 Components

### DataTable
Full-featured data table with:
- Column freezing (max 3)
- Sorting
- Row selection
- Search
- Pagination
- Column management

See `data-table/README.md` for details.

## 🔧 Development

```bash
# Start development server
npm start

# Build library
npm run build

# Run tests
npm test

# Lint
npm run lint
```

## 📝 License

MIT
