import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as z,R as p}from"./index-B0WjJBI_.js";import{g as d,s as Ce}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as b}from"./Typography-DlcmwxwF.js";import{B as Ne}from"./Brand-JJJEzcvX.js";import{M as Z}from"./MenuItem-CHS1uLTd.js";import{N as qe}from"./NestedMenuOverlay-D0ele8a_.js";import{A as Re}from"./Avatar-BXUW_YG5.js";const N=d.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  width: ${({$state:e})=>e==="collapsed"?"60px":"14.75rem"}; /* 60px : 236px - No spacing token for 60px */
  height: 100vh; /* Fixed viewport height - sidebar doesn't grow with content */
  background-color: ${({theme:e})=>e.colors.palette.primary[800]};
  padding: ${({$state:e,theme:a})=>`${a.spacing[4]} ${e==="collapsed"?a.spacing[1]:a.spacing[2]}`};
  overflow: visible; /* Changed from hidden to visible so toggle button can overlap */
  transition: width 0.3s ease, padding 0.3s ease;
  flex-shrink: 0;
  z-index: 101; /* Above TopHeader (100) so sidebar and toggle button appear on top */
`,q=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[11]}; /* 46px */
  width: 100%;
  flex: 1;
  overflow: visible; /* No overflow here - logo and user profile stay fixed */
  min-height: 0; /* Important for flex children to scroll properly */
`,Ie=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[11]}; /* 46px */
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  min-height: 0; /* Important for flex scrolling */
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: ${({theme:e})=>e.spacing[1]}; /* 6px */
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, ${({theme:e})=>{var a;return((a=e.opacity)==null?void 0:a[20])||"0.2"}});
    border-radius: ${({theme:e})=>e.borderRadius.xs};
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, ${({theme:e})=>{var a;return((a=e.opacity)==null?void 0:a[30])||"0.3"}});
  }
  
  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, ${({theme:e})=>{var a;return((a=e.opacity)==null?void 0:a[20])||"0.2"}}) transparent;
`,Ee=d.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({$state:e})=>e==="collapsed"?"center":"space-between"};
  gap: ${({theme:e})=>e.spacing[2]};
  padding: 0 ${({theme:e})=>e.spacing[7]};
  width: 100%;
  flex-shrink: 0;
  position: relative;
  
  /* Show pin button on hover */
  &:hover button {
    opacity: 1;
    visibility: visible;
  }
`,ee=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  flex-shrink: 0;
`,te=d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,ae=d.div`
  width: 100%; /* Critical for text truncation to work */
`,Le=d.div`
  display: flex;
  align-items: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  justify-content: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({$state:e,theme:a})=>e==="collapsed"?"0":`0 ${a.spacing[7]}`};
  width: 100%;
  flex-shrink: 0;
`,Ve=d.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-shrink: 0;
  white-space: nowrap;
  text-align: left;
`,ie=d.div`
  width: 100%;
  height: ${({theme:e})=>e.borderWidth[1]};
  background-color: rgba(255, 255, 255, ${({theme:e})=>{var a;return((a=e.opacity)==null?void 0:a[10])||"0.1"}});
  margin: ${({theme:e})=>e.spacing[3]} 0;
`,Be=d.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[8]}; /* 32px */
  height: ${({theme:e})=>e.spacing[8]};
  min-width: ${({theme:e})=>e.spacing[8]};
  background-color: ${({$isPinned:e,theme:a})=>{var r;return e?`rgba(255, 255, 255, ${((r=a.opacity)==null?void 0:r[15])||"0.15"})`:"transparent"}};
  border: none;
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  cursor: pointer;
  transition: ${({theme:e})=>{var a;return((a=e.transitions)==null?void 0:a.default)||"all 0.2s ease"}};
  padding: 0;
  flex-shrink: 0;
  
  /* Hidden by default, shown on hover or when pinned */
  opacity: ${({$isPinned:e})=>e?"1":"0"};
  visibility: ${({$isPinned:e})=>e?"visible":"hidden"};
  
  &:hover {
    background-color: rgba(255, 255, 255, ${({theme:e})=>{var a;return((a=e.opacity)==null?void 0:a[10])||"0.1"}});
  }
  
  &:active {
    background-color: rgba(255, 255, 255, ${({theme:e})=>{var a;return((a=e.opacity)==null?void 0:a[20])||"0.2"}});
  }
  
  &:focus-visible {
    outline: ${({theme:e})=>e.borderWidth[2]} solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: ${({theme:e})=>e.spacing[1]};
  }
  
  svg {
    width: ${({theme:e})=>e.spacing[4]}; /* 18px - closest to spacing[4]=16px */
    height: ${({theme:e})=>e.spacing[4]};
    flex-shrink: 0;
  }
