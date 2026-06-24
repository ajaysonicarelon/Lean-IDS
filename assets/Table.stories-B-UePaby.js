import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as s}from"./index-B0WjJBI_.js";import{T as o,a as d,b as Ve}from"./TableSettings-DjN2qYNT.js";import{P as Ue}from"./Pagination-OlLJGOmg.js";import{I as me}from"./Icon-BytZhcyh.js";import{B as ue}from"./Button-DO4HjNMh.js";import{c as f}from"./styled-components.browser.esm-BIi91Tbq.js";import"./_commonjsHelpers-CqkleIqs.js";import"./Checkbox-BdmLAclb.js";import"./Badge-BnocszLR.js";import"./Chip-DQ4w4BrW.js";import"./InlineMessage-Bi8bYhwz.js";const T=f.table`
  width: 100%;
  border-collapse: collapse;
  background-color: white;
`,he=f.thead``,A=f.tbody``,h=f.tr``,ma={title:"Components/Table",parameters:{layout:"padded",docs:{description:{component:`
## Usage

\`\`\`tsx
import { TableHeader, TableCell } from '@lean-ids/components';

function DataTable() {
  return (
    <table>
      <thead>
        <tr>
          <TableHeader label="Name" sortable sortDirection="asc" />
          <TableHeader label="Email" />
          <TableHeader label="Status" />
        </tr>
      </thead>
      <tbody>
        <tr>
          <TableCell 
            showAvatar 
            showUserInfo 
            userName="John Doe" 
            userRole="Developer" 
          />
          <TableCell showText text="john@example.com" />
          <TableCell showBadge badgeLabel="Active" badgeType="success" />
        </tr>
      </tbody>
    </table>
  );
}
\`\`\`

The Table components provide a flexible system for building data tables with sortable headers and customizable cells.

### TableHeader Variants

- **default** - Standard header with optional checkbox, label, and sort arrow
- **locked** - Adds a lock icon for freezing/pinning columns
- **resizeable** - Adds a resize handle for adjustable column width
- **resizeable-locked** - Combines both lock and resize features
- **search** - Replaces label with a search input field

### TableHeader Props

- \`variant\` - Header variant type
- \`side\` - Position for border radius ('left' | 'middle' | 'right')
- \`locked\` - Whether column is locked/frozen
- \`resizable\` - Whether column is resizable
- \`searchValue\` - Controlled search input value
- \`onLockToggle\` - Callback when lock is toggled
- \`onResize\` - Callback when column is resized
- \`onSearchChange\` - Callback when search value changes
        `}}},tags:["autodocs"]},Xe=f.div`
  width: 100%;
`,Ke=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  margin-bottom: 16px;
`,Ge=f.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: #222;
  margin: 0;
`,qe=f.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,Ye=f.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid #b1b1b1;
  border-radius: 4px;
  background-color: white;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  color: #222;
  cursor: pointer;
  min-width: 200px;
  
  &:focus {
    outline: none;
    border-color: #6366f1;
  }
`,Qe=f.div`
  overflow-x: auto;
  max-height: 600px;
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  margin-bottom: 20px;
  position: relative;
