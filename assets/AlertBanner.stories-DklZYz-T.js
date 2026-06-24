import{j as r}from"./jsx-runtime-DSvmvvsx.js";import{r as Ce}from"./index-B0WjJBI_.js";import{c as i}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as De}from"./Button-DO4HjNMh.js";import"./_commonjsHelpers-CqkleIqs.js";const Le=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  min-height: 48px;
  width: 100%;

  ${({theme:e,$type:t,$style:c})=>{if(c==="default"){if(t==="warning")return`
          background-color: ${e.colors.palette.warning[500]};
          color: ${e.colors.palette.warning[900]};
        `;if(t==="success")return`
          background-color: ${e.colors.palette.success[500]};
          color: ${e.colors.palette.neutral[50]};
        `;if(t==="error")return`
          background-color: ${e.colors.palette.error[500]};
          color: ${e.colors.palette.neutral[50]};
        `;if(t==="info")return`
          background-color: ${e.colors.palette.secondary.pantone[500]};
          color: ${e.colors.palette.neutral[50]};
        `}if(c==="subdued"){if(t==="warning")return`
          background-color: ${e.colors.palette.warning[100]};
          color: ${e.colors.palette.warning[900]};
        `;if(t==="success")return`
          background-color: ${e.colors.palette.success[50]};
          color: ${e.colors.palette.success[600]};
        `;if(t==="error")return`
          background-color: ${e.colors.palette.error[50]};
          color: ${e.colors.palette.error[600]};
        `;if(t==="info")return`
          background-color: ${e.colors.palette.secondary.pantone[50]};
          color: ${e.colors.palette.secondary.pantone[600]};
        `}if(c==="accentBorder"){let o="",n="",a="";return t==="warning"?(o=e.colors.palette.warning[500],n=e.colors.palette.warning[100],a=e.colors.palette.warning[900]):t==="success"?(o=e.colors.palette.success[500],n=e.colors.palette.success[50],a=e.colors.palette.success[600]):t==="error"?(o=e.colors.palette.error[500],n=e.colors.palette.error[50],a=e.colors.palette.error[600]):t==="info"&&(o=e.colors.palette.secondary.pantone[500],n=e.colors.palette.secondary.pantone[50],a=e.colors.palette.secondary.pantone[600]),`
        background-color: ${n};
        color: ${a};
        border-left: 4px solid ${o};
      `}}}
`,Ee=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex: 1;
  min-width: 0;
`,Ve=i.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[19]};
  flex: 1;
  min-width: 0;
  margin: 0;
`,$e=i.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-shrink: 0;
`,W=i.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`,He=()=>r.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M8 1.33334L1.33334 13.3333H14.6667L8 1.33334Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),r.jsx("path",{d:"M8 6V9.33333M8 12H8.00667",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),Me=()=>r.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"8",cy:"8",r:"6.67",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M5.33334 8L7.33334 10L10.6667 6.66667",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),Oe=()=>r.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"8",cy:"8",r:"6.67",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M10 6L6 10M6 6L10 10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),I=()=>r.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"8",cy:"8",r:"6.67",stroke:"currentColor",strokeWidth:"1.5"}),r.jsx("path",{d:"M8 10.6667V8M8 5.33334H8.00667",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),qe=()=>r.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),ze=e=>{switch(e){case"warning":return r.jsx(He,{});case"success":return r.jsx(Me,{});case"error":return r.jsx(Oe,{});case"info":return r.jsx(I,{});default:return r.jsx(I,{})}},s=Ce.forwardRef(({type:e="warning",style:t="default",text:c,showLeadingIcon:o=!0,showTrailingIcon:n=!0,action:a=!0,leadingIcon:Ae,trailingIcon:Se,buttonText:je="Button",onActionClick:ke,onClose:l,className:We,...Ie},Te)=>r.jsxs(Le,{ref:Te,$type:e,$style:t,className:We,role:"alert",...Ie,children:[r.jsxs(Ee,{children:[o&&r.jsx(W,{children:Ae||ze(e)}),r.jsx(Ve,{children:c})]}),r.jsxs($e,{children:[a&&r.jsx(De,{onClick:ke,variant:"tertiary",size:"small",buttonType:e==="success"?"safe":e==="warning"?"warning":e==="error"?"alert":"default",style:{color:t==="default"?"var(--color-neutral-50)":e==="success"?"var(--color-success-600)":e==="warning"?"var(--color-warning-900)":e==="error"?"var(--color-error-600)":"var(--color-pantone-600)","--hover-bg":t==="default"?"transparent":void 0},children:je}),n&&r.jsx(W,{onClick:l,role:"button","aria-label":"Close alert",tabIndex:0,onKeyDown:k=>{(k.key==="Enter"||k.key===" ")&&(k.preventDefault(),l==null||l())},children:Se||r.jsx(qe,{})})]})]}));s.displayName="AlertBanner";s.__docgenInfo={description:"",methods:[],displayName:"AlertBanner",props:{type:{required:!1,tsType:{name:"union",raw:"'warning' | 'success' | 'error' | 'info'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:`Alert type (determines color scheme)
@default 'warning'`,defaultValue:{value:"'warning'",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'accentBorder'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'accentBorder'"}]},description:`Visual style variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},text:{required:!0,tsType:{name:"string"},description:"Message text to display"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the leading icon
@default true`,defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the trailing (close) icon
@default true`,defaultValue:{value:"true",computed:!1}},action:{required:!1,tsType:{name:"boolean"},description:`Whether to show the action button
@default true`,defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom leading icon (overrides default)"},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom trailing icon (overrides default)"},buttonText:{required:!1,tsType:{name:"string"},description:`Action button text
@default 'Button'`,defaultValue:{value:"'Button'",computed:!1}},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when action button is clicked"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when close icon is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};const Ke={title:"Components/AlertBanner",component:s,parameters:{layout:"padded",docs:{description:{component:`
# AlertBanner

