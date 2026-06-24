import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as u}from"./index-B0WjJBI_.js";import{c as l}from"./styled-components.browser.esm-BIi91Tbq.js";import"./_commonjsHelpers-CqkleIqs.js";const N=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
`,W=l.input.attrs({type:"checkbox"})`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`,P=l.div`
  position: relative;
  width: 44px;
  height: 24px;
  border-radius: 12px;
  transition: background-color 0.2s ease-in-out;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  flex-shrink: 0;
  
  ${W}:focus-visible + & {
    box-shadow: 0 0 0 2px ${({theme:e})=>e.colors.semantic.focus.indicator};
  }
  
  ${({theme:e,$checked:o,$disabled:a})=>a&&o?`background-color: ${e.colors.palette.primary[200]};`:a?`background-color: ${e.colors.palette.neutral[200]};`:o?`background-color: ${e.colors.palette.primary[500]};`:`background-color: ${e.colors.palette.neutral[300]};`}
  
  &:hover {
    ${({theme:e,$checked:o,$disabled:a})=>a?"":o?`background-color: ${e.colors.palette.primary[600]};`:`background-color: ${e.colors.palette.neutral[400]};`}
  }
`,X=l.div`
  position: absolute;
  top: 2px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  transition: transform 0.2s ease-in-out;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  
  ${({$checked:e})=>e?`
        transform: translateX(20px);
        left: 2px;
      `:`
      transform: translateX(0);
      left: 2px;
    `}
`,G=l.label`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: normal;
  white-space: nowrap;
  cursor: ${({$disabled:e})=>e?"not-allowed":"pointer"};
  user-select: none;
  
  color: ${({theme:e,$disabled:o})=>o?e.colors.palette.neutral[400]:e.colors.palette.neutral[900]};
`,s=u.forwardRef(({label:e,checked:o=!1,disabled:a=!1,onChange:M,className:q,name:V,value:R,id:B,...F},z)=>{const H=u.useId(),h=B||H,f=()=>{if(a)return;const r=document.getElementById(h);r&&r.click()},_=r=>{r.preventDefault(),f()};return t.jsxs(N,{className:q,children:[t.jsx(W,{ref:z,id:h,checked:o,disabled:a,onChange:M,name:V,value:R,role:"switch","aria-checked":o,...F}),t.jsx(P,{$checked:o,$disabled:a,onClick:f,role:"presentation",children:t.jsx(X,{$checked:o,$disabled:a})}),e&&t.jsx(G,{htmlFor:h,$disabled:a,onClick:_,children:e})]})});s.displayName="Toggle";s.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{label:{required:!1,tsType:{name:"string"},description:"Toggle label text"},checked:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is checked (on)",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the toggle is disabled",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"event"}],return:{name:"void"}}},description:"Change handler"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"},name:{required:!1,tsType:{name:"string"},description:"Input name attribute"},value:{required:!1,tsType:{name:"string"},description:"Input value attribute"}},composes:["Omit"]};const Y={title:"Components/Toggle",component:s,parameters:{layout:"centered",docs:{description:{component:`
# Toggle Component

A fully accessible toggle switch component for the Lean IDS design system.

## Features

- **Two States**: On (checked) and Off (unchecked)
- **Disabled State**: Visual feedback for non-interactive state
- **Optional Label**: Display text next to toggle
- **Smooth Animation**: Transition between states
- **Fully Accessible**: WCAG 2.1 AA compliant with proper ARIA attributes

## Usage

