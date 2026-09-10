---
name: lean-ds-c
description: Generate UI screens and components that match the Lean DS Carelon brand visual design system — including colors, typography, spacing, shadows, and component patterns. Use this skill whenever building healthcare enterprise applications that need to follow Carelon's design language with WCAG 2.1 AA accessibility compliance.
---

# Lean DS - Carelon Design System

## Skill Objective

Produce UI screen specs, component blueprints, or full page layouts that faithfully replicate the **Lean DS Carelon** design language. This is a healthcare-focused, enterprise-grade design system built for accessibility, consistency, and professional aesthetics. All tokens below are semantic tokens that map to the Carelon brand theme.

---

## Design Tokens

### Color Palette

#### Semantic Text Colors

| Token | Hex | Role |
|-------|-----|------|
| `text.primary` | `#222222` | All text (paragraphs, headings, headlines) - gray-900 |
| `text.secondary` | `#6C6C6C` | Muted, caption, tertiary text - gray-700 |
| `text.disabled` | `#D5D5D5` | Disabled text - gray-400 |
| `text.inverse` | `#FFFFFF` | Text on dark backgrounds - gray-50 |
| `text.error` | `#A80730` | Error text - red-600 |
| `text.success` | `#0D6D06` | Success text - green-600 |
| `text.warning` | `#CC970E` | Warning text - yellow-600 |

#### Semantic Background Colors

| Token | Hex | Role |
|-------|-----|------|
| `background.primary` | `#F8F7FB` | Main page background - primary-50 (Carelon purple tint) |
| `background.secondary` | `#FFFFFF` | Cards, panels, sidebars - gray-50 |
| `background.tertiary` | `#F8F8F8` | Nested sections - gray-200 |
| `background.inverse` | `#222222` | Dark backgrounds - gray-900 |
| `background.disabled` | `#F8F8F8` | Disabled backgrounds - gray-200 |

#### Semantic Border Colors

| Token | Hex | Role |
|-------|-----|------|
| `border.default` | `#E6E6E6` | Default borders - gray-300 |
| `border.hover` | `#D5D5D5` | Hover borders - gray-400 |
| `border.focus` | `#5009B5` | Focus borders - primary-500 |
| `border.error` | `#D2093C` | Error borders - red-500 |
| `border.disabled` | `#F8F8F8` | Disabled borders - gray-200 |

#### Semantic Interactive Colors

| Token | Hex | Role |
|-------|-----|------|
| `interactive.default` | `#5009B5` | Default interactive - primary-500 (Carelon purple) |
| `interactive.hover` | `#400791` | Hover state - primary-600 |
| `interactive.active` | `#30056D` | Active/pressed state - primary-700 |
| `interactive.disabled` | `#E6E6E6` | Disabled interactive - gray-300 |

#### Semantic Focus Indicator

| Token | Hex | Role |
|-------|-----|------|
| `focus.indicator` | `#1AC2C1` | Keyboard navigation focus for all interactive elements - turquoise-400 |
| `focus.input` | `#1AC2C1` | Input field focus border - turquoise-400 |

#### Brand Primary Scale (Carelon Purple)

| Token | Hex | Usage |
|-------|-----|-------|
| `primary.50` | `#F8F7FB` | Lightest background |
| `primary.100` | `#EFE6F8` | Light background |
| `primary.200` | `#CBB5E9` | Subtle accents |
| `primary.300` | `#8553CB` | Muted interactive |
| `primary.400` | `#6222BC` | Secondary interactive |
| `primary.500` | `#5009B5` | **Main brand color** |
| `primary.600` | `#400791` | Hover state |
| `primary.700` | `#30056D` | Active state |
| `primary.800` | `#200448` | Deep accent |
| `primary.900` | `#180336` | Darkest |

#### Neutral Scale (Grays)

| Token | Hex | Usage |
|-------|-----|-------|
| `neutral.50` | `#FFFFFF` | White |
| `neutral.100` | `#FDFDFD` | Off-white |
| `neutral.200` | `#F8F8F8` | Light gray background |
| `neutral.300` | `#E6E6E6` | Borders, dividers |
| `neutral.400` | `#D5D5D5` | Disabled elements |
| `neutral.500` | `#B1B1B1` | Muted text |
| `neutral.600` | `#909090` | Secondary text |
| `neutral.700` | `#6C6C6C` | Tertiary text |
| `neutral.800` | `#464646` | Dark text |
| `neutral.900` | `#222222` | Primary text |
| `neutral.1000` | `#000000` | True black |

#### Feedback Colors

**Error (Red):**
| Token | Hex | Usage |
|-------|-----|-------|
| `error.50` | `#FFF4F7` | Error background light |
| `error.500` | `#D2093C` | Error default |
| `error.600` | `#A80730` | Error text/icons |

**Success (Green):**
| Token | Hex | Usage |
|-------|-----|-------|
| `success.50` | `#F5FDF4` | Success background light |
| `success.500` | `#108808` | Success default |
| `success.600` | `#0D6D06` | Success text/icons |

**Warning (Yellow):**
| Token | Hex | Usage |
|-------|-----|-------|
| `warning.50` | `#FFFBF3` | Warning background light |
| `warning.500` | `#FFBD11` | Warning default |
| `warning.600` | `#CC970E` | Warning text/icons |

**Info (Blue):**
| Token | Hex | Usage |
|-------|-----|-------|
| `info.50` | `#F4F9FF` | Info background light |
| `info.500` | `#1666BE` | Info default |
| `info.600` | `#125298` | Info text/icons |

