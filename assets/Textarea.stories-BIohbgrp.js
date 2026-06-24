import{j as s}from"./jsx-runtime-DSvmvvsx.js";import{r as l}from"./index-B0WjJBI_.js";import{c as i,s as P}from"./styled-components.browser.esm-BIi91Tbq.js";import{F as Ee}from"./FieldImportance-finWzFXd.js";import{H as Ve}from"./HelpingText-ClsYb8vx.js";import"./_commonjsHelpers-CqkleIqs.js";const Ae=i.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  width: ${({$fullWidth:e})=>e?"100%":"300px"};
  font-family: ${({theme:e})=>e.fonts.primary};
`,Pe=i.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[1]};
  align-items: flex-start;
`,Ne=i.label`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  color: ${({theme:e,$disabled:r})=>r?e.colors.palette.neutral[500]:e.colors.palette.neutral[1e3]};
  white-space: nowrap;
`,Me=i.div`
  display: flex;
  align-items: flex-start;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[2]};
  background-color: ${({theme:e,$disabled:r,$hasValue:t})=>r&&t?e.colors.palette.primary[50]:e.colors.palette.neutral[50]};
  border: 1px solid;
  border-color: ${({theme:e,$error:r,$disabled:t,$isFocused:a,$hasValue:o})=>t&&o?e.colors.palette.primary[100]:t?e.colors.palette.neutral[300]:r&&a||r?e.colors.palette.error[500]:a?e.colors.semantic.focus.input:o?e.colors.palette.neutral[900]:e.colors.palette.neutral[500]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s ease-in-out;
  min-height: 100px;
  
  ${({$disabled:e})=>e&&P`
      cursor: not-allowed;
      opacity: 0.6;
    `}
  
  ${({$error:e,$isFocused:r,theme:t})=>e&&r&&P`
      background-color: ${t.colors.palette.error[50]};
    `}
`,He=i.textarea`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.regular};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  padding: 0;
  min-width: 0;
  min-height: 84px;
  resize: vertical;
  
  &::placeholder {
    color: ${({theme:e})=>e.colors.palette.neutral[500]};
  }
  
  &:disabled {
    cursor: not-allowed;
    color: ${({theme:e})=>e.colors.palette.neutral[900]};
    resize: none;
  }
  
  &:disabled::placeholder {
    color: ${({theme:e})=>e.colors.palette.neutral[900]};
  }
`,Ue=i.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  
  svg {
    width: 100%;
    height: 100%;
  }
