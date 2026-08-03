# Figma Make - Design Extraction Prompt

**Use this prompt in Figma Make to extract comprehensive design information for AI-assisted development**

---

## 🎯 Purpose

This prompt helps you extract all necessary information from your Figma Make file so that AI can:
- Understand your complete product architecture
- Map all screens and flows
- Identify all components and patterns
- Rebuild your product accurately using Lean IDS

---

## 📋 THE EXTRACTION PROMPT

Copy and paste this prompt into **Figma Make** to analyze your design:

---

### **FIGMA MAKE PROMPT** ⬇️

```
Analyze this Figma Make file and provide a comprehensive design extraction report. I need this information to rebuild the product using Lean IDS design system with AI assistance.

## PART 1: PRODUCT OVERVIEW

Provide:
1. **Product Name & Purpose**
   - What is this product?
   - What problem does it solve?
   - Who are the target users?

2. **Product Type**
   - Web application
   - Mobile application
   - Desktop application
   - Multi-platform

3. **Key Features** (list all major features)

## PART 2: INFORMATION ARCHITECTURE (IA)

Extract and document:

### 2.1 Site Structure
Create a hierarchical structure of all pages/screens:
```
Home
├── Dashboard
│   ├── Overview
│   ├── Analytics
│   └── Reports
├── Users
│   ├── User List
│   ├── User Profile
│   └── User Settings
├── Settings
│   ├── Account Settings
│   ├── Preferences
│   └── Security
└── Help
    ├── Documentation
    └── Support
```

### 2.2 Navigation Patterns
Document:
- Primary navigation (top bar, sidebar, or both?)
- Secondary navigation (tabs, breadcrumbs, etc.)
- Navigation hierarchy
- Menu structure with all items

### 2.3 Page Inventory
List ALL pages/screens with:
- Page name
- Page purpose
- URL/route (if applicable)
- Access level (public, authenticated, admin, etc.)

Example:
```
1. Dashboard Page
   - Purpose: Show user overview and key metrics
   - Route: /dashboard
   - Access: Authenticated users only
   
2. User Profile Page
   - Purpose: Display and edit user information
   - Route: /profile/:userId
   - Access: Authenticated users only
```

## PART 3: USER FLOWS

Document all major user flows:

### 3.1 Authentication Flow
```
Login Flow:
1. User lands on login page
2. User enters email and password
3. System validates credentials
4. Success → Redirect to dashboard
5. Failure → Show error message
```

### 3.2 Primary User Flows
For each major feature, document:
- Starting point
- Steps involved
- Decision points
- Success/error states
- End point

Example:
```
Create New User Flow:
1. User clicks "Add User" button on Users page
2. Modal/drawer opens with user form
3. User fills in required fields (name, email, role)
4. User clicks "Save"
5. System validates input
6. Success → User added to list, modal closes, success toast
7. Error → Show validation errors, keep modal open
```

## PART 4: SCREEN INVENTORY

For EACH screen/page, provide:

### Screen: [Screen Name]

**Layout:**
- Layout type: (topbar-only / sidebar-only / topbar-sidebar / custom)
- Has breadcrumbs: (yes/no)
- Has page header: (yes/no)
- Has footer: (yes/no)

**Components Used:**
List all UI components on this screen:
- Buttons (how many, what variants)
- Input fields (how many, what types)
- Tables (yes/no, features needed)
- Cards (how many)
- Modals/Drawers (what triggers them)
- Forms (what fields)
- Charts/Graphs (what type)
- Lists (what type of data)
- Tabs (how many, what labels)
- Other components

**Content Sections:**
Describe each section:
1. Header section: [description]
2. Main content: [description]
3. Sidebar content (if any): [description]
4. Footer content (if any): [description]

**Interactions:**
- Buttons and their actions
- Form submissions
- Links and navigation
- Modals/drawers that open
- Filters/search functionality
- Sorting/pagination

**States:**
- Loading state: [how it looks]
- Empty state: [what shows when no data]
- Error state: [how errors display]
- Success state: [confirmation messages]

## PART 5: COMPONENT CATALOG

Create a comprehensive list of ALL unique UI components used:

### Buttons
- Primary buttons: [count, where used]
- Secondary buttons: [count, where used]
- Tertiary buttons: [count, where used]
- Icon buttons: [count, where used]
- Button sizes used: (small, medium, large)

### Form Components
- Text inputs: [count, types]
- Text areas: [count]
- Dropdowns/Selects: [count]
- Checkboxes: [count]
- Radio buttons: [count]
- Toggles/Switches: [count]
- Date pickers: [count]
- File uploads: [count]

### Data Display
- Tables: [count, features needed]
- Lists: [count, types]
- Cards: [count, variants]
- Badges: [count, types]
- Chips/Tags: [count]
- Avatars: [count, sizes]
- Progress bars: [count]
- Metrics/Stats cards: [count]

### Feedback Components
- Modals/Dialogs: [count, purposes]
- Drawers/Side panels: [count, purposes]
- Toast notifications: [types needed]
- Alert banners: [types needed]
- Inline messages: [count]
- Tooltips: [count]

### Navigation Components
- Top header: [yes/no, features]
- Sidebar: [yes/no, features]
- Breadcrumbs: [yes/no]
- Tabs: [count, where used]
- Pagination: [yes/no]

## PART 6: DATA PATTERNS

### 6.1 Data Tables
For each table, document:
- Table name/purpose
- Columns (name, type, sortable?)
- Row actions (view, edit, delete, etc.)
- Bulk actions (select all, bulk delete, etc.)
- Filters needed
- Search functionality
- Pagination (yes/no)
- Default sort

Example:
```
Users Table:
- Columns: Name (text, sortable), Email (text, sortable), Role (badge, filterable), Status (badge, filterable), Actions (buttons)
- Row actions: View profile, Edit user, Delete user
- Bulk actions: Delete selected, Export selected
- Filters: Role, Status, Date joined
- Search: By name or email
- Pagination: Yes, 25 per page
- Default sort: Name ascending
```

### 6.2 Forms
For each form, document:
- Form name/purpose
- All fields (name, type, required?, validation rules)
- Submit button label
- Cancel/reset options
- Success/error handling

Example:
```
Create User Form:
Fields:
- First Name (text, required, min 2 chars)
- Last Name (text, required, min 2 chars)
- Email (email, required, valid email format)
- Role (dropdown, required, options: Admin, User, Guest)
- Status (toggle, default: Active)
- Avatar (file upload, optional, max 2MB, jpg/png only)

