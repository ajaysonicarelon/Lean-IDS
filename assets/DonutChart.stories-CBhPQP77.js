import{j as r}from"./jsx-runtime-DSvmvvsx.js";import{r as j,R as nt}from"./index-B0WjJBI_.js";import{c as n}from"./styled-components.browser.esm-BIi91Tbq.js";import{I as st}from"./Icon-BytZhcyh.js";import{T as _}from"./Tooltip-CTS7iy-x.js";import{D as it}from"./DataVisualizationCard-RfKXHVlH.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Clv5cdFl.js";import"./index-B2UzP9c-.js";import"./Select-K-iKucvw.js";import"./InputField-BAALJcA9.js";import"./FieldImportance-finWzFXd.js";import"./HelpingText-ClsYb8vx.js";import"./Checkbox-BdmLAclb.js";import"./RadioButton-BNSL-Rly.js";const ct=n.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: ${({$clickable:t})=>t?"pointer":"default"};
  opacity: ${({$active:t})=>t?1:.5};
  transition: opacity 0.2s ease;
  
  &:hover {
    opacity: ${({$clickable:t,$active:l})=>t&&!l?.7:1};
  }
`,lt=n.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({$color:t})=>t};
  flex-shrink: 0;
`,ut=n.span`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #222222; // gray-900
  white-space: nowrap;
  text-decoration: ${({$active:t})=>t?"none":"line-through"};
`,Je=({color:t,label:l,active:i=!0,onClick:s,className:u})=>{const d=!!s,p=()=>{s&&s()};return r.jsxs(ct,{$active:i,$clickable:d,onClick:p,className:u,type:"button","aria-label":`${l} - ${i?"active":"inactive"}`,"aria-pressed":d?i:void 0,children:[r.jsx(lt,{$color:t}),r.jsx(ut,{$active:i,children:l})]})};Je.__docgenInfo={description:"",methods:[],displayName:"ChartLegend",props:{color:{required:!0,tsType:{name:"string"},description:"Color for the indicator dot"},label:{required:!0,tsType:{name:"string"},description:"Metric label text"},active:{required:!1,tsType:{name:"boolean"},description:"Whether the legend item is active (affects opacity)",defaultValue:{value:"true",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler for toggling metric visibility"},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const dt=n.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`,pt=n.div`
  display: flex;
  align-items: flex-start;
  gap: 4px;
`,mt=n.h4`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: #222222; // gray-900
  margin: 0;
`,ht=n.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #909090; // gray-600
  padding: 0;
  
  &:hover {
    color: #222222;
  }
`,ft=n.div`
  display: flex;
  flex-direction: ${({$layout:t})=>t==="horizontal"?"row":"column"};
  gap: 20px;
  align-items: ${({$layout:t})=>t==="horizontal"?"flex-start":"center"};
  width: 100%;
`,gt=n.div`
  position: relative;
  flex-shrink: 0;
`,vt=n.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Elevance Sans', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 1px;
  color: #222222; // gray-900
  text-align: center;
  pointer-events: none;
`,yt=n.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px 12px;
  align-items: center;
  justify-content: ${({$layout:t})=>t==="horizontal"?"flex-start":"center"};
  width: ${({$layout:t})=>t==="horizontal"?"auto":"100%"};
`,Ct=(t,l)=>{const i=t.reduce((m,o)=>m+o.value,0),s=l/2,u=s*.6,d=s-u;let p=-90;return t.map(m=>{const o=m.value/i,P=o*360,A=p,h=p+P;return p=h,{...m,percentage:o,startAngle:A,endAngle:h,strokeWidth:d,radius:u+d/2}})},z=({title:t,showInfoIcon:l=!1,onInfoClick:i,infoTooltipContent:s,data:u,centerValue:d,showCenterValue:p=!0,layout:m="vertical",size:o=196,onLegendClick:P,className:A})=>{const[h,Ue]=j.useState(new Set(u.map((e,a)=>a))),[f,E]=j.useState({visible:!1,heading:"",description:"",x:0,y:0}),[g,B]=j.useState({visible:!1,x:0,y:0}),Ze=j.useRef(null),et=e=>{P?P(e):Ue(a=>{const c=new Set(a);return c.has(e)?c.delete(e):c.add(e),c})},tt=(e,a)=>{E({visible:!0,heading:a.label,description:`Value: ${a.value}`,x:e.clientX+15,y:e.clientY-40})},rt=()=>{E({visible:!1,heading:"",description:"",x:0,y:0})},at=e=>{if(i&&i(),s){const a=e.currentTarget.getBoundingClientRect();B(c=>({visible:!c.visible,x:a.left,y:a.bottom+10}))}};nt.useEffect(()=>{if(g.visible){const e=()=>{B({visible:!1,x:0,y:0})};return document.addEventListener("click",e),()=>document.removeEventListener("click",e)}},[g.visible]);const q=u.map((e,a)=>({...e,originalIndex:a,value:h.has(a)?e.value:0})),F=Ct(q,o),T=o/2;return r.jsxs(dt,{className:A,children:[t&&r.jsxs(pt,{children:[r.jsx(mt,{children:t}),l&&r.jsx(ht,{onClick:e=>{e.stopPropagation(),at(e)},"aria-label":"More information",children:r.jsx(st,{name:"Info",size:"small"})})]}),s&&r.jsx(_,{visible:g.visible,heading:s,x:g.x,y:g.y,variant:"pointer",pointerPosition:"top"}),r.jsxs(ft,{$layout:m,children:[r.jsxs(gt,{ref:Ze,children:[r.jsx("svg",{width:o,height:o,viewBox:`0 0 ${o} ${o}`,children:F.map((e,a)=>{const c=e.radius,W=2*Math.PI*c,ot=`${e.percentage*W} ${W}`;let K=-90;for(let v=0;v<a;v++)K+=F[v].percentage*360;return r.jsx("circle",{cx:T,cy:T,r:c,fill:"none",stroke:e.color,strokeWidth:e.strokeWidth,strokeDasharray:ot,strokeDashoffset:0,strokeLinecap:"butt",transform:`rotate(${K} ${T} ${T})`,onMouseMove:v=>tt(v,e),onMouseLeave:rt,style:{cursor:"pointer",transition:"stroke-dasharray 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",willChange:"stroke-dasharray, transform"}},a)})}),p&&d&&q.length>0&&r.jsx(vt,{children:d}),r.jsx(_,{visible:f.visible,heading:f.heading,description:f.description,x:f.x,y:f.y,variant:"default"})]}),r.jsx(yt,{$layout:m,children:u.map((e,a)=>r.jsx(Je,{color:e.color,label:e.label,active:h.has(a),onClick:()=>et(a)},a))})]})]})};z.__docgenInfo={description:"",methods:[],displayName:"DonutChart",props:{title:{required:!1,tsType:{name:"string"},description:"Chart title"},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:"Show info icon next to title",defaultValue:{value:"false",computed:!1}},onInfoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Info icon click handler"},data:{required:!0,tsType:{name:"Array",elements:[{name:"DonutChartData"}],raw:"DonutChartData[]"},description:"Array of data points (2-6 metrics recommended)"},centerValue:{required:!1,tsType:{name:"string"},description:"Center KPI value to display"},showCenterValue:{required:!1,tsType:{name:"boolean"},description:"Show center value",defaultValue:{value:"true",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"Layout orientation",defaultValue:{value:"'vertical'",computed:!1}},size:{required:!1,tsType:{name:"number"},description:"Chart size (diameter in pixels)",defaultValue:{value:"196",computed:!1}},onLegendClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Legend click handler (for custom toggle behavior)"},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const Bt={title:"Data Visualization/DonutChart",component:z,parameters:{layout:"padded",docs:{description:{component:"Donut chart visualization component for displaying 2-6 metrics with optional center KPI. Can be used standalone or wrapped in a card container. Based on Figma design."}}},tags:["autodocs"]},wt=[{label:"Product A",value:60,color:"#6222BC"},{label:"Product B",value:40,color:"#E3725F"}],L=[{label:"Product A",value:45,color:"#6222BC"},{label:"Product B",value:30,color:"#E3725F"},{label:"Product C",value:25,color:"#1AC2C1"}],R=[{label:"Product A",value:40,color:"#6222BC"},{label:"Product B",value:25,color:"#E3725F"},{label:"Product C",value:20,color:"#1AC2C1"},{label:"Product D",value:15,color:"#F5C563"}],Qe=[{label:"Product A",value:30,color:"#6222BC"},{label:"Product B",value:25,color:"#E3725F"},{label:"Product C",value:20,color:"#1AC2C1"},{label:"Product D",value:15,color:"#F5C563"},{label:"Product E",value:10,color:"#3E71C2"}],xt=[{label:"Product A",value:25,color:"#6222BC"},{label:"Product B",value:20,color:"#E3725F"},{label:"Product C",value:18,color:"#1AC2C1"},{label:"Product D",value:15,color:"#F5C563"},{label:"Product E",value:12,color:"#3E71C2"},{label:"Product F",value:10,color:"#7AC943"}],y={args:{title:"Revenue Distribution",showInfoIcon:!0,data:wt,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},C={args:{title:"Market Share",showInfoIcon:!0,data:L,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},w={args:{title:"Sales by Category",showInfoIcon:!0,data:R,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},x={args:{title:"Product Performance",showInfoIcon:!0,data:Qe,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},b={args:{title:"Regional Sales",showInfoIcon:!0,data:xt,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},I={args:{title:"Revenue Breakdown",showInfoIcon:!0,data:R,centerValue:"$3m",showCenterValue:!0,layout:"horizontal"}},V={args:{title:"Distribution Analysis",showInfoIcon:!0,data:L,showCenterValue:!1,layout:"vertical"}},D={args:{data:L,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},$={args:{title:"Simple Chart",showInfoIcon:!1,data:L,centerValue:"$3m",showCenterValue:!0,layout:"vertical"}},M={args:{title:"Large Donut Chart",showInfoIcon:!0,data:R,centerValue:"$5.2m",showCenterValue:!0,layout:"vertical",size:250}},S={render:()=>r.jsx("div",{style:{width:"400px"},children:r.jsx(z,{title:"Interactive Chart (Click Legends)",showInfoIcon:!0,data:Qe,centerValue:"$3m",showCenterValue:!0,layout:"vertical"})})},k={render:()=>r.jsx("div",{style:{width:"500px"},children:r.jsx(it,{title:"Revenue Distribution",showInfoIcon:!0,infoTooltipContent:"Revenue breakdown by product category",showTimeRange:!0,timeRangeValue:"Last 7 days",children:r.jsx(z,{data:R,centerValue:"$3m",showCenterValue:!0,layout:"vertical"})})})};var N,H,O,X,Y;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    title: 'Revenue Distribution',
    showInfoIcon: true,
    data: twoMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(O=(H=y.parameters)==null?void 0:H.docs)==null?void 0:O.source},description:{story:"2 Metrics - Vertical layout with center KPI",...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.description}}};var G,J,Q,U,Z;C.parameters={...C.parameters,docs:{...(G=C.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Market Share',
    showInfoIcon: true,
    data: threeMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(Q=(J=C.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"3 Metrics - Vertical layout with center KPI",...(Z=(U=C.parameters)==null?void 0:U.docs)==null?void 0:Z.description}}};var ee,te,re,ae,oe;w.parameters={...w.parameters,docs:{...(ee=w.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    title: 'Sales by Category',
    showInfoIcon: true,
    data: fourMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source},description:{story:"4 Metrics - Vertical layout with center KPI",...(oe=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:oe.description}}};var ne,se,ie,ce,le;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    title: 'Product Performance',
    showInfoIcon: true,
    data: fiveMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source},description:{story:"5 Metrics - Vertical layout with center KPI",...(le=(ce=x.parameters)==null?void 0:ce.docs)==null?void 0:le.description}}};var ue,de,pe,me,he;b.parameters={...b.parameters,docs:{...(ue=b.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    title: 'Regional Sales',
    showInfoIcon: true,
    data: sixMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(pe=(de=b.parameters)==null?void 0:de.docs)==null?void 0:pe.source},description:{story:"6 Metrics - Vertical layout with center KPI",...(he=(me=b.parameters)==null?void 0:me.docs)==null?void 0:he.description}}};var fe,ge,ve,ye,Ce;I.parameters={...I.parameters,docs:{...(fe=I.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    title: 'Revenue Breakdown',
    showInfoIcon: true,
    data: fourMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'horizontal'
  }
}`,...(ve=(ge=I.parameters)==null?void 0:ge.docs)==null?void 0:ve.source},description:{story:"Horizontal layout - Chart on left, legends on right",...(Ce=(ye=I.parameters)==null?void 0:ye.docs)==null?void 0:Ce.description}}};var we,xe,be,Ie,Ve;V.parameters={...V.parameters,docs:{...(we=V.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    title: 'Distribution Analysis',
    showInfoIcon: true,
    data: threeMetricsData,
    showCenterValue: false,
    layout: 'vertical'
  }
}`,...(be=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:be.source},description:{story:"Without center value",...(Ve=(Ie=V.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.description}}};var De,$e,Me,Se,ke;D.parameters={...D.parameters,docs:{...(De=D.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    data: threeMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(Me=($e=D.parameters)==null?void 0:$e.docs)==null?void 0:Me.source},description:{story:"Without title",...(ke=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:ke.description}}};var Pe,Te,je,ze,Le;$.parameters={...$.parameters,docs:{...(Pe=$.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    title: 'Simple Chart',
    showInfoIcon: false,
    data: threeMetricsData,
    centerValue: '$3m',
    showCenterValue: true,
    layout: 'vertical'
  }
}`,...(je=(Te=$.parameters)==null?void 0:Te.docs)==null?void 0:je.source},description:{story:"Without info icon",...(Le=(ze=$.parameters)==null?void 0:ze.docs)==null?void 0:Le.description}}};var Re,Ae,Ee,Be,qe;M.parameters={...M.parameters,docs:{...(Re=M.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    title: 'Large Donut Chart',
    showInfoIcon: true,
    data: fourMetricsData,
    centerValue: '$5.2m',
    showCenterValue: true,
    layout: 'vertical',
    size: 250
  }
}`,...(Ee=(Ae=M.parameters)==null?void 0:Ae.docs)==null?void 0:Ee.source},description:{story:"Custom size - Larger donut",...(qe=(Be=M.parameters)==null?void 0:Be.docs)==null?void 0:qe.description}}};var Fe,We,Ke,_e,Ne;S.parameters={...S.parameters,docs:{...(Fe=S.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>
      <DonutChart title="Interactive Chart (Click Legends)" showInfoIcon={true} data={fiveMetricsData} centerValue="$3m" showCenterValue={true} layout="vertical" />
    </div>
}`,...(Ke=(We=S.parameters)==null?void 0:We.docs)==null?void 0:Ke.source},description:{story:`Interactive - Click legends to toggle metrics
This story demonstrates the smooth circular animation when toggling segments`,...(Ne=(_e=S.parameters)==null?void 0:_e.docs)==null?void 0:Ne.description}}};var He,Oe,Xe,Ye,Ge;k.parameters={...k.parameters,docs:{...(He=k.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '500px'
  }}>
      <DataVisualizationCard title="Revenue Distribution" showInfoIcon={true} infoTooltipContent="Revenue breakdown by product category" showTimeRange={true} timeRangeValue="Last 7 days">
        <DonutChart data={fourMetricsData} centerValue="$3m" showCenterValue={true} layout="vertical" />
      </DataVisualizationCard>
    </div>
}`,...(Xe=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:Xe.source},description:{story:`Donut Chart in Card Container (Example)
Shows how to wrap the chart in DataVisualizationCard with Select component and date ranges`,...(Ge=(Ye=k.parameters)==null?void 0:Ye.docs)==null?void 0:Ge.description}}};const qt=["TwoMetrics","ThreeMetrics","FourMetrics","FiveMetrics","SixMetrics","HorizontalLayout","WithoutCenterValue","WithoutTitle","WithoutInfoIcon","CustomSize","Interactive","InCard"];export{M as CustomSize,x as FiveMetrics,w as FourMetrics,I as HorizontalLayout,k as InCard,S as Interactive,b as SixMetrics,C as ThreeMetrics,y as TwoMetrics,V as WithoutCenterValue,$ as WithoutInfoIcon,D as WithoutTitle,qt as __namedExportsOrder,Bt as default};
