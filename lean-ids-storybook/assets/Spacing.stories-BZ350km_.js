import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as h}from"./index-B0WjJBI_.js";import{d as n,c as i,b as c}from"./breakpoints-BV938s2O.js";import{f as l,a as t}from"./theme-DrWLRzWO.js";import"./_commonjsHelpers-CqkleIqs.js";const b=({name:o,value:r,description:s})=>{const[a,g]=h.useState(!1),f=()=>{navigator.clipboard.writeText(r),g(!0),setTimeout(()=>g(!1),2e3)},m=parseInt(r);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:n[5],padding:n[7],border:`1px solid ${i.border.default}`,borderRadius:c.md,cursor:"pointer",transition:"all 0.2s",backgroundColor:"#ffffff"},onClick:f,onMouseEnter:p=>{p.currentTarget.style.boxShadow="0 4px 8px rgba(0,0,0,0.1)"},onMouseLeave:p=>{p.currentTarget.style.boxShadow="none"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontWeight:l.semibold,fontSize:t[14],marginBottom:n[1]},children:["spacing.",o]}),e.jsx("code",{style:{fontSize:t[12],color:i.text.secondary,fontFamily:"monospace",backgroundColor:i.background.secondary,padding:`2px ${n[2]}`,borderRadius:c.sm},children:r})]}),a&&e.jsx("span",{style:{fontSize:t[12],color:i.text.success,fontWeight:l.medium},children:"✓ Copied"})]}),s&&e.jsx("p",{style:{fontSize:t[12],color:i.text.secondary,margin:0},children:s}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:n[3],marginTop:n[3]},children:[e.jsx("div",{style:{width:m,height:"32px",backgroundColor:i.interactive.default,borderRadius:c.sm,transition:"width 0.3s"}}),e.jsxs("span",{style:{fontSize:t[10],color:i.text.secondary},children:[m,"px visual"]})]})]})},z={title:"Design Tokens/Spacing",parameters:{layout:"padded",docs:{description:{component:`
# Spacing Tokens

The Lean IDS design system uses a consistent spacing scale based on an **8px grid system**. This ensures visual rhythm and consistency across all components and layouts.

## Spacing Scale

The spacing scale ranges from \`0px\` to \`112px\`, with increments designed to provide flexibility while maintaining consistency:

- **spacing.0**: 0px - No spacing
- **spacing.1**: 4px - Minimal spacing (half unit)
- **spacing.2**: 8px - Base unit
- **spacing.3**: 16px - Small spacing (2x base)
- **spacing.4**: 24px - Medium spacing (3x base)
- **spacing.5**: 32px - Large spacing (4x base)
- **spacing.6-15**: Continues in 8px increments up to 112px

## Usage Guidelines

### When to Use Each Size

- **0-4px (0-1)**: Tight spacing within components (icon-text gaps, compact layouts)
- **8-16px (2-3)**: Standard component spacing (padding, gaps between related elements)
- **24-32px (4-5)**: Section spacing (between component groups, card padding)
- **40-64px (6-9)**: Layout spacing (between major sections, page margins)
- **72-112px (10-15)**: Large layout spacing (hero sections, major page divisions)

### Best Practices

- **Consistency**: Use the same spacing values throughout your application
- **Hierarchy**: Larger spacing indicates greater separation and importance
- **Rhythm**: Stick to the 8px grid for visual harmony
- **Responsive**: Consider adjusting spacing values for different screen sizes
- **Components**: Use smaller values (1-3) for internal component spacing
- **Layouts**: Use larger values (4-15) for page-level spacing

### Examples

\`\`\`tsx
// Component padding
<Button style={{ padding: spacing[2] }}>Click me</Button>

// Gap between elements
<Stack gap={spacing[3]}>
  <Item />
  <Item />
</Stack>

// Section margins
<Section style={{ marginBottom: spacing[6] }}>
  Content
</Section>
\`\`\`

## Click to Copy

Click any spacing token to copy its value to your clipboard.
        `}}},tags:["autodocs"]},d={render:()=>e.jsxs("div",{style:{padding:n[10],maxWidth:"1200px"},children:[e.jsxs("div",{style:{marginBottom:n[17]},children:[e.jsx("h1",{style:{fontSize:t[32],fontWeight:l.bold,marginBottom:n[3]},children:"Spacing Tokens"}),e.jsx("p",{style:{fontSize:t[16],color:i.text.secondary,marginBottom:n[7]},children:"Based on 8px grid system for consistent spacing"}),e.jsx("div",{style:{padding:`${n[5]} ${n[7]}`,backgroundColor:i.background.primary,borderRadius:c.md,border:`1px solid ${i.border.default}`},children:e.jsxs("p",{style:{fontSize:t[14],color:i.text.primary,margin:0},children:["💡 ",e.jsx("strong",{children:"Tip:"})," Click any token to copy its value to clipboard"]})})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:n[10]},children:Object.entries(n).map(([o,r])=>{let s="";const a=parseInt(o);return a===0?s="No spacing":a===1?s="Minimal spacing (half unit)":a===2?s="Base unit (8px grid)":a===3?s="Small spacing":a===4?s="Medium spacing":a===5?s="Large spacing":a>=6&&a<=9?s="Layout spacing":s="Large layout spacing",e.jsx(b,{name:o,value:r,description:s},o)})}),e.jsxs("div",{style:{marginTop:n[20],padding:n[10],backgroundColor:i.background.secondary,borderRadius:c.md},children:[e.jsx("h2",{style:{fontSize:t[20],fontWeight:l.semibold,marginBottom:n[7]},children:"Visual Scale Reference"}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:n[7]},children:Object.entries(n).map(([o,r])=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:n[7]},children:[e.jsxs("span",{style:{fontSize:t[14],fontWeight:l.medium,minWidth:"100px"},children:["spacing.",o]}),e.jsx("div",{style:{height:"24px",width:r,backgroundColor:i.interactive.default,borderRadius:c.sm}}),e.jsx("span",{style:{fontSize:t[12],color:i.text.secondary},children:r})]},o))})]})]})};var u,y,x;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: spacing['10'],
    maxWidth: '1200px'
  }}>
      <div style={{
      marginBottom: spacing['17']
    }}>
        <h1 style={{
        fontSize: fontSizes[32],
        fontWeight: fontWeights.bold,
        marginBottom: spacing['3']
      }}>
          Spacing Tokens
        </h1>
        <p style={{
        fontSize: fontSizes[16],
        color: carelonSemanticColors.text.secondary,
        marginBottom: spacing['7']
      }}>
          Based on 8px grid system for consistent spacing
        </p>
        <div style={{
        padding: \`\${spacing['5']} \${spacing['7']}\`,
        backgroundColor: carelonSemanticColors.background.primary,
        borderRadius: borderRadius.md,
        border: \`1px solid \${carelonSemanticColors.border.default}\`
      }}>
          <p style={{
          fontSize: fontSizes[14],
          color: carelonSemanticColors.text.primary,
          margin: 0
        }}>
            💡 <strong>Tip:</strong> Click any token to copy its value to clipboard
          </p>
        </div>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: spacing['10']
    }}>
        {Object.entries(spacing).map(([key, value]) => {
        let description = '';
        const numKey = parseInt(key);
        if (numKey === 0) description = 'No spacing';else if (numKey === 1) description = 'Minimal spacing (half unit)';else if (numKey === 2) description = 'Base unit (8px grid)';else if (numKey === 3) description = 'Small spacing';else if (numKey === 4) description = 'Medium spacing';else if (numKey === 5) description = 'Large spacing';else if (numKey >= 6 && numKey <= 9) description = 'Layout spacing';else description = 'Large layout spacing';
        return <SpacingToken key={key} name={key} value={value} description={description} />;
      })}
      </div>

      <div style={{
      marginTop: spacing['20'],
      padding: spacing['10'],
      backgroundColor: carelonSemanticColors.background.secondary,
      borderRadius: borderRadius.md
    }}>
        <h2 style={{
        fontSize: fontSizes[20],
        fontWeight: fontWeights.semibold,
        marginBottom: spacing['7']
      }}>
          Visual Scale Reference
        </h2>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing['7']
      }}>
          {Object.entries(spacing).map(([key, value]) => <div key={key} style={{
          display: 'flex',
          alignItems: 'center',
          gap: spacing['7']
        }}>
              <span style={{
            fontSize: fontSizes[14],
            fontWeight: fontWeights.medium,
            minWidth: '100px'
          }}>
                spacing.{key}
              </span>
              <div style={{
            height: '24px',
            width: value,
            backgroundColor: carelonSemanticColors.interactive.default,
            borderRadius: borderRadius.sm
          }} />
              <span style={{
            fontSize: fontSizes[12],
            color: carelonSemanticColors.text.secondary
          }}>{value}</span>
            </div>)}
        </div>
      </div>
    </div>
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};const T=["AllSpacingTokens"];export{d as AllSpacingTokens,T as __namedExportsOrder,z as default};
