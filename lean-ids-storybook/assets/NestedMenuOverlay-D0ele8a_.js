import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{r as u}from"./index-B0WjJBI_.js";import{g as I}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as y}from"./Typography-DlcmwxwF.js";const R=I.div`
  position: fixed;
  z-index: ${({theme:e})=>{var r;return((r=e.zIndex)==null?void 0:r.overlay)||1e3}};
  
  /* Add invisible left padding to create safe zone for mouse movement */
  padding-left: ${({theme:e})=>e.spacing[2]};
  margin-left: calc(-1 * ${({theme:e})=>e.spacing[2]}); /* Offset to maintain visual position */
  
  /* Inner container styling */
  background-color: ${({$mode:e,theme:r})=>e==="light"?r.colors.palette.neutral[50]:r.colors.palette.primary[700]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: ${({theme:e})=>{var r;return((r=e.shadows)==null?void 0:r.lg)||"2px 2px 10.5px 0px rgba(70, 62, 93, 0.55)"}};
  padding-top: ${({theme:e})=>e.spacing[2]};
  padding-right: ${({theme:e})=>e.spacing[2]};
  padding-bottom: ${({theme:e})=>e.spacing[2]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 237px;
  overflow: hidden;
  opacity: ${({$disabled:e,theme:r})=>{var a;return e?((a=r.opacity)==null?void 0:a[40])||.4:1}};
  pointer-events: ${({$disabled:e})=>e?"none":"auto"};
`,Z=I.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[7]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: ${({theme:e})=>{var r;return((r=e.transitions)==null?void 0:r.default)||"background-color 300ms cubic-bezier(0.4, 0, 0.2, 1)"}};
  position: relative;
  opacity: ${({$disabled:e,theme:r})=>{var a;return e?((a=r.opacity)==null?void 0:a[40])||.4:1}};
  
  background-color: ${({$isActive:e,$mode:r,theme:a})=>{var p;if(!e)return"transparent";const i=((p=a.opacity)==null?void 0:p[10])||"0.1";return r==="light"?`rgba(0, 0, 0, ${i})`:`rgba(255, 255, 255, ${i})`}};

  &:hover {
    background-color: ${({$mode:e,theme:r})=>{var i;const a=((i=r.opacity)==null?void 0:i[10])||"0.1";return e==="light"?`rgba(0, 0, 0, ${a})`:`rgba(255, 255, 255, ${a})`}};
  }
  
  &:focus-visible {
    outline: ${({theme:e})=>e.borderWidth[2]} solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: ${({theme:e})=>e.spacing[1]};
  }
`,A=I.div`
  width: ${({theme:e})=>e.spacing[6]};
  height: ${({theme:e})=>e.spacing[6]};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$mode:e,theme:r})=>e==="light"?r.colors.palette.neutral[900]:r.colors.palette.neutral[50]};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,H=I.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:e})=>e.spacing[4]};
  
  svg {
    width: ${({theme:e})=>e.spacing[4]};
    height: ${({theme:e})=>e.spacing[4]};
    color: currentColor;
  }
