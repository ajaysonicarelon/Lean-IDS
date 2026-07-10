# Testing Guide - v1.7.3 Icon Import Fix

## Quick Test Commands

```bash
# 1. Build the package
cd packages/components
npm run build

# 2. Check for errors
echo $?  # Should output: 0

# 3. Verify dist files exist
ls -lh dist/index.js dist/index.esm.js

# 4. Run Storybook (visual testing)
npm run storybook
```

## Detailed Testing Scenarios

### 1. Build Testing

#### Test: Production Build
```bash
cd packages/components
npm run build
```

**Expected Results:**
- ✅ Build completes successfully
- ✅ No EMFILE errors
- ✅ Files created: `dist/index.js`, `dist/index.esm.js`, `dist/index.d.ts`
- ✅ No "Unresolved dependencies" warnings for Material Icons
- ⚠️ TypeScript warnings are OK (existing theme type issues)

#### Test: Bundle Size
```bash
cd packages/components
npm run build
ls -lh dist/
```

**Expected Results:**
- `dist/index.js` - Should be reasonable size (< 500KB)
- `dist/index.esm.js` - Should be reasonable size (< 500KB)
- Bundle should be similar or smaller than v1.7.2

### 2. Icon Component Testing

#### Test: Icon with Valid Name
```tsx
import { Icon } from '@ajaysoni7832/lean-ids-components';

<Icon name="Search" size="medium" />
```

**Expected Results:**
- ✅ Icon renders after brief delay (< 100ms)
- ✅ No console errors
- ✅ Icon displays correctly

#### Test: Icon with Invalid Name
```tsx
<Icon name="NonExistentIcon" />
```

**Expected Results:**
- ✅ Component returns null (nothing renders)
- ✅ Console warning: "Icon 'NonExistentIcon' not found"
- ✅ No errors thrown

#### Test: Icon Name Changes
```tsx
const [iconName, setIconName] = useState('Search');

<Icon name={iconName} />
<button onClick={() => setIconName('Settings')}>Change</button>
```

**Expected Results:**
- ✅ Icon updates when name changes
- ✅ New icon loads correctly
- ✅ No memory leaks

### 3. Named Export Testing

#### Test: Named Icon Exports
```tsx
import { 
  SearchIcon, 
  SettingsIcon, 
  DeleteIcon 
} from '@ajaysoni7832/lean-ids-components';

<SearchIcon />
<SettingsIcon />
<DeleteIcon />
```

**Expected Results:**
- ✅ All icons render immediately (no delay)
- ✅ Icons display correctly
- ✅ No console errors

### 4. Component Integration Testing

#### Test: Table Component
```tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

<AdvancedDataTable
  data={mockData}
  columns={mockColumns}
  enableColumnSettings
  enableSidePanel
/>
```

**Expected Results:**
- ✅ Table renders with all icons (settings, filters, sort, etc.)
- ✅ Column settings modal shows drag indicators
- ✅ Side panel shows filter icons
- ✅ All interactive icons work

#### Test: DateTimePicker
```tsx
import { DateTimePicker } from '@ajaysoni7832/lean-ids-components';

<DateTimePicker
  value={new Date()}
  onChange={handleChange}
/>
```

**Expected Results:**
- ✅ Chevron icons render in calendar navigation
- ✅ Icons are clickable
- ✅ No console errors

#### Test: Accordion
```tsx
import { Accordion } from '@ajaysoni7832/lean-ids-components';

<Accordion heading="Test" leadIcon={<CheckIcon />}>
  Content
</Accordion>
```

**Expected Results:**
- ✅ Expand/collapse icon renders
- ✅ Lead icon renders if provided
- ✅ Icons animate correctly

### 5. Storybook Testing

#### Test: All Stories Load
```bash
npm run storybook
```

**Check each component story:**
- [ ] Icon component stories
- [ ] Table component stories
- [ ] DateTimePicker stories
- [ ] Accordion stories
- [ ] Button stories (with icons)
- [ ] All other components

**Expected Results:**
- ✅ All stories load without errors
- ✅ Icons render in all stories
- ✅ No console errors in browser console
- ✅ No visual regressions

### 6. SSR/Next.js Testing

#### Test: Next.js App Router
```tsx
// app/page.tsx
import { Icon, SearchIcon } from '@ajaysoni7832/lean-ids-components';

export default function Page() {
  return (
    <div>
      <Icon name="Search" />
      <SearchIcon />
    </div>
  );
}
```

**Expected Results:**
- ✅ Page renders on server
- ✅ No hydration errors
- ✅ Icons render on client
- ✅ No console errors

#### Test: Next.js Pages Router
```tsx
// pages/index.tsx
import { Icon } from '@ajaysoni7832/lean-ids-components';

export default function Home() {
  return <Icon name="Settings" />;
}
```

**Expected Results:**
- ✅ Page renders on server
- ✅ Icons render on client
- ✅ No hydration mismatches

### 7. Performance Testing

