import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r,R as y}from"./index-B0WjJBI_.js";import{c as t}from"./styled-components.browser.esm-BIi91Tbq.js";import{I as V}from"./Icon-BytZhcyh.js";import{T as N}from"./Tooltip-CTS7iy-x.js";import{S as $}from"./Select-K-iKucvw.js";import{I as v}from"./InputField-BAALJcA9.js";const B=t.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
`,P=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
`,M=t.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,O=t.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #222222;
  margin: 0;
  white-space: nowrap;
`,G=t.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #909090;
  padding: 0;
  
  &:hover {
    color: #222222;
  }
`,H=t.div`
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
`,_=t.div`
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
`,J=t.div`
  background: #FFFFFF;
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  min-width: 400px;
`,K=t.h4`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: #222222;
  margin: 0 0 16px 0;
`,Q=t.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`,b=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,U=t.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`,w=t.button`
  padding: 8px 16px;
  border-radius: 4px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: 1px solid ${({$variant:n})=>n==="primary"?"#6222BC":"#D5D5D5"};
  background: ${({$variant:n})=>n==="primary"?"#6222BC":"#FFFFFF"};
  color: ${({$variant:n})=>n==="primary"?"#FFFFFF":"#222222"};
  
  &:hover {
    background: ${({$variant:n})=>n==="primary"?"#4E1A96":"#F8F8F8"};
  }
`,C=t.span`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #222222;
  white-space: nowrap;
`,W=t.div`
  width: 100%;
  height: ${({$height:n})=>typeof n=="number"?`${n}px`:n||"auto"};
  position: relative;
`,X=({title:n="Graph Name",showInfoIcon:F=!0,onInfoClick:u,infoTooltipContent:l,showTimeRange:j=!0,timeRangeValue:d="Last 7 days",onTimeRangeChange:m,onCustomDateRange:f,children:T,height:D,className:k})=>{const[S,g]=r.useState(d),[R,s]=r.useState(!1),[c,I]=r.useState(""),[p,z]=r.useState(""),[o,x]=r.useState({visible:!1,x:0,y:0}),L=[{value:"Last 7 days",label:"Last 7 days"},{value:"Last 30 days",label:"Last 30 days"},{value:"Last 6 months",label:"Last 6 months"},{value:"Last 365 days",label:"Last 365 days"},{value:"Custom range",label:"Custom range"}],q=a=>{const i=Array.isArray(a)?a[0]:a;g(i),i==="Custom range"?s(!0):(s(!1),m&&m(i))},E=a=>{if(u&&u(),l){const i=a.currentTarget.getBoundingClientRect();x(A=>({visible:!A.visible,x:i.left,y:i.bottom+10}))}},h=()=>{x({visible:!1,x:0,y:0})};return y.useEffect(()=>{if(o.visible)return document.addEventListener("click",h),()=>document.removeEventListener("click",h)},[o.visible]),y.useEffect(()=>{g(d)},[d]),e.jsxs(B,{className:k,children:[e.jsxs(P,{children:[e.jsxs(M,{children:[e.jsx(O,{children:n}),F&&e.jsx(G,{onClick:a=>{a.stopPropagation(),E(a)},"aria-label":"More information",children:e.jsx(V,{name:"Info",size:"small"})})]}),j&&e.jsx(H,{children:e.jsx($,{label:"",options:L,value:S,onChange:q,placeholder:"Select time range",helperText:"",size:"small",showLeadingIcon:!1})})]}),R&&e.jsx(_,{onClick:()=>s(!1),children:e.jsxs(J,{onClick:a=>a.stopPropagation(),children:[e.jsx(K,{children:"Select Custom Date Range"}),e.jsxs(Q,{children:[e.jsxs(b,{children:[e.jsx(C,{children:"From:"}),e.jsx(v,{type:"date",value:c,onChange:a=>I(a.target.value),size:"small"})]}),e.jsxs(b,{children:[e.jsx(C,{children:"To:"}),e.jsx(v,{type:"date",value:p,onChange:a=>z(a.target.value),size:"small"})]})]}),e.jsxs(U,{children:[e.jsx(w,{$variant:"secondary",onClick:()=>s(!1),children:"Cancel"}),e.jsx(w,{$variant:"primary",onClick:()=>{c&&p&&f&&f(c,p),s(!1)},children:"Apply"})]})]})}),e.jsx(W,{$height:D,children:T}),l&&e.jsx(N,{visible:o.visible,heading:l,x:o.x,y:o.y,variant:"pointer",pointerPosition:"top"})]})};X.__docgenInfo={description:"",methods:[],displayName:"DataVisualizationCard",props:{title:{required:!1,tsType:{name:"string"},description:"Title of the visualization",defaultValue:{value:"'Graph Name'",computed:!1}},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:"Show info icon next to title",defaultValue:{value:"true",computed:!1}},onInfoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when info icon is clicked"},infoTooltipContent:{required:!1,tsType:{name:"string"},description:"Tooltip content for info icon"},showTimeRange:{required:!1,tsType:{name:"boolean"},description:"Show time range selector",defaultValue:{value:"true",computed:!1}},timeRangeValue:{required:!1,tsType:{name:"string"},description:"Currently selected time range value",defaultValue:{value:"'Last 7 days'",computed:!1}},onTimeRangeChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when time range changes"},onCustomDateRange:{required:!1,tsType:{name:"signature",type:"function",raw:"(fromDate: string, toDate: string) => void",signature:{arguments:[{type:{name:"string"},name:"fromDate"},{type:{name:"string"},name:"toDate"}],return:{name:"void"}}},description:"Callback when custom date range is selected"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Chart content to display"},height:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Height of the visualization area"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class"}}};export{X as D};
