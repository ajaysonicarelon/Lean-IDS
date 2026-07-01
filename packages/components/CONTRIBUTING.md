# Contributing to Lean IDS

Thank you for your interest in contributing to the Lean IDS design system!

## Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development mode:
   ```bash
   npm run dev
   ```

4. Run Storybook:
   ```bash
   npm run storybook
   ```

## Project Structure

```
lean-ids/
├── packages/
│   ├── tokens/          # Design tokens (colors, spacing, typography)
│   ├── components/      # React components
│   ├── icons/          # Icon system
│   └── utils/          # Shared utilities
├── .storybook/         # Storybook configuration
└── .github/            # GitHub Actions workflows
```

## Development Workflow

### Adding a New Component

1. Create component directory in `packages/components/src/`
2. Create the following files:
   - `ComponentName.tsx` - Main component
   - `ComponentName.types.ts` - TypeScript types
   - `ComponentName.styles.ts` - Styled components
   - `ComponentName.stories.tsx` - Storybook documentation
   - `index.ts` - Exports

3. Follow the InputField component as a reference

### Component Documentation

Each component must include comprehensive Storybook documentation with:

- **Specification**: Overview, anatomy, sizes, states
- **Properties**: Complete props table with descriptions
- **Configure**: Interactive playground
- **Examples**: Common use cases and patterns
- **Guidelines**: About, Purpose, When to Use/Not Use
- **Accessibility**: WCAG compliance details

### Design Tokens

Design tokens are defined in `packages/tokens/src/`:
- `colors.ts` - Color palettes and semantic colors
- `spacing.ts` - Spacing scale
- `typography.ts` - Font definitions
- `shadows.ts` - Elevation system
- `borders.ts` - Border radius and width
- `breakpoints.ts` - Responsive breakpoints

### Theming

Both Carelon and Elevance themes must be supported:
- Use semantic color tokens from the theme
- Test components with both themes in Storybook
- Ensure visual consistency across themes

## Code Standards

### TypeScript

- Use strict TypeScript
- Define proper types for all props
- Avoid `any` types

### Accessibility

All components must:
- Meet WCAG 2.1 AA standards
- Support keyboard navigation
- Include proper ARIA labels
- Announce changes to screen readers
- Have clear focus indicators

### Styling

- Use styled-components
- Reference theme tokens (no hardcoded values)
- Follow the 8px grid system
- Ensure responsive design

### Naming Conventions

- Components: PascalCase (e.g., `InputField`)
- Files: PascalCase for components, camelCase for utilities
- Props: camelCase
- CSS classes: kebab-case (if needed)

## Testing

### Manual Testing

1. Test in Storybook with both themes
2. Test keyboard navigation
3. Test with screen readers
4. Test in different browsers
5. Test responsive behavior

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Update documentation
4. Test thoroughly
5. Submit PR with clear description
6. Address review feedback

## Questions?

Contact the design system team or open an issue.
