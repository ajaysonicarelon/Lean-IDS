import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{r as m,R as te}from"./index-B0WjJBI_.js";import{c as t}from"./styled-components.browser.esm-BIi91Tbq.js";import{C as F}from"./Checkbox-BdmLAclb.js";import{B as ne}from"./Badge-BnocszLR.js";import{C as le}from"./Chip-DQ4w4BrW.js";import{B as w}from"./Button-DO4HjNMh.js";import{I as U}from"./Icon-BytZhcyh.js";import{I as re}from"./InlineMessage-Bi8bYhwz.js";const se=t.th`
  background-color: ${({theme:e})=>e.colors.palette.primary[50]};
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
  
  ${({$side:e})=>e==="left"?"border-top-left-radius: 8px;":e==="right"?"border-top-right-radius: 8px;":""}

  ${({$locked:e,$leftOffset:n,theme:s})=>e?`
    position: sticky;
    left: ${n||0}px;
    z-index: 10;
    transition: background-color 0.2s ease, box-shadow 0.2s ease;
    
    &.is-stuck {
      background-color: ${s.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `:""}

  &:hover {
    background-color: ${({theme:e,$sortable:n})=>n?e.colors.palette.primary[100]:e.colors.palette.primary[50]};
  }
`,P=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  width: 100%;
  ${({$variant:e})=>e==="search"?"justify-content: space-between;":""}
`,ie=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[3]};
  flex: 1;
  min-width: 0;
`,_=t.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
  margin-left: auto;
`,Z=t.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  transform: ${({$direction:e})=>e==="desc"?"rotate(180deg)":"none"};
  opacity: ${({$direction:e})=>e==="none"?.3:1};
  transition: all 0.2s ease-in-out;

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
`,oe=t.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,X=t.div`
  display: inline-flex;
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
`,de=t.div`
  display: flex;
  flex: 1;
  min-width: 0;
`,ce=t.input`
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
`,ue=t.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`,Y=()=>a.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M8 11L4 7H12L8 11Z",fill:"currentColor"})}),pe=()=>a.jsx("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M12.667 7.333H12V5.333C12 3.493 10.507 2 8.667 2C6.827 2 5.333 3.493 5.333 5.333V7.333H4.667C4.113 7.333 3.667 7.78 3.667 8.333V13C3.667 13.553 4.113 14 4.667 14H12.667C13.22 14 13.667 13.553 13.667 13V8.333C13.667 7.78 13.22 7.333 12.667 7.333ZM8.667 11C8.113 11 7.667 10.553 7.667 10C7.667 9.447 8.113 9 8.667 9C9.22 9 9.667 9.447 9.667 10C9.667 10.553 9.22 11 8.667 11ZM10.533 7.333H6.8V5.333C6.8 4.3 7.633 3.467 8.667 3.467C9.7 3.467 10.533 4.3 10.533 5.333V7.333Z",fill:"currentColor"})}),G=()=>a.jsxs("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{x:"7.5",y:"4",width:"1",height:"8",rx:"0.5",fill:"currentColor"}),a.jsx("circle",{cx:"8",cy:"8",r:"1",fill:"currentColor"})]}),fe=({label:e,variant:n="default",side:s="middle",sortable:g=!1,sortDirection:h="none",onSort:$,showCheckbox:c=!1,checked:u=!1,indeterminate:p=!1,onCheckChange:x,locked:y=!1,onLockToggle:f,leftOffset:k=0,resizable:C=!1,onResize:v,searchValue:z="",searchPlaceholder:T="Search",onSearchChange:j,align:b="left",width:S,className:l})=>{const[i,d]=m.useState(!1),o=m.useRef(null),q=m.useRef(0),V=m.useRef(0),I=()=>{g&&$&&n!=="search"&&$()},H=r=>{x&&x(r.target.checked)},E=r=>{r.stopPropagation(),f&&f()},M=r=>{j&&j(r.target.value)},R=r=>{r.preventDefault(),r.stopPropagation(),d(!0),q.current=r.clientX,o.current&&(V.current=o.current.offsetWidth)};te.useEffect(()=>{if(!i)return;const r=O=>{if(!o.current||!v)return;const N=O.clientX-q.current,B=V.current+N;v(Math.max(50,B))},W=()=>{d(!1)};return document.addEventListener("mousemove",r),document.addEventListener("mouseup",W),()=>{document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",W)}},[i,v]);const L=(n==="resizeable"||n==="resizeable-locked")&&C,D=n==="search";return a.jsx(se,{ref:o,$align:b,$sortable:g&&!D,$variant:n,$side:s,$resizable:C,$locked:y,$leftOffset:k,onClick:I,style:{width:S},className:l,"data-locked":y?"true":void 0,children:D?a.jsxs(P,{$variant:n,children:[a.jsx(de,{children:a.jsx(ce,{type:"text",value:z,placeholder:T,onChange:M,onClick:r=>r.stopPropagation()})}),a.jsxs(_,{children:[a.jsx(ue,{children:g&&a.jsx(Z,{$direction:h,children:a.jsx(Y,{})})}),L&&a.jsx(X,{onMouseDown:R,children:a.jsx(G,{})})]})]}):a.jsxs(P,{$variant:n,children:[a.jsxs(ie,{children:[c&&a.jsx(oe,{children:a.jsx(F,{checked:u,onChange:H,onClick:r=>r.stopPropagation()})}),a.jsx("span",{children:e}),g&&a.jsx(Z,{$direction:h,children:a.jsx(Y,{})}),y&&f&&a.jsx("button",{onClick:E,style:{background:"none",border:"none",padding:0,margin:"0 0 0 8px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",width:"16px",height:"16px",color:"#A5B4FC",transition:"color 0.2s"},onMouseEnter:r=>r.currentTarget.style.color="#818CF8",onMouseLeave:r=>r.currentTarget.style.color="#A5B4FC",title:"Unlock column",children:a.jsx(pe,{})})]}),L&&a.jsx(_,{children:a.jsx(X,{onMouseDown:R,children:a.jsx(G,{})})})]})})};fe.__docgenInfo={description:"",methods:[],displayName:"TableHeader",props:{label:{required:!0,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'locked' | 'resizeable' | 'resizeable-locked' | 'search'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'locked'"},{name:"literal",value:"'resizeable'"},{name:"literal",value:"'resizeable-locked'"},{name:"literal",value:"'search'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'left' | 'middle' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'middle'",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onLockToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},resizable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onResize:{required:!1,tsType:{name:"signature",type:"function",raw:"(width: number) => void",signature:{arguments:[{type:{name:"number"},name:"width"}],return:{name:"void"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},searchValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Search'",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const me=t.td`
  background-color: ${({theme:e,$selected:n,$locked:s})=>s||n?e.colors.palette.primary[50]:e.colors.palette.neutral[50]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
  border-left: ${({theme:e,$selected:n,$isFirst:s})=>n&&s?`2px solid ${e.colors.palette.primary[500]}`:"none"};
  padding: ${({theme:e,$selected:n,$isFirst:s})=>n&&s?`${e.spacing[3]} ${e.spacing[7]} ${e.spacing[3]} calc(${e.spacing[7]} - 2px)`:`${e.spacing[3]} ${e.spacing[7]}`};
  height: 72px;
  text-align: ${({$align:e})=>e||"left"};
  vertical-align: middle;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
  
  ${({$locked:e,$leftOffset:n,theme:s})=>e?`
    position: sticky;
    left: ${n||0}px;
    z-index: 9;
    
    &.is-stuck {
      background-color: ${s.colors.palette.primary[50]};
      box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.05);
    }
  `:""}
`,ge=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[7]};
  flex-wrap: nowrap;
`,he=t.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,xe=t.div`
  display: inline-flex;
  align-items: center;
  flex-shrink: 0;
`,ye=t.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`,ve=t.div`
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
`,be=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[1]};
  flex-shrink: 0;
`,we=t.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.semibold};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
`,$e=t.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[12]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 14px;
  letter-spacing: 1px;
  color: ${({theme:e})=>e.colors.palette.neutral[600]};
  white-space: nowrap;
`,J=t.div`
  font-family: 'Roboto Mono', monospace;
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: ${({theme:e})=>e.colors.palette.neutral[900]};
  white-space: nowrap;
  flex-shrink: 0;
`,ke=t(J)`
  text-align: right;
`,Ce=t.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`,Te=t.div`
  font-family: ${({theme:e})=>e.fonts.primary};
  font-size: ${({theme:e})=>e.fontSizes[14]};
  font-weight: ${({theme:e})=>e.fontWeights.medium};
  line-height: 16px;
  color: ${({theme:e})=>e.colors.palette.neutral[800]};
  white-space: nowrap;
  flex-shrink: 0;
`,je=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[2]};
  margin-left: auto;
  flex-shrink: 0;
`,qe=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z",fill:"currentColor"})}),Ve=()=>a.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z",fill:"currentColor"})}),ze=({showCheckbox:e=!1,checked:n=!1,onCheckChange:s,showAvatar:g=!1,avatarSrc:h,avatarAlt:$="Avatar",showUserInfo:c=!1,userName:u,userRole:p,showNumber:x=!1,number:y,showAmount:f=!1,amount:k,showDate:C=!1,date:v,showText:z=!1,text:T,showBadge:j=!1,badgeLabel:b,badgeType:S="info",badgeStyle:l="default",showChip:i=!1,chipLabel:d,chipType:o="primary",chipVariant:q="filled",onChipRemove:V,showButton:I=!1,buttonLabel:H="Button",onButtonClick:E,showEditAction:M=!1,onEdit:R,showDeleteAction:L=!1,onDelete:D,align:r="left",className:W,selected:O=!1,isFirstColumn:N=!1,locked:B=!1,leftOffset:K=0})=>{const Q=A=>{s&&s(A.target.checked)},ee=A=>A?A.split(" ").map(ae=>ae[0]).join("").toUpperCase().slice(0,2):"?";return a.jsx(me,{$align:r,$selected:O,$isFirst:N,$locked:B,$leftOffset:K,className:W,"data-locked":B?"true":void 0,children:a.jsxs(ge,{children:[e&&a.jsx(he,{children:a.jsx(F,{checked:n,onChange:Q})}),g&&a.jsx(xe,{children:h?a.jsx(ye,{src:h,alt:$}):a.jsx(ve,{children:ee(u)})}),c&&a.jsxs(be,{children:[u&&a.jsx(we,{children:u}),p&&a.jsx($e,{children:p})]}),x&&y&&a.jsx(J,{children:y}),f&&k&&a.jsx(ke,{children:k}),C&&v&&a.jsx(Ce,{children:v}),z&&T&&a.jsx(Te,{children:T}),j&&b&&a.jsx(ne,{label:b,type:S,style:l}),i&&d&&a.jsx(le,{label:d,type:o,variant:q,onRemove:V}),I&&a.jsx(w,{variant:"secondary",size:"small",onClick:E,children:H}),(M||L)&&a.jsxs(je,{children:[M&&a.jsx(w,{onClick:R,variant:"secondary",size:"small",showLabel:!1,leadingIcon:a.jsx(qe,{}),children:"Edit"}),L&&a.jsx(w,{onClick:D,variant:"secondary",size:"small",showLabel:!1,leadingIcon:a.jsx(Ve,{}),children:"Delete"})]})]})})};ze.__docgenInfo={description:"",methods:[],displayName:"TableCell",props:{showCheckbox:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onCheckChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},showAvatar:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Avatar'",computed:!1}},showUserInfo:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},userName:{required:!1,tsType:{name:"string"},description:""},userRole:{required:!1,tsType:{name:"string"},description:""},showNumber:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},number:{required:!1,tsType:{name:"string"},description:""},showAmount:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},amount:{required:!1,tsType:{name:"string"},description:""},showDate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},date:{required:!1,tsType:{name:"string"},description:""},showText:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},text:{required:!1,tsType:{name:"string"},description:""},showBadge:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},badgeLabel:{required:!1,tsType:{name:"string"},description:""},badgeType:{required:!1,tsType:{name:"union",raw:"'info' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},badgeStyle:{required:!1,tsType:{name:"union",raw:"'default' | 'subdued' | 'outlined'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'subdued'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},showChip:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},chipLabel:{required:!1,tsType:{name:"string"},description:""},chipType:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'error' | 'neutral'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'neutral'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},chipVariant:{required:!1,tsType:{name:"union",raw:"'filled' | 'outlined'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'filled'",computed:!1}},onChipRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},buttonLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Button'",computed:!1}},onButtonClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showEditAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showDeleteAction:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isFirstColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},locked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leftOffset:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const Se=t.div`
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
`,Ie=t.div`
  background-color: ${({theme:e})=>e.colors.palette.neutral[50]};
  border-radius: ${({theme:e})=>e.borderRadius.md};
  width: 400px;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
`,Le=t.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:e})=>e.spacing[7]};
  border-bottom: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,Me=t.h3`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
  margin: 0;
`;t.button`
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
`;const Re=t.div`
  flex: 1;
  overflow-y: auto;
  padding: ${({theme:e})=>e.spacing[7]};
`,De=t.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:e})=>e.spacing[3]};
`,We=t.div`
  display: flex;
  align-items: center;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[4]};
  background-color: ${({theme:e,$isDragging:n,$isLocked:s})=>s?e.colors.palette.primary[50]:n?e.colors.palette.neutral[100]:e.colors.palette.neutral[50]};
  border: 1px solid ${({theme:e,$isLocked:n})=>n?e.colors.palette.primary[200]:e.colors.palette.neutral[300]};
  border-radius: ${({theme:e})=>e.borderRadius.sm};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"move"};
  transition: all 0.2s;
  opacity: ${({$isLocked:e})=>e?.7:1};
  
  &:hover {
    background-color: ${({theme:e,$isLocked:n})=>n?e.colors.palette.primary[50]:e.colors.palette.neutral[100]};
    border-color: ${({theme:e,$isLocked:n})=>n?e.colors.palette.primary[200]:e.colors.palette.neutral[400]};
  }
`,Be=t.div`
  display: flex;
  align-items: center;
  color: ${({theme:e,$isLocked:n})=>n?e.colors.palette.neutral[400]:e.colors.palette.neutral[600]};
  cursor: ${({$isLocked:e})=>e?"not-allowed":"grab"};
  opacity: ${({$isLocked:e})=>e?.5:1};
  
  &:active {
    cursor: ${({$isLocked:e})=>e?"not-allowed":"grabbing"};
  }
`,Ae=t.span`
  flex: 1;
  font-family: ${({theme:e})=>e.typography.paragraph.medium.fontFamily};
  font-size: ${({theme:e})=>e.typography.paragraph.medium.fontSize};
  font-weight: ${({theme:e})=>e.typography.paragraph.medium.fontWeight};
  line-height: ${({theme:e})=>e.typography.paragraph.medium.lineHeight};
  color: ${({theme:e})=>e.colors.palette.neutral[1e3]};
`,He=t.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: ${({theme:e})=>e.spacing[5]};
  padding: ${({theme:e})=>e.spacing[7]};
  border-top: 1px solid ${({theme:e})=>e.colors.palette.neutral[300]};
`,Ee=({isOpen:e,onClose:n,columns:s,onColumnsChange:g,lockWarning:h,className:$})=>{const[c,u]=m.useState(s),[p,x]=m.useState(null),[y,f]=m.useState(!1);m.useEffect(()=>{u(s)},[s]),m.useEffect(()=>{if(h){f(!0);const l=setTimeout(()=>f(!1),3e3);return()=>clearTimeout(l)}},[h]);const k=l=>{u(c.map(i=>i.id===l?{...i,visible:!i.visible}:i))},C=l=>{const i=c.find(o=>o.id===l);if(!i)return;const d=c.filter(o=>o.locked&&o.id!=="checkbox").length;if(!i.locked&&d>=3){f(!0),setTimeout(()=>f(!1),3e3);return}u(c.map(o=>o.id===l?{...o,locked:!o.locked}:o))},v=l=>{c[l].locked||x(l)},z=(l,i)=>{if(l.preventDefault(),p===null||p===i||c[i].locked||c[p].locked)return;const d=[...c],o=d[p];d.splice(p,1),d.splice(i,0,o);const q=d.map((V,I)=>({...V,order:I}));u(q),x(i)},T=()=>{x(null)},j=()=>{g(c),n()},b=()=>{u(s),n()},S=l=>{l.target===l.currentTarget&&b()};return a.jsx(Se,{$isOpen:e,onClick:S,children:a.jsxs(Ie,{className:$,children:[a.jsxs(Le,{children:[a.jsx(Me,{children:"Table Settings"}),a.jsx(w,{onClick:b,variant:"secondary",size:"small",showLabel:!1,leadingIcon:a.jsx(U,{name:"Close",size:"small"}),children:"Close"})]}),a.jsxs(Re,{children:[y&&a.jsx("div",{style:{marginBottom:"16px"},children:a.jsx(re,{type:"warning",style:"accentBorder",text:"Maximum columns reached",descriptionText:"You can only freeze any 3 columns at a time.",showLeadingIcon:!0,showTrailingIcon:!1,action:!1,link:!1})}),a.jsx(De,{children:c.map((l,i)=>a.jsxs(We,{draggable:!l.locked,onDragStart:()=>v(i),onDragOver:d=>z(d,i),onDragEnd:T,$isDragging:p===i,$isLocked:l.locked,children:[a.jsx(Be,{$isLocked:l.locked,children:a.jsx(U,{name:"DragIndicator",size:"small"})}),a.jsx(F,{checked:l.visible,onChange:()=>k(l.id)}),a.jsx(Ae,{children:l.label}),a.jsx(w,{onClick:()=>C(l.id),variant:"secondary",size:"small",showLabel:!1,leadingIcon:a.jsx(U,{name:l.locked?"Lock":"LockOpen",size:"small"}),disabled:!l.locked&&c.filter(d=>d.locked&&d.id!=="checkbox").length>=3,children:l.locked?"Unlock":"Lock"})]},l.id))})]}),a.jsxs(He,{children:[a.jsx(w,{onClick:b,variant:"secondary",children:"Cancel"}),a.jsx(w,{variant:"primary",onClick:j,children:"Apply Changes"})]})]})})};Ee.__docgenInfo={description:"",methods:[],displayName:"TableSettings",props:{isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the settings modal is open"},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when modal is closed"},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},description:"Array of column configurations"},onColumnsChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(columns: ColumnConfig[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"ColumnConfig"}],raw:"ColumnConfig[]"},name:"columns"}],return:{name:"void"}}},description:"Callback when columns are updated"},lockWarning:{required:!1,tsType:{name:"boolean"},description:"Whether to show lock warning"},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};export{ze as T,fe as a,Ee as b};
