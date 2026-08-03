import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{fn as c}from"./index-CH2Su9EI.js";import{r as H}from"./index-B0WjJBI_.js";import{g as d}from"./styled-components.browser.esm-CuwBLqEg.js";import{A as vt,C as Oe,I as F,a as ht,W as wt}from"./WarningAmberOutlined-BaSDCFAD.js";import{T as g}from"./Typography-DlcmwxwF.js";import{C as Tt}from"./Close-Bujf63ZX.js";import{B as St}from"./Button-4FxjpG2D.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createSvgIcon-B7ekv6yR.js";const At=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  min-height: ${({theme:e})=>e.spacing[12]};
  width: ${({$width:e})=>e||"100%"};
  max-width: ${({$maxWidth:e})=>e};
  position: relative;
  transition: opacity 0.2s ease;

  ${({$disabled:e,$isLoading:r})=>(e||r)&&`
      opacity: 0.6;
      pointer-events: ${e?"none":"auto"};
      cursor: ${e?"not-allowed":"default"};
    `}

  &:hover {
    ${({$disabled:e,$isLoading:r})=>!e&&!r&&`
        opacity: 0.95;
      `}
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }

  ${({theme:e,$type:r,$style:u})=>{if(u==="default"){if(r==="warning")return`
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
        `}if(u==="subdued"){if(r==="warning")return`
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
        `}if(u==="accentBorder"){let i="",n="",s="";return r==="warning"?(i=e.colors.palette.warning[500],n=e.colors.palette.warning[100],s=e.colors.palette.warning[900]):r==="success"?(i=e.colors.palette.success[500],n=e.colors.palette.success[50],s=e.colors.palette.success[600]):r==="error"?(i=e.colors.palette.error[500],n=e.colors.palette.error[50],s=e.colors.palette.error[600]):r==="info"&&(i=e.colors.palette.secondary.pantone[500],n=e.colors.palette.secondary.pantone[50],s=e.colors.palette.secondary.pantone[600]),`
        background-color: ${n};
        color: ${s};
        border-left: 4px solid ${i};
      `}}}
