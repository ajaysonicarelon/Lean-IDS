import{j as t}from"./jsx-runtime-DSvmvvsx.js";import{r as M,R as ye}from"./index-B0WjJBI_.js";import{g as l}from"./styled-components.browser.esm-CuwBLqEg.js";import{c as he}from"./createSvgIcon-B7ekv6yR.js";import{C as xe}from"./Checkbox-B5k7d77F.js";import{B as ve}from"./Badge-08EIA_9P.js";import{C as be}from"./Chip-CHEHkNu4.js";import{B as R}from"./Button-4FxjpG2D.js";import{I as K}from"./Icon-D9wW9sG4.js";const ie=he(t.jsx("path",{d:"m20 12-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8z"})),se=he(t.jsx("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"})),we=l.th`
  background-color: ${({theme:e,$sortDirection:a})=>a&&a!=="none"?e.colors.palette.primary[100]:e.colors.palette.primary[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[7]}`};
  height: 56px;
  text-align: ${({$align:e})=>e||"left"};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  white-space: nowrap;
  cursor: ${({$sortable:e})=>e?"pointer":"default"};
  user-select: none;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  
  /* Width is set via inline style prop and controlled by <col> elements with table-layout: fixed */
  
  ${({$side:e})=>e==="left"?"border-top-left-radius: 8px;":e==="right"?"border-top-right-radius: 8px;":""}

  ${({$locked:e,$leftOffset:a,theme:n})=>e?`
    position: sticky;
    left: ${a||0}px;
    z-index: 10;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    
    &.is-stuck {
      background-color: ${n.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `:""}

  &:hover {
    background-color: ${({theme:e,$sortable:a})=>a?e.colors.palette.primary[100]:e.colors.palette.primary[50]};
  }
`,oe=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  ${({$variant:e})=>e==="search"?"justify-content: space-between;":""}
`,Te=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 1;
  min-width: 0;
`,X=l.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`,de=l.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`,ce=l.span`
  display: ${({$direction:e})=>e==="none"?"none":"inline-flex"};
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  transition: all 0.2s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`,$e=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,ue=l.div`
  display: none; /* Hidden - using ResizeBorder instead */
  /* display: inline-flex; */
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  cursor: col-resize;
  flex-shrink: 0;
  user-select: none;

  &:hover {
    color: ${({theme:e})=>e.colors.palette.primary[500]};
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`,je=l.div`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8px;
  height: 50%;
  cursor: col-resize;
  user-select: none;
  z-index: 2;
  
  /* Visual border - half height, centered vertically */
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: ${({theme:e})=>e.colors.palette.neutral[400]};
    transition: background-color 0.2s ease;
  }
  
  /* Hover state */
  &:hover::before {
    background-color: ${({theme:e})=>e.colors.palette.primary[500]};
  }
  
  /* Active/dragging state */
  &:active::before {
    background-color: ${({theme:e})=>e.colors.palette.primary[600]};
  }
`,qe=l.div`
  display: flex;
  flex: 1;
  min-width: 0;
