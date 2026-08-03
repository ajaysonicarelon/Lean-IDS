import{j as i}from"./jsx-runtime-DSvmvvsx.js";import{r as C}from"./index-B0WjJBI_.js";import{g as h,f as y}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as b}from"./Typography-DlcmwxwF.js";const F=h.div`
  display: flex;
  align-items: center; /* Vertically center icon and text */
  gap: ${({theme:e})=>e.spacing[4]};
  width: 100%; /* Constrain width for text truncation */
  overflow: hidden;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: ${({theme:e})=>{var n;return((n=e.transitions)==null?void 0:n.default)||"all 300ms cubic-bezier(0.4, 0, 0.2, 1)"}};
  position: relative;
  opacity: ${({$disabled:e,theme:n})=>{var a;return e?((a=n.opacity)==null?void 0:a[40])||.4:1}};

  ${({$aligned:e,$border:n,$state:a,$mode:c,theme:t})=>{var u,$,x;const r=e==="vertical",m=r?"flex-direction: column;":"",v=r?`padding: ${t.spacing[2]} ${t.spacing[2]};`:n==="left"?`padding: ${t.spacing[7]};`:`padding: ${t.spacing[4]} ${t.spacing[5]}; justify-content: center;`,f=`border-radius: ${t.borderRadius.sm};`;if(a==="inactive")return y`
        ${m}
        ${v}
        background-color: transparent;
        
        &:hover {
          background-color: ${c==="dark"?`rgba(255, 255, 255, ${((u=t.opacity)==null?void 0:u[5])||"0.05"})`:`rgba(199, 199, 199, ${(($=t.opacity)==null?void 0:$[5])||"0.05"})`};
          ${f}
        }
        
        &:focus-visible {
          outline: ${t.borderWidth[2]} solid ${t.colors.semantic.focus.indicator};
          outline-offset: ${t.spacing[1]};
          ${f}
        }
      `;const p=c==="dark"?t.colors.palette.neutral[50]:t.colors.palette.neutral[900],g=((x=t.opacity)==null?void 0:x[10])||"0.1",s=c==="dark"?`rgba(255, 255, 255, ${g})`:`rgba(199, 199, 199, ${g})`,d=n==="left"?`border-left: ${t.borderWidth[2]} solid ${p};`:`border-bottom: ${t.borderWidth[2]} solid ${p};`,o=`
      &:focus-visible {
        outline: ${t.borderWidth[2]} solid ${t.colors.semantic.focus.indicator};
        outline-offset: ${t.spacing[1]};
      }
    `;return y`
      ${m}
      ${v}
      ${f}
      background-color: ${s};
      ${d}
      ${o}
    `}}
`,B=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({$mode:e,theme:n})=>{const a=e==="dark"?n.colors.palette.neutral[50]:n.colors.palette.neutral[900];return y`
      color: ${a};
      
      svg {
        color: ${a};
      }
    `}}
`;h.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  min-width: 0; /* Important for text truncation to work */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  
  /* Dynamic text alignment: center for short labels (≤7 chars), left for longer labels */
  text-align: ${({$aligned:e,$label:n})=>e==="vertical"?((n==null?void 0:n.length)||0)>7?"left":"center":"left"};

  ${({$aligned:e,$border:n,$state:a,$mode:c,theme:t})=>{const r=a==="active",m=c==="dark",v=n==="left",f=e==="vertical",p=f?t.fontSizes[12]:v?t.fontSizes[16]:t.fontSizes[14],g=f?t.lineHeights[14]:v?t.lineHeights[19]:t.lineHeights[16],s=r?t.fontWeights.semibold:t.fontWeights.regular,d=m?t.colors.palette.neutral[50]:t.colors.palette.neutral[900];return y`
      font-family: ${t.fonts.primary};
      font-size: ${p};
      line-height: ${g};
      font-weight: ${s};
      color: ${d};
    `}}
`;const re=h.div`
  position: absolute;
  width: ${({theme:e})=>e.spacing[2]};
  height: ${({theme:e})=>e.spacing[2]};
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.palette.error[500]};
  
  ${({$border:e,$aligned:n,theme:a})=>n==="vertical"?y`
        right: 0;
        top: 0;
      `:e==="bottom"?y`
        right: ${a.spacing[2]};
        top: ${a.spacing[2]};
      `:y`
      right: ${a.spacing[4]};
      top: ${a.spacing[3]};
    `}
`,oe=h.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: ${({theme:e})=>e.spacing[4]};
    height: ${({theme:e})=>e.spacing[4]};
    color: currentColor;
  }
