# Figma Make to Lean IDS - AI Prompt Template

**For designers who want to rebuild their Figma Make product using Lean IDS components**

---

## 🎯 Purpose

This document provides a comprehensive prompt template that designers can use with AI IDEs (like Figma Make, Cursor, Windsurf, etc.) to:
1. Set up a new project from scratch
2. Install and configure Lean IDS
3. Rebuild their existing product using ONLY Lean IDS components
4. Follow all Lean IDS guidelines and best practices

---

## � OPTIONAL: Extract Design Information First

**Recommended:** Before using this prompt, extract comprehensive design information from Figma Make.

See **`FIGMA_MAKE_EXTRACTION_PROMPT.md`** for a detailed extraction prompt that will:
- Extract complete site structure and navigation
- Document all user flows
- Catalog all components and patterns
- Identify data structures
- Map responsive behavior
- Document accessibility features

This extraction gives AI much better context and results in more accurate code generation.

---

## �📋 THE COMPLETE PROMPT

Copy and paste this prompt into your AI IDE, replacing the placeholders with your specific information:

---

### **PROMPT START** ⬇️

```
I have an existing product designed in Figma Make at [PASTE YOUR FIGMA MAKE URL HERE].

[OPTIONAL BUT RECOMMENDED: If you ran the extraction prompt, paste the output here]

I want you to help me rebuild this product from scratch in a new React/TypeScript project using ONLY the Lean IDS design system. Follow these instructions EXACTLY:

## PHASE 1: PROJECT SETUP

1. Create a new React TypeScript project using Vite:
   - Project name: [YOUR_PROJECT_NAME]
   - Use TypeScript
   - Use React 18+

2. Install Lean IDS packages:
   ```bash
   npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components
   npm install --save-dev @types/styled-components
   ```

3. Install Material Icons (for icons only):
   ```bash
   npm install @mui/icons-material
   ```

4. Set up the theme provider in your main App file:
   ```tsx
   import { ThemeProvider } from 'styled-components';
   import { carelonTheme } from '@ajaysoni7832/lean-ids-tokens';
   // OR use elevanceTheme if Elevance branding is needed

   function App() {
     return (
       <ThemeProvider theme={carelonTheme}>
         {/* Your app content */}
       </ThemeProvider>
     );
   }
   ```

## PHASE 2: ANALYZE FIGMA DESIGN

Access my Figma Make file and analyze:
1. Overall layout structure (does it need top navigation, sidebar, or both?)
2. All screens/pages in the design
3. All UI components used (buttons, inputs, cards, tables, etc.)
4. Color scheme and typography
5. Spacing and layout patterns
6. Interactive elements and states

## PHASE 3: CRITICAL RULES - YOU MUST FOLLOW THESE

### 🚨 RULE 1: USE ONLY LEAN IDS COMPONENTS

**ALLOWED:**
- ✅ Import ALL UI components from `@ajaysoni7832/lean-ids-components`
- ✅ Import theme tokens from `@ajaysoni7832/lean-ids-tokens`
- ✅ Import icons ONLY from `@mui/icons-material`
- ✅ Use `styled-components` for custom styling

**FORBIDDEN - NEVER USE THESE:**
- ❌ @mui/material (except icons from @mui/icons-material)
- ❌ antd
- ❌ @chakra-ui/react
- ❌ react-bootstrap
- ❌ @tailwindui/react
- ❌ @shadcn/ui
- ❌ @radix-ui/react
- ❌ @mantine/core
- ❌ Any other external UI library

**ENFORCEMENT:**
- If you need a Button → Use `Button` from `@ajaysoni7832/lean-ids-components`
- If you need an Input → Use `InputField` from `@ajaysoni7832/lean-ids-components`
- If you need a Modal → Use `Modal` from `@ajaysoni7832/lean-ids-components`
- If you need a Drawer → Use `Drawer` from `@ajaysoni7832/lean-ids-components`
- If you need a Table → Use `Table` from `@ajaysoni7832/lean-ids-components`
- NEVER create custom versions of these components

### 🚨 RULE 2: USE DESIGN TOKENS - NO HARDCODING

**ALWAYS use theme tokens for:**
- ✅ Colors: `theme.colors.semantic.*` or `theme.colors.palette.*`
- ✅ Spacing: `theme.spacing[*]` (never use `16px`, `20px`, etc.)
- ✅ Typography: `theme.fontSizes.*`, `theme.fontWeights.*`, `theme.lineHeights.*`
- ✅ Border Radius: `theme.borderRadius.*`
- ✅ Shadows: `theme.shadows.*`

**NEVER hardcode:**
- ❌ Colors: `#333333`, `rgba(0,0,0,0.5)`
- ❌ Spacing: `16px`, `20px`, `8px`
- ❌ Typography: `14px`, `Arial`, `600`
- ❌ Fixed widths: `400px`, `600px`

