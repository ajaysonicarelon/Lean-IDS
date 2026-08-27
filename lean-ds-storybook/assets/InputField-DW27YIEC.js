import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as m}from"./index-B0WjJBI_.js";import{g as o,f as r}from"./styled-components.browser.esm-CuwBLqEg.js";import{F as M}from"./FieldImportance-Blr2F3eN.js";import{H as ee}from"./HelpingText-DoRwUTLu.js";const F=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  width: ${({$fullWidth:e})=>e?"100%":"300px"};
  font-family: ${({theme:e})=>e.fonts.primary};
`,N=o.div`
  display: flex;
  gap: 4px;
  align-items: flex-start;
`,V=o.label`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e,$disabled:a})=>a?e.colors.palette.neutral[400]:e.colors.palette.neutral[900]};
  white-space: nowrap;
  
  ${({$size:e,theme:a})=>e==="large"?r`
        font-size: ${a.fontSizes[16]};
        line-height: ${a.lineHeights[19]};
      `:r`
      font-size: ${a.fontSizes[14]};
      line-height: ${a.lineHeights[16]};
    `}
`;o.span`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  color: ${({theme:e})=>e.colors.palette.error[500]};
  white-space: nowrap;
`;const Te={xsmall:r`
    height: 28px;
    padding: ${({theme:e})=>e.spacing[2]};
    gap: ${({theme:e})=>e.spacing[2]};
  `,small:r`
    height: 32px;
    padding: ${({theme:e})=>e.spacing[2]};
    gap: ${({theme:e})=>e.spacing[2]};
  `,default:r`
    height: 40px;
    padding: ${({theme:e})=>e.spacing[2]};
    gap: ${({theme:e})=>e.spacing[2]};
  `,large:r`
    height: 50px;
    padding: ${({theme:e})=>e.spacing[2]};
    gap: ${({theme:e})=>e.spacing[2]};
  `},W=o.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e,$disabled:a,$readOnly:s})=>a?e.colors.palette.neutral[100]:s?e.colors.palette.primary[50]:e.colors.palette.neutral[50]};
  border-width: ${({$isFocused:e})=>e?"2px":"1px"};
  border-style: solid;
  border-color: ${({theme:e,$error:a,$disabled:s,$readOnly:g,$isFocused:d})=>s||g?e.colors.palette.neutral[300]:a&&d||a?e.colors.palette.error[500]:d?e.colors.semantic.focus.input:e.colors.palette.neutral[500]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s ease-in-out;
  
  ${({$size:e})=>Te[e]}
  
  ${({$disabled:e})=>e&&r`
      cursor: not-allowed;
      opacity: 0.6;
    `}
  
  ${({$readOnly:e})=>e&&r`
      cursor: default;
      opacity: 0.8;
    `}
  
  ${({$error:e,$isFocused:a,theme:s})=>e&&a&&r`
      background-color: ${s.colors.palette.error[50]};
    `}
`,S=o.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({theme:e})=>e.fonts.primary};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  padding: 0;
  min-width: 0;
  
  /* Typography based on Figma design tokens */
  ${({$size:e,theme:a})=>e==="large"?r`
        font-size: ${a.fontSizes[16]};
        line-height: ${a.lineHeights[19]};
        font-weight: ${a.fontWeights.medium}; /* 500 for filled state */
      `:r`
      font-size: ${a.fontSizes[14]};
      line-height: ${a.lineHeights[16]};
      font-weight: ${a.fontWeights.medium}; /* 500 for filled state */
    `}
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.palette.neutral[700]}; // Updated from 400 to 700
    font-weight: ${({theme:e})=>e.fontWeights.regular}; /* 400 for placeholder */
  }
  
  &:disabled {
    cursor: not-allowed;
    color: ${({theme:e})=>e.colors.palette.neutral[500]};
  }
  
  /* Remove default number input spinners */
  &[type='number']::-webkit-inner-spin-button,
  &[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  &[type='number'] {
    -moz-appearance: textfield;
  }
  
  /* Remove default search input clear button */
  &[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }
`,K=o.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  
  ${({$size:e})=>{const a=e==="large"?"24px":"16px";return r`
      width: ${a};
      height: ${a};
    `}}
  
  svg {
    width: 100%;
    height: 100%;
  }
`,ae=m.forwardRef(({as:e,label:a,helperText:s,helperTextState:g="default",type:d="text",size:n="default",required:O=!1,disabled:u=!1,readOnly:D=!1,error:te=!1,isLoading:ne=!1,isEmpty:re=!1,emptyMessage:p="No data available",isInvalid:le=!1,showLabel:h=!0,showFieldImportance:y=!1,fieldImportanceVariant:v="asterisk",showInlineText:_=!0,leadingIcon:U,trailingIcon:B,placeholder:G,value:J,defaultValue:ie,onChange:se,onFocus:$,onBlur:b,onAfterFocus:x,onAfterBlur:T,onClear:we,onEnter:w,onEscape:q,fullWidth:I=!1,name:oe,id:de,className:E,style:R,labelClassName:j,wrapperClassName:k,inputClassName:H,helperTextClassName:Q,"aria-label":C,"aria-describedby":ue,...c},L)=>{const pe=m.useId(),i=de||pe,ce=`${i}-helper-text`,f=`${i}-label`,[fe,X]=m.useState(!1),[qe,Y]=m.useState(!1),Z=te||le,z=s,me=e||"input",ge=[z?ce:null,ue].filter(Boolean).join(" ")||void 0,he=l=>{X(!0),$==null||$(l),setTimeout(()=>{x==null||x()},200)},ye=l=>{X(!1),b==null||b(l),setTimeout(()=>{T==null||T()},200)},ve=l=>{var P;l.key==="Enter"?w==null||w(l):l.key==="Escape"&&(q==null||q(l)),(P=c.onKeyDown)==null||P.call(c,l)},$e=()=>{Y(!0)},be=()=>{Y(!1)},xe=g,A=n==="large"?"large":"default";return ne?t.jsxs(F,{$fullWidth:I,className:E,style:R,children:[h&&a&&t.jsxs(N,{children:[t.jsx(V,{htmlFor:i,id:f,$size:n,$disabled:u,className:j,children:a}),y&&t.jsx(M,{variant:v})]}),t.jsxs(W,{$size:n,$error:!1,$disabled:!0,$readOnly:!1,$isFocused:!1,$filled:!1,className:k,children:[t.jsx(S,{ref:L,id:i,type:d,placeholder:"Loading...",disabled:!0,value:"",readOnly:!0,$size:n,className:H,"aria-busy":"true","aria-label":C||"Loading"}),t.jsx(K,{$size:n,children:t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"9.42 9.42",children:t.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 8 8",to:"360 8 8",dur:"1s",repeatCount:"indefinite"})})})})]})]}):re?t.jsxs(F,{$fullWidth:I,className:E,style:R,children:[h&&a&&t.jsxs(N,{children:[t.jsx(V,{htmlFor:i,id:f,$size:n,$disabled:u,className:j,children:a}),y&&t.jsx(M,{variant:v})]}),t.jsx(W,{$size:n,$error:!1,$disabled:!0,$readOnly:!1,$isFocused:!1,$filled:!1,className:k,children:t.jsx(S,{ref:L,id:i,type:d,placeholder:p,disabled:!0,value:"",readOnly:!0,$size:n,className:H,"aria-label":C||p})}),_&&p&&t.jsx(ee,{text:p,state:"default",size:A,showIcon:!0,className:Q})]}):t.jsxs(F,{$fullWidth:I,className:E,style:R,children:[h&&a&&t.jsxs(N,{children:[t.jsx(V,{htmlFor:i,id:f,$size:n,$disabled:u,className:j,children:a}),y&&t.jsx(M,{variant:v})]}),t.jsxs(W,{$size:n,$error:Z,$disabled:u,$readOnly:D,$isFocused:fe,$filled:!!J,className:k,onMouseEnter:$e,onMouseLeave:be,children:[U&&t.jsx(K,{$size:n,children:U}),t.jsx(S,{as:me,ref:L,id:i,type:d,name:oe,placeholder:G,value:J,defaultValue:ie,onChange:se,onFocus:he,onBlur:ye,onKeyDown:ve,disabled:u,readOnly:D,required:O,"aria-label":C||(a?void 0:G),"aria-labelledby":a?f:void 0,"aria-describedby":ge,"aria-invalid":Z,"aria-required":O,$size:n,className:H,...c}),B&&t.jsx(K,{$size:n,children:B})]}),_&&z&&t.jsx(ee,{text:z,state:xe,size:A,showIcon:!0,className:Q})]})});ae.displayName="InputField";ae.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Polymorphic prop - render as different element
@default 'input'`},label:{required:!1,tsType:{name:"string"},description:"Input field label"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the input"},helperTextState:{required:!1,tsType:{name:"union",raw:"'default' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`State of the helper text (controls icon and color)
@default 'default'
Options: 'default' | 'info' | 'warning' | 'error'`,defaultValue:{value:"'default'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:`| 'text'
| 'password'
| 'number'
| 'email'
| 'search'
| 'tel'
| 'url'
| 'date'
| 'datetime-local'
| 'time'`,elements:[{name:"literal",value:"'text'"},{name:"literal",value:"'password'"},{name:"literal",value:"'number'"},{name:"literal",value:"'email'"},{name:"literal",value:"'search'"},{name:"literal",value:"'tel'"},{name:"literal",value:"'url'"},{name:"literal",value:"'date'"},{name:"literal",value:"'datetime-local'"},{name:"literal",value:"'time'"}]},description:`Input type
@default 'text'`,defaultValue:{value:"'text'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Input size
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the field is disabled",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the field is read-only (non-editable)",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Whether the field has an error",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows loading indicator
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows empty state message
@default false`,defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty state message
@default 'No data available'`,defaultValue:{value:"'No data available'",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Invalid state (alias for error)
@default false`,defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show the label
@default true`,defaultValue:{value:"true",computed:!1}},showFieldImportance:{required:!1,tsType:{name:"boolean"},description:`Whether to show field importance (Required indicator)
@default false`,defaultValue:{value:"false",computed:!1}},fieldImportanceVariant:{required:!1,tsType:{name:"union",raw:"'mandatory' | 'optional' | 'asterisk'",elements:[{name:"literal",value:"'mandatory'"},{name:"literal",value:"'optional'"},{name:"literal",value:"'asterisk'"}]},description:`Field importance variant
@default 'mandatory'`,defaultValue:{value:"'asterisk'",computed:!1}},showInlineText:{required:!1,tsType:{name:"boolean"},description:`Whether to show inline helping text
@default true`,defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the start of the input"},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the end of the input"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},value:{required:!1,tsType:{name:"string"},description:"Input value (for controlled component)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value (for uncontrolled component)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Full width input
@default false`,defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},id:{required:!1,tsType:{name:"string"},description:"Input id attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by for accessibility"},className:{required:!1,tsType:{name:"string"},description:"Custom class name for root container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for root container"},labelClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for label"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for input wrapper"},inputClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for input element"},helperTextClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for helper text"},onAfterFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired after focus animation completes"},onAfterBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired after blur animation completes"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when input value is cleared"},onEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback fired on Enter key press"},onEscape:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback fired on Escape key press"}},composes:["Omit"]};export{ae as I};
