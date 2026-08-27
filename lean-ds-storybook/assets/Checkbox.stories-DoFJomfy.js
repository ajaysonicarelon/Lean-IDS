import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{fn as r}from"./index-CH2Su9EI.js";import{r as v}from"./index-B0WjJBI_.js";import{C as a}from"./Checkbox-B5k7d77F.js";import{T as o}from"./Typography-DlcmwxwF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-CuwBLqEg.js";const Me={title:"Components/Checkbox",component:a,parameters:{layout:"centered",docs:{description:{component:`
# Checkbox Component

Enterprise-grade checkbox following Component Maturity Checklist.

## Features

- ✅ **forwardRef** + polymorphic 'as' prop
- ✅ **All 8 States**: default, hover, focus, active, disabled, loading, empty, error
- ✅ **Typography Component**: NO custom styled text
- ✅ **100% Design Tokens**: NO hardcoded values
- ✅ **Two Sizes**: Default (16px) and Large (24px)
- ✅ **Event Callbacks**: onChange, onFocus, onBlur, onKeyDown, onCheck, onUncheck
- ✅ **Render Props**: customLabel, customIcon, customTrailingIcon
- ✅ **Full Accessibility**: WCAG 2.1 AA compliant

## Usage

\`\`\`tsx
import { Checkbox } from '@lean-ids/components';

<Checkbox
  label="Accept terms"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
\`\`\`
        `}}},tags:["autodocs"],args:{onChange:r(),onFocus:r(),onBlur:r(),onKeyDown:r(),onMouseEnter:r(),onMouseLeave:r(),onCheck:r(),onUncheck:r()},argTypes:{label:{control:"text",description:"Label text displayed next to the checkbox",table:{type:{summary:"string"},category:"Content"}},size:{control:"radio",options:["default","large"],description:"Checkbox size",table:{type:{summary:"default | large"},defaultValue:{summary:"default"},category:"Appearance"}},checked:{control:"boolean",description:"Whether the checkbox is checked",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},disabled:{control:"boolean",description:"Whether the checkbox is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isLoading:{control:"boolean",description:"Loading state with spinner",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isEmpty:{control:"boolean",description:"Empty state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isInvalid:{control:"boolean",description:"Error/invalid state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},showTrailingIcon:{control:"boolean",description:"Whether to show trailing info icon",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}}}},c={args:{label:"Accept terms and conditions",size:"default",checked:!1,disabled:!1,isLoading:!1,isEmpty:!1,isInvalid:!1,showTrailingIcon:!1}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Default (unchecked)",checked:!1}),e.jsx(a,{label:"Checked (active)",checked:!0}),e.jsx(a,{label:"Disabled (unchecked)",checked:!1,disabled:!0}),e.jsx(a,{label:"Disabled (checked)",checked:!0,disabled:!0}),e.jsx(a,{label:"Loading state",isLoading:!0}),e.jsx(a,{label:"Empty state",isEmpty:!0,emptyMessage:"No options available"}),e.jsx(a,{label:"Error state",isInvalid:!0,errorMessage:"This field is required"}),e.jsx(a,{label:"With trailing icon",showTrailingIcon:!0})]}),parameters:{docs:{description:{story:"All 8 states: default, active (checked), disabled, loading, empty, error, and with icon. Copy any checkbox you need."}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{variant:"headingS",weight:"semibold",children:"Default Size (16px)"}),e.jsx(a,{label:"Default checkbox",size:"default"}),e.jsx(a,{label:"Default checked",size:"default",checked:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(o,{variant:"headingS",weight:"semibold",children:"Large Size (24px)"}),e.jsx(a,{label:"Large checkbox",size:"large"}),e.jsx(a,{label:"Large checked",size:"large",checked:!0})]})]}),parameters:{docs:{description:{story:"Checkboxes are available in two sizes: default (16px) and large (24px)."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{isLoading:!0}),e.jsx(o,{variant:"caption",style:{color:"#737373"},children:"Shows animated spinner while loading"})]}),parameters:{docs:{description:{story:"Loading state displays an animated spinner. Use when checkbox options are being fetched."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{isEmpty:!0,emptyMessage:"No options available"}),e.jsx(a,{isEmpty:!0,emptyMessage:"All items selected"})]}),parameters:{docs:{description:{story:"Empty state shows a message when no options are available. Customize with emptyMessage prop."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{isInvalid:!0,errorMessage:"This field is required"}),e.jsx(a,{isInvalid:!0,errorMessage:"Please accept the terms"})]}),parameters:{docs:{description:{story:"Error state displays an error icon and message. Use for form validation errors."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Default with icon",showTrailingIcon:!0}),e.jsx(a,{label:"Large with icon",size:"large",showTrailingIcon:!0}),e.jsx(a,{label:"Checked with icon",checked:!0,showTrailingIcon:!0}),e.jsx(a,{label:"Disabled with icon",disabled:!0,showTrailingIcon:!0})]}),parameters:{docs:{description:{story:"Optional trailing info icon. Icon size adjusts based on checkbox size."}}}},y={render:()=>{const[t,i]=v.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{label:"Toggle me",checked:t,onChange:s=>i(s.target.checked)}),e.jsxs(o,{variant:"body",style:{color:"#737373"},children:["Status: ",t?"Checked ✓":"Unchecked"]})]})},parameters:{docs:{description:{story:"Interactive checkbox with state management. Click to toggle."}}}},g={render:()=>{const[t,i]=v.useState({terms:!1,newsletter:!1,updates:!1});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(o,{variant:"headingM",weight:"semibold",children:"Sign Up Preferences"}),e.jsx(a,{label:"I agree to the terms and conditions",checked:t.terms,onChange:s=>i({...t,terms:s.target.checked}),showTrailingIcon:!0}),e.jsx(a,{label:"Subscribe to newsletter",checked:t.newsletter,onChange:s=>i({...t,newsletter:s.target.checked})}),e.jsx(a,{label:"Receive product updates",checked:t.updates,onChange:s=>i({...t,updates:s.target.checked})}),e.jsxs(o,{variant:"caption",style:{color:"#737373",marginTop:"8px"},children:["Selected: ",Object.values(t).filter(Boolean).length," of 3"]})]})},parameters:{docs:{description:{story:"Example of checkboxes in a form with multiple options and state tracking."}}}},u={render:()=>{const[t,i]=v.useState([]),s=f=>{i(k=>[...k.slice(-4),`${new Date().toLocaleTimeString()}: ${f}`])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Checkbox with callbacks",onChange:()=>s("onChange"),onCheck:()=>s("onCheck"),onUncheck:()=>s("onUncheck"),onFocus:()=>s("onFocus"),onBlur:()=>s("onBlur")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(o,{variant:"caption",weight:"semibold",children:"Event Log:"}),t.length===0?e.jsx(o,{variant:"caption",style:{color:"#A3A3A3"},children:"No events yet. Interact with the checkbox."}):t.map((f,k)=>e.jsx(o,{variant:"caption",style:{color:"#737373",fontFamily:"monospace"},children:f},k))]})]})},parameters:{docs:{description:{story:"All event callbacks: onChange, onCheck, onUncheck, onFocus, onBlur. Check Actions panel and event log."}}}},x={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{checked:!1,customLabel:({checked:t})=>e.jsx(o,{variant:"body",weight:t?"bold":"regular",children:t?"✓ Agreed to terms":"Click to agree to terms"})}),e.jsx(a,{checked:!0,customLabel:({checked:t})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(o,{variant:"body",weight:"semibold",style:{color:"#16A34A"},children:"Premium Plan"}),e.jsx(o,{variant:"caption",style:{color:"#737373"},children:"$29/month"})]})})]}),parameters:{docs:{description:{story:"Use customLabel render prop for complex label layouts. Receives checked and disabled state."}}}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{as:"div",label:"Rendered as div (default)"}),e.jsx(a,{as:"label",label:"Rendered as label element"}),e.jsx(o,{variant:"caption",style:{color:"#737373"},children:"Use 'as' prop to change root element type"})]}),parameters:{docs:{description:{story:'Polymorphic "as" prop allows changing the root element type. Default is div.'}}}};var C,w,D,j,T;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    size: 'default',
    checked: false,
    disabled: false,
    isLoading: false,
    isEmpty: false,
    isInvalid: false,
    showTrailingIcon: false
  }
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source},description:{story:"Interactive playground to test all checkbox props",...(T=(j=c.parameters)==null?void 0:j.docs)==null?void 0:T.description}}};var S,E,I,L,A;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox label="Default (unchecked)" checked={false} />
      <Checkbox label="Checked (active)" checked={true} />
      <Checkbox label="Disabled (unchecked)" checked={false} disabled={true} />
      <Checkbox label="Disabled (checked)" checked={true} disabled={true} />
      <Checkbox label="Loading state" isLoading={true} />
      <Checkbox label="Empty state" isEmpty={true} emptyMessage="No options available" />
      <Checkbox label="Error state" isInvalid={true} errorMessage="This field is required" />
      <Checkbox label="With trailing icon" showTrailingIcon={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All 8 states: default, active (checked), disabled, loading, empty, error, and with icon. Copy any checkbox you need.'
      }
    }
  }
}`,...(I=(E=l.parameters)==null?void 0:E.docs)==null?void 0:I.source},description:{story:"All 8 component states",...(A=(L=l.parameters)==null?void 0:L.docs)==null?void 0:A.description}}};var z,U,F,M,P;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingS" weight="semibold">Default Size (16px)</Typography>
        <Checkbox label="Default checkbox" size="default" />
        <Checkbox label="Default checked" size="default" checked />
      </div>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingS" weight="semibold">Large Size (24px)</Typography>
        <Checkbox label="Large checkbox" size="large" />
        <Checkbox label="Large checked" size="large" checked />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes are available in two sizes: default (16px) and large (24px).'
      }
    }
  }
}`,...(F=(U=n.parameters)==null?void 0:U.docs)==null?void 0:F.source},description:{story:"Two available sizes",...(P=(M=n.parameters)==null?void 0:M.docs)==null?void 0:P.description}}};var W,R,B,N,O;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox isLoading={true} />
      <Typography variant="caption" style={{
      color: '#737373'
    }}>
        Shows animated spinner while loading
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading state displays an animated spinner. Use when checkbox options are being fetched.'
      }
    }
  }
}`,...(B=(R=d.parameters)==null?void 0:R.docs)==null?void 0:B.source},description:{story:"Loading state with spinner",...(O=(N=d.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var V,$,q,K,_;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox isEmpty={true} emptyMessage="No options available" />
      <Checkbox isEmpty={true} emptyMessage="All items selected" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Empty state shows a message when no options are available. Customize with emptyMessage prop.'
      }
    }
  }
}`,...(q=($=p.parameters)==null?void 0:$.docs)==null?void 0:q.source},description:{story:"Empty state",...(_=(K=p.parameters)==null?void 0:K.docs)==null?void 0:_.description}}};var G,H,J,Q,X;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox isInvalid={true} errorMessage="This field is required" />
      <Checkbox isInvalid={true} errorMessage="Please accept the terms" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Error state displays an error icon and message. Use for form validation errors.'
      }
    }
  }
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:"Error/invalid state",...(X=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,ae,te;m.parameters={...m.parameters,docs:{...(Y=m.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox label="Default with icon" showTrailingIcon />
      <Checkbox label="Large with icon" size="large" showTrailingIcon />
      <Checkbox label="Checked with icon" checked showTrailingIcon />
      <Checkbox label="Disabled with icon" disabled showTrailingIcon />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Optional trailing info icon. Icon size adjusts based on checkbox size.'
      }
    }
  }
}`,...(ee=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"With trailing info icon",...(te=(ae=m.parameters)==null?void 0:ae.docs)==null?void 0:te.description}}};var se,oe,re,ie,ce;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Checkbox label="Toggle me" checked={checked} onChange={e => setChecked(e.target.checked)} />
        <Typography variant="body" style={{
        color: '#737373'
      }}>
          Status: {checked ? 'Checked ✓' : 'Unchecked'}
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive checkbox with state management. Click to toggle.'
      }
    }
  }
}`,...(re=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:re.source},description:{story:"Interactive example with state",...(ce=(ie=y.parameters)==null?void 0:ie.docs)==null?void 0:ce.description}}};var le,ne,de,pe,he;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      terms: false,
      newsletter: false,
      updates: false
    });
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <Typography variant="headingM" weight="semibold">Sign Up Preferences</Typography>
        
        <Checkbox label="I agree to the terms and conditions" checked={formData.terms} onChange={e => setFormData({
        ...formData,
        terms: e.target.checked
      })} showTrailingIcon />
        <Checkbox label="Subscribe to newsletter" checked={formData.newsletter} onChange={e => setFormData({
        ...formData,
        newsletter: e.target.checked
      })} />
        <Checkbox label="Receive product updates" checked={formData.updates} onChange={e => setFormData({
        ...formData,
        updates: e.target.checked
      })} />
        
        <Typography variant="caption" style={{
        color: '#737373',
        marginTop: '8px'
      }}>
          Selected: {Object.values(formData).filter(Boolean).length} of 3
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of checkboxes in a form with multiple options and state tracking.'
      }
    }
  }
}`,...(de=(ne=g.parameters)==null?void 0:ne.docs)==null?void 0:de.source},description:{story:"Form example with multiple checkboxes",...(he=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:he.description}}};var me,ye,ge,ue,xe;u.parameters={...u.parameters,docs:{...(me=u.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => {
    const [events, setEvents] = useState<string[]>([]);
    const addEvent = (event: string) => {
      setEvents(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${event}\`]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Checkbox label="Checkbox with callbacks" onChange={() => addEvent('onChange')} onCheck={() => addEvent('onCheck')} onUncheck={() => addEvent('onUncheck')} onFocus={() => addEvent('onFocus')} onBlur={() => addEvent('onBlur')} />
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
          <Typography variant="caption" weight="semibold">Event Log:</Typography>
          {events.length === 0 ? <Typography variant="caption" style={{
          color: '#A3A3A3'
        }}>
              No events yet. Interact with the checkbox.
            </Typography> : events.map((event, i) => <Typography key={i} variant="caption" style={{
          color: '#737373',
          fontFamily: 'monospace'
        }}>
                {event}
              </Typography>)}
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All event callbacks: onChange, onCheck, onUncheck, onFocus, onBlur. Check Actions panel and event log.'
      }
    }
  }
}`,...(ge=(ye=u.parameters)==null?void 0:ye.docs)==null?void 0:ge.source},description:{story:"Event callbacks demonstration",...(xe=(ue=u.parameters)==null?void 0:ue.docs)==null?void 0:xe.description}}};var be,fe,ke,ve,Ce;x.parameters={...x.parameters,docs:{...(be=x.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Checkbox checked={false} customLabel={({
      checked
    }) => <Typography variant="body" weight={checked ? 'bold' : 'regular'}>
            {checked ? '✓ Agreed to terms' : 'Click to agree to terms'}
          </Typography>} />
      
      <Checkbox checked={true} customLabel={({
      checked
    }) => <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    }}>
            <Typography variant="body" weight="semibold" style={{
        color: '#16A34A'
      }}>
              Premium Plan
            </Typography>
            <Typography variant="caption" style={{
        color: '#737373'
      }}>
              $29/month
            </Typography>
          </div>} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Use customLabel render prop for complex label layouts. Receives checked and disabled state.'
      }
    }
  }
}`,...(ke=(fe=x.parameters)==null?void 0:fe.docs)==null?void 0:ke.source},description:{story:"Custom label with render prop",...(Ce=(ve=x.parameters)==null?void 0:ve.docs)==null?void 0:Ce.description}}};var we,De,je,Te,Se;b.parameters={...b.parameters,docs:{...(we=b.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Checkbox as="div" label="Rendered as div (default)" />
      <Checkbox as="label" label="Rendered as label element" />
      <Typography variant="caption" style={{
      color: '#737373'
    }}>
        Use 'as' prop to change root element type
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Polymorphic "as" prop allows changing the root element type. Default is div.'
      }
    }
  }
}`,...(je=(De=b.parameters)==null?void 0:De.docs)==null?void 0:je.source},description:{story:"Polymorphic 'as' prop",...(Se=(Te=b.parameters)==null?void 0:Te.docs)==null?void 0:Se.description}}};const Pe=["Playground","AllStates","Sizes","LoadingState","EmptyState","ErrorState","WithTrailingIcon","Interactive","FormExample","WithEventCallbacks","CustomLabel","PolymorphicAs"];export{l as AllStates,x as CustomLabel,p as EmptyState,h as ErrorState,g as FormExample,y as Interactive,d as LoadingState,c as Playground,b as PolymorphicAs,n as Sizes,u as WithEventCallbacks,m as WithTrailingIcon,Pe as __namedExportsOrder,Me as default};
