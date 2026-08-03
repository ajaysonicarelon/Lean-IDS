import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r,R as y}from"./index-B0WjJBI_.js";import{g as n}from"./styled-components.browser.esm-CuwBLqEg.js";import{I as A}from"./Icon-D9wW9sG4.js";import{S as V}from"./Select-Bnepq8z-.js";import{I as v}from"./InputField-DW27YIEC.js";import{T as N}from"./Tooltip-CU5_BwDk.js";const B=n.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
`,P=n.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`,M=n.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,O=n.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #222222;
  margin: 0;
  white-space: nowrap;
`,G=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[7]};
  height: ${({theme:e})=>e.spacing[7]};
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.semantic.text.secondary};
  padding: 0;
  
  &:hover {
    color: ${({theme:e})=>e.colors.semantic.text.primary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`,H=n.div`
  width: fit-content;
  max-width: 180px;
  flex-shrink: 0;
  
  /* Override Select component's internal width */
  & > div,
  & > div > div,
  & input,
  & button {
    width: 100% !important;
    max-width: 180px !important;
  }
  
  /* Force the wrapper to hug content */
  & > div:first-child {
    width: fit-content !important;
    min-width: 150px !important;
  }
`,_=n.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,J=n.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 400px;
`,K=n.h4`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #222222;
  margin: 0 0 16px 0;
`,Q=n.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`,b=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,U=n.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`,w=n.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${({$variant:e})=>e==="primary"?"#6222BC":"#D5D5D5"};
  background: ${({$variant:e})=>e==="primary"?"#6222BC":"#FFFFFF"};
  color: ${({$variant:e})=>e==="primary"?"#FFFFFF":"#222222"};
  
  &:hover {
    background: ${({$variant:e})=>e==="primary"?"#4E1A96":"#F8F8F8"};
  }
`,C=n.span`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #222222;
  white-space: nowrap;
`,W=n.div`
  width: 100%;
  height: ${({$height:e})=>typeof e=="number"?`${e}px`:e||"auto"};
  position: relative;
`,X=({title:e="Graph Name",showInfoIcon:F=!0,onInfoClick:u,infoTooltipContent:l,showTimeRange:j=!0,timeRangeValue:c="Last 7 days",onTimeRangeChange:m,onCustomDateRange:f,children:T,height:D,className:k})=>{const[S,g]=r.useState(c),[R,s]=r.useState(!1),[d,I]=r.useState(""),[p,z]=r.useState(""),[o,x]=r.useState({visible:!1,x:0,y:0}),L=[{value:"Last 7 days",label:"Last 7 days"},{value:"Last 30 days",label:"Last 30 days"},{value:"Last 6 months",label:"Last 6 months"},{value:"Last 365 days",label:"Last 365 days"},{value:"Custom range",label:"Custom range"}],q=a=>{const i=Array.isArray(a)?a[0]:a;g(i),i==="Custom range"?s(!0):(s(!1),m&&m(i))},E=a=>{if(u&&u(),l){const i=a.currentTarget.getBoundingClientRect();x($=>({visible:!$.visible,x:i.left,y:i.bottom+10}))}},h=()=>{x({visible:!1,x:0,y:0})};return y.useEffect(()=>{if(o.visible)return document.addEventListener("click",h),()=>document.removeEventListener("click",h)},[o.visible]),y.useEffect(()=>{g(c)},[c]),t.jsxs(B,{className:k,children:[t.jsxs(P,{children:[t.jsxs(M,{children:[t.jsx(O,{children:e}),F&&t.jsx(G,{onClick:a=>{a.stopPropagation(),E(a)},"aria-label":"More information",children:t.jsx(A,{name:"Info",size:"small"})})]}),j&&t.jsx(H,{children:t.jsx(V,{label:"",options:L,value:S,onChange:q,placeholder:"Select time range",helperText:"",size:"small",showLeadingIcon:!1})})]}),R&&t.jsx(_,{onClick:()=>s(!1),children:t.jsxs(J,{onClick:a=>a.stopPropagation(),children:[t.jsx(K,{children:"Select Custom Date Range"}),t.jsxs(Q,{children:[t.jsxs(b,{children:[t.jsx(C,{children:"From:"}),t.jsx(v,{type:"date",value:d,onChange:a=>I(a.target.value),size:"small"})]}),t.jsxs(b,{children:[t.jsx(C,{children:"To:"}),t.jsx(v,{type:"date",value:p,onChange:a=>z(a.target.value),size:"small"})]})]}),t.jsxs(U,{children:[t.jsx(w,{$variant:"secondary",onClick:()=>s(!1),children:"Cancel"}),t.jsx(w,{$variant:"primary",onClick:()=>{d&&p&&f&&f(d,p),s(!1)},children:"Apply"})]})]})}),t.jsx(W,{$height:D,children:T}),l&&t.jsx(N,{visible:o.visible,heading:l,x:o.x,y:o.y,variant:"pointer",pointerPosition:"top"})]})};X.__docgenInfo={description:"",methods:[],displayName:"DataVisualizationCard",props:{title:{required:!1,tsType:{name:"string"},description:"Title of the visualization",defaultValue:{value:"'Graph Name'",computed:!1}},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:"Show info icon next to title",defaultValue:{value:"true",computed:!1}},onInfoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when info icon is clicked"},infoTooltipContent:{required:!1,tsType:{name:"string"},description:"Tooltip content for info icon"},showTimeRange:{required:!1,tsType:{name:"boolean"},description:"Show time range selector",defaultValue:{value:"true",computed:!1}},timeRangeValue:{required:!1,tsType:{name:"string"},description:"Currently selected time range value",defaultValue:{value:"'Last 7 days'",computed:!1}},onTimeRangeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when time range changes"},onCustomDateRange:{required:!1,tsType:{name:"signature",type:"function",raw:"(fromDate: string, toDate: string) => void",signature:{arguments:[{type:{name:"string"},name:"fromDate"},{type:{name:"string"},name:"toDate"}],return:{name:"void"}}},description:"Callback when custom date range is selected"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Chart content to display"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Height of the visualization area"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};export{X as D};
