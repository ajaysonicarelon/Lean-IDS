import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{r as W}from"./index-B0WjJBI_.js";import{r as j}from"./index-Clv5cdFl.js";import{s as U,g as z}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as d}from"./Typography-DlcmwxwF.js";const R=z.div`
  position: fixed;
  display: ${({$visible:e})=>e?"flex":"none"};
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[2]}`};
  background: ${({theme:e})=>e.colors.palette.neutral[50]};
  border: ${({theme:e})=>e.borderWidth[1]} solid ${({theme:e,$isInvalid:t})=>t?e.colors.semantic.border.error:e.colors.palette.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.lg};
  box-shadow: ${({theme:e})=>e.shadows.md};
  width: ${({$maxWidth:e})=>e||"min(90vw, 15.8125rem)"}; /* Fluid width - acceptable */
  max-width: 90vw; /* Viewport-relative - acceptable */
  pointer-events: ${({$variant:e,$disabled:t})=>t?"none":e==="pointer"?"auto":"none"};
  z-index: ${({theme:e})=>{var t;return((t=e.zIndex)==null?void 0:t.tooltip)||9999}};
  opacity: ${({$disabled:e,theme:t})=>{var r;return e?((r=t.opacity)==null?void 0:r[40])||.4:1}};
  transition: ${({theme:e})=>{var t;return((t=e.transitions)==null?void 0:t.opacity)||"opacity 150ms cubic-bezier(0.4, 0, 0.2, 1)"}};
  
  /* Hover state */
  &:hover {
    ${({theme:e,$variant:t,$disabled:r})=>!r&&t==="pointer"&&`
      box-shadow: ${e.shadows.lg};
    `}
  }
  
  /* Focus state */
  &:focus-visible {
    outline: ${({theme:e})=>e.borderWidth[2]} solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: ${({theme:e})=>e.spacing[1]};
  }
  
  /* Triangle pointer for 'pointer' variant */
  ${({theme:e,$variant:t,$pointerPosition:r,$isInvalid:i})=>t==="pointer"&&`
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      
      ${r==="top"&&`
        bottom: 100%;
        left: ${e.spacing[4]};
        border-width: 0 ${e.spacing[2]} ${e.spacing[2]} ${e.spacing[2]};
        border-color: transparent transparent ${i?e.colors.semantic.border.error:e.colors.palette.neutral[300]} transparent;
      `}
      
      ${r==="bottom"&&`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: ${e.spacing[2]} ${e.spacing[2]} 0 ${e.spacing[2]};
        border-color: ${i?e.colors.semantic.border.error:e.colors.palette.neutral[300]} transparent transparent transparent;
      `}
      
      ${r==="left"&&`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: ${e.spacing[2]} ${e.spacing[2]} ${e.spacing[2]} 0;
        border-color: transparent ${i?e.colors.semantic.border.error:e.colors.palette.neutral[300]} transparent transparent;
      `}
      
      ${r==="right"&&`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: ${e.spacing[2]} 0 ${e.spacing[2]} ${e.spacing[2]};
        border-color: transparent transparent transparent ${i?e.colors.semantic.border.error:e.colors.palette.neutral[300]};
      `}
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      
      ${r==="top"&&`
        bottom: 100%;
        left: calc(${e.spacing[4]} + ${e.borderWidth[1]});
        border-width: 0 calc(${e.spacing[2]} - ${e.borderWidth[1]}) calc(${e.spacing[2]} - ${e.borderWidth[1]}) calc(${e.spacing[2]} - ${e.borderWidth[1]});
        border-color: transparent transparent ${e.colors.palette.neutral[50]} transparent;
        margin-bottom: calc(-1 * ${e.borderWidth[1]});
      `}
      
      ${r==="bottom"&&`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: calc(${e.spacing[2]} - ${e.borderWidth[1]}) calc(${e.spacing[2]} - ${e.borderWidth[1]}) 0 calc(${e.spacing[2]} - ${e.borderWidth[1]});
        border-color: ${e.colors.palette.neutral[50]} transparent transparent transparent;
        margin-top: calc(-1 * ${e.borderWidth[1]});
      `}
      
      ${r==="left"&&`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: calc(${e.spacing[2]} - ${e.borderWidth[1]}) calc(${e.spacing[2]} - ${e.borderWidth[1]}) calc(${e.spacing[2]} - ${e.borderWidth[1]}) 0;
        border-color: transparent ${e.colors.palette.neutral[50]} transparent transparent;
        margin-right: calc(-1 * ${e.borderWidth[1]});
      `}
      
      ${r==="right"&&`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: calc(${e.spacing[2]} - ${e.borderWidth[1]}) 0 calc(${e.spacing[2]} - ${e.borderWidth[1]}) calc(${e.spacing[2]} - ${e.borderWidth[1]});
        border-color: transparent transparent transparent ${e.colors.palette.neutral[50]};
        margin-left: calc(-1 * ${e.borderWidth[1]});
      `}
    }
  `}