`,ke=l.input`
  width: 100%;
  height: 32px;
  padding: ${({theme:e})=>e.spacing[3]};
  border: 1px solid ${({theme:e})=>e.colors.palette.neutral[500]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &::placeholder {
    color: ${({theme:e})=>e.colors.palette.neutral[500]};
  }

  &:focus {
    border-color: ${({theme:e})=>e.colors.semantic.focus.input};
  }
`,Ce=l.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`,pe=()=>t.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M12.667 7.333H12V5.333C12 3.493 10.507 2 8.667 2C6.827 2 5.333 3.493 5.333 5.333V7.333H4.667C4.113 7.333 3.667 7.78 3.667 8.333V13C3.667 13.553 4.113 14 4.667 14H12.667C13.22 14 13.667 13.553 13.667 13V8.333C13.667 7.78 13.22 7.333 12.667 7.333ZM8.667 11C8.113 11 7.667 10.553 7.667 10C7.667 9.447 8.113 9 8.667 9C9.22 9 9.667 9.447 9.667 10C9.667 10.553 9.22 11 8.667 11ZM10.533 7.333H6.8V5.333C6.8 4.3 7.633 3.467 8.667 3.467C9.7 3.467 10.533 4.3 10.533 5.333V7.333Z",fill:"currentColor"})}),fe=()=>t.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[t.jsx("rect",{x:"7.5",y:"4",width:"1",height:"8",rx:"0.5",fill:"currentColor"}),t.jsx("circle",{cx:"8",cy:"8",r:"1",fill:"currentColor"})]}),Ve=({label:e,variant:a="default",side:n="middle",sortable:r=!1,sortDirection:c="none",onSort:j,showCheckbox:g=!1,checked:q=!1,indeterminate:A=!1,onCheckChange:k,locked:p=!1,onLockToggle:v,leftOffset:C=0,isChildColumn:W=!1,resizable:x=!1,onResize:h,initialWidth:b,searchValue:I="",searchPlaceholder:d="Search",onSearchChange:B,align:Z="left",width:s,minWidth:y,maxWidth:w,className:Y,subHeader:V,subHeaderSpan:z=1,isFirstInGroup:f=!1,isLastInGroup:H=!1,colSpan:_,rowSpan:J})=>{const[L,P]=M.useState(!1),T=M.useRef(null),U=M.useRef(0),S=M.useRef(0),o=M.useRef(0),re=i=>{i.stopPropagation(),r&&j&&a!=="search"&&j()},le=i=>{k&&k(i.target.checked)},Q=i=>{i.stopPropagation(),v&&v()},G=i=>{B&&B(i.target.value)},D=i=>{i.preventDefault(),i.stopPropagation(),b&&h&&h(b)},N=i=>{i.preventDefault(),i.stopPropagation(),P(!0),U.current=i.clientX,s!==void 0?S.current=typeof s=="number"?s:parseInt(s,10):T.current&&(S.current=T.current.offsetWidth),o.current=S.current};ye.useEffect(()=>{if(!L)return;const i=ee=>{if(!T.current||!h)return;const u=ee.clientX-U.current,$=S.current+u,te=y?typeof y=="number"?y:parseInt(y,10):80,ae=w?typeof w=="number"?w:parseInt(w,10):1/0,E=Math.max(te,Math.min(ae,$));E===te&&$<te?document.body.style.cursor="w-resize":E===ae&&$>ae?document.body.style.cursor="e-resize":document.body.style.cursor="col-resize",E!==o.current&&(o.current=E,h(E))},O=()=>{P(!1),document.body.style.cursor=""};return document.addEventListener("mousemove",i),document.addEventListener("mouseup",O),()=>{document.removeEventListener("mousemove",i),document.removeEventListener("mouseup",O)}},[L,h,y,w]);const m=(a==="resizeable"||a==="resizeable-locked")&&x,F=a==="search";return t.jsxs(we,{ref:T,$align:Z,$sortable:r&&!F,$variant:a,$side:n,$resizable:x,$locked:p,$leftOffset:C,$sortDirection:c,$showCheckbox:g,$hasLabel:!!e,className:Y,"data-locked":p?"true":void 0,colSpan:_,rowSpan:J,style:s!==void 0?{width:typeof s=="number"?`${s}px`:s,minWidth:typeof s=="number"?`${s}px`:s,maxWidth:typeof s=="number"?`${s}px`:s}:void 0,children:[F?t.jsxs(oe,{$variant:a,children:[t.jsx(qe,{children:t.jsx(ke,{type:"text",value:I,placeholder:d,onChange:G,onClick:i=>i.stopPropagation()})}),t.jsxs(de,{children:[t.jsx(Ce,{children:r&&t.jsx(ce,{$direction:c,children:c==="asc"?t.jsx(se,{fontSize:"small"}):t.jsx(ie,{fontSize:"small"})})}),m&&t.jsx(ue,{onMouseDown:N,children:t.jsx(fe,{})})]})]}):t.jsxs(oe,{$variant:a,children:[t.jsxs(Te,{children:[g&&t.jsx($e,{children:t.jsx(xe,{checked:q,onChange:le,onClick:i=>i.stopPropagation()})}),r?t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"8px 4px",margin:"-8px -4px",flex:1,minWidth:0},onClick:re,children:[e&&(V?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative",minWidth:0},children:[f&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:f?"0":void 0,right:H?"0":void 0,width:f?`calc(${z*100}% + ${(z-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:V}),t.jsx(X,{style:{marginTop:f?"16px":"0"},children:e})]}):t.jsx(X,{children:e})),t.jsx(ce,{$direction:c,children:c==="asc"?t.jsx(se,{fontSize:"small"}):t.jsx(ie,{fontSize:"small"})})]}):t.jsx(t.Fragment,{children:e&&(V?t.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%",position:"relative",minWidth:0},children:[f&&t.jsx("div",{style:{position:"absolute",top:"-12px",left:f?"0":void 0,right:H?"0":void 0,width:f?`calc(${z*100}% + ${(z-1)*1}px)`:void 0,fontSize:"12px",fontWeight:500,textAlign:"center",paddingBottom:"4px",borderBottom:"1px solid",borderColor:"inherit"},children:V}),t.jsx(X,{style:{marginTop:f?"16px":"0"},children:e})]}):t.jsx(X,{children:e}))}),p&&!W&&!g&&(v?t.jsx("button",{onClick:Q,style:{background:"none",border:"none",padding:0,margin:"0 0 0 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#A5B4FC",transition:"color 0.2s"},onMouseEnter:i=>i.currentTarget.style.color="#818CF8",onMouseLeave:i=>i.currentTarget.style.color="#A5B4FC",title:"Unlock column",children:t.jsx(pe,{})}):t.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",margin:"0 0 0 8px",color:"#A5B4FC"},title:"Column is locked",children:t.jsx(pe,{})}))]}),m&&t.jsx(de,{children:t.jsx(ue,{onMouseDown:N,onDoubleClick:D,title:"Double-click to reset width",children:t.jsx(fe,{})})})]}),x&&t.jsx(je,{onMouseDown:N,onDoubleClick:D,title:"Double-click to reset width"})]})};Ve.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'locked' | 'resizeable' | 'resizeable-locked' | 'search'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'locked'"},{name:"literal",value:"'resizeable'"},{name:"literal",value:"'resizeable-locked'"},{name:"literal",value:"'search'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'middle' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLockToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},isChildColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},initialWidth:{required:!1,tsType:{name:"number"},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},subHeader:{required:!1,tsType:{name:"string"},description:""},subHeaderSpan:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},isFirstInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isLastInGroup:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},colSpan:{required:!1,tsType:{name:"number"},description:""},rowSpan:{required:!1,tsType:{name:"number"},description:""}}};const ze=l.td`
  background-color: ${({theme:e,$selected:a,$locked:n})=>n||a?e.colors.palette.primary[50]:e.colors.palette.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-left: ${({theme:e,$selected:a,$isFirst:n})=>a&&n?`2px solid ${e.colors.palette.primary[500]}`:"none"};
  padding: ${({theme:e})=>`${e.spacing[3]} ${e.spacing[7]}`};
  height: 72px;
  text-align: ${({$align:e})=>e||"left"};
  vertical-align: middle;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  box-sizing: border-box;
  overflow: hidden;
  
  ${({$locked:e,$leftOffset:a,theme:n})=>e?`
    position: sticky;
    left: ${a||0}px;
    z-index: 9;
    
    &.is-stuck {
      background-color: ${n.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `:""}
`,Se=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[7]};
  flex-wrap: nowrap;
  min-width: 0; /* Allow flex children to shrink below content size */
  overflow: hidden; /* Hide overflow content */
`,Re=l.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
  user-select: none;
`,Ae=l.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,We=l.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,Ie=l.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.colors.palette.neutral[300]};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  color: ${({theme:e})=>e.colors.palette.neutral[700]};
`,Le=l.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  min-width: 0; /* Allow shrinking */
  overflow: hidden; /* Hide overflow */
`,De=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Ne=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,ne=l.div`
  font-family: ${({theme:e})=>e.fonts.monospace};
  font-size: ${({theme:e})=>e.typography.code["regular-14"].fontSize};
  font-weight: ${({theme:e})=>e.typography.code["regular-14"].fontWeight};
  line-height: ${({theme:e})=>e.typography.code["regular-14"].lineHeight};
  letter-spacing: ${({theme:e})=>e.typography.code["regular-14"].letterSpacing};
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; /* Allow shrinking */
`,Ee=l(ne)`
  text-align: right;
`,Me=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; /* Allow shrinking */
`,me=l.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  min-width: 0; /* Allow shrinking */
`,Be=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-left: auto;
  flex-shrink: 0;
`,He=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"currentColor"})}),_e=()=>t.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:t.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"})}),Pe=({showCheckbox:e=!1,checked:a=!1,onCheckChange:n,showAvatar:r=!1,avatarSrc:c,avatarAlt:j="Avatar",showUserInfo:g=!1,userName:q,userRole:A,showNumber:k=!1,number:p,showAmount:v=!1,amount:C,showDate:W=!1,date:x,showText:h=!1,text:b,showBadge:I=!1,badgeLabel:d,badgeType:B="info",badgeStyle:Z="default",showChip:s=!1,chipLabel:y,chipType:w="default",chipVariant:Y="filled",onChipRemove:V,showButton:z=!1,buttonLabel:f="Button",onButtonClick:H,showEditAction:_=!1,onEdit:J,showDeleteAction:L=!1,onDelete:P,onClick:T,align:U="left",className:S,width:o,minWidth:re,maxWidth:le,selected:Q=!1,isFirstColumn:G=!1,locked:D=!1,leftOffset:N=0,children:m})=>{const F=u=>{u.stopPropagation(),n&&n(!a,u.shiftKey)},i=u=>u?u.split(" ").map($=>$[0]).join("").toUpperCase().slice(0,2):"?",O=u=>{if(typeof u=="number")return!0;if(typeof u=="string"){const $=u.replace(/[$,\s]/g,"");return/^\d+\.?\d*$/.test($)}return!1},ee=()=>m?typeof m=="string"||typeof m=="number"?O(m)?t.jsx(ne,{children:m}):t.jsx(me,{children:m}):m:null;return t.jsx(ze,{$align:U,$selected:Q,$isFirst:G,$locked:D,$leftOffset:N,className:S,"data-locked":D?"true":void 0,onClick:T,style:{cursor:T?"pointer":"default",...o!==void 0&&{width:typeof o=="number"?`${o}px`:o,minWidth:typeof o=="number"?`${o}px`:o,maxWidth:typeof o=="number"?`${o}px`:o}},children:t.jsxs(Se,{children:[e&&t.jsx(Re,{onClick:F,style:{cursor:"pointer"},children:t.jsx(xe,{checked:a,onChange:()=>{}})}),r&&t.jsx(Ae,{children:c?t.jsx(We,{src:c,alt:j}):t.jsx(Ie,{children:i(q)})}),g&&t.jsxs(Le,{children:[q&&t.jsx(De,{children:q}),A&&t.jsx(Ne,{children:A})]}),k&&p&&t.jsx(ne,{children:p}),v&&C&&t.jsx(Ee,{children:C}),W&&x&&t.jsx(Me,{children:x}),h&&b&&t.jsx(me,{children:b}),I&&d&&t.jsx(ve,{label:d,type:B,styleVariant:Z}),s&&y&&t.jsx(be,{label:y,type:w,variant:Y,onRemove:V}),z&&t.jsx(R,{variant:"secondary",size:"small",onClick:H,children:f}),(_||L)&&t.jsxs(Be,{children:[_&&t.jsx(R,{onClick:J,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(He,{}),children:"Edit"}),L&&t.jsx(R,{onClick:P,variant:"secondary",size:"small",showLabel:!1,leadingIcon:t.jsx(_e,{}),children:"Delete"})]}),ee()]})})};Pe.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean, shiftKey?: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"},{type:{name:"boolean"},name:"shiftKey"}],return:{name:"void"}}},description:""},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},showUserInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},showNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},number:{required:!1,tsType:{name:"string"},description:""},showAmount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},amount:{required:!1,tsType:{name:"string"},description:""},showDate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},showBadge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},badgeType:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},badgeStyle:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showChip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipLabel:{required:!1,tsType:{name:"string"},description:""},chipType:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},chipVariant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},onChipRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showEditAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showDeleteAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLTableCellElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLTableCellElement>",elements:[{name:"HTMLTableCellElement"}]},name:"event"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFirstColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const ge=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  margin-bottom: 0;
`,Ue=l.h2`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:r.primary)||"#111827"}};
  margin: 0;