#### Test: Icon Load Time
```tsx
import { Icon } from '@ajaysoni7832/lean-ids-components';

const start = performance.now();
<Icon name="Search" onLoad={() => {
  const end = performance.now();
  console.log(`Icon loaded in ${end - start}ms`);
}} />
```

**Expected Results:**
- ✅ Icon loads in < 100ms
- ✅ Subsequent renders are instant (cached)

#### Test: Multiple Icons
```tsx
{Array.from({ length: 50 }).map((_, i) => (
  <Icon key={i} name="Search" />
))}
```

**Expected Results:**
- ✅ All icons render
- ✅ No performance degradation
- ✅ No memory leaks

### 8. Browser Compatibility Testing

Test in each browser:
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

**For each browser:**
1. Open Storybook
2. Navigate through all Icon stories
3. Check browser console for errors
4. Verify icons render correctly

### 9. Production Deployment Testing

#### Test: Dev Environment
```bash
# In consuming application
npm install @ajaysoni7832/lean-ids-components@1.7.3
npm run build
npm run start
```

**Expected Results:**
- ✅ Installation successful
- ✅ Build completes without EMFILE errors
- ✅ Application runs correctly
- ✅ Icons render in application

#### Test: Production Build
```bash
npm run build:prod
```

**Expected Results:**
- ✅ Production build completes
- ✅ No EMFILE errors in logs
- ✅ Bundle size is optimized
- ✅ Source maps generated

### 10. Regression Testing

#### Test: Existing Functionality
Verify these still work:
- [ ] All form components
- [ ] All navigation components
- [ ] All data display components
- [ ] All feedback components
- [ ] Theme provider
- [ ] Responsive behavior
- [ ] Accessibility features

## Automated Test Script

Create this test file for automated testing:

```typescript
// test-icon-import.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Icon Import Fix v1.7.3', () => {
  test('Icon component renders with valid name', async ({ page }) => {
    await page.goto('/storybook/?path=/story/icon--default');
    const icon = await page.locator('[data-testid="icon"]');
    await expect(icon).toBeVisible();
  });

  test('Named icon exports render', async ({ page }) => {
    await page.goto('/storybook/?path=/story/icon--named-exports');
    const searchIcon = await page.locator('[data-testid="search-icon"]');
    await expect(searchIcon).toBeVisible();
  });

  test('Table component renders with icons', async ({ page }) => {
    await page.goto('/storybook/?path=/story/table--advanced');
    const settingsIcon = await page.locator('[aria-label="Settings"]');
    await expect(settingsIcon).toBeVisible();
  });

  test('No console errors', async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });
    
    await page.goto('/storybook/');
    await page.waitForTimeout(3000);
    
    expect(errors.filter(e => e.includes('Icon'))).toHaveLength(0);
  });
});
```

## Test Results Template

```markdown
## Test Results - v1.7.3

**Date:** ___________
**Tester:** ___________
**Environment:** ___________

### Build Tests
- [ ] Production build: PASS / FAIL
- [ ] Bundle size: PASS / FAIL
- [ ] No EMFILE errors: PASS / FAIL

### Component Tests
- [ ] Icon component: PASS / FAIL
- [ ] Named exports: PASS / FAIL
- [ ] Table integration: PASS / FAIL
- [ ] DateTimePicker: PASS / FAIL
- [ ] Accordion: PASS / FAIL

### Storybook Tests
- [ ] All stories load: PASS / FAIL
- [ ] No console errors: PASS / FAIL
- [ ] Visual regression: PASS / FAIL

### Browser Tests
- [ ] Chrome: PASS / FAIL
- [ ] Firefox: PASS / FAIL
- [ ] Safari: PASS / FAIL
- [ ] Edge: PASS / FAIL

### Performance Tests
- [ ] Icon load time < 100ms: PASS / FAIL
- [ ] Multiple icons: PASS / FAIL
- [ ] No memory leaks: PASS / FAIL

### Production Tests
- [ ] Dev deployment: PASS / FAIL
- [ ] Prod deployment: PASS / FAIL
- [ ] No runtime errors: PASS / FAIL

### Overall Result
- [ ] APPROVED FOR PRODUCTION
- [ ] NEEDS FIXES

**Notes:**
___________________________________________
___________________________________________
```

## Troubleshooting

### Issue: Icons don't render
**Solution:** Check browser console for import errors. Verify `@mui/icons-material` is installed.

### Issue: Build still fails with EMFILE
**Solution:** Verify you're using v1.7.3. Check rollup.config.js has the regex pattern.

### Issue: Hydration errors in Next.js
**Solution:** Ensure Icon component returns null during loading, not a placeholder.

### Issue: Icons flash/flicker
**Solution:** Use named exports for critical icons instead of dynamic Icon component.

## Sign-off

- [ ] All tests passed
- [ ] No critical issues found
- [ ] Ready for production deployment

**Tested by:** ___________
**Date:** ___________
**Signature:** ___________
