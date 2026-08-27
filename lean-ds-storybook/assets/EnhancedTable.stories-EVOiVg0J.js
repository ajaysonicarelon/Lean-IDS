import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{fn as u}from"./index-CH2Su9EI.js";import{r as c}from"./index-B0WjJBI_.js";import{g as f}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as Jt,b as ne,a as re}from"./TableToolbar-53JTznBb.js";import{T as Et}from"./TableSidePanel-Cy9s63Eh.js";import{P as Vt}from"./Pagination-BewWAyWY.js";import{T as Bt}from"./TableSettings-CG9Hvgnh.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createSvgIcon-B7ekv6yR.js";import"./Checkbox-B5k7d77F.js";import"./Typography-DlcmwxwF.js";import"./Badge-08EIA_9P.js";import"./WarningAmberOutlined-BaSDCFAD.js";import"./Close-Bujf63ZX.js";import"./Chip-CHEHkNu4.js";import"./Button-4FxjpG2D.js";import"./Icon-D9wW9sG4.js";import"./Search-3OWEky2d.js";import"./ExpandMore-DhGl5KfG.js";import"./Settings-DTDGO7Gi.js";import"./Home-l5wlLBdJ.js";import"./InlineMessage-C8LBd6CI.js";import"./Select-Bnepq8z-.js";import"./InputField-DW27YIEC.js";import"./FieldImportance-Blr2F3eN.js";import"./HelpingText-DoRwUTLu.js";import"./RadioButton-FHwiOUoL.js";const Ut=f.th`
  padding: ${({theme:a})=>a.spacing[3]} ${({theme:a})=>a.spacing[7]};
  background-color: ${({theme:a})=>a.colors.palette.primary[50]};
  border-bottom: 1px solid ${({theme:a})=>a.colors.palette.neutral[300]};
  text-align: left;
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-weight: ${({theme:a})=>a.fontWeights.regular};
  position: ${({$locked:a})=>a?"sticky":"relative"};
  left: ${({$leftOffset:a})=>a!==void 0?`${a}px`:"auto"};
  z-index: ${({$locked:a})=>a?3:1};
  transition: box-shadow 0.2s ease;

  &.is-stuck {
    box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  }
`,Yt=f.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[8]};
  width: 100%;
`,_t=f.input`
  width: 100%;
  height: 32px;
  padding: ${({theme:a})=>a.spacing[2]} ${({theme:a})=>a.spacing[3]};
  border: 1px solid ${({theme:a})=>a.colors.palette.neutral[300]};
  border-radius: ${({theme:a})=>a.borderRadius.sm};
  font-size: ${({theme:a})=>a.fontSizes[14]};
  font-family: ${({theme:a})=>a.fonts.primary};
  background-color: ${({theme:a})=>a.colors.palette.neutral[50]};
  color: ${({theme:a})=>a.colors.palette.neutral[900]};
  transition: border-color 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({theme:a})=>a.colors.palette.primary[500]};
  }

  &::placeholder {
    color: ${({theme:a})=>a.colors.palette.neutral[500]};
  }
`,ie=f.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({theme:a})=>a.spacing[4]};
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:a})=>a.colors.palette.neutral[600]};
  transition: color 0.2s ease;

  &:hover {
    color: ${({theme:a})=>a.colors.palette.primary[600]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,Xt=()=>n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M4 4l8 8M12 4l-8 8",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),Gt=()=>n.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:n.jsx("path",{d:"M2 4h12M4 8h8M6 12h4",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})}),mt=({searchValue:a="",searchPlaceholder:j="Search",onSearchChange:g,locked:D=!1,leftOffset:X=0,width:G,className:H,showClearFilter:S=!0,onClearFilter:A,showAdvancedFilter:K=!1,onAdvancedFilter:y,customActions:q=[]})=>{const Q=m=>{g&&g(m.target.value)},Z=m=>{m.stopPropagation(),A?A():g&&g("")},O=m=>{m.stopPropagation(),y&&y()};return n.jsx(Ut,{$locked:D,$leftOffset:X,style:{width:G},className:H,"data-locked":D?"true":void 0,children:n.jsxs(Yt,{children:[n.jsx(_t,{type:"text",value:a,placeholder:j,onChange:Q,onClick:m=>m.stopPropagation()}),S&&n.jsx(ie,{type:"button",onClick:Z,title:"Clear filter",children:n.jsx(Xt,{})}),K&&n.jsx(ie,{type:"button",onClick:O,title:"Advanced filter",children:n.jsx(Gt,{})}),q.map((m,v)=>n.jsx(ie,{type:"button",onClick:J=>{J.stopPropagation(),m.onClick()},title:m.title,children:m.icon},v))]})})};mt.__docgenInfo={description:"",methods:[],displayName:"TableSubHeader",props:{searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},showClearFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onClearFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showAdvancedFilter:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onAdvancedFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},customActions:{required:!1,tsType:{name:"Array",elements:[{name:"FilterAction"}],raw:"FilterAction[]"},description:"",defaultValue:{value:"[]",computed:!1}}}};const Kt=f.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: auto;
  
  ${({$hasMaxHeight:a})=>a&&`
    thead {
      position: sticky;
      top: 0;
      z-index: 10;
      background: #f9fafb;
    }
  `}
`,Qt=f.tr`
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  animation: slideIn 0.3s ease-out;
  animation-delay: ${({$animationDelay:a})=>a}ms;
  animation-fill-mode: backwards;
`,Zt=f.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing[8]};
  width: 100%;
`,ea=f.div`
  display: flex;
  gap: 0;
  width: 100%;
  position: relative;
`,ta=f.div`
  overflow-x: auto;
  ${({$maxHeight:a})=>a&&`
    max-height: ${a};
    overflow-y: auto;
    display: block;
  `}
  border: 1px solid ${({theme:a})=>a.colors.palette.neutral[300]};
  border-radius: ${({$hasSidePanel:a})=>a?"8px 0 0 8px":"8px"};
  position: relative;
  flex: 1;
  ${({$maxHeight:a})=>!a&&"min-height: 500px;"}
