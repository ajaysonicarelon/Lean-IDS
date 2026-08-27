import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{C as a,a as n}from"./Chip-CHEHkNu4.js";import{r as I}from"./index-B0WjJBI_.js";import{T as i}from"./Typography-DlcmwxwF.js";import"./styled-components.browser.esm-CuwBLqEg.js";import"./_commonjsHelpers-CqkleIqs.js";const S=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"8",cy:"8",r:"6",fill:"currentColor"})}),Ae={title:"Components/Chip",component:a,parameters:{layout:"padded",docs:{description:{component:`
Enterprise-grade Chip component for displaying compact, interactive tags, categories, or selections.

## ✨ Features

- **Three Sizes**: Small, Medium, Large
- **Two Variants**: Filled, Outlined  
- **Five Types**: Default, Success, Warning, Error, Neutral
- **Eight States**: Default, Hover, Focus, Active, Disabled, Loading, Error, Empty
- **Polymorphic**: Render as any HTML element via 'as' prop
- **Slots**: Custom render functions for icons and labels
- **forwardRef**: Direct DOM access
- **Keyboard Navigation**: Full keyboard support (Enter, Space, Escape)
- **WCAG 2.1 AA**: Fully accessible with ARIA attributes
- **Multiple Customization Points**: className overrides, style props

## 📦 Installation

\`\`\`bash
npm install @lean-ids/components
\`\`\`

## 🚀 Basic Usage

\`\`\`tsx
import { Chip } from '@lean-ids/components';

<Chip label="React" variant="filled" size="medium" />
\`\`\`

## 🎯 Advanced Usage

\`\`\`tsx
// With loading state
<Chip label="Processing" isLoading loadingText="Processing data" />

// With error state
<Chip label="Failed" isInvalid errorMessage="Operation failed" />

// With custom render slots
<Chip 
  label="Custom"
  renderLeadingIcon={({ size, type }) => <CustomIcon />}
  renderLabel={(label) => <strong>{label}</strong>}
/>

// Polymorphic - render as button
<Chip as="button" label="Click me" onClick={handleClick} />

// With forwardRef
const chipRef = useRef<HTMLElement>(null);
<Chip ref={chipRef} label="Ref example" />
\`\`\`
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Chip label text",table:{type:{summary:"string"},category:"Content"}},size:{control:"radio",options:["small","medium","large"],description:"Chip size",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"small"},category:"Appearance"}},variant:{control:"radio",options:["filled","outlined"],description:"Visual variant",table:{type:{summary:"filled | outlined"},defaultValue:{summary:"filled"},category:"Appearance"}},type:{control:"radio",options:["default","success","warning","error","neutral"],description:"Color scheme type",table:{type:{summary:"default | success | warning | error | neutral"},defaultValue:{summary:"default"},category:"Appearance"}},disabled:{control:"boolean",description:"Whether the chip is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},width:{control:"text",description:'Custom width (e.g., "200px", "50%", "min(90vw, 600px)")',table:{type:{summary:"string"},category:"Layout"}},maxWidth:{control:"text",description:"Maximum width constraint",table:{type:{summary:"string"},category:"Layout"}},minWidth:{control:"text",description:"Minimum width constraint",table:{type:{summary:"string"},category:"Layout"}}}},o={args:{label:"Label",size:"small",variant:"filled",type:"default",disabled:!1}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Chip Sizes"}),e.jsx(i,{variant:"body",children:"Chips are available in three sizes: small, medium, and large."}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(a,{label:"Small",size:"small"}),e.jsx(a,{label:"Medium",size:"medium"}),e.jsx(a,{label:"Large",size:"large"})]})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Filled Variants"}),e.jsx(i,{variant:"body",children:"Filled chips with solid backgrounds for different semantic types."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{label:"Default",variant:"filled",type:"default"}),e.jsx(a,{label:"Success",variant:"filled",type:"success"}),e.jsx(a,{label:"Warning",variant:"filled",type:"warning"}),e.jsx(a,{label:"Error",variant:"filled",type:"error"}),e.jsx(a,{label:"Neutral",variant:"filled",type:"neutral"})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Outlined Variants"}),e.jsx(i,{variant:"body",children:"Outlined chips with borders for a lighter visual weight."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{label:"Default",variant:"outlined",type:"default"}),e.jsx(a,{label:"Success",variant:"outlined",type:"success"}),e.jsx(a,{label:"Warning",variant:"outlined",type:"warning"}),e.jsx(a,{label:"Error",variant:"outlined",type:"error"}),e.jsx(a,{label:"Neutral",variant:"outlined",type:"neutral"})]})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Chips with Icons"}),e.jsx(i,{variant:"body",children:"Chips can have leading and/or trailing icons for enhanced visual communication."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{label:"Leading Icon",leadingIcon:e.jsx(S,{})}),e.jsx(a,{label:"Trailing Icon",trailingIcon:e.jsx(n,{})}),e.jsx(a,{label:"Both Icons",leadingIcon:e.jsx(S,{}),trailingIcon:e.jsx(n,{})})]})]})},g={render:()=>{const[l,s]=I.useState([{id:1,label:"React"},{id:2,label:"TypeScript"},{id:3,label:"Styled Components"},{id:4,label:"Storybook"}]),r=t=>{s(l.filter(Te=>Te.id!==t))};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Removable Chips"}),e.jsx(i,{variant:"body",children:"Click the close icon to remove chips. Fully keyboard accessible (Tab + Enter/Space)."}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:l.map(t=>e.jsx(a,{label:t.label,trailingIcon:e.jsx(n,{}),onTrailingIconClick:()=>r(t.id)},t.id))})]})}},y={render:()=>{const[l,s]=I.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Clickable Chips"}),e.jsx(i,{variant:"body",children:"Chips can be clickable for selection or filtering. Use isActive prop to show selected state."}),e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["React","Vue","Angular","Svelte"].map(r=>e.jsx(a,{label:r,variant:l===r?"filled":"outlined",isActive:l===r,onClick:()=>s(r)},r))}),e.jsxs(i,{variant:"body",style:{color:"#666"},children:["Selected: ",l||"None"]})]})}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Loading State"}),e.jsx(i,{variant:"body",children:"Chips automatically show a spinner when isLoading is true. User interaction is disabled during loading."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{label:"Processing",isLoading:!0}),e.jsx(a,{label:"Uploading",isLoading:!0,loadingText:"Uploading file",variant:"outlined"}),e.jsx(a,{label:"Saving",isLoading:!0,size:"medium",type:"success"}),e.jsx(a,{label:"Loading",isLoading:!0,size:"large",type:"neutral"})]})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Error State"}),e.jsx(i,{variant:"body",children:"Chips display error styling and icon when isInvalid is true. Error message is announced to screen readers."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{label:"Failed",isInvalid:!0,errorMessage:"Operation failed"}),e.jsx(a,{label:"Invalid",isInvalid:!0,errorMessage:"Invalid input",variant:"outlined"}),e.jsx(a,{label:"Error",isInvalid:!0,errorMessage:"Network error",size:"medium"}),e.jsx(a,{label:"Rejected",isInvalid:!0,errorMessage:"Request rejected",size:"large"})]})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Disabled State"}),e.jsx(i,{variant:"body",children:"Disabled chips have reduced opacity and cannot be interacted with."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{label:"Disabled",disabled:!0}),e.jsx(a,{label:"Disabled",disabled:!0,variant:"outlined"}),e.jsx(a,{label:"Disabled",disabled:!0,leadingIcon:e.jsx(S,{})}),e.jsx(a,{label:"Disabled",disabled:!0,trailingIcon:e.jsx(n,{}),onTrailingIconClick:()=>{}})]})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Active/Selected State"}),e.jsx(i,{variant:"body",children:"Use isActive prop to show a chip is selected or in an active state."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{label:"Active",isActive:!0}),e.jsx(a,{label:"Active",isActive:!0,variant:"outlined"}),e.jsx(a,{label:"Active",isActive:!0,type:"success"}),e.jsx(a,{label:"Active",isActive:!0,type:"warning",variant:"outlined"})]})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Custom Render Slots"}),e.jsx(i,{variant:"body",children:"Use render props to fully customize icons and labels."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{label:"Custom Label",renderLabel:l=>e.jsx("strong",{style:{textTransform:"uppercase"},children:l})}),e.jsx(a,{label:"Custom Icon",renderLeadingIcon:()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z"})})}),e.jsx(a,{label:"Both Custom",renderLeadingIcon:()=>e.jsx("span",{children:"⭐"}),renderLabel:l=>e.jsx("em",{children:l})})]})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Polymorphic 'as' Prop"}),e.jsx(i,{variant:"body",children:"Render chips as different HTML elements using the 'as' prop."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{as:"button",label:"Button",onClick:()=>alert("Clicked!")}),e.jsx(a,{as:"span",label:"Span"})]}),e.jsx(i,{variant:"caption",children:"Note: When using 'as', ensure you pass appropriate props for that element type."})]})},C={render:()=>{const l=I.useRef(null),s=()=>{var r;(r=l.current)==null||r.focus()};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"forwardRef Support"}),e.jsx(i,{variant:"body",children:"Access the underlying DOM element using React refs."}),e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(a,{ref:l,label:"Focusable Chip",onClick:()=>{}}),e.jsx("button",{onClick:s,style:{padding:"8px 16px",cursor:"pointer"},children:"Focus Chip"})]})]})}},j={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Accessibility Features"}),e.jsx(i,{variant:"body",children:"Chips are fully accessible with ARIA attributes, keyboard navigation, and screen reader support."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"headingS",weight:"semibold",children:"Keyboard Navigation"}),e.jsx(i,{variant:"caption",children:"Tab to focus, Enter/Space to activate, Escape to blur"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Press Tab",onClick:()=>{}}),e.jsx(a,{label:"Then Enter",onClick:()=>{}}),e.jsx(a,{label:"Or Space",onClick:()=>{}})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"headingS",weight:"semibold",children:"ARIA Labels"}),e.jsx(i,{variant:"caption",children:"Custom labels for screen readers"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Delete","aria-label":"Delete item from list",trailingIcon:e.jsx(n,{}),onTrailingIconClick:()=>{}}),e.jsx(a,{label:"Filter","aria-label":"Filter results by category",onClick:()=>{}})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"headingS",weight:"semibold",children:"Loading & Error States"}),e.jsx(i,{variant:"caption",children:"States are announced to screen readers"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Processing",isLoading:!0,loadingText:"Processing your request"}),e.jsx(a,{label:"Failed",isInvalid:!0,errorMessage:"Upload failed, please try again"})]})]})]})]})},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Width Control Props"}),e.jsx(i,{variant:"body",children:"Control chip width for responsive design using width, maxWidth, and minWidth props."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"headingS",weight:"semibold",children:"Fixed Width"}),e.jsx(i,{variant:"caption",children:"Set specific widths for consistent sizing"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"100px",width:"100px"}),e.jsx(a,{label:"150px",width:"150px"}),e.jsx(a,{label:"200px",width:"200px"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"headingS",weight:"semibold",children:"Responsive Width"}),e.jsx(i,{variant:"caption",children:"Use min(), max(), or percentage for fluid layouts"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"50% width",width:"50%"}),e.jsx(a,{label:"min(90vw, 200px)",width:"min(90vw, 200px)"})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"headingS",weight:"semibold",children:"Max & Min Width"}),e.jsx(i,{variant:"caption",children:"Constrain chip sizing with boundaries"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Max 150px",maxWidth:"150px"}),e.jsx(a,{label:"Min 200px",minWidth:"200px"}),e.jsx(a,{label:"Min 100px, Max 300px",minWidth:"100px",maxWidth:"300px"})]})]})]})]})},T={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(i,{variant:"headingM",weight:"semibold",children:"Customization Options"}),e.jsx(i,{variant:"body",children:"Multiple className overrides and style props for fine-grained control."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{children:[e.jsx(i,{variant:"headingS",weight:"semibold",children:"Custom Styles"}),e.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Custom Style",style:{boxShadow:"0 4px 8px rgba(0,0,0,0.1)"}}),e.jsx(a,{label:"Custom Label",labelClassName:"custom-label",style:{fontWeight:"bold"}})]})]}),e.jsxs("div",{children:[e.jsx(i,{variant:"headingS",weight:"semibold",children:"Multiple Override Points"}),e.jsx("div",{style:{display:"flex",gap:"8px",marginTop:"8px",flexWrap:"wrap"},children:e.jsx(a,{label:"Overrides",className:"custom-chip",labelClassName:"custom-label",leadingIconClassName:"custom-icon",leadingIcon:e.jsx(S,{})})})]})]})]})};var W,M,D;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'small',
    variant: 'filled',
    type: 'default',
    disabled: false
  }
}`,...(D=(M=o.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var L,A,k;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Chip Sizes</Typography>
      <Typography variant="body">Chips are available in three sizes: small, medium, and large.</Typography>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <Chip label="Small" size="small" />
        <Chip label="Medium" size="medium" />
        <Chip label="Large" size="large" />
      </div>
    </div>
}`,...(k=(A=p.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var R,z,E;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Filled Variants</Typography>
      <Typography variant="body">Filled chips with solid backgrounds for different semantic types.</Typography>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Chip label="Default" variant="filled" type="default" />
        <Chip label="Success" variant="filled" type="success" />
        <Chip label="Warning" variant="filled" type="warning" />
        <Chip label="Error" variant="filled" type="error" />
        <Chip label="Neutral" variant="filled" type="neutral" />
      </div>
    </div>
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var F,N,P;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Outlined Variants</Typography>
      <Typography variant="body">Outlined chips with borders for a lighter visual weight.</Typography>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Chip label="Default" variant="outlined" type="default" />
        <Chip label="Success" variant="outlined" type="success" />
        <Chip label="Warning" variant="outlined" type="warning" />
        <Chip label="Error" variant="outlined" type="error" />
        <Chip label="Neutral" variant="outlined" type="neutral" />
      </div>
    </div>
}`,...(P=(N=c.parameters)==null?void 0:N.docs)==null?void 0:P.source}}};var O,U,V;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Chips with Icons</Typography>
      <Typography variant="body">Chips can have leading and/or trailing icons for enhanced visual communication.</Typography>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Chip label="Leading Icon" leadingIcon={<LeadingIconSample />} />
        <Chip label="Trailing Icon" trailingIcon={<CloseIcon />} />
        <Chip label="Both Icons" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
      </div>
    </div>
}`,...(V=(U=h.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var B,H,q;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [chips, setChips] = useState([{
      id: 1,
      label: 'React'
    }, {
      id: 2,
      label: 'TypeScript'
    }, {
      id: 3,
      label: 'Styled Components'
    }, {
      id: 4,
      label: 'Storybook'
    }]);
    const removeChip = (id: number) => {
      setChips(chips.filter(chip => chip.id !== id));
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Removable Chips</Typography>
        <Typography variant="body">Click the close icon to remove chips. Fully keyboard accessible (Tab + Enter/Space).</Typography>
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
          {chips.map(chip => <Chip key={chip.id} label={chip.label} trailingIcon={<CloseIcon />} onTrailingIconClick={() => removeChip(chip.id)} />)}
        </div>
      </div>;
  }
}`,...(q=(H=g.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var K,_,G;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Clickable Chips</Typography>
        <Typography variant="body">Chips can be clickable for selection or filtering. Use isActive prop to show selected state.</Typography>
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
          {['React', 'Vue', 'Angular', 'Svelte'].map(framework => <Chip key={framework} label={framework} variant={selected === framework ? 'filled' : 'outlined'} isActive={selected === framework} onClick={() => setSelected(framework)} />)}
        </div>
        <Typography variant="body" style={{
        color: '#666'
      }}>
          Selected: {selected || 'None'}
        </Typography>
      </div>;
  }
}`,...(G=(_=y.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var J,Q,X;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Loading State</Typography>
      <Typography variant="body">Chips automatically show a spinner when isLoading is true. User interaction is disabled during loading.</Typography>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Chip label="Processing" isLoading />
        <Chip label="Uploading" isLoading loadingText="Uploading file" variant="outlined" />
        <Chip label="Saving" isLoading size="medium" type="success" />
        <Chip label="Loading" isLoading size="large" type="neutral" />
      </div>
    </div>
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Error State</Typography>
      <Typography variant="body">Chips display error styling and icon when isInvalid is true. Error message is announced to screen readers.</Typography>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Chip label="Failed" isInvalid errorMessage="Operation failed" />
        <Chip label="Invalid" isInvalid errorMessage="Invalid input" variant="outlined" />
        <Chip label="Error" isInvalid errorMessage="Network error" size="medium" />
        <Chip label="Rejected" isInvalid errorMessage="Request rejected" size="large" />
      </div>
    </div>
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,ie;u.parameters={...u.parameters,docs:{...(ee=u.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Disabled State</Typography>
      <Typography variant="body">Disabled chips have reduced opacity and cannot be interacted with.</Typography>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Chip label="Disabled" disabled />
        <Chip label="Disabled" disabled variant="outlined" />
        <Chip label="Disabled" disabled leadingIcon={<LeadingIconSample />} />
        <Chip label="Disabled" disabled trailingIcon={<CloseIcon />} onTrailingIconClick={() => {}} />
      </div>
    </div>
}`,...(ie=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var le,re,se;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Active/Selected State</Typography>
      <Typography variant="body">Use isActive prop to show a chip is selected or in an active state.</Typography>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Chip label="Active" isActive />
        <Chip label="Active" isActive variant="outlined" />
        <Chip label="Active" isActive type="success" />
        <Chip label="Active" isActive type="warning" variant="outlined" />
      </div>
    </div>
}`,...(se=(re=v.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var te,ne,oe;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Custom Render Slots</Typography>
      <Typography variant="body">Use render props to fully customize icons and labels.</Typography>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Chip label="Custom Label" renderLabel={label => <strong style={{
        textTransform: 'uppercase'
      }}>{label}</strong>} />
        <Chip label="Custom Icon" renderLeadingIcon={() => <svg viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 2l2 6h6l-5 4 2 6-5-4-5 4 2-6-5-4h6z" />
            </svg>} />
        <Chip label="Both Custom" renderLeadingIcon={() => <span>⭐</span>} renderLabel={label => <em>{label}</em>} />
      </div>
    </div>
}`,...(oe=(ne=b.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var pe,de,ce;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Polymorphic 'as' Prop</Typography>
      <Typography variant="body">Render chips as different HTML elements using the 'as' prop.</Typography>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Chip as="button" label="Button" onClick={() => alert('Clicked!')} />
        <Chip as="span" label="Span" />
      </div>
      <Typography variant="caption">Note: When using 'as', ensure you pass appropriate props for that element type.</Typography>
    </div>
}`,...(ce=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var he,ge,ye;C.parameters={...C.parameters,docs:{...(he=C.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const chipRef = useRef<HTMLElement>(null);
    const focusChip = () => {
      chipRef.current?.focus();
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">forwardRef Support</Typography>
        <Typography variant="body">Access the underlying DOM element using React refs.</Typography>
        <div style={{
        display: 'flex',
        gap: '12px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          <Chip ref={chipRef} label="Focusable Chip" onClick={() => {}} />
          <button onClick={focusChip} style={{
          padding: '8px 16px',
          cursor: 'pointer'
        }}>
            Focus Chip
          </button>
        </div>
      </div>;
  }
}`,...(ye=(ge=C.parameters)==null?void 0:ge.docs)==null?void 0:ye.source}}};var xe,me,ue;j.parameters={...j.parameters,docs:{...(xe=j.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Accessibility Features</Typography>
      <Typography variant="body">Chips are fully accessible with ARIA attributes, keyboard navigation, and screen reader support.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div>
          <Typography variant="headingS" weight="semibold">Keyboard Navigation</Typography>
          <Typography variant="caption">Tab to focus, Enter/Space to activate, Escape to blur</Typography>
          <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '8px',
          flexWrap: 'wrap'
        }}>
            <Chip label="Press Tab" onClick={() => {}} />
            <Chip label="Then Enter" onClick={() => {}} />
            <Chip label="Or Space" onClick={() => {}} />
          </div>
        </div>
        
        <div>
          <Typography variant="headingS" weight="semibold">ARIA Labels</Typography>
          <Typography variant="caption">Custom labels for screen readers</Typography>
          <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '8px',
          flexWrap: 'wrap'
        }}>
            <Chip label="Delete" aria-label="Delete item from list" trailingIcon={<CloseIcon />} onTrailingIconClick={() => {}} />
            <Chip label="Filter" aria-label="Filter results by category" onClick={() => {}} />
          </div>
        </div>
        
        <div>
          <Typography variant="headingS" weight="semibold">Loading & Error States</Typography>
          <Typography variant="caption">States are announced to screen readers</Typography>
          <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '8px',
          flexWrap: 'wrap'
        }}>
            <Chip label="Processing" isLoading loadingText="Processing your request" />
            <Chip label="Failed" isInvalid errorMessage="Upload failed, please try again" />
          </div>
        </div>
      </div>
    </div>
}`,...(ue=(me=j.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var ve,be,fe;w.parameters={...w.parameters,docs:{...(ve=w.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Width Control Props</Typography>
      <Typography variant="body">Control chip width for responsive design using width, maxWidth, and minWidth props.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div>
          <Typography variant="headingS" weight="semibold">Fixed Width</Typography>
          <Typography variant="caption">Set specific widths for consistent sizing</Typography>
          <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '8px',
          flexWrap: 'wrap'
        }}>
            <Chip label="100px" width="100px" />
            <Chip label="150px" width="150px" />
            <Chip label="200px" width="200px" />
          </div>
        </div>
        
        <div>
          <Typography variant="headingS" weight="semibold">Responsive Width</Typography>
          <Typography variant="caption">Use min(), max(), or percentage for fluid layouts</Typography>
          <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '8px',
          flexWrap: 'wrap'
        }}>
            <Chip label="50% width" width="50%" />
            <Chip label="min(90vw, 200px)" width="min(90vw, 200px)" />
          </div>
        </div>
        
        <div>
          <Typography variant="headingS" weight="semibold">Max & Min Width</Typography>
          <Typography variant="caption">Constrain chip sizing with boundaries</Typography>
          <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '8px',
          flexWrap: 'wrap'
        }}>
            <Chip label="Max 150px" maxWidth="150px" />
            <Chip label="Min 200px" minWidth="200px" />
            <Chip label="Min 100px, Max 300px" minWidth="100px" maxWidth="300px" />
          </div>
        </div>
      </div>
    </div>
}`,...(fe=(be=w.parameters)==null?void 0:be.docs)==null?void 0:fe.source}}};var Ce,je,we;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Customization Options</Typography>
      <Typography variant="body">Multiple className overrides and style props for fine-grained control.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div>
          <Typography variant="headingS" weight="semibold">Custom Styles</Typography>
          <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '8px',
          flexWrap: 'wrap'
        }}>
            <Chip label="Custom Style" style={{
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }} />
            <Chip label="Custom Label" labelClassName="custom-label" style={{
            fontWeight: 'bold'
          }} />
          </div>
        </div>
        
        <div>
          <Typography variant="headingS" weight="semibold">Multiple Override Points</Typography>
          <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '8px',
          flexWrap: 'wrap'
        }}>
            <Chip label="Overrides" className="custom-chip" labelClassName="custom-label" leadingIconClassName="custom-icon" leadingIcon={<LeadingIconSample />} />
          </div>
        </div>
      </div>
    </div>
}`,...(we=(je=T.parameters)==null?void 0:je.docs)==null?void 0:we.source}}};const ke=["Playground","Sizes","FilledVariants","OutlinedVariants","WithIcons","Removable","Clickable","LoadingState","ErrorState","DisabledState","ActiveState","CustomSlots","PolymorphicAs","WithForwardRef","AccessibilityExample","WidthControl","CustomizationExample"];export{j as AccessibilityExample,v as ActiveState,y as Clickable,b as CustomSlots,T as CustomizationExample,u as DisabledState,m as ErrorState,d as FilledVariants,x as LoadingState,c as OutlinedVariants,o as Playground,f as PolymorphicAs,g as Removable,p as Sizes,w as WidthControl,C as WithForwardRef,h as WithIcons,ke as __namedExportsOrder,Ae as default};
