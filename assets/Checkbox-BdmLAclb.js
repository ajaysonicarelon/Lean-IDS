import{j as r}from"./jsx-runtime-DSvmvvsx.js";import{r as c}from"./index-B0WjJBI_.js";import{c as n}from"./styled-components.browser.esm-BIi91Tbq.js";const C=n.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,y=n.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,d=n.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,w=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  transition: all 0.2s ease-in-out;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  
  ${d}:focus-visible + & {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.semantic.focus.indicator};
  }
  
  ${({$size:e})=>{const t=e==="large"?"24px":"16px";return`
      width: ${t};
      height: ${t};
    `}}
  
  ${({theme:e,$checked:t,$disabled:o})=>o&&t?`
        background-color: ${e.colors.palette.neutral[300]};
        border: 1px solid ${e.colors.palette.neutral[300]};
      `:o?`
        background-color: ${e.colors.palette.neutral[50]};
        border: 1px solid ${e.colors.palette.neutral[300]};
      `:t?`
        background-color: ${e.colors.palette.primary[500]};
        border: 1px solid ${e.colors.palette.primary[500]};
      `:`
      background-color: ${e.colors.palette.neutral[50]};
      border: 1px solid ${e.colors.palette.neutral[400]};
    `}
  
  &:hover {
    ${({theme:e,$checked:t,$disabled:o})=>o?"":t?`border-color: ${e.colors.palette.primary[600]};`:`border-color: ${e.colors.palette.neutral[500]};`}
  }
  
  svg {
    width: 75%;
    height: 75%;
    color: ${({theme:e,$disabled:t})=>e.colors.palette.neutral[50]};
  }
`,j=n.label`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: normal;
  white-space: nowrap;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  user-select: none;
  
  ${({theme:e,$size:t})=>t==="large"?`font-size: ${e.fontSizes[16]};`:`font-size: ${e.fontSizes[14]};`}
  
  color: ${({theme:e,$disabled:t})=>t?e.colors.palette.neutral[400]:e.colors.palette.neutral[900]};
`,I=n.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({$size:e})=>{const t=e==="large"?"24px":"16px";return`
      width: ${t};
      height: ${t};
    `}}
  
  color: ${({theme:e,$disabled:t})=>t?e.colors.palette.neutral[400]:e.colors.palette.neutral[600]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,T=()=>r.jsx("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M10 3L4.5 8.5L2 6",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),q=()=>r.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8.8 12H7.2V7.2H8.8V12ZM8.8 5.6H7.2V4H8.8V5.6Z"})}),u=c.forwardRef(({label:e,size:t="default",checked:o=!1,disabled:a=!1,showTrailingIcon:p=!1,onChange:f,className:h,name:g,value:x,id:m,...$},b)=>{const v=c.useId(),s=m||v,i=()=>{if(a)return;const l=document.getElementById(s);l&&l.click()},k=l=>{l.preventDefault(),i()};return r.jsxs(C,{className:h,children:[r.jsxs(y,{children:[r.jsx(d,{ref:b,id:s,checked:o,disabled:a,onChange:f,name:g,value:x,"aria-checked":o,$size:t,...$}),r.jsx(w,{$size:t,$checked:o,$disabled:a,onClick:i,role:"presentation",children:o&&r.jsx(T,{})}),e&&r.jsx(j,{htmlFor:s,$size:t,$disabled:a,onClick:k,children:e})]}),p&&r.jsx(I,{$size:t,$disabled:a,children:r.jsx(q,{})})]})});u.displayName="Checkbox";u.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:"Checkbox label text"},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Size variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is checked",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the checkbox is disabled",defaultValue:{value:"false",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show trailing icon (info icon)
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},value:{required:!1,tsType:{name:"string"},description:"Input value attribute"}},composes:["Omit"]};export{u as C};
