import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{g as n}from"./styled-components.browser.esm-CuwBLqEg.js";const h=n.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 9px 24px;
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border-top: 1px solid ${({theme:e})=>e.colors.palette.neutral[400]};
  overflow: hidden;
  white-space: nowrap;
`,g=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.paragraph};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights.paragraph};
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  flex-shrink: 0;
`,x=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes.paragraph};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights.paragraph};
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  flex-shrink: 0;
`,y=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #6c6c6c;
  flex-shrink: 0;
  white-space: nowrap;
`,k=n.a`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: #0064ef;
  text-decoration: underline;
  text-decoration-skip-ink: none;
  cursor: pointer;
  
  &:hover {
    color: #0052cc;
  }
  
  &:active {
    color: #003d99;
  }
`,b=({lastUpdated:e="Sept 23, 2024",version:o="1.0",feedbackUrl:r="#",feedbackText:s="Send us a Feedback here",onFeedbackClick:a,showLastUpdated:i=!0,showVersion:l=!0,showFeedback:d=!0,customContentBefore:c,customContentAfter:f,className:p})=>{const u=m=>{a&&(m.preventDefault(),a())};return t.jsxs(h,{className:p,role:"contentinfo",children:[c,i&&t.jsxs(g,{children:["Last Updated on ",e]}),l&&t.jsxs(x,{children:["Version ",o]}),d&&t.jsxs(y,{children:[t.jsx("span",{children:"Facing any issues?"}),t.jsx(k,{href:r,target:"_blank",rel:"noopener noreferrer",onClick:u,children:s})]}),f]})};b.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{lastUpdated:{required:!1,tsType:{name:"string"},description:"Last updated date",defaultValue:{value:"'Sept 23, 2024'",computed:!1}},version:{required:!1,tsType:{name:"string"},description:"Version number",defaultValue:{value:"'1.0'",computed:!1}},feedbackUrl:{required:!1,tsType:{name:"string"},description:"Feedback link URL",defaultValue:{value:"'#'",computed:!1}},feedbackText:{required:!1,tsType:{name:"string"},description:"Feedback link text",defaultValue:{value:"'Send us a Feedback here'",computed:!1}},onFeedbackClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for feedback link"},showLastUpdated:{required:!1,tsType:{name:"boolean"},description:"Show/hide last updated section (default: true)",defaultValue:{value:"true",computed:!1}},showVersion:{required:!1,tsType:{name:"boolean"},description:"Show/hide version section (default: true)",defaultValue:{value:"true",computed:!1}},showFeedback:{required:!1,tsType:{name:"boolean"},description:"Show/hide feedback section (default: true)",defaultValue:{value:"true",computed:!1}},customContentBefore:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content to render before default footer items"},customContentAfter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom content to render after default footer items"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};export{b as F};
