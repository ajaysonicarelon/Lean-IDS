import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{I as t}from"./InputField-BAALJcA9.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./FieldImportance-finWzFXd.js";import"./HelpingText-ClsYb8vx.js";const oe={title:"Components/InputField",component:t,parameters:{layout:"centered",docs:{description:{component:`
# Input Field Component

A fully accessible input field component designed for the Lean IDS design system, supporting both Carelon and Elevance brand themes.

## About

The Input Field is a fundamental form component that allows users to enter and edit text-based information. It provides a consistent, accessible interface for data collection across all applications with **6 distinct states** to handle every user interaction scenario.

## Purpose

- **Data Collection**: Enable users to input various types of information (text, email, password, numbers, dates, etc.)
- **State Management**: Provide clear visual feedback through 6 states (Active, Focused, Error, Disabled, Filled, Non-editable)
- **Accessibility**: Ensure WCAG 2.1 AA compliance with proper ARIA labels and keyboard navigation
- **Brand Consistency**: Maintain visual consistency across Carelon and Elevance themes
- **User Guidance**: Help users understand field requirements and validation status

## 6 Input States

1. **Active** - Default empty state, awaiting user input
2. **Focused** - User is actively typing (primary border color)
3. **Error** - Validation failed (red border and error message)
4. **Disabled** - Field cannot be edited (grayed out)
5. **Filled** - Contains user-entered value (white background)
6. **Non-editable** - System/locked data (primary-50 background, read-only)

> 💡 **See the "All States" story below for detailed documentation on when and how to use each state.**

## Component Architecture

InputField uses the **HelpingText** component internally to display helper messages, errors, and warnings. HelpingText is a standalone, reusable component that can be used independently.

### Component Relationship:
\`\`\`
InputField
├── Label
├── FieldImportance (asterisk)
├── InputWrapper
│   ├── LeadingIcon (optional)
│   ├── Input
│   └── TrailingIcon (optional)
└── HelpingText (standalone component)
    ├── Icon (based on state)
    └── Text
\`\`\`

## Usage

\`\`\`tsx
import { InputField } from '@lean-ids/components';

// Default helping text (gray)
<InputField
  label="Email Address"
  type="email"
  placeholder="Enter your email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  helperText="We'll never share your email"
  helperTextState="default"  // Optional, 'default' is the default value
/>

// Info helping text (blue icon)
<InputField
  label="Password"
  type="password"
  helperText="Password must be at least 8 characters"
  helperTextState="info"
/>

// Warning helping text (yellow/orange icon)
<InputField
  label="Username"
  helperText="This field will be locked after submission"
  helperTextState="warning"
/>

// Error helping text (red icon)
<InputField
  label="Email"
  helperText="Invalid email format"
  helperTextState="error"
/>

// You can also use HelpingText as a standalone component
import { HelpingText } from '@lean-ids/components';

<HelpingText 
  text="This is a standalone helping message"
  state="info"
  size="default"
  showIcon={true}
/>
\`\`\`

## When to Use

✅ **Use Input Field when:**
- Collecting single-line text input from users
- Users need to enter email addresses, passwords, or search queries
- You need to validate user input and show error/success states
- Building forms that require accessible, keyboard-navigable inputs
- You want consistent styling across your application

## When NOT to Use

❌ **Don't use Input Field when:**
- You need multi-line text input (use TextArea instead)
- Users need to select from predefined options (use Select/Dropdown instead)
- You need binary choices (use Checkbox or Radio buttons instead)
- Collecting dates with a calendar picker (use DatePicker instead)
- The input is read-only display text (use Text component instead)

## Accessibility Features

- **WCAG 2.1 AA Compliant**: Meets all accessibility standards
- **Keyboard Navigation**: Full keyboard support (Tab, Shift+Tab, Enter, Escape)
- **Screen Reader Support**: Proper ARIA labels and announcements
- **Focus Management**: Clear focus indicators and logical tab order
- **Error Announcements**: Errors are announced to screen readers via role="alert"
- **Label Association**: Labels properly associated with inputs for assistive technology
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed above the input field",table:{type:{summary:"string"},category:"Content"}},placeholder:{control:"text",description:"Placeholder text shown when input is empty",table:{type:{summary:"string"},category:"Content"}},helperText:{control:"text",description:"Helper text displayed below the input",table:{type:{summary:"string"},category:"Content"}},helperTextState:{control:"select",options:["default","info","warning","error"],description:"State of the helper text (controls icon and color)",table:{type:{summary:"'default' | 'info' | 'warning' | 'error'"},defaultValue:{summary:"'default'"},category:"Content"}},type:{control:"select",options:["text","password","number","email","search","tel","url","date","datetime-local","time"],description:"Input type attribute",table:{type:{summary:"InputType"},defaultValue:{summary:"text"},category:"Behavior"}},size:{control:"radio",options:["small","default","large"],description:"Input field size",table:{type:{summary:"small | default | large"},defaultValue:{summary:"default"},category:"Appearance"}},showLabel:{control:"boolean",description:"Whether to show the label",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},showFieldImportance:{control:"boolean",description:"Whether to show field importance (Required indicator)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}},showInlineText:{control:"boolean",description:"Whether to show inline helping text",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},fieldImportanceVariant:{control:"radio",options:["mandatory","optional","asterisk"],description:"Field importance variant",table:{type:{summary:"mandatory | optional | asterisk"},defaultValue:{summary:"mandatory"},category:"Appearance"}},required:{control:"boolean",description:"Whether the field is required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Validation"}},disabled:{control:"boolean",description:"Whether the field is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},error:{control:"boolean",description:"Whether the field has an error",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},fullWidth:{control:"boolean",description:"Whether the input takes full width of container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Layout"}},leadingIcon:{control:!1,description:"Icon element to display at the start of the input",table:{type:{summary:"React.ReactNode"},category:"Content"}},trailingIcon:{control:!1,description:"Icon element to display at the end of the input",table:{type:{summary:"React.ReactNode"},category:"Content"}}}},a={args:{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",helperTextState:"default",type:"text",size:"default",required:!1,disabled:!1,error:!1,fullWidth:!1,showLabel:!0,showFieldImportance:!1,showInlineText:!0}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(t,{label:"Small Input",placeholder:"Small size",size:"small"}),e.jsx(t,{label:"Default Input",placeholder:"Default size",size:"default"}),e.jsx(t,{label:"Large Input",placeholder:"Large size",size:"large"})]}),parameters:{docs:{description:{story:"Input fields are available in three sizes: small (32px), medium (40px), and large (48px)."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(t,{label:"Default State",placeholder:"Enter text"}),e.jsx(t,{label:"Disabled State",placeholder:"Disabled input",disabled:!0,value:"Cannot edit this"}),e.jsx(t,{label:"Error State",placeholder:"Enter text",helperText:"Inline error text",helperTextState:"error"}),e.jsx(t,{label:"Active/Focused State",placeholder:"Click to focus",helperText:"This shows focus styling when clicked"})]}),parameters:{docs:{description:{story:"Input fields support multiple states: default, hover (automatic), focused (automatic), disabled, error, and success."}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(t,{label:"Text Input",type:"text",placeholder:"Enter text"}),e.jsx(t,{label:"Email Input",type:"email",placeholder:"email@example.com"}),e.jsx(t,{label:"Password Input",type:"password",placeholder:"Enter password"}),e.jsx(t,{label:"Number Input",type:"number",placeholder:"Enter number"}),e.jsx(t,{label:"Search Input",type:"search",placeholder:"Search..."}),e.jsx(t,{label:"Date Input",type:"date"})]}),parameters:{docs:{description:{story:"Input fields support various HTML5 input types including text, email, password, number, search, date, and more."}}}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(t,{label:"Search",type:"search",placeholder:"Search...",leadingIcon:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})}),e.jsx(t,{label:"Email",type:"email",placeholder:"email@example.com",trailingIcon:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[e.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),e.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]})})]}),parameters:{docs:{description:{story:"Input fields can include leading or trailing icons to provide visual context."}}}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(t,{label:"Full Name",placeholder:"John Doe",required:!0,showFieldImportance:!0,fieldImportanceVariant:"mandatory",helperText:"This field is required"}),e.jsx(t,{label:"Email Address",type:"email",placeholder:"email@example.com",required:!0,showFieldImportance:!0,fieldImportanceVariant:"asterisk"}),e.jsx(t,{label:"Middle Name",placeholder:"Optional",showFieldImportance:!0,fieldImportanceVariant:"optional",helperText:"This field is optional"})]}),parameters:{docs:{description:{story:"Field importance can be shown in three variants: (Required), * asterisk, or (Optional)."}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(t,{label:"Default State",placeholder:"Enter text",helperText:"Default helping message with icon"}),e.jsx(t,{label:"Error State",placeholder:"Enter text",helperText:"This field has an error",helperTextState:"error"}),e.jsx(t,{label:"Large Size with Helper",placeholder:"Enter text",size:"large",helperText:"Large size uses 14px font for helper text"})]}),parameters:{docs:{description:{story:"Helper text appears below the input with icons and supports different states (default, error) and sizes."}}}},d={render:()=>e.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:e.jsx(t,{label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0,helperText:"Use fullWidth prop for responsive layouts"})}),parameters:{docs:{description:{story:"Use the fullWidth prop to make the input field responsive and fill its container."}}}},p={render:()=>e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"},children:[e.jsx(t,{label:"First Name",placeholder:"Enter your first name",required:!0}),e.jsx(t,{label:"Last Name",placeholder:"Enter your last name",required:!0}),e.jsx(t,{label:"Email",type:"email",placeholder:"email@example.com",required:!0,helperText:"We'll never share your email"}),e.jsx(t,{label:"Phone Number",type:"tel",placeholder:"(555) 123-4567"}),e.jsx(t,{label:"Password",type:"password",placeholder:"Enter password",required:!0,helperText:"Must be at least 8 characters"})]}),parameters:{docs:{description:{story:"Example of a complete form using multiple input fields with various types and configurations."}}}},c={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px",width:"800px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{color:"#10B981",marginBottom:"16px"},children:"✓ Do"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Email address",type:"email",placeholder:"email@example.com",helperText:"Use sentence case for labels"}),e.jsx(t,{label:"Search products",type:"search",placeholder:"Search...",helperText:"Provide clear, concise labels"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:"#EF4444",marginBottom:"16px"},children:"✗ Don't"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"EMAIL ADDRESS",type:"email",placeholder:"EMAIL@EXAMPLE.COM",helperText:"Don't use all caps"}),e.jsx(t,{label:"Enter Your Complete Email Address Here",type:"email",placeholder:"Please type your email",helperText:"Don't use overly verbose labels"})]})]})]}),parameters:{docs:{description:{story:`
### Do's
- Use sentence case for labels (not Title Case or ALL CAPS)
- Provide clear, concise labels and placeholders
- Show helper text for additional context
- Use appropriate input types for better mobile experience
- Indicate required fields clearly
- Provide immediate validation feedback

### Don'ts
- Don't use vague or ambiguous labels
- Don't override core design tokens
- Don't ignore accessibility requirements
- Don't use placeholder text as the only label
- Don't make inputs too narrow for expected content
- Don't use input fields for read-only data display
        `}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"1. Active (Default)"}),e.jsx(t,{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"2. Focused"}),e.jsx(t,{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",showFieldImportance:!0,autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"3. Error"}),e.jsx(t,{label:"Label",placeholder:"Placeholder",helperText:"Error helping message",helperTextState:"error",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"4. Disabled"}),e.jsx(t,{label:"Label",placeholder:"Placeholder",disabled:!0,helperText:"Default helping message",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"5. Filled"}),e.jsx(t,{label:"Label",value:"Filled value",helperText:"Default helping message",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"6. Non-editable (Read-only)"}),e.jsx(t,{label:"Label",value:"System-filled value",readOnly:!0,helperText:"Default helping message",showFieldImportance:!0})]})]}),parameters:{docs:{description:{story:`
## All 6 Input Field States

### 1. **Active (Default State)**
**Purpose:** Initial state when the input is empty and awaiting user interaction.

**Visual Characteristics:**
- Background: White (neutral-50)
- Border: Gray (neutral-400)
- Helping text: Gray with default icon
- Label: Black (neutral-900)

**When to Use:**
- Default state for all new, empty input fields
- User hasn't interacted with the field yet
- No validation has occurred

---

### 2. **Focused State**
**Purpose:** Indicates the input is currently selected and ready for user input.

**Visual Characteristics:**
- Background: White (neutral-50)
- Border: **Primary-500** (brand blue) - Input fields use primary color for focus
- Helping text: Remains gray (default state)
- Label: Black (neutral-900)

**When to Use:**
- User clicks or tabs into the input field
- Input has keyboard focus
- User is actively typing

**Behavior:**
- Border changes to primary color to show focus
- Helping text does NOT change color (stays gray)
- Only visual change is the border color

**Accessibility:**
- Input fields use primary color for focus (different from other interactive elements)
- Other components (buttons, links, icons, breadcrumbs) use turquoise-400 for keyboard navigation
- Meets WCAG 2.1 AA contrast requirements

---

### 3. **Error State**
**Purpose:** Indicates validation failure or incorrect input.

**Visual Characteristics:**
- Background: White (neutral-50), or light red (error-50) when focused
- Border: Red (error-500)
- Helping text: Red with error icon
- Label: Black (neutral-900)

**When to Use:**
- Form validation fails (e.g., invalid email format)
- Required field is empty on submit
- Input doesn't match expected pattern
- Server-side validation error

**Best Practices:**
- Always provide clear, actionable error messages
- Show errors after user interaction (on blur or submit)
- Use live validation for complex fields (email, password)

---

### 4. **Disabled State**
**Purpose:** Indicates the field cannot be interacted with.

**Visual Characteristics:**
- Background: Light gray (neutral-100)
- Border: Gray (neutral-300)
- Helping text: Gray (muted)
- Label: Gray (neutral-500)
- Cursor: not-allowed
- Opacity: 0.6

**When to Use:**
- Field is not applicable in current context
- User lacks permission to edit
- Conditional fields that depend on other selections
- During form submission (temporarily)

**Accessibility:**
- Properly announced to screen readers as disabled
- Not included in tab order

---

### 5. **Filled State**
**Purpose:** Shows the input has a user-entered value.

**Visual Characteristics:**
- Background: White (neutral-50) - same as active
- Border: Gray (neutral-400)
- Text: Medium weight (500) for better readability
- Helping text: Gray with default icon

**When to Use:**
- User has entered a value
- Form is pre-populated with user data
- Editing existing information

**Typography:**
- Large size: Uses primitive/body/medium (16px, weight 500)
- Small/Default size: Uses primitive/paragraph/medium (14px, weight 500)
- Placeholder: Regular weight (400)

---

### 6. **Non-editable (Read-only) State**
**Purpose:** Displays system-filled or locked data that users cannot modify.

**Visual Characteristics:**
- Background: Light blue (primary-50) - distinguishes from editable fields
- Border: Gray (neutral-300)
- Text: Medium weight (500)
- Helping text: Gray with default icon
- Cursor: default (not text cursor)
- Opacity: 0.8

**When to Use:**
- System-generated values (ID, timestamps, calculated fields)
- Data from external sources that shouldn't be modified
- Reference information in forms
- Locked fields after certain workflow stages

**Accessibility:**
- Announced as read-only to screen readers
- Still included in tab order for screen reader users
- Value can be selected and copied

---

## State Comparison Table

| State | Background | Border | Text Weight | Helping Text Color | Editable | Use Case |
|-------|------------|--------|-------------|-------------------|----------|----------|
| Active | White | Gray | Medium (500) | Gray | ✅ Yes | Empty field, awaiting input |
| Focused | White | Primary | Medium (500) | Gray | ✅ Yes | User is typing |
| Error | White/Red-50 | Red | Medium (500) | Red | ✅ Yes | Validation failed |
| Disabled | Gray-100 | Gray | Medium (500) | Gray | ❌ No | Not applicable/No permission |
| Filled | White | Gray | Medium (500) | Gray | ✅ Yes | Has user-entered value |
| Non-editable | Primary-50 | Gray | Medium (500) | Gray | ❌ No | System/locked data |

---

## Implementation Guidelines

### For Developers:
\`\`\`tsx
// Active/Default
<InputField label="Email" placeholder="Enter email" />

// Focused (automatic on click/tab)
<InputField label="Email" placeholder="Enter email" autoFocus />

// Error
<InputField 
  label="Email" 
  helperText="Invalid email format"
  helperTextState="error"
/>

// Disabled
<InputField label="Email" disabled />

// Filled
<InputField label="Email" value="user@example.com" />

// Non-editable
<InputField 
  label="User ID" 
  value="USR-12345" 
  readOnly 
  helperText="System-generated ID"
/>
\`\`\`

### For Designers:
- Use **Active** for all new form fields
- Show **Focused** state in prototypes for interactive demos
- Always design **Error** states with clear messages
- Use **Disabled** sparingly - hide fields if possible
- **Filled** state should look clean and readable
- **Non-editable** fields should be visually distinct (primary-50 background)
        `}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(t,{label:"Extra Small (28px)",placeholder:"xsmall size",size:"xsmall",helperText:"Height: 28px"}),e.jsx(t,{label:"Small (32px)",placeholder:"small size",size:"small",helperText:"Height: 32px"}),e.jsx(t,{label:"Default (40px)",placeholder:"default size",size:"default",helperText:"Height: 40px"}),e.jsx(t,{label:"Large (50px)",placeholder:"large size",size:"large",helperText:"Height: 50px"})]}),parameters:{docs:{description:{story:"Input fields are available in four sizes matching Figma design: xsmall (28px), small (32px), default (40px), and large (50px)."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(t,{label:"Accessible Input",placeholder:"Try tabbing to this field",helperText:"Press Tab to navigate, Enter to submit"}),e.jsx(t,{label:"Email with ARIA",type:"email",placeholder:"email@example.com","aria-label":"Email address input",helperText:"Screen readers announce this properly"}),e.jsx(t,{label:"Error with Announcement",placeholder:"Enter text",helperText:"This error is announced to screen readers",helperTextState:"error"})]}),parameters:{docs:{description:{story:`
### Keyboard Navigation
- **Tab**: Move focus to the input field
- **Shift + Tab**: Move focus to previous element
- **Enter**: Submit form (if in a form)
- **Escape**: Clear input (browser default)

### Screen Reader Support
- Labels are properly associated with inputs
- Helper text is announced via aria-describedby
- Error messages use role="alert" for immediate announcement
- Required fields are announced as required
- Disabled state is properly communicated

### Focus Management
- Clear focus indicators (2px outline with offset)
- Focus ring uses theme color for brand consistency
- Logical tab order maintained
- Focus visible on keyboard navigation only
        `}}}};var x,f,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    helperTextState: 'default',
    type: 'text',
    size: 'default',
    required: false,
    disabled: false,
    error: false,
    fullWidth: false,
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,g,v;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Small Input" placeholder="Small size" size="small" />
      <InputField label="Default Input" placeholder="Default size" size="default" />
      <InputField label="Large Input" placeholder="Large size" size="large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input fields are available in three sizes: small (32px), medium (40px), and large (48px).'
      }
    }
  }
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var I,w,F;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Default State" placeholder="Enter text" />
      <InputField label="Disabled State" placeholder="Disabled input" disabled value="Cannot edit this" />
      <InputField label="Error State" placeholder="Enter text" helperText="Inline error text" helperTextState="error" />
      <InputField label="Active/Focused State" placeholder="Click to focus" helperText="This shows focus styling when clicked" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input fields support multiple states: default, hover (automatic), focused (automatic), disabled, error, and success.'
      }
    }
  }
}`,...(F=(w=l.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var S,T,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Text Input" type="text" placeholder="Enter text" />
      <InputField label="Email Input" type="email" placeholder="email@example.com" />
      <InputField label="Password Input" type="password" placeholder="Enter password" />
      <InputField label="Number Input" type="number" placeholder="Enter number" />
      <InputField label="Search Input" type="search" placeholder="Search..." />
      <InputField label="Date Input" type="date" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input fields support various HTML5 input types including text, email, password, number, search, date, and more.'
      }
    }
  }
}`,...(D=(T=i.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var E,A,j;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Search" type="search" placeholder="Search..." leadingIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>} />
      <InputField label="Email" type="email" placeholder="email@example.com" trailingIcon={<svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input fields can include leading or trailing icons to provide visual context.'
      }
    }
  }
}`,...(j=(A=s.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var k,W,z;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Full Name" placeholder="John Doe" required showFieldImportance fieldImportanceVariant="mandatory" helperText="This field is required" />
      <InputField label="Email Address" type="email" placeholder="email@example.com" required showFieldImportance fieldImportanceVariant="asterisk" />
      <InputField label="Middle Name" placeholder="Optional" showFieldImportance fieldImportanceVariant="optional" helperText="This field is optional" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Field importance can be shown in three variants: (Required), * asterisk, or (Optional).'
      }
    }
  }
}`,...(z=(W=o.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var L,C,B;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Default State" placeholder="Enter text" helperText="Default helping message with icon" />
      <InputField label="Error State" placeholder="Enter text" helperText="This field has an error" helperTextState="error" />
      <InputField label="Large Size with Helper" placeholder="Enter text" size="large" helperText="Large size uses 14px font for helper text" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Helper text appears below the input with icons and supports different states (default, error) and sizes.'
      }
    }
  }
}`,...(B=(C=n.parameters)==null?void 0:C.docs)==null?void 0:B.source}}};var P,U,R;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '600px'
  }}>
      <InputField label="Full Width Input" placeholder="This input takes full width" fullWidth helperText="Use fullWidth prop for responsive layouts" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use the fullWidth prop to make the input field responsive and fill its container.'
      }
    }
  }
}`,...(R=(U=d.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var M,H,G;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <form style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    width: '400px'
  }}>
      <InputField label="First Name" placeholder="Enter your first name" required />
      <InputField label="Last Name" placeholder="Enter your last name" required />
      <InputField label="Email" type="email" placeholder="email@example.com" required helperText="We'll never share your email" />
      <InputField label="Phone Number" type="tel" placeholder="(555) 123-4567" />
      <InputField label="Password" type="password" placeholder="Enter password" required helperText="Must be at least 8 characters" />
    </form>,
  parameters: {
    docs: {
      description: {
        story: 'Example of a complete form using multiple input fields with various types and configurations.'
      }
    }
  }
}`,...(G=(H=p.parameters)==null?void 0:H.docs)==null?void 0:G.source}}};var N,q,V;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '32px',
    width: '800px'
  }}>
      <div>
        <h3 style={{
        color: '#10B981',
        marginBottom: '16px'
      }}>✓ Do</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <InputField label="Email address" type="email" placeholder="email@example.com" helperText="Use sentence case for labels" />
          <InputField label="Search products" type="search" placeholder="Search..." helperText="Provide clear, concise labels" />
        </div>
      </div>
      <div>
        <h3 style={{
        color: '#EF4444',
        marginBottom: '16px'
      }}>✗ Don't</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <InputField label="EMAIL ADDRESS" type="email" placeholder="EMAIL@EXAMPLE.COM" helperText="Don't use all caps" />
          <InputField label="Enter Your Complete Email Address Here" type="email" placeholder="Please type your email" helperText="Don't use overly verbose labels" />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
### Do's
- Use sentence case for labels (not Title Case or ALL CAPS)
- Provide clear, concise labels and placeholders
- Show helper text for additional context
- Use appropriate input types for better mobile experience
- Indicate required fields clearly
- Provide immediate validation feedback

### Don'ts
- Don't use vague or ambiguous labels
- Don't override core design tokens
- Don't ignore accessibility requirements
- Don't use placeholder text as the only label
- Don't make inputs too narrow for expected content
- Don't use input fields for read-only data display
        \`
      }
    }
  }
}`,...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var O,Y,K;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>1. Active (Default)</h3>
        <InputField label="Label" placeholder="Placeholder" helperText="Default helping message" showFieldImportance />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>2. Focused</h3>
        <InputField label="Label" placeholder="Placeholder" helperText="Default helping message" showFieldImportance autoFocus />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>3. Error</h3>
        <InputField label="Label" placeholder="Placeholder" helperText="Error helping message" helperTextState="error" showFieldImportance />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>4. Disabled</h3>
        <InputField label="Label" placeholder="Placeholder" disabled helperText="Default helping message" showFieldImportance />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>5. Filled</h3>
        <InputField label="Label" value="Filled value" helperText="Default helping message" showFieldImportance />
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>6. Non-editable (Read-only)</h3>
        <InputField label="Label" value="System-filled value" readOnly helperText="Default helping message" showFieldImportance />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
