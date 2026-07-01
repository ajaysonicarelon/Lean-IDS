# Link Component

Navigation links.

## Quick Start

```tsx
import { Link } from '@ajaysoni7832/lean-ids-components';
<Link href="/home">Go Home</Link>
```

## API

| Prop | Type | Default |
|------|------|---------|
| `href` | `string` | - |
| `children` | `ReactNode` | - |
| `target` | `string` | - |
| `underline` | `'always' \| 'hover' \| 'none'` | `'hover'` |

## Examples

```tsx
<Link href="/about">About Us</Link>
<Link href="https://example.com" target="_blank">External Link</Link>
<Link href="/contact" underline="always">Contact</Link>
```

## Summary

Use Link for all navigation within your application.