\`\`\`tsx
import { Toggle } from '@lean-ids/components';

<Toggle
  label="Enable notifications"
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text displayed next to the toggle",table:{type:{summary:"string"},category:"Content"}},checked:{control:"boolean",description:"Whether the toggle is on (checked)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},disabled:{control:"boolean",description:"Whether the toggle is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}}}},n={args:{label:"Toggle label",checked:!1,disabled:!1}},i={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(s,{label:"Off",checked:!1}),t.jsx(s,{label:"On",checked:!0}),t.jsx(s,{label:"Disabled Off",checked:!1,disabled:!0}),t.jsx(s,{label:"Disabled On",checked:!0,disabled:!0})]}),parameters:{docs:{description:{story:"Toggles support multiple states: off, on, disabled off, and disabled on."}}}},c={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[t.jsx(s,{checked:!1}),t.jsx(s,{checked:!0})]}),parameters:{docs:{description:{story:"Toggles can be used without labels."}}}},d={render:()=>{const[e,o]=u.useState(!1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(s,{label:"Toggle me",checked:e,onChange:a=>o(a.target.checked)}),t.jsxs("p",{style:{fontSize:"14px",color:"#666"},children:["Status: ",e?"On":"Off"]})]})},parameters:{docs:{description:{story:"Interactive toggle with state management."}}}},g={render:()=>{const[e,o]=u.useState({notifications:!0,darkMode:!1,autoSave:!0,analytics:!1});return t.jsxs("form",{style:{display:"flex",flexDirection:"column",gap:"20px",width:"300px"},children:[t.jsx("h3",{style:{margin:"0 0 8px 0"},children:"Settings"}),t.jsx(s,{label:"Enable notifications",checked:e.notifications,onChange:a=>o({...e,notifications:a.target.checked})}),t.jsx(s,{label:"Dark mode",checked:e.darkMode,onChange:a=>o({...e,darkMode:a.target.checked})}),t.jsx(s,{label:"Auto-save",checked:e.autoSave,onChange:a=>o({...e,autoSave:a.target.checked})}),t.jsx(s,{label:"Analytics tracking",checked:e.analytics,onChange:a=>o({...e,analytics:a.target.checked})})]})},parameters:{docs:{description:{story:"Example of toggles used in a settings form."}}}},p={render:()=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",padding:"20px"},children:[t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"16px"},children:"With Labels"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(s,{label:"Switch off",checked:!1}),t.jsx(s,{label:"Switch on",checked:!0}),t.jsx(s,{label:"Disabled - Switch off",checked:!1,disabled:!0}),t.jsx(s,{label:"Disabled - Switch on",checked:!0,disabled:!0})]})]}),t.jsxs("div",{children:[t.jsx("h4",{style:{marginBottom:"16px"},children:"Without Labels"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsx(s,{checked:!1}),t.jsx(s,{checked:!0}),t.jsx(s,{checked:!1,disabled:!0}),t.jsx(s,{checked:!0,disabled:!0})]})]})]}),parameters:{docs:{description:{story:"All toggle variants showing all states with and without labels."}}}};var m,x,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Toggle label',
    checked: false,
    disabled: false
  }
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var y,k,v;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Toggle label="Off" checked={false} />
      <Toggle label="On" checked={true} />
      <Toggle label="Disabled Off" checked={false} disabled={true} />
      <Toggle label="Disabled On" checked={true} disabled={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Toggles support multiple states: off, on, disabled off, and disabled on.'
      }
    }
  }
}`,...(v=(k=i.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var T,S,j;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Toggle checked={false} />
      <Toggle checked={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Toggles can be used without labels.'
      }
    }
  }
}`,...(j=(S=c.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var w,D,C;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [isOn, setIsOn] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Toggle label="Toggle me" checked={isOn} onChange={e => setIsOn(e.target.checked)} />
        <p style={{
        fontSize: '14px',
        color: '#666'
      }}>
          Status: {isOn ? 'On' : 'Off'}
        </p>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive toggle with state management.'
      }
    }
  }
}`,...(C=(D=d.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var O,$,I;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      notifications: true,
      darkMode: false,
      autoSave: true,
      analytics: false
    });
    return <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      width: '300px'
    }}>
        <h3 style={{
        margin: '0 0 8px 0'
      }}>Settings</h3>
        <Toggle label="Enable notifications" checked={settings.notifications} onChange={e => setSettings({
        ...settings,
        notifications: e.target.checked
      })} />
        <Toggle label="Dark mode" checked={settings.darkMode} onChange={e => setSettings({
        ...settings,
        darkMode: e.target.checked
      })} />
        <Toggle label="Auto-save" checked={settings.autoSave} onChange={e => setSettings({
        ...settings,
        autoSave: e.target.checked
      })} />
        <Toggle label="Analytics tracking" checked={settings.analytics} onChange={e => setSettings({
        ...settings,
        analytics: e.target.checked
      })} />
      </form>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of toggles used in a settings form.'
      }
    }
  }
}`,...(I=($=g.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};var A,E,L;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '20px'
  }}>
      <div>
        <h4 style={{
        marginBottom: '16px'
      }}>With Labels</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Toggle label="Switch off" checked={false} />
          <Toggle label="Switch on" checked={true} />
          <Toggle label="Disabled - Switch off" checked={false} disabled={true} />
          <Toggle label="Disabled - Switch on" checked={true} disabled={true} />
        </div>
      </div>
      <div>
        <h4 style={{
        marginBottom: '16px'
      }}>Without Labels</h4>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <Toggle checked={false} />
          <Toggle checked={true} />
          <Toggle checked={false} disabled={true} />
          <Toggle checked={true} disabled={true} />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All toggle variants showing all states with and without labels.'
      }
    }
  }
}`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const Z=["Playground","States","WithoutLabel","Interactive","SettingsForm","AllVariants"];export{p as AllVariants,d as Interactive,n as Playground,g as SettingsForm,i as States,c as WithoutLabel,Z as __namedExportsOrder,Y as default};