`,Fe=l.div`
  display: flex;
  align-items: center;
  gap: 20px;
`,Oe=l.select`
  padding: 8px 32px 8px 12px;
  border: 1px solid ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:r[400])||"#b1b1b1"}};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:r.primary)||"#111827"}};
  background: #ffffff;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%23666666' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.primary)==null?void 0:r[500])||"#3b82f6"}};
  }
`,Ke=l.div`
  position: relative;
  display: flex;
  align-items: center;
`,Xe=l.input`
  padding: 8px 12px 8px 36px;
  border: 1px solid ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:r[300])||"#d1d5db"}};
  border-radius: 4px;
  font-size: 14px;
  font-family: 'Elevance Sans', sans-serif;
  color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:r.primary)||"#111827"}};
  background: #ffffff;
  width: 300px;
  
  &::placeholder {
    color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:r[500])||"#6b7280"}};
  }
  
  &:focus {
    outline: none;
    border-color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.primary)==null?void 0:r[500])||"#3b82f6"}};
  }
`,Ze=l.div`
  position: absolute;
  left: 12px;
  display: flex;
  align-items: center;
  pointer-events: none;
  color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.palette)==null?void 0:n.neutral)==null?void 0:r[500])||"#6b7280"}};
`,Ye=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>{var a;return((a=e.spacing)==null?void 0:a[5])||"12px"}};
  ${({$align:e})=>e==="right"?"margin-left: auto;":e==="center"?"margin: 0 auto;":""}
`,Je=l.h2`
  font-family: ${({theme:e})=>{var a;return((a=e.fonts)==null?void 0:a.primary)||"Elevance Sans, sans-serif"}};
  font-size: ${({theme:e})=>{var a;return((a=e.fontSizes)==null?void 0:a[20])||"20px"}};
  font-weight: ${({theme:e})=>{var a;return((a=e.fontWeights)==null?void 0:a.semibold)||600}};
  color: ${({theme:e})=>{var a,n,r;return((r=(n=(a=e.colors)==null?void 0:a.semantic)==null?void 0:n.text)==null?void 0:r.primary)||"#111827"}};
  margin: 0;
`,Qe=l.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>{var a;return((a=e.spacing)==null?void 0:a[5])||"12px"}};
`,Ge=({align:e="left",children:a,className:n})=>t.jsx(Ye,{$align:e,className:n,children:a}),et=({children:e,className:a})=>t.jsx(Je,{className:a,children:e}),tt=({children:e,className:a})=>t.jsx(Qe,{className:a,children:e}),at=({children:e,className:a,title:n,showDropdown:r=!1,dropdownOptions:c=[],dropdownValue:j,onDropdownChange:g,dropdownLabel:q="Select",showGlobalSearch:A=!1,globalSearchValue:k="",onGlobalSearchChange:p,globalSearchPlaceholder:v="Search...",showDownload:C=!0,onDownload:W,showFilter:x=!0,onFilter:h,showSettings:b=!0,onSettingsClick:I})=>e?t.jsx(ge,{className:a,children:e}):t.jsxs(ge,{className:a,children:[n&&t.jsx(Ue,{children:n}),t.jsxs(Fe,{children:[A&&t.jsxs(Ke,{children:[t.jsx(Ze,{children:t.jsx(K,{name:"Search",size:"small"})}),t.jsx(Xe,{type:"text",value:k,onChange:d=>p==null?void 0:p(d.target.value),placeholder:v})]}),r&&c.length>0&&t.jsx(Oe,{value:j,onChange:d=>g==null?void 0:g(d.target.value),children:c.map(d=>t.jsx("option",{value:d.value,children:d.label},d.value))}),C&&t.jsx(R,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(K,{name:"Download",size:"medium"}),onClick:W,"aria-label":"Download",children:"Download"}),x&&t.jsx(R,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(K,{name:"FilterAlt",size:"medium"}),onClick:h,"aria-label":"Filter",children:"Filter"}),b&&t.jsx(R,{variant:"secondary",size:"medium",showLabel:!1,leadingIcon:t.jsx(K,{name:"Settings",size:"medium"}),onClick:I,"aria-label":"Settings",children:"Settings"})]})]});Ge.__docgenInfo={description:"",methods:[],displayName:"TableToolbarSection",props:{align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};et.__docgenInfo={description:"",methods:[],displayName:"TableToolbarTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};tt.__docgenInfo={description:"",methods:[],displayName:"TableToolbarActions",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};at.__docgenInfo={description:"",methods:[],displayName:"TableToolbar",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom children - when provided, renders custom content instead of default toolbar"},className:{required:!1,tsType:{name:"string"},description:"Custom className"},title:{required:!1,tsType:{name:"string"},description:"Table title"},showDropdown:{required:!1,tsType:{name:"boolean"},description:"Show dropdown selector",defaultValue:{value:"false",computed:!1}},dropdownOptions:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"Dropdown options",defaultValue:{value:"[]",computed:!1}},dropdownValue:{required:!1,tsType:{name:"string"},description:"Selected dropdown value"},onDropdownChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Dropdown change handler"},dropdownLabel:{required:!1,tsType:{name:"string"},description:"Dropdown placeholder/label",defaultValue:{value:"'Select'",computed:!1}},showGlobalSearch:{required:!1,tsType:{name:"boolean"},description:"Show global search",defaultValue:{value:"false",computed:!1}},globalSearchValue:{required:!1,tsType:{name:"string"},description:"Global search value",defaultValue:{value:"''",computed:!1}},onGlobalSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Global search change handler"},globalSearchPlaceholder:{required:!1,tsType:{name:"string"},description:"Global search placeholder",defaultValue:{value:"'Search...'",computed:!1}},showDownload:{required:!1,tsType:{name:"boolean"},description:"Show download button",defaultValue:{value:"true",computed:!1}},onDownload:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Download handler"},showFilter:{required:!1,tsType:{name:"boolean"},description:"Show filter button",defaultValue:{value:"true",computed:!1}},onFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Filter handler"},showSettings:{required:!1,tsType:{name:"boolean"},description:"Show settings button",defaultValue:{value:"true",computed:!1}},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settings click handler"}}};export{at as T,Ve as a,Pe as b,Ge as c,et as d,tt as e};
