import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as a,R as us}from"./index-B0WjJBI_.js";import{g as c,f as g}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as o}from"./Typography-DlcmwxwF.js";import{I as _}from"./Icon-D9wW9sG4.js";import{B as i}from"./Button-4FxjpG2D.js";import{I as z}from"./InputField-DW27YIEC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Search-3OWEky2d.js";import"./createSvgIcon-B7ekv6yR.js";import"./ExpandMore-DhGl5KfG.js";import"./Close-Bujf63ZX.js";import"./Settings-DTDGO7Gi.js";import"./Home-l5wlLBdJ.js";import"./FieldImportance-Blr2F3eN.js";import"./HelpingText-DoRwUTLu.js";const ms=c.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({$isOpen:e})=>e?1:0};
  visibility: ${({$isOpen:e})=>e?"visible":"hidden"};
  transition: ${({$disableAnimation:e,$animationDuration:s})=>e?"none":`opacity ${s||300}ms ease, visibility ${s||300}ms ease`};
`,ys=e=>{switch(e){case"small":return g`
        width: min(90vw, 25rem);
        max-height: 80vh;
      `;case"medium":return g`
        width: min(90vw, 37.5rem);
        max-height: 85vh;
      `;case"large":return g`
        width: min(95vw, 62.5rem);
        max-height: 90vh;
      `;case"fullscreen":return g`
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
        max-height: 100vh;
        border-radius: 0;
      `;default:return g``}},hs=c.div`
  background: ${({theme:e})=>e.colors.semantic.background.primary};
  border-radius: ${({theme:e,$size:s})=>s==="fullscreen"?"0":e.borderRadius.lg};
  display: flex;
  flex-direction: column;
  width: ${({$width:e,$size:s})=>s?"auto":e||"min(90vw, 37.5rem)"};
  max-width: ${({$maxWidth:e,$size:s})=>s?"none":e||"90vw"};
  height: ${({$height:e,$size:s})=>s==="fullscreen"?"100vh":e||"auto"};
  max-height: ${({$maxHeight:e,$size:s})=>s?"none":e||"90vh"};
  box-shadow: ${({theme:e})=>e.shadows.xl};
  transform: ${({$isOpen:e})=>e?"scale(1)":"scale(0.95)"};
  opacity: ${({$isOpen:e})=>e?1:0};
  transition: ${({$disableAnimation:e,$animationDuration:s})=>e?"none":`transform ${s||300}ms ease, opacity ${s||300}ms ease`};
  border: ${({$isInvalid:e,theme:s})=>e?`2px solid ${s.colors.semantic.border.error}`:"none"};
  ${({$size:e})=>ys(e)}
`,fs=c.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spacing[5]} ${e.spacing[6]}`};
  border-bottom: ${({theme:e})=>`${e.borderWidth[1]} solid ${e.colors.semantic.border.default}`};
  gap: ${({theme:e})=>e.spacing[4]};
`,gs=c.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  flex: 1;
  min-width: 0;
`,bs=c.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[10]};
  height: ${({theme:e})=>e.spacing[10]};
  padding: ${({theme:e})=>e.spacing[2]};
  background: none;
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: pointer;
  color: ${({theme:e})=>e.colors.semantic.text.primary};
  transition: background 0.2s ease;
  flex-shrink: 0;

  &:hover {
    background: ${({theme:e})=>e.colors.semantic.background.secondary};
  }

  &:active {
    background: ${({theme:e})=>e.colors.semantic.background.tertiary};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,vs=c.div`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[3]};
  overflow-y: auto;
  min-height: ${({$isEmpty:e})=>e?"auto":"10rem"};
  
  &::-webkit-scrollbar {
    width: ${({theme:e})=>e.spacing[2]};
  }

  &::-webkit-scrollbar-track {
    background: ${({theme:e})=>e.colors.semantic.background.secondary};
  }

  &::-webkit-scrollbar-thumb {
    background: ${({theme:e})=>e.colors.semantic.border.default};
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({theme:e})=>e.colors.semantic.text.secondary};
  }
`,xs=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[6]}`};
  border-top: ${({theme:e})=>`${e.borderWidth[1]} solid ${e.colors.semantic.border.default}`};
  gap: ${({theme:e})=>e.spacing[4]};
`,Ts=c.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,ws=c.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,Ss=c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  border-radius: ${({theme:e})=>e.borderRadius.lg};
`,Cs=c.div`
  width: ${({theme:e})=>e.spacing[12]};
  height: ${({theme:e})=>e.spacing[12]};
  border: ${({theme:e})=>`${e.borderWidth[4]} solid ${e.colors.semantic.border.default}`};
  border-top-color: ${({theme:e})=>e.colors.palette.primary[600]};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,js=c.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>`${e.spacing[8]} ${e.spacing[4]}`};
  text-align: center;
  color: ${({theme:e})=>e.colors.semantic.text.secondary};
  gap: ${({theme:e})=>e.spacing[2]};
`,Os=c.div`
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[4]}`};
  background: ${({theme:e})=>e.colors.semantic.border.error}10;
  border: ${({theme:e})=>`${e.borderWidth[1]} solid ${e.colors.semantic.border.error}`};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  color: ${({theme:e})=>e.colors.semantic.text.error};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  margin: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[6]}`};
