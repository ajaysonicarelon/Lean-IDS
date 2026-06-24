import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{B as t}from"./Button-DO4HjNMh.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";const a=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M13.5 4.5L6 12L2.5 8.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),n=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),f=()=>e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M3 8H13M13 8L9 4M13 8L9 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),de={title:"Components/Button",component:t,parameters:{layout:"centered",docs:{description:{component:`
# Button Component

An interactive control that triggers actions with clear visual feedback.

## Features

- **Five Sizes**: XSmall, Small, Medium, Large, XLarge
- **Three Variants**: Primary (filled), Secondary (outlined), Tertiary (text)
- **Four Button Types**: Default, Safe, Warning, Alert
- **Optional Icons**: Leading and trailing icons
- **Multiple States**: Active, Hover, Pressed, Focused, Disabled
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes

## Usage

\`\`\`tsx
import { Button } from '@lean-ids/components';

<Button
  variant="primary"
  buttonType="default"
  size="medium"
  onClick={() => console.log('Clicked')}
>
  Click me
</Button>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{children:{control:"text",description:"Button label text",table:{type:{summary:"ReactNode"},category:"Content"}},size:{control:"radio",options:["xsmall","small","medium","large","xlarge"],description:"Button size",table:{type:{summary:"xsmall | small | medium | large | xlarge"},defaultValue:{summary:"medium"},category:"Appearance"}},variant:{control:"radio",options:["primary","secondary","tertiary"],description:"Visual variant",table:{type:{summary:"primary | secondary | tertiary"},defaultValue:{summary:"primary"},category:"Appearance"}},buttonType:{control:"radio",options:["default","safe","warning","alert"],description:"Button type (semantic meaning)",table:{type:{summary:"default | safe | warning | alert"},defaultValue:{summary:"default"},category:"Appearance"}},disabled:{control:"boolean",description:"Whether the button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},fullWidth:{control:"boolean",description:"Whether the button takes full width",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Layout"}}}},i={args:{children:"Button",size:"medium",variant:"primary",disabled:!1}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{size:"xsmall",children:"Extra Small"}),e.jsx(t,{size:"small",children:"Small"}),e.jsx(t,{size:"medium",children:"Medium"}),e.jsx(t,{size:"large",children:"Large"}),e.jsx(t,{size:"xlarge",children:"Extra Large"})]}),parameters:{docs:{description:{story:"Buttons are available in five sizes: xsmall, small, medium, large, and xlarge."}}}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",children:"Primary"}),e.jsx(t,{variant:"primary",disabled:!0,children:"Disabled"})]}),parameters:{docs:{description:{story:"Primary buttons for main actions."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"secondary",disabled:!0,children:"Disabled"})]}),parameters:{docs:{description:{story:"Secondary buttons (outlined) for secondary actions."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"tertiary",children:"Tertiary"}),e.jsx(t,{variant:"tertiary",disabled:!0,children:"Disabled"})]}),parameters:{docs:{description:{story:"Tertiary buttons (text-only) for tertiary actions."}}}},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",buttonType:"safe",children:"Safe Primary"}),e.jsx(t,{variant:"secondary",buttonType:"safe",children:"Safe Secondary"}),e.jsx(t,{variant:"primary",buttonType:"safe",disabled:!0,children:"Disabled"})]}),parameters:{docs:{description:{story:"Safe/Success buttons for positive actions and confirmations."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",buttonType:"warning",children:"Warning Primary"}),e.jsx(t,{variant:"secondary",buttonType:"warning",children:"Warning Secondary"}),e.jsx(t,{variant:"primary",buttonType:"warning",disabled:!0,children:"Disabled"})]}),parameters:{docs:{description:{story:"Warning buttons for cautionary actions."}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"primary",buttonType:"alert",children:"Alert Primary"}),e.jsx(t,{variant:"secondary",buttonType:"alert",children:"Alert Secondary"}),e.jsx(t,{variant:"primary",buttonType:"alert",disabled:!0,children:"Disabled"})]}),parameters:{docs:{description:{story:"Alert/Error buttons for destructive or critical actions."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{leadingIcon:e.jsx(a,{}),children:"Leading Icon"}),e.jsx(t,{trailingIcon:e.jsx(f,{}),children:"Trailing Icon"}),e.jsx(t,{leadingIcon:e.jsx(a,{}),trailingIcon:e.jsx(n,{}),children:"Both Icons"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{variant:"secondary",leadingIcon:e.jsx(a,{}),children:"Secondary with Icon"}),e.jsx(t,{variant:"tertiary",trailingIcon:e.jsx(f,{}),children:"Tertiary with Icon"})]})]}),parameters:{docs:{description:{story:"Buttons can have leading and/or trailing icons."}}}},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center",flexWrap:"wrap"},children:[e.jsx(t,{leadingIcon:e.jsx(a,{}),showLabel:!1,"aria-label":"Check",children:"Icon"}),e.jsx(t,{leadingIcon:e.jsx(n,{}),showLabel:!1,"aria-label":"Close",variant:"secondary",children:"Icon"}),e.jsx(t,{leadingIcon:e.jsx(f,{}),showLabel:!1,"aria-label":"Next",size:"large",children:"Icon"})]}),parameters:{docs:{description:{story:"Icon-only buttons without label text. Always provide aria-label for accessibility."}}}},m={render:()=>e.jsxs("div",{style:{width:"400px",display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{fullWidth:!0,children:"Full Width Primary"}),e.jsx(t,{fullWidth:!0,variant:"secondary",children:"Full Width Secondary"}),e.jsx(t,{fullWidth:!0,variant:"tertiary",children:"Full Width Tertiary"})]}),parameters:{docs:{description:{story:"Buttons can take the full width of their container."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Horizontal Group"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(t,{children:"Save"}),e.jsx(t,{variant:"secondary",children:"Cancel"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"12px"},children:"Vertical Group"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",width:"200px"},children:[e.jsx(t,{fullWidth:!0,children:"Primary Action"}),e.jsx(t,{fullWidth:!0,variant:"secondary",children:"Secondary Action"}),e.jsx(t,{fullWidth:!0,variant:"tertiary",children:"Tertiary Action"})]})]})]}),parameters:{docs:{description:{story:"Examples of button groups in horizontal and vertical layouts."}}}},h={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px",padding:"20px"},children:["xsmall","small","medium","large","xlarge"].map(r=>e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"16px",textTransform:"capitalize"},children:r}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx("strong",{style:{width:"100%",fontSize:"12px"},children:"Primary Default:"}),e.jsx(t,{size:r,leadingIcon:e.jsx(a,{}),children:"Button"}),e.jsx(t,{size:r,leadingIcon:e.jsx(a,{}),trailingIcon:e.jsx(n,{}),children:"Button"}),e.jsx(t,{size:r,disabled:!0,leadingIcon:e.jsx(a,{}),children:"Disabled"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx("strong",{style:{width:"100%",fontSize:"12px"},children:"Primary Safe:"}),e.jsx(t,{size:r,buttonType:"safe",leadingIcon:e.jsx(a,{}),children:"Safe"}),e.jsx(t,{size:r,buttonType:"safe",disabled:!0,leadingIcon:e.jsx(a,{}),children:"Disabled"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx("strong",{style:{width:"100%",fontSize:"12px"},children:"Primary Warning:"}),e.jsx(t,{size:r,buttonType:"warning",leadingIcon:e.jsx(a,{}),children:"Warning"}),e.jsx(t,{size:r,buttonType:"warning",disabled:!0,leadingIcon:e.jsx(a,{}),children:"Disabled"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx("strong",{style:{width:"100%",fontSize:"12px"},children:"Primary Alert:"}),e.jsx(t,{size:r,buttonType:"alert",leadingIcon:e.jsx(n,{}),children:"Alert"}),e.jsx(t,{size:r,buttonType:"alert",disabled:!0,leadingIcon:e.jsx(n,{}),children:"Disabled"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx("strong",{style:{width:"100%",fontSize:"12px"},children:"Secondary:"}),e.jsx(t,{size:r,variant:"secondary",leadingIcon:e.jsx(a,{}),children:"Button"}),e.jsx(t,{size:r,variant:"secondary",disabled:!0,leadingIcon:e.jsx(a,{}),children:"Disabled"})]}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx("strong",{style:{width:"100%",fontSize:"12px"},children:"Tertiary:"}),e.jsx(t,{size:r,variant:"tertiary",children:"Tertiary Button"}),e.jsx(t,{size:r,variant:"tertiary",disabled:!0,children:"Disabled"})]})]})]},r))}),parameters:{docs:{description:{story:"Complete showcase of all button variants, sizes, types, and states."}}}};var v,b,B;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    size: 'medium',
    variant: 'primary',
    disabled: false
  }
}`,...(B=(b=i.parameters)==null?void 0:b.docs)==null?void 0:B.source}}};var I,j,w;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button size="xsmall">Extra Small</Button>
      <Button size="small">Small</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
      <Button size="xlarge">Extra Large</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons are available in five sizes: xsmall, small, medium, large, and xlarge.'
      }
    }
  }
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var S,W,T;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Primary</Button>
      <Button variant="primary" disabled>Disabled</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Primary buttons for main actions.'
      }
    }
  }
}`,...(T=(W=o.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var z,D,A;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary" disabled>Disabled</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Secondary buttons (outlined) for secondary actions.'
      }
    }
  }
}`,...(A=(D=l.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var C,k,P;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button variant="tertiary">Tertiary</Button>
      <Button variant="tertiary" disabled>Disabled</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Tertiary buttons (text-only) for tertiary actions.'
      }
    }
  }
}`,...(P=(k=d.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var L,V,F;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" buttonType="safe">Safe Primary</Button>
      <Button variant="secondary" buttonType="safe">Safe Secondary</Button>
      <Button variant="primary" buttonType="safe" disabled>Disabled</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Safe/Success buttons for positive actions and confirmations.'
      }
    }
  }
}`,...(F=(V=c.parameters)==null?void 0:V.docs)==null?void 0:F.source}}};var E,M,G;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" buttonType="warning">Warning Primary</Button>
      <Button variant="secondary" buttonType="warning">Warning Secondary</Button>
      <Button variant="primary" buttonType="warning" disabled>Disabled</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Warning buttons for cautionary actions.'
      }
    }
  }
}`,...(G=(M=p.parameters)==null?void 0:M.docs)==null?void 0:G.source}}};var R,H,O;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button variant="primary" buttonType="alert">Alert Primary</Button>
      <Button variant="secondary" buttonType="alert">Alert Secondary</Button>
      <Button variant="primary" buttonType="alert" disabled>Disabled</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Alert/Error buttons for destructive or critical actions.'
      }
    }
  }
}`,...(O=(H=u.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};var N,X,_;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Button leadingIcon={<CheckIcon />}>Leading Icon</Button>
        <Button trailingIcon={<ArrowRightIcon />}>Trailing Icon</Button>
        <Button leadingIcon={<CheckIcon />} trailingIcon={<CloseIcon />}>Both Icons</Button>
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center',
      flexWrap: 'wrap'
    }}>
        <Button variant="secondary" leadingIcon={<CheckIcon />}>Secondary with Icon</Button>
        <Button variant="tertiary" trailingIcon={<ArrowRightIcon />}>Tertiary with Icon</Button>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons can have leading and/or trailing icons.'
      }
    }
  }
}`,...(_=(X=y.parameters)==null?void 0:X.docs)==null?void 0:_.source}}};var U,q,J;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    flexWrap: 'wrap'
  }}>
      <Button leadingIcon={<CheckIcon />} showLabel={false} aria-label="Check">Icon</Button>
      <Button leadingIcon={<CloseIcon />} showLabel={false} aria-label="Close" variant="secondary">Icon</Button>
      <Button leadingIcon={<ArrowRightIcon />} showLabel={false} aria-label="Next" size="large">Icon</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Icon-only buttons without label text. Always provide aria-label for accessibility.'
      }
    }
  }
}`,...(J=(q=x.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,Y;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Button fullWidth>Full Width Primary</Button>
      <Button fullWidth variant="secondary">Full Width Secondary</Button>
      <Button fullWidth variant="tertiary">Full Width Tertiary</Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Buttons can take the full width of their container.'
      }
    }
  }
}`,...(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Horizontal Group</h4>
        <div style={{
        display: 'flex',
        gap: '12px'
      }}>
          <Button>Save</Button>
          <Button variant="secondary">Cancel</Button>
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '12px'
      }}>Vertical Group</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        width: '200px'
      }}>
          <Button fullWidth>Primary Action</Button>
          <Button fullWidth variant="secondary">Secondary Action</Button>
          <Button fullWidth variant="tertiary">Tertiary Action</Button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Examples of button groups in horizontal and vertical layouts.'
      }
    }
  }
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,ae;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
    padding: '20px'
  }}>
      {(['xsmall', 'small', 'medium', 'large', 'xlarge'] as const).map(size => <div key={size}>
          <h4 style={{
        marginBottom: '16px',
        textTransform: 'capitalize'
      }}>{size}</h4>
          <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
            <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
              <strong style={{
            width: '100%',
            fontSize: '12px'
          }}>Primary Default:</strong>
              <Button size={size} leadingIcon={<CheckIcon />}>Button</Button>
              <Button size={size} leadingIcon={<CheckIcon />} trailingIcon={<CloseIcon />}>Button</Button>
              <Button size={size} disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
              <strong style={{
            width: '100%',
            fontSize: '12px'
          }}>Primary Safe:</strong>
              <Button size={size} buttonType="safe" leadingIcon={<CheckIcon />}>Safe</Button>
              <Button size={size} buttonType="safe" disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
              <strong style={{
            width: '100%',
            fontSize: '12px'
          }}>Primary Warning:</strong>
              <Button size={size} buttonType="warning" leadingIcon={<CheckIcon />}>Warning</Button>
              <Button size={size} buttonType="warning" disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
              <strong style={{
            width: '100%',
            fontSize: '12px'
          }}>Primary Alert:</strong>
              <Button size={size} buttonType="alert" leadingIcon={<CloseIcon />}>Alert</Button>
              <Button size={size} buttonType="alert" disabled leadingIcon={<CloseIcon />}>Disabled</Button>
            </div>
            <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
              <strong style={{
            width: '100%',
            fontSize: '12px'
          }}>Secondary:</strong>
              <Button size={size} variant="secondary" leadingIcon={<CheckIcon />}>Button</Button>
              <Button size={size} variant="secondary" disabled leadingIcon={<CheckIcon />}>Disabled</Button>
            </div>
            <div style={{
          display: 'flex',
          gap: '12px',
          flexWrap: 'wrap',
          alignItems: 'center'
        }}>
              <strong style={{
            width: '100%',
            fontSize: '12px'
          }}>Tertiary:</strong>
              <Button size={size} variant="tertiary">Tertiary Button</Button>
              <Button size={size} variant="tertiary" disabled>Disabled</Button>
            </div>
          </div>
        </div>)}
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all button variants, sizes, types, and states.'
      }
    }
  }
}`,...(ae=(re=h.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const ce=["Playground","Sizes","PrimaryVariant","SecondaryVariant","TertiaryVariant","SafeType","WarningType","AlertType","WithIcons","IconOnly","FullWidth","ButtonGroups","AllVariants"];export{u as AlertType,h as AllVariants,g as ButtonGroups,m as FullWidth,x as IconOnly,i as Playground,o as PrimaryVariant,c as SafeType,l as SecondaryVariant,s as Sizes,d as TertiaryVariant,p as WarningType,y as WithIcons,ce as __namedExportsOrder,de as default};
