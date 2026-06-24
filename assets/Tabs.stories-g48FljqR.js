import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as j}from"./index-B0WjJBI_.js";import{c as f}from"./styled-components.browser.esm-BIi91Tbq.js";import{I as L}from"./Icon-BytZhcyh.js";import"./_commonjsHelpers-CqkleIqs.js";const Qe=f.div`
  display: flex;
  align-items: center;
  gap: 0;
  width: 100%;
`,Xe=f.button`
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;
  background: ${({$isActive:a,$type:r})=>r==="child"&&a?"#EFE6F8":"transparent"};
  cursor: ${({$disabled:a})=>a?"not-allowed":"pointer"};
  opacity: ${({$disabled:a})=>a?.5:1};
  transition: all 0.2s ease;
  
  /* Parent tab styles */
  ${({$type:a})=>a==="parent"&&`
    padding: 8px 16px 8px 16px;
    border-bottom: 2px solid transparent;
  `}
  
  /* Child tab styles */
  ${({$type:a})=>a==="child"&&`
    padding: 4px 8px;
    border-radius: 4px;
  `}
  
  /* Active parent tab */
  ${({$isActive:a,$type:r})=>a&&r==="parent"&&`
    border-bottom-color: #6222BC; // primary-400
  `}
  
  /* Inactive parent tab */
  ${({$isActive:a,$type:r})=>!a&&r==="parent"&&`
    border-bottom-color: #D5D5D5; // gray-400
  `}
  
  &:hover:not(:disabled) {
    ${({$type:a,$isActive:r})=>a==="child"&&!r?"background: #F8F8F8;":""}
  }
`,Ye=f.span`
  font-family: 'Elevance Sans', sans-serif;
  white-space: nowrap;
  
  /* Parent tab label */
  ${({$type:a,$isActive:r})=>a==="parent"&&`
    font-size: 16px;
    line-height: 19px;
    font-weight: ${r?600:500};
    color: ${r?"#6222BC":"#909090"}; // primary-400 : gray-600
  `}
  
  /* Child tab label */
  ${({$type:a,$isActive:r})=>a==="child"&&`
    font-size: 14px;
    line-height: 16px;
    font-weight: ${r?600:500};
    color: ${r?"#6222BC":"#909090"}; // primary-400 : gray-600
  `}
`,Ze=f.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 6px;
  border-radius: 999px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  
  ${({$isActive:a})=>a?`
    background: #6222BC; // primary-400
    color: #FFFFFF;
  `:`
    background: #F8F8F8; // gray-200
    border: 1px solid #464646; // gray-800
    color: #464646; // gray-800
  `}
