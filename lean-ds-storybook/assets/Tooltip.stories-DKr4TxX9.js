import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r}from"./index-B0WjJBI_.js";import{fn as p}from"./index-CH2Su9EI.js";import{T as a}from"./Tooltip-CU5_BwDk.js";import{g as D}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as j}from"./Typography-DlcmwxwF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Clv5cdFl.js";import"./index-B2UzP9c-.js";const ct={title:"Components/Tooltip",component:a,parameters:{layout:"centered",docs:{description:{component:`
# Tooltip

Universal tooltip component for contextual information with default and pointer variants.

## Installation
\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage
\`\`\`tsx
import { Tooltip } from '@ajaysoni7832/lean-ids-components';

<Tooltip content="Helpful information" variant="pointer" pointerPosition="top">
  <InfoIcon />
</Tooltip>
\`\`\`

## Features
✅ **Two Variants** - Default (rectangular) and pointer (with arrow)
✅ **Four Positions** - Top, bottom, left, right
✅ **Portal Rendering** - No clipping issues
✅ **Accessible** - ARIA attributes

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| content | ReactNode | required | Tooltip content |
| children | ReactNode | required | Trigger element |
| variant | 'default' \\| 'pointer' | 'default' | Tooltip style |
| pointerPosition | 'top' \\| 'bottom' \\| 'left' \\| 'right' | 'top' | Arrow position |
| show | boolean | - | Controlled visibility |

## Examples
### Info Icon Tooltip
\`\`\`tsx
<Tooltip content="More information" variant="pointer" pointerPosition="top">
  <InfoIcon />
</Tooltip>
\`\`\`

### Chart Hover
\`\`\`tsx
<Tooltip content="Value: 42" variant="default">
  <ChartBar />
</Tooltip>
\`\`\`
        `}}},tags:["autodocs"],args:{onOpen:p(),onClose:p(),onAfterOpen:p(),onAfterClose:p(),onMouseEnter:p(),onMouseLeave:p(),onEscape:p()},argTypes:{variant:{control:"select",options:["default","pointer"],description:"Tooltip variant"},pointerPosition:{control:"select",options:["top","bottom","left","right"],description:"Position of the pointer triangle (only for pointer variant)"},onOpen:{action:"opened"},onClose:{action:"closed"},onAfterOpen:{action:"after-opened"},onAfterClose:{action:"after-closed"},onMouseEnter:{action:"mouse-enter"},onMouseLeave:{action:"mouse-leave"},onEscape:{action:"escape-pressed"}}},c=D.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F8F8;
  border: 1px solid #D5D5D5;
  border-radius: 8px;
  position: relative;
