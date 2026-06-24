import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as y,R as f}from"./index-B0WjJBI_.js";import{c as a}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as _}from"./Brand-D2_m1Vnv.js";import{M as L}from"./MenuItem-qyRq59Mo.js";import{A as D}from"./Avatar-BtdRwqdw.js";const J=a.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  width: ${({$state:e})=>e==="collapsed"?"60px":"236px"};
  height: 100vh; /* Fixed viewport height - sidebar doesn't grow with content */
  background-color: ${({theme:e})=>e.colors.palette.primary[800]};
  padding: 16px ${({$state:e,theme:r})=>e==="collapsed"?r.spacing[1]:r.spacing[2]};
  overflow: visible; /* Changed from hidden to visible so toggle button can overlap */
  transition: width 0.3s ease, padding 0.3s ease;
  flex-shrink: 0;
`,K=a.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden; /* Prevent content from overflowing horizontally */
  
  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  /* Firefox scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
`,Q=a.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({$state:e})=>e==="collapsed"?"center":"space-between"};
  gap: 8px;
  padding: 0 ${({theme:e})=>e.spacing[7]};
  width: 100%;
  flex-shrink: 0;
  position: relative;
  
  /* Show pin button on hover */
  &:hover button {
    opacity: 1;
    visibility: visible;
  }
`,B=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  flex-shrink: 0;
`,X=a.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.caption};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights.caption};
  letter-spacing: 1px;
  color: #ccc;
  padding: 0 ${({theme:e})=>e.spacing[7]};
  text-transform: uppercase;
  flex-shrink: 0;
`,A=a.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`,Y=a.div`
  display: flex;
  align-items: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  justify-content: ${({$state:e})=>e==="collapsed"?"center":"flex-start"};
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({$state:e,theme:r})=>e==="collapsed"?"0":`0 ${r.spacing[7]}`};
  width: 100%;
  flex-shrink: 0;
`,Z=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
  flex-shrink: 0;
  white-space: nowrap;
  text-align: left;
`,ee=a.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.body};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: ${({theme:e})=>e.lineHeights.body};
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  flex-shrink: 0;
`,te=a.p`
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: 14px;
  letter-spacing: 1.5px;
  color: ${({theme:e})=>e.colors.palette.primary[50]};
  flex-shrink: 0;
`,O=a.div`
  width: 100%;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: ${({theme:e})=>e.spacing[3]} 0;
`,ne=a.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  min-width: 32px;
  background-color: ${({$isPinned:e})=>e?"rgba(255, 255, 255, 0.15)":"transparent"};
  border: none;
  border-radius: 4px;
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  cursor: pointer;
  transition: all 0.2s ease;
  padding: 0;
  flex-shrink: 0;
  
  /* Hidden by default, shown on hover or when pinned */
  opacity: ${({$isPinned:e})=>e?"1":"0"};
  visibility: ${({$isPinned:e})=>e?"visible":"hidden"};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &:active {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  }
