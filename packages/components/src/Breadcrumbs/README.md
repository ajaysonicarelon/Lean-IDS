# Breadcrumbs Component

Navigation breadcrumb trail.

## Quick Start

```tsx
import { Breadcrumbs } from '@ajaysoni7832/lean-ids-components';
<Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Details' }
]} />
```

## API

| Prop | Type | Default |
|------|------|---------|
| `items` | `Array<{label: string, href?: string}>` | - |
| `separator` | `string \| ReactNode` | `'/'` |

## Examples

```tsx
<Breadcrumbs items={[
  { label: 'Home', href: '/' },
  { label: 'Current Page' }
]} />
```

## Summary

Use Breadcrumbs for hierarchical navigation. See NAVIGATION_GUIDE.md for details.