Submit: "Create User" button
Cancel: "Cancel" button (closes form)
Success: Toast notification "User created successfully", redirect to user list
Error: Inline validation messages under each field
```

### 6.3 Lists
For each list, document:
- List name/purpose
- Item structure
- Item actions
- Empty state message
- Loading state

## PART 7: VISUAL DESIGN PATTERNS

### 7.1 Color Usage
Document where colors are used:
- Primary color: [where used - buttons, links, etc.]
- Secondary color: [where used]
- Success color: [where used - success messages, badges, etc.]
- Error color: [where used - error messages, validation, etc.]
- Warning color: [where used]
- Info color: [where used]
- Neutral colors: [backgrounds, borders, text]

### 7.2 Typography Patterns
Document text styles used:
- Page titles: [variant, size, weight]
- Section headings: [variant, size, weight]
- Card titles: [variant, size, weight]
- Body text: [variant, size, weight]
- Captions/labels: [variant, size, weight]
- Button text: [variant, size, weight]

### 7.3 Spacing Patterns
Document spacing usage:
- Page padding: [value]
- Section gaps: [value]
- Card padding: [value]
- Form field gaps: [value]
- Button spacing: [value]

### 7.4 Layout Patterns
Document layout patterns:
- Grid layouts: [columns, gaps]
- Flex layouts: [direction, gaps, alignment]
- Card grids: [columns per row, responsive behavior]
- Form layouts: [single column, two column, etc.]

## PART 8: RESPONSIVE BEHAVIOR

Document how the design adapts:

### Mobile (< 768px)
- Navigation: [hamburger menu, bottom nav, etc.]
- Layout: [single column, stacked, etc.]
- Tables: [horizontal scroll, cards, etc.]
- Sidebar: [hidden, overlay, etc.]

### Tablet (768px - 1024px)
- Navigation: [behavior]
- Layout: [behavior]
- Grid columns: [how many]

### Desktop (> 1024px)
- Navigation: [behavior]
- Layout: [behavior]
- Grid columns: [how many]
- Sidebar: [always visible, collapsible, etc.]

## PART 9: INTERACTIONS & ANIMATIONS

Document all interactions:

### Hover States
- Buttons: [what happens on hover]
- Links: [what happens on hover]
- Cards: [what happens on hover]
- Table rows: [what happens on hover]

### Click/Tap Interactions
- Button clicks: [feedback, loading states]
- Form submissions: [loading, success, error]
- Navigation clicks: [transitions]

### Loading States
- Page load: [skeleton, spinner, progress bar]
- Form submission: [button loading state]
- Data fetch: [table loading, list loading]

### Transitions
- Page transitions: [fade, slide, none]
- Modal open/close: [animation type]
- Drawer open/close: [animation type]

## PART 10: ACCESSIBILITY FEATURES

Document accessibility considerations:

### Keyboard Navigation
- Tab order: [logical flow]
- Keyboard shortcuts: [any defined]
- Focus indicators: [visible on all interactive elements]

### Screen Reader Support
- Page titles: [descriptive]
- Form labels: [all inputs labeled]
- Button labels: [descriptive, not just icons]
- Error messages: [announced]

### Color Contrast
- Text on backgrounds: [meets WCAG 2.1 AA]
- Interactive elements: [sufficient contrast]

## PART 11: EDGE CASES & ERROR STATES

Document how the design handles:

### Empty States
For each list/table:
- Message shown
- Call-to-action (if any)
- Illustration/icon (if any)

### Error States
For each form/action:
- Error message text
- Where error displays
- How to recover

### Loading States
For each async operation:
- Loading indicator type
- Loading message (if any)
- Where it displays

### Success States
For each action:
- Success message text
- Display method (toast, banner, inline)
- Duration (if temporary)

## PART 12: PERMISSIONS & ACCESS CONTROL

Document access levels:

### User Roles
List all user roles:
- Role name
- Permissions
- What they can/cannot do

### Page Access
For each page:
- Who can access
- What happens if unauthorized user tries to access

### Feature Access
For each feature:
- Who can use it
- How it's hidden/disabled for others

## PART 13: INTEGRATIONS & EXTERNAL DATA

Document data sources:

### API Endpoints (if known)
- What data is fetched
- When it's fetched
- How it's displayed

### Third-party Services
- Authentication provider
- Payment processor
- Analytics
- Other services

## PART 14: SPECIAL FEATURES

Document any special features:

### Search
- Where is search available
- What can be searched
- Search behavior (instant, on submit, etc.)

### Filters
- What can be filtered
- Filter types (dropdown, checkbox, date range, etc.)
- How filters combine (AND/OR)

### Sorting
- What can be sorted
- Sort options
- Default sort

### Export/Import
- What can be exported (format)
- What can be imported (format)
- Where are these options

### Bulk Actions
- What bulk actions are available
- How items are selected
- Confirmation required?

## PART 15: CONTENT GUIDELINES

Document content patterns:

### Microcopy
- Button labels: [patterns used]
- Error messages: [tone, format]
- Success messages: [tone, format]
- Empty states: [tone, format]
- Help text: [tone, format]

### Placeholder Text
- Input placeholders: [examples]
- Empty state messages: [examples]

## OUTPUT FORMAT

Please provide all the above information in a structured markdown document that I can give to an AI assistant to rebuild this product using Lean IDS design system.

Organize it clearly with:
- Clear headings and subheadings
- Bullet points for lists
- Code blocks for flows and structures
- Tables where appropriate
- Screenshots references where helpful

Be as detailed and comprehensive as possible. This information will be used to generate production-ready code.
```