`,Z=z.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[3]};
  
  svg {
    width: ${({theme:e})=>e.spacing[4]};
    height: ${({theme:e})=>e.spacing[4]};
    color: ${({theme:e})=>e.colors.palette.primary[500]};
  }
`,S=W.forwardRef(({as:e,heading:t,description:r,customHeading:i,customDescription:c,x:p=0,y:u=0,variant:s="default",pointerPosition:f="top",visible:o=!1,isLoading:X=!1,isEmpty:F=!1,isInvalid:I=!1,disabled:m=!1,emptyMessage:_="No content available",errorMessage:V,className:g,headingClassName:B,descriptionClassName:G,style:$,maxWidth:y,onOpen:C,onClose:N,onAfterOpen:M,onAfterClose:L,onMouseEnter:b,onMouseLeave:v,onEscape:w,...T},x)=>{const H=U(),Y=`tooltip-${W.useId()}`,h=`${Y}-heading`,q=`${Y}-description`,E=e||"div";W.useEffect(()=>{var n,l;if(o){C==null||C();const k=parseInt(((n=H.durations)==null?void 0:n.fast)||"150",10),D=setTimeout(()=>{M==null||M()},k);return()=>clearTimeout(D)}else{N==null||N();const k=parseInt(((l=H.durations)==null?void 0:l.fast)||"150",10),D=setTimeout(()=>{L==null||L()},k);return()=>clearTimeout(D)}},[o]),W.useEffect(()=>{if(!o)return;const n=l=>{l.key==="Escape"&&(w==null||w(l))};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[o,w]);const J=()=>i?typeof i=="function"?i({}):i:t?a.jsx("div",{id:h,children:a.jsx(d,{variant:"body",weight:"medium",className:B,children:t})}):null,Q=()=>c?typeof c=="function"?c({}):c:r?a.jsx("div",{id:q,children:a.jsx(d,{variant:"body",weight:"regular",className:G,style:{color:"var(--color-neutral-600)"},children:r})}):null;if(X){const n=a.jsx(R,{as:E,ref:x,$visible:o,$variant:s,$pointerPosition:f,$disabled:m,$isInvalid:!1,$maxWidth:y,className:g,style:{left:`${p}px`,top:`${u}px`,...$},role:"tooltip","aria-hidden":!o,"aria-live":"polite","aria-busy":"true",onMouseEnter:b,onMouseLeave:v,...T,children:a.jsx(Z,{children:a.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"9.42 9.42",children:a.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 8 8",to:"360 8 8",dur:"1s",repeatCount:"indefinite"})})})})});return typeof document<"u"?j.createPortal(n,document.body):n}if(F){const n=a.jsx(R,{as:E,ref:x,$visible:o,$variant:s,$pointerPosition:f,$disabled:m,$isInvalid:!1,$maxWidth:y,className:g,style:{left:`${p}px`,top:`${u}px`,...$},role:"tooltip","aria-hidden":!o,"aria-live":"polite",onMouseEnter:b,onMouseLeave:v,...T,children:a.jsx(d,{variant:"body",weight:"regular",style:{color:"var(--color-neutral-600)"},children:_})});return typeof document<"u"?j.createPortal(n,document.body):n}if(I&&V){const n=a.jsxs(R,{as:E,ref:x,$visible:o,$variant:s,$pointerPosition:f,$disabled:m,$isInvalid:!0,$maxWidth:y,className:g,style:{left:`${p}px`,top:`${u}px`,...$},role:"tooltip","aria-hidden":!o,"aria-live":"assertive","aria-labelledby":h,"aria-describedby":q,onMouseEnter:b,onMouseLeave:v,...T,children:[a.jsx("div",{id:h,children:a.jsx(d,{variant:"body",weight:"medium",style:{color:"var(--color-semantic-text-error)"},children:"Error"})}),a.jsx("div",{id:q,children:a.jsx(d,{variant:"body",weight:"regular",style:{color:"var(--color-neutral-600)"},children:V})})]});return typeof document<"u"?j.createPortal(n,document.body):n}const K=a.jsxs(R,{as:E,ref:x,$visible:o,$variant:s,$pointerPosition:f,$disabled:m,$isInvalid:I,$maxWidth:y,className:g,style:{left:`${p}px`,top:`${u}px`,...$},role:"tooltip","aria-hidden":!o,"aria-labelledby":t?h:void 0,"aria-describedby":r?q:void 0,tabIndex:s==="pointer"?0:-1,onMouseEnter:b,onMouseLeave:v,...T,children:[J(),Q()]});return typeof document<"u"?j.createPortal(K,document.body):K});S.displayName="Tooltip";S.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{heading:{required:!1,tsType:{name:"string"},description:"Tooltip heading (main text)"},description:{required:!1,tsType:{name:"string"},description:"Tooltip description (secondary text)"},customHeading:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: any) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom heading content (render prop)"},customDescription:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: any) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom description content (render prop)"},x:{required:!1,tsType:{name:"number"},description:"X position in pixels (screen coordinates)",defaultValue:{value:"0",computed:!1}},y:{required:!1,tsType:{name:"number"},description:"Y position in pixels (screen coordinates)",defaultValue:{value:"0",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'pointer'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pointer'"}]},description:"Tooltip variant - 'default' (rectangular) or 'pointer' (with triangle)",defaultValue:{value:"'default'",computed:!1}},pointerPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Position of the pointer triangle (only for 'pointer' variant)",defaultValue:{value:"'top'",computed:!1}},visible:{required:!1,tsType:{name:"boolean"},description:"Whether the tooltip is visible",defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:"Empty state",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No content available'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message"},as:{required:!1,tsType:{name:"ElementType"},description:"Render as different element"},className:{required:!1,tsType:{name:"string"},description:"Custom className for container"},headingClassName:{required:!1,tsType:{name:"string"},description:"Custom className for heading"},descriptionClassName:{required:!1,tsType:{name:"string"},description:"Custom className for description"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles"},maxWidth:{required:!1,tsType:{name:"string"},description:"Max width override (uses design tokens by default)"},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when tooltip opens"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when tooltip closes"},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called after tooltip open animation completes"},onAfterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called after tooltip close animation completes"},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Called on mouse enter"},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Called on mouse leave"},onEscape:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"e"}],return:{name:"void"}}},description:"Called on Escape key press"}},composes:["Omit"]};export{S as T};
