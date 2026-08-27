import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{B as a}from"./Badge-08EIA_9P.js";import{fn as t}from"./index-CH2Su9EI.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-CuwBLqEg.js";import"./WarningAmberOutlined-BaSDCFAD.js";import"./createSvgIcon-B7ekv6yR.js";import"./Close-Bujf63ZX.js";const Ve={title:"Components/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:`
# Badge Component

A compact element for labels or status indicators that combines text and iconography for clear communication.

## Purpose

The Badge is designed to display status indicators, category labels, notification counts, tags, and filters. It provides visual feedback and categorization in a compact, scannable format.

## Features

- **5 Types**: Info, Success, Warning, Error, Neutral
- **3 Styles**: Default (filled), Subdued (light background), Outlined (border only)
- **Customizable Icons**: Optional leading and trailing icons
- **Compact Design**: Small footprint with clear typography
- **Semantic Colors**: Color-coded for different message types

## Usage

\`\`\`tsx
import { Badge } from '@lean-ids/components';

<Badge label="Active" type="success" styleVariant="default" />

<Badge 
  label="New" 
  type="info" 
  styleVariant="subdued"
  showLeadingIcon={true}
/>

<Badge 
  label="Removable" 
  type="neutral" 
  styleVariant="outlined"
  showTrailingIcon={true}
/>
\`\`\`

## When to Use

✅ **Use Badge when:**
- Displaying status indicators (active, pending, completed)
- Showing category labels or tags
- Indicating notification counts
- Creating filter chips
- Highlighting important attributes

## When NOT to Use

❌ **Don't use Badge when:**
- You need interactive elements (use Chip instead)
- Displaying long text (badges are for short labels)
- You need a button-like action (use Button instead)
- The information is critical and needs more prominence

## Accessibility Features

- **Semantic HTML**: Uses appropriate HTML elements
- **Color Contrast**: Meets WCAG 2.1 AA standards
- **Clear Typography**: Readable font size and weight
- **Icon Support**: Icons enhance visual communication
        `}}},tags:["autodocs"],args:{onClick:t(),onRemove:t(),onMount:t(),onUnmount:t(),onFocus:t(),onBlur:t()},argTypes:{label:{control:"text",description:"The text content of the badge"},type:{control:"select",options:["info","success","warning","error","neutral"],description:"The semantic type of the badge"},styleVariant:{control:"select",options:["default","subdued","outlined"],description:"The visual style of the badge"},showLeadingIcon:{control:"boolean",description:"Whether to show the leading icon"},showTrailingIcon:{control:"boolean",description:"Whether to show the trailing icon"}}},n={args:{label:"Label",type:"info",styleVariant:"default",showLeadingIcon:!1,showTrailingIcon:!1}},s={args:{label:"Label",type:"info",styleVariant:"default",showLeadingIcon:!0,showTrailingIcon:!1}},l={args:{label:"Label",type:"info",styleVariant:"default",showLeadingIcon:!1,showTrailingIcon:!0}},r={args:{label:"Label",type:"info",styleVariant:"default",showLeadingIcon:!0,showTrailingIcon:!0}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",styleVariant:"default",showLeadingIcon:!0})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",styleVariant:"subdued",showLeadingIcon:!0})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",styleVariant:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",styleVariant:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",styleVariant:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",styleVariant:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",styleVariant:"outlined",showLeadingIcon:!0})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Default",type:"info",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Subdued",type:"info",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Outlined",type:"info",styleVariant:"outlined",showLeadingIcon:!0})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Default",type:"success",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Subdued",type:"success",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Outlined",type:"success",styleVariant:"outlined",showLeadingIcon:!0})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Default",type:"warning",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Subdued",type:"warning",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Outlined",type:"warning",styleVariant:"outlined",showLeadingIcon:!0})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Default",type:"error",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Subdued",type:"error",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Outlined",type:"error",styleVariant:"outlined",showLeadingIcon:!0})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Default",type:"neutral",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Subdued",type:"neutral",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Outlined",type:"neutral",styleVariant:"outlined",showLeadingIcon:!0})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Active",type:"success",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Pending",type:"warning",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Inactive",type:"neutral",styleVariant:"outlined"}),e.jsx(a,{label:"Failed",type:"error",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"New",type:"info",styleVariant:"subdued",showLeadingIcon:!0})]})},f={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"React",type:"info",styleVariant:"subdued"}),e.jsx(a,{label:"TypeScript",type:"info",styleVariant:"subdued"}),e.jsx(a,{label:"Design System",type:"neutral",styleVariant:"subdued"}),e.jsx(a,{label:"Component",type:"success",styleVariant:"subdued"})]})},h={args:{type:"success"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Filter 1",type:"neutral",styleVariant:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Filter 2",type:"neutral",styleVariant:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Filter 3",type:"neutral",styleVariant:"outlined",showTrailingIcon:!0})]})},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Default Style"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",styleVariant:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",styleVariant:"default",showLeadingIcon:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Subdued Style"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",styleVariant:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",styleVariant:"subdued",showLeadingIcon:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Outlined Style"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",styleVariant:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",styleVariant:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",styleVariant:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",styleVariant:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",styleVariant:"outlined",showLeadingIcon:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"With Trailing Icons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Removable",type:"info",styleVariant:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Removable",type:"success",styleVariant:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Removable",type:"warning",styleVariant:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Removable",type:"error",styleVariant:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Removable",type:"neutral",styleVariant:"outlined",showTrailingIcon:!0})]})]})]})};var w,I,m;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'info',
    styleVariant: 'default',
    showLeadingIcon: false,
    showTrailingIcon: false
  }
}`,...(m=(I=n.parameters)==null?void 0:I.docs)==null?void 0:m.source}}};var V,L,j;s.parameters={...s.parameters,docs:{...(V=s.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'info',
    styleVariant: 'default',
    showLeadingIcon: true,
    showTrailingIcon: false
  }
}`,...(j=(L=s.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var v,B,S;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'info',
    styleVariant: 'default',
    showLeadingIcon: false,
    showTrailingIcon: true
  }
}`,...(S=(B=l.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var W,T,D;r.parameters={...r.parameters,docs:{...(W=r.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'info',
    styleVariant: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true
  }
}`,...(D=(T=r.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,O,R;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Badge label="Info" type="info" styleVariant="default" showLeadingIcon />
      <Badge label="Success" type="success" styleVariant="default" showLeadingIcon />
      <Badge label="Warning" type="warning" styleVariant="default" showLeadingIcon />
      <Badge label="Error" type="error" styleVariant="default" showLeadingIcon />
      <Badge label="Neutral" type="neutral" styleVariant="default" showLeadingIcon />
    </div>
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var C,E,A;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Badge label="Info" type="info" styleVariant="subdued" showLeadingIcon />
      <Badge label="Success" type="success" styleVariant="subdued" showLeadingIcon />
      <Badge label="Warning" type="warning" styleVariant="subdued" showLeadingIcon />
      <Badge label="Error" type="error" styleVariant="subdued" showLeadingIcon />
      <Badge label="Neutral" type="neutral" styleVariant="subdued" showLeadingIcon />
    </div>
}`,...(A=(E=o.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var z,F,U;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Badge label="Info" type="info" styleVariant="outlined" showLeadingIcon />
      <Badge label="Success" type="success" styleVariant="outlined" showLeadingIcon />
      <Badge label="Warning" type="warning" styleVariant="outlined" showLeadingIcon />
      <Badge label="Error" type="error" styleVariant="outlined" showLeadingIcon />
      <Badge label="Neutral" type="neutral" styleVariant="outlined" showLeadingIcon />
    </div>
}`,...(U=(F=d.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var k,M,H;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge label="Default" type="info" styleVariant="default" showLeadingIcon />
      <Badge label="Subdued" type="info" styleVariant="subdued" showLeadingIcon />
      <Badge label="Outlined" type="info" styleVariant="outlined" showLeadingIcon />
    </div>
}`,...(H=(M=u.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var P,Y,_;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge label="Default" type="success" styleVariant="default" showLeadingIcon />
      <Badge label="Subdued" type="success" styleVariant="subdued" showLeadingIcon />
      <Badge label="Outlined" type="success" styleVariant="outlined" showLeadingIcon />
    </div>
}`,...(_=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};var G,q,J;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge label="Default" type="warning" styleVariant="default" showLeadingIcon />
      <Badge label="Subdued" type="warning" styleVariant="subdued" showLeadingIcon />
      <Badge label="Outlined" type="warning" styleVariant="outlined" showLeadingIcon />
    </div>
}`,...(J=(q=p.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var K,Q,X;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge label="Default" type="error" styleVariant="default" showLeadingIcon />
      <Badge label="Subdued" type="error" styleVariant="subdued" showLeadingIcon />
      <Badge label="Outlined" type="error" styleVariant="outlined" showLeadingIcon />
    </div>
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge label="Default" type="neutral" styleVariant="default" showLeadingIcon />
      <Badge label="Subdued" type="neutral" styleVariant="subdued" showLeadingIcon />
      <Badge label="Outlined" type="neutral" styleVariant="outlined" showLeadingIcon />
    </div>
}`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var ae,te,ne;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Badge label="Active" type="success" styleVariant="default" showLeadingIcon />
      <Badge label="Pending" type="warning" styleVariant="subdued" showLeadingIcon />
      <Badge label="Inactive" type="neutral" styleVariant="outlined" />
      <Badge label="Failed" type="error" styleVariant="default" showLeadingIcon />
      <Badge label="New" type="info" styleVariant="subdued" showLeadingIcon />
    </div>
}`,...(ne=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,le,re;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Badge label="React" type="info" styleVariant="subdued" />
      <Badge label="TypeScript" type="info" styleVariant="subdued" />
      <Badge label="Design System" type="neutral" styleVariant="subdued" />
      <Badge label="Component" type="success" styleVariant="subdued" />
    </div>
}`,...(re=(le=f.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};var ie,oe,de;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    type: "success"
  },
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Badge label="Filter 1" type="neutral" styleVariant="outlined" showTrailingIcon />
      <Badge label="Filter 2" type="neutral" styleVariant="outlined" showTrailingIcon />
      <Badge label="Filter 3" type="neutral" styleVariant="outlined" showTrailingIcon />
    </div>
}`,...(de=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ue,ce,pe;x.parameters={...x.parameters,docs:{...(ue=x.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>Default Style</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Badge label="Info" type="info" styleVariant="default" showLeadingIcon />
          <Badge label="Success" type="success" styleVariant="default" showLeadingIcon />
          <Badge label="Warning" type="warning" styleVariant="default" showLeadingIcon />
          <Badge label="Error" type="error" styleVariant="default" showLeadingIcon />
          <Badge label="Neutral" type="neutral" styleVariant="default" showLeadingIcon />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>Subdued Style</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Badge label="Info" type="info" styleVariant="subdued" showLeadingIcon />
          <Badge label="Success" type="success" styleVariant="subdued" showLeadingIcon />
          <Badge label="Warning" type="warning" styleVariant="subdued" showLeadingIcon />
          <Badge label="Error" type="error" styleVariant="subdued" showLeadingIcon />
          <Badge label="Neutral" type="neutral" styleVariant="subdued" showLeadingIcon />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>Outlined Style</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Badge label="Info" type="info" styleVariant="outlined" showLeadingIcon />
          <Badge label="Success" type="success" styleVariant="outlined" showLeadingIcon />
          <Badge label="Warning" type="warning" styleVariant="outlined" showLeadingIcon />
          <Badge label="Error" type="error" styleVariant="outlined" showLeadingIcon />
          <Badge label="Neutral" type="neutral" styleVariant="outlined" showLeadingIcon />
        </div>
      </div>
      
      <div>
        <h3 style={{
        marginBottom: '12px',
        fontSize: '14px',
        fontWeight: 600
      }}>With Trailing Icons</h3>
        <div style={{
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
          <Badge label="Removable" type="info" styleVariant="outlined" showTrailingIcon />
          <Badge label="Removable" type="success" styleVariant="outlined" showTrailingIcon />
          <Badge label="Removable" type="warning" styleVariant="outlined" showTrailingIcon />
          <Badge label="Removable" type="error" styleVariant="outlined" showTrailingIcon />
          <Badge label="Removable" type="neutral" styleVariant="outlined" showTrailingIcon />
        </div>
      </div>
    </div>
}`,...(pe=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};const Le=["Default","WithLeadingIcon","WithTrailingIcon","WithBothIcons","AllTypesDefault","AllTypesSubdued","AllTypesOutlined","InfoVariants","SuccessVariants","WarningVariants","ErrorVariants","NeutralVariants","StatusIndicators","CategoryLabels","RemovableTags","AllVariants"];export{i as AllTypesDefault,d as AllTypesOutlined,o as AllTypesSubdued,x as AllVariants,f as CategoryLabels,n as Default,y as ErrorVariants,u as InfoVariants,g as NeutralVariants,h as RemovableTags,b as StatusIndicators,c as SuccessVariants,p as WarningVariants,r as WithBothIcons,s as WithLeadingIcon,l as WithTrailingIcon,Le as __namedExportsOrder,Ve as default};
