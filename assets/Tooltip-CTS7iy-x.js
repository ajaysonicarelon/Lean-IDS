import{j as r}from"./jsx-runtime-DSvmvvsx.js";import{r as f}from"./index-Clv5cdFl.js";import{c as a}from"./styled-components.browser.esm-BIi91Tbq.js";const x=a.div`
  position: fixed;
  display: ${({$visible:t})=>t?"flex":"none"};
  flex-direction: column;
  gap: 5px;
  padding: 13px 11px;
  background: #FFFFFF;
  border: 1.358px solid #E6E6E6;
  border-radius: 12px;
  box-shadow: 0px 2.716px 0.679px rgba(0, 0, 0, 0.08);
  width: 253px;
  pointer-events: ${({$variant:t})=>t==="pointer"?"auto":"none"};
  z-index: 9999;
  
  /* Triangle pointer for 'pointer' variant */
  ${({$variant:t,$pointerPosition:e})=>t==="pointer"&&`
    &::before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      
      ${e==="top"&&`
        bottom: 100%;
        left: 20px;
        border-width: 0 8px 10px 8px;
        border-color: transparent transparent #E6E6E6 transparent;
      `}
      
      ${e==="bottom"&&`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 10px 8px 0 8px;
        border-color: #E6E6E6 transparent transparent transparent;
      `}
      
      ${e==="left"&&`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 8px 10px 8px 0;
        border-color: transparent #E6E6E6 transparent transparent;
      `}
      
      ${e==="right"&&`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 8px 0 8px 10px;
        border-color: transparent transparent transparent #E6E6E6;
      `}
    }
    
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border-style: solid;
      
      ${e==="top"&&`
        bottom: 100%;
        left: 21px;
        border-width: 0 7px 9px 7px;
        border-color: transparent transparent #FFFFFF transparent;
        margin-bottom: -1px;
      `}
      
      ${e==="bottom"&&`
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        border-width: 9px 7px 0 7px;
        border-color: #FFFFFF transparent transparent transparent;
        margin-top: -1px;
      `}
      
      ${e==="left"&&`
        right: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 7px 9px 7px 0;
        border-color: transparent #FFFFFF transparent transparent;
        margin-right: -1px;
      `}
      
      ${e==="right"&&`
        left: 100%;
        top: 50%;
        transform: translateY(-50%);
        border-width: 7px 0 7px 9px;
        border-color: transparent transparent transparent #FFFFFF;
        margin-left: -1px;
      `}
    }
  `}
`,m=a.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #000000;
  white-space: normal;
  word-wrap: break-word;
`,c=a.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #6C6C6C;
  width: 100%;
  white-space: normal;
  word-wrap: break-word;
`,u=({visible:t=!1,heading:e,description:o,x:p=0,y:i=0,variant:s="default",pointerPosition:l="top",className:d})=>{const n=r.jsxs(x,{$visible:t,$variant:s,$pointerPosition:l,className:d,style:{left:`${p}px`,top:`${i}px`},role:"tooltip","aria-hidden":!t,children:[e&&r.jsx(m,{children:e}),o&&r.jsx(c,{children:o})]});return typeof document<"u"?f.createPortal(n,document.body):n};u.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{visible:{required:!1,tsType:{name:"boolean"},description:"Whether the tooltip is visible",defaultValue:{value:"false",computed:!1}},heading:{required:!1,tsType:{name:"string"},description:"Tooltip heading (main text)"},description:{required:!1,tsType:{name:"string"},description:"Tooltip description (secondary text)"},x:{required:!1,tsType:{name:"number"},description:"X position in pixels (screen coordinates)",defaultValue:{value:"0",computed:!1}},y:{required:!1,tsType:{name:"number"},description:"Y position in pixels (screen coordinates)",defaultValue:{value:"0",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'pointer'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'pointer'"}]},description:"Tooltip variant - 'default' (rectangular) or 'pointer' (with triangle)",defaultValue:{value:"'default'",computed:!1}},pointerPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Position of the pointer triangle (only for 'pointer' variant)",defaultValue:{value:"'top'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};export{u as T};
