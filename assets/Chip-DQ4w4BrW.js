import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{c as t}from"./styled-components.browser.esm-BIi91Tbq.js";const m=t.div`
  display: inline-flex;
  align-items: center;
  border-radius: ${({theme:e})=>e.borderRadius.full};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  white-space: nowrap;
  transition: all 0.2s ease-in-out;
  cursor: ${({$clickable:e,$disabled:r})=>r?"not-allowed":e?"pointer":"default"};
  opacity: ${({$disabled:e})=>e?.5:1};
  
  ${({$size:e,theme:r})=>{switch(e){case"large":return`
          gap: ${r.spacing[2]};
          padding: ${r.spacing[2]} ${r.spacing[3]};
          font-size: ${r.fontSizes[14]};
          line-height: ${r.lineHeights[16]};
        `;case"medium":return`
          gap: ${r.spacing[2]};
          padding: ${r.spacing[1]} ${r.spacing[2]};
          font-size: ${r.fontSizes[16]};
          line-height: ${r.lineHeights[19]};
        `;case"small":default:return`
          gap: ${r.spacing[1]};
          padding: 2px ${r.spacing[1]};
          font-size: ${r.fontSizes[14]};
          line-height: ${r.lineHeights[16]};
        `}}}
  
  ${({theme:e,$variant:r,$type:l})=>{if(r==="filled")switch(l){case"success":return`
            background-color: ${e.colors.palette.success[500]};
            color: ${e.colors.palette.neutral[50]};
            border: none;
          `;case"warning":return`
            background-color: ${e.colors.palette.warning[500]};
            color: ${e.colors.palette.warning[900]};
            border: none;
          `;case"error":return`
            background-color: ${e.colors.palette.error[500]};
            color: ${e.colors.palette.neutral[50]};
            border: none;
          `;case"neutral":return`
            background-color: ${e.colors.palette.neutral[700]};
            color: ${e.colors.palette.neutral[50]};
            border: none;
          `;case"default":default:return`
            background-color: ${e.colors.palette.primary[500]};
            color: ${e.colors.palette.neutral[50]};
            border: none;
          `}if(r==="outlined")switch(l){case"success":return`
            background-color: ${e.colors.palette.success[50]};
            color: ${e.colors.palette.success[500]};
            border: 1px solid ${e.colors.palette.success[500]};
          `;case"warning":return`
            background-color: ${e.colors.palette.warning[100]};
            color: ${e.colors.palette.warning[700]};
            border: 1px solid ${e.colors.palette.warning[700]};
          `;case"error":return`
            background-color: ${e.colors.palette.error[50]};
            color: ${e.colors.palette.error[500]};
            border: 1px solid ${e.colors.palette.error[500]};
          `;case"neutral":return`
            background-color: ${e.colors.palette.neutral[100]};
            color: ${e.colors.palette.neutral[700]};
            border: 1px solid ${e.colors.palette.neutral[700]};
          `;case"default":default:return`
            background-color: ${e.colors.palette.primary[50]};
            color: ${e.colors.palette.primary[400]};
            border: 1px solid ${e.colors.palette.primary[400]};
          `}}}
  
  &:hover {
    ${({$clickable:e,$disabled:r,theme:l,$variant:o,$type:n})=>{if(r||!e)return"";if(o==="filled")switch(n){case"success":return`background-color: ${l.colors.palette.success[600]};`;case"warning":return`background-color: ${l.colors.palette.warning[600]};`;case"error":return`background-color: ${l.colors.palette.error[600]};`;case"neutral":return`background-color: ${l.colors.palette.neutral[800]};`;case"default":default:return`background-color: ${l.colors.palette.primary[600]};`}if(o==="outlined")return"opacity: 0.8;"}}
  }
  
  &:focus-visible {
    ${({$clickable:e,theme:r})=>e&&`
      outline: 2px solid ${r.colors.semantic.focus.indicator};
      outline-offset: 2px;
    `}
  }
`,y=t.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
`,b=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  
  svg {
    width: 100%;
    height: 100%;
  }
`,v=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  cursor: ${({$clickable:e})=>e?"pointer":"default"};
  
  svg {
    width: 100%;
    height: 100%;
  }
  
  &:hover {
    ${({$clickable:e})=>e&&"opacity: 0.7;"}
  }
`,w=()=>a.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12.5 3.5L3.5 12.5M3.5 3.5L12.5 12.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),p=({label:e,size:r="small",variant:l="filled",type:o="default",leadingIcon:n,trailingIcon:u,onClick:s,onTrailingIconClick:i,disabled:c=!1,className:f})=>{const g=d=>{d.stopPropagation(),!c&&i&&i(d)},$=()=>{!c&&s&&s()};return a.jsxs(m,{$size:r,$variant:l,$type:o,$disabled:c,$clickable:!!s,onClick:$,className:f,children:[n&&a.jsx(b,{children:n}),a.jsx(y,{children:e}),u&&a.jsx(v,{$clickable:!!i,onClick:g,children:u})]})};p.displayName="Chip";p.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{label:{required:!0,tsType:{name:"string"},description:"Chip label text"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:`Size variant
@default 'small'`,defaultValue:{value:"'small'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:`Visual variant
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:`Type/color scheme
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Leading icon element"},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Trailing icon element (typically close/remove icon)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for the chip"},onTrailingIconClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:"Click handler for trailing icon (e.g., remove action)"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the chip is disabled",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};w.__docgenInfo={description:"",methods:[],displayName:"CloseIcon"};export{p as C,w as a};
