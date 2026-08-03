import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{T as a}from"./Typography-DlcmwxwF.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-CuwBLqEg.js";const Y={title:"Design Tokens/Typography",component:a,parameters:{layout:"padded",docs:{description:{component:`A flexible typography component that provides consistent text styling across your application.

## Features

- **11 Variants**: displayL, displayM, displayS, headingXL, headingL, headingM, headingS, body, paragraph, caption, code
- **5 Weights**: light, regular, medium, semibold, bold
- **Semantic HTML**: Automatically renders appropriate HTML elements (h1-h6, p, span, code)
- **Customizable**: Override element type, alignment, and color
- **Type-safe**: Full TypeScript support

## Usage

### Basic Example

\`\`\`tsx
import { Typography } from '@lean-ids/components';

function App() {
  return (
    <>
      <Typography variant="headingXL" weight="semibold">
        Page Title
      </Typography>
      
      <Typography variant="paragraph">
        This is a paragraph of body text with regular weight.
      </Typography>
      
      <Typography variant="caption" weight="medium">
        Small caption text
      </Typography>
    </>
  );
}
\`\`\`

### All Variants

\`\`\`tsx
// Display variants (hero text)
<Typography variant="displayL">Large Display</Typography>
<Typography variant="displayM">Medium Display</Typography>
<Typography variant="displayS">Small Display</Typography>

// Heading variants
<Typography variant="headingXL">Extra Large Heading</Typography>
<Typography variant="headingL">Large Heading</Typography>
<Typography variant="headingM">Medium Heading</Typography>
<Typography variant="headingS">Small Heading</Typography>

// Body variants
<Typography variant="body">Body text (16px)</Typography>
<Typography variant="paragraph">Paragraph text (14px)</Typography>
<Typography variant="caption">Caption text (12px)</Typography>

// Code variant
<Typography variant="code" codeSize="14">
  const greeting = 'Hello, World!';
</Typography>
\`\`\`

### With Different Weights

\`\`\`tsx
<Typography variant="body" weight="light">Light weight</Typography>
<Typography variant="body" weight="regular">Regular weight</Typography>
<Typography variant="body" weight="medium">Medium weight</Typography>
<Typography variant="body" weight="semibold">Semibold weight</Typography>
<Typography variant="body" weight="bold">Bold weight</Typography>
\`\`\`

### Custom Element & Alignment

\`\`\`tsx
// Override default element
<Typography variant="body" as="div">
  This renders as a div instead of p
</Typography>

// Text alignment
<Typography variant="paragraph" align="center">
  Centered text
</Typography>

<Typography variant="paragraph" align="right">
  Right-aligned text
</Typography>
\`\`\`

### With Custom Color

\`\`\`tsx
<Typography variant="headingM" color="#108808">
  Green heading
</Typography>

<Typography variant="paragraph" color="#666">
  Gray paragraph
</Typography>
\`\`\`

### Code Sizes

\`\`\`tsx
<Typography variant="code" codeSize="10">Small code</Typography>
<Typography variant="code" codeSize="12">Medium code</Typography>
<Typography variant="code" codeSize="14">Large code</Typography>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | TypographyVariant | \`'paragraph'\` | Text style variant |
| \`weight\` | TypographyWeight | \`'regular'\` | Font weight |
| \`codeSize\` | '10' \\| '12' \\| '14' | \`'14'\` | Font size for code variant |
| \`as\` | HTML Element | auto | Override default HTML element |
| \`align\` | 'left' \\| 'center' \\| 'right' \\| 'justify' | - | Text alignment |
| \`color\` | string | - | Custom text color |
| \`className\` | string | - | Additional CSS class |
| \`children\` | ReactNode | - | Content to display |

## Best Practices

1. **Use semantic variants**: Choose variants that match content hierarchy
2. **Limit weights**: Stick to regular, medium, and semibold for most content
3. **Maintain hierarchy**: Use larger variants for more important content
4. **Accessibility**: Ensure proper heading order (h1 → h2 → h3)
5. **Consistency**: Use the same variants for similar content types`}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["displayL","displayM","displayS","headingXL","headingL","headingM","headingS","body","paragraph","caption","code"],description:"Typography variant/style"},weight:{control:"select",options:["light","regular","medium","semibold","bold"],description:"Font weight"},codeSize:{control:"select",options:["10","12","14"],description:"Font size for code variant",if:{arg:"variant",eq:"code"}},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div","code"],description:"HTML element to render"},align:{control:"select",options:["left","center","right","justify"],description:"Text alignment"},color:{control:"color",description:"Custom text color"}}},r={args:{variant:"paragraph",weight:"regular",children:"The quick brown fox jumps over the lazy dog"}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(a,{variant:"displayL",weight:"regular",children:"Display L / Regular"}),e.jsx(a,{variant:"displayM",weight:"semibold",children:"Display M / Semibold"}),e.jsx(a,{variant:"displayS",weight:"medium",children:"Display S / Medium"})]}),parameters:{docs:{description:{story:"Large display text for hero sections and major page titles (48px-72px)."}}}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{variant:"headingXL",weight:"semibold",children:"Heading XL / Semibold (32px)"}),e.jsx(a,{variant:"headingL",weight:"semibold",children:"Heading L / Semibold (28px)"}),e.jsx(a,{variant:"headingM",weight:"semibold",children:"Heading M / Semibold (24px)"}),e.jsx(a,{variant:"headingS",weight:"semibold",children:"Heading S / Semibold (20px)"})]}),parameters:{docs:{description:{story:"Heading styles for section titles and subsections (20px-32px)."}}}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{variant:"body",weight:"regular",children:"Body / Regular (16px) - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"body",weight:"medium",children:"Body / Medium (16px) - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"body",weight:"semibold",children:"Body / Semibold (16px) - The quick brown fox jumps over the lazy dog"})]}),parameters:{docs:{description:{story:"Body text styles for main content (16px)."}}}},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{variant:"paragraph",weight:"regular",children:"Paragraph / Regular (14px) - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"paragraph",weight:"medium",children:"Paragraph / Medium (14px) - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"paragraph",weight:"semibold",children:"Paragraph / Semibold (14px) - The quick brown fox jumps over the lazy dog"})]}),parameters:{docs:{description:{story:"Paragraph text styles for standard body content (14px)."}}}},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{variant:"caption",weight:"regular",children:"Caption / Regular (12px) - Small text for labels and supporting information"}),e.jsx(a,{variant:"caption",weight:"medium",children:"Caption / Medium (12px) - Small text for labels and supporting information"}),e.jsx(a,{variant:"caption",weight:"semibold",children:"Caption / Semibold (12px) - Small text for labels and supporting information"})]}),parameters:{docs:{description:{story:"Caption text for labels, metadata, and supporting information (12px)."}}}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",backgroundColor:"#f5f5f5",padding:"16px",borderRadius:"8px"},children:[e.jsx(a,{variant:"code",codeSize:"10",weight:"regular",children:"const greeting = 'Hello, World!'; // 10px"}),e.jsx(a,{variant:"code",codeSize:"12",weight:"regular",children:"const greeting = 'Hello, World!'; // 12px"}),e.jsx(a,{variant:"code",codeSize:"14",weight:"regular",children:"const greeting = 'Hello, World!'; // 14px"}),e.jsx(a,{variant:"code",codeSize:"14",weight:"medium",children:"const greeting = 'Hello, World!'; // 14px medium"})]}),parameters:{docs:{description:{story:"Monospace code text in three sizes (10px, 12px, 14px)."}}}},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{variant:"body",weight:"light",children:"Light (300) - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"body",weight:"regular",children:"Regular (400) - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"body",weight:"medium",children:"Medium (500) - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"body",weight:"semibold",children:"Semibold (600) - The quick brown fox jumps over the lazy dog"}),e.jsx(a,{variant:"body",weight:"bold",children:"Bold (700) - The quick brown fox jumps over the lazy dog"})]}),parameters:{docs:{description:{story:"All available font weights from light (300) to bold (700)."}}}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsx(a,{variant:"paragraph",align:"left",children:"Left aligned text (default)"}),e.jsx(a,{variant:"paragraph",align:"center",children:"Center aligned text"}),e.jsx(a,{variant:"paragraph",align:"right",children:"Right aligned text"}),e.jsx(a,{variant:"paragraph",align:"justify",children:"Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."})]}),parameters:{docs:{description:{story:"Text alignment options: left, center, right, justify."}}}},g={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx(a,{variant:"headingM",color:"#108808",children:"Green Heading"}),e.jsx(a,{variant:"paragraph",color:"#0066cc",children:"Blue paragraph text"}),e.jsx(a,{variant:"caption",color:"#cc0000",children:"Red caption text"}),e.jsx(a,{variant:"paragraph",color:"#666666",children:"Gray paragraph text"})]}),parameters:{docs:{description:{story:"Custom text colors using the color prop."}}}},y={render:()=>e.jsxs("div",{style:{maxWidth:"800px"},children:[e.jsx(a,{variant:"headingXL",weight:"semibold",style:{marginBottom:"8px"},children:"Welcome to Lean IDS"}),e.jsx(a,{variant:"caption",weight:"medium",color:"#666",style:{marginBottom:"24px"},children:"Last updated: June 19, 2026"}),e.jsx(a,{variant:"body",weight:"regular",style:{marginBottom:"16px"},children:"Lean IDS is a comprehensive design system built for modern web applications. It provides a complete set of components, design tokens, and guidelines to help you build consistent, accessible, and beautiful user interfaces."}),e.jsx(a,{variant:"headingM",weight:"semibold",style:{marginTop:"32px",marginBottom:"16px"},children:"Key Features"}),e.jsx(a,{variant:"paragraph",weight:"regular",style:{marginBottom:"12px"},children:"• Fully typed TypeScript components"}),e.jsx(a,{variant:"paragraph",weight:"regular",style:{marginBottom:"12px"},children:"• Comprehensive design token system"}),e.jsx(a,{variant:"paragraph",weight:"regular",style:{marginBottom:"12px"},children:"• Accessible and WCAG compliant"}),e.jsx("div",{style:{backgroundColor:"#f5f5f5",padding:"16px",borderRadius:"8px",marginTop:"24px"},children:e.jsx(a,{variant:"code",codeSize:"14",weight:"regular",children:"npm install @lean-ids/components"})})]}),parameters:{docs:{description:{story:"Real-world example showing multiple typography variants working together."}}}};var h,c,m;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    variant: 'paragraph',
    weight: 'regular',
    children: 'The quick brown fox jumps over the lazy dog'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var x,u,v;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
      <Typography variant="displayL" weight="regular">
        Display L / Regular
      </Typography>
      <Typography variant="displayM" weight="semibold">
        Display M / Semibold
      </Typography>
      <Typography variant="displayS" weight="medium">
        Display S / Medium
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Large display text for hero sections and major page titles (48px-72px).'
      }
    }
  }
}`,...(v=(u=o.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var T,f,b;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Typography variant="headingXL" weight="semibold">
        Heading XL / Semibold (32px)
      </Typography>
      <Typography variant="headingL" weight="semibold">
        Heading L / Semibold (28px)
      </Typography>
      <Typography variant="headingM" weight="semibold">
        Heading M / Semibold (24px)
      </Typography>
      <Typography variant="headingS" weight="semibold">
        Heading S / Semibold (20px)
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Heading styles for section titles and subsections (20px-32px).'
      }
    }
  }
}`,...(b=(f=i.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,S,j;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Typography variant="body" weight="regular">
        Body / Regular (16px) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="medium">
        Body / Medium (16px) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="semibold">
        Body / Semibold (16px) - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Body text styles for main content (16px).'
      }
    }
  }
}`,...(j=(S=t.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var L,z,C;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Typography variant="paragraph" weight="regular">
        Paragraph / Regular (14px) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="paragraph" weight="medium">
        Paragraph / Medium (14px) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="paragraph" weight="semibold">
        Paragraph / Semibold (14px) - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Paragraph text styles for standard body content (14px).'
      }
    }
  }
}`,...(C=(z=p.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var M,D,k;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Typography variant="caption" weight="regular">
        Caption / Regular (12px) - Small text for labels and supporting information
      </Typography>
      <Typography variant="caption" weight="medium">
        Caption / Medium (12px) - Small text for labels and supporting information
      </Typography>
      <Typography variant="caption" weight="semibold">
        Caption / Semibold (12px) - Small text for labels and supporting information
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Caption text for labels, metadata, and supporting information (12px).'
      }
    }
  }
}`,...(k=(D=n.parameters)==null?void 0:D.docs)==null?void 0:k.source}}};var B,H,q;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    backgroundColor: '#f5f5f5',
    padding: '16px',
    borderRadius: '8px'
  }}>
      <Typography variant="code" codeSize="10" weight="regular">
        const greeting = 'Hello, World!'; // 10px
      </Typography>
      <Typography variant="code" codeSize="12" weight="regular">
        const greeting = 'Hello, World!'; // 12px
      </Typography>
      <Typography variant="code" codeSize="14" weight="regular">
        const greeting = 'Hello, World!'; // 14px
      </Typography>
      <Typography variant="code" codeSize="14" weight="medium">
        const greeting = 'Hello, World!'; // 14px medium
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Monospace code text in three sizes (10px, 12px, 14px).'
      }
    }
  }
}`,...(q=(H=s.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var R,W,A;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Typography variant="body" weight="light">
        Light (300) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="regular">
        Regular (400) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="medium">
        Medium (500) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="semibold">
        Semibold (600) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="bold">
        Bold (700) - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All available font weights from light (300) to bold (700).'
      }
    }
  }
}`,...(A=(W=d.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var P,F,X;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }}>
      <Typography variant="paragraph" align="left">
        Left aligned text (default)
      </Typography>
      <Typography variant="paragraph" align="center">
        Center aligned text
      </Typography>
      <Typography variant="paragraph" align="right">
        Right aligned text
      </Typography>
      <Typography variant="paragraph" align="justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text alignment options: left, center, right, justify.'
      }
    }
  }
}`,...(X=(F=l.parameters)==null?void 0:F.docs)==null?void 0:X.source}}};var E,G,I;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <Typography variant="headingM" color="#108808">
        Green Heading
      </Typography>
      <Typography variant="paragraph" color="#0066cc">
        Blue paragraph text
      </Typography>
      <Typography variant="caption" color="#cc0000">
        Red caption text
      </Typography>
      <Typography variant="paragraph" color="#666666">
        Gray paragraph text
      </Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Custom text colors using the color prop.'
      }
    }
  }
}`,...(I=(G=g.parameters)==null?void 0:G.docs)==null?void 0:I.source}}};var J,O,U;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: '800px'
  }}>
      <Typography variant="headingXL" weight="semibold" style={{
      marginBottom: '8px'
    }}>
        Welcome to Lean IDS
      </Typography>
      
      <Typography variant="caption" weight="medium" color="#666" style={{
      marginBottom: '24px'
    }}>
        Last updated: June 19, 2026
      </Typography>
      
      <Typography variant="body" weight="regular" style={{
      marginBottom: '16px'
    }}>
        Lean IDS is a comprehensive design system built for modern web applications. 
        It provides a complete set of components, design tokens, and guidelines to help 
        you build consistent, accessible, and beautiful user interfaces.
      </Typography>
      
      <Typography variant="headingM" weight="semibold" style={{
      marginTop: '32px',
      marginBottom: '16px'
    }}>
        Key Features
      </Typography>
      
      <Typography variant="paragraph" weight="regular" style={{
      marginBottom: '12px'
    }}>
        • Fully typed TypeScript components
      </Typography>
      <Typography variant="paragraph" weight="regular" style={{
      marginBottom: '12px'
    }}>
        • Comprehensive design token system
      </Typography>
      <Typography variant="paragraph" weight="regular" style={{
      marginBottom: '12px'
    }}>
        • Accessible and WCAG compliant
      </Typography>
      
      <div style={{
      backgroundColor: '#f5f5f5',
      padding: '16px',
      borderRadius: '8px',
      marginTop: '24px'
    }}>
        <Typography variant="code" codeSize="14" weight="regular">
          npm install @lean-ids/components
        </Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing multiple typography variants working together.'
      }
    }
  }
}`,...(U=(O=y.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};const Z=["Default","DisplayStyles","HeadingStyles","BodyStyles","ParagraphStyles","CaptionStyles","CodeStyles","AllWeights","TextAlignment","CustomColors","RealWorldExample"];export{d as AllWeights,t as BodyStyles,n as CaptionStyles,s as CodeStyles,g as CustomColors,r as Default,o as DisplayStyles,i as HeadingStyles,p as ParagraphStyles,y as RealWorldExample,l as TextAlignment,Z as __namedExportsOrder,Y as default};
