import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{r as E}from"./index-B0WjJBI_.js";import{g as y}from"./styled-components.browser.esm-CuwBLqEg.js";import{C as S,A as ee,I as $,W as ae,a as te}from"./WarningAmberOutlined-BaSDCFAD.js";import{C as ne}from"./Close-Bujf63ZX.js";const re=(e,t,a)=>{if(t==="outlined")return"transparent";const l={info:a.colors.palette.info[500],success:a.colors.palette.success[500],warning:a.colors.palette.warning[600],error:a.colors.palette.error[500],neutral:a.colors.palette.neutral[400]};return t==="subdued"?{info:a.colors.palette.info[50],success:a.colors.palette.success[50],warning:a.colors.palette.warning[100],error:a.colors.palette.error[50],neutral:a.colors.palette.neutral[50]}[e]:l[e]},se=(e,t,a)=>t==="default"?e==="neutral"?a.colors.palette.neutral[800]:"#FFFFFF":{info:a.colors.palette.info[600],success:a.colors.palette.success[600],warning:a.colors.palette.warning[800],error:a.colors.palette.error[600],neutral:a.colors.palette.neutral[700]}[e],oe=(e,t,a)=>t!=="outlined"?"transparent":{info:a.colors.palette.info[500],success:a.colors.palette.success[500],warning:a.colors.palette.warning[500],error:a.colors.palette.error[500],neutral:a.colors.palette.neutral[500]}[e],ie=(e,t,a)=>t==="default"?e==="neutral"?a.colors.palette.neutral[700]:"#FFFFFF":{info:a.colors.palette.info[600],success:a.colors.palette.success[600],warning:a.colors.palette.warning[800],error:a.colors.palette.error[600],neutral:a.colors.palette.neutral[700]}[e],le=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>`${e.spacing[1]} ${e.spacing[2]}`};
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  background-color: ${({$type:e,$style:t,theme:a})=>re(e,t,a)};
  border: ${({theme:e})=>e.borderWidth[1]} solid ${({$type:e,$style:t,theme:a})=>oe(e,t,a)};
  font-family: ${({theme:e})=>e.typography.caption.semibold.fontFamily};
  font-size: ${({theme:e})=>e.typography.caption.semibold.fontSize};
  font-weight: ${({theme:e})=>e.typography.caption.semibold.fontWeight};
  line-height: ${({theme:e})=>e.typography.caption.semibold.lineHeight};
  letter-spacing: ${({theme:e})=>e.typography.caption.semibold.letterSpacing};
  color: ${({$type:e,$style:t,theme:a})=>se(e,t,a)};
  white-space: nowrap;
  user-select: none;
  position: relative;
  transition: opacity 0.2s ease, transform 0.1s ease;

  ${({$disabled:e,$isLoading:t})=>(e||t)&&`
      opacity: 0.5;
      pointer-events: ${e?"none":"auto"};
      cursor: ${e?"not-allowed":"default"};
    `}

  ${({$interactive:e,$disabled:t,$isLoading:a})=>e&&!t&&!a&&`
      cursor: pointer;
      
      &:hover {
        opacity: 0.85;
        transform: translateY(-1px);
      }

      &:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 2px;
      }

      &:active {
        transform: translateY(0);
        opacity: 0.7;
      }
    `}
