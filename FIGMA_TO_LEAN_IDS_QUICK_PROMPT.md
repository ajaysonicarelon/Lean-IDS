# Figma Make to Lean IDS - Quick Prompt

**Fast-track prompt for rebuilding Figma Make designs with Lean IDS**

---

## 🚀 Quick Copy-Paste Prompt

```
I have a product designed in Figma Make at [YOUR_FIGMA_URL].

Rebuild it from scratch using ONLY Lean IDS design system. Follow these rules STRICTLY:

## SETUP
1. Create React + TypeScript + Vite project: [PROJECT_NAME]
2. Install: npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components @mui/icons-material
3. Wrap app with ThemeProvider using carelonTheme (or elevanceTheme)

## CRITICAL RULES - NEVER BREAK THESE

### ✅ ALLOWED
- Import ALL UI components from @ajaysoni7832/lean-ids-components
- Import theme tokens from @ajaysoni7832/lean-ids-tokens
- Import icons ONLY from @mui/icons-material
- Use styled-components for custom styling

### ❌ FORBIDDEN
- @mui/material (except icons)
- antd, chakra-ui, bootstrap, tailwind, shadcn, radix, mantine
- ANY external UI library
- Creating custom Button, Input, Modal, Drawer, Table components
- Hardcoded colors, spacing, typography (#333, 16px, Arial)
- Fixed pixel widths (600px, 400px)
- Gradients (unless I explicitly request)
- HTML tags for text (<h1>, <h2>, <p>)

### 🎯 ALWAYS DO
- Use Typography component for ALL text
- Use theme tokens for ALL styling (theme.colors.*, theme.spacing[*])
- Use responsive units (rem, %, vw, vh, min(), max())
- Implement ALL 8 states (default, hover, focus, active, disabled, loading, error, empty)
- Add full accessibility (ARIA, keyboard navigation, focus management)
- Use forwardRef for all components
- Support className and style props

## AVAILABLE COMPONENTS
Button, InputField, TextArea, Select, Checkbox, RadioButton, Toggle, Avatar, Badge, Chip, Card, Divider, Link, Tooltip, Typography, Toast, AlertBanner, InlineMessage, Modal, Drawer, PageLayout, TopHeader, SideNavigation, Footer, PageHeader, Breadcrumbs, MenuItem, Brand, Table, Pagination, Tabs, MetricCard

## LAYOUT VARIANTS
Choose based on my Figma design:
- topbar-only (only top navigation)
- sidebar-only (only sidebar)
- topbar-sidebar (both top and sidebar)

## COMPONENT MAPPING
Figma Button → Button from Lean IDS
Figma Input → InputField from Lean IDS
Figma Modal → Modal from Lean IDS (NEVER create custom)
Figma Drawer → Drawer from Lean IDS (NEVER create custom)
Figma Table → Table from Lean IDS
Figma Text → Typography component (NEVER <h1>, <p>)

## BUILD PROCESS
1. Analyze Figma design
2. Map each element to Lean IDS component
3. Build each screen using ONLY Lean IDS
4. Use theme tokens (no hardcoded values)
5. Implement all states
6. Add accessibility
7. Make responsive

## VERIFICATION
Before finishing, check:
- [ ] Zero external UI libraries (except @mui/icons-material)
- [ ] Zero hardcoded values (all use theme tokens)
- [ ] Typography component used for ALL text
- [ ] No gradients (unless requested)
- [ ] No fixed widths (responsive layouts)
- [ ] All 8 states implemented
- [ ] Full accessibility (ARIA, keyboard, focus)
- [ ] forwardRef on all components

If component doesn't exist in Lean IDS: STOP and ASK ME.

Now analyze my Figma design and start building!
```

---

## 📝 Customization

Replace these before pasting:
- `[YOUR_FIGMA_URL]` → Your Figma Make URL
- `[PROJECT_NAME]` → Your project name

---

## 🎯 What This Prompt Does

1. ✅ Sets up new React/TypeScript project
2. ✅ Installs Lean IDS packages
3. ✅ Analyzes your Figma design
4. ✅ Rebuilds using ONLY Lean IDS components
5. ✅ Follows all guidelines automatically
6. ✅ Implements accessibility
7. ✅ Makes it responsive
8. ✅ Verifies everything

---

## 🚨 If AI Breaks Rules

### AI tries to use @mui/material:
**Say:** "STOP. Use Button from @ajaysoni7832/lean-ids-components"

### AI hardcodes values:
**Say:** "STOP. Use theme.spacing[4] not 16px"

### AI creates custom components:
**Say:** "STOP. Use existing Lean IDS components"

### AI uses gradients:
**Say:** "STOP. Use solid colors from theme.colors.*"

---

## 💡 Pro Tips

1. **Start small:** Build one screen first, verify, then continue
2. **Test accessibility:** Use keyboard navigation (Tab, Enter, Escape)
3. **Check responsive:** Test on mobile, tablet, desktop
4. **Verify tokens:** No hardcoded values anywhere
5. **Review components:** All from Lean IDS, none custom

---

## 📚 Full Documentation

For detailed instructions, see: `FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md`

---

**Ready? Copy the prompt, customize it, and paste into your AI IDE! 🚀**
