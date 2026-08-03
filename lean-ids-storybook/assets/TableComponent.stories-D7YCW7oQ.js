import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as c,R as P}from"./index-B0WjJBI_.js";import{g as y}from"./styled-components.browser.esm-CuwBLqEg.js";import{a as ma}from"./ExpandMore-DhGl5KfG.js";import{a as ua,I as Ve}from"./Icon-D9wW9sG4.js";import{T as jt,a as Z,b as ee,c as He,d as pa,e as ha}from"./TableToolbar-53JTznBb.js";import{T as b}from"./Typography-DlcmwxwF.js";import{P as fa}from"./Pagination-BewWAyWY.js";import{T as ga}from"./TableSettings-CG9Hvgnh.js";import{C as ba}from"./Checkbox-B5k7d77F.js";import{B as W}from"./Button-4FxjpG2D.js";import{B as ya}from"./Badge-08EIA_9P.js";import"./_commonjsHelpers-CqkleIqs.js";import"./createSvgIcon-B7ekv6yR.js";import"./Search-3OWEky2d.js";import"./Close-Bujf63ZX.js";import"./Settings-DTDGO7Gi.js";import"./Home-l5wlLBdJ.js";import"./Chip-CHEHkNu4.js";import"./InlineMessage-C8LBd6CI.js";import"./WarningAmberOutlined-BaSDCFAD.js";const xa=y.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:r})=>r.spacing[8]};
  width: 100%;
`,Be=y.div`
  overflow-x: auto;
  overflow-y: hidden; /* Prevent rows from appearing outside during animation */
  width: min-content; /* Allow table to use natural width based on column widths */
  min-width: 100%; /* But don't shrink below container width */
  ${({$maxHeight:r})=>r&&`
    max-height: ${r};
    overflow-y: auto;
    display: block;
  `}
  border: ${({theme:r})=>r.borderWidth[1]} solid ${({theme:r})=>r.colors.palette.neutral[300]};
  border-radius: ${({theme:r})=>r.borderRadius.md};
  position: relative;
`,Ne=y.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
  
  ${({$hasMaxHeight:r})=>r&&`
    thead {
      position: sticky;
      top: 0;
      z-index: 10;
      background: #f9fafb;
    }
  `}
`,va=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:r})=>r.spacing[32]} ${({theme:r})=>r.spacing[24]};
  min-height: min(25rem, 50vh);
  background: ${({theme:r})=>r.colors.palette.neutral[50]};
`,wa=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[6]};
  max-width: min(18.75rem, 90%);
`,Ta=y.div`
  width: ${({theme:r})=>r.spacing[20]};
  height: ${({theme:r})=>r.spacing[20]};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`,Sa=y.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[4]};
  text-align: center;
`,ka=y.div`
  display: flex;
  align-items: center;
  gap: ${({theme:r})=>r.spacing[2]};
  padding: ${({theme:r})=>r.spacing[3]} ${({theme:r})=>r.spacing[4]};
  background: ${({theme:r})=>r.colors.palette.error[50]};
  border: ${({theme:r})=>r.borderWidth[1]} solid ${({theme:r})=>r.colors.semantic.border.error};
  border-radius: ${({theme:r})=>r.borderRadius.md};
  margin-bottom: ${({theme:r})=>r.spacing[4]};
`,Ca=y.tr``,Wa=y.tr`
  /* Keyframe animation disabled - using FLIP animation instead */
`,Da=y.td`
  padding: ${({theme:r})=>r.spacing[4]};
  border-bottom: ${({theme:r})=>r.borderWidth[1]} solid ${({theme:r})=>r.colors.palette.neutral[200]};