A feedback component for system messages that combines text and iconography for clear communication.

## Features
- **4 types**: Warning, Success, Error, Info
- **3 styles**: Default (solid), Subdued (light), Accent Border
- **Customizable**: Optional leading/trailing icons, action button
- **Accessible**: Proper ARIA attributes and keyboard support
- **Flexible**: Full-width design, customizable callbacks

## Usage

\`\`\`tsx
import { AlertBanner } from '@lean-ids/components';

<AlertBanner
  type="warning"
  style="default"
  text="This is a sample message text"
  onActionClick={() => console.log('Action clicked')}
  onClose={() => console.log('Closed')}
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["warning","success","error","info"],description:"Alert type (determines color scheme)",table:{type:{summary:"warning | success | error | info"},defaultValue:{summary:"warning"},category:"Appearance"}},style:{control:"select",options:["default","subdued","accentBorder"],description:"Visual style variant",table:{type:{summary:"default | subdued | accentBorder"},defaultValue:{summary:"default"},category:"Appearance"}},text:{control:"text",description:"Message text to display",table:{type:{summary:"string"},category:"Content"}},showLeadingIcon:{control:"boolean",description:"Whether to show the leading icon",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},showTrailingIcon:{control:"boolean",description:"Whether to show the trailing (close) icon",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},action:{control:"boolean",description:"Whether to show the action button",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},buttonText:{control:"text",description:"Action button text",table:{type:{summary:"string"},defaultValue:{summary:"Button"},category:"Content"}}}},u={args:{type:"warning",style:"default",text:"This is a sample message text",showLeadingIcon:!0,showTrailingIcon:!0,action:!0,buttonText:"Button"}},d={args:{type:"warning",style:"default",text:"This is a warning message"}},p={args:{type:"success",style:"default",text:"Operation completed successfully"}},g={args:{type:"error",style:"default",text:"An error occurred"}},m={args:{type:"info",style:"default",text:"Here is some important information"}},f={args:{type:"warning",style:"subdued",text:"This is a warning message"}},y={args:{type:"success",style:"subdued",text:"Operation completed successfully"}},x={args:{type:"error",style:"subdued",text:"An error occurred"}},h={args:{type:"info",style:"subdued",text:"Here is some important information"}},w={args:{type:"warning",style:"accentBorder",text:"This is a warning message"}},b={args:{type:"success",style:"accentBorder",text:"Operation completed successfully"}},v={args:{type:"error",style:"accentBorder",text:"An error occurred"}},B={args:{type:"info",style:"accentBorder",text:"Here is some important information"}},A={args:{type:"warning",style:"default",text:"Alert without icons",showLeadingIcon:!1,showTrailingIcon:!1}},S={args:{type:"info",style:"default",text:"Alert without action button",action:!1}},j={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:600},children:"Default Style"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(s,{type:"warning",style:"default",text:"Warning: This is a warning message"}),r.jsx(s,{type:"success",style:"default",text:"Success: Operation completed successfully"}),r.jsx(s,{type:"error",style:"default",text:"Error: An error occurred"}),r.jsx(s,{type:"info",style:"default",text:"Info: Here is some important information"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:600},children:"Subdued Style"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(s,{type:"warning",style:"subdued",text:"Warning: This is a warning message"}),r.jsx(s,{type:"success",style:"subdued",text:"Success: Operation completed successfully"}),r.jsx(s,{type:"error",style:"subdued",text:"Error: An error occurred"}),r.jsx(s,{type:"info",style:"subdued",text:"Info: Here is some important information"})]})]}),r.jsxs("div",{children:[r.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:600},children:"Accent Border Style"}),r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[r.jsx(s,{type:"warning",style:"accentBorder",text:"Warning: This is a warning message"}),r.jsx(s,{type:"success",style:"accentBorder",text:"Success: Operation completed successfully"}),r.jsx(s,{type:"error",style:"accentBorder",text:"Error: An error occurred"}),r.jsx(s,{type:"info",style:"accentBorder",text:"Info: Here is some important information"})]})]})]}),parameters:{docs:{description:{story:"Complete showcase of all AlertBanner variants across all types and styles."}}}};var T,C,D;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'default',
    text: 'This is a sample message text',
    showLeadingIcon: true,
    showTrailingIcon: true,
    action: true,
    buttonText: 'Button'
  }
}`,...(D=(C=u.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var L,E,V;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'default',
    text: 'This is a warning message'
  }
}`,...(V=(E=d.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var $,H,M;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    type: 'success',
    style: 'default',
    text: 'Operation completed successfully'
  }
}`,...(M=(H=p.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var O,q,z;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    type: 'error',
    style: 'default',
    text: 'An error occurred'
  }
}`,...(z=(q=g.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var R,N,_;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    type: 'info',
    style: 'default',
    text: 'Here is some important information'
  }
}`,...(_=(N=m.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var F,P,K;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'subdued',
    text: 'This is a warning message'
  }
}`,...(K=(P=f.parameters)==null?void 0:P.docs)==null?void 0:K.source}}};var U,Z,G;y.parameters={...y.parameters,docs:{...(U=y.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'success',
    style: 'subdued',
    text: 'Operation completed successfully'
  }
}`,...(G=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var J,Q,X;x.parameters={...x.parameters,docs:{...(J=x.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    type: 'error',
    style: 'subdued',
    text: 'An error occurred'
  }
}`,...(X=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,ee,re;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    type: 'info',
    style: 'subdued',
    text: 'Here is some important information'
  }
}`,...(re=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,se,oe;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'accentBorder',
    text: 'This is a warning message'
  }
}`,...(oe=(se=w.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,ae,ce;b.parameters={...b.parameters,docs:{...(ne=b.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    type: 'success',
    style: 'accentBorder',
    text: 'Operation completed successfully'
  }
}`,...(ce=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ie,le,ue;v.parameters={...v.parameters,docs:{...(ie=v.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    type: 'error',
    style: 'accentBorder',
    text: 'An error occurred'
  }
}`,...(ue=(le=v.parameters)==null?void 0:le.docs)==null?void 0:ue.source}}};var de,pe,ge;B.parameters={...B.parameters,docs:{...(de=B.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    type: 'info',
    style: 'accentBorder',
    text: 'Here is some important information'
  }
}`,...(ge=(pe=B.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var me,fe,ye;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'default',
    text: 'Alert without icons',
    showLeadingIcon: false,
    showTrailingIcon: false
  }
}`,...(ye=(fe=A.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var xe,he,we;S.parameters={...S.parameters,docs:{...(xe=S.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    type: 'info',
    style: 'default',
    text: 'Alert without action button',
    action: false
  }
}`,...(we=(he=S.parameters)==null?void 0:he.docs)==null?void 0:we.source}}};var be,ve,Be;j.parameters={...j.parameters,docs:{...(be=j.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '18px',
        fontWeight: 600
      }}>Default Style</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <AlertBanner type="warning" style="default" text="Warning: This is a warning message" />
          <AlertBanner type="success" style="default" text="Success: Operation completed successfully" />
          <AlertBanner type="error" style="default" text="Error: An error occurred" />
          <AlertBanner type="info" style="default" text="Info: Here is some important information" />
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '18px',
        fontWeight: 600
      }}>Subdued Style</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <AlertBanner type="warning" style="subdued" text="Warning: This is a warning message" />
          <AlertBanner type="success" style="subdued" text="Success: Operation completed successfully" />
          <AlertBanner type="error" style="subdued" text="Error: An error occurred" />
          <AlertBanner type="info" style="subdued" text="Info: Here is some important information" />
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '18px',
        fontWeight: 600
      }}>Accent Border Style</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <AlertBanner type="warning" style="accentBorder" text="Warning: This is a warning message" />
          <AlertBanner type="success" style="accentBorder" text="Success: Operation completed successfully" />
          <AlertBanner type="error" style="accentBorder" text="Error: An error occurred" />
          <AlertBanner type="info" style="accentBorder" text="Info: Here is some important information" />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all AlertBanner variants across all types and styles.'
      }
    }
  }
}`,...(Be=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:Be.source}}};const Ue=["Playground","WarningDefault","SuccessDefault","ErrorDefault","InfoDefault","WarningSubdued","SuccessSubdued","ErrorSubdued","InfoSubdued","WarningAccentBorder","SuccessAccentBorder","ErrorAccentBorder","InfoAccentBorder","WithoutIcons","WithoutAction","AllVariants"];export{j as AllVariants,v as ErrorAccentBorder,g as ErrorDefault,x as ErrorSubdued,B as InfoAccentBorder,m as InfoDefault,h as InfoSubdued,u as Playground,b as SuccessAccentBorder,p as SuccessDefault,y as SuccessSubdued,w as WarningAccentBorder,d as WarningDefault,f as WarningSubdued,S as WithoutAction,A as WithoutIcons,Ue as __namedExportsOrder,Ke as default};
