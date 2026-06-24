import{j as l}from"./jsx-runtime-DSvmvvsx.js";import{r as y}from"./index-B0WjJBI_.js";import{c as n}from"./styled-components.browser.esm-BIi91Tbq.js";const x=n.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:r})=>r.fonts.primary};
  font-weight: ${({theme:r})=>r.fontWeights.semibold};
  border: none;
  cursor: ${({$disabled:r})=>r?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  user-select: none;
  width: ${({$fullWidth:r})=>r?"100%":"auto"};
  
  &:focus {
    outline: none;
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:r})=>r.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  ${({$size:r,theme:o})=>{switch(r){case"xsmall":return`
          gap: ${o.spacing[3]};
          padding: ${o.spacing[1]} ${o.spacing[2]};
          font-size: ${o.fontSizes[12]};
          line-height: ${o.lineHeights[14]};
          border-radius: ${o.borderRadius.sm};
          min-height: 27px;
        `;case"small":return`
          gap: ${o.spacing[3]};
          padding: ${o.spacing[2]} ${o.spacing[3]};
          font-size: ${o.fontSizes[14]};
          line-height: ${o.lineHeights[16]};
          border-radius: ${o.borderRadius.sm};
          min-height: 35px;
        `;case"large":return`
          gap: ${o.spacing[3]};
          padding: ${o.spacing[3]} ${o.spacing[4]};
          font-size: ${o.fontSizes[16]};
          line-height: ${o.lineHeights[19]};
          border-radius: ${o.borderRadius.sm};
          min-height: 43px;
        `;case"xlarge":return`
          gap: ${o.spacing[3]};
          padding: ${o.spacing[3]} ${o.spacing[5]};
          font-size: ${o.fontSizes[18]};
          line-height: ${o.lineHeights[21]};
          border-radius: ${o.borderRadius.sm};
          min-height: 48px;
        `;case"medium":default:return`
          gap: ${o.spacing[3]};
          padding: ${o.spacing[4]} ${o.spacing[6]};
          font-size: ${o.fontSizes[16]};
          line-height: ${o.lineHeights[19]};
          border-radius: ${o.borderRadius.sm};
          min-height: 39px;
        `}}}
  
  ${({theme:r,$variant:o,$buttonType:e,$disabled:a})=>{if(o==="primary")return a?`
          background-color: ${r.colors.palette.neutral[300]};
          color: ${r.colors.palette.neutral[500]};
          pointer-events: none;
        `:e==="safe"?`
          background-color: ${r.colors.palette.success[500]};
          color: ${r.colors.palette.neutral[50]};
          
          &:hover {
            background-color: ${r.colors.palette.success[300]};
          }
          
          &:active {
            background-color: ${r.colors.palette.success[400]};
          }
        `:e==="warning"?`
          background-color: ${r.colors.palette.warning[700]};
          color: ${r.colors.palette.neutral[50]};
          
          &:hover {
            background-color: ${r.colors.palette.warning[500]};
          }
          
          &:active {
            background-color: ${r.colors.palette.warning[600]};
          }
        `:e==="alert"?`
          background-color: ${r.colors.palette.error[500]};
          color: ${r.colors.palette.neutral[50]};
          
          &:hover {
            background-color: ${r.colors.palette.error[300]};
          }
          
          &:active {
            background-color: ${r.colors.palette.error[400]};
          }
        `:`
        background-color: ${r.colors.palette.primary[400]};
        color: ${r.colors.palette.neutral[50]};
        
        &:hover {
          background-color: ${r.colors.palette.primary[300]};
        }
        
        &:active {
          background-color: ${r.colors.palette.primary[400]};
        }
      `;if(o==="secondary")return a?`
          background-color: transparent;
          color: ${r.colors.palette.neutral[400]};
          border: 1px solid ${r.colors.palette.neutral[300]};
          pointer-events: none;
        `:e==="safe"?`
          background-color: transparent;
          color: ${r.colors.palette.success[500]};
          border: 1px solid ${r.colors.palette.success[500]};
          
          &:hover {
            background-color: transparent;
            border-color: ${r.colors.palette.success[300]};
            color: ${r.colors.palette.success[300]};
          }
          
          &:active {
            background-color: transparent;
            border-color: ${r.colors.palette.success[400]};
            color: ${r.colors.palette.success[400]};
          }
        `:e==="warning"?`
          background-color: transparent;
          color: ${r.colors.palette.warning[700]};
          border: 1px solid ${r.colors.palette.warning[700]};
          
          &:hover {
            background-color: transparent;
            border-color: ${r.colors.palette.warning[500]};
            color: ${r.colors.palette.warning[500]};
          }
          
          &:active {
            background-color: transparent;
            border-color: ${r.colors.palette.warning[600]};
            color: ${r.colors.palette.warning[600]};
          }
        `:e==="alert"?`
          background-color: transparent;
          color: ${r.colors.palette.error[500]};
          border: 1px solid ${r.colors.palette.error[500]};
          
          &:hover {
            background-color: transparent;
            border-color: ${r.colors.palette.error[300]};
            color: ${r.colors.palette.error[300]};
          }
          
          &:active {
            background-color: transparent;
            border-color: ${r.colors.palette.error[400]};
            color: ${r.colors.palette.error[400]};
          }
        `:`
        background-color: transparent;
        color: ${r.colors.palette.primary[400]};
        border: 1px solid ${r.colors.palette.primary[400]};
        
        &:hover {
          background-color: transparent;
          border-color: ${r.colors.palette.primary[300]};
          color: ${r.colors.palette.primary[300]};
        }
        
        &:active {
          background-color: transparent;
          border-color: ${r.colors.palette.primary[400]};
          color: ${r.colors.palette.primary[400]};
        }
      `;if(o==="tertiary")return a?`
          background-color: transparent;
          color: ${r.colors.palette.neutral[400]};
          border: none;
          pointer-events: none;
        `:e==="safe"?`
          background-color: transparent;
          color: ${r.colors.palette.success[500]};
          border: none;
          
          &:hover {
            background-color: transparent;
            color: ${r.colors.palette.success[300]};
          }
          
          &:active {
            background-color: transparent;
            color: ${r.colors.palette.success[400]};
          }
        `:e==="warning"?`
          background-color: transparent;
          color: ${r.colors.palette.warning[700]};
          border: none;
          
          &:hover {
            background-color: transparent;
            color: ${r.colors.palette.warning[500]};
          }
          
          &:active {
            background-color: transparent;
            color: ${r.colors.palette.warning[600]};
          }
        `:e==="alert"?`
          background-color: transparent;
          color: ${r.colors.palette.error[500]};
          border: none;
          
          &:hover {
            background-color: transparent;
            color: ${r.colors.palette.error[300]};
          }
          
          &:active {
            background-color: transparent;
            color: ${r.colors.palette.error[400]};
          }
        `:`
        background-color: transparent;
        color: ${r.colors.palette.primary[400]};
        border: none;
        
        &:hover {
          background-color: transparent;
          color: ${r.colors.palette.primary[300]};
        }
        
        &:active {
          background-color: transparent;
          color: ${r.colors.palette.primary[400]};
        }
      `}}
