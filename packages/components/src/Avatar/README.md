# Avatar Component

User profile pictures or initials display.

## Quick Start

```bash
npm install @ajaysoni7832/lean-ids-components styled-components
```

```tsx
import { Avatar } from '@ajaysoni7832/lean-ids-components';

<Avatar initials="JD" size="medium" color="blue" />
```

## API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `initials` | `string` | - | User initials (1-2 characters) |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Avatar size |
| `color` | `'blue' \| 'green' \| 'purple' \| 'orange' \| 'pink' \| 'teal' \| 'red'` | `'blue'` | Background color |
| `src` | `string` | - | Image URL (overrides initials) |
| `alt` | `string` | - | Image alt text |

## Examples

```tsx
// With initials
<Avatar initials="JD" size="large" color="purple" />

// With image
<Avatar src="/user.jpg" alt="John Doe" size="medium" />

// Different sizes
<Avatar initials="AB" size="small" />
<Avatar initials="CD" size="medium" />
<Avatar initials="EF" size="large" />

// Different colors
<Avatar initials="JD" color="blue" />
<Avatar initials="JD" color="green" />
<Avatar initials="JD" color="purple" />
```

## Best Practices

✅ Use 1-2 character initials  
✅ Provide alt text for images  
✅ Use consistent sizes in lists  
❌ Don't use more than 2 characters  
❌ Don't forget accessibility

## Summary

Use Avatar for user profile pictures or initials throughout your application.
