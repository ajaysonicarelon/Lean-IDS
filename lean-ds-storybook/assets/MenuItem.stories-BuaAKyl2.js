import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as a}from"./index-B0WjJBI_.js";import{fn as c}from"./index-CH2Su9EI.js";import{M as o}from"./MenuItem-CHS1uLTd.js";import{g as $e}from"./styled-components.browser.esm-CuwBLqEg.js";import{H as r}from"./Home-l5wlLBdJ.js";import{c as N}from"./createSvgIcon-B7ekv6yR.js";import{S as p,D as _e}from"./Settings-DTDGO7Gi.js";import{N as qe}from"./NestedMenuOverlay-D0ele8a_.js";import{T as P}from"./Typography-DlcmwxwF.js";import"./_commonjsHelpers-CqkleIqs.js";const n=N(e.jsx("path",{d:"M3 13h8V3H3zm0 8h8v-6H3zm10 0h8V11h-8zm0-18v6h8V3z"})),Ge=N(e.jsx("path",{d:"M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8z"})),Ye=N(e.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),E=N(e.jsx("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2m6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1z"})),v=N(e.jsx("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4m0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4"})),mo={title:"Components/MenuItem",component:o,parameters:{layout:"centered",backgrounds:{default:"dark",values:[{name:"dark",value:"#1a1a1a"},{name:"light",value:"#ffffff"}]},docs:{description:{component:`
# MenuItem

Enterprise-grade navigation menu item for both horizontal (top header) and vertical (side navigation) layouts.

## Installation
\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage
\`\`\`tsx
import { MenuItem } from '@ajaysoni7832/lean-ids-components';
import DashboardIcon from '@mui/icons-material/Dashboard';

<MenuItem
  label="Dashboard"
  iconS={<DashboardIcon />}
  state="active"
  onClick={handleClick}
/>
\`\`\`

## Features
✅ **Two Layouts** - Horizontal (top header) and vertical (side nav)
✅ **Two Modes** - Dark and light color schemes
✅ **All 8 States** - Active, inactive, disabled, loading, empty, error, hover, focus
✅ **Keyboard Navigation** - Enter and Space key support
✅ **Accessible** - Full ARIA attributes and semantic HTML

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | 'Menu Item' | Label text |
| state | 'active' \\| 'inactive' | 'inactive' | Active/inactive state |
| mode | 'dark' \\| 'light' | 'dark' | Color mode |
| aligned | 'horizontal' \\| 'vertical' | 'horizontal' | Layout direction |
| border | 'bottom' \\| 'left' | 'bottom' | Border position |
| iconS | ReactNode | - | Small icon (16px) for horizontal |
| iconM | ReactNode | - | Medium icon (24px) for vertical |
| disabled | boolean | false | Disabled state |
| isLoading | boolean | false | Loading state |
| isEmpty | boolean | false | Empty state |
| isInvalid | boolean | false | Error state |

## Examples
### Top Header Navigation
\`\`\`tsx
<MenuItem
  label="Home"
  iconS={<HomeIcon />}
  border="bottom"
  aligned="horizontal"
  state="active"
/>
\`\`\`

### Side Navigation
\`\`\`tsx
<MenuItem
  label="Dashboard"
  iconM={<DashboardIcon />}
  border="left"
  aligned="horizontal"
  state="active"
/>
\`\`\`
        `}}},tags:["autodocs"],args:{onClick:c(),onMouseEnter:c(),onMouseLeave:c(),onFocus:c(),onBlur:c(),onKeyDown:c(),onActivate:c(),onDeactivate:c()},argTypes:{aligned:{control:"select",options:["horizontal","vertical"],description:"Layout direction"},border:{control:"select",options:["bottom","left"],description:"Border position"},mode:{control:"select",options:["dark","light"],description:"Color mode"},state:{control:"select",options:["active","inactive"],description:"Active/inactive state"},disabled:{control:"boolean",description:"Disabled state"},isLoading:{control:"boolean",description:"Loading state"},isEmpty:{control:"boolean",description:"Empty state"},isInvalid:{control:"boolean",description:"Error state"},onClick:{action:"clicked"},onMouseEnter:{action:"mouse-enter"},onMouseLeave:{action:"mouse-leave"},onFocus:{action:"focused"},onBlur:{action:"blurred"},onKeyDown:{action:"key-pressed"},onActivate:{action:"activated"},onDeactivate:{action:"deactivated"}}},H=$e.div`
  display: flex;
  gap: 8px;
  background: #1a1a1a;
  padding: 8px;
  border-radius: 4px;
`,Je=$e.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: #1a1a1a;
  padding: 8px;
  border-radius: 4px;
  width: 200px;