#### Secondary Brand Colors

**Cyan:**
| Token | Hex | Usage |
|-------|-----|-------|
| `secondary.cyan.500` | `#44B8F3` | Accent |

**Turquoise:**
| Token | Hex | Usage |
|-------|-----|-------|
| `secondary.turquoise.400` | `#1AC2C1` | **Focus indicator (all elements)** |
| `secondary.turquoise.500` | `#00BBBA` | Accent |

**Terracotta:**
| Token | Hex | Usage |
|-------|-----|-------|
| `secondary.terracotta.500` | `#E3725F` | Accent |

**Pantone:**
| Token | Hex | Usage |
|-------|-----|-------|
| `secondary.pantone.500` | `#2861BB` | Accent |

---

### Typography

**Primary Font:** `Elevance Sans` (custom healthcare font, fallback to system sans-serif)

```
Font stack: "Elevance Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
```

**Monospace Font:** `Roboto Mono` (for code, technical data)

```
Font stack: "Roboto Mono", "SF Mono", Monaco, "Cascadia Code", Consolas, "Courier New", monospace
```

#### Type Scale

| Token | Font Size | Line Height | Letter Spacing | Font Weight | Usage |
|-------|-----------|-------------|----------------|-------------|-------|
| `caption.regular` | `12px` | `14px` | `1px` | `400` | Small labels, captions |
| `caption.medium` | `12px` | `14px` | `1px` | `500` | Emphasized captions |
| `caption.semibold` | `12px` | `14px` | `1px` | `600` | Strong captions |
| `paragraph.regular` | `14px` | `16px` | `0px` | `400` | Small body text |
| `paragraph.medium` | `14px` | `16px` | `0px` | `500` | Emphasized small text |
| `body.regular` | `16px` | `19px` | `0px` | `400` | **Default body text** |
| `body.medium` | `16px` | `19px` | `0px` | `500` | Emphasized body |
| `body.semibold` | `16px` | `19px` | `0px` | `600` | Strong body |
| `headingS.regular` | `20px` | `24px` | `0px` | `400` | Small headings |
| `headingS.semibold` | `20px` | `24px` | `0px` | `600` | Small headings emphasized |
| `headingM.regular` | `24px` | `28px` | `1px` | `400` | Medium headings |
| `headingM.semibold` | `24px` | `28px` | `1px` | `600` | Medium headings emphasized |
| `headingL.regular` | `28px` | `33px` | `1px` | `400` | Large headings |
| `headingL.semibold` | `28px` | `33px` | `1px` | `600` | Large headings emphasized |
| `headingXL.regular` | `32px` | `38px` | `1px` | `400` | Extra large headings |
| `headingXL.semibold` | `32px` | `38px` | `1px` | `600` | Extra large headings emphasized |
| `displayS.regular` | `48px` | `56px` | `1px` | `400` | Small display text |
| `displayS.semibold` | `48px` | `56px` | `1px` | `600` | Small display emphasized |
| `displayM.regular` | `60px` | `72px` | `1px` | `400` | Medium display text |
| `displayM.semibold` | `60px` | `72px` | `1px` | `600` | Medium display emphasized |
| `displayL.regular` | `72px` | `86px` | `1px` | `400` | Large display text (hero) |
| `displayL.semibold` | `72px` | `86px` | `1px` | `600` | Large display emphasized |

**Code Typography:**
| Token | Font Size | Line Height | Letter Spacing | Font Weight | Usage |
|-------|-----------|-------------|----------------|-------------|-------|
| `code.regular-12` | `12px` | `14px` | `1.5px` | `400` | Small code |
| `code.regular-14` | `14px` | `16px` | `1.5px` | `400` | Default code |
| `code.medium-14` | `14px` | `16px` | `1.5px` | `500` | Emphasized code |

**Typography Rules:**
- Default font weight: `400` (Regular) for body text
- Emphasized text: `500` (Medium)
- Strong emphasis: `600` (Semibold)
- Headings: Use `semibold` (600) for emphasis
- Letter-spacing: `0px` for body, `1px` for headings
- Line-height: Tight for headings (1.2), comfortable for body (1.5)

---

### Spacing System

**Base unit:** `4px` (all spacing is multiples of 4)

#### Spacing Scale

| Token | Value | Equivalent | Usage |
|-------|-------|------------|-------|
| `spacing.1` | `4px` | `0.25rem` | Micro spacing |
| `spacing.2` | `6px` | `0.375rem` | Tiny spacing |
| `spacing.3` | `8px` | `0.5rem` | Extra small |
| `spacing.4` | `10px` | `0.625rem` | Small |
| `spacing.5` | `12px` | `0.75rem` | Default small |
| `spacing.6` | `14px` | `0.875rem` | Medium-small |
| `spacing.7` | `16px` | `1rem` | **Base spacing** |
| `spacing.8` | `20px` | `1.25rem` | Medium |
| `spacing.9` | `22px` | `1.375rem` | Medium-large |
| `spacing.10` | `24px` | `1.5rem` | Large |
| `spacing.12` | `30px` | `1.875rem` | Extra large |
| `spacing.13` | `34px` | `2.125rem` | 2XL |
| `spacing.16` | `46px` | `2.875rem` | 3XL |
| `spacing.21` | `70px` | `4.375rem` | 4XL |
| `spacing.25` | `102px` | `6.375rem` | 5XL |
| `spacing.32` | `158px` | `9.875rem` | 6XL |

