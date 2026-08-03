import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as p,R as Ve}from"./index-B0WjJBI_.js";import{f as d,g as O}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as t}from"./Typography-DlcmwxwF.js";import{H as s}from"./Home-l5wlLBdJ.js";import{c as le}from"./createSvgIcon-B7ekv6yR.js";import{S as y}from"./Search-3OWEky2d.js";import"./_commonjsHelpers-CqkleIqs.js";const j=le(e.jsx("path",{d:"M22 11h-4.17l3.24-3.24-1.41-1.42L15 11h-2V9l4.66-4.66-1.42-1.41L13 6.17V2h-2v4.17L7.76 2.93 6.34 4.34 11 9v2H9L4.34 6.34 2.93 7.76 6.17 11H2v2h4.17l-3.24 3.24 1.41 1.42L9 13h2v2l-4.66 4.66 1.42 1.41L11 17.83V22h2v-4.17l3.24 3.24 1.42-1.41L13 15v-2h2l4.66 4.66 1.41-1.42L17.83 13H22z"})),o=le(e.jsx("path",{d:"M6.36 18.78 6.61 21l1.62-1.54 2.77-7.6c-.68-.17-1.28-.51-1.77-.98zm8.41-7.9c-.49.47-1.1.81-1.77.98l2.77 7.6L17.39 21l.26-2.22zM15 8c0-1.3-.84-2.4-2-2.82V3h-2v2.18C9.84 5.6 9 6.7 9 8c0 1.66 1.34 3 3 3s3-1.34 3-3m-3 1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1"})),v=le(e.jsx("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"})),Re=a=>{switch(a){case"small":return d`
        padding: ${({theme:l})=>l.spacing[1]} ${({theme:l})=>l.spacing[3]};
        gap: ${({theme:l})=>l.spacing[1]};
        border-radius: ${({theme:l})=>l.borderRadius.sm};
      `;case"medium":return d`
        padding: ${({theme:l})=>l.spacing[2]} ${({theme:l})=>l.spacing[4]};
        gap: ${({theme:l})=>l.spacing[3]};
        border-radius: ${({theme:l})=>l.borderRadius.sm};
      `;case"large":return d`
        padding: ${({theme:l})=>l.spacing[3]} ${({theme:l})=>l.spacing[5]};
        gap: ${({theme:l})=>l.spacing[3]};
        border-radius: ${({theme:l})=>l.borderRadius.md};
      `}},Ge=O.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  cursor: ${({$disabled:a})=>a?"not-allowed":"pointer"};
  transition: all 0.2s ease-in-out;
  outline: none;
  position: relative;
  
  ${({$size:a})=>Re(a)}

  ${({$selected:a,$disabled:l,theme:i})=>l?d`
        opacity: 1;
        pointer-events: none;
      `:a?d`
        background: ${i.colors.palette.neutral[50]};
        box-shadow: ${i.shadows.xs};
      `:d`
      background: transparent;
    `}

  &:hover:not(:disabled) {
    ${({$selected:a,theme:l})=>!a&&d`
        background: ${l.colors.palette.primary[100]};
      `}
  }

  &:focus-visible {
    outline: 2px solid ${({theme:a})=>a.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    ${({$selected:a,theme:l})=>!a&&d`
        background: ${l.colors.palette.primary[200]};
      `}
  }
`,qe=O.span`
  ${({$selected:a,$disabled:l,theme:i})=>l?d`
        color: ${i.colors.palette.neutral[500]};
      `:a?d`
        color: ${i.colors.palette.primary[500]};
      `:d`
      color: ${i.colors.palette.neutral[900]};
    `}
`,re=O.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  ${({$selected:a,$disabled:l,theme:i})=>l?d`
        color: ${i.colors.palette.neutral[500]};
      `:a?d`
        color: ${i.colors.palette.primary[500]};
      `:d`
      color: ${i.colors.palette.neutral[900]};
    `}
  
  svg {
    width: 1em;
    height: 1em;
  }
`,ee=a=>{if(a!==void 0)return typeof a=="number"?`${a}px`:a},Oe=O.div`
  display: flex;
  flex-direction: ${({$orientation:a})=>a==="vertical"?"column":"row"};
  gap: ${({$orientation:a,theme:l})=>a==="vertical"?l.spacing[2]:l.spacing[1]};
  padding: ${({theme:a})=>a.spacing[1]};
  background: ${({theme:a})=>a.colors.palette.primary[100]};
  border-radius: ${({theme:a})=>a.borderRadius.lg};
  position: relative;
  
  /* Width controls */
  width: ${({$width:a})=>ee(a)||"fit-content"};
  min-width: ${({$minWidth:a})=>ee(a)||"auto"};
  max-width: ${({$maxWidth:a})=>ee(a)||"none"};
  
  /* Overflow handling with horizontal scroll */
  ${({$orientation:a})=>a==="horizontal"?d`
          overflow-x: auto;
          overflow-y: hidden;
          
          /* Smooth scrolling */
          scroll-behavior: smooth;
          
          /* Hide scrollbar for cleaner look but keep functionality */
          scrollbar-width: thin;
          scrollbar-color: ${({theme:l})=>l.colors.palette.primary[300]} transparent;
          
          &::-webkit-scrollbar {
            height: 6px;
          }
          
          &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: ${({theme:l})=>l.borderRadius.sm};
          }
          
          &::-webkit-scrollbar-thumb {
            background: ${({theme:l})=>l.colors.palette.primary[300]};
            border-radius: ${({theme:l})=>l.borderRadius.sm};
          }
          
          &::-webkit-scrollbar-thumb:hover {
            background: ${({theme:l})=>l.colors.palette.primary[400]};
          }
        `:d`
          overflow-x: hidden;
          overflow-y: auto;
          
          /* Smooth scrolling */
          scroll-behavior: smooth;
          
          /* Scrollbar styling for vertical */
          scrollbar-width: thin;
          scrollbar-color: ${({theme:l})=>l.colors.palette.primary[300]} transparent;
          
          &::-webkit-scrollbar {
            width: 6px;
          }
          
          &::-webkit-scrollbar-track {
            background: transparent;
            border-radius: ${({theme:l})=>l.borderRadius.sm};
          }
          
          &::-webkit-scrollbar-thumb {
            background: ${({theme:l})=>l.colors.palette.primary[300]};
            border-radius: ${({theme:l})=>l.borderRadius.sm};
          }
          
          &::-webkit-scrollbar-thumb:hover {
            background: ${({theme:l})=>l.colors.palette.primary[400]};
          }
        `}
`,r=p.forwardRef(({size:a="large",selected:l=!1,disabled:i=!1,leadIcon:f,trailIcon:h,showLeadIcon:T=!0,showTrailIcon:C=!0,children:W,onClick:B,onFocus:N,onBlur:F,onKeyDown:U,as:K,className:P,style:_,"aria-label":J,"aria-selected":Q,"aria-disabled":D,role:X="tab",tabIndex:b,id:w,...I},Y)=>{const Z=()=>a==="small"?"body":"headingS",n=()=>l?"semibold":"medium";return e.jsxs(Ge,{ref:Y,as:K,$size:a,$selected:l,$disabled:i,disabled:i,onClick:B,onFocus:N,onBlur:F,onKeyDown:U,className:P,style:_,"aria-label":J,"aria-selected":Q??l,"aria-disabled":D??i,role:X,tabIndex:b??(l?0:-1),id:w,...I,children:[T&&f&&e.jsx(re,{$selected:l,$disabled:i,children:f}),e.jsx(qe,{$selected:l,$disabled:i,children:e.jsx(t,{variant:Z(),weight:n(),as:"span",children:W})}),C&&h&&e.jsx(re,{$selected:l,$disabled:i,children:h})]})});r.displayName="SegmentController";r.__docgenInfo={description:"",methods:[],displayName:"SegmentController",props:{value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'large'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},leadIcon:{required:!1,tsType:{name:"ReactNode"},description:""},trailIcon:{required:!1,tsType:{name:"ReactNode"},description:""},showLeadIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showTrailIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.FocusEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactFocusEvent",raw:"React.FocusEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},onKeyDown:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.KeyboardEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactKeyboardEvent",raw:"React.KeyboardEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-selected":{required:!1,tsType:{name:"boolean"},description:""},"aria-disabled":{required:!1,tsType:{name:"boolean"},description:""},role:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'tab'",computed:!1}},tabIndex:{required:!1,tsType:{name:"number"},description:""},id:{required:!1,tsType:{name:"string"},description:""}}};const c=p.forwardRef(({size:a="large",value:l,defaultValue:i,onChange:f,disabled:h=!1,children:T,orientation:C="horizontal",width:W,minWidth:B,maxWidth:N,className:F,style:U,"aria-label":K,"aria-labelledby":P,..._},J)=>{const[Q,D]=p.useState(l??i),X=p.useRef(null),b=l!==void 0,w=b?l:Q;p.useEffect(()=>{b&&D(l)},[l,b]);const I=p.useCallback(n=>{h||(b||D(n),f==null||f(n))},[h,b,f]),Y=p.useCallback(n=>{if(h)return;const g=p.Children.toArray(T).filter(x=>p.isValidElement(x)&&!x.props.disabled);if(g.length===0)return;const m=g.findIndex(x=>p.isValidElement(x)&&x.props.value===w);let u=m;const S=C==="horizontal";switch(n.key){case"ArrowRight":S&&(n.preventDefault(),u=m+1>=g.length?0:m+1);break;case"ArrowLeft":S&&(n.preventDefault(),u=m-1<0?g.length-1:m-1);break;case"ArrowDown":S||(n.preventDefault(),u=m+1>=g.length?0:m+1);break;case"ArrowUp":S||(n.preventDefault(),u=m-1<0?g.length-1:m-1);break;case"Home":n.preventDefault(),u=0;break;case"End":n.preventDefault(),u=g.length-1;break;default:return}const z=g[u];if(p.isValidElement(z)){const x=z.props.value;x!==void 0&&I(x)}},[T,w,h,I,C]),Z=p.Children.map(T,n=>{if(!p.isValidElement(n))return n;const g=n.props.value,m=g===w;return p.cloneElement(n,{...n.props,size:n.props.size??a,selected:m,disabled:n.props.disabled??h,onClick:u=>{var S,z;(z=(S=n.props).onClick)==null||z.call(S,u),g!==void 0&&I(g)},"aria-selected":m,tabIndex:m?0:-1})});return e.jsx(Oe,{ref:J||X,$orientation:C,$width:W,$minWidth:B,$maxWidth:N,role:"tablist","aria-label":K,"aria-labelledby":P,"aria-orientation":C,onKeyDown:Y,className:F,style:U,..._,children:Z})});c.displayName="SegmentControllerGroup";c.__docgenInfo={description:"",methods:[],displayName:"SegmentControllerGroup",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'large'",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | number) => void",signature:{arguments:[{type:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},name:"value"}],return:{name:"void"}}},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},minWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},maxWidth:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""}}};const Je={title:"Components/SegmentController",component:r,parameters:{layout:"centered",docs:{description:{component:`
The SegmentController component provides a tab-like interface for switching between different views or options. It supports multiple sizes, states, and full keyboard navigation.

## Features
- **Sizes**: Small, Medium, Large
- **States**: Default, Hover, Focus, Active, Selected, Disabled
- **Accessibility**: Full ARIA support, keyboard navigation (Arrow keys, Home, End)
- **Customization**: Lead/trail icon slots, polymorphic \`as\` prop
- **Composition**: Works standalone or within SegmentControllerGroup

## Accessibility
- Uses \`role="tab"\` for proper ARIA semantics
- Keyboard navigation with Arrow keys, Home, and End
- Focus management with \`tabIndex\`
- Screen reader support with \`aria-selected\` and \`aria-label\`

## Usage
Use SegmentController for navigation between views, filtering options, or toggling between different content sections.
        `}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","medium","large"],description:"Size variant of the segment controller"},selected:{control:"boolean",description:"Whether the segment is selected"},disabled:{control:"boolean",description:"Whether the segment is disabled"},showLeadIcon:{control:"boolean",description:"Show or hide the lead icon slot"},showTrailIcon:{control:"boolean",description:"Show or hide the trail icon slot"}}},M={args:{children:"Label",size:"large",selected:!1,disabled:!1}},H={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Large"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{size:"large",leadIcon:e.jsx(s,{}),children:"College"}),e.jsx(r,{size:"large",selected:!0,leadIcon:e.jsx(o,{}),children:"Basic"}),e.jsx(r,{size:"large",leadIcon:e.jsx(j,{}),children:"School"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Medium"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{size:"medium",leadIcon:e.jsx(s,{}),children:"College"}),e.jsx(r,{size:"medium",selected:!0,leadIcon:e.jsx(o,{}),children:"Basic"}),e.jsx(r,{size:"medium",leadIcon:e.jsx(j,{}),children:"School"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Small"}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(r,{size:"small",leadIcon:e.jsx(s,{fontSize:"small"}),children:"College"}),e.jsx(r,{size:"small",selected:!0,leadIcon:e.jsx(o,{fontSize:"small"}),children:"Basic"}),e.jsx(r,{size:"small",leadIcon:e.jsx(j,{fontSize:"small"}),children:"School"})]})]})]})},$={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Default State"}),e.jsx(r,{size:"large",leadIcon:e.jsx(o,{}),trailIcon:e.jsx(y,{}),children:"Label"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Selected State"}),e.jsx(r,{size:"large",selected:!0,leadIcon:e.jsx(o,{}),trailIcon:e.jsx(y,{}),children:"Label"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Disabled State"}),e.jsx(r,{size:"large",disabled:!0,leadIcon:e.jsx(o,{}),trailIcon:e.jsx(y,{}),children:"Label"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Hover State"}),e.jsx(t,{variant:"body",color:"palette.neutral.600",children:"Hover over the segment to see the hover state"}),e.jsx(r,{size:"large",leadIcon:e.jsx(o,{}),trailIcon:e.jsx(y,{}),children:"Label"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Focus State"}),e.jsx(t,{variant:"body",color:"palette.neutral.600",children:"Tab to focus the segment to see the focus ring"}),e.jsx(r,{size:"large",leadIcon:e.jsx(o,{}),trailIcon:e.jsx(y,{}),children:"Label"})]})]})},A={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Lead Icon Only"}),e.jsx(r,{size:"large",leadIcon:e.jsx(s,{}),showTrailIcon:!1,children:"Home"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Trail Icon Only"}),e.jsx(r,{size:"large",trailIcon:e.jsx(y,{}),showLeadIcon:!1,children:"Search"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Both Icons"}),e.jsx(r,{size:"large",leadIcon:e.jsx(o,{}),trailIcon:e.jsx(y,{}),children:"Architecture"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"No Icons"}),e.jsx(r,{size:"large",showLeadIcon:!1,showTrailIcon:!1,children:"Label Only"})]})]})},L={render:()=>{const[a,l]=Ve.useState("college");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Horizontal Group - Large"}),e.jsxs(c,{size:"large",value:a,onChange:l,"aria-label":"Education level selector",children:[e.jsx(r,{value:"college",leadIcon:e.jsx(s,{}),children:"College"}),e.jsx(r,{value:"basic",leadIcon:e.jsx(o,{}),children:"Basic"}),e.jsx(r,{value:"school",leadIcon:e.jsx(j,{}),children:"School"})]}),e.jsxs(t,{variant:"caption",color:"palette.neutral.600",children:["Selected: ",a]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Horizontal Group - Medium"}),e.jsxs(c,{size:"medium",defaultValue:"option2",children:[e.jsx(r,{value:"option1",leadIcon:e.jsx(s,{}),children:"Option 1"}),e.jsx(r,{value:"option2",leadIcon:e.jsx(o,{}),children:"Option 2"}),e.jsx(r,{value:"option3",leadIcon:e.jsx(v,{}),children:"Option 3"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Horizontal Group - Small"}),e.jsxs(c,{size:"small",defaultValue:"tab1",children:[e.jsx(r,{value:"tab1",leadIcon:e.jsx(s,{fontSize:"small"}),children:"Tab 1"}),e.jsx(r,{value:"tab2",leadIcon:e.jsx(o,{fontSize:"small"}),children:"Tab 2"}),e.jsx(r,{value:"tab3",leadIcon:e.jsx(j,{fontSize:"small"}),children:"Tab 3"})]})]})]})}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Keyboard Navigation Demo"}),e.jsx(t,{variant:"body",color:"palette.neutral.600",children:"Click on the group to focus, then use keyboard:"}),e.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[e.jsx("li",{children:e.jsx(t,{variant:"body",children:"Arrow Left/Right: Navigate between segments"})}),e.jsx("li",{children:e.jsx(t,{variant:"body",children:"Home: Jump to first segment"})}),e.jsx("li",{children:e.jsx(t,{variant:"body",children:"End: Jump to last segment"})}),e.jsx("li",{children:e.jsx(t,{variant:"body",children:"Enter/Space: Select segment"})})]})]}),e.jsxs(c,{size:"large",defaultValue:"item2","aria-label":"Keyboard navigation example",children:[e.jsx(r,{value:"item1",leadIcon:e.jsx(s,{}),children:"First"}),e.jsx(r,{value:"item2",leadIcon:e.jsx(o,{}),children:"Second"}),e.jsx(r,{value:"item3",leadIcon:e.jsx(v,{}),children:"Third"}),e.jsx(r,{value:"item4",leadIcon:e.jsx(j,{}),children:"Fourth"})]})]})},E={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Disabled Group"}),e.jsxs(c,{size:"large",disabled:!0,defaultValue:"option1",children:[e.jsx(r,{value:"option1",leadIcon:e.jsx(s,{}),children:"Option 1"}),e.jsx(r,{value:"option2",leadIcon:e.jsx(o,{}),children:"Option 2"}),e.jsx(r,{value:"option3",leadIcon:e.jsx(v,{}),children:"Option 3"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Individual Disabled Segments"}),e.jsxs(c,{size:"large",defaultValue:"option1",children:[e.jsx(r,{value:"option1",leadIcon:e.jsx(s,{}),children:"Enabled"}),e.jsx(r,{value:"option2",disabled:!0,leadIcon:e.jsx(o,{}),children:"Disabled"}),e.jsx(r,{value:"option3",leadIcon:e.jsx(v,{}),children:"Enabled"})]})]})]})},V={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Rendered as Link"}),e.jsx(t,{variant:"body",color:"palette.neutral.600",children:"Using the polymorphic \\`as\\` prop to render as an anchor tag"}),e.jsx(r,{as:"a",href:"#section1",size:"large",leadIcon:e.jsx(s,{}),onClick:a=>{a.preventDefault(),alert("Link clicked!")},children:"Navigate to Section"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Rendered as Div (for custom behavior)"}),e.jsx(r,{as:"div",size:"large",leadIcon:e.jsx(o,{}),children:"Custom Element"})]})]})},R={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Custom className"}),e.jsx(r,{size:"large",className:"custom-segment",leadIcon:e.jsx(s,{}),style:{border:"2px dashed #5009b5"},children:"Custom Styled"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Custom Group Styling"}),e.jsxs(c,{size:"large",defaultValue:"opt1",style:{background:"#f0f0f0",padding:"16px"},children:[e.jsx(r,{value:"opt1",leadIcon:e.jsx(s,{}),children:"Option 1"}),e.jsx(r,{value:"opt2",leadIcon:e.jsx(o,{}),children:"Option 2"})]})]})]})},G={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Default (Hug Content)"}),e.jsx(t,{variant:"body",color:"#666",children:"Width automatically fits content"}),e.jsxs(c,{size:"large",defaultValue:"tab1",children:[e.jsx(r,{value:"tab1",leadIcon:e.jsx(s,{}),children:"Tab 1"}),e.jsx(r,{value:"tab2",leadIcon:e.jsx(o,{}),children:"Tab 2"}),e.jsx(r,{value:"tab3",leadIcon:e.jsx(v,{}),children:"Tab 3"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Fixed Width (400px)"}),e.jsx(t,{variant:"body",color:"#666",children:"Container has fixed width"}),e.jsxs(c,{size:"large",width:400,defaultValue:"tab1",children:[e.jsx(r,{value:"tab1",leadIcon:e.jsx(s,{}),children:"Tab 1"}),e.jsx(r,{value:"tab2",leadIcon:e.jsx(o,{}),children:"Tab 2"}),e.jsx(r,{value:"tab3",leadIcon:e.jsx(v,{}),children:"Tab 3"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Full Width (100%)"}),e.jsx(t,{variant:"body",color:"#666",children:"Stretches to fill parent container"}),e.jsxs(c,{size:"large",width:"100%",defaultValue:"tab1",children:[e.jsx(r,{value:"tab1",leadIcon:e.jsx(s,{}),children:"Tab 1"}),e.jsx(r,{value:"tab2",leadIcon:e.jsx(o,{}),children:"Tab 2"}),e.jsx(r,{value:"tab3",leadIcon:e.jsx(v,{}),children:"Tab 3"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Min/Max Width"}),e.jsx(t,{variant:"body",color:"#666",children:"minWidth: 300px, maxWidth: 600px"}),e.jsxs(c,{size:"large",minWidth:300,maxWidth:600,defaultValue:"tab1",children:[e.jsx(r,{value:"tab1",leadIcon:e.jsx(s,{}),children:"Tab 1"}),e.jsx(r,{value:"tab2",leadIcon:e.jsx(o,{}),children:"Tab 2"})]})]})]})},q={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",padding:"20px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Horizontal Scroll (maxWidth: 400px)"}),e.jsx(t,{variant:"body",color:"#666",children:"Container width is smaller than content - scroll horizontally to see all tabs"}),e.jsxs(c,{size:"large",maxWidth:400,defaultValue:"tab1",children:[e.jsx(r,{value:"tab1",leadIcon:e.jsx(s,{}),children:"Dashboard"}),e.jsx(r,{value:"tab2",leadIcon:e.jsx(o,{}),children:"Architecture"}),e.jsx(r,{value:"tab3",leadIcon:e.jsx(v,{}),children:"Education"}),e.jsx(r,{value:"tab4",leadIcon:e.jsx(j,{}),children:"Settings"}),e.jsx(r,{value:"tab5",leadIcon:e.jsx(y,{}),children:"Search"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Horizontal Scroll (width: 300px)"}),e.jsx(t,{variant:"body",color:"#666",children:"Fixed narrow width with many tabs - horizontal scrolling enabled"}),e.jsxs(c,{size:"medium",width:300,defaultValue:"item1",children:[e.jsx(r,{value:"item1",children:"Overview"}),e.jsx(r,{value:"item2",children:"Analytics"}),e.jsx(r,{value:"item3",children:"Reports"}),e.jsx(r,{value:"item4",children:"Settings"}),e.jsx(r,{value:"item5",children:"Profile"}),e.jsx(r,{value:"item6",children:"Help"})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(t,{variant:"headingM",weight:"semibold",children:"Small Size with Scroll"}),e.jsx(t,{variant:"body",color:"#666",children:"Small segments with horizontal scroll (width: 250px)"}),e.jsxs(c,{size:"small",width:250,defaultValue:"a",children:[e.jsx(r,{value:"a",children:"Option A"}),e.jsx(r,{value:"b",children:"Option B"}),e.jsx(r,{value:"c",children:"Option C"}),e.jsx(r,{value:"d",children:"Option D"}),e.jsx(r,{value:"e",children:"Option E"})]})]})]})};var ae,te,oe;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    children: 'Label',
    size: 'large',
    selected: false,
    disabled: false
  }
}`,...(oe=(te=M.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,ie,se;H.parameters={...H.parameters,docs:{...(ne=H.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Large</Typography>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <SegmentController size="large" leadIcon={<Home />}>
            College
          </SegmentController>
          <SegmentController size="large" selected leadIcon={<Architecture />}>
            Basic
          </SegmentController>
          <SegmentController size="large" leadIcon={<AcUnit />}>
            School
          </SegmentController>
        </div>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Medium</Typography>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <SegmentController size="medium" leadIcon={<Home />}>
            College
          </SegmentController>
          <SegmentController size="medium" selected leadIcon={<Architecture />}>
            Basic
          </SegmentController>
          <SegmentController size="medium" leadIcon={<AcUnit />}>
            School
          </SegmentController>
        </div>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Small</Typography>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          <SegmentController size="small" leadIcon={<Home fontSize="small" />}>
            College
          </SegmentController>
          <SegmentController size="small" selected leadIcon={<Architecture fontSize="small" />}>
            Basic
          </SegmentController>
          <SegmentController size="small" leadIcon={<AcUnit fontSize="small" />}>
            School
          </SegmentController>
        </div>
      </div>
    </div>
}`,...(se=(ie=H.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var de,ce,pe;$.parameters={...$.parameters,docs:{...(de=$.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Default State</Typography>
        <SegmentController size="large" leadIcon={<Architecture />} trailIcon={<Search />}>
          Label
        </SegmentController>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Selected State</Typography>
        <SegmentController size="large" selected leadIcon={<Architecture />} trailIcon={<Search />}>
          Label
        </SegmentController>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Disabled State</Typography>
        <SegmentController size="large" disabled leadIcon={<Architecture />} trailIcon={<Search />}>
          Label
        </SegmentController>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Hover State</Typography>
        <Typography variant="body" color="palette.neutral.600">
          Hover over the segment to see the hover state
        </Typography>
        <SegmentController size="large" leadIcon={<Architecture />} trailIcon={<Search />}>
          Label
        </SegmentController>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Focus State</Typography>
        <Typography variant="body" color="palette.neutral.600">
          Tab to focus the segment to see the focus ring
        </Typography>
        <SegmentController size="large" leadIcon={<Architecture />} trailIcon={<Search />}>
          Label
        </SegmentController>
      </div>
    </div>
}`,...(pe=(ce=$.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ge,ue;A.parameters={...A.parameters,docs:{...(me=A.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Lead Icon Only</Typography>
        <SegmentController size="large" leadIcon={<Home />} showTrailIcon={false}>
          Home
        </SegmentController>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Trail Icon Only</Typography>
        <SegmentController size="large" trailIcon={<Search />} showLeadIcon={false}>
          Search
        </SegmentController>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Both Icons</Typography>
        <SegmentController size="large" leadIcon={<Architecture />} trailIcon={<Search />}>
          Architecture
        </SegmentController>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">No Icons</Typography>
        <SegmentController size="large" showLeadIcon={false} showTrailIcon={false}>
          Label Only
        </SegmentController>
      </div>
    </div>
}`,...(ue=(ge=A.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var he,xe,ye;L.parameters={...L.parameters,docs:{...(he=L.parameters)==null?void 0:he.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string | number>('college');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      padding: '20px'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Horizontal Group - Large</Typography>
          <SegmentControllerGroup size="large" value={value} onChange={setValue} aria-label="Education level selector">
            <SegmentController value="college" leadIcon={<Home />}>
              College
            </SegmentController>
            <SegmentController value="basic" leadIcon={<Architecture />}>
              Basic
            </SegmentController>
            <SegmentController value="school" leadIcon={<AcUnit />}>
              School
            </SegmentController>
          </SegmentControllerGroup>
          <Typography variant="caption" color="palette.neutral.600">
            Selected: {value}
          </Typography>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Horizontal Group - Medium</Typography>
          <SegmentControllerGroup size="medium" defaultValue="option2">
            <SegmentController value="option1" leadIcon={<Home />}>
              Option 1
            </SegmentController>
            <SegmentController value="option2" leadIcon={<Architecture />}>
              Option 2
            </SegmentController>
            <SegmentController value="option3" leadIcon={<School />}>
              Option 3
            </SegmentController>
          </SegmentControllerGroup>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px'
      }}>
          <Typography variant="headingM" weight="semibold">Horizontal Group - Small</Typography>
          <SegmentControllerGroup size="small" defaultValue="tab1">
            <SegmentController value="tab1" leadIcon={<Home fontSize="small" />}>
              Tab 1
            </SegmentController>
            <SegmentController value="tab2" leadIcon={<Architecture fontSize="small" />}>
              Tab 2
            </SegmentController>
            <SegmentController value="tab3" leadIcon={<AcUnit fontSize="small" />}>
              Tab 3
            </SegmentController>
          </SegmentControllerGroup>
        </div>
      </div>;
  }
}`,...(ye=(xe=L.parameters)==null?void 0:xe.docs)==null?void 0:ye.source}}};var ve,fe,be;k.parameters={...k.parameters,docs:{...(ve=k.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Keyboard Navigation Demo</Typography>
        <Typography variant="body" color="palette.neutral.600">
          Click on the group to focus, then use keyboard:
        </Typography>
        <ul style={{
        margin: 0,
        paddingLeft: '20px'
      }}>
          <li>
            <Typography variant="body">Arrow Left/Right: Navigate between segments</Typography>
          </li>
          <li>
            <Typography variant="body">Home: Jump to first segment</Typography>
          </li>
          <li>
            <Typography variant="body">End: Jump to last segment</Typography>
          </li>
          <li>
            <Typography variant="body">Enter/Space: Select segment</Typography>
          </li>
        </ul>
      </div>

      <SegmentControllerGroup size="large" defaultValue="item2" aria-label="Keyboard navigation example">
        <SegmentController value="item1" leadIcon={<Home />}>
          First
        </SegmentController>
        <SegmentController value="item2" leadIcon={<Architecture />}>
          Second
        </SegmentController>
        <SegmentController value="item3" leadIcon={<School />}>
          Third
        </SegmentController>
        <SegmentController value="item4" leadIcon={<AcUnit />}>
          Fourth
        </SegmentController>
      </SegmentControllerGroup>
    </div>
}`,...(be=(fe=k.parameters)==null?void 0:fe.docs)==null?void 0:be.source}}};var Se,je,Ce;E.parameters={...E.parameters,docs:{...(Se=E.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Disabled Group</Typography>
        <SegmentControllerGroup size="large" disabled defaultValue="option1">
          <SegmentController value="option1" leadIcon={<Home />}>
            Option 1
          </SegmentController>
          <SegmentController value="option2" leadIcon={<Architecture />}>
            Option 2
          </SegmentController>
          <SegmentController value="option3" leadIcon={<School />}>
            Option 3
          </SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Individual Disabled Segments</Typography>
        <SegmentControllerGroup size="large" defaultValue="option1">
          <SegmentController value="option1" leadIcon={<Home />}>
            Enabled
          </SegmentController>
          <SegmentController value="option2" disabled leadIcon={<Architecture />}>
            Disabled
          </SegmentController>
          <SegmentController value="option3" leadIcon={<School />}>
            Enabled
          </SegmentController>
        </SegmentControllerGroup>
      </div>
    </div>
}`,...(Ce=(je=E.parameters)==null?void 0:je.docs)==null?void 0:Ce.source}}};var Te,we,Ie;V.parameters={...V.parameters,docs:{...(Te=V.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Rendered as Link</Typography>
        <Typography variant="body" color="palette.neutral.600">
          Using the polymorphic \\\`as\\\` prop to render as an anchor tag
        </Typography>
        <SegmentController as="a" href="#section1" size="large" leadIcon={<Home />} onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        alert('Link clicked!');
      }}>
          Navigate to Section
        </SegmentController>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Rendered as Div (for custom behavior)</Typography>
        <SegmentController as="div" size="large" leadIcon={<Architecture />}>
          Custom Element
        </SegmentController>
      </div>
    </div>
}`,...(Ie=(we=V.parameters)==null?void 0:we.docs)==null?void 0:Ie.source}}};var ze,De,Me;R.parameters={...R.parameters,docs:{...(ze=R.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Custom className</Typography>
        <SegmentController size="large" className="custom-segment" leadIcon={<Home />} style={{
        border: '2px dashed #5009b5'
      }}>
          Custom Styled
        </SegmentController>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Custom Group Styling</Typography>
        <SegmentControllerGroup size="large" defaultValue="opt1" style={{
        background: '#f0f0f0',
        padding: '16px'
      }}>
          <SegmentController value="opt1" leadIcon={<Home />}>
            Option 1
          </SegmentController>
          <SegmentController value="opt2" leadIcon={<Architecture />}>
            Option 2
          </SegmentController>
        </SegmentControllerGroup>
      </div>
    </div>
}`,...(Me=(De=R.parameters)==null?void 0:De.docs)==null?void 0:Me.source}}};var He,$e,Ae;G.parameters={...G.parameters,docs:{...(He=G.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Default (Hug Content)</Typography>
        <Typography variant="body" color="#666">
          Width automatically fits content
        </Typography>
        <SegmentControllerGroup size="large" defaultValue="tab1">
          <SegmentController value="tab1" leadIcon={<Home />}>
            Tab 1
          </SegmentController>
          <SegmentController value="tab2" leadIcon={<Architecture />}>
            Tab 2
          </SegmentController>
          <SegmentController value="tab3" leadIcon={<School />}>
            Tab 3
          </SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Fixed Width (400px)</Typography>
        <Typography variant="body" color="#666">
          Container has fixed width
        </Typography>
        <SegmentControllerGroup size="large" width={400} defaultValue="tab1">
          <SegmentController value="tab1" leadIcon={<Home />}>
            Tab 1
          </SegmentController>
          <SegmentController value="tab2" leadIcon={<Architecture />}>
            Tab 2
          </SegmentController>
          <SegmentController value="tab3" leadIcon={<School />}>
            Tab 3
          </SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Full Width (100%)</Typography>
        <Typography variant="body" color="#666">
          Stretches to fill parent container
        </Typography>
        <SegmentControllerGroup size="large" width="100%" defaultValue="tab1">
          <SegmentController value="tab1" leadIcon={<Home />}>
            Tab 1
          </SegmentController>
          <SegmentController value="tab2" leadIcon={<Architecture />}>
            Tab 2
          </SegmentController>
          <SegmentController value="tab3" leadIcon={<School />}>
            Tab 3
          </SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Min/Max Width</Typography>
        <Typography variant="body" color="#666">
          minWidth: 300px, maxWidth: 600px
        </Typography>
        <SegmentControllerGroup size="large" minWidth={300} maxWidth={600} defaultValue="tab1">
          <SegmentController value="tab1" leadIcon={<Home />}>
            Tab 1
          </SegmentController>
          <SegmentController value="tab2" leadIcon={<Architecture />}>
            Tab 2
          </SegmentController>
        </SegmentControllerGroup>
      </div>
    </div>
}`,...(Ae=($e=G.parameters)==null?void 0:$e.docs)==null?void 0:Ae.source}}};var Le,ke,Ee;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '20px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Horizontal Scroll (maxWidth: 400px)</Typography>
        <Typography variant="body" color="#666">
          Container width is smaller than content - scroll horizontally to see all tabs
        </Typography>
        <SegmentControllerGroup size="large" maxWidth={400} defaultValue="tab1">
          <SegmentController value="tab1" leadIcon={<Home />}>
            Dashboard
          </SegmentController>
          <SegmentController value="tab2" leadIcon={<Architecture />}>
            Architecture
          </SegmentController>
          <SegmentController value="tab3" leadIcon={<School />}>
            Education
          </SegmentController>
          <SegmentController value="tab4" leadIcon={<AcUnit />}>
            Settings
          </SegmentController>
          <SegmentController value="tab5" leadIcon={<Search />}>
            Search
          </SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Horizontal Scroll (width: 300px)</Typography>
        <Typography variant="body" color="#666">
          Fixed narrow width with many tabs - horizontal scrolling enabled
        </Typography>
        <SegmentControllerGroup size="medium" width={300} defaultValue="item1">
          <SegmentController value="item1">Overview</SegmentController>
          <SegmentController value="item2">Analytics</SegmentController>
          <SegmentController value="item3">Reports</SegmentController>
          <SegmentController value="item4">Settings</SegmentController>
          <SegmentController value="item5">Profile</SegmentController>
          <SegmentController value="item6">Help</SegmentController>
        </SegmentControllerGroup>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="headingM" weight="semibold">Small Size with Scroll</Typography>
        <Typography variant="body" color="#666">
          Small segments with horizontal scroll (width: 250px)
        </Typography>
        <SegmentControllerGroup size="small" width={250} defaultValue="a">
          <SegmentController value="a">Option A</SegmentController>
          <SegmentController value="b">Option B</SegmentController>
          <SegmentController value="c">Option C</SegmentController>
          <SegmentController value="d">Option D</SegmentController>
          <SegmentController value="e">Option E</SegmentController>
        </SegmentControllerGroup>
      </div>
    </div>
}`,...(Ee=(ke=q.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};const Qe=["Default","AllSizes","AllStates","WithIcons","SegmentGroup","KeyboardNavigation","DisabledGroup","PolymorphicAs","CustomStyling","WidthControl","HorizontalScroll"];export{H as AllSizes,$ as AllStates,R as CustomStyling,M as Default,E as DisabledGroup,q as HorizontalScroll,k as KeyboardNavigation,V as PolymorphicAs,L as SegmentGroup,G as WidthControl,A as WithIcons,Qe as __namedExportsOrder,Je as default};
