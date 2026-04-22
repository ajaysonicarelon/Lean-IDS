# Storybook Guidelines for Lean IDS

## Story File Naming Convention

All component story files should follow this standard structure to maintain consistency across the design system.

## Title Structure

### ✅ **Correct Format**

All components should use the **same category prefix**:

```typescript
const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  // ...
};
```

### ❌ **Incorrect Formats**

Do NOT use numbered prefixes or different categories:

```typescript
// ❌ Wrong - numbered prefix
title: '3. Components/ComponentName'

// ❌ Wrong - different category
title: 'UI Components/ComponentName'

// ❌ Wrong - no category
title: 'ComponentName'
```

## Standard Categories

Use these categories for organizing stories:

1. **Components** - All UI components
   - Format: `'Components/ComponentName'`
   - Examples: `'Components/Button'`, `'Components/InputField'`, `'Components/Pagination'`

2. **Design Tokens** - Design system tokens
   - Format: `'Design Tokens/TokenType'`
   - Examples: `'Design Tokens/Colors'`, `'Design Tokens/Typography'`

## Complete Story Template

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered', // or 'padded' for larger components
  },
  tags: ['autodocs'],
  argTypes: {
    // Define your controls here
    propName: {
      control: 'text',
      description: 'Description of the prop',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'default value' },
        category: 'Content', // or 'Appearance', 'State', 'Validation', etc.
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {
    // Default props
  },
};

// Add more story variants as needed
export const Variant: Story = {
  args: {
    // Variant props
  },
};
```

## Best Practices

### 1. **Story Naming**
- Use PascalCase for story names: `Default`, `WithIcon`, `LargeSize`
- First story should always be `Default` or `Playground`

### 2. **ArgTypes Categories**
Organize props into logical categories:
- **Content**: Text, labels, children
- **Appearance**: Visual styling, variants, sizes
- **State**: Disabled, loading, error states
- **Validation**: Required, error messages
- **Layout**: Width, alignment, spacing
- **Interaction**: Callbacks, handlers

### 3. **Layout Parameter**
- Use `'centered'` for small components (buttons, inputs, badges)
- Use `'padded'` for larger components (tables, forms, modals)
- Use `'fullscreen'` for page-level components

### 4. **Documentation**
- Always include `tags: ['autodocs']` to generate automatic documentation
- Add meaningful descriptions to argTypes
- Include usage examples in the component description

## Example: Complete Component Story

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'text'],
      description: 'Visual variant of the button',
      table: {
        type: { summary: 'primary | secondary | text' },
        defaultValue: { summary: 'primary' },
        category: 'Appearance',
      },
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the button',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
        category: 'Appearance',
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
        category: 'State',
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click handler',
      table: {
        category: 'Interaction',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    variant: 'secondary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Button',
    disabled: true,
  },
};
```

## Checklist for New Components

When creating a new component story:

- [ ] Story file named `ComponentName.stories.tsx`
- [ ] Title follows format: `'Components/ComponentName'`
- [ ] Includes `tags: ['autodocs']`
- [ ] All props have argTypes with descriptions
- [ ] Props organized into logical categories
- [ ] At least a `Default` story variant
- [ ] Layout parameter set appropriately
- [ ] Action handlers for callbacks
- [ ] Examples for different states/variants

## Future Updates

When adding new components, always:
1. Follow this template
2. Use `'Components/ComponentName'` for the title
3. Keep all components in the same category
4. Update this guide if new patterns emerge