## All 6 Input Field States

### 1. **Active (Default State)**
**Purpose:** Initial state when the input is empty and awaiting user interaction.

**Visual Characteristics:**
- Background: White (neutral-50)
- Border: Gray (neutral-400)
- Helping text: Gray with default icon
- Label: Black (neutral-900)

**When to Use:**
- Default state for all new, empty input fields
- User hasn't interacted with the field yet
- No validation has occurred

---

### 2. **Focused State**
**Purpose:** Indicates the input is currently selected and ready for user input.

**Visual Characteristics:**
- Background: White (neutral-50)
- Border: **Primary-500** (brand blue) - Input fields use primary color for focus
- Helping text: Remains gray (default state)
- Label: Black (neutral-900)

**When to Use:**
- User clicks or tabs into the input field
- Input has keyboard focus
- User is actively typing

**Behavior:**
- Border changes to primary color to show focus
- Helping text does NOT change color (stays gray)
- Only visual change is the border color

**Accessibility:**
- Input fields use primary color for focus (different from other interactive elements)
- Other components (buttons, links, icons, breadcrumbs) use turquoise-400 for keyboard navigation
- Meets WCAG 2.1 AA contrast requirements

---

### 3. **Error State**
**Purpose:** Indicates validation failure or incorrect input.

**Visual Characteristics:**
- Background: White (neutral-50), or light red (error-50) when focused
- Border: Red (error-500)
- Helping text: Red with error icon
- Label: Black (neutral-900)

