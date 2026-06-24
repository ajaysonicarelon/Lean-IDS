import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{c as s}from"./styled-components.browser.esm-BIi91Tbq.js";const o={large:"72px",medium:"48px",small:"32px"},d={large:"32px",medium:"20px",small:"14px"},c={large:"40px",medium:"24px",small:"16px"},f=(e,a,l)=>a?l.colors.palette.neutral[300]:{default:l.colors.palette.primary[500],purple:"#8B5CF6",amber:"#F59E0B",cyan:"#06B6D4",lime:"#84CC16",yellow:"#EAB308",grey:l.colors.palette.neutral[300]}[e],g=(e,a)=>e?a.colors.palette.neutral[500]:a.colors.palette.neutral[50],v=s.div`
  position: relative;
  width: ${({$size:e})=>o[e]};
  height: ${({$size:e})=>o[e]};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({$color:e,$disabled:a,theme:l})=>f(e,a,l)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,y=s.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`,x=s.span`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({$size:e})=>d[e]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: ${({$size:e})=>c[e]};
  letter-spacing: -0.1px;
  color: ${({$disabled:e,theme:a})=>g(e,a)};
  text-align: center;
  user-select: none;
  white-space: nowrap;
`,h=({size:e="medium",color:a="default",src:l,alt:r="Avatar",initials:u="AA",disabled:t=!1,onClick:i,className:p})=>{const m=u.slice(0,2).toUpperCase();return n.jsx(v,{$size:e,$color:a,$disabled:t,className:p,role:"img","aria-label":r,onClick:i&&!t?i:void 0,style:{cursor:i&&!t?"pointer":"default"},children:l?n.jsx(y,{src:l,alt:r}):n.jsx(x,{$size:e,$disabled:t,children:m})})};h.__docgenInfo={description:"",methods:[],displayName:"Avatar",props:{size:{required:!1,tsType:{name:"union",raw:"'large' | 'medium' | 'small'",elements:[{name:"literal",value:"'large'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'small'"}]},description:"",defaultValue:{value:"'medium'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'purple' | 'amber' | 'cyan' | 'lime' | 'yellow' | 'grey'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'amber'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'lime'"},{name:"literal",value:"'yellow'"},{name:"literal",value:"'grey'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},alt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},initials:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'AA'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for avatar"}}};export{h as A};