`,aa=()=>[{id:"1234567890",claimId:"1234567890",firstName:"John",lastName:"Doe",userDetails:"Associate Name",nrCodes:"NR001",paidAmount:"$4,680",acrLoadDates:"March 12, 2025",contact:"(555) 112.3334",amount:"$4,680",avatar:"https://i.pravatar.cc/32?img=1",city:"New York",state:"NY",status:"Approved",priority:"High"},{id:"1234567891",claimId:"1234567891",firstName:"Jane",lastName:"Smith",userDetails:"Manager",nrCodes:"NR002",paidAmount:"$10,293",acrLoadDates:"March 15, 2025",contact:"(555) 800.0000",amount:"$10,293",avatar:"https://i.pravatar.cc/32?img=2",city:"Los Angeles",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567892",claimId:"1234567892",firstName:"Michael",lastName:"Johnson",userDetails:"Senior Associate",nrCodes:"NR003",paidAmount:"$7,450",acrLoadDates:"March 18, 2025",contact:"(555) 234.5678",amount:"$7,450",avatar:"https://i.pravatar.cc/32?img=3",city:"Chicago",state:"IL",status:"Approved",priority:"Low"},{id:"1234567893",claimId:"1234567893",firstName:"Emily",lastName:"Brown",userDetails:"Analyst",nrCodes:"NR004",paidAmount:"$5,820",acrLoadDates:"March 20, 2025",contact:"(555) 345.6789",amount:"$5,820",avatar:"https://i.pravatar.cc/32?img=4",city:"Houston",state:"TX",status:"Rejected",priority:"High"},{id:"1234567894",claimId:"1234567894",firstName:"David",lastName:"Wilson",userDetails:"Supervisor",nrCodes:"NR005",paidAmount:"$12,100",acrLoadDates:"March 22, 2025",contact:"(555) 456.7890",amount:"$12,100",avatar:"https://i.pravatar.cc/32?img=5",city:"Phoenix",state:"AZ",status:"Approved",priority:"Medium"},{id:"1234567895",claimId:"1234567895",firstName:"Sarah",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR006",paidAmount:"$8,900",acrLoadDates:"March 25, 2025",contact:"(555) 567.8901",amount:"$8,900",avatar:"https://i.pravatar.cc/32?img=6",city:"Philadelphia",state:"PA",status:"Pending",priority:"High"},{id:"1234567896",claimId:"1234567896",firstName:"James",lastName:"Anderson",userDetails:"Lead",nrCodes:"NR007",paidAmount:"$15,200",acrLoadDates:"March 28, 2025",contact:"(555) 678.9012",amount:"$15,200",avatar:"https://i.pravatar.cc/32?img=7",city:"San Antonio",state:"TX",status:"Approved",priority:"Low"},{id:"1234567897",claimId:"1234567897",firstName:"Linda",lastName:"Taylor",userDetails:"Manager",nrCodes:"NR008",paidAmount:"$6,750",acrLoadDates:"March 30, 2025",contact:"(555) 789.0123",amount:"$6,750",avatar:"https://i.pravatar.cc/32?img=8",city:"San Diego",state:"CA",status:"Pending",priority:"Medium"},{id:"1234567898",claimId:"1234567898",firstName:"Robert",lastName:"Thomas",userDetails:"Associate Name",nrCodes:"NR009",paidAmount:"$9,300",acrLoadDates:"April 2, 2025",contact:"(555) 890.1234",amount:"$9,300",avatar:"https://i.pravatar.cc/32?img=9",city:"Dallas",state:"TX",status:"Approved",priority:"High"},{id:"1234567899",claimId:"1234567899",firstName:"Patricia",lastName:"Jackson",userDetails:"Senior Associate",nrCodes:"NR010",paidAmount:"$11,500",acrLoadDates:"April 5, 2025",contact:"(555) 901.2345",amount:"$11,500",avatar:"https://i.pravatar.cc/32?img=10",city:"San Jose",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567900",claimId:"1234567900",firstName:"Christopher",lastName:"White",userDetails:"Analyst",nrCodes:"NR011",paidAmount:"$7,200",acrLoadDates:"April 8, 2025",contact:"(555) 012.3456",amount:"$7,200",avatar:"https://i.pravatar.cc/32?img=11",city:"Austin",state:"TX",status:"Approved",priority:"Medium"},{id:"1234567901",claimId:"1234567901",firstName:"Barbara",lastName:"Harris",userDetails:"Supervisor",nrCodes:"NR012",paidAmount:"$13,800",acrLoadDates:"April 10, 2025",contact:"(555) 123.4567",amount:"$13,800",avatar:"https://i.pravatar.cc/32?img=12",city:"Jacksonville",state:"FL",status:"Pending",priority:"High"},{id:"1234567902",claimId:"1234567902",firstName:"Daniel",lastName:"Martin",userDetails:"Associate Name",nrCodes:"NR013",paidAmount:"$5,600",acrLoadDates:"April 12, 2025",contact:"(555) 234.5678",amount:"$5,600",avatar:"https://i.pravatar.cc/32?img=13",city:"Fort Worth",state:"TX",status:"Approved",priority:"Low"},{id:"1234567903",claimId:"1234567903",firstName:"Nancy",lastName:"Thompson",userDetails:"Lead",nrCodes:"NR014",paidAmount:"$10,900",acrLoadDates:"April 15, 2025",contact:"(555) 345.6789",amount:"$10,900",avatar:"https://i.pravatar.cc/32?img=14",city:"Columbus",state:"OH",status:"Pending",priority:"Medium"},{id:"1234567904",claimId:"1234567904",firstName:"Matthew",lastName:"Garcia",userDetails:"Manager",nrCodes:"NR015",paidAmount:"$8,400",acrLoadDates:"April 18, 2025",contact:"(555) 456.7890",amount:"$8,400",avatar:"https://i.pravatar.cc/32?img=15",city:"Charlotte",state:"NC",status:"Approved",priority:"High"},{id:"1234567905",claimId:"1234567905",firstName:"Karen",lastName:"Martinez",userDetails:"Associate Name",nrCodes:"NR016",paidAmount:"$14,200",acrLoadDates:"April 20, 2025",contact:"(555) 567.8901",amount:"$14,200",avatar:"https://i.pravatar.cc/32?img=16",city:"San Francisco",state:"CA",status:"Rejected",priority:"Low"},{id:"1234567906",claimId:"1234567906",firstName:"Joseph",lastName:"Robinson",userDetails:"Senior Associate",nrCodes:"NR017",paidAmount:"$6,900",acrLoadDates:"April 22, 2025",contact:"(555) 678.9012",amount:"$6,900",avatar:"https://i.pravatar.cc/32?img=17",city:"Indianapolis",state:"IN",status:"Approved",priority:"Medium"},{id:"1234567907",claimId:"1234567907",firstName:"Lisa",lastName:"Clark",userDetails:"Analyst",nrCodes:"NR018",paidAmount:"$12,700",acrLoadDates:"April 25, 2025",contact:"(555) 789.0123",amount:"$12,700",avatar:"https://i.pravatar.cc/32?img=18",city:"Seattle",state:"WA",status:"Pending",priority:"High"},{id:"1234567908",claimId:"1234567908",firstName:"Thomas",lastName:"Rodriguez",userDetails:"Supervisor",nrCodes:"NR019",paidAmount:"$9,800",acrLoadDates:"April 28, 2025",contact:"(555) 890.1234",amount:"$9,800",avatar:"https://i.pravatar.cc/32?img=19",city:"Denver",state:"CO",status:"Approved",priority:"Low"},{id:"1234567909",claimId:"1234567909",firstName:"Betty",lastName:"Lewis",userDetails:"Associate Name",nrCodes:"NR020",paidAmount:"$11,100",acrLoadDates:"April 30, 2025",contact:"(555) 901.2345",amount:"$11,100",avatar:"https://i.pravatar.cc/32?img=20",city:"Boston",state:"MA",status:"Pending",priority:"Medium"}],sa=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0},{id:"claimId",label:"Claim ID",visible:!0,locked:!1,order:1},{id:"firstName",label:"First Name",visible:!0,locked:!1,order:2},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:3},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:4},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:5},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:6},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:7},{id:"city",label:"City",visible:!0,locked:!1,order:8},{id:"state",label:"State",visible:!0,locked:!1,order:9},{id:"contact",label:"Contact",visible:!0,locked:!1,order:10},{id:"status",label:"Status",visible:!0,locked:!1,order:11},{id:"priority",label:"Priority",visible:!0,locked:!1,order:12},{id:"amount",label:"Amount",visible:!0,locked:!1,order:13}],na=()=>[{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0,width:48,minWidth:48,maxWidth:48},{id:"claimId",label:"User Details",visible:!0,locked:!1,order:1,subColumns:[{id:"firstName",label:"First Name",visible:!0,locked:!1,order:0,parentId:"claimId",width:200,minWidth:120,maxWidth:300,resizable:!0},{id:"lastName",label:"Last Name",visible:!0,locked:!1,order:1,parentId:"claimId",width:200,minWidth:120,maxWidth:300,resizable:!0}]},{id:"userDetails",label:"Role",visible:!0,locked:!1,order:2,width:180,minWidth:100,maxWidth:250,resizable:!0},{id:"nrCodes",label:"NR Codes",visible:!0,locked:!1,order:3,width:150,minWidth:100,maxWidth:200,resizable:!0},{id:"paidAmount",label:"Paid Amount",visible:!0,locked:!1,order:4,width:150,minWidth:100,maxWidth:200,resizable:!0},{id:"acrLoadDates",label:"ACR Load Dates",visible:!0,locked:!1,order:5,width:180,minWidth:120,maxWidth:250,resizable:!0},{id:"address",label:"Address",visible:!0,locked:!1,order:6,subColumns:[{id:"city",label:"City",visible:!0,locked:!1,order:0,parentId:"address",width:150,minWidth:100,maxWidth:200,resizable:!0},{id:"state",label:"State",visible:!0,locked:!1,order:1,parentId:"address",width:100,minWidth:80,maxWidth:150,resizable:!0}]},{id:"contact",label:"Contact",visible:!0,locked:!1,order:7,width:180,minWidth:120,maxWidth:250,resizable:!0},{id:"status",label:"Status",visible:!0,locked:!1,order:8,width:120,minWidth:80,maxWidth:180,resizable:!0},{id:"priority",label:"Priority",visible:!0,locked:!1,order:9,width:120,minWidth:80,maxWidth:180,resizable:!0},{id:"amount",label:"Amount",visible:!0,locked:!1,order:10,width:150,minWidth:100,maxWidth:200,resizable:!0}],pt=({data:a,columns:j,useSidePanel:g=!1,useModal:D=!1,showToolbar:X=!0,toolbarTitle:G="Data Table",initialColumns:H,onRowClick:S,showColumnSearchByDefault:A=!1,customSidePanelTabs:K=[],sortMode:y="client",onSort:q,sortColumn:Q,sortDirection:Z,maxHeight:O,defaultMinWidth:m=50,defaultMaxWidth:v=250})=>{const[J,ht]=c.useState(1),[E,bt]=c.useState(10),[ft,gt]=c.useState(""),[yt,vt]=c.useState("none"),k=y==="server"?Q||"":ft,C=y==="server"?Z||"none":yt,[Ct,oe]=c.useState(!1),[V,B]=c.useState([]),[ee,le]=c.useState(null),[wt,de]=c.useState(!1),[U,St]=c.useState({}),[ce,ue]=c.useState(!1),kt=()=>H||(j?j.map((e,t)=>({id:e.id,label:e.label,visible:e.visible!==void 0?e.visible:!0,locked:e.locked||!1,order:e.order!==void 0?e.order:t})):sa()),[b,te]=c.useState(kt()),[me,pe]=c.useState(!1),[he,Tt]=c.useState({}),[ae,Nt]=c.useState(""),[T,xt]=c.useState({}),[Dt,be]=c.useState(!1),[Y,At]=c.useState([]),se=a||aa(),It=e=>{const t=b.find(r=>r.id===e);if(!t)return;const s=b.filter(r=>r.locked&&r.id!=="checkbox").length;if(!t.locked&&s>=3){ue(!0),setTimeout(()=>ue(!1),3e3);return}const i=b.map(r=>r.id===e?r.subColumns?{...r,locked:!r.locked,subColumns:r.subColumns.map(p=>({...p,locked:!r.locked}))}:{...r,locked:!r.locked}:r),l=i.find(r=>r.id==="checkbox"),d=i.filter(r=>r.id!=="checkbox").sort((r,p)=>r.locked&&!p.locked?-1:!r.locked&&p.locked?1:r.order-p.order),h=l?[{...l,order:0},...d.map((r,p)=>({...r,order:p+1}))]:d.map((r,p)=>({...r,order:p}));te(h)},fe=e=>{let t;k===e?t=C==="asc"?"desc":C==="desc"?"none":"asc":t="asc",y==="server"&&q?q(e,t):(gt(e),vt(t)),be(!0),setTimeout(()=>be(!1),50)},Wt=e=>{oe(e),B(e?Array.from({length:se.length},(t,s)=>s):[])},zt=(e,t,s=!1)=>{if(t)if(s&&ee!==null){const i=Math.min(ee,e),l=Math.max(ee,e),o=Array.from({length:l-i+1},(h,r)=>i+r),d=Array.from(new Set([...V,...o]));B(d)}else B([...V,e]),le(e);else B(V.filter(i=>i!==e)),oe(!1),le(e)},Pt=()=>{};c.useEffect(()=>{pe(A?!0:Y.length>0)},[Y,A]);const ge=(e,t)=>{let s=b.find(d=>d.id===e);if(!s){for(const d of b)if(d.subColumns&&(s=d.subColumns.find(h=>h.id===e),s))break}const i=(s==null?void 0:s.minWidth)!==void 0?s.minWidth:m,l=(s==null?void 0:s.maxWidth)!==void 0?s.maxWidth:v;let o=t;o=Math.max(o,i),o=Math.min(o,l),xt(d=>({...d,[e]:o}))},Rt=(e,t)=>{Tt(s=>({...s,[e]:t}))},ye=se.filter(e=>{if(ae){const i=ae.toLowerCase();if(!Object.values(e).some(o=>String(o||"").toLowerCase().includes(i)))return!1}return Object.entries(he).every(([i,l])=>{if(!l)return!0;const o=e[i];return String(o).toLowerCase().includes(l.toLowerCase())})?Y.every(i=>{const l=e[i.columnId];return String(l)===i.value}):!1}),ve=y==="client"&&k&&C!=="none"?[...ye].sort((e,t)=>{let s=e[k],i=t[k];return s<i?C==="asc"?-1:1:s>i?C==="asc"?1:-1:0}):ye,Ce=ve.length,Lt=Math.ceil(Ce/E),I=(J-1)*E,$t=I+E,we=ve.slice(I,$t),Mt=e=>{const t=[];return e.forEach(s=>{s.subColumns&&s.subColumns.length>0?t.push(...s.subColumns):t.push(s)}),t},N=b.filter(e=>e.visible),x=Mt(N);c.useEffect(()=>{const e=document.querySelector("[data-scroll-container]");if(!e)return;const t=()=>{const l=e.querySelector("tbody tr");if(!l)return;const o=l.querySelectorAll("td");if(!o||o.length===0)return;const d={};let h=0;x.forEach((r,p)=>{if(r.locked&&o[p]){d[r.id]=h;const w=o[p].offsetWidth;h+=w}}),N.forEach(r=>{if(r.subColumns&&r.subColumns.length>0&&(r.subColumns.some(w=>w.locked)||r.locked)){const w=r.subColumns[0];d[w.id]!==void 0&&(d[r.id]=d[w.id])}}),x.some(r=>r.id==="checkbox")&&(d.checkbox=0),St(d)};t();const s=new ResizeObserver(()=>{t()}),i=e.querySelector("tbody tr");return i&&i.querySelectorAll("td").forEach(o=>s.observe(o)),()=>{s.disconnect()}},[x.map(e=>e.id+e.locked).join(",")]);const Se=N.some(e=>e.subColumns&&e.subColumns.length>0),Ft=()=>n.jsxs(n.Fragment,{children:[n.jsx("tr",{children:N.map(e=>{const t=e.locked,s=U[e.id],i=e.subColumns&&e.subColumns.length>0?e.subColumns.length:1,l=Se&&(!e.subColumns||e.subColumns.length===0)?2:1;if(e.id==="checkbox")return n.jsx(re,{label:"",variant:"default",showCheckbox:!0,checked:Ct,onCheckChange:Wt,locked:t,leftOffset:s,"data-locked":t,rowSpan:l,isChildColumn:!0},e.id);const d=T[e.id]||(typeof e.width=="number"?e.width:void 0);return n.jsx(re,{label:e.label,variant:!t&&!e.subColumns?"resizeable-locked":"default",sortable:!e.subColumns||e.subColumns.length===0,sortDirection:k===e.id?C:"none",onSort:()=>fe(e.id),locked:t,onLockToggle:()=>It(e.id),leftOffset:s,"data-locked":t,align:i>1?"center":"left",colSpan:i,rowSpan:l,resizable:!e.subColumns,onResize:e.subColumns?void 0:h=>ge(e.id,h),width:d,minWidth:e.minWidth!==void 0?e.minWidth:m,maxWidth:e.maxWidth!==void 0?e.maxWidth:v,initialWidth:typeof e.width=="number"?e.width:void 0},e.id)})}),Se&&n.jsx("tr",{children:N.map(e=>!e.subColumns||e.subColumns.length===0?null:e.subColumns.map(t=>{const s=t.locked,i=U[t.id],o=T[t.id]||(typeof t.width=="number"?t.width:void 0);return n.jsx(re,{label:t.label,variant:s?"default":"resizeable-locked",sortable:!0,sortDirection:k===t.id?C:"none",onSort:()=>fe(t.id),locked:s,leftOffset:i,"data-locked":s,isChildColumn:!0,resizable:!0,onResize:d=>ge(t.id,d),width:o,minWidth:t.minWidth!==void 0?t.minWidth:m,maxWidth:t.maxWidth!==void 0?t.maxWidth:v,initialWidth:typeof t.width=="number"?t.width:void 0},t.id)}))})]}),jt=()=>me?n.jsx("tr",{children:x.map(e=>{const t=e.locked,s=U[e.id],i=e.filterable!==!1;return e.id==="checkbox"?n.jsx("th",{style:{position:t?"sticky":"relative",left:t?`${s}px`:"auto",zIndex:t?3:1,background:"#f9fafb",borderBottom:"1px solid #e5e7eb",padding:"8px 12px",minWidth:"48px"},"data-locked":t?"true":void 0},e.id):i?n.jsx(mt,{searchValue:he[e.id]||"",searchPlaceholder:`Search ${e.label}`,onSearchChange:l=>Rt(e.id,l),locked:t,leftOffset:s,"data-locked":t},e.id):n.jsx("th",{style:{position:t?"sticky":"relative",left:t?`${s}px`:"auto",zIndex:t?3:1,background:"#f9fafb",borderBottom:"1px solid #e5e7eb",padding:"8px 12px"},"data-locked":t?"true":void 0},e.id)})}):null;return n.jsxs(Zt,{children:[X&&n.jsx(Jt,{title:G,showGlobalSearch:!0,globalSearchValue:ae,onGlobalSearchChange:Nt,globalSearchPlaceholder:"Search across all columns...",showDropdown:!1,dropdownOptions:[],showDownload:!1,onDownload:()=>console.log("Download clicked"),showFilter:!1,onFilter:()=>console.log("Filter clicked"),showSettings:D,onSettingsClick:()=>de(!0)}),n.jsxs(ea,{$hasSidePanel:g,children:[n.jsx(ta,{"data-scroll-container":!0,$hasSidePanel:g,$maxHeight:O,children:n.jsxs(Kt,{$hasMaxHeight:!!O,children:[n.jsx("colgroup",{children:N.map(e=>{if(e.subColumns&&e.subColumns.length>0)return e.subColumns.map(t=>{const s=T[t.id],i=s?`${s}px`:t.width||e.width||"150px",l=t.minWidth?`${t.minWidth}px`:`${m}px`,o=t.maxWidth?`${t.maxWidth}px`:`${v}px`;return n.jsx("col",{style:{width:i,minWidth:l,maxWidth:o}},t.id)});if(e.id==="checkbox"){const t=T[e.id],s=t?`${t}px`:e.width||"48px";return n.jsx("col",{style:{width:s,minWidth:"48px",maxWidth:"48px"}},e.id)}else{const t=T[e.id],s=t?`${t}px`:e.width||"150px",i=e.minWidth?`${e.minWidth}px`:`${m}px`,l=e.maxWidth?`${e.maxWidth}px`:`${v}px`;return n.jsx("col",{style:{width:s,minWidth:i,maxWidth:l}},e.id)}})}),n.jsxs("thead",{children:[Ft(),jt()]}),n.jsx("tbody",{children:we.length===0?n.jsx("tr",{children:n.jsx("td",{colSpan:x.length,style:{textAlign:"center",padding:"48px 24px",color:"#666",fontSize:"14px",fontStyle:"italic"},children:"No data available"})}):we.map((e,t)=>{const s=V.includes(I+t),i=x.map((o,d)=>{const h=o.locked,r=U[o.id],p=d===0;if(o.id==="checkbox")return n.jsx(ne,{selected:s,locked:h,leftOffset:r,"data-locked":h,isFirstColumn:p,showCheckbox:!0,checked:s,onCheckChange:(qt,Ot)=>zt(I+t,qt,Ot)},o.id);if(o.id==="userDetails")return n.jsx(ne,{selected:s,locked:h,leftOffset:r,"data-locked":h,isFirstColumn:p,children:n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("img",{src:e.avatar,alt:e.userDetails,style:{width:32,height:32,borderRadius:"50%"}}),n.jsxs("div",{children:[n.jsx("div",{style:{fontWeight:600},children:e.userDetails}),n.jsx("div",{style:{fontSize:"12px",color:"#666"},children:"Role"})]})]})},o.id);const Ht=T[o.id]||(typeof o.width=="number"?o.width:void 0);return n.jsx(ne,{selected:s,locked:h,leftOffset:r,"data-locked":h,isFirstColumn:p,width:Ht,children:e[o.id]},o.id)}),l=o=>{S&&S(e,I+t,o)};return Dt?n.jsx(Qt,{$animationDelay:t*20,onClick:l,style:{cursor:S?"pointer":"default"},children:i},e.id):n.jsx("tr",{onClick:l,style:{cursor:S?"pointer":"default"},children:i},e.id)})})]})}),g&&n.jsx(Et,{columns:b.filter(e=>e.id!=="checkbox"),onColumnsChange:e=>{const t=b.find(i=>i.id==="checkbox"),s=t?[t,...e]:e;te(s)},onFilterToggle:Pt,showFilters:me,lockWarning:ce,tableData:se,columnFilters:Y,onFiltersChange:At,customTabs:K})]}),n.jsx(Vt,{currentPage:J,totalPages:Lt,totalItems:Ce,itemsPerPage:E,onPageChange:ht,onItemsPerPageChange:bt}),D&&n.jsx(Bt,{isOpen:wt,onClose:()=>de(!1),columns:b.filter(e=>e.id!=="checkbox"),lockWarning:ce,onColumnsChange:e=>{const t=b.find(i=>i.id==="checkbox"),s=t?[t,...e]:e;te(s)}})]})};pt.__docgenInfo={description:"",methods:[],displayName:"AdvancedDataTable",props:{data:{required:!1,tsType:{name:"Array",elements:[{name:"DataRow"}],raw:"DataRow[]"},description:"Table data rows"},columns:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  id: string;
  label: string;
  accessor?: string | ((row: any) => any);
  sortable?: boolean;
  resizable?: boolean;
  visible?: boolean;
  locked?: boolean;
  order?: number;
}`,signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"accessor",value:{name:"union",raw:"string | ((row: any) => any)",elements:[{name:"string"},{name:"unknown"}],required:!1}},{key:"sortable",value:{name:"boolean",required:!1}},{key:"resizable",value:{name:"boolean",required:!1}},{key:"visible",value:{name:"boolean",required:!1}},{key:"locked",value:{name:"boolean",required:!1}},{key:"order",value:{name:"number",required:!1}}]}}],raw:`Array<{
  id: string;
  label: string;
  accessor?: string | ((row: any) => any);
  sortable?: boolean;
  resizable?: boolean;
  visible?: boolean;
  locked?: boolean;
  order?: number;
}>`},description:"Table column definitions"},useSidePanel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},useModal:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},showToolbar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},toolbarTitle:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Data Table'",computed:!1}},initialColumns:{required:!1,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:""},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>) => void",signature:{arguments:[{type:{name:"any"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},name:"event"}],return:{name:"void"}}},description:""},showColumnSearchByDefault:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},customSidePanelTabs:{required:!1,tsType:{name:"Array",elements:[{name:"CustomTabConfig"}],raw:"CustomTabConfig[]"},description:"",defaultValue:{value:"[]",computed:!1}},sortMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Sorting mode: 'client' (default) or 'server'",defaultValue:{value:"'client'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnId: string, direction: 'asc' | 'desc' | 'none') => void",signature:{arguments:[{type:{name:"string"},name:"columnId"},{type:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sort changes (only used when sortMode='server')"},sortColumn:{required:!1,tsType:{name:"string"},description:"Controlled sort column (only used when sortMode='server')"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"Controlled sort direction (only used when sortMode='server')"},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height for table body (enables fixed header with internal scroll). Example: '400px', '50vh'"},defaultMinWidth:{required:!1,tsType:{name:"number"},description:"Default minimum width for columns that don't specify minWidth (default: 50px)",defaultValue:{value:"50",computed:!1}},defaultMaxWidth:{required:!1,tsType:{name:"number"},description:"Default maximum width for columns that don't specify maxWidth (default: 250px)",defaultValue:{value:"250",computed:!1}}}};const Ra={title:"Components/Table/Advanced Table",component:pt,parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:600},description:{component:`
Advanced table with nested columns, side panel, and column resizing. **Component Maturity: 100% Compliant**