`,re=a.button`
  position: absolute;
  
  /* Position: half inside, half outside sidebar - aligned with brand logo vertically */
  ${({$position:e,$offset:r,$size:s})=>{const m=(s==="small"?24:32)/2;return e==="top"?`
        top: ${r}px;
        right: -${m}px; /* Half outside */
      `:`
        bottom: ${r}px;
        right: -${m}px; /* Half outside */
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
`,ie=a.div`
  position: fixed;
  z-index: 1000;
  
  /* Add invisible left padding to create safe zone for mouse movement */
  padding-left: 8px;
  margin-left: -8px; /* Offset to maintain visual position */
  
  /* Inner container styling */
  background-color: ${({theme:e})=>e.colors.palette.primary[700]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  box-shadow: 2px 2px 10.5px 0px rgba(70, 62, 93, 0.55);
  padding-top: ${({theme:e})=>e.spacing[2]};
  padding-right: ${({theme:e})=>e.spacing[2]};
  padding-bottom: ${({theme:e})=>e.spacing[2]};
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  width: 237px;
  overflow: hidden;
`,oe=a.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[7]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
  
  background-color: ${({$isActive:e,theme:r})=>e?"rgba(255, 255, 255, 0.1)":"transparent"};

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`,ae=a.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  line-height: ${({theme:e})=>e.lineHeights[19]};
  font-weight: ${({$isActive:e,theme:r})=>e?r.fontWeights.semibold:r.fontWeights.regular};
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  white-space: nowrap;
`,se=a.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({theme:e})=>e.colors.palette.neutral[50]};
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,z=({items:e,position:r,onClose:s,className:T})=>{const[m,$]=y.useState(null),[u,S]=y.useState(null),k=y.useRef(null),p=y.useRef(null),l=y.useRef(null);y.useEffect(()=>{const n=d=>{k.current&&!k.current.contains(d.target)&&(s==null||s())};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[s]),y.useEffect(()=>()=>{p.current&&clearTimeout(p.current),l.current&&clearTimeout(l.current)},[]);const h=(n,d)=>{if(p.current&&(clearTimeout(p.current),p.current=null),l.current&&(clearTimeout(l.current),l.current=null),$(null),S(null),n.children&&n.children.length>0){const w=d.currentTarget.getBoundingClientRect(),c=n.children;p.current=setTimeout(()=>{$({top:w.top,left:w.right}),S(c)},100)}},I=()=>{p.current&&(clearTimeout(p.current),p.current=null)},x=()=>{l.current&&(clearTimeout(l.current),l.current=null)},M=()=>{l.current&&clearTimeout(l.current),l.current=setTimeout(()=>{(!u||u.length===0)&&(s==null||s())},200)},N=n=>{var d;(!n.children||n.children.length===0)&&((d=n.onClick)==null||d.call(n),s==null||s())};return t.jsxs(t.Fragment,{children:[t.jsx(ie,{ref:k,className:T,style:{top:r.top,left:r.left},onMouseEnter:x,onMouseLeave:M,children:e.map(n=>t.jsxs(oe,{$isActive:n.active||!1,$hasChildren:!!n.children&&n.children.length>0,onMouseEnter:d=>h(n,d),onMouseLeave:I,onClick:()=>N(n),children:[t.jsx(ae,{$isActive:n.active||!1,children:n.label}),n.children&&n.children.length>0&&t.jsx(se,{children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M9.29 6.71a.996.996 0 0 0 0 1.41L13.17 12l-3.88 3.88a.996.996 0 1 0 1.41 1.41l4.59-4.59a.996.996 0 0 0 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z",fill:"currentColor"})})})]},n.id))}),m&&u&&t.jsx(z,{items:u,position:m,onClose:s})]})};z.__docgenInfo={description:"",methods:[],displayName:"NestedMenuOverlay",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"NestedMenuItem"}],raw:"NestedMenuItem[]"},description:""},position:{required:!0,tsType:{name:"signature",type:"object",raw:"{ top: number; left: number }",signature:{properties:[{key:"top",value:{name:"number",required:!0}},{key:"left",value:{name:"number",required:!0}}]}},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const le=({groups:e=[],user:r,className:s,children:T,onPinChange:m,isPinned:$,expandMode:u="hover",toggleButtonPosition:S="top",toggleButtonOffset:k=24,toggleButtonSize:p="large",toggleButtonIcon:l})=>{const[h,I]=f.useState(!1),[x,M]=f.useState(!1),[N,n]=f.useState(!1),[d,w]=f.useState(null),c=$!==void 0?$:N,v=c?"expanded":u==="hover"?h?"expanded":"collapsed":u==="button"?x?"expanded":"collapsed":h||x?"expanded":"collapsed",W=()=>{const o=!c;n(o),m==null||m(o)},U=()=>{M(!x)},E=o=>{var g;return{id:o.id,label:o.label,active:o.active,onClick:o.onClick,children:(g=o.children)==null?void 0:g.map(E)}},[V,C]=f.useState(!1),b=f.useRef(null),R=f.useRef(h);f.useEffect(()=>{if(!c&&R.current!==h){C(!0),h||w(null);const o=setTimeout(()=>{C(!1)},300);return R.current=h,()=>clearTimeout(o)}R.current=h},[h,c]);const P=(o,g)=>{b.current&&clearTimeout(b.current);const i=V&&!h;if(o.children&&o.children.length>0&&!i){const j=g.currentTarget.getBoundingClientRect(),F=o.children,G=236;b.current=setTimeout(()=>{w({items:F.map(E),position:{top:j.top,left:G}})},100)}},q=()=>{b.current&&(clearTimeout(b.current),b.current=null)};f.useEffect(()=>()=>{b.current&&clearTimeout(b.current)},[]);const H=u==="hover"||u==="both";return t.jsxs(J,{$state:v,className:s,"aria-label":"Side navigation",onMouseEnter:()=>!c&&H&&I(!0),onMouseLeave:()=>!c&&H&&I(!1),children:[(u==="button"||u==="both")&&!c&&t.jsx(re,{$position:S,$offset:k,$size:p,onClick:U,"aria-label":x?"Collapse sidebar":"Expand sidebar",title:x?"Collapse sidebar":"Expand sidebar",children:l||t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:x?t.jsx("path",{d:"M15 18l-6-6 6-6"}):t.jsx("path",{d:"M9 18l6-6-6-6"})})}),t.jsxs(K,{children:[t.jsxs(Q,{$state:v,children:[t.jsx(_,{variant:v==="collapsed"?"symbol":"logo",mode:"dark"}),v==="expanded"&&t.jsx(ne,{$isPinned:c,$state:v,onClick:W,"aria-label":c?"Unpin sidebar":"Pin sidebar",title:c?"Unpin sidebar":"Pin sidebar",children:t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:c?t.jsx("path",{d:"M16 9V4h1c.55 0 1-.45 1-1s-.45-1-1-1H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3z"}):t.jsx("path",{d:"M14 4v5c0 1.12.37 2.16 1 3H9c.65-.86 1-1.9 1-3V4h4m3-2H7c-.55 0-1 .45-1 1s.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2c-1.66 0-3-1.34-3-3V4h1c.55 0 1-.45 1-1s-.45-1-1-1z"})})})]}),v==="expanded"&&t.jsx(B,{children:T||e.map((o,g)=>t.jsxs(f.Fragment,{children:[o.title&&t.jsx(X,{children:o.title}),t.jsx(A,{children:o.items.map(i=>t.jsx("div",{onMouseEnter:j=>P(i,j),onMouseLeave:q,children:t.jsx(L,{border:"left",mode:"dark",state:i.active?"active":"inactive",label:i.label,iconM:i.icon,showIcon:!0,showLabel:!0,showIndicator:i.showIndicator,nestedMenu:!!i.children&&i.children.length>0,onClick:i.onClick})},i.id))}),g<e.length-1&&t.jsx(O,{})]},g))}),v==="collapsed"&&t.jsx(B,{children:e.map((o,g)=>t.jsxs(f.Fragment,{children:[t.jsx(A,{children:o.items.map(i=>t.jsx("div",{onMouseEnter:j=>P(i,j),onMouseLeave:q,children:t.jsx(L,{aligned:"vertical",border:"left",mode:"dark",state:i.active?"active":"inactive",label:i.label,iconM:i.icon,showIcon:!0,showLabel:!0,showIndicator:i.showIndicator,nestedMenu:!!i.children&&i.children.length>0,onClick:i.onClick})},i.id))}),g<e.length-1&&t.jsx(O,{})]},g))})]}),d&&t.jsx(z,{items:d.items,position:d.position,onClose:()=>w(null)}),r&&t.jsxs(Y,{$state:v,onClick:r.onClick,style:{cursor:r.onClick?"pointer":"default"},children:[t.jsx(D,{size:"medium",initials:r.initials,src:r.avatarUrl,alt:r.name,onClick:r.onClick}),v==="expanded"&&t.jsxs(Z,{children:[t.jsx(ee,{children:r.name}),t.jsx(te,{children:r.subtitle})]})]})]})};le.__docgenInfo={description:"",methods:[],displayName:"SideNavigation",props:{groups:{required:!1,tsType:{name:"Array",elements:[{name:"NavigationGroup"}],raw:"NavigationGroup[]"},description:"Navigation groups",defaultValue:{value:"[]",computed:!1}},user:{required:!1,tsType:{name:"UserProfile"},description:"User profile information"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content (overrides default groups)"},onPinChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isPinned: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPinned"}],return:{name:"void"}}},description:"Callback when pin state changes"},isPinned:{required:!1,tsType:{name:"boolean"},description:"Whether sidebar is pinned (locked in expanded state)"},expandMode:{required:!1,tsType:{name:"union",raw:"'hover' | 'button' | 'both'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'button'"},{name:"literal",value:"'both'"}]},description:"Expand/collapse mode - 'hover', 'button', or 'both'",defaultValue:{value:"'hover'",computed:!1}},toggleButtonPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}]},description:"Position of toggle button - 'top' or 'bottom'",defaultValue:{value:"'top'",computed:!1}},toggleButtonOffset:{required:!1,tsType:{name:"number"},description:"Vertical offset for toggle button (in pixels)",defaultValue:{value:"24",computed:!1}},toggleButtonSize:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"Size of toggle button - 'small' or 'large'",defaultValue:{value:"'large'",computed:!1}},toggleButtonIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom icon for toggle button (collapsed state)"}}};export{le as S};