`,Me=d.button`
  position: absolute;
  
  /* Position: half inside, half outside sidebar - aligned with brand logo vertically */
  ${({$position:e,$offset:a,$size:r})=>{const g=(r==="small"?24:32)/2;return e==="top"?`
        top: ${a}px;
        right: -${g}px; /* Half outside */
      `:`
        bottom: ${a}px;
        right: -${g}px; /* Half outside */
      `}}
  
  /* Size variants - small: 24px, large: 32px */
  width: ${({$size:e})=>e==="small"?"24px":"32px"};
  height: ${({$size:e})=>e==="small"?"24px":"32px"};
  
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]}; /* White background */
  border: 2px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 102;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
    border-color: ${({theme:e})=>e.colors.palette.primary[600]};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transform: scale(1.05);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  svg {
    width: ${({$size:e})=>e==="small"?"16px":"20px"};
    height: ${({$size:e})=>e==="small"?"16px":"20px"};
    color: ${({theme:e})=>e.colors.palette.primary[600]}; /* Primary color icon */
    flex-shrink: 0;
  }
`,ne=z.forwardRef(({as:e,groups:a=[],user:r,className:y,style:g,brandClassName:se,groupsClassName:re,userClassName:oe,toggleButtonClassName:le,pinButtonClassName:ce,children:H,isLoading:P=!1,isEmpty:de=!1,isInvalid:pe=!1,disabled:h=!1,errorMessage:R,emptyMessage:U="No navigation items available",onPinChange:I,isPinned:W,expandMode:f="hover",toggleButtonPosition:ue="top",toggleButtonOffset:fe=24,toggleButtonSize:me="large",toggleButtonIcon:D,customLogoUrl:ge,customSymbolUrl:he,logoAlignment:ve="left",logoPadding:be,showLabelsWhenCollapsed:xe=!0,onExpand:$,onCollapse:k,onAfterExpand:T,onAfterCollapse:j,onMenuItemClick:E,onMenuItemHover:L,...v},S)=>{const l=Ce(),C=e||"nav",[u,F]=p.useState(!1),[x,A]=p.useState(!1),[ye,we]=p.useState(!1),G=z.useRef("collapsed"),[V,B]=p.useState(null),o=W!==void 0?W:ye,c=o?"expanded":f==="hover"?u?"expanded":"collapsed":f==="button"?x?"expanded":"collapsed":u||x?"expanded":"collapsed";z.useEffect(()=>{const i=G.current,s=c;if(i!==s){if(i==="collapsed"&&s==="expanded"){$==null||$();const n=setTimeout(()=>{T==null||T()},300);return()=>clearTimeout(n)}else if(i==="expanded"&&s==="collapsed"){k==null||k();const n=setTimeout(()=>{j==null||j()},300);return()=>clearTimeout(n)}}G.current=s},[c,$,k,T,j]);const K=()=>{const i=!o;we(i),I==null||I(i)},$e=()=>{A(!x)},O=i=>{var s;return{id:i.id,label:i.label,active:i.active,onClick:i.onClick,children:(s=i.children)==null?void 0:s.map(O)}},[ke,_]=p.useState(!1),m=p.useRef(null),M=p.useRef(u);p.useEffect(()=>{if(!o&&M.current!==u){_(!0),u||B(null);const i=setTimeout(()=>{_(!1)},300);return M.current=u,()=>clearTimeout(i)}M.current=u},[u,o]);const J=(i,s)=>{L==null||L(i),m.current&&clearTimeout(m.current);const n=ke&&!u;if(i.children&&i.children.length>0&&!n){const w=s.currentTarget.getBoundingClientRect(),je=i.children,Se=236;m.current=setTimeout(()=>{B({items:je.map(O),position:{top:w.top,left:Se}})},100)}},Q=i=>{var s;(s=i.onClick)==null||s.call(i),E==null||E(i)},X=()=>{m.current&&(clearTimeout(m.current),m.current=null)};p.useEffect(()=>()=>{m.current&&clearTimeout(m.current)},[]);const Y=f==="hover"||f==="both",Te=i=>{var s;h||(i.key==="Escape"&&c==="expanded"&&(i.preventDefault(),o?K():(f==="button"||f==="both")&&A(!1)),(s=v.onKeyDown)==null||s.call(v,i))};return P?t.jsx(N,{as:C,ref:S,$state:"collapsed",className:y,style:g,"aria-busy":"true","aria-label":"Loading navigation",...v,children:t.jsx(q,{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",gap:l.spacing[4]},children:[t.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("circle",{cx:"16",cy:"16",r:"12",stroke:l.colors.palette.neutral[50],strokeWidth:"3",strokeLinecap:"round",strokeDasharray:"18.84 18.84",children:t.jsx("animateTransform",{attributeName:"transform",type:"rotate",from:"0 16 16",to:"360 16 16",dur:"1s",repeatCount:"indefinite"})})}),t.jsx(b,{variant:"body",style:{color:l.colors.palette.neutral[50]},children:"Loading..."})]})})}):de||a.length===0&&!H?t.jsx(N,{as:C,ref:S,$state:"collapsed",className:y,style:g,"aria-label":U,...v,children:t.jsx(q,{children:t.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",padding:l.spacing[4],textAlign:"center"},children:t.jsx(b,{variant:"body",style:{color:l.colors.palette.neutral[300]},children:U})})})}):pe&&R?t.jsx(N,{as:C,ref:S,$state:"collapsed",className:y,style:g,"aria-invalid":"true","aria-label":R,...v,children:t.jsx(q,{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%",padding:l.spacing[4],textAlign:"center",gap:l.spacing[2]},children:[t.jsx(b,{variant:"body",weight:"semibold",style:{color:l.colors.semantic.text.error},children:"Error"}),t.jsx(b,{variant:"caption",style:{color:l.colors.palette.neutral[300]},children:R})]})})}):t.jsxs(N,{as:C,ref:S,$state:c,className:y,style:{...g,opacity:h?.5:1,pointerEvents:h?"none":"auto"},"aria-label":"Side navigation","aria-busy":P,"aria-disabled":h,tabIndex:-1,onKeyDown:Te,onMouseEnter:()=>!o&&Y&&!h&&F(!0),onMouseLeave:()=>!o&&Y&&F(!1),...v,children:[(f==="button"||f==="both")&&!o&&t.jsx(Me,{$position:ue,$offset:fe,$size:me,className:le,onClick:$e,"aria-label":x?"Collapse sidebar (Escape)":"Expand sidebar","aria-keyshortcuts":"Escape",title:x?"Collapse sidebar (Press Escape)":"Expand sidebar",disabled:h,children:D||t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:x?t.jsx("path",{d:"M15 18l-6-6 6-6"}):t.jsx("path",{d:"M9 18l6-6-6-6"})})}),t.jsxs(q,{children:[t.jsxs(Ee,{$state:c,className:se,children:[t.jsx(Ne,{variant:c==="collapsed"?"symbol":"logo",mode:"dark",customLogoUrl:ge,customSymbolUrl:he,logoAlignment:ve,logoPadding:be}),c==="expanded"&&t.jsx(Be,{$isPinned:o,$state:c,className:ce,onClick:K,"aria-label":o?"Unpin sidebar (Escape to close)":"Pin sidebar","aria-keyshortcuts":"Escape",title:o?"Unpin sidebar (Press Escape to close)":"Pin sidebar",disabled:h,children:t.jsx("svg",{viewBox:"0 0 24 24",fill:o?"currentColor":"none",stroke:"currentColor",strokeWidth:o?"0":"2",children:o?t.jsx("path",{d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"}):t.jsx("path",{d:"M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"})})})]}),t.jsxs(Ie,{children:[c==="expanded"&&t.jsx(ee,{className:re,children:H||a.map((i,s)=>t.jsxs(p.Fragment,{children:[i.title&&t.jsx(b,{variant:"caption",weight:"medium",style:{letterSpacing:"1px",textTransform:"uppercase",color:l.colors.palette.neutral[300],padding:`0 ${l.spacing[4]}`},children:i.title}),t.jsx(te,{children:i.items.map(n=>t.jsx(ae,{onMouseEnter:w=>J(n,w),onMouseLeave:X,children:t.jsx(Z,{border:"left",mode:"dark",state:n.active?"active":"inactive",label:n.label,iconM:n.icon,showIcon:!0,showLabel:!0,showIndicator:n.showIndicator,nestedMenu:!!n.children&&n.children.length>0,onClick:()=>Q(n)})},n.id))}),s<a.length-1&&t.jsx(ie,{})]},s))}),c==="collapsed"&&t.jsx(ee,{children:a.map((i,s)=>t.jsxs(p.Fragment,{children:[t.jsx(te,{children:i.items.map(n=>t.jsx(ae,{onMouseEnter:w=>J(n,w),onMouseLeave:X,children:t.jsx(Z,{aligned:"vertical",border:"left",mode:"dark",state:n.active?"active":"inactive",label:n.label,iconM:n.icon,showIcon:!0,showLabel:xe,showIndicator:n.showIndicator,nestedMenu:!!n.children&&n.children.length>0,onClick:()=>Q(n)})},n.id))}),s<a.length-1&&t.jsx(ie,{})]},s))})]})]}),V&&t.jsx(qe,{items:V.items,position:V.position,onClose:()=>B(null)}),r&&t.jsxs(Le,{$state:c,className:oe,onClick:r.onClick,style:{cursor:r.onClick?"pointer":"default"},children:[t.jsx(Re,{size:"medium",initials:r.initials,src:r.avatarUrl,alt:r.name,onClick:r.onClick}),c==="expanded"&&t.jsxs(Ve,{children:[t.jsx(b,{variant:"body",weight:"semibold",style:{color:l.colors.palette.neutral[50]},children:r.name}),t.jsx(b,{variant:"caption",style:{fontFamily:"Roboto Mono, monospace",letterSpacing:"1.5px",color:l.colors.palette.primary[50]},children:r.subtitle})]})]})]})});ne.displayName="SideNavigation";ne.__docgenInfo={description:"",methods:[],displayName:"SideNavigation",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"Render as different HTML element (default: 'nav')"},groups:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationGroup"}],raw:"NavigationGroup[]"},description:"Navigation groups",defaultValue:{value:"[]",computed:!1}},user:{required:!1,tsType:{name:"UserProfile"},description:"User profile information"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content (overrides default groups)"},isPinned:{required:!1,tsType:{name:"boolean"},description:"Whether sidebar is pinned (locked in expanded state)"},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state - shows spinner",defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:"Empty state - shows empty message",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Error state - shows error message",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty message to display when isEmpty is true",defaultValue:{value:"'No navigation items available'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state - prevents all interactions",defaultValue:{value:"false",computed:!1}},expandMode:{required:!1,tsType:{name:"union",raw:"'hover' | 'button' | 'both'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'button'"},{name:"literal",value:"'both'"}]},description:"Expand/collapse mode - 'hover', 'button', or 'both'",defaultValue:{value:"'hover'",computed:!1}},toggleButtonPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Position of toggle button - 'top' or 'bottom'",defaultValue:{value:"'top'",computed:!1}},toggleButtonOffset:{required:!1,tsType:{name:"number"},description:"Vertical offset for toggle button (in pixels)",defaultValue:{value:"24",computed:!1}},toggleButtonSize:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"Size of toggle button - 'small' or 'large'",defaultValue:{value:"'large'",computed:!1}},toggleButtonIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon for toggle button (collapsed state)"},showLabelsWhenCollapsed:{required:!1,tsType:{name:"boolean"},description:"Whether to show menu item labels when sidebar is collapsed",defaultValue:{value:"true",computed:!1}},customLogoUrl:{required:!1,tsType:{name:"string"},description:"Custom logo URL for expanded state (full logo)"},customSymbolUrl:{required:!1,tsType:{name:"string"},description:"Custom symbol URL for collapsed state (icon only)"},logoAlignment:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"Logo alignment - 'left', 'center', or 'right'",defaultValue:{value:"'left'",computed:!1}},logoPadding:{required:!1,tsType:{name:"string"},description:"Custom padding for logo (CSS padding value)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles"},brandClassName:{required:!1,tsType:{name:"string"},description:"CSS class for brand container"},groupsClassName:{required:!1,tsType:{name:"string"},description:"CSS class for navigation groups"},userClassName:{required:!1,tsType:{name:"string"},description:"CSS class for user profile section"},toggleButtonClassName:{required:!1,tsType:{name:"string"},description:"CSS class for toggle button"},pinButtonClassName:{required:!1,tsType:{name:"string"},description:"CSS class for pin button"},onPinChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isPinned: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPinned"}],return:{name:"void"}}},description:"Callback when pin state changes"},onExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when sidebar expands"},onCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when sidebar collapses"},onAfterExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback after expand animation completes"},onAfterCollapse:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback after collapse animation completes"},onMenuItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavigationItem) => void",signature:{arguments:[{type:{name:"NavigationItem"},name:"item"}],return:{name:"void"}}},description:"Callback when menu item is clicked"},onMenuItemHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: NavigationItem) => void",signature:{arguments:[{type:{name:"NavigationItem"},name:"item"}],return:{name:"void"}}},description:"Callback when menu item is hovered"}}};export{ne as S};