**Example - CORRECT styling:**
```tsx
const Container = styled.div`
  color: ${({ theme }) => theme.colors.semantic.text.primary};
  background: ${({ theme }) => theme.colors.semantic.background.primary};
  padding: ${({ theme }) => theme.spacing[4]};
  margin: ${({ theme }) => theme.spacing[2]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes.body};
  border-radius: ${({ theme }) => theme.borderRadius.md};
`;
```

### 🚨 RULE 3: NO GRADIENTS (Unless I Explicitly Request)

- ❌ NEVER use `linear-gradient()` automatically
- ❌ NEVER use gradient backgrounds on cards, buttons, or containers
- ✅ ALWAYS use solid colors from theme tokens
- ✅ ONLY use gradients if I explicitly say "use gradient"

### 🚨 RULE 4: USE Typography COMPONENT FOR ALL TEXT

- ✅ ALWAYS use `Typography` component from Lean IDS
- ❌ NEVER create custom styled `<h1>`, `<h2>`, `<h3>`, `<p>` tags
- ❌ NEVER use HTML heading/paragraph tags directly

**Example - CORRECT:**
```tsx
import { Typography } from '@ajaysoni7832/lean-ids-components';

<Typography variant="headingL" weight="semibold" as="h2">
  Page Title
</Typography>
<Typography variant="body" as="p">
  Description text
</Typography>
```

**Example - WRONG:**
```tsx
const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;
```

### 🚨 RULE 5: RESPONSIVE LAYOUTS - NO FIXED WIDTHS

- ✅ Use: `rem`, `%`, `vw`, `vh`, `auto`, `min()`, `max()`
- ✅ Use Flexbox or CSS Grid with `gap`
- ❌ NEVER use fixed pixel widths like `width: 600px`

**Example - CORRECT:**
```tsx
const Container = styled.div`
  width: min(90vw, 75rem);
  max-width: 90vw;
  padding: ${({ theme }) => theme.spacing[4]};
  display: flex;
  gap: ${({ theme }) => theme.spacing[2]};
`;
```

### 🚨 RULE 6: COMPONENT MATURITY STANDARDS

Every component you build must follow these standards:

**1. API & Composition:**
- Use `React.forwardRef` to expose DOM nodes
- Support polymorphic `as` prop where applicable
- Pass through standard HTML attributes with `...restProps`

**2. States & Behavior (Implement ALL 8 states):**
- default
- hover
- focus-visible
- active
- disabled
- loading (isLoading)
- error (isInvalid)
- empty (isEmpty)

**3. Accessibility:**
- Use proper ARIA attributes (aria-label, aria-selected, role, etc.)
- Use semantic HTML (button, nav, main, etc.)
- Support full keyboard navigation (Tab, Enter, Space, Escape, Arrows)
- Implement focus management and visible focus indicators

**4. Customization:**
- Support `className` prop for style overrides
- Support `style` prop for inline styles
- Provide multiple customization points for complex components

## PHASE 4: AVAILABLE LEAN IDS COMPONENTS

Use ONLY these components from `@ajaysoni7832/lean-ids-components`:

**Form Components:**
- Button (primary, secondary, tertiary variants)
- InputField (text input with label, error, helper text)
- TextArea (multi-line text input)
- Select (dropdown select)
- Checkbox (checkbox with label)
- RadioButton (radio button with label)
- Toggle (toggle/switch)

**Display Components:**
- Avatar (user avatar - 3 sizes, 7 colors)
- Badge (status indicators)
- Chip (removable tags)
- Card (container card)
- Divider (horizontal/vertical)
- Link (styled link)
- Tooltip (tooltip component)
- Typography (ALL text must use this)

**Feedback Components:**
- Toast (temporary notifications)
- AlertBanner (persistent alerts)
- InlineMessage (contextual messages)
- Modal (dialog popups - ALWAYS use, never create custom)
- Drawer (side panels - ALWAYS use, never create custom)

