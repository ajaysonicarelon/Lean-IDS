# Figma Make to Lean IDS - Complete Workflow

**The complete 2-step process to transform Figma Make designs into production-ready React applications**

---

## 🎯 Overview

This workflow uses **two specialized prompts** to extract design information from Figma Make and rebuild it using Lean IDS:

1. **Extraction Prompt** (in Figma Make) → Get comprehensive design specification
2. **Rebuild Prompt** (in your AI IDE) → Generate production-ready code

---

## 📊 The Two-Step Process

```
┌─────────────────────────────────────────────────────────────┐
│                        STEP 1                                │
│              Extract Design Information                      │
│                                                              │
│  Figma Make File                                            │
│         ↓                                                    │
│  [Use FIGMA_MAKE_EXTRACTION_PROMPT.md]                     │
│         ↓                                                    │
│  Comprehensive Design Specification                         │
│  • Site structure & navigation                              │
│  • All user flows                                           │
│  • Component catalog                                        │
│  • Data patterns                                            │
│  • Visual design patterns                                   │
│  • Responsive behavior                                      │
│  • Accessibility features                                   │
└─────────────────────────────────────────────────────────────┘
                         ↓
┌─────────────────────────────────────────────────────────────┐
│                        STEP 2                                │
│              Rebuild with Lean IDS                          │
│                                                              │
│  Design Specification                                       │
│         ↓                                                    │
│  [Use FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md]               │
│         ↓                                                    │
│  Production-Ready React Application                         │
│  • Built with Lean IDS components                          │
│  • Follows all guidelines                                   │
│  • Fully accessible                                         │
│  • Responsive design                                        │
│  • Enterprise-grade code                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## 📚 Available Documents

| Document | Purpose | When to Use |
|----------|---------|-------------|
| **FIGMA_MAKE_EXTRACTION_PROMPT.md** | Extract design info from Figma Make | FIRST - Use in Figma Make |
| **FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md** | Complete rebuild prompt | SECOND - Use in AI IDE (detailed) |
| **FIGMA_TO_LEAN_IDS_QUICK_PROMPT.md** | Quick rebuild prompt | SECOND - Use in AI IDE (fast) |
| **FIGMA_TO_LEAN_IDS_CHEATSHEET.md** | Reference guide | During development |
| **README_FIGMA_TO_LEAN_IDS.md** | Overview & getting started | Understanding the process |
| **This file** | Complete workflow guide | Step-by-step instructions |

---

## 🚀 Step-by-Step Instructions

### STEP 1: Extract Design Information (5 minutes)

#### 1.1 Open Figma Make
- Navigate to your Figma Make file
- Ensure you're viewing the complete design

#### 1.2 Run Extraction Prompt
- Open `FIGMA_MAKE_EXTRACTION_PROMPT.md`
- Copy the entire extraction prompt
- Paste it into Figma Make's AI interface
- Press Enter/Submit

#### 1.3 Review Output
Figma Make will generate a comprehensive report with:
- ✅ Complete information architecture
- ✅ All user flows documented
- ✅ Every screen inventoried
- ✅ All components cataloged
- ✅ Data patterns identified
- ✅ Visual design patterns
- ✅ Responsive behavior
- ✅ Accessibility features
- ✅ Edge cases covered

#### 1.4 Save the Specification
- Copy the entire output from Figma Make
- Save it as `my-product-design-spec.md`
- Keep it ready for Step 2

**Time: ~5 minutes**

---

### STEP 2: Rebuild with Lean IDS (10-30 minutes)

#### 2.1 Choose Your Prompt
Pick based on your experience level:

**Option A: Detailed (Recommended for first-time users)**
- Use `FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md`
- Complete instructions with all phases
- Comprehensive guidelines

**Option B: Quick (For experienced users)**
- Use `FIGMA_TO_LEAN_IDS_QUICK_PROMPT.md`
- Condensed instructions
- Faster setup

#### 2.2 Customize the Prompt
Replace these placeholders:
- `[PASTE YOUR FIGMA MAKE URL HERE]` → Your Figma Make URL
- `[YOUR_PROJECT_NAME]` → Your project name (e.g., "healthcare-dashboard")
- `[OPTIONAL: Paste extraction output]` → Paste the design specification from Step 1

**Important:** Including the extraction output from Step 1 gives AI much better context!

#### 2.3 Paste into AI IDE
- Open your AI IDE (Cursor, Windsurf, GitHub Copilot, etc.)
- Paste the customized prompt
- Press Enter

#### 2.4 Watch AI Build
The AI will:
1. ✅ Create React + TypeScript project
2. ✅ Install Lean IDS packages
3. ✅ Set up theme provider
4. ✅ Analyze design specification
5. ✅ Build each screen using Lean IDS components
6. ✅ Implement all states and interactions
7. ✅ Add accessibility features
8. ✅ Make layouts responsive
9. ✅ Verify everything follows guidelines

#### 2.5 Verify Output
Check that AI:
- ✅ Uses ONLY Lean IDS components
- ✅ Uses theme tokens (no hardcoded values)
- ✅ Uses Typography component for all text
- ✅ Implements all 8 states
- ✅ Adds full accessibility
- ✅ Makes it responsive

**Time: ~10-30 minutes depending on complexity**

---

## 📋 Complete Checklist

### Before Starting
- [ ] Figma Make file is complete and finalized
- [ ] You have access to Figma Make AI features
- [ ] You have an AI IDE ready (Cursor, Windsurf, etc.)
- [ ] You've read the overview documents

### Step 1: Extraction
- [ ] Opened Figma Make file
- [ ] Copied extraction prompt from `FIGMA_MAKE_EXTRACTION_PROMPT.md`
- [ ] Pasted into Figma Make
- [ ] Reviewed the output for completeness
- [ ] Saved output as markdown file
- [ ] Verified all sections are covered

### Step 2: Rebuild
- [ ] Chose appropriate prompt (detailed or quick)
- [ ] Customized with Figma URL and project name
- [ ] Included extraction output from Step 1
- [ ] Pasted into AI IDE
- [ ] Watched AI build the project
- [ ] Verified output follows all rules

### After Generation
- [ ] All screens implemented
- [ ] All interactions work
- [ ] Keyboard navigation works
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Code reviewed
- [ ] Tests passing (if applicable)
- [ ] Ready for deployment

---

## 🎯 What Each Step Provides

### Step 1 Output: Design Specification

A comprehensive markdown document containing:

```markdown
# Product Design Specification

