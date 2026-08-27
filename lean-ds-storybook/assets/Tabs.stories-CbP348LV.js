import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as o}from"./index-B0WjJBI_.js";import{g as b}from"./styled-components.browser.esm-CuwBLqEg.js";import{I as x}from"./Icon-D9wW9sG4.js";import{T as n}from"./Typography-DlcmwxwF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Search-3OWEky2d.js";import"./createSvgIcon-B7ekv6yR.js";import"./ExpandMore-DhGl5KfG.js";import"./Close-Bujf63ZX.js";import"./Settings-DTDGO7Gi.js";import"./Home-l5wlLBdJ.js";const ct=b.div`
  display: flex;
  flex-direction: ${({$orientation:a})=>a==="horizontal"?"row":"column"};
  align-items: ${({$orientation:a})=>a==="horizontal"?"center":"stretch"};
  gap: 0;
  width: ${({$orientation:a})=>a==="horizontal"?"100%":"auto"};
  opacity: ${({$disabled:a})=>a?.5:1};
  pointer-events: ${({$disabled:a})=>a?"none":"auto"};
  position: relative;
`,pt=b.button`
  display: flex;
  align-items: stretch; /* Changed from center to allow children to fill height */
  justify-content: ${({$contentAlign:a})=>a==="left"?"flex-start":a==="right"?"flex-end":"center"};
  border: none;
  background: ${({$isActive:a,$type:t,theme:i})=>t==="child"&&a?i.colors.palette.primary[100]:"transparent"};
  cursor: ${({$disabled:a})=>a?"not-allowed":"pointer"};
  opacity: ${({$disabled:a})=>a?.5:1};
  transition: all 0.2s ease;
  position: relative;
  
  /* Parent tab styles */
  ${({$type:a,$orientation:t,theme:i})=>a==="parent"&&`
    padding: ${i.spacing[3]} ${i.spacing[5]};
    height: ${i.spacing[13]}; /* 40px - fixed height for consistency */
    ${t==="horizontal"?`border-bottom: ${i.borderWidth[2]} solid transparent;`:t==="vertical-left"?`border-left: ${i.borderWidth[2]} solid transparent;`:`border-right: ${i.borderWidth[2]} solid transparent;`}
  `}
  
  /* Child tab styles */
  ${({$type:a,theme:t})=>a==="child"&&`
    padding: ${t.spacing[4]} ${t.spacing[5]};
    height: ${t.spacing[14]}; /* 32px - fixed height for consistency */
    border-radius: ${t.borderRadius.sm};
  `}
  
  /* Active parent tab */
  ${({$isActive:a,$type:t,$orientation:i,theme:l})=>a&&t==="parent"&&`
    ${i==="horizontal"?`border-bottom-color: ${l.colors.palette.primary[400]};`:i==="vertical-left"?`border-left-color: ${l.colors.palette.primary[400]};`:`border-right-color: ${l.colors.palette.primary[400]};`}
  `}
  
  /* Inactive parent tab */
  ${({$isActive:a,$type:t,$orientation:i,theme:l})=>!a&&t==="parent"&&`
    ${i==="horizontal"?`border-bottom-color: ${l.colors.palette.neutral[400]};`:i==="vertical-left"?`border-left-color: ${l.colors.palette.neutral[400]};`:`border-right-color: ${l.colors.palette.neutral[400]};`}
  `}
  
  /* Hover state */
  &:hover:not(:disabled) {
    ${({$type:a,$isActive:t,theme:i})=>a==="child"&&!t?`background: ${i.colors.palette.neutral[200]};`:a==="parent"&&!t?`background: ${i.colors.palette.neutral[100]};`:""}
  }
  
  /* Focus-visible state */
  &:focus-visible {
    outline: ${({theme:a})=>a.borderWidth[2]} solid ${({theme:a})=>a.colors.semantic.focus.indicator};
    outline-offset: ${({theme:a})=>a.spacing[1]};
    z-index: 1;
  }
  
  /* Active (pressed) state */
  &:active:not(:disabled) {
    transform: scale(0.98);
  }
`,gt=b.span`
  font-family: ${({theme:a})=>a.fonts.primary};
  white-space: nowrap;
  
  /* Parent tab label */
  ${({$type:a,$isActive:t,theme:i})=>a==="parent"&&`
    font-size: ${i.fontSizes[16]};
    line-height: ${i.lineHeights[19]};
    font-weight: ${t?i.fontWeights.semibold:i.fontWeights.medium};
    color: ${t?i.colors.palette.primary[400]:i.colors.palette.neutral[600]};
  `}
  
  /* Child tab label */
  ${({$type:a,$isActive:t,theme:i})=>a==="child"&&`
    font-size: ${i.fontSizes[14]};
    line-height: ${i.lineHeights[16]};
    font-weight: ${t?i.fontWeights.semibold:i.fontWeights.medium};
    color: ${t?i.colors.palette.primary[400]:i.colors.palette.neutral[600]};
  `}
`,ht=b.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:a})=>`${a.spacing[1]} ${a.spacing[2]}`};
  min-width: ${({theme:a})=>a.spacing[10]}; /* 20px - maintains circular shape for single digits */
  border-radius: ${({theme:a})=>a.borderRadius.full};
  font-family: ${({theme:a})=>a.fonts.primary};
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: ${({theme:a})=>a.fontWeights.medium};
  line-height: ${({theme:a})=>a.lineHeights[16]};
  
  ${({$isActive:a,theme:t})=>a?`
    background: ${t.colors.palette.primary[400]};
    color: ${t.colors.palette.neutral[50]};
  `:`
    background: ${t.colors.palette.neutral[200]};
    border: ${t.borderWidth[1]} solid ${t.colors.palette.neutral[800]};
    color: ${t.colors.palette.neutral[800]};
  `}
