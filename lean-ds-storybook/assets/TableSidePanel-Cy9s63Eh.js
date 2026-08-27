import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as f,R as _}from"./index-B0WjJBI_.js";import{g as u}from"./styled-components.browser.esm-CuwBLqEg.js";import{C as T}from"./Close-Bujf63ZX.js";import{c as me}from"./createSvgIcon-B7ekv6yR.js";import{D as Y,C as ge,L as he,b as xe}from"./Icon-D9wW9sG4.js";import{E as be}from"./ExpandMore-DhGl5KfG.js";import{I as G}from"./InlineMessage-C8LBd6CI.js";import{S as ye}from"./Select-Bnepq8z-.js";import{B as Ce}from"./Button-4FxjpG2D.js";import{C as ve}from"./Chip-CHEHkNu4.js";import{C as ke}from"./Checkbox-B5k7d77F.js";const je=me(t.jsx("path",{d:"M10 18h4v-2h-4zM3 6v2h18V6zm3 7h12v-2H6z"})),$e=u.div`
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  flex-shrink: 0;
`,z=u.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  padding: ${({theme:e})=>e.spacing[7]} 0;
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
  }
`,E=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  position: relative;
`,L=u.div`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
`,we=u.div`
  position: absolute;
  top: 0;
  right: 30px;
  bottom: 0;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  pointer-events: none;
`,Se=u.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[200]};
  box-shadow: -4px 0 12px rgba(0, 0, 0, 0.15);
  pointer-events: auto;
  
  /* Slide-in animation */
  animation: slideIn 0.3s ease-out;
  
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`,Ie=u.div`
  display: flex;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[7]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  background-color: ${({theme:e})=>e.colors.palette.neutral[200]};

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-4px); }
    20%, 40%, 60%, 80% { transform: translateX(4px); }
  }

  ${({$shake:e})=>e&&`
    animation: shake 0.5s ease-in-out;
  `}
`,P=u.button`
  padding: ${({theme:e})=>e.spacing[2]} ${({theme:e})=>e.spacing[4]};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  
  ${({$variant:e,theme:p})=>e==="primary"?`
        background-color: ${p.colors.palette.primary[600]};
        color: white;
        border-color: ${p.colors.palette.primary[600]};
        &:hover {
          background-color: ${p.colors.palette.primary[700]};
        }
      `:e==="danger"?`
        background-color: transparent;
        color: ${p.colors.palette.error[600]};
        border-color: ${p.colors.palette.error[600]};
        &:hover {
          background-color: ${p.colors.palette.error[50]};
        }
      `:`
      background-color: transparent;
      color: ${p.colors.palette.neutral[700]};
      &:hover {
        background-color: ${p.colors.palette.neutral[100]};
      }
    `}
`,Te=u.div`
  flex: 1;
  padding: ${({theme:e})=>e.spacing[7]};
  overflow-y: auto;
  background-color: ${({theme:e})=>e.colors.palette.neutral[200]};
`,ze=u.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[2]};
`,K=u.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  padding: ${({theme:e})=>e.spacing[3]};
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  opacity: ${({$isDragging:e})=>e?.5:1};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
  }
`,Ee=u(K)`
  margin-left: ${({theme:e})=>e.spacing[7]};
  background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
`,J=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[700]};
  flex-shrink: 0;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.neutral[900]};
  }
`,Le=u.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
`,Ae=u.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({$isLocked:e,theme:p})=>e?p.colors.palette.neutral[400]:p.colors.palette.neutral[600]};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  flex-shrink: 0;
`,De=u.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  flex-shrink: 0;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.neutral[900]};
  }