`,se=h.div`
  width: ${({theme:e})=>e.spacing[6]};
  height: ${({theme:e})=>e.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: ${({theme:e})=>e.spacing[2]};
  flex-shrink: 0;
  color: ${({$mode:e})=>e==="dark"?"#FFFFFF":"#1A1A1A"};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,N=h.div`
  position: relative;
  width: 100%;
`,O=C.forwardRef(({as:e,aligned:n="horizontal",border:a="bottom",iconM:c,iconS:t,mode:r="dark",nestedMenu:m=!1,showIcon:v=!0,showIndicator:f=!1,showLabel:p=!0,hasChildren:g=!1,state:s="inactive",type:d="single",label:o="Menu Item",disabled:u=!1,isLoading:$=!1,isEmpty:x=!1,isInvalid:K=!1,errorMessage:S,emptyMessage:A="No content available",customLabel:T,customIcon:R,className:E,labelClassName:_,iconClassName:z,indicatorClassName:P,style:M,maxWidth:q,onClick:w,onMouseEnter:G,onMouseLeave:J,onFocus:Q,onBlur:U,onKeyDown:H,onActivate:V,onDeactivate:D,...j},L)=>{const k=`menu-item-${C.useId()}`,I=e||"div",W=a==="left"?c:t;C.useEffect(()=>{s==="active"?V==null||V():D==null||D()},[s]);const X=l=>{u||$||((l.key==="Enter"||l.key===" ")&&(l.preventDefault(),w==null||w(l)),H==null||H(l))},Y=l=>{u||$||w==null||w(l)},Z=()=>{if(T)return typeof T=="function"?T({label:o}):T;if(!p||!o)return null;const l=n==="vertical",te=l?"caption":a==="left"?"body":"paragraph",ne=s==="active"?"semibold":"regular",ae=l&&o.length<=7?"center":"left",ie=r==="dark"?"#FFFFFF":"#1A1A1A";return i.jsx(b,{variant:te,weight:ne,className:_,style:{color:ie,textAlign:ae,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",minWidth:0,flex:1},children:o})},ee=()=>R?typeof R=="function"?R({iconM:c,iconS:t}):R:!v||!W?null:i.jsx(B,{$mode:r,className:z,children:W});return $?i.jsx(N,{as:I,ref:L,className:E,style:{...M,maxWidth:q},...j,children:i.jsxs(F,{$aligned:n,$border:a,$mode:r,$state:"inactive",$type:d,$label:o,$disabled:!0,$isLoading:!0,role:"menuitem","aria-busy":"true","aria-disabled":"true","aria-label":o,id:k,children:[i.jsx(oe,{children:i.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"9.42 9.42",children:i.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 8 8",to:"360 8 8",dur:"1s",repeatCount:"indefinite"})})})}),p&&i.jsx(b,{variant:"caption",style:{color:r==="dark"?"#FFFFFF":"#1A1A1A"},children:"Loading..."})]})}):x?i.jsx(N,{as:I,ref:L,className:E,style:{...M,maxWidth:q},...j,children:i.jsx(F,{$aligned:n,$border:a,$mode:r,$state:"inactive",$type:d,$label:o,$disabled:!0,role:"menuitem","aria-disabled":"true","aria-label":A,id:k,children:i.jsx(b,{variant:"caption",style:{color:r==="dark"?"#A3A3A3":"#525252"},children:A})})}):K&&S?i.jsx(N,{as:I,ref:L,className:E,style:{...M,maxWidth:q},...j,children:i.jsxs(F,{$aligned:n,$border:a,$mode:r,$state:"inactive",$type:d,$label:o,$disabled:!0,$isInvalid:!0,role:"menuitem","aria-disabled":"true","aria-invalid":"true","aria-label":S,id:k,children:[i.jsx(b,{variant:"caption",weight:"medium",style:{color:"var(--color-semantic-text-error)"},children:"Error"}),i.jsx(b,{variant:"caption",style:{color:"var(--color-neutral-600)"},children:S})]})}):i.jsxs(N,{as:I,ref:L,className:E,style:{...M,maxWidth:q},onMouseEnter:G,onMouseLeave:J,...j,children:[i.jsxs(F,{$aligned:n,$border:a,$mode:r,$state:s,$type:d,$label:o,$disabled:u,onClick:Y,onFocus:Q,onBlur:U,onKeyDown:X,role:"menuitem",tabIndex:u?-1:s==="active"?0:-1,"aria-selected":s==="active","aria-disabled":u,"aria-label":p?void 0:o,"aria-haspopup":g||m?"menu":void 0,id:k,children:[ee(),Z(),g&&i.jsx(se,{$mode:r,children:i.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i.jsx("path",{d:"M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z",fill:"currentColor"})})}),m&&d==="single"&&n==="horizontal"&&i.jsx(B,{$mode:r,className:z,children:a==="bottom"?"▼":"▶"})]}),f&&s==="inactive"&&!u&&i.jsx(re,{$mode:r,$border:a,$aligned:n,className:P})]})});O.displayName="MenuItem";O.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`Polymorphic prop - change the root element type
@default 'div'
@example <MenuItem as="button" />`},aligned:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Alignment direction
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},border:{required:!1,tsType:{name:"union",raw:"'bottom' | 'left'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:`Border position - bottom for horizontal nav, left for vertical nav
@default 'bottom'`,defaultValue:{value:"'bottom'",computed:!1}},mode:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:`Color mode
@default 'dark'`,defaultValue:{value:"'dark'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'active' | 'inactive'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'inactive'"}]},description:`Active/inactive state
@default 'inactive'`,defaultValue:{value:"'inactive'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'single' | 'nested'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'nested'"}]},description:`Menu item type - single or nested
@default 'single'`,defaultValue:{value:"'single'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Label text
@default 'Menu Item'`,defaultValue:{value:"'Menu Item'",computed:!1}},iconM:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for medium size (24px) - used in side navigation"},iconS:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for small size (16px) - used in top header"},nestedMenu:{required:!1,tsType:{name:"boolean"},description:`Whether this menu item has nested children
@default false`,defaultValue:{value:"false",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show icon
@default true`,defaultValue:{value:"true",computed:!1}},showIndicator:{required:!1,tsType:{name:"boolean"},description:`Whether to show notification indicator
@default false`,defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show label text
@default true`,defaultValue:{value:"true",computed:!1}},hasChildren:{required:!1,tsType:{name:"boolean"},description:`Indicates if this menu item has children/nested items
When true, shows an arrow indicator (chevron right)
@default false`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state - prevents interaction
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows spinner
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows empty message
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Invalid/error state - shows error styling
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display in error state"},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty message to display in empty state",defaultValue:{value:"'No content available'",computed:!1}},customLabel:{required:!1,tsType:{name:"union",raw:"React.ReactNode | ((props: { label?: string }) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:`Custom render function or ReactNode for label
Overrides default label rendering`},customIcon:{required:!1,tsType:{name:"union",raw:"React.ReactNode | ((props: { iconM?: React.ReactNode; iconS?: React.ReactNode }) => React.ReactNode)",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"unknown"}]},description:`Custom render function or ReactNode for icon
Overrides default icon rendering`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for root container"},labelClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for label"},iconClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for icon wrapper"},indicatorClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for notification indicator"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for root container"},maxWidth:{required:!1,tsType:{name:"string"},description:"Maximum width for menu item"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse enter handler"},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse leave handler"},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Focus handler"},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Blur handler"},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Keyboard handler - for Enter/Space key support"},onActivate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when menu item becomes active"},onDeactivate:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when menu item becomes inactive"}},composes:["Omit"]};export{O as M};
