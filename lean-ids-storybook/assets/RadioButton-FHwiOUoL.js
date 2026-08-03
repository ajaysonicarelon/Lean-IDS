import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{r as T}from"./index-B0WjJBI_.js";import{g as s}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as f}from"./Typography-DlcmwxwF.js";const g=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,R=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,L=s.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,I=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  transition: ${({theme:e})=>{var t;return((t=e.transitions)==null?void 0:t.default)||"all 300ms cubic-bezier(0.4, 0, 0.2, 1)"}};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  position: relative;
  
  ${L}:focus-visible + & {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.semantic.focus.indicator};
  }
  
  ${({$size:e,theme:t})=>{const a=e==="large"?t.spacing[10]:t.spacing[7];return`
      width: ${a};
      height: ${a};
    `}}
  
  ${({theme:e,$checked:t,$disabled:a,$isInvalid:r})=>r?`
        background-color: ${e.colors.palette.error[50]};
        border: ${e.borderWidth[2]} solid ${e.colors.palette.error[500]};
      `:a&&t?`
        border: ${e.borderWidth[2]} solid ${e.colors.palette.neutral[300]};
      `:a?`
        border: ${e.borderWidth[2]} solid ${e.colors.palette.neutral[300]};
      `:t?`
        border: ${e.borderWidth[2]} solid ${e.colors.palette.primary[500]};
      `:`
      border: ${e.borderWidth[2]} solid ${e.colors.palette.neutral[400]};
    `}
  
  &:hover {
    ${({theme:e,$checked:t,$disabled:a})=>a?"":t?`border-color: ${e.colors.palette.primary[600]};`:`border-color: ${e.colors.palette.neutral[500]};`}
  }
`,X=s.div`
  border-radius: 50%;
  transition: ${({theme:e})=>{var t;return((t=e.transitions)==null?void 0:t.default)||"all 300ms cubic-bezier(0.4, 0, 0.2, 1)"}};
  
  ${({$size:e,theme:t})=>{const a=e==="large"?t.spacing[4]:t.spacing[3];return`
      width: ${a};
      height: ${a};
    `}}
  
  background-color: ${({theme:e,$disabled:t})=>t?e.colors.palette.neutral[300]:e.colors.palette.primary[500]};