`,Pe=u.span`
  flex: 1;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: ${({theme:e})=>e.lineHeights[16]};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ve=({columns:e,onColumnsChange:p,onFilterToggle:qe,showFilters:Re=!1,lockWarning:V=!1,className:Q,tableData:q=[],columnFilters:x=[],onFiltersChange:b,customTabs:R=[],onClose:A})=>{const[c,C]=f.useState(null),[g,y]=f.useState(e),[h,k]=f.useState(null),[Z,w]=f.useState(!1),[ee,B]=f.useState(new Set),[Be,O]=f.useState(null),[j,S]=f.useState({}),[W,M]=f.useState(!1),[H,F]=f.useState(!1),D=_.useRef(null);f.useEffect(()=>{y(e)},[e]),f.useEffect(()=>{if(V){w(!0);const n=setTimeout(()=>w(!1),3e3);return()=>clearTimeout(n)}},[V]),f.useEffect(()=>{const n=s=>{D.current&&!D.current.contains(s.target)&&c&&(c==="filters"&&W?(F(!0),setTimeout(()=>F(!1),3e3)):(C(null),A&&A()))};if(c)return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}},[c,W,A]),f.useEffect(()=>{if(c==="filters"){const n=Object.keys(j).length>0;M(n)}else M(!1)},[j,c]);const ne=()=>{C(c==="columns"?null:"columns")},te=()=>{C(c==="filters"?null:"filters")},U=()=>{b&&b([]),S({})},se=()=>{const n=e.map((s,r)=>s.subColumns?{...s,visible:!0,locked:!1,order:r,subColumns:s.subColumns.map((o,a)=>({...o,visible:!0,locked:!1}))}:{...s,visible:!0,locked:!1,order:r});y(n),B(new Set),b&&b([])},re=()=>{if(p(g),b&&Object.keys(j).length>0){const n=new Map(x.map(r=>[r.columnId,r.value]));Object.entries(j).forEach(([r,o])=>{o?n.set(r,o):n.delete(r)});const s=Array.from(n.entries()).map(([r,o])=>({columnId:r,value:o}));b(s)}S({}),C(null)},oe=()=>{y(e),S({}),C(null)},le=n=>{B(s=>{const r=new Set(s);return r.has(n)?r.delete(n):r.add(n),r})},ie=n=>{y(s=>s.map(r=>r.id===n?r.subColumns?{...r,visible:!r.visible,subColumns:r.subColumns.map(o=>({...o,visible:!r.visible}))}:{...r,visible:!r.visible}:r.subColumns?{...r,subColumns:r.subColumns.map(o=>o.id===n?{...o,visible:!o.visible}:o)}:r))},ae=n=>{const s=g.find(l=>l.id===n);if(!s)return;const r=g.filter(l=>l.locked&&l.id!=="checkbox").length;if(!s.locked&&r>=3){w(!0),setTimeout(()=>w(!1),3e3);return}const d=g.map(l=>l.id===n?l.subColumns?{...l,locked:!l.locked,subColumns:l.subColumns.map(i=>({...i,locked:!l.locked}))}:{...l,locked:!l.locked}:l).sort((l,i)=>l.id==="checkbox"?-1:i.id==="checkbox"?1:l.locked&&!i.locked?-1:!l.locked&&i.locked?1:l.order-i.order).map((l,i)=>({...l,order:i}));y(d)},ce=(n,s)=>{const r=g.filter(o=>o.id!=="checkbox")[n];r&&r.locked||k(n)},de=(n,s,r)=>{var I,v;if(n.preventDefault(),h===null||h===s)return;const o=g.filter($=>$.id!=="checkbox");if((I=o[s])!=null&&I.locked||(v=o[h])!=null&&v.locked)return;const a=g.find($=>$.id==="checkbox"),d=[...o],l=d[h];d.splice(h,1),d.splice(s,0,l);const i=d.map(($,N)=>({...$,order:a?N+1:N})),m=a?[{...a,order:0},...i]:i;y(m),k(s)},ue=(n,s)=>{k(s)},pe=(n,s,r)=>{n.preventDefault(),!(h===null||h===r)&&(y(o=>o.map(a=>{if(a.id===s&&a.subColumns){const d=[...a.subColumns],l=d[h];return d.splice(h,1),d.splice(r,0,l),{...a,subColumns:d}}return a})),k(r))},fe=()=>{k(null)},X=(n,s,r)=>{const o=n.subColumns&&n.subColumns.length>0,a=ee.has(n.id),d=!!r,l=d?Ee:K;return t.jsxs(_.Fragment,{children:[t.jsxs(l,{draggable:!n.locked&&!o,onDragStart:()=>{d&&r?ue(r,s):o||ce(s)},onDragOver:i=>{d&&r?pe(i,r,s):o||de(i,s)},onDragEnd:fe,onMouseEnter:()=>O(n.id),onMouseLeave:()=>O(null),$isDragging:h===s,$isLocked:n.locked,children:[o?t.jsx(J,{onClick:()=>le(n.id),children:a?t.jsx(be,{}):t.jsx(ge,{})}):t.jsx(J,{style:{visibility:"hidden"}}),t.jsx(Le,{children:t.jsx(ke,{checked:n.visible!==!1,onChange:()=>ie(n.id)})}),t.jsx(Ae,{$isLocked:n.locked||o,children:t.jsx(Y,{style:{fontSize:"16px"}})}),!d&&t.jsx(De,{onClick:()=>ae(n.id),children:n.locked?t.jsx(he,{style:{fontSize:"16px"}}):t.jsx(xe,{style:{fontSize:"16px"}})}),t.jsx(Pe,{children:n.label})]}),o&&a&&n.subColumns.map((i,m)=>X(i,m,n.id))]},n.id)};return t.jsxs(t.Fragment,{children:[t.jsxs($e,{className:Q,children:[t.jsxs(z,{onClick:ne,$active:c==="columns",children:[t.jsx(E,{children:c==="columns"?t.jsx(T,{style:{fontSize:"16px"}}):t.jsx(Y,{style:{fontSize:"16px"}})}),t.jsx(L,{children:"Columns"})]}),t.jsxs(z,{onClick:te,$active:c==="filters",children:[t.jsxs(E,{children:[c==="filters"?t.jsx(T,{style:{fontSize:"16px"}}):t.jsx(je,{style:{fontSize:"16px"}}),x.length>0&&c!=="filters"&&t.jsx("span",{style:{position:"absolute",top:"-4px",right:"-4px",background:"#5e35b1",color:"white",borderRadius:"50%",width:"16px",height:"16px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"10px",fontWeight:600},children:x.length})]}),t.jsx(L,{children:"Filters"})]}),x.length>0&&t.jsxs(z,{onClick:U,style:{marginTop:"8px",opacity:.8,fontSize:"12px"},children:[t.jsx(E,{children:t.jsx(T,{style:{fontSize:"14px"}})}),t.jsx(L,{style:{fontSize:"11px"},children:"Clear All"})]}),R.map(n=>t.jsxs(z,{onClick:()=>{n.onClick?n.onClick():n.content&&C(c===n.id?null:n.id)},$active:c===n.id,children:[t.jsx(E,{children:n.icon}),t.jsx(L,{children:n.label})]},n.id))]}),c&&t.jsx(we,{children:t.jsxs(Se,{ref:D,children:[t.jsxs(Ie,{$shake:H,children:[t.jsx(P,{onClick:se,$variant:"danger",children:"Reset"}),t.jsx(P,{onClick:oe,$variant:"secondary",children:"Cancel"}),t.jsx(P,{onClick:re,$variant:"primary",children:"Apply"})]}),t.jsxs(Te,{children:[Z&&t.jsx("div",{style:{marginBottom:"16px"},children:t.jsx(G,{type:"warning",style:"accentBorder",text:"Maximum columns reached",descriptionText:"You can only freeze any 3 columns at a time.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),H&&c==="filters"&&t.jsx("div",{style:{marginBottom:"16px"},children:t.jsx(G,{type:"warning",style:"accentBorder",text:"Unsaved filter changes",descriptionText:"Please apply, cancel, or reset filters before closing.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),c==="columns"&&t.jsx(ze,{children:g.filter(n=>n.id!=="checkbox").map((n,s)=>X(n,s))}),c==="filters"&&t.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:q.length===0?t.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666",fontStyle:"italic"},children:"No data available for filtering"}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("p",{style:{margin:0,fontSize:"14px",color:"#666",fontStyle:"italic"},children:"Select values to filter table rows"}),x.length>0&&b&&t.jsx(Ce,{variant:"tertiary",size:"small",onClick:U,children:"Clear All"})]}),x.length>0&&b&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",padding:"12px",background:"#f9fafb",borderRadius:"4px",border:"1px solid #e5e7eb"},children:x.map(n=>{const s=g.find(o=>o.id===n.columnId?!0:o.subColumns?o.subColumns.some(a=>a.id===n.columnId):!1);let r=n.columnId;if(s){if(s.id===n.columnId)r=s.label;else if(s.subColumns){const o=s.subColumns.find(a=>a.id===n.columnId);o&&(r=o.label)}}return t.jsx(ve,{label:`${r}: ${n.value}`,size:"small",variant:"filled",type:"default",trailingIcon:t.jsx(T,{style:{fontSize:"14px"}}),onTrailingIconClick:()=>{const o=x.filter(a=>a.columnId!==n.columnId);b(o)}},n.columnId)})})]}),(()=>{const n=[];return g.forEach(s=>{s.subColumns&&s.subColumns.length>0?n.push(...s.subColumns):n.push(s)}),n.filter(s=>s.id!=="checkbox"&&s.visible!==!1).map(s=>{const r=new Set;q.forEach(i=>{const m=i[s.id];m!=null&&m!==""&&r.add(String(m))});const o=[{value:"",label:"All"},...Array.from(r).sort().map(i=>({value:i,label:i}))],a=j[s.id],d=x.find(i=>i.columnId===s.id),l=a!==void 0?a:(d==null?void 0:d.value)||"";return t.jsx(ye,{label:s.label,placeholder:`Filter by ${s.label}`,options:o,value:l,onChange:i=>{const m=Array.isArray(i)?i[0]:i;S(I=>{const v={...I};return m?v[s.id]=m:delete v[s.id],v})},size:"small",searchable:!0,showSelectionIndicator:!1},s.id)})})()]})}),R.map(n=>c===n.id&&n.content?t.jsx("div",{children:n.content},n.id):null)]})]})})]})};Ve.__docgenInfo={description:"",methods:[],displayName:"TableSidePanel",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:""},onColumnsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columns: ColumnConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},name:"columns"}],return:{name:"void"}}},description:""},onFilterToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showFilters:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},lockWarning:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},tableData:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"",defaultValue:{value:"[]",computed:!1}},columnFilters:{required:!1,tsType:{name:"Array",elements:[{name:"ColumnFilter"}],raw:"ColumnFilter[]"},description:"",defaultValue:{value:"[]",computed:!1}},onFiltersChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(filters: ColumnFilter[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnFilter"}],raw:"ColumnFilter[]"},name:"filters"}],return:{name:"void"}}},description:""},customTabs:{required:!1,tsType:{name:"Array",elements:[{name:"CustomTabConfig"}],raw:"CustomTabConfig[]"},description:"",defaultValue:{value:"[]",computed:!1}},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};export{Ve as T};