`,Ze=f.thead`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #f8f7fb;
`,B={render:()=>{const Y=()=>{const[L,I]=s.useState(1),[C,Q]=s.useState(10),[Z,_]=s.useState(100),[ee,ae]=s.useState(200),[x,te]=s.useState(""),[oe,ne]=s.useState(150),[re,se]=s.useState(120),[g,le]=s.useState("name"),[b,E]=s.useState("asc"),[ie,O]=s.useState(!1),[v,z]=s.useState([]),[S,j]=s.useState(!1),[$,H]=s.useState({}),[M,D]=s.useState(!1),[p,P]=s.useState([{id:"checkbox",label:"Select",visible:!0,locked:!0,order:0},{id:"id",label:"ID",visible:!0,locked:!1,order:1},{id:"user",label:"User",visible:!0,locked:!1,order:2},{id:"email",label:"Email",visible:!0,locked:!1,order:3},{id:"phone",label:"Phone",visible:!0,locked:!1,order:4},{id:"location",label:"Location",visible:!0,locked:!1,order:5},{id:"amount",label:"Amount",visible:!0,locked:!1,order:6},{id:"date",label:"Date",visible:!0,locked:!1,order:7},{id:"department",label:"Department",visible:!0,locked:!1,order:8},{id:"manager",label:"Manager",visible:!0,locked:!1,order:9},{id:"status",label:"Status",visible:!0,locked:!1,order:10},{id:"actions",label:"Actions",visible:!0,locked:!1,order:11}]),k=(a,r)=>{const c=p.filter(t=>t.locked&&t.id!=="checkbox").length;if(r&&c>=3){D(!0),setTimeout(()=>D(!1),3e3);return}const n=p.map(t=>t.id===a?{...t,locked:r}:t).sort((t,m)=>t.id==="checkbox"?-1:m.id==="checkbox"?1:t.locked&&!m.locked?-1:!t.locked&&m.locked?1:t.order-m.order).map((t,m)=>({...t,order:m}));P(n)},w=a=>{g===a?E(b==="asc"?"desc":b==="desc"?"none":"asc"):(le(a),E("asc"))},F=a=>{O(a),z(a?Array.from({length:y.length},(r,c)=>c):[])},i=(a,r)=>{r?z([...v,a]):(z(v.filter(c=>c!==a)),O(!1))};s.useEffect(()=>{I(1)},[C]),s.useEffect(()=>{const a=document.querySelector("[data-scroll-container]");if(!a)return;const r=()=>{const c=a.scrollLeft;a.querySelectorAll('[data-locked="true"]').forEach(l=>{c>0?l.classList.add("is-stuck"):l.classList.remove("is-stuck")})};return a.addEventListener("scroll",r),()=>a.removeEventListener("scroll",r)},[]);const y=[{id:"1001",name:"Alice Johnson",role:"Senior Developer",email:"alice.johnson@company.com",phone:"+1 (555) 123-4567",location:"New York, NY",amount:"$245,000",date:"March 15, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=1"},{id:"1002",name:"Bob Smith",role:"Product Manager",email:"bob.smith@company.com",phone:"+1 (555) 234-5678",location:"San Francisco, CA",amount:"$189,500",date:"March 18, 2025",department:"Product",manager:"Michael Torres",status:"Pending",avatar:"https://i.pravatar.cc/32?img=2"},{id:"1003",name:"Carol Williams",role:"UX Designer",email:"carol.williams@company.com",phone:"+1 (555) 345-6789",location:"Austin, TX",amount:"$312,750",date:"March 20, 2025",department:"Design",manager:"Jennifer Lee",status:"Active",avatar:"https://i.pravatar.cc/32?img=3"},{id:"1004",name:"David Brown",role:"DevOps Engineer",email:"david.brown@company.com",phone:"+1 (555) 456-7890",location:"Seattle, WA",amount:"$198,250",date:"March 22, 2025",department:"Operations",manager:"Sarah Chen",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=4"},{id:"1005",name:"Emma Davis",role:"Data Analyst",email:"emma.davis@company.com",phone:"+1 (555) 567-8901",location:"Boston, MA",amount:"$275,800",date:"March 25, 2025",department:"Analytics",manager:"Robert Kim",status:"Active",avatar:"https://i.pravatar.cc/32?img=5"},{id:"1006",name:"Frank Martinez",role:"Backend Developer",email:"frank.martinez@company.com",phone:"+1 (555) 678-9012",location:"Chicago, IL",amount:"$220,000",date:"April 1, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=6"},{id:"1007",name:"Grace Lee",role:"Marketing Manager",email:"grace.lee@company.com",phone:"+1 (555) 789-0123",location:"Los Angeles, CA",amount:"$165,000",date:"April 3, 2025",department:"Marketing",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=7"},{id:"1008",name:"Henry Wilson",role:"QA Engineer",email:"henry.wilson@company.com",phone:"+1 (555) 890-1234",location:"Denver, CO",amount:"$145,500",date:"April 5, 2025",department:"Quality",manager:"Jennifer Lee",status:"Pending",avatar:"https://i.pravatar.cc/32?img=8"},{id:"1009",name:"Iris Taylor",role:"Frontend Developer",email:"iris.taylor@company.com",phone:"+1 (555) 901-2345",location:"Portland, OR",amount:"$210,000",date:"April 8, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=9"},{id:"1010",name:"Jack Anderson",role:"Sales Director",email:"jack.anderson@company.com",phone:"+1 (555) 012-3456",location:"Miami, FL",amount:"$295,000",date:"April 10, 2025",department:"Sales",manager:"Robert Kim",status:"Active",avatar:"https://i.pravatar.cc/32?img=10"},{id:"1011",name:"Kelly Thompson",role:"HR Manager",email:"kelly.thompson@company.com",phone:"+1 (555) 123-4568",location:"Atlanta, GA",amount:"$155,000",date:"April 12, 2025",department:"Human Resources",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=11"},{id:"1012",name:"Liam Garcia",role:"Security Analyst",email:"liam.garcia@company.com",phone:"+1 (555) 234-5679",location:"Phoenix, AZ",amount:"$185,000",date:"April 15, 2025",department:"Security",manager:"Sarah Chen",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=12"},{id:"1013",name:"Mia Rodriguez",role:"Content Writer",email:"mia.rodriguez@company.com",phone:"+1 (555) 345-6780",location:"Nashville, TN",amount:"$125,000",date:"April 18, 2025",department:"Marketing",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=13"},{id:"1014",name:"Noah Martinez",role:"Cloud Architect",email:"noah.martinez@company.com",phone:"+1 (555) 456-7891",location:"Dallas, TX",amount:"$285,000",date:"April 20, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=14"},{id:"1015",name:"Olivia Hernandez",role:"Business Analyst",email:"olivia.hernandez@company.com",phone:"+1 (555) 567-8902",location:"Philadelphia, PA",amount:"$175,000",date:"April 22, 2025",department:"Analytics",manager:"Robert Kim",status:"Pending",avatar:"https://i.pravatar.cc/32?img=15"},{id:"1016",name:"Paul Lopez",role:"Mobile Developer",email:"paul.lopez@company.com",phone:"+1 (555) 678-9013",location:"San Diego, CA",amount:"$225,000",date:"April 25, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=16"},{id:"1017",name:"Quinn Gonzalez",role:"UI Designer",email:"quinn.gonzalez@company.com",phone:"+1 (555) 789-0124",location:"Minneapolis, MN",amount:"$195,000",date:"April 28, 2025",department:"Design",manager:"Jennifer Lee",status:"Active",avatar:"https://i.pravatar.cc/32?img=17"},{id:"1018",name:"Rachel Wilson",role:"Project Manager",email:"rachel.wilson@company.com",phone:"+1 (555) 890-1235",location:"Detroit, MI",amount:"$205,000",date:"May 1, 2025",department:"Product",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=18"},{id:"1019",name:"Samuel Moore",role:"Database Admin",email:"samuel.moore@company.com",phone:"+1 (555) 901-2346",location:"Columbus, OH",amount:"$165,000",date:"May 3, 2025",department:"Operations",manager:"Sarah Chen",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=19"},{id:"1020",name:"Tara Taylor",role:"Scrum Master",email:"tara.taylor@company.com",phone:"+1 (555) 012-3457",location:"Charlotte, NC",amount:"$155,000",date:"May 5, 2025",department:"Product",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=20"},{id:"1021",name:"Uma Patel",role:"Technical Writer",email:"uma.patel@company.com",phone:"+1 (555) 123-4569",location:"San Jose, CA",amount:"$135,000",date:"May 8, 2025",department:"Documentation",manager:"Jennifer Lee",status:"Active",avatar:"https://i.pravatar.cc/32?img=21"},{id:"1022",name:"Victor Chang",role:"Solutions Architect",email:"victor.chang@company.com",phone:"+1 (555) 234-5680",location:"Houston, TX",amount:"$265,000",date:"May 10, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=22"},{id:"1023",name:"Wendy Kim",role:"Customer Success Manager",email:"wendy.kim@company.com",phone:"+1 (555) 345-6791",location:"Raleigh, NC",amount:"$145,000",date:"May 12, 2025",department:"Customer Success",manager:"Michael Torres",status:"Pending",avatar:"https://i.pravatar.cc/32?img=23"},{id:"1024",name:"Xavier Santos",role:"Network Engineer",email:"xavier.santos@company.com",phone:"+1 (555) 456-7892",location:"Tampa, FL",amount:"$175,000",date:"May 15, 2025",department:"Operations",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=24"},{id:"1025",name:"Yara Ahmed",role:"Product Designer",email:"yara.ahmed@company.com",phone:"+1 (555) 567-8903",location:"Baltimore, MD",amount:"$205,000",date:"May 18, 2025",department:"Design",manager:"Jennifer Lee",status:"Active",avatar:"https://i.pravatar.cc/32?img=25"},{id:"1026",name:"Zachary Brown",role:"Systems Administrator",email:"zachary.brown@company.com",phone:"+1 (555) 678-9014",location:"Indianapolis, IN",amount:"$155,000",date:"May 20, 2025",department:"Operations",manager:"Sarah Chen",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=26"},{id:"1027",name:"Aria Johnson",role:"Data Scientist",email:"aria.johnson@company.com",phone:"+1 (555) 789-0125",location:"San Antonio, TX",amount:"$235,000",date:"May 22, 2025",department:"Analytics",manager:"Robert Kim",status:"Active",avatar:"https://i.pravatar.cc/32?img=27"},{id:"1028",name:"Blake Miller",role:"DevOps Lead",email:"blake.miller@company.com",phone:"+1 (555) 890-1236",location:"Jacksonville, FL",amount:"$255,000",date:"May 25, 2025",department:"Operations",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=28"},{id:"1029",name:"Chloe Davis",role:"Brand Manager",email:"chloe.davis@company.com",phone:"+1 (555) 901-2347",location:"Columbus, OH",amount:"$165,000",date:"May 28, 2025",department:"Marketing",manager:"Michael Torres",status:"Active",avatar:"https://i.pravatar.cc/32?img=29"},{id:"1030",name:"Dylan Garcia",role:"Full Stack Developer",email:"dylan.garcia@company.com",phone:"+1 (555) 012-3458",location:"Fort Worth, TX",amount:"$215,000",date:"June 1, 2025",department:"Engineering",manager:"Sarah Chen",status:"Pending",avatar:"https://i.pravatar.cc/32?img=30"},{id:"1031",name:"Elena Martinez",role:"Compliance Officer",email:"elena.martinez@company.com",phone:"+1 (555) 123-4570",location:"Charlotte, NC",amount:"$185,000",date:"June 3, 2025",department:"Legal",manager:"Robert Kim",status:"Active",avatar:"https://i.pravatar.cc/32?img=31"},{id:"1032",name:"Felix Rodriguez",role:"AI Engineer",email:"felix.rodriguez@company.com",phone:"+1 (555) 234-5681",location:"San Francisco, CA",amount:"$295,000",date:"June 5, 2025",department:"Engineering",manager:"Sarah Chen",status:"Active",avatar:"https://i.pravatar.cc/32?img=32"},{id:"1033",name:"Gina Wilson",role:"Account Manager",email:"gina.wilson@company.com",phone:"+1 (555) 345-6792",location:"Denver, CO",amount:"$175,000",date:"June 8, 2025",department:"Sales",manager:"Robert Kim",status:"Active",avatar:"https://i.pravatar.cc/32?img=33"},{id:"1034",name:"Hugo Anderson",role:"Release Manager",email:"hugo.anderson@company.com",phone:"+1 (555) 456-7893",location:"Seattle, WA",amount:"$195,000",date:"June 10, 2025",department:"Operations",manager:"Sarah Chen",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=34"},{id:"1035",name:"Ivy Thompson",role:"UX Researcher",email:"ivy.thompson@company.com",phone:"+1 (555) 567-8904",location:"Austin, TX",amount:"$185,000",date:"June 12, 2025",department:"Design",manager:"Jennifer Lee",status:"Active",avatar:"https://i.pravatar.cc/32?img=35"}],pe=[...x?y.filter(a=>a.email.toLowerCase().includes(x.toLowerCase())):y].sort((a,r)=>{if(b==="none")return 0;let c=a[g],u=r[g];return g==="amount"&&(c=parseFloat(String(c).replace(/[$,]/g,"")),u=parseFloat(String(u).replace(/[$,]/g,""))),g==="date"&&(c=new Date(String(c)).getTime(),u=new Date(String(u)).getTime()),c<u?b==="asc"?-1:1:c>u?b==="asc"?1:-1:0}),ge=pe.length,Fe=Math.ceil(ge/C),ce=(L-1)*C,Ne=ce+C,Be=pe.slice(ce,Ne),R=p.filter(a=>a.visible).sort((a,r)=>a.order-r.order);s.useEffect(()=>{const a=document.querySelector("[data-scroll-container]");if(!a)return;const r=()=>{const l=a.querySelectorAll("thead th"),n={};let t=0;R.forEach((m,W)=>{if(m.locked&&l[W]){n[m.id]=t;const de=l[W].offsetWidth;t+=de}}),H(n)};r();const c=new ResizeObserver(()=>{r()});return a.querySelectorAll("thead th").forEach(l=>c.observe(l)),()=>{c.disconnect()}},[R.map(a=>a.id+a.locked).join(",")]);const Je=(a,r,c,u,l,n)=>{const t={selected:c,isFirstColumn:u,locked:l,leftOffset:n};switch(a){case"checkbox":return null;case"id":return e.jsx(o,{showNumber:!0,number:r.id,...t},"id");case"user":return e.jsx(o,{showAvatar:!0,avatarSrc:r.avatar,showUserInfo:!0,userName:r.name,userRole:r.role,...t},"user");case"email":return e.jsx(o,{showText:!0,text:r.email,...t},"email");case"phone":return e.jsx(o,{showText:!0,text:r.phone,...t},"phone");case"location":return e.jsx(o,{showText:!0,text:r.location,...t},"location");case"amount":return e.jsx(o,{showAmount:!0,amount:r.amount,align:"right",...t},"amount");case"date":return e.jsx(o,{showDate:!0,date:r.date,...t},"date");case"department":return e.jsx(o,{showText:!0,text:r.department,...t},"department");case"manager":return e.jsx(o,{showText:!0,text:r.manager,...t},"manager");case"status":return e.jsx(o,{showBadge:!0,badgeLabel:r.status,badgeType:r.status==="Active"?"success":r.status==="Pending"?"warning":"error",...t},"status");case"actions":return e.jsx(o,{showEditAction:!0,showDeleteAction:!0,...t},"actions");default:return null}};return e.jsxs(Xe,{children:[e.jsxs(Ke,{children:[e.jsx(Ge,{children:"Tabular View"}),e.jsxs(qe,{children:[e.jsxs(Ye,{defaultValue:"all",children:[e.jsx("option",{value:"all",children:"All Departments"}),e.jsx("option",{value:"engineering",children:"Engineering"}),e.jsx("option",{value:"product",children:"Product"}),e.jsx("option",{value:"design",children:"Design"})]}),e.jsx(ue,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:e.jsx(me,{name:"Download",size:"medium"}),"aria-label":"Download",children:"Download"}),e.jsx(ue,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:e.jsx(me,{name:"FilterAlt",size:"medium"}),"aria-label":"Filter",children:"Filter"}),e.jsx(ue,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:e.jsx(me,{name:"Settings",size:"medium"}),onClick:()=>j(!0),"aria-label":"Settings",children:"Settings"})]})]}),e.jsx(Qe,{"data-scroll-container":!0,children:e.jsxs(T,{children:[e.jsx(Ze,{children:e.jsx(h,{children:R.map((a,r)=>{const c=r===0,u=r===R.length-1,l=c?"left":u?"right":"middle",n=a.locked||!1,t=$[a.id]||0;return a.id==="checkbox"?e.jsx(d,{label:"",side:l,showCheckbox:!0,checked:ie,onCheckChange:F,locked:n,leftOffset:t},a.id):a.id==="id"?e.jsx(d,{label:a.label,variant:n?"resizeable-locked":"resizeable",side:l,resizable:!n,onLockToggle:()=>k("id",!n),onResize:n?void 0:_,width:n?void 0:Z,sortable:!0,sortDirection:g==="id"?b:"none",onSort:()=>w("id"),locked:n,leftOffset:t},a.id):a.id==="user"?e.jsx(d,{label:a.label,variant:n?"resizeable-locked":"resizeable",side:l,resizable:!0,onLockToggle:()=>k("user",!n),onResize:ae,width:ee,sortable:!0,sortDirection:g==="name"?b:"none",onSort:()=>w("name"),locked:n,leftOffset:t},a.id):a.id==="email"?e.jsx(d,{label:a.label,variant:"search",side:l,searchValue:x,searchPlaceholder:"Search emails...",onSearchChange:te,onLockToggle:n?void 0:()=>k("email",!n),locked:n,leftOffset:t},a.id):a.id==="amount"?e.jsx(d,{label:a.label,variant:n?"resizeable-locked":"resizeable",side:l,resizable:!0,onLockToggle:()=>k("amount",!n),onResize:ne,width:oe,align:"right",sortable:!0,sortDirection:g==="amount"?b:"none",onSort:()=>w("amount"),locked:n,leftOffset:t},a.id):a.id==="status"?e.jsx(d,{label:a.label,variant:n?"resizeable-locked":"resizeable",side:l,resizable:!0,onLockToggle:()=>k("status",!n),onResize:se,width:re,locked:n,leftOffset:t},a.id):a.id==="date"?e.jsx(d,{label:a.label,variant:n?"resizeable-locked":"default",side:l,sortable:!0,sortDirection:g==="date"?b:"none",onSort:()=>w("date"),onLockToggle:()=>k("date",!n),locked:n,leftOffset:t},a.id):e.jsx(d,{label:a.label,variant:n?"resizeable-locked":"default",side:l,onLockToggle:()=>k(a.id,!n),locked:n,leftOffset:t},a.id)})})}),e.jsx(A,{children:Be.map((a,r)=>{const c=ce+r,u=v.includes(c);return e.jsx(h,{children:R.map((l,n)=>{const t=n===0,m=l.locked||!1,W=$[l.id]||0;return l.id==="checkbox"?e.jsx(o,{showCheckbox:!0,checked:u,onCheckChange:de=>i(c,de),selected:u,isFirstColumn:t,locked:m,leftOffset:W},"checkbox"):Je(l.id,a,u,t,m,W)})},a.id)})})]})}),e.jsx(Ue,{variant:"filled",currentPage:L,totalPages:Fe,totalItems:ge,itemsPerPage:C,onPageChange:I,onItemsPerPageChange:Q}),e.jsx(Ve,{isOpen:S,onClose:()=>j(!1),columns:p.filter(a=>a.id!=="checkbox"),lockWarning:M,onColumnsChange:a=>{const r=p.find(l=>l.id==="checkbox"),c=r?[r,...a]:a;if(a.some(l=>{const n=p.find(t=>t.id===l.id);return n&&n.locked!==l.locked})){const n=c.sort((t,m)=>t.id==="checkbox"?-1:m.id==="checkbox"?1:t.locked&&!m.locked?-1:!t.locked&&m.locked?1:t.order-m.order).map((t,m)=>({...t,order:m}));P(n)}else P(c)}})]})};return e.jsx(Y,{})}},J={render:()=>e.jsx(T,{children:e.jsx(he,{children:e.jsxs(h,{children:[e.jsx(d,{label:"Name",sortable:!0,sortDirection:"asc"}),e.jsx(d,{label:"Email",sortable:!0,sortDirection:"none"}),e.jsx(d,{label:"Date",sortable:!0,sortDirection:"desc"}),e.jsx(d,{label:"Status"})]})})})},V={render:()=>e.jsx(T,{children:e.jsxs(A,{children:[e.jsx(h,{children:e.jsx(o,{showAvatar:!0,showUserInfo:!0,userName:"John Doe",userRole:"Senior Developer"})}),e.jsx(h,{children:e.jsx(o,{showAvatar:!0,avatarSrc:"https://i.pravatar.cc/32?img=5",showUserInfo:!0,userName:"Jane Smith",userRole:"Product Manager"})})]})})},U={render:()=>e.jsx(T,{children:e.jsx(A,{children:e.jsxs(h,{children:[e.jsx(o,{showNumber:!0,number:"1234567890"}),e.jsx(o,{showAmount:!0,amount:"$123,654,000"}),e.jsx(o,{showDate:!0,date:"March 12, 2025"}),e.jsx(o,{showText:!0,text:"Regular text content"})]})})})},X={render:()=>e.jsx(T,{children:e.jsxs(A,{children:[e.jsxs(h,{children:[e.jsx(o,{showBadge:!0,badgeLabel:"Active",badgeType:"success",badgeStyle:"default"}),e.jsx(o,{showBadge:!0,badgeLabel:"Pending",badgeType:"warning",badgeStyle:"subdued"}),e.jsx(o,{showBadge:!0,badgeLabel:"Error",badgeType:"error",badgeStyle:"outlined"})]}),e.jsxs(h,{children:[e.jsx(o,{showChip:!0,chipLabel:"Premium",chipType:"success"}),e.jsx(o,{showChip:!0,chipLabel:"Trial",chipType:"warning"}),e.jsx(o,{showChip:!0,chipLabel:"Free",chipType:"neutral"})]})]})})},K={render:()=>e.jsx(T,{children:e.jsxs(A,{children:[e.jsx(h,{children:e.jsx(o,{showEditAction:!0,showDeleteAction:!0})}),e.jsx(h,{children:e.jsx(o,{showButton:!0,buttonLabel:"View Details"})}),e.jsx(h,{children:e.jsx(o,{showButton:!0,buttonLabel:"Download",showEditAction:!0})})]})})},G={render:()=>e.jsxs(T,{children:[e.jsx(he,{children:e.jsxs(h,{children:[e.jsx(d,{label:"",showCheckbox:!0,checked:!1,indeterminate:!0}),e.jsx(d,{label:"Name"}),e.jsx(d,{label:"Email"})]})}),e.jsxs(A,{children:[e.jsxs(h,{children:[e.jsx(o,{showCheckbox:!0,checked:!0}),e.jsx(o,{showText:!0,text:"John Doe"}),e.jsx(o,{showText:!0,text:"john@example.com"})]}),e.jsxs(h,{children:[e.jsx(o,{showCheckbox:!0,checked:!0}),e.jsx(o,{showText:!0,text:"Jane Smith"}),e.jsx(o,{showText:!0,text:"jane@example.com"})]}),e.jsxs(h,{children:[e.jsx(o,{showCheckbox:!0,checked:!1}),e.jsx(o,{showText:!0,text:"Bob Johnson"}),e.jsx(o,{showText:!0,text:"bob@example.com"})]})]})]})},q={render:()=>{const Y=()=>{const[L,I]=s.useState(!0),[C,Q]=s.useState(!1),[Z,_]=s.useState(100),[ee,ae]=s.useState(200),[x,te]=s.useState(""),[oe,ne]=s.useState(150),[re,se]=s.useState(180),[g,le]=s.useState(160),[b,E]=s.useState(140),[ie,O]=s.useState(120),[v,z]=s.useState("name"),[S,j]=s.useState("asc"),[$,H]=s.useState(!1),[M,D]=s.useState([]),p=i=>{v===i?j(S==="asc"?"desc":S==="desc"?"none":"asc"):(z(i),j("asc"))},P=i=>{H(i),D(i?[0,1,2,3]:[])},k=(i,y)=>{y?D([...M,i]):(D(M.filter(N=>N!==i)),H(!1))},w=[{id:"1001",name:"Alice Johnson",role:"Senior Developer",email:"alice.johnson@company.com",amount:"$245,000",date:"March 15, 2025",department:"Engineering",location:"New York, NY",phone:"+1 (555) 123-4567",status:"Active",avatar:"https://i.pravatar.cc/32?img=1"},{id:"1002",name:"Bob Smith",role:"Product Manager",email:"bob.smith@company.com",amount:"$189,500",date:"March 18, 2025",department:"Product",location:"San Francisco, CA",phone:"+1 (555) 234-5678",status:"Pending",avatar:"https://i.pravatar.cc/32?img=2"},{id:"1003",name:"Carol Williams",role:"UX Designer",email:"carol.williams@company.com",amount:"$312,750",date:"March 20, 2025",department:"Design",location:"Austin, TX",phone:"+1 (555) 345-6789",status:"Active",avatar:"https://i.pravatar.cc/32?img=3"},{id:"1004",name:"David Brown",role:"DevOps Engineer",email:"david.brown@company.com",amount:"$198,250",date:"March 22, 2025",department:"Operations",location:"Seattle, WA",phone:"+1 (555) 456-7890",status:"Inactive",avatar:"https://i.pravatar.cc/32?img=4"}],F=x?w.filter(i=>i.email.toLowerCase().includes(x.toLowerCase())):w;return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"16px",padding:"12px",backgroundColor:"#f8f7fb",borderRadius:"8px"},children:[e.jsx("h4",{style:{margin:"0 0 8px 0",fontSize:"14px",fontWeight:600},children:"Interactive Features Demo"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px",fontSize:"12px",lineHeight:"1.6"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"ID Column:"})," Locked (frozen) + Resizable - Stays visible when scrolling horizontally"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Horizontal Scroll:"})," Table has many columns - scroll right to see more"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Name Column:"})," Resizable + Sortable - Drag to resize, click to sort"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Email Column:"})," Search header - Type to filter rows"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Status Column:"})," Can be locked/unlocked - Toggle lock icon to freeze"]})]})]}),e.jsx("div",{style:{overflowX:"auto",border:"1px solid #e6e6e6",borderRadius:"8px"},children:e.jsxs(T,{children:[e.jsx(he,{children:e.jsxs(h,{children:[e.jsx(d,{label:"",side:"left",showCheckbox:!0,checked:$,onCheckChange:P}),e.jsx(d,{label:"ID",variant:"resizeable-locked",side:"left",locked:L,resizable:!0,onLockToggle:()=>I(!L),onResize:_,width:Z,sortable:!0,sortDirection:v==="id"?S:"none",onSort:()=>p("id")}),e.jsx(d,{label:"User",variant:"resizeable",resizable:!0,onResize:ae,width:ee,sortable:!0,sortDirection:v==="name"?S:"none",onSort:()=>p("name")}),e.jsx(d,{label:"Email",variant:"search",searchValue:x,searchPlaceholder:"Search emails...",onSearchChange:te}),e.jsx(d,{label:"Amount",variant:"resizeable",resizable:!0,onResize:ne,width:oe,align:"right",sortable:!0,sortDirection:v==="amount"?S:"none",onSort:()=>p("amount")}),e.jsx(d,{label:"Date",sortable:!0,sortDirection:v==="date"?S:"none",onSort:()=>p("date")}),e.jsx(d,{label:"Department",variant:"resizeable",resizable:!0,onResize:se,width:re,sortable:!0,sortDirection:v==="department"?S:"none",onSort:()=>p("department")}),e.jsx(d,{label:"Location",variant:"resizeable",resizable:!0,onResize:le,width:g}),e.jsx(d,{label:"Phone",variant:"resizeable",resizable:!0,onResize:E,width:b}),e.jsx(d,{label:"Status",variant:"resizeable-locked",locked:C,resizable:!0,onLockToggle:()=>Q(!C),onResize:O,width:ie}),e.jsx(d,{label:"Actions",side:"right"})]})}),e.jsx(A,{children:F.map((i,y)=>e.jsxs(h,{children:[e.jsx(o,{showCheckbox:!0,checked:M.includes(y),onCheckChange:N=>k(y,N)}),e.jsx(o,{showNumber:!0,number:i.id}),e.jsx(o,{showAvatar:!0,avatarSrc:i.avatar,showUserInfo:!0,userName:i.name,userRole:i.role}),e.jsx(o,{showText:!0,text:i.email}),e.jsx(o,{showAmount:!0,amount:i.amount,align:"right"}),e.jsx(o,{showDate:!0,date:i.date}),e.jsx(o,{showText:!0,text:i.department}),e.jsx(o,{showText:!0,text:i.location}),e.jsx(o,{showText:!0,text:i.phone}),e.jsx(o,{showBadge:!0,badgeLabel:i.status,badgeType:i.status==="Active"?"success":i.status==="Pending"?"warning":"error"}),e.jsx(o,{showEditAction:!0,showDeleteAction:!0})]},i.id))})]})}),F.length===0&&e.jsxs("div",{style:{padding:"24px",textAlign:"center",color:"#6C6C6C"},children:['No results found for "',x,'"']})]})};return e.jsx(Y,{})},parameters:{docs:{description:{story:`
### Complete Table with All Header Features