**Layout Components:**
- PageLayout (3 variants: topbar-only, sidebar-only, topbar-sidebar)
- TopHeader (top navigation header)
- SideNavigation (sidebar navigation with pin/unpin)
- Footer (page footer)
- PageHeader (page title and actions)
- Breadcrumbs (breadcrumb navigation)
- MenuItem (menu item component)
- Brand (brand logo component)

**Data Display Components:**
- Table (advanced data table with sorting, pagination, search, selection)
- Pagination (page navigation)
- Tabs (tab navigation)
- MetricCard (metric display cards)

## PHASE 5: PAGE LAYOUT SELECTION

Based on my Figma design, choose the appropriate PageLayout variant:

**Option 1: Top Bar Only** (if design has only top navigation)
```tsx
<PageLayout
  variant="topbar-only"
  pageTitle="[Page Title]"
  pageDescription="[Optional description]"
  breadcrumbs={[
    { label: 'Home', href: '/' },
    { label: '[Current Page]', isActive: true }
  ]}
  topHeader={{
    appName: "[App Name]",
    showLogo: true,
    menuItems: [
      { id: '1', label: 'Menu 1', onClick: () => {} },
      { id: '2', label: 'Menu 2', onClick: () => {} }
    ],
    userInitials: "JD",
    userAvatarUrl: "/avatar.jpg"
  }}
  footer={{
    lastUpdated: "[Date]",
    version: "v1.0.0",
    feedbackText: "Need help?",
    feedbackUrl: "/feedback"
  }}
>
  {/* Page content */}
</PageLayout>
```

**Option 2: Sidebar Only** (if design has only sidebar navigation)
```tsx
<PageLayout
  variant="sidebar-only"
  pageTitle="[Page Title]"
  breadcrumbs={[...]}
  sideNav={{
    groups: [
      {
        title: "Main",
        items: [
          {
            id: '1',
            label: 'Dashboard',
            icon: <DashboardIcon />,
            active: true,
            onClick: () => {}
          }
        ]
      }
    ],
    user: {
      name: "John Doe",
      subtitle: "john@example.com",
      initials: "JD",
      avatarUrl: "/avatar.jpg"
    },
    isPinned: false,
    onPinChange: (pinned) => console.log('Pinned:', pinned)
  }}
>
  {/* Page content */}
</PageLayout>
```

**Option 3: Top Bar + Sidebar** (if design has both)
```tsx
<PageLayout
  variant="topbar-sidebar"
  pageTitle="[Page Title]"
  breadcrumbs={[...]}
  topHeader={{
    appName: "[App Name]",
    menuItems: [...],
    userInitials: "JD"
  }}
  sideNav={{
    groups: [...],
    user: {...},
    isPinned: false,
    onPinChange: (pinned) => {}
  }}
>
  {/* Page content */}
</PageLayout>
```

## PHASE 6: BUILD THE APPLICATION

Now, rebuild my Figma Make design following these steps:

1. **Analyze each screen** in the Figma file
2. **Map each UI element** to the corresponding Lean IDS component
3. **Build each screen** using ONLY Lean IDS components
4. **Apply proper styling** using theme tokens (no hardcoded values)
5. **Implement all states** (hover, focus, disabled, loading, error, empty)
6. **Add accessibility** (ARIA attributes, keyboard navigation, focus management)
7. **Make it responsive** (no fixed widths, use flexible layouts)

### Component Mapping Guide:

If Figma has... → Use Lean IDS component:
- Button → `Button` from Lean IDS
- Text input → `InputField` from Lean IDS
- Dropdown → `Select` from Lean IDS
- Checkbox → `Checkbox` from Lean IDS
- Radio button → `RadioButton` from Lean IDS
- Toggle/Switch → `Toggle` from Lean IDS
- Card/Container → `Card` from Lean IDS
- Modal/Dialog → `Modal` from Lean IDS (NEVER create custom)
- Side panel → `Drawer` from Lean IDS (NEVER create custom)
- Data table → `Table` from Lean IDS
- Navigation menu → `SideNavigation` or `TopHeader` from Lean IDS
- User avatar → `Avatar` from Lean IDS
- Status badge → `Badge` from Lean IDS
- Tag/Chip → `Chip` from Lean IDS
- Alert message → `AlertBanner` from Lean IDS
- Toast notification → `Toast` from Lean IDS
- Tabs → `Tabs` from Lean IDS
- Breadcrumbs → `Breadcrumbs` from Lean IDS

