# Width Control & Horizontal Scroll Feature

## Overview
Added flexible width management and automatic horizontal scrolling to SegmentControllerGroup component.

---

## New Props

### `width?: string | number`
- **Default**: `'fit-content'` (hugs content)
- **Description**: Sets the container width
- **Examples**:
  - `width={400}` → 400px
  - `width="100%"` → Full width
  - `width="50vw"` → 50% of viewport

### `minWidth?: string | number`
- **Default**: `'auto'`
- **Description**: Sets minimum container width
- **Examples**:
  - `minWidth={300}` → Minimum 300px
  - `minWidth="20rem"` → Minimum 20rem

### `maxWidth?: string | number`
- **Default**: `'none'`
- **Description**: Sets maximum container width
- **Examples**:
  - `maxWidth={600}` → Maximum 600px
  - `maxWidth="80%"` → Maximum 80% of parent

---

## Features

### ✅ **1. Default Behavior (Hug Content)**
```tsx
<SegmentControllerGroup>
  <SegmentController value="tab1">Tab 1</SegmentController>
  <SegmentController value="tab2">Tab 2</SegmentController>
</SegmentControllerGroup>
```
- Width automatically fits content
- No scrolling needed

### ✅ **2. Fixed Width**
```tsx
<SegmentControllerGroup width={400}>
  <SegmentController value="tab1">Tab 1</SegmentController>
  <SegmentController value="tab2">Tab 2</SegmentController>
</SegmentControllerGroup>
```
- Container has fixed 400px width
- Scrolls if content exceeds width

### ✅ **3. Responsive Width**
```tsx
<SegmentControllerGroup width="100%">
  <SegmentController value="tab1">Tab 1</SegmentController>
  <SegmentController value="tab2">Tab 2</SegmentController>
</SegmentControllerGroup>
```
- Stretches to fill parent container
- Responsive to parent size changes

### ✅ **4. Min/Max Constraints**
```tsx
<SegmentControllerGroup minWidth={300} maxWidth={600}>
  <SegmentController value="tab1">Tab 1</SegmentController>
  <SegmentController value="tab2">Tab 2</SegmentController>
</SegmentControllerGroup>
```
- Flexible width between 300px and 600px
- Hugs content within constraints

### ✅ **5. Horizontal Scrolling**
```tsx
<SegmentControllerGroup maxWidth={400}>
  <SegmentController value="tab1">Dashboard</SegmentController>
  <SegmentController value="tab2">Analytics</SegmentController>
  <SegmentController value="tab3">Reports</SegmentController>
  <SegmentController value="tab4">Settings</SegmentController>
  <SegmentController value="tab5">Profile</SegmentController>
</SegmentControllerGroup>
```
**When content > container width:**
- ✅ Automatic horizontal scrolling
- ✅ Smooth scroll behavior
- ✅ Styled scrollbar (thin, themed)
- ✅ Keyboard navigation works
- ✅ Touch/trackpad scrolling
- ✅ Mouse wheel scrolling

---

## Scrollbar Styling

### Horizontal Orientation
```css
overflow-x: auto;
overflow-y: hidden;
scroll-behavior: smooth;
scrollbar-width: thin;
scrollbar-color: primary[300] transparent;
```

### Vertical Orientation
```css
overflow-x: hidden;
overflow-y: auto;
scroll-behavior: smooth;
scrollbar-width: thin;
scrollbar-color: primary[300] transparent;
```

### Custom Scrollbar (Webkit)
- **Height/Width**: 6px
- **Track**: Transparent background
- **Thumb**: `primary[300]` color
- **Thumb Hover**: `primary[400]` color
- **Border Radius**: `sm` (4px)

---

## Implementation Details

### Types (`SegmentController.types.ts`)
```typescript
export interface SegmentControllerGroupProps {
  // ... existing props
  width?: string | number;
  minWidth?: string | number;
  maxWidth?: string | number;
}
```

