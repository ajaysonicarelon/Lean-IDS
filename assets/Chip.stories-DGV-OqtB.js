import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{C as l,a as i}from"./Chip-DQ4w4BrW.js";import{r as M}from"./index-B0WjJBI_.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./_commonjsHelpers-CqkleIqs.js";const n=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"8",cy:"8",r:"6",fill:"currentColor"})}),J={title:"Components/Chip",component:l,parameters:{layout:"centered",docs:{description:{component:`
# Chip Component

A compact element for displaying tags, categories, or selections.

## Features

- **Three Sizes**: Small, Medium, Large
- **Two Variants**: Filled, Outlined
- **Two Types**: Default, Removable
- **Optional Icons**: Leading and trailing icons
- **Interactive**: Clickable and removable options
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes

## Usage

\`\`\`tsx
import { Chip } from '@lean-ids/components';

<Chip
  label="React"
  variant="filled"
  size="medium"
  type="removable"
  onRemove={() => console.log('Removed')}
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Chip label text",table:{type:{summary:"string"},category:"Content"}},size:{control:"radio",options:["small","medium","large"],description:"Chip size",table:{type:{summary:"small | medium | large"},defaultValue:{summary:"small"},category:"Appearance"}},variant:{control:"radio",options:["filled","outlined"],description:"Visual variant",table:{type:{summary:"filled | outlined"},defaultValue:{summary:"filled"},category:"Appearance"}},type:{control:"radio",options:["default","success","warning","error","neutral"],description:"Color scheme type",table:{type:{summary:"default | success | warning | error | neutral"},defaultValue:{summary:"default"},category:"Appearance"}},disabled:{control:"boolean",description:"Whether the chip is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}}},t={args:{label:"Label",size:"small",variant:"filled",type:"default",disabled:!1}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(l,{label:"Small",size:"small"}),e.jsx(l,{label:"Medium",size:"medium"}),e.jsx(l,{label:"Large",size:"large"})]}),parameters:{docs:{description:{story:"Chips are available in three sizes: small, medium, and large."}}}},d={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(l,{label:"Default",variant:"filled",type:"default"}),e.jsx(l,{label:"Success",variant:"filled",type:"success"}),e.jsx(l,{label:"Warning",variant:"filled",type:"warning"}),e.jsx(l,{label:"Error",variant:"filled",type:"error"}),e.jsx(l,{label:"Neutral",variant:"filled",type:"neutral"})]})}),parameters:{docs:{description:{story:"Filled chips with different color types."}}}},c={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(l,{label:"Default",variant:"outlined",type:"default"}),e.jsx(l,{label:"Success",variant:"outlined",type:"success"}),e.jsx(l,{label:"Warning",variant:"outlined",type:"warning"}),e.jsx(l,{label:"Error",variant:"outlined",type:"error"}),e.jsx(l,{label:"Neutral",variant:"outlined",type:"neutral"})]})}),parameters:{docs:{description:{story:"Outlined chips with different color types."}}}},p={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:e.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center"},children:[e.jsx(l,{label:"Leading Icon",leadingIcon:e.jsx(n,{})}),e.jsx(l,{label:"Trailing Icon",trailingIcon:e.jsx(i,{})}),e.jsx(l,{label:"Both Icons",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})})]})}),parameters:{docs:{description:{story:"Chips can have leading and/or trailing icons."}}}},m={render:()=>{const[a,u]=M.useState([{id:1,label:"React"},{id:2,label:"TypeScript"},{id:3,label:"Styled Components"},{id:4,label:"Storybook"}]),r=s=>{u(a.filter(P=>P.id!==s))};return e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:a.map(s=>e.jsx(l,{label:s.label,trailingIcon:e.jsx(i,{}),onTrailingIconClick:()=>r(s.id)},s.id))})},parameters:{docs:{description:{story:"Interactive example showing removable chips."}}}},g={render:()=>{const[a,u]=M.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["React","Vue","Angular","Svelte"].map(r=>e.jsx(l,{label:r,variant:a===r?"filled":"outlined",onClick:()=>u(r)},r))}),e.jsxs("p",{style:{fontSize:"14px",color:"#666"},children:["Selected: ",a||"None"]})]})},parameters:{docs:{description:{story:"Chips can be clickable for selection or filtering."}}}},x={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:["small","medium","large"].map(a=>e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px",textTransform:"capitalize"},children:a}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("strong",{style:{width:"100%",fontSize:"12px"},children:"Filled:"}),e.jsx(l,{label:"Label",size:a,variant:"filled",type:"default",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})}),e.jsx(l,{label:"Label",size:a,variant:"filled",type:"success",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})}),e.jsx(l,{label:"Label",size:a,variant:"filled",type:"warning",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})}),e.jsx(l,{label:"Label",size:a,variant:"filled",type:"error",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})}),e.jsx(l,{label:"Label",size:a,variant:"filled",type:"neutral",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})})]}),e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx("strong",{style:{width:"100%",fontSize:"12px"},children:"Outlined:"}),e.jsx(l,{label:"Label",size:a,variant:"outlined",type:"default",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})}),e.jsx(l,{label:"Label",size:a,variant:"outlined",type:"success",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})}),e.jsx(l,{label:"Label",size:a,variant:"outlined",type:"warning",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})}),e.jsx(l,{label:"Label",size:a,variant:"outlined",type:"error",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})}),e.jsx(l,{label:"Label",size:a,variant:"outlined",type:"neutral",leadingIcon:e.jsx(n,{}),trailingIcon:e.jsx(i,{})})]})]})]},a))}),parameters:{docs:{description:{story:"Complete showcase of all chip variants, sizes, and types."}}}};var y,f,b;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    size: 'small',
    variant: 'filled',
    type: 'default',
    disabled: false
  }
}`,...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var v,h,I;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
      <Chip label="Large" size="large" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Chips are available in three sizes: small, medium, and large.'
      }
    }
  }
}`,...(I=(h=o.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var C,j,S;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
        <Chip label="Default" variant="filled" type="default" />
        <Chip label="Success" variant="filled" type="success" />
        <Chip label="Warning" variant="filled" type="warning" />
        <Chip label="Error" variant="filled" type="error" />
        <Chip label="Neutral" variant="filled" type="neutral" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Filled chips with different color types.'
      }
    }
  }
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var L,w,z;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
        <Chip label="Default" variant="outlined" type="default" />
        <Chip label="Success" variant="outlined" type="success" />
        <Chip label="Warning" variant="outlined" type="warning" />
        <Chip label="Error" variant="outlined" type="error" />
        <Chip label="Neutral" variant="outlined" type="neutral" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Outlined chips with different color types.'
      }
    }
  }
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var D,k,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      gap: '12px',
      alignItems: 'center'
    }}>
        <Chip label="Leading Icon" leadingIcon={<LeadingIconSample />} />
        <Chip label="Trailing Icon" trailingIcon={<CloseIcon />} />
        <Chip label="Both Icons" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Chips can have leading and/or trailing icons.'
      }
    }
  }
}`,...(W=(k=p.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var A,V,T;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        {chips.map(chip => <Chip key={chip.id} label={chip.label} trailingIcon={<CloseIcon />} onTrailingIconClick={() => removeChip(chip.id)} />)}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example showing removable chips.'
      }
    }
  }
}`,...(T=(V=m.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var R,F,O;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState<string | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div style={{
        display: 'flex',
        gap: '8px',
        flexWrap: 'wrap'
      }}>
          {['React', 'Vue', 'Angular', 'Svelte'].map(framework => <Chip key={framework} label={framework} variant={selected === framework ? 'filled' : 'outlined'} onClick={() => setSelected(framework)} />)}
        </div>
        <p style={{
        fontSize: '14px',
        color: '#666'
      }}>
          Selected: {selected || 'None'}
        </p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Chips can be clickable for selection or filtering.'
      }
    }
  }
}`,...(O=(F=g.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var E,N,B;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px'
  }}>
      {(['small', 'medium', 'large'] as const).map(size => <div key={size}>
          <h4 style={{
        marginBottom: '12px',
        textTransform: 'capitalize'
      }}>{size}</h4>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
            <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
              <strong style={{
            width: '100%',
            fontSize: '12px'
          }}>Filled:</strong>
              <Chip label="Label" size={size} variant="filled" type="default" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="filled" type="success" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="filled" type="warning" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="filled" type="error" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="filled" type="neutral" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
            </div>
            <div style={{
          display: 'flex',
          gap: '8px',
          flexWrap: 'wrap'
        }}>
              <strong style={{
            width: '100%',
            fontSize: '12px'
          }}>Outlined:</strong>
              <Chip label="Label" size={size} variant="outlined" type="default" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="outlined" type="success" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="outlined" type="warning" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="outlined" type="error" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
              <Chip label="Label" size={size} variant="outlined" type="neutral" leadingIcon={<LeadingIconSample />} trailingIcon={<CloseIcon />} />
            </div>
          </div>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all chip variants, sizes, and types.'
      }
    }
  }
}`,...(B=(N=x.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const K=["Playground","Sizes","FilledVariants","OutlinedVariants","WithIcons","Removable","Clickable","AllVariants"];export{x as AllVariants,g as Clickable,d as FilledVariants,c as OutlinedVariants,t as Playground,m as Removable,o as Sizes,p as WithIcons,K as __namedExportsOrder,J as default};
