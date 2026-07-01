# TextArea Component

Multi-line text input.

## Quick Start

```tsx
import { TextArea } from '@ajaysoni7832/lean-ids-components';
<TextArea label="Comments" placeholder="Enter your comments" rows={4} />
```

## API

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | - |
| `placeholder` | `string` | - |
| `value` | `string` | - |
| `onChange` | `(e: ChangeEvent) => void` | - |
| `rows` | `number` | `3` |
| `disabled` | `boolean` | `false` |
| `error` | `boolean` | `false` |
| `errorMessage` | `string` | - |

## Examples

```tsx
<TextArea label="Description" placeholder="Enter description" rows={5} />
<TextArea label="Comments" value={comments} onChange={(e) => setComments(e.target.value)} />
```

## Summary

Use TextArea for multi-line text input in forms.