---

## 📤 How to Use This Prompt

### Step 1: Open Your Figma Make File
- Navigate to your Figma Make design
- Make sure you're viewing the complete file

### Step 2: Paste the Extraction Prompt
- Copy the entire prompt above
- Paste it into Figma Make's AI interface
- Press Enter/Submit

### Step 3: Review the Output
Figma Make will generate a comprehensive report covering:
- ✅ Complete site structure
- ✅ All user flows
- ✅ Every screen documented
- ✅ All components cataloged
- ✅ Data patterns identified
- ✅ Visual design patterns
- ✅ Responsive behavior
- ✅ Accessibility features
- ✅ Edge cases

### Step 4: Save the Report
- Copy the entire output
- Save it as a markdown file (e.g., `my-product-design-spec.md`)
- Keep it handy for the next step

### Step 5: Use with Lean IDS Prompt
Now you can use this detailed specification with the Lean IDS rebuild prompt:

```
I have a detailed design specification (attached below) for a product originally designed in Figma Make.

[PASTE THE FIGMA MAKE EXTRACTION OUTPUT HERE]

Now, rebuild this product from scratch using ONLY the Lean IDS design system.

[CONTINUE WITH THE LEAN IDS PROMPT FROM FIGMA_TO_LEAN_IDS_PROMPT_TEMPLATE.md]
```