`,n=a.forwardRef(({isOpen:e,onClose:s,title:r,children:d,as:p,description:W,customHeader:E,customFooter:N,customCloseButton:B,width:It,maxWidth:Rt,height:$t,maxHeight:qt,size:zt,showReset:Et=!0,resetLabel:Nt="Reset",onReset:Q,showCancel:Bt=!0,cancelLabel:Lt="Cancel",onCancel:G,showSubmit:Dt=!0,submitLabel:Ft="Submit",onSubmit:X,submitType:At="default",submitDisabled:Pt=!1,cancelDisabled:Vt=!1,resetDisabled:Wt=!1,closeOnOverlayClick:Ht=!0,closeOnEscape:J=!0,preventBodyScroll:K=!0,enableFocusTrap:Z=!0,autoFocus:ee=!0,returnFocus:te=!0,isLoading:y=!1,isInvalid:se=!1,errorMessage:oe,isEmpty:ae=!1,emptyMessage:Ut="No content available",onOpen:H,onAfterOpen:L,onAfterClose:D,onOverlayClick:U,onEscapeKeyDown:F,className:Yt,style:_t,overlayClassName:Qt,overlayStyle:Gt,headerClassName:Xt,bodyClassName:Jt,footerClassName:Kt,"aria-label":Zt,"aria-labelledby":es,"aria-describedby":ts,"aria-modal":ss=!0,role:os="dialog",animationDuration:A,disableAnimation:ie=!1,...as},h)=>{const f=a.useRef(null),Y=a.useRef(null),re=a.useId(),ne=a.useId(),is=a.useCallback(l=>{f.current=l,typeof h=="function"?h(l):h&&(h.current=l)},[h]);a.useEffect(()=>{e&&H&&H()},[e,H]),a.useEffect(()=>{if(!e||!J)return;const l=u=>{u.key==="Escape"&&(F==null||F(u),s())};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[e,J,s,F]),a.useEffect(()=>{if(!e||!K)return;const l=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=l}},[e,K]),a.useEffect(()=>{if(!e)return;if(Y.current=document.activeElement,ee&&f.current){const m=f.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')[0];m==null||m.focus()}const l=setTimeout(()=>{L==null||L()},A||300);return()=>{clearTimeout(l),te&&Y.current&&Y.current.focus(),D==null||D()}},[e,ee,te,A,L,D]),a.useEffect(()=>{if(!e||!Z||!f.current)return;const l=u=>{if(u.key!=="Tab")return;const m=f.current.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'),P=m[0],V=m[m.length-1];u.shiftKey?document.activeElement===P&&(u.preventDefault(),V==null||V.focus()):document.activeElement===V&&(u.preventDefault(),P==null||P.focus())};return document.addEventListener("keydown",l),()=>document.removeEventListener("keydown",l)},[e,Z]);const rs=l=>{l.target===l.currentTarget&&Ht&&(U==null||U(l),s())},ns=()=>{G?G():s()},ls=()=>N?typeof N=="function"?N({onClose:s,onSubmit:X,onReset:Q}):N:t.jsxs(t.Fragment,{children:[t.jsx(Ts,{children:Et&&t.jsx(i,{variant:"tertiary",size:"medium",onClick:Q,disabled:Wt||y,children:Nt})}),t.jsxs(ws,{children:[Bt&&t.jsx(i,{variant:"secondary",size:"medium",leadingIcon:t.jsx(_,{name:"Close",size:"small"}),onClick:ns,disabled:Vt||y,children:Lt}),Dt&&t.jsx(i,{variant:"primary",size:"medium",buttonType:At,leadingIcon:t.jsx(_,{name:"Check",size:"small"}),onClick:X,disabled:Pt||y,children:Ft})]})]}),ds=()=>E?typeof E=="function"?E({onClose:s}):E:t.jsxs(fs,{className:Xt,children:[t.jsxs(gs,{children:[t.jsx(o,{variant:"headingL",weight:"semibold",as:"h2",style:{margin:0},children:t.jsx("span",{id:re,children:r})}),W&&t.jsx(o,{variant:"body",as:"p",style:{margin:0},children:t.jsx("span",{id:ne,style:{color:"inherit"},children:W})})]}),B?typeof B=="function"?B({onClose:s}):B:t.jsx(bs,{onClick:s,"aria-label":"Close modal",disabled:y,children:t.jsx(_,{name:"Close",size:"medium"})})]}),cs=()=>ae?t.jsx(js,{children:t.jsx("p",{children:Ut})}):d,ps=p||"div";return t.jsx(ms,{$isOpen:e,$disableAnimation:ie,$animationDuration:A,onClick:rs,className:Qt,style:Gt,children:t.jsxs(hs,{as:ps,ref:is,$width:It,$maxWidth:Rt,$height:$t,$maxHeight:qt,$size:zt,$isOpen:e,$isInvalid:se,$disableAnimation:ie,$animationDuration:A,className:Yt,style:_t,role:os,"aria-label":Zt,"aria-labelledby":es||re,"aria-describedby":ts||(W?ne:void 0),"aria-modal":ss,...as,children:[ds(),se&&oe&&t.jsx(Os,{children:oe}),t.jsx(vs,{className:Jt,$isEmpty:ae,children:cs()}),t.jsx(xs,{className:Kt,children:ls()}),y&&t.jsx(Ss,{children:t.jsx(Cs,{})})]})})});n.displayName="Modal";n.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal should close"},title:{required:!0,tsType:{name:"ReactNode"},description:"Modal title - can be string or ReactNode for custom rendering"},children:{required:!0,tsType:{name:"ReactNode"},description:"Modal body content - supports any ReactNode"},as:{required:!1,tsType:{name:"ElementType"},description:"Polymorphic 'as' prop to render as different element"},description:{required:!1,tsType:{name:"ReactNode"},description:"Modal description/subtitle"},customHeader:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { onClose: () => void }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom header content (replaces default header)"},customFooter:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { onClose: () => void; onSubmit?: () => void; onReset?: () => void }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom footer content (replaces default footer)"},customCloseButton:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { onClose: () => void }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom close button (replaces default close button)"},width:{required:!1,tsType:{name:"string"},description:"Modal width - use CSS units (%, rem, vw) or 'auto' for intrinsic sizing"},maxWidth:{required:!1,tsType:{name:"string"},description:"Modal max-width - defaults to responsive value"},height:{required:!1,tsType:{name:"string"},description:"Modal height - use CSS units (%, rem, vh) or 'auto' for intrinsic sizing"},maxHeight:{required:!1,tsType:{name:"string"},description:"Modal max-height - defaults to responsive value"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large' | 'fullscreen'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'fullscreen'"}]},description:"Modal size preset (overrides width/height)"},showReset:{required:!1,tsType:{name:"boolean"},description:"Show reset button",defaultValue:{value:"true",computed:!1}},resetLabel:{required:!1,tsType:{name:"string"},description:"Reset button label",defaultValue:{value:"'Reset'",computed:!1}},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Reset button callback"},showCancel:{required:!1,tsType:{name:"boolean"},description:"Show cancel button",defaultValue:{value:"true",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"Cancel button label",defaultValue:{value:"'Cancel'",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Cancel button callback"},showSubmit:{required:!1,tsType:{name:"boolean"},description:"Show submit button",defaultValue:{value:"true",computed:!1}},submitLabel:{required:!1,tsType:{name:"string"},description:"Submit button label",defaultValue:{value:"'Submit'",computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Submit button callback"},submitType:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:"Submit button type",defaultValue:{value:"'default'",computed:!1}},submitDisabled:{required:!1,tsType:{name:"boolean"},description:"Disable submit button",defaultValue:{value:"false",computed:!1}},cancelDisabled:{required:!1,tsType:{name:"boolean"},description:"Disable cancel button",defaultValue:{value:"false",computed:!1}},resetDisabled:{required:!1,tsType:{name:"boolean"},description:"Disable reset button",defaultValue:{value:"false",computed:!1}},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"Close on overlay click",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Close on escape key",defaultValue:{value:"true",computed:!1}},preventBodyScroll:{required:!1,tsType:{name:"boolean"},description:"Prevent body scroll when modal is open",defaultValue:{value:"true",computed:!1}},enableFocusTrap:{required:!1,tsType:{name:"boolean"},description:"Enable focus trap (keeps focus within modal)",defaultValue:{value:"true",computed:!1}},autoFocus:{required:!1,tsType:{name:"boolean"},description:"Auto-focus first focusable element on open",defaultValue:{value:"true",computed:!1}},returnFocus:{required:!1,tsType:{name:"boolean"},description:"Return focus to trigger element on close",defaultValue:{value:"true",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state - shows loading indicator",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Invalid/error state - shows error styling",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},isEmpty:{required:!1,tsType:{name:"boolean"},description:"Empty state - shows when no content",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No content available'",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when modal opens"},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called after modal animation completes"},onAfterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called after modal closes"},onOverlayClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:"Called when overlay is clicked"},onEscapeKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: KeyboardEvent) => void",signature:{arguments:[{type:{name:"KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:"Called when escape key is pressed"},className:{required:!1,tsType:{name:"string"},description:"Custom className for modal container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for modal container"},overlayClassName:{required:!1,tsType:{name:"string"},description:"Custom className for overlay"},overlayStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for overlay"},headerClassName:{required:!1,tsType:{name:"string"},description:"Custom className for header"},bodyClassName:{required:!1,tsType:{name:"string"},description:"Custom className for body"},footerClassName:{required:!1,tsType:{name:"string"},description:"Custom className for footer"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for modal"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby (references title element)"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA describedby (references description element)"},"aria-modal":{required:!1,tsType:{name:"boolean"},description:"ARIA modal attribute",defaultValue:{value:"true",computed:!1}},role:{required:!1,tsType:{name:"string"},description:"Role attribute",defaultValue:{value:"'dialog'",computed:!1}},animationDuration:{required:!1,tsType:{name:"number"},description:"Animation duration in milliseconds"},disableAnimation:{required:!1,tsType:{name:"boolean"},description:"Disable animations",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const Ws={title:"Components/Modal",component:n,parameters:{layout:"centered",docs:{description:{component:`
A fully customizable, accessible modal dialog component that meets enterprise Component Maturity standards.

