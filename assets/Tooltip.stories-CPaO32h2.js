import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as a}from"./index-B0WjJBI_.js";import{T as s}from"./Tooltip-CTS7iy-x.js";import{c as m}from"./styled-components.browser.esm-BIi91Tbq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Clv5cdFl.js";import"./index-B2UzP9c-.js";const xe={title:"Components/Tooltip",component:s,parameters:{layout:"centered",docs:{description:{component:`
A universal tooltip component for displaying contextual information.

**Two Variants:**
- **default**: Rectangular tooltip (for chart hovers, data points)
- **pointer**: Tooltip with triangular pointer (for info icons, help text)

**Features:**
- Portal-based rendering (appears on top of all content)
- Fixed positioning (no clipping by parent containers)
- Four pointer positions: top, bottom, left, right
- Clean, minimal design matching Figma specifications
- Fully accessible with ARIA attributes

**Use Cases:**
- Info icon tooltips (use pointer variant)
- Chart segment hover information (use default variant)
- Data point details
- Contextual help text
        `}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","pointer"],description:"Tooltip variant"},pointerPosition:{control:"select",options:["top","bottom","left","right"],description:"Position of the pointer triangle (only for pointer variant)"}}},l=m.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F8F8;
  border: 1px solid #D5D5D5;
  border-radius: 8px;
  position: relative;
`;m.button`
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
`;const f=m.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #6222BC;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #4F1B9A;
  }
`,se=m.div`
  width: 120px;
  height: 120px;
  background: #E3725F;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #D15E4A;
  }
`,p={render:()=>{const[t,n]=a.useState({visible:!1,x:0,y:0});return e.jsxs(l,{children:[e.jsx(se,{onMouseMove:o=>{n({visible:!0,x:o.clientX+15,y:o.clientY-40})},onMouseLeave:()=>n({visible:!1,x:0,y:0}),children:"Hover Me"}),e.jsx(s,{visible:t.visible,heading:"Product A",description:"Value: $45,000 (35%)",x:t.x,y:t.y,variant:"default"})]})}},c={render:()=>{const[t,n]=a.useState({visible:!1,x:0,y:0});return e.jsxs(l,{children:[e.jsx(f,{onClick:o=>{o.stopPropagation();const i=o.currentTarget.getBoundingClientRect();n(r=>({visible:!r.visible,x:i.left,y:i.bottom+10}))},children:"i"}),e.jsx(s,{visible:t.visible,heading:"This chart shows revenue distribution by product category for the selected time period",x:t.x,y:t.y,variant:"pointer",pointerPosition:"top"})]})}},d={render:()=>{const[t,n]=a.useState({visible:!1,x:0,y:0});return e.jsxs(l,{children:[e.jsx(f,{onClick:o=>{o.stopPropagation();const i=o.currentTarget.getBoundingClientRect();n(r=>({visible:!r.visible,x:i.left+i.width/2-126.5,y:i.top-90}))},children:"i"}),e.jsx(s,{visible:t.visible,heading:"Click the info icon to toggle this tooltip",x:t.x,y:t.y,variant:"pointer",pointerPosition:"bottom"})]})}},u={render:()=>{const[t,n]=a.useState({visible:!1,x:0,y:0});return e.jsxs(l,{children:[e.jsx(f,{onClick:o=>{o.stopPropagation();const i=o.currentTarget.getBoundingClientRect();n(r=>({visible:!r.visible,x:i.right+10,y:i.top+i.height/2-40}))},children:"i"}),e.jsx(s,{visible:t.visible,heading:"Tooltip with pointer on the left side",x:t.x,y:t.y,variant:"pointer",pointerPosition:"left"})]})}},v={render:()=>{const[t,n]=a.useState({visible:!1,x:0,y:0});return e.jsxs(l,{children:[e.jsx(f,{onClick:o=>{o.stopPropagation();const i=o.currentTarget.getBoundingClientRect();n(r=>({visible:!r.visible,x:i.left-263,y:i.top+i.height/2-40}))},children:"i"}),e.jsx(s,{visible:t.visible,heading:"Tooltip with pointer on the right side",x:t.x,y:t.y,variant:"pointer",pointerPosition:"right"})]})}},g={render:()=>{const[t,n]=a.useState({visible:!1,x:0,y:0}),[o,i]=a.useState({visible:!1,x:0,y:0});return e.jsxs(l,{children:[e.jsxs("div",{style:{display:"flex",gap:"100px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:{marginBottom:"16px",fontFamily:"Elevance Sans",fontSize:"14px",color:"#222"},children:"Default (Hover)"}),e.jsx(se,{style:{width:"100px",height:"100px"},onMouseMove:r=>{n({visible:!0,x:r.clientX+15,y:r.clientY-40})},onMouseLeave:()=>n({visible:!1,x:0,y:0}),children:"Chart"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:{marginBottom:"16px",fontFamily:"Elevance Sans",fontSize:"14px",color:"#222"},children:"Pointer (Click)"}),e.jsx(f,{onClick:r=>{r.stopPropagation();const y=r.currentTarget.getBoundingClientRect();i(ae=>({visible:!ae.visible,x:y.left,y:y.bottom+10}))},children:"i"})]})]}),e.jsx(s,{visible:t.visible,heading:"Chart Data",description:"Value: $125,000",x:t.x,y:t.y,variant:"default"}),e.jsx(s,{visible:o.visible,heading:"This is an info tooltip with a pointer triangle",x:o.x,y:o.y,variant:"pointer",pointerPosition:"top"})]})}},x={args:{visible:!0,heading:"Product Revenue",description:"Value: $125,450 (42%)",x:300,y:200,variant:"default"}},h={args:{visible:!0,heading:"This chart displays revenue breakdown across different product categories",x:300,y:200,variant:"pointer",pointerPosition:"top"}};var b,T,C,P,S;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
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
          Hover Me
        </ChartSegment>
        <Tooltip visible={tooltip.visible} heading="Product A" description="Value: $45,000 (35%)" x={tooltip.x} y={tooltip.y} variant="default" />
      </DemoContainer>;
  }
}`,...(C=(T=p.parameters)==null?void 0:T.docs)==null?void 0:C.source},description:{story:"Default rectangular tooltip - perfect for chart hovers",...(S=(P=p.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};var w,j,D,I,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <InfoIcon onClick={e => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip(prev => ({
          visible: !prev.visible,
          x: rect.left,
          y: rect.bottom + 10
        }));
      }}>
          i
        </InfoIcon>
        <Tooltip visible={tooltip.visible} heading="This chart shows revenue distribution by product category for the selected time period" x={tooltip.x} y={tooltip.y} variant="pointer" pointerPosition="top" />
      </DemoContainer>;
  }
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:"Pointer tooltip with triangle on top - for info icons",...(k=(I=c.parameters)==null?void 0:I.docs)==null?void 0:k.description}}};var B,A,R,F,V;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <InfoIcon onClick={e => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip(prev => ({
          visible: !prev.visible,
          x: rect.left + rect.width / 2 - 126.5,
          y: rect.top - 90
        }));
      }}>
          i
        </InfoIcon>
        <Tooltip visible={tooltip.visible} heading="Click the info icon to toggle this tooltip" x={tooltip.x} y={tooltip.y} variant="pointer" pointerPosition="bottom" />
      </DemoContainer>;
  }
}`,...(R=(A=d.parameters)==null?void 0:A.docs)==null?void 0:R.source},description:{story:"Pointer tooltip with triangle on bottom",...(V=(F=d.parameters)==null?void 0:F.docs)==null?void 0:V.description}}};var M,E,z,L,$;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <InfoIcon onClick={e => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip(prev => ({
          visible: !prev.visible,
          x: rect.right + 10,
          y: rect.top + rect.height / 2 - 40
        }));
      }}>
          i
        </InfoIcon>
        <Tooltip visible={tooltip.visible} heading="Tooltip with pointer on the left side" x={tooltip.x} y={tooltip.y} variant="pointer" pointerPosition="left" />
      </DemoContainer>;
  }
}`,...(z=(E=u.parameters)==null?void 0:E.docs)==null?void 0:z.source},description:{story:"Pointer tooltip with triangle on left",...($=(L=u.parameters)==null?void 0:L.docs)==null?void 0:$.description}}};var H,X,Y,_,O;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <InfoIcon onClick={e => {
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        setTooltip(prev => ({
          visible: !prev.visible,
          x: rect.left - 263,
          y: rect.top + rect.height / 2 - 40
        }));
      }}>
          i
        </InfoIcon>
        <Tooltip visible={tooltip.visible} heading="Tooltip with pointer on the right side" x={tooltip.x} y={tooltip.y} variant="pointer" pointerPosition="right" />
      </DemoContainer>;
  }
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source},description:{story:"Pointer tooltip with triangle on right",...(O=(_=v.parameters)==null?void 0:_.docs)==null?void 0:O.description}}};var U,q,G,J,K;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [defaultTooltip, setDefaultTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    const [pointerTooltip, setPointerTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    return <DemoContainer>
        <div style={{
        display: 'flex',
        gap: '100px',
        alignItems: 'center'
      }}>
          <div style={{
          textAlign: 'center'
        }}>
            <p style={{
            marginBottom: '16px',
            fontFamily: 'Elevance Sans',
            fontSize: '14px',
            color: '#222'
          }}>
              Default (Hover)
            </p>
            <ChartSegment style={{
            width: '100px',
            height: '100px'
          }} onMouseMove={e => {
            setDefaultTooltip({
              visible: true,
              x: e.clientX + 15,
              y: e.clientY - 40
            });
          }} onMouseLeave={() => setDefaultTooltip({
            visible: false,
            x: 0,
            y: 0
          })}>
              Chart
            </ChartSegment>
          </div>

          <div style={{
          textAlign: 'center'
        }}>
            <p style={{
            marginBottom: '16px',
            fontFamily: 'Elevance Sans',
            fontSize: '14px',
            color: '#222'
          }}>
              Pointer (Click)
            </p>
            <InfoIcon onClick={e => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            setPointerTooltip(prev => ({
              visible: !prev.visible,
              x: rect.left,
              y: rect.bottom + 10
            }));
          }}>
              i
            </InfoIcon>
          </div>
        </div>

        <Tooltip visible={defaultTooltip.visible} heading="Chart Data" description="Value: $125,000" x={defaultTooltip.x} y={defaultTooltip.y} variant="default" />

        <Tooltip visible={pointerTooltip.visible} heading="This is an info tooltip with a pointer triangle" x={pointerTooltip.x} y={pointerTooltip.y} variant="pointer" pointerPosition="top" />
      </DemoContainer>;
  }
}`,...(G=(q=g.parameters)==null?void 0:q.docs)==null?void 0:G.source},description:{story:"Side-by-side comparison of both variants",...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.description}}};var N,Q,W,Z,ee;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    visible: true,
    heading: 'Product Revenue',
    description: 'Value: $125,450 (42%)',
    x: 300,
    y: 200,
    variant: 'default'
  }
}`,...(W=(Q=x.parameters)==null?void 0:Q.docs)==null?void 0:W.source},description:{story:"Always visible example for testing positioning",...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var te,oe,ie,ne,re;h.parameters={...h.parameters,docs:{...(te=h.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    visible: true,
    heading: 'This chart displays revenue breakdown across different product categories',
    x: 300,
    y: 200,
    variant: 'pointer',
    pointerPosition: 'top'
  }
}`,...(ie=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:"Pointer variant always visible",...(re=(ne=h.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};const he=["DefaultVariant","PointerTop","PointerBottom","PointerLeft","PointerRight","VariantComparison","AlwaysVisible","PointerAlwaysVisible"];export{x as AlwaysVisible,p as DefaultVariant,h as PointerAlwaysVisible,d as PointerBottom,u as PointerLeft,v as PointerRight,c as PointerTop,g as VariantComparison,he as __namedExportsOrder,xe as default};
