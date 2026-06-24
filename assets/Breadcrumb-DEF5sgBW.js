import{j as s}from"./jsx-runtime-DSvmvvsx.js";import{c as p}from"./styled-components.browser.esm-BIi91Tbq.js";const l=p.span`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({$isActive:e,theme:r})=>e?r.colors.palette.primary[500]:r.colors.palette.neutral[400]};
  cursor: ${({$isActive:e})=>e?"default":"pointer"};
  text-decoration: none;
  transition: color 0.2s ease-in-out;
  border-radius: 2px;

  &:hover {
    color: ${({$isActive:e,theme:r})=>e?r.colors.palette.primary[500]:r.colors.palette.primary[400]};
  }

  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`,c=({label:e,isActive:r=!1,href:t,onClick:o,className:i})=>{const n=a=>{if(r){a.preventDefault();return}o&&(a.preventDefault(),o())};return t&&!r?s.jsx(l,{as:"a",href:t,$isActive:r,onClick:n,className:i,"aria-current":r?"page":void 0,children:e}):s.jsx(l,{$isActive:r,onClick:n,className:i,"aria-current":r?"page":void 0,children:e})};c.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{label:{required:!0,tsType:{name:"string"},description:""},isActive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},href:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{c as B};
