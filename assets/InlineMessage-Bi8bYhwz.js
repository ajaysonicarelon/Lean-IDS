import{j as r}from"./jsx-runtime-DSvmvvsx.js";import{r as C}from"./index-B0WjJBI_.js";import{c as t}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as d}from"./Button-DO4HjNMh.js";const T=t.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[3]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  width: 100%;

  ${({theme:e,$type:n,$style:a})=>{if(a==="subdued"){if(n==="warning")return`
          background-color: ${e.colors.palette.warning[100]};
          color: ${e.colors.palette.warning[900]};
        `;if(n==="success")return`
          background-color: ${e.colors.palette.success[50]};
          color: ${e.colors.palette.success[700]};
        `;if(n==="error")return`
          background-color: ${e.colors.palette.error[50]};
          color: ${e.colors.palette.error[600]};
        `;if(n==="info")return`
          background-color: ${e.colors.palette.secondary.pantone[50]};
          color: ${e.colors.palette.secondary.pantone[700]};
        `}if(a==="accentBorder"){let o="",s="",i="";return n==="warning"?(o=e.colors.palette.warning[500],s=e.colors.palette.warning[100],i=e.colors.palette.warning[900]):n==="success"?(o=e.colors.palette.success[600],s=e.colors.palette.success[50],i=e.colors.palette.success[800]):n==="error"?(o=e.colors.palette.error[500],s=e.colors.palette.error[50],i=e.colors.palette.error[600]):n==="info"&&(o=e.colors.palette.secondary.pantone[500],s=e.colors.palette.secondary.pantone[50],i=e.colors.palette.secondary.pantone[700]),`
        background-color: ${s};
        color: ${i};
        border-left: 4px solid ${o};
      `}}}
`,$=t.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  flex: 1;
  min-width: 0;
`,L=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;

  svg {
    width: 100%;
    height: 100%;
  }
`,I=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  flex: 1;
  min-width: 0;
`,W=t.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: ${({theme:e})=>e.lineHeights[19]};
  margin: 0;
`,q=t.p`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[16]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[19]};
  margin: 0;
`,B=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding-top: ${({theme:e})=>e.spacing[1]};
`,M=t.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  flex-shrink: 0;
`,V=t.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 100%;
    height: 100%;
  }
`,z=()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("path",{d:"M12 2L2 20H22L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),r.jsx("path",{d:"M12 9V13M12 17H12.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),R=()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2"}),r.jsx("path",{d:"M8 12L11 15L16 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),S=()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2"}),r.jsx("path",{d:"M15 9L9 15M9 9L15 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),u=()=>r.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[r.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2"}),r.jsx("path",{d:"M12 16V12M12 8H12.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),A=()=>r.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),D=e=>{switch(e){case"warning":return r.jsx(z,{});case"success":return r.jsx(R,{});case"error":return r.jsx(S,{});case"info":return r.jsx(u,{});default:return r.jsx(u,{})}},p=C.forwardRef(({type:e="warning",style:n="subdued",text:a,descriptionText:o,showLeadingIcon:s=!0,showTrailingIcon:i=!0,action:f=!0,link:g=!0,leadingIcon:x,trailingIcon:w,buttonText:h="Button",linkText:m="Link",onActionClick:v,onLinkClick:k,onClose:l,className:j,...b},y)=>r.jsxs(T,{ref:y,$type:e,$style:n,className:j,role:"status",...b,children:[r.jsxs($,{children:[s&&r.jsx(L,{children:x||D(e)}),r.jsxs(I,{children:[r.jsx(W,{children:a}),r.jsx(q,{children:o}),g&&r.jsx(B,{children:r.jsx(d,{onClick:k,variant:"tertiary",size:"small",buttonType:e==="success"?"safe":e==="warning"?"warning":e==="error"?"alert":"default",style:{color:n==="subdued"||n==="accentBorder"?e==="success"?"var(--color-success-700)":e==="warning"?"var(--color-warning-800)":e==="error"?"var(--color-error-700)":"var(--color-pantone-700)":void 0},children:m})})]})]}),r.jsxs(M,{children:[f&&r.jsx(d,{onClick:v,variant:"tertiary",size:"small",buttonType:e==="success"?"safe":e==="warning"?"warning":e==="error"?"alert":"default",style:{color:n==="subdued"||n==="accentBorder"?e==="success"?"var(--color-success-700)":e==="warning"?"var(--color-warning-800)":e==="error"?"var(--color-error-700)":"var(--color-pantone-700)":void 0},children:h}),i&&r.jsx(V,{onClick:l,role:"button","aria-label":"Close message",tabIndex:0,onKeyDown:c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),l==null||l())},children:w||r.jsx(A,{})})]})]}));p.displayName="InlineMessage";p.__docgenInfo={description:"",methods:[],displayName:"InlineMessage",props:{type:{required:!1,tsType:{name:"union",raw:"'warning' | 'success' | 'error' | 'info'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:`Message type (determines color scheme)
@default 'warning'`,defaultValue:{value:"'warning'",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"'subdued' | 'accentBorder'",elements:[{name:"literal",value:"'subdued'"},{name:"literal",value:"'accentBorder'"}]},description:`Visual style variant
@default 'subdued'`,defaultValue:{value:"'subdued'",computed:!1}},text:{required:!0,tsType:{name:"string"},description:"Title text"},descriptionText:{required:!0,tsType:{name:"string"},description:"Description text"},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the leading icon
@default true`,defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:`Whether to show the trailing (close) icon
@default true`,defaultValue:{value:"true",computed:!1}},action:{required:!1,tsType:{name:"boolean"},description:`Whether to show the action button
@default true`,defaultValue:{value:"true",computed:!1}},link:{required:!1,tsType:{name:"boolean"},description:`Whether to show the link
@default true`,defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom leading icon (overrides default)"},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Custom trailing icon (overrides default)"},buttonText:{required:!1,tsType:{name:"string"},description:`Action button text
@default 'Button'`,defaultValue:{value:"'Button'",computed:!1}},linkText:{required:!1,tsType:{name:"string"},description:`Link text
@default 'Link'`,defaultValue:{value:"'Link'",computed:!1}},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when action button is clicked"},onLinkClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when link is clicked"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when close icon is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};export{p as I};