`,D=u.forwardRef(({as:e,items:r,position:a,mode:i="dark",triggerMode:p="hover",disabled:f=!1,isLoading:K=!1,isEmpty:_=!1,isInvalid:G=!1,errorMessage:M,emptyMessage:z="No menu items available",className:h,itemClassName:J,style:v,maxWidth:x,maxHeight:b,onClose:l,onItemClick:w,onItemHover:$,onOpen:L,onAfterOpen:S,onAfterClose:d,...T},k)=>{const j=u.useId(),[B,F]=u.useState(null),[q,O]=u.useState(null),m=u.useRef(null),c=u.useRef(null),o=u.useRef(null),E=e||"div";u.useEffect(()=>{L==null||L();const t=setTimeout(()=>{S==null||S()},150);return()=>clearTimeout(t)},[]),u.useEffect(()=>{const t=s=>{m.current&&!m.current.contains(s.target)&&(l==null||l(),d==null||d())};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[l,d]),u.useEffect(()=>()=>{c.current&&clearTimeout(c.current),o.current&&clearTimeout(o.current)},[]);const Q=(t,s)=>{f||s.disabled||(t.key==="Enter"||t.key===" "?(t.preventDefault(),P(s)):t.key==="Escape"&&(t.preventDefault(),l==null||l(),d==null||d()))},U=(t,s)=>{if(!(f||t.disabled)&&p==="hover"&&($==null||$(t),c.current&&(clearTimeout(c.current),c.current=null),o.current&&(clearTimeout(o.current),o.current=null),F(null),O(null),t.children&&t.children.length>0)){const g=s.currentTarget.getBoundingClientRect(),N=t.children;c.current=setTimeout(()=>{F({top:g.top,left:g.right}),O(N)},100)}},W=()=>{c.current&&(clearTimeout(c.current),c.current=null)},X=()=>{o.current&&(clearTimeout(o.current),o.current=null)},Y=()=>{o.current&&clearTimeout(o.current),o.current=setTimeout(()=>{(!q||q.length===0)&&(l==null||l(),d==null||d())},200)},P=(t,s)=>{var g;if(!(f||t.disabled)){if(t.children&&t.children.length>0&&p==="click"){if(s){const N=s.currentTarget.getBoundingClientRect();F({top:N.top,left:N.right}),O(t.children)}return}(!t.children||t.children.length===0)&&((g=t.onClick)==null||g.call(t),w==null||w(t),l==null||l(),d==null||d())}},V=i==="dark"?"#FFFFFF":"#1A1A1A";return K?n.jsxs(R,{as:E,ref:k||m,className:h,style:{...v,top:a.top,left:a.left,maxWidth:x,maxHeight:b},$mode:i,$disabled:!0,role:"menu","aria-busy":"true","aria-label":"Loading menu",id:`nested-menu-${j}`,...T,children:[n.jsx(H,{children:n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("circle",{cx:"8",cy:"8",r:"6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeDasharray:"9.42 9.42",children:n.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 8 8",to:"360 8 8",dur:"1s",repeatCount:"indefinite"})})})}),n.jsx(y,{variant:"caption",style:{color:V,textAlign:"center"},children:"Loading..."})]}):_||r.length===0?n.jsx(R,{as:E,ref:k||m,className:h,style:{...v,top:a.top,left:a.left,maxWidth:x,maxHeight:b},$mode:i,$disabled:!0,role:"menu","aria-label":z,id:`nested-menu-${j}`,...T,children:n.jsx(y,{variant:"caption",style:{color:i==="dark"?"#A3A3A3":"#525252",textAlign:"center",padding:"8px"},children:z})}):G&&M?n.jsxs(R,{as:E,ref:k||m,className:h,style:{...v,top:a.top,left:a.left,maxWidth:x,maxHeight:b},$mode:i,$disabled:!0,role:"menu","aria-invalid":"true","aria-label":M,id:`nested-menu-${j}`,...T,children:[n.jsx(y,{variant:"caption",weight:"medium",style:{color:"var(--color-semantic-text-error)",textAlign:"center"},children:"Error"}),n.jsx(y,{variant:"caption",style:{color:"#525252",textAlign:"center",padding:"8px"},children:M})]}):n.jsxs(n.Fragment,{children:[n.jsx(R,{as:E,ref:k||m,className:h,style:{...v,top:a.top,left:a.left,maxWidth:x,maxHeight:b},$mode:i,$disabled:f,onMouseEnter:X,onMouseLeave:Y,role:"menu","aria-label":"Menu",id:`nested-menu-${j}`,...T,children:r.map(t=>n.jsxs(Z,{className:J,$isActive:t.active||!1,$hasChildren:!!t.children&&t.children.length>0,$mode:i,$disabled:t.disabled,onMouseEnter:s=>U(t,s),onMouseLeave:W,onClick:s=>P(t,s),onKeyDown:s=>Q(s,t),role:"menuitem",tabIndex:f||t.disabled?-1:t.active?0:-1,"aria-selected":t.active||!1,"aria-disabled":t.disabled,"aria-haspopup":t.children&&t.children.length>0?"menu":void 0,children:[t.icon&&n.jsx("div",{style:{marginRight:"8px",display:"flex",alignItems:"center",color:V},children:t.icon}),n.jsx(y,{variant:"body",weight:t.active?"semibold":"regular",style:{color:V,whiteSpace:"nowrap",flex:1},children:t.label}),t.children&&t.children.length>0&&n.jsx(A,{$mode:i,children:n.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z",fill:"currentColor"})})})]},t.id))}),B&&q&&n.jsx(D,{items:q,position:B,mode:i,triggerMode:p,disabled:f,onClose:l,onItemClick:w,onItemHover:$})]})});D.displayName="NestedMenuOverlay";D.__docgenInfo={description:"",methods:[],displayName:"NestedMenuOverlay",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:`Polymorphic prop - change the root element type
@default 'div'`},items:{required:!0,tsType:{name:"Array",elements:[{name:"NestedMenuItem"}],raw:"NestedMenuItem[]"},description:"Array of menu items to display"},position:{required:!0,tsType:{name:"signature",type:"object",raw:"{ top: number; left: number }",signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}},description:"Position of the overlay (top-left corner)"},mode:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:`Color mode
@default 'dark'`,defaultValue:{value:"'dark'",computed:!1}},triggerMode:{required:!1,tsType:{name:"union",raw:"'hover' | 'click'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'click'"}]},description:`Trigger mode for opening nested menus
- 'hover': Open on mouse hover (default, better for desktop)
- 'click': Open on click (better for touch devices)
@default 'hover'`,defaultValue:{value:"'hover'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Disabled state - prevents interaction
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state - shows spinner
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state - shows empty message
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Invalid/error state - shows error styling
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display in error state"},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty message to display in empty state",defaultValue:{value:"'No menu items available'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for root container"},itemClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for menu items"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles for root container"},maxWidth:{required:!1,tsType:{name:"string"},description:"Maximum width for overlay"},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height for overlay"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when overlay should close"},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NestedMenuItem) => void",signature:{arguments:[{type:{name:"NestedMenuItem"},name:"item"}],return:{name:"void"}}},description:"Called when a menu item is clicked"},onItemHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NestedMenuItem) => void",signature:{arguments:[{type:{name:"NestedMenuItem"},name:"item"}],return:{name:"void"}}},description:"Called when a menu item is hovered"},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when overlay is opened"},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called after overlay is fully opened"},onAfterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called after overlay is fully closed"}},composes:["Omit"]};export{D as N};