`,et=D.button`
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
`,k=D.div`
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
`,qe=D.div`
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
`,u={render:()=>{const[o,s]=r.useState({visible:!1,x:0,y:0});return e.jsxs(c,{children:[e.jsx(qe,{onMouseMove:n=>{s({visible:!0,x:n.clientX+15,y:n.clientY-40})},onMouseLeave:()=>s({visible:!1,x:0,y:0}),children:"Hover Me"}),e.jsx(a,{visible:o.visible,heading:"Product A",description:"Value: $45,000 (35%)",x:o.x,y:o.y,variant:"default"})]})}},v={render:()=>{const[o,s]=r.useState({visible:!1,x:0,y:0});return e.jsxs(c,{children:[e.jsx(k,{onClick:n=>{n.stopPropagation();const i=n.currentTarget.getBoundingClientRect();s(t=>({visible:!t.visible,x:i.left,y:i.bottom+10}))},children:"i"}),e.jsx(a,{visible:o.visible,heading:"This chart shows revenue distribution by product category for the selected time period",x:o.x,y:o.y,variant:"pointer",pointerPosition:"top"})]})}},m={render:()=>{const[o,s]=r.useState({visible:!1,x:0,y:0});return e.jsxs(c,{children:[e.jsx(k,{onClick:n=>{n.stopPropagation();const i=n.currentTarget.getBoundingClientRect();s(t=>({visible:!t.visible,x:i.left+i.width/2-126.5,y:i.top-90}))},children:"i"}),e.jsx(a,{visible:o.visible,heading:"Click the info icon to toggle this tooltip",x:o.x,y:o.y,variant:"pointer",pointerPosition:"bottom"})]})}},g={render:()=>{const[o,s]=r.useState({visible:!1,x:0,y:0});return e.jsxs(c,{children:[e.jsx(k,{onClick:n=>{n.stopPropagation();const i=n.currentTarget.getBoundingClientRect();s(t=>({visible:!t.visible,x:i.right+10,y:i.top+i.height/2-40}))},children:"i"}),e.jsx(a,{visible:o.visible,heading:"Tooltip with pointer on the left side",x:o.x,y:o.y,variant:"pointer",pointerPosition:"left"})]})}},h={render:()=>{const[o,s]=r.useState({visible:!1,x:0,y:0});return e.jsxs(c,{children:[e.jsx(k,{onClick:n=>{n.stopPropagation();const i=n.currentTarget.getBoundingClientRect();s(t=>({visible:!t.visible,x:i.left-263,y:i.top+i.height/2-40}))},children:"i"}),e.jsx(a,{visible:o.visible,heading:"Tooltip with pointer on the right side",x:o.x,y:o.y,variant:"pointer",pointerPosition:"right"})]})}},y={render:()=>{const[o,s]=r.useState({visible:!1,x:0,y:0}),[n,i]=r.useState({visible:!1,x:0,y:0});return e.jsxs(c,{children:[e.jsxs("div",{style:{display:"flex",gap:"100px",alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:{marginBottom:"16px",fontFamily:"Elevance Sans",fontSize:"14px",color:"#222"},children:"Default (Hover)"}),e.jsx(qe,{style:{width:"100px",height:"100px"},onMouseMove:t=>{s({visible:!0,x:t.clientX+15,y:t.clientY-40})},onMouseLeave:()=>s({visible:!1,x:0,y:0}),children:"Chart"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("p",{style:{marginBottom:"16px",fontFamily:"Elevance Sans",fontSize:"14px",color:"#222"},children:"Pointer (Click)"}),e.jsx(k,{onClick:t=>{t.stopPropagation();const S=t.currentTarget.getBoundingClientRect();i(M=>({visible:!M.visible,x:S.left,y:S.bottom+10}))},children:"i"})]})]}),e.jsx(a,{visible:o.visible,heading:"Chart Data",description:"Value: $125,000",x:o.x,y:o.y,variant:"default"}),e.jsx(a,{visible:n.visible,heading:"This is an info tooltip with a pointer triangle",x:n.x,y:n.y,variant:"pointer",pointerPosition:"top"})]})}},b={args:{visible:!0,heading:"Product Revenue",description:"Value: $125,450 (42%)",x:300,y:200,variant:"default"}},f={args:{visible:!0,heading:"This chart displays revenue breakdown across different product categories",x:300,y:200,variant:"pointer",pointerPosition:"top"}},x={args:{visible:!0,isLoading:!0,x:300,y:200,variant:"default"},parameters:{docs:{description:{story:"Tooltip in loading state displays a spinner animation. Use this when fetching tooltip content asynchronously."}}}},T={args:{visible:!0,isEmpty:!0,emptyMessage:"No data available for this period",x:300,y:200,variant:"pointer",pointerPosition:"top"},parameters:{docs:{description:{story:"Tooltip in empty state displays a custom message when no content is available."}}}},C={args:{visible:!0,isInvalid:!0,errorMessage:"Failed to load tooltip data. Please try again.",x:300,y:200,variant:"pointer",pointerPosition:"bottom"},parameters:{docs:{description:{story:"Tooltip in error state displays an error message with a red border to indicate a problem."}}}},w={args:{visible:!0,disabled:!0,heading:"Disabled Tooltip",description:"This tooltip is disabled and has reduced opacity",x:300,y:200,variant:"default"},parameters:{docs:{description:{story:"Tooltip in disabled state has reduced opacity (0.5) and no pointer events."}}}},E={args:{visible:!0,heading:"Custom Width Tooltip",description:"This tooltip has a custom maximum width of 30rem, allowing for much longer content that would normally wrap or be constrained.",x:300,y:200,maxWidth:"30rem",variant:"pointer",pointerPosition:"top"},parameters:{docs:{description:{story:"Tooltip with custom maxWidth prop to accommodate longer content."}}}},P={render:()=>{const[o,s]=r.useState({visible:!1,x:0,y:0}),[n,i]=r.useState([]),t=r.useCallback(d=>{i(l=>[...l.slice(-4),`${new Date().toLocaleTimeString()}: ${d}`])},[]),S=r.useCallback(()=>t("onOpen"),[t]),M=r.useCallback(()=>t("onClose"),[t]),_e=r.useCallback(()=>t("onAfterOpen (150ms delay)"),[t]),Ge=r.useCallback(()=>t("onAfterClose (150ms delay)"),[t]),Je=r.useCallback(()=>t("onMouseEnter"),[t]),Ke=r.useCallback(()=>t("onMouseLeave"),[t]),Qe=r.useCallback(()=>{t("onEscape (Escape key pressed)"),s({visible:!1,x:0,y:0})},[t]);return e.jsxs(c,{children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsx(et,{onClick:d=>{const l=d.currentTarget.getBoundingClientRect();s(Ze=>({visible:!Ze.visible,x:l.left+l.width/2-126.5,y:l.bottom+10}))},children:"Toggle Tooltip"}),e.jsxs("div",{style:{padding:"12px",background:"#f5f5f5",borderRadius:"4px",minWidth:"300px",maxHeight:"150px",overflow:"auto"},children:[e.jsx(j,{variant:"caption",weight:"semibold",style:{marginBottom:"8px",display:"block"},children:"Event Log:"}),n.length===0?e.jsx(j,{variant:"caption",children:"No events yet. Click the button to trigger events."}):n.map((d,l)=>e.jsx(j,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:d},l))]})]}),e.jsx(a,{visible:o.visible,heading:"Event Callbacks Demo",description:"This tooltip fires events on open, close, and keyboard interactions",x:o.x,y:o.y,variant:"pointer",pointerPosition:"top",onOpen:S,onClose:M,onAfterOpen:_e,onAfterClose:Ge,onMouseEnter:Je,onMouseLeave:Ke,onEscape:Qe})]})},parameters:{docs:{description:{story:"Demonstrates all event callbacks: onOpen, onClose, onAfterOpen, onAfterClose, onMouseEnter, onMouseLeave, and onEscape. Press Escape key when tooltip is visible to trigger onEscape."}}}};var A,I,B,L,O;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(B=(I=u.parameters)==null?void 0:I.docs)==null?void 0:B.source},description:{story:"Default rectangular tooltip - perfect for chart hovers",...(O=(L=u.parameters)==null?void 0:L.docs)==null?void 0:O.description}}};var R,V,F,W,$;v.parameters={...v.parameters,docs:{...(R=v.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(V=v.parameters)==null?void 0:V.docs)==null?void 0:F.source},description:{story:"Pointer tooltip with triangle on top - for info icons",...($=(W=v.parameters)==null?void 0:W.docs)==null?void 0:$.description}}};var H,z,N,U,X;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(N=(z=m.parameters)==null?void 0:z.docs)==null?void 0:N.source},description:{story:"Pointer tooltip with triangle on bottom",...(X=(U=m.parameters)==null?void 0:U.docs)==null?void 0:X.description}}};var Y,q,_,G,J;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(_=(q=g.parameters)==null?void 0:q.docs)==null?void 0:_.source},description:{story:"Pointer tooltip with triangle on left",...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var K,Q,Z,ee,te;h.parameters={...h.parameters,docs:{...(K=h.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(Z=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:Z.source},description:{story:"Pointer tooltip with triangle on right",...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var oe,ne,ie,re,se;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:ie.source},description:{story:"Side-by-side comparison of both variants",...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.description}}};var ae,le,pe,ce,de;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    visible: true,
    heading: 'Product Revenue',
    description: 'Value: $125,450 (42%)',
    x: 300,
    y: 200,
    variant: 'default'
  }
}`,...(pe=(le=b.parameters)==null?void 0:le.docs)==null?void 0:pe.source},description:{story:"Always visible example for testing positioning",...(de=(ce=b.parameters)==null?void 0:ce.docs)==null?void 0:de.description}}};var ue,ve,me,ge,he;f.parameters={...f.parameters,docs:{...(ue=f.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    visible: true,
    heading: 'This chart displays revenue breakdown across different product categories',
    x: 300,
    y: 200,
    variant: 'pointer',
    pointerPosition: 'top'
  }
}`,...(me=(ve=f.parameters)==null?void 0:ve.docs)==null?void 0:me.source},description:{story:"Pointer variant always visible",...(he=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:he.description}}};var ye,be,fe,xe,Te;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    visible: true,
    isLoading: true,
    x: 300,
    y: 200,
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip in loading state displays a spinner animation. Use this when fetching tooltip content asynchronously.'
      }
    }
  }
}`,...(fe=(be=x.parameters)==null?void 0:be.docs)==null?void 0:fe.source},description:{story:"Loading state - shows spinner while content is being fetched",...(Te=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:Te.description}}};var Ce,we,Ee,Pe,ke;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    visible: true,
    isEmpty: true,
    emptyMessage: 'No data available for this period',
    x: 300,
    y: 200,
    variant: 'pointer',
    pointerPosition: 'top'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip in empty state displays a custom message when no content is available.'
      }
    }
  }
}`,...(Ee=(we=T.parameters)==null?void 0:we.docs)==null?void 0:Ee.source},description:{story:"Empty state - shows when no content is available",...(ke=(Pe=T.parameters)==null?void 0:Pe.docs)==null?void 0:ke.description}}};var Se,De,Me,je,Ae;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    visible: true,
    isInvalid: true,
    errorMessage: 'Failed to load tooltip data. Please try again.',
    x: 300,
    y: 200,
    variant: 'pointer',
    pointerPosition: 'bottom'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip in error state displays an error message with a red border to indicate a problem.'
      }
    }
  }
}`,...(Me=(De=C.parameters)==null?void 0:De.docs)==null?void 0:Me.source},description:{story:"Error state - shows error message with red border",...(Ae=(je=C.parameters)==null?void 0:je.docs)==null?void 0:Ae.description}}};var Ie,Be,Le,Oe,Re;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    visible: true,
    disabled: true,
    heading: 'Disabled Tooltip',
    description: 'This tooltip is disabled and has reduced opacity',
    x: 300,
    y: 200,
    variant: 'default'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip in disabled state has reduced opacity (0.5) and no pointer events.'
      }
    }
  }
}`,...(Le=(Be=w.parameters)==null?void 0:Be.docs)==null?void 0:Le.source},description:{story:"Disabled state - tooltip is visible but with reduced opacity",...(Re=(Oe=w.parameters)==null?void 0:Oe.docs)==null?void 0:Re.description}}};var Ve,Fe,We,$e,He;E.parameters={...E.parameters,docs:{...(Ve=E.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    visible: true,
    heading: 'Custom Width Tooltip',
    description: 'This tooltip has a custom maximum width of 30rem, allowing for much longer content that would normally wrap or be constrained.',
    x: 300,
    y: 200,
    maxWidth: '30rem',
    variant: 'pointer',
    pointerPosition: 'top'
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip with custom maxWidth prop to accommodate longer content.'
      }
    }
  }
}`,...(We=(Fe=E.parameters)==null?void 0:Fe.docs)==null?void 0:We.source},description:{story:"Custom max width - override the default width",...(He=($e=E.parameters)==null?void 0:$e.docs)==null?void 0:He.description}}};var ze,Ne,Ue,Xe,Ye;P.parameters={...P.parameters,docs:{...(ze=P.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const [tooltip, setTooltip] = useState({
      visible: false,
      x: 0,
      y: 0
    });
    const [events, setEvents] = useState<string[]>([]);
    const addEvent = useCallback((event: string) => {
      setEvents(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${event}\`]);
    }, []);
    const handleOpen = useCallback(() => addEvent('onOpen'), [addEvent]);
    const handleClose = useCallback(() => addEvent('onClose'), [addEvent]);
    const handleAfterOpen = useCallback(() => addEvent('onAfterOpen (150ms delay)'), [addEvent]);
    const handleAfterClose = useCallback(() => addEvent('onAfterClose (150ms delay)'), [addEvent]);
    const handleMouseEnter = useCallback(() => addEvent('onMouseEnter'), [addEvent]);
    const handleMouseLeave = useCallback(() => addEvent('onMouseLeave'), [addEvent]);
    const handleEscape = useCallback(() => {
      addEvent('onEscape (Escape key pressed)');
      setTooltip({
        visible: false,
        x: 0,
        y: 0
      });
    }, [addEvent]);
    return <DemoContainer>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        alignItems: 'center'
      }}>
          <DemoButton onClick={e => {
          const rect = e.currentTarget.getBoundingClientRect();
          setTooltip(prev => ({
            visible: !prev.visible,
            x: rect.left + rect.width / 2 - 126.5,
            y: rect.bottom + 10
          }));
        }}>
            Toggle Tooltip
          </DemoButton>
          
          <div style={{
          padding: '12px',
          background: '#f5f5f5',
          borderRadius: '4px',
          minWidth: '300px',
          maxHeight: '150px',
          overflow: 'auto'
        }}>
            <Typography variant="caption" weight="semibold" style={{
            marginBottom: '8px',
            display: 'block'
          }}>
              Event Log:
            </Typography>
            {events.length === 0 ? <Typography variant="caption">No events yet. Click the button to trigger events.</Typography> : events.map((event, i) => <Typography key={i} variant="caption" style={{
            display: 'block',
            marginBottom: '4px'
          }}>
                  {event}
                </Typography>)}
          </div>
        </div>

        <Tooltip visible={tooltip.visible} heading="Event Callbacks Demo" description="This tooltip fires events on open, close, and keyboard interactions" x={tooltip.x} y={tooltip.y} variant="pointer" pointerPosition="top" onOpen={handleOpen} onClose={handleClose} onAfterOpen={handleAfterOpen} onAfterClose={handleAfterClose} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onEscape={handleEscape} />
      </DemoContainer>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all event callbacks: onOpen, onClose, onAfterOpen, onAfterClose, onMouseEnter, onMouseLeave, and onEscape. Press Escape key when tooltip is visible to trigger onEscape.'
      }
    }
  }
}`,...(Ue=(Ne=P.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source},description:{story:"With event callbacks - demonstrates lifecycle events",...(Ye=(Xe=P.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.description}}};const dt=["DefaultVariant","PointerTop","PointerBottom","PointerLeft","PointerRight","VariantComparison","AlwaysVisible","PointerAlwaysVisible","LoadingState","EmptyState","ErrorState","DisabledState","CustomMaxWidth","WithEventCallbacks"];export{b as AlwaysVisible,E as CustomMaxWidth,u as DefaultVariant,w as DisabledState,T as EmptyState,C as ErrorState,x as LoadingState,f as PointerAlwaysVisible,m as PointerBottom,g as PointerLeft,h as PointerRight,v as PointerTop,y as VariantComparison,P as WithEventCallbacks,dt as __namedExportsOrder,ct as default};
