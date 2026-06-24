import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{c as r}from"./styled-components.browser.esm-BIi91Tbq.js";import{I as C}from"./Icon-BytZhcyh.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";const S=r.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid;
  border-radius: 8px;
  gap: ${({$variant:a})=>a==="set"?"24px":"8px"};
  
  ${({$variant:a})=>a==="filled"?`
        background: #6222BC; // primary-400
        border-color: #180336; // primary-900
      `:`
      background: #FFFFFF;
      border-color: #D5D5D5; // gray-400
    `}
`,Ba=r.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`,Va=r.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: ${({$filled:a})=>a?"#CBB5E9":"#909090"}; // primary-200 : gray-600
  margin: 0;
`,Sa=r.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 38px;
  letter-spacing: 1px;
  color: ${({$filled:a})=>a?"#FFFFFF":"#222222"}; // white : gray-900
  margin: 0;
`,Na=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Ma=r.div`
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
  
  ${({$type:a})=>a==="positive"?`
        background: #E7F3E6; // green-100
        color: #108808; // green-500
      `:a==="negative"?`
        background: #FBE7EC; // red-100
        color: #D2093C; // red-500
      `:`
      background: #F8F8F8; // gray-200
      color: #464646; // gray-800
    `}
`,Fa=r.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: 1px;
  color: #909090; // gray-600
  margin: 0;
`,Aa=r.div`
  width: 100%;
  height: 4px;
  background: #EFE6F8; // primary-100
  border-radius: 24px;
  overflow: hidden;
`,ja=r.div`
  height: 100%;
  width: ${({$value:a})=>a}%;
  background: #6222BC; // primary-400
  border-radius: 999px;
  transition: width 0.3s ease;
`,Pa=r.button`
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
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
  
  ${({$type:a})=>a==="warning"?`
        background: #FFEBB8; // yellow-200
        border-color: #99710A; // yellow-700
        color: #99710A;
      `:a==="error"?`
        background: #FBE7EC; // red-100
        border-color: #D2093C; // red-500
        color: #D2093C;
      `:`
      background: #E8F0F9; // blue-100
      border-color: #1666BE; // blue-500
      color: #1666BE;
    `}
`,Ia=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,Da=r.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,ka=r.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  color: #222222; // gray-900
  margin: 0;
`,Ea=r.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #909090; // gray-600
  
  &:hover {
    color: #222222;
  }
`,$a=r.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 4px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #222222;
  cursor: pointer;
  
  &:hover {
    border-color: #909090;
  }
`,qa=r.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  width: 100%;
`,Ha=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-radius: 6px;
  background: ${({$highlighted:a})=>a?"#F8F7FB":"transparent"}; // primary-50
`,Oa=r.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #222222; // gray-900
  margin: 0;
`,Ra=r.p`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: #5009B5; // primary-500
  margin: 0;
