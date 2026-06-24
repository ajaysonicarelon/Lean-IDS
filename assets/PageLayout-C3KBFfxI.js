import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{R as b}from"./index-B0WjJBI_.js";import{c as a}from"./styled-components.browser.esm-BIi91Tbq.js";import{T as x}from"./TopHeader-D8H5tFj4.js";import{S as C}from"./SideNavigation-DFjSW3iC.js";import{B as $}from"./Breadcrumb-DEF5sgBW.js";import{F as j}from"./Footer-BmRSLCud.js";const l=a.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Fixed viewport height - no page scrolling */
  overflow: hidden; /* Prevent page-level scrolling */
  background-color: ${({theme:e})=>e.colors.semantic.background.primary};
  position: relative;
`,v=a(l)``,T=a(l)`
  flex-direction: row;
`,S=a(l)`
  flex-direction: row;
`,A=a(l)`
  flex-direction: row;
`,U=a(l)`
  flex-direction: row;
`,z=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; // Prevents flex item from overflowing
  overflow: hidden; // Prevent wrapper from scrolling
`,k=a.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>e.spacing[7]} ${({theme:e})=>e.spacing[10]}; // 16px 24px
  gap: ${({theme:e})=>e.spacing[7]}; // 16px
  overflow-y: auto; // Content area scrolls independently
  overflow-x: hidden; // Prevent horizontal scroll
`,L=a.nav`
  display: flex;
  align-items: center;
  gap: 0;
`,F=a.span`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 19px;
  color: ${({theme:e})=>e.colors.palette.neutral[500]};
  padding: 0 4px;
`;a.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 9px ${({theme:e})=>e.spacing[10]}; // 9px 24px
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border-top: 1px solid ${({theme:e})=>e.colors.palette.neutral[400]};
  min-height: 40px;
`;a.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;const w=a.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  margin: 0;
`;a(w)`
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
`;a(w)`
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
`;a.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  color: #6c6c6c;
  
  a {
    color: #0064ef;
    text-decoration: underline;
    font-weight: ${({theme:e})=>e.fontWeights.semibold};
    
    &:hover {
      text-decoration: none;
    }
  }
`;const W=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]}; // 8px
  width: 100%;
`,M=a.h1`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 28px;
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 33px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]}; // gray-900
  margin: 0;
