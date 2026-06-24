import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as y}from"./index-B0WjJBI_.js";import{c as i}from"./styled-components.browser.esm-BIi91Tbq.js";import{B as s}from"./Button-DO4HjNMh.js";import{I as f}from"./Icon-BytZhcyh.js";import{I as x}from"./InputField-BAALJcA9.js";import"./_commonjsHelpers-CqkleIqs.js";import"./FieldImportance-finWzFXd.js";import"./HelpingText-ClsYb8vx.js";const ve=i.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  opacity: ${({$isOpen:t})=>t?1:0};
  visibility: ${({$isOpen:t})=>t?"visible":"hidden"};
  transition: opacity 0.3s ease, visibility 0.3s ease;
`,je=i.div`
  position: fixed;
  top: 0;
  ${({$position:t})=>t==="right"?"right: 0":"left: 0"};
  bottom: 0;
  width: ${({$width:t})=>t?`${t}px`:"600px"};
  max-width: 90vw;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  z-index: 1001;
  box-shadow: ${({$position:t})=>t==="right"?"-4px 0 6px -1px rgba(0, 0, 0, 0.1)":"4px 0 6px -1px rgba(0, 0, 0, 0.1)"};
  transform: ${({$isOpen:t,$position:r})=>t?"translateX(0)":r==="right"?"translateX(100%)":"translateX(-100%)"};
  transition: transform 0.3s ease;
`,De=i.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid #D5D5D5;
  flex-shrink: 0;
`,Se=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`,Ce=i.h2`
  margin: 0;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
  color: #222222;
`,Ee=i.p`
  margin: 0;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  color: #909090;
`,Re=i.button`
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
`,ke=i.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`,Te=i.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px 34px;
  border-top: 1px solid #D5D5D5;
  flex-shrink: 0;
`,Ae=i.div`
  display: flex;
  align-items: center;
`,We=i.div`
  display: flex;
  align-items: center;
  gap: 14px;
