import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as l}from"./index-B0WjJBI_.js";import{g as o}from"./styled-components.browser.esm-CuwBLqEg.js";import{I as b}from"./InputField-DW27YIEC.js";import{I as H}from"./Icon-D9wW9sG4.js";import{C as ge}from"./Checkbox-B5k7d77F.js";import{R as ye}from"./RadioButton-FHwiOUoL.js";import{F as P}from"./FieldImportance-Blr2F3eN.js";import{H as B}from"./HelpingText-DoRwUTLu.js";const Q=o.div`
  position: relative;
  width: 100%;
`,ve=o.div`
  position: absolute;
  top: calc(100% + ${({theme:e})=>e.spacing[1]});
  left: 0;
  right: 0;
  max-height: 18.75rem; /* 300px */
  background: ${({theme:e})=>e.colors.palette.neutral[50]};
  border: ${({theme:e})=>e.borderWidth[1]} solid ${({theme:e})=>e.colors.palette.neutral[500]}; // Updated from 400 to 500
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  box-shadow: ${({theme:e})=>e.shadows.md};
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;
  display: ${({$isOpen:e})=>e?"block":"none"};
  transition: opacity 0.2s ease-in-out;
`,he=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>`${e.spacing[2]} ${e.spacing[3]}`};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  background: ${({theme:e,$selected:s,$focused:y})=>y?e.colors.semantic.background.secondary:s?e.colors.palette.primary[50]:e.colors.palette.neutral[50]};
  opacity: ${({$disabled:e})=>e?.5:1};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e,$selected:s})=>s?e.fontWeights.medium:e.fontWeights.regular};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({theme:e,$disabled:s})=>s?e.colors.palette.neutral[50]:e.colors.semantic.background.secondary};
  }
  
  &:active {
    background: ${({theme:e,$disabled:s})=>s?e.colors.palette.neutral[50]:e.colors.semantic.background.tertiary};
  }
`,xe=o.div`
  padding: ${({theme:e})=>e.spacing[5]};
  text-align: center;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
`,be=o.div`
  padding: ${({theme:e})=>e.spacing[2]};
  border-bottom: ${({theme:e})=>e.borderWidth[1]} solid ${({theme:e})=>e.colors.palette.neutral[300]};
  background: ${({theme:e})=>e.colors.palette.neutral[50]};
  
  /* Ensure the input field inside doesn't overflow */
  & > div {
    width: 100%;
  }
