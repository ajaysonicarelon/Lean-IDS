# Figma Make to Lean IDS - Complete Guide

**Transform your Figma Make designs into production-ready React applications using Lean IDS**

---

## 📚 Documentation Overview

This guide provides everything designers need to rebuild their Figma Make products using the Lean IDS design system.

### Available Documents

| Document | Purpose | Use When |
|----------|---------|----------|
| **FIGMA_TO_LEAN_IDS_COMPLETE_WORKFLOW.md** | Complete 2-step workflow guide | **START HERE** - Step-by-step instructions |
| **FIGMA_MAKE_EXTRACTION_PROMPT.md** | Extract design info from Figma Make | **STEP 1** - Use in Figma Make first |
| **FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md** | Complete rebuild prompt | **STEP 2** - Use in AI IDE (detailed) |
| **FIGMA_TO_LEAN_IDS_QUICK_PROMPT.md** | Quick rebuild prompt | **STEP 2** - Use in AI IDE (fast) |
| **FIGMA_TO_LEAN_IDS_CHEATSHEET.md** | Reference guide | During development, quick lookups |
| **This file (README)** | Overview and getting started | Understanding the process |

---

## 🎯 What This Solves

### The Problem
You have a product designed in Figma Make, but:
- Need to implement it in code
- Want to use a consistent design system
- Need enterprise-grade components
- Must ensure accessibility compliance
- Want production-ready code

### The Solution
Use Lean IDS design system with AI assistance to:
- ✅ Automatically generate production code
- ✅ Use pre-built, tested components
- ✅ Follow accessibility standards (WCAG 2.1)
- ✅ Maintain design consistency
- ✅ Speed up development 10x

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Choose Your Prompt
- **New to Lean IDS?** → Use `FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md`
- **Already familiar?** → Use `FIGMA_TO_LEAN_IDS_QUICK_PROMPT.md`

### Step 2: Customize
Replace these placeholders:
- `[YOUR_FIGMA_URL]` → Your Figma Make URL
- `[PROJECT_NAME]` → Your project name

### Step 3: Paste & Run
1. Open your AI IDE (Cursor, Windsurf, GitHub Copilot, etc.)
2. Paste the customized prompt
3. Press Enter
4. Follow along as AI builds your app

### Step 4: Verify
Check that the AI:
- ✅ Uses ONLY Lean IDS components
- ✅ Uses theme tokens (no hardcoded values)
- ✅ Implements accessibility
- ✅ Makes it responsive

---

## 📖 How It Works

### Phase 1: Setup (AI does this)
```bash
# Creates React + TypeScript project
npm create vite@latest my-app -- --template react-ts

# Installs Lean IDS
npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens styled-components

# Installs icons
npm install @mui/icons-material
```

### Phase 2: Analysis (AI does this)
- Reads your Figma Make file
- Identifies all screens and components
- Maps Figma elements to Lean IDS components
- Plans the implementation

### Phase 3: Build (AI does this)
- Creates project structure
- Builds each screen using Lean IDS components
- Applies theme tokens for styling
- Implements all states (hover, focus, disabled, etc.)
- Adds accessibility (ARIA, keyboard navigation)
- Makes layouts responsive

### Phase 4: Verify (You do this)
- Test all functionality
- Check design fidelity
- Test keyboard navigation
- Test on different screen sizes
- Review code quality

---

## 🎨 Component Mapping

Your Figma elements automatically map to Lean IDS components:

| Figma Element | → | Lean IDS Component |
|---------------|---|-------------------|
| Button | → | `Button` |
| Text Input | → | `InputField` |
| Dropdown | → | `Select` |
| Checkbox | → | `Checkbox` |
| Modal/Dialog | → | `Modal` |
| Side Panel | → | `Drawer` |
| Data Table | → | `Table` |
| Navigation | → | `SideNavigation` or `TopHeader` |
| Any Text | → | `Typography` |

**See full mapping in:** `FIGMA_TO_LEAN_IDS_CHEATSHEET.md`

---

## 🚨 Critical Rules (AI Must Follow)

### ✅ ALWAYS
- Use components from `@ajaysoni7832/lean-ids-components`
- Use theme tokens from `@ajaysoni7832/lean-ids-tokens`
- Use `Typography` component for ALL text
- Use responsive layouts (no fixed widths)
- Implement all 8 states (default, hover, focus, active, disabled, loading, error, empty)
- Add full accessibility (ARIA, keyboard, focus)