`,T=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[7]}; /* 16px minimum for icons */
  height: ${({theme:e})=>e.spacing[7]}; /* 16px minimum for icons */
  flex-shrink: 0;
  cursor: ${({$clickable:e})=>e?"pointer":"default"};
  transition: opacity 0.2s ease;

  ${({$clickable:e})=>e&&`
    &:hover {
      opacity: 0.7;
    }

    &:focus-visible {
      outline: 2px solid currentColor;
      outline-offset: 1px;
      border-radius: 2px;
    }

    &:active {
      opacity: 0.5;
    }
  `}

  svg {
    width: 100%;
    height: 100%;
    fill: ${({$type:e,$style:t,theme:a})=>ie(e,t,a)};
  }
`,g=y.span`
  flex-shrink: 0;
`,ce=y.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[3]};
  height: ${({theme:e})=>e.spacing[3]};
  
  svg {
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`,de={info:n.jsx($,{sx:{fontSize:12}}),success:n.jsx(te,{sx:{fontSize:12}}),warning:n.jsx(ae,{sx:{fontSize:12}}),error:n.jsx(S,{sx:{fontSize:12}}),neutral:n.jsx($,{sx:{fontSize:12}})},q=E.forwardRef(({label:e,type:t="info",styleVariant:a="default",as:l,isLoading:o=!1,disabled:c=!1,isInvalid:M=!1,isEmpty:j=!1,interactive:i=!1,leadingIcon:F,trailingIcon:I,showLeadingIcon:L=!1,showTrailingIcon:k=!1,customContent:u,customLeading:C,customTrailing:N,onClick:d,onRemove:s,onMount:p,onUnmount:f,onFocus:H,onBlur:R,onKeyDown:b,className:A,style:w,iconClassName:v,labelClassName:m,"aria-label":B,"aria-labelledby":z,"aria-describedby":V,role:W,loadingMessage:O="Loading...",emptyMessage:D="No content",errorMessage:x,...K},P)=>{E.useEffect(()=>(p==null||p(),()=>{f==null||f()}),[p,f]);const Y=l||"span",_=de[t],G=n.jsx(ne,{sx:{fontSize:12}}),J=r=>{c||o||!i||d==null||d(r)},h=r=>{c||o||(r.stopPropagation(),s==null||s(r))},Q=r=>{c||o||(i&&(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),d==null||d(r)),b==null||b(r))},X=()=>j?n.jsx(g,{className:m,children:D}):M&&x?n.jsxs(n.Fragment,{children:[n.jsx(T,{$type:"error",$style:a,$clickable:!1,className:v,children:n.jsx(S,{sx:{fontSize:12}})}),n.jsx(g,{className:m,children:x})]}):o?n.jsxs(n.Fragment,{children:[n.jsx(ce,{children:n.jsx(ee,{sx:{fontSize:12}})}),n.jsx(g,{className:m,children:O})]}):u?typeof u=="function"?u({type:t}):u:n.jsxs(n.Fragment,{children:[C,L&&n.jsx(T,{$type:t,$style:a,$clickable:!1,className:v,children:F||_}),e&&n.jsx(g,{className:m,children:e}),N,k&&n.jsx(T,{$type:t,$style:a,$clickable:!!s,className:v,onClick:s?h:void 0,role:s?"button":void 0,"aria-label":s?"Remove":void 0,tabIndex:s&&!c&&!o?0:void 0,onKeyDown:s?r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),h(r))}:void 0,children:I||G})]}),Z=W||(i?"button":"status"),U=typeof w=="object"?w:void 0;return n.jsx(le,{ref:P,as:Y,$type:t,$style:a,$disabled:c,$isLoading:o,$interactive:i,className:A,style:U,onClick:i?J:void 0,onFocus:H,onBlur:R,onKeyDown:i?Q:void 0,role:Z,"aria-label":B,"aria-labelledby":z,"aria-describedby":V,tabIndex:i&&!c&&!o?0:void 0,...K,children:X()})});q.displayName="Badge";q.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{label:{required:!1,tsType:{name:"ReactNode"},description:"Badge label text"},type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:`Badge semantic type (determines color scheme)
@default 'info'`,defaultValue:{value:"'info'",computed:!1}},styleVariant:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:`Visual style variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},as:{required:!1,tsType:{name:"ElementType"},description:`Polymorphic element type - render as different HTML element
@default 'span'`},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows loading indicator
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state - reduces opacity and prevents interaction
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Error state - shows error styling
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows when no content
@default false`,defaultValue:{value:"false",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:`Interactive/clickable badge
@default false`,defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom leading icon (overrides default)"},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom trailing icon (overrides default)"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the leading icon
@default false`,defaultValue:{value:"false",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the trailing icon
@default false`,defaultValue:{value:"false",computed:!1}},customContent:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { type: BadgeType }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom content to render instead of label"},customLeading:{required:!1,tsType:{name:"ReactNode"},description:"Custom leading content (before icon and label)"},customTrailing:{required:!1,tsType:{name:"ReactNode"},description:"Custom trailing content (after label, before trailing icon)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLSpanElement"}],raw:"MouseEvent<HTMLSpanElement>"},name:"e"}],return:{name:"void"}}},description:"Callback when badge is clicked (only if interactive)"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLSpanElement"}],raw:"MouseEvent<HTMLSpanElement>"},name:"e"}],return:{name:"void"}}},description:"Callback when trailing icon is clicked (for removable badges)"},onMount:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when badge is mounted"},onUnmount:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when badge is unmounted"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when badge receives focus"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.FocusEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},name:"e"}],return:{name:"void"}}},description:"Callback when badge loses focus"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: KeyboardEvent<HTMLSpanElement>) => void",signature:{arguments:[{type:{name:"KeyboardEvent",elements:[{name:"HTMLSpanElement"}],raw:"KeyboardEvent<HTMLSpanElement>"},name:"e"}],return:{name:"void"}}},description:"Callback when key is pressed (for interactive badges)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for root element"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles for root element"},iconClassName:{required:!1,tsType:{name:"string"},description:"CSS class for icon wrapper"},labelClassName:{required:!1,tsType:{name:"string"},description:"CSS class for label text"},"aria-label":{required:!1,tsType:{name:"string"},description:"ARIA label for the badge"},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ARIA labelledby for the badge"},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA describedby for the badge"},role:{required:!1,tsType:{name:"string"},description:"ARIA role (defaults to 'status' for non-interactive, 'button' for interactive)"},loadingMessage:{required:!1,tsType:{name:"string"},description:`Loading message text
@default 'Loading...'`,defaultValue:{value:"'Loading...'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty state message
@default 'No content'`,defaultValue:{value:"'No content'",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message (when isInvalid is true)"}},composes:["Omit"]};export{q as B};