`,U=o.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[1]};
  align-items: center;
  margin-bottom: ${({theme:e})=>e.spacing[1]};
`,_=o.label`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e,$disabled:s})=>s?e.colors.palette.neutral[400]:e.colors.palette.neutral[900]};
`;o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[5]};
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
`;o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[5]};
  gap: ${({theme:e})=>e.spacing[2]};
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  text-align: center;
`;const Z=l.forwardRef(({as:e,label:s,placeholder:y="Placeholder",options:v=[],value:i,onChange:u,multiple:h=!1,searchable:M=!1,showLeadingIcon:ee=!0,showTrailingIcon:ae=!0,required:w=!1,disabled:d=!1,error:te=!1,isInvalid:re=!1,isLoading:G=!1,isEmpty:se=!1,emptyMessage:J="No options available",helperText:f,helperTextState:ne="default",size:$="default",className:j,style:T,labelClassName:k,dropdownClassName:ie,optionClassName:le,helperTextClassName:q,showSelectionIndicator:oe=!0,onOpen:S,onClose:I,onAfterOpen:E,onAfterClose:N,onSearchChange:R,onEnter:z,onEscape:V,...C},L)=>{l.useId();const[p,W]=l.useState(!1),[D,K]=l.useState(""),[m,F]=l.useState(-1),g=l.useRef(null),de=l.useRef(null),X=te||re,O=e||"div",ue=()=>{if(!i)return"";if(h&&Array.isArray(i)){if(i.length===0)return"";if(i.length===1){const r=v.find(n=>n.value===i[0]);return(r==null?void 0:r.label)||""}return`${i.length} selected`}const a=v.find(r=>r.value===i);return(a==null?void 0:a.label)||""},c=M&&D?v.filter(a=>a.label.toLowerCase().includes(D.toLowerCase())):v,Y=a=>{if(!d)if(h){const r=Array.isArray(i)?i:[],n=r.includes(a)?r.filter(me=>me!==a):[...r,a];u==null||u(n)}else u==null||u(a),W(!1),K("")},x=a=>h&&Array.isArray(i)?i.includes(a):i===a,ce=()=>{d||G||(W(!0),S==null||S(),setTimeout(()=>{E==null||E()},200))},A=()=>{W(!1),K(""),F(-1),I==null||I(),setTimeout(()=>{N==null||N()},200)},fe=a=>{const r=a.target.value;K(r),R==null||R(r)};l.useEffect(()=>{if(!p)return;const a=r=>{if(r.key==="Escape")A(),V==null||V(r);else if(r.key==="Enter"){if(m>=0&&m<c.length){const n=c[m];n.disabled||Y(n.value)}z==null||z(r)}else r.key==="ArrowDown"?(r.preventDefault(),F(n=>n<c.length-1?n+1:n)):r.key==="ArrowUp"&&(r.preventDefault(),F(n=>n>0?n-1:0))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[p,m,c]),l.useEffect(()=>{const a=r=>{g.current&&!g.current.contains(r.target)&&A()};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);const pe=ue();return G?t.jsxs(Q,{as:O,ref:L||g,className:j,style:T,...C,children:[t.jsxs(U,{children:[t.jsx(_,{$disabled:!0,className:k,children:s}),w&&t.jsx(P,{variant:"asterisk",style:"normal"})]}),t.jsx("div",{children:t.jsx(b,{value:"Loading...",placeholder:y,disabled:!0,size:$,fullWidth:!0,trailingIcon:t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"9.42 9.42",children:t.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 8 8",to:"360 8 8",dur:"1s",repeatCount:"indefinite"})})}),readOnly:!0})}),f&&t.jsx("div",{style:{marginTop:"4px"},children:t.jsx(B,{text:f,state:"default",showIcon:!0,size:"default",className:q})})]}):se?t.jsxs(Q,{as:O,ref:L||g,className:j,style:T,...C,children:[t.jsxs(U,{children:[t.jsx(_,{$disabled:!0,className:k,children:s}),w&&t.jsx(P,{variant:"asterisk",style:"normal"})]}),t.jsx("div",{children:t.jsx(b,{value:"",placeholder:J,disabled:!0,size:$,fullWidth:!0,readOnly:!0})}),f&&t.jsx("div",{style:{marginTop:"4px"},children:t.jsx(B,{text:J,state:"default",showIcon:!0,size:"default",className:q})})]}):t.jsxs(Q,{as:O,ref:L||g,className:j,style:T,...C,children:[t.jsxs(U,{children:[t.jsx(_,{$disabled:d,className:k,children:s}),w&&t.jsx(P,{variant:"asterisk",style:"normal"})]}),t.jsx("div",{onClick:()=>!d&&(p?A():ce()),children:t.jsx(b,{value:pe,placeholder:y,disabled:d,error:X,size:$,fullWidth:!0,leadingIcon:ee?t.jsx(H,{name:"Search",size:"small"}):void 0,trailingIcon:ae?t.jsx(H,{name:p?"ExpandLess":"ExpandMore",size:"small"}):void 0,onKeyDown:a=>a.preventDefault(),onFocus:a=>a.target.blur(),style:{cursor:d?"not-allowed":"pointer"},readOnly:!0})}),t.jsxs(ve,{ref:de,$isOpen:p&&!d,className:ie,role:"listbox","aria-label":`${s} options`,children:[M&&t.jsx(be,{children:t.jsx(b,{value:D,onChange:fe,placeholder:"Search...",size:"small",fullWidth:!0,leadingIcon:t.jsx(H,{name:"Search",size:"small"}),autoFocus:!0,"aria-label":"Search options"})}),c.length===0?t.jsx(xe,{children:"No options found"}):c.map((a,r)=>t.jsxs(he,{$selected:x(a.value),$disabled:!!a.disabled,$focused:r===m,onClick:()=>!a.disabled&&Y(a.value),className:le,role:"option","aria-selected":x(a.value),"aria-disabled":a.disabled,children:[oe&&(h?t.jsx(ge,{checked:x(a.value),disabled:a.disabled,size:"default",onChange:()=>{}}):t.jsx(ye,{checked:x(a.value),disabled:a.disabled,size:"default",onChange:()=>{}})),t.jsx("span",{children:a.label})]},a.value))]}),f&&t.jsx("div",{style:{marginTop:"4px"},children:t.jsx(B,{text:f,state:X?"error":ne,showIcon:!0,size:"default",className:q})})]})});Z.displayName="Select";Z.__docgenInfo={description:"",methods:[],displayName:"Select",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Polymorphic prop - render as different element
@default 'div'`},label:{required:!0,tsType:{name:"string"},description:"Field label"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Placeholder'",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Array of options",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Selected value(s)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"Change handler"},multiple:{required:!1,tsType:{name:"boolean"},description:"Enable multiple selection",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"Enable search/filter",defaultValue:{value:"false",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show leading search icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show trailing dropdown icon",defaultValue:{value:"true",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Required field",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Invalid state (alias for error)
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows loading indicator
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows empty state message
@default false`,defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty state message
@default 'No options available'`,defaultValue:{value:"'No options available'",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text"},helperTextState:{required:!1,tsType:{name:"union",raw:"'default' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Helper text state",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className for root container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for root container"},labelClassName:{required:!1,tsType:{name:"string"},description:"Custom className for label"},dropdownClassName:{required:!1,tsType:{name:"string"},description:"Custom className for dropdown container"},optionClassName:{required:!1,tsType:{name:"string"},description:"Custom className for option items"},helperTextClassName:{required:!1,tsType:{name:"string"},description:"Custom className for helper text"},showSelectionIndicator:{required:!1,tsType:{name:"boolean"},description:"Show selection indicator (radio/checkbox)",defaultValue:{value:"true",computed:!1}},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when dropdown opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when dropdown closes"},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired after dropdown open animation completes"},onAfterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired after dropdown close animation completes"},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:"Callback fired when search query changes"},onEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:"Callback fired on Enter key press"},onEscape:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent"},name:"event"}],return:{name:"void"}}},description:"Callback fired on Escape key press"}},composes:["Omit"]};export{Z as S};
