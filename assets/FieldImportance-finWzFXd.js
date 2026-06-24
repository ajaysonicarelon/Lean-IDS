import{j as i}from"./jsx-runtime-DSvmvvsx.js";import{c as o}from"./styled-components.browser.esm-BIi91Tbq.js";const s=o.span`
  display: inline-block;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  white-space: nowrap;
  
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  font-style: ${({$style:e})=>e==="italic"?"italic":"normal"};
  
  color: ${({theme:e,$variant:a})=>a==="optional"?e.colors.palette.neutral[600]:e.colors.palette.error[500]};
`,n=({variant:e="mandatory",style:a="normal",text:t,className:l})=>{const r=()=>e==="asterisk"?"*":e==="optional"?t||"(Optional)":t||"(Required)";return i.jsx(s,{$variant:e,$style:a,className:l,children:r()})};n.displayName="FieldImportance";n.__docgenInfo={description:"",methods:[],displayName:"FieldImportance",props:{variant:{required:!1,tsType:{name:"union",raw:"'mandatory' | 'optional' | 'asterisk'",elements:[{name:"literal",value:"'mandatory'"},{name:"literal",value:"'optional'"},{name:"literal",value:"'asterisk'"}]},description:`Importance variant
@default 'mandatory'`,defaultValue:{value:"'mandatory'",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"'normal' | 'italic'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'italic'"}]},description:`Text style
@default 'normal'`,defaultValue:{value:"'normal'",computed:!1}},text:{required:!1,tsType:{name:"string"},description:"Custom text (only for mandatory and optional variants)"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};export{n as F};