`,O=a.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 19px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  margin: 0;
`,m=({title:e,description:i,className:u})=>t.jsxs(W,{className:u,children:[t.jsx(M,{children:e}),i&&t.jsx(O,{children:i})]});m.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"string"},description:"Page title/heading"},description:{required:!1,tsType:{name:"string"},description:"Short description of the page"},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling"}}};const R=({variant:e,pageTitle:i,pageDescription:u,breadcrumbs:g,children:c,topHeader:n,sideNav:r,footer:o,className:P})=>{const[p,q]=b.useState((r==null?void 0:r.isPinned)||!1),B=d=>{var s;q(d),(s=r==null?void 0:r.onPinChange)==null||s.call(r,d)},I=e==="topbar-only"?v:e==="sidebar-only"?p?S:T:e==="topbar-sidebar"?p?U:A:v,f=()=>t.jsx(L,{"aria-label":"Breadcrumb",children:g.map((d,s)=>t.jsxs(b.Fragment,{children:[t.jsx($,{...d}),s<g.length-1&&t.jsx(F,{children:"/"})]},s))}),h=()=>t.jsx(j,{lastUpdated:(o==null?void 0:o.lastUpdated)||"Sept 23, 2024",version:(o==null?void 0:o.version)||"1.0",feedbackText:(o==null?void 0:o.feedbackText)||"Send us a Feedback here",feedbackUrl:(o==null?void 0:o.feedbackUrl)||"#",onFeedbackClick:o==null?void 0:o.onFeedbackClick}),y=e==="sidebar-only"||e==="topbar-sidebar";return t.jsxs(I,{className:P,children:[y&&r&&t.jsx(C,{groups:r.groups,user:r.user,isPinned:p,onPinChange:B,expandMode:r.expandMode,toggleButtonPosition:r.toggleButtonPosition,toggleButtonOffset:r.toggleButtonOffset,toggleButtonSize:r.toggleButtonSize,toggleButtonIcon:r.toggleButtonIcon}),y?t.jsxs(z,{children:[e==="topbar-sidebar"&&n&&t.jsx(x,{mode:"light",appName:n.appName,menuItems:n.menuItems,userInitials:n.userInitials,userAvatarUrl:n.userAvatarUrl,showLogo:!1,showAppName:!!n.appName,showMenuItems:!!n.menuItems&&n.menuItems.length>0,showAvatar:!!n.userInitials,onAvatarClick:n.onAvatarClick}),t.jsxs(k,{children:[f(),t.jsx(m,{title:i,description:u}),c]}),h()]}):t.jsxs(t.Fragment,{children:[e==="topbar-only"&&n&&t.jsx(x,{mode:"dark",appName:n.appName,menuItems:n.menuItems,userInitials:n.userInitials,userAvatarUrl:n.userAvatarUrl,showLogo:n.showLogo!==!1,showAppName:!!n.appName,showMenuItems:!!n.menuItems&&n.menuItems.length>0,showAvatar:!!n.userInitials,onAvatarClick:n.onAvatarClick}),t.jsxs(k,{children:[f(),t.jsx(m,{title:i,description:u}),c]}),h()]})]})};R.__docgenInfo={description:"",methods:[],displayName:"PageLayout",props:{variant:{required:!0,tsType:{name:"union",raw:"'topbar-only' | 'sidebar-only' | 'topbar-sidebar'",elements:[{name:"literal",value:"'topbar-only'"},{name:"literal",value:"'sidebar-only'"},{name:"literal",value:"'topbar-sidebar'"}]},description:`Layout variant - determines which navigation components to show
- 'topbar-only': Only top header (dark mode with logo)
- 'sidebar-only': Only side navigation (expanded with logo)
- 'topbar-sidebar': Both (light top bar without logo, collapsed sidebar with symbol)`},pageTitle:{required:!0,tsType:{name:"string"},description:"Page title"},pageDescription:{required:!1,tsType:{name:"string"},description:"Page description (optional)"},breadcrumbs:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbProps"}],raw:"BreadcrumbProps[]"},description:"Breadcrumb items"},children:{required:!0,tsType:{name:"ReactNode"},description:"Main page content"},topHeader:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  appName?: string;
  menuItems?: TopHeaderMenuItem[];
  userInitials?: string;
  userAvatarUrl?: string;
  showLogo?: boolean; // Only for topbar-only variant
  onAvatarClick?: () => void; // Click handler for user avatar
}`,signature:{properties:[{key:"appName",value:{name:"string",required:!1}},{key:"menuItems",value:{name:"Array",elements:[{name:"TopHeaderMenuItem"}],raw:"TopHeaderMenuItem[]",required:!1}},{key:"userInitials",value:{name:"string",required:!1}},{key:"userAvatarUrl",value:{name:"string",required:!1}},{key:"showLogo",value:{name:"boolean",required:!1}},{key:"onAvatarClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:"Top header props (for topbar-only and topbar-sidebar variants)"},sideNav:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  groups: NavigationGroup[];
  user?: UserProfile;
  isPinned?: boolean; // Whether sidebar is pinned
  onPinChange?: (isPinned: boolean) => void; // Callback when pin state changes
  expandMode?: 'hover' | 'button' | 'both'; // Expand/collapse mode
  toggleButtonPosition?: 'top' | 'bottom'; // Position of toggle button
  toggleButtonOffset?: number; // Vertical offset for toggle button (in pixels)
  toggleButtonSize?: 'small' | 'large'; // Size of toggle button
  toggleButtonIcon?: ReactNode; // Custom icon for toggle button
}`,signature:{properties:[{key:"groups",value:{name:"Array",elements:[{name:"NavigationGroup"}],raw:"NavigationGroup[]",required:!0}},{key:"user",value:{name:"UserProfile",required:!1}},{key:"isPinned",value:{name:"boolean",required:!1}},{key:"onPinChange",value:{name:"signature",type:"function",raw:"(isPinned: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPinned"}],return:{name:"void"}},required:!1}},{key:"expandMode",value:{name:"union",raw:"'hover' | 'button' | 'both'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'button'"},{name:"literal",value:"'both'"}],required:!1}},{key:"toggleButtonPosition",value:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}],required:!1}},{key:"toggleButtonOffset",value:{name:"number",required:!1}},{key:"toggleButtonSize",value:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}],required:!1}},{key:"toggleButtonIcon",value:{name:"ReactNode",required:!1}}]}},description:"Side navigation props (for sidebar-only and topbar-sidebar variants)"},footer:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  lastUpdated?: string;
  version?: string;
  feedbackText?: string;
  feedbackUrl?: string;
  onFeedbackClick?: () => void; // Click handler for feedback link
}`,signature:{properties:[{key:"lastUpdated",value:{name:"string",required:!1}},{key:"version",value:{name:"string",required:!1}},{key:"feedbackText",value:{name:"string",required:!1}},{key:"feedbackUrl",value:{name:"string",required:!1}},{key:"onFeedbackClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:"Footer props (optional)"},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling"}}};export{R as P};