`,ae=b.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:a})=>a.spacing[7]}; /* 16px minimum for accessibility */
  height: ${({theme:a})=>a.spacing[7]};
  color: ${({$isActive:a,theme:t})=>a?t.colors.palette.primary[400]:t.colors.palette.neutral[600]};
`,bt=b.span`
  display: flex;
  align-items: center;
  flex: 1; /* Fills available space in parent */
  min-height: 0; /* Prevents flex item from overflowing */
  gap: ${({theme:a})=>a.spacing[3]}; /* 8px - only between actual children */
`,ut=b.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:a})=>a.colors.palette.neutral[50]};
  opacity: 0.9;
  z-index: 10;
`,Q=b.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:a})=>a.spacing[5]};
  gap: ${({theme:a})=>a.spacing[2]};
`,s=o.forwardRef(({tabs:a,activeTab:t,onChange:i,orientation:l="horizontal",type:g="parent",as:c,contentAlign:y,showLeadingIcon:Ga=!0,showTrailingIcon:Ja=!1,showBadge:Qa=!0,isLoading:Xa=!1,isInvalid:Ya=!1,errorMessage:Y,isEmpty:Za=!1,emptyMessage:Z="No tabs available",disabled:q=!1,loadingIndicator:et,emptyState:U,errorState:_,className:P,style:O,tabClassName:at,labelClassName:tt,badgeClassName:it,onTabClick:K,onTabFocus:G,onTabBlur:J,...W},u)=>{const ee=o.useRef(null),F=c||"div",nt=y||(l==="horizontal"?"center":l==="vertical-left"?"left":"right"),rt=Za||a.length===0;o.useEffect(()=>{const r=ee.current;if(!r)return;const p=h=>{const m=a.findIndex(dt=>dt.id===t);let v=m;l==="horizontal"?h.key==="ArrowRight"?(h.preventDefault(),v=(m+1)%a.length):h.key==="ArrowLeft"&&(h.preventDefault(),v=(m-1+a.length)%a.length):h.key==="ArrowDown"?(h.preventDefault(),v=(m+1)%a.length):h.key==="ArrowUp"&&(h.preventDefault(),v=(m-1+a.length)%a.length),v!==m&&!a[v].disabled&&i(a[v].id)};return r.addEventListener("keydown",p),()=>r.removeEventListener("keydown",p)},[a,t,i,l]);const st=(r,p)=>{q||r.disabled||(K==null||K(r.id,p),i(r.id))},ot=r=>{G==null||G(r)},lt=r=>{J==null||J(r)};if(Xa)return e.jsx(F,{ref:u,className:P,style:O,...W,children:e.jsx(ut,{children:et||e.jsxs(Q,{children:[e.jsx(x,{name:"HourglassEmpty",size:"medium"}),e.jsx(n,{variant:"body",children:"Loading tabs..."})]})})});if(Ya){const r=typeof _=="function"?_({message:Y}):_||e.jsxs(Q,{children:[e.jsx(x,{name:"Error",size:"medium",color:"error"}),e.jsx(n,{variant:"body",color:"error",children:Y||"Failed to load tabs"})]});return e.jsx(F,{ref:u,className:P,style:O,...W,children:r})}if(rt){const r=typeof U=="function"?U({message:Z}):U||e.jsxs(Q,{children:[e.jsx(x,{name:"TabUnselected",size:"medium"}),e.jsx(n,{variant:"body",children:Z})]});return e.jsx(F,{ref:u,className:P,style:O,...W,children:r})}return e.jsx(ct,{as:F,ref:r=>{u&&(typeof u=="function"?u(r):u.current=r),ee.current=r},$orientation:l,$disabled:q,className:P,style:O,role:"tablist","aria-orientation":l==="horizontal"?"horizontal":"vertical",...W,children:a.map(r=>{const p=r.id===t;return e.jsx(pt,{$isActive:p,$type:g,$disabled:!!r.disabled,$orientation:l,$contentAlign:nt,onClick:h=>st(r,h),onFocus:()=>ot(r.id),onBlur:()=>lt(r.id),disabled:r.disabled||q,role:"tab","aria-selected":p,"aria-disabled":r.disabled||q,"aria-label":r.label,tabIndex:p?0:-1,className:at,children:e.jsxs(bt,{children:[Ga&&r.leadingIcon&&e.jsx(ae,{$isActive:p,children:e.jsx(x,{name:r.leadingIcon,size:"small"})}),e.jsx(gt,{$isActive:p,$type:g,className:tt,children:r.label}),Qa&&r.count!==void 0&&e.jsx(ht,{$isActive:p,className:it,children:r.count}),Ja&&r.trailingIcon&&e.jsx(ae,{$isActive:p,children:e.jsx(x,{name:r.trailingIcon,size:"small"})})]})},r.id)})})});s.displayName="Tabs";s.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Array of tab items"},activeTab:{required:!0,tsType:{name:"string"},description:"Active tab ID"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Tab change handler"},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical-left' | 'vertical-right'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical-left'"},{name:"literal",value:"'vertical-right'"}]},description:`Tab orientation
- 'horizontal': Tabs arranged horizontally with bottom border indicator
- 'vertical-left': Tabs arranged vertically with left border indicator
- 'vertical-right': Tabs arranged vertically with right border indicator
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'parent' | 'child'",elements:[{name:"literal",value:"'parent'"},{name:"literal",value:"'child'"}]},description:"Tab type (visual hierarchy)",defaultValue:{value:"'parent'",computed:!1}},as:{required:!1,tsType:{name:"ElementType"},description:"Render as a different HTML element or custom component"},contentAlign:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:`Content alignment within tabs
- Auto-determined by orientation if not specified:
  - 'horizontal' → 'center'
  - 'vertical-left' → 'left'
  - 'vertical-right' → 'right'
