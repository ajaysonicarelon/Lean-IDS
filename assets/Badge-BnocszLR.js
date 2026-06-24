import{j as o}from"./jsx-runtime-DSvmvvsx.js";import{c as l}from"./styled-components.browser.esm-BIi91Tbq.js";const g=(r,n,e)=>{if(n==="outlined")return"transparent";const s={info:e.colors.palette.info[500],success:e.colors.palette.success[500],warning:e.colors.palette.warning[500],error:e.colors.palette.error[500],neutral:e.colors.palette.neutral[500]};return n==="subdued"?{info:e.colors.palette.info[50],success:e.colors.palette.success[50],warning:e.colors.palette.warning[100],error:e.colors.palette.error[50],neutral:e.colors.palette.neutral[50]}[r]:s[r]},w=(r,n,e)=>n==="default"?"#FFFFFF":{info:e.colors.palette.info[600],success:e.colors.palette.success[600],warning:e.colors.palette.warning[700],error:e.colors.palette.error[600],neutral:e.colors.palette.neutral[700]}[r],x=(r,n,e)=>n!=="outlined"?"transparent":{info:e.colors.palette.info[500],success:e.colors.palette.success[500],warning:e.colors.palette.warning[500],error:e.colors.palette.error[500],neutral:e.colors.palette.neutral[500]}[r],L=(r,n,e)=>n==="default"?"#FFFFFF":{info:e.colors.palette.info[600],success:e.colors.palette.success[600],warning:e.colors.palette.warning[700],error:e.colors.palette.error[600],neutral:e.colors.palette.neutral[700]}[r],v=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme:r})=>r.spacing[1]};
  padding: ${({theme:r})=>`${r.spacing[1]} ${r.spacing[2]}`};
  border-radius: ${({theme:r})=>r.borderRadius.xs};
  background-color: ${({$type:r,$style:n,theme:e})=>g(r,n,e)};
  border: 1px solid ${({$type:r,$style:n,theme:e})=>x(r,n,e)};
  font-family: ${({theme:r})=>r.fonts.primary};
  font-size: ${({theme:r})=>r.fontSizes[12]};
  font-weight: ${({theme:r})=>r.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({$type:r,$style:n,theme:e})=>w(r,n,e)};
  white-space: nowrap;
  user-select: none;
`,a=l.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
    fill: ${({$type:r,$style:n,theme:e})=>L(r,n,e)};
  }
`,C=l.span`
  flex-shrink: 0;
`,c=()=>o.jsx("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM6.6 9H5.4V5.4H6.6V9ZM6.6 4.2H5.4V3H6.6V4.2Z"})}),j=()=>o.jsx("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM9.42857 4.28571L5.57143 8.14286C5.48571 8.22857 5.37143 8.28571 5.25 8.28571C5.12857 8.28571 5.01429 8.22857 4.92857 8.14286L2.57143 5.78571C2.4 5.61429 2.4 5.32857 2.57143 5.15714C2.74286 4.98571 3.02857 4.98571 3.2 5.15714L5.25 7.20714L8.8 3.65714C8.97143 3.48571 9.25714 3.48571 9.42857 3.65714C9.6 3.82857 9.6 4.11429 9.42857 4.28571Z"})}),M=()=>o.jsx("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM6.6 8.4H5.4V7.2H6.6V8.4ZM6.6 6H5.4V3H6.6V6Z"})}),m=()=>o.jsx("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0ZM8.4 7.54286L7.54286 8.4L6 6.85714L4.45714 8.4L3.6 7.54286L5.14286 6L3.6 4.45714L4.45714 3.6L6 5.14286L7.54286 3.6L8.4 4.45714L6.85714 6L8.4 7.54286Z"})}),$=()=>o.jsx("svg",{viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M9.42857 3.42857L8.57143 2.57143L6 5.14286L3.42857 2.57143L2.57143 3.42857L5.14286 6L2.57143 8.57143L3.42857 9.42857L6 6.85714L8.57143 9.42857L9.42857 8.57143L6.85714 6L9.42857 3.42857Z"})}),y={info:o.jsx(c,{}),success:o.jsx(j,{}),warning:o.jsx(M,{}),error:o.jsx(m,{}),neutral:o.jsx(c,{})},I=({label:r,type:n="info",style:e="default",leadingIcon:s,trailingIcon:t,showLeadingIcon:i=!1,showTrailingIcon:u=!1,className:p})=>{const d=y[n],f=o.jsx($,{});return o.jsxs(v,{$type:n,$style:e,className:p,children:[i&&o.jsx(a,{$type:n,$style:e,children:s||d}),o.jsx(C,{children:r}),u&&o.jsx(a,{$type:n,$style:e,children:t||f})]})};I.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{label:{required:!0,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};export{I as B};
