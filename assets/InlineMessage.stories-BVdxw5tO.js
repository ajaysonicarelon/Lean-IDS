import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{I as t}from"./InlineMessage-Bi8bYhwz.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./Button-DO4HjNMh.js";const K={title:"Components/InlineMessage",component:t,parameters:{layout:"padded",docs:{description:{component:`
# InlineMessage

A contextual message component for inline feedback with title, description, and optional actions. Perfect for form validation, contextual help, and inline notifications.

## Features
- **4 types**: Warning, Success, Error, Info
- **2 styles**: Subdued (light), Accent Border
- **Rich content**: Title, description, link, and action button
- **Customizable**: Optional leading/trailing icons
- **Accessible**: Proper ARIA attributes and keyboard support

## Usage

\`\`\`tsx
import { InlineMessage } from '@lean-ids/components';

<InlineMessage
  type="warning"
  style="subdued"
  text="Title"
  descriptionText="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  linkText="Learn more"
  onLinkClick={() => console.log('Link clicked')}
  onActionClick={() => console.log('Action clicked')}
  onClose={() => console.log('Closed')}
/>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["warning","success","error","info"],description:"Message type (determines color scheme)",table:{type:{summary:"warning | success | error | info"},defaultValue:{summary:"warning"},category:"Appearance"}},style:{control:"select",options:["subdued","accentBorder"],description:"Visual style variant",table:{type:{summary:"subdued | accentBorder"},defaultValue:{summary:"subdued"},category:"Appearance"}},text:{control:"text",description:"Title text",table:{type:{summary:"string"},category:"Content"}},descriptionText:{control:"text",description:"Description text",table:{type:{summary:"string"},category:"Content"}},linkText:{control:"text",description:"Link text",table:{type:{summary:"string"},defaultValue:{summary:"Link"},category:"Content"}},buttonText:{control:"text",description:"Action button text",table:{type:{summary:"string"},defaultValue:{summary:"Button"},category:"Content"}},showLeadingIcon:{control:"boolean",description:"Whether to show the leading icon",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},showTrailingIcon:{control:"boolean",description:"Whether to show the trailing (close) icon",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},action:{control:"boolean",description:"Whether to show the action button",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}},link:{control:"boolean",description:"Whether to show the link",table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Appearance"}}}},r={args:{type:"warning",style:"subdued",text:"Title",descriptionText:"Lorem ipsum dolor sit amet, consectetur adipiscing elit",linkText:"Link",buttonText:"Button",showLeadingIcon:!0,showTrailingIcon:!0,action:!0,link:!0}},s={args:{type:"warning",style:"subdued",text:"Warning",descriptionText:"This is a warning message with important information"}},o={args:{type:"success",style:"subdued",text:"Success",descriptionText:"Your action was completed successfully"}},n={args:{type:"error",style:"subdued",text:"Error",descriptionText:"An error occurred while processing your request"}},i={args:{type:"info",style:"subdued",text:"Information",descriptionText:"Here is some helpful information for you"}},a={args:{type:"warning",style:"accentBorder",text:"Warning",descriptionText:"This is a warning message with important information"}},c={args:{type:"success",style:"accentBorder",text:"Success",descriptionText:"Your action was completed successfully"}},l={args:{type:"error",style:"accentBorder",text:"Error",descriptionText:"An error occurred while processing your request"}},d={args:{type:"info",style:"accentBorder",text:"Information",descriptionText:"Here is some helpful information for you"}},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:600},children:"Subdued Style"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{type:"warning",style:"subdued",text:"Warning",descriptionText:"This is a warning message with important information"}),e.jsx(t,{type:"success",style:"subdued",text:"Success",descriptionText:"Your action was completed successfully"}),e.jsx(t,{type:"error",style:"subdued",text:"Error",descriptionText:"An error occurred while processing your request"}),e.jsx(t,{type:"info",style:"subdued",text:"Information",descriptionText:"Here is some helpful information for you"})]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"16px",fontSize:"18px",fontWeight:600},children:"Accent Border Style"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{type:"warning",style:"accentBorder",text:"Warning",descriptionText:"This is a warning message with important information"}),e.jsx(t,{type:"success",style:"accentBorder",text:"Success",descriptionText:"Your action was completed successfully"}),e.jsx(t,{type:"error",style:"accentBorder",text:"Error",descriptionText:"An error occurred while processing your request"}),e.jsx(t,{type:"info",style:"accentBorder",text:"Information",descriptionText:"Here is some helpful information for you"})]})]})]}),parameters:{docs:{description:{story:"Complete showcase of all InlineMessage variants across all types and styles."}}}};var p,m,y;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'subdued',
    text: 'Title',
    descriptionText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    linkText: 'Link',
    buttonText: 'Button',
    showLeadingIcon: true,
    showTrailingIcon: true,
    action: true,
    link: true
  }
}`,...(y=(m=r.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'subdued',
    text: 'Warning',
    descriptionText: 'This is a warning message with important information'
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,b,T;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'success',
    style: 'subdued',
    text: 'Success',
    descriptionText: 'Your action was completed successfully'
  }
}`,...(T=(b=o.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var w,S,B;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    type: 'error',
    style: 'subdued',
    text: 'Error',
    descriptionText: 'An error occurred while processing your request'
  }
}`,...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var I,A,k;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    type: 'info',
    style: 'subdued',
    text: 'Information',
    descriptionText: 'Here is some helpful information for you'
  }
}`,...(k=(A=i.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var W,v,j;a.parameters={...a.parameters,docs:{...(W=a.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: 'warning',
    style: 'accentBorder',
    text: 'Warning',
    descriptionText: 'This is a warning message with important information'
  }
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var M,E,L;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    type: 'success',
    style: 'accentBorder',
    text: 'Success',
    descriptionText: 'Your action was completed successfully'
  }
}`,...(L=(E=c.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};var C,V,q;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    type: 'error',
    style: 'accentBorder',
    text: 'Error',
    descriptionText: 'An error occurred while processing your request'
  }
}`,...(q=(V=l.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var H,Y,D;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    type: 'info',
    style: 'accentBorder',
    text: 'Information',
    descriptionText: 'Here is some helpful information for you'
  }
}`,...(D=(Y=d.parameters)==null?void 0:Y.docs)==null?void 0:D.source}}};var z,P,R;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '18px',
        fontWeight: 600
      }}>Subdued Style</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <InlineMessage type="warning" style="subdued" text="Warning" descriptionText="This is a warning message with important information" />
          <InlineMessage type="success" style="subdued" text="Success" descriptionText="Your action was completed successfully" />
          <InlineMessage type="error" style="subdued" text="Error" descriptionText="An error occurred while processing your request" />
          <InlineMessage type="info" style="subdued" text="Information" descriptionText="Here is some helpful information for you" />
        </div>
      </div>

      <div>
        <h3 style={{
        marginBottom: '16px',
        fontSize: '18px',
        fontWeight: 600
      }}>Accent Border Style</h3>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <InlineMessage type="warning" style="accentBorder" text="Warning" descriptionText="This is a warning message with important information" />
          <InlineMessage type="success" style="accentBorder" text="Success" descriptionText="Your action was completed successfully" />
          <InlineMessage type="error" style="accentBorder" text="Error" descriptionText="An error occurred while processing your request" />
          <InlineMessage type="info" style="accentBorder" text="Information" descriptionText="Here is some helpful information for you" />
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete showcase of all InlineMessage variants across all types and styles.'
      }
    }
  }
}`,...(R=(P=u.parameters)==null?void 0:P.docs)==null?void 0:R.source}}};const N=["Playground","WarningSubdued","SuccessSubdued","ErrorSubdued","InfoSubdued","WarningAccentBorder","SuccessAccentBorder","ErrorAccentBorder","InfoAccentBorder","AllVariants"];export{u as AllVariants,l as ErrorAccentBorder,n as ErrorSubdued,d as InfoAccentBorder,i as InfoSubdued,r as Playground,c as SuccessAccentBorder,o as SuccessSubdued,a as WarningAccentBorder,s as WarningSubdued,N as __namedExportsOrder,K as default};
