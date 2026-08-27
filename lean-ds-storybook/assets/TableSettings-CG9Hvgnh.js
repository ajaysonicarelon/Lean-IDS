import{j as n}from"./jsx-runtime-DSvmvvsx.js";import{r as b,R as P}from"./index-B0WjJBI_.js";import{g as l}from"./styled-components.browser.esm-CuwBLqEg.js";import{E as _}from"./ExpandMore-DhGl5KfG.js";import{I as v,C as V}from"./Icon-D9wW9sG4.js";import{I as Y}from"./InlineMessage-C8LBd6CI.js";import{B as $}from"./Button-4FxjpG2D.js";import{C as G}from"./Checkbox-B5k7d77F.js";const J=l.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({$isOpen:e})=>e?"flex":"none"};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,K=l.div`
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  width: 400px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Q=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[7]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,U=l.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  margin: 0;
`;l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s;
  
  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
    color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  }
`;const X=l.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[7]};
`,Z=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,T=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e,$isDragging:i,$isLocked:m})=>m?e.colors.palette.primary[50]:i?e.colors.palette.neutral[100]:e.colors.palette.neutral[50]};
  border: 1px solid ${({theme:e,$isLocked:i})=>i?e.colors.palette.primary[200]:e.colors.palette.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"move"};
  transition: all 0.2s;
  opacity: ${({$isLocked:e})=>e?.7:1};
  
  &:hover {
    background-color: ${({theme:e,$isLocked:i})=>i?e.colors.palette.primary[50]:e.colors.palette.neutral[100]};
    border-color: ${({theme:e,$isLocked:i})=>i?e.colors.palette.primary[200]:e.colors.palette.neutral[400]};
  }
`,ee=l.div`
  display: flex;
  align-items: center;
  color: ${({theme:e,$isLocked:i})=>i?e.colors.palette.neutral[400]:e.colors.palette.neutral[600]};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  opacity: ${({$isLocked:e})=>e?.5:1};
  
  &:active {
    cursor: ${({$isLocked:e})=>e?"not-allowed":"grabbing"};
  }
`,te=l.span`
  flex: 1;
  font-family: ${({theme:e})=>e.typography.paragraph.medium.fontFamily};
  font-size: ${({theme:e})=>e.typography.paragraph.medium.fontSize};
  font-weight: ${({theme:e})=>e.typography.paragraph.medium.fontWeight};
  line-height: ${({theme:e})=>e.typography.paragraph.medium.lineHeight};
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
`,re=l(T)`
  margin-left: ${({theme:e})=>e.spacing[10]};
  background-color: ${({theme:e,$isDragging:i,$isLocked:m})=>m?e.colors.palette.primary[50]:e.colors.palette.neutral[100]};