`,s=({variant:a="basic",metricName:na="Metric Name",value:ia="8,888",showChange:ta=!0,changeValue:oa="+56",changeType:ca="positive",comparisonText:la="vs last week",showProgressBar:pa=!1,progressValue:da=60,showActionChip:ua=!1,actionText:ha="Need Action",actionType:ma="warning",onActionClick:ga,sectionHeading:va="Section Heading",showInfoIcon:fa=!0,onInfoClick:wa,showDropdown:ya=!0,dropdownValue:xa="Last 7 days",onDropdownChange:Ca,metrics:Ta=[],className:B})=>{const V=a==="filled";return a==="set"?e.jsxs(S,{$variant:"set",className:B,children:[e.jsxs(Ia,{children:[e.jsxs(Da,{children:[e.jsx(ka,{children:va}),fa&&e.jsx(Ea,{onClick:wa,children:e.jsx(C,{name:"Info",size:"small"})})]}),ya&&e.jsxs($a,{onClick:Ca,children:[e.jsx("span",{children:xa}),e.jsx(C,{name:"ExpandMore",size:"small"})]})]}),e.jsx(qa,{children:Ta.map((b,ba)=>e.jsxs(Ha,{$highlighted:b.highlighted,children:[e.jsx(Oa,{children:b.label}),e.jsx(Ra,{children:b.value})]},ba))})]}):e.jsxs(S,{$variant:a,className:B,children:[e.jsxs(Ba,{children:[e.jsx(Va,{$filled:V,children:na}),e.jsx(Sa,{$filled:V,children:ia})]}),ta&&e.jsxs(Na,{children:[e.jsx(Ma,{$type:ca,children:oa}),e.jsx(Fa,{children:la})]}),pa&&e.jsx(Aa,{children:e.jsx(ja,{$value:da})}),ua&&e.jsxs(Pa,{$type:ma,onClick:ga,children:[e.jsx(C,{name:"Warning",size:"small"}),e.jsx("span",{children:ha}),e.jsx(C,{name:"ArrowForward",size:"small"})]})]})};s.__docgenInfo={description:"",methods:[],displayName:"MetricCard",props:{variant:{required:!1,tsType:{name:"union",raw:"'basic' | 'filled' | 'set'",elements:[{name:"literal",value:"'basic'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'set'"}]},description:"Card variant",defaultValue:{value:"'basic'",computed:!1}},metricName:{required:!1,tsType:{name:"string"},description:"Metric name/label",defaultValue:{value:"'Metric Name'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Metric value",defaultValue:{value:"'8,888'",computed:!1}},showChange:{required:!1,tsType:{name:"boolean"},description:"Show change badge",defaultValue:{value:"true",computed:!1}},changeValue:{required:!1,tsType:{name:"string"},description:'Change value (e.g., "+56" or "-12")',defaultValue:{value:"'+56'",computed:!1}},changeType:{required:!1,tsType:{name:"union",raw:"'positive' | 'negative' | 'neutral'",elements:[{name:"literal",value:"'positive'"},{name:"literal",value:"'negative'"},{name:"literal",value:"'neutral'"}]},description:"Change type for badge color",defaultValue:{value:"'positive'",computed:!1}},comparisonText:{required:!1,tsType:{name:"string"},description:'Comparison text (e.g., "vs last week")',defaultValue:{value:"'vs last week'",computed:!1}},showProgressBar:{required:!1,tsType:{name:"boolean"},description:"Show progress bar",defaultValue:{value:"false",computed:!1}},progressValue:{required:!1,tsType:{name:"number"},description:"Progress percentage (0-100)",defaultValue:{value:"60",computed:!1}},showActionChip:{required:!1,tsType:{name:"boolean"},description:"Show action chip",defaultValue:{value:"false",computed:!1}},actionText:{required:!1,tsType:{name:"string"},description:"Action chip text",defaultValue:{value:"'Need Action'",computed:!1}},actionType:{required:!1,tsType:{name:"union",raw:"'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"Action chip type",defaultValue:{value:"'warning'",computed:!1}},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action chip click handler"},sectionHeading:{required:!1,tsType:{name:"string"},description:'Section heading (for "set" variant)',defaultValue:{value:"'Section Heading'",computed:!1}},showInfoIcon:{required:!1,tsType:{name:"boolean"},description:"Show info icon next to heading",defaultValue:{value:"true",computed:!1}},onInfoClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Info icon click handler"},showDropdown:{required:!1,tsType:{name:"boolean"},description:'Show dropdown (for "set" variant)',defaultValue:{value:"true",computed:!1}},dropdownValue:{required:!1,tsType:{name:"string"},description:"Dropdown value",defaultValue:{value:"'Last 7 days'",computed:!1}},onDropdownChange:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Dropdown change handler"},metrics:{required:!1,tsType:{name:"Array",elements:[{name:"MetricData"}],raw:"MetricData[]"},description:'Array of metrics (for "set" variant)',defaultValue:{value:"[]",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const Ka={title:"Data Visualization/MetricCard",component:s,parameters:{layout:"padded",docs:{description:{component:"A data visualization component for displaying KPIs and metrics in dashboards. Based on Figma design."}}},tags:["autodocs"]},T=[{label:"Metric A",value:"48"},{label:"Metric B",value:"$12,573,324.89"},{label:"Metric C",value:"12"},{label:"Metric D",value:"$677.83",highlighted:!0},{label:"Metric E",value:"36"},{label:"Metric F",value:"$12,500.00"}],n={args:{variant:"basic",metricName:"Total Users",value:"8,888",showChange:!0,changeValue:"+56",changeType:"positive",comparisonText:"vs last week",showProgressBar:!0,progressValue:60,showActionChip:!0,actionText:"Need Action",actionType:"warning"}},i={args:{variant:"basic",metricName:"Revenue",value:"$125,450",showChange:!0,changeValue:"+12.5%",changeType:"positive",comparisonText:"vs last month",showProgressBar:!1,showActionChip:!1}},t={args:{variant:"basic",metricName:"Bounce Rate",value:"42%",showChange:!0,changeValue:"-8",changeType:"negative",comparisonText:"vs last week",showProgressBar:!1,showActionChip:!1}},o={args:{variant:"basic",metricName:"Active Sessions",value:"1,234",showChange:!0,changeValue:"0",changeType:"neutral",comparisonText:"vs yesterday",showProgressBar:!1,showActionChip:!1}},c={args:{variant:"basic",metricName:"Goal Completion",value:"75%",showChange:!0,changeValue:"+15",changeType:"positive",comparisonText:"vs target",showProgressBar:!0,progressValue:75,showActionChip:!1}},l={args:{variant:"basic",metricName:"Pending Tasks",value:"23",showChange:!0,changeValue:"+5",changeType:"positive",comparisonText:"vs yesterday",showProgressBar:!1,showActionChip:!0,actionText:"Need Action",actionType:"warning"}},p={args:{variant:"basic",metricName:"Failed Requests",value:"12",showChange:!0,changeValue:"+3",changeType:"negative",comparisonText:"vs last hour",showProgressBar:!1,showActionChip:!0,actionText:"Critical",actionType:"error"}},d={args:{variant:"basic",metricName:"New Updates",value:"5",showChange:!1,showProgressBar:!1,showActionChip:!0,actionText:"View Details",actionType:"info"}},u={args:{variant:"basic",metricName:"Total Orders",value:"1,456",showChange:!1,showProgressBar:!1,showActionChip:!1}},h={args:{variant:"filled",metricName:"Total Revenue",value:"$8,888",showChange:!0,changeValue:"+56",changeType:"positive",comparisonText:"vs last week",showProgressBar:!1,showActionChip:!1}},m={args:{variant:"filled",metricName:"Priority Metric",value:"12,345",showChange:!0,changeValue:"+25%",changeType:"positive",comparisonText:"vs last month",showProgressBar:!1,showActionChip:!1}},g={args:{variant:"set",sectionHeading:"Financial Overview",showInfoIcon:!0,showDropdown:!0,dropdownValue:"Last 7 days",metrics:T}},v={args:{variant:"set",sectionHeading:"Performance Metrics",showInfoIcon:!0,showDropdown:!1,metrics:T}},f={args:{variant:"set",sectionHeading:"Sales Dashboard",showInfoIcon:!1,showDropdown:!0,dropdownValue:"Last 30 days",metrics:T}},w={args:{variant:"set",sectionHeading:"Quick Stats",showInfoIcon:!1,showDropdown:!1,metrics:[{label:"Users",value:"1,234"},{label:"Revenue",value:"$45,678"},{label:"Orders",value:"567"},{label:"Conversion",value:"3.2%"}]}},y={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px",maxWidth:"1200px"},children:[e.jsx(s,{variant:"basic",metricName:"Total Users",value:"8,888",showChange:!0,changeValue:"+56",changeType:"positive",comparisonText:"vs last week"}),e.jsx(s,{variant:"filled",metricName:"Revenue",value:"$125,450",showChange:!0,changeValue:"+12.5%",changeType:"positive",comparisonText:"vs last month"}),e.jsx(s,{variant:"basic",metricName:"Active Sessions",value:"1,234",showChange:!0,changeValue:"+8",changeType:"positive",comparisonText:"vs yesterday",showProgressBar:!0,progressValue:65}),e.jsx("div",{style:{gridColumn:"1 / -1"},children:e.jsx(s,{variant:"set",sectionHeading:"Financial Overview",showInfoIcon:!0,showDropdown:!0,dropdownValue:"Last 7 days",metrics:T})})]})},x={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"16px"},children:[e.jsx(s,{variant:"basic",metricName:"Total Revenue",value:"$12,573,324.89",showChange:!0,changeValue:"+2.3M",changeType:"positive",comparisonText:"vs last quarter"}),e.jsx(s,{variant:"basic",metricName:"Page Views",value:"1.2M",showChange:!0,changeValue:"+156K",changeType:"positive",comparisonText:"vs last month"}),e.jsx(s,{variant:"basic",metricName:"Conversion Rate",value:"3.45%",showChange:!0,changeValue:"+0.23%",changeType:"positive",comparisonText:"vs average"})]})};var N,M,F,A,j;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Total Users',
    value: '8,888',
    showChange: true,
    changeValue: '+56',
    changeType: 'positive',
    comparisonText: 'vs last week',
    showProgressBar: true,
    progressValue: 60,
    showActionChip: true,
    actionText: 'Need Action',
    actionType: 'warning'
  }
}`,...(F=(M=n.parameters)==null?void 0:M.docs)==null?void 0:F.source},description:{story:"Basic metric card with all features",...(j=(A=n.parameters)==null?void 0:A.docs)==null?void 0:j.description}}};var P,I,D,k,E;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Revenue',
    value: '$125,450',
    showChange: true,
    changeValue: '+12.5%',
    changeType: 'positive',
    comparisonText: 'vs last month',
    showProgressBar: false,
    showActionChip: false
  }
}`,...(D=(I=i.parameters)==null?void 0:I.docs)==null?void 0:D.source},description:{story:"Basic card with positive change",...(E=(k=i.parameters)==null?void 0:k.docs)==null?void 0:E.description}}};var $,q,H,O,R;t.parameters={...t.parameters,docs:{...($=t.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Bounce Rate',
    value: '42%',
    showChange: true,
    changeValue: '-8',
    changeType: 'negative',
    comparisonText: 'vs last week',
    showProgressBar: false,
    showActionChip: false
  }
}`,...(H=(q=t.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:"Basic card with negative change",...(R=(O=t.parameters)==null?void 0:O.docs)==null?void 0:R.description}}};var z,W,L,U,_;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Active Sessions',
    value: '1,234',
    showChange: true,
    changeValue: '0',
    changeType: 'neutral',
    comparisonText: 'vs yesterday',
    showProgressBar: false,
    showActionChip: false
  }
}`,...(L=(W=o.parameters)==null?void 0:W.docs)==null?void 0:L.source},description:{story:"Basic card with neutral change",...(_=(U=o.parameters)==null?void 0:U.docs)==null?void 0:_.description}}};var G,K,Q,J,X;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Goal Completion',
    value: '75%',
    showChange: true,
    changeValue: '+15',
    changeType: 'positive',
    comparisonText: 'vs target',
    showProgressBar: true,
    progressValue: 75,
    showActionChip: false
  }
}`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source},description:{story:"Basic card with progress bar",...(X=(J=c.parameters)==null?void 0:J.docs)==null?void 0:X.description}}};var Y,Z,ee,ae,re;l.parameters={...l.parameters,docs:{...(Y=l.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Pending Tasks',
    value: '23',
    showChange: true,
    changeValue: '+5',
    changeType: 'positive',
    comparisonText: 'vs yesterday',
    showProgressBar: false,
    showActionChip: true,
    actionText: 'Need Action',
    actionType: 'warning'
  }
}`,...(ee=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Basic card with warning action chip",...(re=(ae=l.parameters)==null?void 0:ae.docs)==null?void 0:re.description}}};var se,ne,ie,te,oe;p.parameters={...p.parameters,docs:{...(se=p.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Failed Requests',
    value: '12',
    showChange: true,
    changeValue: '+3',
    changeType: 'negative',
    comparisonText: 'vs last hour',
    showProgressBar: false,
    showActionChip: true,
    actionText: 'Critical',
    actionType: 'error'
  }
}`,...(ie=(ne=p.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"Basic card with error action chip",...(oe=(te=p.parameters)==null?void 0:te.docs)==null?void 0:oe.description}}};var ce,le,pe,de,ue;d.parameters={...d.parameters,docs:{...(ce=d.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'New Updates',
    value: '5',
    showChange: false,
    showProgressBar: false,
    showActionChip: true,
    actionText: 'View Details',
    actionType: 'info'
  }
}`,...(pe=(le=d.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:"Basic card with info action chip",...(ue=(de=d.parameters)==null?void 0:de.docs)==null?void 0:ue.description}}};var he,me,ge,ve,fe;u.parameters={...u.parameters,docs:{...(he=u.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    variant: 'basic',
    metricName: 'Total Orders',
    value: '1,456',
    showChange: false,
    showProgressBar: false,
    showActionChip: false
  }
}`,...(ge=(me=u.parameters)==null?void 0:me.docs)==null?void 0:ge.source},description:{story:"Basic card minimal (no extras)",...(fe=(ve=u.parameters)==null?void 0:ve.docs)==null?void 0:fe.description}}};var we,ye,xe,Ce,Te;h.parameters={...h.parameters,docs:{...(we=h.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    metricName: 'Total Revenue',
    value: '$8,888',
    showChange: true,
    changeValue: '+56',
    changeType: 'positive',
    comparisonText: 'vs last week',
    showProgressBar: false,
    showActionChip: false
  }
}`,...(xe=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:xe.source},description:{story:"Filled variant (highlighted card)",...(Te=(Ce=h.parameters)==null?void 0:Ce.docs)==null?void 0:Te.description}}};var be,Be,Ve,Se,Ne;m.parameters={...m.parameters,docs:{...(be=m.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    variant: 'filled',
    metricName: 'Priority Metric',
    value: '12,345',
    showChange: true,
    changeValue: '+25%',
    changeType: 'positive',
    comparisonText: 'vs last month',
    showProgressBar: false,
    showActionChip: false
  }
}`,...(Ve=(Be=m.parameters)==null?void 0:Be.docs)==null?void 0:Ve.source},description:{story:"Filled variant with all features",...(Ne=(Se=m.parameters)==null?void 0:Se.docs)==null?void 0:Ne.description}}};var Me,Fe,Ae,je,Pe;g.parameters={...g.parameters,docs:{...(Me=g.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    variant: 'set',
    sectionHeading: 'Financial Overview',
    showInfoIcon: true,
    showDropdown: true,
    dropdownValue: 'Last 7 days',
    metrics: sampleMetrics
  }
}`,...(Ae=(Fe=g.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source},description:{story:"Set of metrics variant",...(Pe=(je=g.parameters)==null?void 0:je.docs)==null?void 0:Pe.description}}};var Ie,De,ke,Ee,$e;v.parameters={...v.parameters,docs:{...(Ie=v.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    variant: 'set',
    sectionHeading: 'Performance Metrics',
    showInfoIcon: true,
    showDropdown: false,
    metrics: sampleMetrics
  }
}`,...(ke=(De=v.parameters)==null?void 0:De.docs)==null?void 0:ke.source},description:{story:"Set of metrics without dropdown",...($e=(Ee=v.parameters)==null?void 0:Ee.docs)==null?void 0:$e.description}}};var qe,He,Oe,Re,ze;f.parameters={...f.parameters,docs:{...(qe=f.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    variant: 'set',
    sectionHeading: 'Sales Dashboard',
    showInfoIcon: false,
    showDropdown: true,
    dropdownValue: 'Last 30 days',
    metrics: sampleMetrics
  }
}`,...(Oe=(He=f.parameters)==null?void 0:He.docs)==null?void 0:Oe.source},description:{story:"Set of metrics without info icon",...(ze=(Re=f.parameters)==null?void 0:Re.docs)==null?void 0:ze.description}}};var We,Le,Ue,_e,Ge;w.parameters={...w.parameters,docs:{...(We=w.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    variant: 'set',
    sectionHeading: 'Quick Stats',
    showInfoIcon: false,
    showDropdown: false,
    metrics: [{
      label: 'Users',
      value: '1,234'
    }, {
      label: 'Revenue',
      value: '$45,678'
    }, {
      label: 'Orders',
      value: '567'
    }, {
      label: 'Conversion',
      value: '3.2%'
    }]
  }
}`,...(Ue=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:Ue.source},description:{story:"Set of metrics minimal",...(Ge=(_e=w.parameters)==null?void 0:_e.docs)==null?void 0:Ge.description}}};var Ke,Qe,Je,Xe,Ye;y.parameters={...y.parameters,docs:{...(Ke=y.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    maxWidth: '1200px'
  }}>
      <MetricCard variant="basic" metricName="Total Users" value="8,888" showChange={true} changeValue="+56" changeType="positive" comparisonText="vs last week" />
      <MetricCard variant="filled" metricName="Revenue" value="$125,450" showChange={true} changeValue="+12.5%" changeType="positive" comparisonText="vs last month" />
      <MetricCard variant="basic" metricName="Active Sessions" value="1,234" showChange={true} changeValue="+8" changeType="positive" comparisonText="vs yesterday" showProgressBar={true} progressValue={65} />
      <div style={{
      gridColumn: '1 / -1'
    }}>
        <MetricCard variant="set" sectionHeading="Financial Overview" showInfoIcon={true} showDropdown={true} dropdownValue="Last 7 days" metrics={sampleMetrics} />
      </div>
    </div>
}`,...(Je=(Qe=y.parameters)==null?void 0:Qe.docs)==null?void 0:Je.source},description:{story:"Dashboard example with multiple cards",...(Ye=(Xe=y.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.description}}};var Ze,ea,aa,ra,sa;x.parameters={...x.parameters,docs:{...(Ze=x.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px'
  }}>
      <MetricCard variant="basic" metricName="Total Revenue" value="$12,573,324.89" showChange={true} changeValue="+2.3M" changeType="positive" comparisonText="vs last quarter" />
      <MetricCard variant="basic" metricName="Page Views" value="1.2M" showChange={true} changeValue="+156K" changeType="positive" comparisonText="vs last month" />
      <MetricCard variant="basic" metricName="Conversion Rate" value="3.45%" showChange={true} changeValue="+0.23%" changeType="positive" comparisonText="vs average" />
    </div>
}`,...(aa=(ea=x.parameters)==null?void 0:ea.docs)==null?void 0:aa.source},description:{story:"Large numbers formatting",...(sa=(ra=x.parameters)==null?void 0:ra.docs)==null?void 0:sa.description}}};const Qa=["Basic","BasicPositiveChange","BasicNegativeChange","BasicNeutralChange","BasicWithProgress","BasicWithWarningChip","BasicWithErrorChip","BasicWithInfoChip","BasicMinimal","Filled","FilledWithAllFeatures","SetOfMetrics","SetOfMetricsNoDropdown","SetOfMetricsNoInfo","SetOfMetricsMinimal","DashboardExample","LargeNumbers"];export{n as Basic,u as BasicMinimal,t as BasicNegativeChange,o as BasicNeutralChange,i as BasicPositiveChange,p as BasicWithErrorChip,d as BasicWithInfoChip,c as BasicWithProgress,l as BasicWithWarningChip,y as DashboardExample,h as Filled,m as FilledWithAllFeatures,x as LargeNumbers,g as SetOfMetrics,w as SetOfMetricsMinimal,v as SetOfMetricsNoDropdown,f as SetOfMetricsNoInfo,Qa as __namedExportsOrder,Ka as default};