`,K=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex: 1;
  min-width: 0;
`,P=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-shrink: 0;
`,L=d.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({theme:e})=>e.spacing[7]}; /* 16px minimum for icons */
  height: ${({theme:e})=>e.spacing[7]}; /* 16px minimum for icons */
  cursor: ${({$clickable:e})=>e?"pointer":"default"};
  transition: opacity 0.2s ease;

  ${({$clickable:e})=>e&&`
    &:hover {
      opacity: 0.8;
    }

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 2px;
      border-radius: 2px;
    }

    &:active {
      opacity: 0.6;
    }
  `}

  svg {
    width: 100%;
    height: 100%;
  }
`,Vt=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  z-index: 1;
`,_=d.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  min-width: 0;
`,Bt=e=>{switch(e){case"warning":return t.jsx(wt,{sx:{fontSize:16}});case"success":return t.jsx(ht,{sx:{fontSize:16}});case"error":return t.jsx(Oe,{sx:{fontSize:16}});case"info":return t.jsx(F,{sx:{fontSize:16}});default:return t.jsx(F,{sx:{fontSize:16}})}},a=H.forwardRef(({type:e="warning",styleVariant:r="default",text:u,as:i,isLoading:n=!1,disabled:s=!1,isInvalid:ze=!1,isEmpty:W=!1,showLeadingIcon:Fe=!0,showTrailingIcon:Ke=!0,leadingIcon:Pe,trailingIcon:_e,action:Ge=!0,buttonText:Je="Button",customContent:p,customActions:m,customLeading:Qe,customTrailing:Xe,onActionClick:M,onClose:l,onMount:f,onUnmount:y,onClick:Ye,onFocus:Ze,onBlur:Ue,className:et,style:tt,messageClassName:R,actionsClassName:N,iconClassName:$,buttonClassName:rt,"aria-label":at,"aria-labelledby":nt,"aria-describedby":st,"aria-live":ot="polite",width:it,maxWidth:lt,loadingMessage:O="Loading...",emptyMessage:ct="No content to display",errorMessage:z,...ut},dt)=>{const pt=H.useId(),D=st||`alert-message-${pt}`;H.useEffect(()=>(f==null||f(),()=>{y==null||y()}),[f,y]);const mt=i||"div",ft=o=>{s||n||l==null||l(o)},yt=o=>{s||n||(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),l==null||l(o))},gt=o=>{s||n||M==null||M(o)},xt=()=>W?t.jsx(_,{children:t.jsx(g,{variant:"body",weight:"medium",children:ct})}):ze&&z?t.jsxs(_,{id:D,children:[t.jsx(L,{$clickable:!1,className:$,children:t.jsx(Oe,{sx:{fontSize:16}})}),t.jsx(g,{variant:"body",weight:"medium",children:z})]}):p?t.jsx(K,{className:R,children:typeof p=="function"?p({type:e}):p}):t.jsxs(K,{className:R,id:D,children:[Qe,Fe&&t.jsx(L,{$clickable:!1,className:$,children:Pe||Bt(e)}),u&&t.jsx(g,{variant:"body",weight:"medium",children:u}),Xe]}),bt=()=>m?t.jsx(P,{className:N,children:typeof m=="function"?m({type:e,onClose:l}):m}):t.jsxs(P,{className:N,children:[Ge&&!W&&t.jsx(St,{onClick:gt,variant:"tertiary",size:"small",disabled:s||n,buttonType:e==="success"?"safe":e==="warning"?"warning":e==="error"?"alert":"default",className:rt,style:{color:r==="default"?"var(--color-neutral-50)":e==="success"?"var(--color-success-600)":e==="warning"?"var(--color-warning-900)":e==="error"?"var(--color-error-600)":"var(--color-pantone-600)","--hover-bg":r==="default"?"transparent":void 0},children:Je}),Ke&&!W&&t.jsx(L,{$clickable:!0,onClick:ft,role:"button","aria-label":"Close alert",tabIndex:s||n?-1:0,onKeyDown:yt,className:$,children:_e||t.jsx(Tt,{sx:{fontSize:16}})})]});return t.jsxs(At,{ref:dt,as:mt,$type:e,$style:r,$width:it,$maxWidth:lt,$disabled:s,$isLoading:n,className:et,style:tt,role:"alert","aria-label":at,"aria-labelledby":nt,"aria-describedby":D,"aria-live":ot,onClick:Ye,onFocus:Ze,onBlur:Ue,...ut,children:[xt(),bt(),n&&t.jsxs(Vt,{children:[t.jsx(vt,{sx:{fontSize:20,animation:"spin 1s linear infinite"}}),O&&t.jsx(g,{variant:"body",weight:"medium",style:{marginLeft:"8px"},children:O})]})]})});a.displayName="AlertBanner";a.__docgenInfo={description:"",methods:[],displayName:"AlertBanner",props:{type:{required:!1,tsType:{name:"union",raw:"'warning' | 'success' | 'error' | 'info'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:`Alert type (determines color scheme)
@default 'warning'`,defaultValue:{value:"'warning'",computed:!1}},styleVariant:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'accentBorder'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'accentBorder'"}]},description:`Visual style variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},text:{required:!1,tsType:{name:"ReactNode"},description:"Message text or content to display"},as:{required:!1,tsType:{name:"ElementType"},description:`Polymorphic element type - render as different HTML element
@default 'div'`},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows loading indicator
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state - reduces opacity and prevents interaction
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Error state - shows error styling
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows when no content
@default false`,defaultValue:{value:"false",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the leading icon
@default true`,defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the trailing (close) icon
@default true`,defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom leading icon (overrides default)"},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom trailing icon (overrides default)"},action:{required:!1,tsType:{name:"boolean"},description:`Whether to show the action button
@default true`,defaultValue:{value:"true",computed:!1}},buttonText:{required:!1,tsType:{name:"string"},description:`Action button text
@default 'Button'`,defaultValue:{value:"'Button'",computed:!1}},customContent:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { type: AlertBannerType }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom content to render instead of text"},customActions:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { type: AlertBannerType; onClose?: () => void }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom action area (replaces button and close icon)"},customLeading:{required:!1,tsType:{name:"ReactNode"},description:"Custom leading content (before icon and text)"},customTrailing:{required:!1,tsType:{name:"ReactNode"},description:"Custom trailing content (after text, before actions)"},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"e"}],return:{name:"void"}}},description:"Callback when action button is clicked"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(e?: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"union",raw:"MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>",elements:[{name:"MouseEvent",elements:[{name:"HTMLSpanElement"}],raw:"MouseEvent<HTMLSpanElement>"},{name:"KeyboardEvent",elements:[{name:"HTMLSpanElement"}],raw:"KeyboardEvent<HTMLSpanElement>"}]},name:"e"}],return:{name:"void"}}},description:"Callback when close icon is clicked"},onMount:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when alert is mounted"},onUnmount:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when alert is unmounted"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLDivElement"}],raw:"MouseEvent<HTMLDivElement>"},name:"e"}],return:{name:"void"}}},description:"Callback when alert is clicked"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when alert receives focus"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when alert loses focus"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for root element"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles for root element"},messageClassName:{required:!1,tsType:{name:"string"},description:"CSS class for message container"},actionsClassName:{required:!1,tsType:{name:"string"},description:"CSS class for actions container"},iconClassName:{required:!1,tsType:{name:"string"},description:"CSS class for icon wrapper"},buttonClassName:{required:!1,tsType:{name:"string"},description:"CSS class for button"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for the alert"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby for the alert"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA describedby for the alert"},"aria-live":{required:!1,tsType:{name:"union",raw:"'polite' | 'assertive' | 'off'",elements:[{name:"literal",value:"'polite'"},{name:"literal",value:"'assertive'"},{name:"literal",value:"'off'"}]},description:`ARIA live region politeness level
@default 'polite'`,defaultValue:{value:"'polite'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:`Width of the alert (use tokens or CSS values)
@default '100%'`},maxWidth:{required:!1,tsType:{name:"string"},description:"Max width of the alert (use tokens or CSS values)"},loadingMessage:{required:!1,tsType:{name:"string"},description:`Loading message text
@default 'Loading...'`,defaultValue:{value:"'Loading...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty state message
@default 'No content to display'`,defaultValue:{value:"'No content to display'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message (when isInvalid is true)"}},composes:["Omit"]};const Ht={title:"Components/AlertBanner",component:a,parameters:{layout:"padded",docs:{description:{component:`
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
  styleVariant="default"
  text="This is a sample message text"
  onActionClick={() => console.log('Action clicked')}
  onClose={() => console.log('Closed')}
/>
\`\`\`
        `}}},tags:["autodocs"],args:{onActionClick:c(),onClose:c(),onMount:c(),onUnmount:c(),onClick:c(),onFocus:c(),onBlur:c()},argTypes:{type:{control:"select",options:["warning","success","error","info"],description:"Alert type (determines color scheme)",table:{type:{summary:"warning | success | error | info"},defaultValue:{summary:"warning"},category:"Appearance"}},styleVariant:{control:"select",options:["default","subdued","accentBorder"],description:"Visual style variant",table:{type:{summary:"default | subdued | accentBorder"},defaultValue:{summary:"default"},category:"Appearance"}},text:{control:"text",description:"Message text to display",table:{type:{summary:"string"},category:"Content"}},showLeadingIcon:{control:"boolean",description:"Whether to show the leading icon",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},showTrailingIcon:{control:"boolean",description:"Whether to show the trailing (close) icon",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},action:{control:"boolean",description:"Whether to show the action button",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},buttonText:{control:"text",description:"Action button text",table:{type:{summary:"string"},defaultValue:{summary:"Button"},category:"Content"}}}},x={args:{type:"warning",styleVariant:"default",text:"This is a sample message text",showLeadingIcon:!0,showTrailingIcon:!0,action:!0,buttonText:"Button"}},b={args:{type:"warning",styleVariant:"default",text:"This is a warning message"}},v={args:{type:"success",styleVariant:"default",text:"Operation completed successfully"}},h={args:{type:"error",styleVariant:"default",text:"An error occurred"}},w={args:{type:"info",styleVariant:"default",text:"Here is some important information"}},T={args:{type:"warning",styleVariant:"subdued",text:"This is a warning message"}},S={args:{type:"success",styleVariant:"subdued",text:"Operation completed successfully"}},A={args:{type:"error",styleVariant:"subdued",text:"An error occurred"}},V={args:{type:"info",styleVariant:"subdued",text:"Here is some important information"}},B={args:{type:"warning",styleVariant:"accentBorder",text:"This is a warning message"}},E={args:{type:"success",styleVariant:"accentBorder",text:"Operation completed successfully"}},j={args:{type:"error",styleVariant:"accentBorder",text:"An error occurred"}},I={args:{type:"info",styleVariant:"accentBorder",text:"Here is some important information"}},k={args:{type:"warning",styleVariant:"default",text:"Alert without icons",showLeadingIcon:!1,showTrailingIcon:!1}},C={args:{type:"info",styleVariant:"default",text:"Alert without action button",action:!1}},q={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:600},children:"Default Style"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(a,{type:"warning",styleVariant:"default",text:"Warning: This is a warning message"}),t.jsx(a,{type:"success",styleVariant:"default",text:"Success: Operation completed successfully"}),t.jsx(a,{type:"error",styleVariant:"default",text:"Error: An error occurred"}),t.jsx(a,{type:"info",styleVariant:"default",text:"Info: Here is some important information"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:600},children:"Subdued Style"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(a,{type:"warning",styleVariant:"subdued",text:"Warning: This is a warning message"}),t.jsx(a,{type:"success",styleVariant:"subdued",text:"Success: Operation completed successfully"}),t.jsx(a,{type:"error",styleVariant:"subdued",text:"Error: An error occurred"}),t.jsx(a,{type:"info",styleVariant:"subdued",text:"Info: Here is some important information"})]})]}),t.jsxs("div",{children:[t.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:600},children:"Accent Border Style"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(a,{type:"warning",styleVariant:"accentBorder",text:"Warning: This is a warning message"}),t.jsx(a,{type:"success",styleVariant:"accentBorder",text:"Success: Operation completed successfully"}),t.jsx(a,{type:"error",styleVariant:"accentBorder",text:"Error: An error occurred"}),t.jsx(a,{type:"info",styleVariant:"accentBorder",text:"Info: Here is some important information"})]})]})]}),parameters:{docs:{description:{story:"Complete showcase of all AlertBanner variants across all types and styles."}}}};var G,J,Q;x.parameters={...x.parameters,docs:{...(G=x.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    styleVariant: 'default',
    text: 'This is a sample message text',
    showLeadingIcon: true,
    showTrailingIcon: true,
    action: true,
    buttonText: 'Button'
  }
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;b.parameters={...b.parameters,docs:{...(X=b.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    styleVariant: 'default',
    text: 'This is a warning message'
  }
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var U,ee,te;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    type: 'success',
    styleVariant: 'default',
    text: 'Operation completed successfully'
  }
}`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,ne;h.parameters={...h.parameters,docs:{...(re=h.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    type: 'error',
    styleVariant: 'default',
    text: 'An error occurred'
  }
}`,...(ne=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var se,oe,ie;w.parameters={...w.parameters,docs:{...(se=w.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    type: 'info',
    styleVariant: 'default',
    text: 'Here is some important information'
  }
}`,...(ie=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,ce,ue;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    styleVariant: 'subdued',
    text: 'This is a warning message'
  }
}`,...(ue=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,me;S.parameters={...S.parameters,docs:{...(de=S.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    type: 'success',
    styleVariant: 'subdued',
    text: 'Operation completed successfully'
  }
}`,...(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var fe,ye,ge;A.parameters={...A.parameters,docs:{...(fe=A.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    type: 'error',
    styleVariant: 'subdued',
    text: 'An error occurred'
  }
}`,...(ge=(ye=A.parameters)==null?void 0:ye.docs)==null?void 0:ge.source}}};var xe,be,ve;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    type: 'info',
    styleVariant: 'subdued',
    text: 'Here is some important information'
  }
}`,...(ve=(be=V.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var he,we,Te;B.parameters={...B.parameters,docs:{...(he=B.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    styleVariant: 'accentBorder',
    text: 'This is a warning message'
  }
}`,...(Te=(we=B.parameters)==null?void 0:we.docs)==null?void 0:Te.source}}};var Se,Ae,Ve;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    type: 'success',
    styleVariant: 'accentBorder',
    text: 'Operation completed successfully'
  }
}`,...(Ve=(Ae=E.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};var Be,Ee,je;j.parameters={...j.parameters,docs:{...(Be=j.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    type: 'error',
    styleVariant: 'accentBorder',
    text: 'An error occurred'
  }
}`,...(je=(Ee=j.parameters)==null?void 0:Ee.docs)==null?void 0:je.source}}};var Ie,ke,Ce;I.parameters={...I.parameters,docs:{...(Ie=I.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    type: 'info',
    styleVariant: 'accentBorder',
    text: 'Here is some important information'
  }
}`,...(Ce=(ke=I.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var qe,We,Me;k.parameters={...k.parameters,docs:{...(qe=k.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    styleVariant: 'default',
    text: 'Alert without icons',
    showLeadingIcon: false,
    showTrailingIcon: false
  }
}`,...(Me=(We=k.parameters)==null?void 0:We.docs)==null?void 0:Me.source}}};var $e,De,He;C.parameters={...C.parameters,docs:{...($e=C.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    type: 'info',
    styleVariant: 'default',
    text: 'Alert without action button',
    action: false
  }
}`,...(He=(De=C.parameters)==null?void 0:De.docs)==null?void 0:He.source}}};var Le,Re,Ne;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
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
          <AlertBanner type="warning" styleVariant="default" text="Warning: This is a warning message" />
          <AlertBanner type="success" styleVariant="default" text="Success: Operation completed successfully" />
          <AlertBanner type="error" styleVariant="default" text="Error: An error occurred" />
          <AlertBanner type="info" styleVariant="default" text="Info: Here is some important information" />
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
          <AlertBanner type="warning" styleVariant="subdued" text="Warning: This is a warning message" />
          <AlertBanner type="success" styleVariant="subdued" text="Success: Operation completed successfully" />
          <AlertBanner type="error" styleVariant="subdued" text="Error: An error occurred" />
          <AlertBanner type="info" styleVariant="subdued" text="Info: Here is some important information" />
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
          <AlertBanner type="warning" styleVariant="accentBorder" text="Warning: This is a warning message" />
          <AlertBanner type="success" styleVariant="accentBorder" text="Success: Operation completed successfully" />
          <AlertBanner type="error" styleVariant="accentBorder" text="Error: An error occurred" />
          <AlertBanner type="info" styleVariant="accentBorder" text="Info: Here is some important information" />
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
}`,...(Ne=(Re=q.parameters)==null?void 0:Re.docs)==null?void 0:Ne.source}}};const Lt=["Playground","WarningDefault","SuccessDefault","ErrorDefault","InfoDefault","WarningSubdued","SuccessSubdued","ErrorSubdued","InfoSubdued","WarningAccentBorder","SuccessAccentBorder","ErrorAccentBorder","InfoAccentBorder","WithoutIcons","WithoutAction","AllVariants"];export{q as AllVariants,j as ErrorAccentBorder,h as ErrorDefault,A as ErrorSubdued,I as InfoAccentBorder,w as InfoDefault,V as InfoSubdued,x as Playground,E as SuccessAccentBorder,v as SuccessDefault,S as SuccessSubdued,B as WarningAccentBorder,b as WarningDefault,T as WarningSubdued,C as WithoutAction,k as WithoutIcons,Lt as __namedExportsOrder,Ht as default};
