import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{r as X}from"./index-B0WjJBI_.js";import{g as p}from"./styled-components.browser.esm-CuwBLqEg.js";const Y=p.div`
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: ${({$clickable:e,$disabled:r})=>r?"not-allowed":e?"pointer":"default"};
  opacity: ${({$disabled:e})=>e?.5:1};
  width: ${({$width:e})=>e||"auto"};
  max-width: ${({$maxWidth:e})=>e};
  min-width: ${({$minWidth:e})=>e};
  
  ${({$size:e,theme:r})=>{switch(e){case"large":return`
          gap: ${r.spacing[2]};
          padding: ${r.spacing[2]} ${r.spacing[3]};
          font-size: ${r.fontSizes[14]};
          line-height: ${r.lineHeights[16]};
        `;case"medium":return`
          gap: ${r.spacing[2]};
          padding: ${r.spacing[1]} ${r.spacing[2]};
          font-size: ${r.fontSizes[16]};
          line-height: ${r.lineHeights[19]};
        `;case"small":default:return`
          gap: ${r.spacing[1]};
          padding: ${r.spacing[1]} ${r.spacing[2]};
          font-size: ${r.fontSizes[14]};
          line-height: ${r.lineHeights[16]};
        `}}}
  
  ${({theme:e,$variant:r,$type:o,$isActive:a,$isInvalid:u})=>{if(u)return`
        background-color: ${e.colors.palette.error[50]};
        color: ${e.colors.palette.error[700]};
        border: 1px solid ${e.colors.palette.error[500]};
      `;if(r==="filled")switch(o){case"success":return`
            background-color: ${a?e.colors.palette.success[600]:e.colors.palette.success[500]};
            color: ${e.colors.palette.neutral[50]};
            border: none;
          `;case"warning":return`
            background-color: ${a?e.colors.palette.warning[600]:e.colors.palette.warning[500]};
            color: ${e.colors.palette.warning[900]};
            border: none;
          `;case"error":return`
            background-color: ${a?e.colors.palette.error[600]:e.colors.palette.error[500]};
            color: ${e.colors.palette.neutral[50]};
            border: none;
          `;case"neutral":return`
            background-color: ${a?e.colors.palette.neutral[800]:e.colors.palette.neutral[700]};
            color: ${e.colors.palette.neutral[50]};
            border: none;
          `;case"default":default:return`
            background-color: ${a?e.colors.palette.primary[600]:e.colors.palette.primary[500]};
            color: ${e.colors.palette.neutral[50]};
            border: none;
          `}if(r==="outlined")switch(o){case"success":return`
            background-color: ${a?e.colors.palette.success[100]:e.colors.palette.success[50]};
            color: ${e.colors.palette.success[500]};
            border: 1px solid ${e.colors.palette.success[500]};
          `;case"warning":return`
            background-color: ${a?e.colors.palette.warning[200]:e.colors.palette.warning[100]};
            color: ${e.colors.palette.warning[700]};
            border: 1px solid ${e.colors.palette.warning[700]};
          `;case"error":return`
            background-color: ${a?e.colors.palette.error[100]:e.colors.palette.error[50]};
            color: ${e.colors.palette.error[500]};
            border: 1px solid ${e.colors.palette.error[500]};
          `;case"neutral":return`
            background-color: ${a?e.colors.palette.neutral[200]:e.colors.palette.neutral[100]};
            color: ${e.colors.palette.neutral[700]};
            border: 1px solid ${e.colors.palette.neutral[700]};
          `;case"default":default:return`
            background-color: ${a?e.colors.palette.primary[100]:e.colors.palette.primary[50]};
            color: ${e.colors.palette.primary[400]};
            border: 1px solid ${e.colors.palette.primary[400]};
          `}return""}}
  
  &:hover {
    ${({$clickable:e,$disabled:r,$isLoading:o,theme:a,$variant:u,$type:m})=>{if(r||!e||o)return"";if(u==="filled")switch(m){case"success":return`background-color: ${a.colors.palette.success[600]};`;case"warning":return`background-color: ${a.colors.palette.warning[600]};`;case"error":return`background-color: ${a.colors.palette.error[600]};`;case"neutral":return`background-color: ${a.colors.palette.neutral[800]};`;case"default":default:return`background-color: ${a.colors.palette.primary[600]};`}return u==="outlined"?"opacity: 0.8;":""}}
  }
  
  &:active {
    ${({$clickable:e,$disabled:r,$isLoading:o})=>r||!e||o?"":"transform: scale(0.98);"}
  }
  
  &:focus-visible {
    ${({$clickable:e,theme:r})=>e&&`
      outline: 2px solid ${r.colors.semantic.focus.indicator};
      outline-offset: 2px;
    `}
  }
`,Z=p.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,C=p.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({theme:e})=>e.spacing[7]};
  height: ${({theme:e})=>e.spacing[7]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,j=p.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: ${({theme:e})=>e.spacing[7]};
  height: ${({theme:e})=>e.spacing[7]};
  cursor: ${({$clickable:e})=>e?"pointer":"default"};
  transition: opacity 0.2s ease-in-out;
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    ${({$clickable:e})=>e&&"opacity: 0.7;"}
  }
  
  &:focus-visible {
    ${({theme:e})=>`
      outline: 2px solid ${e.colors.semantic.focus.indicator};
      outline-offset: 2px;
      border-radius: ${e.borderRadius.sm};
    `}
  }