`,i=n.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({$size:r})=>{switch(r){case"xsmall":return`
          width: 16px;
          height: 16px;
        `;case"small":return`
          width: 16px;
          height: 16px;
        `;case"large":return`
          width: 16px;
          height: 16px;
        `;case"xlarge":return`
          width: 16px;
          height: 16px;
        `;case"medium":default:return`
          width: 16px;
          height: 16px;
        `}}}
  
  svg {
    width: 100%;
    height: 100%;
  }
`,k=n.span`
  display: inline-flex;
  align-items: center;
`,u=y.forwardRef(({children:r,size:o="medium",variant:e="primary",buttonType:a="default",disabled:t=!1,leadingIcon:s,trailingIcon:c,showLabel:p=!0,type:d="button",onClick:g,className:f,fullWidth:$=!1,...b},v)=>l.jsxs(x,{ref:v,$size:o,$buttonType:a,$variant:e,$disabled:t,$fullWidth:$,disabled:t,type:d,onClick:g,className:f,...b,children:[s&&l.jsx(i,{$size:o,children:s}),p&&l.jsx(k,{children:r}),c&&l.jsx(i,{$size:o,children:c})]}));u.displayName="Button";u.__docgenInfo={description:"",methods:[],displayName:"Button",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"Button label text"},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xlarge'"}]},description:`Button size
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:`Visual variant
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},buttonType:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:`Button type (semantic meaning)
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the button is disabled",defaultValue:{value:"false",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Leading icon element"},trailingIcon:{required:!1,tsType:{name:"ReactNode"},description:"Trailing icon element"},showLabel:{required:!1,tsType:{name:"boolean"},description:`Whether to show label text
@default true`,defaultValue:{value:"true",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'button' | 'submit' | 'reset'",elements:[{name:"literal",value:"'button'"},{name:"literal",value:"'submit'"},{name:"literal",value:"'reset'"}]},description:`Button type attribute
@default 'button'`,defaultValue:{value:"'button'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Full width button",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{u as B};
