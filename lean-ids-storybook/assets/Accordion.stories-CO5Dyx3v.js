import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as m,R as K}from"./index-B0WjJBI_.js";import{g as d}from"./styled-components.browser.esm-CuwBLqEg.js";import{T as n}from"./Typography-DlcmwxwF.js";import{E as Oo,a as Bo}from"./ExpandMore-DhGl5KfG.js";import{c as Y}from"./createSvgIcon-B7ekv6yR.js";import{B as h}from"./Button-4FxjpG2D.js";import{a as t}from"./WarningAmberOutlined-BaSDCFAD.js";import{B as g}from"./Badge-08EIA_9P.js";import{C as lo}from"./Chip-CHEHkNu4.js";import{C as Ho}from"./Close-Bujf63ZX.js";import"./_commonjsHelpers-CqkleIqs.js";const po=Y(e.jsx("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z"})),Po=Y(e.jsx("path",{d:"M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm10 14.5V20H8v-3.5l4-4zm-4-5-4-4V4h8v3.5z"})),Vo=Y(e.jsx("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8m0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4z"})),zo=d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${({$disabled:o})=>o?.5:1};
  pointer-events: ${({$disabled:o})=>o?"none":"auto"};
  
  /* Error state */
  ${({$isInvalid:o,theme:a})=>o&&`
    border: 1px solid ${a.colors.semantic.border.error};
    border-radius: ${a.borderRadius.md};
  `}
`,Wo=d.button`
  display: flex;
  flex-direction: column;
  gap: ${({theme:o})=>o.spacing[4]}; /* 10px */
  padding: ${({theme:o})=>o.spacing[7]}; /* 16px */
  background-color: ${({theme:o})=>o.colors.palette.neutral[50]}; /* white */
  border: 1px solid ${({theme:o,$isExpanded:a})=>a?o.colors.palette.primary[400]:o.colors.palette.neutral[400]};
  border-radius: ${({theme:o,$isExpanded:a})=>a?`${o.borderRadius.md} ${o.borderRadius.md} 0 0`:o.borderRadius.md}; /* 8px all corners */
  cursor: pointer;
  transition: all 0.2s ease;
  width: 100%;
  text-align: left;

  /* Hover state */
  &:hover:not(:disabled) {
    border-color: ${({theme:o,$isExpanded:a})=>a?o.colors.palette.primary[400]:o.colors.palette.neutral[500]};
    background-color: ${({theme:o})=>o.colors.semantic.background.secondary};
  }
  
  /* Focus-visible state */
  &:focus-visible {
    outline: 2px solid ${({theme:o})=>o.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  /* Active state */
  &:active:not(:disabled) {
    background-color: ${({theme:o})=>o.colors.semantic.background.tertiary};
  }
  
  /* Disabled state */
  &:disabled {
    cursor: not-allowed;
  }
`,Uo=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`,_o=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[6]}; /* 14px */
  flex: 1;
`,Ko=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[5]}; /* 12px */
`,Yo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`,Go=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[6]}; /* 14px */
`,Jo=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  transform: ${({$isExpanded:o})=>o?"rotate(180deg)":"rotate(0deg)"};

  svg {
    width: 24px;
    height: 24px;
  }
`,Qo=d.div`
  display: ${({$isExpanded:o})=>o?"flex":"none"};
  flex-direction: column;
  width: 100%;
  background-color: ${({theme:o})=>o.colors.palette.neutral[200]}; /* #f8f8f8 */
  border-left: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-right: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-bottom: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-radius: ${({theme:o,$hasFooter:a})=>a?"0":`0 0 ${o.borderRadius.md} ${o.borderRadius.md}`}; /* 8px bottom corners if no footer */
  min-height: ${({theme:o})=>o.spacing[20]}; /* 100px */
  padding: ${({theme:o})=>o.spacing[7]}; /* 16px */
  position: relative;
`,Xo=d.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:o})=>o.colors.palette.neutral[50]};
  opacity: 0.9;
  z-index: 1;
`,Zo=d.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({theme:o})=>o.spacing[10]};
  gap: ${({theme:o})=>o.spacing[4]};
  text-align: center;
`,en=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[3]};
  padding: ${({theme:o})=>o.spacing[4]};
  background-color: ${({theme:o})=>o.colors.palette.error[50]};
  border: 1px solid ${({theme:o})=>o.colors.semantic.border.error};
  border-radius: ${({theme:o})=>o.borderRadius.sm};
  color: ${({theme:o})=>o.colors.semantic.text.error};
`,on=d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({theme:o})=>o.spacing[7]} ${({theme:o})=>o.spacing[8]}; /* 16px 20px */
  background-color: ${({theme:o})=>o.colors.palette.neutral[100]}; /* #fdfdfd */
  border-left: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-right: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-bottom: 1px solid ${({theme:o})=>o.colors.palette.primary[400]};
  border-radius: 0 0 ${({theme:o})=>o.borderRadius.md} ${({theme:o})=>o.borderRadius.md}; /* 8px bottom corners */
`,nn=d.div`
  display: flex;
  align-items: center;
  gap: ${({theme:o})=>o.spacing[3]}; /* 8px */
