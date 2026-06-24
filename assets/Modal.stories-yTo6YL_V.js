import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as y}from"./index-B0WjJBI_.js";import{c as i}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as a}from"./Button-DO4HjNMh.js";import{I as f}from"./Icon-BytZhcyh.js";import{I as x}from"./InputField-BAALJcA9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldImportance-finWzFXd.js";import"./HelpingText-ClsYb8vx.js";const we=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  opacity: ${({$isOpen:t})=>t?1:0};
  visibility: ${({$isOpen:t})=>t?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`,je=i.div`
  background: #ffffff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  width: ${({$width:t})=>t?`${t}px`:"600px"};
  max-width: 90vw;
  max-height: 90vh;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  transform: ${({$isOpen:t})=>t?"scale(1)":"scale(0.95)"};
  opacity: ${({$isOpen:t})=>t?1:0};
  transition: transform 0.3s ease, opacity 0.3s ease;
`,Ce=i.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #D5D5D5;
`,Te=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`,Se=i.h2`
  margin: 0;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #222222;
`,ke=i.p`
  margin: 0;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #909090;
`,Me=i.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 8px;
  background: none;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  color: #222222;
  transition: background 0.2s;

  &:hover {
    background: #F5F5F5;
  }

  &:active {
    background: #E5E5E5;
  }
`,qe=i.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
  min-height: ${({$height:t})=>t?`${t}px`:"442px"};
`,Re=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  border-top: 1px solid #D5D5D5;
`,Ee=i.div`
  display: flex;
  align-items: center;
`,Fe=i.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,b=({isOpen:t,onClose:o,title:h,description:g,children:re,showReset:se=!0,resetLabel:ne="Reset",onReset:le,showCancel:de=!0,cancelLabel:ce="Cancel",onCancel:v,showSubmit:pe=!0,submitLabel:ue="Submit",onSubmit:me,submitType:he="default",customFooter:w,width:fe,height:j,closeOnOverlayClick:xe=!0,closeOnEscape:C=!0,className:ye})=>{y.useEffect(()=>{if(!t||!C)return;const s=ve=>{ve.key==="Escape"&&o()};return document.addEventListener("keydown",s),()=>document.removeEventListener("keydown",s)},[t,C,o]),y.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const be=s=>{s.target===s.currentTarget&&xe&&o()},ge=()=>{v?v():o()};return e.jsx(we,{$isOpen:t,onClick:be,children:e.jsxs(je,{$width:fe,$height:j,$isOpen:t,className:ye,children:[e.jsxs(Ce,{children:[e.jsxs(Te,{children:[e.jsx(Se,{children:h}),g&&e.jsx(ke,{children:g})]}),e.jsx(Me,{onClick:o,"aria-label":"Close modal",children:e.jsx(f,{name:"Close",size:"medium"})})]}),e.jsx(qe,{$height:j,children:re}),e.jsx(Re,{children:w||e.jsxs(e.Fragment,{children:[e.jsx(Ee,{children:se&&e.jsx(a,{variant:"tertiary",size:"medium",onClick:le,children:ne})}),e.jsxs(Fe,{children:[de&&e.jsx(a,{variant:"secondary",size:"medium",leadingIcon:e.jsx(f,{name:"Close",size:"small"}),onClick:ge,children:ce}),pe&&e.jsx(a,{variant:"primary",size:"medium",buttonType:he,leadingIcon:e.jsx(f,{name:"Check",size:"small"}),onClick:me,children:ue})]})]})})]})})};b.__docgenInfo={description:"",methods:[],displayName:"Modal",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal should close"},title:{required:!0,tsType:{name:"string"},description:"Modal title"},description:{required:!1,tsType:{name:"string"},description:"Modal description"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Modal body content"},showReset:{required:!1,tsType:{name:"boolean"},description:"Show reset button",defaultValue:{value:"true",computed:!1}},resetLabel:{required:!1,tsType:{name:"string"},description:"Reset button label",defaultValue:{value:"'Reset'",computed:!1}},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Reset button callback"},showCancel:{required:!1,tsType:{name:"boolean"},description:"Show cancel button",defaultValue:{value:"true",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"Cancel button label",defaultValue:{value:"'Cancel'",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Cancel button callback"},showSubmit:{required:!1,tsType:{name:"boolean"},description:"Show submit button",defaultValue:{value:"true",computed:!1}},submitLabel:{required:!1,tsType:{name:"string"},description:"Submit button label",defaultValue:{value:"'Submit'",computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Submit button callback"},submitType:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:"Submit button type",defaultValue:{value:"'default'",computed:!1}},customFooter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom footer content"},width:{required:!1,tsType:{name:"number"},description:"Modal width"},height:{required:!1,tsType:{name:"number"},description:"Modal height"},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"Close on overlay click",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Close on escape key",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const Pe={title:"Components/Modal",component:b,parameters:{layout:"centered",docs:{description:{component:"A modal dialog component with header, body, and footer sections. Based on Figma design."}}},tags:["autodocs"]},r=t=>{const[o,h]=y.useState(!1);return e.jsxs("div",{children:[e.jsx(a,{onClick:()=>h(!0),children:"Open Modal"}),e.jsx(b,{...t,isOpen:o,onClose:()=>h(!1)})]})},n={render:()=>e.jsx(r,{title:"Popup Example",description:"This is a modal popup with header, body, and footer sections.",onSubmit:()=>console.log("Submit clicked"),onReset:()=>console.log("Reset clicked"),children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Modal Body Content"}),e.jsx("p",{children:"This is the body content of the modal. You can put any content here."}),e.jsx("p",{children:"The modal includes:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Header with title and description"}),e.jsx("li",{children:"Close button"}),e.jsx("li",{children:"Scrollable body"}),e.jsx("li",{children:"Footer with Reset, Cancel, and Submit buttons"})]})]})})},l={render:()=>e.jsx(r,{title:"Edit Profile",description:"Update your profile information",submitLabel:"Save Changes",onSubmit:()=>console.log("Form submitted"),children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(x,{label:"Name",placeholder:"Enter your name",type:"text",size:"default"}),e.jsx(x,{label:"Email",placeholder:"Enter your email",type:"email",size:"default"}),e.jsx(x,{label:"Bio",placeholder:"Tell us about yourself",type:"text",size:"default"})]})})},d={render:()=>e.jsx(r,{title:"Confirm Action",description:"Are you sure you want to proceed?",showReset:!1,cancelLabel:"No, Cancel",submitLabel:"Yes, Proceed",onSubmit:()=>console.log("Confirmed"),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"This action cannot be undone. Please confirm that you want to continue."})})})},c={render:()=>e.jsx(r,{title:"Delete Item",description:"This action is permanent",showReset:!1,submitLabel:"Delete",submitType:"alert",onSubmit:()=>console.log("Deleted"),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"Are you sure you want to delete this item? This action cannot be undone."})})})},p={render:()=>e.jsx(r,{title:"Custom Footer",description:"Modal with custom footer content",customFooter:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",width:"100%",gap:"12px"},children:[e.jsx(a,{variant:"tertiary",size:"medium",children:"Skip"}),e.jsx(a,{variant:"secondary",size:"medium",children:"Back"}),e.jsx(a,{variant:"primary",size:"medium",children:"Next"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"This modal has a custom footer with different buttons."})})})},u={render:()=>e.jsx(r,{title:"Terms and Conditions",description:"Please read and accept our terms",submitLabel:"Accept",height:600,children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Terms of Service"}),[...Array(20)].map((t,o)=>e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},o))]})})},m={render:()=>e.jsx(r,{title:"Quick Note",width:400,height:200,showReset:!1,submitLabel:"Got it",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx("p",{children:"This is a smaller modal for quick messages."})})})};var T,S,k,M,q;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ModalWrapper title="Popup Example" description="This is a modal popup with header, body, and footer sections." onSubmit={() => console.log('Submit clicked')} onReset={() => console.log('Reset clicked')}>
    <div style={{
      padding: '20px'
    }}>
      <h3>Modal Body Content</h3>
      <p>This is the body content of the modal. You can put any content here.</p>
      <p>The modal includes:</p>
      <ul>
        <li>Header with title and description</li>
        <li>Close button</li>
        <li>Scrollable body</li>
        <li>Footer with Reset, Cancel, and Submit buttons</li>
      </ul>
    </div>
  </ModalWrapper>
}`,...(k=(S=n.parameters)==null?void 0:S.docs)==null?void 0:k.source},description:{story:"Default modal with all standard features",...(q=(M=n.parameters)==null?void 0:M.docs)==null?void 0:q.description}}};var R,E,F,z,L;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <ModalWrapper title="Edit Profile" description="Update your profile information" submitLabel="Save Changes" onSubmit={() => console.log('Form submitted')}>
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <InputField label="Name" placeholder="Enter your name" type="text" size="default" />
      <InputField label="Email" placeholder="Enter your email" type="email" size="default" />
      <InputField label="Bio" placeholder="Tell us about yourself" type="text" size="default" />
    </div>
  </ModalWrapper>
}`,...(F=(E=l.parameters)==null?void 0:E.docs)==null?void 0:F.source},description:{story:"Modal with form content",...(L=(z=l.parameters)==null?void 0:z.docs)==null?void 0:L.description}}};var W,D,B,N,A;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <ModalWrapper title="Confirm Action" description="Are you sure you want to proceed?" showReset={false} cancelLabel="No, Cancel" submitLabel="Yes, Proceed" onSubmit={() => console.log('Confirmed')}>
    <div style={{
      padding: '20px'
    }}>
      <p>This action cannot be undone. Please confirm that you want to continue.</p>
    </div>
  </ModalWrapper>
}`,...(B=(D=d.parameters)==null?void 0:D.docs)==null?void 0:B.source},description:{story:"Modal without reset button",...(A=(N=d.parameters)==null?void 0:N.docs)==null?void 0:A.description}}};var I,$,P,V,O;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <ModalWrapper title="Delete Item" description="This action is permanent" showReset={false} submitLabel="Delete" submitType="alert" onSubmit={() => console.log('Deleted')}>
    <div style={{
      padding: '20px'
    }}>
      <p>Are you sure you want to delete this item? This action cannot be undone.</p>
    </div>
  </ModalWrapper>
}`,...(P=($=c.parameters)==null?void 0:$.docs)==null?void 0:P.source},description:{story:"Modal with warning submit button",...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.description}}};var _,H,U,Y,G;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <ModalWrapper title="Custom Footer" description="Modal with custom footer content" customFooter={<div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    width: '100%',
    gap: '12px'
  }}>
        <Button variant="tertiary" size="medium">
          Skip
        </Button>
        <Button variant="secondary" size="medium">
          Back
        </Button>
        <Button variant="primary" size="medium">
          Next
        </Button>
      </div>}>
    <div style={{
      padding: '20px'
    }}>
      <p>This modal has a custom footer with different buttons.</p>
    </div>
  </ModalWrapper>
}`,...(U=(H=p.parameters)==null?void 0:H.docs)==null?void 0:U.source},description:{story:"Modal with custom footer",...(G=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:G.description}}};var Q,J,K,X,Z;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <ModalWrapper title="Terms and Conditions" description="Please read and accept our terms" submitLabel="Accept" height={600}>
    <div style={{
      padding: '20px'
    }}>
      <h3>Terms of Service</h3>
      {[...Array(20)].map((_, i) => <p key={i}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>)}
    </div>
  </ModalWrapper>
}`,...(K=(J=u.parameters)==null?void 0:J.docs)==null?void 0:K.source},description:{story:"Large modal with scrollable content",...(Z=(X=u.parameters)==null?void 0:X.docs)==null?void 0:Z.description}}};var ee,te,ie,oe,ae;m.parameters={...m.parameters,docs:{...(ee=m.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <ModalWrapper title="Quick Note" width={400} height={200} showReset={false} submitLabel="Got it">
    <div style={{
      padding: '20px'
    }}>
      <p>This is a smaller modal for quick messages.</p>
    </div>
  </ModalWrapper>
}`,...(ie=(te=m.parameters)==null?void 0:te.docs)==null?void 0:ie.source},description:{story:"Small modal",...(ae=(oe=m.parameters)==null?void 0:oe.docs)==null?void 0:ae.description}}};const Ve=["Default","WithForm","NoReset","WarningAction","CustomFooter","ScrollableContent","SmallModal"];export{p as CustomFooter,n as Default,d as NoReset,u as ScrollableContent,m as SmallModal,c as WarningAction,l as WithForm,Ve as __namedExportsOrder,Pe as default};
