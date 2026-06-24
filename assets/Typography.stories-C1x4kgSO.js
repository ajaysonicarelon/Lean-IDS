import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as c}from"./index-B0WjJBI_.js";import"./breakpoints-DqB60pr6.js";import{t as o,f,a as S,l as b,b as r}from"./theme-Bvm5Suh7.js";import"./_commonjsHelpers-CqkleIqs.js";import"./borders-4i-t20as.js";const i=({name:l,style:t,sampleText:m="The quick brown fox jumps over the lazy dog"})=>{const[s,a]=c.useState(!1),h=()=>{const p=`fontFamily: '${t.fontFamily}',
fontSize: '${t.fontSize}',
fontWeight: ${t.fontWeight},
lineHeight: '${t.lineHeight}',
letterSpacing: '${t.letterSpacing}'`;navigator.clipboard.writeText(p),a(!0),setTimeout(()=>a(!1),2e3)};return e.jsxs("div",{style:{padding:"24px",border:"1px solid #e6e6e6",borderRadius:"8px",marginBottom:"16px",cursor:"pointer",transition:"all 0.2s",backgroundColor:"#ffffff"},onClick:h,onMouseEnter:p=>{p.currentTarget.style.boxShadow="0 4px 8px rgba(0,0,0,0.1)"},onMouseLeave:p=>{p.currentTarget.style.boxShadow="none"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:[e.jsx("h3",{style:{fontSize:"16px",fontWeight:600,margin:0},children:l}),s&&e.jsx("span",{style:{fontSize:"12px",color:"#108808",fontWeight:500},children:"✓ Copied"})]}),e.jsx("div",{style:{...t,marginBottom:"16px",color:"#222222"},children:m}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(150px, 1fr))",gap:"12px",fontSize:"12px",color:"#6c6c6c"},children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Size:"})," ",(t==null?void 0:t.fontSize)||"N/A"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Weight:"})," ",(t==null?void 0:t.fontWeight)||"N/A"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Line Height:"})," ",(t==null?void 0:t.lineHeight)||"N/A"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Letter Spacing:"})," ",(t==null?void 0:t.letterSpacing)||"N/A"]})]})]})},d=({title:l,tokens:t,type:m})=>e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h3",{style:{fontSize:"18px",fontWeight:600,marginBottom:"16px"},children:l}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(150px, 1fr))",gap:"12px"},children:Object.entries(t).map(([s,a])=>e.jsxs("div",{style:{padding:"12px",border:"1px solid #e6e6e6",borderRadius:"6px",backgroundColor:"#fafafa"},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:600,marginBottom:"4px"},children:s}),e.jsx("code",{style:{fontSize:"12px",color:"#6c6c6c",fontFamily:"monospace"},children:a})]},s))})]}),k={title:"Design Tokens/Typography",parameters:{layout:"padded",docs:{description:{component:`
# Typography Tokens

The Lean IDS design system provides a comprehensive typography system with predefined text styles, font families, sizes, weights, and line heights.

## Typography Scale

The typography system includes the following categories:

### Text Styles

- **Code**: Monospace font for code snippets (10px)
- **Caption**: Small text for labels and captions (12px)
- **Paragraph**: Standard body text (14px)
- **Body**: Larger body text (16px)
- **Heading S**: Small headings (20px)
- **Heading M**: Medium headings (24px)
- **Heading L**: Large headings (28px)
- **Heading XL**: Extra large headings (32px)
- **Display S**: Small display text (48px)
- **Display M**: Medium display text (60px)
- **Display L**: Large display text (72px)

### Font Weights

Each text style (except code and display L) is available in three weights:
- **Regular**: 400 - Standard text weight
- **Medium**: 500 - Slightly emphasized text
- **Semibold**: 600 - Strong emphasis

### Font Families

- **Primary**: Elevance Sans with system font fallbacks
- **Monospace**: Roboto Mono with monospace fallbacks

## Usage Guidelines

### Hierarchy

Use typography to create clear visual hierarchy:
1. **Display** styles for hero sections and major page titles
2. **Heading** styles for section titles and subsections
3. **Body/Paragraph** styles for main content
4. **Caption** styles for supporting text and labels
5. **Code** styles for technical content

### Accessibility

- Maintain minimum font size of 12px for body text
- Ensure sufficient contrast ratios (WCAG 2.1 AA: 4.5:1)
- Use appropriate line heights for readability
- Consider font weight for emphasis instead of color alone

### Best Practices

- Use consistent text styles throughout your application
- Limit the number of different text styles on a single page
- Use semibold weight for emphasis, not bold
- Maintain proper line length (45-75 characters for body text)

## Click to Copy

Click any typography example to copy its CSS properties to your clipboard.
        `}}},tags:["autodocs"]},n={render:()=>e.jsxs("div",{style:{padding:"24px",maxWidth:"1200px"},children:[e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h1",{style:{fontSize:"32px",fontWeight:700,marginBottom:"8px"},children:"Typography Tokens"}),e.jsx("p",{style:{fontSize:"16px",color:"#6c6c6c",marginBottom:"16px"},children:"Comprehensive typography system with predefined text styles"}),e.jsx("div",{style:{padding:"12px 16px",backgroundColor:"#f0f4ff",borderRadius:"8px",border:"1px solid #c1d3ff"},children:e.jsxs("p",{style:{fontSize:"14px",color:"#3d5799",margin:0},children:["💡 ",e.jsx("strong",{children:"Tip:"})," Click any example to copy its CSS properties"]})})]}),e.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"24px"},children:"Display Styles"}),e.jsx(i,{name:"Display L / Regular",style:o.displayL.regular,sampleText:"Large Display Text"}),e.jsx(i,{name:"Display M / Semibold",style:o.displayM.semibold,sampleText:"Medium Display Text"}),e.jsx(i,{name:"Display S / Medium",style:o.displayS.medium,sampleText:"Small Display Text"}),e.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginTop:"48px",marginBottom:"24px"},children:"Heading Styles"}),e.jsx(i,{name:"Heading XL / Semibold",style:o.headingXL.semibold,sampleText:"Extra Large Heading"}),e.jsx(i,{name:"Heading L / Semibold",style:o.headingL.semibold,sampleText:"Large Heading"}),e.jsx(i,{name:"Heading M / Semibold",style:o.headingM.semibold,sampleText:"Medium Heading"}),e.jsx(i,{name:"Heading S / Semibold",style:o.headingS.semibold,sampleText:"Small Heading"}),e.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginTop:"48px",marginBottom:"24px"},children:"Body Styles"}),e.jsx(i,{name:"Body / Regular",style:o.body.regular}),e.jsx(i,{name:"Body / Medium",style:o.body.medium}),e.jsx(i,{name:"Body / Semibold",style:o.body.semibold}),e.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginTop:"48px",marginBottom:"24px"},children:"Paragraph Styles"}),e.jsx(i,{name:"Paragraph / Regular",style:o.paragraph.regular}),e.jsx(i,{name:"Paragraph / Medium",style:o.paragraph.medium}),e.jsx(i,{name:"Paragraph / Semibold",style:o.paragraph.semibold}),e.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginTop:"48px",marginBottom:"24px"},children:"Caption & Code Styles"}),e.jsx(i,{name:"Caption / Regular",style:o.caption.regular,sampleText:"Small caption text for labels and supporting information"}),e.jsx(i,{name:"Caption / Semibold",style:o.caption.semibold,sampleText:"Emphasized caption text"}),e.jsx(i,{name:"Code / Regular",style:o.code["regular-14"],sampleText:"const greeting = 'Hello, World!';"}),e.jsxs("div",{style:{marginTop:"64px",padding:"24px",backgroundColor:"#fafafa",borderRadius:"8px"},children:[e.jsx("h2",{style:{fontSize:"20px",fontWeight:600,marginBottom:"24px"},children:"Typography Tokens Reference"}),e.jsx(d,{title:"Font Sizes",tokens:f,type:"size"}),e.jsx(d,{title:"Font Weights",tokens:S,type:"weight"}),e.jsx(d,{title:"Line Heights",tokens:b,type:"lineHeight"}),e.jsxs("div",{style:{marginTop:"32px"},children:[e.jsx("h3",{style:{fontSize:"18px",fontWeight:600,marginBottom:"16px"},children:"Font Families"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{padding:"16px",border:"1px solid #e6e6e6",borderRadius:"6px",backgroundColor:"#ffffff"},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:600,marginBottom:"8px"},children:"Primary"}),e.jsx("div",{style:{fontFamily:r.primary,fontSize:"16px",marginBottom:"8px"},children:"The quick brown fox jumps over the lazy dog"}),e.jsx("code",{style:{fontSize:"11px",color:"#6c6c6c",fontFamily:"monospace",display:"block",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:r.primary})]}),e.jsxs("div",{style:{padding:"16px",border:"1px solid #e6e6e6",borderRadius:"6px",backgroundColor:"#ffffff"},children:[e.jsx("div",{style:{fontSize:"14px",fontWeight:600,marginBottom:"8px"},children:"Monospace"}),e.jsx("div",{style:{fontFamily:r.monospace,fontSize:"14px",marginBottom:"8px"},children:"const greeting = 'Hello, World!';"}),e.jsx("code",{style:{fontSize:"11px",color:"#6c6c6c",fontFamily:"monospace",display:"block",whiteSpace:"pre-wrap",wordBreak:"break-all"},children:r.monospace})]})]})]})]})]})};var g,y,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    maxWidth: '1200px'
  }}>
      <div style={{
      marginBottom: '48px'
    }}>
        <h1 style={{
        fontSize: '32px',
        fontWeight: 700,
        marginBottom: '8px'
      }}>
          Typography Tokens
        </h1>
        <p style={{
        fontSize: '16px',
        color: '#6c6c6c',
        marginBottom: '16px'
      }}>
          Comprehensive typography system with predefined text styles
        </p>
        <div style={{
        padding: '12px 16px',
        backgroundColor: '#f0f4ff',
        borderRadius: '8px',
        border: '1px solid #c1d3ff'
      }}>
          <p style={{
          fontSize: '14px',
          color: '#3d5799',
          margin: 0
        }}>
            💡 <strong>Tip:</strong> Click any example to copy its CSS properties
          </p>
        </div>
      </div>

      <h2 style={{
      fontSize: '24px',
      fontWeight: 700,
      marginBottom: '24px'
    }}>Display Styles</h2>
      <TypographyExample name="Display L / Regular" style={typography.displayL.regular} sampleText="Large Display Text" />
      <TypographyExample name="Display M / Semibold" style={typography.displayM.semibold} sampleText="Medium Display Text" />
      <TypographyExample name="Display S / Medium" style={typography.displayS.medium} sampleText="Small Display Text" />

      <h2 style={{
      fontSize: '24px',
      fontWeight: 700,
      marginTop: '48px',
      marginBottom: '24px'
    }}>Heading Styles</h2>
      <TypographyExample name="Heading XL / Semibold" style={typography.headingXL.semibold} sampleText="Extra Large Heading" />
      <TypographyExample name="Heading L / Semibold" style={typography.headingL.semibold} sampleText="Large Heading" />
      <TypographyExample name="Heading M / Semibold" style={typography.headingM.semibold} sampleText="Medium Heading" />
      <TypographyExample name="Heading S / Semibold" style={typography.headingS.semibold} sampleText="Small Heading" />

      <h2 style={{
      fontSize: '24px',
      fontWeight: 700,
      marginTop: '48px',
      marginBottom: '24px'
    }}>Body Styles</h2>
      <TypographyExample name="Body / Regular" style={typography.body.regular} />
      <TypographyExample name="Body / Medium" style={typography.body.medium} />
      <TypographyExample name="Body / Semibold" style={typography.body.semibold} />

      <h2 style={{
      fontSize: '24px',
      fontWeight: 700,
      marginTop: '48px',
      marginBottom: '24px'
    }}>Paragraph Styles</h2>
      <TypographyExample name="Paragraph / Regular" style={typography.paragraph.regular} />
      <TypographyExample name="Paragraph / Medium" style={typography.paragraph.medium} />
      <TypographyExample name="Paragraph / Semibold" style={typography.paragraph.semibold} />

      <h2 style={{
      fontSize: '24px',
      fontWeight: 700,
      marginTop: '48px',
      marginBottom: '24px'
    }}>Caption & Code Styles</h2>
      <TypographyExample name="Caption / Regular" style={typography.caption.regular} sampleText="Small caption text for labels and supporting information" />
      <TypographyExample name="Caption / Semibold" style={typography.caption.semibold} sampleText="Emphasized caption text" />
      <TypographyExample name="Code / Regular" style={typography.code['regular-14']} sampleText="const greeting = 'Hello, World!';" />

      <div style={{
      marginTop: '64px',
      padding: '24px',
      backgroundColor: '#fafafa',
      borderRadius: '8px'
    }}>
        <h2 style={{
        fontSize: '20px',
        fontWeight: 600,
        marginBottom: '24px'
      }}>
          Typography Tokens Reference
        </h2>
        
        <TokenDisplay title="Font Sizes" tokens={fontSizes} type="size" />
        
        <TokenDisplay title="Font Weights" tokens={fontWeights} type="weight" />
        
        <TokenDisplay title="Line Heights" tokens={lineHeights} type="lineHeight" />
        
        <div style={{
        marginTop: '32px'
      }}>
          <h3 style={{
          fontSize: '18px',
          fontWeight: 600,
          marginBottom: '16px'
        }}>Font Families</h3>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px'
        }}>
            <div style={{
            padding: '16px',
            border: '1px solid #e6e6e6',
            borderRadius: '6px',
            backgroundColor: '#ffffff'
          }}>
              <div style={{
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px'
            }}>
                Primary
              </div>
              <div style={{
              fontFamily: fontFamilies.primary,
              fontSize: '16px',
              marginBottom: '8px'
            }}>
                The quick brown fox jumps over the lazy dog
              </div>
              <code style={{
              fontSize: '11px',
              color: '#6c6c6c',
              fontFamily: 'monospace',
              display: 'block',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all'
            }}>
                {fontFamilies.primary}
              </code>
            </div>
            
            <div style={{
            padding: '16px',
            border: '1px solid #e6e6e6',
            borderRadius: '6px',
            backgroundColor: '#ffffff'
          }}>
              <div style={{
              fontSize: '14px',
              fontWeight: 600,
              marginBottom: '8px'
            }}>
                Monospace
              </div>
              <div style={{
              fontFamily: fontFamilies.monospace,
              fontSize: '14px',
              marginBottom: '8px'
            }}>
                const greeting = 'Hello, World!';
              </div>
              <code style={{
              fontSize: '11px',
              color: '#6c6c6c',
              fontFamily: 'monospace',
              display: 'block',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-all'
            }}>
                {fontFamilies.monospace}
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...(x=(y=n.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const C=["AllTypographyStyles"];export{n as AllTypographyStyles,C as __namedExportsOrder,k as default};