---

## 🎯 What This Extraction Provides

### For AI Understanding
The extraction gives AI complete context about:
- **Architecture** - How the product is structured
- **Navigation** - How users move through the app
- **Components** - What UI elements are needed
- **Data** - What information is displayed and how
- **Interactions** - How users interact with features
- **States** - All possible UI states
- **Responsive** - How it adapts to screen sizes
- **Accessibility** - How it supports all users

### For Accurate Rebuilding
With this information, AI can:
- ✅ Map every Figma element to Lean IDS components
- ✅ Understand complete user flows
- ✅ Implement all interactions correctly
- ✅ Handle all edge cases
- ✅ Create proper data structures
- ✅ Build responsive layouts
- ✅ Add full accessibility support
- ✅ Match the original design intent

---

## 💡 Pro Tips

### Tip 1: Be Thorough
The more detailed the extraction, the better the AI can rebuild your product. Don't skip sections.

### Tip 2: Include Screenshots
If Figma Make allows, reference specific screens or components with screenshots in the output.

### Tip 3: Clarify Ambiguities
If something in your design is unclear or has multiple interpretations, document all possibilities.

### Tip 4: Document Assumptions
If certain behaviors aren't explicitly shown in the design, document your assumptions about how they should work.

### Tip 5: Update as Needed
If you make changes to your Figma design, re-run this extraction to get updated information.

---

## 🔄 Complete Workflow

### Phase 1: Extract Design Information
```
Figma Make File
    ↓
[Use this extraction prompt]
    ↓
Comprehensive Design Specification
```

### Phase 2: Rebuild with Lean IDS
```
Design Specification
    ↓
[Use Lean IDS rebuild prompt]
    ↓
Production-Ready React Application
```

### Phase 3: Verify & Deploy
```
Generated Application
    ↓
[Test & Verify]
    ↓
Production Deployment
```

---

## 📋 Extraction Checklist

After running the extraction, verify you have:

### Structure & Navigation
- [ ] Complete site map/hierarchy
- [ ] All navigation patterns documented
- [ ] All pages/screens listed
- [ ] All routes defined

### Components & Patterns
- [ ] All UI components cataloged
- [ ] All forms documented
- [ ] All tables documented
- [ ] All lists documented

### Flows & Interactions
- [ ] All user flows mapped
- [ ] All interactions documented
- [ ] All states defined
- [ ] All edge cases covered

### Visual Design
- [ ] Color usage documented
- [ ] Typography patterns documented
- [ ] Spacing patterns documented
- [ ] Layout patterns documented

### Responsive & Accessibility
- [ ] Responsive behavior documented
- [ ] Accessibility features documented
- [ ] Keyboard navigation documented

### Data & Content
- [ ] Data patterns documented
- [ ] Content guidelines documented
- [ ] Permissions documented

---

## 🎉 Expected Output Example

After running this prompt, you'll get something like:

```markdown
# Product Design Specification: HealthCare Dashboard

## 1. PRODUCT OVERVIEW
- Name: HealthCare Pro Dashboard
- Purpose: Manage patient records and appointments
- Users: Healthcare providers, administrators

## 2. INFORMATION ARCHITECTURE

### Site Structure
```
Home
├── Dashboard
│   ├── Overview
│   ├── Patients
│   └── Appointments
├── Patients
│   ├── Patient List
│   ├── Patient Profile
│   └── Add Patient
└── Settings
    ├── Account
    └── Preferences
```

### Navigation
- Primary: Sidebar navigation (collapsible)
- Secondary: Breadcrumbs on all pages
- Top bar: User menu, notifications

[... continues with all 15 parts ...]
```

This comprehensive specification becomes your blueprint for rebuilding with Lean IDS!

---

## 🚀 Next Steps

1. **Run the extraction prompt** in Figma Make
2. **Save the output** as a markdown file
3. **Review for completeness** - fill in any gaps
4. **Use with Lean IDS prompt** to rebuild your product
5. **Verify the generated code** matches your design

---

## 📞 Support

If the extraction is missing information:
- Re-run the prompt with more specific questions
- Manually add missing details to the output
- Document assumptions clearly

If you need help interpreting the output:
- Review the Lean IDS component catalog
- Check the Component Maturity Checklist
- Consult AI_GUIDELINES.md

---

**Ready to extract your design? Copy the prompt and paste it into Figma Make! 🎯**
