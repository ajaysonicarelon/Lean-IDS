import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{C as a}from"./Checkbox-BdmLAclb.js";import{r as F}from"./index-B0WjJBI_.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./_commonjsHelpers-CqkleIqs.js";const R={title:"Components/Checkbox",component:a,parameters:{layout:"centered",docs:{description:{component:`
# Checkbox Component

A fully accessible checkbox component for the Lean IDS design system.

## Features

- **Two Sizes**: Default (16px) and Large (24px)
- **Multiple States**: Unchecked, Checked, Disabled
- **Optional Label**: Display text next to checkbox
- **Trailing Icon**: Optional info icon
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes

## Usage

\`\`\`tsx
import { Checkbox } from '@lean-ids/components';

<Checkbox
  label="Accept terms and conditions"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed next to the checkbox",table:{type:{summary:"string"},category:"Content"}},size:{control:"radio",options:["default","large"],description:"Checkbox size",table:{type:{summary:"default | large"},defaultValue:{summary:"default"},category:"Appearance"}},checked:{control:"boolean",description:"Whether the checkbox is checked",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},disabled:{control:"boolean",description:"Whether the checkbox is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},showTrailingIcon:{control:"boolean",description:"Whether to show trailing info icon",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}}}},c={args:{label:"Default Checkbox message",size:"default",checked:!1,disabled:!1,showTrailingIcon:!1}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(a,{label:"Default size (16px)",size:"default"}),e.jsx(a,{label:"Large size (24px)",size:"large"})]}),parameters:{docs:{description:{story:"Checkboxes are available in two sizes: default (16px) and large (24px)."}}}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(a,{label:"Unchecked",checked:!1}),e.jsx(a,{label:"Checked",checked:!0}),e.jsx(a,{label:"Disabled Unchecked",checked:!1,disabled:!0}),e.jsx(a,{label:"Disabled Checked",checked:!0,disabled:!0})]}),parameters:{docs:{description:{story:"Checkboxes support multiple states: unchecked, checked, disabled unchecked, and disabled checked."}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(a,{label:"Default with icon",showTrailingIcon:!0}),e.jsx(a,{label:"Large with icon",size:"large",showTrailingIcon:!0}),e.jsx(a,{label:"Checked with icon",checked:!0,showTrailingIcon:!0}),e.jsx(a,{label:"Disabled with icon",disabled:!0,showTrailingIcon:!0})]}),parameters:{docs:{description:{story:"Checkboxes can display an optional trailing info icon."}}}},d={render:()=>{const[s,l]=F.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Toggle me",checked:s,onChange:t=>l(t.target.checked)}),e.jsxs("p",{style:{fontSize:"14px",color:"#666"},children:["Status: ",s?"Checked":"Unchecked"]})]})},parameters:{docs:{description:{story:"Interactive checkbox with state management."}}}},n={render:()=>{const[s,l]=F.useState({terms:!1,newsletter:!1,updates:!1});return e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Sign Up Preferences"}),e.jsx(a,{label:"I agree to the terms and conditions",checked:s.terms,onChange:t=>l({...s,terms:t.target.checked}),showTrailingIcon:!0}),e.jsx(a,{label:"Subscribe to newsletter",checked:s.newsletter,onChange:t=>l({...s,newsletter:t.target.checked})}),e.jsx(a,{label:"Receive product updates",checked:s.updates,onChange:t=>l({...s,updates:t.target.checked})})]})},parameters:{docs:{description:{story:"Example of checkboxes used in a form with multiple options."}}}},h={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Default Size"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Default Checkbox message"}),e.jsx(a,{label:"Default Checkbox message",checked:!0}),e.jsx(a,{label:"Default Checkbox message",disabled:!0}),e.jsx(a,{label:"Default Checkbox message",checked:!0,disabled:!0})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Large Size"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Default Checkbox message",size:"large"}),e.jsx(a,{label:"Default Checkbox message",size:"large",checked:!0}),e.jsx(a,{label:"Default Checkbox message",size:"large",disabled:!0}),e.jsx(a,{label:"Default Checkbox message",size:"large",checked:!0,disabled:!0})]})]})]}),parameters:{docs:{description:{story:"All checkbox variants showing both sizes and all states."}}}};var p,x,m;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Default Checkbox message',
    size: 'default',
    checked: false,
    disabled: false,
    showTrailingIcon: false
  }
}`,...(m=(x=c.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var b,u,g;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Checkbox label="Default size (16px)" size="default" />
      <Checkbox label="Large size (24px)" size="large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes are available in two sizes: default (16px) and large (24px).'
      }
    }
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var k,f,y;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Checkbox label="Unchecked" checked={false} />
      <Checkbox label="Checked" checked={true} />
      <Checkbox label="Disabled Unchecked" checked={false} disabled={true} />
      <Checkbox label="Disabled Checked" checked={true} disabled={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes support multiple states: unchecked, checked, disabled unchecked, and disabled checked.'
      }
    }
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,D,w;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Checkbox label="Default with icon" showTrailingIcon />
      <Checkbox label="Large with icon" size="large" showTrailingIcon />
      <Checkbox label="Checked with icon" checked showTrailingIcon />
      <Checkbox label="Disabled with icon" disabled showTrailingIcon />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes can display an optional trailing info icon.'
      }
    }
  }
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var j,v,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Checkbox label="Toggle me" checked={checked} onChange={e => setChecked(e.target.checked)} />
        <p style={{
        fontSize: '14px',
        color: '#666'
      }}>
          Status: {checked ? 'Checked' : 'Unchecked'}
        </p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive checkbox with state management.'
      }
    }
  }
}`,...(z=(v=d.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var S,I,T;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      updates: false
    });
    return <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px'
    }}>
        <h3 style={{
        margin: '0 0 8px 0'
      }}>Sign Up Preferences</h3>
        <Checkbox label="I agree to the terms and conditions" checked={formData.terms} onChange={e => setFormData({
        ...formData,
        terms: e.target.checked
      })} showTrailingIcon />
        <Checkbox label="Subscribe to newsletter" checked={formData.newsletter} onChange={e => setFormData({
        ...formData,
        newsletter: e.target.checked
      })} />
        <Checkbox label="Receive product updates" checked={formData.updates} onChange={e => setFormData({
        ...formData,
        updates: e.target.checked
      })} />
      </form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of checkboxes used in a form with multiple options.'
      }
    }
  }
}`,...(T=(I=n.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var A,L,U;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
    padding: '20px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '16px'
      }}>Default Size</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Checkbox label="Default Checkbox message" />
          <Checkbox label="Default Checkbox message" checked />
          <Checkbox label="Default Checkbox message" disabled />
          <Checkbox label="Default Checkbox message" checked disabled />
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '16px'
      }}>Large Size</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Checkbox label="Default Checkbox message" size="large" />
          <Checkbox label="Default Checkbox message" size="large" checked />
          <Checkbox label="Default Checkbox message" size="large" disabled />
          <Checkbox label="Default Checkbox message" size="large" checked disabled />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All checkbox variants showing both sizes and all states.'
      }
    }
  }
}`,...(U=(L=h.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};const O=["Playground","Sizes","States","WithTrailingIcon","Interactive","FormExample","AllVariants"];export{h as AllVariants,n as FormExample,d as Interactive,c as Playground,r as Sizes,o as States,i as WithTrailingIcon,O as __namedExportsOrder,R as default};
