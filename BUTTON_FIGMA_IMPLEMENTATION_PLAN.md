# Button Component - Figma Implementation Plan

## Current Status
The Button component has been partially implemented but does NOT match the Figma design specifications.

## Figma Design Specifications

### Component Properties
- **Variants**: primary, secondary, tertiary (currently has 'outlined' and 'link' instead of 'tertiary')
- **Sizes**: xsmall, small, medium, large, xlarge ✅
- **States**: active, disabled, focussed, hover, pressed
- **Types**: default, safe, warning, alert ✅
- **Properties**: Label (boolean), Lead Icon (boolean), Trail Icon (boolean), Label Text (string)

### What Needs to Change

#### 1. **Button Types (Button.types.ts)** ✅ DONE
- ✅ Changed `ButtonVariant` from `'primary' | 'secondary' | 'outlined' | 'link'` to `'primary' | 'secondary' | 'tertiary'`

#### 2. **Button Styles (Button.styles.ts)** ❌ NEEDS COMPLETE REWRITE
Current issues:
- Has 'outlined' and 'link' variants instead of 'tertiary'
- Sizing doesn't match Figma specs exactly
- Color values may not match Figma tokens
- Missing proper state handling (pressed state)
- Focus indicator needs to match turquoise-400

Required changes:
- Remove 'outlined' and 'link' variant styles
- Add 'tertiary' variant with proper styling for all types (default, safe, warning, alert)
- Update all size specifications to match Figma (padding, gap, font-size, border-radius)
- Implement proper state styles:
  - **active**: default state
  - **hover**: hover state
  - **pressed**: active/mousedown state  
  - **focussed**: focus-visible state with turquoise-400 outline
  - **disabled**: disabled state with reduced opacity

#### 3. **Tertiary Variant Specifications** (from Figma)
The tertiary variant should be:
- **Background**: transparent
- **Border**: none
- **Text color**: varies by type
  - default: primary color
  - safe: success color
  - warning: warning color
  - alert: error color
- **Hover**: slight background tint
- **Pressed**: darker background tint
- **Disabled**: reduced opacity, no interaction

#### 4. **Size Specifications** (from Figma)
Need to verify exact pixel values for:
- xsmall: height 27px
- small: height 35px
- medium: height 39px
- large: height 43px
- xlarge: height 48px

Padding and gap values need to match Figma spacing tokens.

#### 5. **Components Using Buttons** - Need Updates
All these components are currently using the old button variants and need to be updated:

| Component | Current Variant | Should Use |
|-----------|----------------|------------|
| AlertBanner | 'link' | 'tertiary' |
| Toast | 'link' | 'tertiary' |
| InlineMessage | 'link' | 'tertiary' |
| Pagination | 'outlined' | 'secondary' or 'primary' |
| TableSettings | 'outlined' | 'secondary' |
| TableCell | 'outlined' | 'secondary' |
| TableHeader | 'outlined' | 'secondary' |

## Implementation Steps

### Step 1: Update Button.styles.ts ❌ TODO
- Remove 'outlined' and 'link' variant code
- Add complete 'tertiary' variant implementation
- Verify all size specifications match Figma
- Ensure all state transitions are correct
- Verify focus indicator uses turquoise-400

### Step 2: Update All Components Using Buttons ❌ TODO
- Replace all `variant="link"` with `variant="tertiary"`
- Replace all `variant="outlined"` with `variant="secondary"`
- Test all components in Storybook

### Step 3: Update Storybook Stories ❌ TODO
- Update Button.stories.tsx to show all variants correctly
- Remove 'outlined' and 'link' from examples
- Add 'tertiary' examples
- Show all states (active, hover, pressed, focussed, disabled)
- Show all types (default, safe, warning, alert)

### Step 4: Testing ❌ TODO
- Visual regression testing in Storybook
- Verify focus indicators are turquoise-400
- Test keyboard navigation
- Test all size variations
- Test with/without icons
- Test icon-only buttons

## Next Actions
1. Completely rewrite Button.styles.ts to match Figma
2. Update all 7 components to use correct variants
3. Test in Storybook
4. Document the changes

## Notes
- The Figma design has 3 variants × 5 sizes × 5 states × 4 types = 300 possible button combinations
- We need to ensure the styled-components implementation covers all these cases
- Focus indicator MUST be turquoise-400 (#1AC2C1) as per design system standards
