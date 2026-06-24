import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{R as a}from"./RadioButton-BNSL-Rly.js";import{r as g}from"./index-B0WjJBI_.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./_commonjsHelpers-CqkleIqs.js";const F={title:"Components/RadioButton",component:a,parameters:{layout:"centered",docs:{description:{component:`
# RadioButton Component

A fully accessible radio button component for the Lean IDS design system.

## Features

- **Two Sizes**: Default (16px) and Large (24px)
- **Multiple States**: Unchecked, Checked, Disabled
- **Optional Label**: Display text next to radio button
- **Trailing Icon**: Optional info icon
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes
- **Groups**: Works seamlessly in radio button groups

## Usage

\`\`\`tsx
import { RadioButton } from '@lean-ids/components';

<RadioButton
  label="Option 1"
  name="options"
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed next to the radio button",table:{type:{summary:"string"},category:"Content"}},size:{control:"radio",options:["default","large"],description:"Radio button size",table:{type:{summary:"default | large"},defaultValue:{summary:"default"},category:"Appearance"}},checked:{control:"boolean",description:"Whether the radio button is checked",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},disabled:{control:"boolean",description:"Whether the radio button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},showTrailingIcon:{control:"boolean",description:"Whether to show trailing expand icon",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}},name:{control:"text",description:"Name attribute for radio group",table:{type:{summary:"string"},category:"Behavior"}}}},i={args:{label:"Default Radio message",size:"default",checked:!1,disabled:!1,showTrailingIcon:!1}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(a,{label:"Default size (16px)",size:"default",name:"size-demo"}),e.jsx(a,{label:"Large size (24px)",size:"large",name:"size-demo"})]}),parameters:{docs:{description:{story:"Radio buttons are available in two sizes: default (16px) and large (24px)."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(a,{label:"Unselected",checked:!1,name:"state-demo-1"}),e.jsx(a,{label:"Selected",checked:!0,name:"state-demo-2"}),e.jsx(a,{label:"Disabled Unselected",checked:!1,disabled:!0,name:"state-demo-3"}),e.jsx(a,{label:"Disabled Selected",checked:!0,disabled:!0,name:"state-demo-4"})]}),parameters:{docs:{description:{story:"Radio buttons support multiple states: unselected, selected, disabled unselected, and disabled selected."}}}},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(a,{label:"Default with icon",showTrailingIcon:!0,name:"icon-demo-1"}),e.jsx(a,{label:"Large with icon",size:"large",showTrailingIcon:!0,name:"icon-demo-2"}),e.jsx(a,{label:"Selected with icon",checked:!0,showTrailingIcon:!0,name:"icon-demo-3"}),e.jsx(a,{label:"Disabled with icon",disabled:!0,showTrailingIcon:!0,name:"icon-demo-4"})]}),parameters:{docs:{description:{story:"Radio buttons can display an optional trailing expand_more icon."}}}},c={render:()=>{const[s,l]=g.useState("option1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Select an option:"}),e.jsx(a,{label:"Option 1",name:"radio-group",value:"option1",checked:s==="option1",onChange:o=>l(o.target.value)}),e.jsx(a,{label:"Option 2",name:"radio-group",value:"option2",checked:s==="option2",onChange:o=>l(o.target.value)}),e.jsx(a,{label:"Option 3",name:"radio-group",value:"option3",checked:s==="option3",onChange:o=>l(o.target.value)}),e.jsxs("p",{style:{fontSize:"14px",color:"#666",marginTop:"8px"},children:["Selected: ",s]})]})},parameters:{docs:{description:{story:"Radio buttons work together in groups where only one option can be selected at a time."}}}},p={render:()=>{const[s,l]=g.useState("credit-card"),[o,m]=g.useState("standard");return e.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"24px",width:"400px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 0"},children:"Payment Method"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{label:"Credit Card",name:"payment",value:"credit-card",checked:s==="credit-card",onChange:t=>l(t.target.value)}),e.jsx(a,{label:"PayPal",name:"payment",value:"paypal",checked:s==="paypal",onChange:t=>l(t.target.value)}),e.jsx(a,{label:"Bank Transfer",name:"payment",value:"bank-transfer",checked:s==="bank-transfer",onChange:t=>l(t.target.value)})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 0"},children:"Shipping Speed"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{label:"Standard (5-7 days)",name:"shipping",value:"standard",checked:o==="standard",onChange:t=>m(t.target.value)}),e.jsx(a,{label:"Express (2-3 days)",name:"shipping",value:"express",checked:o==="express",onChange:t=>m(t.target.value)}),e.jsx(a,{label:"Overnight",name:"shipping",value:"overnight",checked:o==="overnight",onChange:t=>m(t.target.value)})]})]})]})},parameters:{docs:{description:{story:"Example of radio buttons used in a form with multiple groups."}}}},u={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"24px",padding:"20px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Default Size"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Default Radio message",name:"default-1"}),e.jsx(a,{label:"Default Radio message",checked:!0,name:"default-2"}),e.jsx(a,{label:"Default Radio message",disabled:!0,name:"default-3"}),e.jsx(a,{label:"Default Radio message",checked:!0,disabled:!0,name:"default-4"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"16px"},children:"Large Size"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Default Radio message",size:"large",name:"large-1"}),e.jsx(a,{label:"Default Radio message",size:"large",checked:!0,name:"large-2"}),e.jsx(a,{label:"Default Radio message",size:"large",disabled:!0,name:"large-3"}),e.jsx(a,{label:"Default Radio message",size:"large",checked:!0,disabled:!0,name:"large-4"})]})]})]}),parameters:{docs:{description:{story:"All radio button variants showing both sizes and all states."}}}};var h,x,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Default Radio message',
    size: 'default',
    checked: false,
    disabled: false,
    showTrailingIcon: false
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,f,v;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <RadioButton label="Default size (16px)" size="default" name="size-demo" />
      <RadioButton label="Large size (24px)" size="large" name="size-demo" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons are available in two sizes: default (16px) and large (24px).'
      }
    }
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var S,R,k;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <RadioButton label="Unselected" checked={false} name="state-demo-1" />
      <RadioButton label="Selected" checked={true} name="state-demo-2" />
      <RadioButton label="Disabled Unselected" checked={false} disabled={true} name="state-demo-3" />
      <RadioButton label="Disabled Selected" checked={true} disabled={true} name="state-demo-4" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons support multiple states: unselected, selected, disabled unselected, and disabled selected.'
      }
    }
  }
}`,...(k=(R=d.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var D,j,z;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <RadioButton label="Default with icon" showTrailingIcon name="icon-demo-1" />
      <RadioButton label="Large with icon" size="large" showTrailingIcon name="icon-demo-2" />
      <RadioButton label="Selected with icon" checked showTrailingIcon name="icon-demo-3" />
      <RadioButton label="Disabled with icon" disabled showTrailingIcon name="icon-demo-4" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons can display an optional trailing expand_more icon.'
      }
    }
  }
}`,...(z=(j=r.parameters)==null?void 0:j.docs)==null?void 0:z.source}}};var B,w,C;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <h3 style={{
        margin: '0 0 8px 0'
      }}>Select an option:</h3>
        <RadioButton label="Option 1" name="radio-group" value="option1" checked={selected === 'option1'} onChange={e => setSelected(e.target.value)} />
        <RadioButton label="Option 2" name="radio-group" value="option2" checked={selected === 'option2'} onChange={e => setSelected(e.target.value)} />
        <RadioButton label="Option 3" name="radio-group" value="option3" checked={selected === 'option3'} onChange={e => setSelected(e.target.value)} />
        <p style={{
        fontSize: '14px',
        color: '#666',
        marginTop: '8px'
      }}>
          Selected: {selected}
        </p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons work together in groups where only one option can be selected at a time.'
      }
    }
  }
}`,...(C=(w=c.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var T,I,A;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [paymentMethod, setPaymentMethod] = useState('credit-card');
    const [shippingSpeed, setShippingSpeed] = useState('standard');
    return <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      width: '400px'
    }}>
        <div>
          <h3 style={{
          margin: '0 0 12px 0'
        }}>Payment Method</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <RadioButton label="Credit Card" name="payment" value="credit-card" checked={paymentMethod === 'credit-card'} onChange={e => setPaymentMethod(e.target.value)} />
            <RadioButton label="PayPal" name="payment" value="paypal" checked={paymentMethod === 'paypal'} onChange={e => setPaymentMethod(e.target.value)} />
            <RadioButton label="Bank Transfer" name="payment" value="bank-transfer" checked={paymentMethod === 'bank-transfer'} onChange={e => setPaymentMethod(e.target.value)} />
          </div>
        </div>
        
        <div>
          <h3 style={{
          margin: '0 0 12px 0'
        }}>Shipping Speed</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <RadioButton label="Standard (5-7 days)" name="shipping" value="standard" checked={shippingSpeed === 'standard'} onChange={e => setShippingSpeed(e.target.value)} />
            <RadioButton label="Express (2-3 days)" name="shipping" value="express" checked={shippingSpeed === 'express'} onChange={e => setShippingSpeed(e.target.value)} />
            <RadioButton label="Overnight" name="shipping" value="overnight" checked={shippingSpeed === 'overnight'} onChange={e => setShippingSpeed(e.target.value)} />
          </div>
        </div>
      </form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of radio buttons used in a form with multiple groups.'
      }
    }
  }
}`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var M,P,O;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
          <RadioButton label="Default Radio message" name="default-1" />
          <RadioButton label="Default Radio message" checked name="default-2" />
          <RadioButton label="Default Radio message" disabled name="default-3" />
          <RadioButton label="Default Radio message" checked disabled name="default-4" />
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
          <RadioButton label="Default Radio message" size="large" name="large-1" />
          <RadioButton label="Default Radio message" size="large" checked name="large-2" />
          <RadioButton label="Default Radio message" size="large" disabled name="large-3" />
          <RadioButton label="Default Radio message" size="large" checked disabled name="large-4" />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All radio button variants showing both sizes and all states.'
      }
    }
  }
}`,...(O=(P=u.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};const G=["Playground","Sizes","States","WithTrailingIcon","RadioGroup","FormExample","AllVariants"];export{u as AllVariants,p as FormExample,i as Playground,c as RadioGroup,n as Sizes,d as States,r as WithTrailingIcon,G as __namedExportsOrder,F as default};
