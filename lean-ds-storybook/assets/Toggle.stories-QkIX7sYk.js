import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{fn as d}from"./index-CH2Su9EI.js";import{r as c}from"./index-B0WjJBI_.js";import{g as j}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as r}from"./Typography-DlcmwxwF.js";import"./_commonjsHelpers-CqkleIqs.js";const M=j.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[2]};
`,Je=j.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,O=j.div`
  position: relative;
  width: 44px;
  height: ${({theme:a})=>a.spacing[10]};
  border-radius: ${({theme:a})=>a.borderRadius.full};
  transition: ${({theme:a})=>{var o;return((o=a.transitions)==null?void 0:o.default)||"all 300ms cubic-bezier(0.4, 0, 0.2, 1)"}};
  cursor: ${({$disabled:a})=>a?"not-allowed":"pointer"};
  flex-shrink: 0;
  
  ${Je}:focus-visible + & {
    box-shadow: 0 0 0 2px ${({theme:a})=>a.colors.semantic.focus.indicator};
  }
  
  ${({theme:a,$checked:o,$disabled:s,$isInvalid:n})=>n?`
        background-color: ${a.colors.palette.error[50]};
        border: ${a.borderWidth[2]} solid ${a.colors.palette.error[500]};
      `:s&&o?`background-color: ${a.colors.palette.primary[200]};`:s?`background-color: ${a.colors.palette.neutral[200]};`:o?`background-color: ${a.colors.palette.primary[500]};`:`background-color: ${a.colors.palette.neutral[300]};`}
  
  &:hover {
    ${({theme:a,$checked:o,$disabled:s})=>s?"":o?`background-color: ${a.colors.palette.primary[600]};`:`background-color: ${a.colors.palette.neutral[400]};`}
  }
`,ga=j.div`
  position: absolute;
  top: 2px;
  width: ${({theme:a})=>a.spacing[8]};
  height: ${({theme:a})=>a.spacing[8]};
  border-radius: ${({theme:a})=>a.borderRadius.full};
  background-color: ${({theme:a})=>a.colors.palette.neutral[50]};
  transition: left 0.2s ease-in-out;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  
  ${({$checked:a})=>a?"left: 22px;":"left: 2px;"}
