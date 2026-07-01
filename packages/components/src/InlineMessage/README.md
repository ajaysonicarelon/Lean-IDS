# InlineMessage Component

Contextual inline messages.

## Quick Start

```tsx
import { InlineMessage } from '@ajaysoni7832/lean-ids-components';
<InlineMessage message="Field is required" type="error" />
```

## API

| Prop | Type | Default |
|------|------|---------|
| `message` | `string` | - |
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` |

## Examples

```tsx
<InlineMessage message="Password must be 8+ characters" type="info" />
<InlineMessage message="Email is invalid" type="error" />
```

## Summary

Use InlineMessage for contextual feedback near form fields.