`,g=({isOpen:t,onClose:r,title:h,description:b,children:se,position:ae="right",showReset:ne=!0,resetLabel:le="Reset",onReset:oe,showCancel:de=!0,cancelLabel:ce="Cancel",onCancel:w,showSubmit:pe=!0,submitLabel:ue="Submit",onSubmit:me,submitType:he="default",customFooter:v,width:xe,closeOnOverlayClick:fe=!0,closeOnEscape:j=!0,className:ye})=>{y.useEffect(()=>{if(!t||!j)return;const n=we=>{we.key==="Escape"&&r()};return document.addEventListener("keydown",n),()=>document.removeEventListener("keydown",n)},[t,j,r]),y.useEffect(()=>(t?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[t]);const ge=n=>{n.target===n.currentTarget&&fe&&r()},be=()=>{w?w():r()};return t?e.jsxs(e.Fragment,{children:[e.jsx(ve,{$isOpen:t,onClick:ge}),e.jsxs(je,{$width:xe,$position:ae,$isOpen:t,className:ye,children:[e.jsxs(De,{children:[e.jsxs(Se,{children:[e.jsx(Ce,{children:h}),b&&e.jsx(Ee,{children:b})]}),e.jsx(Re,{onClick:r,"aria-label":"Close drawer",children:e.jsx(f,{name:"Close",size:"medium"})})]}),e.jsx(ke,{children:se}),e.jsx(Te,{children:v||e.jsxs(e.Fragment,{children:[e.jsx(Ae,{children:ne&&e.jsx(s,{variant:"tertiary",size:"medium",onClick:oe,children:le})}),e.jsxs(We,{children:[de&&e.jsx(s,{variant:"secondary",size:"medium",leadingIcon:e.jsx(f,{name:"Close",size:"small"}),onClick:be,children:ce}),pe&&e.jsx(s,{variant:"primary",size:"medium",buttonType:he,leadingIcon:e.jsx(f,{name:"Check",size:"small"}),onClick:me,children:ue})]})]})})]})]}):null};g.__docgenInfo={description:"",methods:[],displayName:"Drawer",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the drawer is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when drawer should close"},title:{required:!0,tsType:{name:"string"},description:"Drawer title"},description:{required:!1,tsType:{name:"string"},description:"Drawer description"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Drawer body content"},position:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"Drawer position",defaultValue:{value:"'right'",computed:!1}},showReset:{required:!1,tsType:{name:"boolean"},description:"Show reset button",defaultValue:{value:"true",computed:!1}},resetLabel:{required:!1,tsType:{name:"string"},description:"Reset button label",defaultValue:{value:"'Reset'",computed:!1}},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Reset button callback"},showCancel:{required:!1,tsType:{name:"boolean"},description:"Show cancel button",defaultValue:{value:"true",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"Cancel button label",defaultValue:{value:"'Cancel'",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Cancel button callback"},showSubmit:{required:!1,tsType:{name:"boolean"},description:"Show submit button",defaultValue:{value:"true",computed:!1}},submitLabel:{required:!1,tsType:{name:"string"},description:"Submit button label",defaultValue:{value:"'Submit'",computed:!1}},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Submit button callback"},submitType:{required:!1,tsType:{name:"union",raw:"'default' | 'safe' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'safe'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:"Submit button type",defaultValue:{value:"'default'",computed:!1}},customFooter:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom footer content"},width:{required:!1,tsType:{name:"number"},description:"Drawer width"},closeOnOverlayClick:{required:!1,tsType:{name:"boolean"},description:"Close on overlay click",defaultValue:{value:"true",computed:!1}},closeOnEscape:{required:!1,tsType:{name:"boolean"},description:"Close on escape key",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const Pe={title:"Components/Drawer",component:g,parameters:{layout:"fullscreen",docs:{description:{component:"A side panel drawer component with header, body, and footer sections. Based on Figma design."}}},tags:["autodocs"]},a=t=>{const[r,h]=y.useState(!1);return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(s,{onClick:()=>h(!0),children:"Open Drawer"}),e.jsx(g,{...t,isOpen:r,onClose:()=>h(!1)})]})},l={render:()=>e.jsx(a,{title:"Side panel Heading",description:"Put short description here",onSubmit:()=>console.log("Submit clicked"),onReset:()=>console.log("Reset clicked"),children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Drawer Body Content"}),e.jsx("p",{children:"This is the body content of the drawer. You can put any content here."}),e.jsx("p",{children:"The drawer includes:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Header with title and description"}),e.jsx("li",{children:"Close button"}),e.jsx("li",{children:"Scrollable body"}),e.jsx("li",{children:"Footer with Reset, Cancel, and Submit buttons"})]})]})})},o={render:()=>e.jsx(a,{title:"Left Side Panel",description:"This drawer opens from the left",position:"left",onSubmit:()=>console.log("Submit clicked"),children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Left Drawer"}),e.jsx("p",{children:"This drawer slides in from the left side of the screen."})]})})},d={render:()=>e.jsx(a,{title:"Add New User",description:"Fill in the user details",submitLabel:"Create User",onSubmit:()=>console.log("User created"),children:e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(x,{label:"First Name",placeholder:"Enter first name",type:"text",size:"default"}),e.jsx(x,{label:"Last Name",placeholder:"Enter last name",type:"text",size:"default"}),e.jsx(x,{label:"Email",placeholder:"Enter email",type:"email",size:"default"}),e.jsx(x,{label:"Phone",placeholder:"Enter phone number",type:"tel",size:"default"})]})})},c={render:()=>e.jsx(a,{title:"View Details",description:"User information",showReset:!1,showSubmit:!1,cancelLabel:"Close",children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"User Profile"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Name:"})," John Doe"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Email:"})," john.doe@example.com"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Role:"})," Administrator"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Status:"})," Active"]})]})})},p={render:()=>e.jsx(a,{title:"Activity Log",description:"Recent system activities",showReset:!1,showSubmit:!1,cancelLabel:"Close",children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Recent Activities"}),[...Array(30)].map((t,r)=>e.jsxs("div",{style:{padding:"12px",marginBottom:"8px",border:"1px solid #E5E5E5",borderRadius:"4px"},children:[e.jsxs("p",{style:{margin:0,fontWeight:600},children:["Activity ",r+1]}),e.jsx("p",{style:{margin:"4px 0 0",fontSize:"14px",color:"#666"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]},r))]})})},u={render:()=>e.jsx(a,{title:"Quick Actions",width:400,showReset:!1,showCancel:!1,submitLabel:"Done",children:e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Actions"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(s,{variant:"secondary",size:"medium",fullWidth:!0,children:"Export Data"}),e.jsx(s,{variant:"secondary",size:"medium",fullWidth:!0,children:"Import Data"}),e.jsx(s,{variant:"secondary",size:"medium",fullWidth:!0,children:"Settings"}),e.jsx(s,{variant:"secondary",size:"medium",fullWidth:!0,children:"Help"})]})]})})},m={render:()=>e.jsx(a,{title:"Data Table",description:"View and manage data",width:800,children:e.jsx("div",{style:{padding:"20px"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"2px solid #D5D5D5"},children:[e.jsx("th",{style:{padding:"12px",textAlign:"left"},children:"ID"}),e.jsx("th",{style:{padding:"12px",textAlign:"left"},children:"Name"}),e.jsx("th",{style:{padding:"12px",textAlign:"left"},children:"Email"}),e.jsx("th",{style:{padding:"12px",textAlign:"left"},children:"Status"})]})}),e.jsx("tbody",{children:[...Array(10)].map((t,r)=>e.jsxs("tr",{style:{borderBottom:"1px solid #E5E5E5"},children:[e.jsx("td",{style:{padding:"12px"},children:r+1}),e.jsxs("td",{style:{padding:"12px"},children:["User ",r+1]}),e.jsxs("td",{style:{padding:"12px"},children:["user",r+1,"@example.com"]}),e.jsx("td",{style:{padding:"12px"},children:"Active"})]},r))})]})})})};var D,S,C,E,R;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Side panel Heading" description="Put short description here" onSubmit={() => console.log('Submit clicked')} onReset={() => console.log('Reset clicked')}>
    <div style={{
      padding: '20px'
    }}>
      <h3>Drawer Body Content</h3>
      <p>This is the body content of the drawer. You can put any content here.</p>
      <p>The drawer includes:</p>
      <ul>
        <li>Header with title and description</li>
        <li>Close button</li>
        <li>Scrollable body</li>
        <li>Footer with Reset, Cancel, and Submit buttons</li>
      </ul>
    </div>
  </DrawerWrapper>
}`,...(C=(S=l.parameters)==null?void 0:S.docs)==null?void 0:C.source},description:{story:"Default drawer from the right side",...(R=(E=l.parameters)==null?void 0:E.docs)==null?void 0:R.description}}};var k,T,A,W,z;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Left Side Panel" description="This drawer opens from the left" position="left" onSubmit={() => console.log('Submit clicked')}>
    <div style={{
      padding: '20px'
    }}>
      <h3>Left Drawer</h3>
      <p>This drawer slides in from the left side of the screen.</p>
    </div>
  </DrawerWrapper>
}`,...(A=(T=o.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:"Drawer from the left side",...(z=(W=o.parameters)==null?void 0:W.docs)==null?void 0:z.description}}};var L,F,N,q,B;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Add New User" description="Fill in the user details" submitLabel="Create User" onSubmit={() => console.log('User created')}>
    <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
      <InputField label="First Name" placeholder="Enter first name" type="text" size="default" />
      <InputField label="Last Name" placeholder="Enter last name" type="text" size="default" />
      <InputField label="Email" placeholder="Enter email" type="email" size="default" />
      <InputField label="Phone" placeholder="Enter phone number" type="tel" size="default" />
    </div>
  </DrawerWrapper>
}`,...(N=(F=d.parameters)==null?void 0:F.docs)==null?void 0:N.source},description:{story:"Drawer with form content",...(B=(q=d.parameters)==null?void 0:q.docs)==null?void 0:B.description}}};var I,V,U,P,$;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="View Details" description="User information" showReset={false} showSubmit={false} cancelLabel="Close">
    <div style={{
      padding: '20px'
    }}>
      <h3>User Profile</h3>
      <p><strong>Name:</strong> John Doe</p>
      <p><strong>Email:</strong> john.doe@example.com</p>
      <p><strong>Role:</strong> Administrator</p>
      <p><strong>Status:</strong> Active</p>
    </div>
  </DrawerWrapper>
}`,...(U=(V=c.parameters)==null?void 0:V.docs)==null?void 0:U.source},description:{story:"Drawer without reset button",...($=(P=c.parameters)==null?void 0:P.docs)==null?void 0:$.description}}};var H,_,O,X,J;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Activity Log" description="Recent system activities" showReset={false} showSubmit={false} cancelLabel="Close">
    <div style={{
      padding: '20px'
    }}>
      <h3>Recent Activities</h3>
      {[...Array(30)].map((_, i) => <div key={i} style={{
        padding: '12px',
        marginBottom: '8px',
        border: '1px solid #E5E5E5',
        borderRadius: '4px'
      }}>
          <p style={{
          margin: 0,
          fontWeight: 600
        }}>Activity {i + 1}</p>
          <p style={{
          margin: '4px 0 0',
          fontSize: '14px',
          color: '#666'
        }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>)}
    </div>
  </DrawerWrapper>
}`,...(O=(_=p.parameters)==null?void 0:_.docs)==null?void 0:O.source},description:{story:"Drawer with scrollable content",...(J=(X=p.parameters)==null?void 0:X.docs)==null?void 0:J.description}}};var Q,Y,G,K,M;u.parameters={...u.parameters,docs:{...(Q=u.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Quick Actions" width={400} showReset={false} showCancel={false} submitLabel="Done">
    <div style={{
      padding: '20px'
    }}>
      <h3>Actions</h3>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <Button variant="secondary" size="medium" fullWidth>
          Export Data
        </Button>
        <Button variant="secondary" size="medium" fullWidth>
          Import Data
        </Button>
        <Button variant="secondary" size="medium" fullWidth>
          Settings
        </Button>
        <Button variant="secondary" size="medium" fullWidth>
          Help
        </Button>
      </div>
    </div>
  </DrawerWrapper>
}`,...(G=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:G.source},description:{story:"Narrow drawer",...(M=(K=u.parameters)==null?void 0:K.docs)==null?void 0:M.description}}};var Z,ee,te,re,ie;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <DrawerWrapper title="Data Table" description="View and manage data" width={800}>
    <div style={{
      padding: '20px'
    }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse'
      }}>
        <thead>
          <tr style={{
            borderBottom: '2px solid #D5D5D5'
          }}>
            <th style={{
              padding: '12px',
              textAlign: 'left'
            }}>ID</th>
            <th style={{
              padding: '12px',
              textAlign: 'left'
            }}>Name</th>
            <th style={{
              padding: '12px',
              textAlign: 'left'
            }}>Email</th>
            <th style={{
              padding: '12px',
              textAlign: 'left'
            }}>Status</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(10)].map((_, i) => <tr key={i} style={{
            borderBottom: '1px solid #E5E5E5'
          }}>
              <td style={{
              padding: '12px'
            }}>{i + 1}</td>
              <td style={{
              padding: '12px'
            }}>User {i + 1}</td>
              <td style={{
              padding: '12px'
            }}>user{i + 1}@example.com</td>
              <td style={{
              padding: '12px'
            }}>Active</td>
            </tr>)}
        </tbody>
      </table>
    </div>
  </DrawerWrapper>
}`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Wide drawer",...(ie=(re=m.parameters)==null?void 0:re.docs)==null?void 0:ie.description}}};const $e=["Default","LeftPosition","WithForm","NoReset","ScrollableContent","NarrowDrawer","WideDrawer"];export{l as Default,o as LeftPosition,u as NarrowDrawer,c as NoReset,p as ScrollableContent,m as WideDrawer,d as WithForm,$e as __namedExportsOrder,Pe as default};
