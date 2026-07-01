# Toggle Component

On/off switch control.

## Quick Start

```tsx
import { Toggle } from '@ajaysoni7832/lean-ids-components';
<Toggle label="Enable notifications" checked={true} onChange={() => {}} />
```

## API

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | - |
| `checked` | `boolean` | `false` |
| `onChange` | `(checked: boolean) => void` | - |
| `disabled` | `boolean` | `false` |

## Examples

```tsx
<Toggle label="Enable feature" checked={enabled} onChange={setEnabled} />
<Toggle label="Disabled" disabled />
```

## Summary

Use Toggle for on/off settings and feature flags.