This example demonstrates all TableHeader variants and features:

**Header Variants:**
- **Default** - Standard header with checkbox and sort
- **Locked** - Column freeze/pin functionality
- **Resizeable** - Drag to adjust column width
- **Resizeable + Locked** - Both features combined
- **Search** - Inline search/filter input

**Interactive Features:**
- Checkbox selection (header + rows)
- Lock/unlock columns (ID, Status)
- Resize columns (drag handles)
- Search filtering (Email column)
- Sortable columns (click headers)
- Border radius on edge columns

**Try it:**
1. Click lock icons to freeze/unfreeze columns
2. Drag resize handles to adjust widths
3. Type in the Email search field to filter
4. Click sortable headers to change sort order
5. Select rows with checkboxes
        `}}}};var be,fe,ve;B.parameters={...B.parameters,docs:{...(be=B.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const CompleteTable = () => {
      const [currentPage, setCurrentPage] = useState(1);
      const [itemsPerPage, setItemsPerPage] = useState(10);
      const [idWidth, setIdWidth] = useState(100);
      const [nameWidth, setNameWidth] = useState(200);
      const [emailSearch, setEmailSearch] = useState('');
      const [amountWidth, setAmountWidth] = useState(150);
      const [statusWidth, setStatusWidth] = useState(120);
      const [sortColumn, setSortColumn] = useState<string>('name');
      const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('asc');
      const [allChecked, setAllChecked] = useState(false);
      const [selectedRows, setSelectedRows] = useState<number[]>([]);
      const [settingsOpen, setSettingsOpen] = useState(false);
      const [columnOffsets, setColumnOffsets] = useState<{
        [key: string]: number;
      }>({});
      const [lockWarning, setLockWarning] = useState(false);
      const [columnConfigs, setColumnConfigs] = useState<ColumnConfig[]>([{
        id: 'checkbox',
        label: 'Select',
        visible: true,
        locked: true,
        order: 0
      }, {
        id: 'id',
        label: 'ID',
        visible: true,
        locked: false,
        order: 1
      }, {
        id: 'user',
        label: 'User',
        visible: true,
        locked: false,
        order: 2
      }, {
        id: 'email',
        label: 'Email',
        visible: true,
        locked: false,
        order: 3
      }, {
        id: 'phone',
        label: 'Phone',
        visible: true,
        locked: false,
        order: 4
      }, {
        id: 'location',
        label: 'Location',
        visible: true,
        locked: false,
        order: 5
      }, {
        id: 'amount',
        label: 'Amount',
        visible: true,
        locked: false,
        order: 6
      }, {
        id: 'date',
        label: 'Date',
        visible: true,
        locked: false,
        order: 7
      }, {
        id: 'department',
        label: 'Department',
        visible: true,
        locked: false,
        order: 8
      }, {
        id: 'manager',
        label: 'Manager',
        visible: true,
        locked: false,
        order: 9
      }, {
        id: 'status',
        label: 'Status',
        visible: true,
        locked: false,
        order: 10
      }, {
        id: 'actions',
        label: 'Actions',
        visible: true,
        locked: false,
        order: 11
      }]);

      // Handle column locking with auto-arrangement
      const handleColumnLock = (columnId: string, locked: boolean) => {
        // Check if trying to lock and already have 3 locked columns (excluding checkbox)
        const currentLockedCount = columnConfigs.filter(col => col.locked && col.id !== 'checkbox').length;
        if (locked && currentLockedCount >= 3) {
          setLockWarning(true);
          setTimeout(() => setLockWarning(false), 3000);
          return;
        }
        const updatedConfigs = columnConfigs.map(col => col.id === columnId ? {
          ...col,
          locked
        } : col);

        // Sort to move locked columns to the left (after checkbox)
        const sortedConfigs = updatedConfigs.sort((a, b) => {
          // Checkbox always first
          if (a.id === 'checkbox') return -1;
          if (b.id === 'checkbox') return 1;

          // Then locked columns
          if (a.locked && !b.locked) return -1;
          if (!a.locked && b.locked) return 1;

          // Maintain original order for same lock state
          return a.order - b.order;
        });

        // Update order property
        const reorderedConfigs = sortedConfigs.map((col, index) => ({
          ...col,
          order: index
        }));
        setColumnConfigs(reorderedConfigs);
      };
      const handleSort = (column: string) => {
        if (sortColumn === column) {
          setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc');
        } else {
          setSortColumn(column);
          setSortDirection('asc');
        }
      };
      const handleSelectAll = (checked: boolean) => {
        setAllChecked(checked);
        setSelectedRows(checked ? Array.from({
          length: sampleData.length
        }, (_, i) => i) : []);
      };
      const handleRowSelect = (index: number, checked: boolean) => {
        if (checked) {
          setSelectedRows([...selectedRows, index]);
        } else {
          setSelectedRows(selectedRows.filter(i => i !== index));
          setAllChecked(false);
        }
      };

      // Reset to page 1 when items per page changes
      useEffect(() => {
        setCurrentPage(1);
      }, [itemsPerPage]);

      // Detect when locked columns are stuck and add is-stuck class
      useEffect(() => {
        const scrollContainer = document.querySelector('[data-scroll-container]') as HTMLElement;
        if (!scrollContainer) return;
        const handleScroll = () => {
          const scrollLeft = scrollContainer.scrollLeft;
          const lockedElements = scrollContainer.querySelectorAll('[data-locked="true"]');
          lockedElements.forEach(element => {
            if (scrollLeft > 0) {
              element.classList.add('is-stuck');
            } else {
              element.classList.remove('is-stuck');
            }
          });
        };
        scrollContainer.addEventListener('scroll', handleScroll);
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
      }, []);
      const sampleData = [{
        id: '1001',
        name: 'Alice Johnson',
        role: 'Senior Developer',
        email: 'alice.johnson@company.com',
        phone: '+1 (555) 123-4567',
        location: 'New York, NY',
        amount: '$245,000',
        date: 'March 15, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=1'
      }, {
        id: '1002',
        name: 'Bob Smith',
        role: 'Product Manager',
        email: 'bob.smith@company.com',
        phone: '+1 (555) 234-5678',
        location: 'San Francisco, CA',
        amount: '$189,500',
        date: 'March 18, 2025',
        department: 'Product',
        manager: 'Michael Torres',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=2'
      }, {
        id: '1003',
        name: 'Carol Williams',
        role: 'UX Designer',
        email: 'carol.williams@company.com',
        phone: '+1 (555) 345-6789',
        location: 'Austin, TX',
        amount: '$312,750',
        date: 'March 20, 2025',
        department: 'Design',
        manager: 'Jennifer Lee',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=3'
      }, {
        id: '1004',
        name: 'David Brown',
        role: 'DevOps Engineer',
        email: 'david.brown@company.com',
        phone: '+1 (555) 456-7890',
        location: 'Seattle, WA',
        amount: '$198,250',
        date: 'March 22, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=4'
      }, {
        id: '1005',
        name: 'Emma Davis',
        role: 'Data Analyst',
        email: 'emma.davis@company.com',
        phone: '+1 (555) 567-8901',
        location: 'Boston, MA',
        amount: '$275,800',
        date: 'March 25, 2025',
        department: 'Analytics',
        manager: 'Robert Kim',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=5'
      }, {
        id: '1006',
        name: 'Frank Martinez',
        role: 'Backend Developer',
        email: 'frank.martinez@company.com',
        phone: '+1 (555) 678-9012',
        location: 'Chicago, IL',
        amount: '$220,000',
        date: 'April 1, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=6'
      }, {
        id: '1007',
        name: 'Grace Lee',
        role: 'Marketing Manager',
        email: 'grace.lee@company.com',
        phone: '+1 (555) 789-0123',
        location: 'Los Angeles, CA',
        amount: '$165,000',
        date: 'April 3, 2025',
        department: 'Marketing',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=7'
      }, {
        id: '1008',
        name: 'Henry Wilson',
        role: 'QA Engineer',
        email: 'henry.wilson@company.com',
        phone: '+1 (555) 890-1234',
        location: 'Denver, CO',
        amount: '$145,500',
        date: 'April 5, 2025',
        department: 'Quality',
        manager: 'Jennifer Lee',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=8'
      }, {
        id: '1009',
        name: 'Iris Taylor',
        role: 'Frontend Developer',
        email: 'iris.taylor@company.com',
        phone: '+1 (555) 901-2345',
        location: 'Portland, OR',
        amount: '$210,000',
        date: 'April 8, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=9'
      }, {
        id: '1010',
        name: 'Jack Anderson',
        role: 'Sales Director',
        email: 'jack.anderson@company.com',
        phone: '+1 (555) 012-3456',
        location: 'Miami, FL',
        amount: '$295,000',
        date: 'April 10, 2025',
        department: 'Sales',
        manager: 'Robert Kim',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=10'
      }, {
        id: '1011',
        name: 'Kelly Thompson',
        role: 'HR Manager',
        email: 'kelly.thompson@company.com',
        phone: '+1 (555) 123-4568',
        location: 'Atlanta, GA',
        amount: '$155,000',
        date: 'April 12, 2025',
        department: 'Human Resources',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=11'
      }, {
        id: '1012',
        name: 'Liam Garcia',
        role: 'Security Analyst',
        email: 'liam.garcia@company.com',
        phone: '+1 (555) 234-5679',
        location: 'Phoenix, AZ',
        amount: '$185,000',
        date: 'April 15, 2025',
        department: 'Security',
        manager: 'Sarah Chen',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=12'
      }, {
        id: '1013',
        name: 'Mia Rodriguez',
        role: 'Content Writer',
        email: 'mia.rodriguez@company.com',
        phone: '+1 (555) 345-6780',
        location: 'Nashville, TN',
        amount: '$125,000',
        date: 'April 18, 2025',
        department: 'Marketing',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=13'
      }, {
        id: '1014',
        name: 'Noah Martinez',
        role: 'Cloud Architect',
        email: 'noah.martinez@company.com',
        phone: '+1 (555) 456-7891',
        location: 'Dallas, TX',
        amount: '$285,000',
        date: 'April 20, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=14'
      }, {
        id: '1015',
        name: 'Olivia Hernandez',
        role: 'Business Analyst',
        email: 'olivia.hernandez@company.com',
        phone: '+1 (555) 567-8902',
        location: 'Philadelphia, PA',
        amount: '$175,000',
        date: 'April 22, 2025',
        department: 'Analytics',
        manager: 'Robert Kim',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=15'
      }, {
        id: '1016',
        name: 'Paul Lopez',
        role: 'Mobile Developer',
        email: 'paul.lopez@company.com',
        phone: '+1 (555) 678-9013',
        location: 'San Diego, CA',
        amount: '$225,000',
        date: 'April 25, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=16'
      }, {
        id: '1017',
        name: 'Quinn Gonzalez',
        role: 'UI Designer',
        email: 'quinn.gonzalez@company.com',
        phone: '+1 (555) 789-0124',
        location: 'Minneapolis, MN',
        amount: '$195,000',
        date: 'April 28, 2025',
        department: 'Design',
        manager: 'Jennifer Lee',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=17'
      }, {
        id: '1018',
        name: 'Rachel Wilson',
        role: 'Project Manager',
        email: 'rachel.wilson@company.com',
        phone: '+1 (555) 890-1235',
        location: 'Detroit, MI',
        amount: '$205,000',
        date: 'May 1, 2025',
        department: 'Product',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=18'
      }, {
        id: '1019',
        name: 'Samuel Moore',
        role: 'Database Admin',
        email: 'samuel.moore@company.com',
        phone: '+1 (555) 901-2346',
        location: 'Columbus, OH',
        amount: '$165,000',
        date: 'May 3, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=19'
      }, {
        id: '1020',
        name: 'Tara Taylor',
        role: 'Scrum Master',
        email: 'tara.taylor@company.com',
        phone: '+1 (555) 012-3457',
        location: 'Charlotte, NC',
        amount: '$155,000',
        date: 'May 5, 2025',
        department: 'Product',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=20'
      }, {
        id: '1021',
        name: 'Uma Patel',
        role: 'Technical Writer',
        email: 'uma.patel@company.com',
        phone: '+1 (555) 123-4569',
        location: 'San Jose, CA',
        amount: '$135,000',
        date: 'May 8, 2025',
        department: 'Documentation',
        manager: 'Jennifer Lee',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=21'
      }, {
        id: '1022',
        name: 'Victor Chang',
        role: 'Solutions Architect',
        email: 'victor.chang@company.com',
        phone: '+1 (555) 234-5680',
        location: 'Houston, TX',
        amount: '$265,000',
        date: 'May 10, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=22'
      }, {
        id: '1023',
        name: 'Wendy Kim',
        role: 'Customer Success Manager',
        email: 'wendy.kim@company.com',
        phone: '+1 (555) 345-6791',
        location: 'Raleigh, NC',
        amount: '$145,000',
        date: 'May 12, 2025',
        department: 'Customer Success',
        manager: 'Michael Torres',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=23'
      }, {
        id: '1024',
        name: 'Xavier Santos',
        role: 'Network Engineer',
        email: 'xavier.santos@company.com',
        phone: '+1 (555) 456-7892',
        location: 'Tampa, FL',
        amount: '$175,000',
        date: 'May 15, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=24'
      }, {
        id: '1025',
        name: 'Yara Ahmed',
        role: 'Product Designer',
        email: 'yara.ahmed@company.com',
        phone: '+1 (555) 567-8903',
        location: 'Baltimore, MD',
        amount: '$205,000',
        date: 'May 18, 2025',
        department: 'Design',
        manager: 'Jennifer Lee',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=25'
      }, {
        id: '1026',
        name: 'Zachary Brown',
        role: 'Systems Administrator',
        email: 'zachary.brown@company.com',
        phone: '+1 (555) 678-9014',
        location: 'Indianapolis, IN',
        amount: '$155,000',
        date: 'May 20, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=26'
      }, {
        id: '1027',
        name: 'Aria Johnson',
        role: 'Data Scientist',
        email: 'aria.johnson@company.com',
        phone: '+1 (555) 789-0125',
        location: 'San Antonio, TX',
        amount: '$235,000',
        date: 'May 22, 2025',
        department: 'Analytics',
        manager: 'Robert Kim',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=27'
      }, {
        id: '1028',
        name: 'Blake Miller',
        role: 'DevOps Lead',
        email: 'blake.miller@company.com',
        phone: '+1 (555) 890-1236',
        location: 'Jacksonville, FL',
        amount: '$255,000',
        date: 'May 25, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=28'
      }, {
        id: '1029',
        name: 'Chloe Davis',
        role: 'Brand Manager',
        email: 'chloe.davis@company.com',
        phone: '+1 (555) 901-2347',
        location: 'Columbus, OH',
        amount: '$165,000',
        date: 'May 28, 2025',
        department: 'Marketing',
        manager: 'Michael Torres',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=29'
      }, {
        id: '1030',
        name: 'Dylan Garcia',
        role: 'Full Stack Developer',
        email: 'dylan.garcia@company.com',
        phone: '+1 (555) 012-3458',
        location: 'Fort Worth, TX',
        amount: '$215,000',
        date: 'June 1, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=30'
      }, {
        id: '1031',
        name: 'Elena Martinez',
        role: 'Compliance Officer',
        email: 'elena.martinez@company.com',
        phone: '+1 (555) 123-4570',
        location: 'Charlotte, NC',
        amount: '$185,000',
        date: 'June 3, 2025',
        department: 'Legal',
        manager: 'Robert Kim',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=31'
      }, {
        id: '1032',
        name: 'Felix Rodriguez',
        role: 'AI Engineer',
        email: 'felix.rodriguez@company.com',
        phone: '+1 (555) 234-5681',
        location: 'San Francisco, CA',
        amount: '$295,000',
        date: 'June 5, 2025',
        department: 'Engineering',
        manager: 'Sarah Chen',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=32'
      }, {
        id: '1033',
        name: 'Gina Wilson',
        role: 'Account Manager',
        email: 'gina.wilson@company.com',
        phone: '+1 (555) 345-6792',
        location: 'Denver, CO',
        amount: '$175,000',
        date: 'June 8, 2025',
        department: 'Sales',
        manager: 'Robert Kim',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=33'
      }, {
        id: '1034',
        name: 'Hugo Anderson',
        role: 'Release Manager',
        email: 'hugo.anderson@company.com',
        phone: '+1 (555) 456-7893',
        location: 'Seattle, WA',
        amount: '$195,000',
        date: 'June 10, 2025',
        department: 'Operations',
        manager: 'Sarah Chen',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=34'
      }, {
        id: '1035',
        name: 'Ivy Thompson',
        role: 'UX Researcher',
        email: 'ivy.thompson@company.com',
        phone: '+1 (555) 567-8904',
        location: 'Austin, TX',
        amount: '$185,000',
        date: 'June 12, 2025',
        department: 'Design',
        manager: 'Jennifer Lee',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=35'
      }];
      const filteredData = emailSearch ? sampleData.filter(row => row.email.toLowerCase().includes(emailSearch.toLowerCase())) : sampleData;

      // Sort the filtered data
      const sortedData = [...filteredData].sort((a, b) => {
        if (sortDirection === 'none') return 0;
        let aValue: any = a[sortColumn as keyof typeof a];
        let bValue: any = b[sortColumn as keyof typeof b];

        // Handle amount sorting (remove $ and commas)
        if (sortColumn === 'amount') {
          aValue = parseFloat(String(aValue).replace(/[$,]/g, ''));
          bValue = parseFloat(String(bValue).replace(/[$,]/g, ''));
        }

        // Handle date sorting
        if (sortColumn === 'date') {
          aValue = new Date(String(aValue)).getTime();
          bValue = new Date(String(bValue)).getTime();
        }
        if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
        return 0;
      });
      const totalItems = sortedData.length;
      const totalPages = Math.ceil(totalItems / itemsPerPage);

      // Paginate the data
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const paginatedData = sortedData.slice(startIndex, endIndex);

      // Get visible columns sorted by order
      const visibleColumns = columnConfigs.filter(col => col.visible).sort((a, b) => a.order - b.order);

      // Dynamically calculate offsets from actual rendered column widths using ResizeObserver
      useEffect(() => {
        const scrollContainer = document.querySelector('[data-scroll-container]');
        if (!scrollContainer) return;
        const updateOffsets = () => {
          const headers = scrollContainer.querySelectorAll('thead th');
          const newOffsets: {
            [key: string]: number;
          } = {};
          let cumulativeOffset = 0;
          visibleColumns.forEach((col, index) => {
            if (col.locked && headers[index]) {
              newOffsets[col.id] = cumulativeOffset;
              const actualWidth = (headers[index] as HTMLElement).offsetWidth;
              cumulativeOffset += actualWidth;
            }
          });
          setColumnOffsets(newOffsets);
        };

        // Initial calculation
        updateOffsets();

        // Observe all header elements for size changes
        const resizeObserver = new ResizeObserver(() => {
          updateOffsets();
        });
        const headers = scrollContainer.querySelectorAll('thead th');
        headers.forEach(header => resizeObserver.observe(header));
        return () => {
          resizeObserver.disconnect();
        };
      }, [visibleColumns.map(c => c.id + c.locked).join(',')]);

      // Helper to render cell based on column ID
      const renderCell = (columnId: string, row: any, isSelected: boolean, isFirstColumn: boolean, locked: boolean, leftOffset: number) => {
        const commonProps = {
          selected: isSelected,
          isFirstColumn,
          locked,
          leftOffset
        };
        switch (columnId) {
          case 'checkbox':
            return null;
          // Handled separately
          case 'id':
            return <TableCell key="id" showNumber number={row.id} {...commonProps} />;
          case 'user':
            return <TableCell key="user" showAvatar avatarSrc={row.avatar} showUserInfo userName={row.name} userRole={row.role} {...commonProps} />;
          case 'email':
            return <TableCell key="email" showText text={row.email} {...commonProps} />;
          case 'phone':
            return <TableCell key="phone" showText text={row.phone} {...commonProps} />;
          case 'location':
            return <TableCell key="location" showText text={row.location} {...commonProps} />;
          case 'amount':
            return <TableCell key="amount" showAmount amount={row.amount} align="right" {...commonProps} />;
          case 'date':
            return <TableCell key="date" showDate date={row.date} {...commonProps} />;
          case 'department':
            return <TableCell key="department" showText text={row.department} {...commonProps} />;
          case 'manager':
            return <TableCell key="manager" showText text={row.manager} {...commonProps} />;
          case 'status':
            return <TableCell key="status" showBadge badgeLabel={row.status} badgeType={row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'error'} {...commonProps} />;
          case 'actions':
            return <TableCell key="actions" showEditAction showDeleteAction {...commonProps} />;
          default:
            return null;
        }
      };
      return <TableContainer>
          {/* Table Heading Section */}
          <TableHeading>
            <TableTitle>Tabular View</TableTitle>
            <TableActions>
              <Dropdown defaultValue="all">
                <option value="all">All Departments</option>
                <option value="engineering">Engineering</option>
                <option value="product">Product</option>
                <option value="design">Design</option>
              </Dropdown>
              <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="Download" size="medium" />} aria-label="Download">
                Download
              </Button>
              <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="FilterAlt" size="medium" />} aria-label="Filter">
                Filter
              </Button>
              <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="Settings" size="medium" />} onClick={() => setSettingsOpen(true)} aria-label="Settings">
                Settings
              </Button>
            </TableActions>
          </TableHeading>

          {/* Table with Scroll */}
          <ScrollContainer data-scroll-container>
            <StyledTable>
              <StickyThead>
                <StyledTr>
                  {visibleColumns.map((col, index) => {
                  const isFirst = index === 0;
                  const isLast = index === visibleColumns.length - 1;
                  const side = isFirst ? 'left' : isLast ? 'right' : 'middle';
                  const isLocked = col.locked || false;
                  const offset = columnOffsets[col.id] || 0;

                  // Render checkbox column
                  if (col.id === 'checkbox') {
                    return <TableHeader key={col.id} label="" side={side} showCheckbox checked={allChecked} onCheckChange={handleSelectAll} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render ID column
                  if (col.id === 'id') {
                    return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "resizeable"} side={side} resizable={!isLocked} onLockToggle={() => handleColumnLock('id', !isLocked)} onResize={!isLocked ? setIdWidth : undefined} width={!isLocked ? idWidth : undefined} sortable sortDirection={sortColumn === 'id' ? sortDirection : 'none'} onSort={() => handleSort('id')} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render User column
                  if (col.id === 'user') {
                    return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "resizeable"} side={side} resizable onLockToggle={() => handleColumnLock('user', !isLocked)} onResize={setNameWidth} width={nameWidth} sortable sortDirection={sortColumn === 'name' ? sortDirection : 'none'} onSort={() => handleSort('name')} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render Email column with search
                  if (col.id === 'email') {
                    return <TableHeader key={col.id} label={col.label} variant="search" side={side} searchValue={emailSearch} searchPlaceholder="Search emails..." onSearchChange={setEmailSearch} onLockToggle={isLocked ? undefined : () => handleColumnLock('email', !isLocked)} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render Amount column
                  if (col.id === 'amount') {
                    return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "resizeable"} side={side} resizable onLockToggle={() => handleColumnLock('amount', !isLocked)} onResize={setAmountWidth} width={amountWidth} align="right" sortable sortDirection={sortColumn === 'amount' ? sortDirection : 'none'} onSort={() => handleSort('amount')} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render Status column
                  if (col.id === 'status') {
                    return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "resizeable"} side={side} resizable onLockToggle={() => handleColumnLock('status', !isLocked)} onResize={setStatusWidth} width={statusWidth} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render Date column (sortable)
                  if (col.id === 'date') {
                    return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "default"} side={side} sortable sortDirection={sortColumn === 'date' ? sortDirection : 'none'} onSort={() => handleSort('date')} onLockToggle={() => handleColumnLock('date', !isLocked)} locked={isLocked} leftOffset={offset} />;
                  }

                  // Render other columns (phone, location, department, manager, actions)
                  return <TableHeader key={col.id} label={col.label} variant={isLocked ? "resizeable-locked" : "default"} side={side} onLockToggle={() => handleColumnLock(col.id, !isLocked)} locked={isLocked} leftOffset={offset} />;
                })}
                </StyledTr>
              </StickyThead>
              <StyledTbody>
                {paginatedData.map((row, index) => {
                const actualIndex = startIndex + index;
                const isSelected = selectedRows.includes(actualIndex);
                return <StyledTr key={row.id}>
                      {visibleColumns.map((col, colIndex) => {
                    const isFirstColumn = colIndex === 0;
                    const isLocked = col.locked || false;
                    const offset = columnOffsets[col.id] || 0;
                    if (col.id === 'checkbox') {
                      return <TableCell key="checkbox" showCheckbox checked={isSelected} onCheckChange={checked => handleRowSelect(actualIndex, checked)} selected={isSelected} isFirstColumn={isFirstColumn} locked={isLocked} leftOffset={offset} />;
                    }
                    return renderCell(col.id, row, isSelected, isFirstColumn, isLocked, offset);
                  })}
                    </StyledTr>;
              })}
              </StyledTbody>
            </StyledTable>
          </ScrollContainer>

          {/* Pagination */}
          <Pagination variant="filled" currentPage={currentPage} totalPages={totalPages} totalItems={totalItems} itemsPerPage={itemsPerPage} onPageChange={setCurrentPage} onItemsPerPageChange={setItemsPerPage} />

          {/* Table Settings Modal */}
          <TableSettings isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} columns={columnConfigs.filter(col => col.id !== 'checkbox')} lockWarning={lockWarning} onColumnsChange={newConfigs => {
          // Merge checkbox column back
          const checkboxCol = columnConfigs.find(c => c.id === 'checkbox');
          const mergedConfigs = checkboxCol ? [checkboxCol, ...newConfigs] : newConfigs;

          // Check if any lock state changed - if so, reorder locked columns to the left
          const hasLockChanges = newConfigs.some(newCol => {
            const oldCol = columnConfigs.find(c => c.id === newCol.id);
            return oldCol && oldCol.locked !== newCol.locked;
          });
          if (hasLockChanges) {
            // Sort to move locked columns to the left (after checkbox)
            const sortedConfigs = mergedConfigs.sort((a, b) => {
              // Checkbox always first
              if (a.id === 'checkbox') return -1;
              if (b.id === 'checkbox') return 1;

              // Then locked columns
              if (a.locked && !b.locked) return -1;
              if (!a.locked && b.locked) return 1;

              // Maintain original order for same lock state
              return a.order - b.order;
            });

            // Update order property
            const reorderedConfigs = sortedConfigs.map((col, index) => ({
              ...col,
              order: index
            }));
            setColumnConfigs(reorderedConfigs);
          } else {
            // Otherwise just update configs (for visibility/order changes)
            setColumnConfigs(mergedConfigs);
          }
        }} />
        </TableContainer>;
    };
    return <CompleteTable />;
  }
}`,...(ve=(fe=B.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Se,ke,Ce;J.parameters={...J.parameters,docs:{...(Se=J.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledThead>
        <StyledTr>
          <TableHeader label="Name" sortable sortDirection="asc" />
          <TableHeader label="Email" sortable sortDirection="none" />
          <TableHeader label="Date" sortable sortDirection="desc" />
          <TableHeader label="Status" />
        </StyledTr>
      </StyledThead>
    </StyledTable>
}`,...(Ce=(ke=J.parameters)==null?void 0:ke.docs)==null?void 0:Ce.source}}};var xe,ye,Te;V.parameters={...V.parameters,docs:{...(xe=V.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showAvatar showUserInfo userName="John Doe" userRole="Senior Developer" />
        </StyledTr>
        <StyledTr>
          <TableCell showAvatar avatarSrc="https://i.pravatar.cc/32?img=5" showUserInfo userName="Jane Smith" userRole="Product Manager" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
}`,...(Te=(ye=V.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var we,Ae,De;U.parameters={...U.parameters,docs:{...(we=U.parameters)==null?void 0:we.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showNumber number="1234567890" />
          <TableCell showAmount amount="$123,654,000" />
          <TableCell showDate date="March 12, 2025" />
          <TableCell showText text="Regular text content" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
}`,...(De=(Ae=U.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Le,ze,je;X.parameters={...X.parameters,docs:{...(Le=X.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showBadge badgeLabel="Active" badgeType="success" badgeStyle="default" />
          <TableCell showBadge badgeLabel="Pending" badgeType="warning" badgeStyle="subdued" />
          <TableCell showBadge badgeLabel="Error" badgeType="error" badgeStyle="outlined" />
        </StyledTr>
        <StyledTr>
          <TableCell showChip chipLabel="Premium" chipType="success" />
          <TableCell showChip chipLabel="Trial" chipType="warning" />
          <TableCell showChip chipLabel="Free" chipType="neutral" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
}`,...(je=(ze=X.parameters)==null?void 0:ze.docs)==null?void 0:je.source}}};var Me,Pe,Re;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledTbody>
        <StyledTr>
          <TableCell showEditAction showDeleteAction />
        </StyledTr>
        <StyledTr>
          <TableCell showButton buttonLabel="View Details" />
        </StyledTr>
        <StyledTr>
          <TableCell showButton buttonLabel="Download" showEditAction />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
}`,...(Re=(Pe=K.parameters)==null?void 0:Pe.docs)==null?void 0:Re.source}}};var We,Ie,Ee;G.parameters={...G.parameters,docs:{...(We=G.parameters)==null?void 0:We.docs,source:{originalSource:`{
  render: () => <StyledTable>
      <StyledThead>
        <StyledTr>
          <TableHeader label="" showCheckbox checked={false} indeterminate={true} />
          <TableHeader label="Name" />
          <TableHeader label="Email" />
        </StyledTr>
      </StyledThead>
      <StyledTbody>
        <StyledTr>
          <TableCell showCheckbox checked={true} />
          <TableCell showText text="John Doe" />
          <TableCell showText text="john@example.com" />
        </StyledTr>
        <StyledTr>
          <TableCell showCheckbox checked={true} />
          <TableCell showText text="Jane Smith" />
          <TableCell showText text="jane@example.com" />
        </StyledTr>
        <StyledTr>
          <TableCell showCheckbox checked={false} />
          <TableCell showText text="Bob Johnson" />
          <TableCell showText text="bob@example.com" />
        </StyledTr>
      </StyledTbody>
    </StyledTable>
}`,...(Ee=(Ie=G.parameters)==null?void 0:Ie.docs)==null?void 0:Ee.source}}};var Oe,$e,He;q.parameters={...q.parameters,docs:{...(Oe=q.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => {
    const AllFeaturesTable = () => {
      const [idLocked, setIdLocked] = useState(true);
      const [statusLocked, setStatusLocked] = useState(false);
      const [idWidth, setIdWidth] = useState(100);
      const [nameWidth, setNameWidth] = useState(200);
      const [emailSearch, setEmailSearch] = useState('');
      const [amountWidth, setAmountWidth] = useState(150);
      const [departmentWidth, setDepartmentWidth] = useState(180);
      const [locationWidth, setLocationWidth] = useState(160);
      const [phoneWidth, setPhoneWidth] = useState(140);
      const [statusWidth, setStatusWidth] = useState(120);
      const [sortColumn, setSortColumn] = useState<string>('name');
      const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | 'none'>('asc');
      const [allChecked, setAllChecked] = useState(false);
      const [selectedRows, setSelectedRows] = useState<number[]>([]);
      const handleSort = (column: string) => {
        if (sortColumn === column) {
          setSortDirection(sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc');
        } else {
          setSortColumn(column);
          setSortDirection('asc');
        }
      };
      const handleSelectAll = (checked: boolean) => {
        setAllChecked(checked);
        setSelectedRows(checked ? [0, 1, 2, 3] : []);
      };
      const handleRowSelect = (index: number, checked: boolean) => {
        if (checked) {
          setSelectedRows([...selectedRows, index]);
        } else {
          setSelectedRows(selectedRows.filter(i => i !== index));
          setAllChecked(false);
        }
      };
      const sampleData = [{
        id: '1001',
        name: 'Alice Johnson',
        role: 'Senior Developer',
        email: 'alice.johnson@company.com',
        amount: '$245,000',
        date: 'March 15, 2025',
        department: 'Engineering',
        location: 'New York, NY',
        phone: '+1 (555) 123-4567',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=1'
      }, {
        id: '1002',
        name: 'Bob Smith',
        role: 'Product Manager',
        email: 'bob.smith@company.com',
        amount: '$189,500',
        date: 'March 18, 2025',
        department: 'Product',
        location: 'San Francisco, CA',
        phone: '+1 (555) 234-5678',
        status: 'Pending',
        avatar: 'https://i.pravatar.cc/32?img=2'
      }, {
        id: '1003',
        name: 'Carol Williams',
        role: 'UX Designer',
        email: 'carol.williams@company.com',
        amount: '$312,750',
        date: 'March 20, 2025',
        department: 'Design',
        location: 'Austin, TX',
        phone: '+1 (555) 345-6789',
        status: 'Active',
        avatar: 'https://i.pravatar.cc/32?img=3'
      }, {
        id: '1004',
        name: 'David Brown',
        role: 'DevOps Engineer',
        email: 'david.brown@company.com',
        amount: '$198,250',
        date: 'March 22, 2025',
        department: 'Operations',
        location: 'Seattle, WA',
        phone: '+1 (555) 456-7890',
        status: 'Inactive',
        avatar: 'https://i.pravatar.cc/32?img=4'
      }];
      const filteredData = emailSearch ? sampleData.filter(row => row.email.toLowerCase().includes(emailSearch.toLowerCase())) : sampleData;
      return <div>
          <div style={{
          marginBottom: '16px',
          padding: '12px',
          backgroundColor: '#f8f7fb',
          borderRadius: '8px'
        }}>
            <h4 style={{
            margin: '0 0 8px 0',
            fontSize: '14px',
            fontWeight: 600
          }}>Interactive Features Demo</h4>
            <ul style={{
            margin: 0,
            paddingLeft: '20px',
            fontSize: '12px',
            lineHeight: '1.6'
          }}>
              <li><strong>ID Column:</strong> Locked (frozen) + Resizable - Stays visible when scrolling horizontally</li>
              <li><strong>Horizontal Scroll:</strong> Table has many columns - scroll right to see more</li>
              <li><strong>Name Column:</strong> Resizable + Sortable - Drag to resize, click to sort</li>
              <li><strong>Email Column:</strong> Search header - Type to filter rows</li>
              <li><strong>Status Column:</strong> Can be locked/unlocked - Toggle lock icon to freeze</li>
            </ul>
          </div>
          <div style={{
          overflowX: 'auto',
          border: '1px solid #e6e6e6',
          borderRadius: '8px'
        }}>
            <StyledTable>
            <StyledThead>
              <StyledTr>
                <TableHeader label="" side="left" showCheckbox checked={allChecked} onCheckChange={handleSelectAll} />
                <TableHeader label="ID" variant="resizeable-locked" side="left" locked={idLocked} resizable onLockToggle={() => setIdLocked(!idLocked)} onResize={setIdWidth} width={idWidth} sortable sortDirection={sortColumn === 'id' ? sortDirection : 'none'} onSort={() => handleSort('id')} />
                <TableHeader label="User" variant="resizeable" resizable onResize={setNameWidth} width={nameWidth} sortable sortDirection={sortColumn === 'name' ? sortDirection : 'none'} onSort={() => handleSort('name')} />
                <TableHeader label="Email" variant="search" searchValue={emailSearch} searchPlaceholder="Search emails..." onSearchChange={setEmailSearch} />
                <TableHeader label="Amount" variant="resizeable" resizable onResize={setAmountWidth} width={amountWidth} align="right" sortable sortDirection={sortColumn === 'amount' ? sortDirection : 'none'} onSort={() => handleSort('amount')} />
                <TableHeader label="Date" sortable sortDirection={sortColumn === 'date' ? sortDirection : 'none'} onSort={() => handleSort('date')} />
                <TableHeader label="Department" variant="resizeable" resizable onResize={setDepartmentWidth} width={departmentWidth} sortable sortDirection={sortColumn === 'department' ? sortDirection : 'none'} onSort={() => handleSort('department')} />
                <TableHeader label="Location" variant="resizeable" resizable onResize={setLocationWidth} width={locationWidth} />
                <TableHeader label="Phone" variant="resizeable" resizable onResize={setPhoneWidth} width={phoneWidth} />
                <TableHeader label="Status" variant="resizeable-locked" locked={statusLocked} resizable onLockToggle={() => setStatusLocked(!statusLocked)} onResize={setStatusWidth} width={statusWidth} />
                <TableHeader label="Actions" side="right" />
              </StyledTr>
            </StyledThead>
            <StyledTbody>
              {filteredData.map((row, index) => <StyledTr key={row.id}>
                  <TableCell showCheckbox checked={selectedRows.includes(index)} onCheckChange={checked => handleRowSelect(index, checked)} />
                  <TableCell showNumber number={row.id} />
                  <TableCell showAvatar avatarSrc={row.avatar} showUserInfo userName={row.name} userRole={row.role} />
                  <TableCell showText text={row.email} />
                  <TableCell showAmount amount={row.amount} align="right" />
                  <TableCell showDate date={row.date} />
                  <TableCell showText text={row.department} />
                  <TableCell showText text={row.location} />
                  <TableCell showText text={row.phone} />
                  <TableCell showBadge badgeLabel={row.status} badgeType={row.status === 'Active' ? 'success' : row.status === 'Pending' ? 'warning' : 'error'} />
                  <TableCell showEditAction showDeleteAction />
                </StyledTr>)}
            </StyledTbody>
          </StyledTable>
          </div>
          {filteredData.length === 0 && <div style={{
          padding: '24px',
          textAlign: 'center',
          color: '#6C6C6C'
        }}>
              No results found for "{emailSearch}"
            </div>}
        </div>;
    };
    return <AllFeaturesTable />;
  },
  parameters: {
    docs: {
      description: {
        story: \`
### Complete Table with All Header Features

This example demonstrates all TableHeader variants and features:

**Header Variants:**
- **Default** - Standard header with checkbox and sort
- **Locked** - Column freeze/pin functionality
- **Resizeable** - Drag to adjust column width
- **Resizeable + Locked** - Both features combined
- **Search** - Inline search/filter input

**Interactive Features:**
- Checkbox selection (header + rows)
- Lock/unlock columns (ID, Status)
- Resize columns (drag handles)
- Search filtering (Email column)
- Sortable columns (click headers)
- Border radius on edge columns

**Try it:**
1. Click lock icons to freeze/unfreeze columns
2. Drag resize handles to adjust widths
3. Type in the Email search field to filter
4. Click sortable headers to change sort order
5. Select rows with checkboxes
        \`
      }
    }
  }
}`,...(He=($e=q.parameters)==null?void 0:$e.docs)==null?void 0:He.source}}};const ua=["CompleteExample","SortableHeaders","CellWithUserInfo","CellWithDataFields","CellWithStatusIndicators","CellWithActions","SelectableRows","AllHeaderFeatures"];export{q as AllHeaderFeatures,K as CellWithActions,U as CellWithDataFields,X as CellWithStatusIndicators,V as CellWithUserInfo,B as CompleteExample,G as SelectableRows,J as SortableHeaders,ua as __namedExportsOrder,ma as default};