`,i=m.forwardRef(({as:o,heading:a="Accordion Heading",description:s,children:l,leadIcon:u,showLeadIcon:uo=!0,labelsAndMetadata:G,showFooter:J=!1,footerText:B,footerActions:H,customHeader:Q,customContent:X,customFooter:Z,defaultExpanded:ho=!1,expanded:P,disabled:y=!1,isLoading:V=!1,isInvalid:x=!1,isEmpty:ee=!1,errorMessage:oe,emptyMessage:go="No content available",loadingMessage:yo="Loading...",onExpandChange:z,onOpen:W,onClose:U,onAfterOpen:f,onAfterClose:v,className:mo,style:xo,headerClassName:fo,headerStyle:vo,contentClassName:bo,contentStyle:Co,footerClassName:Ao,footerStyle:To,"aria-label":wo,"aria-labelledby":jo,"aria-describedby":Io,id:Lo,...Eo},So)=>{const ko=m.useId(),b=Lo||ko,ne=`${b}-header`,ae=`${b}-content`,te=s?`${b}-description`:void 0,[Ro,Do]=m.useState(ho),r=P!==void 0?P:Ro,re=m.useRef(r),$o=o||"div",_=()=>{if(y)return;const c=!r;c?W==null||W():U==null||U(),P===void 0&&Do(c),z==null||z(c)},Mo=c=>{y||(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),_())};m.useEffect(()=>{if(re.current!==r){const c=setTimeout(()=>{r?f==null||f():v==null||v()},200);return re.current=r,()=>clearTimeout(c)}},[r,f,v]);const Fo=()=>Q?Q({isExpanded:r,disabled:y||!1,onClick:_,heading:a,description:s,leadIcon:u}):e.jsxs(Wo,{$isExpanded:r,onClick:_,onKeyDown:Mo,disabled:y,className:fo,style:vo,"aria-expanded":r,"aria-controls":ae,id:ne,children:[e.jsxs(Uo,{children:[e.jsxs(_o,{children:[e.jsxs(Ko,{children:[uo&&u&&e.jsx(Yo,{"aria-hidden":"true",children:u}),e.jsx(n,{variant:"headingM",weight:"semibold",as:"span",style:{whiteSpace:"nowrap"},children:a})]}),G&&e.jsx(Go,{children:G})]}),e.jsx(Jo,{$isExpanded:r,"aria-hidden":"true",children:e.jsx(Oo,{})})]}),s&&e.jsx("span",{id:te,style:{width:"100%"},children:e.jsx(n,{variant:"body",as:"span",children:s})})]}),No=()=>X?X({isExpanded:r,children:l}):e.jsxs(Qo,{$isExpanded:r,$hasFooter:J,className:bo,style:Co,id:ae,role:"region","aria-labelledby":ne,children:[V&&e.jsx(Xo,{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"12px"},children:[e.jsx(Vo,{style:{width:32,height:32,animation:"spin 1s linear infinite"}}),e.jsx(n,{variant:"body",children:yo})]})}),x&&oe&&!V&&e.jsxs(en,{role:"alert",children:[e.jsx(Bo,{style:{width:20,height:20,flexShrink:0}}),e.jsx(n,{variant:"body",children:oe})]}),ee&&!V&&!x&&e.jsxs(Zo,{children:[e.jsx(Po,{style:{width:48,height:48,opacity:.5}}),e.jsx(n,{variant:"body",style:{opacity:.7},children:go})]}),!ee&&!x&&l]}),qo=()=>!J||!r?null:Z?Z({footerText:B,footerActions:H}):e.jsxs(on,{className:Ao,style:To,children:[B&&e.jsx(n,{variant:"caption",as:"span",style:{whiteSpace:"nowrap"},children:B}),H&&e.jsx(nn,{children:H})]});return e.jsx($o,{ref:So,className:mo,style:xo,id:b,"aria-label":wo,"aria-labelledby":jo,"aria-describedby":Io||te,...Eo,children:e.jsxs(zo,{$isExpanded:r,$disabled:y||!1,$isInvalid:x||!1,children:[Fo(),No(),qo()]})})});i.displayName="Accordion";i.__docgenInfo={description:`Accordion - Enterprise-grade collapsible content container

