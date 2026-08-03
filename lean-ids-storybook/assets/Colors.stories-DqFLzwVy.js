import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as w}from"./index-B0WjJBI_.js";import{d as r,c as a,e as t,f as s,b as h}from"./breakpoints-BV938s2O.js";import{f as i,a as n}from"./theme-DrWLRzWO.js";import"./_commonjsHelpers-CqkleIqs.js";const k=({name:m,value:c,description:d})=>{const[p,l]=w.useState(!1),y=()=>{navigator.clipboard.writeText(c),l(!0),setTimeout(()=>l(!1),2e3)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:r[3],cursor:"pointer",transition:"transform 0.2s"},onClick:y,onMouseEnter:g=>{g.currentTarget.style.transform="scale(1.02)"},onMouseLeave:g=>{g.currentTarget.style.transform="scale(1)"},children:[e.jsx("div",{style:{width:"100%",height:"80px",backgroundColor:c,borderRadius:h.md,border:`1px solid ${a.border.default}`,boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:r[1]},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:i.semibold,fontSize:n[14]},children:m}),p&&e.jsx("span",{style:{fontSize:n[12],color:a.text.success,fontWeight:i.medium},children:"✓ Copied"})]}),e.jsx("code",{style:{fontSize:n[12],color:a.text.secondary,fontFamily:"monospace",backgroundColor:a.background.secondary,padding:`2px ${r[2]}`,borderRadius:h.sm},children:c}),d&&e.jsx("span",{style:{fontSize:n[10],color:a.text.secondary},children:d})]})]})},o=({title:m,description:c,colors:d,prefix:p=""})=>e.jsxs("div",{style:{marginBottom:r[17]},children:[e.jsx("h2",{style:{fontSize:n[24],fontWeight:i.bold,marginBottom:r[3]},children:m}),e.jsx("p",{style:{fontSize:n[14],color:a.text.secondary,marginBottom:r[10]},children:c}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:r[10]},children:Object.entries(d).map(([l,y])=>e.jsx(k,{name:p?`${p}-${l}`:l,value:y},l))})]}),U={title:"Design Tokens/Colors",parameters:{layout:"padded",docs:{description:{component:`
# Color Tokens

The Lean IDS design system uses a comprehensive color palette organized into several categories:

## Color Categories

### Primary Colors
The main brand colors used for primary actions, headers, and key UI elements. Available in 11 shades from lightest (50) to darkest (800).

### Neutral Colors
Grayscale colors used for text, backgrounds, borders, and other neutral UI elements. Available in 11 shades from white (50) to black (900).

### Semantic Colors
Purpose-driven colors that communicate meaning:
- **Error**: Red tones for errors, destructive actions, and critical alerts
- **Warning**: Yellow/orange tones for warnings and caution
- **Success**: Green tones for success states and positive feedback
- **Info**: Blue tones for informational messages and hints
- **Link**: Blue tones specifically for hyperlinks

### Secondary Colors
Extended color palette for data visualization, illustrations, and decorative elements:
- **Blue**: Various blue shades for charts and graphics
- **Turquoise**: Teal-cyan tones for accents
- **Teal Green**: Green-teal tones for nature/health themes
- **Terracotta**: Warm earth tones
- **Yellow**: Bright yellows for highlights
- **Pink**: Accent pink for special emphasis
- **Orange**: Warm orange for energy and attention

## Usage Guidelines

- **Click any color swatch** to copy its hex value to clipboard
- Use primary colors for main brand elements and CTAs
- Use neutral colors for text, backgrounds, and borders
- Use semantic colors to communicate status and meaning
- Use secondary colors for data visualization and decorative purposes
- Maintain sufficient contrast ratios for accessibility (WCAG 2.1 AA: 4.5:1 for text)

## Brand Variants

The design system supports two brand variants:
- **Carelon**: Purple-based primary palette
- **Elevance**: Blue-based primary palette
        `}}},tags:["autodocs"]},f={render:()=>e.jsxs("div",{style:{padding:r[10],maxWidth:"1400px"},children:[e.jsxs("div",{style:{marginBottom:r[17]},children:[e.jsx("h1",{style:{fontSize:n[32],fontWeight:i.bold,marginBottom:r[3]},children:"Carelon Brand Colors"}),e.jsx("p",{style:{fontSize:n[16],color:a.text.secondary},children:"Purple-based color palette for Carelon brand"})]}),e.jsx(o,{title:"Primary Colors",description:"Main brand colors for primary actions, headers, and key UI elements. Use these for buttons, links, and important interactive elements.",colors:t.primary,prefix:"primary"}),e.jsx(o,{title:"Neutral Colors",description:"Grayscale palette for text, backgrounds, borders, and neutral UI elements. Essential for creating hierarchy and structure.",colors:t.neutral,prefix:"neutral"}),e.jsx(o,{title:"Error Colors",description:"Red tones for error states, destructive actions, and critical alerts. Use to communicate problems or dangerous actions.",colors:t.error,prefix:"error"}),e.jsx(o,{title:"Warning Colors",description:"Yellow/orange tones for warnings and cautionary messages. Use to alert users to potential issues.",colors:t.warning,prefix:"warning"}),e.jsx(o,{title:"Success Colors",description:"Green tones for success states and positive feedback. Use to confirm successful actions.",colors:t.success,prefix:"success"}),e.jsx(o,{title:"Info Colors",description:"Blue tones for informational messages and helpful hints. Use for neutral, informative content.",colors:t.info,prefix:"info"}),e.jsx("h2",{style:{fontSize:n[28],fontWeight:i.bold,marginTop:r[20],marginBottom:r[12]},children:"Secondary Colors"}),e.jsx("p",{style:{fontSize:n[14],color:a.text.secondary,marginBottom:r[12]},children:"Extended palette for data visualization, illustrations, and decorative elements."}),e.jsx(o,{title:"Blue",description:"Various blue shades for charts, graphs, and secondary UI elements.",colors:t.secondary.blue,prefix:"secondary-blue"}),e.jsx(o,{title:"Turquoise",description:"Teal-cyan tones for accents and data visualization.",colors:t.secondary.turquoise,prefix:"secondary-turquoise"}),e.jsx(o,{title:"Teal Green",description:"Green-teal tones for nature, health, and wellness themes.",colors:t.secondary.tealgreen,prefix:"secondary-tealgreen"}),e.jsx(o,{title:"Terracotta",description:"Warm earth tones for warmth and approachability.",colors:t.secondary.terracotta,prefix:"secondary-terracotta"}),e.jsx(o,{title:"Yellow",description:"Bright yellows for highlights and attention.",colors:t.secondary.yellow,prefix:"secondary-yellow"}),e.jsx(o,{title:"Pink",description:"Accent pink for special emphasis.",colors:t.secondary.pink,prefix:"secondary-pink"}),e.jsx(o,{title:"Orange",description:"Warm orange for energy and attention.",colors:t.secondary.orange,prefix:"secondary-orange"})]})},u={render:()=>e.jsxs("div",{style:{padding:r[10],maxWidth:"1400px"},children:[e.jsxs("div",{style:{marginBottom:r[17]},children:[e.jsx("h1",{style:{fontSize:n[32],fontWeight:i.bold,marginBottom:r[3]},children:"Elevance Brand Colors"}),e.jsx("p",{style:{fontSize:n[16],color:a.text.secondary},children:"Blue-based color palette for Elevance brand"})]}),e.jsx(o,{title:"Primary Colors",description:"Main brand colors for primary actions, headers, and key UI elements.",colors:s.primary,prefix:"primary"}),e.jsx(o,{title:"Neutral Colors",description:"Grayscale palette for text, backgrounds, borders, and neutral UI elements.",colors:s.neutral,prefix:"neutral"}),e.jsx(o,{title:"Error Colors",description:"Red tones for error states, destructive actions, and critical alerts.",colors:s.error,prefix:"error"}),e.jsx(o,{title:"Warning Colors",description:"Yellow/orange tones for warnings and cautionary messages.",colors:s.warning,prefix:"warning"}),e.jsx(o,{title:"Success Colors",description:"Green tones for success states and positive feedback.",colors:s.success,prefix:"success"}),e.jsx(o,{title:"Info Colors",description:"Blue tones for informational messages and helpful hints.",colors:s.info,prefix:"info"}),e.jsx("h2",{style:{fontSize:n[28],fontWeight:i.bold,marginTop:r[20],marginBottom:r[12]},children:"Secondary Colors"}),e.jsx(o,{title:"Blue",description:"Various blue shades for charts, graphs, and secondary UI elements.",colors:s.secondary.blue,prefix:"secondary-blue"}),e.jsx(o,{title:"Turquoise",description:"Teal-cyan tones for accents and data visualization.",colors:s.secondary.turquoise,prefix:"secondary-turquoise"}),e.jsx(o,{title:"Teal Green",description:"Green-teal tones for nature, health, and wellness themes.",colors:s.secondary.tealgreen,prefix:"secondary-tealgreen"}),e.jsx(o,{title:"Terracotta",description:"Warm earth tones for warmth and approachability.",colors:s.secondary.terracotta,prefix:"secondary-terracotta"}),e.jsx(o,{title:"Yellow",description:"Bright yellows for highlights and attention.",colors:s.secondary.yellow,prefix:"secondary-yellow"}),e.jsx(o,{title:"Pink",description:"Accent pink for special emphasis.",colors:s.secondary.pink,prefix:"secondary-pink"}),e.jsx(o,{title:"Orange",description:"Warm orange for energy and attention.",colors:s.secondary.orange,prefix:"secondary-orange"})]})};var x,C,b;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: spacing['10'],
    maxWidth: '1400px'
  }}>
      <div style={{
      marginBottom: spacing['17']
    }}>
        <h1 style={{
        fontSize: fontSizes[32],
        fontWeight: fontWeights.bold,
        marginBottom: spacing['3']
      }}>
          Carelon Brand Colors
        </h1>
        <p style={{
        fontSize: fontSizes[16],
        color: carelonSemanticColors.text.secondary
      }}>
          Purple-based color palette for Carelon brand
        </p>
      </div>

      <ColorPaletteSection title="Primary Colors" description="Main brand colors for primary actions, headers, and key UI elements. Use these for buttons, links, and important interactive elements." colors={carelonColors.primary} prefix="primary" />

      <ColorPaletteSection title="Neutral Colors" description="Grayscale palette for text, backgrounds, borders, and neutral UI elements. Essential for creating hierarchy and structure." colors={carelonColors.neutral} prefix="neutral" />

      <ColorPaletteSection title="Error Colors" description="Red tones for error states, destructive actions, and critical alerts. Use to communicate problems or dangerous actions." colors={carelonColors.error} prefix="error" />

      <ColorPaletteSection title="Warning Colors" description="Yellow/orange tones for warnings and cautionary messages. Use to alert users to potential issues." colors={carelonColors.warning} prefix="warning" />

      <ColorPaletteSection title="Success Colors" description="Green tones for success states and positive feedback. Use to confirm successful actions." colors={carelonColors.success} prefix="success" />

      <ColorPaletteSection title="Info Colors" description="Blue tones for informational messages and helpful hints. Use for neutral, informative content." colors={carelonColors.info} prefix="info" />

      <h2 style={{
      fontSize: fontSizes[28],
      fontWeight: fontWeights.bold,
      marginTop: spacing['20'],
      marginBottom: spacing['12']
    }}>
        Secondary Colors
      </h2>
      <p style={{
      fontSize: fontSizes[14],
      color: carelonSemanticColors.text.secondary,
      marginBottom: spacing['12']
    }}>
        Extended palette for data visualization, illustrations, and decorative elements.
      </p>

      <ColorPaletteSection title="Blue" description="Various blue shades for charts, graphs, and secondary UI elements." colors={carelonColors.secondary.blue} prefix="secondary-blue" />

      <ColorPaletteSection title="Turquoise" description="Teal-cyan tones for accents and data visualization." colors={carelonColors.secondary.turquoise} prefix="secondary-turquoise" />

      <ColorPaletteSection title="Teal Green" description="Green-teal tones for nature, health, and wellness themes." colors={carelonColors.secondary.tealgreen} prefix="secondary-tealgreen" />

      <ColorPaletteSection title="Terracotta" description="Warm earth tones for warmth and approachability." colors={carelonColors.secondary.terracotta} prefix="secondary-terracotta" />

      <ColorPaletteSection title="Yellow" description="Bright yellows for highlights and attention." colors={carelonColors.secondary.yellow} prefix="secondary-yellow" />

      <ColorPaletteSection title="Pink" description="Accent pink for special emphasis." colors={carelonColors.secondary.pink} prefix="secondary-pink" />

      <ColorPaletteSection title="Orange" description="Warm orange for energy and attention." colors={carelonColors.secondary.orange} prefix="secondary-orange" />
    </div>
}`,...(b=(C=f.parameters)==null?void 0:C.docs)==null?void 0:b.source}}};var S,v,j;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: spacing['10'],
    maxWidth: '1400px'
  }}>
      <div style={{
      marginBottom: spacing['17']
    }}>
        <h1 style={{
        fontSize: fontSizes[32],
        fontWeight: fontWeights.bold,
        marginBottom: spacing['3']
      }}>
          Elevance Brand Colors
        </h1>
        <p style={{
        fontSize: fontSizes[16],
        color: carelonSemanticColors.text.secondary
      }}>
          Blue-based color palette for Elevance brand
        </p>
      </div>

      <ColorPaletteSection title="Primary Colors" description="Main brand colors for primary actions, headers, and key UI elements." colors={elevanceColors.primary} prefix="primary" />

      <ColorPaletteSection title="Neutral Colors" description="Grayscale palette for text, backgrounds, borders, and neutral UI elements." colors={elevanceColors.neutral} prefix="neutral" />

      <ColorPaletteSection title="Error Colors" description="Red tones for error states, destructive actions, and critical alerts." colors={elevanceColors.error} prefix="error" />

      <ColorPaletteSection title="Warning Colors" description="Yellow/orange tones for warnings and cautionary messages." colors={elevanceColors.warning} prefix="warning" />

      <ColorPaletteSection title="Success Colors" description="Green tones for success states and positive feedback." colors={elevanceColors.success} prefix="success" />

      <ColorPaletteSection title="Info Colors" description="Blue tones for informational messages and helpful hints." colors={elevanceColors.info} prefix="info" />

      <h2 style={{
      fontSize: fontSizes[28],
      fontWeight: fontWeights.bold,
      marginTop: spacing['20'],
      marginBottom: spacing['12']
    }}>
        Secondary Colors
      </h2>

      <ColorPaletteSection title="Blue" description="Various blue shades for charts, graphs, and secondary UI elements." colors={elevanceColors.secondary.blue} prefix="secondary-blue" />

      <ColorPaletteSection title="Turquoise" description="Teal-cyan tones for accents and data visualization." colors={elevanceColors.secondary.turquoise} prefix="secondary-turquoise" />

      <ColorPaletteSection title="Teal Green" description="Green-teal tones for nature, health, and wellness themes." colors={elevanceColors.secondary.tealgreen} prefix="secondary-tealgreen" />

      <ColorPaletteSection title="Terracotta" description="Warm earth tones for warmth and approachability." colors={elevanceColors.secondary.terracotta} prefix="secondary-terracotta" />

      <ColorPaletteSection title="Yellow" description="Bright yellows for highlights and attention." colors={elevanceColors.secondary.yellow} prefix="secondary-yellow" />

      <ColorPaletteSection title="Pink" description="Accent pink for special emphasis." colors={elevanceColors.secondary.pink} prefix="secondary-pink" />

      <ColorPaletteSection title="Orange" description="Warm orange for energy and attention." colors={elevanceColors.secondary.orange} prefix="secondary-orange" />
    </div>
}`,...(j=(v=u.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};const G=["CarelonColors","ElevanceColors"];export{f as CarelonColors,u as ElevanceColors,G as __namedExportsOrder,U as default};
