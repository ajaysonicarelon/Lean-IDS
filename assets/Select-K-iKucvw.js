import{j as a}from"./jsx-runtime-DSvmvvsx.js";import{r as u}from"./index-B0WjJBI_.js";import{c as l}from"./styled-components.browser.esm-BIi91Tbq.js";import{I as j}from"./InputField-BAALJcA9.js";import{C as $}from"./Checkbox-BdmLAclb.js";import{R as L}from"./RadioButton-BNSL-Rly.js";import{I as v}from"./Icon-BytZhcyh.js";import{H as O}from"./HelpingText-ClsYb8vx.js";import{F as R}from"./FieldImportance-finWzFXd.js";const C=l.div`
  position: relative;
  width: 100%;
`,N=l.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 300px;
  background: #ffffff;
  border: 1px solid #D5D5D5;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;
  display: ${({$isOpen:s})=>s?"block":"none"};
`,W=l.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  cursor: ${({$disabled:s})=>s?"not-allowed":"pointer"};
  background: ${({$selected:s})=>s?"#F8F7FB":"#ffffff"};
  opacity: ${({$disabled:s})=>s?.5:1};
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: ${({$selected:s})=>s?500:400};
  color: #222222;
  transition: background 0.2s;

  &:hover {
    background: ${({$disabled:s})=>s?"#ffffff":"#F5F5F5"};
  }
`,H=l.div`
  padding: 20px;
  text-align: center;
  color: #909090;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
`,P=l.div`
  padding: 8px 8px 8px 8px;
  border-bottom: 1px solid #E5E5E5;
  background: #ffffff;
  
  /* Ensure the input field inside doesn't overflow */
  & > div {
    width: 100%;
  }
`,B=l.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 4px;
`,Q=l.label`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`,_=({label:s,placeholder:T="Placeholder",options:o=[],value:r,onChange:n,multiple:d=!1,searchable:y=!1,showLeadingIcon:q=!0,showTrailingIcon:E=!0,required:I=!1,disabled:i=!1,error:b=!1,helperText:w="Default helping message",size:k="default",className:z})=>{const[f,c]=u.useState(!1),[p,m]=u.useState(""),x=u.useRef(null),F=()=>{if(!r)return"";if(d&&Array.isArray(r)){if(r.length===0)return"";if(r.length===1){const t=o.find(h=>h.value===r[0]);return(t==null?void 0:t.label)||""}return`${r.length} selected`}const e=o.find(t=>t.value===r);return(e==null?void 0:e.label)||""},S=y&&p?o.filter(e=>e.label.toLowerCase().includes(p.toLowerCase())):o,V=e=>{if(!i)if(d){const t=Array.isArray(r)?r:[],h=t.includes(e)?t.filter(D=>D!==e):[...t,e];n==null||n(h)}else n==null||n(e),c(!1),m("")},g=e=>d&&Array.isArray(r)?r.includes(e):r===e;u.useEffect(()=>{const e=t=>{x.current&&!x.current.contains(t.target)&&(c(!1),m(""))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const A=F();return a.jsxs(C,{ref:x,className:z,children:[a.jsxs(B,{children:[a.jsx(Q,{children:s}),I&&a.jsx(R,{variant:"asterisk",style:"normal"})]}),a.jsx("div",{onClick:()=>!i&&c(!f),children:a.jsx(j,{value:A,placeholder:T,disabled:i,error:b,size:k,fullWidth:!0,leadingIcon:q?a.jsx(v,{name:"Search",size:"small"}):void 0,trailingIcon:E?a.jsx(v,{name:f?"ExpandLess":"ExpandMore",size:"small"}):void 0,onKeyDown:e=>e.preventDefault(),onFocus:e=>e.target.blur(),style:{cursor:i?"not-allowed":"pointer"}})}),a.jsxs(N,{$isOpen:f&&!i,children:[y&&a.jsx(P,{children:a.jsx(j,{value:p,onChange:e=>m(e.target.value),placeholder:"Search...",size:"small",fullWidth:!0,leadingIcon:a.jsx(v,{name:"Search",size:"small"}),autoFocus:!0})}),S.length===0?a.jsx(H,{children:"No options found"}):S.map(e=>a.jsxs(W,{$selected:g(e.value),$disabled:!!e.disabled,onClick:()=>!e.disabled&&V(e.value),children:[d?a.jsx($,{checked:g(e.value),disabled:e.disabled,size:"default",onChange:()=>{}}):a.jsx(L,{checked:g(e.value),disabled:e.disabled,size:"default",onChange:()=>{}}),a.jsx("span",{children:e.label})]},e.value))]}),w&&a.jsx("div",{style:{marginTop:"4px"},children:a.jsx(O,{text:w,state:b?"error":"default",showIcon:!0,size:"default"})})]})};_.__docgenInfo={description:"",methods:[],displayName:"Select",props:{label:{required:!0,tsType:{name:"string"},description:"Field label"},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Placeholder'",computed:!1}},options:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"Array of options",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Selected value(s)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"Change handler"},multiple:{required:!1,tsType:{name:"boolean"},description:"Enable multiple selection",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"Enable search/filter",defaultValue:{value:"false",computed:!1}},showLeadingIcon:{required:!1,tsType:{name:"boolean"},description:"Show leading search icon",defaultValue:{value:"true",computed:!1}},showTrailingIcon:{required:!1,tsType:{name:"boolean"},description:"Show trailing dropdown icon",defaultValue:{value:"true",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Required field",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"boolean"},description:"Error state",defaultValue:{value:"false",computed:!1}},helperText:{required:!1,tsType:{name:"string"},description:"Helper text",defaultValue:{value:"'Default helping message'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'default' | 'large'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'default'"},{name:"literal",value:"'large'"}]},description:"Size",defaultValue:{value:"'default'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom className"}}};export{_ as S};