### ❌ NEVER
- Use external UI libraries (@mui/material, antd, chakra-ui, etc.)
- Hardcode values (colors, spacing, typography)
- Create custom Button, Input, Modal, Drawer, Table components
- Use HTML tags for text (`<h1>`, `<h2>`, `<p>`)
- Use gradients (unless explicitly requested)
- Use fixed pixel widths (`600px`, `400px`)

---

## 📋 What You'll Get

After using the prompt, you'll have:

### 1. Complete Project Structure
```
my-app/
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx
│   │   ├── UserProfile.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── SettingsPage.tsx
│   │   └── ...
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md
```

### 2. Production-Ready Code
- ✅ TypeScript typed
- ✅ Fully accessible
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states
- ✅ Form validation

### 3. Documentation
- Setup instructions
- How to run
- Component usage
- Deployment guide

---

## 🎯 Example Workflow

### Scenario: Healthcare Dashboard

**1. Designer has Figma Make file:**
- Dashboard with patient list
- Side navigation
- Top header with user menu
- Data table with filters
- Patient detail modal

**2. Designer uses prompt:**
```
I have a healthcare dashboard in Figma Make at [URL].
Rebuild it using ONLY Lean IDS...
[Full prompt from template]
```

**3. AI generates:**
```tsx
// Uses PageLayout with sidebar
<PageLayout
  variant="topbar-sidebar"
  pageTitle="Patient Dashboard"
  topHeader={{ appName: "HealthCare Pro", userInitials: "JD" }}
  sideNav={{ groups: [...], user: {...} }}
>
  {/* Uses Table component */}
  <Table
    columns={patientColumns}
    data={patients}
    selectable={true}
    showGlobalSearch={true}
  />
  
  {/* Uses Modal component */}
  <Modal isOpen={showDetail} onClose={closeDetail}>
    <Typography variant="headingL">Patient Details</Typography>
    {/* Patient info */}
  </Modal>
</PageLayout>
```

**4. Result:**
- ✅ Matches Figma design
- ✅ Uses ONLY Lean IDS components
- ✅ Fully accessible
- ✅ Responsive
- ✅ Production-ready

---

## 🛠️ Troubleshooting

### AI tries to use external libraries
**Problem:** AI imports from @mui/material, antd, etc.

**Solution:**
```
STOP. Use ONLY components from @ajaysoni7832/lean-ids-components.
Never use @mui/material (except icons from @mui/icons-material).
```

### AI hardcodes values
**Problem:** AI uses `padding: 16px`, `color: #333`

**Solution:**
```
STOP. Use theme tokens:
- padding: ${({ theme }) => theme.spacing[4]}
- color: ${({ theme }) => theme.colors.semantic.text.primary}
```

### AI creates custom components
**Problem:** AI creates `const CustomButton = styled.button`

**Solution:**
```
STOP. Use existing Button component from @ajaysoni7832/lean-ids-components.
Never create custom Button, Input, Modal, Drawer, or Table components.
```

### AI uses HTML text tags
**Problem:** AI uses `<h1>`, `<h2>`, `<p>` tags

**Solution:**
```
STOP. Use Typography component:
- <Typography variant="headingL" as="h1">Title</Typography>
- <Typography variant="body" as="p">Text</Typography>
```

### Component doesn't exist in Lean IDS
**Problem:** AI needs a component not in Lean IDS (e.g., DatePicker)

**Solution:**
```
This component doesn't exist in Lean IDS. What should I do?
Options:
1. Build custom using Lean IDS styling
2. Use specific external library (which one?)
3. Skip for now
```

---

## 📚 Additional Resources

### Lean IDS Documentation
- **Components:** `/packages/components/src/`
- **Tokens:** `/packages/tokens/src/`
- **Guidelines:** `AI_GUIDELINES.md`
- **Checklist:** `COMPONENT_MATURITY_CHECKLIST.md`

