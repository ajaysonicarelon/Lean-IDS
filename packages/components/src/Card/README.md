# Card Component

Content container with elevation.

## Quick Start

```tsx
import { Card } from '@ajaysoni7832/lean-ids-components';
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</Card>
```

## API

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | - |
| `elevation` | `number` | `1` |
| `padding` | `string` | `'16px'` |

## Examples

```tsx
<Card elevation={2} padding="24px">
  <h3>Title</h3>
  <p>Content</p>
</Card>
```

## Summary

Use Card for grouped content with visual separation.
