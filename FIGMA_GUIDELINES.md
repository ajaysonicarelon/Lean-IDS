# Figma File Guidelines for Lean IDS

This document outlines the required structure and organization for your Figma design system file to ensure seamless integration with the Lean IDS codebase.

## Required File Structure

### 1. Component Organization

**Page Structure:**
```
📄 Components Library
  ├── 📁 Input Fields
  ├── 📁 Buttons
  ├── 📁 Typography
  ├── 📁 Navigation
  └── ...

📄 Design Tokens
  ├── 📁 Colors
  ├── 📁 Typography
  ├── 📁 Spacing
  └── 📁 Shadows

📄 Documentation
  ├── 📁 Guidelines
  ├── 📁 Examples
  └── 📁 Do's and Don'ts
```

### 2. Component Naming Convention

Use consistent, hierarchical naming:
```
ComponentName/Variant/State

Examples:
- Button/Primary/Default
- Button/Primary/Hover
- Button/Primary/Disabled
- Input/Text/Default
- Input/Text/Error
- Input/Text/Success
```

### 3. Component Properties

**Required Properties:**
- **Boolean properties** for states (disabled, error, required)
- **Text properties** for content (label, placeholder, helperText)
- **Instance swap** for icons
- **Variant properties** for sizes, types, states

**Example for Input Field:**
```
Properties:
├── Size: small | medium | large
├── State: default | hover | focused | disabled | error | success
├── Type: text | email | password | number | search
├── Has Label: boolean
├── Has Icon: boolean
└── Required: boolean
```

### 4. Design Tokens (Variables/Styles)

#### Colors
Organize colors with clear naming for both themes:

**Carelon Theme:**
```
carelon/primary/50
carelon/primary/100
...
carelon/primary/500 (main)
...
carelon/primary/900
```

**Elevance Theme:**
```
elevance/primary/50
elevance/primary/100
...
elevance/primary/500 (main)
...
elevance/primary/900
```

**Semantic Colors:**
```
semantic/text/primary
semantic/text/secondary
semantic/text/disabled
semantic/background/primary
semantic/background/secondary
semantic/border/default
semantic/border/hover
semantic/border/focus
semantic/border/error
```

#### Typography
Define text styles with clear names:
```
heading/h1
heading/h2
heading/h3
body/large
body/regular
body/small
label/medium
caption/small
```

#### Spacing
Use spacing variables based on 8px grid:
```
spacing/1 = 4px
spacing/2 = 8px
spacing/3 = 12px
spacing/4 = 16px
spacing/5 = 20px
spacing/6 = 24px
spacing/8 = 32px
spacing/10 = 40px
spacing/12 = 48px
```

#### Effects (Shadows)
```
shadow/xs
shadow/sm
shadow/md
shadow/lg
shadow/xl
shadow/focus
```

### 5. Component Documentation in Figma

For each component, include frames with:

**About Section:**
- Component description
- Purpose and use cases

**Anatomy:**
- Labeled breakdown of component parts
- Spacing and sizing specifications

**Variants:**
- All size variations
- All state variations
- All type variations

**Usage Guidelines:**
- When to use
- When NOT to use
- Do's and Don'ts examples

**Examples:**
- Common use cases
- Composition examples
- Form examples

### 6. Layer Naming

Use semantic, descriptive names (not "Rectangle 1"):

**Good:**
```
✓ InputBackground
✓ LabelText
✓ HelperText
✓ ErrorIcon
✓ BorderContainer
```

**Bad:**
```
✗ Rectangle 1
✗ Frame 234
✗ Group 5
✗ Vector
```

### 7. Icons

**Organization:**
```
📁 Icons
  ├── icon/search
  ├── icon/close
  ├── icon/check
  ├── icon/error
  ├── icon/info
  └── ...
```

**Requirements:**
- Icons as components (not just vectors)
- Consistent sizing (16px, 20px, 24px)
- Named clearly and semantically
- Organized by category

### 8. Grid and Layout

**Define:**
- 8px grid system
- Column grid for layouts
- Responsive breakpoints (768px, 1024px, 1280px)
- Container max-widths

### 9. Component States

Every interactive component should have:
- **Default** - Initial state
- **Hover** - Mouse over
- **Focused** - Keyboard focus
- **Active** - Being clicked/pressed
- **Disabled** - Not interactive
- **Error** - Validation error
- **Success** - Validation success (if applicable)

### 10. Accessibility Annotations

Include in component descriptions:
- Minimum touch target size (44x44px)
- Color contrast ratios
- Keyboard navigation requirements
- ARIA label requirements
- Screen reader behavior

## Checklist for Figma File

Before sharing your Figma file, ensure:

- [ ] Components are organized in dedicated pages
- [ ] Naming follows the hierarchical convention
- [ ] All variants are properly configured
- [ ] Component properties are defined
- [ ] Color variables for both themes exist
- [ ] Typography styles are defined
- [ ] Spacing variables follow 8px grid
- [ ] Shadow effects are defined
- [ ] Icons are components with consistent sizing
- [ ] Layers have semantic names
- [ ] Documentation frames exist for each component
- [ ] Do's and Don'ts examples are included
- [ ] Accessibility requirements are noted

## Extracting from Figma

Once your file is properly structured:

1. **Select a component** in Figma
2. Share the Figma URL with the component selected
3. The system will extract:
   - Component structure and variants
   - Design tokens (colors, spacing, typography)
   - Component properties and states
   - Documentation and guidelines

## Example: Input Field Structure

```
📄 Input Field Page
  ├── 📁 Component Set: Input Field
  │   ├── Size=small, State=default, Type=text
  │   ├── Size=small, State=error, Type=text
  │   ├── Size=medium, State=default, Type=text
  │   ├── Size=medium, State=error, Type=text
  │   ├── Size=large, State=default, Type=text
  │   └── ... (all combinations)
  │
  ├── 📁 Documentation
  │   ├── About & Purpose
  │   ├── Anatomy Breakdown
  │   ├── Spacing Specifications
  │   ├── Usage Guidelines
  │   ├── Do's and Don'ts
  │   └── Examples
  │
  └── 📁 Types of Input
      ├── Text field
      ├── Email field
      ├── Password field
      ├── Number field
      └── ...
```

## Need Help?

If you have questions about organizing your Figma file, refer to the InputField component as a reference or contact the development team.