## 1. Product Overview
- Name, purpose, users

## 2. Information Architecture
- Complete site structure
- Navigation patterns
- Page inventory

## 3. User Flows
- Authentication flow
- All major feature flows
- Decision points

## 4. Screen Inventory
- Every screen documented
- Components used
- Interactions
- States

## 5. Component Catalog
- All buttons, forms, tables
- Data display components
- Feedback components
- Navigation components

## 6. Data Patterns
- Table structures
- Form structures
- List structures

## 7. Visual Design Patterns
- Color usage
- Typography patterns
- Spacing patterns
- Layout patterns

## 8. Responsive Behavior
- Mobile, tablet, desktop
- Breakpoints
- Adaptive layouts

## 9. Interactions & Animations
- Hover states
- Click interactions
- Loading states
- Transitions

## 10. Accessibility Features
- Keyboard navigation
- Screen reader support
- Color contrast

## 11-15. Additional Details
- Edge cases, permissions, integrations, etc.
```

### Step 2 Output: Production-Ready Application

A complete React/TypeScript project with:

```
my-app/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── Dashboard.styles.ts
│   │   │   └── Dashboard.types.ts
│   │   ├── UserProfile/
│   │   └── ...
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── DashboardPage.tsx
│   │   └── ...
│   ├── hooks/
│   ├── utils/
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

**Features:**
- ✅ All screens from Figma implemented
- ✅ ONLY Lean IDS components used
- ✅ Theme tokens for all styling
- ✅ Typography component for all text
- ✅ All 8 states implemented
- ✅ Full accessibility (WCAG 2.1)
- ✅ Responsive design
- ✅ TypeScript typed
- ✅ Production-ready

---

## 💡 Pro Tips

### Tip 1: Always Do Step 1 First
The extraction step provides crucial context that dramatically improves the quality of generated code. Don't skip it!

### Tip 2: Review Extraction Output
Before moving to Step 2, review the extraction output and fill in any gaps or clarify ambiguities.

### Tip 3: Include Extraction in Rebuild Prompt
Always paste the extraction output into the rebuild prompt. This gives AI complete context.

### Tip 4: Start Small
For large projects, extract and rebuild one section at a time:
1. Extract entire design
2. Rebuild dashboard first
3. Verify it works
4. Continue with other sections

### Tip 5: Keep Cheatsheet Handy
During development, keep `FIGMA_TO_LEAN_IDS_CHEATSHEET.md` open for quick reference.

### Tip 6: Correct AI Immediately
If AI breaks any rules (uses external libraries, hardcodes values, etc.), correct it immediately:
```
STOP. Use Button from @ajaysoni7832/lean-ids-components, not @mui/material.
```

---

## 🔄 Iterative Workflow

For complex projects, use this iterative approach:

### Iteration 1: Core Features
1. Extract design for core features only
2. Rebuild core features
3. Test and verify
4. Deploy MVP

### Iteration 2: Additional Features
1. Extract design for additional features
2. Rebuild additional features
3. Test and verify
4. Deploy update

### Iteration 3: Polish & Optimization
1. Extract any remaining details
2. Implement polish features
3. Optimize performance
4. Final deployment

---

## 🎯 Example: Healthcare Dashboard

### Step 1: Extraction (Figma Make)

**Input:** Figma Make file URL

**Prompt:** Full extraction prompt from `FIGMA_MAKE_EXTRACTION_PROMPT.md`