### If a component doesn't exist in Lean IDS:
1. **STOP and ask me** what to do
2. **DO NOT** install external libraries without asking
3. **DO NOT** create custom versions without asking
4. Options I can choose:
   - Build a custom component using Lean IDS styling
   - Wait for Lean IDS to add it
   - Use a specific external library (I'll tell you which one)

## PHASE 7: VERIFICATION CHECKLIST

After building, verify that:

**Code Quality:**
- [ ] All UI components imported from `@ajaysoni7832/lean-ids-components`
- [ ] No external UI libraries used (except @mui/icons-material for icons)
- [ ] All styling uses theme tokens (no hardcoded values)
- [ ] Typography component used for ALL text
- [ ] No gradients used (unless I requested)
- [ ] No fixed pixel widths (responsive layouts only)

**Component Standards:**
- [ ] All components use forwardRef
- [ ] All 8 states implemented (default, hover, focus, active, disabled, loading, error, empty)
- [ ] Full accessibility (ARIA, semantic HTML, keyboard navigation)
- [ ] Customization props (className, style)

**Functionality:**
- [ ] All screens from Figma are implemented
- [ ] All interactions work correctly
- [ ] Navigation works (routing set up)
- [ ] Forms validate properly
- [ ] Loading states show correctly
- [ ] Error states display properly

**Design Fidelity:**
- [ ] Layout matches Figma design
- [ ] Colors match (using Lean IDS theme)
- [ ] Typography matches (using Typography component)
- [ ] Spacing matches (using theme.spacing)
- [ ] Responsive on all screen sizes

## PHASE 8: FINAL DELIVERABLES

Provide me with:

1. **Complete project structure** with all files
2. **README.md** with:
   - Setup instructions
   - How to run the project
   - Available scripts
   - Project structure explanation
3. **Component documentation** for any custom components
4. **Deployment guide** (if applicable)

## ADDITIONAL REQUIREMENTS

- Use TypeScript for all files
- Follow React best practices (hooks, functional components)
- Add proper error handling
- Add loading states for async operations
- Make all forms accessible
- Add proper TypeScript types for all props
- Use ESLint and Prettier for code formatting

## IMPORTANT REMINDERS

1. **NEVER** install or use external UI libraries (except @mui/icons-material for icons)
2. **NEVER** create custom Button, Input, Modal, Drawer, or Table components
3. **ALWAYS** use theme tokens for styling
4. **ALWAYS** use Typography component for text
5. **NEVER** use gradients unless I explicitly request
6. **ALWAYS** implement all 8 component states
7. **ALWAYS** add full accessibility support
8. **ALWAYS** make layouts responsive (no fixed widths)

If you're unsure about anything, ASK ME before proceeding.

Now, let's begin! Start with Phase 1: Project Setup.
```

### **PROMPT END** ⬆️

---

## 🎯 How to Use This Prompt

### Step 1: Prepare Your Information
Before using the prompt, gather:
1. Your Figma Make URL
2. Desired project name
3. Brand choice (Carelon or Elevance theme)

### Step 2: Customize the Prompt
Replace these placeholders:
- `[PASTE YOUR FIGMA MAKE URL HERE]` → Your actual Figma Make URL
- `[YOUR_PROJECT_NAME]` → Your project name (e.g., "my-healthcare-app")
- Choose `carelonTheme` or `elevanceTheme` in the setup section

### Step 3: Paste into AI IDE
1. Open your AI IDE (Cursor, Windsurf, GitHub Copilot, etc.)
2. Paste the entire customized prompt
3. Press Enter

### Step 4: Follow Along
The AI will:
1. Set up the project
2. Install Lean IDS
3. Analyze your Figma design
4. Build each screen using Lean IDS components
5. Verify everything follows guidelines

### Step 5: Review and Test
- Review the generated code
- Test all functionality
- Verify design fidelity
- Check accessibility
- Test responsiveness

---

## 📚 Additional Resources

### Lean IDS Documentation
- **Components:** `/packages/components/src/`
- **Tokens:** `/packages/tokens/src/`
- **Guidelines:** `AI_GUIDELINES.md`
- **Checklist:** `COMPONENT_MATURITY_CHECKLIST.md`

### NPM Packages
- **Components:** `@ajaysoni7832/lean-ids-components`
- **Tokens:** `@ajaysoni7832/lean-ids-tokens`

### GitHub Repository
- **Main Repo:** https://github.com/ajaysonicarelon/Lean-IDS
- **Storybook:** https://github.com/ajaysonicarelon/lean-ids-storybook

---

## 🚨 Common Mistakes to Avoid

### ❌ DON'T DO THIS:
```tsx
// Using external UI library
import { Button } from '@mui/material';

// Hardcoding values
const Container = styled.div`
  padding: 16px;
  color: #333333;
  width: 600px;
`;

// Creating custom components
const CustomButton = styled.button`...`;

// Using HTML tags for text
<h2>Title</h2>
<p>Description</p>

// Using gradients
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### ✅ DO THIS INSTEAD:
```tsx
// Use Lean IDS components
import { Button, Typography } from '@ajaysoni7832/lean-ids-components';

// Use theme tokens
const Container = styled.div`
  padding: ${({ theme }) => theme.spacing[4]};
  color: ${({ theme }) => theme.colors.semantic.text.primary};
  width: min(90vw, 75rem);
`;

// Use Typography component
<Typography variant="headingL" weight="semibold" as="h2">
  Title
</Typography>
<Typography variant="body" as="p">
  Description
</Typography>

// Use solid colors
background: ${({ theme }) => theme.colors.palette.primary[600]};
```

---

## 💡 Pro Tips

### Tip 1: Start Small
Don't try to rebuild everything at once. Start with:
1. Project setup
2. One screen/page
3. Test and verify
4. Move to next screen

### Tip 2: Use the Checklist
After each component, verify against the Component Maturity Checklist:
- API & Composition ✓
- Layout & Responsiveness ✓
- Overrides & Theming ✓
- States & Behavior ✓
- Accessibility ✓

### Tip 3: Test Accessibility
- Test keyboard navigation (Tab, Enter, Space, Escape)
- Test with screen reader
- Check focus indicators
- Verify ARIA attributes

### Tip 4: Make It Responsive
- Test on mobile (320px)
- Test on tablet (768px)
- Test on desktop (1440px)
- Use browser dev tools

### Tip 5: Ask Questions
If the AI tries to:
- Install external UI libraries → STOP and correct it
- Hardcode values → STOP and correct it
- Create custom components → STOP and correct it
- Skip accessibility → STOP and correct it

---

## 🎯 Expected Outcome

After using this prompt, you should have:

✅ A fully functional React/TypeScript application
✅ Built entirely with Lean IDS components
✅ Following all Lean IDS guidelines
✅ Matching your Figma design
✅ Fully accessible (WCAG 2.1 compliant)
✅ Responsive on all devices
✅ Production-ready code
✅ Proper documentation

---

## 🆘 Troubleshooting

### Problem: AI tries to use external UI libraries
**Solution:** Remind it: "STOP. Use ONLY Lean IDS components from @ajaysoni7832/lean-ids-components"

### Problem: AI hardcodes values
**Solution:** Remind it: "STOP. Use theme tokens from @ajaysoni7832/lean-ids-tokens"

### Problem: AI creates custom components
**Solution:** Remind it: "STOP. Use existing Lean IDS components. Never create custom Button, Input, Modal, etc."

### Problem: Component doesn't exist in Lean IDS
**Solution:** Ask: "This component doesn't exist in Lean IDS. What should I do?"

### Problem: AI uses gradients
**Solution:** Remind it: "STOP. No gradients. Use solid colors from theme tokens."

---

## 📞 Support

For questions or issues:
1. Check `/packages/components/README.md`
2. Review `AI_GUIDELINES.md`
3. Consult `COMPONENT_MATURITY_CHECKLIST.md`
4. Contact Lean IDS team

---

## 🎉 Success Stories

This prompt template ensures:
- **Consistency:** All projects use the same design system
- **Quality:** Enterprise-grade components with accessibility
- **Speed:** Rapid development with pre-built components
- **Maintainability:** Easy to update and scale
- **Compliance:** WCAG 2.1 accessibility standards

---

**Ready to rebuild your product with Lean IDS? Copy the prompt above and let's get started! 🚀**