`,_e=i.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  flex-shrink: 0;
  width: 16px;
  height: 100%;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  
  svg {
    width: 16px;
    height: 16px;
  }
`,E=l.forwardRef(({label:e,helperText:r,errorMessage:t,required:a=!1,disabled:o=!1,error:n=!1,showLabel:v=!0,showFieldImportance:p=!1,fieldImportanceVariant:$="mandatory",showInlineText:d=!0,leadingIcon:c,trailingIcon:h,placeholder:f,value:m,defaultValue:b,onChange:C,onFocus:u,onBlur:S,fullWidth:we=!1,rows:ge=4,resizable:Te=!0,name:ye,id:Ie,className:ze,"aria-label":Le,"aria-describedby":Fe,...We},qe)=>{const ve=l.useId(),x=Ie||ve,$e=`${x}-helper-text`,V=`${x}-label`,[Ce,A]=l.useState(!1),k=t||r,R=n||!!t,Se=!!(m||b),ke=[k?$e:null,Fe].filter(Boolean).join(" ")||void 0,Re=j=>{A(!0),u==null||u(j)},je=j=>{A(!1),S==null||S(j)},De=R?"error":"default";return s.jsxs(Ae,{$fullWidth:we,className:ze,children:[v&&e&&s.jsxs(Pe,{children:[s.jsx(Ne,{htmlFor:x,id:V,$disabled:o,children:e}),p&&s.jsx(Ee,{variant:$})]}),s.jsxs(Me,{$error:R,$disabled:o,$isFocused:Ce,$hasValue:Se,children:[c&&s.jsx(Ue,{children:c}),s.jsx(He,{ref:qe,id:x,name:ye,placeholder:f,value:m,defaultValue:b,onChange:C,onFocus:Re,onBlur:je,disabled:o,required:a,rows:ge,"aria-label":Le||(e?void 0:f),"aria-labelledby":e?V:void 0,"aria-describedby":ke,"aria-invalid":R,"aria-required":a,style:{resize:Te?"vertical":"none"},...We}),h&&s.jsx(_e,{children:h})]}),d&&k&&s.jsx(Ve,{text:k,state:De,size:"default",showIcon:!0})]})});E.displayName="Textarea";E.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:"Label text for the textarea"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text displayed below the textarea"},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message - overrides helperText when present"},required:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is required",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is disabled",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea has an error state",defaultValue:{value:"false",computed:!1}},showLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to show the label",defaultValue:{value:"true",computed:!1}},showFieldImportance:{required:!1,tsType:{name:"boolean"},description:"Whether to show the field importance indicator (asterisk)",defaultValue:{value:"false",computed:!1}},fieldImportanceVariant:{required:!1,tsType:{name:"union",raw:"'mandatory' | 'optional'",elements:[{name:"literal",value:"'mandatory'"},{name:"literal",value:"'optional'"}]},description:"Field importance variant",defaultValue:{value:"'mandatory'",computed:!1}},showInlineText:{required:!1,tsType:{name:"boolean"},description:"Whether to show helper/error text",defaultValue:{value:"true",computed:!1}},leadingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the start of the textarea"},trailingIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon to display at the end of the textarea (resize handle area)"},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea should take full width of container",defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:"Minimum number of rows",defaultValue:{value:"4",computed:!1}},maxRows:{required:!1,tsType:{name:"number"},description:"Maximum number of rows before scrolling"},resizable:{required:!1,tsType:{name:"boolean"},description:"Whether the textarea is resizable",defaultValue:{value:"true",computed:!1}}},composes:["Omit"]};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=(...e)=>e.filter((r,t,a)=>!!r&&r.trim()!==""&&a.indexOf(r)===t).join(" ").trim();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(r,t,a)=>a?a.toUpperCase():t.toLowerCase());/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=e=>{const r=Be(e);return r.charAt(0).toUpperCase()+r.slice(1)};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=e=>{for(const r in e)if(r.startsWith("aria-")||r==="role"||r==="title")return!0;return!1},Ye=l.createContext({}),Ze=()=>l.useContext(Ye),Ge=l.forwardRef(({color:e,size:r,strokeWidth:t,absoluteStrokeWidth:a,className:o="",children:n,iconNode:v,...p},$)=>{const{size:d=24,strokeWidth:c=2,absoluteStrokeWidth:h=!1,color:f="currentColor",className:m=""}=Ze()??{},b=a??h?Number(t??c)*24/Number(r??d):t??c;return l.createElement("svg",{ref:$,...D,width:r??d??D.width,height:r??d??D.height,stroke:e??f,strokeWidth:b,className:xe("lucide",m,o),...!n&&!Qe(p)&&{"aria-hidden":"true"},...p},[...v.map(([C,u])=>l.createElement(C,u)),...Array.isArray(n)?n:[n]])});/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(e,r)=>{const t=l.forwardRef(({className:a,...o},n)=>l.createElement(Ge,{ref:n,iconNode:r,className:xe(`lucide-${Oe(N(e))}`,`lucide-${e}`,a),...o}));return t.displayName=N(e),t};/**
 * @license lucide-react v1.8.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Xe=Ke("search",Je),lr={title:"Components/Textarea",component:E,parameters:{layout:"centered",docs:{description:{component:`
# Textarea Component

A fully accessible textarea component for multi-line text input based on the Figma design system.

## Features

- **Multiple States**: Default, focused, error, disabled, and filled states
- **Helper Text**: Support for helper text and error messages
- **Field Importance**: Optional required indicator (asterisk)
- **Icons**: Optional leading and trailing icons
- **Resizable**: Configurable vertical resize capability
- **Accessibility**: Full WCAG 2.1 AA compliance with proper ARIA attributes

## Usage

\`\`\`tsx
import { Textarea } from '@lean-ids/components';

function MyForm() {
  return (
    <Textarea
      label="Comments"
      placeholder="Enter your comments here..."
      helperText="Maximum 500 characters"
      required
      showFieldImportance
    />
  );
}
\`\`\`
        `}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text for the textarea"},placeholder:{control:"text",description:"Placeholder text"},helperText:{control:"text",description:"Helper text displayed below the textarea"},errorMessage:{control:"text",description:"Error message - overrides helperText when present"},required:{control:"boolean",description:"Whether the textarea is required"},disabled:{control:"boolean",description:"Whether the textarea is disabled"},error:{control:"boolean",description:"Whether the textarea has an error state"},showLabel:{control:"boolean",description:"Whether to show the label"},showFieldImportance:{control:"boolean",description:"Whether to show the field importance indicator"},showInlineText:{control:"boolean",description:"Whether to show helper/error text"},fullWidth:{control:"boolean",description:"Whether the textarea should take full width"},rows:{control:"number",description:"Number of visible text rows"},resizable:{control:"boolean",description:"Whether the textarea is resizable"}}},w={args:{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",showLabel:!0,showFieldImportance:!0,showInlineText:!0,required:!1,disabled:!1,error:!1,resizable:!0,rows:4}},g={args:{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",defaultValue:"This is some filled content in the textarea.",showLabel:!0,showFieldImportance:!0,showInlineText:!0,required:!1,disabled:!1,error:!1,resizable:!0}},T={args:{label:"Label",placeholder:"Placeholder",helperText:"Default helping message",defaultValue:"This content cannot be edited.",showLabel:!0,showFieldImportance:!0,showInlineText:!0,required:!1,disabled:!0,error:!1,resizable:!1}},y={args:{label:"Label",placeholder:"Placeholder",errorMessage:"This field has an error",showLabel:!0,showFieldImportance:!0,showInlineText:!0,required:!0,error:!0,resizable:!0}},I={args:{label:"Search Query",placeholder:"Enter your search query...",helperText:"Use keywords to refine your search",leadingIcon:s.jsx(Xe,{size:16}),showLabel:!0,showFieldImportance:!1,showInlineText:!0,resizable:!0}},z={args:{label:"Comments",placeholder:"Please provide your feedback...",helperText:"This field is required",showLabel:!0,showFieldImportance:!0,showInlineText:!0,required:!0,resizable:!0}},L={args:{label:"Disabled Field",placeholder:"This field is disabled",helperText:"This field cannot be edited",showLabel:!0,showFieldImportance:!1,showInlineText:!0,disabled:!0,resizable:!1}},F={args:{label:"Description",placeholder:"Enter a detailed description...",helperText:"Provide as much detail as possible",showLabel:!0,showFieldImportance:!1,showInlineText:!0,fullWidth:!0,resizable:!0},parameters:{layout:"padded"}},W={args:{label:"Fixed Size",placeholder:"This textarea cannot be resized",helperText:"The size is fixed",showLabel:!0,showFieldImportance:!1,showInlineText:!0,resizable:!1,rows:3}},q={args:{label:"Long Form Content",placeholder:"Write your content here...",helperText:"You have plenty of space",showLabel:!0,showFieldImportance:!1,showInlineText:!0,resizable:!0,rows:10}};var M,H,U;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: false,
    disabled: false,
    error: false,
    resizable: true,
    rows: 4
  }
}`,...(U=(H=w.parameters)==null?void 0:H.docs)==null?void 0:U.source}}};var _,O,B;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    defaultValue: 'This is some filled content in the textarea.',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: false,
    disabled: false,
    error: false,
    resizable: true
  }
}`,...(B=(O=g.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var Q,Y,Z;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    helperText: 'Default helping message',
    defaultValue: 'This content cannot be edited.',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: false,
    disabled: true,
    error: false,
    resizable: false
  }
}`,...(Z=(Y=T.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var G,K,J;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
    errorMessage: 'This field has an error',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: true,
    error: true,
    resizable: true
  }
}`,...(J=(K=y.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};var X,ee,re;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    label: 'Search Query',
    placeholder: 'Enter your search query...',
    helperText: 'Use keywords to refine your search',
    leadingIcon: <Search size={16} />,
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    resizable: true
  }
}`,...(re=(ee=I.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var te,ae,oe;z.parameters={...z.parameters,docs:{...(te=z.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    label: 'Comments',
    placeholder: 'Please provide your feedback...',
    helperText: 'This field is required',
    showLabel: true,
    showFieldImportance: true,
    showInlineText: true,
    required: true,
    resizable: true
  }
}`,...(oe=(ae=z.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var se,le,ne;L.parameters={...L.parameters,docs:{...(se=L.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Field',
    placeholder: 'This field is disabled',
    helperText: 'This field cannot be edited',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    disabled: true,
    resizable: false
  }
}`,...(ne=(le=L.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var ie,de,ce;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    label: 'Description',
    placeholder: 'Enter a detailed description...',
    helperText: 'Provide as much detail as possible',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    fullWidth: true,
    resizable: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...(ce=(de=F.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,pe,he;W.parameters={...W.parameters,docs:{...(ue=W.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    label: 'Fixed Size',
    placeholder: 'This textarea cannot be resized',
    helperText: 'The size is fixed',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    resizable: false,
    rows: 3
  }
}`,...(he=(pe=W.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};var fe,me,be;q.parameters={...q.parameters,docs:{...(fe=q.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    label: 'Long Form Content',
    placeholder: 'Write your content here...',
    helperText: 'You have plenty of space',
    showLabel: true,
    showFieldImportance: false,
    showInlineText: true,
    resizable: true,
    rows: 10
  }
}`,...(be=(me=q.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};const nr=["Default","Filled","FilledUneditable","WithError","WithLeadingIcon","Required","Disabled","FullWidth","NonResizable","LargeTextarea"];export{w as Default,L as Disabled,g as Filled,T as FilledUneditable,F as FullWidth,q as LargeTextarea,W as NonResizable,z as Required,y as WithError,I as WithLeadingIcon,nr as __namedExportsOrder,lr as default};
