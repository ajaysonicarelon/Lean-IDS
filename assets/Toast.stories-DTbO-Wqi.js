import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as ae}from"./index-B0WjJBI_.js";import{c as s}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as ie}from"./Button-DO4HjNMh.js";import"./_commonjsHelpers-CqkleIqs.js";const ce=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  min-height: 48px;
  width: 404px;
  max-width: 100%;

  ${({theme:e,$type:r,$style:n})=>{if(n==="default"){if(r==="warning")return`
          background-color: ${e.colors.palette.warning[500]};
          color: ${e.colors.palette.warning[900]};
        `;if(r==="success")return`
          background-color: ${e.colors.palette.success[500]};
          color: ${e.colors.palette.neutral[50]};
        `;if(r==="error")return`
          background-color: ${e.colors.palette.error[500]};
          color: ${e.colors.palette.neutral[50]};
        `;if(r==="info")return`
          background-color: ${e.colors.palette.secondary.pantone[500]};
          color: ${e.colors.palette.neutral[50]};
        `}if(n==="subdued"){if(r==="warning")return`
          background-color: ${e.colors.palette.warning[100]};
          color: ${e.colors.palette.warning[900]};
        `;if(r==="success")return`
          background-color: ${e.colors.palette.success[50]};
          color: ${e.colors.palette.success[600]};
        `;if(r==="error")return`
          background-color: ${e.colors.palette.error[50]};
          color: ${e.colors.palette.error[600]};
        `;if(r==="info")return`
          background-color: ${e.colors.palette.secondary.pantone[50]};
          color: ${e.colors.palette.secondary.pantone[600]};
        `}}}
`,le=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex: 1;
  min-width: 0;
`,ue=s.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[19]};
  flex: 1;
  min-width: 0;
  margin: 0;
