import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{r as N}from"./index-B0WjJBI_.js";import{g as l}from"./styled-components.browser.esm-CuwBLqEg.js";const V=l.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:r})=>r.fonts.primary};
  font-weight: ${({theme:r})=>r.fontWeights.semibold};
  border: none;
  cursor: ${({$disabled:r,$isLoading:e})=>r||e?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  user-select: none;
  width: ${({$fullWidth:r})=>r?"100%":"auto"};
  opacity: ${({$isLoading:r})=>r?.7:1};
  
  &:focus {
    outline: none;
  }
  
  &:focus-visible {
    outline: ${({theme:r})=>r.borderWidth[2]} solid ${({theme:r})=>r.colors.semantic.focus.indicator};
    outline-offset: ${({theme:r})=>r.spacing[1]};
  }
  
  ${({$size:r,theme:e})=>{switch(r){case"xsmall":return`
          gap: ${e.spacing[3]};
          padding: ${e.spacing[1]} ${e.spacing[2]};
          font-size: ${e.fontSizes[12]};
          line-height: ${e.lineHeights[14]};
          border-radius: ${e.borderRadius.sm};
          min-height: calc(${e.lineHeights[14]} + ${e.spacing[1]} * 2);
        `;case"small":return`
          gap: ${e.spacing[3]};
          padding: ${e.spacing[2]} ${e.spacing[3]};
          font-size: ${e.fontSizes[14]};
          line-height: ${e.lineHeights[16]};
          border-radius: ${e.borderRadius.sm};
          min-height: calc(${e.lineHeights[16]} + ${e.spacing[2]} * 2);
        `;case"large":return`
          gap: ${e.spacing[3]};
          padding: ${e.spacing[3]} ${e.spacing[4]};
          font-size: ${e.fontSizes[16]};
          line-height: ${e.lineHeights[19]};
          border-radius: ${e.borderRadius.sm};
          min-height: calc(${e.lineHeights[19]} + ${e.spacing[3]} * 2);
        `;case"xlarge":return`
          gap: ${e.spacing[3]};
          padding: ${e.spacing[3]} ${e.spacing[5]};
          font-size: ${e.fontSizes[18]};
          line-height: ${e.lineHeights[21]};
          border-radius: ${e.borderRadius.sm};
          min-height: calc(${e.lineHeights[21]} + ${e.spacing[3]} * 2);
        `;case"medium":default:return`
          gap: ${e.spacing[3]};
          padding: ${e.spacing[4]} ${e.spacing[6]};
          font-size: ${e.fontSizes[16]};
          line-height: ${e.lineHeights[19]};
          border-radius: ${e.borderRadius.sm};
          min-height: calc(${e.lineHeights[19]} + ${e.spacing[4]} * 2);
        `}}}
  
  ${({theme:r,$variant:e,$buttonType:o,$disabled:a,$isInvalid:t})=>e==="primary"?a?`
          background-color: ${r.colors.palette.neutral[300]};
          color: ${r.colors.palette.neutral[500]};
          pointer-events: none;
        `:t?`
          background-color: ${r.colors.palette.error[500]};
          color: ${r.colors.palette.neutral[50]};
          
          &:hover {
            background-color: ${r.colors.palette.error[400]};
          }
          
          &:active {
            background-color: ${r.colors.palette.error[600]};
          }
        `:o==="safe"?`
          background-color: ${r.colors.palette.success[500]};
          color: ${r.colors.palette.neutral[50]};
          
          &:hover {
            background-color: ${r.colors.palette.success[300]};
          }
          
          &:active {
            background-color: ${r.colors.palette.success[400]};
          }
        `:o==="warning"?`
          background-color: ${r.colors.palette.warning[700]};
          color: ${r.colors.palette.neutral[50]};
          
          &:hover {
            background-color: ${r.colors.palette.warning[500]};
          }
          
          &:active {
            background-color: ${r.colors.palette.warning[600]};
          }
        `:o==="alert"?`
          background-color: ${r.colors.palette.error[500]};
          color: ${r.colors.palette.neutral[50]};
          
          &:hover {
            background-color: ${r.colors.palette.error[300]};
          }
          
          &:active {
            background-color: ${r.colors.palette.error[400]};
          }
        `:`
        background-color: ${r.colors.palette.primary[400]};
        color: ${r.colors.palette.neutral[50]};
        
        &:hover {
          background-color: ${r.colors.palette.primary[300]};
        }
        
        &:active {
          background-color: ${r.colors.palette.primary[400]};
        }
      `:e==="secondary"?a?`
          background-color: transparent;
          color: ${r.colors.palette.neutral[400]};
          border: ${r.borderWidth[1]} solid ${r.colors.palette.neutral[300]};
          pointer-events: none;
        `:t?`
          background-color: transparent;
          color: ${r.colors.palette.error[500]};
          border: ${r.borderWidth[1]} solid ${r.colors.palette.error[500]};
          
          &:hover {
            background-color: transparent;
            border-color: ${r.colors.palette.error[400]};
            color: ${r.colors.palette.error[400]};
          }
          
          &:active {
            background-color: transparent;
            border-color: ${r.colors.palette.error[600]};
            color: ${r.colors.palette.error[600]};
          }
        `:o==="safe"?`
          background-color: transparent;
          color: ${r.colors.palette.success[500]};
          border: ${r.borderWidth[1]} solid ${r.colors.palette.success[500]};
          
          &:hover {
            background-color: transparent;
            border-color: ${r.colors.palette.success[300]};
            color: ${r.colors.palette.success[300]};
          }
          
          &:active {
            background-color: transparent;
            border-color: ${r.colors.palette.success[400]};
            color: ${r.colors.palette.success[400]};
          }
        `:o==="warning"?`
          background-color: transparent;
          color: ${r.colors.palette.warning[700]};
          border: ${r.borderWidth[1]} solid ${r.colors.palette.warning[700]};
          
          &:hover {
            background-color: transparent;
            border-color: ${r.colors.palette.warning[500]};
            color: ${r.colors.palette.warning[500]};
          }
          
          &:active {
            background-color: transparent;
            border-color: ${r.colors.palette.warning[600]};
            color: ${r.colors.palette.warning[600]};
          }
        `:o==="alert"?`
          background-color: transparent;
          color: ${r.colors.palette.error[500]};
          border: ${r.borderWidth[1]} solid ${r.colors.palette.error[500]};
          
          &:hover {
            background-color: transparent;
            border-color: ${r.colors.palette.error[300]};
            color: ${r.colors.palette.error[300]};
          }
          
          &:active {
            background-color: transparent;
            border-color: ${r.colors.palette.error[400]};
            color: ${r.colors.palette.error[400]};
          }
        `:`
        background-color: transparent;
        color: ${r.colors.palette.primary[400]};
        border: ${r.borderWidth[1]} solid ${r.colors.palette.primary[400]};
        
        &:hover {
          background-color: transparent;
          border-color: ${r.colors.palette.primary[300]};
          color: ${r.colors.palette.primary[300]};
        }
        
        &:active {
          background-color: transparent;
          border-color: ${r.colors.palette.primary[400]};
          color: ${r.colors.palette.primary[400]};
        }
      `:e==="tertiary"?a?`
          background-color: transparent;
          color: ${r.colors.palette.neutral[400]};
          border: none;
          pointer-events: none;
        `:t?`
          background-color: transparent;
          color: ${r.colors.palette.error[500]};
          border: none;
          
          &:hover {
            background-color: transparent;
            color: ${r.colors.palette.error[400]};
          }
          
          &:active {
            background-color: transparent;
            color: ${r.colors.palette.error[600]};
          }
        `:o==="safe"?`
          background-color: transparent;
          color: ${r.colors.palette.success[500]};
          border: none;
          
          &:hover {
            background-color: transparent;
            color: ${r.colors.palette.success[300]};
          }
          
          &:active {
            background-color: transparent;
            color: ${r.colors.palette.success[400]};
          }
        `:o==="warning"?`
          background-color: transparent;
          color: ${r.colors.palette.warning[700]};
          border: none;
          
          &:hover {
            background-color: transparent;
            color: ${r.colors.palette.warning[500]};
          }
          
          &:active {
            background-color: transparent;
            color: ${r.colors.palette.warning[600]};
          }
        `:o==="alert"?`
          background-color: transparent;
          color: ${r.colors.palette.error[500]};
          border: none;
          
          &:hover {
            background-color: transparent;
            color: ${r.colors.palette.error[300]};
          }
          
          &:active {
            background-color: transparent;
            color: ${r.colors.palette.error[400]};
          }
        `:`
        background-color: transparent;
        color: ${r.colors.palette.primary[400]};
        border: none;
        
        &:hover {
          background-color: transparent;
          color: ${r.colors.palette.primary[300]};
        }
        
        &:active {
          background-color: transparent;
          color: ${r.colors.palette.primary[400]};
        }
      `:""}
`,g=l.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({theme:r,$size:e})=>{switch(e){case"xsmall":return`
          width: ${r.spacing[4]};
          height: ${r.spacing[4]};
        `;case"small":return`
          width: ${r.spacing[7]};
          height: ${r.spacing[7]};
        `;case"large":return`
          width: ${r.spacing[5]};
          height: ${r.spacing[5]};
        `;case"xlarge":return`
          width: ${r.spacing[6]};
          height: ${r.spacing[6]};
        `;case"medium":default:return`
          width: ${r.spacing[7]};
          height: ${r.spacing[7]};
        `}}}
  
  svg {
    width: 100%;
    height: 100%;
  }
`,F=l.span`
  display: inline-flex;
  align-items: center;
`,S=l.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  pointer-events: none;
`,A=l.div`
  ${({theme:r,$size:e})=>{const a={xsmall:r.spacing[3],small:r.spacing[4],medium:r.spacing[4],large:r.spacing[5],xlarge:r.spacing[6]}[e];return`
      width: ${a};
      height: ${a};
      border: ${r.borderWidth[2]} solid currentColor;
      border-top-color: transparent;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    `}}
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`,f=N.forwardRef(({children:r,as:e,size:o="medium",variant:a="primary",buttonType:t="default",disabled:b=!1,isLoading:s=!1,isInvalid:c=!1,isEmpty:$=!1,leadingIcon:u,trailingIcon:d,loadingIndicator:v,showLabel:y=!0,type:m="button",onClick:k,onMouseEnter:w,onMouseLeave:T,onFocus:E,onBlur:M,className:q,style:x,iconClassName:p,labelClassName:B,fullWidth:H=!1,"aria-label":L,"aria-labelledby":z,"aria-describedby":R,...W},C)=>{const i=b||s,j=e||"button";return n.jsxs(V,{as:j,ref:C,$size:o,$buttonType:t,$variant:a,$disabled:i,$isLoading:s,$isInvalid:c,$isEmpty:$,$fullWidth:H,disabled:i,type:m,onClick:i?void 0:k,onMouseEnter:w,onMouseLeave:T,onFocus:E,onBlur:M,className:q,style:x,"aria-label":L,"aria-labelledby":z,"aria-describedby":R,"aria-busy":s,"aria-invalid":c,"aria-disabled":i,...W,children:[s&&n.jsx(S,{children:v||n.jsx(A,{$size:o})}),u&&n.jsx(g,{$size:o,className:p,children:u}),y&&n.jsx(F,{className:B,children:r}),d&&n.jsx(g,{$size:o,className:p,children:d})]})});f.displayName="Button";f.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Button label text"},as:{required:!1,tsType:{name:"ElementType"},description:`Polymorphic prop - render as different element
@default 'button'`},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xlarge'"}]},description:`Button size
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:`Visual variant
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},buttonType:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:`Button type (semantic meaning)
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the button is disabled",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state - shows spinner and disables interaction",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Invalid/error state - shows error styling",defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:"Empty state message (for specialized use cases)",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Leading icon element"},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Trailing icon element"},loadingIndicator:{required:!1,tsType:{name:"ReactNode"},description:"Custom loading indicator (replaces default spinner)"},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show label text
@default true`,defaultValue:{value:"true",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`Button type attribute
@default 'button'`,defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Click handler"},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Mouse enter handler"},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLButtonElement"}],raw:"MouseEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Mouse leave handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLButtonElement"}],raw:"FocusEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLButtonElement"}],raw:"FocusEvent<HTMLButtonElement>"},name:"event"}],return:{name:"void"}}},description:"Blur handler"},className:{required:!1,tsType:{name:"string"},description:"Custom class name for root element"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for root element"},iconClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for icon wrapper"},labelClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for label wrapper"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility (required for icon-only buttons)"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby for accessibility"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA describedby for accessibility"}},composes:["Omit"]};export{f as B};
