import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{r as G}from"./index-B0WjJBI_.js";import{fn as c}from"./index-CH2Su9EI.js";import{g as o}from"./styled-components.browser.esm-CuwBLqEg.js";import{I as y}from"./Icon-D9wW9sG4.js";import{T as t}from"./Typography-DlcmwxwF.js";import{S as Fr}from"./Select-Bnepq8z-.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Search-3OWEky2d.js";import"./createSvgIcon-B7ekv6yR.js";import"./ExpandMore-DhGl5KfG.js";import"./Close-Bujf63ZX.js";import"./Settings-DTDGO7Gi.js";import"./Home-l5wlLBdJ.js";import"./InputField-DW27YIEC.js";import"./FieldImportance-Blr2F3eN.js";import"./HelpingText-DoRwUTLu.js";import"./Checkbox-B5k7d77F.js";import"./RadioButton-FHwiOUoL.js";const f=o.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid;
  border-radius: 8px;
  gap: ${({$variant:e,theme:r})=>e==="set"?"24px":r.spacing[3]};
  opacity: ${({$disabled:e})=>e?.5:1};
  cursor: ${({$disabled:e})=>e?"not-allowed":"default"};
  transition: all 0.2s ease;
  
  ${({$variant:e})=>e==="filled"?`
        background: #6222BC;
        border-color: #180336;
      `:`
      background: #FFFFFF;
      border-color: #D5D5D5;
    `}
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`,Ir=o.div`
  display: flex;
  flex-direction: column;
  gap: inherit; /* Inherits gap from CardContainer */
`,Lr=o.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,Pr=o.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`,Hr=o.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 4px;
  border-radius: 2px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 1px;
  
  ${({$type:e})=>e==="positive"?`
        background: #E7F3E6;
        color: #108808;
      `:e==="negative"?`
        background: #FBE7EC;
        color: #D2093C;
      `:`
      background: #F8F8F8;
      color: #464646;
    `}
`,Or=o.div`
  width: 100%;
  height: 4px;
  background: #EFE6F8;
  border-radius: 24px;
  overflow: hidden;
`,Wr=o.div`
  height: 100%;
  width: ${({$value:e})=>Math.min(Math.max(e,0),100)}%;
  background: ${({$color:e})=>e||"#6222BC"};
  border-radius: 999px;
  transition: width 0.3s ease;
`,zr=o.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 2px 6px;
  border-radius: 999px;
  border: 1px solid;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  width: fit-content;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  transition: opacity 0.2s;
  
  &:hover:not(:disabled) {
    opacity: 0.8;
  }
  
  ${({$type:e})=>e==="warning"?`
        background: #FFEBB8;
        border-color: #99710A;
        color: #99710A;
      `:e==="error"?`
        background: #FBE7EC;
        border-color: #D2093C;
        color: #D2093C;
      `:e==="success"?`
        background: #B7DBB5;
        border-color: #108808;
        color: #108808;
      `:`
      background: #E8F0F9;
      border-color: #1666BE;
      color: #1666BE;
    `}
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  &:disabled {
    opacity: 0.5;
  }
`,Ur=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({theme:e})=>e.spacing[2]};
`,Gr=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[1]};
`,_r=o.button`
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
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s ease;
  
  &:hover {
    color: ${({theme:e})=>e.colors.semantic.text.primary};
    background: ${({theme:e})=>e.colors.semantic.background.secondary};
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`,Jr=o.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  gap: ${({theme:e})=>e.spacing[4]};
  width: 100%;
`,Kr=o.button`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  padding: ${({theme:e})=>e.spacing[3]};
  background: ${({$highlighted:e,theme:r})=>e?r.colors.palette.primary[50]:r.colors.semantic.background.secondary};
  border: 1px solid ${({$highlighted:e,theme:r})=>e?r.colors.palette.primary[200]:r.colors.semantic.border.default};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  
  &:hover {
    background: ${({$highlighted:e,theme:r})=>e?r.colors.palette.primary[100]:"#FDFDFD"};
    border-color: ${({$highlighted:e,theme:r})=>e?r.colors.palette.primary[300]:r.colors.semantic.border.hover};
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`,Yr=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[8]};
  min-height: 10rem;
`,Xr=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[8]};
  min-height: 10rem;
  color: ${({theme:e})=>e.colors.semantic.text.secondary};
