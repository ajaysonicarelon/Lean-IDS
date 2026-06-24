import{j as o}from"./jsx-runtime-DSvmvvsx.js";import{r as u}from"./index-B0WjJBI_.js";import{r as J}from"./index-Clv5cdFl.js";import{c as n}from"./styled-components.browser.esm-BIi91Tbq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2UzP9c-.js";const K=n.div`
  position: fixed;
  display: ${({$visible:e})=>e?"flex":"none"};
  flex-direction: column;
  gap: 5px;
  padding: 13px 11px;
  background: #FFFFFF; // gray-50
  border: 1.358px solid #E6E6E6; // gray-300
  border-radius: 12px;
  box-shadow: 0px 2.716px 0.679px rgba(0, 0, 0, 0.08);
  width: 253px;
  pointer-events: none;
  z-index: 9999;
`,Q=n.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #000000; // gray-1000
  white-space: nowrap;
`,Z=n.div`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: #6C6C6C; // gray-700
  width: 100%;
`,s=({visible:e=!1,heading:i,description:t,x:v=0,y:U=0,className:G})=>{const y=o.jsxs(K,{$visible:e,className:G,style:{left:`${v}px`,top:`${U}px`},role:"tooltip","aria-hidden":!e,children:[i&&o.jsx(Q,{children:i}),t&&o.jsx(Z,{children:t})]});return typeof document<"u"?J.createPortal(y,document.body):y};s.__docgenInfo={description:"",methods:[],displayName:"ChartTooltip",props:{visible:{required:!1,tsType:{name:"boolean"},description:"Whether the tooltip is visible",defaultValue:{value:"false",computed:!1}},heading:{required:!1,tsType:{name:"string"},description:"Tooltip heading (metric name)"},description:{required:!1,tsType:{name:"string"},description:"Tooltip description (metric value)"},x:{required:!1,tsType:{name:"number"},description:"X position in pixels",defaultValue:{value:"0",computed:!1}},y:{required:!1,tsType:{name:"number"},description:"Y position in pixels",defaultValue:{value:"0",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const ae={title:"Data Visualization/ChartTooltip",component:s,parameters:{layout:"centered",docs:{description:{component:`
A reusable tooltip component for displaying chart data and contextual information.

**Features:**
- Portal-based rendering (appears on top of all content)
- Fixed positioning (no clipping by parent containers)
- Clean, minimal design matching Figma specifications
- Supports heading and description text
- Fully accessible with ARIA attributes

**Use Cases:**
- Chart segment hover information
- Info icon tooltips
- Data point details
- Contextual help text
        `}}},tags:["autodocs"]},x=n.div`
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F8F8;
  border: 1px solid #D5D5D5;
  border-radius: 8px;
  position: relative;
`,m=n.button`
  padding: 12px 24px;
  background: #6222BC;
  color: white;
  border: none;
  border-radius: 6px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #4F1B9A;
  }
