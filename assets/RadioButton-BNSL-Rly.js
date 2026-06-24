import{j as r}from"./jsx-runtime-DSvmvvsx.js";import{r as d}from"./index-B0WjJBI_.js";import{c as a}from"./styled-components.browser.esm-BIi91Tbq.js";const w=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
`,R=a.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,u=a.input.attrs({type:"radio"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,I=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  position: relative;
  
  ${u}:focus-visible + & {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.semantic.focus.indicator};
  }
  
  ${({$size:e})=>{const t=e==="large"?"24px":"16px";return`
      width: ${t};
      height: ${t};
    `}}
  
  ${({theme:e,$checked:t,$disabled:n})=>n&&t?`
        border: 2px solid ${e.colors.palette.neutral[300]};
      `:n?`
        border: 2px solid ${e.colors.palette.neutral[300]};
      `:t?`
        border: 2px solid ${e.colors.palette.primary[500]};
      `:`
      border: 2px solid ${e.colors.palette.neutral[400]};
    `}
  
  &:hover {
    ${({theme:e,$checked:t,$disabled:n})=>n?"":t?`border-color: ${e.colors.palette.primary[600]};`:`border-color: ${e.colors.palette.neutral[500]};`}
  }
`,j=a.div`
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  
  ${({$size:e})=>{const t=e==="large"?"10px":"7px";return`
      width: ${t};
      height: ${t};
    `}}
  
  background-color: ${({theme:e,$disabled:t})=>t?e.colors.palette.neutral[300]:e.colors.palette.primary[500]};
`,T=a.label`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: normal;
  white-space: nowrap;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  user-select: none;
  
  ${({theme:e,$size:t})=>t==="large"?`font-size: ${e.fontSizes[16]};`:`font-size: ${e.fontSizes[14]};`}
  
  color: ${({theme:e,$disabled:t})=>t?e.colors.palette.neutral[400]:e.colors.palette.neutral[900]};
`,C=a.div`
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
`,L=()=>r.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M8 10.5L4 6.5L4.7 5.8L8 9.1L11.3 5.8L12 6.5L8 10.5Z"})}),c=d.forwardRef(({label:e,size:t="default",checked:n=!1,disabled:o=!1,showTrailingIcon:p=!1,onChange:f,className:m,name:g,value:h,id:$,...x},v)=>{const y=d.useId(),s=$||y,l=()=>{if(o)return;const i=document.getElementById(s);i&&i.click()},b=i=>{i.preventDefault(),l()};return r.jsxs(w,{className:m,children:[r.jsxs(R,{children:[r.jsx(u,{ref:v,id:s,checked:n,disabled:o,onChange:f,name:g,value:h,"aria-checked":n,$size:t,...x}),r.jsx(I,{$size:t,$checked:n,$disabled:o,onClick:l,role:"presentation",children:n&&r.jsx(j,{$size:t,$disabled:o})}),e&&r.jsx(T,{htmlFor:s,$size:t,$disabled:o,onClick:b,children:e})]}),p&&r.jsx(C,{$size:t,$disabled:o,children:r.jsx(L,{})})]})});c.displayName="RadioButton";c.__docgenInfo={description:"",methods:[],displayName:"RadioButton",props:{label:{required:!1,tsType:{name:"string"},description:"Radio button label text"},size:{required:!1,tsType:{name:"union",raw:"'default' | 'large'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:`Size variant
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the radio button is checked",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the radio button is disabled",defaultValue:{value:"false",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show trailing icon (expand_more icon)
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},name:{required:!1,tsType:{name:"string"},description:"Input name attribute (required for radio groups)"},value:{required:!1,tsType:{name:"string"},description:"Input value attribute"}},composes:["Omit"]};export{c as R};
