import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{H as t}from"./HelpingText-DoRwUTLu.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-CuwBLqEg.js";const R={title:"Components/HelpingText",component:t,parameters:{layout:"centered",docs:{description:{component:`
# HelpingText

Helper text component with different states (default, info, warning, error) and optional icons.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { HelpingText } from '@ajaysoni7832/lean-ids-components';

function MyForm() {
  return (
    <div>
      <InputField label="Email" />
      <HelpingText
        text="Enter a valid email address"
        state="default"
        showIcon
      />
    </div>
  );
}
\`\`\`

## Features

✅ **Four States** - Default, info, warning, error
✅ **State Icons** - Contextual icons for each state
✅ **Two Sizes** - Default and large
✅ **Flexible** - Use with any form field
✅ **Accessible** - Proper ARIA attributes

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | required | Helper text message |
| state | 'default' \\| 'info' \\| 'warning' \\| 'error' | 'default' | Text state/color |
| size | 'default' \\| 'large' | 'default' | Text size |
| showIcon | boolean | true | Show state icon |
| className | string | - | Custom CSS class |

## States

### Default
- Neutral gray color
- Info icon
- Use for general guidance

### Info
- Blue color
- Info icon
- Use for helpful information

### Warning
- Orange/yellow color
- Warning icon
- Use for cautions or important notes

### Error
- Red color
- Error icon
- Use for validation errors

## Examples

### Default State
\`\`\`tsx
<HelpingText
  text="This is a helpful message"
  state="default"
  showIcon
/>
\`\`\`

### Info State
\`\`\`tsx
<HelpingText
  text="Additional information about this field"
  state="info"
  showIcon
/>
\`\`\`

### Warning State
\`\`\`tsx
<HelpingText
  text="This action cannot be undone"
  state="warning"
  showIcon
/>
\`\`\`

### Error State
\`\`\`tsx
<HelpingText
  text="This field is required"
  state="error"
  showIcon
/>
\`\`\`

### Without Icon
\`\`\`tsx
<HelpingText
  text="Simple text without icon"
  state="default"
  showIcon={false}
/>
\`\`\`

### Large Size
\`\`\`tsx
<HelpingText
  text="Larger helper text"
  state="info"
  size="large"
  showIcon
/>
\`\`\`

## Best Practices

1. **Use with form fields** - Provide context and guidance
2. **Match state to purpose** - Error for validation, info for help
3. **Keep text concise** - One or two sentences max
4. **Show icons** - They provide quick visual cues
5. **Use error state sparingly** - Only for actual errors

## Common Use Cases

- **Field requirements** - "Password must be 8+ characters"
- **Validation errors** - "Email address is invalid"
- **Helpful hints** - "We'll never share your email"
- **Warnings** - "This will delete all data"
- **Success messages** - "Changes saved successfully"

## Accessibility

- ✅ Proper color contrast
- ✅ Icon + text (not icon alone)
- ✅ ARIA live regions for errors
- ✅ Associated with form fields via aria-describedby
        `}}},tags:["autodocs"],argTypes:{text:{control:"text",description:"Helper text message"},state:{control:"select",options:["default","info","warning","error"],description:"State of the helper text"},size:{control:"select",options:["default","large"],description:"Size variant"},showIcon:{control:"boolean",description:"Whether to show the leading icon"}}},s={args:{text:"Default helping message",state:"default",size:"default",showIcon:!0}},a={args:{text:"This is informational text",state:"info",size:"default",showIcon:!0}},r={args:{text:"This is a warning message",state:"warning",size:"default",showIcon:!0}},o={args:{text:"This is an error message",state:"error",size:"default",showIcon:!0}},n={args:{text:"Helper text without icon",state:"default",size:"default",showIcon:!1}},i={args:{text:"Large size helper text",state:"default",size:"large",showIcon:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{text:"Default helping message",state:"default",showIcon:!0}),e.jsx(t,{text:"Informational message",state:"info",showIcon:!0}),e.jsx(t,{text:"Warning message",state:"warning",showIcon:!0}),e.jsx(t,{text:"Error message",state:"error",showIcon:!0})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{text:"Default helping message",state:"default",showIcon:!1}),e.jsx(t,{text:"Informational message",state:"info",showIcon:!1}),e.jsx(t,{text:"Warning message",state:"warning",showIcon:!1}),e.jsx(t,{text:"Error message",state:"error",showIcon:!1})]})};var u,g,d;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    text: 'Default helping message',
    state: 'default',
    size: 'default',
    showIcon: true
  }
}`,...(d=(g=s.parameters)==null?void 0:g.docs)==null?void 0:d.source}}};var p,f,x;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    text: 'This is informational text',
    state: 'info',
    size: 'default',
    showIcon: true
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var m,h,w;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'This is a warning message',
    state: 'warning',
    size: 'default',
    showIcon: true
  }
}`,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var I,T,S;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: 'This is an error message',
    state: 'error',
    size: 'default',
    showIcon: true
  }
}`,...(S=(T=o.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var H,y,z;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    text: 'Helper text without icon',
    state: 'default',
    size: 'default',
    showIcon: false
  }
}`,...(z=(y=n.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var v,D,W;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    text: 'Large size helper text',
    state: 'default',
    size: 'large',
    showIcon: true
  }
}`,...(W=(D=i.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var E,j,b;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <HelpingText text="Default helping message" state="default" showIcon={true} />
      <HelpingText text="Informational message" state="info" showIcon={true} />
      <HelpingText text="Warning message" state="warning" showIcon={true} />
      <HelpingText text="Error message" state="error" showIcon={true} />
    </div>
}`,...(b=(j=l.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var A,U,C;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <HelpingText text="Default helping message" state="default" showIcon={false} />
      <HelpingText text="Informational message" state="info" showIcon={false} />
      <HelpingText text="Warning message" state="warning" showIcon={false} />
      <HelpingText text="Error message" state="error" showIcon={false} />
    </div>
}`,...(C=(U=c.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};const B=["Default","Informational","Warning","Error","WithoutIcon","LargeSize","AllStates","AllStatesWithoutIcons"];export{l as AllStates,c as AllStatesWithoutIcons,s as Default,o as Error,a as Informational,i as LargeSize,r as Warning,n as WithoutIcon,B as __namedExportsOrder,R as default};
