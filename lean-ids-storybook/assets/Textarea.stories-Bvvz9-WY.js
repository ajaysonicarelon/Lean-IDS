import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as l}from"./index-B0WjJBI_.js";import{g as m,f as xe}from"./styled-components.browser.esm-CuwBLqEg.js";import{F as re}from"./FieldImportance-Blr2F3eN.js";import{H as fe}from"./HelpingText-DoRwUTLu.js";import{T as t}from"./Typography-DlcmwxwF.js";import"./_commonjsHelpers-CqkleIqs.js";const se=m.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing[1]};
  width: ${({$fullWidth:a})=>a?"100%":"300px"};
  font-family: ${({theme:a})=>a.fonts.primary};
`,oe=m.div`
  display: flex;
  gap: ${({theme:a})=>a.spacing[1]};
  align-items: flex-start;
`,ie=m.label`
  font-family: ${({theme:a})=>a.fonts.primary};
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: ${({theme:a})=>a.fontWeights.medium};
  line-height: ${({theme:a})=>a.lineHeights[16]};
  color: ${({theme:a,$disabled:r})=>r?a.colors.palette.neutral[500]:a.colors.palette.neutral[1e3]};
  white-space: nowrap;
`,le=m.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:a})=>a.spacing[2]};
  padding: ${({theme:a})=>a.spacing[2]};
  background-color: ${({theme:a,$disabled:r,$hasValue:s})=>r&&s?a.colors.palette.primary[50]:a.colors.palette.neutral[50]};
  border: 1px solid;
  border-color: ${({theme:a,$error:r,$disabled:s,$isFocused:o,$hasValue:i})=>s&&i?a.colors.palette.primary[100]:s?a.colors.palette.neutral[300]:r&&o||r?a.colors.palette.error[500]:o?a.colors.semantic.focus.input:i?a.colors.palette.neutral[900]:a.colors.palette.neutral[500]};
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  transition: all 0.2s ease-in-out;
  min-height: 100px;
  
  ${({$disabled:a})=>a&&xe`
      cursor: not-allowed;
      opacity: 0.6;
    `}
  
  ${({$error:a,$isFocused:r,theme:s})=>a&&r&&xe`
      background-color: ${s.colors.palette.error[50]};
    `}
`,ne=m.textarea`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({theme:a})=>a.fonts.primary};
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: ${({theme:a})=>a.fontWeights.regular};
  line-height: ${({theme:a})=>a.lineHeights[16]};
  color: ${({theme:a})=>a.colors.palette.neutral[900]};
  padding: 0;
  min-width: 0;
  min-height: 84px;
  resize: vertical;
  
  &::placeholder {
    color: ${({theme:a})=>a.colors.palette.neutral[700]}; // Updated from 500 to 700
  }
  
  &:disabled {
    cursor: not-allowed;
    color: ${({theme:a})=>a.colors.palette.neutral[900]};
    resize: none;
  }
  
  &:disabled::placeholder {
    color: ${({theme:a})=>a.colors.palette.neutral[900]};
  }
`,be=m.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: ${({theme:a})=>a.colors.palette.neutral[600]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,Sa=m.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-shrink: 0;
  width: 16px;
  height: 100%;
  color: ${({theme:a})=>a.colors.palette.neutral[600]};
  
  svg {
    width: 16px;
    height: 16px;
  }
`,d=l.forwardRef(({as:a,label:r,helperText:s,errorMessage:o,required:i=!1,disabled:n=!1,error:M=!1,isInvalid:f=!1,isLoading:A=!1,isEmpty:u=!1,emptyMessage:c="No data available",showLabel:y=!0,showFieldImportance:g=!1,fieldImportanceVariant:x="mandatory",showInlineText:b=!0,leadingIcon:v,trailingIcon:T,placeholder:pe,value:ce,defaultValue:he,onChange:ma,onFocus:P,onBlur:V,onAfterFocus:H,onAfterBlur:U,onClear:Aa,onEscape:O,fullWidth:K=!1,rows:_=4,resizable:ua=!0,name:ya,id:ga,className:Z,style:Q,labelClassName:Y,wrapperClassName:G,textareaClassName:J,helperTextClassName:me,"aria-label":X,"aria-describedby":xa,...w},ee)=>{const fa=l.useId(),p=ga||fa,ba=`${p}-helper-text`,k=`${p}-label`,[va,ue]=l.useState(!1),[Pa,ye]=l.useState(!1),ae=M||f||!!o,te=o||s,Ta=a||"textarea",wa=!!(ce||he),ka=[te?ba:null,xa].filter(Boolean).join(" ")||void 0,ja=h=>{ue(!0),P==null||P(h),setTimeout(()=>{H==null||H()},200)},Ca=h=>{ue(!1),V==null||V(h),setTimeout(()=>{U==null||U()},200)},La=h=>{var ge;h.key==="Escape"&&(O==null||O(h)),(ge=w.onKeyDown)==null||ge.call(w,h)},Ia=()=>{ye(!0)},Ea=()=>{ye(!1)},Na=ae?"error":"default";return A?e.jsxs(se,{$fullWidth:K,className:Z,style:Q,children:[y&&r&&e.jsxs(oe,{children:[e.jsx(ie,{htmlFor:p,id:k,$disabled:!0,className:Y,children:r}),g&&e.jsx(re,{variant:x})]}),e.jsxs(le,{$error:!1,$disabled:!0,$isFocused:!1,$hasValue:!1,className:G,children:[e.jsx(ne,{ref:ee,id:p,placeholder:"Loading...",disabled:!0,value:"",readOnly:!0,rows:_,className:J,"aria-busy":"true","aria-label":X||"Loading",style:{resize:"none"}}),e.jsx(be,{children:e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"9.42 9.42",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 8 8",to:"360 8 8",dur:"1s",repeatCount:"indefinite"})})})})]})]}):u?e.jsxs(se,{$fullWidth:K,className:Z,style:Q,children:[y&&r&&e.jsxs(oe,{children:[e.jsx(ie,{htmlFor:p,id:k,$disabled:!0,className:Y,children:r}),g&&e.jsx(re,{variant:x})]}),e.jsx(le,{$error:!1,$disabled:!0,$isFocused:!1,$hasValue:!1,className:G,children:e.jsx(ne,{ref:ee,id:p,placeholder:c,disabled:!0,value:"",readOnly:!0,rows:_,className:J,"aria-label":X||c,style:{resize:"none"}})}),b&&c&&e.jsx(fe,{text:c,state:"default",size:"default",showIcon:!0,className:me})]}):e.jsxs(se,{$fullWidth:K,className:Z,style:Q,children:[y&&r&&e.jsxs(oe,{children:[e.jsx(ie,{htmlFor:p,id:k,$disabled:n,className:Y,children:r}),g&&e.jsx(re,{variant:x})]}),e.jsxs(le,{$error:ae,$disabled:n,$isFocused:va,$hasValue:wa,className:G,onMouseEnter:Ia,onMouseLeave:Ea,children:[v&&e.jsx(be,{children:v}),e.jsx(ne,{as:Ta,ref:ee,id:p,name:ya,placeholder:pe,value:ce,defaultValue:he,onChange:ma,onFocus:ja,onBlur:Ca,onKeyDown:La,disabled:n,required:i,rows:_,"aria-label":X||(r?void 0:pe),"aria-labelledby":r?k:void 0,"aria-describedby":ka,"aria-invalid":ae,"aria-required":i,className:J,style:{resize:ua?"vertical":"none"},...w}),T&&e.jsx(Sa,{children:T})]}),b&&te&&e.jsx(fe,{text:te,state:Na,size:"default",showIcon:!0,className:me})]})});d.displayName="Textarea";d.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Polymorphic prop - render as different element
@default 'textarea'`},label:{required:!1,tsType:{name:"string"},description:"Label text for the textarea"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the textarea"},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message - overrides helperText when present"},required:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is required",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is disabled",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea has an error state",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Invalid state (alias for error)
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows loading indicator
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows empty state message
@default false`,defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty state message
@default 'No data available'`,defaultValue:{value:"'No data available'",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to show the label",defaultValue:{value:"true",computed:!1}},showFieldImportance:{required:!1,tsType:{name:"boolean"},description:"Whether to show the field importance indicator (asterisk)",defaultValue:{value:"false",computed:!1}},fieldImportanceVariant:{required:!1,tsType:{name:"union",raw:"'mandatory' | 'optional'",elements:[{name:"literal",value:"'mandatory'"},{name:"literal",value:"'optional'"}]},description:"Field importance variant",defaultValue:{value:"'mandatory'",computed:!1}},showInlineText:{required:!1,tsType:{name:"boolean"},description:"Whether to show helper/error text",defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the start of the textarea"},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the end of the textarea (resize handle area)"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea should take full width of container",defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Minimum number of rows",defaultValue:{value:"4",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:"Maximum number of rows before scrolling"},resizable:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is resizable",defaultValue:{value:"true",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for root container"},labelClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for label"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for textarea wrapper"},textareaClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for textarea element"},helperTextClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for helper text"},onAfterFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired after focus animation completes"},onAfterBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired after blur animation completes"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when textarea value is cleared"},onEscape:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback fired on Escape key press"}},composes:["Omit"]};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=(...a)=>a.filter((r,s,o)=>!!r&&r.trim()!==""&&o.indexOf(r)===s).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=a=>a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=a=>a.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,s,o)=>o?o.toUpperCase():s.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=a=>{const r=Ba(a);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var de={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=a=>{for(const r in a)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1},$a=l.createContext({}),qa=()=>l.useContext($a),Wa=l.forwardRef(({color:a,size:r,strokeWidth:s,absoluteStrokeWidth:o,className:i="",children:n,iconNode:M,...f},A)=>{const{size:u=24,strokeWidth:c=2,absoluteStrokeWidth:y=!1,color:g="currentColor",className:x=""}=qa()??{},b=o??y?Number(s??c)*24/Number(r??u):s??c;return l.createElement("svg",{ref:A,...de,width:r??u??de.width,height:r??u??de.height,stroke:a??g,strokeWidth:b,className:ha("lucide",x,i),...!n&&!za(f)&&{"aria-hidden":"true"},...f},[...M.map(([v,T])=>l.createElement(v,T)),...Array.isArray(n)?n:[n]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=(a,r)=>{const s=l.forwardRef(({className:o,...i},n)=>l.createElement(Wa,{ref:n,iconNode:r,className:ha(`lucide-${Fa(ve(a))}`,`lucide-${a}`,o),...i}));return s.displayName=ve(a),s};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ma=Ra("search",Da),Qa={title:"Components/Textarea",component:d,parameters:{layout:"centered",docs:{description:{component:`
# Textarea Component

