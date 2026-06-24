import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{c as s}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as g}from"./Brand-D2_m1Vnv.js";import{M as x}from"./MenuItem-qyRq59Mo.js";import{A as w}from"./Avatar-BtdRwqdw.js";const y=s.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 64px;
  padding: 0 24px;
  overflow: hidden;
  flex-shrink: 0;
  z-index: 100;
  
  ${({$mode:e,theme:t})=>e==="light"?`
        background-color: ${t.colors.palette.neutral[50]};
        border-bottom: 1px solid ${t.colors.palette.neutral[400]};
      `:`
      background-color: ${t.colors.palette.primary[800]};
    `}
`,b=s.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 0;
`,T=s.div`
  width: 2px;
  height: 32px;
  flex-shrink: 0;
  background-color: ${({$mode:e})=>e==="light"?"#464646":"#eee"};
`,k=s.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  flex-shrink: 0;
  color: ${({$mode:e,theme:t})=>e==="light"?t.colors.palette.neutral[800]:t.colors.palette.neutral[50]};
`,q=s.div`
  display: flex;
  align-items: center;
  gap: 22px;
  flex-shrink: 0;
`,A=s.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`,j=({mode:e="dark",appName:t="Product Name",showLogo:o=!0,showAppName:i=!0,showDivider:n=!0,showMenuItems:l=!0,showAvatar:d=!0,menuItems:u=[],userInitials:p="AS",userAvatarUrl:c,leftOffset:m,onAvatarClick:f,className:h,children:v})=>a.jsxs(y,{$mode:e,$leftOffset:m,className:h,role:"banner",children:[a.jsxs(b,{children:[o&&a.jsx(g,{variant:"logo",mode:e}),n&&a.jsx(T,{$mode:e}),i&&a.jsx(k,{$mode:e,children:t})]}),a.jsxs(q,{children:[l&&a.jsx(A,{children:v||u.map(r=>a.jsx(x,{border:"bottom",mode:e,state:r.active?"active":"inactive",label:r.label,iconS:r.icon,showIcon:!0,showLabel:!0,showIndicator:r.showIndicator,onClick:r.onClick},r.id))}),d&&a.jsx(w,{size:"small",initials:p,src:c,alt:"User avatar",onClick:f})]})]});j.__docgenInfo={description:"",methods:[],displayName:"TopHeader",props:{mode:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:"Color mode",defaultValue:{value:"'dark'",computed:!1}},appName:{required:!1,tsType:{name:"string"},description:"Application name",defaultValue:{value:"'Product Name'",computed:!1}},showLogo:{required:!1,tsType:{name:"boolean"},description:"Whether to show logo",defaultValue:{value:"true",computed:!1}},showAppName:{required:!1,tsType:{name:"boolean"},description:"Whether to show app name",defaultValue:{value:"true",computed:!1}},showDivider:{required:!1,tsType:{name:"boolean"},description:"Whether to show divider between logo and app name",defaultValue:{value:"true",computed:!1}},showMenuItems:{required:!1,tsType:{name:"boolean"},description:"Whether to show menu items",defaultValue:{value:"true",computed:!1}},showAvatar:{required:!1,tsType:{name:"boolean"},description:"Whether to show avatar",defaultValue:{value:"true",computed:!1}},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"TopHeaderMenuItem"}],raw:"TopHeaderMenuItem[]"},description:"Menu items",defaultValue:{value:"[]",computed:!1}},userInitials:{required:!1,tsType:{name:"string"},description:"User initials for avatar",defaultValue:{value:"'AS'",computed:!1}},userAvatarUrl:{required:!1,tsType:{name:"string"},description:"User avatar image URL"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content (overrides default menu items)"},leftOffset:{required:!1,tsType:{name:"number"},description:"Left offset in pixels (used when sidebar is present)"},onAvatarClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for user avatar"}}};export{j as T};