`,Y=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({$size:e,theme:t})=>{const a=e==="large"?t.spacing[6]:t.spacing[5];return`
      width: ${a};
      height: ${a};
    `}}
  
  color: ${({theme:e,$disabled:t})=>t?e.colors.palette.neutral[400]:e.colors.palette.neutral[600]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,ee=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[7]};
  height: ${({theme:e})=>e.spacing[7]};
  color: ${({theme:e})=>e.colors.palette.primary[500]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,te=()=>n.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 10.5L4 6.5L4.7 5.8L8 9.1L11.3 5.8L12 6.5L8 10.5Z"})}),M=T.forwardRef(({as:e,label:t,size:a="default",checked:r=!1,disabled:i=!1,isLoading:x=!1,isEmpty:$=!1,isInvalid:v=!1,errorMessage:E,emptyMessage:k="No options available",showTrailingIcon:H=!1,onChange:N,onFocus:B,onBlur:D,onKeyDown:F,onMouseEnter:o,onMouseLeave:l,onSelect:y,onDeselect:b,className:d,inputClassName:V,labelClassName:W,iconClassName:z,customLabel:h,customIcon:q,customTrailingIcon:j,style:u,maxWidth:c,name:S,value:A,id:K,..._},P)=>{const O=T.useId(),w=K||O,p=e||"div";T.useEffect(()=>{r&&y?y():!r&&b&&b()},[r,y,b]);const C=()=>{if(i||x||$||v)return;const m=document.getElementById(w);m&&m.click()},Z=m=>{m.preventDefault(),C()},G=i?"#A3A3A3":"#171717",J=()=>h?h({label:t,checked:r,disabled:i}):t?n.jsx(f,{variant:a==="large"?"body":"caption",className:W,style:{color:G,whiteSpace:"nowrap"},children:t}):null,Q=()=>q?q({checked:r,disabled:i}):r&&n.jsx(X,{$size:a,$disabled:i}),U=()=>j?j({disabled:i}):n.jsx(te,{});return x?n.jsx(g,{as:p,className:d,style:{...u,maxWidth:c},onMouseEnter:o,onMouseLeave:l,children:n.jsxs(R,{children:[n.jsx(ee,{children:n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"10 20",children:n.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 8 8",to:"360 8 8",dur:"1s",repeatCount:"indefinite"})})})}),n.jsx(f,{variant:"caption",style:{color:"#737373"},children:"Loading..."})]})}):$?n.jsx(g,{as:p,className:d,style:{...u,maxWidth:c},onMouseEnter:o,onMouseLeave:l,children:n.jsx(f,{variant:"caption",style:{color:"#A3A3A3"},children:k})}):v&&E?n.jsx(g,{as:p,className:d,style:{...u,maxWidth:c},onMouseEnter:o,onMouseLeave:l,children:n.jsxs(R,{children:[n.jsx(I,{$size:a,$checked:!1,$disabled:!0,$isInvalid:!0,role:"presentation"}),n.jsx(f,{variant:"caption",weight:"medium",style:{color:"var(--color-semantic-text-error)"},children:E})]})}):n.jsxs(g,{as:p,className:d,style:{...u,maxWidth:c},onMouseEnter:o,onMouseLeave:l,children:[n.jsxs(R,{children:[n.jsx(L,{ref:P,id:w,checked:r,disabled:i,onChange:N,onFocus:B,onBlur:D,onKeyDown:F,name:S,value:A,"aria-checked":r,"aria-disabled":i,"aria-invalid":v,className:V,$size:a,..._}),n.jsx(I,{$size:a,$checked:r,$disabled:i,$isInvalid:!1,onClick:C,role:"presentation",className:z,children:Q()}),(t||h)&&n.jsx("label",{htmlFor:w,onClick:Z,children:J()})]}),H&&n.jsx(Y,{$size:a,$disabled:i,children:U()})]})});M.displayName="RadioButton";M.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!1,tsType:{name:"string"},description:"Radio button label text"},name:{required:!1,tsType:{name:"string"},description:"Input name attribute (required for radio groups)"},value:{required:!1,tsType:{name:"string"},description:"Input value attribute"},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Size variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show trailing icon (expand_more icon)
@default false`,defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:`Whether the radio button is checked/selected
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the radio button is disabled
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows spinner
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows empty message
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Error/invalid state - shows error styling and message
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty message to display when isEmpty is true
@default 'No options available'`,defaultValue:{value:"'No options available'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler - called when radio selection changes"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Key down handler"},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse enter handler"},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse leave handler"},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when radio button is selected"},onDeselect:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when radio button is deselected (if another radio in group is selected)"},className:{required:!1,tsType:{name:"string"},description:"Custom class name for root container"},inputClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for hidden input element"},labelClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for label text"},iconClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for radio icon"},customLabel:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: { 
  label?: string; 
  checked: boolean; 
  disabled: boolean;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{ 
  label?: string; 
  checked: boolean; 
  disabled: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"checked",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom label render function
Receives label text, checked state, and disabled state`},customIcon:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: { 
  checked: boolean; 
  disabled: boolean;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{ 
  checked: boolean; 
  disabled: boolean;
}`,signature:{properties:[{key:"checked",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom radio icon render function
Receives checked and disabled state`},customTrailingIcon:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: { 
  disabled: boolean;
}) => React.ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{ 
  disabled: boolean;
}`,signature:{properties:[{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom trailing icon render function
Receives disabled state`},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for root container"},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Maximum width for the radio button container"},as:{required:!1,tsType:{name:"C"},description:`The element type to render as
@default 'div'`}},composes:["Omit"]};export{M as R};
