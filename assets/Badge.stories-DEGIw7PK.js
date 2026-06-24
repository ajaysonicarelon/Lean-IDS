import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{B as a}from"./Badge-BnocszLR.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";const he={title:"Components/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:`
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

<Badge label="Active" type="success" style="default" />

<Badge 
  label="New" 
  type="info" 
  style="subdued"
  showLeadingIcon={true}
/>

<Badge 
  label="Removable" 
  type="neutral" 
  style="outlined"
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
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"The text content of the badge"},type:{control:"select",options:["info","success","warning","error","neutral"],description:"The semantic type of the badge"},style:{control:"select",options:["default","subdued","outlined"],description:"The visual style of the badge"},showLeadingIcon:{control:"boolean",description:"Whether to show the leading icon"},showTrailingIcon:{control:"boolean",description:"Whether to show the trailing icon"}}},s={args:{label:"Label",type:"info",style:"default",showLeadingIcon:!1,showTrailingIcon:!1}},l={args:{label:"Label",type:"info",style:"default",showLeadingIcon:!0,showTrailingIcon:!1}},t={args:{label:"Label",type:"info",style:"default",showLeadingIcon:!1,showTrailingIcon:!0}},n={args:{label:"Label",type:"info",style:"default",showLeadingIcon:!0,showTrailingIcon:!0}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",style:"default",showLeadingIcon:!0})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",style:"subdued",showLeadingIcon:!0})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",style:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",style:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",style:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",style:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",style:"outlined",showLeadingIcon:!0})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Default",type:"info",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Subdued",type:"info",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Outlined",type:"info",style:"outlined",showLeadingIcon:!0})]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Default",type:"success",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Subdued",type:"success",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Outlined",type:"success",style:"outlined",showLeadingIcon:!0})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Default",type:"warning",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Subdued",type:"warning",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Outlined",type:"warning",style:"outlined",showLeadingIcon:!0})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Default",type:"error",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Subdued",type:"error",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Outlined",type:"error",style:"outlined",showLeadingIcon:!0})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(a,{label:"Default",type:"neutral",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Subdued",type:"neutral",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Outlined",type:"neutral",style:"outlined",showLeadingIcon:!0})]})},g={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Active",type:"success",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Pending",type:"warning",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Inactive",type:"neutral",style:"outlined"}),e.jsx(a,{label:"Failed",type:"error",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"New",type:"info",style:"subdued",showLeadingIcon:!0})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"React",type:"info",style:"subdued"}),e.jsx(a,{label:"TypeScript",type:"info",style:"subdued"}),e.jsx(a,{label:"Design System",type:"neutral",style:"subdued"}),e.jsx(a,{label:"Component",type:"success",style:"subdued"})]})},f={args:{type:"success"},render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Filter 1",type:"neutral",style:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Filter 2",type:"neutral",style:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Filter 3",type:"neutral",style:"outlined",showTrailingIcon:!0})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Default Style"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",style:"default",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",style:"default",showLeadingIcon:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Subdued Style"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",style:"subdued",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",style:"subdued",showLeadingIcon:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Outlined Style"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Info",type:"info",style:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Success",type:"success",style:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Warning",type:"warning",style:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Error",type:"error",style:"outlined",showLeadingIcon:!0}),e.jsx(a,{label:"Neutral",type:"neutral",style:"outlined",showLeadingIcon:!0})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"With Trailing Icons"}),e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{label:"Removable",type:"info",style:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Removable",type:"success",style:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Removable",type:"warning",style:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Removable",type:"error",style:"outlined",showTrailingIcon:!0}),e.jsx(a,{label:"Removable",type:"neutral",style:"outlined",showTrailingIcon:!0})]})]})]})};var x,w,I;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'info',
    style: 'default',
    showLeadingIcon: false,
    showTrailingIcon: false
  }
}`,...(I=(w=s.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var m,L,j;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'info',
    style: 'default',
    showLeadingIcon: true,
    showTrailingIcon: false
  }
}`,...(j=(L=l.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var v,B,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'info',
    style: 'default',
    showLeadingIcon: false,
    showTrailingIcon: true
  }
}`,...(S=(B=t.parameters)==null?void 0:B.docs)==null?void 0:S.source}}};var W,T,D;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    type: 'info',
    style: 'default',
    showLeadingIcon: true,
    showTrailingIcon: true
  }
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,O,E;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Badge label="Info" type="info" style="default" showLeadingIcon />
      <Badge label="Success" type="success" style="default" showLeadingIcon />
      <Badge label="Warning" type="warning" style="default" showLeadingIcon />
      <Badge label="Error" type="error" style="default" showLeadingIcon />
      <Badge label="Neutral" type="neutral" style="default" showLeadingIcon />
    </div>
}`,...(E=(O=r.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var R,A,C;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Badge label="Info" type="info" style="subdued" showLeadingIcon />
      <Badge label="Success" type="success" style="subdued" showLeadingIcon />
      <Badge label="Warning" type="warning" style="subdued" showLeadingIcon />
      <Badge label="Error" type="error" style="subdued" showLeadingIcon />
      <Badge label="Neutral" type="neutral" style="subdued" showLeadingIcon />
    </div>
}`,...(C=(A=o.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var V,z,F;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Badge label="Info" type="info" style="outlined" showLeadingIcon />
      <Badge label="Success" type="success" style="outlined" showLeadingIcon />
      <Badge label="Warning" type="warning" style="outlined" showLeadingIcon />
      <Badge label="Error" type="error" style="outlined" showLeadingIcon />
      <Badge label="Neutral" type="neutral" style="outlined" showLeadingIcon />
    </div>
}`,...(F=(z=d.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var U,k,H;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge label="Default" type="info" style="default" showLeadingIcon />
      <Badge label="Subdued" type="info" style="subdued" showLeadingIcon />
      <Badge label="Outlined" type="info" style="outlined" showLeadingIcon />
    </div>
}`,...(H=(k=i.parameters)==null?void 0:k.docs)==null?void 0:H.source}}};var M,P,Y;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge label="Default" type="success" style="default" showLeadingIcon />
      <Badge label="Subdued" type="success" style="subdued" showLeadingIcon />
      <Badge label="Outlined" type="success" style="outlined" showLeadingIcon />
    </div>
}`,...(Y=(P=u.parameters)==null?void 0:P.docs)==null?void 0:Y.source}}};var _,G,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge label="Default" type="warning" style="default" showLeadingIcon />
      <Badge label="Subdued" type="warning" style="subdued" showLeadingIcon />
      <Badge label="Outlined" type="warning" style="outlined" showLeadingIcon />
    </div>
}`,...(q=(G=c.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var J,K,Q;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge label="Default" type="error" style="default" showLeadingIcon />
      <Badge label="Subdued" type="error" style="subdued" showLeadingIcon />
      <Badge label="Outlined" type="error" style="outlined" showLeadingIcon />
    </div>
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,$;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
    alignItems: 'center'
  }}>
      <Badge label="Default" type="neutral" style="default" showLeadingIcon />
      <Badge label="Subdued" type="neutral" style="subdued" showLeadingIcon />
      <Badge label="Outlined" type="neutral" style="outlined" showLeadingIcon />
    </div>
}`,...($=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,se;g.parameters={...g.parameters,docs:{...(ee=g.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap'
  }}>
      <Badge label="Active" type="success" style="default" showLeadingIcon />
      <Badge label="Pending" type="warning" style="subdued" showLeadingIcon />
      <Badge label="Inactive" type="neutral" style="outlined" />
      <Badge label="Failed" type="error" style="default" showLeadingIcon />
      <Badge label="New" type="info" style="subdued" showLeadingIcon />
    </div>
}`,...(se=(ae=g.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var le,te,ne;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Badge label="React" type="info" style="subdued" />
      <Badge label="TypeScript" type="info" style="subdued" />
      <Badge label="Design System" type="neutral" style="subdued" />
      <Badge label="Component" type="success" style="subdued" />
    </div>
}`,...(ne=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var re,oe,de;f.parameters={...f.parameters,docs:{...(re=f.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    type: "success"
  },
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <Badge label="Filter 1" type="neutral" style="outlined" showTrailingIcon />
      <Badge label="Filter 2" type="neutral" style="outlined" showTrailingIcon />
      <Badge label="Filter 3" type="neutral" style="outlined" showTrailingIcon />
    </div>
}`,...(de=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ie,ue,ce;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
          <Badge label="Info" type="info" style="default" showLeadingIcon />
          <Badge label="Success" type="success" style="default" showLeadingIcon />
          <Badge label="Warning" type="warning" style="default" showLeadingIcon />
          <Badge label="Error" type="error" style="default" showLeadingIcon />
          <Badge label="Neutral" type="neutral" style="default" showLeadingIcon />
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
          <Badge label="Info" type="info" style="subdued" showLeadingIcon />
          <Badge label="Success" type="success" style="subdued" showLeadingIcon />
          <Badge label="Warning" type="warning" style="subdued" showLeadingIcon />
          <Badge label="Error" type="error" style="subdued" showLeadingIcon />
          <Badge label="Neutral" type="neutral" style="subdued" showLeadingIcon />
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
          <Badge label="Info" type="info" style="outlined" showLeadingIcon />
          <Badge label="Success" type="success" style="outlined" showLeadingIcon />
          <Badge label="Warning" type="warning" style="outlined" showLeadingIcon />
          <Badge label="Error" type="error" style="outlined" showLeadingIcon />
          <Badge label="Neutral" type="neutral" style="outlined" showLeadingIcon />
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
          <Badge label="Removable" type="info" style="outlined" showTrailingIcon />
          <Badge label="Removable" type="success" style="outlined" showTrailingIcon />
          <Badge label="Removable" type="warning" style="outlined" showTrailingIcon />
          <Badge label="Removable" type="error" style="outlined" showTrailingIcon />
          <Badge label="Removable" type="neutral" style="outlined" showTrailingIcon />
        </div>
      </div>
    </div>
}`,...(ce=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:ce.source}}};const xe=["Default","WithLeadingIcon","WithTrailingIcon","WithBothIcons","AllTypesDefault","AllTypesSubdued","AllTypesOutlined","InfoVariants","SuccessVariants","WarningVariants","ErrorVariants","NeutralVariants","StatusIndicators","CategoryLabels","RemovableTags","AllVariants"];export{r as AllTypesDefault,d as AllTypesOutlined,o as AllTypesSubdued,h as AllVariants,b as CategoryLabels,s as Default,p as ErrorVariants,i as InfoVariants,y as NeutralVariants,f as RemovableTags,g as StatusIndicators,u as SuccessVariants,c as WarningVariants,n as WithBothIcons,l as WithLeadingIcon,t as WithTrailingIcon,xe as __namedExportsOrder,he as default};
