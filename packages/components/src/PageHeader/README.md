# PageHeader Component

Page title and actions.

## Quick Start

```tsx
import { PageHeader } from '@ajaysoni7832/lean-ids-components';
<PageHeader 
  title="Dashboard" 
  description="Overview of your account"
  actions={<Button>Create New</Button>}
/>
```

## API

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | - |
| `description` | `string` | - |
| `actions` | `ReactNode` | - |
| `breadcrumbs` | `ReactNode` | - |

## Examples

```tsx
<PageHeader 
  title="Users" 
  description="Manage user accounts"
  actions={<Button>Add User</Button>}
/>
```

## Summary

Use PageHeader for consistent page titles and actions.
