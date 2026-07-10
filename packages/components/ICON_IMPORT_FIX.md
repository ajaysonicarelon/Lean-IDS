# Material Icons Import Fix

## Problem
The application was experiencing `EMFILE: too many open files` errors during Vite build in production:

```
error during build:
[vite:load-fallback] Could not load /app/node_modules/@ajaysoni7832/lean-ids-components/node_modules/@mui/icons-material/CasinoOutlined.mjs (imported by node_modules/@ajaysoni7832/lean-ids-components/node_modules/@mui/icons-material/index.mjs): EMFILE: too many open files
```

## Root Cause
The `Icon.tsx` component was using a **wildcard import**:
```tsx
import * as MuiIcons from '@mui/icons-material';
```

This caused Vite to attempt loading **all 2000+ Material Icon files** simultaneously during the build process, exceeding the system's file descriptor limit.

## Solution
Replaced the wildcard import with **dynamic imports** that load icons on-demand:

### Before (❌ Causes build failure)
```tsx
import * as MuiIcons from '@mui/icons-material';

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = (MuiIcons as any)[name];
  // ...
};
```

### After (✅ Fixed)
```tsx
import React, { useState, useEffect } from 'react';

export const Icon: React.FC<IconProps> = ({ name, ...props }) => {
  const [IconComponent, setIconComponent] = useState<React.ComponentType<any> | null>(null);

  useEffect(() => {
    import(`@mui/icons-material/${name}`)
      .then((module) => setIconComponent(() => module.default))
      .catch((error) => console.warn(`Icon "${name}" not found`, error));
  }, [name]);
  
  if (!IconComponent) return null;
  // ...
};
```

### Named Exports (✅ Direct imports for tree-shaking)
```tsx
// Commonly used icons use direct imports for better performance
export { default as ArrowBackIcon } from '@mui/icons-material/ArrowBack';
export { default as SearchIcon } from '@mui/icons-material/Search';
// ... etc
```

## Benefits
1. **Fixes build errors**: No longer attempts to load all icons at once
2. **Better tree-shaking**: Only icons actually used are bundled
3. **Smaller bundle size**: Unused icons are excluded from production builds
4. **On-demand loading**: Icons load only when needed at runtime

## Best Practices for Material Icons

### ✅ DO: Use direct imports
```tsx
import { Search, Settings, Download } from '@mui/icons-material';
```

### ✅ DO: Use the Icon component with name prop
```tsx
import { Icon } from '@lean-ids/components';
<Icon name="Search" size="medium" />
```

### ✅ DO: Use named exports from Icon component
```tsx
import { SearchIcon, SettingsIcon } from '@lean-ids/components';
<SearchIcon />
```

### ❌ DON'T: Use wildcard imports
```tsx
import * as MuiIcons from '@mui/icons-material'; // ❌ NEVER DO THIS
```

### ❌ DON'T: Import from barrel export
```tsx
import { Search } from '@mui/icons-material/index'; // ❌ Avoid
```

## Testing
After this fix, the build should complete successfully without file descriptor errors. Test by:

1. Running production build: `npm run build`
2. Verifying no `EMFILE` errors occur
3. Checking bundle size is reasonable
4. Testing icon rendering in the application

## Related Files
- `packages/components/src/Icon/Icon.tsx` - Main fix location
- `packages/components/src/Icon/Icon.types.ts` - Type definitions
- All component files using Material Icons

## References
- [Vite Issue: Too many open files](https://github.com/vitejs/vite/issues/2820)
- [Material-UI Icons Tree Shaking](https://mui.com/material-ui/guides/minimizing-bundle-size/#option-one-use-path-imports)