`,de=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-shrink: 0;
`,h=s.span`
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
`,pe=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("path",{d:"M8 1.33334L1.33334 13.3333H14.6667L8 1.33334Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinejoin:"round"}),t.jsx("path",{d:"M8 6V9.33333M8 12H8.00667",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),fe=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"8",cy:"8",r:"6.67",stroke:"currentColor",strokeWidth:"1.5"}),t.jsx("path",{d:"M5.33334 8L7.33334 10L10.6667 6.66667",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]}),ge=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"8",cy:"8",r:"6.67",stroke:"currentColor",strokeWidth:"1.5"}),t.jsx("path",{d:"M10 6L6 10M6 6L10 10",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),w=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"8",cy:"8",r:"6.67",stroke:"currentColor",strokeWidth:"1.5"}),t.jsx("path",{d:"M8 10.6667V8M8 5.33334H8.00667",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]}),ye=()=>t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M12 4L4 12M4 4L12 12",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),me=e=>{switch(e){case"warning":return t.jsx(pe,{});case"success":return t.jsx(fe,{});case"error":return t.jsx(ge,{});case"info":return t.jsx(w,{});default:return t.jsx(w,{})}},o=ae.forwardRef(({type:e="warning",style:r="default",text:n,showLeadIcon:J=!0,showTrailIcon:Q=!0,action:X=!0,leadIcon:Y,trailIcon:ee,buttonText:te="Button",onActionClick:re,onClose:a,className:oe,...se},ne)=>t.jsxs(ce,{ref:ne,$type:e,$style:r,className:oe,role:"status","aria-live":"polite",...se,children:[t.jsxs(le,{children:[J&&t.jsx(h,{children:Y||me(e)}),t.jsx(ue,{children:n})]}),t.jsxs(de,{children:[X&&t.jsx(ie,{onClick:re,variant:"tertiary",size:"small",buttonType:e==="success"?"safe":e==="warning"?"warning":e==="error"?"alert":"default",style:{color:r==="default"?"var(--color-neutral-50)":e==="success"?"var(--color-success-600)":e==="warning"?"var(--color-warning-900)":e==="error"?"var(--color-error-600)":"var(--color-pantone-600)","--hover-bg":r==="default"?"transparent":void 0},children:te}),Q&&t.jsx(h,{onClick:a,role:"button","aria-label":"Close toast",tabIndex:0,onKeyDown:x=>{(x.key==="Enter"||x.key===" ")&&(x.preventDefault(),a==null||a())},children:ee||t.jsx(ye,{})})]})]}));o.displayName="Toast";o.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{type:{required:!1,tsType:{name:"union",raw:"'warning' | 'success' | 'error' | 'info'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:`Toast type (determines color scheme)
@default 'warning'`,defaultValue:{value:"'warning'",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"}]},description:`Visual style variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},text:{required:!0,tsType:{name:"string"},description:"Message text to display"},showLeadIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the leading icon
@default true`,defaultValue:{value:"true",computed:!1}},showTrailIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the trailing (close) icon
@default true`,defaultValue:{value:"true",computed:!1}},action:{required:!1,tsType:{name:"boolean"},description:`Whether to show the action button
@default true`,defaultValue:{value:"true",computed:!1}},leadIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom leading icon (overrides default)"},trailIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom trailing icon (overrides default)"},buttonText:{required:!1,tsType:{name:"string"},description:`Action button text
@default 'Button'`,defaultValue:{value:"'Button'",computed:!1}},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when action button is clicked"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when close icon is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};const ke={title:"Components/Toast",component:o,parameters:{layout:"centered",docs:{description:{component:`
# Toast

A compact notification component for temporary feedback messages. Toasts are typically used for brief, non-intrusive notifications.

## Features
- **4 types**: Warning, Success, Error, Info
- **2 styles**: Default (solid), Subdued (light)
- **Compact**: Fixed width (404px) for consistent sizing
- **Customizable**: Optional leading/trailing icons, action button
- **Accessible**: Proper ARIA attributes and keyboard support

## Usage

\`\`\`tsx
import { Toast } from '@lean-ids/components';

<Toast
  type="success"
  style="default"
  text="Operation completed successfully"
  onActionClick={() => console.log('Action clicked')}
  onClose={() => console.log('Closed')}
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["warning","success","error","info"],description:"Toast type (determines color scheme)",table:{type:{summary:"warning | success | error | info"},defaultValue:{summary:"warning"},category:"Appearance"}},style:{control:"select",options:["default","subdued"],description:"Visual style variant",table:{type:{summary:"default | subdued"},defaultValue:{summary:"default"},category:"Appearance"}},text:{control:"text",description:"Message text to display",table:{type:{summary:"string"},category:"Content"}},showLeadIcon:{control:"boolean",description:"Whether to show the leading icon",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},showTrailIcon:{control:"boolean",description:"Whether to show the trailing (close) icon",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},action:{control:"boolean",description:"Whether to show the action button",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},buttonText:{control:"text",description:"Action button text",table:{type:{summary:"string"},defaultValue:{summary:"Button"},category:"Content"}}}},i={args:{type:"warning",style:"default",text:"Description",showLeadIcon:!0,showTrailIcon:!0,action:!0,buttonText:"Button"}},c={args:{type:"warning",style:"default",text:"Warning notification"}},l={args:{type:"success",style:"default",text:"Success notification"}},u={args:{type:"error",style:"default",text:"Error notification"}},d={args:{type:"info",style:"default",text:"Info notification"}},p={args:{type:"warning",style:"subdued",text:"Warning notification"}},f={args:{type:"success",style:"subdued",text:"Success notification"}},g={args:{type:"error",style:"subdued",text:"Error notification"}},y={args:{type:"info",style:"subdued",text:"Info notification"}},m={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:600},children:"Default Style"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(o,{type:"warning",style:"default",text:"Warning notification"}),t.jsx(o,{type:"success",style:"default",text:"Success notification"}),t.jsx(o,{type:"error",style:"default",text:"Error notification"}),t.jsx(o,{type:"info",style:"default",text:"Info notification"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:600},children:"Subdued Style"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(o,{type:"warning",style:"subdued",text:"Warning notification"}),t.jsx(o,{type:"success",style:"subdued",text:"Success notification"}),t.jsx(o,{type:"error",style:"subdued",text:"Error notification"}),t.jsx(o,{type:"info",style:"subdued",text:"Info notification"})]})]})]}),parameters:{docs:{description:{story:"Complete showcase of all Toast variants across all types and styles."}}}};var b,v,k;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'default',
    text: 'Description',
    showLeadIcon: true,
    showTrailIcon: true,
    action: true,
    buttonText: 'Button'
  }
}`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var j,S,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'default',
    text: 'Warning notification'
  }
}`,...(T=(S=c.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var I,W,C;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'success',
    style: 'default',
    text: 'Success notification'
  }
}`,...(C=(W=l.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var D,$,L;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    type: 'error',
    style: 'default',
    text: 'Error notification'
  }
}`,...(L=($=u.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var A,E,V;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    type: 'info',
    style: 'default',
    text: 'Info notification'
  }
}`,...(V=(E=d.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};var B,M,q;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'subdued',
    text: 'Warning notification'
  }
}`,...(q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var z,R,N;f.parameters={...f.parameters,docs:{...(z=f.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    type: 'success',
    style: 'subdued',
    text: 'Success notification'
  }
}`,...(N=(R=f.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var H,_,O;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'error',
    style: 'subdued',
    text: 'Error notification'
  }
}`,...(O=(_=g.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var P,F,K;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    type: 'info',
    style: 'subdued',
    text: 'Info notification'
  }
}`,...(K=(F=y.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};var U,Z,G;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    alignItems: 'flex-start'
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
          <Toast type="warning" style="default" text="Warning notification" />
          <Toast type="success" style="default" text="Success notification" />
          <Toast type="error" style="default" text="Error notification" />
          <Toast type="info" style="default" text="Info notification" />
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
          <Toast type="warning" style="subdued" text="Warning notification" />
          <Toast type="success" style="subdued" text="Success notification" />
          <Toast type="error" style="subdued" text="Error notification" />
          <Toast type="info" style="subdued" text="Info notification" />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all Toast variants across all types and styles.'
      }
    }
  }
}`,...(G=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};const je=["Playground","WarningDefault","SuccessDefault","ErrorDefault","InfoDefault","WarningSubdued","SuccessSubdued","ErrorSubdued","InfoSubdued","AllVariants"];export{m as AllVariants,u as ErrorDefault,g as ErrorSubdued,d as InfoDefault,y as InfoSubdued,i as Playground,l as SuccessDefault,f as SuccessSubdued,c as WarningDefault,p as WarningSubdued,je as __namedExportsOrder,ke as default};
