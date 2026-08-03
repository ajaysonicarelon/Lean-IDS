import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{I as a}from"./InputField-DW27YIEC.js";import{r as Be}from"./index-B0WjJBI_.js";import{T as t}from"./Typography-DlcmwxwF.js";import"./styled-components.browser.esm-CuwBLqEg.js";import"./FieldImportance-Blr2F3eN.js";import"./HelpingText-DoRwUTLu.js";import"./_commonjsHelpers-CqkleIqs.js";const Me={title:"Components/InputField",component:a,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed above the input field",table:{type:{summary:"string"},category:"Content"}},placeholder:{control:"text",description:"Placeholder text shown when input is empty",table:{type:{summary:"string"},category:"Content"}},helperText:{control:"text",description:"Helper text displayed below the input",table:{type:{summary:"string"},category:"Content"}},helperTextState:{control:"select",options:["default","info","warning","error"],description:"State of the helper text (controls icon and color)",table:{type:{summary:"'default' | 'info' | 'warning' | 'error'"},defaultValue:{summary:"'default'"},category:"Content"}},type:{control:"select",options:["text","password","number","email","search","tel","url","date","datetime-local","time"],description:"Input type attribute",table:{type:{summary:"InputType"},defaultValue:{summary:"text"},category:"Behavior"}},size:{control:"radio",options:["small","default","large"],description:"Input field size",table:{type:{summary:"small | default | large"},defaultValue:{summary:"default"},category:"Appearance"}},showLabel:{control:"boolean",description:"Whether to show the label",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},showFieldImportance:{control:"boolean",description:"Whether to show field importance (Required indicator)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}},showInlineText:{control:"boolean",description:"Whether to show inline helping text",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},fieldImportanceVariant:{control:"radio",options:["mandatory","optional","asterisk"],description:"Field importance variant",table:{type:{summary:"mandatory | optional | asterisk"},defaultValue:{summary:"mandatory"},category:"Appearance"}},required:{control:"boolean",description:"Whether the field is required",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Validation"}},disabled:{control:"boolean",description:"Whether the field is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},error:{control:"boolean",description:"Whether the field has an error",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},fullWidth:{control:"boolean",description:"Whether the input takes full width of container",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Layout"}},leadingIcon:{control:!1,description:"Icon element to display at the start of the input",table:{type:{summary:"React.ReactNode"},category:"Content"}},trailingIcon:{control:!1,description:"Icon element to display at the end of the input",table:{type:{summary:"React.ReactNode"},category:"Content"}}}},i={args:{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",helperTextState:"default",type:"text",size:"default",required:!1,disabled:!1,error:!1,fullWidth:!1,showLabel:!0,showFieldImportance:!1,showInlineText:!0}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Small Input",placeholder:"Small size",size:"small"}),e.jsx(a,{label:"Default Input",placeholder:"Default size",size:"default"}),e.jsx(a,{label:"Large Input",placeholder:"Large size",size:"large"})]}),parameters:{docs:{description:{story:"Input fields are available in three sizes: small (32px), medium (40px), and large (48px)."}}}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Default State",placeholder:"Enter text"}),e.jsx(a,{label:"Disabled State",placeholder:"Disabled input",disabled:!0,value:"Cannot edit this"}),e.jsx(a,{label:"Error State",placeholder:"Enter text",helperText:"Inline error text",helperTextState:"error"}),e.jsx(a,{label:"Active/Focused State",placeholder:"Click to focus",helperText:"This shows focus styling when clicked"})]}),parameters:{docs:{description:{story:"Input fields support multiple states: default, hover (automatic), focused (automatic), disabled, error, and success."}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Text Input",type:"text",placeholder:"Enter text"}),e.jsx(a,{label:"Email Input",type:"email",placeholder:"email@example.com"}),e.jsx(a,{label:"Password Input",type:"password",placeholder:"Enter password"}),e.jsx(a,{label:"Number Input",type:"number",placeholder:"Enter number"}),e.jsx(a,{label:"Search Input",type:"search",placeholder:"Search..."}),e.jsx(a,{label:"Date Input",type:"date"})]}),parameters:{docs:{description:{story:"Input fields support various HTML5 input types including text, email, password, number, search, date, and more."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Search",type:"search",placeholder:"Search...",leadingIcon:e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})})}),e.jsx(a,{label:"Email",type:"email",placeholder:"email@example.com",trailingIcon:e.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:[e.jsx("path",{d:"M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"}),e.jsx("path",{d:"M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"})]})})]}),parameters:{docs:{description:{story:"Input fields can include leading or trailing icons to provide visual context."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Full Name",placeholder:"John Doe",required:!0,showFieldImportance:!0,fieldImportanceVariant:"mandatory",helperText:"This field is required"}),e.jsx(a,{label:"Email Address",type:"email",placeholder:"email@example.com",required:!0,showFieldImportance:!0,fieldImportanceVariant:"asterisk"}),e.jsx(a,{label:"Middle Name",placeholder:"Optional",showFieldImportance:!0,fieldImportanceVariant:"optional",helperText:"This field is optional"})]}),parameters:{docs:{description:{story:"Field importance can be shown in three variants: (Required), * asterisk, or (Optional)."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Default State",placeholder:"Enter text",helperText:"Default helping message with icon"}),e.jsx(a,{label:"Error State",placeholder:"Enter text",helperText:"This field has an error",helperTextState:"error"}),e.jsx(a,{label:"Large Size with Helper",placeholder:"Enter text",size:"large",helperText:"Large size uses 14px font for helper text"})]}),parameters:{docs:{description:{story:"Helper text appears below the input with icons and supports different states (default, error) and sizes."}}}},u={render:()=>e.jsx("div",{style:{width:"100%",maxWidth:"600px"},children:e.jsx(a,{label:"Full Width Input",placeholder:"This input takes full width",fullWidth:!0,helperText:"Use fullWidth prop for responsive layouts"})}),parameters:{docs:{description:{story:"Use the fullWidth prop to make the input field responsive and fill its container."}}}},m={render:()=>e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"400px"},children:[e.jsx(a,{label:"First Name",placeholder:"Enter your first name",required:!0}),e.jsx(a,{label:"Last Name",placeholder:"Enter your last name",required:!0}),e.jsx(a,{label:"Email",type:"email",placeholder:"email@example.com",required:!0,helperText:"We'll never share your email"}),e.jsx(a,{label:"Phone Number",type:"tel",placeholder:"(555) 123-4567"}),e.jsx(a,{label:"Password",type:"password",placeholder:"Enter password",required:!0,helperText:"Must be at least 8 characters"})]}),parameters:{docs:{description:{story:"Example of a complete form using multiple input fields with various types and configurations."}}}},h={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"32px",width:"800px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{color:"#10B981",marginBottom:"16px"},children:"✓ Do"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Email address",type:"email",placeholder:"email@example.com",helperText:"Use sentence case for labels"}),e.jsx(a,{label:"Search products",type:"search",placeholder:"Search...",helperText:"Provide clear, concise labels"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{color:"#EF4444",marginBottom:"16px"},children:"✗ Don't"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"EMAIL ADDRESS",type:"email",placeholder:"EMAIL@EXAMPLE.COM",helperText:"Don't use all caps"}),e.jsx(a,{label:"Enter Your Complete Email Address Here",type:"email",placeholder:"Please type your email",helperText:"Don't use overly verbose labels"})]})]})]}),parameters:{docs:{description:{story:`
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
        `}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"1. Active (Default)"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"2. Focused"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",showFieldImportance:!0,autoFocus:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"3. Error"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",helperText:"Error helping message",helperTextState:"error",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"4. Disabled"}),e.jsx(a,{label:"Label",placeholder:"Placeholder",disabled:!0,helperText:"Default helping message",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"5. Filled"}),e.jsx(a,{label:"Label",value:"Filled value",helperText:"Default helping message",showFieldImportance:!0})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"6. Non-editable (Read-only)"}),e.jsx(a,{label:"Label",value:"System-filled value",readOnly:!0,helperText:"Default helping message",showFieldImportance:!0})]})]}),parameters:{docs:{description:{story:`
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
        `}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Extra Small (28px)",placeholder:"xsmall size",size:"xsmall",helperText:"Height: 28px"}),e.jsx(a,{label:"Small (32px)",placeholder:"small size",size:"small",helperText:"Height: 32px"}),e.jsx(a,{label:"Default (40px)",placeholder:"default size",size:"default",helperText:"Height: 40px"}),e.jsx(a,{label:"Large (50px)",placeholder:"large size",size:"large",helperText:"Height: 50px"})]}),parameters:{docs:{description:{story:"Input fields are available in four sizes matching Figma design: xsmall (28px), small (32px), default (40px), and large (50px)."}}}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Loading State"}),e.jsx(t,{variant:"body",children:"Shows a loading spinner while data is being fetched."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx(a,{label:"Email Address",isLoading:!0}),e.jsx(a,{label:"Username",isLoading:!0,helperText:"Checking availability..."})]})]}),parameters:{docs:{description:{story:'Use `isLoading` prop to show a loading spinner. The input is disabled and shows "Loading..." placeholder.'}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Empty State"}),e.jsx(t,{variant:"body",children:"Shows an empty state message when no data is available."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx(a,{label:"Search Results",isEmpty:!0,emptyMessage:"No results found"}),e.jsx(a,{label:"Recent Items",isEmpty:!0,emptyMessage:"No recent items available"})]})]}),parameters:{docs:{description:{story:"Use `isEmpty` prop with custom `emptyMessage` to show empty states."}}}},b={render:()=>{const[S,je]=Be.useState([]),r=l=>{je(F=>[...F.slice(-4),`${new Date().toLocaleTimeString()}: ${l}`])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Event Callbacks"}),e.jsx(t,{variant:"body",children:"All available event callbacks demonstrated."}),e.jsx(a,{label:"Interactive Input",placeholder:"Try focusing, typing, and pressing Enter/Escape",onFocus:()=>r("onFocus fired"),onAfterFocus:()=>r("onAfterFocus fired (200ms delay)"),onBlur:()=>r("onBlur fired"),onAfterBlur:()=>r("onAfterBlur fired (200ms delay)"),onChange:l=>r(`onChange: ${l.target.value}`),onEnter:()=>r("onEnter fired (Enter key pressed)"),onEscape:()=>r("onEscape fired (Escape key pressed)"),style:{width:"400px"}}),e.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"#f5f5f5",borderRadius:"4px",maxHeight:"150px",overflow:"auto"},children:[e.jsx(t,{variant:"caption",weight:"semibold",style:{marginBottom:"8px",display:"block"},children:"Event Log:"}),S.length===0?e.jsx(t,{variant:"caption",style:{color:"#666"},children:"No events yet..."}):S.map((l,F)=>e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:l},F))]})]})},parameters:{docs:{description:{story:`
New event callbacks available:
- **onAfterFocus**: Fired 200ms after focus (after animation)
- **onAfterBlur**: Fired 200ms after blur (after animation)
- **onEnter**: Fired when Enter key is pressed
- **onEscape**: Fired when Escape key is pressed
- **onClear**: Fired when input is cleared
        `}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"className Overrides"}),e.jsx(t,{variant:"body",children:"Multiple override points for custom styling."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:e.jsx(a,{label:"Custom Styled Input",placeholder:"All parts can be styled",helperText:"Each part has its own className prop",className:"custom-container",labelClassName:"custom-label",wrapperClassName:"custom-wrapper",inputClassName:"custom-input",helperTextClassName:"custom-helper",style:{marginBottom:"20px"}})}),e.jsxs("div",{style:{padding:"12px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsx(t,{variant:"caption",weight:"semibold",style:{marginBottom:"8px",display:"block"},children:"Available className Props:"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• className - Root container"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• labelClassName - Label element"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• wrapperClassName - Input wrapper"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• inputClassName - Input element"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• helperTextClassName - Helper text"})]})]}),parameters:{docs:{description:{story:"Use multiple className props to customize different parts of the component."}}}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Polymorphic Rendering"}),e.jsx(t,{variant:"body",children:"Render as different element types using the 'as' prop."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:e.jsx(a,{as:"input",label:"Default (as='input')",placeholder:"Rendered as input element"})}),e.jsx("div",{style:{padding:"12px",background:"#f5f5f5",borderRadius:"4px",marginTop:"16px"},children:e.jsx(t,{variant:"caption",style:{color:"#666"},children:"The 'as' prop allows rendering as different HTML elements while maintaining the same API."})})]}),parameters:{docs:{description:{story:"Use the `as` prop for advanced use cases where you need to render as a different element."}}}},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsx(a,{label:"Accessible Input",placeholder:"Try tabbing to this field",helperText:"Press Tab to navigate, Enter to submit"}),e.jsx(a,{label:"Email with ARIA",type:"email",placeholder:"email@example.com","aria-label":"Email address input",helperText:"Screen readers announce this properly"}),e.jsx(a,{label:"Error with Announcement",placeholder:"Enter text",helperText:"This error is announced to screen readers",helperTextState:"error"})]}),parameters:{docs:{description:{story:`
### Keyboard Navigation
- **Tab**: Move focus to the input field
- **Shift + Tab**: Move focus to previous element
- **Enter**: Submit form (if in a form) or trigger onEnter callback
- **Escape**: Trigger onEscape callback

### Screen Reader Support
- Labels are properly associated with inputs
- Helper text is announced via aria-describedby
- Error messages use role="alert" for immediate announcement
- Required fields are announced as required
- Disabled state is properly communicated
- Loading state announced with aria-busy

### Focus Management
- Clear focus indicators (2px outline with offset)
- Focus ring uses theme color for brand consistency
- Logical tab order maintained
- Focus visible on keyboard navigation only
        `}}}},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px",maxWidth:"800px"},children:[e.jsx(t,{variant:"headingL",weight:"semibold",children:"Component Maturity Enhancements"}),e.jsx(t,{variant:"body",children:"InputField now meets enterprise-grade standards with the following enhancements:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginTop:"16px"},children:[e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ API & Composition"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• forwardRef support"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• Polymorphic 'as' prop"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• ...restProps passthrough"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ States & Behavior"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• isLoading state"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• isEmpty state"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• isInvalid alias"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ Overrides & Theming"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• style prop"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 4 className overrides"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• Full customization"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ Event Callbacks"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• onAfterFocus/Blur"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• onEnter/Escape"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• onClear"})]})]}),e.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#e3f2fd",borderRadius:"8px",borderLeft:"4px solid #2196f3"},children:[e.jsx(t,{variant:"body",weight:"semibold",style:{marginBottom:"8px"},children:"📊 Total Enhancements"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 9 new props"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 5 new event callbacks"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 4 className override points"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• Zero breaking changes"})]})]}),parameters:{docs:{description:{story:"Summary of all Component Maturity Checklist enhancements applied to InputField."}}}};var E,k,D;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(D=(k=i.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var j,B,A;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(B=s.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var C,L,N;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(N=(L=o.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var R,P,W;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(W=(P=n.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var z,M,U;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var H,G,q;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(q=(G=p.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var V,O,Y;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Y=(O=c.parameters)==null?void 0:O.docs)==null?void 0:Y.source}}};var $,K,J;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(J=(K=u.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var X,Z,_;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(_=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:_.source}}};var Q,ee,ae;h.parameters={...h.parameters,docs:{...(Q=h.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var te,re,le;y.parameters={...y.parameters,docs:{...(te=y.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(le=(re=y.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var ie,se,oe;g.parameters={...g.parameters,docs:{...(ie=g.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(oe=(se=g.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,de,pe;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Loading State</Typography>
      <Typography variant="body">Shows a loading spinner while data is being fetched.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px'
    }}>
        <InputField label="Email Address" isLoading={true} />
        <InputField label="Username" isLoading={true} helperText="Checking availability..." />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`isLoading\` prop to show a loading spinner. The input is disabled and shows "Loading..." placeholder.'
      }
    }
  }
}`,...(pe=(de=x.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,ue,me;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Empty State</Typography>
      <Typography variant="body">Shows an empty state message when no data is available.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px'
    }}>
        <InputField label="Search Results" isEmpty={true} emptyMessage="No results found" />
        <InputField label="Recent Items" isEmpty={true} emptyMessage="No recent items available" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`isEmpty\` prop with custom \`emptyMessage\` to show empty states.'
      }
    }
  }
}`,...(me=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var he,ye,ge;b.parameters={...b.parameters,docs:{...(he=b.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [logs, setLogs] = useState<string[]>([]);
    const addLog = (message: string) => {
      setLogs(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Event Callbacks</Typography>
        <Typography variant="body">All available event callbacks demonstrated.</Typography>
        
        <InputField label="Interactive Input" placeholder="Try focusing, typing, and pressing Enter/Escape" onFocus={() => addLog('onFocus fired')} onAfterFocus={() => addLog('onAfterFocus fired (200ms delay)')} onBlur={() => addLog('onBlur fired')} onAfterBlur={() => addLog('onAfterBlur fired (200ms delay)')} onChange={e => addLog(\`onChange: \${e.target.value}\`)} onEnter={() => addLog('onEnter fired (Enter key pressed)')} onEscape={() => addLog('onEscape fired (Escape key pressed)')} style={{
        width: '400px'
      }} />
        
        <div style={{
        marginTop: '16px',
        padding: '12px',
        background: '#f5f5f5',
        borderRadius: '4px',
        maxHeight: '150px',
        overflow: 'auto'
      }}>
          <Typography variant="caption" weight="semibold" style={{
          marginBottom: '8px',
          display: 'block'
        }}>
            Event Log:
          </Typography>
          {logs.length === 0 ? <Typography variant="caption" style={{
          color: '#666'
        }}>No events yet...</Typography> : logs.map((log, i) => <Typography key={i} variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>
                {log}
              </Typography>)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
New event callbacks available:
- **onAfterFocus**: Fired 200ms after focus (after animation)
- **onAfterBlur**: Fired 200ms after blur (after animation)
- **onEnter**: Fired when Enter key is pressed
- **onEscape**: Fired when Escape key is pressed
- **onClear**: Fired when input is cleared
        \`
      }
    }
  }
}`,...(ge=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var xe,fe,be;v.parameters={...v.parameters,docs:{...(xe=v.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">className Overrides</Typography>
      <Typography variant="body">Multiple override points for custom styling.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px'
    }}>
        <InputField label="Custom Styled Input" placeholder="All parts can be styled" helperText="Each part has its own className prop" className="custom-container" labelClassName="custom-label" wrapperClassName="custom-wrapper" inputClassName="custom-input" helperTextClassName="custom-helper" style={{
        marginBottom: '20px'
      }} />
      </div>
      
      <div style={{
      padding: '12px',
      background: '#f5f5f5',
      borderRadius: '4px'
    }}>
        <Typography variant="caption" weight="semibold" style={{
        marginBottom: '8px',
        display: 'block'
      }}>
          Available className Props:
        </Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• className - Root container</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• labelClassName - Label element</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• wrapperClassName - Input wrapper</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• inputClassName - Input element</Typography>
        <Typography variant="caption" style={{
        display: 'block'
      }}>• helperTextClassName - Helper text</Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use multiple className props to customize different parts of the component.'
      }
    }
  }
}`,...(be=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var ve,we,Te;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Polymorphic Rendering</Typography>
      <Typography variant="body">Render as different element types using the 'as' prop.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px'
    }}>
        <InputField as="input" label="Default (as='input')" placeholder="Rendered as input element" />
      </div>
      
      <div style={{
      padding: '12px',
      background: '#f5f5f5',
      borderRadius: '4px',
      marginTop: '16px'
    }}>
        <Typography variant="caption" style={{
        color: '#666'
      }}>
          The 'as' prop allows rendering as different HTML elements while maintaining the same API.
        </Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use the \`as\` prop for advanced use cases where you need to render as a different element.'
      }
    }
  }
}`,...(Te=(we=w.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Ie,Fe,Se;T.parameters={...T.parameters,docs:{...(Ie=T.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
- **Enter**: Submit form (if in a form) or trigger onEnter callback
- **Escape**: Trigger onEscape callback

### Screen Reader Support
- Labels are properly associated with inputs
- Helper text is announced via aria-describedby
- Error messages use role="alert" for immediate announcement
- Required fields are announced as required
- Disabled state is properly communicated
- Loading state announced with aria-busy

### Focus Management
- Clear focus indicators (2px outline with offset)
- Focus ring uses theme color for brand consistency
- Logical tab order maintained
- Focus visible on keyboard navigation only
        \`
      }
    }
  }
}`,...(Se=(Fe=T.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var Ee,ke,De;I.parameters={...I.parameters,docs:{...(Ee=I.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    maxWidth: '800px'
  }}>
      <Typography variant="headingL" weight="semibold">Component Maturity Enhancements</Typography>
      <Typography variant="body">InputField now meets enterprise-grade standards with the following enhancements:</Typography>
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginTop: '16px'
    }}>
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ API & Composition</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• forwardRef support</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• Polymorphic 'as' prop</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• ...restProps passthrough</Typography>
        </div>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ States & Behavior</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• isLoading state</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• isEmpty state</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• isInvalid alias</Typography>
        </div>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ Overrides & Theming</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• style prop</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• 4 className overrides</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• Full customization</Typography>
        </div>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ Event Callbacks</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• onAfterFocus/Blur</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• onEnter/Escape</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• onClear</Typography>
        </div>
      </div>
      
      <div style={{
      marginTop: '16px',
      padding: '16px',
      background: '#e3f2fd',
      borderRadius: '8px',
      borderLeft: '4px solid #2196f3'
    }}>
        <Typography variant="body" weight="semibold" style={{
        marginBottom: '8px'
      }}>📊 Total Enhancements</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• 9 new props</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• 5 new event callbacks</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• 4 className override points</Typography>
        <Typography variant="caption" style={{
        display: 'block'
      }}>• Zero breaking changes</Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Summary of all Component Maturity Checklist enhancements applied to InputField.'
      }
    }
  }
}`,...(De=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:De.source}}};const Ue=["Playground","Sizes","States","InputTypes","WithIcons","RequiredFields","HelpingTextStates","FullWidthLayout","FormExample","BestPractices","AllStates","AllSizes","LoadingState","EmptyState","EventCallbacks","ClassNameOverrides","PolymorphicRendering","AccessibilityDemo","ComponentMaturity"];export{T as AccessibilityDemo,g as AllSizes,y as AllStates,h as BestPractices,v as ClassNameOverrides,I as ComponentMaturity,f as EmptyState,b as EventCallbacks,m as FormExample,u as FullWidthLayout,c as HelpingTextStates,n as InputTypes,x as LoadingState,i as Playground,w as PolymorphicRendering,p as RequiredFields,s as Sizes,o as States,d as WithIcons,Ue as __namedExportsOrder,Me as default};