**When to Use:**
- Form validation fails (e.g., invalid email format)
- Required field is empty on submit
- Input doesn't match expected pattern
- Server-side validation error

**Best Practices:**
- Always provide clear, actionable error messages
- Show errors after user interaction (on blur or submit)
- Use live validation for complex fields (email, password)

---

### 4. **Disabled State**
**Purpose:** Indicates the field cannot be interacted with.

**Visual Characteristics:**
- Background: Light gray (neutral-100)
- Border: Gray (neutral-300)
- Helping text: Gray (muted)
- Label: Gray (neutral-500)
- Cursor: not-allowed
- Opacity: 0.6

**When to Use:**
- Field is not applicable in current context
- User lacks permission to edit
- Conditional fields that depend on other selections
- During form submission (temporarily)

**Accessibility:**
- Properly announced to screen readers as disabled
- Not included in tab order

---

### 5. **Filled State**
**Purpose:** Shows the input has a user-entered value.

**Visual Characteristics:**
- Background: White (neutral-50) - same as active
- Border: Gray (neutral-400)
- Text: Medium weight (500) for better readability
- Helping text: Gray with default icon

**When to Use:**
- User has entered a value
- Form is pre-populated with user data
- Editing existing information

**Typography:**
- Large size: Uses primitive/body/medium (16px, weight 500)
- Small/Default size: Uses primitive/paragraph/medium (14px, weight 500)
- Placeholder: Regular weight (400)