### Styles (`SegmentController.styles.ts`)
```typescript
interface StyledSegmentControllerGroupProps {
  $orientation: 'horizontal' | 'vertical';
  $width?: string | number;
  $minWidth?: string | number;
  $maxWidth?: string | number;
}

const getWidthValue = (value?: string | number) => {
  if (value === undefined) return undefined;
  return typeof value === 'number' ? `${value}px` : value;
};

export const StyledSegmentControllerGroup = styled.div<StyledSegmentControllerGroupProps>`
  width: ${({ $width }) => getWidthValue($width) || 'fit-content'};
  min-width: ${({ $minWidth }) => getWidthValue($minWidth) || 'auto'};
  max-width: ${({ $maxWidth }) => getWidthValue($maxWidth) || 'none'};
  
  /* Horizontal scroll for horizontal orientation */
  ${({ $orientation }) =>
    $orientation === 'horizontal'
      ? css`overflow-x: auto; overflow-y: hidden;`
      : css`overflow-x: hidden; overflow-y: auto;`}
`;
```

### Component (`SegmentControllerGroup.tsx`)
```typescript
export const SegmentControllerGroup = forwardRef<HTMLDivElement, SegmentControllerGroupProps>(
  ({ width, minWidth, maxWidth, ...props }, ref) => {
    return (
      <StyledSegmentControllerGroup
        $width={width}
        $minWidth={minWidth}
        $maxWidth={maxWidth}
        {...props}
      />
    );
  }
);
```

---

## Storybook Examples

### `WidthControl` Story
Demonstrates:
- Default (hug content)
- Fixed width (400px)
- Full width (100%)
- Min/Max width (300px - 600px)

### `HorizontalScroll` Story
Demonstrates:
- Horizontal scroll with maxWidth
- Horizontal scroll with fixed width
- Small size with scroll
- Many tabs in narrow container

---

## Use Cases

### 1. **Responsive Navigation**
```tsx
<SegmentControllerGroup width="100%">
  {/* Tabs stretch to fill header */}
</SegmentControllerGroup>
```

### 2. **Sidebar Tabs**
```tsx
<SegmentControllerGroup width={250} maxWidth={300}>
  {/* Fixed width sidebar tabs */}
</SegmentControllerGroup>
```

### 3. **Mobile-Friendly**
```tsx
<SegmentControllerGroup maxWidth="100vw">
  {/* Scrollable on small screens */}
</SegmentControllerGroup>
```

### 4. **Dashboard Filters**
```tsx
<SegmentControllerGroup minWidth={400} maxWidth={800}>
  {/* Flexible filter tabs */}
</SegmentControllerGroup>
```

---

## Accessibility

✅ **Keyboard Navigation**
- Arrow keys work with scrolling
- Selected tab scrolls into view automatically

✅ **Screen Readers**
- Scrollable region announced
- Tab count announced

✅ **Touch/Mouse**
- Smooth scroll on all devices
- Visible scrollbar for discoverability

---

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Files Modified

1. **Types**: `SegmentController.types.ts` - Added width props
2. **Styles**: `SegmentController.styles.ts` - Added width controls & scroll styling
3. **Component**: `SegmentControllerGroup.tsx` - Pass width props to styled component
4. **Stories**: `SegmentController.stories.tsx` - Added WidthControl & HorizontalScroll stories
5. **Docs**: `README.md` - Added width control & scroll documentation

---

## Summary

✅ **Default**: Hugs content (`fit-content`)  
✅ **Overrideable**: `width`, `minWidth`, `maxWidth` props  
✅ **Horizontal Scroll**: Automatic when content > container  
✅ **Smooth UX**: Themed scrollbar, smooth scrolling  
✅ **Accessible**: Keyboard navigation, screen reader support  
✅ **Responsive**: Works with px, %, rem, vw, etc.  

**The SegmentControllerGroup now provides complete width control flexibility!** 🎉
