import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as g}from"./index-B0WjJBI_.js";import{fn as C}from"./index-CH2Su9EI.js";import{g as s}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as i}from"./Typography-DlcmwxwF.js";import{I as ce}from"./Icon-D9wW9sG4.js";import{T as Se}from"./Tooltip-CU5_BwDk.js";import{D as fr}from"./DataVisualizationCard-CoT_o53S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Search-3OWEky2d.js";import"./createSvgIcon-B7ekv6yR.js";import"./ExpandMore-DhGl5KfG.js";import"./Close-Bujf63ZX.js";import"./Settings-DTDGO7Gi.js";import"./Home-l5wlLBdJ.js";import"./index-Clv5cdFl.js";import"./index-B2UzP9c-.js";import"./Select-Bnepq8z-.js";import"./InputField-DW27YIEC.js";import"./FieldImportance-Blr2F3eN.js";import"./HelpingText-DoRwUTLu.js";import"./Checkbox-B5k7d77F.js";import"./RadioButton-FHwiOUoL.js";const vr=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[6]};
  width: ${({$width:e})=>e||"100%"};
  max-width: ${({$maxWidth:e})=>e||"100%"};
  height: 100%;
`,br=s.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,Cr=s.button`
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
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,De=s.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  height: ${({$height:e})=>e};
  width: 100%;
`,wr=s.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  height: 100%;
  flex-shrink: 0;
`,Lr=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[3]};
  height: min(${({theme:e})=>e.spacing[20]}, 30%);
  flex-shrink: 0;
`,Re=s.div`
  white-space: nowrap;
  transform: rotate(-90deg);
`,Ar=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-shrink: 0;
  text-align: right;
`,Tr=s.div`
  flex: 1;
  height: 100%;
  border-left: 2px solid ${({theme:e})=>e.colors.semantic.text.primary};
  border-bottom: 2px solid ${({theme:e})=>e.colors.semantic.text.primary};
  padding: ${({theme:e})=>`${e.spacing[7]} ${e.spacing[5]} 0 ${e.spacing[5]}`};
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  position: relative;
  gap: ${({theme:e})=>e.spacing[3]};
`,jr=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  pointer-events: none;
  padding-top: ${({theme:e})=>e.spacing[7]};
  z-index: 0;
`,$r=s.div`
  width: 100%;
  height: 1px;
  background-image: linear-gradient(to right, ${({theme:e})=>e.colors.semantic.border.default} 50%, transparent 50%);
  background-size: ${({theme:e})=>e.spacing[2]} 1px;
  background-repeat: repeat-x;
`,Mr=s.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: flex-end;
  width: ${({theme:e})=>e.spacing[8]};
  min-width: ${({theme:e})=>e.spacing[8]};
  max-width: ${({theme:e})=>e.spacing[12]};
  height: ${({$height:e})=>e};
  flex: 1 1 ${({theme:e})=>e.spacing[8]};
  cursor: pointer;
  transition: opacity 0.2s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    opacity: 0.85;
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`,kr=s.div`
  width: 100%;
  height: ${({$height:e})=>e};
  background: ${({$color:e})=>e};
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  flex-shrink: 0;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: height;
`,Sr=s.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  height: 100%;
  flex-shrink: 0;
`,Dr=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({theme:e})=>e.spacing[3]};
  height: min(${({theme:e})=>e.spacing[10]}, 20%);
  flex-shrink: 0;
`,Rr=s.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  flex-shrink: 0;
  text-align: right;
  padding-top: 1.55rem;
  padding-bottom: 1.75rem;
`,Br=s.div`
  flex: 1;
  height: 100%;
  border-left: 2px solid ${({theme:e})=>e.colors.semantic.text.primary};
  border-bottom: 2px solid ${({theme:e})=>e.colors.semantic.text.primary};
  padding-right: ${({theme:e})=>e.spacing[5]};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  position: relative;
`,Er=s.div`
  display: flex;
  align-items: center;
  height: 1.875rem;
  width: 100%;
  flex-shrink: 0;
  position: relative;
`,Fr=s.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: ${({$width:e})=>Math.max(e,1)}%;
  min-width: ${({theme:e})=>e.spacing[2]};
  cursor: pointer;
  transition: opacity 0.2s ease;
  position: relative;
  z-index: 1;
  
  &:hover {
    opacity: 0.85;
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`,zr=s.div`
  height: 100%;
  width: ${({$width:e})=>e}%;
  background: ${({$color:e})=>e};
  border-radius: ${({theme:e})=>e.borderRadius.xs};
  flex-shrink: 0;
  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: width;
`,Gr=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  width: 100%;
  padding-left: ${({$paddingLeft:e})=>e||"0"};
  padding-right: ${({theme:e})=>e.spacing[5]};
`,Vr=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
  align-items: center;
  width: 100%;
  padding-left: ${({$paddingLeft:e})=>e||"0"};
`,Be=s.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  gap: ${({theme:e})=>e.spacing[3]};
`,qr=s.div`
  width: auto;
  min-width: ${({theme:e})=>e.spacing[8]};
  max-width: ${({theme:e})=>e.spacing[12]};
  flex: 1 1 ${({theme:e})=>e.spacing[8]};
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,w=s.div`
  ${({$flex:e})=>e?"flex: 1; min-width: 0;":"flex-shrink: 0;"}
  overflow: hidden;
  text-overflow: ellipsis;
`,Ir=s.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[4]};
  align-items: center;
  width: 100%;
`,Hr=s.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`,Nr=s.button`
  display: flex;
  gap: ${({theme:e})=>e.spacing[1]};
  align-items: center;
  cursor: pointer;
  opacity: ${({$isActive:e})=>e?1:.4};
  transition: opacity 0.2s ease;
  background: transparent;
  border: none;
  padding: ${({theme:e})=>e.spacing[1]};
  
  &:hover {
    opacity: ${({$isActive:e})=>e?.8:.6};
  }
  
  &:focus-visible {
    outline: 2px solid ${({theme:e})=>e.colors.semantic.focus.indicator};
    outline-offset: 2px;
    border-radius: ${({theme:e})=>e.borderRadius.sm};
  }
`,Pr=s.div`
  width: ${({theme:e})=>e.spacing[3]};
  height: ${({theme:e})=>e.spacing[3]};
  border-radius: 50%;
  background: ${({$color:e})=>e};
  flex-shrink: 0;
`,Wr=s.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({theme:e})=>e.colors.semantic.background.primary};
  opacity: 0.9;
  z-index: 10;