## ✨ Features

- **🎯 Fully Accessible** - ARIA attributes, keyboard navigation, focus trap, auto-focus
- **📐 Responsive** - NO hardcoded pixels, uses design tokens and relative units
- **🎨 Highly Customizable** - 50+ props, size presets, render props, multiple override points
- **⚡ State Management** - Loading, error, empty, disabled states built-in
- **🔧 forwardRef Support** - Access DOM node via ref
- **♿ Focus Management** - Focus trap, auto-focus, return focus
- **🎭 Polymorphic** - Render as different elements via \`as\` prop
- **📝 Typography Component** - Uses Lean IDS Typography for consistent text styling

## 📦 Basic Usage

\`\`\`tsx
import { Modal, Button } from '@ajaysoni7832/lean-ids-components';
import { useState } from 'react';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Your Title"
        description="Optional description"
        onSubmit={() => console.log('Submit')}
      >
        {/* Your modal content */}
      </Modal>
    </>
  );
}
\`\`\`

> **Note:** Modal uses the Lean IDS Typography component internally for title and description, ensuring consistent text styling across the design system.

## 🎯 Size Presets

Use size presets for common modal sizes:

\`\`\`tsx
<Modal size="small">Quick message</Modal>
<Modal size="medium">Default size</Modal>
<Modal size="large">Complex form</Modal>
<Modal size="fullscreen">Full screen view</Modal>
\`\`\`

## 🔄 States

\`\`\`tsx
// Loading state
<Modal isLoading={true}>Processing...</Modal>

// Error state
<Modal isInvalid={true} errorMessage="Please fix errors">
  <Form />
</Modal>

// Empty state
<Modal isEmpty={true} emptyMessage="No data available" />
\`\`\`

## 🎨 Customization

\`\`\`tsx
// Custom footer with render prop
<Modal
  customFooter={({ onClose, onSubmit }) => (
    <Button onClick={onSubmit}>Custom Action</Button>
  )}
/>

// Custom header
<Modal
  customHeader={({ onClose }) => <CustomHeader />}
/>

// Multiple className overrides
<Modal
  className="custom-modal"
  overlayClassName="custom-overlay"
  headerClassName="custom-header"
  bodyClassName="custom-body"
  footerClassName="custom-footer"
/>
\`\`\`

## ♿ Accessibility

- Automatic ARIA attributes (\`role\`, \`aria-modal\`, \`aria-labelledby\`)
- Keyboard navigation (Escape to close, Tab for focus trap)
- Focus management (auto-focus, return focus)
- Screen reader support

## 📐 Responsive Sizing

\`\`\`tsx
// Use CSS units (NOT pixels)
<Modal width="50rem" maxWidth="90vw" height="auto" maxHeight="85vh" />

// Or use size presets
<Modal size="large" />
\`\`\`

## 🔧 Advanced Features

- **forwardRef**: Access DOM node via ref
- **Polymorphism**: Render as different element via \`as\` prop
- **Event Lifecycle**: \`onOpen\`, \`onAfterOpen\`, \`onAfterClose\`
- **Behavior Control**: \`preventBodyScroll\`, \`enableFocusTrap\`, \`autoFocus\`
- **Animation Control**: \`animationDuration\`, \`disableAnimation\`
- **Typography Integration**: Uses Lean IDS Typography component for consistent text styling

## 📝 Typography Usage

Modal uses Typography component internally for title and description. You can also use it in your content:

\`\`\`tsx
import { Typography } from '@ajaysoni7832/lean-ids-components';

<Modal title="My Modal">
  <Typography variant="headingM" weight="semibold">Section Title</Typography>
  <Typography variant="body">Body text with consistent styling</Typography>
  <Typography variant="caption">Small caption text</Typography>
</Modal>
\`\`\`
        `}}},tags:["autodocs"]},b={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"Open Modal"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Popup Example",description:"This is a modal popup with header, body, and footer sections.",onSubmit:()=>console.log("Submit clicked"),onReset:()=>console.log("Reset clicked"),children:t.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(o,{variant:"headingM",weight:"semibold",children:"Modal Body Content"}),t.jsx(o,{variant:"body",children:"This is the body content of the modal. You can put any content here."}),t.jsx(o,{variant:"body",weight:"medium",children:"The modal includes:"}),t.jsxs("div",{style:{paddingLeft:"20px"},children:[t.jsx(o,{variant:"body",children:"• Header with title and description"}),t.jsx(o,{variant:"body",children:"• Close button"}),t.jsx(o,{variant:"body",children:"• Scrollable body"}),t.jsx(o,{variant:"body",children:"• Footer with Reset, Cancel, and Submit buttons"})]})]})})]})}},v={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"Edit Profile"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Edit Profile",description:"Update your profile information",submitLabel:"Save Changes",onSubmit:()=>console.log("Form submitted"),children:t.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(z,{label:"Name",placeholder:"Enter your name",type:"text",size:"default"}),t.jsx(z,{label:"Email",placeholder:"Enter your email",type:"email",size:"default"}),t.jsx(z,{label:"Bio",placeholder:"Tell us about yourself",type:"text",size:"default"})]})})]})}},x={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"Confirm Action"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Confirm Action",description:"Are you sure you want to proceed?",showReset:!1,cancelLabel:"No, Cancel",submitLabel:"Yes, Proceed",onSubmit:()=>console.log("Confirmed"),children:t.jsx("div",{style:{padding:"20px"},children:t.jsx(o,{variant:"body",children:"This action cannot be undone. Please confirm that you want to continue."})})})]})}},T={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),buttonType:"alert",children:"Delete Item"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Delete Item",description:"This action is permanent",showReset:!1,submitLabel:"Delete",submitType:"alert",onSubmit:()=>console.log("Deleted"),children:t.jsx("div",{style:{padding:"20px"},children:t.jsx(o,{variant:"body",children:"Are you sure you want to delete this item? This action cannot be undone."})})})]})}},w={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"Open Custom Footer Modal"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Custom Footer",description:"Modal with custom footer content",customFooter:t.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%",gap:"12px"},children:[t.jsx(i,{variant:"tertiary",size:"medium",children:"Skip"}),t.jsx(i,{variant:"secondary",size:"medium",children:"Back"}),t.jsx(i,{variant:"primary",size:"medium",children:"Next"})]}),children:t.jsx("div",{style:{padding:"20px"},children:t.jsx(o,{variant:"body",children:"This modal has a custom footer with different buttons."})})})]})}},S={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"View Terms"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Terms and Conditions",description:"Please read and accept our terms",submitLabel:"Accept",size:"large",children:t.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(o,{variant:"headingM",weight:"semibold",children:"Terms of Service"}),[...Array(20)].map((r,d)=>t.jsx(o,{variant:"body",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},d))]})})]})}},C={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"Show Note"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Quick Note",size:"small",showReset:!1,submitLabel:"Got it",children:t.jsx("div",{style:{padding:"20px"},children:t.jsx(o,{variant:"body",children:"This is a smaller modal for quick messages."})})})]})}},j={render:()=>{const[e,s]=a.useState(!1),[r,d]=a.useState(!1),p=()=>{d(!0),setTimeout(()=>{d(!1),s(!1)},3e3)};return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"Process Data"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Processing Request",description:"Please wait while we process your data",isLoading:r,onSubmit:p,submitLabel:"Start Processing",children:t.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(o,{variant:"body",children:'Click "Start Processing" to see the loading state.'}),t.jsx(o,{variant:"body",children:"All buttons will be disabled during processing."})]})})]})}},O={render:()=>{const[e,s]=a.useState(!1),[r,d]=a.useState(!1),p=()=>{d(!0)};return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"Submit Form"}),t.jsx(n,{isOpen:e,onClose:()=>{s(!1),d(!1)},title:"User Registration",description:"Please fill out all required fields",isInvalid:r,errorMessage:"Please correct the errors below before submitting",onSubmit:p,children:t.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(z,{label:"Email",placeholder:"Enter your email",type:"email",error:r,helperText:r?"Valid email is required":""}),t.jsx(z,{label:"Password",placeholder:"Enter password",type:"password",error:r,helperText:r?"Password must be at least 8 characters":""})]})})]})}},M={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"View Notifications"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Notifications",description:"Your notification center",isEmpty:!0,emptyMessage:"No notifications at this time",showSubmit:!1,showReset:!1,children:t.jsx("div",{})})]})}},k={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"Open Fullscreen"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Fullscreen Experience",description:"This modal takes up the entire viewport",size:"fullscreen",showReset:!1,children:t.jsxs("div",{style:{padding:"20px",height:"100%",display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsx(o,{variant:"headingM",weight:"semibold",children:"Fullscreen Content"}),t.jsx(o,{variant:"body",children:'This modal uses size="fullscreen" to take up the entire viewport.'}),t.jsx(o,{variant:"body",children:"Perfect for immersive experiences, image galleries, or detailed views."}),t.jsx("div",{style:{flex:1,background:"#f5f5f5",borderRadius:"8px",padding:"20px"},children:t.jsx(o,{variant:"body",children:"Content area that fills available space"})})]})})]})}},I={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"Custom Size"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Custom Dimensions",description:"Modal with custom width and height",width:"50rem",maxWidth:"90vw",height:"auto",maxHeight:"80vh",showReset:!1,children:t.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(o,{variant:"body",children:"This modal uses custom dimensions:"}),t.jsxs("div",{style:{paddingLeft:"20px"},children:[t.jsx(o,{variant:"body",children:"• width: 50rem"}),t.jsx(o,{variant:"body",children:"• maxWidth: 90vw"}),t.jsx(o,{variant:"body",children:"• height: auto"}),t.jsx(o,{variant:"body",children:"• maxHeight: 80vh"})]}),t.jsx(o,{variant:"body",children:"All values use CSS units for responsive behavior."})]})})]})}},R={render:()=>{const[e,s]=a.useState(!1),[r,d]=a.useState(1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"Start Wizard"}),t.jsx(n,{isOpen:e,onClose:()=>{s(!1),d(1)},title:`Step ${r} of 3`,description:"Multi-step wizard with custom footer",customFooter:({onClose:p})=>t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[t.jsx(i,{variant:"tertiary",size:"medium",onClick:p,children:"Cancel"}),t.jsxs("div",{style:{display:"flex",gap:"12px"},children:[r>1&&t.jsx(i,{variant:"secondary",size:"medium",onClick:()=>d(r-1),children:"Previous"}),r<3?t.jsx(i,{variant:"primary",size:"medium",onClick:()=>d(r+1),children:"Next"}):t.jsx(i,{variant:"primary",size:"medium",onClick:()=>{console.log("Wizard completed"),p(),d(1)},children:"Finish"})]})]}),children:t.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs(o,{variant:"headingM",weight:"semibold",children:["Step ",r]}),t.jsxs(o,{variant:"body",children:["This is the content for step ",r,"."]}),t.jsx(o,{variant:"body",children:"The footer uses a render prop to access onClose and implement custom navigation."})]})})]})}},$={render:()=>{const[e,s]=a.useState(!1),r=us.useRef(null),d=()=>{s(!0),setTimeout(()=>{r.current&&(console.log("Modal DOM node:",r.current),console.log("Modal dimensions:",{width:r.current.offsetWidth,height:r.current.offsetHeight}))},100)};return t.jsxs("div",{children:[t.jsx(i,{onClick:d,children:"Open with Ref"}),t.jsx(n,{ref:r,isOpen:e,onClose:()=>s(!1),title:"Modal with Ref",description:"Check console for DOM node access",showReset:!1,children:t.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(o,{variant:"body",children:"This modal uses forwardRef to expose the DOM node."}),t.jsx(o,{variant:"body",children:"Open the console to see the logged modal element and dimensions."})]})})]})}},q={render:()=>{const[e,s]=a.useState(!1);return t.jsxs("div",{children:[t.jsx(i,{onClick:()=>s(!0),children:"View Article"}),t.jsx(n,{isOpen:e,onClose:()=>s(!1),title:"Typography in Modal",description:"Modal content using Lean IDS Typography component",size:"medium",showReset:!1,showSubmit:!1,children:t.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(o,{variant:"headingM",weight:"semibold",children:"Using Typography Component"}),t.jsx(o,{variant:"body",children:"The Modal component uses the Lean IDS Typography component internally for the title and description. You can also use Typography within your modal content for consistent text styling."}),t.jsx(o,{variant:"headingS",weight:"medium",children:"Benefits"}),t.jsx(o,{variant:"body",children:"• Consistent typography across all components"}),t.jsx(o,{variant:"body",children:"• Automatic design token synchronization"}),t.jsx(o,{variant:"body",children:"• No custom styled text components needed"}),t.jsx(o,{variant:"body",children:"• Semantic HTML with proper heading hierarchy"}),t.jsx(o,{variant:"caption",style:{marginTop:"8px"},children:"Note: Typography component supports variants like displayL, headingXL, headingL, headingM, headingS, body, paragraph, caption, and code."})]})})]})}};var le,de,ce,pe,ue;b.parameters={...b.parameters,docs:{...(le=b.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Popup Example" description="This is a modal popup with header, body, and footer sections." onSubmit={() => console.log('Submit clicked')} onReset={() => console.log('Reset clicked')}>
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="headingM" weight="semibold">Modal Body Content</Typography>
            <Typography variant="body">This is the body content of the modal. You can put any content here.</Typography>
            <Typography variant="body" weight="medium">The modal includes:</Typography>
            <div style={{
            paddingLeft: '20px'
          }}>
              <Typography variant="body">• Header with title and description</Typography>
              <Typography variant="body">• Close button</Typography>
              <Typography variant="body">• Scrollable body</Typography>
              <Typography variant="body">• Footer with Reset, Cancel, and Submit buttons</Typography>
            </div>
          </div>
        </Modal>
      </div>;
  }
}`,...(ce=(de=b.parameters)==null?void 0:de.docs)==null?void 0:ce.source},description:{story:`Default modal with all standard features.
Shows how to manage modal state with useState and handle open/close actions.`,...(ue=(pe=b.parameters)==null?void 0:pe.docs)==null?void 0:ue.description}}};var me,ye,he,fe,ge;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Edit Profile</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Edit Profile" description="Update your profile information" submitLabel="Save Changes" onSubmit={() => console.log('Form submitted')}>
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <InputField label="Name" placeholder="Enter your name" type="text" size="default" />
            <InputField label="Email" placeholder="Enter your email" type="email" size="default" />
            <InputField label="Bio" placeholder="Tell us about yourself" type="text" size="default" />
          </div>
        </Modal>
      </div>;
  }
}`,...(he=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:he.source},description:{story:`Modal with form content.
Demonstrates using InputField components inside a modal for form submissions.`,...(ge=(fe=v.parameters)==null?void 0:fe.docs)==null?void 0:ge.description}}};var be,ve,xe,Te,we;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Confirm Action</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirm Action" description="Are you sure you want to proceed?" showReset={false} cancelLabel="No, Cancel" submitLabel="Yes, Proceed" onSubmit={() => console.log('Confirmed')}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">This action cannot be undone. Please confirm that you want to continue.</Typography>
          </div>
        </Modal>
      </div>;
  }
}`,...(xe=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:xe.source},description:{story:`Modal without reset button.
Use showReset={false} to hide the reset button for confirmation dialogs.`,...(we=(Te=x.parameters)==null?void 0:Te.docs)==null?void 0:we.description}}};var Se,Ce,je,Oe,Me;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)} buttonType="alert">Delete Item</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Delete Item" description="This action is permanent" showReset={false} submitLabel="Delete" submitType="alert" onSubmit={() => console.log('Deleted')}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">Are you sure you want to delete this item? This action cannot be undone.</Typography>
          </div>
        </Modal>
      </div>;
  }
}`,...(je=(Ce=T.parameters)==null?void 0:Ce.docs)==null?void 0:je.source},description:{story:`Modal with warning submit button.
Use submitType="alert" for destructive actions like deletes.`,...(Me=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:Me.description}}};var ke,Ie,Re,$e,qe;w.parameters={...w.parameters,docs:{...(ke=w.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Open Custom Footer Modal</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Custom Footer" description="Modal with custom footer content" customFooter={<div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        gap: '12px'
      }}>
              <Button variant="tertiary" size="medium">
                Skip
              </Button>
              <Button variant="secondary" size="medium">
                Back
              </Button>
              <Button variant="primary" size="medium">
                Next
              </Button>
            </div>}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">This modal has a custom footer with different buttons.</Typography>
          </div>
        </Modal>
      </div>;
  }
}`,...(Re=(Ie=w.parameters)==null?void 0:Ie.docs)==null?void 0:Re.source},description:{story:`Modal with custom footer.
Use customFooter prop to replace default buttons with custom actions.`,...(qe=($e=w.parameters)==null?void 0:$e.docs)==null?void 0:qe.description}}};var ze,Ee,Ne,Be,Le;S.parameters={...S.parameters,docs:{...(ze=S.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>View Terms</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Terms and Conditions" description="Please read and accept our terms" submitLabel="Accept" size="large">
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="headingM" weight="semibold">Terms of Service</Typography>
            {[...Array(20)].map((_, i) => <Typography key={i} variant="body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>)}
          </div>
        </Modal>
      </div>;
  }
}`,...(Ne=(Ee=S.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source},description:{story:`Large modal with scrollable content.
Use size="large" for modals with extensive content.`,...(Le=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:Le.description}}};var De,Fe,Ae,Pe,Ve;C.parameters={...C.parameters,docs:{...(De=C.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Show Note</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Quick Note" size="small" showReset={false} submitLabel="Got it">
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">This is a smaller modal for quick messages.</Typography>
          </div>
        </Modal>
      </div>;
  }
}`,...(Ae=(Fe=C.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source},description:{story:`Small modal using size preset.
Use size="small" for quick messages and notifications.`,...(Ve=(Pe=C.parameters)==null?void 0:Pe.docs)==null?void 0:Ve.description}}};var We,He,Ue,Ye,_e;j.parameters={...j.parameters,docs:{...(We=j.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = () => {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsOpen(false);
      }, 3000);
    };
    return <div>
        <Button onClick={() => setIsOpen(true)}>Process Data</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Processing Request" description="Please wait while we process your data" isLoading={isLoading} onSubmit={handleSubmit} submitLabel="Start Processing">
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="body">Click "Start Processing" to see the loading state.</Typography>
            <Typography variant="body">All buttons will be disabled during processing.</Typography>
          </div>
        </Modal>
      </div>;
  }
}`,...(Ue=(He=j.parameters)==null?void 0:He.docs)==null?void 0:Ue.source},description:{story:`Loading state modal.
Shows loading overlay with spinner and disables all buttons.`,...(_e=(Ye=j.parameters)==null?void 0:Ye.docs)==null?void 0:_e.description}}};var Qe,Ge,Xe,Je,Ke;O.parameters={...O.parameters,docs:{...(Qe=O.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasError, setHasError] = useState(false);
    const handleSubmit = () => {
      setHasError(true);
    };
    return <div>
        <Button onClick={() => setIsOpen(true)}>Submit Form</Button>
        <Modal isOpen={isOpen} onClose={() => {
        setIsOpen(false);
        setHasError(false);
      }} title="User Registration" description="Please fill out all required fields" isInvalid={hasError} errorMessage="Please correct the errors below before submitting" onSubmit={handleSubmit}>
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <InputField label="Email" placeholder="Enter your email" type="email" error={hasError} helperText={hasError ? "Valid email is required" : ""} />
            <InputField label="Password" placeholder="Enter password" type="password" error={hasError} helperText={hasError ? "Password must be at least 8 characters" : ""} />
          </div>
        </Modal>
      </div>;
  }
}`,...(Xe=(Ge=O.parameters)==null?void 0:Ge.docs)==null?void 0:Xe.source},description:{story:`Error state modal.
Shows error border and error message when validation fails.`,...(Ke=(Je=O.parameters)==null?void 0:Je.docs)==null?void 0:Ke.description}}};var Ze,et,tt,st,ot;M.parameters={...M.parameters,docs:{...(Ze=M.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>View Notifications</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Notifications" description="Your notification center" isEmpty={true} emptyMessage="No notifications at this time" showSubmit={false} showReset={false}>
          <div />
        </Modal>
      </div>;
  }
}`,...(tt=(et=M.parameters)==null?void 0:et.docs)==null?void 0:tt.source},description:{story:`Empty state modal.
Shows empty state message when no content is available.`,...(ot=(st=M.parameters)==null?void 0:st.docs)==null?void 0:ot.description}}};var at,it,rt,nt,lt;k.parameters={...k.parameters,docs:{...(at=k.parameters)==null?void 0:at.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Open Fullscreen</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Fullscreen Experience" description="This modal takes up the entire viewport" size="fullscreen" showReset={false}>
          <div style={{
          padding: '20px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>
            <Typography variant="headingM" weight="semibold">Fullscreen Content</Typography>
            <Typography variant="body">This modal uses size="fullscreen" to take up the entire viewport.</Typography>
            <Typography variant="body">Perfect for immersive experiences, image galleries, or detailed views.</Typography>
            <div style={{
            flex: 1,
            background: '#f5f5f5',
            borderRadius: '8px',
            padding: '20px'
          }}>
              <Typography variant="body">Content area that fills available space</Typography>
            </div>
          </div>
        </Modal>
      </div>;
  }
}`,...(rt=(it=k.parameters)==null?void 0:it.docs)==null?void 0:rt.source},description:{story:`Fullscreen modal.
Use size="fullscreen" for immersive experiences.`,...(lt=(nt=k.parameters)==null?void 0:nt.docs)==null?void 0:lt.description}}};var dt,ct,pt,ut,mt;I.parameters={...I.parameters,docs:{...(dt=I.parameters)==null?void 0:dt.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Custom Size</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Custom Dimensions" description="Modal with custom width and height" width="50rem" maxWidth="90vw" height="auto" maxHeight="80vh" showReset={false}>
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="body">This modal uses custom dimensions:</Typography>
            <div style={{
            paddingLeft: '20px'
          }}>
              <Typography variant="body">• width: 50rem</Typography>
              <Typography variant="body">• maxWidth: 90vw</Typography>
              <Typography variant="body">• height: auto</Typography>
              <Typography variant="body">• maxHeight: 80vh</Typography>
            </div>
            <Typography variant="body">All values use CSS units for responsive behavior.</Typography>
          </div>
        </Modal>
      </div>;
  }
}`,...(pt=(ct=I.parameters)==null?void 0:ct.docs)==null?void 0:pt.source},description:{story:`Custom dimensions with CSS units.
Use width, maxWidth, height, maxHeight with CSS units for precise control.`,...(mt=(ut=I.parameters)==null?void 0:ut.docs)==null?void 0:mt.description}}};var yt,ht,ft,gt,bt;R.parameters={...R.parameters,docs:{...(yt=R.parameters)==null?void 0:yt.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState(1);
    return <div>
        <Button onClick={() => setIsOpen(true)}>Start Wizard</Button>
        <Modal isOpen={isOpen} onClose={() => {
        setIsOpen(false);
        setStep(1);
      }} title={\`Step \${step} of 3\`} description="Multi-step wizard with custom footer" customFooter={({
        onClose
      }) => <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%'
      }}>
              <Button variant="tertiary" size="medium" onClick={onClose}>
                Cancel
              </Button>
              <div style={{
          display: 'flex',
          gap: '12px'
        }}>
                {step > 1 && <Button variant="secondary" size="medium" onClick={() => setStep(step - 1)}>
                    Previous
                  </Button>}
                {step < 3 ? <Button variant="primary" size="medium" onClick={() => setStep(step + 1)}>
                    Next
                  </Button> : <Button variant="primary" size="medium" onClick={() => {
            console.log('Wizard completed');
            onClose();
            setStep(1);
          }}>
                    Finish
                  </Button>}
              </div>
            </div>}>
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="headingM" weight="semibold">Step {step}</Typography>
            <Typography variant="body">This is the content for step {step}.</Typography>
            <Typography variant="body">The footer uses a render prop to access onClose and implement custom navigation.</Typography>
          </div>
        </Modal>
      </div>;
  }
}`,...(ft=(ht=R.parameters)==null?void 0:ht.docs)==null?void 0:ft.source},description:{story:`Render props for custom footer.
Use customFooter as a function to access modal callbacks.`,...(bt=(gt=R.parameters)==null?void 0:gt.docs)==null?void 0:bt.description}}};var vt,xt,Tt,wt,St;$.parameters={...$.parameters,docs:{...(vt=$.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const modalRef = React.useRef<HTMLDivElement>(null);
    const handleOpen = () => {
      setIsOpen(true);
      setTimeout(() => {
        if (modalRef.current) {
          console.log('Modal DOM node:', modalRef.current);
          console.log('Modal dimensions:', {
            width: modalRef.current.offsetWidth,
            height: modalRef.current.offsetHeight
          });
        }
      }, 100);
    };
    return <div>
        <Button onClick={handleOpen}>Open with Ref</Button>
        <Modal ref={modalRef} isOpen={isOpen} onClose={() => setIsOpen(false)} title="Modal with Ref" description="Check console for DOM node access" showReset={false}>
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="body">This modal uses forwardRef to expose the DOM node.</Typography>
            <Typography variant="body">Open the console to see the logged modal element and dimensions.</Typography>
          </div>
        </Modal>
      </div>;
  }
}`,...(Tt=(xt=$.parameters)==null?void 0:xt.docs)==null?void 0:Tt.source},description:{story:`Modal with ref access.
Use forwardRef to access the modal DOM node.`,...(St=(wt=$.parameters)==null?void 0:wt.docs)==null?void 0:St.description}}};var Ct,jt,Ot,Mt,kt;q.parameters={...q.parameters,docs:{...(Ct=q.parameters)==null?void 0:Ct.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <div>
        <Button onClick={() => setIsOpen(true)}>View Article</Button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Typography in Modal" description="Modal content using Lean IDS Typography component" size="medium" showReset={false} showSubmit={false}>
          <div style={{
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px'
        }}>
            <Typography variant="headingM" weight="semibold">
              Using Typography Component
            </Typography>
            
            <Typography variant="body">
              The Modal component uses the Lean IDS Typography component internally for the title and description.
              You can also use Typography within your modal content for consistent text styling.
            </Typography>

            <Typography variant="headingS" weight="medium">
              Benefits
            </Typography>

            <Typography variant="body">
              • Consistent typography across all components
            </Typography>
            <Typography variant="body">
              • Automatic design token synchronization
            </Typography>
            <Typography variant="body">
              • No custom styled text components needed
            </Typography>
            <Typography variant="body">
              • Semantic HTML with proper heading hierarchy
            </Typography>

            <Typography variant="caption" style={{
            marginTop: '8px'
          }}>
              Note: Typography component supports variants like displayL, headingXL, headingL, headingM, 
              headingS, body, paragraph, caption, and code.
            </Typography>
          </div>
        </Modal>
      </div>;
  }
}`,...(Ot=(jt=q.parameters)==null?void 0:jt.docs)==null?void 0:Ot.source},description:{story:`Modal with Typography component usage.
Shows how to use Typography component for rich text formatting within modal content.`,...(kt=(Mt=q.parameters)==null?void 0:Mt.docs)==null?void 0:kt.description}}};const Hs=["Default","WithForm","NoReset","WarningAction","CustomFooter","ScrollableContent","SmallModal","LoadingState","ErrorState","EmptyState","FullscreenModal","CustomDimensions","RenderPropsFooter","WithRef","WithTypography"];export{I as CustomDimensions,w as CustomFooter,b as Default,M as EmptyState,O as ErrorState,k as FullscreenModal,j as LoadingState,x as NoReset,R as RenderPropsFooter,S as ScrollableContent,C as SmallModal,T as WarningAction,v as WithForm,$ as WithRef,q as WithTypography,Hs as __namedExportsOrder,Ws as default};