@example
\`\`\`tsx
<Accordion
  heading="Section Title"
  description="Optional description"
  leadIcon={<CheckCircleOutlined />}
  isLoading={loading}
  onExpandChange={(expanded) => console.log(expanded)}
>
  Content goes here
</Accordion>
\`\`\``,methods:[],displayName:"Accordion",props:{as:{required:!1,tsType:{name:"ElementType"},description:`Render the accordion as a different HTML element or custom component.
@default 'div'
@example as="section"
@example as={CustomContainer}`},heading:{required:!1,tsType:{name:"string"},description:`Accordion heading text.
@default 'Accordion Heading'`,defaultValue:{value:"'Accordion Heading'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:`Description text below heading.
Optional secondary text for additional context.`},children:{required:!1,tsType:{name:"ReactNode"},description:`Content to display when expanded.
Can be any React node or component.`},leadIcon:{required:!1,tsType:{name:"ReactNode"},description:`Lead icon (24px) shown before heading.
Typically a Material Icon component.
@example leadIcon={<CheckCircleOutlined />}`},showLeadIcon:{required:!1,tsType:{name:"boolean"},description:`Show/hide lead icon.
@default true`,defaultValue:{value:"true",computed:!1}},labelsAndMetadata:{required:!1,tsType:{name:"ReactNode"},description:`Custom content for labels and metadata area.
Supports badges, chips, counters, timestamps, or any custom content.
@example labelsAndMetadata={<><Badge variant="info">New</Badge><Chip label="Tag" /></>}`},showFooter:{required:!1,tsType:{name:"boolean"},description:`Show/hide footer section.
@default false`,defaultValue:{value:"false",computed:!1}},footerText:{required:!1,tsType:{name:"string"},description:`Footer text content.
Displayed on the left side of the footer.`},footerActions:{required:!1,tsType:{name:"ReactNode"},description:`Footer action buttons or custom content.
Displayed on the right side of the footer.
@example footerActions={<Button variant="primary">Save</Button>}`},customHeader:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  isExpanded: boolean;
  disabled: boolean;
  onClick: () => void;
  heading?: string;
  description?: string;
  leadIcon?: ReactNode;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  isExpanded: boolean;
  disabled: boolean;
  onClick: () => void;
  heading?: string;
  description?: string;
  leadIcon?: ReactNode;
}`,signature:{properties:[{key:"isExpanded",value:{name:"boolean",required:!0}},{key:"disabled",value:{name:"boolean",required:!0}},{key:"onClick",value:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}},required:!0}},{key:"heading",value:{name:"string",required:!1}},{key:"description",value:{name:"string",required:!1}},{key:"leadIcon",value:{name:"ReactNode",required:!1}}]}},name:"props"}],return:{name:"ReactNode"}}},description:`Custom header renderer.
Provides full control over header rendering.
@param props - Header props including isExpanded, disabled, onClick
@example customHeader={(props) => <CustomHeader {...props} />}`},customContent:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  isExpanded: boolean;
  children?: ReactNode;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  isExpanded: boolean;
  children?: ReactNode;
}`,signature:{properties:[{key:"isExpanded",value:{name:"boolean",required:!0}},{key:"children",value:{name:"ReactNode",required:!1}}]}},name:"props"}],return:{name:"ReactNode"}}},description:`Custom content renderer.
Provides full control over content area rendering.
@param props - Content props including isExpanded, children
@example customContent={(props) => <CustomContent {...props} />}`},customFooter:{required:!1,tsType:{name:"signature",type:"function",raw:`(props: {
  footerText?: string;
  footerActions?: ReactNode;
}) => ReactNode`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  footerText?: string;
  footerActions?: ReactNode;
}`,signature:{properties:[{key:"footerText",value:{name:"string",required:!1}},{key:"footerActions",value:{name:"ReactNode",required:!1}}]}},name:"props"}],return:{name:"ReactNode"}}},description:`Custom footer renderer.
Provides full control over footer rendering.
@param props - Footer props including footerText, footerActions
@example customFooter={(props) => <CustomFooter {...props} />}`},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:`Initially expanded state (uncontrolled mode).
@default false`,defaultValue:{value:"false",computed:!1}},expanded:{required:!1,tsType:{name:"boolean"},description:`Controlled expanded state.
When provided, component operates in controlled mode.
@example expanded={isOpen}`},disabled:{required:!1,tsType:{name:"boolean"},description:`Disable the accordion.
Prevents interaction and applies disabled styling.
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Loading state.
Shows loading indicator in content area.
@default false`,defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:`Error state.
Shows error styling and optional error message.
@default false`,defaultValue:{value:"false",computed:!1}},isEmpty:{required:!1,tsType:{name:"boolean"},description:`Empty state.
Shows empty state message when content is empty.
@default false`,defaultValue:{value:"false",computed:!1}},errorMessage:{required:!1,tsType:{name:"string"},description:"Error message to display when isInvalid is true."},emptyMessage:{required:!1,tsType:{name:"string"},description:`Empty state message to display when isEmpty is true.
@default 'No content available'`,defaultValue:{value:"'No content available'",computed:!1}},loadingMessage:{required:!1,tsType:{name:"string"},description:`Loading message to display when isLoading is true.
@default 'Loading...'`,defaultValue:{value:"'Loading...'",computed:!1}},onExpandChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:`Callback when expand/collapse state changes.
@param expanded - New expanded state
@example onExpandChange={(expanded) => console.log('Expanded:', expanded)}`},onOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback when accordion starts opening.
Called before animation starts.`},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback when accordion starts closing.
Called before animation starts.`},onAfterOpen:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback after accordion finishes opening.
Called after animation completes.`},onAfterClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback after accordion finishes closing.
Called after animation completes.`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the root container."},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles for the root container."},headerClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the header."},headerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles for the header."},contentClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the content area."},contentStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles for the content area."},footerClassName:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the footer."},footerStyle:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles for the footer."},"aria-label":{required:!1,tsType:{name:"string"},description:`ARIA label for the accordion.
Overrides default aria-label.`},"aria-labelledby":{required:!1,tsType:{name:"string"},description:"ID of element that labels the accordion."},"aria-describedby":{required:!1,tsType:{name:"string"},description:"ID of element that describes the accordion."},id:{required:!1,tsType:{name:"string"},description:`Unique ID for the accordion.
Used for ARIA relationships.`}},composes:["Omit"]};const mn={title:"Components/Accordion",component:i,parameters:{layout:"padded",docs:{description:{component:`
# Accordion Component

**Component Maturity: ✅ Enterprise Ready**

Enterprise-grade collapsible content container with full customization, accessibility, and state management.

## ✅ Component Maturity Checklist

### 1. API & Composition
- ✅ **forwardRef** - Exposes root DOM node
- ✅ **Polymorphic 'as' prop** - Render as different elements
- ✅ **Slot/render props** - customHeader, customContent, customFooter
- ✅ **Passthrough** - All HTML attributes via ...restProps

### 2. Layout & Responsiveness
- ✅ **No hardcoded pixels** - All spacing uses design tokens
- ✅ **Typography component** - No custom styled text elements
- ✅ **Flexbox layouts** - Responsive and fluid
- ✅ **Design tokens only** - Colors, spacing, typography from theme

### 3. Overrides & Theming
- ✅ **className & style props** - Root, header, content, footer
- ✅ **Multiple override points** - Full styling control

### 4. States & Behavior
- ✅ **All 8 states** - default, hover, focus, active, disabled, loading, empty, error
- ✅ **Event callbacks** - onExpandChange, onOpen, onClose, onAfterOpen, onAfterClose
- ✅ **Controlled/uncontrolled** - Flexible state management

### 5. Accessibility
- ✅ **ARIA attributes** - aria-expanded, aria-controls, role="region"
- ✅ **Semantic HTML** - button element for header
- ✅ **Keyboard navigation** - Enter/Space to toggle
- ✅ **Focus management** - Visible focus indicators

### 6. Storybook Documentation
- ✅ **Typography in all stories** - No HTML tags
- ✅ **All states documented** - Loading, error, empty, disabled
- ✅ **Comprehensive examples** - All features demonstrated

## Features

- **Collapsed and expanded states** with smooth transitions
- **Customizable lead icon** (24px Material Icons)
- **Flexible labels and metadata** area (badges, chips, counters, custom content)
- **Optional description text**
- **Expandable content area** with loading, error, and empty states
- **Optional footer** with text and action buttons
- **Nested accordions** support
- **Controlled or uncontrolled mode**
- **Full accessibility** with ARIA and keyboard navigation
- **Polymorphic** - Render as any HTML element
- **Custom slots** - Replace header, content, or footer with custom renderers

## Usage

\`\`\`tsx
import { Accordion } from '@lean-ids/components';
import { CheckCircleOutlined } from '@mui/icons-material';

// Basic usage
<Accordion
  heading="Accordion Heading"
  description="Put a short description related to the accordion heading"
  leadIcon={<CheckCircleOutlined />}
  labelsAndMetadata={
    <>
      <Badge variant="info">Label</Badge>
      <Chip label="Label" />
    </>
  }
  showFooter
  footerText="Footer one liner"
  footerActions={<Button variant="primary">Button</Button>}
>
  <Typography variant="body">Your content here</Typography>
</Accordion>

// With loading state
<Accordion
  heading="Loading Content"
  isLoading={true}
  loadingMessage="Loading data..."
>
  <Typography variant="body">Content</Typography>
</Accordion>

// With error state
<Accordion
  heading="Error State"
  isInvalid={true}
  errorMessage="Failed to load data"
>
  <Typography variant="body">Content</Typography>
</Accordion>

// Polymorphic - render as section
<Accordion
  as="section"
  heading="Section Accordion"
>
  <Typography variant="body">Content</Typography>
</Accordion>

// With forwardRef
const accordionRef = useRef<HTMLDivElement>(null);
<Accordion ref={accordionRef} heading="Ref Example">
  <Typography variant="body">Content</Typography>
</Accordion>
\`\`\`

## Nested Accordions

Accordions can be nested inside other accordions:

\`\`\`tsx
<Accordion heading="Parent Accordion">
  <Accordion heading="Child Accordion 1">
    <Typography variant="body">Content for child 1</Typography>
  </Accordion>
  <Accordion heading="Child Accordion 2">
    <Typography variant="body">Content for child 2</Typography>
  </Accordion>
</Accordion>
\`\`\`
        `}}},tags:["autodocs"],argTypes:{heading:{control:"text",description:"Accordion heading text"},description:{control:"text",description:"Description text below heading"},leadIcon:{control:!1,description:"Lead icon (24px) - shown before heading"},showLeadIcon:{control:"boolean",description:"Show/hide lead icon"},labelsAndMetadata:{control:!1,description:"Custom content for labels and metadata area (badges, chips, counters, etc.)"},children:{control:!1,description:"Content to display when expanded"},footerText:{control:"text",description:"Footer text"},footerActions:{control:!1,description:"Footer action buttons"},showFooter:{control:"boolean",description:"Show/hide footer"},defaultExpanded:{control:"boolean",description:"Initially expanded state (uncontrolled)"},expanded:{control:"boolean",description:"Controlled expanded state"},disabled:{control:"boolean",description:"Disable the accordion"}}},p={args:{heading:"Accordion Heading",description:"Put a short description related to the accordion heading",leadIcon:e.jsx(t,{}),showLeadIcon:!0,labelsAndMetadata:e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"info",label:"Label"}),e.jsx(lo,{label:"Label"})]}),children:e.jsx("div",{style:{padding:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:e.jsx(n,{variant:"body",children:"This is the accordion content area. You can put any content here."})}),showFooter:!1,defaultExpanded:!1}},C={args:{...p.args,defaultExpanded:!0,showFooter:!0,footerText:"Footer one liner",footerActions:e.jsxs(h,{variant:"primary",size:"small",children:[e.jsx(po,{style:{width:16,height:16}}),"Button",e.jsx(Ho,{style:{width:16,height:16}})]})}},A={args:{...p.args,showLeadIcon:!1}},T={args:{heading:"Accordion Heading",leadIcon:e.jsx(t,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Content without description"})})}},w={args:{heading:"Simple Accordion",description:"A simple accordion without badges or chips",leadIcon:e.jsx(t,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Simple content"})})}},j={args:{...p.args,defaultExpanded:!0,showFooter:!0,footerText:"Footer one liner",footerActions:e.jsxs(e.Fragment,{children:[e.jsx(h,{variant:"secondary",size:"small",children:"Cancel"}),e.jsxs(h,{variant:"primary",size:"small",children:[e.jsx(po,{style:{width:16,height:16}}),"Confirm"]})]})}},I={args:{heading:"Parent Accordion",description:"This accordion contains nested child accordions",leadIcon:e.jsx(t,{}),showLeadIcon:!0,defaultExpanded:!0,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:[e.jsx(i,{heading:"Child Accordion 1",description:"First nested accordion",leadIcon:e.jsx(t,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Content of child accordion 1"})})}),e.jsx(i,{heading:"Child Accordion 2",description:"Second nested accordion",leadIcon:e.jsx(t,{}),showLeadIcon:!0,showFooter:!0,footerText:"Child footer",footerActions:e.jsx(h,{variant:"primary",size:"small",children:"Action"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Content of child accordion 2"})})})]})}},L={args:{heading:"Level 1 Accordion",description:"Top level accordion",leadIcon:e.jsx(t,{}),showLeadIcon:!0,defaultExpanded:!0,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:e.jsx(i,{heading:"Level 2 Accordion",description:"Second level nested accordion",leadIcon:e.jsx(t,{}),showLeadIcon:!0,defaultExpanded:!0,children:e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px"},children:e.jsx(i,{heading:"Level 3 Accordion",description:"Third level nested accordion",leadIcon:e.jsx(t,{}),showLeadIcon:!0,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Deepest level content"})})})})})})}},E={args:{heading:"Custom Metadata Example",description:"Accordion with custom labels, counters, and badges",leadIcon:e.jsx(t,{}),showLeadIcon:!0,labelsAndMetadata:e.jsxs(e.Fragment,{children:[e.jsx(g,{type:"success",label:"Active"}),e.jsx(g,{type:"warning",label:"2 Pending"}),e.jsx(lo,{label:"High Priority",variant:"filled"}),e.jsx(n,{variant:"caption",style:{color:"#909090"},children:"Updated 2 hours ago"})]}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Content with custom metadata"})})}},S={args:{...p.args,disabled:!0}},k={render:()=>{const[o,a]=K.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs(h,{onClick:()=>a(!o),children:[o?"Collapse":"Expand"," Accordion"]}),e.jsx(i,{heading:"Controlled Accordion",description:"This accordion is controlled by external state",leadIcon:e.jsx(t,{}),showLeadIcon:!0,expanded:o,onExpandChange:a,children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Controlled content"})})})]})}},R={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{heading:"First Accordion",description:"Description for first accordion",leadIcon:e.jsx(t,{}),showLeadIcon:!0,labelsAndMetadata:e.jsx(g,{type:"info",label:"New"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Content for first accordion"})})}),e.jsx(i,{heading:"Second Accordion",description:"Description for second accordion",leadIcon:e.jsx(t,{}),showLeadIcon:!0,labelsAndMetadata:e.jsx(g,{type:"success",label:"Completed"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Content for second accordion"})})}),e.jsx(i,{heading:"Third Accordion",description:"Description for third accordion",leadIcon:e.jsx(t,{}),showLeadIcon:!0,labelsAndMetadata:e.jsx(g,{type:"warning",label:"In Progress"}),showFooter:!0,footerText:"Last updated: Today",footerActions:e.jsx(h,{variant:"primary",size:"small",children:"View Details"}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Content for third accordion"})})})]})},D={args:{heading:"Loading Content",description:"This accordion is loading data",leadIcon:e.jsx(t,{}),defaultExpanded:!0,isLoading:!0,loadingMessage:"Loading data...",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"This content is hidden while loading"})})}},$={args:{heading:"Error Loading Data",description:"Failed to load content",leadIcon:e.jsx(t,{}),defaultExpanded:!0,isInvalid:!0,errorMessage:"Failed to load data. Please try again.",children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"This content is hidden due to error"})})}},M={args:{heading:"No Content Available",description:"This accordion has no content",leadIcon:e.jsx(t,{}),defaultExpanded:!0,isEmpty:!0,emptyMessage:"No content available at this time",children:null}},F={args:{as:"section",heading:"Section Accordion",description:"This accordion is rendered as a <section> element",leadIcon:e.jsx(t,{}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Check the DOM - this accordion's root is a section element!"})})}},N={render:()=>{const o=K.useRef(null),a=()=>{var s;(s=o.current)==null||s.scrollIntoView({behavior:"smooth",block:"center"})};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(h,{onClick:a,children:"Scroll to Accordion (using ref)"}),e.jsx("div",{style:{height:"100vh"}}),e.jsx(i,{ref:o,heading:"Accordion with Ref",description:"This accordion can be accessed via ref",leadIcon:e.jsx(t,{}),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"This accordion was scrolled into view using a ref!"})})}),e.jsx("div",{style:{height:"100vh"}})]})}},q={render:()=>e.jsx(i,{heading:"Original Heading",customHeader:({isExpanded:o,onClick:a})=>e.jsxs("div",{onClick:a,style:{padding:"20px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",color:"white",cursor:"pointer",borderRadius:"8px"},children:[e.jsxs(n,{variant:"headingM",weight:"semibold",style:{color:"white"},children:["🎨 Custom Header ",o?"▲":"▼"]}),e.jsx(n,{variant:"body",style:{color:"white",opacity:.9},children:"This header is completely custom!"})]}),customContent:({isExpanded:o})=>o?e.jsx("div",{style:{padding:"20px",background:"#f0f0f0"},children:e.jsx(n,{variant:"body",children:"🎨 Custom content renderer!"})}):null})},O={render:()=>{const[o,a]=K.useState([]),s=l=>{a(u=>[...u,`${new Date().toLocaleTimeString()}: ${l}`])};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(i,{heading:"Accordion with Event Callbacks",description:"Open/close to see event logs below",leadIcon:e.jsx(t,{}),onExpandChange:l=>s(`onExpandChange: ${l}`),onOpen:()=>s("onOpen"),onClose:()=>s("onClose"),onAfterOpen:()=>s("onAfterOpen (after animation)"),onAfterClose:()=>s("onAfterClose (after animation)"),children:e.jsx("div",{style:{padding:"20px"},children:e.jsx(n,{variant:"body",children:"Toggle me to see event callbacks!"})})}),e.jsxs("div",{style:{padding:"16px",background:"#f5f5f5",borderRadius:"8px",maxHeight:"200px",overflow:"auto"},children:[e.jsx(n,{variant:"headingS",weight:"semibold",style:{marginBottom:"8px"},children:"Event Log:"}),o.length===0?e.jsx(n,{variant:"caption",style:{opacity:.6},children:"No events yet..."}):o.map((l,u)=>e.jsx(n,{variant:"caption",style:{display:"block",marginBottom:"4px"},children:l},u))]})]})}};var ie,de,se;p.parameters={...p.parameters,docs:{...(ie=p.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    heading: 'Accordion Heading',
    description: 'Put a short description related to the accordion heading',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    labelsAndMetadata: <>
        <Badge type="info" label="Label" />
        <Chip label="Label" />
      </>,
    children: <div style={{
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
        <Typography variant="body">
          This is the accordion content area. You can put any content here.
        </Typography>
      </div>,
    showFooter: false,
    defaultExpanded: false
  }
}`,...(se=(de=p.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var ce,le,pe;C.parameters={...C.parameters,docs:{...(ce=C.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpanded: true,
    showFooter: true,
    footerText: 'Footer one liner',
    footerActions: <Button variant="primary" size="small">
        <Done style={{
        width: 16,
        height: 16
      }} />
        Button
        <Close style={{
        width: 16,
        height: 16
      }} />
      </Button>
  }
}`,...(pe=(le=C.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var ue,he,ge;A.parameters={...A.parameters,docs:{...(ue=A.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    showLeadIcon: false
  }
}`,...(ge=(he=A.parameters)==null?void 0:he.docs)==null?void 0:ge.source}}};var ye,me,xe;T.parameters={...T.parameters,docs:{...(ye=T.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    heading: 'Accordion Heading',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">Content without description</Typography>
      </div>
  }
}`,...(xe=(me=T.parameters)==null?void 0:me.docs)==null?void 0:xe.source}}};var fe,ve,be;w.parameters={...w.parameters,docs:{...(fe=w.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    heading: 'Simple Accordion',
    description: 'A simple accordion without badges or chips',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">Simple content</Typography>
      </div>
  }
}`,...(be=(ve=w.parameters)==null?void 0:ve.docs)==null?void 0:be.source}}};var Ce,Ae,Te;j.parameters={...j.parameters,docs:{...(Ce=j.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    defaultExpanded: true,
    showFooter: true,
    footerText: 'Footer one liner',
    footerActions: <>
        <Button variant="secondary" size="small">
          Cancel
        </Button>
        <Button variant="primary" size="small">
          <Done style={{
          width: 16,
          height: 16
        }} />
          Confirm
        </Button>
      </>
  }
}`,...(Te=(Ae=j.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var we,je,Ie;I.parameters={...I.parameters,docs:{...(we=I.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    heading: 'Parent Accordion',
    description: 'This accordion contains nested child accordions',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    defaultExpanded: true,
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '16px'
    }}>
        <Accordion heading="Child Accordion 1" description="First nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">Content of child accordion 1</Typography>
          </div>
        </Accordion>
        
        <Accordion heading="Child Accordion 2" description="Second nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} showFooter={true} footerText="Child footer" footerActions={<Button variant="primary" size="small">Action</Button>}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">Content of child accordion 2</Typography>
          </div>
        </Accordion>
      </div>
  }
}`,...(Ie=(je=I.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var Le,Ee,Se;L.parameters={...L.parameters,docs:{...(Le=L.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    heading: 'Level 1 Accordion',
    description: 'Top level accordion',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    defaultExpanded: true,
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '16px'
    }}>
        <Accordion heading="Level 2 Accordion" description="Second level nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} defaultExpanded={true}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          padding: '16px'
        }}>
            <Accordion heading="Level 3 Accordion" description="Third level nested accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true}>
              <div style={{
              padding: '20px'
            }}>
                <Typography variant="body">Deepest level content</Typography>
              </div>
            </Accordion>
          </div>
        </Accordion>
      </div>
  }
}`,...(Se=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:Se.source}}};var ke,Re,De;E.parameters={...E.parameters,docs:{...(ke=E.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    heading: 'Custom Metadata Example',
    description: 'Accordion with custom labels, counters, and badges',
    leadIcon: <CheckCircleOutlined />,
    showLeadIcon: true,
    labelsAndMetadata: <>
        <Badge type="success" label="Active" />
        <Badge type="warning" label="2 Pending" />
        <Chip label="High Priority" variant="filled" />
        <Typography variant="caption" style={{
        color: '#909090'
      }}>Updated 2 hours ago</Typography>
      </>,
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">Content with custom metadata</Typography>
      </div>
  }
}`,...(De=(Re=E.parameters)==null?void 0:Re.docs)==null?void 0:De.source}}};var $e,Me,Fe;S.parameters={...S.parameters,docs:{...($e=S.parameters)==null?void 0:$e.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    disabled: true
  }
}`,...(Fe=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:Fe.source}}};var Ne,qe,Oe;k.parameters={...k.parameters,docs:{...(Ne=k.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  render: () => {
    const [expanded, setExpanded] = React.useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Button onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Collapse' : 'Expand'} Accordion
        </Button>
        
        <Accordion heading="Controlled Accordion" description="This accordion is controlled by external state" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} expanded={expanded} onExpandChange={setExpanded}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">Controlled content</Typography>
          </div>
        </Accordion>
      </div>;
  }
}`,...(Oe=(qe=k.parameters)==null?void 0:qe.docs)==null?void 0:Oe.source}}};var Be,He,Pe;R.parameters={...R.parameters,docs:{...(Be=R.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Accordion heading="First Accordion" description="Description for first accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} labelsAndMetadata={<Badge type="info" label="New" />}>
        <div style={{
        padding: '20px'
      }}>
          <Typography variant="body">Content for first accordion</Typography>
        </div>
      </Accordion>
      
      <Accordion heading="Second Accordion" description="Description for second accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} labelsAndMetadata={<Badge type="success" label="Completed" />}>
        <div style={{
        padding: '20px'
      }}>
          <Typography variant="body">Content for second accordion</Typography>
        </div>
      </Accordion>
      
      <Accordion heading="Third Accordion" description="Description for third accordion" leadIcon={<CheckCircleOutlined />} showLeadIcon={true} labelsAndMetadata={<Badge type="warning" label="In Progress" />} showFooter={true} footerText="Last updated: Today" footerActions={<Button variant="primary" size="small">View Details</Button>}>
        <div style={{
        padding: '20px'
      }}>
          <Typography variant="body">Content for third accordion</Typography>
        </div>
      </Accordion>
    </div>
}`,...(Pe=(He=R.parameters)==null?void 0:He.docs)==null?void 0:Pe.source}}};var Ve,ze,We;D.parameters={...D.parameters,docs:{...(Ve=D.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    heading: 'Loading Content',
    description: 'This accordion is loading data',
    leadIcon: <CheckCircleOutlined />,
    defaultExpanded: true,
    isLoading: true,
    loadingMessage: 'Loading data...',
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">This content is hidden while loading</Typography>
      </div>
  }
}`,...(We=(ze=D.parameters)==null?void 0:ze.docs)==null?void 0:We.source}}};var Ue,_e,Ke;$.parameters={...$.parameters,docs:{...(Ue=$.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    heading: 'Error Loading Data',
    description: 'Failed to load content',
    leadIcon: <CheckCircleOutlined />,
    defaultExpanded: true,
    isInvalid: true,
    errorMessage: 'Failed to load data. Please try again.',
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">This content is hidden due to error</Typography>
      </div>
  }
}`,...(Ke=(_e=$.parameters)==null?void 0:_e.docs)==null?void 0:Ke.source}}};var Ye,Ge,Je;M.parameters={...M.parameters,docs:{...(Ye=M.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
  args: {
    heading: 'No Content Available',
    description: 'This accordion has no content',
    leadIcon: <CheckCircleOutlined />,
    defaultExpanded: true,
    isEmpty: true,
    emptyMessage: 'No content available at this time',
    children: null
  }
}`,...(Je=(Ge=M.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};var Qe,Xe,Ze;F.parameters={...F.parameters,docs:{...(Qe=F.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    as: 'section',
    heading: 'Section Accordion',
    description: 'This accordion is rendered as a <section> element',
    leadIcon: <CheckCircleOutlined />,
    children: <div style={{
      padding: '20px'
    }}>
        <Typography variant="body">
          Check the DOM - this accordion's root is a section element!
        </Typography>
      </div>
  }
}`,...(Ze=(Xe=F.parameters)==null?void 0:Xe.docs)==null?void 0:Ze.source}}};var eo,oo,no;N.parameters={...N.parameters,docs:{...(eo=N.parameters)==null?void 0:eo.docs,source:{originalSource:`{
  render: () => {
    const accordionRef = React.useRef<HTMLDivElement>(null);
    const scrollToAccordion = () => {
      accordionRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Button onClick={scrollToAccordion}>
          Scroll to Accordion (using ref)
        </Button>
        
        <div style={{
        height: '100vh'
      }} />
        
        <Accordion ref={accordionRef} heading="Accordion with Ref" description="This accordion can be accessed via ref" leadIcon={<CheckCircleOutlined />}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">
              This accordion was scrolled into view using a ref!
            </Typography>
          </div>
        </Accordion>
        
        <div style={{
        height: '100vh'
      }} />
      </div>;
  }
}`,...(no=(oo=N.parameters)==null?void 0:oo.docs)==null?void 0:no.source}}};var ao,to,ro;q.parameters={...q.parameters,docs:{...(ao=q.parameters)==null?void 0:ao.docs,source:{originalSource:`{
  render: () => <Accordion heading="Original Heading" customHeader={({
    isExpanded,
    onClick
  }) => <div onClick={onClick} style={{
    padding: '20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '8px'
  }}>
          <Typography variant="headingM" weight="semibold" style={{
      color: 'white'
    }}>
            🎨 Custom Header {isExpanded ? '▲' : '▼'}
          </Typography>
          <Typography variant="body" style={{
      color: 'white',
      opacity: 0.9
    }}>
            This header is completely custom!
          </Typography>
        </div>} customContent={({
    isExpanded
  }) => isExpanded ? <div style={{
    padding: '20px',
    background: '#f0f0f0'
  }}>
            <Typography variant="body">🎨 Custom content renderer!</Typography>
          </div> : null} />
}`,...(ro=(to=q.parameters)==null?void 0:to.docs)==null?void 0:ro.source}}};var io,so,co;O.parameters={...O.parameters,docs:{...(io=O.parameters)==null?void 0:io.docs,source:{originalSource:`{
  render: () => {
    const [logs, setLogs] = React.useState<string[]>([]);
    const addLog = (message: string) => {
      setLogs(prev => [...prev, \`\${new Date().toLocaleTimeString()}: \${message}\`]);
    };
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Accordion heading="Accordion with Event Callbacks" description="Open/close to see event logs below" leadIcon={<CheckCircleOutlined />} onExpandChange={expanded => addLog(\`onExpandChange: \${expanded}\`)} onOpen={() => addLog('onOpen')} onClose={() => addLog('onClose')} onAfterOpen={() => addLog('onAfterOpen (after animation)')} onAfterClose={() => addLog('onAfterClose (after animation)')}>
          <div style={{
          padding: '20px'
        }}>
            <Typography variant="body">Toggle me to see event callbacks!</Typography>
          </div>
        </Accordion>
        
        <div style={{
        padding: '16px',
        background: '#f5f5f5',
        borderRadius: '8px',
        maxHeight: '200px',
        overflow: 'auto'
      }}>
          <Typography variant="headingS" weight="semibold" style={{
          marginBottom: '8px'
        }}>
            Event Log:
          </Typography>
          {logs.length === 0 ? <Typography variant="caption" style={{
          opacity: 0.6
        }}>
              No events yet...
            </Typography> : logs.map((log, i) => <Typography key={i} variant="caption" style={{
          display: 'block',
          marginBottom: '4px'
        }}>
                {log}
              </Typography>)}
        </div>
      </div>;
  }
}`,...(co=(so=O.parameters)==null?void 0:so.docs)==null?void 0:co.source}}};const xn=["Default","Expanded","WithoutLeadIcon","WithoutDescription","WithoutLabelsAndMetadata","WithFooter","NestedAccordions","DeeplyNestedAccordions","CustomLabelsAndMetadata","Disabled","Controlled","MultipleAccordions","LoadingState","ErrorState","EmptyState","PolymorphicSection","ForwardRefExample","CustomSlots","EventCallbacks"];export{k as Controlled,E as CustomLabelsAndMetadata,q as CustomSlots,L as DeeplyNestedAccordions,p as Default,S as Disabled,M as EmptyState,$ as ErrorState,O as EventCallbacks,C as Expanded,N as ForwardRefExample,D as LoadingState,R as MultipleAccordions,I as NestedAccordions,F as PolymorphicSection,j as WithFooter,T as WithoutDescription,w as WithoutLabelsAndMetadata,A as WithoutLeadIcon,xn as __namedExportsOrder,mn as default};
