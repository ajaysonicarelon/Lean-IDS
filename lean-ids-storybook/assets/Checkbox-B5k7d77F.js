import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as C}from"./index-B0WjJBI_.js";import{g as l}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as h}from"./Typography-DlcmwxwF.js";const x=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,E=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,M=l.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,j=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  transition: ${({theme:e})=>{var r;return((r=e.transitions)==null?void 0:r.default)||"all 300ms cubic-bezier(0.4, 0, 0.2, 1)"}};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  
  ${M}:focus-visible + & {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.semantic.focus.indicator};
  }
  
  ${({$size:e,theme:r})=>{const n=e==="large"?r.spacing[10]:r.spacing[7];return`
      width: ${n};
      height: ${n};
    `}}
  
  ${({theme:e,$checked:r,$disabled:n,$isInvalid:s})=>s?`
        background-color: ${e.colors.palette.error[50]};
        border: ${e.borderWidth[1]} solid ${e.colors.palette.error[500]};
      `:n&&r?`
        background-color: ${e.colors.palette.neutral[300]};
        border: ${e.borderWidth[1]} solid ${e.colors.palette.neutral[300]};
      `:n?`
        background-color: ${e.colors.palette.neutral[50]};
        border: ${e.borderWidth[1]} solid ${e.colors.palette.neutral[300]};
      `:r?`
        background-color: ${e.colors.palette.primary[500]};
        border: ${e.borderWidth[1]} solid ${e.colors.palette.primary[500]};
      `:`
      background-color: ${e.colors.palette.neutral[50]};
      border: ${e.borderWidth[1]} solid ${e.colors.palette.neutral[400]};
    `}
  
  &:hover {
    ${({theme:e,$checked:r,$disabled:n})=>n?"":r?`border-color: ${e.colors.palette.primary[600]};`:`border-color: ${e.colors.palette.neutral[500]};`}
  }
  
  svg {
    width: 75%;
    height: 75%;
    color: ${({theme:e,$disabled:r,$isInvalid:n})=>n?e.colors.palette.error[600]:e.colors.palette.neutral[50]};  // White for normal checked
  }
