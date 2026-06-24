import{j as p}from"./jsx-runtime-DSvmvvsx.js";import{c as m,s}from"./styled-components.browser.esm-BIi91Tbq.js";const x=m.div`
  display: flex;
  align-items: center;
  gap: ${({theme:t})=>t.spacing[4]};
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;

  ${({$aligned:t,$border:n,$state:i,$mode:o,theme:e})=>{const c=t==="vertical",d=c?"flex-direction: column;":"",r=c?`padding: ${e.spacing[2]} ${e.spacing[2]};`:n==="left"?`padding: ${e.spacing[7]};`:`padding: ${e.spacing[4]} ${e.spacing[5]}; justify-content: center;`,l=`border-radius: ${e.borderRadius.sm};`;if(i==="inactive")return s`
        ${d}
        ${r}
        background-color: transparent;
        
        &:hover {
          background-color: ${o==="dark"?"rgba(255, 255, 255, 0.05)":"rgba(199, 199, 199, 0.05)"};
          ${l}
        }
      `;const a=o==="dark"?e.colors.palette.neutral[50]:e.colors.palette.neutral[900],u=o==="dark"?"rgba(255, 255, 255, 0.1)":"rgba(199, 199, 199, 0.1)",f=n==="left"?`border-left: 3px solid ${a};`:`border-bottom: 3px solid ${a};`;return s`
      ${d}
      ${r}
      ${l}
      background-color: ${u};
      ${f}
    `}}
`,$=m.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({$mode:t,theme:n})=>{const i=t==="dark"?n.colors.palette.neutral[50]:n.colors.palette.neutral[900];return s`
      color: ${i};
      
      svg {
        color: ${i};
      }
    `}}
`,M=m.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  white-space: nowrap;

  ${({$aligned:t,$border:n,$state:i,$mode:o,theme:e})=>{const c=i==="active",d=o==="dark",r=n==="left",l=t==="vertical",a=l?e.fontSizes[12]:r?e.fontSizes[16]:e.fontSizes[14],u=l?e.lineHeights[14]:r?e.lineHeights[19]:e.lineHeights[16],f=c?e.fontWeights.semibold:e.fontWeights.regular,v=d?e.colors.palette.neutral[50]:e.colors.palette.neutral[900];return s`
      font-family: ${e.fonts.primary};
      font-size: ${a};
      line-height: ${u};
      font-weight: ${f};
      color: ${v};
    `}}
`,w=m.div`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:t})=>t.colors.palette.error[500]};
  
  ${({$border:t,$aligned:n})=>n==="vertical"?s`
        right: 0;
        top: 0;
      `:t==="bottom"?s`
        right: 8px;
        top: 8px;
      `:s`
      right: 16px;
      top: 15px;
    `}
`,T=m.div`
  position: relative;
  width: 100%;
`,k=({aligned:t="horizontal",border:n="bottom",iconM:i,iconS:o,mode:e="dark",nestedMenu:c=!1,showIcon:d=!0,showIndicator:r=!1,showLabel:l=!0,state:a="inactive",type:u="single",label:f="Menu Item",onClick:v,onMouseEnter:h,onMouseLeave:b,className:y})=>{const g=n==="left"?i:o;return p.jsxs(T,{className:y,onMouseEnter:h,onMouseLeave:b,children:[p.jsxs(x,{$aligned:t,$border:n,$mode:e,$state:a,$type:u,onClick:v,role:"button",tabIndex:0,"aria-current":a==="active"?"page":void 0,children:[d&&g&&p.jsx($,{$mode:e,children:g}),l&&p.jsx(M,{$aligned:t,$border:n,$state:a,$mode:e,children:f}),c&&u==="single"&&t==="horizontal"&&p.jsx($,{$mode:e,children:n==="bottom"?"▼":"▶"})]}),r&&a==="inactive"&&p.jsx(w,{$mode:e,$border:n,$aligned:t})]})};k.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{aligned:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Alignment direction",defaultValue:{value:"'horizontal'",computed:!1}},border:{required:!1,tsType:{name:"union",raw:"'bottom' | 'left'",elements:[{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"Border position - bottom for horizontal nav, left for vertical nav",defaultValue:{value:"'bottom'",computed:!1}},iconM:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for medium size (24px) - used in side navigation"},iconS:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon for small size (16px) - used in top header"},mode:{required:!1,tsType:{name:"union",raw:"'dark' | 'light'",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"}]},description:"Color mode",defaultValue:{value:"'dark'",computed:!1}},nestedMenu:{required:!1,tsType:{name:"boolean"},description:"Whether this menu item has nested children",defaultValue:{value:"false",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:"Whether to show icon",defaultValue:{value:"true",computed:!1}},showIndicator:{required:!1,tsType:{name:"boolean"},description:"Whether to show notification indicator",defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to show label text",defaultValue:{value:"true",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'active' | 'inactive'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'inactive'"}]},description:"Active/inactive state",defaultValue:{value:"'inactive'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'single' | 'nested'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'nested'"}]},description:"Menu item type - single or nested",defaultValue:{value:"'single'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Label text",defaultValue:{value:"'Menu Item'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},onMouseEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse enter handler"},onMouseLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Mouse leave handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};export{k as M};