---

### 6. **Non-editable (Read-only) State**
**Purpose:** Displays system-filled or locked data that users cannot modify.

**Visual Characteristics:**
- Background: Light blue (primary-50) - distinguishes from editable fields
- Border: Gray (neutral-300)
- Text: Medium weight (500)
- Helping text: Gray with default icon
- Cursor: default (not text cursor)
- Opacity: 0.8

**When to Use:**
- System-generated values (ID, timestamps, calculated fields)
- Data from external sources that shouldn't be modified
- Reference information in forms
- Locked fields after certain workflow stages

**Accessibility:**
- Announced as read-only to screen readers
- Still included in tab order for screen reader users
- Value can be selected and copied

---

## State Comparison Table

| State | Background | Border | Text Weight | Helping Text Color | Editable | Use Case |
|-------|------------|--------|-------------|-------------------|----------|----------|
| Active | White | Gray | Medium (500) | Gray | ✅ Yes | Empty field, awaiting input |
| Focused | White | Primary | Medium (500) | Gray | ✅ Yes | User is typing |
| Error | White/Red-50 | Red | Medium (500) | Red | ✅ Yes | Validation failed |
| Disabled | Gray-100 | Gray | Medium (500) | Gray | ❌ No | Not applicable/No permission |
| Filled | White | Gray | Medium (500) | Gray | ✅ Yes | Has user-entered value |
| Non-editable | Primary-50 | Gray | Medium (500) | Gray | ❌ No | System/locked data |

