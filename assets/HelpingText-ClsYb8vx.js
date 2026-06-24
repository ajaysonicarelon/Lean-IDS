import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{c as n}from"./styled-components.browser.esm-BIi91Tbq.js";const c=n.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[4]}; /* 4px gap as per Figma */
`,u=n.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  
  color: ${({theme:e,$state:r})=>{switch(r){case"error":return e.colors.palette.error[500];case"warning":return e.colors.palette.warning[500];case"info":return e.colors.palette.info[500];default:return e.colors.palette.neutral[900]}}};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,d=n.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  white-space: nowrap;
  margin: 0;
  
  ${({theme:e,$size:r})=>r==="large"?`
        font-size: ${e.fontSizes[14]};
        line-height: ${e.lineHeights[16]};
        letter-spacing: 0px;
      `:`
      font-size: ${e.fontSizes[12]};
      line-height: ${e.lineHeights[14]};
      letter-spacing: 1px;
    `}
  
  color: ${({theme:e,$state:r})=>{switch(r){case"error":return e.colors.palette.error[500];case"warning":return e.colors.palette.warning[500];case"info":return e.colors.palette.info[500];default:return e.colors.palette.neutral[900]}}};
`,p=()=>t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"8",cy:"8",r:"6.67",stroke:"currentColor",strokeWidth:"1.33"}),t.jsx("path",{d:"M8 7.33V11.33M8 5.33H8.01",stroke:"currentColor",strokeWidth:"1.33",strokeLinecap:"round"})]}),f=()=>t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"8",cy:"8",r:"6.67",stroke:"currentColor",strokeWidth:"1.33"}),t.jsx("path",{d:"M8 7.33V11.33M8 5.33H8.01",stroke:"currentColor",strokeWidth:"1.33",strokeLinecap:"round"})]}),g=()=>t.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M8.865 2.5L14.93 12.5C15.32 13.16 14.85 14 14.065 14H1.935C1.15 14 0.68 13.16 1.07 12.5L7.135 2.5C7.525 1.84 8.475 1.84 8.865 2.5ZM8 10C7.45 10 7 10.45 7 11C7 11.55 7.45 12 8 12C8.55 12 9 11.55 9 11C9 10.45 8.55 10 8 10ZM7 6V9H9V6H7Z"})}),h=()=>t.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("circle",{cx:"8",cy:"8",r:"6.67",stroke:"currentColor",strokeWidth:"1.33"}),t.jsx("path",{d:"M10 6L6 10M6 6L10 10",stroke:"currentColor",strokeWidth:"1.33",strokeLinecap:"round"})]}),s=({text:e,state:r="default",size:o="default",showIcon:i=!0,className:a})=>{const l=()=>{switch(r){case"error":return t.jsx(h,{});case"warning":return t.jsx(g,{});case"info":return t.jsx(f,{});default:return t.jsx(p,{})}};return t.jsxs(c,{className:a,children:[i&&t.jsx(u,{$state:r,children:l()}),t.jsx(d,{$state:r,$size:o,children:e})]})};s.displayName="HelpingText";s.__docgenInfo={description:"",methods:[],displayName:"HelpingText",props:{text:{required:!0,tsType:{name:"string"},description:"Helper text message"},state:{required:!1,tsType:{name:"union",raw:"'default' | 'info' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:`State of the helper text
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Size variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},showIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the leading icon
@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};export{s as H};
