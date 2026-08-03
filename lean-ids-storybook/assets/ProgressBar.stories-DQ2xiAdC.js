import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as l}from"./index-B0WjJBI_.js";import{f as C,g as o,E as ba}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as r}from"./Typography-DlcmwxwF.js";import"./_commonjsHelpers-CqkleIqs.js";const Ta=ba`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(400%);
  }
`,ja=a=>{const i={xsmall:"2px",small:"6px",medium:"8px",large:"12px",xlarge:"16px"};return i[a]||i.medium},wa=a=>C`
  ${({theme:i})=>{switch(a){case"success":return`background: ${i.colors.palette.success[500]};`;case"warning":return`background: ${i.colors.palette.warning[600]};`;case"alert":return`background: ${i.colors.palette.error[500]};`;case"default":default:return`background: ${i.colors.palette.primary[500]};`}}}
`,Ba=o.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme:a})=>a.spacing[2]};
  width: 100%;
  
  ${({$disabled:a})=>a&&C`
      opacity: 0.5;
      cursor: not-allowed;
      pointer-events: none;
    `}
`,Pa=o.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: ${({theme:a})=>a.colors.palette.primary[800]};
  gap: ${({theme:a})=>a.spacing[2]};
`,Sa=o.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,Da=o.span`
  flex-shrink: 0;
  font-family: ${({theme:a})=>a.fonts.monospace};
  font-weight: ${({theme:a})=>a.fontWeights.medium};
  font-size: ${({theme:a})=>a.fontSizes[10]};
  line-height: ${({theme:a})=>a.lineHeights[12]};
  letter-spacing: 1.5px;
`,La=o.div`
  position: relative;
  width: 100%;
  height: ${({$size:a})=>ja(a)};
  background: ${({theme:a})=>a.colors.palette.neutral[300]};
  border-radius: ${({theme:a})=>a.borderRadius.full};
  overflow: hidden;
  
  ${({$isInvalid:a,theme:i})=>a&&C`
      background: ${i.colors.palette.error[100]};
    `}
`,Ca=o.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${({$value:a})=>`${Math.min(Math.max(a,0),100)}%`};
  ${({$type:a})=>wa(a)}
  border-radius: ${({theme:a,$value:i})=>i>=100?a.borderRadius.full:`${a.borderRadius.full} 0 0 ${a.borderRadius.full}`};
  transition: width 0.3s ease-in-out, background 0.2s ease-in-out;
  
  ${({$isLoading:a})=>a&&C`
      width: 25%;
      animation: ${Ta} 1.5s ease-in-out infinite;
    `}
  
  ${({$isInvalid:a,theme:i})=>a&&C`
      background: ${i.colors.palette.error[500]};
    `}

  /* Hover state for interactive progress bars */
  &:hover {
    filter: brightness(1.1);
  }

  /* Focus-visible state */
  &:focus-visible {
    outline: 2px solid ${({theme:a})=>a.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`,ka=o.div`
  display: flex;
  align-items: center;
  gap: ${({theme:a})=>a.spacing[1]};
  color: ${({theme:a})=>a.colors.palette.error[600]};
  font-size: ${({theme:a})=>a.fontSizes[12]};
  line-height: ${({theme:a})=>a.lineHeights[16]};
  margin-top: ${({theme:a})=>a.spacing[1]};
`,s=l.forwardRef(({value:a,as:i,size:n="medium",type:d="default",label:p,showPercentage:N,formatPercentage:oa=z=>`${Math.round(z)}%`,isLoading:c=!1,disabled:R=!1,isInvalid:g=!1,errorMessage:F,customLabel:m,onChange:A,onComplete:$,className:na,style:da,trackClassName:pa,fillClassName:ca,labelClassName:ga,"aria-label":ma,"aria-describedby":ya,min:k=0,max:M=100,...ua},xa)=>{const z=Math.min(Math.max(a,k),M),t=(z-k)/(M-k)*100,I=l.useRef(t),U=N!==void 0?N:["medium","large","xlarge"].includes(n),ha=p||U||m;l.useEffect(()=>{A&&t!==I.current&&A(t),I.current=t},[t,A]),l.useEffect(()=>{$&&t>=100&&I.current<100&&$()},[t,$]);const va=()=>m?typeof m=="function"?m({value:t,label:p}):m:e.jsxs(Pa,{className:ga,children:[p&&e.jsx(Sa,{children:e.jsx(r,{variant:"caption",weight:"medium",as:"span",children:p})}),U&&e.jsx(Da,{children:oa(t)})]}),fa=i||"div";return e.jsxs(Ba,{as:fa,ref:xa,$size:n,$type:d,$disabled:R,$isInvalid:g,$isLoading:c,className:na,style:da,...ua,children:[ha&&va(),e.jsx(La,{$size:n,$type:d,$disabled:R,$isInvalid:g,$isLoading:c,className:pa,role:"progressbar","aria-label":ma||p||"Progress","aria-valuenow":c?void 0:z,"aria-valuemin":k,"aria-valuemax":M,"aria-describedby":ya,"aria-busy":c,"aria-invalid":g,children:e.jsx(Ca,{$size:n,$type:d,$value:t,$disabled:R,$isInvalid:g,$isLoading:c,className:ca})}),g&&F&&e.jsx(ka,{role:"alert",children:e.jsx(r,{variant:"caption",as:"span",color:"error",children:F})})]})});s.displayName="ProgressBar";s.__docgenInfo={description:"",methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:`Current progress value (0-100)
@required`},as:{required:!1,tsType:{name:"ElementType"},description:`Polymorphic prop - render as different element
@default 'div'`},size:{required:!1,tsType:{name:"union",raw:"'xsmall' | 'small' | 'medium' | 'large' | 'xlarge'",elements:[{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"},{name:"literal",value:"'xlarge'"}]},description:`Size variant
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'warning' | 'alert'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'alert'"}]},description:`Type variant for semantic meaning
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Optional label text displayed above the progress bar"},showPercentage:{required:!1,tsType:{name:"boolean"},description:`Whether to show the percentage value
@default true for medium/large/xlarge, false for xsmall/small`},formatPercentage:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => string",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"string"}}},description:"Custom percentage formatter\n@default (value) => `${Math.round(value)}%`",defaultValue:{value:"(val) => `${Math.round(val)}%`",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether the progress bar is in loading state
Shows animated indeterminate state`,defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:`Whether the progress bar is disabled
Reduces opacity and prevents interaction`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"Whether the progress bar is in error state",defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true"},customLabel:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: { value: number; label?: string }) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:`Custom content to render in the label area
Overrides default label and percentage display`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:"Callback fired when progress value changes"},onComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when progress reaches 100%"},className:{required:!1,tsType:{name:"string"},description:"Additional className for the container"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional styles for the container"},trackClassName:{required:!1,tsType:{name:"string"},description:"Additional className for the track (background bar)"},fillClassName:{required:!1,tsType:{name:"string"},description:"Additional className for the fill (progress indicator)"},labelClassName:{required:!1,tsType:{name:"string"},description:"Additional className for the label container"},"aria-label":{required:!1,tsType:{name:"string"},description:`ARIA label for accessibility
@default label or 'Progress'`},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ARIA description for additional context"},min:{required:!1,tsType:{name:"number"},description:`Minimum value for progress
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`Maximum value for progress
@default 100`,defaultValue:{value:"100",computed:!1}}},composes:["Omit"]};const Ia={title:"Components/ProgressBar",component:s,parameters:{layout:"padded",docs:{description:{component:`
# ProgressBar Component

A versatile progress indicator component for tracking completion status from 0% to 100%.

## Features
- **5 Size Variants:** xsmall (2px), small (6px), medium (8px), large (12px), xlarge (16px)
- **4 Type Variants:** default (purple), success (green), warning (yellow), alert (red)
- **Optional Label:** Display descriptive text and percentage
- **Loading State:** Indeterminate animation for unknown progress
- **Error State:** Visual error indication with message
- **Accessibility:** Full ARIA support and keyboard navigation
- **Customization:** Multiple override points (className, style, slots)
- **Polymorphic:** Render as different elements via 'as' prop

## When to Use
- Tracking file uploads, downloads, or installations
- Showing completion of multi-step processes
- Displaying user journey progress in onboarding flows
- Visualizing KPIs and metrics with different color accents

## Design Tokens
All styling uses design tokens - no hardcoded values. Colors, spacing, typography, and radii are theme-aware.
        `}}},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current progress value (0-100)"},size:{control:"select",options:["xsmall","small","medium","large","xlarge"],description:"Size variant"},type:{control:"select",options:["default","success","warning","alert"],description:"Type variant for semantic meaning"},label:{control:"text",description:"Optional label text"},showPercentage:{control:"boolean",description:"Show percentage value"},isLoading:{control:"boolean",description:"Loading/indeterminate state"},disabled:{control:"boolean",description:"Disabled state"},isInvalid:{control:"boolean",description:"Error state"},errorMessage:{control:"text",description:"Error message to display"}}},y={args:{value:50,size:"medium",type:"default",label:"Progress Label"},render:a=>e.jsxs("div",{style:{padding:"20px",maxWidth:"400px"},children:[e.jsx(r,{variant:"headingM",weight:"semibold",style:{marginBottom:"16px"},children:"Default Progress Bar"}),e.jsx(s,{...a}),e.jsx(r,{variant:"caption",style:{marginTop:"12px",display:"block"},children:"A standard progress bar showing 50% completion with label and percentage display."})]})},u={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"24px"},children:"Size Variants"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Five size options from xsmall (2px) to xlarge (16px) for different use cases."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"XSmall (2px)"}),e.jsx(s,{value:75,size:"xsmall",label:"Compact Progress"}),e.jsx(r,{variant:"caption",style:{marginTop:"4px",display:"block"},children:"Best for inline indicators and minimal UI footprint"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"Small (6px)"}),e.jsx(s,{value:50,size:"small"}),e.jsx(r,{variant:"caption",style:{marginTop:"4px",display:"block"},children:"Compact spaces without label display"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"Medium (8px) - Default"}),e.jsx(s,{value:60,size:"medium",label:"Standard Progress"}),e.jsx(r,{variant:"caption",style:{marginTop:"4px",display:"block"},children:"Standard use cases with balanced visibility"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"Large (12px)"}),e.jsx(s,{value:80,size:"large",label:"Prominent Progress"}),e.jsx(r,{variant:"caption",style:{marginTop:"4px",display:"block"},children:"Prominent displays and dashboard metrics"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"XLarge (16px)"}),e.jsx(s,{value:90,size:"xlarge",label:"Key Metric"}),e.jsx(r,{variant:"caption",style:{marginTop:"4px",display:"block"},children:"Key performance indicators and hero sections"})]})]})]})},x={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"24px"},children:"Type Variants"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Four semantic types for different contexts and meanings."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"Default (Purple)"}),e.jsx(s,{value:65,type:"default",label:"Standard Progress"}),e.jsx(r,{variant:"caption",style:{marginTop:"4px",display:"block"},children:"Standard progress tracking for general operations"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"Success (Green)"}),e.jsx(s,{value:100,type:"success",label:"Upload Complete"}),e.jsx(r,{variant:"caption",style:{marginTop:"4px",display:"block"},children:"Completed or successful operations"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"Warning (Yellow)"}),e.jsx(s,{value:45,type:"warning",label:"Storage Usage"}),e.jsx(r,{variant:"caption",style:{marginTop:"4px",display:"block"},children:"Operations requiring attention or caution"})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"Alert (Red)"}),e.jsx(s,{value:85,type:"alert",label:"Critical Threshold"}),e.jsx(r,{variant:"caption",style:{marginTop:"4px",display:"block"},children:"Critical operations or errors needing immediate attention"})]})]})]})},h={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Progress Values"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{value:0,label:"Not Started"}),e.jsx(s,{value:25,label:"Getting Started"}),e.jsx(s,{value:50,label:"Halfway There"}),e.jsx(s,{value:75,label:"Almost Done"}),e.jsx(s,{value:100,type:"success",label:"Complete"})]})]})},v={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Loading State"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Use when progress is unknown or indeterminate. Shows animated indicator."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{value:0,isLoading:!0,label:"Processing..."}),e.jsx(s,{value:0,isLoading:!0,size:"large",label:"Analyzing Data..."}),e.jsx(s,{value:0,isLoading:!0,type:"success",label:"Syncing..."})]})]})},f={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Error State"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Display error messages when operations fail or encounter issues."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{value:35,isInvalid:!0,errorMessage:"Upload failed. Please try again.",label:"File Upload"}),e.jsx(s,{value:60,isInvalid:!0,errorMessage:"Connection timeout. Retrying...",label:"Sync Progress",size:"large"})]})]})},b={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Disabled State"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Reduced opacity and no interaction when disabled."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{value:50,disabled:!0,label:"Disabled Progress"}),e.jsx(s,{value:75,disabled:!0,type:"success",label:"Completed (Disabled)",size:"large"})]})]})},T={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Progress Bars Without Labels"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Compact display without label or percentage text."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{value:30,showPercentage:!1}),e.jsx(s,{value:60,type:"success",showPercentage:!1}),e.jsx(s,{value:80,type:"warning",size:"large",showPercentage:!1})]})]})},j={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Custom Label Rendering"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Use customLabel prop for complete control over label content."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{value:45,customLabel:({value:a})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(r,{variant:"body",weight:"semibold",children:"Downloading: report.pdf"}),e.jsxs(r,{variant:"caption",children:[a,"% • 2.5 MB / 5.5 MB"]})]})}),e.jsx(s,{value:75,type:"success",size:"large",customLabel:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",children:"Installation Progress"}),e.jsx(r,{variant:"caption",children:"Step 3 of 4 • Configuring dependencies..."})]})})]})]})},w={render:()=>{const[a,i]=l.useState(0);return l.useEffect(()=>{const n=setInterval(()=>{i(d=>d>=100?0:d+1)},50);return()=>clearInterval(n)},[]),e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Animated Progress"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Smooth transitions when progress value changes."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{value:a,label:"Auto-incrementing"}),e.jsx(s,{value:a,type:a<30?"alert":a<70?"warning":"success",size:"large",label:"Dynamic Type"})]})]})}},B={render:()=>{const a=l.useState(null)[1];return e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"ForwardRef Support"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Access the underlying DOM element via ref for imperative operations."})]}),e.jsx(s,{ref:a,value:70,label:"Referenced Progress Bar",size:"large"}),e.jsx(r,{variant:"caption",children:"The ref provides access to the container div element for DOM manipulation."})]})}},P={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Polymorphic Rendering"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Render as different HTML elements using the 'as' prop."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{as:"div",value:50,label:"Rendered as div (default)"}),e.jsx(s,{as:"section",value:75,label:"Rendered as section"}),e.jsx(s,{as:"article",value:90,type:"success",label:"Rendered as article"})]}),e.jsx(r,{variant:"caption",children:"Inspect the DOM to see different HTML elements being used."})]})},S={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Custom Styling"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Override styles using className, style, and slot-specific classNames."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{value:60,label:"Custom Container",className:"custom-progress",style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px"}}),e.jsx(s,{value:80,type:"success",label:"Custom Track & Fill",trackClassName:"custom-track",fillClassName:"custom-fill"})]})]})},D={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Accessibility Features"}),e.jsx(r,{variant:"body",style:{marginBottom:"24px"},children:"Full ARIA support with proper roles, labels, and state attributes."})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(s,{value:50,label:"File Upload","aria-label":"File upload progress","aria-describedby":"upload-description"}),e.jsx(r,{variant:"caption",children:e.jsx("span",{id:"upload-description",children:"Uploading document.pdf to cloud storage"})}),e.jsx(s,{value:0,isLoading:!0,label:"Processing","aria-label":"Processing your request"}),e.jsx(s,{value:75,isInvalid:!0,errorMessage:"Network error occurred",label:"Sync Status","aria-label":"Synchronization progress"})]}),e.jsxs("div",{style:{marginTop:"16px",padding:"16px",background:"#f5f5f5",borderRadius:"8px"},children:[e.jsx(r,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"ARIA Attributes"}),e.jsx("div",{style:{paddingLeft:"20px"},children:e.jsx(r,{variant:"caption",as:"div",children:e.jsxs("ul",{style:{margin:0,paddingLeft:"20px"},children:[e.jsx("li",{children:'role="progressbar" on track element'}),e.jsx("li",{children:"aria-valuenow for current value"}),e.jsx("li",{children:"aria-valuemin and aria-valuemax for range"}),e.jsx("li",{children:"aria-label for accessible name"}),e.jsx("li",{children:"aria-busy for loading state"}),e.jsx("li",{children:"aria-invalid for error state"}),e.jsx("li",{children:'role="alert" for error messages'})]})})})]})]})},L={render:()=>e.jsxs("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsx(r,{variant:"headingL",weight:"semibold",style:{marginBottom:"16px"},children:"Real-World Use Cases"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx(r,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"File Upload Dashboard"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(s,{value:100,type:"success",label:"report-2024.pdf",size:"small"}),e.jsx(s,{value:65,label:"presentation.pptx",size:"small"}),e.jsx(s,{value:30,type:"warning",label:"large-video.mp4",size:"small"})]})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"Storage Usage Monitor"}),e.jsx(s,{value:85,type:"alert",label:"Storage Capacity",size:"large",customLabel:({value:a})=>e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(r,{variant:"body",weight:"semibold",children:"Storage Usage"}),e.jsxs(r,{variant:"caption",children:[a,"% • 8.5 GB / 10 GB"]})]})})]}),e.jsxs("div",{children:[e.jsx(r,{variant:"headingM",weight:"semibold",style:{marginBottom:"12px"},children:"Multi-Step Onboarding"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(s,{value:100,type:"success",label:"Step 1: Account Setup",showPercentage:!1}),e.jsx(s,{value:100,type:"success",label:"Step 2: Profile Information",showPercentage:!1}),e.jsx(s,{value:50,label:"Step 3: Preferences",showPercentage:!1}),e.jsx(s,{value:0,label:"Step 4: Verification",showPercentage:!1})]})]})]})]})};var q,V,E,W,O;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    value: 50,
    size: 'medium',
    type: 'default',
    label: 'Progress Label'
  },
  render: args => <div style={{
    padding: '20px',
    maxWidth: '400px'
  }}>
      <Typography variant="headingM" weight="semibold" style={{
      marginBottom: '16px'
    }}>
        Default Progress Bar
      </Typography>
      <ProgressBar {...args} />
      <Typography variant="caption" style={{
      marginTop: '12px',
      display: 'block'
    }}>
        A standard progress bar showing 50% completion with label and percentage display.
      </Typography>
    </div>
}`,...(E=(V=y.parameters)==null?void 0:V.docs)==null?void 0:E.source},description:{story:"Default story - Medium size, 50% progress",...(O=(W=y.parameters)==null?void 0:W.docs)==null?void 0:O.description}}};var H,G,X,K,_;u.parameters={...u.parameters,docs:{...(H=u.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{
        marginBottom: '24px'
      }}>
          Size Variants
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '24px'
      }}>
          Five size options from xsmall (2px) to xlarge (16px) for different use cases.
        </Typography>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            XSmall (2px)
          </Typography>
          <ProgressBar value={75} size="xsmall" label="Compact Progress" />
          <Typography variant="caption" style={{
          marginTop: '4px',
          display: 'block'
        }}>
            Best for inline indicators and minimal UI footprint
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            Small (6px)
          </Typography>
          <ProgressBar value={50} size="small" />
          <Typography variant="caption" style={{
          marginTop: '4px',
          display: 'block'
        }}>
            Compact spaces without label display
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            Medium (8px) - Default
          </Typography>
          <ProgressBar value={60} size="medium" label="Standard Progress" />
          <Typography variant="caption" style={{
          marginTop: '4px',
          display: 'block'
        }}>
            Standard use cases with balanced visibility
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            Large (12px)
          </Typography>
          <ProgressBar value={80} size="large" label="Prominent Progress" />
          <Typography variant="caption" style={{
          marginTop: '4px',
          display: 'block'
        }}>
            Prominent displays and dashboard metrics
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            XLarge (16px)
          </Typography>
          <ProgressBar value={90} size="xlarge" label="Key Metric" />
          <Typography variant="caption" style={{
          marginTop: '4px',
          display: 'block'
        }}>
            Key performance indicators and hero sections
          </Typography>
        </div>
      </div>
    </div>
}`,...(X=(G=u.parameters)==null?void 0:G.docs)==null?void 0:X.source},description:{story:"All Size Variants",...(_=(K=u.parameters)==null?void 0:K.docs)==null?void 0:_.description}}};var Y,J,Q,Z,ee;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{
        marginBottom: '24px'
      }}>
          Type Variants
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '24px'
      }}>
          Four semantic types for different contexts and meanings.
        </Typography>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            Default (Purple)
          </Typography>
          <ProgressBar value={65} type="default" label="Standard Progress" />
          <Typography variant="caption" style={{
          marginTop: '4px',
          display: 'block'
        }}>
            Standard progress tracking for general operations
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            Success (Green)
          </Typography>
          <ProgressBar value={100} type="success" label="Upload Complete" />
          <Typography variant="caption" style={{
          marginTop: '4px',
          display: 'block'
        }}>
            Completed or successful operations
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            Warning (Yellow)
          </Typography>
          <ProgressBar value={45} type="warning" label="Storage Usage" />
          <Typography variant="caption" style={{
          marginTop: '4px',
          display: 'block'
        }}>
            Operations requiring attention or caution
          </Typography>
        </div>

        <div>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            Alert (Red)
          </Typography>
          <ProgressBar value={85} type="alert" label="Critical Threshold" />
          <Typography variant="caption" style={{
          marginTop: '4px',
          display: 'block'
        }}>
            Critical operations or errors needing immediate attention
          </Typography>
        </div>
      </div>
    </div>
}`,...(Q=(J=x.parameters)==null?void 0:J.docs)==null?void 0:Q.source},description:{story:"All Type Variants",...(ee=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:ee.description}}};var ae,re,se,ie,te;h.parameters={...h.parameters,docs:{...(ae=h.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Typography variant="headingL" weight="semibold" style={{
      marginBottom: '16px'
    }}>
        Progress Values
      </Typography>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ProgressBar value={0} label="Not Started" />
        <ProgressBar value={25} label="Getting Started" />
        <ProgressBar value={50} label="Halfway There" />
        <ProgressBar value={75} label="Almost Done" />
        <ProgressBar value={100} type="success" label="Complete" />
      </div>
    </div>
}`,...(se=(re=h.parameters)==null?void 0:re.docs)==null?void 0:se.source},description:{story:"Different Progress Values",...(te=(ie=h.parameters)==null?void 0:ie.docs)==null?void 0:te.description}}};var le,oe,ne,de,pe;v.parameters={...v.parameters,docs:{...(le=v.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Loading State
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '24px'
      }}>
          Use when progress is unknown or indeterminate. Shows animated indicator.
        </Typography>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ProgressBar value={0} isLoading label="Processing..." />
        <ProgressBar value={0} isLoading size="large" label="Analyzing Data..." />
        <ProgressBar value={0} isLoading type="success" label="Syncing..." />
      </div>
    </div>
}`,...(ne=(oe=v.parameters)==null?void 0:oe.docs)==null?void 0:ne.source},description:{story:"Loading/Indeterminate State",...(pe=(de=v.parameters)==null?void 0:de.docs)==null?void 0:pe.description}}};var ce,ge,me,ye,ue;f.parameters={...f.parameters,docs:{...(ce=f.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Error State
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '24px'
      }}>
          Display error messages when operations fail or encounter issues.
        </Typography>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ProgressBar value={35} isInvalid errorMessage="Upload failed. Please try again." label="File Upload" />
        <ProgressBar value={60} isInvalid errorMessage="Connection timeout. Retrying..." label="Sync Progress" size="large" />
      </div>
    </div>
}`,...(me=(ge=f.parameters)==null?void 0:ge.docs)==null?void 0:me.source},description:{story:"Error State",...(ue=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:ue.description}}};var xe,he,ve,fe,be;b.parameters={...b.parameters,docs:{...(xe=b.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Disabled State
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '24px'
      }}>
          Reduced opacity and no interaction when disabled.
        </Typography>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ProgressBar value={50} disabled label="Disabled Progress" />
        <ProgressBar value={75} disabled type="success" label="Completed (Disabled)" size="large" />
      </div>
    </div>
}`,...(ve=(he=b.parameters)==null?void 0:he.docs)==null?void 0:ve.source},description:{story:"Disabled State",...(be=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:be.description}}};var Te,je,we,Be,Pe;T.parameters={...T.parameters,docs:{...(Te=T.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Progress Bars Without Labels
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '24px'
      }}>
          Compact display without label or percentage text.
        </Typography>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ProgressBar value={30} showPercentage={false} />
        <ProgressBar value={60} type="success" showPercentage={false} />
        <ProgressBar value={80} type="warning" size="large" showPercentage={false} />
      </div>
    </div>
}`,...(we=(je=T.parameters)==null?void 0:je.docs)==null?void 0:we.source},description:{story:"Without Label",...(Pe=(Be=T.parameters)==null?void 0:Be.docs)==null?void 0:Pe.description}}};var Se,De,Le,Ce,ke;j.parameters={...j.parameters,docs:{...(Se=j.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Custom Label Rendering
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '24px'
      }}>
          Use customLabel prop for complete control over label content.
        </Typography>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ProgressBar value={45} customLabel={({
        value
      }) => <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
              <Typography variant="body" weight="semibold">
                Downloading: report.pdf
              </Typography>
              <Typography variant="caption">
                {value}% • 2.5 MB / 5.5 MB
              </Typography>
            </div>} />

        <ProgressBar value={75} type="success" size="large" customLabel={() => <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px'
      }}>
              <Typography variant="headingS" weight="semibold">
                Installation Progress
              </Typography>
              <Typography variant="caption">
                Step 3 of 4 • Configuring dependencies...
              </Typography>
            </div>} />
      </div>
    </div>
}`,...(Le=(De=j.parameters)==null?void 0:De.docs)==null?void 0:Le.source},description:{story:"Custom Label Rendering",...(ke=(Ce=j.parameters)==null?void 0:Ce.docs)==null?void 0:ke.description}}};var ze,Re,Ae,$e,Me;w.parameters={...w.parameters,docs:{...(ze=w.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  render: () => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 1;
        });
      }, 50);
      return () => clearInterval(timer);
    }, []);
    return <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <Typography variant="headingL" weight="semibold" style={{
          marginBottom: '16px'
        }}>
            Animated Progress
          </Typography>
          <Typography variant="body" style={{
          marginBottom: '24px'
        }}>
            Smooth transitions when progress value changes.
          </Typography>
        </div>

        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px'
      }}>
          <ProgressBar value={progress} label="Auto-incrementing" />
          <ProgressBar value={progress} type={progress < 30 ? 'alert' : progress < 70 ? 'warning' : 'success'} size="large" label="Dynamic Type" />
        </div>
      </div>;
  }
}`,...(Ae=(Re=w.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source},description:{story:"Animated Progress Demo",...(Me=($e=w.parameters)==null?void 0:$e.docs)==null?void 0:Me.description}}};var Ie,Ne,Fe,Ue,qe;B.parameters={...B.parameters,docs:{...(Ie=B.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  render: () => {
    const progressRef = useState<HTMLDivElement | null>(null)[1];
    return <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <Typography variant="headingL" weight="semibold" style={{
          marginBottom: '16px'
        }}>
            ForwardRef Support
          </Typography>
          <Typography variant="body" style={{
          marginBottom: '24px'
        }}>
            Access the underlying DOM element via ref for imperative operations.
          </Typography>
        </div>

        <ProgressBar ref={progressRef} value={70} label="Referenced Progress Bar" size="large" />

        <Typography variant="caption">
          The ref provides access to the container div element for DOM manipulation.
        </Typography>
      </div>;
  }
}`,...(Fe=(Ne=B.parameters)==null?void 0:Ne.docs)==null?void 0:Fe.source},description:{story:"ForwardRef Usage",...(qe=(Ue=B.parameters)==null?void 0:Ue.docs)==null?void 0:qe.description}}};var Ve,Ee,We,Oe,He;P.parameters={...P.parameters,docs:{...(Ve=P.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Polymorphic Rendering
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '24px'
      }}>
          Render as different HTML elements using the 'as' prop.
        </Typography>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ProgressBar as="div" value={50} label="Rendered as div (default)" />
        <ProgressBar as="section" value={75} label="Rendered as section" />
        <ProgressBar as="article" value={90} type="success" label="Rendered as article" />
      </div>

      <Typography variant="caption">
        Inspect the DOM to see different HTML elements being used.
      </Typography>
    </div>
}`,...(We=(Ee=P.parameters)==null?void 0:Ee.docs)==null?void 0:We.source},description:{story:"Polymorphic 'as' Prop",...(He=(Oe=P.parameters)==null?void 0:Oe.docs)==null?void 0:He.description}}};var Ge,Xe,Ke,_e,Ye;S.parameters={...S.parameters,docs:{...(Ge=S.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Custom Styling
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '24px'
      }}>
          Override styles using className, style, and slot-specific classNames.
        </Typography>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ProgressBar value={60} label="Custom Container" className="custom-progress" style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px'
      }} />

        <ProgressBar value={80} type="success" label="Custom Track & Fill" trackClassName="custom-track" fillClassName="custom-fill" />
      </div>
    </div>
}`,...(Ke=(Xe=S.parameters)==null?void 0:Xe.docs)==null?void 0:Ke.source},description:{story:"Customization via ClassName",...(Ye=(_e=S.parameters)==null?void 0:_e.docs)==null?void 0:Ye.description}}};var Je,Qe,Ze,ea,aa;D.parameters={...D.parameters,docs:{...(Je=D.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <div>
        <Typography variant="headingL" weight="semibold" style={{
        marginBottom: '16px'
      }}>
          Accessibility Features
        </Typography>
        <Typography variant="body" style={{
        marginBottom: '24px'
      }}>
          Full ARIA support with proper roles, labels, and state attributes.
        </Typography>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <ProgressBar value={50} label="File Upload" aria-label="File upload progress" aria-describedby="upload-description" />
        <Typography variant="caption">
          <span id="upload-description">Uploading document.pdf to cloud storage</span>
        </Typography>

        <ProgressBar value={0} isLoading label="Processing" aria-label="Processing your request" />

        <ProgressBar value={75} isInvalid errorMessage="Network error occurred" label="Sync Status" aria-label="Synchronization progress" />
      </div>

      <div style={{
      marginTop: '16px',
      padding: '16px',
      background: '#f5f5f5',
      borderRadius: '8px'
    }}>
        <Typography variant="headingS" weight="semibold" style={{
        marginBottom: '8px'
      }}>
          ARIA Attributes
        </Typography>
        <div style={{
        paddingLeft: '20px'
      }}>
          <Typography variant="caption" as="div">
            <ul style={{
            margin: 0,
            paddingLeft: '20px'
          }}>
              <li>role="progressbar" on track element</li>
              <li>aria-valuenow for current value</li>
              <li>aria-valuemin and aria-valuemax for range</li>
              <li>aria-label for accessible name</li>
              <li>aria-busy for loading state</li>
              <li>aria-invalid for error state</li>
              <li>role="alert" for error messages</li>
            </ul>
          </Typography>
        </div>
      </div>
    </div>
}`,...(Ze=(Qe=D.parameters)==null?void 0:Qe.docs)==null?void 0:Ze.source},description:{story:"Accessibility Features",...(aa=(ea=D.parameters)==null?void 0:ea.docs)==null?void 0:aa.description}}};var ra,sa,ia,ta,la;L.parameters={...L.parameters,docs:{...(ra=L.parameters)==null?void 0:ra.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <Typography variant="headingL" weight="semibold" style={{
      marginBottom: '16px'
    }}>
        Real-World Use Cases
      </Typography>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <Typography variant="headingM" weight="semibold" style={{
          marginBottom: '12px'
        }}>
            File Upload Dashboard
          </Typography>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <ProgressBar value={100} type="success" label="report-2024.pdf" size="small" />
            <ProgressBar value={65} label="presentation.pptx" size="small" />
            <ProgressBar value={30} type="warning" label="large-video.mp4" size="small" />
          </div>
        </div>

        <div>
          <Typography variant="headingM" weight="semibold" style={{
          marginBottom: '12px'
        }}>
            Storage Usage Monitor
          </Typography>
          <ProgressBar value={85} type="alert" label="Storage Capacity" size="large" customLabel={({
          value
        }) => <div style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}>
                <Typography variant="body" weight="semibold">
                  Storage Usage
                </Typography>
                <Typography variant="caption">
                  {value}% • 8.5 GB / 10 GB
                </Typography>
              </div>} />
        </div>

        <div>
          <Typography variant="headingM" weight="semibold" style={{
          marginBottom: '12px'
        }}>
            Multi-Step Onboarding
          </Typography>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <ProgressBar value={100} type="success" label="Step 1: Account Setup" showPercentage={false} />
            <ProgressBar value={100} type="success" label="Step 2: Profile Information" showPercentage={false} />
            <ProgressBar value={50} label="Step 3: Preferences" showPercentage={false} />
            <ProgressBar value={0} label="Step 4: Verification" showPercentage={false} />
          </div>
        </div>
      </div>
    </div>
}`,...(ia=(sa=L.parameters)==null?void 0:sa.docs)==null?void 0:ia.source},description:{story:"Real-World Examples",...(la=(ta=L.parameters)==null?void 0:ta.docs)==null?void 0:la.description}}};const Na=["Default","AllSizes","AllTypes","ProgressValues","LoadingState","ErrorState","DisabledState","WithoutLabel","CustomLabel","AnimatedProgress","ForwardRefUsage","PolymorphicAs","CustomStyling","AccessibilityFeatures","RealWorldExamples"];export{D as AccessibilityFeatures,u as AllSizes,x as AllTypes,w as AnimatedProgress,j as CustomLabel,S as CustomStyling,y as Default,b as DisabledState,f as ErrorState,B as ForwardRefUsage,v as LoadingState,P as PolymorphicAs,h as ProgressValues,L as RealWorldExamples,T as WithoutLabel,Na as __namedExportsOrder,Ia as default};