**Output:**
```markdown
# HealthCare Pro Dashboard - Design Specification

## 1. Product Overview
- Name: HealthCare Pro Dashboard
- Purpose: Manage patient records, appointments, and medical data
- Users: Healthcare providers, administrators, nurses

## 2. Information Architecture
Home
├── Dashboard (Overview, Patients, Appointments)
├── Patients (List, Profile, Add New)
├── Appointments (Calendar, List, Schedule)
├── Reports (Analytics, Export)
└── Settings (Account, Preferences, Security)

## 3. User Flows
### Login Flow
1. User enters email/password
2. System validates
3. Success → Dashboard
4. Failure → Error message

### Add Patient Flow
1. Click "Add Patient" button
2. Modal opens with form
3. Fill required fields
4. Submit
5. Success → Patient added, modal closes
6. Error → Validation messages

[... continues with all 15 sections ...]
```

### Step 2: Rebuild (AI IDE)

**Input:** 
- Figma Make URL
- Design specification from Step 1
- Project name: "healthcare-dashboard"

**Prompt:** Full rebuild prompt with extraction output included

**Output:**
```tsx
// Generated project structure
healthcare-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.tsx
│   │   │   ├── PatientList.tsx
│   │   │   └── AppointmentCalendar.tsx
│   │   ├── Patients/
│   │   │   ├── PatientProfile.tsx
│   │   │   └── AddPatientModal.tsx
│   │   └── ...
│   ├── pages/
│   │   ├── DashboardPage.tsx
│   │   ├── PatientsPage.tsx
│   │   └── ...
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md

// Example generated component
import { PageLayout, Table, Modal, Button, Typography } from '@ajaysoni7832/lean-ids-components';

function PatientsPage() {
  return (
    <PageLayout
      variant="topbar-sidebar"
      pageTitle="Patients"
      topHeader={{ appName: "HealthCare Pro", userInitials: "JD" }}
      sideNav={{ groups: [...], user: {...} }}
    >
      <Table
        columns={patientColumns}
        data={patients}
        selectable={true}
        showGlobalSearch={true}
      />
      <Modal isOpen={showAddModal} onClose={closeModal}>
        <Typography variant="headingL">Add New Patient</Typography>
        {/* Form with Lean IDS components */}
      </Modal>
    </PageLayout>
  );
}
```

**Result:**
- ✅ Matches Figma design exactly
- ✅ Uses ONLY Lean IDS components
- ✅ Fully accessible
- ✅ Responsive
- ✅ Production-ready

---

## 🆘 Troubleshooting

### Problem: Extraction output is incomplete
**Solution:** 
- Re-run extraction with more specific questions
- Manually add missing details
- Break into smaller sections

### Problem: AI uses external libraries in Step 2
**Solution:**
```
STOP. Use ONLY components from @ajaysoni7832/lean-ids-components.
Never use @mui/material, antd, or any other UI library.
```

### Problem: AI hardcodes values
**Solution:**
```
STOP. Use theme tokens:
- padding: ${({ theme }) => theme.spacing[4]}
- color: ${({ theme }) => theme.colors.semantic.text.primary}
```

### Problem: Generated code doesn't match design
**Solution:**
- Check if extraction was detailed enough
- Provide more specific instructions
- Reference specific screens from extraction

### Problem: Missing accessibility features
**Solution:**
```
Add full accessibility:
- ARIA attributes for all interactive elements
- Keyboard navigation (Tab, Enter, Escape)
- Focus management
- Screen reader support
```

---

## 📊 Success Metrics

After completing both steps, you should have:

### Code Quality
- ✅ 100% Lean IDS components (no external libraries)
- ✅ 0 hardcoded values (all use theme tokens)
- ✅ 100% Typography usage (no HTML text tags)
- ✅ All 8 states implemented
- ✅ Full accessibility (WCAG 2.1 AA)

### Functionality
- ✅ All screens from Figma working
- ✅ All user flows functional
- ✅ All interactions working
- ✅ Forms validating correctly
- ✅ Error handling in place

### Performance
- ✅ Fast initial load (< 3s)
- ✅ Smooth interactions (60fps)
- ✅ No console errors
- ✅ Optimized bundle size

### Design Fidelity
- ✅ Matches Figma design
- ✅ Consistent spacing
- ✅ Correct colors
- ✅ Proper typography
- ✅ Responsive on all devices

---

## 🎉 You're Ready!

Follow this two-step workflow to transform any Figma Make design into a production-ready React application using Lean IDS.

### Quick Start
1. **Extract:** Use `FIGMA_MAKE_EXTRACTION_PROMPT.md` in Figma Make
2. **Rebuild:** Use `FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md` in your AI IDE
3. **Verify:** Check against all guidelines
4. **Deploy:** Ship to production

**Time Investment:**
- Step 1 (Extraction): ~5 minutes
- Step 2 (Rebuild): ~10-30 minutes
- Total: ~15-35 minutes for a complete application

**Traditional Development Time:** 2-3 weeks

**Time Saved:** 95%+ 🚀

---

**Ready to get started? Begin with Step 1: `FIGMA_MAKE_EXTRACTION_PROMPT.md`** 🎯
