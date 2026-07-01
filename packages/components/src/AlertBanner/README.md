# AlertBanner Component

Persistent alert messages.

## Quick Start

```tsx
import { AlertBanner } from '@ajaysoni7832/lean-ids-components';
<AlertBanner message="Important notice" type="warning" />
```

## API

| Prop | Type | Default |
|------|------|---------|
| `message` | `string` | - |
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` |
| `onClose` | `() => void` | - |
| `closable` | `boolean` | `true` |

## Examples

```tsx
<AlertBanner message="System maintenance scheduled" type="warning" />
<AlertBanner message="Update available" type="info" closable={false} />
```

## Summary

Use AlertBanner for persistent, page-level alerts.