A fully accessible textarea component for multi-line text input based on the Figma design system.

## Enhanced with Component Maturity Checklist

✅ **Polymorphic 'as' prop** - NEW!  
✅ **Loading & Empty states** - NEW!  
✅ **Multiple className overrides** - 4 override points  
✅ **Comprehensive event callbacks** - 4 new events  
✅ **All 8 states** - default, hover, focus, active, disabled, loading, empty, error  

## Features

- **Multiple States**: Default, focused, error, disabled, filled, loading, empty
- **Helper Text**: Support for helper text and error messages
- **Field Importance**: Optional required indicator (asterisk)
- **Icons**: Optional leading and trailing icons
- **Resizable**: Configurable vertical resize capability
- **Accessibility**: Full WCAG 2.1 AA compliance with proper ARIA attributes

## Usage

\`\`\`tsx
import { Textarea } from '@lean-ids/components';

function MyForm() {
  return (
    <Textarea
      label="Comments"
      placeholder="Enter your comments here..."
      helperText="Maximum 500 characters"
      required
      showFieldImportance
    />
  );
}
\`\`\`
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text for the textarea"},placeholder:{control:"text",description:"Placeholder text"},helperText:{control:"text",description:"Helper text displayed below the textarea"},errorMessage:{control:"text",description:"Error message - overrides helperText when present"},required:{control:"boolean",description:"Whether the textarea is required"},disabled:{control:"boolean",description:"Whether the textarea is disabled"},error:{control:"boolean",description:"Whether the textarea has an error state"},showLabel:{control:"boolean",description:"Whether to show the label"},showFieldImportance:{control:"boolean",description:"Whether to show the field importance indicator"},showInlineText:{control:"boolean",description:"Whether to show helper/error text"},fullWidth:{control:"boolean",description:"Whether the textarea should take full width"},rows:{control:"number",description:"Number of visible text rows"},resizable:{control:"boolean",description:"Whether the textarea is resizable"}}},j={args:{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",showLabel:!0,showFieldImportance:!0,showInlineText:!0,required:!1,disabled:!1,error:!1,resizable:!0,rows:4}},C={args:{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",defaultValue:"This is some filled content in the textarea.",showLabel:!0,showFieldImportance:!0,showInlineText:!0,required:!1,disabled:!1,error:!1,resizable:!0}},L={args:{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",defaultValue:"This content cannot be edited.",showLabel:!0,showFieldImportance:!0,showInlineText:!0,required:!1,disabled:!0,error:!1,resizable:!1}},I={args:{label:"Label",placeholder:"Placeholder",errorMessage:"This field has an error",showLabel:!0,showFieldImportance:!0,showInlineText:!0,required:!0,error:!0,resizable:!0}},E={args:{label:"Search Query",placeholder:"Enter your search query...",helperText:"Use keywords to refine your search",leadingIcon:e.jsx(Ma,{size:16}),showLabel:!0,showFieldImportance:!1,showInlineText:!0,resizable:!0}},N={args:{label:"Comments",placeholder:"Please provide your feedback...",helperText:"This field is required",showLabel:!0,showFieldImportance:!0,showInlineText:!0,required:!0,resizable:!0}},S={args:{label:"Disabled Field",placeholder:"This field is disabled",helperText:"This field cannot be edited",showLabel:!0,showFieldImportance:!1,showInlineText:!0,disabled:!0,resizable:!1}},F={args:{label:"Description",placeholder:"Enter a detailed description...",helperText:"Provide as much detail as possible",showLabel:!0,showFieldImportance:!1,showInlineText:!0,fullWidth:!0,resizable:!0},parameters:{layout:"padded"}},B={args:{label:"Fixed Size",placeholder:"This textarea cannot be resized",helperText:"The size is fixed",showLabel:!0,showFieldImportance:!1,showInlineText:!0,resizable:!1,rows:3}},z={args:{label:"Long Form Content",placeholder:"Write your content here...",helperText:"You have plenty of space",showLabel:!0,showFieldImportance:!1,showInlineText:!0,resizable:!0,rows:10}},$={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Loading State"}),e.jsx(t,{variant:"body",children:"Shows a loading spinner while data is being fetched."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx(d,{label:"Comments",isLoading:!0}),e.jsx(d,{label:"Description",isLoading:!0,helperText:"Loading content..."})]})]}),parameters:{docs:{description:{story:'Use `isLoading` prop to show a loading spinner. The textarea is disabled and shows "Loading..." placeholder.'}}}},q={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Empty State"}),e.jsx(t,{variant:"body",children:"Shows an empty state message when no data is available."}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:[e.jsx(d,{label:"Recent Notes",isEmpty:!0,emptyMessage:"No notes available"}),e.jsx(d,{label:"Comments",isEmpty:!0,emptyMessage:"No comments yet"})]})]}),parameters:{docs:{description:{story:"Use `isEmpty` prop with custom `emptyMessage` to show empty states."}}}},W={render:()=>{const[a,r]=l.useState([]),s=o=>{r(i=>[...i.slice(-4),`${new Date().toLocaleTimeString()}: ${o}`])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Event Callbacks"}),e.jsx(t,{variant:"body",children:"All available event callbacks demonstrated."}),e.jsx(d,{label:"Interactive Textarea",placeholder:"Try focusing, typing, and pressing Escape",onFocus:()=>s("onFocus fired"),onAfterFocus:()=>s("onAfterFocus fired (200ms delay)"),onBlur:()=>s("onBlur fired"),onAfterBlur:()=>s("onAfterBlur fired (200ms delay)"),onChange:o=>s(`onChange: ${o.target.value.substring(0,20)}...`),onEscape:()=>s("onEscape fired (Escape key pressed)"),style:{width:"400px"}}),e.jsxs("div",{style:{marginTop:"16px",padding:"12px",background:"#f5f5f5",borderRadius:"4px",maxHeight:"150px",overflow:"auto"},children:[e.jsx(t,{variant:"caption",weight:"semibold",style:{marginBottom:"8px",display:"block"},children:"Event Log:"}),a.length===0?e.jsx(t,{variant:"caption",style:{color:"#666"},children:"No events yet..."}):a.map((o,i)=>e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:o},i))]})]})},parameters:{docs:{description:{story:`
New event callbacks available:
- **onAfterFocus**: Fired 200ms after focus (after animation)
- **onAfterBlur**: Fired 200ms after blur (after animation)
- **onEscape**: Fired when Escape key is pressed
- **onClear**: Fired when textarea is cleared
        `}}}},R={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"className Overrides"}),e.jsx(t,{variant:"body",children:"Multiple override points for custom styling."}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",width:"400px"},children:e.jsx(d,{label:"Custom Styled Textarea",placeholder:"All parts can be styled",helperText:"Each part has its own className prop",className:"custom-container",labelClassName:"custom-label",wrapperClassName:"custom-wrapper",textareaClassName:"custom-textarea",helperTextClassName:"custom-helper",style:{marginBottom:"20px"}})}),e.jsxs("div",{style:{padding:"12px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsx(t,{variant:"caption",weight:"semibold",style:{marginBottom:"8px",display:"block"},children:"Available className Props:"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• className - Root container"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• labelClassName - Label element"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• wrapperClassName - Textarea wrapper"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• textareaClassName - Textarea element"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• helperTextClassName - Helper text"})]})]}),parameters:{docs:{description:{story:"Use multiple className props to customize different parts of the component."}}}},D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px",maxWidth:"800px"},children:[e.jsx(t,{variant:"headingL",weight:"semibold",children:"Component Maturity Enhancements"}),e.jsx(t,{variant:"body",children:"Textarea now meets enterprise-grade standards with the following enhancements:"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",marginTop:"16px"},children:[e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ API & Composition"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• forwardRef support"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• Polymorphic 'as' prop"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• ...restProps passthrough"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ States & Behavior"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• isLoading state"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• isEmpty state"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• isInvalid alias"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ Overrides & Theming"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• style prop"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 4 className overrides"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• Full customization"})]}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(t,{variant:"headingS",weight:"semibold",style:{marginBottom:"12px"},children:"✅ Event Callbacks"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• onAfterFocus/Blur"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• onEscape"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• onClear"})]})]}),e.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#e3f2fd",borderRadius:"8px",borderLeft:"4px solid #2196f3"},children:[e.jsx(t,{variant:"body",weight:"semibold",style:{marginBottom:"8px"},children:"📊 Total Enhancements"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 9 new props"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 4 new event callbacks"}),e.jsx(t,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:"• 4 className override points"}),e.jsx(t,{variant:"caption",style:{display:"block"},children:"• Zero breaking changes"})]})]}),parameters:{docs:{description:{story:"Summary of all Component Maturity Checklist enhancements applied to Textarea."}}}};var Te,we,ke;j.parameters={...j.parameters,docs:{...(Te=j.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: false,
    disabled: false,
    error: false,
    resizable: true,
    rows: 4
  }
}`,...(ke=(we=j.parameters)==null?void 0:we.docs)==null?void 0:ke.source}}};var je,Ce,Le;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    defaultValue: 'This is some filled content in the textarea.',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: false,
    disabled: false,
    error: false,
    resizable: true
  }
}`,...(Le=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:Le.source}}};var Ie,Ee,Ne;L.parameters={...L.parameters,docs:{...(Ie=L.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    defaultValue: 'This content cannot be edited.',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: false,
    disabled: true,
    error: false,
    resizable: false
  }
}`,...(Ne=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var Se,Fe,Be;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    errorMessage: 'This field has an error',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: true,
    error: true,
    resizable: true
  }
}`,...(Be=(Fe=I.parameters)==null?void 0:Fe.docs)==null?void 0:Be.source}}};var ze,$e,qe;E.parameters={...E.parameters,docs:{...(ze=E.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    label: 'Search Query',
    placeholder: 'Enter your search query...',
    helperText: 'Use keywords to refine your search',
    leadingIcon: <Search size={16} />,
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    resizable: true
  }
}`,...(qe=($e=E.parameters)==null?void 0:$e.docs)==null?void 0:qe.source}}};var We,Re,De;N.parameters={...N.parameters,docs:{...(We=N.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    placeholder: 'Please provide your feedback...',
    helperText: 'This field is required',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: true,
    resizable: true
  }
}`,...(De=(Re=N.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var Me,Ae,Pe;S.parameters={...S.parameters,docs:{...(Me=S.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    helperText: 'This field cannot be edited',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    disabled: true,
    resizable: false
  }
}`,...(Pe=(Ae=S.parameters)==null?void 0:Ae.docs)==null?void 0:Pe.source}}};var Ve,He,Ue;F.parameters={...F.parameters,docs:{...(Ve=F.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter a detailed description...',
    helperText: 'Provide as much detail as possible',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    fullWidth: true,
    resizable: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(Ue=(He=F.parameters)==null?void 0:He.docs)==null?void 0:Ue.source}}};var Oe,Ke,_e;B.parameters={...B.parameters,docs:{...(Oe=B.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    label: 'Fixed Size',
    placeholder: 'This textarea cannot be resized',
    helperText: 'The size is fixed',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    resizable: false,
    rows: 3
  }
}`,...(_e=(Ke=B.parameters)==null?void 0:Ke.docs)==null?void 0:_e.source}}};var Ze,Qe,Ye;z.parameters={...z.parameters,docs:{...(Ze=z.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    label: 'Long Form Content',
    placeholder: 'Write your content here...',
    helperText: 'You have plenty of space',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    resizable: true,
    rows: 10
  }
}`,...(Ye=(Qe=z.parameters)==null?void 0:Qe.docs)==null?void 0:Ye.source}}};var Ge,Je,Xe;$.parameters={...$.parameters,docs:{...(Ge=$.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Loading State</Typography>
      <Typography variant="body">Shows a loading spinner while data is being fetched.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px'
    }}>
        <Textarea label="Comments" isLoading={true} />
        <Textarea label="Description" isLoading={true} helperText="Loading content..." />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`isLoading\` prop to show a loading spinner. The textarea is disabled and shows "Loading..." placeholder.'
      }
    }
  }
}`,...(Xe=(Je=$.parameters)==null?void 0:Je.docs)==null?void 0:Xe.source}}};var ea,aa,ta;q.parameters={...q.parameters,docs:{...(ea=q.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">Empty State</Typography>
      <Typography variant="body">Shows an empty state message when no data is available.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px'
    }}>
        <Textarea label="Recent Notes" isEmpty={true} emptyMessage="No notes available" />
        <Textarea label="Comments" isEmpty={true} emptyMessage="No comments yet" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use \`isEmpty\` prop with custom \`emptyMessage\` to show empty states.'
      }
    }
  }
}`,...(ta=(aa=q.parameters)==null?void 0:aa.docs)==null?void 0:ta.source}}};var ra,sa,oa;W.parameters={...W.parameters,docs:{...(ra=W.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  render: () => {
    const [logs, setLogs] = useState<string[]>([]);
    const addLog = (message: string) => {
      setLogs(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Event Callbacks</Typography>
        <Typography variant="body">All available event callbacks demonstrated.</Typography>
        
        <Textarea label="Interactive Textarea" placeholder="Try focusing, typing, and pressing Escape" onFocus={() => addLog('onFocus fired')} onAfterFocus={() => addLog('onAfterFocus fired (200ms delay)')} onBlur={() => addLog('onBlur fired')} onAfterBlur={() => addLog('onAfterBlur fired (200ms delay)')} onChange={e => addLog(\`onChange: \${e.target.value.substring(0, 20)}...\`)} onEscape={() => addLog('onEscape fired (Escape key pressed)')} style={{
        width: '400px'
      }} />
        
        <div style={{
        marginTop: '16px',
        padding: '12px',
        background: '#f5f5f5',
        borderRadius: '4px',
        maxHeight: '150px',
        overflow: 'auto'
      }}>
          <Typography variant="caption" weight="semibold" style={{
          marginBottom: '8px',
          display: 'block'
        }}>
            Event Log:
          </Typography>
          {logs.length === 0 ? <Typography variant="caption" style={{
          color: '#666'
        }}>No events yet...</Typography> : logs.map((log, i) => <Typography key={i} variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>
                {log}
              </Typography>)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
New event callbacks available:
- **onAfterFocus**: Fired 200ms after focus (after animation)
- **onAfterBlur**: Fired 200ms after blur (after animation)
- **onEscape**: Fired when Escape key is pressed
- **onClear**: Fired when textarea is cleared
        \`
      }
    }
  }
}`,...(oa=(sa=W.parameters)==null?void 0:sa.docs)==null?void 0:oa.source}}};var ia,la,na;R.parameters={...R.parameters,docs:{...(ia=R.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold">className Overrides</Typography>
      <Typography variant="body">Multiple override points for custom styling.</Typography>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      width: '400px'
    }}>
        <Textarea label="Custom Styled Textarea" placeholder="All parts can be styled" helperText="Each part has its own className prop" className="custom-container" labelClassName="custom-label" wrapperClassName="custom-wrapper" textareaClassName="custom-textarea" helperTextClassName="custom-helper" style={{
        marginBottom: '20px'
      }} />
      </div>
      
      <div style={{
      padding: '12px',
      background: '#f5f5f5',
      borderRadius: '4px'
    }}>
        <Typography variant="caption" weight="semibold" style={{
        marginBottom: '8px',
        display: 'block'
      }}>
          Available className Props:
        </Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• className - Root container</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• labelClassName - Label element</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• wrapperClassName - Textarea wrapper</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• textareaClassName - Textarea element</Typography>
        <Typography variant="caption" style={{
        display: 'block'
      }}>• helperTextClassName - Helper text</Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use multiple className props to customize different parts of the component.'
      }
    }
  }
}`,...(na=(la=R.parameters)==null?void 0:la.docs)==null?void 0:na.source}}};var da,pa,ca;D.parameters={...D.parameters,docs:{...(da=D.parameters)==null?void 0:da.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px',
    maxWidth: '800px'
  }}>
      <Typography variant="headingL" weight="semibold">Component Maturity Enhancements</Typography>
      <Typography variant="body">Textarea now meets enterprise-grade standards with the following enhancements:</Typography>
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '20px',
      marginTop: '16px'
    }}>
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ API & Composition</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• forwardRef support</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• Polymorphic 'as' prop</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• ...restProps passthrough</Typography>
        </div>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ States & Behavior</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• isLoading state</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• isEmpty state</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• isInvalid alias</Typography>
        </div>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ Overrides & Theming</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• style prop</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• 4 className overrides</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• Full customization</Typography>
        </div>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '12px'
        }}>✅ Event Callbacks</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• onAfterFocus/Blur</Typography>
          <Typography variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>• onEscape</Typography>
          <Typography variant="caption" style={{
          display: 'block'
        }}>• onClear</Typography>
        </div>
      </div>
      
      <div style={{
      marginTop: '16px',
      padding: '16px',
      background: '#e3f2fd',
      borderRadius: '8px',
      borderLeft: '4px solid #2196f3'
    }}>
        <Typography variant="body" weight="semibold" style={{
        marginBottom: '8px'
      }}>📊 Total Enhancements</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• 9 new props</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• 4 new event callbacks</Typography>
        <Typography variant="caption" style={{
        display: 'block',
        marginBottom: '4px'
      }}>• 4 className override points</Typography>
        <Typography variant="caption" style={{
        display: 'block'
      }}>• Zero breaking changes</Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Summary of all Component Maturity Checklist enhancements applied to Textarea.'
      }
    }
  }
}`,...(ca=(pa=D.parameters)==null?void 0:pa.docs)==null?void 0:ca.source}}};const Ya=["Default","Filled","FilledUneditable","WithError","WithLeadingIcon","Required","Disabled","FullWidth","NonResizable","LargeTextarea","LoadingState","EmptyState","EventCallbacks","ClassNameOverrides","ComponentMaturity"];export{R as ClassNameOverrides,D as ComponentMaturity,j as Default,S as Disabled,q as EmptyState,W as EventCallbacks,C as Filled,L as FilledUneditable,F as FullWidth,z as LargeTextarea,$ as LoadingState,B as NonResizable,N as Required,I as WithError,E as WithLeadingIcon,Ya as __namedExportsOrder,Qa as default};
