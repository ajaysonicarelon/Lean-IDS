# Checkbox Component

Selection control for forms.

## Quick Start

```tsx
import { Checkbox } from '@ajaysoni7832/lean-ids-components';
<Checkbox label="Accept terms" checked={true} onChange={() => {}} />
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
<Checkbox label="Option 1" checked={checked} onChange={setChecked} />
<Checkbox label="Disabled" disabled />
```

## Summary

Use Checkbox for multi-select options in forms.