`,Y=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({$size:e,theme:r})=>{const n=e==="large"?r.spacing[6]:r.spacing[5];return`
      width: ${n};
      height: ${n};
    `}}
  
  color: ${({theme:e,$disabled:r})=>r?e.colors.palette.neutral[400]:e.colors.palette.neutral[600]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,U=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[4]};
  height: ${({theme:e})=>e.spacing[4]};
  
  svg {
    width: 100%;
    height: 100%;
    color: ${({theme:e})=>e.colors.palette.neutral[600]};
  }
`,ee=()=>t.jsx("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M10 3L4.5 8.5L2 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),te=()=>t.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8.8 12H7.2V7.2H8.8V12ZM8.8 5.6H7.2V4H8.8V5.6Z"})}),I=C.forwardRef(({as:e,label:r,size:n="default",checked:s=!1,disabled:a=!1,isLoading:o=!1,isEmpty:H=!1,isInvalid:c=!1,errorMessage:R,emptyMessage:L="No options available",showTrailingIcon:N=!1,onChange:w,onFocus:S,onBlur:A,onKeyDown:V,onMouseEnter:d,onMouseLeave:u,onCheck:T,onUncheck:k,customLabel:p,customIcon:m,customTrailingIcon:f,className:g,inputClassName:D,labelClassName:F,iconClassName:W,style:y,maxWidth:v,name:B,value:z,id:K,...P},Z)=>{const _=C.useId(),$=K||_,b=e||"div";C.useEffect(()=>{s?T==null||T():k==null||k()},[s]);const O=i=>{a||o||w==null||w(i)},q=()=>{if(a||o)return;const i=document.getElementById($);i&&i.click()},G=i=>{i.preventDefault(),q()},J=()=>{if(p)return typeof p=="function"?p({label:r,checked:s,disabled:a||o||!1}):p;if(!r)return null;const i=a||o?"#A3A3A3":c?"var(--color-semantic-text-error)":"#1A1A1A";return t.jsx("label",{htmlFor:$,onClick:G,style:{cursor:a||o?"not-allowed":"pointer",userSelect:"none"},children:t.jsx(h,{variant:n==="large"?"body":"caption",className:F,style:{color:i,whiteSpace:"nowrap"},children:r})})},Q=()=>m?typeof m=="function"?m({checked:s,disabled:a||o||!1}):m:s&&t.jsx(ee,{}),X=()=>f?typeof f=="function"?f({disabled:a||o||!1}):f:t.jsx(te,{});return o?t.jsx(x,{as:b,className:g,style:{...y,maxWidth:v},onMouseEnter:d,onMouseLeave:u,children:t.jsxs(E,{children:[t.jsx(U,{children:t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"9.42 9.42",children:t.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 8 8",to:"360 8 8",dur:"1s",repeatCount:"indefinite"})})})}),t.jsx(h,{variant:"caption",style:{color:"#737373"},children:"Loading..."})]})}):H?t.jsx(x,{as:b,className:g,style:{...y,maxWidth:v},onMouseEnter:d,onMouseLeave:u,children:t.jsx(h,{variant:"caption",style:{color:"#A3A3A3"},children:L})}):c&&R?t.jsx(x,{as:b,className:g,style:{...y,maxWidth:v},onMouseEnter:d,onMouseLeave:u,children:t.jsxs(E,{children:[t.jsx(j,{$size:n,$checked:!1,$disabled:!0,$isInvalid:!0,role:"presentation"}),t.jsx(h,{variant:"caption",weight:"medium",style:{color:"var(--color-semantic-text-error)"},children:R})]})}):t.jsxs(x,{as:b,className:g,style:{...y,maxWidth:v},onMouseEnter:d,onMouseLeave:u,children:[t.jsxs(E,{children:[t.jsx(M,{ref:Z,id:$,checked:s,disabled:a,onChange:O,onFocus:S,onBlur:A,onKeyDown:V,name:B,value:z,"aria-checked":s,"aria-invalid":c,"aria-disabled":a,$size:n,className:D,...P}),t.jsx(j,{$size:n,$checked:s,$disabled:a,$isInvalid:c,onClick:q,role:"presentation",children:Q()}),J()]}),N&&t.jsx(Y,{$size:n,$disabled:a,className:W,children:X()})]})});I.displayName="Checkbox";I.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`Polymorphic prop - change the root element type
@default 'div'`},label:{required:!1,tsType:{name:"string"},description:"Checkbox label text"},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Size variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:`Whether the checkbox is checked
@default false`,defaultValue:{value:"false",computed:!1}},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},value:{required:!1,tsType:{name:"string"},description:"Input value attribute"},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show trailing icon (info icon)
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state - prevents interaction
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows spinner
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows empty message
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Invalid/error state - shows error styling
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display in error state"},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty message to display in empty state",defaultValue:{value:"'No options available'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for root container"},inputClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for checkbox input"},labelClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for label"},iconClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for trailing icon"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for root container"},maxWidth:{required:!1,tsType:{name:"string"},description:"Maximum width for checkbox container"},customLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { label?: string; checked: boolean; disabled: boolean }) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ label?: string; checked: boolean; disabled: boolean }",signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"checked",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom label renderer
@param props - Label props including label text
@returns Custom label element`},customIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { checked: boolean; disabled: boolean }) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ checked: boolean; disabled: boolean }",signature:{properties:[{key:"checked",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom checkbox icon renderer
@param props - Icon props including checked state
@returns Custom icon element`},customTrailingIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { disabled: boolean }) => React.ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ disabled: boolean }",signature:{properties:[{key:"disabled",value:{name:"boolean",required:!0}}]}},name:"props"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:`Custom trailing icon renderer
@param props - Icon props
@returns Custom trailing icon element`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Key down handler"},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse enter handler"},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse leave handler"},onCheck:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when checkbox becomes checked"},onUncheck:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when checkbox becomes unchecked"}},composes:["Omit"]};export{I as C};