**Features:** Nested headers • Column resizing • Side panel • Drag-and-drop • Sorting • Filtering • Pagination • Row selection

## Quick Start

\`\`\`tsx
import { AdvancedDataTable, getNestedColumnConfigs } from '@ajaysoni7832/lean-ids-components';

<AdvancedDataTable
  initialColumns={getNestedColumnConfigs()}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="My Table"
/>
\`\`\`

See stories below for detailed examples.
        `}}},tags:["autodocs"]},W={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Claims Data",onRowClick:u(),onSort:u()},parameters:{docs:{description:{story:"Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel. Column resizing works in both Canvas and Docs views."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>`},story:{inline:!1,iframeHeight:600}}}},z={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data",onRowClick:u(),onSort:u()},parameters:{docs:{description:{story:"Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings. Column resizing works in both Canvas and Docs views."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>`},story:{inline:!1,iframeHeight:600}}}},_={args:{useSidePanel:!0,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data",onRowClick:u(),onSort:u()},parameters:{docs:{description:{story:"Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls. Column resizing works in both Canvas and Docs views."},story:{inline:!1,iframeHeight:600}}}},P={args:{useSidePanel:!1,useModal:!0,showToolbar:!0,toolbarTitle:"Claims Data with Sub-Headers",initialColumns:na(),onRowClick:u(),onSort:u()},parameters:{docs:{description:{story:'Table with sub-header support showing nested columns. The "User Details" parent column contains "First Name" and "Last Name" sub-columns, and the "Address" parent column contains "City" and "State" sub-columns. This demonstrates the hierarchical column structure with parent-child relationships. Column resizing works in both Canvas and Docs views.'},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { 
    id: 1, 
    claimId: 'CLM-001', 
    firstName: 'John', 
    lastName: 'Doe',
    city: 'New York',
    state: 'NY',
    status: 'Approved'
  },
];

const columns = [
  {
    id: 'claimId',
    label: 'Claim ID',
    accessor: 'claimId',
    sortable: true,
    resizable: true,
  },
  {
    id: 'userDetails',
    label: 'User Details',
    subColumns: [
      {
        id: 'firstName',
        label: 'First Name',
        accessor: 'firstName',
        sortable: true,
        resizable: true,
      },
      {
        id: 'lastName',
        label: 'Last Name',
        accessor: 'lastName',
        sortable: true,
        resizable: true,
      },
    ],
  },
  {
    id: 'address',
    label: 'Address',
    subColumns: [
      {
        id: 'city',
        label: 'City',
        accessor: 'city',
        sortable: true,
        resizable: true,
      },
      {
        id: 'state',
        label: 'State',
        accessor: 'state',
        sortable: true,
        resizable: true,
      },
    ],
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data with Sub-Headers"
/>`},story:{inline:!1,iframeHeight:600}}}},R={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Filter Count Badge Demo",onRowClick:u(),onSort:u()},parameters:{docs:{description:{story:"**Filter Count Badge & Smart Search Headers**: The Filter button now shows a purple badge with the count of active filters. Search headers only appear when filters are actually applied, not just when clicking the Filter button. This provides better visual feedback and cleaner UX."},source:{code:`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
      { label: 'Rejected', value: 'rejected' },
    ],
  },
  {
    id: 'dateRange',
    label: 'Date Range',
    type: 'dateRange',
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Table with Filters"
  columnFilters={filters}
  onFiltersChange={(filters) => console.log('Filters:', filters)}
/>`},story:{inline:!1,iframeHeight:600}}}},L={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Always Visible Search Headers",showColumnSearchByDefault:!0,onRowClick:u(),onSort:u()},parameters:{docs:{description:{story:"**Always Visible Search Headers**: Set showColumnSearchByDefault to true to force search headers to always be visible, regardless of filter state. Useful when column search is the primary filtering method."},story:{inline:!1,iframeHeight:600}}}},$={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Custom Tabs Demo",customSidePanelTabs:[{id:"export",label:"Export",icon:"📥",onClick:()=>alert("Export functionality triggered!")},{id:"info",label:"Info",icon:"ℹ️",content:n.jsxs("div",{style:{padding:"16px"},children:[n.jsx("h3",{style:{margin:"0 0 12px 0",fontSize:"16px",fontWeight:600},children:"Custom Info Panel"}),n.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666",lineHeight:1.5},children:"This is a custom content panel. You can render any React component here. Perfect for settings, filters, analytics, or any custom functionality."})]})}],onRowClick:u(),onSort:u()},parameters:{docs:{description:{story:'**Custom Tabs**: Add your own tabs to the side panel with customSidePanelTabs prop. Supports both action-only tabs (with onClick) and content tabs (with content ReactNode). Try clicking the "Export" and "Info" tabs!'},story:{inline:!1,iframeHeight:600}}}},M={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Click Outside to Close Demo",onRowClick:u(),onSort:u()},parameters:{docs:{description:{story:"**Click Outside to Close**: The side panel now closes when clicking outside, providing standard overlay/modal behavior. However, if there are unsaved filter changes, the panel prevents closing and shows a warning with shake animation. This prevents accidental loss of filter selections."},story:{inline:!1,iframeHeight:600}}}},F={args:{useSidePanel:!0,useModal:!1,showToolbar:!0,toolbarTitle:"Unsaved Changes Protection Demo",onRowClick:u(),onSort:u()},parameters:{docs:{description:{story:'**Unsaved Changes Protection**: Filter selections are now tracked as "pending" until you click Apply. If you try to close the panel with unsaved changes, it prevents closing and shows a shake animation with a warning message: "Please apply, cancel, or reset filters before closing." This ensures users never accidentally lose their filter selections.'},story:{inline:!1,iframeHeight:600}}}};var ke,Te,Ne,xe,De;W.parameters={...W.parameters,docs:{...(ke=W.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Claims Data',
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with side panel for column and filter controls. The table has no right border radius to seamlessly connect with the side panel. Column resizing works in both Canvas and Docs views.'
      },
      source: {
        code: \`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>\`
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(Ne=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:Ne.source},description:{story:`## With Side Panel

Advanced table with side panel for column and filter controls. Recommended for complex tables.

**Usage:**
\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>
\`\`\``,...(De=(xe=W.parameters)==null?void 0:xe.docs)==null?void 0:De.description}}};var Ae,Ie,We,ze,Pe;z.parameters={...z.parameters,docs:{...(Ae=z.parameters)==null?void 0:Ae.docs,source:{originalSource:`{
  args: {
    useSidePanel: false,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data',
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Traditional table with modal settings. Click the settings icon button in the toolbar to open column settings. Column resizing works in both Canvas and Docs views.'
      },
      source: {
        code: \`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>\`
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(We=(Ie=z.parameters)==null?void 0:Ie.docs)==null?void 0:We.source},description:{story:`## With Modal

Traditional table with modal settings dialog. Click settings icon to configure columns.

**Usage:**
\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', lastName: 'Doe', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', lastName: 'Smith', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'lastName', label: 'Last Name', accessor: 'lastName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data"
/>
\`\`\``,...(Pe=(ze=z.parameters)==null?void 0:ze.docs)==null?void 0:Pe.description}}};var Re,Le,$e;_.parameters={..._.parameters,docs:{...(Re=_.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data',
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with both side panel and modal controls available. The toolbar settings button opens the modal, while the side panel provides quick access to column/filter controls. Column resizing works in both Canvas and Docs views.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...($e=(Le=_.parameters)==null?void 0:Le.docs)==null?void 0:$e.source}}};var Me,Fe,je,He,qe;P.parameters={...P.parameters,docs:{...(Me=P.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    useSidePanel: false,
    useModal: true,
    showToolbar: true,
    toolbarTitle: 'Claims Data with Sub-Headers',
    initialColumns: getNestedColumnConfigs(),
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with sub-header support showing nested columns. The "User Details" parent column contains "First Name" and "Last Name" sub-columns, and the "Address" parent column contains "City" and "State" sub-columns. This demonstrates the hierarchical column structure with parent-child relationships. Column resizing works in both Canvas and Docs views.'
      },
      source: {
        code: \`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { 
    id: 1, 
    claimId: 'CLM-001', 
    firstName: 'John', 
    lastName: 'Doe',
    city: 'New York',
    state: 'NY',
    status: 'Approved'
  },
];

const columns = [
  {
    id: 'claimId',
    label: 'Claim ID',
    accessor: 'claimId',
    sortable: true,
    resizable: true,
  },
  {
    id: 'userDetails',
    label: 'User Details',
    subColumns: [
      {
        id: 'firstName',
        label: 'First Name',
        accessor: 'firstName',
        sortable: true,
        resizable: true,
      },
      {
        id: 'lastName',
        label: 'Last Name',
        accessor: 'lastName',
        sortable: true,
        resizable: true,
      },
    ],
  },
  {
    id: 'address',
    label: 'Address',
    subColumns: [
      {
        id: 'city',
        label: 'City',
        accessor: 'city',
        sortable: true,
        resizable: true,
      },
      {
        id: 'state',
        label: 'State',
        accessor: 'state',
        sortable: true,
        resizable: true,
      },
    ],
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data with Sub-Headers"
/>\`
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(je=(Fe=P.parameters)==null?void 0:Fe.docs)==null?void 0:je.source},description:{story:`## With Sub-Headers (Nested Columns)

Table with hierarchical column structure using parent-child relationships.

**Usage:**
\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { 
    id: 1, 
    claimId: 'CLM-001', 
    firstName: 'John', 
    lastName: 'Doe',
    city: 'New York',
    state: 'NY',
    status: 'Approved'
  },
];

const columns = [
  {
    id: 'claimId',
    label: 'Claim ID',
    accessor: 'claimId',
    sortable: true,
    resizable: true,
  },
  {
    id: 'userDetails',
    label: 'User Details',
    subColumns: [
      {
        id: 'firstName',
        label: 'First Name',
        accessor: 'firstName',
        sortable: true,
        resizable: true,
      },
      {
        id: 'lastName',
        label: 'Last Name',
        accessor: 'lastName',
        sortable: true,
        resizable: true,
      },
    ],
  },
  {
    id: 'address',
    label: 'Address',
    subColumns: [
      {
        id: 'city',
        label: 'City',
        accessor: 'city',
        sortable: true,
        resizable: true,
      },
      {
        id: 'state',
        label: 'State',
        accessor: 'state',
        sortable: true,
        resizable: true,
      },
    ],
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useModal={true}
  showToolbar={true}
  toolbarTitle="Claims Data with Sub-Headers"
/>
\`\`\``,...(qe=(He=P.parameters)==null?void 0:He.docs)==null?void 0:qe.description}}};var Oe,Je,Ee,Ve,Be;R.parameters={...R.parameters,docs:{...(Oe=R.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Filter Count Badge Demo',
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Filter Count Badge & Smart Search Headers**: The Filter button now shows a purple badge with the count of active filters. Search headers only appear when filters are actually applied, not just when clicking the Filter button. This provides better visual feedback and cleaner UX.'
      },
      source: {
        code: \`import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
      { label: 'Rejected', value: 'rejected' },
    ],
  },
  {
    id: 'dateRange',
    label: 'Date Range',
    type: 'dateRange',
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Table with Filters"
  columnFilters={filters}
  onFiltersChange={(filters) => console.log('Filters:', filters)}
/>\`
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(Ee=(Je=R.parameters)==null?void 0:Je.docs)==null?void 0:Ee.source},description:{story:`## With Filters & Filter Count Badge

Table with column filters and visual filter count badge.

**Usage:**
\`\`\`tsx
import { AdvancedDataTable } from '@ajaysoni7832/lean-ids-components';

const data = [
  { id: 1, claimId: 'CLM-001', firstName: 'John', status: 'Approved', amount: 1500 },
  { id: 2, claimId: 'CLM-002', firstName: 'Jane', status: 'Pending', amount: 2300 },
];

const columns = [
  { id: 'claimId', label: 'Claim ID', accessor: 'claimId', sortable: true, resizable: true },
  { id: 'firstName', label: 'First Name', accessor: 'firstName', sortable: true, resizable: true },
  { id: 'status', label: 'Status', accessor: 'status', sortable: true, resizable: true },
  { id: 'amount', label: 'Amount', accessor: 'amount', sortable: true, resizable: true },
];

const filters = [
  {
    id: 'status',
    label: 'Status',
    type: 'select',
    options: [
      { label: 'All', value: '' },
      { label: 'Approved', value: 'approved' },
      { label: 'Pending', value: 'pending' },
      { label: 'Rejected', value: 'rejected' },
    ],
  },
  {
    id: 'dateRange',
    label: 'Date Range',
    type: 'dateRange',
  },
];

<AdvancedDataTable
  data={data}
  columns={columns}
  useSidePanel={true}
  showToolbar={true}
  toolbarTitle="Table with Filters"
  columnFilters={filters}
  onFiltersChange={(filters) => console.log('Filters:', filters)}
/>
\`\`\`

**Features:**
- Filter count badge shows number of active filters
- Smart search headers appear when filters are applied
- Search headers persist when side panel is closed`,...(Be=(Ve=R.parameters)==null?void 0:Ve.docs)==null?void 0:Be.description}}};var Ue,Ye,_e,Xe,Ge;L.parameters={...L.parameters,docs:{...(Ue=L.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Always Visible Search Headers',
    showColumnSearchByDefault: true,
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Always Visible Search Headers**: Set showColumnSearchByDefault to true to force search headers to always be visible, regardless of filter state. Useful when column search is the primary filtering method.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(_e=(Ye=L.parameters)==null?void 0:Ye.docs)==null?void 0:_e.source},description:{story:`## New Feature: Always Show Search Headers

**What's New:**
- 🎛️ **Developer control** via showColumnSearchByDefault prop
- 📌 Force search headers to always be visible
- 🔧 Useful when you want search functionality always available

**Use Case:**
When you want column-specific search to be the primary filtering method,
set showColumnSearchByDefault to true to keep search headers always visible.`,...(Ge=(Xe=L.parameters)==null?void 0:Xe.docs)==null?void 0:Ge.description}}};var Ke,Qe,Ze,et,tt;$.parameters={...$.parameters,docs:{...(Ke=$.parameters)==null?void 0:Ke.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Custom Tabs Demo',
    customSidePanelTabs: [{
      id: 'export',
      label: 'Export',
      icon: '📥',
      onClick: () => alert('Export functionality triggered!')
    }, {
      id: 'info',
      label: 'Info',
      icon: 'ℹ️',
      content: <div style={{
        padding: '16px'
      }}>
            <h3 style={{
          margin: '0 0 12px 0',
          fontSize: '16px',
          fontWeight: 600
        }}>
              Custom Info Panel
            </h3>
            <p style={{
          margin: 0,
          fontSize: '14px',
          color: '#666',
          lineHeight: 1.5
        }}>
              This is a custom content panel. You can render any React component here.
              Perfect for settings, filters, analytics, or any custom functionality.
            </p>
          </div>
    }],
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Custom Tabs**: Add your own tabs to the side panel with customSidePanelTabs prop. Supports both action-only tabs (with onClick) and content tabs (with content ReactNode). Try clicking the "Export" and "Info" tabs!'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(Ze=(Qe=$.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source},description:{story:`## New Feature: Custom Tabs in Side Panel

**What's New:**
- ➕ **Add custom tabs** below Columns and Filters
- 🎯 Two modes: **Action-only** or **Content panel**
- 🔧 Fully customizable for developer needs

**Example Custom Tabs:**
- Export: Action-only tab that triggers export
- Settings: Content tab with custom settings panel

**Usage:**
\`\`\`tsx
import { DownloadIcon, SettingsIcon } from '@mui/icons-material';

<AdvancedDataTable
  customSidePanelTabs={[
    {
      id: 'export',
      label: 'Export',
      icon: <DownloadIcon />,
      onClick: () => handleExport()
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <SettingsIcon />,
      content: <CustomSettingsPanel />
    }
  ]}
/>
\`\`\``,...(tt=(et=$.parameters)==null?void 0:et.docs)==null?void 0:tt.description}}};var at,st,nt,rt,it;M.parameters={...M.parameters,docs:{...(at=M.parameters)==null?void 0:at.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Click Outside to Close Demo',
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Click Outside to Close**: The side panel now closes when clicking outside, providing standard overlay/modal behavior. However, if there are unsaved filter changes, the panel prevents closing and shows a warning with shake animation. This prevents accidental loss of filter selections.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(nt=(st=M.parameters)==null?void 0:st.docs)==null?void 0:nt.source},description:{story:`## New Feature: Click Outside to Close

**What's New:**
- 🖱️ **Click outside** the expanded panel to close it
- 🛡️ **Protected closing** - prevents closing if there are unsaved filter changes
- ⚠️ **Shake animation** + warning message when trying to close with unsaved changes

**Try it:**
1. Click "Filters" to open side panel
2. Click outside the panel - it closes (no unsaved changes)
3. Click "Filters" again, select a filter but DON'T click Apply
4. Try clicking outside - panel shakes and shows warning
5. Must click Apply/Cancel/Reset to close`,...(it=(rt=M.parameters)==null?void 0:rt.docs)==null?void 0:it.description}}};var ot,lt,dt,ct,ut;F.parameters={...F.parameters,docs:{...(ot=F.parameters)==null?void 0:ot.docs,source:{originalSource:`{
  args: {
    useSidePanel: true,
    useModal: false,
    showToolbar: true,
    toolbarTitle: 'Unsaved Changes Protection Demo',
    onRowClick: fn(),
    onSort: fn()
  },
  parameters: {
    docs: {
      description: {
        story: '**Unsaved Changes Protection**: Filter selections are now tracked as "pending" until you click Apply. If you try to close the panel with unsaved changes, it prevents closing and shows a shake animation with a warning message: "Please apply, cancel, or reset filters before closing." This ensures users never accidentally lose their filter selections.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(dt=(lt=F.parameters)==null?void 0:lt.docs)==null?void 0:dt.source},description:{story:`## New Feature: Unsaved Changes Protection

**What's New:**
- 💾 **Pending filter state** - filter selections aren't applied until you click Apply
- 🔒 **Prevents accidental loss** of filter selections
- 💥 **Shake animation** on action buttons when trying to close with unsaved changes
- ⚠️ **Inline warning message** explains what to do

**Behavior:**
- Select filters → stored as "pending" (not applied yet)
- Try to close → blocked with warning
- Must explicitly Apply, Cancel, or Reset

**Try it:**
1. Open Filters panel
2. Select any filter value from dropdown
3. Try clicking outside or pressing ESC
4. Notice the shake animation and warning message
5. Click Apply to save, Cancel to discard, or Reset to clear all`,...(ut=(ct=F.parameters)==null?void 0:ct.docs)==null?void 0:ut.description}}};const La=["WithSidePanel","WithModal","WithBothControls","WithSubHeaders","WithFilterCountBadge","WithAlwaysVisibleSearchHeaders","WithCustomTabs","WithClickOutsideToClose","WithUnsavedChangesProtection"];export{L as WithAlwaysVisibleSearchHeaders,_ as WithBothControls,M as WithClickOutsideToClose,$ as WithCustomTabs,R as WithFilterCountBadge,z as WithModal,W as WithSidePanel,P as WithSubHeaders,F as WithUnsavedChangesProtection,La as __namedExportsOrder,Ra as default};
