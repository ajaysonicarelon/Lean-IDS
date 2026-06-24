import{j as l}from"./jsx-runtime-DSvmvvsx.js";import{r as m}from"./index-B0WjJBI_.js";import{c as i,s as a}from"./styled-components.browser.esm-BIi91Tbq.js";import{F as Q}from"./FieldImportance-finWzFXd.js";import{H as U}from"./HelpingText-ClsYb8vx.js";const X=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  width: ${({$fullWidth:e})=>e?"100%":"300px"};
  font-family: ${({theme:e})=>e.fonts.primary};
`,Y=i.div`
  display: flex;
  gap: 4px;
  align-items: flex-start;
`,Z=i.label`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  color: ${({theme:e,$disabled:t})=>t?e.colors.palette.neutral[400]:e.colors.palette.neutral[900]};
  white-space: nowrap;
  
  ${({$size:e,theme:t})=>e==="large"?a`
        font-size: ${t.fontSizes[16]};
        line-height: ${t.lineHeights[19]};
      `:a`
      font-size: ${t.fontSizes[14]};
      line-height: ${t.lineHeights[16]};
    `}
`;i.span`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  color: ${({theme:e})=>e.colors.palette.error[500]};
  white-space: nowrap;
`;const ee={xsmall:a`
    height: 28px;
    padding: ${({theme:e})=>e.spacing[2]};
    gap: ${({theme:e})=>e.spacing[2]};
  `,small:a`
    height: 32px;
    padding: ${({theme:e})=>e.spacing[2]};
    gap: ${({theme:e})=>e.spacing[2]};
  `,default:a`
    height: 40px;
    padding: ${({theme:e})=>e.spacing[2]};
    gap: ${({theme:e})=>e.spacing[2]};
  `,large:a`
    height: 50px;
    padding: ${({theme:e})=>e.spacing[2]};
    gap: ${({theme:e})=>e.spacing[2]};
  `},te=i.div`
  display: flex;
  align-items: center;
  background-color: ${({theme:e,$disabled:t,$readOnly:r})=>t?e.colors.palette.neutral[100]:r?e.colors.palette.primary[50]:e.colors.palette.neutral[50]};
  border-width: ${({$isFocused:e})=>e?"2px":"1px"};
  border-style: solid;
  border-color: ${({theme:e,$error:t,$disabled:r,$readOnly:o,$isFocused:n})=>r||o?e.colors.palette.neutral[300]:t&&n||t?e.colors.palette.error[500]:n?e.colors.semantic.focus.input:e.colors.palette.neutral[400]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s ease-in-out;
  
  ${({$size:e})=>ee[e]}
  
  ${({$disabled:e})=>e&&a`
      cursor: not-allowed;
      opacity: 0.6;
    `}
  
  ${({$readOnly:e})=>e&&a`
      cursor: default;
      opacity: 0.8;
    `}
  
  ${({$error:e,$isFocused:t,theme:r})=>e&&t&&a`
      background-color: ${r.colors.palette.error[50]};
    `}
`,ae=i.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({theme:e})=>e.fonts.primary};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  padding: 0;
  min-width: 0;
  
  /* Typography based on Figma design tokens */
  ${({$size:e,theme:t})=>e==="large"?a`
        font-size: ${t.fontSizes[16]};
        line-height: ${t.lineHeights[19]};
        font-weight: ${t.fontWeights.medium}; /* 500 for filled state */
      `:a`
      font-size: ${t.fontSizes[14]};
      line-height: ${t.lineHeights[16]};
      font-weight: ${t.fontWeights.medium}; /* 500 for filled state */
    `}
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.palette.neutral[400]};
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
`,I=i.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  
  ${({$size:e})=>{const t=e==="large"?"24px":"16px";return a`
      width: ${t};
      height: ${t};
    `}}
  
  svg {
    width: 100%;
    height: 100%;
  }
`,q=m.forwardRef(({label:e,helperText:t,helperTextState:r="default",type:o="text",size:n="default",required:g=!1,disabled:u=!1,readOnly:h=!1,error:R=!1,showLabel:E=!0,showFieldImportance:F=!1,fieldImportanceVariant:H="asterisk",showInlineText:z=!0,leadingIcon:y,trailingIcon:v,placeholder:b,value:$,defaultValue:W,onChange:V,onFocus:d,onBlur:p,fullWidth:k=!1,name:j,id:L,className:S,"aria-label":M,"aria-describedby":C,...N},A)=>{const O=m.useId(),s=L||O,B=`${s}-helper-text`,x=`${s}-label`,[D,w]=m.useState(!1),c=t,T=R,_=[c?B:null,C].filter(Boolean).join(" ")||void 0,P=f=>{w(!0),d==null||d(f)},G=f=>{w(!1),p==null||p(f)},J=r,K=n==="large"?"large":"default";return l.jsxs(X,{$fullWidth:k,className:S,children:[E&&e&&l.jsxs(Y,{children:[l.jsx(Z,{htmlFor:s,id:x,$size:n,$disabled:u,children:e}),F&&l.jsx(Q,{variant:H})]}),l.jsxs(te,{$size:n,$error:T,$disabled:u,$readOnly:h,$isFocused:D,$filled:!!$,children:[y&&l.jsx(I,{$size:n,children:y}),l.jsx(ae,{ref:A,id:s,type:o,name:j,placeholder:b,value:$,defaultValue:W,onChange:V,onFocus:P,onBlur:G,disabled:u,readOnly:h,required:g,"aria-label":M||(e?void 0:b),"aria-labelledby":e?x:void 0,"aria-describedby":_,"aria-invalid":T,"aria-required":g,$size:n,...N}),v&&l.jsx(I,{$size:n,children:v})]}),z&&c&&l.jsx(U,{text:c,state:J,size:K,showIcon:!0})]})});q.displayName="InputField";q.__docgenInfo={description:"",methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:"Input field label"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the input"},helperTextState:{required:!1,tsType:{name:"union",raw:"'default' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`State of the helper text (controls icon and color)
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
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Whether the field is required",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the field is disabled",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the field is read-only (non-editable)",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Whether the field has an error",defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show the label
@default true`,defaultValue:{value:"true",computed:!1}},showFieldImportance:{required:!1,tsType:{name:"boolean"},description:`Whether to show field importance (Required indicator)
@default false`,defaultValue:{value:"false",computed:!1}},fieldImportanceVariant:{required:!1,tsType:{name:"union",raw:"'mandatory' | 'optional' | 'asterisk'",elements:[{name:"literal",value:"'mandatory'"},{name:"literal",value:"'optional'"},{name:"literal",value:"'asterisk'"}]},description:`Field importance variant
@default 'mandatory'`,defaultValue:{value:"'asterisk'",computed:!1}},showInlineText:{required:!1,tsType:{name:"boolean"},description:`Whether to show inline helping text
@default true`,defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the start of the input"},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the end of the input"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text"},value:{required:!1,tsType:{name:"string"},description:"Input value (for controlled component)"},defaultValue:{required:!1,tsType:{name:"string"},description:"Default value (for uncontrolled component)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},fullWidth:{required:!1,tsType:{name:"boolean"},description:`Full width input
@default false`,defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},id:{required:!1,tsType:{name:"string"},description:"Input id attribute"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA described by for accessibility"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}},composes:["Omit"]};export{q as I};
