# Tooltip Component

Hover information display.

## Quick Start

```tsx
import { Tooltip } from '@ajaysoni7832/lean-ids-components';
<Tooltip title="Helpful information">
  <Button>Hover me</Button>
</Tooltip>
```

## API

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | - |
| `children` | `ReactNode` | - |
| `placement` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` |

## Examples

```tsx
<Tooltip title="Click to save">
  <Button>Save</Button>
</Tooltip>

<Tooltip title="More info" placement="right">
  <Icon name="info" />
</Tooltip>
```

## Summary

Use Tooltip for helpful hints and additional information.