- Can be overridden manually
@default Auto-determined by orientation`},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show leading icons",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show trailing icons",defaultValue:{value:"false",computed:!1}},showBadge:{required:!1,tsType:{name:"boolean"},description:"Show badge counts",defaultValue:{value:"true",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state - shows loading indicator",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Error state - shows error message",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},isEmpty:{required:!1,tsType:{name:"boolean"},description:"Empty state - shows when no tabs provided",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No tabs available'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state for entire tab group",defaultValue:{value:"false",computed:!1}},loadingIndicator:{required:!1,tsType:{name:"ReactNode"},description:"Custom loading indicator"},emptyState:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { message?: string }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom empty state content"},errorState:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { message?: string }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:"Custom error state content"},className:{required:!1,tsType:{name:"string"},description:"Custom className for root container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for root container"},tabClassName:{required:!1,tsType:{name:"string"},description:"Custom className for individual tab buttons"},labelClassName:{required:!1,tsType:{name:"string"},description:"Custom className for tab labels"},badgeClassName:{required:!1,tsType:{name:"string"},description:"Custom className for badges"},onTabClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string, event: React.MouseEvent) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"event"}],return:{name:"void"}}},description:"Called when a tab is clicked (before onChange)"},onTabFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Called when a tab receives focus"},onTabBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Called when a tab loses focus"}},composes:["Omit"]};const Dt={title:"Components/Tabs",component:s,parameters:{layout:"padded",docs:{description:{component:`
# Tabs Component

Enterprise-grade tab navigation with horizontal and vertical orientations, parent/child hierarchy, and full accessibility.

## Features

✅ **Three Orientations** - Horizontal, Vertical Left, Vertical Right
✅ **Two Tab Types** - Parent (primary) and Child (secondary)
✅ **All 8 States** - Default, hover, focus, active, disabled, loading, empty, error
✅ **Full Accessibility** - ARIA, keyboard navigation, focus management
✅ **Design Tokens** - No hardcoded values
✅ **forwardRef Support** - Access DOM node
✅ **Polymorphic** - Render as different elements

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Tabs } from '@ajaysoni7832/lean-ids-components';