`,Qr=o.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[8]};
  min-height: 10rem;
  color: #A80730;
`,n=G.forwardRef((e,r)=>{const{variant:d="basic",metricName:re,value:_,showChange:xr=!1,changeValue:H,changeType:te="neutral",comparisonText:J,showProgressBar:wr=!1,progressValue:K=0,progressColor:Tr,showActionChip:kr=!1,actionText:O,actionType:p="info",onActionClick:se,sectionHeading:W,showInfoIcon:Nr=!1,onInfoClick:ie,showDropdown:ne=!1,dropdownValue:Mr,dropdownOptions:oe=[{value:"Last 7 days",label:"Last 7 days"},{value:"Last 30 days",label:"Last 30 days"},{value:"Last 6 months",label:"Last 6 months"}],onDropdownChange:Y,metrics:$r=[],isLoading:X=!1,loadingMessage:Ar="Loading...",isEmpty:Q=!1,emptyMessage:Er="No data available",isInvalid:m=!1,errorMessage:z="An error occurred",disabled:i=!1,onLoad:Z,onError:ee,onCardClick:l,onMetricClick:ce,customHeader:de,customValue:le,customChangeBadge:pe,customProgressBar:me,customActionChip:ue,customEmptyState:ge,customLoadingState:he,customErrorState:ve,as:jr,className:u,style:g,contentClassName:Sr,headerClassName:ye,metricsClassName:Rr,...h}=e,v=jr||"div",ae=d==="filled",Vr=d==="set";G.useEffect(()=>{Z&&!X&&!Q&&!m&&Z()},[Z,X,Q,m]),G.useEffect(()=>{m&&ee&&ee(new Error(z||"Unknown error"))},[m,ee,z]);const fe=()=>{!i&&l&&l()},Dr=(s,U)=>{!i&&ce&&ce(s,U)},Br=s=>{s.stopPropagation(),!i&&se&&se()},qr=s=>{s.stopPropagation(),ie&&ie()};return X?he?he():a.jsx(f,{ref:r,as:v,$variant:d,$disabled:i,className:u,style:g,...h,children:a.jsxs(Yr,{children:[a.jsx(y,{name:"CloudOff",size:"large"}),a.jsx(t,{variant:"body",weight:"medium",align:"center",children:Ar})]})}):Q?ge?ge():a.jsx(f,{ref:r,as:v,$variant:d,$disabled:i,className:u,style:g,...h,children:a.jsxs(Xr,{children:[a.jsx(y,{name:"Info",size:"large"}),a.jsx(t,{variant:"body",weight:"medium",align:"center",children:Er})]})}):m?ve?ve(z):a.jsx(f,{ref:r,as:v,$variant:d,$disabled:i,className:u,style:g,...h,children:a.jsxs(Qr,{children:[a.jsx(y,{name:"Error",size:"large"}),a.jsx(t,{variant:"body",weight:"semibold",align:"center",children:z})]})}):Vr?a.jsxs(f,{ref:r,as:v,$variant:d,$disabled:i,className:u,style:g,onClick:fe,role:l?"button":void 0,tabIndex:l&&!i?0:void 0,"aria-disabled":i,...h,children:[(W||ne)&&a.jsx(Ur,{className:ye,children:de?de(W):a.jsxs(a.Fragment,{children:[a.jsxs(Gr,{children:[W&&a.jsx(t,{variant:"headingS",weight:"semibold",children:W}),Nr&&a.jsx(_r,{onClick:qr,"aria-label":"More information",disabled:i,children:a.jsx(y,{name:"Info",size:"small"})})]}),ne&&a.jsx(Fr,{label:"",options:oe,value:Mr||oe[0].value,onChange:s=>Y==null?void 0:Y(Array.isArray(s)?s[0]:s),size:"small",disabled:i})]})}),a.jsx(Jr,{className:Rr,children:$r.map((s,U)=>a.jsxs(Kr,{$highlighted:s.highlighted,onClick:()=>Dr(s,U),disabled:i,"aria-label":`${s.label}: ${s.value}`,children:[a.jsx(t,{variant:"body",weight:"medium",color:s.highlighted?"#6222BC":"#909090",children:s.label}),a.jsx(t,{variant:"headingL",weight:"semibold",color:s.highlighted?"#6222BC":"#222222",children:s.value})]},U))})]}):a.jsx(f,{ref:r,as:v,$variant:d,$disabled:i,className:u,style:g,onClick:fe,role:l?"button":void 0,tabIndex:l&&!i?0:void 0,"aria-disabled":i,...h,children:a.jsxs(Ir,{className:Sr,children:[a.jsxs(Lr,{className:ye,children:[re&&a.jsx(t,{variant:"body",weight:"medium",color:ae?"#CBB5E9":"#909090",children:re}),le?le(_):_!==void 0&&a.jsx(t,{variant:"headingXL",weight:"semibold",color:ae?"#FFFFFF":"#222222",children:_})]}),xr&&(H||J)&&a.jsx(Pr,{children:pe?pe(H,te):a.jsxs(a.Fragment,{children:[H&&a.jsx(Hr,{$type:te,children:a.jsx(t,{variant:"caption",weight:"medium",children:H})}),J&&a.jsx(t,{variant:"caption",weight:"medium",color:ae?"#CBB5E9":"#909090",children:J})]})}),wr&&(me?me(K):a.jsx(Or,{children:a.jsx(Wr,{$value:K,$color:Tr,role:"progressbar","aria-valuenow":K,"aria-valuemin":0,"aria-valuemax":100})})),kr&&O&&(ue?ue(O,p):a.jsxs(zr,{$type:p,$disabled:i,onClick:Br,disabled:i,"aria-label":O,children:[a.jsx(y,{name:p==="warning"?"Warning":p==="error"?"Error":p==="success"?"CheckCircle":"Info",size:"small"}),a.jsx(t,{variant:"caption",weight:"medium",children:O})]}))]})})});n.displayName="MetricCard";n.__docgenInfo={description:"",methods:[],displayName:"MetricCard",props:{variant:{required:!1,tsType:{name:"union",raw:"'basic' | 'filled' | 'set'",elements:[{name:"literal",value:"'basic'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'set'"}]},description:"Card variant"},metricName:{required:!1,tsType:{name:"ReactNode"},description:"Metric name/label"},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Metric value"},showChange:{required:!1,tsType:{name:"boolean"},description:"Show change badge"},changeValue:{required:!1,tsType:{name:"string"},description:'Change value (e.g., "+56" or "-12")'},changeType:{required:!1,tsType:{name:"union",raw:"'positive' | 'negative' | 'neutral'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'neutral'"}]},description:"Change type for badge color"},comparisonText:{required:!1,tsType:{name:"string"},description:'Comparison text (e.g., "vs last week")'},showProgressBar:{required:!1,tsType:{name:"boolean"},description:"Show progress bar"},progressValue:{required:!1,tsType:{name:"number"},description:"Progress percentage (0-100)"},progressColor:{required:!1,tsType:{name:"string"},description:"Progress bar color"},showActionChip:{required:!1,tsType:{name:"boolean"},description:"Show action chip"},actionText:{required:!1,tsType:{name:"string"},description:"Action chip text"},actionType:{required:!1,tsType:{name:"union",raw:"'warning' | 'error' | 'info' | 'success'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},description:"Action chip type"},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action chip click handler"},sectionHeading:{required:!1,tsType:{name:"ReactNode"},description:'Section heading (for "set" variant)'},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:"Show info icon next to heading"},onInfoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Info icon click handler"},showDropdown:{required:!1,tsType:{name:"boolean"},description:'Show dropdown (for "set" variant)'},dropdownValue:{required:!1,tsType:{name:"string"},description:"Dropdown value"},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ value: string; label: string }",signature:{properties:[{key:"value",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}}]}}],raw:"Array<{ value: string; label: string }>"},description:"Dropdown options"},onDropdownChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Dropdown change handler"},metrics:{required:!1,tsType:{name:"Array",elements:[{name:"MetricData"}],raw:"MetricData[]"},description:'Array of metrics (for "set" variant)'},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state"},loadingMessage:{required:!1,tsType:{name:"string"},description:"Loading message"},isEmpty:{required:!1,tsType:{name:"boolean"},description:"Empty state (no data)"},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message"},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Error state"},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when card loads successfully"},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error) => void",signature:{arguments:[{type:{name:"Error"},name:"error"}],return:{name:"void"}}},description:"Called when card encounters an error"},onCardClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when card is clicked"},onMetricClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(metric: MetricData, index: number) => void",signature:{arguments:[{type:{name:"MetricData"},name:"metric"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Called when metric is clicked (for set variant)"},customHeader:{required:!1,tsType:{name:"signature",type:"function",raw:"(heading?: ReactNode) => ReactNode",signature:{arguments:[{type:{name:"ReactNode"},name:"heading"}],return:{name:"ReactNode"}}},description:"Custom header render function"},customValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value?: string | number) => ReactNode",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"ReactNode"}}},description:"Custom value render function"},customChangeBadge:{required:!1,tsType:{name:"signature",type:"function",raw:"(changeValue?: string, changeType?: ChangeType) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"changeValue"},{type:{name:"union",raw:"'positive' | 'negative' | 'neutral'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'neutral'"}]},name:"changeType"}],return:{name:"ReactNode"}}},description:"Custom change badge render function"},customProgressBar:{required:!1,tsType:{name:"signature",type:"function",raw:"(progressValue?: number) => ReactNode",signature:{arguments:[{type:{name:"number"},name:"progressValue"}],return:{name:"ReactNode"}}},description:"Custom progress bar render function"},customActionChip:{required:!1,tsType:{name:"signature",type:"function",raw:"(actionText?: string, actionType?: ActionType) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"actionText"},{type:{name:"union",raw:"'warning' | 'error' | 'info' | 'success'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"}]},name:"actionType"}],return:{name:"ReactNode"}}},description:"Custom action chip render function"},customEmptyState:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Custom empty state render function"},customLoadingState:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Custom loading state render function"},customErrorState:{required:!1,tsType:{name:"signature",type:"function",raw:"(error?: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"error"}],return:{name:"ReactNode"}}},description:"Custom error state render function"},as:{required:!1,tsType:{name:"ElementType"},description:"Render as different element"},className:{required:!1,tsType:{name:"string"},description:"Custom className for root container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for root container"},contentClassName:{required:!1,tsType:{name:"string"},description:"Custom className for content area"},headerClassName:{required:!1,tsType:{name:"string"},description:"Custom className for header"},metricsClassName:{required:!1,tsType:{name:"string"},description:"Custom className for metrics container (set variant)"}},composes:["Omit"]};const ft={title:"Data Visualization/MetricCard",component:n,parameters:{layout:"padded",docs:{description:{component:`
Enterprise-grade metric card component with full accessibility and customization support.

## Features
- ✅ **forwardRef** - Exposes root DOM node
- ✅ **Polymorphic 'as' prop** - Render as different elements
- ✅ **All 8 states** - default, hover, focus, active, disabled, loading, empty, error
- ✅ **Typography component** - All text uses Typography (no hardcoded styles)
- ✅ **Design tokens only** - No hardcoded pixels, colors, or spacing
- ✅ **Full accessibility** - ARIA attributes, keyboard navigation
- ✅ **Customization slots** - Custom render functions for all parts
- ✅ **Event callbacks** - onLoad, onError, onCardClick, onMetricClick

## Variants
- **Basic** - Simple metric display with white background
- **Filled** - Highlighted metric with purple background
- **Set** - Multiple metrics in a responsive grid

## Usage
\`\`\`tsx
import { MetricCard } from '@lean-ids/components';

<MetricCard
  variant="basic"
  metricName="Total Revenue"
  value="$8,888"
  showChange
  changeValue="+56"
  changeType="positive"
  comparisonText="vs last week"
/>
\`\`\`
        `}}},tags:["autodocs"],args:{onLoad:c(),onError:c(),onCardClick:c(),onMetricClick:c(),onActionClick:c(),onInfoClick:c(),onDropdownChange:c()},argTypes:{variant:{control:"radio",options:["basic","filled","set"],description:"Card variant"},changeType:{control:"radio",options:["positive","negative","neutral"],description:"Change badge type"},actionType:{control:"radio",options:["warning","error","info","success"],description:"Action chip type"},isLoading:{control:"boolean",description:"Loading state"},isEmpty:{control:"boolean",description:"Empty state (no data)"},isInvalid:{control:"boolean",description:"Error state"},disabled:{control:"boolean",description:"Disabled state"}}},b={args:{variant:"basic",metricName:"Total Revenue",value:"$8,888"},parameters:{docs:{description:{story:"Default metric card with metric name and value."}}}},C={args:{variant:"basic",metricName:"Active Users",value:"1,234",showChange:!0,changeValue:"+12%",changeType:"positive",comparisonText:"vs last month"},parameters:{docs:{description:{story:"Hover over the card to see the hover state."}}}},x={args:{variant:"basic",metricName:"Conversion Rate",value:"3.2%",onCardClick:c()},parameters:{docs:{description:{story:"Tab to the card to see the focus state. Card is clickable when onCardClick is provided."}}}},w={args:{variant:"filled",metricName:"Total Sales",value:"$45,678",showChange:!0,changeValue:"+23%",changeType:"positive"},parameters:{docs:{description:{story:"Click the card to see the active state and trigger the callback. Check the Actions panel."}}}},T={args:{variant:"basic",metricName:"Pending Orders",value:"156",disabled:!0,showActionChip:!0,actionText:"Action Disabled",actionType:"warning"},parameters:{docs:{description:{story:"Disabled card with no interactions."}}}},k={args:{variant:"basic",isLoading:!0,loadingMessage:"Loading metrics..."},parameters:{docs:{description:{story:"Loading state with spinner and message."}}}},N={args:{variant:"basic",isEmpty:!0,emptyMessage:"No metrics available"},parameters:{docs:{description:{story:"Empty state when no data is available."}}}},M={args:{variant:"basic",isInvalid:!0,errorMessage:"Failed to load metrics"},parameters:{docs:{description:{story:"Error state when data loading fails."}}}},$={args:{variant:"basic",metricName:"Total Users",value:"12,345",showChange:!0,changeValue:"+8%",changeType:"positive",comparisonText:"vs last week"},parameters:{docs:{description:{story:"Basic variant with white background."}}}},A={args:{variant:"filled",metricName:"Revenue",value:"$98,765",showChange:!0,changeValue:"+15%",changeType:"positive",comparisonText:"vs last month"},parameters:{docs:{description:{story:"Filled variant with purple background for highlighting important metrics."}}}},E={args:{variant:"set",sectionHeading:"Key Performance Indicators",showInfoIcon:!0,showDropdown:!0,dropdownValue:"Last 30 days",metrics:[{label:"Total Revenue",value:"$45,678",highlighted:!0},{label:"Active Users",value:"1,234",highlighted:!1},{label:"Conversion Rate",value:"3.2%",highlighted:!1},{label:"Avg Order Value",value:"$87",highlighted:!1}]},parameters:{docs:{description:{story:"Set variant displaying multiple metrics in a responsive grid with optional header and dropdown."}}}},j={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[a.jsx(n,{variant:"basic",metricName:"Positive Change",value:"$12,345",showChange:!0,changeValue:"+23%",changeType:"positive",comparisonText:"vs last week"}),a.jsx(n,{variant:"basic",metricName:"Negative Change",value:"$8,765",showChange:!0,changeValue:"-12%",changeType:"negative",comparisonText:"vs last week"}),a.jsx(n,{variant:"basic",metricName:"Neutral Change",value:"$10,000",showChange:!0,changeValue:"0%",changeType:"neutral",comparisonText:"vs last week"})]}),parameters:{docs:{description:{story:"Metric cards with positive, negative, and neutral change badges."}}}},S={args:{variant:"basic",metricName:"Goal Progress",value:"75%",showProgressBar:!0,progressValue:75},parameters:{docs:{description:{story:"Metric card with progress bar showing completion percentage."}}}},R={render:()=>a.jsxs("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:[a.jsx(n,{variant:"basic",metricName:"Pending Tasks",value:"23",showActionChip:!0,actionText:"Need Action",actionType:"warning",onActionClick:c()}),a.jsx(n,{variant:"basic",metricName:"Failed Jobs",value:"5",showActionChip:!0,actionText:"Critical",actionType:"error",onActionClick:c()}),a.jsx(n,{variant:"basic",metricName:"Completed",value:"156",showActionChip:!0,actionText:"Success",actionType:"success",onActionClick:c()}),a.jsx(n,{variant:"basic",metricName:"In Progress",value:"12",showActionChip:!0,actionText:"View Details",actionType:"info",onActionClick:c()})]}),parameters:{docs:{description:{story:"Metric cards with action chips in different types: warning, error, success, and info."}}}},V={args:{variant:"basic",metricName:"Monthly Revenue",value:"$125,678",showChange:!0,changeValue:"+18%",changeType:"positive",comparisonText:"vs last month",showProgressBar:!0,progressValue:85,showActionChip:!0,actionText:"View Report",actionType:"info"},parameters:{docs:{description:{story:"Complete example with all features: change badge, progress bar, and action chip."}}}},D={args:{variant:"set",sectionHeading:"Custom Header",metrics:[{label:"Metric 1",value:"100"},{label:"Metric 2",value:"200"}],customHeader:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[a.jsx(t,{variant:"headingL",weight:"bold",color:"#6222BC",children:"Custom Header Design"}),a.jsx(t,{variant:"body",color:"#909090",children:"This header is fully customized using the customHeader slot"})]})},parameters:{docs:{description:{story:"Custom header using the customHeader render prop."}}}},B={args:{variant:"basic",metricName:"Custom Value",value:"12345",customValue:e=>a.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"4px"},children:[a.jsx(t,{variant:"displayL",weight:"bold",color:"#6222BC",children:e}),a.jsx(t,{variant:"body",color:"#909090",children:"units"})]})},parameters:{docs:{description:{story:"Custom value rendering using the customValue render prop."}}}},q={args:{isEmpty:!0,customEmptyState:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",padding:"32px"},children:[a.jsx(t,{variant:"headingM",weight:"semibold",color:"#6222BC",children:"No Data Yet"}),a.jsx(t,{variant:"body",align:"center",color:"#909090",children:"Start tracking your metrics to see them here"})]})},parameters:{docs:{description:{story:"Custom empty state using the customEmptyState render prop."}}}},F={render:()=>{const e=G.useRef(null);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(n,{ref:e,variant:"basic",metricName:"Revenue",value:"$45,678",onLoad:()=>{var r;return(r=e.current)==null?void 0:r.focus()}}),a.jsx(t,{variant:"body",color:"#909090",children:"The card is focused on load using forwardRef"})]})},parameters:{docs:{description:{story:"Demonstrates forwardRef usage to access and manipulate the DOM node."}}}},I={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[a.jsx(n,{as:"article",variant:"basic",metricName:"Rendered as Article",value:"$12,345"}),a.jsx(n,{as:"section",variant:"filled",metricName:"Rendered as Section",value:"$67,890"}),a.jsx(t,{variant:"caption",color:"#909090",children:"Check the DOM - first card is an article element, second is a section element"})]}),parameters:{docs:{description:{story:'Demonstrates polymorphic rendering using the "as" prop to render as different HTML elements.'}}}},L={args:{variant:"set",sectionHeading:"Interactive Metrics",showInfoIcon:!0,showDropdown:!0,metrics:[{label:"Metric 1",value:"100"},{label:"Metric 2",value:"200"},{label:"Metric 3",value:"300"}]},parameters:{docs:{description:{story:"All event callbacks use explicit spies. Check the Actions panel to see callbacks fired when interacting with the card."}}}},P={render:()=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"16px"},children:[a.jsx(n,{variant:"basic",metricName:"Total Revenue",value:"$125,678",showChange:!0,changeValue:"+18%",changeType:"positive",comparisonText:"vs last month"}),a.jsx(n,{variant:"filled",metricName:"Active Users",value:"12,345",showChange:!0,changeValue:"+12%",changeType:"positive",comparisonText:"vs last week"}),a.jsx(n,{variant:"basic",metricName:"Conversion Rate",value:"3.2%",showChange:!0,changeValue:"-0.5%",changeType:"negative",comparisonText:"vs last month"}),a.jsx(n,{variant:"basic",metricName:"Avg Order Value",value:"$87",showProgressBar:!0,progressValue:65})]}),parameters:{docs:{description:{story:"Multiple metric cards in a responsive grid layout."}}}};var be,Ce,xe,we,Te;b.parameters={...b.parameters,docs:{...(be=b.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Total Revenue',
    value: '$8,888'
  },
  parameters: {
    docs: {
      description: {
        story: 'Default metric card with metric name and value.'
      }
    }
  }
}`,...(xe=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:xe.source},description:{story:"**Default State** - Basic metric card",...(Te=(we=b.parameters)==null?void 0:we.docs)==null?void 0:Te.description}}};var ke,Ne,Me,$e,Ae;C.parameters={...C.parameters,docs:{...(ke=C.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Active Users',
    value: '1,234',
    showChange: true,
    changeValue: '+12%',
    changeType: 'positive',
    comparisonText: 'vs last month'
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over the card to see the hover state.'
      }
    }
  }
}`,...(Me=(Ne=C.parameters)==null?void 0:Ne.docs)==null?void 0:Me.source},description:{story:"**Hover State** - Hover over the card to see interaction",...(Ae=($e=C.parameters)==null?void 0:$e.docs)==null?void 0:Ae.description}}};var Ee,je,Se,Re,Ve;x.parameters={...x.parameters,docs:{...(Ee=x.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Conversion Rate',
    value: '3.2%',
    onCardClick: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Tab to the card to see the focus state. Card is clickable when onCardClick is provided.'
      }
    }
  }
}`,...(Se=(je=x.parameters)==null?void 0:je.docs)==null?void 0:Se.source},description:{story:"**Focus State** - Tab to focus the card",...(Ve=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:Ve.description}}};var De,Be,qe,Fe,Ie;w.parameters={...w.parameters,docs:{...(De=w.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    metricName: 'Total Sales',
    value: '$45,678',
    showChange: true,
    changeValue: '+23%',
    changeType: 'positive'
  },
  parameters: {
    docs: {
      description: {
        story: 'Click the card to see the active state and trigger the callback. Check the Actions panel.'
      }
    }
  }
}`,...(qe=(Be=w.parameters)==null?void 0:Be.docs)==null?void 0:qe.source},description:{story:"**Active State** - Click the card to trigger callback",...(Ie=(Fe=w.parameters)==null?void 0:Fe.docs)==null?void 0:Ie.description}}};var Le,Pe,He,Oe,We;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Pending Orders',
    value: '156',
    disabled: true,
    showActionChip: true,
    actionText: 'Action Disabled',
    actionType: 'warning'
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled card with no interactions.'
      }
    }
  }
}`,...(He=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:He.source},description:{story:"**Disabled State** - Card is disabled (no interactions)",...(We=(Oe=T.parameters)==null?void 0:Oe.docs)==null?void 0:We.description}}};var ze,Ue,Ge,_e,Je;k.parameters={...k.parameters,docs:{...(ze=k.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    isLoading: true,
    loadingMessage: 'Loading metrics...'
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with spinner and message.'
      }
    }
  }
}`,...(Ge=(Ue=k.parameters)==null?void 0:Ue.docs)==null?void 0:Ge.source},description:{story:"**Loading State** - Card is loading data",...(Je=(_e=k.parameters)==null?void 0:_e.docs)==null?void 0:Je.description}}};var Ke,Ye,Xe,Qe,Ze;N.parameters={...N.parameters,docs:{...(Ke=N.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    isEmpty: true,
    emptyMessage: 'No metrics available'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state when no data is available.'
      }
    }
  }
}`,...(Xe=(Ye=N.parameters)==null?void 0:Ye.docs)==null?void 0:Xe.source},description:{story:"**Empty State** - No data available",...(Ze=(Qe=N.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.description}}};var ea,aa,ra,ta,sa;M.parameters={...M.parameters,docs:{...(ea=M.parameters)==null?void 0:ea.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    isInvalid: true,
    errorMessage: 'Failed to load metrics'
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state when data loading fails.'
      }
    }
  }
}`,...(ra=(aa=M.parameters)==null?void 0:aa.docs)==null?void 0:ra.source},description:{story:"**Error State** - Error occurred",...(sa=(ta=M.parameters)==null?void 0:ta.docs)==null?void 0:sa.description}}};var ia,na,oa,ca,da;$.parameters={...$.parameters,docs:{...(ia=$.parameters)==null?void 0:ia.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Total Users',
    value: '12,345',
    showChange: true,
    changeValue: '+8%',
    changeType: 'positive',
    comparisonText: 'vs last week'
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic variant with white background.'
      }
    }
  }
}`,...(oa=(na=$.parameters)==null?void 0:na.docs)==null?void 0:oa.source},description:{story:"**Basic Variant** - White background",...(da=(ca=$.parameters)==null?void 0:ca.docs)==null?void 0:da.description}}};var la,pa,ma,ua,ga;A.parameters={...A.parameters,docs:{...(la=A.parameters)==null?void 0:la.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    metricName: 'Revenue',
    value: '$98,765',
    showChange: true,
    changeValue: '+15%',
    changeType: 'positive',
    comparisonText: 'vs last month'
  },
  parameters: {
    docs: {
      description: {
        story: 'Filled variant with purple background for highlighting important metrics.'
      }
    }
  }
}`,...(ma=(pa=A.parameters)==null?void 0:pa.docs)==null?void 0:ma.source},description:{story:"**Filled Variant** - Purple background (highlighted)",...(ga=(ua=A.parameters)==null?void 0:ua.docs)==null?void 0:ga.description}}};var ha,va,ya,fa,ba;E.parameters={...E.parameters,docs:{...(ha=E.parameters)==null?void 0:ha.docs,source:{originalSource:`{
  args: {
    variant: 'set',
    sectionHeading: 'Key Performance Indicators',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 30 days',
    metrics: [{
      label: 'Total Revenue',
      value: '$45,678',
      highlighted: true
    }, {
      label: 'Active Users',
      value: '1,234',
      highlighted: false
    }, {
      label: 'Conversion Rate',
      value: '3.2%',
      highlighted: false
    }, {
      label: 'Avg Order Value',
      value: '$87',
      highlighted: false
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Set variant displaying multiple metrics in a responsive grid with optional header and dropdown.'
      }
    }
  }
}`,...(ya=(va=E.parameters)==null?void 0:va.docs)==null?void 0:ya.source},description:{story:"**Set Variant** - Multiple metrics in a grid",...(ba=(fa=E.parameters)==null?void 0:fa.docs)==null?void 0:ba.description}}};var Ca,xa,wa,Ta,ka;j.parameters={...j.parameters,docs:{...(Ca=j.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <MetricCard variant="basic" metricName="Positive Change" value="$12,345" showChange changeValue="+23%" changeType="positive" comparisonText="vs last week" />
      <MetricCard variant="basic" metricName="Negative Change" value="$8,765" showChange changeValue="-12%" changeType="negative" comparisonText="vs last week" />
      <MetricCard variant="basic" metricName="Neutral Change" value="$10,000" showChange changeValue="0%" changeType="neutral" comparisonText="vs last week" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Metric cards with positive, negative, and neutral change badges.'
      }
    }
  }
}`,...(wa=(xa=j.parameters)==null?void 0:xa.docs)==null?void 0:wa.source},description:{story:"**With Change Badge** - Positive, negative, and neutral changes",...(ka=(Ta=j.parameters)==null?void 0:Ta.docs)==null?void 0:ka.description}}};var Na,Ma,$a,Aa,Ea;S.parameters={...S.parameters,docs:{...(Na=S.parameters)==null?void 0:Na.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Goal Progress',
    value: '75%',
    showProgressBar: true,
    progressValue: 75
  },
  parameters: {
    docs: {
      description: {
        story: 'Metric card with progress bar showing completion percentage.'
      }
    }
  }
}`,...($a=(Ma=S.parameters)==null?void 0:Ma.docs)==null?void 0:$a.source},description:{story:"**With Progress Bar** - Shows progress indicator",...(Ea=(Aa=S.parameters)==null?void 0:Aa.docs)==null?void 0:Ea.description}}};var ja,Sa,Ra,Va,Da;R.parameters={...R.parameters,docs:{...(ja=R.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap'
  }}>
      <MetricCard variant="basic" metricName="Pending Tasks" value="23" showActionChip actionText="Need Action" actionType="warning" onActionClick={fn()} />
      <MetricCard variant="basic" metricName="Failed Jobs" value="5" showActionChip actionText="Critical" actionType="error" onActionClick={fn()} />
      <MetricCard variant="basic" metricName="Completed" value="156" showActionChip actionText="Success" actionType="success" onActionClick={fn()} />
      <MetricCard variant="basic" metricName="In Progress" value="12" showActionChip actionText="View Details" actionType="info" onActionClick={fn()} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Metric cards with action chips in different types: warning, error, success, and info.'
      }
    }
  }
}`,...(Ra=(Sa=R.parameters)==null?void 0:Sa.docs)==null?void 0:Ra.source},description:{story:"**With Action Chip** - Warning, error, info, and success chips",...(Da=(Va=R.parameters)==null?void 0:Va.docs)==null?void 0:Da.description}}};var Ba,qa,Fa,Ia,La;V.parameters={...V.parameters,docs:{...(Ba=V.parameters)==null?void 0:Ba.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Monthly Revenue',
    value: '$125,678',
    showChange: true,
    changeValue: '+18%',
    changeType: 'positive',
    comparisonText: 'vs last month',
    showProgressBar: true,
    progressValue: 85,
    showActionChip: true,
    actionText: 'View Report',
    actionType: 'info'
  },
  parameters: {
    docs: {
      description: {
        story: 'Complete example with all features: change badge, progress bar, and action chip.'
      }
    }
  }
}`,...(Fa=(qa=V.parameters)==null?void 0:qa.docs)==null?void 0:Fa.source},description:{story:"**Complete Example** - All features combined",...(La=(Ia=V.parameters)==null?void 0:Ia.docs)==null?void 0:La.description}}};var Pa,Ha,Oa,Wa,za;D.parameters={...D.parameters,docs:{...(Pa=D.parameters)==null?void 0:Pa.docs,source:{originalSource:`{
  args: {
    variant: 'set',
    sectionHeading: 'Custom Header',
    metrics: [{
      label: 'Metric 1',
      value: '100'
    }, {
      label: 'Metric 2',
      value: '200'
    }],
    customHeader: () => <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Typography variant="headingL" weight="bold" color="#6222BC">
          Custom Header Design
        </Typography>
        <Typography variant="body" color="#909090">
          This header is fully customized using the customHeader slot
        </Typography>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom header using the customHeader render prop.'
      }
    }
  }
}`,...(Oa=(Ha=D.parameters)==null?void 0:Ha.docs)==null?void 0:Oa.source},description:{story:"**Custom Header** - Custom header render function",...(za=(Wa=D.parameters)==null?void 0:Wa.docs)==null?void 0:za.description}}};var Ua,Ga,_a,Ja,Ka;B.parameters={...B.parameters,docs:{...(Ua=B.parameters)==null?void 0:Ua.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Custom Value',
    value: '12345',
    customValue: value => <div style={{
      display: 'flex',
      alignItems: 'baseline',
      gap: '4px'
    }}>
        <Typography variant="displayL" weight="bold" color="#6222BC">
          {value}
        </Typography>
        <Typography variant="body" color="#909090">
          units
        </Typography>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom value rendering using the customValue render prop.'
      }
    }
  }
}`,...(_a=(Ga=B.parameters)==null?void 0:Ga.docs)==null?void 0:_a.source},description:{story:"**Custom Value** - Custom value render function",...(Ka=(Ja=B.parameters)==null?void 0:Ja.docs)==null?void 0:Ka.description}}};var Ya,Xa,Qa,Za,er;q.parameters={...q.parameters,docs:{...(Ya=q.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  args: {
    isEmpty: true,
    customEmptyState: () => <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      padding: '32px'
    }}>
        <Typography variant="headingM" weight="semibold" color="#6222BC">
          No Data Yet
        </Typography>
        <Typography variant="body" align="center" color="#909090">
          Start tracking your metrics to see them here
        </Typography>
      </div>
  },
  parameters: {
    docs: {
      description: {
        story: 'Custom empty state using the customEmptyState render prop.'
      }
    }
  }
}`,...(Qa=(Xa=q.parameters)==null?void 0:Xa.docs)==null?void 0:Qa.source},description:{story:"**Custom Empty State** - Custom empty state render function",...(er=(Za=q.parameters)==null?void 0:Za.docs)==null?void 0:er.description}}};var ar,rr,tr,sr,ir;F.parameters={...F.parameters,docs:{...(ar=F.parameters)==null?void 0:ar.docs,source:{originalSource:`{
  render: () => {
    const cardRef = useRef<HTMLDivElement>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <MetricCard ref={cardRef} variant="basic" metricName="Revenue" value="$45,678" onLoad={() => cardRef.current?.focus()} />
        <Typography variant="body" color="#909090">
          The card is focused on load using forwardRef
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates forwardRef usage to access and manipulate the DOM node.'
      }
    }
  }
}`,...(tr=(rr=F.parameters)==null?void 0:rr.docs)==null?void 0:tr.source},description:{story:"**ForwardRef Usage** - Accessing the DOM node",...(ir=(sr=F.parameters)==null?void 0:sr.docs)==null?void 0:ir.description}}};var nr,or,cr,dr,lr;I.parameters={...I.parameters,docs:{...(nr=I.parameters)==null?void 0:nr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <MetricCard as="article" variant="basic" metricName="Rendered as Article" value="$12,345" />
      <MetricCard as="section" variant="filled" metricName="Rendered as Section" value="$67,890" />
      <Typography variant="caption" color="#909090">
        Check the DOM - first card is an article element, second is a section element
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates polymorphic rendering using the "as" prop to render as different HTML elements.'
      }
    }
  }
}`,...(cr=(or=I.parameters)==null?void 0:or.docs)==null?void 0:cr.source},description:{story:"**Polymorphic Rendering** - Render as different elements",...(lr=(dr=I.parameters)==null?void 0:dr.docs)==null?void 0:lr.description}}};var pr,mr,ur,gr,hr;L.parameters={...L.parameters,docs:{...(pr=L.parameters)==null?void 0:pr.docs,source:{originalSource:`{
  args: {
    variant: 'set',
    sectionHeading: 'Interactive Metrics',
    showInfoIcon: true,
    showDropdown: true,
    metrics: [{
      label: 'Metric 1',
      value: '100'
    }, {
      label: 'Metric 2',
      value: '200'
    }, {
      label: 'Metric 3',
      value: '300'
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'All event callbacks use explicit spies. Check the Actions panel to see callbacks fired when interacting with the card.'
      }
    }
  }
}`,...(ur=(mr=L.parameters)==null?void 0:mr.docs)==null?void 0:ur.source},description:{story:"**Event Callbacks** - All event callbacks demonstrated",...(hr=(gr=L.parameters)==null?void 0:gr.docs)==null?void 0:hr.description}}};var vr,yr,fr,br,Cr;P.parameters={...P.parameters,docs:{...(vr=P.parameters)==null?void 0:vr.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px'
  }}>
      <MetricCard variant="basic" metricName="Total Revenue" value="$125,678" showChange changeValue="+18%" changeType="positive" comparisonText="vs last month" />
      <MetricCard variant="filled" metricName="Active Users" value="12,345" showChange changeValue="+12%" changeType="positive" comparisonText="vs last week" />
      <MetricCard variant="basic" metricName="Conversion Rate" value="3.2%" showChange changeValue="-0.5%" changeType="negative" comparisonText="vs last month" />
      <MetricCard variant="basic" metricName="Avg Order Value" value="$87" showProgressBar progressValue={65} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Multiple metric cards in a responsive grid layout.'
      }
    }
  }
}`,...(fr=(yr=P.parameters)==null?void 0:yr.docs)==null?void 0:fr.source},description:{story:"**Responsive Grid** - Multiple cards in a responsive layout",...(Cr=(br=P.parameters)==null?void 0:br.docs)==null?void 0:Cr.description}}};const bt=["Default","Hover","Focus","Active","Disabled","Loading","Empty","Error","BasicVariant","FilledVariant","SetVariant","WithChangeBadge","WithProgressBar","WithActionChip","CompleteExample","CustomHeader","CustomValue","CustomEmptyState","ForwardRefUsage","PolymorphicRendering","EventCallbacks","ResponsiveGrid"];export{w as Active,$ as BasicVariant,V as CompleteExample,q as CustomEmptyState,D as CustomHeader,B as CustomValue,b as Default,T as Disabled,N as Empty,M as Error,L as EventCallbacks,A as FilledVariant,x as Focus,F as ForwardRefUsage,C as Hover,k as Loading,I as PolymorphicRendering,P as ResponsiveGrid,E as SetVariant,R as WithActionChip,j as WithChangeBadge,S as WithProgressBar,bt as __namedExportsOrder,ft as default};