`,te=y.div`
  width: ${({width:r})=>r||"100%"};
  height: ${({height:r})=>r||"1rem"};
  background: ${({theme:r})=>r.colors.palette.neutral[200]};
  border-radius: ${({theme:r})=>r.borderRadius.sm};
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${({theme:r})=>r.colors.palette.neutral[100]} 50%,
      transparent 100%
    );
    animation: shimmer 2s infinite;
  }

  @keyframes shimmer {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,I=c.forwardRef(({as:r="div",data:m=[],columns:f=[],selectable:D=!1,paginated:E=!0,itemsPerPage:de=10,showSettings:H=!0,showActions:ce=!1,actions:B=[],onRowSelect:p,onRowAction:N,onRowClick:v,rowKey:g="id",emptyMessage:ve="No data available",emptyIcon:we="CloudOff",emptyTitle:G="No data available",emptyDescription:U="There are no items to display",emptyActionLabel:Te,onEmptyAction:Se,loading:me=!1,className:At,toolbar:ke,title:ue,description:Ea,showToolbar:zt=!0,showGlobalSearch:Mt=!1,showFilter:Pt=!0,showDownload:It=!0,onDownload:Rt,sortMode:j="client",onSort:Ce,sortColumn:Ot,sortDirection:qt,maxHeight:_,isInvalid:We=!1,errorMessage:De,scrollContainerClassName:Ft,scrollContainerStyle:Ee,emptyStateClassName:Lt,emptyStateStyle:je,style:Ae,...$t},Vt)=>{const[ze,Me]=c.useState(1),[R,Ht]=c.useState(de),[Bt,Nt]=c.useState(""),[Gt,Ut]=c.useState("none"),S=j==="server"?Ot||"":Bt,k=j==="server"?qt||"none":Gt,[_t,Y]=c.useState(!1),[J,Q]=c.useState([]),[pe,Pe]=c.useState(null),[he,fe]=c.useState(!1),[Ie,Yt]=c.useState({}),[Jt,Re]=c.useState(!1),[Qt,Oe]=c.useState(!1),[ge,Xt]=c.useState({}),[X,Kt]=c.useState(()=>{const a={};return f.forEach(e=>{if(e.width){let n=typeof e.width=="number"?e.width:parseInt(e.width,10);const s=e.minWidth?typeof e.minWidth=="number"?e.minWidth:parseInt(e.minWidth,10):0,i=e.maxWidth?typeof e.maxWidth=="number"?e.maxWidth:parseInt(e.maxWidth,10):1/0,l=Math.max(s,Math.min(i,n));a[e.id]=l}}),a}),[ja,Aa]=c.useState(""),O=c.useRef(new Map),C=c.useRef(null),be=c.useRef(!1),[A,ye]=c.useState(()=>{const a=[];return D&&a.push({id:"checkbox",label:"Select",visible:!0,locked:!0,order:0}),f.forEach((e,n)=>{a.push({id:e.id,label:e.label,visible:e.visible!==!1,locked:e.locked||!1,order:D?n+1:n})}),ce&&a.push({id:"actions",label:"Actions",visible:!0,locked:!1,order:a.length}),a}),Zt=(a,e)=>{const n=A.filter(o=>o.locked&&o.id!=="checkbox").length;if(e&&n>=3){Re(!0),setTimeout(()=>Re(!1),3e3);return}const l=A.map(o=>o.id===a?{...o,locked:e}:o).sort((o,d)=>o.id==="checkbox"?-1:d.id==="checkbox"?1:o.locked&&!d.locked?-1:!o.locked&&d.locked?1:o.order-d.order).map((o,d)=>({...o,order:d}));ye(l)},ea=a=>{j==="client"&&C.current&&Array.from(C.current.querySelectorAll("tr")).forEach((s,i)=>{var o;const l=(o=z[i])==null?void 0:o[g];if(l){const d=s.getBoundingClientRect().top;O.current.set(l,d)}});let e;S===a?e=k==="asc"?"desc":k==="desc"?"none":"asc":e="asc",j==="server"&&Ce?Ce(a,e):(Nt(a),Ut(e)),Oe(!0),setTimeout(()=>Oe(!1),50)},qe=a=>{Y(a);const e=a?m.map(n=>n[g]):[];Q(e),p==null||p(e)},ta=(a,e,n,s=!1)=>{if(e)if(s&&pe!==null){const i=Math.min(pe,n),l=Math.max(pe,n),o=z.slice(i,l+1).map(u=>u[g]),d=Array.from(new Set([...J,...o]));Q(d),Y(d.length===m.length),p==null||p(d)}else{const i=[...J,a];Q(i),Y(i.length===m.length),Pe(n),p==null||p(i)}else{const i=J.filter(l=>l!==a);Q(i),Y(!1),Pe(n),p==null||p(i)}},aa=(a,e)=>{Xt(n=>({...n,[a]:e})),Me(1)},na=(a,e)=>{Kt(n=>({...n,[a]:e}))},Fe=c.useMemo(()=>{let a=[...m];if(Object.entries(ge).forEach(([e,n])=>{if(n){const s=f.find(i=>i.id===e);s&&(a=a.filter(i=>{const l=s.accessor?typeof s.accessor=="function"?s.accessor(i):i[s.accessor]:i[e];return String(l).toLowerCase().includes(n.toLowerCase())}))}}),j==="client"&&S&&k!=="none"){const e=f.find(n=>n.id===S);e&&a.sort((n,s)=>{const i=e.accessor?typeof e.accessor=="function"?e.accessor(n):n[e.accessor]:n[S],l=e.accessor?typeof e.accessor=="function"?e.accessor(s):s[e.accessor]:s[S];return i<l?k==="asc"?-1:1:i>l?k==="asc"?1:-1:0})}return a},[m,f,ge,S,k,g]),K=Fe.length,ra=E?Math.ceil(K/R):1,Le=E?(ze-1)*R:0,ia=E?Le+R:K,z=Fe.slice(Le,ia),w=A.filter(a=>a.visible).sort((a,e)=>a.order-e.order);c.useLayoutEffect(()=>{if(j!=="server"||!C.current)return;Array.from(C.current.querySelectorAll("tr")).forEach((e,n)=>{var i;const s=(i=z[n])==null?void 0:i[g];if(s&&!O.current.has(s)){const l=e.getBoundingClientRect().top;O.current.set(s,l)}})}),c.useLayoutEffect(()=>{if(be.current||!C.current)return;const a=Array.from(C.current.querySelectorAll("tr"));let e=!1;a.forEach((n,s)=>{var d;const i=(d=z[s])==null?void 0:d[g];if(!i)return;const l=O.current.get(i),o=n.getBoundingClientRect().top;if(l!==void 0&&l!==o){const u=l-o,h=1e3,M=Math.max(-h,Math.min(h,u));e=!0,n.style.transform=`translateY(${M}px)`,n.style.transition="none",n.offsetHeight,requestAnimationFrame(()=>{n.style.transition="transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",n.style.transform="translateY(0)"})}O.current.set(i,o)}),e&&(be.current=!0,setTimeout(()=>{be.current=!1},600))},[z,g]),c.useEffect(()=>{const a=document.querySelector("[data-scroll-container]");if(!a)return;const e=()=>{const i=a.querySelectorAll("thead th"),l={};let o=0;w.forEach((d,u)=>{if(d.locked&&i[u]){l[d.id]=o;const h=i[u].offsetWidth;o+=h}}),Yt(l)};e();const n=new ResizeObserver(()=>{e()});return a.querySelectorAll("thead th").forEach(i=>n.observe(i)),()=>{n.disconnect()}},[w.map(a=>a.id+a.locked).join(",")]),c.useEffect(()=>{const a=document.querySelector("[data-scroll-container]");if(!a)return;const e=()=>{const n=a.scrollLeft;a.querySelectorAll('[data-locked="true"]').forEach(i=>{n>0?i.classList.add("is-stuck"):i.classList.remove("is-stuck")})};return a.addEventListener("scroll",e),()=>a.removeEventListener("scroll",e)},[]),c.useEffect(()=>{const a=e=>{e.key==="Escape"&&he&&fe(!1),(e.ctrlKey||e.metaKey)&&e.key==="a"&&D&&m.length>0&&(e.preventDefault(),qe(!0))};return document.addEventListener("keydown",a),()=>document.removeEventListener("keydown",a)},[he,D,m.length]);const sa=()=>t.jsxs(Be,{"data-scroll-container":!0,$maxHeight:_,children:[t.jsx(Ne,{$hasMaxHeight:!!_,children:t.jsx("thead",{children:t.jsx("tr",{children:w.map((a,e)=>{const n=f.find(i=>i.id===a.id),s=e===0?"left":e===w.length-1?"right":void 0;return t.jsx(Z,{label:(n==null?void 0:n.label)||a.id,variant:"default",side:s},a.id)})})})}),t.jsx(va,{className:Lt,style:da,role:"status","aria-live":"polite",children:t.jsxs(wa,{children:[t.jsx(Ta,{children:t.jsx(ua,{sx:{fontSize:64,color:"text.secondary"}})}),t.jsxs(Sa,{children:[t.jsx(b,{variant:"headingL",weight:"semibold",as:"h3",children:G}),t.jsx(b,{variant:"body",color:"secondary",children:U})]}),Te&&Se&&t.jsx(W,{variant:"primary",size:"medium",onClick:Se,children:Te})]})})]}),oa=typeof Ae=="object"?Ae:void 0,la=typeof Ee=="object"?Ee:void 0,da=typeof je=="object"?je:void 0;return t.jsx(r,{ref:Vt,style:oa,...$t,children:t.jsxs(xa,{className:At,role:"region","aria-label":ue||"Data table","aria-busy":me,"aria-invalid":We,children:[We&&De&&t.jsxs(ka,{role:"alert","aria-live":"polite",children:[t.jsx(ma,{sx:{fontSize:20}}),t.jsx(b,{variant:"body",color:"error",children:De})]}),ke||(zt?t.jsx(jt,{title:ue,showDropdown:!1,dropdownOptions:[],showDownload:It,onDownload:Rt,showFilter:Pt,onFilter:()=>{},showSettings:H,onSettingsClick:()=>fe(!0),showGlobalSearch:Mt}):null),m.length===0&&!me?sa():t.jsx(Be,{"data-scroll-container":!0,$maxHeight:_,className:Ft,style:la,children:t.jsxs(Ne,{$hasMaxHeight:!!_,role:"table","aria-label":ue||"Data table","aria-rowcount":K,children:[t.jsx("colgroup",{children:w.map(a=>{const e=f.find(i=>i.id===a.id),n=X[a.id];let s;if(n)s=`${n}px`;else if(e!=null&&e.width){let i=typeof e.width=="number"?e.width:parseInt(e.width,10);const l=e.minWidth?typeof e.minWidth=="number"?e.minWidth:parseInt(e.minWidth,10):0,o=e.maxWidth?typeof e.maxWidth=="number"?e.maxWidth:parseInt(e.maxWidth,10):1/0;i=Math.max(l,Math.min(o,i)),s=`${i}px`}else a.id==="checkbox"?s="48px":a.id==="actions"?s="120px":s="150px";return t.jsx("col",{width:s,style:{width:s}},a.id)})}),t.jsx("thead",{children:t.jsx("tr",{children:w.map((a,e)=>{const n=f.find(d=>d.id===a.id),s=a.locked,i=Ie[a.id],l=e===0?"left":e===w.length-1?"right":void 0;if(a.id==="checkbox")return t.jsx(Z,{label:"",variant:"default",side:l,locked:s,leftOffset:i,"data-locked":s,showCheckbox:!0,checked:_t,onCheckChange:qe},a.id);if(a.id==="actions")return t.jsx(Z,{label:"Actions",variant:"default",side:l,locked:s,leftOffset:i,"data-locked":s},a.id);if(!n)return null;const o=n.searchable?"search":n.resizable&&!s?"resizeable-locked":n.resizable?"resizeable":"default";return t.jsx(Z,{label:n.label,variant:o,side:l,sortable:n.sortable,sortDirection:S===n.id?k:"none",onSort:n.sortable?()=>ea(n.id):void 0,searchValue:ge[n.id]||"",onSearchChange:n.searchable?d=>aa(n.id,d):void 0,resizable:n.resizable&&!s,onResize:n.resizable&&!s?d=>na(n.id,d):void 0,width:X[n.id]||n.width,minWidth:n.minWidth,maxWidth:n.maxWidth,initialWidth:typeof n.width=="number"?n.width:void 0,onLockToggle:()=>Zt(n.id,!s),locked:s,leftOffset:i,"data-locked":s},a.id)})})}),t.jsx("tbody",{ref:C,children:me?Array.from({length:R}).map((a,e)=>t.jsx(Ca,{children:w.map(n=>t.jsx(Da,{children:n.id==="checkbox"?t.jsx(te,{width:"20px",height:"20px"}):n.id==="actions"?t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(te,{width:"32px",height:"32px"}),t.jsx(te,{width:"32px",height:"32px"})]}):t.jsx(te,{width:"80%"})},n.id))},`skeleton-${e}`)):z.map((a,e)=>{const n=a[g],s=J.includes(n),i=o=>{v&&v(a,e,o)},l=t.jsx(P.Fragment,{children:w.map((o,d)=>{const u=f.find(T=>T.id===o.id),h=o.locked,M=Ie[o.id],xe=d===0;if(o.id==="checkbox")return t.jsx(ee,{selected:s,locked:h,leftOffset:M,"data-locked":h,isFirstColumn:xe,width:48,children:t.jsx("div",{onClick:T=>{T.stopPropagation(),ta(n,!s,e,T.shiftKey)},style:{cursor:"pointer",display:"inline-flex"},children:t.jsx(ba,{checked:s,onChange:()=>{}})})},o.id);if(o.id==="actions")return t.jsx(ee,{selected:s,locked:h,leftOffset:M,"data-locked":h,width:120,children:t.jsx("div",{style:{display:"flex",gap:"8px"},children:B.map((T,ca)=>t.jsx(W,{variant:"tertiary",size:"small",showLabel:!1,leadingIcon:T.icon,onClick:()=>T.onClick(a),"aria-label":T.label,children:T.label},ca))})},o.id);if(!u)return null;const $e=u.accessor?typeof u.accessor=="function"?u.accessor(a):a[u.accessor]:a[u.id];return u.renderCell?t.jsx(ee,{selected:s,locked:h,leftOffset:M,"data-locked":h,isFirstColumn:xe,width:X[u.id]||u.width,children:u.renderCell($e,a,e)},o.id):t.jsx(ee,{selected:s,locked:h,leftOffset:M,"data-locked":h,isFirstColumn:xe,width:X[u.id]||u.width,children:String($e||"")},o.id)})});return Qt?t.jsx(Wa,{$animationDelay:e*30,onClick:i,style:{cursor:v?"pointer":"default"},children:l},n):t.jsx("tr",{onClick:i,style:{cursor:v?"pointer":"default"},children:l},n)})})]})}),E&&t.jsx(fa,{currentPage:ze,totalPages:ra,totalItems:K,itemsPerPage:R,onPageChange:Me,onItemsPerPageChange:Ht}),H&&t.jsx(t.Fragment,{children:t.jsx(ga,{isOpen:he,onClose:()=>fe(!1),columns:A.filter(a=>a.id!=="checkbox"),lockWarning:Jt,onColumnsChange:a=>{const e=A.find(i=>i.id==="checkbox"),n=e?[e,...a]:a;if(a.some(i=>{const l=A.find(o=>o.id===i.id);return l&&l.locked!==i.locked})){const l=n.sort((o,d)=>o.id==="checkbox"?-1:d.id==="checkbox"?1:o.locked&&!d.locked?-1:!o.locked&&d.locked?1:o.order-d.order).map((o,d)=>({...o,order:d}));ye(l)}else ye(n)}})})]})})});I.displayName="Table";I.__docgenInfo={description:"",methods:[],displayName:"Table",props:{as:{required:!1,tsType:{name:"ElementType"},description:"Polymorphic component type (default: 'div')",defaultValue:{value:"'div'",computed:!1}},data:{required:!1,tsType:{name:"Array",elements:[{name:"any"}],raw:"any[]"},description:"Array of data objects to display",defaultValue:{value:"[]",computed:!1}},columns:{required:!1,tsType:{name:"Array",elements:[{name:"TableColumn"}],raw:"TableColumn[]"},description:"Column configuration",defaultValue:{value:"[]",computed:!1}},selectable:{required:!1,tsType:{name:"boolean"},description:"Enable row selection",defaultValue:{value:"false",computed:!1}},paginated:{required:!1,tsType:{name:"boolean"},description:"Enable pagination",defaultValue:{value:"true",computed:!1}},itemsPerPage:{required:!1,tsType:{name:"number"},description:"Items per page (default: 10)",defaultValue:{value:"10",computed:!1}},showSettings:{required:!1,tsType:{name:"boolean"},description:"Enable column settings",defaultValue:{value:"true",computed:!1}},showActions:{required:!1,tsType:{name:"boolean"},description:"Enable actions column",defaultValue:{value:"false",computed:!1}},actions:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}`,signature:{properties:[{key:"icon",value:{name:"string",required:!0}},{key:"label",value:{name:"string",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"(row: any) => void",signature:{arguments:[{type:{name:"any"},name:"row"}],return:{name:"void"}},required:!0}}]}}],raw:`Array<{
  icon: string;
  label: string;
  onClick: (row: any) => void;
}>`},description:"Custom actions for each row",defaultValue:{value:"[]",computed:!1}},onRowSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedIds"}],return:{name:"void"}}},description:"Callback when rows are selected"},onRowAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: string, row: any) => void",signature:{arguments:[{type:{name:"string"},name:"action"},{type:{name:"any"},name:"row"}],return:{name:"void"}}},description:"Callback when row action is triggered"},onRowClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(row: any, rowIndex: number, event: React.MouseEvent<HTMLTableRowElement>) => void",signature:{arguments:[{type:{name:"any"},name:"row"},{type:{name:"number"},name:"rowIndex"},{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableRowElement>",elements:[{name:"HTMLTableRowElement"}]},name:"event"}],return:{name:"void"}}},description:"Callback when a row is clicked"},rowKey:{required:!1,tsType:{name:"string"},description:"Custom row key accessor (default: 'id')",defaultValue:{value:"'id'",computed:!1}},emptyMessage:{required:!1,tsType:{name:"string"},description:"Custom empty state message",defaultValue:{value:"'No data available'",computed:!1}},emptyIcon:{required:!1,tsType:{name:"string"},description:"Empty state icon name (Material Icons)",defaultValue:{value:"'CloudOff'",computed:!1}},emptyTitle:{required:!1,tsType:{name:"string"},description:"Empty state title",defaultValue:{value:"'No data available'",computed:!1}},emptyDescription:{required:!1,tsType:{name:"string"},description:"Empty state description",defaultValue:{value:"'There are no items to display'",computed:!1}},emptyActionLabel:{required:!1,tsType:{name:"string"},description:"Empty state action button label"},onEmptyAction:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Empty state action button handler"},loading:{required:!1,tsType:{name:"boolean"},description:"Loading state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"},toolbar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom toolbar content - when provided, renders instead of default toolbar"},title:{required:!1,tsType:{name:"string"},description:"Table title"},description:{required:!1,tsType:{name:"string"},description:"Table description"},showToolbar:{required:!1,tsType:{name:"boolean"},description:"Show toolbar",defaultValue:{value:"true",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search in toolbar",defaultValue:{value:"false",computed:!1}},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button in toolbar",defaultValue:{value:"true",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button in toolbar",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},sortMode:{required:!1,tsType:{name:"union",raw:"'client' | 'server'",elements:[{name:"literal",value:"'client'"},{name:"literal",value:"'server'"}]},description:"Sorting mode: 'client' (default) or 'server'",defaultValue:{value:"'client'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(columnId: string, direction: 'asc' | 'desc' | 'none') => void",signature:{arguments:[{type:{name:"string"},name:"columnId"},{type:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},name:"direction"}],return:{name:"void"}}},description:"Callback when sort changes (only used when sortMode='server')"},sortColumn:{required:!1,tsType:{name:"string"},description:"Controlled sort column (only used when sortMode='server')"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"Controlled sort direction (only used when sortMode='server')"},maxHeight:{required:!1,tsType:{name:"string"},description:"Maximum height for table body (enables fixed header with internal scroll). Example: '400px', '50vh'"},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Invalid/error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},scrollContainerClassName:{required:!1,tsType:{name:"string"},description:"Override className for scroll container"},scrollContainerStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for scroll container"},emptyStateClassName:{required:!1,tsType:{name:"string"},description:"Override className for empty state"},emptyStateStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Override style for empty state"}}};const Ka={title:"Components/Table",component:I,parameters:{layout:"padded",docs:{story:{inline:!1,iframeHeight:600},description:{component:`
Data table with sorting, filtering, pagination, and column resizing.

**Features:** Sorting • Filtering • Pagination • Row selection • Column resizing • Custom cell rendering

## Quick Start
\`\`\`tsx
import { Table } from '@ajaysoni7832/lean-ids-components';

<Table 
  data={data} 
  columns={columns}
  sortable
  resizable
/>
\`\`\`

See stories below for detailed examples.
        `}}},tags:["autodocs"]},x=[{id:"1",name:"Alice Johnson",email:"alice.johnson@company.com",role:"Senior Developer",department:"Engineering",status:"Active",salary:125e3,avatar:"https://i.pravatar.cc/32?img=1"},{id:"2",name:"Bob Smith",email:"bob.smith@company.com",role:"Product Manager",department:"Product",status:"Active",salary:115e3,avatar:"https://i.pravatar.cc/32?img=2"},{id:"3",name:"Carol Williams",email:"carol.williams@company.com",role:"UX Designer",department:"Design",status:"Active",salary:95e3,avatar:"https://i.pravatar.cc/32?img=3"},{id:"4",name:"David Brown",email:"david.brown@company.com",role:"DevOps Engineer",department:"Engineering",status:"Inactive",salary:11e4,avatar:"https://i.pravatar.cc/32?img=4"},{id:"5",name:"Eve Davis",email:"eve.davis@company.com",role:"Marketing Manager",department:"Marketing",status:"Active",salary:105e3,avatar:"https://i.pravatar.cc/32?img=5"},{id:"6",name:"Frank Miller",email:"frank.miller@company.com",role:"Backend Developer",department:"Engineering",status:"Active",salary:118e3,avatar:"https://i.pravatar.cc/32?img=6"},{id:"7",name:"Grace Lee",email:"grace.lee@company.com",role:"Data Analyst",department:"Analytics",status:"Active",salary:98e3,avatar:"https://i.pravatar.cc/32?img=7"},{id:"8",name:"Henry Wilson",email:"henry.wilson@company.com",role:"QA Engineer",department:"Engineering",status:"Inactive",salary:92e3,avatar:"https://i.pravatar.cc/32?img=8"},{id:"9",name:"Iris Martinez",email:"iris.martinez@company.com",role:"Frontend Developer",department:"Engineering",status:"Active",salary:112e3,avatar:"https://i.pravatar.cc/32?img=9"},{id:"10",name:"Jack Anderson",email:"jack.anderson@company.com",role:"Sales Manager",department:"Sales",status:"Active",salary:108e3,avatar:"https://i.pravatar.cc/32?img=10"},{id:"11",name:"Karen Taylor",email:"karen.taylor@company.com",role:"HR Manager",department:"Human Resources",status:"Active",salary:95e3,avatar:"https://i.pravatar.cc/32?img=11"},{id:"12",name:"Leo Thomas",email:"leo.thomas@company.com",role:"Security Engineer",department:"Engineering",status:"Active",salary:125e3,avatar:"https://i.pravatar.cc/32?img=12"},{id:"13",name:"Maria Garcia",email:"maria.garcia@company.com",role:"Content Writer",department:"Marketing",status:"Active",salary:75e3,avatar:"https://i.pravatar.cc/32?img=13"},{id:"14",name:"Nathan Moore",email:"nathan.moore@company.com",role:"System Administrator",department:"IT",status:"Inactive",salary:88e3,avatar:"https://i.pravatar.cc/32?img=14"},{id:"15",name:"Olivia Jackson",email:"olivia.jackson@company.com",role:"UI Designer",department:"Design",status:"Active",salary:102e3,avatar:"https://i.pravatar.cc/32?img=15"},{id:"16",name:"Paul White",email:"paul.white@company.com",role:"Business Analyst",department:"Product",status:"Active",salary:96e3,avatar:"https://i.pravatar.cc/32?img=16"},{id:"17",name:"Quinn Harris",email:"quinn.harris@company.com",role:"Mobile Developer",department:"Engineering",status:"Active",salary:115e3,avatar:"https://i.pravatar.cc/32?img=17"},{id:"18",name:"Rachel Clark",email:"rachel.clark@company.com",role:"Scrum Master",department:"Product",status:"Active",salary:105e3,avatar:"https://i.pravatar.cc/32?img=18"},{id:"19",name:"Samuel Lewis",email:"samuel.lewis@company.com",role:"Cloud Architect",department:"Engineering",status:"Active",salary:135e3,avatar:"https://i.pravatar.cc/32?img=19"},{id:"20",name:"Tina Robinson",email:"tina.robinson@company.com",role:"Customer Success Manager",department:"Support",status:"Active",salary:85e3,avatar:"https://i.pravatar.cc/32?img=20"}],V=[{id:"id",label:"ID",width:80,minWidth:60,maxWidth:100},{id:"name",label:"Name",width:200,minWidth:150,maxWidth:300},{id:"email",label:"Email",width:250,minWidth:200,maxWidth:400},{id:"role",label:"Role",width:180,minWidth:150,maxWidth:250}],le=[{id:"id",label:"ID",sortable:!0,resizable:!0,width:80,minWidth:60,maxWidth:100},{id:"user",label:"User",sortable:!0,resizable:!0,width:250,minWidth:200,maxWidth:400,accessor:r=>r.name,renderCell:(r,m)=>t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[t.jsx("img",{src:m.avatar,alt:m.name,style:{width:32,height:32,borderRadius:"50%"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[t.jsx(b,{variant:"body",weight:"semibold",children:m.name}),t.jsx(b,{variant:"caption",color:"secondary",children:m.role})]})]})},{id:"email",label:"Email",accessor:"email",sortable:!0,searchable:!0,resizable:!0,width:250,minWidth:200,maxWidth:400},{id:"department",label:"Department",accessor:"department",sortable:!0,resizable:!0,width:150,minWidth:120,maxWidth:200},{id:"status",label:"Status",accessor:"status",sortable:!0,resizable:!0,width:120,minWidth:100,maxWidth:150,renderCell:r=>t.jsx(ya,{label:r,type:r==="Active"?"success":"error",styleVariant:"default"})},{id:"salary",label:"Salary",accessor:"salary",sortable:!0,resizable:!0,width:120,minWidth:100,maxWidth:180,renderCell:r=>`$${r.toLocaleString()}`}],q={args:{data:x,columns:le,selectable:!0,paginated:!0,itemsPerPage:10,showSettings:!0,showActions:!0,showToolbar:!0,title:"Employee Directory",description:"Manage and view all employee information",showGlobalSearch:!0,showFilter:!0,showDownload:!0,actions:[{icon:"Edit",label:"Edit",onClick:r=>console.log("Edit:",r)},{icon:"Delete",label:"Delete",onClick:r=>console.log("Delete:",r)}],onRowSelect:r=>console.log("Selected:",r)},parameters:{docs:{story:{inline:!1,iframeHeight:600}}}},F={args:{data:x,columns:le,selectable:!0,paginated:!0,itemsPerPage:20,maxHeight:"500px",showToolbar:!0,title:"Fixed Header Table",description:"Header stays fixed while body scrolls. Try changing items per page!",showSettings:!0},parameters:{docs:{description:{story:"The `maxHeight` prop enables a fixed header with internal scrolling. The table height stays constant regardless of how many items per page you select. Perfect for dashboards and constrained layouts."},story:{inline:!1,iframeHeight:700}}}},L={args:{data:x,columns:le,selectable:!0,paginated:!0,itemsPerPage:10,toolbar:t.jsxs(jt,{children:[t.jsx(He,{align:"left",children:t.jsx(pa,{children:"Custom Employee Directory"})}),t.jsx(He,{align:"right",children:t.jsxs(ha,{children:[t.jsx(W,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(Ve,{name:"Download",size:"medium"}),onClick:()=>console.log("Export clicked"),"aria-label":"Export",children:"Export"}),t.jsx(W,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(Ve,{name:"FilterAlt",size:"medium"}),onClick:()=>console.log("Filter clicked"),"aria-label":"Filter",children:"Filter"}),t.jsx(W,{variant:"primary",size:"medium",onClick:()=>console.log("Add Employee clicked"),children:"Add Employee"})]})})]})},parameters:{docs:{description:{story:"Example of a custom toolbar using `TableToolbar`, `TableToolbarSection`, `TableToolbarTitle`, and `TableToolbarActions` helper components. These components provide a consistent layout and styling while allowing full customization. You can add any Lean IDS components (Button, Input, Select, etc.) inside the toolbar sections."},story:{inline:!1,iframeHeight:600}}}},$={render:r=>{const[m,f]=P.useState(x),[D,E]=P.useState(""),[de,H]=P.useState("none"),[ce,B]=P.useState(!1),p=async(N,v)=>{if(E(N),H(v),B(!0),await new Promise(g=>setTimeout(g,500)),v==="none")f([...x]);else{const g=[...x].sort((ve,we)=>{const G=ve[N],U=we[N];return G<U?v==="asc"?-1:1:G>U?v==="asc"?1:-1:0});f(g)}B(!1)};return t.jsx(I,{...r,data:m,loading:ce,sortMode:"server",sortColumn:D,sortDirection:de,onSort:p})},args:{columns:le,paginated:!0,itemsPerPage:10,title:"Server-Side Sorting Example",description:'Click column headers to sort. Data is "fetched" from server.'},parameters:{docs:{description:{story:'Example of server-side sorting. The parent component manages `sortColumn` and `sortDirection` state, and fetches sorted data when `onSort` is called. Set `sortMode="server"` to enable this mode.'},story:{inline:!1,iframeHeight:600}}}},ae={args:{data:[],columns:V,showToolbar:!0,title:"Tabular View",emptyIcon:"CloudOff",emptyTitle:"Not able to sync",emptyDescription:"Please check your internet connection",emptyActionLabel:"Refresh",onEmptyAction:()=>console.log("Refresh clicked")}},ne={args:{data:x,columns:V,showToolbar:!0,title:"Employee Directory",isInvalid:!0,errorMessage:"Failed to load data. Please try again later."},parameters:{docs:{description:{story:"Table with error state. Use `isInvalid` and `errorMessage` props to display error messages."}}}},re={args:{data:x,columns:V,showToolbar:!0,title:"Employee Directory",loading:!0},parameters:{docs:{description:{story:"Table in loading state. Shows skeleton rows while data is being fetched."}}}},ie={render:r=>{const m=P.useRef(null);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(W,{variant:"secondary",size:"small",onClick:()=>{m.current&&(m.current.scrollIntoView({behavior:"smooth"}),console.log("Table ref:",m.current))},children:"Scroll to Table"}),t.jsx(W,{variant:"secondary",size:"small",onClick:()=>{m.current&&console.log("Table dimensions:",{width:m.current.offsetWidth,height:m.current.offsetHeight})},children:"Log Dimensions"})]}),t.jsx(I,{ref:m,...r})]})},args:{data:x,columns:V,showToolbar:!0,title:"ForwardRef Example"},parameters:{docs:{description:{story:"Table with forwardRef support. The ref is forwarded to the root container element, allowing parent components to access the DOM node."}}}},se={render:()=>{const r=[{id:"fixed",label:"Fixed Width",accessor:"name",width:150,minWidth:150,maxWidth:150,resizable:!0},{id:"flexible",label:"Flexible (150-400px)",accessor:"email",width:250,minWidth:150,maxWidth:400,resizable:!0},{id:"minOnly",label:"Min Only (200px+)",accessor:"department",minWidth:200,resizable:!0},{id:"maxOnly",label:"Max Only (≤300px)",accessor:"role",maxWidth:300,resizable:!0}];return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx(b,{variant:"headingM",weight:"semibold",children:"Column Width Control Demo"}),t.jsx(b,{variant:"body",color:"secondary",children:"Try resizing the columns by dragging their borders. Each column has different width constraints:"}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",padding:"16px",background:"#f9fafb",borderRadius:"8px"},children:[t.jsx(b,{variant:"body",weight:"semibold",children:"Column Configurations:"}),t.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[t.jsx("li",{children:t.jsxs(b,{variant:"body",children:[t.jsx("strong",{children:"Fixed Width:"})," width=150, minWidth=150, maxWidth=150 (cannot resize)"]})}),t.jsx("li",{children:t.jsxs(b,{variant:"body",children:[t.jsx("strong",{children:"Flexible:"})," width=250, minWidth=150, maxWidth=400 (can resize between 150-400px)"]})}),t.jsx("li",{children:t.jsxs(b,{variant:"body",children:[t.jsx("strong",{children:"Min Only:"})," minWidth=200 (can grow indefinitely, but not below 200px)"]})}),t.jsx("li",{children:t.jsxs(b,{variant:"body",children:[t.jsx("strong",{children:"Max Only:"})," maxWidth=300 (can shrink, but not above 300px)"]})})]})]})]}),t.jsx(I,{data:x.slice(0,5),columns:r})]})},parameters:{docs:{description:{story:`
Demonstrates column width control with \`width\`, \`minWidth\`, and \`maxWidth\` properties.

**Width Properties:**
- \`width\` - Sets the initial/preferred width
- \`minWidth\` - Prevents column from shrinking below this value
- \`maxWidth\` - Prevents column from growing above this value

**Use Cases:**
- **Fixed Width**: Set all three properties to the same value
- **Flexible with Constraints**: Set different min and max values
- **Minimum Only**: Set only minWidth to allow unlimited growth
- **Maximum Only**: Set only maxWidth to allow unlimited shrinking

Try resizing the columns to see how the constraints work!
        `},source:{code:`
const columns: TableColumn[] = [
  {
    id: 'fixed',
    label: 'Fixed Width',
    width: 150,
    minWidth: 150,
    maxWidth: 150,
    resizable: true,
  },
  {
    id: 'flexible',
    label: 'Flexible',
    width: 250,
    minWidth: 150,
    maxWidth: 400,
    resizable: true,
  },
  {
    id: 'minOnly',
    label: 'Min Only',
    minWidth: 200,
    resizable: true,
  },
  {
    id: 'maxOnly',
    label: 'Max Only',
    maxWidth: 300,
    resizable: true,
  },
];

<Table data={data} columns={columns} />
        `}}}},oe={args:{as:"section",data:x,columns:V,showToolbar:!0,title:"Polymorphic Table"},parameters:{docs:{description:{story:"Table rendered as a different HTML element using the `as` prop. In this example, the table is rendered as a `<section>` instead of a `<div>`."}}}};var Ge,Ue,_e,Ye,Je;q.parameters={...q.parameters,docs:{...(Ge=q.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: advancedColumns,
    selectable: true,
    paginated: true,
    itemsPerPage: 10,
    showSettings: true,
    showActions: true,
    showToolbar: true,
    title: 'Employee Directory',
    description: 'Manage and view all employee information',
    showGlobalSearch: true,
    showFilter: true,
    showDownload: true,
    actions: [{
      icon: 'Edit',
      label: 'Edit',
      onClick: row => console.log('Edit:', row)
    }, {
      icon: 'Delete',
      label: 'Delete',
      onClick: row => console.log('Delete:', row)
    }],
    onRowSelect: ids => console.log('Selected:', ids)
  },
  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(_e=(Ue=q.parameters)==null?void 0:Ue.docs)==null?void 0:_e.source},description:{story:`Complete table with all features enabled - matches CompleteExample design

**Features:**
- ✅ Row selection with checkboxes
- ✅ **Shift-click multi-select**: Click first row, hold Shift, click another row to select range
- ✅ Pagination
- ✅ Column settings
- ✅ Row actions
- ✅ Global search
- ✅ Filters
- ✅ Download
- ✅ **Column resizing**: Drag column borders to resize (works in both Canvas and Docs)
- ✅ **Width constraints**: Columns have \`minWidth\` and \`maxWidth\` to prevent over-shrinking or over-growing

**Column Width Control:**
Each column is configured with:
- \`width\` - Preferred/initial width
- \`minWidth\` - Minimum width constraint (prevents shrinking too small)
- \`maxWidth\` - Maximum width constraint (prevents growing too large)

When resizing columns, they respect these constraints for a professional, consistent layout.

**Note:** Column resizing is fully interactive in both Canvas and Docs views.`,...(Je=(Ye=q.parameters)==null?void 0:Ye.docs)==null?void 0:Je.description}}};var Qe,Xe,Ke,Ze,et;F.parameters={...F.parameters,docs:{...(Qe=F.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: advancedColumns,
    selectable: true,
    paginated: true,
    itemsPerPage: 20,
    // Show all 20 rows
    maxHeight: '500px',
    // Fixed height - header stays visible
    showToolbar: true,
    title: 'Fixed Header Table',
    description: 'Header stays fixed while body scrolls. Try changing items per page!',
    showSettings: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The \`maxHeight\` prop enables a fixed header with internal scrolling. The table height stays constant regardless of how many items per page you select. Perfect for dashboards and constrained layouts.'
      },
      story: {
        inline: false,
        iframeHeight: 700
      }
    }
  }
}`,...(Ke=(Xe=F.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source},description:{story:`Fixed Header with Scroll - demonstrates maxHeight prop for fixed header with internal scrolling

When you set maxHeight, the table header stays fixed and only the body scrolls.
This is useful for tables with many rows where you want to keep the header visible.`,...(et=(Ze=F.parameters)==null?void 0:Ze.docs)==null?void 0:et.description}}};var tt,at,nt,rt,it;L.parameters={...L.parameters,docs:{...(tt=L.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: advancedColumns,
    selectable: true,
    paginated: true,
    itemsPerPage: 10,
    toolbar: <TableToolbar>
        <TableToolbarSection align="left">
          <TableToolbarTitle>Custom Employee Directory</TableToolbarTitle>
        </TableToolbarSection>
        <TableToolbarSection align="right">
          <TableToolbarActions>
            <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="Download" size="medium" />} onClick={() => console.log('Export clicked')} aria-label="Export">
              Export
            </Button>
            <Button variant="secondary" size="medium" showLabel={false} leadingIcon={<Icon name="FilterAlt" size="medium" />} onClick={() => console.log('Filter clicked')} aria-label="Filter">
              Filter
            </Button>
            <Button variant="primary" size="medium" onClick={() => console.log('Add Employee clicked')}>
              Add Employee
            </Button>
          </TableToolbarActions>
        </TableToolbarSection>
      </TableToolbar>
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of a custom toolbar using \`TableToolbar\`, \`TableToolbarSection\`, \`TableToolbarTitle\`, and \`TableToolbarActions\` helper components. These components provide a consistent layout and styling while allowing full customization. You can add any Lean IDS components (Button, Input, Select, etc.) inside the toolbar sections.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(nt=(at=L.parameters)==null?void 0:at.docs)==null?void 0:nt.source},description:{story:`Custom Toolbar - demonstrates how to create a fully custom toolbar using TableToolbar helper components

**How to use:**
\`\`\`tsx
import { 
  Table, 
  TableToolbar, 
  TableToolbarSection, 
  TableToolbarTitle,
  TableToolbarActions,
  Button,
  Icon
} from '@ajaysoni7832/lean-ids-components';

<Table
  data={data}
  columns={columns}
  toolbar={
    <TableToolbar>
      <TableToolbarSection align="left">
        <TableToolbarTitle>Custom Title</TableToolbarTitle>
      </TableToolbarSection>
      <TableToolbarSection align="right">
        <TableToolbarActions>
          <Button variant="secondary">Export</Button>
          <Button variant="primary">Add New</Button>
        </TableToolbarActions>
      </TableToolbarSection>
    </TableToolbar>
  }
/>
\`\`\``,...(it=(rt=L.parameters)==null?void 0:rt.docs)==null?void 0:it.description}}};var st,ot,lt,dt,ct;$.parameters={...$.parameters,docs:{...(st=$.parameters)==null?void 0:st.docs,source:{originalSource:`{
  render: args => {
    const [sortedData, setSortedData] = React.useState(sampleData);
    const [sortCol, setSortCol] = React.useState('');
    const [sortDir, setSortDir] = React.useState<'asc' | 'desc' | 'none'>('none');
    const [loading, setLoading] = React.useState(false);
    const handleSort = async (columnId: string, direction: 'asc' | 'desc' | 'none') => {
      setSortCol(columnId);
      setSortDir(direction);
      setLoading(true);

      // Simulate server request
      await new Promise(resolve => setTimeout(resolve, 500));

      // Simulate server-side sorting
      if (direction === 'none') {
        setSortedData([...sampleData]);
      } else {
        const sorted = [...sampleData].sort((a, b) => {
          const aVal = a[columnId as keyof typeof a];
          const bVal = b[columnId as keyof typeof b];
          if (aVal < bVal) return direction === 'asc' ? -1 : 1;
          if (aVal > bVal) return direction === 'asc' ? 1 : -1;
          return 0;
        });
        setSortedData(sorted);
      }
      setLoading(false);
    };
    return <Table {...args} data={sortedData} loading={loading} sortMode="server" sortColumn={sortCol} sortDirection={sortDir} onSort={handleSort} />;
  },
  args: {
    columns: advancedColumns,
    paginated: true,
    itemsPerPage: 10,
    title: 'Server-Side Sorting Example',
    description: 'Click column headers to sort. Data is "fetched" from server.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Example of server-side sorting. The parent component manages \`sortColumn\` and \`sortDirection\` state, and fetches sorted data when \`onSort\` is called. Set \`sortMode="server"\` to enable this mode.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      }
    }
  }
}`,...(lt=(ot=$.parameters)==null?void 0:ot.docs)==null?void 0:lt.source},description:{story:`Empty state with action button
Server-Side Sorting - demonstrates how to implement server-side sorting

In this example, the parent component manages the sort state and simulates
a server request. In a real application, you would fetch sorted data from your API.`,...(ct=(dt=$.parameters)==null?void 0:dt.docs)==null?void 0:ct.description}}};var mt,ut,pt;ae.parameters={...ae.parameters,docs:{...(mt=ae.parameters)==null?void 0:mt.docs,source:{originalSource:`{
  args: {
    data: [],
    columns: basicColumns,
    showToolbar: true,
    title: 'Tabular View',
    emptyIcon: 'CloudOff',
    emptyTitle: 'Not able to sync',
    emptyDescription: 'Please check your internet connection',
    emptyActionLabel: 'Refresh',
    onEmptyAction: () => console.log('Refresh clicked')
  }
}`,...(pt=(ut=ae.parameters)==null?void 0:ut.docs)==null?void 0:pt.source}}};var ht,ft,gt;ne.parameters={...ne.parameters,docs:{...(ht=ne.parameters)==null?void 0:ht.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'Employee Directory',
    isInvalid: true,
    errorMessage: 'Failed to load data. Please try again later.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with error state. Use \`isInvalid\` and \`errorMessage\` props to display error messages.'
      }
    }
  }
}`,...(gt=(ft=ne.parameters)==null?void 0:ft.docs)==null?void 0:gt.source}}};var bt,yt,xt;re.parameters={...re.parameters,docs:{...(bt=re.parameters)==null?void 0:bt.docs,source:{originalSource:`{
  args: {
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'Employee Directory',
    loading: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Table in loading state. Shows skeleton rows while data is being fetched.'
      }
    }
  }
}`,...(xt=(yt=re.parameters)==null?void 0:yt.docs)==null?void 0:xt.source}}};var vt,wt,Tt;ie.parameters={...ie.parameters,docs:{...(vt=ie.parameters)==null?void 0:vt.docs,source:{originalSource:`{
  render: args => {
    const tableRef = React.useRef<HTMLDivElement>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <Button variant="secondary" size="small" onClick={() => {
          if (tableRef.current) {
            tableRef.current.scrollIntoView({
              behavior: 'smooth'
            });
            console.log('Table ref:', tableRef.current);
          }
        }}>
            Scroll to Table
          </Button>
          <Button variant="secondary" size="small" onClick={() => {
          if (tableRef.current) {
            console.log('Table dimensions:', {
              width: tableRef.current.offsetWidth,
              height: tableRef.current.offsetHeight
            });
          }
        }}>
            Log Dimensions
          </Button>
        </div>
        <Table ref={tableRef} {...args} />
      </div>;
  },
  args: {
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'ForwardRef Example'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table with forwardRef support. The ref is forwarded to the root container element, allowing parent components to access the DOM node.'
      }
    }
  }
}`,...(Tt=(wt=ie.parameters)==null?void 0:wt.docs)==null?void 0:Tt.source}}};var St,kt,Ct;se.parameters={...se.parameters,docs:{...(St=se.parameters)==null?void 0:St.docs,source:{originalSource:`{
  render: () => {
    const widthControlColumns: TableColumn[] = [{
      id: 'fixed',
      label: 'Fixed Width',
      accessor: 'name',
      width: 150,
      minWidth: 150,
      maxWidth: 150,
      resizable: true
    }, {
      id: 'flexible',
      label: 'Flexible (150-400px)',
      accessor: 'email',
      width: 250,
      minWidth: 150,
      maxWidth: 400,
      resizable: true
    }, {
      id: 'minOnly',
      label: 'Min Only (200px+)',
      accessor: 'department',
      minWidth: 200,
      resizable: true
    }, {
      id: 'maxOnly',
      label: 'Max Only (≤300px)',
      accessor: 'role',
      maxWidth: 300,
      resizable: true
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Column Width Control Demo</Typography>
          <Typography variant="body" color="secondary">
            Try resizing the columns by dragging their borders. Each column has different width constraints:
          </Typography>
          
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          padding: '16px',
          background: '#f9fafb',
          borderRadius: '8px'
        }}>
            <Typography variant="body" weight="semibold">Column Configurations:</Typography>
            <ul style={{
            margin: 0,
            paddingLeft: '20px'
          }}>
              <li>
                <Typography variant="body">
                  <strong>Fixed Width:</strong> width=150, minWidth=150, maxWidth=150 (cannot resize)
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  <strong>Flexible:</strong> width=250, minWidth=150, maxWidth=400 (can resize between 150-400px)
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  <strong>Min Only:</strong> minWidth=200 (can grow indefinitely, but not below 200px)
                </Typography>
              </li>
              <li>
                <Typography variant="body">
                  <strong>Max Only:</strong> maxWidth=300 (can shrink, but not above 300px)
                </Typography>
              </li>
            </ul>
          </div>
        </div>

        <Table data={sampleData.slice(0, 5)} columns={widthControlColumns} />
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
Demonstrates column width control with \\\`width\\\`, \\\`minWidth\\\`, and \\\`maxWidth\\\` properties.

**Width Properties:**
- \\\`width\\\` - Sets the initial/preferred width
- \\\`minWidth\\\` - Prevents column from shrinking below this value
- \\\`maxWidth\\\` - Prevents column from growing above this value

**Use Cases:**
- **Fixed Width**: Set all three properties to the same value
- **Flexible with Constraints**: Set different min and max values
- **Minimum Only**: Set only minWidth to allow unlimited growth
- **Maximum Only**: Set only maxWidth to allow unlimited shrinking

Try resizing the columns to see how the constraints work!
        \`
      },
      source: {
        code: \`
const columns: TableColumn[] = [
  {
    id: 'fixed',
    label: 'Fixed Width',
    width: 150,
    minWidth: 150,
    maxWidth: 150,
    resizable: true,
  },
  {
    id: 'flexible',
    label: 'Flexible',
    width: 250,
    minWidth: 150,
    maxWidth: 400,
    resizable: true,
  },
  {
    id: 'minOnly',
    label: 'Min Only',
    minWidth: 200,
    resizable: true,
  },
  {
    id: 'maxOnly',
    label: 'Max Only',
    maxWidth: 300,
    resizable: true,
  },
];

<Table data={data} columns={columns} />
        \`
      }
    }
  }
}`,...(Ct=(kt=se.parameters)==null?void 0:kt.docs)==null?void 0:Ct.source}}};var Wt,Dt,Et;oe.parameters={...oe.parameters,docs:{...(Wt=oe.parameters)==null?void 0:Wt.docs,source:{originalSource:`{
  args: {
    as: 'section',
    data: sampleData,
    columns: basicColumns,
    showToolbar: true,
    title: 'Polymorphic Table'
  },
  parameters: {
    docs: {
      description: {
        story: 'Table rendered as a different HTML element using the \`as\` prop. In this example, the table is rendered as a \`<section>\` instead of a \`<div>\`.'
      }
    }
  }
}`,...(Et=(Dt=oe.parameters)==null?void 0:Dt.docs)==null?void 0:Et.source}}};const Za=["Complete","FixedHeaderScroll","CustomToolbar","ServerSideSorting","Empty","ErrorState","LoadingState","WithForwardRef","ColumnWidthControl","PolymorphicAs"];export{se as ColumnWidthControl,q as Complete,L as CustomToolbar,ae as Empty,ne as ErrorState,F as FixedHeaderScroll,re as LoadingState,oe as PolymorphicAs,$ as ServerSideSorting,ie as WithForwardRef,Za as __namedExportsOrder,Ka as default};