---

## Implementation Guidelines

### For Developers:
\\\`\\\`\\\`tsx
// Active/Default
<InputField label="Email" placeholder="Enter email" />

// Focused (automatic on click/tab)
<InputField label="Email" placeholder="Enter email" autoFocus />

// Error
<InputField 
  label="Email" 
  helperText="Invalid email format"
  helperTextState="error"
/>

// Disabled
<InputField label="Email" disabled />

// Filled
<InputField label="Email" value="user@example.com" />

// Non-editable
<InputField 
  label="User ID" 
  value="USR-12345" 
  readOnly 
  helperText="System-generated ID"
/>
\\\`\\\`\\\`

### For Designers:
- Use **Active** for all new form fields
- Show **Focused** state in prototypes for interactive demos
- Always design **Error** states with clear messages
- Use **Disabled** sparingly - hide fields if possible
- **Filled** state should look clean and readable
- **Non-editable** fields should be visually distinct (primary-50 background)
        \`
      }
    }
  }
}`,...(K=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var J,X,_;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Extra Small (28px)" placeholder="xsmall size" size="xsmall" helperText="Height: 28px" />
      <InputField label="Small (32px)" placeholder="small size" size="small" helperText="Height: 32px" />
      <InputField label="Default (40px)" placeholder="default size" size="default" helperText="Height: 40px" />
      <InputField label="Large (50px)" placeholder="large size" size="large" helperText="Height: 50px" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input fields are available in four sizes matching Figma design: xsmall (28px), small (32px), default (40px), and large (50px).'
      }
    }
  }
}`,...(_=(X=h.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var Q,Z,$;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    width: '400px'
  }}>
      <InputField label="Accessible Input" placeholder="Try tabbing to this field" helperText="Press Tab to navigate, Enter to submit" />
      <InputField label="Email with ARIA" type="email" placeholder="email@example.com" aria-label="Email address input" helperText="Screen readers announce this properly" />
      <InputField label="Error with Announcement" placeholder="Enter text" helperText="This error is announced to screen readers" helperTextState="error" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: \`
### Keyboard Navigation
- **Tab**: Move focus to the input field
- **Shift + Tab**: Move focus to previous element
- **Enter**: Submit form (if in a form)
- **Escape**: Clear input (browser default)

### Screen Reader Support
- Labels are properly associated with inputs
- Helper text is announced via aria-describedby
- Error messages use role="alert" for immediate announcement
- Required fields are announced as required
- Disabled state is properly communicated

### Focus Management
- Clear focus indicators (2px outline with offset)
- Focus ring uses theme color for brand consistency
- Logical tab order maintained
- Focus visible on keyboard navigation only
        \`
      }
    }
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ne=["Playground","Sizes","States","InputTypes","WithIcons","RequiredFields","HelpingTextStates","FullWidthLayout","FormExample","BestPractices","AllStates","AllSizes","AccessibilityDemo"];export{m as AccessibilityDemo,h as AllSizes,u as AllStates,c as BestPractices,p as FormExample,d as FullWidthLayout,n as HelpingTextStates,i as InputTypes,a as Playground,o as RequiredFields,r as Sizes,l as States,s as WithIcons,ne as __namedExportsOrder,oe as default};
