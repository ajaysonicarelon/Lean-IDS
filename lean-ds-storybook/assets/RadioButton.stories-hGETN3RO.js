import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{fn as n}from"./index-CH2Su9EI.js";import{r as d}from"./index-B0WjJBI_.js";import{R as a}from"./RadioButton-FHwiOUoL.js";import{T as s}from"./Typography-DlcmwxwF.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-CuwBLqEg.js";const Fe={title:"Components/RadioButton",component:a,parameters:{layout:"centered",docs:{description:{component:`
# RadioButton Component

Enterprise-grade radio button following Component Maturity Checklist.

## Features

- ✅ **forwardRef** + polymorphic 'as' prop
- ✅ **All 8 States**: default, hover, focus, active, disabled, loading, empty, error
- ✅ **Typography Component**: NO custom styled text
- ✅ **100% Design Tokens**: NO hardcoded values
- ✅ **Two Sizes**: Default (16px) and Large (24px)
- ✅ **Event Callbacks**: onChange, onFocus, onBlur, onKeyDown, onSelect, onDeselect
- ✅ **Render Props**: customLabel, customIcon, customTrailingIcon
- ✅ **Radio Groups**: Seamless single-selection behavior
- ✅ **Full Accessibility**: WCAG 2.1 AA compliant

## Usage

\`\`\`tsx
import { RadioButton } from '@lean-ids/components';

<RadioButton
  label="Option 1"
  name="options"
  value="option1"
  checked={selected === 'option1'}
  onChange={(e) => setSelected(e.target.value)}
/>
\`\`\`
        `}}},tags:["autodocs"],args:{onChange:n(),onFocus:n(),onBlur:n(),onKeyDown:n(),onMouseEnter:n(),onMouseLeave:n(),onSelect:n(),onDeselect:n()},argTypes:{label:{control:"text",description:"Label text displayed next to the radio button",table:{type:{summary:"string"},category:"Content"}},size:{control:"radio",options:["default","large"],description:"Radio button size",table:{type:{summary:"default | large"},defaultValue:{summary:"default"},category:"Appearance"}},checked:{control:"boolean",description:"Whether the radio button is selected",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},disabled:{control:"boolean",description:"Whether the radio button is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isLoading:{control:"boolean",description:"Loading state with spinner",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isEmpty:{control:"boolean",description:"Empty state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},isInvalid:{control:"boolean",description:"Error/invalid state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"State"}},showTrailingIcon:{control:"boolean",description:"Whether to show trailing expand icon",table:{type:{summary:"boolean"},defaultValue:{summary:"false"},category:"Appearance"}}}},c={args:{label:"Select this option",name:"playground",value:"option1",size:"default",checked:!1,disabled:!1,isLoading:!1,isEmpty:!1,isInvalid:!1,showTrailingIcon:!1}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Default (unselected)",name:"states",value:"1",checked:!1}),e.jsx(a,{label:"Selected (active)",name:"states",value:"2",checked:!0}),e.jsx(a,{label:"Disabled (unselected)",name:"states",value:"3",checked:!1,disabled:!0}),e.jsx(a,{label:"Disabled (selected)",name:"states",value:"4",checked:!0,disabled:!0}),e.jsx(a,{label:"Loading state",isLoading:!0}),e.jsx(a,{isEmpty:!0,emptyMessage:"No options available"}),e.jsx(a,{isInvalid:!0,errorMessage:"This field is required"}),e.jsx(a,{label:"With trailing icon",name:"states",value:"5",showTrailingIcon:!0})]}),parameters:{docs:{description:{story:"All 8 states: default, active (selected), disabled, loading, empty, error, and with icon. Copy any radio you need."}}}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(s,{variant:"headingS",weight:"semibold",children:"Default Size (16px)"}),e.jsx(a,{label:"Default radio",name:"size-default",value:"1",size:"default"}),e.jsx(a,{label:"Default selected",name:"size-default",value:"2",size:"default",checked:!0})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(s,{variant:"headingS",weight:"semibold",children:"Large Size (24px)"}),e.jsx(a,{label:"Large radio",name:"size-large",value:"1",size:"large"}),e.jsx(a,{label:"Large selected",name:"size-large",value:"2",size:"large",checked:!0})]})]}),parameters:{docs:{description:{story:"Radio buttons are available in two sizes: default (16px) and large (24px)."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{isLoading:!0}),e.jsx(s,{variant:"caption",style:{color:"#737373"},children:"Shows animated spinner while loading options"})]}),parameters:{docs:{description:{story:"Loading state displays an animated spinner. Use when radio options are being fetched."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{isEmpty:!0,emptyMessage:"No options available"}),e.jsx(a,{isEmpty:!0,emptyMessage:"All options selected"})]}),parameters:{docs:{description:{story:"Empty state shows a message when no options are available. Customize with emptyMessage prop."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{isInvalid:!0,errorMessage:"This field is required"}),e.jsx(a,{isInvalid:!0,errorMessage:"Please select an option"})]}),parameters:{docs:{description:{story:"Error state displays a red circle and error message. Use for form validation errors."}}}},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Default with icon",name:"icon",value:"1",showTrailingIcon:!0}),e.jsx(a,{label:"Large with icon",name:"icon",value:"2",size:"large",showTrailingIcon:!0}),e.jsx(a,{label:"Selected with icon",name:"icon",value:"3",checked:!0,showTrailingIcon:!0}),e.jsx(a,{label:"Disabled with icon",name:"icon",value:"4",disabled:!0,showTrailingIcon:!0})]}),parameters:{docs:{description:{story:"Optional trailing expand icon. Icon size adjusts based on radio button size."}}}},v={render:()=>{const[t,r]=d.useState("option1");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{variant:"headingM",weight:"semibold",children:"Choose your plan"}),e.jsx(a,{label:"Basic Plan - $9/month",name:"plan",value:"option1",checked:t==="option1",onChange:o=>r(o.target.value)}),e.jsx(a,{label:"Pro Plan - $29/month",name:"plan",value:"option2",checked:t==="option2",onChange:o=>r(o.target.value)}),e.jsx(a,{label:"Enterprise Plan - $99/month",name:"plan",value:"option3",checked:t==="option3",onChange:o=>r(o.target.value)}),e.jsxs(s,{variant:"caption",style:{color:"#737373",marginTop:"8px"},children:["Selected: ",t==="option1"?"Basic":t==="option2"?"Pro":"Enterprise"]})]})},parameters:{docs:{description:{story:"Radio buttons in a group with single selection. All radios share the same name attribute."}}}},x={render:()=>{const[t,r]=d.useState([]),[o,w]=d.useState(""),l=i=>{r(j=>[...j.slice(-4),`${new Date().toLocaleTimeString()}: ${i}`])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{label:"Radio with callbacks",name:"callbacks",value:"option1",checked:o==="option1",onChange:i=>{w(i.target.value),l("onChange")},onSelect:()=>l("onSelect"),onFocus:()=>l("onFocus"),onBlur:()=>l("onBlur")}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(s,{variant:"caption",weight:"semibold",children:"Event Log:"}),t.length===0?e.jsx(s,{variant:"caption",style:{color:"#A3A3A3"},children:"No events yet. Interact with the radio button."}):t.map((i,j)=>e.jsx(s,{variant:"caption",style:{color:"#737373",fontFamily:"monospace"},children:i},j))]})]})},parameters:{docs:{description:{story:"All event callbacks: onChange, onSelect, onFocus, onBlur. Check Actions panel and event log."}}}},b={render:()=>{const[t,r]=d.useState("basic");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{name:"custom",value:"basic",checked:t==="basic",onChange:o=>r(o.target.value),customLabel:({checked:o})=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(s,{variant:"body",weight:o?"semibold":"regular",children:"Basic Plan"}),e.jsx(s,{variant:"caption",style:{color:"#737373"},children:"$9/month"})]})}),e.jsx(a,{name:"custom",value:"pro",checked:t==="pro",onChange:o=>r(o.target.value),customLabel:({checked:o})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(s,{variant:"body",weight:"semibold",style:{color:o?"#16A34A":"#171717"},children:"Pro Plan"}),e.jsx(s,{variant:"caption",style:{color:"#737373"},children:"$29/month • Most popular"})]})})]})},parameters:{docs:{description:{story:"Use customLabel render prop for complex label layouts. Receives checked and disabled state."}}}},f={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{as:"div",label:"Rendered as div (default)",name:"poly",value:"1"}),e.jsx(a,{as:"span",label:"Rendered as span element",name:"poly",value:"2"}),e.jsx(s,{variant:"caption",style:{color:"#737373"},children:"Use 'as' prop to change root element type"})]}),parameters:{docs:{description:{story:'Polymorphic "as" prop allows changing the root element type. Default is div.'}}}},S={render:()=>{const[t,r]=d.useState(""),[o,w]=d.useState(!1),l=o&&!t;return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsx(s,{variant:"headingM",weight:"semibold",children:"Personal Information"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(s,{variant:"body",weight:"medium",children:"Gender *"}),l?e.jsx(a,{isInvalid:!0,errorMessage:"Please select your gender"}):e.jsxs(e.Fragment,{children:[e.jsx(a,{label:"Male",name:"gender",value:"male",checked:t==="male",onChange:i=>r(i.target.value)}),e.jsx(a,{label:"Female",name:"gender",value:"female",checked:t==="female",onChange:i=>r(i.target.value)}),e.jsx(a,{label:"Other",name:"gender",value:"other",checked:t==="other",onChange:i=>r(i.target.value)})]})]}),e.jsx("button",{onClick:()=>w(!0),style:{padding:"8px 16px",background:"#2563EB",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Submit"}),t&&e.jsxs(s,{variant:"caption",style:{color:"#16A34A"},children:["✓ Selected: ",t.charAt(0).toUpperCase()+t.slice(1)]})]})},parameters:{docs:{description:{story:"Form example with validation. Shows error state when submitted without selection."}}}};var T,k,R,D,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Select this option',
    name: 'playground',
    value: 'option1',
    size: 'default',
    checked: false,
    disabled: false,
    isLoading: false,
    isEmpty: false,
    isInvalid: false,
    showTrailingIcon: false
  }
}`,...(R=(k=c.parameters)==null?void 0:k.docs)==null?void 0:R.source},description:{story:"Interactive playground to test all radio button props",...(B=(D=c.parameters)==null?void 0:D.docs)==null?void 0:B.description}}};var E,C,L,z,A;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <RadioButton label="Default (unselected)" name="states" value="1" checked={false} />
      <RadioButton label="Selected (active)" name="states" value="2" checked={true} />
      <RadioButton label="Disabled (unselected)" name="states" value="3" checked={false} disabled={true} />
      <RadioButton label="Disabled (selected)" name="states" value="4" checked={true} disabled={true} />
      <RadioButton label="Loading state" isLoading={true} />
      <RadioButton isEmpty={true} emptyMessage="No options available" />
      <RadioButton isInvalid={true} errorMessage="This field is required" />
      <RadioButton label="With trailing icon" name="states" value="5" showTrailingIcon={true} />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All 8 states: default, active (selected), disabled, loading, empty, error, and with icon. Copy any radio you need.'
      }
    }
  }
}`,...(L=(C=p.parameters)==null?void 0:C.docs)==null?void 0:L.source},description:{story:"All 8 component states",...(A=(z=p.parameters)==null?void 0:z.docs)==null?void 0:A.description}}};var I,P,M,F,$;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
        <RadioButton label="Default radio" name="size-default" value="1" size="default" />
        <RadioButton label="Default selected" name="size-default" value="2" size="default" checked />
      </div>
      
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingS" weight="semibold">Large Size (24px)</Typography>
        <RadioButton label="Large radio" name="size-large" value="1" size="large" />
        <RadioButton label="Large selected" name="size-large" value="2" size="large" checked />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons are available in two sizes: default (16px) and large (24px).'
      }
    }
  }
}`,...(M=(P=u.parameters)==null?void 0:P.docs)==null?void 0:M.source},description:{story:"Two available sizes",...($=(F=u.parameters)==null?void 0:F.docs)==null?void 0:$.description}}};var W,G,U,N,O;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <RadioButton isLoading={true} />
      <Typography variant="caption" style={{
      color: '#737373'
    }}>
        Shows animated spinner while loading options
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Loading state displays an animated spinner. Use when radio options are being fetched.'
      }
    }
  }
}`,...(U=(G=m.parameters)==null?void 0:G.docs)==null?void 0:U.source},description:{story:"Loading state with spinner",...(O=(N=m.parameters)==null?void 0:N.docs)==null?void 0:O.description}}};var V,q,K,_,H;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <RadioButton isEmpty={true} emptyMessage="No options available" />
      <RadioButton isEmpty={true} emptyMessage="All options selected" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Empty state shows a message when no options are available. Customize with emptyMessage prop.'
      }
    }
  }
}`,...(K=(q=g.parameters)==null?void 0:q.docs)==null?void 0:K.source},description:{story:"Empty state",...(H=(_=g.parameters)==null?void 0:_.docs)==null?void 0:H.description}}};var J,Q,X,Y,Z;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <RadioButton isInvalid={true} errorMessage="This field is required" />
      <RadioButton isInvalid={true} errorMessage="Please select an option" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Error state displays a red circle and error message. Use for form validation errors.'
      }
    }
  }
}`,...(X=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Error/invalid state",...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ae,te,oe,se;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <RadioButton label="Default with icon" name="icon" value="1" showTrailingIcon />
      <RadioButton label="Large with icon" name="icon" value="2" size="large" showTrailingIcon />
      <RadioButton label="Selected with icon" name="icon" value="3" checked showTrailingIcon />
      <RadioButton label="Disabled with icon" name="icon" value="4" disabled showTrailingIcon />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Optional trailing expand icon. Icon size adjusts based on radio button size.'
      }
    }
  }
}`,...(te=(ae=h.parameters)==null?void 0:ae.docs)==null?void 0:te.source},description:{story:"With trailing expand icon",...(se=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:se.description}}};var re,ie,ne,le,de;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('option1');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Typography variant="headingM" weight="semibold">Choose your plan</Typography>
        
        <RadioButton label="Basic Plan - $9/month" name="plan" value="option1" checked={selected === 'option1'} onChange={e => setSelected(e.target.value)} />
        <RadioButton label="Pro Plan - $29/month" name="plan" value="option2" checked={selected === 'option2'} onChange={e => setSelected(e.target.value)} />
        <RadioButton label="Enterprise Plan - $99/month" name="plan" value="option3" checked={selected === 'option3'} onChange={e => setSelected(e.target.value)} />
        
        <Typography variant="caption" style={{
        color: '#737373',
        marginTop: '8px'
      }}>
          Selected: {selected === 'option1' ? 'Basic' : selected === 'option2' ? 'Pro' : 'Enterprise'}
        </Typography>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio buttons in a group with single selection. All radios share the same name attribute.'
      }
    }
  }
}`,...(ne=(ie=v.parameters)==null?void 0:ie.docs)==null?void 0:ne.source},description:{story:"Radio group - single selection",...(de=(le=v.parameters)==null?void 0:le.docs)==null?void 0:de.description}}};var ce,pe,ue,me,ge;x.parameters={...x.parameters,docs:{...(ce=x.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [events, setEvents] = useState<string[]>([]);
    const [selected, setSelected] = useState('');
    const addEvent = (event: string) => {
      setEvents(prev => [...prev.slice(-4), \`\${new Date().toLocaleTimeString()}: \${event}\`]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <RadioButton label="Radio with callbacks" name="callbacks" value="option1" checked={selected === 'option1'} onChange={e => {
        setSelected(e.target.value);
        addEvent('onChange');
      }} onSelect={() => addEvent('onSelect')} onFocus={() => addEvent('onFocus')} onBlur={() => addEvent('onBlur')} />
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
          <Typography variant="caption" weight="semibold">Event Log:</Typography>
          {events.length === 0 ? <Typography variant="caption" style={{
          color: '#A3A3A3'
        }}>
              No events yet. Interact with the radio button.
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
        story: 'All event callbacks: onChange, onSelect, onFocus, onBlur. Check Actions panel and event log.'
      }
    }
  }
}`,...(ue=(pe=x.parameters)==null?void 0:pe.docs)==null?void 0:ue.source},description:{story:"Event callbacks demonstration",...(ge=(me=x.parameters)==null?void 0:me.docs)==null?void 0:ge.description}}};var ye,he,ve,xe,be;b.parameters={...b.parameters,docs:{...(ye=b.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('basic');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <RadioButton name="custom" value="basic" checked={selected === 'basic'} onChange={e => setSelected(e.target.value)} customLabel={({
        checked
      }) => <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
              <Typography variant="body" weight={checked ? 'semibold' : 'regular'}>
                Basic Plan
              </Typography>
              <Typography variant="caption" style={{
          color: '#737373'
        }}>
                $9/month
              </Typography>
            </div>} />
        
        <RadioButton name="custom" value="pro" checked={selected === 'pro'} onChange={e => setSelected(e.target.value)} customLabel={({
        checked
      }) => <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
              <Typography variant="body" weight="semibold" style={{
          color: checked ? '#16A34A' : '#171717'
        }}>
                Pro Plan
              </Typography>
              <Typography variant="caption" style={{
          color: '#737373'
        }}>
                $29/month • Most popular
              </Typography>
            </div>} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Use customLabel render prop for complex label layouts. Receives checked and disabled state.'
      }
    }
  }
}`,...(ve=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ve.source},description:{story:"Custom label with render prop",...(be=(xe=b.parameters)==null?void 0:xe.docs)==null?void 0:be.description}}};var fe,Se,we,je,Te;f.parameters={...f.parameters,docs:{...(fe=f.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <RadioButton as="div" label="Rendered as div (default)" name="poly" value="1" />
      <RadioButton as="span" label="Rendered as span element" name="poly" value="2" />
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
}`,...(we=(Se=f.parameters)==null?void 0:Se.docs)==null?void 0:we.source},description:{story:"Polymorphic 'as' prop",...(Te=(je=f.parameters)==null?void 0:je.docs)==null?void 0:Te.description}}};var ke,Re,De,Be,Ee;S.parameters={...S.parameters,docs:{...(ke=S.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: () => {
    const [gender, setGender] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const showError = submitted && !gender;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <Typography variant="headingM" weight="semibold">Personal Information</Typography>
        
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="body" weight="medium">Gender *</Typography>
          
          {showError ? <RadioButton isInvalid={true} errorMessage="Please select your gender" /> : <>
              <RadioButton label="Male" name="gender" value="male" checked={gender === 'male'} onChange={e => setGender(e.target.value)} />
              <RadioButton label="Female" name="gender" value="female" checked={gender === 'female'} onChange={e => setGender(e.target.value)} />
              <RadioButton label="Other" name="gender" value="other" checked={gender === 'other'} onChange={e => setGender(e.target.value)} />
            </>}
        </div>
        
        <button onClick={() => setSubmitted(true)} style={{
        padding: '8px 16px',
        background: '#2563EB',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}>
          Submit
        </button>
        
        {gender && <Typography variant="caption" style={{
        color: '#16A34A'
      }}>
            ✓ Selected: {gender.charAt(0).toUpperCase() + gender.slice(1)}
          </Typography>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Form example with validation. Shows error state when submitted without selection.'
      }
    }
  }
}`,...(De=(Re=S.parameters)==null?void 0:Re.docs)==null?void 0:De.source},description:{story:"Form example with validation",...(Ee=(Be=S.parameters)==null?void 0:Be.docs)==null?void 0:Ee.description}}};const $e=["Playground","AllStates","Sizes","LoadingState","EmptyState","ErrorState","WithTrailingIcon","RadioGroup","WithEventCallbacks","CustomLabel","PolymorphicAs","FormExample"];export{p as AllStates,b as CustomLabel,g as EmptyState,y as ErrorState,S as FormExample,m as LoadingState,c as Playground,f as PolymorphicAs,v as RadioGroup,u as Sizes,x as WithEventCallbacks,h as WithTrailingIcon,$e as __namedExportsOrder,Fe as default};
