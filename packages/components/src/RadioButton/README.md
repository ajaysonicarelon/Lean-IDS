# RadioButton Component

Single selection control for forms.

## Quick Start

```tsx
import { RadioButton } from '@ajaysoni7832/lean-ids-components';
<RadioButton label="Option A" value="a" checked={true} onChange={() => {}} />
```

## API

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | - |
| `value` | `string` | - |
| `checked` | `boolean` | `false` |
| `onChange` | `(value: string) => void` | - |
| `disabled` | `boolean` | `false` |

## Examples

```tsx
<RadioButton label="Option A" value="a" checked={selected === 'a'} onChange={setSelected} />
<RadioButton label="Option B" value="b" checked={selected === 'b'} onChange={setSelected} />
```

## Summary

Use RadioButton for single-select options in forms.