`,A=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[7]};
  height: ${({theme:e})=>e.spacing[7]};
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  svg {
    width: 100%;
    height: 100%;
    animation: spin 1s linear infinite;
  }
`,ee=p.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[7]};
  height: ${({theme:e})=>e.spacing[7]};
  color: ${({theme:e})=>e.colors.palette.error[500]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,re=()=>n.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),N=()=>n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"10 20"})}),E=()=>n.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M8 1C4.13 1 1 4.13 1 8s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm1 10H7V9h2v2zm0-3H7V5h2v3z"})}),z=X.forwardRef(({label:e,size:r="small",variant:o="filled",type:a="default",as:u,leadingIcon:m,trailingIcon:$,renderLeadingIcon:b,renderTrailingIcon:v,renderLabel:h,onClick:d,onTrailingIconClick:l,onRemove:s,disabled:c=!1,isLoading:i=!1,isInvalid:f=!1,isActive:x=!1,errorMessage:g,loadingText:M="Loading",className:S,labelClassName:L,leadingIconClassName:y,trailingIconClassName:T,style:V,width:W,maxWidth:H,minWidth:R,tabIndex:D,role:I,"aria-label":_,...K},P)=>{const B=u||"div",w=!!d&&!c&&!i,q=t=>{t.stopPropagation(),!c&&!i&&l&&l(t),!c&&!i&&s&&s()},G=t=>{!c&&!i&&d&&d(t)},O=t=>{(t.key==="Enter"||t.key===" ")&&w&&(t.preventDefault(),d==null||d(t)),t.key==="Escape"&&t.currentTarget.blur()},k=t=>{(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),t.stopPropagation(),!c&&!i&&l&&l(t),!c&&!i&&s&&s())},U=()=>b?n.jsx(C,{className:y,children:b({size:r,type:a})}):i?n.jsx(A,{className:y,"aria-label":M,children:n.jsx(N,{})}):f&&g?n.jsx(ee,{className:y,"aria-label":"Error",children:n.jsx(E,{})}):m?n.jsx(C,{className:y,children:m}):null,F=()=>v?n.jsx(j,{className:T,$clickable:!!l||!!s,onClick:q,onKeyDown:k,tabIndex:l||s?0:void 0,role:l||s?"button":void 0,"aria-label":l||s?"Remove":void 0,children:v({size:r,type:a})}):$?n.jsx(j,{className:T,$clickable:!!l||!!s,onClick:q,onKeyDown:k,tabIndex:l||s?0:void 0,role:l||s?"button":void 0,"aria-label":l||s?"Remove":void 0,children:$}):null,J=()=>h?h(e):e,Q=()=>{const t={"aria-label":_,"aria-disabled":c||i,"aria-busy":i,"aria-invalid":f,"aria-pressed":x};return g&&f&&(t["aria-describedby"]="chip-error"),t};return n.jsxs(Y,{ref:P,as:B,$size:r,$variant:o,$type:a,$disabled:c,$clickable:w,$isLoading:i,$isInvalid:f,$isActive:x,$width:W,$maxWidth:H,$minWidth:R,onClick:G,onKeyDown:O,className:S,style:V,tabIndex:w?D??0:void 0,role:I||(w?"button":void 0),...Q(),...K,children:[U(),n.jsx(Z,{className:L,children:J()}),F(),f&&g&&n.jsx("span",{id:"chip-error",style:{position:"absolute",width:"1px",height:"1px",overflow:"hidden"},children:g})]})});z.displayName="Chip";z.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},description:"Chip label text or custom content"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Size variant