`,ee=n.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #6222BC;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #4F1B9A;
  }
`,h=n.div`
  width: 100px;
  height: 100px;
  background: #E3725F;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #D15E4A;
  }
`,r={render:()=>{const[e,i]=u.useState({visible:!1,x:0,y:0});return o.jsxs(x,{children:[o.jsx(m,{onMouseMove:t=>{i({visible:!0,x:t.clientX+15,y:t.clientY-40})},onMouseLeave:()=>i({visible:!1,x:0,y:0}),children:"Hover Me"}),o.jsx(s,{visible:e.visible,heading:"Revenue",x:e.x,y:e.y})]})}},a={render:()=>{const[e,i]=u.useState({visible:!1,x:0,y:0});return o.jsxs(x,{children:[o.jsx(m,{onMouseMove:t=>{i({visible:!0,x:t.clientX+15,y:t.clientY-40})},onMouseLeave:()=>i({visible:!1,x:0,y:0}),children:"Hover Me"}),o.jsx(s,{visible:e.visible,heading:"Product A",description:"Value: $45,000",x:e.x,y:e.y})]})}},l={render:()=>{const[e,i]=u.useState({visible:!1,x:0,y:0});return o.jsxs(x,{children:[o.jsx(ee,{onClick:t=>{t.stopPropagation(),i(v=>({visible:!v.visible,x:t.clientX+10,y:t.clientY-20}))},children:"i"}),o.jsx(s,{visible:e.visible,heading:"This chart shows revenue distribution by product category",x:e.x,y:e.y})]})}},p={render:()=>{const[e,i]=u.useState({visible:!1,x:0,y:0});return o.jsxs(x,{children:[o.jsxs("div",{style:{display:"flex",gap:"16px"},children:[o.jsx(h,{onMouseMove:t=>{i({visible:!0,x:t.clientX+15,y:t.clientY-40})},onMouseLeave:()=>i({visible:!1,x:0,y:0}),children:"Segment A"}),o.jsx(h,{style:{background:"#1AC2C1"},onMouseMove:t=>{i({visible:!0,x:t.clientX+15,y:t.clientY-40})},onMouseLeave:()=>i({visible:!1,x:0,y:0}),children:"Segment B"})]}),o.jsx(s,{visible:e.visible,heading:"Market Share",description:"35% of total revenue",x:e.x,y:e.y})]})}},c={render:()=>{const[e,i]=u.useState({visible:!1,x:0,y:0});return o.jsxs(x,{children:[o.jsx(m,{onMouseMove:t=>{i({visible:!0,x:t.clientX+15,y:t.clientY-40})},onMouseLeave:()=>i({visible:!1,x:0,y:0}),children:"Hover Me"}),o.jsx(s,{visible:e.visible,heading:"Revenue Distribution Analysis",description:"This chart displays the revenue breakdown across different product categories for the selected time period. Data is updated in real-time.",x:e.x,y:e.y})]})}},d={args:{visible:!0,heading:"Product Revenue",description:"Value: $125,450",x:300,y:200}};var b,f,g,T,C;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <DemoButton onMouseMove={e => {
        setTooltip({
          visible: true,
          x: e.clientX + 15,
          y: e.clientY - 40
        });
      }} onMouseLeave={() => setTooltip({
        visible: false,
        x: 0,
        y: 0
      })}>
          Hover Me
        </DemoButton>
        <ChartTooltip visible={tooltip.visible} heading="Revenue" x={tooltip.x} y={tooltip.y} />
      </DemoContainer>;
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source},description:{story:"Basic tooltip with heading only",...(C=(T=r.parameters)==null?void 0:T.docs)==null?void 0:C.description}}};var M,S,D,w,j;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <DemoButton onMouseMove={e => {
        setTooltip({
          visible: true,
          x: e.clientX + 15,
          y: e.clientY - 40
        });
      }} onMouseLeave={() => setTooltip({
        visible: false,
        x: 0,
        y: 0
      })}>
          Hover Me
        </DemoButton>
        <ChartTooltip visible={tooltip.visible} heading="Product A" description="Value: $45,000" x={tooltip.x} y={tooltip.y} />
      </DemoContainer>;
  }
}`,...(D=(S=a.parameters)==null?void 0:S.docs)==null?void 0:D.source},description:{story:"Tooltip with heading and description",...(j=(w=a.parameters)==null?void 0:w.docs)==null?void 0:j.description}}};var k,A,B,F,I;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <InfoIcon onClick={e => {
        e.stopPropagation();
        setTooltip(prev => ({
          visible: !prev.visible,
          x: e.clientX + 10,
          y: e.clientY - 20
        }));
      }}>
          i
        </InfoIcon>
        <ChartTooltip visible={tooltip.visible} heading="This chart shows revenue distribution by product category" x={tooltip.x} y={tooltip.y} />
      </DemoContainer>;
  }
}`,...(B=(A=l.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:"Info icon tooltip (click to toggle)",...(I=(F=l.parameters)==null?void 0:F.docs)==null?void 0:I.description}}};var E,L,X,Y,V;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <div style={{
        display: 'flex',
        gap: '16px'
      }}>
          <ChartSegment onMouseMove={e => {
          setTooltip({
            visible: true,
            x: e.clientX + 15,
            y: e.clientY - 40
          });
        }} onMouseLeave={() => setTooltip({
          visible: false,
          x: 0,
          y: 0
        })}>
            Segment A
          </ChartSegment>
          <ChartSegment style={{
          background: '#1AC2C1'
        }} onMouseMove={e => {
          setTooltip({
            visible: true,
            x: e.clientX + 15,
            y: e.clientY - 40
          });
        }} onMouseLeave={() => setTooltip({
          visible: false,
          x: 0,
          y: 0
        })}>
            Segment B
          </ChartSegment>
        </div>
        <ChartTooltip visible={tooltip.visible} heading="Market Share" description="35% of total revenue" x={tooltip.x} y={tooltip.y} />
      </DemoContainer>;
  }
}`,...(X=(L=p.parameters)==null?void 0:L.docs)==null?void 0:X.source},description:{story:"Chart segment hover tooltip",...(V=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:V.description}}};var H,P,R,$,z;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <DemoButton onMouseMove={e => {
        setTooltip({
          visible: true,
          x: e.clientX + 15,
          y: e.clientY - 40
        });
      }} onMouseLeave={() => setTooltip({
        visible: false,
        x: 0,
        y: 0
      })}>
          Hover Me
        </DemoButton>
        <ChartTooltip visible={tooltip.visible} heading="Revenue Distribution Analysis" description="This chart displays the revenue breakdown across different product categories for the selected time period. Data is updated in real-time." x={tooltip.x} y={tooltip.y} />
      </DemoContainer>;
  }
}`,...(R=(P=c.parameters)==null?void 0:P.docs)==null?void 0:R.source},description:{story:"Long text tooltip",...(z=($=c.parameters)==null?void 0:$.docs)==null?void 0:z.description}}};var q,_,N,W,O;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    visible: true,
    heading: 'Product Revenue',
    description: 'Value: $125,450',
    x: 300,
    y: 200
  }
}`,...(N=(_=d.parameters)==null?void 0:_.docs)==null?void 0:N.source},description:{story:"Always visible (for testing positioning)",...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.description}}};const le=["Basic","WithDescription","InfoIconTooltip","ChartSegmentHover","LongText","AlwaysVisible"];export{d as AlwaysVisible,r as Basic,p as ChartSegmentHover,l as InfoIconTooltip,c as LongText,a as WithDescription,le as __namedExportsOrder,ae as default};