`,S=f.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({$isActive:a})=>a?"#6222BC":"#909090"};
`,v=({tabs:a,activeTab:r,onChange:o,type:x="parent",showLeadingIcon:_e=!0,showTrailingIcon:Ue=!1,showBadge:Ge=!0,className:Je})=>{const Ke=(t,n)=>{n||o(t)};return e.jsx(Qe,{className:Je,children:a.map(t=>{const n=t.id===r;return e.jsxs(Xe,{$isActive:n,$type:x,$disabled:!!t.disabled,onClick:()=>Ke(t.id,t.disabled),disabled:t.disabled,role:"tab","aria-selected":n,"aria-disabled":t.disabled,children:[_e&&t.leadingIcon&&e.jsx(S,{$isActive:n,children:e.jsx(L,{name:t.leadingIcon,size:"small"})}),e.jsx(Ye,{$isActive:n,$type:x,children:t.label}),Ge&&t.count!==void 0&&e.jsx(Ze,{$isActive:n,children:t.count}),Ue&&t.trailingIcon&&e.jsx(S,{$isActive:n,children:e.jsx(L,{name:t.trailingIcon,size:"small"})})]},t.id)})})};v.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{tabs:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:"Array of tab items"},activeTab:{required:!0,tsType:{name:"string"},description:"Active tab ID"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:"Tab change handler"},type:{required:!1,tsType:{name:"union",raw:"'parent' | 'child'",elements:[{name:"literal",value:"'parent'"},{name:"literal",value:"'child'"}]},description:"Tab type",defaultValue:{value:"'parent'",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show leading icons",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show trailing icons",defaultValue:{value:"false",computed:!1}},showBadge:{required:!1,tsType:{name:"boolean"},description:"Show badge counts",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};const na={title:"Components/Tabs",component:v,parameters:{layout:"padded",docs:{description:{component:"A tab navigation component with parent/child hierarchy support. Based on Figma design."}}},tags:["autodocs"]},C=[{id:"1",label:"Dashboard",leadingIcon:"Home",count:4},{id:"2",label:"Analytics",leadingIcon:"BarChart",count:12},{id:"3",label:"Reports",leadingIcon:"Description",count:7},{id:"4",label:"Settings",leadingIcon:"Settings"}],B=[{id:"1",label:"Overview",leadingIcon:"Home",count:3},{id:"2",label:"Details",leadingIcon:"Info",count:8},{id:"3",label:"History",leadingIcon:"History",count:15},{id:"4",label:"Notes",leadingIcon:"Note"}],s=a=>{const[r,o]=j.useState(a.activeTab||a.tabs[0].id);return e.jsxs("div",{style:{width:"100%"},children:[e.jsx(v,{...a,activeTab:r,onChange:o}),e.jsx("div",{style:{marginTop:"20px",padding:"20px",background:"#f5f5f5",borderRadius:"4px"},children:e.jsxs("p",{children:[e.jsx("strong",{children:"Active Tab:"})," ",r]})})]})},i={render:()=>e.jsx(s,{tabs:C,type:"parent",showLeadingIcon:!0,showBadge:!0})},d={render:()=>e.jsx(s,{tabs:B,type:"child",showLeadingIcon:!0,showBadge:!0})},c={render:()=>e.jsx(s,{tabs:C,type:"parent",showLeadingIcon:!1,showBadge:!0})},l={render:()=>e.jsx(s,{tabs:C,type:"parent",showLeadingIcon:!0,showBadge:!1})},p={render:()=>e.jsx(s,{tabs:[{id:"1",label:"Dashboard"},{id:"2",label:"Analytics"},{id:"3",label:"Reports"},{id:"4",label:"Settings"}],type:"parent",showLeadingIcon:!1,showBadge:!1})},b={render:()=>e.jsx(s,{tabs:B,type:"child",showLeadingIcon:!1,showBadge:!0})},u={render:()=>e.jsx(s,{tabs:B,type:"child",showLeadingIcon:!0,showBadge:!1})},g={render:()=>e.jsx(s,{tabs:[{id:"1",label:"Overview"},{id:"2",label:"Details"},{id:"3",label:"History"},{id:"4",label:"Notes"}],type:"child",showLeadingIcon:!1,showBadge:!1})},h={render:()=>e.jsx(s,{tabs:[{id:"1",label:"Dashboard",leadingIcon:"Home",count:4},{id:"2",label:"Analytics",leadingIcon:"BarChart",count:12,disabled:!0},{id:"3",label:"Reports",leadingIcon:"Description",count:7},{id:"4",label:"Settings",leadingIcon:"Settings"}],type:"parent",showLeadingIcon:!0,showBadge:!0})},m={render:()=>e.jsx(s,{tabs:[{id:"1",label:"Overview",leadingIcon:"Home",count:3},{id:"2",label:"Details",leadingIcon:"Info",count:8,disabled:!0},{id:"3",label:"History",leadingIcon:"History",count:15},{id:"4",label:"Notes",leadingIcon:"Note"}],type:"child",showLeadingIcon:!0,showBadge:!0})},T={render:()=>{const[a,r]=j.useState("1"),[o,x]=j.useState("1");return e.jsxs("div",{style:{width:"100%"},children:[e.jsx(v,{tabs:C,activeTab:a,onChange:r,type:"parent",showLeadingIcon:!0,showBadge:!0}),e.jsx("div",{style:{marginTop:"16px"},children:e.jsx(v,{tabs:B,activeTab:o,onChange:x,type:"child",showLeadingIcon:!0,showBadge:!0})}),e.jsxs("div",{style:{marginTop:"20px",padding:"20px",background:"#f5f5f5",borderRadius:"4px"},children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Active Parent Tab:"})," ",a]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Active Child Tab:"})," ",o]})]})]})}},y={render:()=>e.jsx(s,{tabs:[{id:"1",label:"Tab 1",count:1},{id:"2",label:"Tab 2",count:2},{id:"3",label:"Tab 3",count:3},{id:"4",label:"Tab 4",count:4},{id:"5",label:"Tab 5",count:5},{id:"6",label:"Tab 6",count:6},{id:"7",label:"Tab 7",count:7},{id:"8",label:"Tab 8",count:8}],type:"parent",showLeadingIcon:!1,showBadge:!0})},w={render:()=>e.jsx(s,{tabs:[{id:"1",label:"Dashboard Overview",count:4},{id:"2",label:"Analytics & Reports",count:12},{id:"3",label:"User Management",count:7},{id:"4",label:"System Settings",count:2}],type:"parent",showLeadingIcon:!1,showBadge:!0})},I={render:()=>e.jsx(s,{tabs:[{id:"1",label:"Dashboard",leadingIcon:"Home",trailingIcon:"ChevronRight",count:4},{id:"2",label:"Analytics",leadingIcon:"BarChart",trailingIcon:"ChevronRight",count:12},{id:"3",label:"Reports",leadingIcon:"Description",trailingIcon:"ChevronRight",count:7}],type:"parent",showLeadingIcon:!0,showTrailingIcon:!0,showBadge:!0})};var A,P,D,W,$;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={parentTabs} type="parent" showLeadingIcon={true} showBadge={true} />
}`,...(D=(P=i.parameters)==null?void 0:P.docs)==null?void 0:D.source},description:{story:"Parent (Primary) tabs with all features",...($=(W=i.parameters)==null?void 0:W.docs)==null?void 0:$.description}}};var N,R,H,F,k;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={childTabs} type="child" showLeadingIcon={true} showBadge={true} />
}`,...(H=(R=d.parameters)==null?void 0:R.docs)==null?void 0:H.source},description:{story:"Child (Secondary) tabs with all features",...(k=(F=d.parameters)==null?void 0:F.docs)==null?void 0:k.description}}};var E,M,q,O,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={parentTabs} type="parent" showLeadingIcon={false} showBadge={true} />
}`,...(q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:q.source},description:{story:"Parent tabs without icons",...(z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:z.description}}};var V,_,U,G,J;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={parentTabs} type="parent" showLeadingIcon={true} showBadge={false} />
}`,...(U=(_=l.parameters)==null?void 0:_.docs)==null?void 0:U.source},description:{story:"Parent tabs without badges",...(J=(G=l.parameters)==null?void 0:G.docs)==null?void 0:J.description}}};var K,Q,X,Y,Z;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Dashboard'
  }, {
    id: '2',
    label: 'Analytics'
  }, {
    id: '3',
    label: 'Reports'
  }, {
    id: '4',
    label: 'Settings'
  }]} type="parent" showLeadingIcon={false} showBadge={false} />
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source},description:{story:"Parent tabs minimal (no icons, no badges)",...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};var ee,ae,re,te,se;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={childTabs} type="child" showLeadingIcon={false} showBadge={true} />
}`,...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.source},description:{story:"Child tabs without icons",...(se=(te=b.parameters)==null?void 0:te.docs)==null?void 0:se.description}}};var ne,oe,ie,de,ce;u.parameters={...u.parameters,docs:{...(ne=u.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={childTabs} type="child" showLeadingIcon={true} showBadge={false} />
}`,...(ie=(oe=u.parameters)==null?void 0:oe.docs)==null?void 0:ie.source},description:{story:"Child tabs without badges",...(ce=(de=u.parameters)==null?void 0:de.docs)==null?void 0:ce.description}}};var le,pe,be,ue,ge;g.parameters={...g.parameters,docs:{...(le=g.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Overview'
  }, {
    id: '2',
    label: 'Details'
  }, {
    id: '3',
    label: 'History'
  }, {
    id: '4',
    label: 'Notes'
  }]} type="child" showLeadingIcon={false} showBadge={false} />
}`,...(be=(pe=g.parameters)==null?void 0:pe.docs)==null?void 0:be.source},description:{story:"Child tabs minimal (no icons, no badges)",...(ge=(ue=g.parameters)==null?void 0:ue.docs)==null?void 0:ge.description}}};var he,me,Te,ye,we;h.parameters={...h.parameters,docs:{...(he=h.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Dashboard',
    leadingIcon: 'Home',
    count: 4
  }, {
    id: '2',
    label: 'Analytics',
    leadingIcon: 'BarChart',
    count: 12,
    disabled: true
  }, {
    id: '3',
    label: 'Reports',
    leadingIcon: 'Description',
    count: 7
  }, {
    id: '4',
    label: 'Settings',
    leadingIcon: 'Settings'
  }]} type="parent" showLeadingIcon={true} showBadge={true} />
}`,...(Te=(me=h.parameters)==null?void 0:me.docs)==null?void 0:Te.source},description:{story:"Parent tabs with disabled tab",...(we=(ye=h.parameters)==null?void 0:ye.docs)==null?void 0:we.description}}};var Ie,ve,fe,xe,Ce;m.parameters={...m.parameters,docs:{...(Ie=m.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Overview',
    leadingIcon: 'Home',
    count: 3
  }, {
    id: '2',
    label: 'Details',
    leadingIcon: 'Info',
    count: 8,
    disabled: true
  }, {
    id: '3',
    label: 'History',
    leadingIcon: 'History',
    count: 15
  }, {
    id: '4',
    label: 'Notes',
    leadingIcon: 'Note'
  }]} type="child" showLeadingIcon={true} showBadge={true} />
}`,...(fe=(ve=m.parameters)==null?void 0:ve.docs)==null?void 0:fe.source},description:{story:"Child tabs with disabled tab",...(Ce=(xe=m.parameters)==null?void 0:xe.docs)==null?void 0:Ce.description}}};var Be,je,Le,Se,Ae;T.parameters={...T.parameters,docs:{...(Be=T.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => {
    const [activeParentTab, setActiveParentTab] = useState('1');
    const [activeChildTab, setActiveChildTab] = useState('1');
    return <div style={{
      width: '100%'
    }}>
        <Tabs tabs={parentTabs} activeTab={activeParentTab} onChange={setActiveParentTab} type="parent" showLeadingIcon={true} showBadge={true} />
        <div style={{
        marginTop: '16px'
      }}>
          <Tabs tabs={childTabs} activeTab={activeChildTab} onChange={setActiveChildTab} type="child" showLeadingIcon={true} showBadge={true} />
        </div>
        <div style={{
        marginTop: '20px',
        padding: '20px',
        background: '#f5f5f5',
        borderRadius: '4px'
      }}>
          <p><strong>Active Parent Tab:</strong> {activeParentTab}</p>
          <p><strong>Active Child Tab:</strong> {activeChildTab}</p>
        </div>
      </div>;
  }
}`,...(Le=(je=T.parameters)==null?void 0:je.docs)==null?void 0:Le.source},description:{story:"Parent and Child tabs hierarchy example",...(Ae=(Se=T.parameters)==null?void 0:Se.docs)==null?void 0:Ae.description}}};var Pe,De,We,$e,Ne;y.parameters={...y.parameters,docs:{...(Pe=y.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Tab 1',
    count: 1
  }, {
    id: '2',
    label: 'Tab 2',
    count: 2
  }, {
    id: '3',
    label: 'Tab 3',
    count: 3
  }, {
    id: '4',
    label: 'Tab 4',
    count: 4
  }, {
    id: '5',
    label: 'Tab 5',
    count: 5
  }, {
    id: '6',
    label: 'Tab 6',
    count: 6
  }, {
    id: '7',
    label: 'Tab 7',
    count: 7
  }, {
    id: '8',
    label: 'Tab 8',
    count: 8
  }]} type="parent" showLeadingIcon={false} showBadge={true} />
}`,...(We=(De=y.parameters)==null?void 0:De.docs)==null?void 0:We.source},description:{story:"Many tabs (scrollable)",...(Ne=($e=y.parameters)==null?void 0:$e.docs)==null?void 0:Ne.description}}};var Re,He,Fe,ke,Ee;w.parameters={...w.parameters,docs:{...(Re=w.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Dashboard Overview',
    count: 4
  }, {
    id: '2',
    label: 'Analytics & Reports',
    count: 12
  }, {
    id: '3',
    label: 'User Management',
    count: 7
  }, {
    id: '4',
    label: 'System Settings',
    count: 2
  }]} type="parent" showLeadingIcon={false} showBadge={true} />
}`,...(Fe=(He=w.parameters)==null?void 0:He.docs)==null?void 0:Fe.source},description:{story:"Long tab labels",...(Ee=(ke=w.parameters)==null?void 0:ke.docs)==null?void 0:Ee.description}}};var Me,qe,Oe,ze,Ve;I.parameters={...I.parameters,docs:{...(Me=I.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <TabsWrapper tabs={[{
    id: '1',
    label: 'Dashboard',
    leadingIcon: 'Home',
    trailingIcon: 'ChevronRight',
    count: 4
  }, {
    id: '2',
    label: 'Analytics',
    leadingIcon: 'BarChart',
    trailingIcon: 'ChevronRight',
    count: 12
  }, {
    id: '3',
    label: 'Reports',
    leadingIcon: 'Description',
    trailingIcon: 'ChevronRight',
    count: 7
  }]} type="parent" showLeadingIcon={true} showTrailingIcon={true} showBadge={true} />
}`,...(Oe=(qe=I.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source},description:{story:"With trailing icons",...(Ve=(ze=I.parameters)==null?void 0:ze.docs)==null?void 0:Ve.description}}};const oa=["ParentTabs","ChildTabs","ParentTabsNoIcons","ParentTabsNoBadges","ParentTabsMinimal","ChildTabsNoIcons","ChildTabsNoBadges","ChildTabsMinimal","ParentTabsWithDisabled","ChildTabsWithDisabled","HierarchyExample","ManyTabs","LongLabels","WithTrailingIcons"];export{d as ChildTabs,g as ChildTabsMinimal,u as ChildTabsNoBadges,b as ChildTabsNoIcons,m as ChildTabsWithDisabled,T as HierarchyExample,w as LongLabels,y as ManyTabs,i as ParentTabs,p as ParentTabsMinimal,l as ParentTabsNoBadges,c as ParentTabsNoIcons,h as ParentTabsWithDisabled,I as WithTrailingIcons,oa as __namedExportsOrder,na as default};
