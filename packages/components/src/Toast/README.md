# Toast Component

Temporary notification messages.

## Quick Start

```tsx
import { Toast } from '@ajaysoni7832/lean-ids-components';
<Toast message="Success!" type="success" onClose={() => {}} />
```

## API

| Prop | Type | Default |
|------|------|---------|
| `message` | `string` | - |
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` |
| `duration` | `number` | `3000` |
| `onClose` | `() => void` | - |

## Examples

```tsx
<Toast message="Saved successfully!" type="success" />
<Toast message="Error occurred" type="error" />
<Toast message="Warning message" type="warning" duration={5000} />
```

## Summary

Use Toast for temporary feedback messages.