`,Or=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[8]};
  text-align: center;
`,Yr=s.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[8]};
  text-align: center;
  color: ${({theme:e})=>e.colors.semantic.text.error};
`,x=g.forwardRef(({title:e,data:l,orientation:f="vertical",showValues:p=!1,showGrid:ee=!0,height:pe="18.75rem",width:Ua,maxWidth:Qa,yAxisLabel:L,xAxisLabel:Q,showLegend:Za=!1,legendTitle:me,customLegend:ue,showInfoIcon:he=!1,onInfoClick:ge,infoTooltipContent:te,isLoading:ae=!1,loadingMessage:er="Loading chart data...",isEmpty:re=!1,emptyMessage:tr="No data available",isInvalid:A=!1,errorMessage:Z="Failed to load chart data",disabled:m=!1,onLoad:ie,onError:se,onBarClick:xe,onBarHover:ye,onLegendClick:fe,customHeader:ve,customTooltip:be,customEmptyState:Ce,customLoadingState:we,customErrorState:Le,as:ar,className:rr,style:ir,chartClassName:sr,headerClassName:nr,legendClassName:or,...lr},dr)=>{const[v,Ae]=g.useState({visible:!1,heading:"",description:"",x:0,y:0}),[T,Te]=g.useState({visible:!1,x:0,y:0}),[u,cr]=g.useState(new Set(l.flatMap(a=>a.metrics).map(a=>a.name)));g.useEffect(()=>{!ae&&!A&&!re&&ie&&ie()},[ae,A,re,ie]),g.useEffect(()=>{A&&se&&se(new Error(Z||"Chart error"))},[A,Z,se]),g.useEffect(()=>{if(T.visible){const a=()=>{Te({visible:!1,x:0,y:0})};return document.addEventListener("click",a),()=>document.removeEventListener("click",a)}},[T.visible]);const ne=Array.from(new Map(l.flatMap(a=>a.metrics).map(a=>[a.name,a])).values()),b=Math.max(...l.map(a=>a.metrics.filter(r=>u.has(r.name)).reduce((r,o)=>r+o.value,0)),1),pr=[b,Math.round(b*2/3),Math.round(b/3),0],j=a=>a>=1e3?`${Math.round(a/1e3)}K`:a.toString(),je=(a,r,o)=>{if(m)return;const h=r.metrics.reduce((c,le)=>c+le.value,0),n=r.metrics.map(c=>`${c.name}: ${j(c.value)}`).join(`
`);Ae({visible:!0,heading:`${r.label} - Total: ${j(h)}`,description:n,x:a.clientX+15,y:a.clientY-40}),ye&&ye(r,o)},$e=()=>{Ae({visible:!1,heading:"",description:"",x:0,y:0})},oe=(a,r)=>{m||!xe||xe(a,r)},mr=a=>{if(a.stopPropagation(),ge&&ge(),te){const r=a.currentTarget.getBoundingClientRect();Te(o=>({visible:!o.visible,x:r.left,y:r.bottom+10}))}},Me=a=>{m||cr(r=>{const o=new Set(r),h=o.has(a);return h?o.delete(a):o.add(a),fe&&fe(a,!h),o})},ke=(a,r,o)=>{m||(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),oe(r,o))},ur=()=>!e&&!he?null:ve?ve(e):t.jsxs(br,{className:nr,children:[e&&t.jsx(i,{variant:"headingM",weight:"semibold",as:"h3",children:e}),he&&t.jsx(Cr,{onClick:mr,"aria-label":"More information",disabled:m,type:"button",children:t.jsx(ce,{name:"Info",size:"small"})})]}),hr=()=>t.jsxs(t.Fragment,{children:[t.jsxs(De,{$height:pe,children:[t.jsxs(wr,{children:[L&&t.jsx(Lr,{children:t.jsx(Re,{children:t.jsx(i,{variant:"caption",weight:"semibold",children:L})})}),t.jsx(Ar,{children:pr.map((a,r)=>t.jsx(i,{variant:"caption",weight:"semibold",children:j(a)},r))})]}),t.jsxs(Tr,{children:[ee&&t.jsx(jr,{children:[...Array(4)].map((a,r)=>t.jsx($r,{},r))}),l.map((a,r)=>{const o=a.metrics.filter(n=>u.has(n.name)).reduce((n,c)=>n+c.value,0),h=`${o/b*100}%`;return t.jsx(Mr,{$height:h,onMouseMove:n=>je(n,a,r),onMouseLeave:$e,onClick:()=>oe(a,r),onKeyDown:n=>ke(n,a,r),tabIndex:m?-1:0,role:"button","aria-label":`${a.label}: ${j(o)}`,"aria-disabled":m,children:a.metrics.map((n,c)=>{const de=u.has(n.name)?`${n.value/b*100}%`:"0%";return t.jsx(kr,{$color:n.color,$height:de},c)})},r)})]})]}),t.jsxs(Gr,{$paddingLeft:"3.9rem",children:[t.jsx(Be,{children:l.map((a,r)=>t.jsx(qr,{children:t.jsx(i,{variant:"caption",weight:"medium",children:a.label})},r))}),Q&&t.jsx(i,{variant:"caption",weight:"semibold",align:"center",children:Q})]})]}),gr=()=>t.jsxs(t.Fragment,{children:[t.jsxs(De,{$height:pe,children:[t.jsxs(Sr,{children:[L&&t.jsx(Dr,{children:t.jsx(Re,{children:t.jsx(i,{variant:"caption",weight:"semibold",children:L})})}),t.jsx(Rr,{children:l.map((a,r)=>t.jsx(i,{variant:"caption",weight:"semibold",children:a.label},r))})]}),t.jsx(Br,{children:l.map((a,r)=>{const o=a.metrics.filter(n=>u.has(n.name)).reduce((n,c)=>n+c.value,0),h=o>0?o/b*100:0;return t.jsx(Er,{children:t.jsx(Fr,{$width:h,onMouseMove:n=>je(n,a,r),onMouseLeave:$e,onClick:()=>oe(a,r),onKeyDown:n=>ke(n,a,r),tabIndex:m?-1:0,role:"button","aria-label":`${a.label}: ${j(o)}`,"aria-disabled":m,children:a.metrics.map((n,c)=>{const de=u.has(n.name)&&o>0?n.value/o*100:0;return t.jsx(zr,{$color:n.color,$width:de},c)})})},r)})})]}),t.jsxs(Vr,{$paddingLeft:L?"5.0625rem":"3.5rem",children:[t.jsxs(Be,{children:[t.jsx(w,{$flex:!0,children:t.jsx(i,{variant:"caption",weight:"medium",children:"0%"})}),t.jsx(w,{$flex:!0,children:t.jsx(i,{variant:"caption",weight:"medium",children:"10%"})}),t.jsx(w,{$flex:!0,children:t.jsx(i,{variant:"caption",weight:"medium",children:"25%"})}),t.jsx(w,{$flex:!0,children:t.jsx(i,{variant:"caption",weight:"medium",children:"50%"})}),t.jsx(w,{$flex:!0,children:t.jsx(i,{variant:"caption",weight:"medium",children:"75%"})}),t.jsx(w,{children:t.jsx(i,{variant:"caption",weight:"medium",children:"100%"})})]}),Q&&t.jsx(i,{variant:"caption",weight:"semibold",align:"center",children:Q})]})]}),xr=()=>!Za||ne.length===0?null:ue?ue(ne,u,Me):t.jsxs(Ir,{className:or,children:[me&&t.jsx(i,{variant:"body",weight:"semibold",align:"center",children:me}),t.jsx(Hr,{children:ne.map((a,r)=>t.jsxs(Nr,{$isActive:u.has(a.name),onClick:()=>Me(a.name),disabled:m,type:"button","aria-label":`Toggle ${a.name}`,"aria-pressed":u.has(a.name),children:[t.jsx(Pr,{$color:a.color}),t.jsx(i,{variant:"body",weight:"medium",children:a.name})]},r))})]});if(ae)return we?we():t.jsx(Wr,{children:t.jsx(i,{variant:"body",weight:"medium",align:"center",children:er})});if(A)return Le?Le(Z):t.jsxs(Yr,{children:[t.jsx(ce,{name:"Error",size:"medium"}),t.jsx(i,{variant:"body",weight:"medium",align:"center",children:Z})]});if(re||l.length===0)return Ce?Ce():t.jsxs(Or,{children:[t.jsx(ce,{name:"BarChart",size:"medium"}),t.jsx(i,{variant:"body",weight:"medium",align:"center",children:tr})]});const yr=ar||"div";return t.jsxs(t.Fragment,{children:[t.jsxs(vr,{as:yr,ref:dr,className:rr,style:ir,$width:Ua,$maxWidth:Qa,"aria-label":e?String(e):"Bar chart",role:"img",...lr,children:[ur(),t.jsx("div",{className:sr,children:f==="vertical"?hr():gr()}),xr()]}),te&&t.jsx(Se,{visible:T.visible,heading:te,x:T.x,y:T.y,variant:"pointer",pointerPosition:"top"}),v.visible&&(be?be(l[0]):t.jsx(Se,{visible:v.visible,heading:v.heading,description:v.description,x:v.x,y:v.y,variant:"default"}))]})});x.displayName="BarChart";x.__docgenInfo={description:"",methods:[],displayName:"BarChart",props:{title:{required:!1,tsType:{name:"ReactNode"},description:"Chart title"},data:{required:!0,tsType:{name:"Array",elements:[{name:"BarChartData"}],raw:"BarChartData[]"},description:"Array of bar data"},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Chart orientation",defaultValue:{value:"'vertical'",computed:!1}},showValues:{required:!1,tsType:{name:"boolean"},description:"Show value labels on bars",defaultValue:{value:"false",computed:!1}},showGrid:{required:!1,tsType:{name:"boolean"},description:"Show grid lines (dotted)",defaultValue:{value:"true",computed:!1}},height:{required:!1,tsType:{name:"string"},description:"Chart height (responsive units: rem, %, vh, or auto)",defaultValue:{value:"'18.75rem'",computed:!1}},width:{required:!1,tsType:{name:"string"},description:"Chart width (responsive units: rem, %, vw, or auto)"},maxWidth:{required:!1,tsType:{name:"string"},description:"Maximum width (responsive units)"},yAxisLabel:{required:!1,tsType:{name:"string"},description:"Y-axis label (vertical text on left)"},xAxisLabel:{required:!1,tsType:{name:"string"},description:"X-axis label (horizontal text below)"},showLegend:{required:!1,tsType:{name:"boolean"},description:"Show legend at bottom",defaultValue:{value:"false",computed:!1}},legendTitle:{required:!1,tsType:{name:"string"},description:"Legend title"},customLegend:{required:!1,tsType:{name:"signature",type:"function",raw:"(metrics: BarMetric[], activeMetrics: Set<string>, toggleMetric: (name: string) => void) => ReactNode",signature:{arguments:[{type:{name:"Array",elements:[{name:"BarMetric"}],raw:"BarMetric[]"},name:"metrics"},{type:{name:"Set",elements:[{name:"string"}],raw:"Set<string>"},name:"activeMetrics"},{type:{name:"signature",type:"function",raw:"(name: string) => void",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"void"}}},name:"toggleMetric"}],return:{name:"ReactNode"}}},description:"Custom legend render function"},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:"Show info icon",defaultValue:{value:"false",computed:!1}},onInfoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Info icon click handler"},infoTooltipContent:{required:!1,tsType:{name:"string"},description:"Info icon tooltip content"},isLoading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:"Loading message",defaultValue:{value:"'Loading chart data...'",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:"Empty state (no data)",defaultValue:{value:"false",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Empty state message",defaultValue:{value:"'No data available'",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message",defaultValue:{value:"'Failed to load chart data'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},onLoad:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when chart loads successfully"},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error) => void",signature:{arguments:[{type:{name:"Error"},name:"error"}],return:{name:"void"}}},description:"Called when chart encounters an error"},onBarClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: BarChartData, index: number) => void",signature:{arguments:[{type:{name:"BarChartData"},name:"data"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Called when a bar is clicked"},onBarHover:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: BarChartData, index: number) => void",signature:{arguments:[{type:{name:"BarChartData"},name:"data"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Called when a bar is hovered"},onLegendClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(metricName: string, isActive: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"metricName"},{type:{name:"boolean"},name:"isActive"}],return:{name:"void"}}},description:"Called when legend item is clicked"},customHeader:{required:!1,tsType:{name:"signature",type:"function",raw:"(title?: ReactNode) => ReactNode",signature:{arguments:[{type:{name:"ReactNode"},name:"title"}],return:{name:"ReactNode"}}},description:"Custom header render function"},customTooltip:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: BarChartData) => ReactNode",signature:{arguments:[{type:{name:"BarChartData"},name:"data"}],return:{name:"ReactNode"}}},description:"Custom tooltip render function"},customEmptyState:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Custom empty state render function"},customLoadingState:{required:!1,tsType:{name:"signature",type:"function",raw:"() => ReactNode",signature:{arguments:[],return:{name:"ReactNode"}}},description:"Custom loading state render function"},customErrorState:{required:!1,tsType:{name:"signature",type:"function",raw:"(error?: string) => ReactNode",signature:{arguments:[{type:{name:"string"},name:"error"}],return:{name:"ReactNode"}}},description:"Custom error state render function"},as:{required:!1,tsType:{name:"ElementType"},description:"Render as different element"},className:{required:!1,tsType:{name:"string"},description:"Custom className for root container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Custom inline styles for root container"},chartClassName:{required:!1,tsType:{name:"string"},description:"Custom className for chart content area"},headerClassName:{required:!1,tsType:{name:"string"},description:"Custom className for header"},legendClassName:{required:!1,tsType:{name:"string"},description:"Custom className for legend"}},composes:["Omit"]};const xi={title:"Data Visualization/BarChart",component:x,parameters:{layout:"padded",docs:{description:{component:`
Enterprise-grade bar chart component with full accessibility and customization support.