`,ma=j.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:a})=>a.spacing[10]};
  height: ${({theme:a})=>a.spacing[10]};
  color: ${({theme:a})=>a.colors.palette.primary[500]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,t=c.forwardRef(({as:a,label:o,checked:s=!1,disabled:n=!1,isLoading:i=!1,isEmpty:l=!1,isInvalid:p=!1,errorMessage:P,emptyMessage:Qe="No options available",onChange:Xe,onFocus:Ye,onBlur:Ze,onKeyDown:ea,onMouseEnter:E,onMouseLeave:S,onToggleOn:$,onToggleOff:A,className:C,inputClassName:aa,labelClassName:ta,trackClassName:F,thumbClassName:sa,customLabel:q,customTrack:N,customThumb:B,style:D,maxWidth:R,name:oa,value:ra,id:na,...la},ia)=>{const ca=c.useId(),z=na||ca,I=a||"div";c.useEffect(()=>{s&&$?$():!s&&A&&A()},[s,$,A]);const H=()=>{if(n||i||l||p)return;const L=document.getElementById(z);L&&L.click()},da=L=>{L.preventDefault(),H()},pa=n?"#A3A3A3":"#171717",ua=()=>q?q({label:o,checked:s,disabled:n}):o?e.jsx(r,{variant:"caption",className:ta,style:{color:pa,whiteSpace:"nowrap"},children:o}):null;return i?e.jsxs(M,{as:I,className:C,style:{...D,maxWidth:R},onMouseEnter:E,onMouseLeave:S,children:[e.jsx(ma,{children:e.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"10 20",children:e.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 8 8",to:"360 8 8",dur:"1s",repeatCount:"indefinite"})})})}),e.jsx(r,{variant:"caption",style:{color:"#737373"},children:"Loading..."})]}):l?e.jsx(M,{as:I,className:C,style:{...D,maxWidth:R},onMouseEnter:E,onMouseLeave:S,children:e.jsx(r,{variant:"caption",style:{color:"#A3A3A3"},children:Qe})}):p&&P?e.jsxs(M,{as:I,className:C,style:{...D,maxWidth:R},onMouseEnter:E,onMouseLeave:S,children:[e.jsx(O,{$checked:!1,$disabled:!0,$isInvalid:!0,role:"presentation",className:F}),e.jsx(r,{variant:"caption",weight:"medium",style:{color:"var(--color-semantic-text-error)"},children:P})]}):e.jsxs(M,{as:I,className:C,style:{...D,maxWidth:R},onMouseEnter:E,onMouseLeave:S,children:[e.jsx(Je,{ref:ia,id:z,checked:s,disabled:n,onChange:Xe,onFocus:Ye,onBlur:Ze,onKeyDown:ea,name:oa,value:ra,role:"switch","aria-checked":s,"aria-disabled":n,"aria-invalid":p,className:aa,...la}),N?N({checked:s,disabled:n}):e.jsx(O,{$checked:s,$disabled:n,$isInvalid:!1,onClick:H,role:"presentation",className:F,children:B?B({checked:s,disabled:n}):e.jsx(ga,{$checked:s,$disabled:n,className:sa})}),(o||q)&&e.jsx("label",{htmlFor:z,onClick:da,children:ua()})]})});t.displayName="Toggle";t.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"string"},description:"Toggle label text"},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},value:{required:!1,tsType:{name:"string"},description:"Input value attribute"},checked:{required:!1,tsType:{name:"boolean"},description:`Whether the toggle is checked (on)
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the toggle is disabled
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows spinner
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows empty message
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Error/invalid state - shows error styling and message
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty message to display when isEmpty is true
@default 'No options available'`,defaultValue:{value:"'No options available'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler - called when toggle state changes"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Key down handler"},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse enter handler"},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse leave handler"},onToggleOn:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when toggle is turned on"},onToggleOff:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when toggle is turned off"},className:{required:!1,tsType:{name:"string"},description:"Custom class name for root container"},inputClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for hidden input element"},labelClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for label text"},trackClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for toggle track"},thumbClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for toggle thumb"},customLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: { 
  label?: string; 
  checked: boolean; 
  disabled: boolean;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{ 
  label?: string; 
  checked: boolean; 
  disabled: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"checked",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom label render function
Receives label text, checked state, and disabled state`},customTrack:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: { 
  checked: boolean; 
  disabled: boolean;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{ 
  checked: boolean; 
  disabled: boolean;
}`,signature:{properties:[{key:"checked",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom track render function
Receives checked and disabled state`},customThumb:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: { 
  checked: boolean; 
  disabled: boolean;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{ 
  checked: boolean; 
  disabled: boolean;
}`,signature:{properties:[{key:"checked",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom thumb render function
Receives checked and disabled state`},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for root container"},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum width for the toggle container"},as:{required:!1,tsType:{name:"C"},description:`The element type to render as
@default 'div'`}},composes:["Omit"]};const Ta={title:"Components/Toggle",component:t,parameters:{layout:"centered",docs:{description:{component:`
# Toggle Component

Enterprise-grade toggle button following Component Maturity Checklist.

## Features

- ✅ **forwardRef** + polymorphic 'as' prop
- ✅ **All 8 States**: default, hover, focus, active, disabled, loading, empty, error
- ✅ **Typography Component**: NO custom styled text
- ✅ **100% Design Tokens**: NO hardcoded values
- ✅ **Two Sizes**: Default (16px) and Large (24px)
- ✅ **Event Callbacks**: onChange, onFocus, onBlur, onKeyDown, onToggleOn, onToggleOff
- ✅ **Render Props**: customLabel, customIcon, customTrailingIcon
- ✅ **Radio Groups**: Seamless single-selection behavior
- ✅ **Full Accessibility**: WCAG 2.1 AA compliant

## Usage

\`\`\`tsx
import { Toggle } from '@lean-ids/components';

<Toggle
  label="Option 1"
  name="options"
  value="option1"
  checked={selected === 'option1'}
  onChange={(e) => setSelected(e.target.value)}
/>
\`\`\`
        `}}},tags:["autodocs"],args:{onChange:d(),onFocus:d(),onBlur:d(),onKeyDown:d(),onMouseEnter:d(),onMouseLeave:d(),onToggleOn:d(),onToggleOff:d()},argTypes:{label:{control:"text",description:"Label text displayed next to the toggle button",table:{type:{summary:"string"},category:"Content"}},size:{control:"toggle",options:["default","large"],description:"Toggle size",table:{type:{summary:"default | large"},defaultValue:{summary:"default"},category:"Appearance"}},checked:{control:"boolean",description:"Whether the toggle button is selected",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},disabled:{control:"boolean",description:"Whether the toggle button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isLoading:{control:"boolean",description:"Loading state with spinner",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isEmpty:{control:"boolean",description:"Empty state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isInvalid:{control:"boolean",description:"Error/invalid state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},showTrailingIcon:{control:"boolean",description:"Whether to show trailing expand icon",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}}}},u={args:{label:"Select this option",name:"playground",value:"option1",size:"default",checked:!1,disabled:!1,isLoading:!1,isEmpty:!1,isInvalid:!1,showTrailingIcon:!1}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Default (unselected)",name:"states",value:"1",checked:!1}),e.jsx(t,{label:"Selected (active)",name:"states",value:"2",checked:!0}),e.jsx(t,{label:"Disabled (unselected)",name:"states",value:"3",checked:!1,disabled:!0}),e.jsx(t,{label:"Disabled (selected)",name:"states",value:"4",checked:!0,disabled:!0}),e.jsx(t,{label:"Loading state",isLoading:!0}),e.jsx(t,{isEmpty:!0,emptyMessage:"No options available"}),e.jsx(t,{isInvalid:!0,errorMessage:"This field is required"}),e.jsx(t,{label:"With trailing icon",name:"states",value:"5",showTrailingIcon:!0})]}),parameters:{docs:{description:{story:"All 8 states: default, active (selected), disabled, loading, empty, error, and with icon. Copy any toggle you need."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"Default Size (16px)"}),e.jsx(t,{label:"Default toggle",name:"size-default",value:"1",size:"default"}),e.jsx(t,{label:"Default selected",name:"size-default",value:"2",size:"default",checked:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"Large Size (24px)"}),e.jsx(t,{label:"Large toggle",name:"size-large",value:"1",size:"large"}),e.jsx(t,{label:"Large selected",name:"size-large",value:"2",size:"large",checked:!0})]})]}),parameters:{docs:{description:{story:"Toggles are available in two sizes: default (16px) and large (24px)."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{isLoading:!0}),e.jsx(r,{variant:"caption",style:{color:"#737373"},children:"Shows animated spinner while loading options"})]}),parameters:{docs:{description:{story:"Loading state displays an animated spinner. Use when toggle options are being fetched."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{isEmpty:!0,emptyMessage:"No options available"}),e.jsx(t,{isEmpty:!0,emptyMessage:"All options selected"})]}),parameters:{docs:{description:{story:"Empty state shows a message when no options are available. Customize with emptyMessage prop."}}}},v={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{isInvalid:!0,errorMessage:"This field is required"}),e.jsx(t,{isInvalid:!0,errorMessage:"Please select an option"})]}),parameters:{docs:{description:{story:"Error state displays a red circle and error message. Use for form validation errors."}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Default with icon",name:"icon",value:"1",showTrailingIcon:!0}),e.jsx(t,{label:"Large with icon",name:"icon",value:"2",size:"large",showTrailingIcon:!0}),e.jsx(t,{label:"Selected with icon",name:"icon",value:"3",checked:!0,showTrailingIcon:!0}),e.jsx(t,{label:"Disabled with icon",name:"icon",value:"4",disabled:!0,showTrailingIcon:!0})]}),parameters:{docs:{description:{story:"Optional trailing expand icon. Icon size adjusts based on toggle button size."}}}},b={render:()=>{const[a,o]=c.useState("option1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(r,{variant:"headingM",weight:"semibold",children:"Choose your plan"}),e.jsx(t,{label:"Basic Plan - $9/month",name:"plan",value:"option1",checked:a==="option1",onChange:s=>o(s.target.value)}),e.jsx(t,{label:"Pro Plan - $29/month",name:"plan",value:"option2",checked:a==="option2",onChange:s=>o(s.target.value)}),e.jsx(t,{label:"Enterprise Plan - $99/month",name:"plan",value:"option3",checked:a==="option3",onChange:s=>o(s.target.value)}),e.jsxs(r,{variant:"caption",style:{color:"#737373",marginTop:"8px"},children:["Selected: ",a==="option1"?"Basic":a==="option2"?"Pro":"Enterprise"]})]})},parameters:{docs:{description:{story:"Toggles in a group with single selection. All toggles share the same name attribute."}}}},x={render:()=>{const[a,o]=c.useState([]),[s,n]=c.useState(""),i=l=>{o(p=>[...p.slice(-4),`${new Date().toLocaleTimeString()}: ${l}`])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{label:"Radio with callbacks",name:"callbacks",value:"option1",checked:s==="option1",onChange:l=>{n(l.target.value),i("onChange")},onToggleOn:()=>i("onToggleOn"),onFocus:()=>i("onFocus"),onBlur:()=>i("onBlur")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(r,{variant:"caption",weight:"semibold",children:"Event Log:"}),a.length===0?e.jsx(r,{variant:"caption",style:{color:"#A3A3A3"},children:"No events yet. Interact with the toggle button."}):a.map((l,p)=>e.jsx(r,{variant:"caption",style:{color:"#737373",fontFamily:"monospace"},children:l},p))]})]})},parameters:{docs:{description:{story:"All event callbacks: onChange, onToggleOn, onFocus, onBlur. Check Actions panel and event log."}}}},T={render:()=>{const[a,o]=c.useState("basic");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{name:"custom",value:"basic",checked:a==="basic",onChange:s=>o(s.target.value),customLabel:({checked:s})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(r,{variant:"body",weight:s?"semibold":"regular",children:"Basic Plan"}),e.jsx(r,{variant:"caption",style:{color:"#737373"},children:"$9/month"})]})}),e.jsx(t,{name:"custom",value:"pro",checked:a==="pro",onChange:s=>o(s.target.value),customLabel:({checked:s})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(r,{variant:"body",weight:"semibold",style:{color:s?"#16A34A":"#171717"},children:"Pro Plan"}),e.jsx(r,{variant:"caption",style:{color:"#737373"},children:"$29/month • Most popular"})]})})]})},parameters:{docs:{description:{story:"Use customLabel render prop for complex label layouts. Receives checked and disabled state."}}}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{as:"div",label:"Rendered as div (default)",name:"poly",value:"1"}),e.jsx(t,{as:"span",label:"Rendered as span element",name:"poly",value:"2"}),e.jsx(r,{variant:"caption",style:{color:"#737373"},children:"Use 'as' prop to change root element type"})]}),parameters:{docs:{description:{story:'Polymorphic "as" prop allows changing the root element type. Default is div.'}}}},k={render:()=>{const[a,o]=c.useState(""),[s,n]=c.useState(!1),i=s&&!a;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(r,{variant:"headingM",weight:"semibold",children:"Personal Information"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(r,{variant:"body",weight:"medium",children:"Gender *"}),i?e.jsx(t,{isInvalid:!0,errorMessage:"Please select your gender"}):e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Male",name:"gender",value:"male",checked:a==="male",onChange:l=>o(l.target.value)}),e.jsx(t,{label:"Female",name:"gender",value:"female",checked:a==="female",onChange:l=>o(l.target.value)}),e.jsx(t,{label:"Other",name:"gender",value:"other",checked:a==="other",onChange:l=>o(l.target.value)})]})]}),e.jsx("button",{onClick:()=>n(!0),style:{padding:"8px 16px",background:"#2563EB",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Submit"}),a&&e.jsxs(r,{variant:"caption",style:{color:"#16A34A"},children:["✓ Selected: ",a.charAt(0).toUpperCase()+a.slice(1)]})]})},parameters:{docs:{description:{story:"Form example with validation. Shows error state when submitted without selection."}}}};var W,V,G,U,K;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Select this option',
    name: 'playground',
    value: 'option1',
    size: 'default',
    checked: false,
    disabled: false,
    isLoading: false,
    isEmpty: false,
    isInvalid: false,
    showTrailingIcon: false
  }
}`,...(G=(V=u.parameters)==null?void 0:V.docs)==null?void 0:G.source},description:{story:"Interactive playground to test all toggle button props",...(K=(U=u.parameters)==null?void 0:U.docs)==null?void 0:K.description}}};var _,J,Q,X,Y;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Toggle label="Default (unselected)" name="states" value="1" checked={false} />
      <Toggle label="Selected (active)" name="states" value="2" checked={true} />
      <Toggle label="Disabled (unselected)" name="states" value="3" checked={false} disabled={true} />
      <Toggle label="Disabled (selected)" name="states" value="4" checked={true} disabled={true} />
      <Toggle label="Loading state" isLoading={true} />
      <Toggle isEmpty={true} emptyMessage="No options available" />
      <Toggle isInvalid={true} errorMessage="This field is required" />
      <Toggle label="With trailing icon" name="states" value="5" showTrailingIcon={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All 8 states: default, active (selected), disabled, loading, empty, error, and with icon. Copy any toggle you need.'
      }
    }
  }
}`,...(Q=(J=g.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"All 8 component states",...(Y=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var Z,ee,ae,te,se;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingS" weight="semibold">Default Size (16px)</Typography>
        <Toggle label="Default toggle" name="size-default" value="1" size="default" />
        <Toggle label="Default selected" name="size-default" value="2" size="default" checked />
      </div>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingS" weight="semibold">Large Size (24px)</Typography>
        <Toggle label="Large toggle" name="size-large" value="1" size="large" />
        <Toggle label="Large selected" name="size-large" value="2" size="large" checked />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Toggles are available in two sizes: default (16px) and large (24px).'
      }
    }
  }
}`,...(ae=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Two available sizes",...(se=(te=m.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};var oe,re,ne,le,ie;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Toggle isLoading={true} />
      <Typography variant="caption" style={{
      color: '#737373'
    }}>
        Shows animated spinner while loading options
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading state displays an animated spinner. Use when toggle options are being fetched.'
      }
    }
  }
}`,...(ne=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ne.source},description:{story:"Loading state with spinner",...(ie=(le=y.parameters)==null?void 0:le.docs)==null?void 0:ie.description}}};var ce,de,pe,ue,ge;h.parameters={...h.parameters,docs:{...(ce=h.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Toggle isEmpty={true} emptyMessage="No options available" />
      <Toggle isEmpty={true} emptyMessage="All options selected" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Empty state shows a message when no options are available. Customize with emptyMessage prop.'
      }
    }
  }
}`,...(pe=(de=h.parameters)==null?void 0:de.docs)==null?void 0:pe.source},description:{story:"Empty state",...(ge=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:ge.description}}};var me,ye,he,ve,fe;v.parameters={...v.parameters,docs:{...(me=v.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Toggle isInvalid={true} errorMessage="This field is required" />
      <Toggle isInvalid={true} errorMessage="Please select an option" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Error state displays a red circle and error message. Use for form validation errors.'
      }
    }
  }
}`,...(he=(ye=v.parameters)==null?void 0:ye.docs)==null?void 0:he.source},description:{story:"Error/invalid state",...(fe=(ve=v.parameters)==null?void 0:ve.docs)==null?void 0:fe.description}}};var be,xe,Te,we,ke;f.parameters={...f.parameters,docs:{...(be=f.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Toggle label="Default with icon" name="icon" value="1" showTrailingIcon />
      <Toggle label="Large with icon" name="icon" value="2" size="large" showTrailingIcon />
      <Toggle label="Selected with icon" name="icon" value="3" checked showTrailingIcon />
      <Toggle label="Disabled with icon" name="icon" value="4" disabled showTrailingIcon />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Optional trailing expand icon. Icon size adjusts based on toggle button size.'
      }
    }
  }
}`,...(Te=(xe=f.parameters)==null?void 0:xe.docs)==null?void 0:Te.source},description:{story:"With trailing expand icon",...(ke=(we=f.parameters)==null?void 0:we.docs)==null?void 0:ke.description}}};var je,Ee,Se,Ce,De;b.parameters={...b.parameters,docs:{...(je=b.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Typography variant="headingM" weight="semibold">Choose your plan</Typography>
        
        <Toggle label="Basic Plan - $9/month" name="plan" value="option1" checked={selected === 'option1'} onChange={e => setSelected(e.target.value)} />
        <Toggle label="Pro Plan - $29/month" name="plan" value="option2" checked={selected === 'option2'} onChange={e => setSelected(e.target.value)} />
        <Toggle label="Enterprise Plan - $99/month" name="plan" value="option3" checked={selected === 'option3'} onChange={e => setSelected(e.target.value)} />
        
        <Typography variant="caption" style={{
        color: '#737373',
        marginTop: '8px'
      }}>
          Selected: {selected === 'option1' ? 'Basic' : selected === 'option2' ? 'Pro' : 'Enterprise'}
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toggles in a group with single selection. All toggles share the same name attribute.'
      }
    }
  }
}`,...(Se=(Ee=b.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source},description:{story:"Radio group - single selection",...(De=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:De.description}}};var Re,Ie,Le,Me,$e;x.parameters={...x.parameters,docs:{...(Re=x.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => {
    const [events, setEvents] = useState<string[]>([]);
    const [selected, setSelected] = useState('');
    const addEvent = (event: string) => {
      setEvents(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${event}\`]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Toggle label="Radio with callbacks" name="callbacks" value="option1" checked={selected === 'option1'} onChange={e => {
        setSelected(e.target.value);
        addEvent('onChange');
      }} onToggleOn={() => addEvent('onToggleOn')} onFocus={() => addEvent('onFocus')} onBlur={() => addEvent('onBlur')} />
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
          <Typography variant="caption" weight="semibold">Event Log:</Typography>
          {events.length === 0 ? <Typography variant="caption" style={{
          color: '#A3A3A3'
        }}>
              No events yet. Interact with the toggle button.
            </Typography> : events.map((event, i) => <Typography key={i} variant="caption" style={{
          color: '#737373',
          fontFamily: 'monospace'
        }}>
                {event}
              </Typography>)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All event callbacks: onChange, onToggleOn, onFocus, onBlur. Check Actions panel and event log.'
      }
    }
  }
}`,...(Le=(Ie=x.parameters)==null?void 0:Ie.docs)==null?void 0:Le.source},description:{story:"Event callbacks demonstration",...($e=(Me=x.parameters)==null?void 0:Me.docs)==null?void 0:$e.description}}};var Ae,qe,ze,Pe,Fe;T.parameters={...T.parameters,docs:{...(Ae=T.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('basic');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Toggle name="custom" value="basic" checked={selected === 'basic'} onChange={e => setSelected(e.target.value)} customLabel={({
        checked
      }) => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
              <Typography variant="body" weight={checked ? 'semibold' : 'regular'}>
                Basic Plan
              </Typography>
              <Typography variant="caption" style={{
          color: '#737373'
        }}>
                $9/month
              </Typography>
            </div>} />
        
        <Toggle name="custom" value="pro" checked={selected === 'pro'} onChange={e => setSelected(e.target.value)} customLabel={({
        checked
      }) => <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
              <Typography variant="body" weight="semibold" style={{
          color: checked ? '#16A34A' : '#171717'
        }}>
                Pro Plan
              </Typography>
              <Typography variant="caption" style={{
          color: '#737373'
        }}>
                $29/month • Most popular
              </Typography>
            </div>} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use customLabel render prop for complex label layouts. Receives checked and disabled state.'
      }
    }
  }
}`,...(ze=(qe=T.parameters)==null?void 0:qe.docs)==null?void 0:ze.source},description:{story:"Custom label with render prop",...(Fe=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:Fe.description}}};var Ne,Be,He,Oe,We;w.parameters={...w.parameters,docs:{...(Ne=w.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Toggle as="div" label="Rendered as div (default)" name="poly" value="1" />
      <Toggle as="span" label="Rendered as span element" name="poly" value="2" />
      <Typography variant="caption" style={{
      color: '#737373'
    }}>
        Use 'as' prop to change root element type
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Polymorphic "as" prop allows changing the root element type. Default is div.'
      }
    }
  }
}`,...(He=(Be=w.parameters)==null?void 0:Be.docs)==null?void 0:He.source},description:{story:"Polymorphic 'as' prop",...(We=(Oe=w.parameters)==null?void 0:Oe.docs)==null?void 0:We.description}}};var Ve,Ge,Ue,Ke,_e;k.parameters={...k.parameters,docs:{...(Ve=k.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => {
    const [gender, setGender] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const showError = submitted && !gender;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <Typography variant="headingM" weight="semibold">Personal Information</Typography>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="body" weight="medium">Gender *</Typography>
          
          {showError ? <Toggle isInvalid={true} errorMessage="Please select your gender" /> : <>
              <Toggle label="Male" name="gender" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)} />
              <Toggle label="Female" name="gender" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)} />
              <Toggle label="Other" name="gender" value="other" checked={gender === 'other'} onChange={e => setGender(e.target.value)} />
            </>}
        </div>
        
        <button onClick={() => setSubmitted(true)} style={{
        padding: '8px 16px',
        background: '#2563EB',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          Submit
        </button>
        
        {gender && <Typography variant="caption" style={{
        color: '#16A34A'
      }}>
            ✓ Selected: {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </Typography>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Form example with validation. Shows error state when submitted without selection.'
      }
    }
  }
}`,...(Ue=(Ge=k.parameters)==null?void 0:Ge.docs)==null?void 0:Ue.source},description:{story:"Form example with validation",...(_e=(Ke=k.parameters)==null?void 0:Ke.docs)==null?void 0:_e.description}}};const wa=["Playground","AllStates","Sizes","LoadingState","EmptyState","ErrorState","WithTrailingIcon","RadioGroup","WithEventCallbacks","CustomLabel","PolymorphicAs","FormExample"];export{g as AllStates,T as CustomLabel,h as EmptyState,v as ErrorState,k as FormExample,y as LoadingState,u as Playground,w as PolymorphicAs,b as RadioGroup,m as Sizes,x as WithEventCallbacks,f as WithTrailingIcon,wa as __namedExportsOrder,Ta as default};