### NPM Packages
- **Components:** [@ajaysoni7832/lean-ids-components](https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components)
- **Tokens:** [@ajaysoni7832/lean-ids-tokens](https://www.npmjs.com/package/@ajaysoni7832/lean-ids-tokens)

### GitHub Repositories
- **Main Repo:** [Lean-IDS](https://github.com/ajaysonicarelon/Lean-IDS)
- **Storybook:** [lean-ids-storybook](https://github.com/ajaysonicarelon/lean-ids-storybook)

### Storybook (Live Examples)
- View all components with interactive examples
- See all variants, states, and props
- Copy-paste ready code examples

---

## 🎓 Learning Path

### Beginner (First Time)
1. Read this README
2. Use `FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md`
3. Build one simple screen
4. Verify it works
5. Continue with more screens

### Intermediate (Familiar with Lean IDS)
1. Use `FIGMA_TO_LEAN_IDS_QUICK_PROMPT.md`
2. Reference `FIGMA_TO_LEAN_IDS_CHEATSHEET.md` as needed
3. Build multiple screens
4. Customize as needed

### Advanced (Expert)
1. Create custom prompts
2. Extend Lean IDS components
3. Build complex features
4. Contribute back to Lean IDS

---

## ✅ Quality Checklist

Before considering your project complete:

### Code Quality
- [ ] All components from `@ajaysoni7832/lean-ids-components`
- [ ] No external UI libraries (except @mui/icons-material)
- [ ] All styling uses theme tokens
- [ ] Typography component used for ALL text
- [ ] No hardcoded values anywhere
- [ ] No gradients (unless requested)
- [ ] No fixed pixel widths

### Functionality
- [ ] All screens from Figma implemented
- [ ] All interactions work correctly
- [ ] Forms validate properly
- [ ] Loading states show correctly
- [ ] Error states display properly
- [ ] Navigation works (routing)

### Accessibility
- [ ] All interactive elements keyboard accessible
- [ ] Proper ARIA attributes
- [ ] Semantic HTML used
- [ ] Focus indicators visible
- [ ] Screen reader tested
- [ ] Color contrast meets WCAG 2.1

### Responsiveness
- [ ] Works on mobile (320px+)
- [ ] Works on tablet (768px+)
- [ ] Works on desktop (1024px+)
- [ ] No horizontal scroll
- [ ] Touch targets adequate (44px+)

### Performance
- [ ] No console errors
- [ ] Fast initial load
- [ ] Smooth interactions
- [ ] Optimized images
- [ ] Code split appropriately

---

## 🎉 Success Stories

### Before Lean IDS
- ⏱️ 2-3 weeks to build dashboard
- 🐛 Inconsistent components
- ♿ Poor accessibility
- 📱 Not responsive
- 🔧 Hard to maintain

### After Lean IDS
- ⏱️ 2-3 days to build dashboard
- ✨ Consistent design system
- ♿ WCAG 2.1 compliant
- 📱 Fully responsive
- 🔧 Easy to maintain

---

## 🚀 Next Steps

1. **Choose your prompt:**
   - New? → `FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md`
   - Experienced? → `FIGMA_TO_LEAN_IDS_QUICK_PROMPT.md`

2. **Customize it:**
   - Add your Figma URL
   - Add your project name
   - Choose your theme

3. **Run it:**
   - Paste into AI IDE
   - Watch it build
   - Verify the output

4. **Deploy it:**
   - Test thoroughly
   - Fix any issues
   - Deploy to production

---

## 📞 Support

### Need Help?
1. Check `FIGMA_TO_LEAN_IDS_CHEATSHEET.md` for quick answers
2. Review `AI_GUIDELINES.md` for detailed rules
3. Consult `COMPONENT_MATURITY_CHECKLIST.md` for standards
4. Contact Lean IDS team

### Found a Bug?
1. Check if it's a Lean IDS component issue
2. Report to Lean IDS GitHub repo
3. Provide reproduction steps

### Want to Contribute?
1. Fork the Lean IDS repo
2. Make improvements
3. Submit pull request
4. Help others in community

---

## 📄 License

Lean IDS is available under the MIT License.

---

## 🙏 Acknowledgments

Built with:
- React
- TypeScript
- styled-components
- Material Icons

Inspired by:
- Material Design
- Ant Design
- Chakra UI

---

**Ready to transform your Figma designs into production code? Let's get started! 🚀**

---

## 📊 Quick Comparison

| Aspect | Manual Coding | With Lean IDS + AI |
|--------|--------------|-------------------|
| **Setup Time** | 1-2 days | 5 minutes |
| **Development Time** | 2-3 weeks | 2-3 days |
| **Consistency** | Variable | 100% consistent |
| **Accessibility** | Manual effort | Built-in WCAG 2.1 |
| **Responsiveness** | Manual testing | Automatic |
| **Maintenance** | High effort | Low effort |
| **Code Quality** | Depends on dev | Enterprise-grade |
| **Learning Curve** | Steep | Gentle |

---

**Start building better, faster, and more accessible applications today! 🎯**