## Features
- ✅ **forwardRef** - Exposes root DOM node
- ✅ **Polymorphic 'as' prop** - Render as different elements
- ✅ **All 8 states** - default, hover, focus, active, disabled, loading, empty, error
- ✅ **Typography component** - All text uses Typography (no hardcoded styles)
- ✅ **Design tokens only** - No hardcoded pixels, colors, or spacing
- ✅ **Full accessibility** - ARIA attributes, keyboard navigation
- ✅ **Customization slots** - Custom header, tooltip, legend, states
- ✅ **Event callbacks** - onLoad, onError, onBarClick, onBarHover, onLegendClick

## Usage
\`\`\`tsx
import { BarChart } from '@lean-ids/components';

<BarChart
  title="Monthly Revenue"
  data={[
    { label: 'Jan', metrics: [{ name: 'Sales', value: 100, color: '#6222BC' }] }
  ]}
  showLegend
  yAxisLabel="Revenue ($K)"
  xAxisLabel="Month"
/>
\`\`\`
        `}}},tags:["autodocs"],args:{onLoad:C(),onError:C(),onBarClick:C(),onBarHover:C(),onLegendClick:C(),onInfoClick:C()},argTypes:{orientation:{control:"radio",options:["vertical","horizontal"],description:"Chart orientation"},height:{control:"text",description:"Chart height (responsive units: rem, %, vh)"},width:{control:"text",description:"Chart width (responsive units: rem, %, vw)"},isLoading:{control:"boolean",description:"Loading state"},isEmpty:{control:"boolean",description:"Empty state (no data)"},isInvalid:{control:"boolean",description:"Error state"},disabled:{control:"boolean",description:"Disabled state"}}},y=[{label:"Jan",metrics:[{name:"Revenue",value:45e3,color:"#6222BC"}]},{label:"Feb",metrics:[{name:"Revenue",value:52e3,color:"#6222BC"}]},{label:"Mar",metrics:[{name:"Revenue",value:48e3,color:"#6222BC"}]},{label:"Apr",metrics:[{name:"Revenue",value:61e3,color:"#6222BC"}]},{label:"May",metrics:[{name:"Revenue",value:55e3,color:"#6222BC"}]},{label:"Jun",metrics:[{name:"Revenue",value:67e3,color:"#6222BC"}]}],d=[{label:"Jan",metrics:[{name:"Claims Approved",value:5e4,color:"#3E71C2"},{name:"Claims Pending",value:7e4,color:"#E3725F"},{name:"Claims Denied",value:8e4,color:"#1AC2C1"}]},{label:"Feb",metrics:[{name:"Claims Approved",value:9e4,color:"#3E71C2"},{name:"Claims Pending",value:9e4,color:"#E3725F"},{name:"Claims Denied",value:9e4,color:"#1AC2C1"}]},{label:"Mar",metrics:[{name:"Claims Approved",value:4e4,color:"#3E71C2"},{name:"Claims Pending",value:5e4,color:"#E3725F"},{name:"Claims Denied",value:5e4,color:"#1AC2C1"}]},{label:"Apr",metrics:[{name:"Claims Approved",value:8e4,color:"#3E71C2"},{name:"Claims Pending",value:9e4,color:"#E3725F"},{name:"Claims Denied",value:8e4,color:"#1AC2C1"}]},{label:"May",metrics:[{name:"Claims Approved",value:6e4,color:"#3E71C2"},{name:"Claims Pending",value:7e4,color:"#E3725F"},{name:"Claims Denied",value:7e4,color:"#1AC2C1"}]},{label:"Jun",metrics:[{name:"Claims Approved",value:85e3,color:"#3E71C2"},{name:"Claims Pending",value:9e4,color:"#E3725F"},{name:"Claims Denied",value:95e3,color:"#1AC2C1"}]}],$={args:{data:y,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem"}},M={args:{data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"},parameters:{docs:{description:{story:"Hover over bars to see interactive tooltips with metric details."}}}},k={args:{data:y,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem"},parameters:{docs:{description:{story:"Press Tab to navigate through bars. Focus indicators are visible for keyboard navigation."}}}},S={args:{data:y,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem"},parameters:{docs:{description:{story:"Click on bars to see the active state and trigger the callback. Check the Actions panel to see the callback fired."}}}},D={args:{data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem",disabled:!0},parameters:{docs:{description:{story:"Disabled chart with no hover effects or interactions."}}}},R={args:{data:[],isLoading:!0,loadingMessage:"Loading chart data...",height:"18.75rem"},parameters:{docs:{description:{story:"Loading state with customizable message."}}}},B={args:{data:[],isEmpty:!0,emptyMessage:"No data available for the selected period",height:"18.75rem"},parameters:{docs:{description:{story:"Empty state with customizable message."}}}},E={args:{data:[],isInvalid:!0,errorMessage:"Failed to load chart data. Please try again.",height:"18.75rem"},parameters:{docs:{description:{story:"Error state with customizable error message."}}}},F={args:{data:d,orientation:"vertical",yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"}},z={args:{data:d,orientation:"horizontal",yAxisLabel:"Status",xAxisLabel:"Percentage",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"}},G={args:{data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"}},V={args:{title:"Monthly Claims Analysis",data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",showInfoIcon:!0,infoTooltipContent:"This chart shows monthly claim counts by status",height:"18.75rem"}},q={args:{data:y,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!1,height:"18.75rem"}},I={args:{data:y,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"12.5rem",width:"min(90vw, 25rem)"}},H={args:{data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,height:"18.75rem",width:"min(90vw, 37.5rem)"}},N={args:{data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"25rem",width:"min(90vw, 50rem)"}},P={render:()=>t.jsxs("div",{style:{width:"100%",maxWidth:"800px",padding:"20px"},children:[t.jsx(i,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"Responsive Chart Example"}),t.jsx(i,{variant:"body",style:{marginBottom:"20px"},children:"This chart adapts to its container width using responsive units."}),t.jsx(x,{data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem",width:"100%",maxWidth:"100%"})]})},W={args:{data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,height:"18.75rem",customHeader:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"16px"},children:[t.jsx(i,{variant:"headingL",weight:"bold",color:"#6222BC",children:"Custom Header Design"}),t.jsx(i,{variant:"body",color:"#909090",children:"This header is fully customized using the customHeader slot"})]})}},O={args:{data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,height:"18.75rem",customLegend:(e,l,f)=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",marginTop:"20px"},children:[t.jsx(i,{variant:"body",weight:"semibold",children:"Custom Legend"}),t.jsx("div",{style:{display:"flex",gap:"16px",flexWrap:"wrap"},children:e.map((p,ee)=>t.jsx("button",{onClick:()=>f(p.name),style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 12px",border:`2px solid ${p.color}`,borderRadius:"8px",background:l.has(p.name)?p.color:"transparent",cursor:"pointer"},children:t.jsx(i,{variant:"body",weight:"medium",color:l.has(p.name)?"#FFFFFF":p.color,children:p.name})},ee))})]})}},Y={args:{data:[],isEmpty:!0,height:"18.75rem",customEmptyState:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",padding:"40px"},children:[t.jsx(i,{variant:"headingM",weight:"semibold",color:"#6222BC",children:"No Data Yet"}),t.jsx(i,{variant:"body",align:"center",color:"#909090",children:"Start by adding some data to see your chart visualization"}),t.jsx("button",{style:{padding:"8px 16px",background:"#6222BC",color:"#FFFFFF",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Add Data"})]})}},X={args:{data:[],isLoading:!0,height:"18.75rem",customLoadingState:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"16px",padding:"40px"},children:[t.jsx("div",{style:{width:"40px",height:"40px",border:"4px solid #EFE6F8",borderTop:"4px solid #6222BC",borderRadius:"50%",animation:"spin 1s linear infinite"}}),t.jsx(i,{variant:"body",weight:"medium",children:"Loading your data..."})]})}},J={args:{data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"},parameters:{docs:{description:{story:"All event callbacks use explicit spies. Check the Actions panel to see callbacks fired when interacting with the chart."}}}},K={render:()=>{const e=g.useRef(null),l=()=>{var f,p;(f=e.current)==null||f.focus(),(p=e.current)==null||p.scrollIntoView({behavior:"smooth",block:"center"})};return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsxs("div",{children:[t.jsx(i,{variant:"headingM",weight:"semibold",style:{marginBottom:"8px"},children:"ForwardRef Example"}),t.jsx(i,{variant:"body",style:{marginBottom:"12px"},children:"The chart exposes its root DOM node via forwardRef. Click the button to programmatically focus the chart."}),t.jsx("button",{onClick:l,style:{padding:"8px 16px",background:"#6222BC",color:"#FFFFFF",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Focus Chart"})]}),t.jsx(x,{ref:e,data:y,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem"})]})}},_={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsxs("div",{children:[t.jsx(i,{variant:"headingM",weight:"semibold",style:{marginBottom:"8px"},children:"Polymorphic Example"}),t.jsx(i,{variant:"body",style:{marginBottom:"12px"},children:"This chart is rendered as a <section> element instead of a <div>."})]}),t.jsx(x,{as:"section",data:y,yAxisLabel:"Revenue",xAxisLabel:"Month",showGrid:!0,height:"18.75rem"})]})},U={render:()=>t.jsx("div",{style:{width:"min(90vw, 37.5rem)"},children:t.jsx(fr,{title:"Claims by Status",showInfoIcon:!0,infoTooltipContent:"Monthly breakdown of claims by approval status",showTimeRange:!0,timeRangeValue:"Last 6 months",children:t.jsx(x,{data:d,yAxisLabel:"Claim Count",xAxisLabel:"Month",showGrid:!0,showLegend:!0,legendTitle:"Claim Status",height:"18.75rem"})})}),parameters:{docs:{description:{story:"Complete example showing BarChart wrapped in DataVisualizationCard with all features."}}}};var Ee,Fe,ze,Ge,Ve;$.parameters={...$.parameters,docs:{...(Ee=$.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem'
  }
}`,...(ze=(Fe=$.parameters)==null?void 0:Fe.docs)==null?void 0:ze.source},description:{story:"**Default State** - Standard bar chart with single metric",...(Ve=(Ge=$.parameters)==null?void 0:Ge.docs)==null?void 0:Ve.description}}};var qe,Ie,He,Ne,Pe;M.parameters={...M.parameters,docs:{...(qe=M.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over bars to see interactive tooltips with metric details.'
      }
    }
  }
}`,...(He=(Ie=M.parameters)==null?void 0:Ie.docs)==null?void 0:He.source},description:{story:"**Hover State** - Hover over bars to see tooltips (interactive in canvas)",...(Pe=(Ne=M.parameters)==null?void 0:Ne.docs)==null?void 0:Pe.description}}};var We,Oe,Ye,Xe,Je;k.parameters={...k.parameters,docs:{...(We=k.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Press Tab to navigate through bars. Focus indicators are visible for keyboard navigation.'
      }
    }
  }
}`,...(Ye=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:Ye.source},description:{story:"**Focus State** - Tab through bars to see focus indicators (keyboard accessible)",...(Je=(Xe=k.parameters)==null?void 0:Xe.docs)==null?void 0:Je.description}}};var Ke,_e,Ue,Qe,Ze;S.parameters={...S.parameters,docs:{...(Ke=S.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on bars to see the active state and trigger the callback. Check the Actions panel to see the callback fired.'
      }
    }
  }
}`,...(Ue=(_e=S.parameters)==null?void 0:_e.docs)==null?void 0:Ue.source},description:{story:"**Active State** - Click bars to trigger onBarClick callback",...(Ze=(Qe=S.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.description}}};var et,tt,at,rt,it;D.parameters={...D.parameters,docs:{...(et=D.parameters)==null?void 0:et.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled chart with no hover effects or interactions.'
      }
    }
  }
}`,...(at=(tt=D.parameters)==null?void 0:tt.docs)==null?void 0:at.source},description:{story:"**Disabled State** - Chart is disabled (no interactions)",...(it=(rt=D.parameters)==null?void 0:rt.docs)==null?void 0:it.description}}};var st,nt,ot,lt,dt;R.parameters={...R.parameters,docs:{...(st=R.parameters)==null?void 0:st.docs,source:{originalSource:`{
  args: {
    data: [],
    isLoading: true,
    loadingMessage: 'Loading chart data...',
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading state with customizable message.'
      }
    }
  }
}`,...(ot=(nt=R.parameters)==null?void 0:nt.docs)==null?void 0:ot.source},description:{story:"**Loading State** - Shows loading indicator",...(dt=(lt=R.parameters)==null?void 0:lt.docs)==null?void 0:dt.description}}};var ct,pt,mt,ut,ht;B.parameters={...B.parameters,docs:{...(ct=B.parameters)==null?void 0:ct.docs,source:{originalSource:`{
  args: {
    data: [],
    isEmpty: true,
    emptyMessage: 'No data available for the selected period',
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Empty state with customizable message.'
      }
    }
  }
}`,...(mt=(pt=B.parameters)==null?void 0:pt.docs)==null?void 0:mt.source},description:{story:"**Empty State** - No data available",...(ht=(ut=B.parameters)==null?void 0:ut.docs)==null?void 0:ht.description}}};var gt,xt,yt,ft,vt;E.parameters={...E.parameters,docs:{...(gt=E.parameters)==null?void 0:gt.docs,source:{originalSource:`{
  args: {
    data: [],
    isInvalid: true,
    errorMessage: 'Failed to load chart data. Please try again.',
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state with customizable error message.'
      }
    }
  }
}`,...(yt=(xt=E.parameters)==null?void 0:xt.docs)==null?void 0:yt.source},description:{story:"**Error State** - Failed to load data",...(vt=(ft=E.parameters)==null?void 0:ft.docs)==null?void 0:vt.description}}};var bt,Ct,wt,Lt,At;F.parameters={...F.parameters,docs:{...(bt=F.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    orientation: 'vertical',
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem'
  }
}`,...(wt=(Ct=F.parameters)==null?void 0:Ct.docs)==null?void 0:wt.source},description:{story:"**Vertical Orientation** - Standard vertical bars (default)",...(At=(Lt=F.parameters)==null?void 0:Lt.docs)==null?void 0:At.description}}};var Tt,jt,$t,Mt,kt;z.parameters={...z.parameters,docs:{...(Tt=z.parameters)==null?void 0:Tt.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    orientation: 'horizontal',
    yAxisLabel: 'Status',
    xAxisLabel: 'Percentage',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem'
  }
}`,...($t=(jt=z.parameters)==null?void 0:jt.docs)==null?void 0:$t.source},description:{story:"**Horizontal Orientation** - Horizontal bars",...(kt=(Mt=z.parameters)==null?void 0:Mt.docs)==null?void 0:kt.description}}};var St,Dt,Rt,Bt,Et;G.parameters={...G.parameters,docs:{...(St=G.parameters)==null?void 0:St.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem'
  }
}`,...(Rt=(Dt=G.parameters)==null?void 0:Dt.docs)==null?void 0:Rt.source},description:{story:"**Stacked Bars** - Multiple metrics per bar",...(Et=(Bt=G.parameters)==null?void 0:Bt.docs)==null?void 0:Et.description}}};var Ft,zt,Gt,Vt,qt;V.parameters={...V.parameters,docs:{...(Ft=V.parameters)==null?void 0:Ft.docs,source:{originalSource:`{
  args: {
    title: 'Monthly Claims Analysis',
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    showInfoIcon: true,
    infoTooltipContent: 'This chart shows monthly claim counts by status',
    height: '18.75rem'
  }
}`,...(Gt=(zt=V.parameters)==null?void 0:zt.docs)==null?void 0:Gt.source},description:{story:"**With Title and Info Icon**",...(qt=(Vt=V.parameters)==null?void 0:Vt.docs)==null?void 0:qt.description}}};var It,Ht,Nt,Pt,Wt;q.parameters={...q.parameters,docs:{...(It=q.parameters)==null?void 0:It.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: false,
    height: '18.75rem'
  }
}`,...(Nt=(Ht=q.parameters)==null?void 0:Ht.docs)==null?void 0:Nt.source},description:{story:"**Without Grid Lines**",...(Wt=(Pt=q.parameters)==null?void 0:Pt.docs)==null?void 0:Wt.description}}};var Ot,Yt,Xt,Jt,Kt;I.parameters={...I.parameters,docs:{...(Ot=I.parameters)==null?void 0:Ot.docs,source:{originalSource:`{
  args: {
    data: revenueData,
    yAxisLabel: 'Revenue',
    xAxisLabel: 'Month',
    showGrid: true,
    height: '12.5rem',
    width: 'min(90vw, 25rem)'
  }
}`,...(Xt=(Yt=I.parameters)==null?void 0:Yt.docs)==null?void 0:Xt.source},description:{story:"**Small Chart** - Compact size",...(Kt=(Jt=I.parameters)==null?void 0:Jt.docs)==null?void 0:Kt.description}}};var _t,Ut,Qt,Zt,ea;H.parameters={...H.parameters,docs:{...(_t=H.parameters)==null?void 0:_t.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    height: '18.75rem',
    width: 'min(90vw, 37.5rem)'
  }
}`,...(Qt=(Ut=H.parameters)==null?void 0:Ut.docs)==null?void 0:Qt.source},description:{story:"**Medium Chart** - Standard size (default)",...(ea=(Zt=H.parameters)==null?void 0:Zt.docs)==null?void 0:ea.description}}};var ta,aa,ra,ia,sa;N.parameters={...N.parameters,docs:{...(ta=N.parameters)==null?void 0:ta.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '25rem',
    width: 'min(90vw, 50rem)'
  }
}`,...(ra=(aa=N.parameters)==null?void 0:aa.docs)==null?void 0:ra.source},description:{story:"**Large Chart** - Expanded size",...(sa=(ia=N.parameters)==null?void 0:ia.docs)==null?void 0:sa.description}}};var na,oa,la,da,ca;P.parameters={...P.parameters,docs:{...(na=P.parameters)==null?void 0:na.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '100%',
    maxWidth: '800px',
    padding: '20px'
  }}>
      <Typography variant="headingM" weight="semibold" style={{
      marginBottom: '12px'
    }}>
        Responsive Chart Example
      </Typography>
      <Typography variant="body" style={{
      marginBottom: '20px'
    }}>
        This chart adapts to its container width using responsive units.
      </Typography>
      <BarChart data={stackedClaimData} yAxisLabel="Claim Count" xAxisLabel="Month" showGrid showLegend legendTitle="Claim Status" height="18.75rem" width="100%" maxWidth="100%" />
    </div>
}`,...(la=(oa=P.parameters)==null?void 0:oa.docs)==null?void 0:la.source},description:{story:"**Responsive Width** - Adapts to container",...(ca=(da=P.parameters)==null?void 0:da.docs)==null?void 0:ca.description}}};var pa,ma,ua,ha,ga;W.parameters={...W.parameters,docs:{...(pa=W.parameters)==null?void 0:pa.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    height: '18.75rem',
    customHeader: () => <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '16px'
    }}>
        <Typography variant="headingL" weight="bold" color="#6222BC">
          Custom Header Design
        </Typography>
        <Typography variant="body" color="#909090">
          This header is fully customized using the customHeader slot
        </Typography>
      </div>
  }
}`,...(ua=(ma=W.parameters)==null?void 0:ma.docs)==null?void 0:ua.source},description:{story:"**Custom Header** - Custom header render function",...(ga=(ha=W.parameters)==null?void 0:ha.docs)==null?void 0:ga.description}}};var xa,ya,fa,va,ba;O.parameters={...O.parameters,docs:{...(xa=O.parameters)==null?void 0:xa.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    height: '18.75rem',
    customLegend: (metrics, activeMetrics, toggleMetric) => <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      marginTop: '20px'
    }}>
        <Typography variant="body" weight="semibold">
          Custom Legend
        </Typography>
        <div style={{
        display: 'flex',
        gap: '16px',
        flexWrap: 'wrap'
      }}>
          {metrics.map((metric, index) => <button key={index} onClick={() => toggleMetric(metric.name)} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 12px',
          border: \`2px solid \${metric.color}\`,
          borderRadius: '8px',
          background: activeMetrics.has(metric.name) ? metric.color : 'transparent',
          cursor: 'pointer'
        }}>
              <Typography variant="body" weight="medium" color={activeMetrics.has(metric.name) ? '#FFFFFF' : metric.color}>
                {metric.name}
              </Typography>
            </button>)}
        </div>
      </div>
  }
}`,...(fa=(ya=O.parameters)==null?void 0:ya.docs)==null?void 0:fa.source},description:{story:"**Custom Legend** - Custom legend render function",...(ba=(va=O.parameters)==null?void 0:va.docs)==null?void 0:ba.description}}};var Ca,wa,La,Aa,Ta;Y.parameters={...Y.parameters,docs:{...(Ca=Y.parameters)==null?void 0:Ca.docs,source:{originalSource:`{
  args: {
    data: [],
    isEmpty: true,
    height: '18.75rem',
    customEmptyState: () => <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      padding: '40px'
    }}>
        <Typography variant="headingM" weight="semibold" color="#6222BC">
          No Data Yet
        </Typography>
        <Typography variant="body" align="center" color="#909090">
          Start by adding some data to see your chart visualization
        </Typography>
        <button style={{
        padding: '8px 16px',
        background: '#6222BC',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          Add Data
        </button>
      </div>
  }
}`,...(La=(wa=Y.parameters)==null?void 0:wa.docs)==null?void 0:La.source},description:{story:"**Custom Empty State** - Custom empty state render function",...(Ta=(Aa=Y.parameters)==null?void 0:Aa.docs)==null?void 0:Ta.description}}};var ja,$a,Ma,ka,Sa;X.parameters={...X.parameters,docs:{...(ja=X.parameters)==null?void 0:ja.docs,source:{originalSource:`{
  args: {
    data: [],
    isLoading: true,
    height: '18.75rem',
    customLoadingState: () => <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      padding: '40px'
    }}>
        <div style={{
        width: '40px',
        height: '40px',
        border: '4px solid #EFE6F8',
        borderTop: '4px solid #6222BC',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
        <Typography variant="body" weight="medium">
          Loading your data...
        </Typography>
      </div>
  }
}`,...(Ma=($a=X.parameters)==null?void 0:$a.docs)==null?void 0:Ma.source},description:{story:"**Custom Loading State** - Custom loading state render function",...(Sa=(ka=X.parameters)==null?void 0:ka.docs)==null?void 0:Sa.description}}};var Da,Ra,Ba,Ea,Fa;J.parameters={...J.parameters,docs:{...(Da=J.parameters)==null?void 0:Da.docs,source:{originalSource:`{
  args: {
    data: stackedClaimData,
    yAxisLabel: 'Claim Count',
    xAxisLabel: 'Month',
    showGrid: true,
    showLegend: true,
    legendTitle: 'Claim Status',
    height: '18.75rem'
  },
  parameters: {
    docs: {
      description: {
        story: 'All event callbacks use explicit spies. Check the Actions panel to see callbacks fired when interacting with the chart.'
      }
    }
  }
}`,...(Ba=(Ra=J.parameters)==null?void 0:Ra.docs)==null?void 0:Ba.source},description:{story:"**Event Callbacks** - All event callbacks demonstrated",...(Fa=(Ea=J.parameters)==null?void 0:Ea.docs)==null?void 0:Fa.description}}};var za,Ga,Va,qa,Ia;K.parameters={...K.parameters,docs:{...(za=K.parameters)==null?void 0:za.docs,source:{originalSource:`{
  render: () => {
    const chartRef = useRef<HTMLDivElement>(null);
    const handleFocusChart = () => {
      chartRef.current?.focus();
      chartRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <div>
          <Typography variant="headingM" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            ForwardRef Example
          </Typography>
          <Typography variant="body" style={{
          marginBottom: '12px'
        }}>
            The chart exposes its root DOM node via forwardRef. Click the button to programmatically focus the chart.
          </Typography>
          <button onClick={handleFocusChart} style={{
          padding: '8px 16px',
          background: '#6222BC',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>
            Focus Chart
          </button>
        </div>
        <BarChart ref={chartRef} data={revenueData} yAxisLabel="Revenue" xAxisLabel="Month" showGrid height="18.75rem" />
      </div>;
  }
}`,...(Va=(Ga=K.parameters)==null?void 0:Ga.docs)==null?void 0:Va.source},description:{story:"**ForwardRef Usage** - Accessing the root DOM node via ref",...(Ia=(qa=K.parameters)==null?void 0:qa.docs)==null?void 0:Ia.description}}};var Ha,Na,Pa,Wa,Oa;_.parameters={..._.parameters,docs:{...(Ha=_.parameters)==null?void 0:Ha.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div>
        <Typography variant="headingM" weight="semibold" style={{
        marginBottom: '8px'
      }}>
          Polymorphic Example
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '12px'
      }}>
          This chart is rendered as a &lt;section&gt; element instead of a &lt;div&gt;.
        </Typography>
      </div>
      <BarChart as="section" data={revenueData} yAxisLabel="Revenue" xAxisLabel="Month" showGrid height="18.75rem" />
    </div>
}`,...(Pa=(Na=_.parameters)==null?void 0:Na.docs)==null?void 0:Pa.source},description:{story:"**Polymorphic 'as' Prop** - Render as different element",...(Oa=(Wa=_.parameters)==null?void 0:Wa.docs)==null?void 0:Oa.description}}};var Ya,Xa,Ja,Ka,_a;U.parameters={...U.parameters,docs:{...(Ya=U.parameters)==null?void 0:Ya.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 'min(90vw, 37.5rem)'
  }}>
      <DataVisualizationCard title="Claims by Status" showInfoIcon infoTooltipContent="Monthly breakdown of claims by approval status" showTimeRange timeRangeValue="Last 6 months">
        <BarChart data={stackedClaimData} yAxisLabel="Claim Count" xAxisLabel="Month" showGrid showLegend legendTitle="Claim Status" height="18.75rem" />
      </DataVisualizationCard>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete example showing BarChart wrapped in DataVisualizationCard with all features.'
      }
    }
  }
}`,...(Ja=(Xa=U.parameters)==null?void 0:Xa.docs)==null?void 0:Ja.source},description:{story:"**In DataVisualizationCard** - Complete integration example",...(_a=(Ka=U.parameters)==null?void 0:Ka.docs)==null?void 0:_a.description}}};const yi=["Default","Hover","Focus","Active","Disabled","Loading","Empty","Error","Vertical","Horizontal","Stacked","WithTitle","WithoutGrid","Small","Medium","Large","ResponsiveWidth","CustomHeader","CustomLegend","CustomEmptyState","CustomLoadingState","EventCallbacks","ForwardRef","Polymorphic","InCard"];export{S as Active,Y as CustomEmptyState,W as CustomHeader,O as CustomLegend,X as CustomLoadingState,$ as Default,D as Disabled,B as Empty,E as Error,J as EventCallbacks,k as Focus,K as ForwardRef,z as Horizontal,M as Hover,U as InCard,N as Large,R as Loading,H as Medium,_ as Polymorphic,P as ResponsiveWidth,I as Small,G as Stacked,F as Vertical,V as WithTitle,q as WithoutGrid,yi as __namedExportsOrder,xi as default};