#### Semantic Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `spacing.xs` | `4px` | Tight spacing |
| `spacing.sm` | `8px` | Small spacing |
| `spacing.md` | `12px` | Medium spacing |
| `spacing.lg` | `16px` | Large spacing |
| `spacing.xl` | `24px` | Extra large spacing |
| `spacing.2xl` | `34px` | 2X large spacing |
| `spacing.3xl` | `46px` | 3X large spacing |

---

### Shadows (Elevation System)

| Token | Value | Usage |
|-------|-------|-------|
| `shadow.none` | `none` | No shadow |
| `shadow.xs` | `0 1px 2px 0 rgba(0, 0, 0, 0.05)` | Subtle depth |
| `shadow.sm` | `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)` | Small cards |
| `shadow.md` | `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)` | **Default cards** |
| `shadow.lg` | `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)` | Elevated panels |
| `shadow.xl` | `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)` | Modals, drawers |
| `shadow.2xl` | `0 25px 50px -12px rgba(0, 0, 0, 0.25)` | Maximum elevation |
| `shadow.inner` | `inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)` | Inset depth |
| `shadow.focus` | `0 0 0 3px rgba(26, 194, 193, 0.3)` | Focus ring (turquoise) |

---

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `radius.xs` | `2px` | Minimal rounding |
| `radius.sm` | `4px` | Buttons, inputs, small cards |
| `radius.md` | `8px` | **Default cards, panels** |
| `radius.lg` | `12px` | Large cards, modals |
| `radius.xl` | `16px` | Extra large panels |
| `radius.full` | `999px` | Pills, avatars, badges |

---

### Motion & Easing

#### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `duration.instant` | `0ms` | Instant (no animation) |
| `duration.fast` | `150ms` | Micro-interactions, hover |
| `duration.normal` | `300ms` | **Default transitions** |
| `duration.slow` | `500ms` | Panel reveals, modals |
| `duration.slower` | `700ms` | Complex animations |
| `duration.slowest` | `1000ms` | Page transitions |

#### Easing Curves

| Token | Value | Character |
|-------|-------|-----------|
| `easing.linear` | `linear` | Constant speed |
| `easing.easeIn` | `cubic-bezier(0.4, 0, 1, 1)` | Slow start |
| `easing.easeOut` | `cubic-bezier(0, 0, 0.2, 1)` | **Default smooth** |
| `easing.easeInOut` | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth both ends |
| `easing.sharp` | `cubic-bezier(0.4, 0, 0.6, 1)` | Sharp acceleration |
| `easing.bounce` | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Playful overshoot |

#### Common Transitions

| Token | Value | Usage |
|-------|-------|-------|
| `transition.default` | `all 300ms cubic-bezier(0.4, 0, 0.2, 1)` | Default |
| `transition.fast` | `all 150ms cubic-bezier(0, 0, 0.2, 1)` | Quick interactions |
| `transition.slow` | `all 500ms cubic-bezier(0.4, 0, 0.2, 1)` | Slow reveals |
| `transition.color` | `color 150ms, background-color 150ms, border-color 150ms` | Color changes |
| `transition.transform` | `transform 300ms cubic-bezier(0, 0, 0.2, 1)` | Movement |
| `transition.opacity` | `opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)` | Fade in/out |
| `transition.shadow` | `box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1)` | Elevation changes |

---

### Breakpoints

| Token | Value | Label |
|-------|-------|-------|
| `breakpoint.xs` | `0px` | Mobile (default) |
| `breakpoint.sm` | `640px` | Large phone |
| `breakpoint.md` | `768px` | Tablet |
| `breakpoint.lg` | `1024px` | Desktop |
| `breakpoint.xl` | `1280px` | Large desktop |
| `breakpoint.2xl` | `1536px` | Extra large desktop |

---

### Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `zIndex.base` | `0` | Default layer |
| `zIndex.dropdown` | `1000` | Dropdown menus |
| `zIndex.sticky` | `1100` | Sticky headers |
| `zIndex.fixed` | `1200` | Fixed elements |
| `zIndex.modalBackdrop` | `1300` | Modal backdrop |
| `zIndex.modal` | `1400` | Modal dialogs |
| `zIndex.popover` | `1500` | Popovers |
| `zIndex.tooltip` | `1600` | Tooltips |
| `zIndex.notification` | `1700` | Toast notifications |
| `zIndex.a11yToolbar` | `1800` | Accessibility toolbar |
| `zIndex.skipLink` | `9999` | Skip to content link |

---

### Opacity

| Token | Value | Usage |
|-------|-------|-------|
| `opacity.0` | `0` | Invisible |
| `opacity.5` | `0.05` | Barely visible |
| `opacity.10` | `0.1` | Subtle overlay |
| `opacity.20` | `0.2` | Light overlay |
| `opacity.40` | `0.4` | **Disabled state** |
| `opacity.50` | `0.5` | Modal backdrop |
| `opacity.80` | `0.8` | Hover state |
| `opacity.90` | `0.9` | Pressed state |
| `opacity.100` | `1` | Fully opaque |

---

## Component Patterns

### Button