`,h={args:{label:"Dashboard",iconS:e.jsx(n,{}),state:"inactive",mode:"dark",aligned:"horizontal",border:"bottom"},parameters:{docs:{description:{story:'Interactive playground to test all MenuItem props. Change background to "light" in toolbar to test light mode.'}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{label:"Inactive",iconS:e.jsx(r,{}),state:"inactive",mode:"dark"}),e.jsx(o,{label:"Active",iconS:e.jsx(n,{}),state:"active",mode:"dark"}),e.jsx(o,{label:"Hover Me",iconS:e.jsx(p,{}),state:"inactive",mode:"dark"}),e.jsx(o,{label:"Focus Me (Tab)",iconS:e.jsx(v,{}),state:"inactive",mode:"dark"}),e.jsx(o,{label:"Disabled",iconS:e.jsx(p,{}),state:"inactive",mode:"dark",disabled:!0}),e.jsx(o,{label:"Loading",iconS:e.jsx(n,{}),state:"inactive",mode:"dark",isLoading:!0}),e.jsx(o,{label:"Empty",state:"inactive",mode:"dark",isEmpty:!0,emptyMessage:"No items available"}),e.jsx(o,{label:"Error",state:"inactive",mode:"dark",isInvalid:!0,errorMessage:"Failed to load menu item"})]}),parameters:{docs:{description:{story:"All 8 states: inactive, active, hover, focus, disabled, loading, empty, and error. Copy any MenuItem you need."}}}},k={render:()=>e.jsxs(H,{children:[e.jsx(o,{label:"Home",iconS:e.jsx(r,{}),border:"bottom",aligned:"horizontal",state:"active",mode:"dark"}),e.jsx(o,{label:"Dashboard",iconS:e.jsx(n,{}),border:"bottom",aligned:"horizontal",state:"inactive",mode:"dark"}),e.jsx(o,{label:"Settings",iconS:e.jsx(p,{}),border:"bottom",aligned:"horizontal",state:"inactive",mode:"dark"}),e.jsx(o,{label:"Profile",iconS:e.jsx(v,{}),border:"bottom",aligned:"horizontal",state:"inactive",mode:"dark"})]}),parameters:{docs:{description:{story:"Horizontal navigation for top headers with bottom border. Copy the HorizontalNav wrapper and MenuItem components."}}}},y={render:()=>e.jsxs(Je,{children:[e.jsx(o,{label:"Home",iconM:e.jsx(r,{}),border:"left",aligned:"horizontal",state:"active",mode:"dark"}),e.jsx(o,{label:"Dashboard",iconM:e.jsx(n,{}),border:"left",aligned:"horizontal",state:"inactive",mode:"dark"}),e.jsx(o,{label:"Settings",iconM:e.jsx(p,{}),border:"left",aligned:"horizontal",state:"inactive",mode:"dark"}),e.jsx(o,{label:"Profile",iconM:e.jsx(v,{}),border:"left",aligned:"horizontal",state:"inactive",mode:"dark"}),e.jsx(o,{label:"Notifications",iconM:e.jsx(E,{}),border:"left",aligned:"horizontal",state:"inactive",mode:"dark",showIndicator:!0})]}),parameters:{docs:{description:{story:"Vertical side navigation with left border. Uses medium-sized icons (iconM). Copy the VerticalNav wrapper and MenuItem components."}}}},I={render:()=>e.jsxs(Je,{style:{width:"60px"},children:[e.jsx(o,{label:"Home",iconM:e.jsx(r,{}),border:"left",aligned:"vertical",state:"active",mode:"dark",showLabel:!1}),e.jsx(o,{label:"Dashboard",iconM:e.jsx(n,{}),border:"left",aligned:"vertical",state:"inactive",mode:"dark",showLabel:!1}),e.jsx(o,{label:"Settings",iconM:e.jsx(p,{}),border:"left",aligned:"vertical",state:"inactive",mode:"dark",showLabel:!1}),e.jsx(o,{label:"Profile",iconM:e.jsx(v,{}),border:"left",aligned:"vertical",state:"inactive",mode:"dark",showLabel:!1}),e.jsx(o,{label:"Notifications",iconM:e.jsx(E,{}),border:"left",aligned:"vertical",state:"inactive",mode:"dark",showLabel:!1,showIndicator:!0})]}),parameters:{docs:{description:{story:"Icon-only collapsed navigation. Use showLabel={false} to hide labels. Copy the VerticalNav wrapper and MenuItem components."}}}},f={args:{label:"Dashboard",iconS:e.jsx(n,{}),state:"active",mode:"light",aligned:"horizontal",border:"bottom"},parameters:{backgrounds:{default:"light"},docs:{description:{story:'Light mode example. The background is automatically set to light. Use mode="light" prop for light mode.'}}}},x={render:()=>e.jsxs(H,{children:[e.jsx(o,{label:"Home",iconS:e.jsx(r,{}),state:"inactive",mode:"dark"}),e.jsx(o,{label:"Notifications",iconS:e.jsx(E,{}),state:"inactive",mode:"dark",showIndicator:!0}),e.jsx(o,{label:"Messages",iconS:e.jsx(v,{}),state:"inactive",mode:"dark",showIndicator:!0})]}),parameters:{docs:{description:{story:"Use showIndicator prop to display a red dot for unread notifications. Copy the HorizontalNav wrapper and MenuItem components."}}}},M={render:()=>{const[i,d]=a.useState("home"),t=a.useCallback(s=>{d(s)},[]);return e.jsxs(H,{children:[e.jsx(o,{label:"Home",iconS:e.jsx(r,{}),state:i==="home"?"active":"inactive",mode:"dark",onClick:()=>t("home")}),e.jsx(o,{label:"Dashboard",iconS:e.jsx(n,{}),state:i==="dashboard"?"active":"inactive",mode:"dark",onClick:()=>t("dashboard")}),e.jsx(o,{label:"Settings",iconS:e.jsx(p,{}),state:i==="settings"?"active":"inactive",mode:"dark",onClick:()=>t("settings")}),e.jsx(o,{label:"Profile",iconS:e.jsx(v,{}),state:i==="profile"?"active":"inactive",mode:"dark",onClick:()=>t("profile")})]})},parameters:{docs:{description:{story:"Use Tab to navigate, Enter or Space to activate. Copy the HorizontalNav wrapper and MenuItem components."}}}},C={render:()=>e.jsxs(H,{children:[e.jsx(o,{label:"Custom",iconS:e.jsx(r,{}),state:"active",mode:"dark",style:{background:"rgba(98, 34, 188, 0.2)"},labelClassName:"custom-label"}),e.jsx(o,{label:"Max Width",iconS:e.jsx(n,{}),state:"inactive",mode:"dark",maxWidth:"100px"})]}),parameters:{docs:{description:{story:"Use className, style, and maxWidth props for customization. Copy the HorizontalNav wrapper and MenuItem components."}}}},S={render:()=>{const[i,d]=a.useState([]),t=a.useCallback(z=>{d(A=>[...A.slice(-4),`${new Date().toLocaleTimeString()}: ${z}`])},[]),s=a.useCallback(()=>t("onClick"),[t]),b=a.useCallback(()=>t("onMouseEnter"),[t]),u=a.useCallback(()=>t("onMouseLeave"),[t]),l=a.useCallback(()=>t("onFocus"),[t]),m=a.useCallback(()=>t("onBlur"),[t]),Xe=a.useCallback(()=>t("onActivate"),[t]);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{label:"Interactive Item",iconS:e.jsx(n,{}),state:"inactive",mode:"dark",onClick:s,onMouseEnter:b,onMouseLeave:u,onFocus:l,onBlur:m,onActivate:Xe}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:i.length===0?e.jsx(P,{variant:"caption",children:"Interact with the menu item to see events"}):i.map((z,A)=>e.jsx(P,{variant:"caption",style:{display:"block"},children:z},A))})]})},parameters:{docs:{description:{story:"All event callbacks: onClick, onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate. Check Actions panel."}}}},j={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{as:"button",label:"Button Element",iconS:e.jsx(r,{}),state:"inactive",mode:"dark"}),e.jsx(o,{label:"Div Element (default)",iconS:e.jsx(n,{}),state:"inactive",mode:"dark"})]}),parameters:{docs:{description:{story:'Use as="button" to change root element type. Default is div.'}}}},w={args:{border:"left"},render:()=>{const[i,d]=a.useState(null),[t,s]=a.useState(!1),b=a.useCallback(l=>{if(l){const m=l.getBoundingClientRect();d({top:m.bottom+4,left:m.left})}},[]),u=[{id:"1",label:"Home",icon:e.jsx(r,{}),onClick:()=>console.log("Home clicked")},{id:"2",label:"Projects",icon:e.jsx(Ge,{}),children:[{id:"2-1",label:"Web Development",onClick:()=>console.log("Web Development clicked")},{id:"2-2",label:"Mobile Apps",children:[{id:"2-2-1",label:"iOS Apps",onClick:()=>console.log("iOS Apps clicked")},{id:"2-2-2",label:"Android Apps",onClick:()=>console.log("Android Apps clicked")},{id:"2-2-3",label:"React Native",onClick:()=>console.log("React Native clicked")}]},{id:"2-3",label:"Design Systems",onClick:()=>console.log("Design Systems clicked")}]},{id:"3",label:"Documents",icon:e.jsx(_e,{}),children:[{id:"3-1",label:"Reports",onClick:()=>console.log("Reports clicked")},{id:"3-2",label:"Presentations",children:[{id:"3-2-1",label:"Q1 Review",onClick:()=>console.log("Q1 Review clicked")},{id:"3-2-2",label:"Q2 Planning",onClick:()=>console.log("Q2 Planning clicked")}]},{id:"3-3",label:"Spreadsheets",onClick:()=>console.log("Spreadsheets clicked")}]},{id:"4",label:"Media",icon:e.jsx(Ye,{}),children:[{id:"4-1",label:"Images",onClick:()=>console.log("Images clicked")},{id:"4-2",label:"Videos",onClick:()=>console.log("Videos clicked")}]},{id:"5",label:"Settings",icon:e.jsx(p,{}),onClick:()=>console.log("Settings clicked")}];return e.jsxs("div",{children:[e.jsx("div",{ref:b,children:e.jsx(o,{label:"Open Menu",iconS:e.jsx(n,{}),state:"inactive",mode:"dark",hasChildren:!0,onClick:()=>s(!t)})}),t&&i&&e.jsx(qe,{items:u,position:i,mode:"dark",onClose:()=>s(!1),onItemClick:l=>{console.log("Item clicked:",l.label),s(!1)}})]})},parameters:{docs:{description:{story:"2-level nested menu with hover trigger (default). Click to open, hover over arrows to expand sub-menus. Copy MenuItem and NestedMenuOverlay components."}}}},D={render:()=>{const[i,d]=a.useState(null),[t,s]=a.useState(!1),b=a.useCallback(l=>{if(l){const m=l.getBoundingClientRect();d({top:m.bottom+4,left:m.left})}},[]),u=[{id:"1",label:"Home",icon:e.jsx(r,{}),onClick:()=>console.log("Home clicked")},{id:"2",label:"Projects",icon:e.jsx(Ge,{}),children:[{id:"2-1",label:"Web Development",onClick:()=>console.log("Web Development clicked")},{id:"2-2",label:"Mobile Apps",children:[{id:"2-2-1",label:"iOS Apps",onClick:()=>console.log("iOS Apps clicked")},{id:"2-2-2",label:"Android Apps",onClick:()=>console.log("Android Apps clicked")}]}]},{id:"3",label:"Documents",icon:e.jsx(_e,{}),children:[{id:"3-1",label:"Reports",onClick:()=>console.log("Reports clicked")},{id:"3-2",label:"Presentations",onClick:()=>console.log("Presentations clicked")}]}];return e.jsxs("div",{children:[e.jsx("div",{ref:b,children:e.jsx(o,{label:"Open Menu (Click Mode)",iconS:e.jsx(n,{}),state:"inactive",mode:"dark",hasChildren:!0,onClick:()=>s(!t)})}),t&&i&&e.jsx(qe,{items:u,position:i,mode:"dark",triggerMode:"click",onClose:()=>s(!1),onItemClick:l=>{console.log("Item clicked:",l.label),s(!1)}})]})},parameters:{docs:{description:{story:'Nested menu with click trigger mode (triggerMode="click"). Better for touch devices. Click items with arrows to expand sub-menus.'}}}};var L,O,R,V,T;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    label: 'Dashboard',
    iconS: <DashboardIcon />,
    state: 'inactive',
    mode: 'dark',
    aligned: 'horizontal',
    border: 'bottom'
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all MenuItem props. Change background to "light" in toolbar to test light mode.'
      }
    }
  }
}`,...(R=(O=h.parameters)==null?void 0:O.docs)==null?void 0:R.source},description:{story:"Default MenuItem - Interactive playground",...(T=(V=h.parameters)==null?void 0:V.docs)==null?void 0:T.description}}};var B,F,W,U,Q;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <MenuItem label="Inactive" iconS={<HomeIcon />} state="inactive" mode="dark" />
      <MenuItem label="Active" iconS={<DashboardIcon />} state="active" mode="dark" />
      <MenuItem label="Hover Me" iconS={<SettingsIcon />} state="inactive" mode="dark" />
      <MenuItem label="Focus Me (Tab)" iconS={<PersonIcon />} state="inactive" mode="dark" />
      <MenuItem label="Disabled" iconS={<SettingsIcon />} state="inactive" mode="dark" disabled />
      <MenuItem label="Loading" iconS={<DashboardIcon />} state="inactive" mode="dark" isLoading />
      <MenuItem label="Empty" state="inactive" mode="dark" isEmpty emptyMessage="No items available" />
      <MenuItem label="Error" state="inactive" mode="dark" isInvalid errorMessage="Failed to load menu item" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All 8 states: inactive, active, hover, focus, disabled, loading, empty, and error. Copy any MenuItem you need.'
      }
    }
  }
}`,...(W=(F=g.parameters)==null?void 0:F.docs)==null?void 0:W.source},description:{story:"All states demonstration",...(Q=(U=g.parameters)==null?void 0:U.docs)==null?void 0:Q.description}}};var K,$,_,q,G;k.parameters={...k.parameters,docs:{...(K=k.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <HorizontalNav>
      <MenuItem label="Home" iconS={<HomeIcon />} border="bottom" aligned="horizontal" state="active" mode="dark" />
      <MenuItem label="Dashboard" iconS={<DashboardIcon />} border="bottom" aligned="horizontal" state="inactive" mode="dark" />
      <MenuItem label="Settings" iconS={<SettingsIcon />} border="bottom" aligned="horizontal" state="inactive" mode="dark" />
      <MenuItem label="Profile" iconS={<PersonIcon />} border="bottom" aligned="horizontal" state="inactive" mode="dark" />
    </HorizontalNav>,
  parameters: {
    docs: {
      description: {
        story: 'Horizontal navigation for top headers with bottom border. Copy the HorizontalNav wrapper and MenuItem components.'
      }
    }
  }
}`,...(_=($=k.parameters)==null?void 0:$.docs)==null?void 0:_.source},description:{story:"Horizontal top header navigation",...(G=(q=k.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var J,X,Y,Z,ee;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <VerticalNav>
      <MenuItem label="Home" iconM={<HomeIcon />} border="left" aligned="horizontal" state="active" mode="dark" />
      <MenuItem label="Dashboard" iconM={<DashboardIcon />} border="left" aligned="horizontal" state="inactive" mode="dark" />
      <MenuItem label="Settings" iconM={<SettingsIcon />} border="left" aligned="horizontal" state="inactive" mode="dark" />
      <MenuItem label="Profile" iconM={<PersonIcon />} border="left" aligned="horizontal" state="inactive" mode="dark" />
      <MenuItem label="Notifications" iconM={<NotificationsIcon />} border="left" aligned="horizontal" state="inactive" mode="dark" showIndicator />
    </VerticalNav>,
  parameters: {
    docs: {
      description: {
        story: 'Vertical side navigation with left border. Uses medium-sized icons (iconM). Copy the VerticalNav wrapper and MenuItem components.'
      }
    }
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Vertical side navigation (expanded)",...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var oe,te,ae,ie,ne;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <VerticalNav style={{
    width: '60px'
  }}>
      <MenuItem label="Home" iconM={<HomeIcon />} border="left" aligned="vertical" state="active" mode="dark" showLabel={false} />
      <MenuItem label="Dashboard" iconM={<DashboardIcon />} border="left" aligned="vertical" state="inactive" mode="dark" showLabel={false} />
      <MenuItem label="Settings" iconM={<SettingsIcon />} border="left" aligned="vertical" state="inactive" mode="dark" showLabel={false} />
      <MenuItem label="Profile" iconM={<PersonIcon />} border="left" aligned="vertical" state="inactive" mode="dark" showLabel={false} />
      <MenuItem label="Notifications" iconM={<NotificationsIcon />} border="left" aligned="vertical" state="inactive" mode="dark" showLabel={false} showIndicator />
    </VerticalNav>,
  parameters: {
    docs: {
      description: {
        story: 'Icon-only collapsed navigation. Use showLabel={false} to hide labels. Copy the VerticalNav wrapper and MenuItem components.'
      }
    }
  }
}`,...(ae=(te=I.parameters)==null?void 0:te.docs)==null?void 0:ae.source},description:{story:"Vertical collapsed navigation (icon only)",...(ne=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:ne.description}}};var se,le,re,ce,de;f.parameters={...f.parameters,docs:{...(se=f.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Dashboard',
    iconS: <DashboardIcon />,
    state: 'active',
    mode: 'light',
    aligned: 'horizontal',
    border: 'bottom'
  },
  parameters: {
    backgrounds: {
      default: 'light'
    },
    docs: {
      description: {
        story: 'Light mode example. The background is automatically set to light. Use mode="light" prop for light mode.'
      }
    }
  }
}`,...(re=(le=f.parameters)==null?void 0:le.docs)==null?void 0:re.source},description:{story:"Light mode example (use Storybook background switcher)",...(de=(ce=f.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var me,pe,ve,be,ue;x.parameters={...x.parameters,docs:{...(me=x.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <HorizontalNav>
      <MenuItem label="Home" iconS={<HomeIcon />} state="inactive" mode="dark" />
      <MenuItem label="Notifications" iconS={<NotificationsIcon />} state="inactive" mode="dark" showIndicator />
      <MenuItem label="Messages" iconS={<PersonIcon />} state="inactive" mode="dark" showIndicator />
    </HorizontalNav>,
  parameters: {
    docs: {
      description: {
        story: 'Use showIndicator prop to display a red dot for unread notifications. Copy the HorizontalNav wrapper and MenuItem components.'
      }
    }
  }
}`,...(ve=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ve.source},description:{story:"With notification indicator",...(ue=(be=x.parameters)==null?void 0:be.docs)==null?void 0:ue.description}}};var he,ge,ke,ye,Ie;M.parameters={...M.parameters,docs:{...(he=M.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [activeItem, setActiveItem] = useState('home');
    const handleClick = useCallback((item: string) => {
      setActiveItem(item);
    }, []);
    return <HorizontalNav>
        <MenuItem label="Home" iconS={<HomeIcon />} state={activeItem === 'home' ? 'active' : 'inactive'} mode="dark" onClick={() => handleClick('home')} />
        <MenuItem label="Dashboard" iconS={<DashboardIcon />} state={activeItem === 'dashboard' ? 'active' : 'inactive'} mode="dark" onClick={() => handleClick('dashboard')} />
        <MenuItem label="Settings" iconS={<SettingsIcon />} state={activeItem === 'settings' ? 'active' : 'inactive'} mode="dark" onClick={() => handleClick('settings')} />
        <MenuItem label="Profile" iconS={<PersonIcon />} state={activeItem === 'profile' ? 'active' : 'inactive'} mode="dark" onClick={() => handleClick('profile')} />
      </HorizontalNav>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use Tab to navigate, Enter or Space to activate. Copy the HorizontalNav wrapper and MenuItem components.'
      }
    }
  }
}`,...(ke=(ge=M.parameters)==null?void 0:ge.docs)==null?void 0:ke.source},description:{story:"Keyboard navigation demonstration",...(Ie=(ye=M.parameters)==null?void 0:ye.docs)==null?void 0:Ie.description}}};var fe,xe,Me,Ce,Se;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <HorizontalNav>
      <MenuItem label="Custom" iconS={<HomeIcon />} state="active" mode="dark" style={{
      background: 'rgba(98, 34, 188, 0.2)'
    }} labelClassName="custom-label" />
      <MenuItem label="Max Width" iconS={<DashboardIcon />} state="inactive" mode="dark" maxWidth="100px" />
    </HorizontalNav>,
  parameters: {
    docs: {
      description: {
        story: 'Use className, style, and maxWidth props for customization. Copy the HorizontalNav wrapper and MenuItem components.'
      }
    }
  }
}`,...(Me=(xe=C.parameters)==null?void 0:xe.docs)==null?void 0:Me.source},description:{story:"Custom styling with className overrides",...(Se=(Ce=C.parameters)==null?void 0:Ce.docs)==null?void 0:Se.description}}};var je,we,De,Ne,He;S.parameters={...S.parameters,docs:{...(je=S.parameters)==null?void 0:je.docs,source:{originalSource:`{
  render: () => {
    const [events, setEvents] = useState<string[]>([]);
    const addEvent = useCallback((event: string) => {
      setEvents(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${event}\`]);
    }, []);
    const handleClick = useCallback(() => addEvent('onClick'), [addEvent]);
    const handleMouseEnter = useCallback(() => addEvent('onMouseEnter'), [addEvent]);
    const handleMouseLeave = useCallback(() => addEvent('onMouseLeave'), [addEvent]);
    const handleFocus = useCallback(() => addEvent('onFocus'), [addEvent]);
    const handleBlur = useCallback(() => addEvent('onBlur'), [addEvent]);
    const handleActivate = useCallback(() => addEvent('onActivate'), [addEvent]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <MenuItem label="Interactive Item" iconS={<DashboardIcon />} state="inactive" mode="dark" onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onFocus={handleFocus} onBlur={handleBlur} onActivate={handleActivate} />
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
          {events.length === 0 ? <Typography variant="caption">Interact with the menu item to see events</Typography> : events.map((event, i) => <Typography key={i} variant="caption" style={{
          display: 'block'
        }}>
                {event}
              </Typography>)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All event callbacks: onClick, onMouseEnter, onMouseLeave, onFocus, onBlur, onActivate. Check Actions panel.'
      }
    }
  }
}`,...(De=(we=S.parameters)==null?void 0:we.docs)==null?void 0:De.source},description:{story:"Event callbacks demonstration",...(He=(Ne=S.parameters)==null?void 0:Ne.docs)==null?void 0:He.description}}};var ze,Ae,Ee,Pe,Le;j.parameters={...j.parameters,docs:{...(ze=j.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <MenuItem as="button" label="Button Element" iconS={<HomeIcon />} state="inactive" mode="dark" />
      <MenuItem label="Div Element (default)" iconS={<DashboardIcon />} state="inactive" mode="dark" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use as="button" to change root element type. Default is div.'
      }
    }
  }
}`,...(Ee=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source},description:{story:"Polymorphic 'as' prop demonstration",...(Le=(Pe=j.parameters)==null?void 0:Pe.docs)==null?void 0:Le.description}}};var Oe,Re,Ve,Te,Be;w.parameters={...w.parameters,docs:{...(Oe=w.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    border: "left"
  },
  render: () => {
    const [overlayPosition, setOverlayPosition] = useState<{
      top: number;
      left: number;
    } | null>(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const buttonRef = useCallback((node: HTMLDivElement | null) => {
      if (node) {
        const rect = node.getBoundingClientRect();
        setOverlayPosition({
          top: rect.bottom + 4,
          left: rect.left
        });
      }
    }, []);
    const menuItems: NestedMenuItem[] = [{
      id: '1',
      label: 'Home',
      icon: <HomeIcon />,
      onClick: () => console.log('Home clicked')
    }, {
      id: '2',
      label: 'Projects',
      icon: <FolderIcon />,
      children: [{
        id: '2-1',
        label: 'Web Development',
        onClick: () => console.log('Web Development clicked')
      }, {
        id: '2-2',
        label: 'Mobile Apps',
        children: [{
          id: '2-2-1',
          label: 'iOS Apps',
          onClick: () => console.log('iOS Apps clicked')
        }, {
          id: '2-2-2',
          label: 'Android Apps',
          onClick: () => console.log('Android Apps clicked')
        }, {
          id: '2-2-3',
          label: 'React Native',
          onClick: () => console.log('React Native clicked')
        }]
      }, {
        id: '2-3',
        label: 'Design Systems',
        onClick: () => console.log('Design Systems clicked')
      }]
    }, {
      id: '3',
      label: 'Documents',
      icon: <DescriptionIcon />,
      children: [{
        id: '3-1',
        label: 'Reports',
        onClick: () => console.log('Reports clicked')
      }, {
        id: '3-2',
        label: 'Presentations',
        children: [{
          id: '3-2-1',
          label: 'Q1 Review',
          onClick: () => console.log('Q1 Review clicked')
        }, {
          id: '3-2-2',
          label: 'Q2 Planning',
          onClick: () => console.log('Q2 Planning clicked')
        }]
      }, {
        id: '3-3',
        label: 'Spreadsheets',
        onClick: () => console.log('Spreadsheets clicked')
      }]
    }, {
      id: '4',
      label: 'Media',
      icon: <ImageIcon />,
      children: [{
        id: '4-1',
        label: 'Images',
        onClick: () => console.log('Images clicked')
      }, {
        id: '4-2',
        label: 'Videos',
        onClick: () => console.log('Videos clicked')
      }]
    }, {
      id: '5',
      label: 'Settings',
      icon: <SettingsIcon />,
      onClick: () => console.log('Settings clicked')
    }];
    return <div>
        <div ref={buttonRef}>
          <MenuItem label="Open Menu" iconS={<DashboardIcon />} state="inactive" mode="dark" hasChildren={true} onClick={() => setShowOverlay(!showOverlay)} />
        </div>

        {showOverlay && overlayPosition && <NestedMenuOverlay items={menuItems} position={overlayPosition} mode="dark" onClose={() => setShowOverlay(false)} onItemClick={item => {
        console.log('Item clicked:', item.label);
        setShowOverlay(false);
      }} />}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: '2-level nested menu with hover trigger (default). Click to open, hover over arrows to expand sub-menus. Copy MenuItem and NestedMenuOverlay components.'
      }
    }
  }
}`,...(Ve=(Re=w.parameters)==null?void 0:Re.docs)==null?void 0:Ve.source},description:{story:"Nested menu with 2-level hierarchy (hover trigger)",...(Be=(Te=w.parameters)==null?void 0:Te.docs)==null?void 0:Be.description}}};var Fe,We,Ue,Qe,Ke;D.parameters={...D.parameters,docs:{...(Fe=D.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => {
    const [overlayPosition, setOverlayPosition] = useState<{
      top: number;
      left: number;
    } | null>(null);
    const [showOverlay, setShowOverlay] = useState(false);
    const buttonRef = useCallback((node: HTMLDivElement | null) => {
      if (node) {
        const rect = node.getBoundingClientRect();
        setOverlayPosition({
          top: rect.bottom + 4,
          left: rect.left
        });
      }
    }, []);
    const menuItems: NestedMenuItem[] = [{
      id: '1',
      label: 'Home',
      icon: <HomeIcon />,
      onClick: () => console.log('Home clicked')
    }, {
      id: '2',
      label: 'Projects',
      icon: <FolderIcon />,
      children: [{
        id: '2-1',
        label: 'Web Development',
        onClick: () => console.log('Web Development clicked')
      }, {
        id: '2-2',
        label: 'Mobile Apps',
        children: [{
          id: '2-2-1',
          label: 'iOS Apps',
          onClick: () => console.log('iOS Apps clicked')
        }, {
          id: '2-2-2',
          label: 'Android Apps',
          onClick: () => console.log('Android Apps clicked')
        }]
      }]
    }, {
      id: '3',
      label: 'Documents',
      icon: <DescriptionIcon />,
      children: [{
        id: '3-1',
        label: 'Reports',
        onClick: () => console.log('Reports clicked')
      }, {
        id: '3-2',
        label: 'Presentations',
        onClick: () => console.log('Presentations clicked')
      }]
    }];
    return <div>
        <div ref={buttonRef}>
          <MenuItem label="Open Menu (Click Mode)" iconS={<DashboardIcon />} state="inactive" mode="dark" hasChildren={true} onClick={() => setShowOverlay(!showOverlay)} />
        </div>

        {showOverlay && overlayPosition && <NestedMenuOverlay items={menuItems} position={overlayPosition} mode="dark" triggerMode="click" onClose={() => setShowOverlay(false)} onItemClick={item => {
        console.log('Item clicked:', item.label);
        setShowOverlay(false);
      }} />}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Nested menu with click trigger mode (triggerMode="click"). Better for touch devices. Click items with arrows to expand sub-menus.'
      }
    }
  }
}`,...(Ue=(We=D.parameters)==null?void 0:We.docs)==null?void 0:Ue.source},description:{story:"Nested menu with click trigger (better for touch devices)",...(Ke=(Qe=D.parameters)==null?void 0:Qe.docs)==null?void 0:Ke.description}}};const po=["Playground","AllStates","HorizontalTopHeader","VerticalSideNav","VerticalCollapsed","LightMode","WithNotificationIndicator","KeyboardNavigation","CustomStyling","WithEventCallbacks","PolymorphicAs","NestedMenu","NestedMenuClick"];export{g as AllStates,C as CustomStyling,k as HorizontalTopHeader,M as KeyboardNavigation,f as LightMode,w as NestedMenu,D as NestedMenuClick,h as Playground,j as PolymorphicAs,I as VerticalCollapsed,y as VerticalSideNav,S as WithEventCallbacks,x as WithNotificationIndicator,po as __namedExportsOrder,mo as default};