@default 'small'`,defaultValue:{value:"'small'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:`Visual variant
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:`Type/color scheme
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},as:{required:!1,tsType:{name:"ElementType"},description:`Polymorphic component type - render as different HTML element
@default 'div'`},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Leading icon element"},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Trailing icon element (typically close/remove icon)"},renderLeadingIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { size: ChipSize; type: ChipType }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ size: ChipSize; type: ChipType }",signature:{properties:[{key:"size",value:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!0}},{key:"type",value:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}],required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:"Custom render function for leading icon slot"},renderTrailingIcon:{required:!1,tsType:{name:"signature",type:"function",raw:"(props: { size: ChipSize; type: ChipType }) => ReactNode",signature:{arguments:[{type:{name:"signature",type:"object",raw:"{ size: ChipSize; type: ChipType }",signature:{properties:[{key:"size",value:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}],required:!0}},{key:"type",value:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}],required:!0}}]}},name:"props"}],return:{name:"ReactNode"}}},description:"Custom render function for trailing icon slot"},renderLabel:{required:!1,tsType:{name:"signature",type:"function",raw:"(label: string | ReactNode) => ReactNode",signature:{arguments:[{type:{name:"union",raw:"string | ReactNode",elements:[{name:"string"},{name:"ReactNode"}]},name:"label"}],return:{name:"ReactNode"}}},description:"Custom render function for label slot"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:"Click handler for the chip"},onTrailingIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:"Click handler for trailing icon (e.g., remove action)"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Remove handler (legacy support)
@deprecated Use onTrailingIconClick instead`},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the chip is disabled
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether the chip is in loading state
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Whether the chip is in error state
@default false`,defaultValue:{value:"false",computed:!1}},isActive:{required:!1,tsType:{name:"boolean"},description:`Whether the chip is in active/selected state
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display"},loadingText:{required:!1,tsType:{name:"string"},description:`Loading text for screen readers
@default 'Loading'`,defaultValue:{value:"'Loading'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name for root container"},labelClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for label"},leadingIconClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for leading icon wrapper"},trailingIconClassName:{required:!1,tsType:{name:"string"},description:"Custom class name for trailing icon wrapper"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles"},width:{required:!1,tsType:{name:"string"},description:"Custom width (e.g., '200px', '50%', 'min(90vw, 600px)')"},maxWidth:{required:!1,tsType:{name:"string"},description:"Maximum width constraint"},minWidth:{required:!1,tsType:{name:"string"},description:"Minimum width constraint"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility"},role:{required:!1,tsType:{name:"string"},description:"ARIA role override"},tabIndex:{required:!1,tsType:{name:"number"},description:"Tab index for keyboard navigation"}},composes:["Omit"]};re.__docgenInfo={description:"",methods:[],displayName:"CloseIcon"};N.__docgenInfo={description:"",methods:[],displayName:"SpinnerIcon"};E.__docgenInfo={description:"",methods:[],displayName:"ErrorIconSVG"};export{z as C,re as a};