```
Structure:   [Leading Icon] [Label] [Trailing Icon]
Height:      xsmall: 24px, small: 32px, medium: 40px, large: 48px, xlarge: 56px
Padding:     xsmall: 8px 12px, small: 8px 16px, medium: 12px 20px, large: 14px 24px, xlarge: 16px 28px
Radius:      radius.sm (4px)
Font:        paragraph.medium (14px) for small/medium, body.medium (16px) for large/xlarge
Colors:      Variant-dependent (see below)
States:      Default, hover, active, disabled, focus
Animation:   transition.fast (150ms) for all state changes
Focus:       3px turquoise ring (focus.indicator)
```

**Variants:**

**Primary:**
- Background: `interactive.default` (#5009B5 - Carelon purple)
- Text: `text.inverse` (#FFFFFF)
- Hover: `interactive.hover` (#400791)
- Active: `interactive.active` (#30056D)
- Disabled: `interactive.disabled` (#E6E6E6), text: `text.disabled` (#D5D5D5)

**Secondary:**
- Background: `transparent`
- Border: 1px solid `border.default` (#E6E6E6)
- Text: `text.primary` (#222222)
- Hover: Background `neutral.200` (#F8F8F8)
- Active: Background `neutral.300` (#E6E6E6)
- Disabled: Border `border.disabled`, text `text.disabled`

**Tertiary:**
- Background: `transparent`
- Text: `interactive.default` (#5009B5)
- Hover: Background `primary.50` (#F8F7FB)
- Active: Background `primary.100` (#EFE6F8)
- Disabled: Text `text.disabled`

**Button Types (Contextual):**
- **Default:** Uses primary purple colors
- **Safe:** Uses success green colors (success.500, success.600)
- **Warning:** Uses warning yellow colors (warning.500, warning.600)
- **Alert:** Uses error red colors (error.500, error.600)

---

### Input Field

```
Structure:   [Label] [Input Box] [Helper Text / Error Message]
Height:      40px (input box)
Padding:     12px 16px (inside input)
Radius:      radius.sm (4px)
Font:        body.regular (16px, 400 weight)
Label:       paragraph.medium (14px, 500 weight)
Helper:      paragraph.regular (14px, 400 weight)
States:      Default, hover, focus, error, disabled
Animation:   transition.fast (150ms) for border color
Focus:       2px turquoise border (focus.input)
```

**States:**
- **Default:** Border `border.default` (#E6E6E6), background `background.secondary` (#FFFFFF)
- **Hover:** Border `border.hover` (#D5D5D5)
- **Focus:** Border `focus.input` (#1AC2C1 - turquoise), 2px width
- **Error:** Border `border.error` (#D2093C), error text `text.error` (#A80730)
- **Disabled:** Background `background.disabled` (#F8F8F8), text `text.disabled` (#D5D5D5)

---

### Checkbox

```
Structure:   [Checkbox Box] [Label]
Box Size:    20px × 20px
Radius:      radius.xs (2px)
Border:      2px solid
Font:        body.regular (16px)
States:      Unchecked, checked, indeterminate, disabled, focus
Animation:   transition.fast (150ms) for check animation
Focus:       3px turquoise ring (focus.indicator)
```

**States:**
- **Unchecked:** Border `border.default` (#E6E6E6), background `background.secondary` (#FFFFFF)
- **Checked:** Background `interactive.default` (#5009B5), checkmark `text.inverse` (#FFFFFF)
- **Indeterminate:** Background `interactive.default` (#5009B5), dash `text.inverse` (#FFFFFF)
- **Disabled:** Border `border.disabled`, background `background.disabled`, opacity 0.4
- **Focus:** 3px turquoise ring around box

---

### Radio Button

```
Structure:   [Radio Circle] [Label]
Circle Size: 20px × 20px
Radius:      radius.full (999px - perfect circle)
Border:      2px solid
Font:        body.regular (16px)
States:      Unselected, selected, disabled, focus
Animation:   transition.fast (150ms) for selection
Focus:       3px turquoise ring (focus.indicator)
```

**States:**
- **Unselected:** Border `border.default` (#E6E6E6), background `background.secondary` (#FFFFFF)
- **Selected:** Border `interactive.default` (#5009B5), inner dot `interactive.default` (8px diameter)
- **Disabled:** Border `border.disabled`, background `background.disabled`, opacity 0.4
- **Focus:** 3px turquoise ring around circle

---

### Toggle (Switch)

```
Structure:   [Track] [Thumb]
Track Size:  44px × 24px
Thumb Size:  20px × 20px (circle)
Radius:      Track: radius.full (999px), Thumb: radius.full
States:      Off, on, disabled, focus
Animation:   transition.normal (300ms) for thumb slide, easing.easeInOut
Focus:       3px turquoise ring (focus.indicator)
```

**States:**
- **Off:** Track `neutral.300` (#E6E6E6), thumb `background.secondary` (#FFFFFF), thumb position left
- **On:** Track `interactive.default` (#5009B5), thumb `background.secondary` (#FFFFFF), thumb position right
- **Disabled:** Track `neutral.200`, thumb `neutral.400`, opacity 0.4
- **Focus:** 3px turquoise ring around track

---

### Select Dropdown

```
Structure:   [Label] [Select Box with Arrow] [Dropdown Menu]
Height:      40px (select box)
Padding:     12px 16px (inside select)
Radius:      radius.sm (4px)
Font:        body.regular (16px)
Arrow:       Chevron down icon (Material Icons)
States:      Default, hover, focus, open, disabled
Animation:   transition.fast (150ms) for border, transition.normal (300ms) for dropdown reveal
Focus:       2px turquoise border (focus.input)
```

**States:**
- **Default:** Border `border.default` (#E6E6E6), background `background.secondary` (#FFFFFF)
- **Hover:** Border `border.hover` (#D5D5D5)
- **Focus:** Border `focus.input` (#1AC2C1), 2px width
- **Open:** Border `focus.input`, dropdown shadow `shadow.lg`
- **Disabled:** Background `background.disabled`, text `text.disabled`

**Dropdown Menu:**
- Background: `background.secondary` (#FFFFFF)
- Shadow: `shadow.lg`
- Radius: `radius.sm` (4px)
- Max height: 300px with scroll
- Item padding: `spacing.3` (8px) `spacing.5` (12px)
- Item hover: Background `neutral.200` (#F8F8F8)
- Item selected: Background `primary.50` (#F8F7FB), text `interactive.default` (#5009B5)

---

### Textarea

```
Structure:   [Label] [Textarea Box] [Helper Text / Error Message]
Min Height:  80px (expandable)
Padding:     12px 16px
Radius:      radius.sm (4px)
Font:        body.regular (16px, 400 weight)
Resize:      Vertical only
States:      Default, hover, focus, error, disabled
Animation:   transition.fast (150ms) for border color
Focus:       2px turquoise border (focus.input)
```

**States:** (Same as Input Field)

---

### Badge

```
Structure:   [Label]
Height:      20px (small), 24px (medium), 28px (large)
Padding:     4px 8px (small), 6px 10px (medium), 8px 12px (large)
Radius:      radius.full (999px - pill shape)
Font:        caption.medium (12px, 500 weight)
Types:       Default, success, error, warning, info
States:      Default only (no hover/active)
```

**Types:**
- **Default:** Background `neutral.200` (#F8F8F8), text `text.primary` (#222222)
- **Success:** Background `success.50` (#F5FDF4), text `success.600` (#0D6D06)
- **Error:** Background `error.50` (#FFF4F7), text `error.600` (#A80730)
- **Warning:** Background `warning.50` (#FFFBF3), text `warning.600` (#CC970E)
- **Info:** Background `info.50` (#F4F9FF), text `info.600` (#125298)

---

### Chip

```
Structure:   [Label] [Remove Icon (optional)]
Height:      32px
Padding:     8px 12px
Radius:      radius.full (999px - pill shape)
Font:        paragraph.medium (14px, 500 weight)
Remove Icon: Close icon (Material Icons), 16px
States:      Default, hover, active, disabled
Animation:   transition.fast (150ms) for background
```

**States:**
- **Default:** Background `neutral.200` (#F8F8F8), text `text.primary` (#222222)
- **Hover:** Background `neutral.300` (#E6E6E6)
- **Active:** Background `neutral.400` (#D5D5D5)
- **Disabled:** Opacity 0.4
- **Remove Icon Hover:** Background `neutral.400` (circle behind icon)

---

### Avatar

```
Structure:   [Image or Initials]
Sizes:       small: 32px, medium: 40px, large: 48px
Radius:      radius.full (999px - perfect circle)
Font:        caption.semibold (12px, 600) for small, paragraph.semibold (14px) for medium/large
Colors:      7 color variants (purple, blue, green, yellow, red, cyan, terracotta)
States:      Default only
```

**Color Variants:**
- **Purple:** Background `primary.100` (#EFE6F8), text `primary.700` (#30056D)
- **Blue:** Background `info.50` (#F4F9FF), text `info.600` (#125298)
- **Green:** Background `success.50` (#F5FDF4), text `success.600` (#0D6D06)
- **Yellow:** Background `warning.50` (#FFFBF3), text `warning.600` (#CC970E)
- **Red:** Background `error.50` (#FFF4F7), text `error.600` (#A80730)
- **Cyan:** Background `#ECF8FE`, text `#3693C2`
- **Terracotta:** Background `#FCF1EF`, text `#B65B4C`

---

### Card

```
Structure:   [Content Container]
Padding:     spacing.7 (16px) to spacing.10 (24px)
Radius:      radius.md (8px)
Background:  background.secondary (#FFFFFF)
Border:      1px solid border.default (#E6E6E6) (optional)
Shadow:      shadow.sm (default) or shadow.md (elevated)
States:      Default, hover (if interactive)
Animation:   transition.normal (300ms) for shadow on hover
```

**Variants:**
- **Default:** Shadow `shadow.sm`, no border
- **Outlined:** Border `border.default`, no shadow
- **Elevated:** Shadow `shadow.md`
- **Hover (if clickable):** Shadow `shadow.lg`, transform `translateY(-2px)`

---

### Modal

```
Structure:   [Backdrop] [Modal Container: Header + Content + Footer]
Width:       small: 400px, medium: 600px, large: 800px, fullscreen: 95vw
Max Height:  90vh (with scroll for content)
Radius:      radius.lg (12px)
Background:  background.secondary (#FFFFFF)
Shadow:      shadow.2xl
Backdrop:    background.inverse (#222222) with opacity 0.5
Animation:   Fade in backdrop (300ms), scale modal from 0.95 to 1 (300ms)
Z-Index:     zIndex.modal (1400), backdrop zIndex.modalBackdrop (1300)
```

**Structure:**
- **Header:** Padding `spacing.7` (16px), border-bottom `border.default`, title `headingM.semibold`
- **Content:** Padding `spacing.7` (16px), scrollable if needed
- **Footer:** Padding `spacing.7` (16px), border-top `border.default`, buttons aligned right
- **Close Button:** Top-right corner, icon-only button with close icon

---

### Drawer (Side Panel)

```
Structure:   [Backdrop] [Drawer Container: Header + Content + Footer]
Width:       small: 320px, medium: 480px, large: 640px
Height:      100vh (full height)
Position:    Right side (default) or left side
Background:  background.secondary (#FFFFFF)
Shadow:      shadow.2xl
Backdrop:    background.inverse (#222222) with opacity 0.5
Animation:   Slide in from right (300ms), fade in backdrop (300ms)
Z-Index:     zIndex.modal (1400), backdrop zIndex.modalBackdrop (1300)
```

**Structure:** (Same as Modal)

---

### Table

```
Structure:   [Toolbar] [Table Header] [Table Body] [Pagination]
Row Height:  48px (default), 40px (compact), 56px (comfortable)
Padding:     Cell: 12px 16px
Radius:      radius.md (8px) for table container
Background:  background.secondary (#FFFFFF)
Border:      1px solid border.default (#E6E6E6)
Font:        body.regular (16px) for cells, body.medium for headers
States:      Default, hover, selected, sorted
Animation:   transition.fast (150ms) for row hover
```

**Components:**
- **Toolbar:** Title, description, search, actions (top of table)
- **Header:** Column titles, sort indicators, column menu (three dots)
- **Body:** Data rows, alternating row backgrounds (optional)
- **Row Hover:** Background `neutral.200` (#F8F8F8)
- **Row Selected:** Background `primary.50` (#F8F7FB), border-left `interactive.default` (4px)
- **Sort Indicator:** Arrow up/down icon, color `interactive.default`
- **Pagination:** Bottom of table, shows page numbers and navigation

---

### Breadcrumbs

```
Structure:   [Link] [Separator] [Link] [Separator] [Current Page]
Height:      Auto (inline)
Font:        paragraph.regular (14px)
Separator:   Chevron right icon (Material Icons), 16px, color text.secondary
Link Color:  interactive.default (#5009B5)
Current:     text.primary (#222222), not clickable
States:      Link: default, hover, active, focus
Animation:   transition.fast (150ms) for link color
Focus:       3px turquoise ring (focus.indicator)
```

**States:**
- **Link Default:** Color `interactive.default` (#5009B5)
- **Link Hover:** Color `interactive.hover` (#400791), underline
- **Link Active:** Color `interactive.active` (#30056D)
- **Current Page:** Color `text.primary`, no hover/click

---

### Link

```
Structure:   [Text] or [Icon + Text]
Font:        Inherits from parent (usually body.regular)
Color:       interactive.default (#5009B5)
Decoration:  None by default, underline on hover
States:      Default, hover, active, visited, focus
Animation:   transition.fast (150ms) for color
Focus:       3px turquoise ring (focus.indicator)
```

**States:**
- **Default:** Color `interactive.default` (#5009B5), no underline
- **Hover:** Color `interactive.hover` (#400791), underline
- **Active:** Color `interactive.active` (#30056D)
- **Visited:** Color `primary.700` (#30056D)
- **Focus:** 3px turquoise ring

---

### Divider

```
Structure:   Horizontal or vertical line
Thickness:   1px
Color:       border.default (#E6E6E6)
Spacing:     spacing.5 (12px) to spacing.7 (16px) margin top/bottom (horizontal)
             spacing.5 (12px) to spacing.7 (16px) margin left/right (vertical)
Variants:    Solid, dashed
```

**Variants:**
- **Solid:** Border-style `solid`
- **Dashed:** Border-style `dashed`

---

### Toast (Notification)

```
Structure:   [Icon] [Message] [Close Button]
Width:       360px (fixed)
Padding:     spacing.5 (12px) spacing.7 (16px)
Radius:      radius.md (8px)
Background:  Variant-dependent (see below)
Shadow:      shadow.lg
Position:    Top-right corner (default), 16px from edges
Duration:    4 seconds (auto-dismiss)
Animation:   Slide in from right + fade in (300ms), slide out + fade out (300ms)
Z-Index:     zIndex.notification (1700)
```

**Variants:**
- **Success:** Background `success.50` (#F5FDF4), icon color `success.600` (#0D6D06), border-left `success.500` (4px)
- **Error:** Background `error.50` (#FFF4F7), icon color `error.600` (#A80730), border-left `error.500` (4px)
- **Warning:** Background `warning.50` (#FFFBF3), icon color `warning.600` (#CC970E), border-left `warning.500` (4px)
- **Info:** Background `info.50` (#F4F9FF), icon color `info.600` (#125298), border-left `info.500` (4px)

---

### Alert Banner

```
Structure:   [Icon] [Title + Message] [Action Button (optional)] [Close Button (optional)]
Width:       100% (full width)
Padding:     spacing.5 (12px) spacing.7 (16px)
Radius:      radius.md (8px)
Background:  Variant-dependent (see below)
Border:      1px solid (variant color)
Font:        Title: body.semibold (16px), Message: body.regular (16px)
States:      Default, dismissible
```

**Variants:** (Same as Toast)

---

### Inline Message

```
Structure:   [Icon] [Message]
Width:       Auto (inline with content)
Padding:     spacing.3 (8px) spacing.5 (12px)
Radius:      radius.sm (4px)
Background:  Variant-dependent (see below)
Font:        paragraph.regular (14px)
```

**Variants:** (Same as Toast, but smaller)

---

### Tooltip

```
Structure:   [Arrow] [Content]
Max Width:   240px
Padding:     spacing.2 (6px) spacing.3 (8px)
Radius:      radius.sm (4px)
Background:  neutral.900 (#222222)
Color:       text.inverse (#FFFFFF)
Font:        paragraph.regular (14px)
Shadow:      shadow.md
Arrow Size:  6px
Position:    Top, bottom, left, right (auto-adjust)
Animation:   Fade in (150ms), delay 200ms
Z-Index:     zIndex.tooltip (1600)
```

---

### Accordion

```
Structure:   [Header: Title + Icon] [Content Panel]
Header Height: 48px
Padding:     Header: 12px 16px, Content: 16px
Radius:      radius.md (8px)
Background:  background.secondary (#FFFFFF)
Border:      1px solid border.default (#E6E6E6)
Icon:        Chevron down (collapsed), chevron up (expanded)
States:      Collapsed, expanded
Animation:   Content: max-height transition (300ms), icon rotation (300ms)
```

**States:**
- **Collapsed:** Content hidden, icon pointing down
- **Expanded:** Content visible, icon pointing up, header background `neutral.200` (#F8F8F8)

---

### Tabs

```
Structure:   [Tab List: Tab Items] [Tab Panel: Content]
Tab Height:  40px
Padding:     Tab: 8px 16px
Font:        body.medium (16px, 500 weight)
Border:      Bottom border 2px (active tab only)
States:      Default, hover, active, disabled, focus
Animation:   transition.fast (150ms) for border color
Focus:       3px turquoise ring (focus.indicator)
```

**States:**
- **Default:** Color `text.secondary` (#6C6C6C), no border
- **Hover:** Color `text.primary` (#222222)
- **Active:** Color `interactive.default` (#5009B5), border-bottom `interactive.default` (2px)
- **Disabled:** Color `text.disabled` (#D5D5D5), opacity 0.4
- **Focus:** 3px turquoise ring

---

### Pagination

```
Structure:   [Previous Button] [Page Numbers] [Next Button]
Height:      40px (buttons)
Padding:     Button: 8px 12px, Page number: 8px 12px
Radius:      radius.sm (4px)
Font:        body.regular (16px)
States:      Default, hover, active (current page), disabled
Animation:   transition.fast (150ms) for background
```

**States:**
- **Default:** Background `transparent`, text `text.primary` (#222222)
- **Hover:** Background `neutral.200` (#F8F8F8)
- **Active (current page):** Background `interactive.default` (#5009B5), text `text.inverse` (#FFFFFF)
- **Disabled:** Text `text.disabled` (#D5D5D5), opacity 0.4

---

### Page Layout

**Three Variants:**

#### 1. Topbar Only
```
Structure:   [Top Header (60px)] [Page Content]
Header:      Fixed position, z-index 1100, background primary.50 or white
Content:     Full width, padding-top 60px (to account for fixed header)
```

#### 2. Sidebar Only
```
Structure:   [Sidebar (collapsed: 60px, expanded: 236px)] [Page Content]
Sidebar:     Fixed position, left side, z-index 1100
             Default: Collapsed (60px)
             Hover: Expands to 236px temporarily
             Pin: Locks at 236px, content adjusts
             Pin button: Right of brand logo, visible on hover only
Content:     Margin-left adjusts based on sidebar state
```

#### 3. Topbar + Sidebar
```
Structure:   [Top Header (60px)] [Sidebar (60px/236px)] [Page Content]
Header:      Fixed position, z-index 1100, spans full width
Sidebar:     Fixed position, left side, z-index 1100, top 60px (below header)
Content:     Padding-top 60px, margin-left adjusts based on sidebar state
```

**Sidebar Behavior:**
- **Collapsed (default):** 60px width, icons only
- **Hover:** Expands to 236px, shows labels
- **Pinned:** Stays at 236px, content area adjusts
- **Pin Button:** Appears on hover, right side of brand logo area

---

## Layout Principles

1. **Clean white base** — `#FFFFFF` is the primary background for content areas, with `#F8F7FB` (primary-50) for page backgrounds
2. **Carelon purple brand** — `#5009B5` is the primary interactive color throughout
3. **Turquoise focus** — `#1AC2C1` is used for ALL focus indicators (keyboard navigation)
4. **Gray-900 text** — `#222222` for all primary text, ensuring WCAG AA contrast
5. **8px grid system** — All spacing uses multiples of 4px, with 8px as the base unit
6. **Consistent elevation** — Cards use `shadow.sm` or `shadow.md`, modals use `shadow.2xl`
7. **Subtle motion** — 150ms for micro-interactions, 300ms for standard transitions
8. **4px border radius** — Default for buttons/inputs, 8px for cards, 12px for modals
9. **Accessible contrast** — All color combinations meet WCAG 2.1 AA standards (4.5:1 for text)
10. **Semantic color usage** — Always use semantic tokens (text.primary, background.secondary) not primitive tokens

---

## Strict Usage Rules

### ❌ NEVER DO:
1. **NO gradients** — Never use gradients unless explicitly requested by user
2. **NO hardcoded colors** — Always use semantic tokens
3. **NO external UI libraries** — Only use Lean DS components (except Material Icons for icons)
4. **NO custom modals/drawers** — Always use Modal and Drawer components
5. **NO arbitrary spacing** — Use spacing tokens only
6. **NO custom focus styles** — Always use turquoise focus indicator (#1AC2C1)

### ✅ ALWAYS DO:
1. **Use semantic tokens** — text.primary, background.secondary, interactive.default, etc.
2. **Use Material Icons** — For all icons (import from @mui/icons-material)
3. **Use Lean DS components** — Button, Input, Modal, Drawer, etc.
4. **Maintain accessibility** — WCAG 2.1 AA compliance, keyboard navigation, focus indicators
5. **Use consistent spacing** — 4px base unit, spacing tokens
6. **Use consistent motion** — 150ms fast, 300ms normal, easeOut easing

---

## How to Use This Skill

When generating a UI spec, component spec, or screen layout:

### Step 1 — Apply Carelon theme
Use Carelon purple (`#5009B5`) as the primary interactive color. Use `#F8F7FB` (primary-50) for page backgrounds and `#FFFFFF` for content areas.

### Step 2 — Set typography
Use `Elevance Sans` font family. Apply the type scale:
- Body text → `body.regular` (16px, 400 weight)
- Headings → `headingS/M/L/XL.semibold` (20px-32px, 600 weight)
- Captions → `caption.regular` (12px, 400 weight)

### Step 3 — Apply semantic colors
Use semantic tokens:
- Text → `text.primary` (#222222)
- Backgrounds → `background.primary` (#F8F7FB), `background.secondary` (#FFFFFF)
- Interactive → `interactive.default` (#5009B5)
- Focus → `focus.indicator` (#1AC2C1 - turquoise)

### Step 4 — Apply spacing
Use spacing tokens:
- Tight spacing → `spacing.xs` (4px), `spacing.sm` (8px)
- Default spacing → `spacing.md` (12px), `spacing.lg` (16px)
- Large spacing → `spacing.xl` (24px), `spacing.2xl` (34px)

### Step 5 — Add elevation
Use shadow tokens:
- Cards → `shadow.sm` or `shadow.md`
- Modals/Drawers → `shadow.xl` or `shadow.2xl`
- Tooltips → `shadow.md`

### Step 6 — Add motion
Use transition tokens:
- Micro-interactions → `transition.fast` (150ms)
- Standard transitions → `transition.default` (300ms)
- Slow reveals → `transition.slow` (500ms)

### Step 7 — Ensure accessibility
- All text meets WCAG AA contrast (4.5:1)
- All interactive elements have focus indicators (turquoise ring)
- All interactive elements are keyboard accessible
- Use semantic HTML elements

---

## Output Format for UI Specs

When generating a screen or component, produce output in this structure:

```markdown
## [Screen / Component Name]

### Visual Snapshot
[Description of what the user sees]

### Layout Structure
- Container: [width, padding]
- Background: [semantic token → hex]
- Grid: [layout description]

### Typography
- Heading: [token] → [size, weight, color]
- Body: [token] → [size, weight, color]

### Colors
- Background: [semantic token] → [hex]
- Text: [semantic token] → [hex]
- Interactive: [semantic token] → [hex]
- Focus: [semantic token] → [hex]

### Components Used
- [Component name] — [variant, size, state]

### Spacing
- Padding: [token] → [value]
- Margin: [token] → [value]
- Gap: [token] → [value]

### Motion & Interactions
- [Trigger] → [animation description, duration token, easing token]

### Accessibility
- Contrast ratios: [values]
- Focus indicators: [description]
- Keyboard navigation: [description]
```

---

## Reference Examples

### Example: Login Form
```
Background:     background.primary (#F8F7FB - page), background.secondary (#FFFFFF - card)
Card:           Width 400px, padding spacing.10 (24px), radius.lg (12px), shadow.md
Title:          headingL.semibold (28px, 600), color text.primary (#222222)
Input Fields:   Height 40px, radius.sm (4px), border border.default (#E6E6E6)
                Focus: border focus.input (#1AC2C1 - turquoise, 2px)
Labels:         paragraph.medium (14px, 500), color text.primary
Button:         variant primary, size medium, full width
                Background interactive.default (#5009B5), text text.inverse (#FFFFFF)
Link:           paragraph.regular (14px), color interactive.default (#5009B5)
Spacing:        Gap between elements: spacing.7 (16px)
```

### Example: Dashboard Card
```
Background:     background.secondary (#FFFFFF)
Padding:        spacing.7 (16px)
Radius:         radius.md (8px)
Shadow:         shadow.sm
Border:         1px solid border.default (#E6E6E6)
Title:          headingS.semibold (20px, 600), color text.primary (#222222)
Value:          displayS.semibold (48px, 600), color interactive.default (#5009B5)
Label:          paragraph.regular (14px, 400), color text.secondary (#6C6C6C)
Icon:           Material Icons, 24px, color interactive.default
Hover:          shadow.md, transform translateY(-2px), transition.normal (300ms)
```

### Example: Data Table
```
Background:     background.secondary (#FFFFFF)
Border:         1px solid border.default (#E6E6E6)
Radius:         radius.md (8px)
Header:         Background neutral.200 (#F8F8F8), font body.medium (16px, 500)
Row Height:     48px
Cell Padding:   12px 16px
Row Hover:      Background neutral.200 (#F8F8F8), transition.fast (150ms)
Row Selected:   Background primary.50 (#F8F7FB), border-left interactive.default (4px)
Sort Icon:      Material Icons chevron, color interactive.default (#5009B5)
Pagination:     Bottom, buttons radius.sm (4px), active background interactive.default
```

---

*Design tokens extracted from Lean DS Carelon theme — built for healthcare enterprise applications with React + TypeScript + Styled Components*
