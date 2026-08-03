# Navigation Components - Quick Implementation Checklist

**Use this checklist to track your implementation progress**

---

## 🔧 SideNavigation Refactor

### **Phase 1: Component Setup** (30 min)

- [ ] Add `forwardRef` wrapper
- [ ] Add `as` prop for polymorphism
- [ ] Add `...restProps` spread to root element
- [ ] Import `Typography` component
- [ ] Add `useTheme()` hook if needed

### **Phase 2: Typography Migration** (20 min)

- [ ] Replace `<GroupTitle>` with `<Typography variant="caption" weight="medium">`
- [ ] Replace `<UserName>` with `<Typography variant="body" weight="semibold">`
- [ ] Replace `<UserSubtitle>` with `<Typography variant="caption">`
- [ ] Test that all text renders correctly

### **Phase 3: States Implementation** (45 min)

- [ ] Add loading state (spinner + "Loading..." text)
- [ ] Add empty state (empty message)
- [ ] Add error state (error message with red text)
- [ ] Add disabled state (opacity + pointer-events)
- [ ] Test all 4 states render correctly

### **Phase 4: Event Callbacks** (30 min)

- [ ] Add `useEffect` to track state changes
- [ ] Implement `onExpand` callback
- [ ] Implement `onCollapse` callback
- [ ] Implement `onAfterExpand` callback (with 300ms delay)
- [ ] Implement `onAfterCollapse` callback (with 300ms delay)
- [ ] Update `handleMenuItemClick` to call `onMenuItemClick`
- [ ] Update `handleMenuItemHover` to call `onMenuItemHover`
- [ ] Test all callbacks fire correctly

### **Phase 5: Keyboard Navigation** (20 min)

- [ ] Add `handleKeyDown` function
- [ ] Implement Escape key to collapse sidebar
- [ ] Add `tabIndex={-1}` to root element
- [ ] Update button `aria-label` with keyboard hints
- [ ] Test keyboard navigation works

### **Phase 6: Style Overrides** (15 min)

- [ ] Apply `brandClassName` to BrandContainer
- [ ] Apply `groupsClassName` to NavigationGroups
- [ ] Apply `userClassName` to UserProfileContainer
- [ ] Apply `toggleButtonClassName` to ToggleButton
- [ ] Apply `pinButtonClassName` to PinButton
- [ ] Test custom classes apply correctly

### **Phase 7: Storybook Updates** (30 min)

- [ ] Import Typography in stories file
- [ ] Replace all HTML tags with Typography
- [ ] Add Loading story
- [ ] Add Empty story
- [ ] Add Error story
- [ ] Add Disabled story
- [ ] Add WithCallbacks story
- [ ] Add AsSection story (polymorphic)
- [ ] Add WithCustomStyles story
- [ ] Test all stories render correctly

**Total Time: ~3 hours**

---

## 🆕 TopNavigation Creation

### **Phase 1: Types** (15 min)

- [ ] Create `TopNavigation.types.ts`
- [ ] Define `TopNavigationItem` interface
- [ ] Define `TopNavigationProps` interface (with all checklist requirements)
- [ ] Export types

### **Phase 2: Styles** (20 min)

- [ ] Create `TopNavigation.styles.ts`
- [ ] Create `StyledTopNavigation` with tokens
- [ ] Create `LogoContainer`
- [ ] Create `ItemsContainer`
- [ ] Create `ActionsContainer`
- [ ] Create `LoadingContainer`
- [ ] Test styles compile

### **Phase 3: Component** (45 min)

- [ ] Create `TopNavigation.tsx`
- [ ] Add forwardRef wrapper
- [ ] Implement loading state
- [ ] Implement empty state
- [ ] Implement error state
- [ ] Implement default state
- [ ] Add logo section
- [ ] Add items section (map MenuItem components)
- [ ] Add actions section
- [ ] Add displayName
- [ ] Test component renders

### **Phase 4: Storybook** (30 min)

- [ ] Create `TopNavigation.stories.tsx`
- [ ] Add meta with Typography description
- [ ] Add Default story
- [ ] Add Loading story
- [ ] Add Empty story
- [ ] Add Error story
- [ ] Add Disabled story
- [ ] Add DarkMode story
- [ ] Add WithIcons story
- [ ] Add WithNotifications story
- [ ] Add NonSticky story
- [ ] Add NoBorder story
- [ ] Add AsHeader story (polymorphic)
- [ ] Add WithCallbacks story
- [ ] Test all stories

### **Phase 5: Exports** (5 min)

- [ ] Create `index.ts` in TopNavigation folder
- [ ] Export component and types
- [ ] Add exports to `packages/components/src/index.ts`
- [ ] Test imports work

### **Phase 6: Tests** (30 min)

- [ ] Create `__tests__/TopNavigation.test.tsx`
- [ ] Add forwardRef test
- [ ] Add polymorphic test
- [ ] Add states tests
- [ ] Add event callback tests
- [ ] Add accessibility tests
- [ ] Add style override tests
- [ ] Run tests

**Total Time: ~2.5 hours**

---

## ✅ Verification Checklist

### **Before Committing:**

- [ ] All TypeScript errors resolved
- [ ] All lint warnings addressed
- [ ] All tests passing
- [ ] Storybook builds successfully
- [ ] Components render in Storybook
- [ ] All states work correctly
- [ ] All event callbacks fire
- [ ] Keyboard navigation works
- [ ] Screen reader announces correctly
- [ ] Custom styles apply
- [ ] forwardRef works
- [ ] Polymorphic rendering works

### **Code Review Checklist:**

- [ ] No hardcoded pixel values
- [ ] All colors use theme tokens
- [ ] All spacing uses theme tokens
- [ ] Typography component used (no custom text)
- [ ] All ARIA attributes present
- [ ] Keyboard navigation implemented
- [ ] Focus indicators visible
- [ ] All 8 states implemented
- [ ] Event callbacks documented
- [ ] Props have JSDoc comments
- [ ] Storybook uses Typography (no HTML tags)

---

## 📊 Progress Tracking

### **SideNavigation**
- [ ] Phase 1: Component Setup
- [ ] Phase 2: Typography Migration
- [ ] Phase 3: States Implementation
- [ ] Phase 4: Event Callbacks
- [ ] Phase 5: Keyboard Navigation
- [ ] Phase 6: Style Overrides
- [ ] Phase 7: Storybook Updates

### **TopNavigation**
- [ ] Phase 1: Types
- [ ] Phase 2: Styles
- [ ] Phase 3: Component
- [ ] Phase 4: Storybook
- [ ] Phase 5: Exports
- [ ] Phase 6: Tests

---

## 🚀 Quick Start Commands

```bash
# Start Storybook
npm run storybook

# Run tests
npm test

# Run tests in watch mode
npm test -- --watch

# Build components
npm run build

# Lint
npm run lint

# Type check
npm run type-check
```

---

## 📝 Notes Section

Use this space to track issues, questions, or decisions:

```
Date: _________
Developer: _________

Issues Found:
- 

Questions:
- 

Decisions Made:
- 

Next Steps:
- 
```

---

**Print this checklist and check off items as you complete them!**
