import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{H as t}from"./HelpingText-ClsYb8vx.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";const B={title:"Components/HelpingText",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{text:{control:"text",description:"Helper text message"},state:{control:"select",options:["default","info","warning","error"],description:"State of the helper text"},size:{control:"select",options:["default","large"],description:"Size variant"},showIcon:{control:"boolean",description:"Whether to show the leading icon"}}},s={args:{text:"Default helping message",state:"default",size:"default",showIcon:!0}},a={args:{text:"This is informational text",state:"info",size:"default",showIcon:!0}},r={args:{text:"This is a warning message",state:"warning",size:"default",showIcon:!0}},o={args:{text:"This is an error message",state:"error",size:"default",showIcon:!0}},n={args:{text:"Helper text without icon",state:"default",size:"default",showIcon:!1}},i={args:{text:"Large size helper text",state:"default",size:"large",showIcon:!0}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{text:"Default helping message",state:"default",showIcon:!0}),e.jsx(t,{text:"Informational message",state:"info",showIcon:!0}),e.jsx(t,{text:"Warning message",state:"warning",showIcon:!0}),e.jsx(t,{text:"Error message",state:"error",showIcon:!0})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(t,{text:"Default helping message",state:"default",showIcon:!1}),e.jsx(t,{text:"Informational message",state:"info",showIcon:!1}),e.jsx(t,{text:"Warning message",state:"warning",showIcon:!1}),e.jsx(t,{text:"Error message",state:"error",showIcon:!1})]})};var g,u,p;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    text: 'Default helping message',
    state: 'default',
    size: 'default',
    showIcon: true
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,x,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    text: 'This is informational text',
    state: 'info',
    size: 'default',
    showIcon: true
  }
}`,...(d=(x=a.parameters)==null?void 0:x.docs)==null?void 0:d.source}}};var f,h,w;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    text: 'This is a warning message',
    state: 'warning',
    size: 'default',
    showIcon: true
  }
}`,...(w=(h=r.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var I,z,T;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    text: 'This is an error message',
    state: 'error',
    size: 'default',
    showIcon: true
  }
}`,...(T=(z=o.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};var S,H,j;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    text: 'Helper text without icon',
    state: 'default',
    size: 'default',
    showIcon: false
  }
}`,...(j=(H=n.parameters)==null?void 0:H.docs)==null?void 0:j.source}}};var D,W,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: 'Large size helper text',
    state: 'default',
    size: 'large',
    showIcon: true
  }
}`,...(y=(W=i.parameters)==null?void 0:W.docs)==null?void 0:y.source}}};var E,v,A;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <HelpingText text="Default helping message" state="default" showIcon={true} />
      <HelpingText text="Informational message" state="info" showIcon={true} />
      <HelpingText text="Warning message" state="warning" showIcon={true} />
      <HelpingText text="Error message" state="error" showIcon={true} />
    </div>
}`,...(A=(v=l.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var L,_,b;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <HelpingText text="Default helping message" state="default" showIcon={false} />
      <HelpingText text="Informational message" state="info" showIcon={false} />
      <HelpingText text="Warning message" state="warning" showIcon={false} />
      <HelpingText text="Error message" state="error" showIcon={false} />
    </div>
}`,...(b=(_=c.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};const F=["Default","Informational","Warning","Error","WithoutIcon","LargeSize","AllStates","AllStatesWithoutIcons"];export{l as AllStates,c as AllStatesWithoutIcons,s as Default,o as Error,a as Informational,i as LargeSize,r as Warning,n as WithoutIcon,F as __namedExportsOrder,B as default};
