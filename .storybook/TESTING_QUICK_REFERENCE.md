# Storybook Testing - Quick Reference

## 🚀 Quick Start

```bash
# Terminal 1: Start Storybook
npm run storybook

# Terminal 2: Run tests
npm run test-storybook
```

## 📋 Common Commands

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook dev server (port 6007) |
| `npm run test-storybook` | Run all tests once |
| `npm run test-storybook:watch` | Run tests in watch mode (auto-rerun) |
| `npm run test:a11y` | Run accessibility-focused tests |
| `npm run build-storybook` | Build static Storybook |

## 🎯 Test What?

Every story is tested for:
- ✅ Visual rendering (no errors)
- ✅ Accessibility (WCAG 2.1 AA)
- ✅ Color contrast
- ✅ ARIA attributes
- ✅ Keyboard navigation
- ✅ Semantic HTML

## 📊 Understanding Results

### ✅ Pass
```
✅ No accessibility violations in: Button/Primary
```

### ❌ Fail
```
❌ Accessibility violations found in story: Button/Primary
Found 1 violation(s):

1. color-contrast: Elements must have sufficient color contrast
   Impact: serious
   Help: https://dequeuniversity.com/rules/axe/4.4/color-contrast
```

## 🔧 Skip a Story

```typescript
export const MyStory = {
  args: { ... },
  tags: ['skip-test'], // Skip this story
};
```

## 🐛 Common Issues

| Issue | Solution |
|-------|----------|
| "Cannot find Storybook" | Run `npm run storybook` first |
| "Timeout" | Increase timeout in `.storybook/test-runner-jest.config.js` |
| "Color contrast" | Use design tokens from `@lean-ids/tokens` |
| "Missing ARIA" | Add `aria-label` or `aria-labelledby` |

## 📚 Files

- **Config**: `.storybook/test-runner.ts`
- **Jest Config**: `.storybook/test-runner-jest.config.js`
- **Full Guide**: `STORYBOOK_TESTING_GUIDE.md`
- **Setup Summary**: `STORYBOOK_TEST_SETUP_COMPLETE.md`

## 🎓 Best Practices

1. **Run tests before committing**
2. **Fix violations as you build**
3. **Use watch mode during development**
4. **Test all component states**
5. **Write accessible stories**

## 🔗 Resources

- [Axe Rules](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)
- [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)
- [Storybook Docs](https://storybook.js.org/docs/react/writing-tests/test-runner)
