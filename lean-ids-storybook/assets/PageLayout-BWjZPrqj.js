import{j as o}from"./jsx-runtime-DSvmvvsx.js";import{R as b}from"./index-B0WjJBI_.js";import{g as a}from"./styled-components.browser.esm-CuwBLqEg.js";import{S as B}from"./SideNavigation-D6FBwtit.js";import{T as v}from"./TopHeader-_BkLFTlu.js";import{B as L}from"./Breadcrumb-DyJP3Rnf.js";import{F as S}from"./Footer-CJteDAya.js";const u=a.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Fixed viewport height - no page scrolling */
  overflow: hidden; /* Prevent page-level scrolling */
  background-color: ${({theme:e})=>e.colors.semantic.background.primary};
  position: relative;
`,x=a(u)``,$=a(u)`
  flex-direction: row;
`,T=a(u)`
  flex-direction: row;
`,j=a(u)`
  flex-direction: row;
`,A=a(u)`
  flex-direction: row;
`,W=a.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; // Prevents flex item from overflowing
  overflow: hidden; // Prevent wrapper from scrolling
`,w=a.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: ${({theme:e})=>e.spacing[7]} ${({theme:e})=>e.spacing[10]}; // 16px 24px
  gap: ${({theme:e})=>e.spacing[7]}; // 16px
  overflow-y: auto; // Content area scrolls independently
  overflow-x: hidden; // Prevent horizontal scroll
`,z=a.nav`
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
`;const P=a.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  margin: 0;
`;a(P)`
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
`;a(P)`
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
`;const M=a.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]}; // 8px
  width: 100%;