function MyComponent() {
  const [activeTab, setActiveTab] = useState('1');
  
  const tabs = [
    { id: '1', label: 'Dashboard', leadingIcon: 'Home', count: 4 },
    { id: '2', label: 'Analytics', leadingIcon: 'BarChart', count: 12 },
  ];

  return (
    <Tabs
      tabs={tabs}
      activeTab={activeTab}
      onChange={setActiveTab}
      orientation="horizontal"
      type="parent"
    />
  );
}
\`\`\`

## Orientation Examples

### Horizontal (Default)
\`\`\`tsx
<Tabs orientation="horizontal" ... />
\`\`\`

### Vertical Left (Sidebar)
\`\`\`tsx
<Tabs orientation="vertical-left" ... />
\`\`\`

### Vertical Right
\`\`\`tsx
<Tabs orientation="vertical-right" ... />
\`\`\`
        `}}},tags:["autodocs"]},d=[{id:"1",label:"Dashboard",leadingIcon:"Home",count:4},{id:"2",label:"Analytics",leadingIcon:"BarChart",count:12},{id:"3",label:"Reports",leadingIcon:"Assessment",count:7},{id:"4",label:"Settings",leadingIcon:"Settings"}],X=[{id:"1",label:"Overview",leadingIcon:"Home",count:3},{id:"2",label:"Details",leadingIcon:"Info",count:8},{id:"3",label:"History",leadingIcon:"History",count:15},{id:"4",label:"Notes",leadingIcon:"Note"}],f={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Horizontal Parent Tabs"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,orientation:"horizontal",type:"parent",showLeadingIcon:!0,showBadge:!0}),e.jsx("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"4px"},children:e.jsxs(n,{variant:"body",children:["Active Tab: ",a]})})]})}},T={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Sidebar Navigation"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,orientation:"vertical-left",type:"parent",showLeadingIcon:!0,showBadge:!0})]}),e.jsxs("div",{style:{flex:1,padding:"16px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsx(n,{variant:"headingS",weight:"semibold",children:"Content Area"}),e.jsxs(n,{variant:"body",children:["Active Tab: ",a]})]})]})}},w={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{flex:1,padding:"16px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsx(n,{variant:"headingS",weight:"semibold",children:"Content Area"}),e.jsxs(n,{variant:"body",children:["Active Tab: ",a]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Right Sidebar"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,orientation:"vertical-right",type:"parent",showLeadingIcon:!0,showBadge:!0})]})]})}},C={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Horizontal Child Tabs"}),e.jsx(s,{tabs:X,activeTab:a,onChange:t,orientation:"horizontal",type:"child",showLeadingIcon:!0,showBadge:!0}),e.jsx("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"4px"},children:e.jsxs(n,{variant:"body",children:["Active Tab: ",a]})})]})}},j={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx(s,{tabs:X,activeTab:a,onChange:t,orientation:"vertical-left",type:"child",showLeadingIcon:!0,showBadge:!0}),e.jsx("div",{style:{flex:1,padding:"16px",background:"#f5f5f5",borderRadius:"4px"},children:e.jsxs(n,{variant:"body",children:["Active Tab: ",a]})})]})}},I={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Loading State"}),e.jsx(s,{tabs:d,activeTab:"1",onChange:()=>{},isLoading:!0})]})},A={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Error State"}),e.jsx(s,{tabs:d,activeTab:"1",onChange:()=>{},isInvalid:!0,errorMessage:"Failed to load tabs"})]})},S={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Empty State"}),e.jsx(s,{tabs:[],activeTab:"1",onChange:()=>{},emptyMessage:"No tabs available"})]})},D={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Disabled Tabs"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,disabled:!0})]})}},L={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Individual Disabled Tabs"}),e.jsx(s,{tabs:[{id:"1",label:"Dashboard",leadingIcon:"Home",count:4},{id:"2",label:"Analytics",leadingIcon:"BarChart",count:12,disabled:!0},{id:"3",label:"Reports",leadingIcon:"Description",count:7},{id:"4",label:"Settings",leadingIcon:"Settings",disabled:!0}],activeTab:a,onChange:t,showLeadingIcon:!0,showBadge:!0})]})}},$={render:()=>{const[a,t]=o.useState("1"),i=o.useRef(null),l=()=>{var g;(g=i.current)==null||g.scrollIntoView({behavior:"smooth"})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"forwardRef Example"}),e.jsx("button",{onClick:l,style:{padding:"8px 16px",width:"fit-content"},children:"Scroll to Tabs"}),e.jsx("div",{style:{height:"100px"}}),e.jsx(s,{ref:i,tabs:d,activeTab:a,onChange:t,showLeadingIcon:!0,showBadge:!0})]})}},M={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Rendered as <nav> element"}),e.jsx(s,{as:"nav",tabs:d,activeTab:a,onChange:t,showLeadingIcon:!0,showBadge:!0})]})}},R={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Custom Styling"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,showLeadingIcon:!0,showBadge:!0,className:"custom-tabs",style:{border:"2px dashed #ccc",padding:"8px"},tabClassName:"custom-tab"})]})}},z={render:()=>{const[a,t]=o.useState("1"),[i,l]=o.useState([]),g=c=>{l(y=>[...y.slice(-4),c])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Event Callbacks"}),e.jsx(s,{tabs:d,activeTab:a,onChange:c=>{t(c),g(`onChange: ${c}`)},onTabClick:(c,y)=>g(`onTabClick: ${c}`),onTabFocus:c=>g(`onTabFocus: ${c}`),onTabBlur:c=>g(`onTabBlur: ${c}`),showLeadingIcon:!0,showBadge:!0}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsx(n,{variant:"headingS",weight:"semibold",children:"Event Log"}),i.map((c,y)=>e.jsx(n,{variant:"caption",children:c},y))]})]})}},B={render:()=>{const[a,t]=o.useState("1"),[i,l]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Tab Hierarchy"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingS",weight:"semibold",children:"Parent Tabs"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,type:"parent",showLeadingIcon:!0,showBadge:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingS",weight:"semibold",children:"Child Tabs"}),e.jsx(s,{tabs:X,activeTab:i,onChange:l,type:"child",showLeadingIcon:!0,showBadge:!0})]}),e.jsx("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"4px"},children:e.jsxs(n,{variant:"body",children:["Parent: ",a,", Child: ",i]})})]})}},E={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Minimal Tabs"}),e.jsx(s,{tabs:[{id:"1",label:"Dashboard"},{id:"2",label:"Analytics"},{id:"3",label:"Reports"},{id:"4",label:"Settings"}],activeTab:a,onChange:t,showLeadingIcon:!1,showBadge:!1})]})}},k={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Trailing Icons"}),e.jsx(s,{tabs:[{id:"1",label:"Dashboard",leadingIcon:"Home",trailingIcon:"ChevronRight"},{id:"2",label:"Analytics",leadingIcon:"BarChart",trailingIcon:"ChevronRight"},{id:"3",label:"Reports",leadingIcon:"Description",trailingIcon:"ChevronRight"}],activeTab:a,onChange:t,showLeadingIcon:!0,showTrailingIcon:!0})]})}},H={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Horizontal (Auto: Center)"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,orientation:"horizontal",showLeadingIcon:!0,showBadge:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Vertical Left (Auto: Left)"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,orientation:"vertical-left",showLeadingIcon:!0,showBadge:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Vertical Right (Auto: Right)"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,orientation:"vertical-right",showLeadingIcon:!0,showBadge:!0})]})]})]})}},N={render:()=>{const[a,t]=o.useState("1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Horizontal - Left Aligned (Override)"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,orientation:"horizontal",contentAlign:"left",showLeadingIcon:!0,showBadge:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Horizontal - Right Aligned (Override)"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,orientation:"horizontal",contentAlign:"right",showLeadingIcon:!0,showBadge:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Vertical Left - Center (Override)"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,orientation:"vertical-left",contentAlign:"center",showLeadingIcon:!0,showBadge:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Vertical Right - Center (Override)"}),e.jsx(s,{tabs:d,activeTab:a,onChange:t,orientation:"vertical-right",contentAlign:"center",showLeadingIcon:!0,showBadge:!0})]})]})]})}},V={render:()=>{const[a,t]=o.useState("1"),i=[{id:"1",label:"Dashboard",leadingIcon:"Home",count:4},{id:"2",label:"Analytics",count:12},{id:"3",label:"Reports",leadingIcon:"Description",count:7},{id:"4",label:"Settings"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Horizontal - Mixed Icons"}),e.jsx(n,{variant:"body",children:"Notice: No empty space for tabs without icons"}),e.jsx(s,{tabs:i,activeTab:a,onChange:t,orientation:"horizontal",showLeadingIcon:!0,showBadge:!0})]}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Vertical Left - Mixed Icons"}),e.jsx(n,{variant:"body",children:"No empty space on left"}),e.jsx(s,{tabs:i,activeTab:a,onChange:t,orientation:"vertical-left",showLeadingIcon:!0,showBadge:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(n,{variant:"headingM",weight:"semibold",children:"Vertical Right - Mixed Icons"}),e.jsx(n,{variant:"body",children:"No empty space on right"}),e.jsx(s,{tabs:i,activeTab:a,onChange:t,orientation:"vertical-right",showLeadingIcon:!0,showBadge:!0})]})]})]})}};var te,ie,ne,re,se;f.parameters={...f.parameters,docs:{...(te=f.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Horizontal Parent Tabs</Typography>
        <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} orientation="horizontal" type="parent" showLeadingIcon showBadge />
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <Typography variant="body">Active Tab: {activeTab}</Typography>
        </div>
      </div>;
  }
}`,...(ne=(ie=f.parameters)==null?void 0:ie.docs)==null?void 0:ne.source},description:{story:"Horizontal tabs (default) - Standard top navigation",...(se=(re=f.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var oe,le,de,ce,pe;T.parameters={...T.parameters,docs:{...(oe=T.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      gap: '20px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Sidebar Navigation</Typography>
          <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} orientation="vertical-left" type="parent" showLeadingIcon showBadge />
        </div>
        <div style={{
        flex: 1,
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <Typography variant="headingS" weight="semibold">Content Area</Typography>
          <Typography variant="body">Active Tab: {activeTab}</Typography>
        </div>
      </div>;
  }
}`,...(de=(le=T.parameters)==null?void 0:le.docs)==null?void 0:de.source},description:{story:"Vertical left tabs - Perfect for sidebar navigation",...(pe=(ce=T.parameters)==null?void 0:ce.docs)==null?void 0:pe.description}}};var ge,he,be,ue,ve;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      gap: '20px'
    }}>
        <div style={{
        flex: 1,
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <Typography variant="headingS" weight="semibold">Content Area</Typography>
          <Typography variant="body">Active Tab: {activeTab}</Typography>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Right Sidebar</Typography>
          <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} orientation="vertical-right" type="parent" showLeadingIcon showBadge />
        </div>
      </div>;
  }
}`,...(be=(he=w.parameters)==null?void 0:he.docs)==null?void 0:be.source},description:{story:"Vertical right tabs - Alternative sidebar position",...(ve=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:ve.description}}};var ye,me,xe,fe,Te;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Horizontal Child Tabs</Typography>
        <Tabs tabs={childTabs} activeTab={activeTab} onChange={setActiveTab} orientation="horizontal" type="child" showLeadingIcon showBadge />
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <Typography variant="body">Active Tab: {activeTab}</Typography>
        </div>
      </div>;
  }
}`,...(xe=(me=C.parameters)==null?void 0:me.docs)==null?void 0:xe.source},description:{story:"Horizontal child tabs",...(Te=(fe=C.parameters)==null?void 0:fe.docs)==null?void 0:Te.description}}};var we,Ce,je,Ie,Ae;j.parameters={...j.parameters,docs:{...(we=j.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      gap: '20px'
    }}>
        <Tabs tabs={childTabs} activeTab={activeTab} onChange={setActiveTab} orientation="vertical-left" type="child" showLeadingIcon showBadge />
        <div style={{
        flex: 1,
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <Typography variant="body">Active Tab: {activeTab}</Typography>
        </div>
      </div>;
  }
}`,...(je=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:je.source},description:{story:"Vertical left child tabs",...(Ae=(Ie=j.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.description}}};var Se,De,Le,$e,Me;I.parameters={...I.parameters,docs:{...(Se=I.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Typography variant="headingM" weight="semibold">Loading State</Typography>
      <Tabs tabs={parentTabs} activeTab="1" onChange={() => {}} isLoading />
    </div>
}`,...(Le=(De=I.parameters)==null?void 0:De.docs)==null?void 0:Le.source},description:{story:"Loading state",...(Me=($e=I.parameters)==null?void 0:$e.docs)==null?void 0:Me.description}}};var Re,ze,Be,Ee,ke;A.parameters={...A.parameters,docs:{...(Re=A.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Typography variant="headingM" weight="semibold">Error State</Typography>
      <Tabs tabs={parentTabs} activeTab="1" onChange={() => {}} isInvalid errorMessage="Failed to load tabs" />
    </div>
}`,...(Be=(ze=A.parameters)==null?void 0:ze.docs)==null?void 0:Be.source},description:{story:"Error state",...(ke=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:ke.description}}};var He,Ne,Ve,qe,Pe;S.parameters={...S.parameters,docs:{...(He=S.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Typography variant="headingM" weight="semibold">Empty State</Typography>
      <Tabs tabs={[]} activeTab="1" onChange={() => {}} emptyMessage="No tabs available" />
    </div>
}`,...(Ve=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source},description:{story:"Empty state",...(Pe=(qe=S.parameters)==null?void 0:qe.docs)==null?void 0:Pe.description}}};var Oe,We,Fe,Ue,_e;D.parameters={...D.parameters,docs:{...(Oe=D.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Disabled Tabs</Typography>
        <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} disabled />
      </div>;
  }
}`,...(Fe=(We=D.parameters)==null?void 0:We.docs)==null?void 0:Fe.source},description:{story:"Disabled state",...(_e=(Ue=D.parameters)==null?void 0:Ue.docs)==null?void 0:_e.description}}};var Ke,Ge,Je,Qe,Xe;L.parameters={...L.parameters,docs:{...(Ke=L.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Individual Disabled Tabs</Typography>
        <Tabs tabs={[{
        id: '1',
        label: 'Dashboard',
        leadingIcon: 'Home',
        count: 4
      }, {
        id: '2',
        label: 'Analytics',
        leadingIcon: 'BarChart',
        count: 12,
        disabled: true
      }, {
        id: '3',
        label: 'Reports',
        leadingIcon: 'Description',
        count: 7
      }, {
        id: '4',
        label: 'Settings',
        leadingIcon: 'Settings',
        disabled: true
      }]} activeTab={activeTab} onChange={setActiveTab} showLeadingIcon showBadge />
      </div>;
  }
}`,...(Je=(Ge=L.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source},description:{story:"Individual disabled tabs",...(Xe=(Qe=L.parameters)==null?void 0:Qe.docs)==null?void 0:Xe.description}}};var Ye,Ze,ea,aa,ta;$.parameters={...$.parameters,docs:{...(Ye=$.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    const tabsRef = useRef<HTMLDivElement>(null);
    const handleScrollToTabs = () => {
      tabsRef.current?.scrollIntoView({
        behavior: 'smooth'
      });
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">forwardRef Example</Typography>
        <button onClick={handleScrollToTabs} style={{
        padding: '8px 16px',
        width: 'fit-content'
      }}>
          Scroll to Tabs
        </button>
        <div style={{
        height: '100px'
      }} />
        <Tabs ref={tabsRef} tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} showLeadingIcon showBadge />
      </div>;
  }
}`,...(ea=(Ze=$.parameters)==null?void 0:Ze.docs)==null?void 0:ea.source},description:{story:"forwardRef usage - Access DOM node",...(ta=(aa=$.parameters)==null?void 0:aa.docs)==null?void 0:ta.description}}};var ia,na,ra,sa,oa;M.parameters={...M.parameters,docs:{...(ia=M.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Rendered as &lt;nav&gt; element</Typography>
        <Tabs as="nav" tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} showLeadingIcon showBadge />
      </div>;
  }
}`,...(ra=(na=M.parameters)==null?void 0:na.docs)==null?void 0:ra.source},description:{story:"Polymorphic 'as' prop - Render as different element",...(oa=(sa=M.parameters)==null?void 0:sa.docs)==null?void 0:oa.description}}};var la,da,ca,pa,ga;R.parameters={...R.parameters,docs:{...(la=R.parameters)==null?void 0:la.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Custom Styling</Typography>
        <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} showLeadingIcon showBadge className="custom-tabs" style={{
        border: '2px dashed #ccc',
        padding: '8px'
      }} tabClassName="custom-tab" />
      </div>;
  }
}`,...(ca=(da=R.parameters)==null?void 0:da.docs)==null?void 0:ca.source},description:{story:"Custom className and style overrides",...(ga=(pa=R.parameters)==null?void 0:pa.docs)==null?void 0:ga.description}}};var ha,ba,ua,va,ya;z.parameters={...z.parameters,docs:{...(ha=z.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    const [events, setEvents] = useState<string[]>([]);
    const addEvent = (event: string) => {
      setEvents(prev => [...prev.slice(-4), event]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Event Callbacks</Typography>
        <Tabs tabs={parentTabs} activeTab={activeTab} onChange={id => {
        setActiveTab(id);
        addEvent(\`onChange: \${id}\`);
      }} onTabClick={(id, e) => addEvent(\`onTabClick: \${id}\`)} onTabFocus={id => addEvent(\`onTabFocus: \${id}\`)} onTabBlur={id => addEvent(\`onTabBlur: \${id}\`)} showLeadingIcon showBadge />
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <Typography variant="headingS" weight="semibold">Event Log</Typography>
          {events.map((event, i) => <Typography key={i} variant="caption">{event}</Typography>)}
        </div>
      </div>;
  }
}`,...(ua=(ba=z.parameters)==null?void 0:ba.docs)==null?void 0:ua.source},description:{story:"Event callbacks",...(ya=(va=z.parameters)==null?void 0:va.docs)==null?void 0:ya.description}}};var ma,xa,fa,Ta,wa;B.parameters={...B.parameters,docs:{...(ma=B.parameters)==null?void 0:ma.docs,source:{originalSource:`{
  render: () => {
    const [activeParent, setActiveParent] = useState('1');
    const [activeChild, setActiveChild] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <Typography variant="headingM" weight="semibold">Tab Hierarchy</Typography>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingS" weight="semibold">Parent Tabs</Typography>
          <Tabs tabs={parentTabs} activeTab={activeParent} onChange={setActiveParent} type="parent" showLeadingIcon showBadge />
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingS" weight="semibold">Child Tabs</Typography>
          <Tabs tabs={childTabs} activeTab={activeChild} onChange={setActiveChild} type="child" showLeadingIcon showBadge />
        </div>

        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <Typography variant="body">Parent: {activeParent}, Child: {activeChild}</Typography>
        </div>
      </div>;
  }
}`,...(fa=(xa=B.parameters)==null?void 0:xa.docs)==null?void 0:fa.source},description:{story:"Parent + Child hierarchy",...(wa=(Ta=B.parameters)==null?void 0:Ta.docs)==null?void 0:wa.description}}};var Ca,ja,Ia,Aa,Sa;E.parameters={...E.parameters,docs:{...(Ca=E.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Minimal Tabs</Typography>
        <Tabs tabs={[{
        id: '1',
        label: 'Dashboard'
      }, {
        id: '2',
        label: 'Analytics'
      }, {
        id: '3',
        label: 'Reports'
      }, {
        id: '4',
        label: 'Settings'
      }]} activeTab={activeTab} onChange={setActiveTab} showLeadingIcon={false} showBadge={false} />
      </div>;
  }
}`,...(Ia=(ja=E.parameters)==null?void 0:ja.docs)==null?void 0:Ia.source},description:{story:"Minimal tabs (no icons, no badges)",...(Sa=(Aa=E.parameters)==null?void 0:Aa.docs)==null?void 0:Sa.description}}};var Da,La,$a,Ma,Ra;k.parameters={...k.parameters,docs:{...(Da=k.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Trailing Icons</Typography>
        <Tabs tabs={[{
        id: '1',
        label: 'Dashboard',
        leadingIcon: 'Home',
        trailingIcon: 'ChevronRight'
      }, {
        id: '2',
        label: 'Analytics',
        leadingIcon: 'BarChart',
        trailingIcon: 'ChevronRight'
      }, {
        id: '3',
        label: 'Reports',
        leadingIcon: 'Description',
        trailingIcon: 'ChevronRight'
      }]} activeTab={activeTab} onChange={setActiveTab} showLeadingIcon showTrailingIcon />
      </div>;
  }
}`,...($a=(La=k.parameters)==null?void 0:La.docs)==null?void 0:$a.source},description:{story:"With trailing icons",...(Ra=(Ma=k.parameters)==null?void 0:Ma.docs)==null?void 0:Ra.description}}};var za,Ba,Ea,ka,Ha;H.parameters={...H.parameters,docs:{...(za=H.parameters)==null?void 0:za.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Horizontal (Auto: Center)</Typography>
          <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} orientation="horizontal" showLeadingIcon showBadge />
        </div>

        <div style={{
        display: 'flex',
        gap: '20px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="headingM" weight="semibold">Vertical Left (Auto: Left)</Typography>
            <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} orientation="vertical-left" showLeadingIcon showBadge />
          </div>

          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="headingM" weight="semibold">Vertical Right (Auto: Right)</Typography>
            <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} orientation="vertical-right" showLeadingIcon showBadge />
          </div>
        </div>
      </div>;
  }
}`,...(Ea=(Ba=H.parameters)==null?void 0:Ba.docs)==null?void 0:Ea.source},description:{story:"Content alignment - Auto-determined by orientation",...(Ha=(ka=H.parameters)==null?void 0:ka.docs)==null?void 0:Ha.description}}};var Na,Va,qa,Pa,Oa;N.parameters={...N.parameters,docs:{...(Na=N.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Horizontal - Left Aligned (Override)</Typography>
          <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} orientation="horizontal" contentAlign="left" showLeadingIcon showBadge />
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Horizontal - Right Aligned (Override)</Typography>
          <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} orientation="horizontal" contentAlign="right" showLeadingIcon showBadge />
        </div>

        <div style={{
        display: 'flex',
        gap: '20px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="headingM" weight="semibold">Vertical Left - Center (Override)</Typography>
            <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} orientation="vertical-left" contentAlign="center" showLeadingIcon showBadge />
          </div>

          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="headingM" weight="semibold">Vertical Right - Center (Override)</Typography>
            <Tabs tabs={parentTabs} activeTab={activeTab} onChange={setActiveTab} orientation="vertical-right" contentAlign="center" showLeadingIcon showBadge />
          </div>
        </div>
      </div>;
  }
}`,...(qa=(Va=N.parameters)==null?void 0:Va.docs)==null?void 0:qa.source},description:{story:"Content alignment - Manual override",...(Oa=(Pa=N.parameters)==null?void 0:Pa.docs)==null?void 0:Oa.description}}};var Wa,Fa,Ua,_a,Ka;V.parameters={...V.parameters,docs:{...(Wa=V.parameters)==null?void 0:Wa.docs,source:{originalSource:`{
  render: () => {
    const [activeTab, setActiveTab] = useState('1');
    const mixedIconTabs: TabItem[] = [{
      id: '1',
      label: 'Dashboard',
      leadingIcon: 'Home',
      count: 4
    }, {
      id: '2',
      label: 'Analytics',
      count: 12
    },
    // No icon
    {
      id: '3',
      label: 'Reports',
      leadingIcon: 'Description',
      count: 7
    }, {
      id: '4',
      label: 'Settings'
    } // No icon, no badge
    ];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Horizontal - Mixed Icons</Typography>
          <Typography variant="body">Notice: No empty space for tabs without icons</Typography>
          <Tabs tabs={mixedIconTabs} activeTab={activeTab} onChange={setActiveTab} orientation="horizontal" showLeadingIcon showBadge />
        </div>

        <div style={{
        display: 'flex',
        gap: '20px'
      }}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="headingM" weight="semibold">Vertical Left - Mixed Icons</Typography>
            <Typography variant="body">No empty space on left</Typography>
            <Tabs tabs={mixedIconTabs} activeTab={activeTab} onChange={setActiveTab} orientation="vertical-left" showLeadingIcon showBadge />
          </div>

          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <Typography variant="headingM" weight="semibold">Vertical Right - Mixed Icons</Typography>
            <Typography variant="body">No empty space on right</Typography>
            <Tabs tabs={mixedIconTabs} activeTab={activeTab} onChange={setActiveTab} orientation="vertical-right" showLeadingIcon showBadge />
          </div>
        </div>
      </div>;
  }
}`,...(Ua=(Fa=V.parameters)==null?void 0:Fa.docs)==null?void 0:Ua.source},description:{story:"Mixed icons - Some tabs with icons, some without (no empty space)",...(Ka=(_a=V.parameters)==null?void 0:_a.docs)==null?void 0:Ka.description}}};const Lt=["HorizontalParent","VerticalLeftParent","VerticalRightParent","HorizontalChild","VerticalLeftChild","LoadingState","ErrorState","EmptyState","DisabledState","IndividualDisabled","ForwardRefUsage","PolymorphicAs","CustomStyling","EventCallbacks","HierarchyExample","Minimal","WithTrailingIcons","ContentAlignmentAuto","ContentAlignmentManual","MixedIcons"];export{H as ContentAlignmentAuto,N as ContentAlignmentManual,R as CustomStyling,D as DisabledState,S as EmptyState,A as ErrorState,z as EventCallbacks,$ as ForwardRefUsage,B as HierarchyExample,C as HorizontalChild,f as HorizontalParent,L as IndividualDisabled,I as LoadingState,E as Minimal,V as MixedIcons,M as PolymorphicAs,j as VerticalLeftChild,T as VerticalLeftParent,w as VerticalRightParent,k as WithTrailingIcons,Lt as __namedExportsOrder,Dt as default};