`,S=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  transition: color 0.2s;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  }

  svg {
    width: 20px;
    height: 20px;
  }
`,oe=l.div`
  display: flex;
  align-items: center;
`,ne=l.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  transition: all 0.2s;

  &:hover {
    background-color: ${({theme:e})=>e.colors.palette.neutral[100]};
    color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`,se=l.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[7]};
  border-top: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,ae=({isOpen:e,onClose:i,columns:m,onColumnsChange:D,lockWarning:j,className:E})=>{const[p,h]=b.useState(m),[u,C]=b.useState(null),[I,y]=b.useState(!1),[L,z]=b.useState(new Set);b.useEffect(()=>{h(m)},[m]),b.useEffect(()=>{if(j){y(!0);const t=setTimeout(()=>y(!1),3e3);return()=>clearTimeout(t)}},[j]);const M=t=>{z(s=>{const r=new Set(s);return r.has(t)?r.delete(t):r.add(t),r})},O=t=>{h(s=>s.map(r=>r.id===t?r.subColumns?{...r,visible:!r.visible,subColumns:r.subColumns.map(a=>({...a,visible:!r.visible}))}:{...r,visible:!r.visible}:r.subColumns?{...r,subColumns:r.subColumns.map(a=>a.id===t?{...a,visible:!a.visible}:a)}:r))},R=t=>{const s=p.find(o=>o.id===t);if(!s)return;const r=p.filter(o=>o.locked&&o.id!=="checkbox").length;if(!s.locked&&r>=3){y(!0),setTimeout(()=>y(!1),3e3);return}const a=p.map(o=>o.id===t?o.subColumns?{...o,locked:!o.locked,subColumns:o.subColumns.map(g=>({...g,locked:!o.locked}))}:{...o,locked:!o.locked}:o),c=a.find(o=>o.id==="checkbox"),f=a.filter(o=>o.id!=="checkbox").sort((o,g)=>o.locked&&!g.locked?-1:!o.locked&&g.locked?1:o.order-g.order),x=c?[{...c,order:0},...f.map((o,g)=>({...o,order:g+1}))]:f.map((o,g)=>({...o,order:g}));h(x)},q=t=>{p[t].locked||C(t)},B=(t,s)=>{if(t.preventDefault(),u===null||u===s||p[s].locked||p[u].locked)return;const r=[...p],a=r[u];r.splice(u,1),r.splice(s,0,a);const c=r.map((d,f)=>({...d,order:f}));h(c),C(s)},W=()=>{C(null)},A=(t,s)=>{C(s)},F=(t,s,r)=>{t.preventDefault(),!(u===null||u===r)&&(h(a=>a.map(c=>{if(c.id===s&&c.subColumns){const d=[...c.subColumns],f=d[u];return d.splice(u,1),d.splice(r,0,f),{...c,subColumns:d}}return c})),C(r))},w=(t,s,r)=>{const a=t.subColumns&&t.subColumns.length>0,c=L.has(t.id),d=!!r,f=d?re:T;return n.jsxs(P.Fragment,{children:[n.jsxs(f,{draggable:!t.locked&&!a,onDragStart:()=>{d&&r?A(r,s):a||q(s)},onDragOver:x=>{d&&r?F(x,r,s):a||B(x,s)},onDragEnd:W,$isDragging:u===s,$isLocked:t.locked,children:[a?n.jsx(S,{onClick:()=>M(t.id),children:c?n.jsx(_,{}):n.jsx(V,{})}):n.jsx(S,{style:{visibility:"hidden"}}),n.jsx(oe,{children:n.jsx(G,{checked:t.visible!==!1,onChange:()=>O(t.id)})}),n.jsx(ee,{$isLocked:t.locked||a,children:n.jsx(v,{name:"DragIndicator",size:"small"})}),n.jsx(te,{children:t.label}),!d&&n.jsx(ne,{onClick:()=>R(t.id),children:n.jsx(v,{name:t.locked?"Lock":"LockOpen",size:"small"})})]}),a&&c&&t.subColumns.map((x,o)=>w(x,o,t.id))]},t.id)},H=()=>{D(p),i()},k=()=>{h(m),i()},N=t=>{t.target===t.currentTarget&&k()};return n.jsx(J,{$isOpen:e,onClick:N,children:n.jsxs(K,{className:E,children:[n.jsxs(Q,{children:[n.jsx(U,{children:"Table Settings"}),n.jsx($,{onClick:k,variant:"secondary",size:"small",showLabel:!1,leadingIcon:n.jsx(v,{name:"Close",size:"small"}),children:"Close"})]}),n.jsxs(X,{children:[I&&n.jsx("div",{style:{marginBottom:"16px"},children:n.jsx(Y,{type:"warning",style:"accentBorder",text:"Maximum columns reached",descriptionText:"You can only freeze any 3 columns at a time.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),n.jsx(Z,{children:p.filter(t=>t.id!=="checkbox").map((t,s)=>w(t,s))})]}),n.jsxs(se,{children:[n.jsx($,{onClick:k,variant:"secondary",children:"Cancel"}),n.jsx($,{variant:"primary",onClick:H,children:"Apply Changes"})]})]})})};ae.__docgenInfo={description:"",methods:[],displayName:"TableSettings",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the settings modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal is closed"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:"Array of column configurations"},onColumnsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columns: ColumnConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},name:"columns"}],return:{name:"void"}}},description:"Callback when columns are updated"},lockWarning:{required:!1,tsType:{name:"boolean"},description:"Whether to show lock warning"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};export{ae as T};