`,R=a.h1`
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
`,d=({title:e,description:l,className:g})=>o.jsxs(M,{className:g,children:[o.jsx(R,{children:e}),l&&o.jsx(O,{children:l})]});d.__docgenInfo={description:"",methods:[],displayName:"PageHeader",props:{title:{required:!0,tsType:{name:"string"},description:"Page title/heading"},description:{required:!1,tsType:{name:"string"},description:"Short description of the page"},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling"}}};const k="lean-ids-sidebar-pinned",_=({variant:e,pageTitle:l,pageDescription:g,breadcrumbs:c,children:p,topHeader:n,sideNav:t,footer:r,className:q})=>{const[m,C]=b.useState(()=>{if(typeof window<"u"){const i=localStorage.getItem(k);if(i!==null)return i==="true"}return(t==null?void 0:t.isPinned)||!1}),I=i=>{var s;C(i),typeof window<"u"&&localStorage.setItem(k,String(i)),(s=t==null?void 0:t.onPinChange)==null||s.call(t,i)},U=e==="topbar-only"?x:e==="sidebar-only"?m?T:$:e==="topbar-sidebar"?m?A:j:x,f=()=>o.jsx(z,{"aria-label":"Breadcrumb",children:c.map((i,s)=>o.jsxs(b.Fragment,{children:[o.jsx(L,{...i}),s<c.length-1&&o.jsx(F,{children:"/"})]},s))}),h=()=>o.jsx(S,{lastUpdated:(r==null?void 0:r.lastUpdated)||"Sept 23, 2024",version:(r==null?void 0:r.version)||"1.0",feedbackText:(r==null?void 0:r.feedbackText)||"Send us a Feedback here",feedbackUrl:(r==null?void 0:r.feedbackUrl)||"#",onFeedbackClick:r==null?void 0:r.onFeedbackClick}),y=e==="sidebar-only"||e==="topbar-sidebar";return o.jsxs(U,{className:q,children:[y&&t&&o.jsx(B,{groups:t.groups,user:t.user,isPinned:m,onPinChange:I,expandMode:t.expandMode,toggleButtonPosition:t.toggleButtonPosition,toggleButtonOffset:t.toggleButtonOffset,toggleButtonSize:t.toggleButtonSize,toggleButtonIcon:t.toggleButtonIcon,customLogoUrl:t.customLogoUrl,customSymbolUrl:t.customSymbolUrl,logoAlignment:t.logoAlignment,logoPadding:t.logoPadding,showLabelsWhenCollapsed:t.showLabelsWhenCollapsed}),y?o.jsxs(W,{children:[e==="topbar-sidebar"&&n&&o.jsx(v,{mode:"light",appName:n.appName,menuItems:n.menuItems,userInitials:n.userInitials,userAvatarUrl:n.userAvatarUrl,showLogo:!1,showAppName:!!n.appName,showMenuItems:!!n.menuItems&&n.menuItems.length>0,showAvatar:!!n.userInitials,onAvatarClick:n.onAvatarClick,customLogoUrl:n.customLogoUrl}),o.jsxs(w,{children:[f(),o.jsx(d,{title:l,description:g}),p]}),h()]}):o.jsxs(o.Fragment,{children:[e==="topbar-only"&&n&&o.jsx(v,{mode:"dark",appName:n.appName,menuItems:n.menuItems,userInitials:n.userInitials,userAvatarUrl:n.userAvatarUrl,showLogo:n.showLogo!==!1,showAppName:!!n.appName,showMenuItems:!!n.menuItems&&n.menuItems.length>0,showAvatar:!!n.userInitials,onAvatarClick:n.onAvatarClick,customLogoUrl:n.customLogoUrl}),o.jsxs(w,{children:[f(),o.jsx(d,{title:l,description:g}),p]}),h()]})]})};_.__docgenInfo={description:"",methods:[],displayName:"PageLayout",props:{variant:{required:!0,tsType:{name:"union",raw:"'topbar-only' | 'sidebar-only' | 'topbar-sidebar'",elements:[{name:"literal",value:"'topbar-only'"},{name:"literal",value:"'sidebar-only'"},{name:"literal",value:"'topbar-sidebar'"}]},description:`Layout variant - determines which navigation components to show
- 'topbar-only': Only top header (dark mode with logo)
- 'sidebar-only': Only side navigation (expanded with logo)
- 'topbar-sidebar': Both (light top bar without logo, collapsed sidebar with symbol)`},pageTitle:{required:!0,tsType:{name:"string"},description:"Page title"},pageDescription:{required:!1,tsType:{name:"string"},description:"Page description (optional)"},breadcrumbs:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbProps"}],raw:"BreadcrumbProps[]"},description:"Breadcrumb items"},children:{required:!0,tsType:{name:"ReactNode"},description:"Main page content"},topHeader:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  appName?: string;
  menuItems?: TopHeaderMenuItem[];
  userInitials?: string;
  userAvatarUrl?: string;
  showLogo?: boolean; // Only for topbar-only variant
  onAvatarClick?: () => void; // Click handler for user avatar
  customLogoUrl?: string; // Custom logo URL
}`,signature:{properties:[{key:"appName",value:{name:"string",required:!1}},{key:"menuItems",value:{name:"Array",elements:[{name:"TopHeaderMenuItem"}],raw:"TopHeaderMenuItem[]",required:!1}},{key:"userInitials",value:{name:"string",required:!1}},{key:"userAvatarUrl",value:{name:"string",required:!1}},{key:"showLogo",value:{name:"boolean",required:!1}},{key:"onAvatarClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}},{key:"customLogoUrl",value:{name:"string",required:!1}}]}},description:"Top header props (for topbar-only and topbar-sidebar variants)"},sideNav:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  groups: NavigationGroup[];
  user?: UserProfile;
  isPinned?: boolean; // Whether sidebar is pinned
  onPinChange?: (isPinned: boolean) => void; // Callback when pin state changes
  expandMode?: 'hover' | 'button' | 'both'; // Expand/collapse mode
  toggleButtonPosition?: 'top' | 'bottom'; // Position of toggle button
  toggleButtonOffset?: number; // Vertical offset for toggle button (in pixels)
  toggleButtonSize?: 'small' | 'large'; // Size of toggle button
  toggleButtonIcon?: ReactNode; // Custom icon for toggle button
  customLogoUrl?: string; // Custom logo URL for expanded state (full logo)
  customSymbolUrl?: string; // Custom symbol URL for collapsed state (icon only)
  logoAlignment?: 'left' | 'center' | 'right'; // Logo alignment
  logoPadding?: string; // Custom padding for logo (CSS padding value)
  showLabelsWhenCollapsed?: boolean; // Whether to show menu item labels when sidebar is collapsed
}`,signature:{properties:[{key:"groups",value:{name:"Array",elements:[{name:"NavigationGroup"}],raw:"NavigationGroup[]",required:!0}},{key:"user",value:{name:"UserProfile",required:!1}},{key:"isPinned",value:{name:"boolean",required:!1}},{key:"onPinChange",value:{name:"signature",type:"function",raw:"(isPinned: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPinned"}],return:{name:"void"}},required:!1}},{key:"expandMode",value:{name:"union",raw:"'hover' | 'button' | 'both'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'button'"},{name:"literal",value:"'both'"}],required:!1}},{key:"toggleButtonPosition",value:{name:"union",raw:"'top' | 'bottom'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"}],required:!1}},{key:"toggleButtonOffset",value:{name:"number",required:!1}},{key:"toggleButtonSize",value:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}],required:!1}},{key:"toggleButtonIcon",value:{name:"ReactNode",required:!1}},{key:"customLogoUrl",value:{name:"string",required:!1}},{key:"customSymbolUrl",value:{name:"string",required:!1}},{key:"logoAlignment",value:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}],required:!1}},{key:"logoPadding",value:{name:"string",required:!1}},{key:"showLabelsWhenCollapsed",value:{name:"boolean",required:!1}}]}},description:"Side navigation props (for sidebar-only and topbar-sidebar variants)"},footer:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  lastUpdated?: string;
  version?: string;
  feedbackText?: string;
  feedbackUrl?: string;
  onFeedbackClick?: () => void; // Click handler for feedback link
}`,signature:{properties:[{key:"lastUpdated",value:{name:"string",required:!1}},{key:"version",value:{name:"string",required:!1}},{key:"feedbackText",value:{name:"string",required:!1}},{key:"feedbackUrl",value:{name:"string",required:!1}},{key:"onFeedbackClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!1}}]}},description:"Footer props (optional)"},className:{required:!1,tsType:{name:"string"},description:"Optional className for custom styling"}}};export{_ as P};
