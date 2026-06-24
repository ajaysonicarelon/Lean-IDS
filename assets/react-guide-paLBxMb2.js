import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{useMDXComponents as t}from"./index-DL7Mpk60.js";import{M as r}from"./index-BwSaPJK2.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-65YTGFeW.js";import"./index-Clv5cdFl.js";import"./index-B2UzP9c-.js";import"./index-DgH-xKnr.js";import"./index-DrFu-skq.js";function i(s){const e={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(r,{title:"Getting Started/React"}),`
`,n.jsx(e.h1,{id:"getting-started",children:"Getting Started"}),`
`,n.jsx(e.h2,{id:"using-lean-ids-in-react",children:"Using Lean IDS in React"}),`
`,n.jsx(e.h3,{id:"-installation",children:"📦 Installation"}),`
`,n.jsx(e.p,{children:"Install both packages:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-bash",children:`npm install @ajaysoni7832/lean-ids-components @ajaysoni7832/lean-ids-tokens
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-quick-start",children:"🚀 Quick Start"}),`
`,n.jsx(e.h3,{id:"basic-setup",children:"Basic Setup"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ThemeProvider } from '@ajaysoni7832/lean-ids-components';
import { theme } from '@ajaysoni7832/lean-ids-tokens';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <YourApp />
    </ThemeProvider>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"using-components",children:"Using Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, InputField, Checkbox } from '@ajaysoni7832/lean-ids-components';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Click Me</Button>
      <InputField 
        label="Email" 
        placeholder="Enter your email"
        type="email"
      />
      <Checkbox label="I agree to terms" />
    </div>
  );
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-data-table",children:"📊 Data Table"}),`
`,n.jsx(e.h3,{id:"complete-template-available",children:"Complete Template Available"}),`
`,n.jsx(e.p,{children:"We provide a production-ready data table template with all features:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:"✅ Column freezing (max 3 columns)"}),`
`,n.jsx(e.li,{children:"✅ Sorting (three-state: asc → desc → none)"}),`
`,n.jsx(e.li,{children:"✅ Row selection (individual + bulk)"}),`
`,n.jsx(e.li,{children:"✅ Column search with filtering"}),`
`,n.jsx(e.li,{children:"✅ Pagination"}),`
`,n.jsx(e.li,{children:"✅ Column visibility toggle"}),`
`,n.jsx(e.li,{children:"✅ Settings modal"}),`
`]}),`
`,n.jsx(e.h3,{id:"quick-setup",children:"Quick Setup"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Copy the template:"})}),`
`]}),`
`,n.jsx(e.p,{children:"Find the complete implementation:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Location:"})," ",n.jsx(e.code,{children:"packages/components/src/Table/TableTemplate.tsx"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Guide:"})," ",n.jsx(e.code,{children:"packages/components/src/Table/README_TABLE_TEMPLATE.md"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"GitHub:"})," ",n.jsx(e.a,{href:"https://github.com/ajaysonicarelon/Lean-IDS/blob/main/packages/components/src/Table/TableTemplate.tsx",rel:"nofollow",children:"View on GitHub"})]}),`
`]}),`
`,n.jsxs(e.ol,{start:"2",children:[`
`,n.jsx(e.li,{children:n.jsx(e.strong,{children:"Use in your app:"})}),`
`]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { TableTemplate } from './components/TableTemplate';

function App() {
  const data = [
    { id: '1', name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { id: '2', name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  ];

  const columns = [
    { id: 'checkbox', label: 'Select', visible: true, locked: true, order: 0 },
    { id: 'id', label: 'ID', visible: true, locked: false, order: 1, sortable: true },
    { id: 'name', label: 'Name', visible: true, locked: false, order: 2, sortable: true },
    { id: 'email', label: 'Email', visible: true, locked: false, order: 3, sortable: true },
    { id: 'status', label: 'Status', visible: true, locked: false, order: 4 },
  ];

  return (
    <TableTemplate
      data={data}
      columns={columns}
      enableFreezing={true}
      maxFrozenColumns={3}
      enableSorting={true}
      enableSelection={true}
      enablePagination={true}
    />
  );
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-available-components",children:"🎨 Available Components"}),`
`,n.jsx(e.h3,{id:"form-components",children:"Form Components"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"})," - Primary, secondary, and text variants"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"InputField"})," - Text input with label and validation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Checkbox"})," - Checkbox with label"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"RadioButton"})," - Radio button with label"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Toggle"})," - Toggle switch"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Textarea"})," - Multi-line text input"]}),`
`]}),`
`,n.jsx(e.h3,{id:"display-components",children:"Display Components"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge"})," - Status badges"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Chip"})," - Removable tags"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Avatar"})," - User avatars"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"AlertBanner"})," - Alert messages"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Toast"})," - Toast notifications"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"InlineMessage"})," - Inline messages"]}),`
`]}),`
`,n.jsx(e.h3,{id:"navigation",children:"Navigation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Breadcrumbs"})," - Breadcrumb navigation"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Pagination"})," - Page navigation"]}),`
`]}),`
`,n.jsx(e.h3,{id:"data-display",children:"Data Display"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TableHeader"})," - Table header cells"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TableCell"})," - Table data cells"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TableSettings"})," - Column settings modal"]}),`
`]}),`
`,n.jsx(e.h3,{id:"icons",children:"Icons"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Icon"})," - Lucide React icons"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-using-design-tokens",children:"🎨 Using Design Tokens"}),`
`,n.jsx(e.h3,{id:"import-tokens",children:"Import Tokens"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { colors, spacing, typography } from '@ajaysoni7832/lean-ids-tokens';

const MyComponent = () => {
  return (
    <div style={{
      backgroundColor: colors.carelon.primary[500],
      padding: \`\${spacing[16]}px\`,
      fontFamily: typography.fonts.primary
    }}>
      Styled with tokens
    </div>
  );
};
`})}),`
`,n.jsx(e.h3,{id:"styled-components",children:"Styled Components"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import styled from 'styled-components';

const StyledButton = styled.button\`
  background-color: \${({ theme }) => theme.colors.palette.primary[500]};
  padding: \${({ theme }) => \`\${theme.spacing[12]}px \${theme.spacing[24]}px\`};
  font-family: \${({ theme }) => theme.fonts.primary};
  border-radius: 8px;
  border: none;
  color: white;
  cursor: pointer;
  
  &:hover {
    background-color: \${({ theme }) => theme.colors.palette.primary[600]};
  }
\`;
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-theme-customization",children:"🔧 Theme Customization"}),`
`,n.jsx(e.h3,{id:"using-carelon-theme",children:"Using Carelon Theme"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ThemeProvider } from '@ajaysoni7832/lean-ids-components';
import { theme } from '@ajaysoni7832/lean-ids-tokens';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <YourApp />
    </ThemeProvider>
  );
}
`})}),`
`,n.jsx(e.h3,{id:"switching-themes",children:"Switching Themes"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ThemeProvider } from '@ajaysoni7832/lean-ids-components';
import { carelonTheme, elevanceTheme } from '@ajaysoni7832/lean-ids-tokens';
import { useState } from 'react';

function App() {
  const [currentTheme, setCurrentTheme] = useState(carelonTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <button onClick={() => setCurrentTheme(carelonTheme)}>
        Carelon Theme
      </button>
      <button onClick={() => setCurrentTheme(elevanceTheme)}>
        Elevance Theme
      </button>
      <YourApp />
    </ThemeProvider>
  );
}
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-component-examples",children:"📚 Component Examples"}),`
`,n.jsx(e.h3,{id:"button",children:"Button"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button } from '@ajaysoni7832/lean-ids-components';

<Button variant="primary" size="medium">
  Primary Button
</Button>

<Button variant="secondary" size="small">
  Secondary Button
</Button>

<Button variant="text" disabled>
  Disabled Button
</Button>
`})}),`
`,n.jsx(e.h3,{id:"input-field",children:"Input Field"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { InputField } from '@ajaysoni7832/lean-ids-components';

<InputField
  label="Email Address"
  placeholder="Enter your email"
  type="email"
  required
  helpText="We'll never share your email"
/>

<InputField
  label="Password"
  type="password"
  error="Password is required"
/>
`})}),`
`,n.jsx(e.h3,{id:"checkbox",children:"Checkbox"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Checkbox } from '@ajaysoni7832/lean-ids-components';

<Checkbox
  label="I agree to the terms and conditions"
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
/>

<Checkbox
  label="Subscribe to newsletter"
  indeterminate={true}
/>
`})}),`
`,n.jsx(e.h3,{id:"badge",children:"Badge"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Badge } from '@ajaysoni7832/lean-ids-components';

<Badge type="success">Active</Badge>
<Badge type="warning">Pending</Badge>
<Badge type="error">Failed</Badge>
<Badge type="info">New</Badge>
`})}),`
`,n.jsx(e.h3,{id:"chip",children:"Chip"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Chip } from '@ajaysoni7832/lean-ids-components';

<Chip
  label="React"
  onRemove={() => console.log('Removed')}
/>

<Chip
  label="TypeScript"
  type="primary"
/>
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-typescript-support",children:"🎯 TypeScript Support"}),`
`,n.jsx(e.p,{children:"All components are fully typed with TypeScript:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ButtonProps, InputFieldProps } from '@ajaysoni7832/lean-ids-components';

const MyButton: React.FC<ButtonProps> = (props) => {
  return <Button {...props} />;
};

const MyInput: React.FC<InputFieldProps> = (props) => {
  return <InputField {...props} />;
};
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-tree-shaking",children:"📦 Tree Shaking"}),`
`,n.jsx(e.p,{children:"Import only what you need:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`// ✅ Good - Tree shakeable
import { Button, InputField } from '@ajaysoni7832/lean-ids-components';

// ❌ Avoid - Imports everything
import * as Components from '@ajaysoni7832/lean-ids-components';
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-resources",children:"📚 Resources"}),`
`,n.jsx(e.h3,{id:"documentation",children:"Documentation"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"npm Package:"})," ",n.jsx(e.a,{href:"https://www.npmjs.com/package/@ajaysoni7832/lean-ids-components",rel:"nofollow",children:"@ajaysoni7832/lean-ids-components"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"npm Tokens:"})," ",n.jsx(e.a,{href:"https://www.npmjs.com/package/@ajaysoni7832/lean-ids-tokens",rel:"nofollow",children:"@ajaysoni7832/lean-ids-tokens"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"GitHub Repository:"})," ",n.jsx(e.a,{href:"https://github.com/ajaysonicarelon/Lean-IDS",rel:"nofollow",children:"Lean-IDS"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Table Template Guide:"})," ",n.jsx(e.code,{children:"packages/components/src/Table/README_TABLE_TEMPLATE.md"})]}),`
`]}),`
`,n.jsx(e.h3,{id:"requirements",children:"Requirements"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React:"})," 18.0.0 or higher"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"TypeScript:"})," 4.8+ (optional)"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"styled-components:"})," Peer dependency"]}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-quick-checklist",children:"✅ Quick Checklist"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:["[ ] Install ",n.jsx(e.code,{children:"@ajaysoni7832/lean-ids-components"})," and ",n.jsx(e.code,{children:"@ajaysoni7832/lean-ids-tokens"})]}),`
`,n.jsxs(e.li,{children:["[ ] Wrap app with ",n.jsx(e.code,{children:"ThemeProvider"})]}),`
`,n.jsx(e.li,{children:"[ ] Import components as needed"}),`
`,n.jsx(e.li,{children:"[ ] Use design tokens for custom styling"}),`
`,n.jsx(e.li,{children:"[ ] Copy table template (if needed)"}),`
`,n.jsx(e.li,{children:"[ ] Build your UI!"}),`
`]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-common-questions",children:"🆘 Common Questions"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q: Do I need to install styled-components?"}),n.jsx(e.br,{}),`
`,"A: Yes, it's a peer dependency. Install with: ",n.jsx(e.code,{children:"npm install styled-components"})]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q: Can I use this with Next.js?"}),n.jsx(e.br,{}),`
`,"A: Yes! Works with Next.js 13+ (App Router and Pages Router)"]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q: Can I customize component styles?"}),n.jsx(e.br,{}),`
`,"A: Yes! All components accept className and style props, or use styled-components to extend them."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Q: Is SSR supported?"}),n.jsx(e.br,{}),`
`,"A: Yes, components work with server-side rendering."]}),`
`,n.jsx(e.hr,{}),`
`,n.jsx(e.h2,{id:"-complete-example",children:"🎯 Complete Example"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { ThemeProvider, Button, InputField, Badge } from '@ajaysoni7832/lean-ids-components';
import { theme } from '@ajaysoni7832/lean-ids-tokens';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: '24px' }}>
        <h1>Lean IDS React Demo</h1>
        
        <InputField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        
        <Button variant="primary" onClick={() => console.log(email)}>
          Submit
        </Button>
        
        <Badge type="success">Active</Badge>
      </div>
    </ThemeProvider>
  );
}

export default App;
`})}),`
`,n.jsx(e.hr,{}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Happy coding with Lean IDS in React!"})," 🚀"]})]})}function u(s={}){const{wrapper:e}={...t(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(i,{...s})}):i(s)}export{u as default};
