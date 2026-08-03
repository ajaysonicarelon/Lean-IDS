# Storybook Testing Guide

## Overview

This project uses **Storybook Test Runner** with **Playwright** and **Axe** for automated component testing and accessibility validation. This ensures all components meet industry standards for functionality and accessibility.

## What's Included

- **@storybook/test-runner**: Automated testing for all Storybook stories
- **@playwright/test**: Browser automation and testing framework
- **axe-playwright**: Accessibility testing using the industry-standard Axe engine
- **axe-core**: Core accessibility testing library

## Available Test Scripts

### From Root Directory

```bash
# Run all Storybook tests (requires Storybook to be running)
npm run test-storybook

# Run tests in watch mode (auto-rerun on changes)
npm run test-storybook:watch

# Run accessibility-focused tests
npm run test:a11y
```

### From Components Package

```bash
cd packages/components

# Run all tests
npm run test-storybook

# Watch mode
npm run test-storybook:watch

# CI mode (builds Storybook first, then tests)
npm run test-storybook:ci

# Accessibility tests
npm run test:a11y
```

## How to Run Tests

### Method 1: With Running Storybook (Recommended for Development)

1. **Start Storybook** (in one terminal):
   ```bash
   npm run storybook
   ```

2. **Run tests** (in another terminal):
   ```bash
   npm run test-storybook
   ```

### Method 2: Watch Mode (Best for Active Development)

1. **Start Storybook**:
   ```bash
   npm run storybook
   ```

2. **Run tests in watch mode**:
   ```bash
   npm run test-storybook:watch
   ```
   Tests will automatically re-run when you make changes to stories.

### Method 3: CI Mode (For Continuous Integration)

```bash
npm run test-storybook:ci -w @ajaysoni7832/lean-ids-components
```
This builds Storybook and runs all tests in one command.

## What Gets Tested

### 1. **Visual Rendering**
- Each story renders without errors
- Components display correctly in the browser

### 2. **Accessibility (WCAG 2.1 AA)**
The test runner automatically checks every story for:
- **Color contrast** (text vs background)
- **ARIA attributes** (proper roles, labels, descriptions)
- **Keyboard navigation** (focusable elements, tab order)
- **Semantic HTML** (proper heading hierarchy, landmarks)
- **Form labels** (all inputs have associated labels)
- **Alt text** (images have descriptive alternatives)
- **Focus indicators** (visible focus states)

### 3. **Component Behavior**
- Stories execute without JavaScript errors
- Interactive elements respond correctly

## Understanding Test Output

### ✅ Passing Test
```
✅ No accessibility violations in: Button/Primary
```

### ❌ Failing Test with Accessibility Violations
```
❌ Accessibility violations found in story: Button/Primary (button--primary)
Found 2 violation(s):

1. color-contrast: Elements must have sufficient color contrast
   Impact: serious
   Help: https://dequeuniversity.com/rules/axe/4.4/color-contrast
   Affected elements: 1
     - <button class="btn-primary">Click me</button>
       Element has insufficient color contrast of 2.5:1 (foreground color: #999999, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1

2. button-name: Buttons must have discernible text
   Impact: critical
   Help: https://dequeuniversity.com/rules/axe/4.4/button-name
   Affected elements: 1
     - <button aria-label=""></button>
       Element does not have inner text that is visible to screen readers
```

## Configuration Files

### `.storybook/test-runner.ts`
Main test runner configuration with Axe accessibility checks:
- Injects Axe into each story
- Runs accessibility audits after each story renders
- Reports violations with detailed information

### `.storybook/test-runner-jest.config.js`
Jest configuration for the test runner:
- 30-second timeout per test
- 4 parallel workers
- Chromium browser only (for speed)
- Verbose output

## Skipping Tests for Specific Stories

If you need to skip tests for a specific story (e.g., work in progress):

```typescript
export const MyStory = {
  args: { ... },
  tags: ['skip-test'], // This story will be skipped
};
```

## Best Practices

### 1. **Write Accessible Stories**
Every story should demonstrate accessible usage:
```typescript
export const AccessibleButton: Story = {
  args: {
    children: 'Click me',
    'aria-label': 'Submit form',
  },
};
```

### 2. **Test All States**
Create stories for all component states:
- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Error
- Empty

### 3. **Test Different Variants**
```typescript
export const AllSizes: Story = {
  render: () => (
    <>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </>
  ),
};
```

### 4. **Run Tests Before Committing**
```bash
# Quick check
npm run test-storybook

# Full check with accessibility focus
npm run test:a11y
```

## Integrating with CI/CD

Add to your `.github/workflows/ci.yml`:

```yaml
- name: Install dependencies
  run: npm ci

- name: Install Playwright browsers
  run: npx playwright install --with-deps chromium

- name: Build Storybook
  run: npm run build-storybook

- name: Run Storybook tests
  run: npm run test-storybook:ci -w @ajaysoni7832/lean-ids-components
```

## Accessibility Standards

Tests validate against:
- **WCAG 2.1 Level AA** (Web Content Accessibility Guidelines)
- **Section 508** (US Federal accessibility requirements)
- **ADA** (Americans with Disabilities Act)

## Common Issues & Solutions

### Issue: "Cannot find Storybook instance"
**Solution**: Make sure Storybook is running on port 6006
```bash
npm run storybook
```

### Issue: "Timeout waiting for story"
**Solution**: Increase timeout in `.storybook/test-runner-jest.config.js`:
```javascript
testTimeout: 60000, // 60 seconds
```

### Issue: "Color contrast violation"
**Solution**: Use design tokens from `@lean-ids/tokens`:
```typescript
color: ${({ theme }) => theme.colors.text.primary}
background: ${({ theme }) => theme.colors.background.primary}
```

### Issue: "Missing ARIA label"
**Solution**: Add proper accessibility attributes:
```typescript
<button aria-label="Close dialog">×</button>
```

## Resources

- [Storybook Test Runner Docs](https://storybook.js.org/docs/react/writing-tests/test-runner)
- [Playwright Documentation](https://playwright.dev/)
- [Axe Accessibility Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

## Next Steps

1. ✅ Run your first test: `npm run storybook` then `npm run test-storybook`
2. ✅ Fix any accessibility violations found
3. ✅ Add tests to your CI/CD pipeline
4. ✅ Make accessibility testing part of your component development workflow

---

**Remember**: Every story is a test. Write comprehensive stories, and you'll have comprehensive test coverage! 🚀
