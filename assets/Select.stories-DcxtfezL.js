import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as g}from"./index-B0WjJBI_.js";import{S as v}from"./Select-K-iKucvw.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./InputField-BAALJcA9.js";import"./FieldImportance-finWzFXd.js";import"./HelpingText-ClsYb8vx.js";import"./Checkbox-BdmLAclb.js";import"./RadioButton-BNSL-Rly.js";import"./Icon-BytZhcyh.js";const $e={title:"Components/Select",component:v,parameters:{layout:"centered",docs:{description:{component:"A dropdown select component with search and single/multiple selection support. Based on Figma design."}}},tags:["autodocs"]},l=[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom"},{value:"ca",label:"Canada"},{value:"au",label:"Australia"},{value:"de",label:"Germany"},{value:"fr",label:"France"},{value:"jp",label:"Japan"},{value:"cn",label:"China"},{value:"in",label:"India"},{value:"br",label:"Brazil"}],C=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"orange",label:"Orange"},{value:"grape",label:"Grape"},{value:"mango",label:"Mango"}],r=t=>{const[s,a]=g.useState(t.value);return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(v,{...t,value:s,onChange:a})})},o={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,helperText:"Choose your country"})},n={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,required:!0,helperText:"This field is required"})},i={render:()=>e.jsx(r,{label:"Country",placeholder:"Search countries...",options:l,searchable:!0,helperText:"Type to search"})},c={render:()=>{const[t,s]=g.useState([]);return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(v,{label:"Favorite Fruits",placeholder:"Select fruits",options:C,value:t,onChange:a=>s(a),multiple:!0,helperText:"Select multiple options"})})}},p={render:()=>{const[t,s]=g.useState([]);return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(v,{label:"Countries",placeholder:"Search and select",options:l,value:t,onChange:a=>s(a),multiple:!0,searchable:!0,helperText:"Search and select multiple"})})}},d={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,error:!0,helperText:"Please select a valid country",required:!0})},u={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,disabled:!0,helperText:"This field is disabled"})},h={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,value:"us",helperText:"United States is pre-selected"})},m={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:l,showLeadingIcon:!1,showTrailingIcon:!1,helperText:"No leading or trailing icons"})},S={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:[{value:"us",label:"United States"},{value:"uk",label:"United Kingdom",disabled:!0},{value:"ca",label:"Canada"},{value:"au",label:"Australia",disabled:!0},{value:"de",label:"Germany"}],helperText:"Some options are disabled"})},b={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:C,size:"small",helperText:"Small size select"})},y={render:()=>e.jsx(r,{label:"Country",placeholder:"Select a country",options:C,size:"large",helperText:"Large size select"})},x={render:()=>{const t=Array.from({length:50},(s,a)=>({value:`option-${a}`,label:`Option ${a+1}`}));return e.jsx("div",{style:{width:"100%",maxWidth:"400px"},children:e.jsx(v,{label:"Options",placeholder:"Search options...",options:t,searchable:!0,helperText:"50 options available"})})}};var T,f,w,j,W;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} helperText="Choose your country" />
}`,...(w=(f=o.parameters)==null?void 0:f.docs)==null?void 0:w.source},description:{story:"Default select with single selection",...(W=(j=o.parameters)==null?void 0:j.docs)==null?void 0:W.description}}};var z,L,q,D,O;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} required={true} helperText="This field is required" />
}`,...(q=(L=n.parameters)==null?void 0:L.docs)==null?void 0:q.source},description:{story:"Select with required field indicator",...(O=(D=n.parameters)==null?void 0:D.docs)==null?void 0:O.description}}};var U,A,I,M,V;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Search countries..." options={countries} searchable={true} helperText="Type to search" />
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source},description:{story:"Select with searchable dropdown",...(V=(M=i.parameters)==null?void 0:M.docs)==null?void 0:V.description}}};var F,E,k,G,N;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: '100%',
      maxWidth: '400px'
    }}>
        <Select label="Favorite Fruits" placeholder="Select fruits" options={fruits} value={value} onChange={val => setValue(val as string[])} multiple={true} helperText="Select multiple options" />
      </div>;
  }
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source},description:{story:"Multiple selection with checkboxes",...(N=(G=c.parameters)==null?void 0:G.docs)==null?void 0:N.description}}};var P,_,$,B,K;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>([]);
    return <div style={{
      width: '100%',
      maxWidth: '400px'
    }}>
        <Select label="Countries" placeholder="Search and select" options={countries} value={value} onChange={val => setValue(val as string[])} multiple={true} searchable={true} helperText="Search and select multiple" />
      </div>;
  }
}`,...($=(_=p.parameters)==null?void 0:_.docs)==null?void 0:$.source},description:{story:"Multiple selection with search",...(K=(B=p.parameters)==null?void 0:B.docs)==null?void 0:K.description}}};var R,J,H,Q,X;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} error={true} helperText="Please select a valid country" required={true} />
}`,...(H=(J=d.parameters)==null?void 0:J.docs)==null?void 0:H.source},description:{story:"Select with error state",...(X=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Y,Z,ee,re,te;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} disabled={true} helperText="This field is disabled" />
}`,...(ee=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:ee.source},description:{story:"Disabled select",...(te=(re=u.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var ae,le,se,oe,ne;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} value="us" helperText="United States is pre-selected" />
}`,...(se=(le=h.parameters)==null?void 0:le.docs)==null?void 0:se.source},description:{story:"Select with pre-selected value",...(ne=(oe=h.parameters)==null?void 0:oe.docs)==null?void 0:ne.description}}};var ie,ce,pe,de,ue;m.parameters={...m.parameters,docs:{...(ie=m.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={countries} showLeadingIcon={false} showTrailingIcon={false} helperText="No leading or trailing icons" />
}`,...(pe=(ce=m.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"Select without icons",...(ue=(de=m.parameters)==null?void 0:de.docs)==null?void 0:ue.description}}};var he,me,Se,be,ye;S.parameters={...S.parameters,docs:{...(he=S.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={[{
    value: 'us',
    label: 'United States'
  }, {
    value: 'uk',
    label: 'United Kingdom',
    disabled: true
  }, {
    value: 'ca',
    label: 'Canada'
  }, {
    value: 'au',
    label: 'Australia',
    disabled: true
  }, {
    value: 'de',
    label: 'Germany'
  }]} helperText="Some options are disabled" />
}`,...(Se=(me=S.parameters)==null?void 0:me.docs)==null?void 0:Se.source},description:{story:"Select with disabled options",...(ye=(be=S.parameters)==null?void 0:be.docs)==null?void 0:ye.description}}};var xe,ve,ge,Ce,Te;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={fruits} size="small" helperText="Small size select" />
}`,...(ge=(ve=b.parameters)==null?void 0:ve.docs)==null?void 0:ge.source},description:{story:"Small size select",...(Te=(Ce=b.parameters)==null?void 0:Ce.docs)==null?void 0:Te.description}}};var fe,we,je,We,ze;y.parameters={...y.parameters,docs:{...(fe=y.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <SelectWrapper label="Country" placeholder="Select a country" options={fruits} size="large" helperText="Large size select" />
}`,...(je=(we=y.parameters)==null?void 0:we.docs)==null?void 0:je.source},description:{story:"Large size select",...(ze=(We=y.parameters)==null?void 0:We.docs)==null?void 0:ze.description}}};var Le,qe,De,Oe,Ue;x.parameters={...x.parameters,docs:{...(Le=x.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => {
    const longList = Array.from({
      length: 50
    }, (_, i) => ({
      value: \`option-\${i}\`,
      label: \`Option \${i + 1}\`
    }));
    return <div style={{
      width: '100%',
      maxWidth: '400px'
    }}>
        <Select label="Options" placeholder="Search options..." options={longList} searchable={true} helperText="50 options available" />
      </div>;
  }
}`,...(De=(qe=x.parameters)==null?void 0:qe.docs)==null?void 0:De.source},description:{story:"Long list with search",...(Ue=(Oe=x.parameters)==null?void 0:Oe.docs)==null?void 0:Ue.description}}};const Be=["Default","Required","Searchable","Multiple","MultipleSearchable","Error","Disabled","PreSelected","NoIcons","DisabledOptions","SmallSize","LargeSize","LongList"];export{o as Default,u as Disabled,S as DisabledOptions,d as Error,y as LargeSize,x as LongList,c as Multiple,p as MultipleSearchable,m as NoIcons,h as PreSelected,n as Required,i as Searchable,b as SmallSize,Be as __namedExportsOrder,$e as default};
