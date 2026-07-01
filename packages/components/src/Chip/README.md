# Chip Component

Removable tags and filters.

## Quick Start

```tsx
import { Chip } from '@ajaysoni7832/lean-ids-components';
<Chip label="Tag" onDelete={() => {}} />
```

## API

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | - |
| `variant` | `'filled' \| 'outlined'` | `'filled'` |
| `onDelete` | `() => void` | - |

## Examples

```tsx
<Chip label="Filled" variant="filled" />
<Chip label="Outlined" variant="outlined" />
<Chip label="Removable" onDelete={() => removeTag()} />
```

## Summary

Use Chip for tags, filters, and removable items.
