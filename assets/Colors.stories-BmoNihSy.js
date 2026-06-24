import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as C}from"./index-B0WjJBI_.js";import{c as r,e as t}from"./breakpoints-DqB60pr6.js";import"./_commonjsHelpers-CqkleIqs.js";const v=({name:d,value:a,description:n})=>{const[i,s]=C.useState(!1),p=()=>{navigator.clipboard.writeText(a),s(!0),setTimeout(()=>s(!1),2e3)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px",cursor:"pointer",transition:"transform 0.2s"},onClick:p,onMouseEnter:f=>{f.currentTarget.style.transform="scale(1.02)"},onMouseLeave:f=>{f.currentTarget.style.transform="scale(1)"},children:[e.jsx("div",{style:{width:"100%",height:"80px",backgroundColor:a,borderRadius:"8px",border:"1px solid #e6e6e6",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("span",{style:{fontWeight:600,fontSize:"14px"},children:d}),i&&e.jsx("span",{style:{fontSize:"12px",color:"#108808",fontWeight:500},children:"✓ Copied"})]}),e.jsx("code",{style:{fontSize:"12px",color:"#6c6c6c",fontFamily:"monospace",backgroundColor:"#f8f8f8",padding:"2px 6px",borderRadius:"4px"},children:a}),n&&e.jsx("span",{style:{fontSize:"11px",color:"#909090"},children:n})]})]})},o=({title:d,description:a,colors:n,prefix:i=""})=>e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h2",{style:{fontSize:"24px",fontWeight:700,marginBottom:"8px"},children:d}),e.jsx("p",{style:{fontSize:"14px",color:"#6c6c6c",marginBottom:"24px"},children:a}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(180px, 1fr))",gap:"24px"},children:Object.entries(n).map(([s,p])=>e.jsx(v,{name:i?`${i}-${s}`:s,value:p},s))})]}),k={title:"Design Tokens/Colors",parameters:{layout:"padded",docs:{description:{component:`
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
        `}}},tags:["autodocs"]},l={render:()=>e.jsxs("div",{style:{padding:"24px",maxWidth:"1400px"},children:[e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h1",{style:{fontSize:"32px",fontWeight:700,marginBottom:"8px"},children:"Carelon Brand Colors"}),e.jsx("p",{style:{fontSize:"16px",color:"#6c6c6c"},children:"Purple-based color palette for Carelon brand"})]}),e.jsx(o,{title:"Primary Colors",description:"Main brand colors for primary actions, headers, and key UI elements. Use these for buttons, links, and important interactive elements.",colors:r.primary,prefix:"primary"}),e.jsx(o,{title:"Neutral Colors",description:"Grayscale palette for text, backgrounds, borders, and neutral UI elements. Essential for creating hierarchy and structure.",colors:r.neutral,prefix:"neutral"}),e.jsx(o,{title:"Error Colors",description:"Red tones for error states, destructive actions, and critical alerts. Use to communicate problems or dangerous actions.",colors:r.error,prefix:"error"}),e.jsx(o,{title:"Warning Colors",description:"Yellow/orange tones for warnings and cautionary messages. Use to alert users to potential issues.",colors:r.warning,prefix:"warning"}),e.jsx(o,{title:"Success Colors",description:"Green tones for success states and positive feedback. Use to confirm successful actions.",colors:r.success,prefix:"success"}),e.jsx(o,{title:"Info Colors",description:"Blue tones for informational messages and helpful hints. Use for neutral, informative content.",colors:r.info,prefix:"info"}),e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,marginTop:"64px",marginBottom:"32px"},children:"Secondary Colors"}),e.jsx("p",{style:{fontSize:"14px",color:"#6c6c6c",marginBottom:"32px"},children:"Extended palette for data visualization, illustrations, and decorative elements."}),e.jsx(o,{title:"Blue",description:"Various blue shades for charts, graphs, and secondary UI elements.",colors:r.secondary.blue,prefix:"secondary-blue"}),e.jsx(o,{title:"Turquoise",description:"Teal-cyan tones for accents and data visualization.",colors:r.secondary.turquoise,prefix:"secondary-turquoise"}),e.jsx(o,{title:"Teal Green",description:"Green-teal tones for nature, health, and wellness themes.",colors:r.secondary.tealgreen,prefix:"secondary-tealgreen"}),e.jsx(o,{title:"Terracotta",description:"Warm earth tones for warmth and approachability.",colors:r.secondary.terracotta,prefix:"secondary-terracotta"}),e.jsx(o,{title:"Yellow",description:"Bright yellows for highlights and attention.",colors:r.secondary.yellow,prefix:"secondary-yellow"}),e.jsx(o,{title:"Pink",description:"Accent pink for special emphasis.",colors:r.secondary.pink,prefix:"secondary-pink"}),e.jsx(o,{title:"Orange",description:"Warm orange for energy and attention.",colors:r.secondary.orange,prefix:"secondary-orange"})]})},c={render:()=>e.jsxs("div",{style:{padding:"24px",maxWidth:"1400px"},children:[e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h1",{style:{fontSize:"32px",fontWeight:700,marginBottom:"8px"},children:"Elevance Brand Colors"}),e.jsx("p",{style:{fontSize:"16px",color:"#6c6c6c"},children:"Blue-based color palette for Elevance brand"})]}),e.jsx(o,{title:"Primary Colors",description:"Main brand colors for primary actions, headers, and key UI elements.",colors:t.primary,prefix:"primary"}),e.jsx(o,{title:"Neutral Colors",description:"Grayscale palette for text, backgrounds, borders, and neutral UI elements.",colors:t.neutral,prefix:"neutral"}),e.jsx(o,{title:"Error Colors",description:"Red tones for error states, destructive actions, and critical alerts.",colors:t.error,prefix:"error"}),e.jsx(o,{title:"Warning Colors",description:"Yellow/orange tones for warnings and cautionary messages.",colors:t.warning,prefix:"warning"}),e.jsx(o,{title:"Success Colors",description:"Green tones for success states and positive feedback.",colors:t.success,prefix:"success"}),e.jsx(o,{title:"Info Colors",description:"Blue tones for informational messages and helpful hints.",colors:t.info,prefix:"info"}),e.jsx("h2",{style:{fontSize:"28px",fontWeight:700,marginTop:"64px",marginBottom:"32px"},children:"Secondary Colors"}),e.jsx(o,{title:"Blue",description:"Various blue shades for charts, graphs, and secondary UI elements.",colors:t.secondary.blue,prefix:"secondary-blue"}),e.jsx(o,{title:"Turquoise",description:"Teal-cyan tones for accents and data visualization.",colors:t.secondary.turquoise,prefix:"secondary-turquoise"}),e.jsx(o,{title:"Teal Green",description:"Green-teal tones for nature, health, and wellness themes.",colors:t.secondary.tealgreen,prefix:"secondary-tealgreen"}),e.jsx(o,{title:"Terracotta",description:"Warm earth tones for warmth and approachability.",colors:t.secondary.terracotta,prefix:"secondary-terracotta"}),e.jsx(o,{title:"Yellow",description:"Bright yellows for highlights and attention.",colors:t.secondary.yellow,prefix:"secondary-yellow"}),e.jsx(o,{title:"Pink",description:"Accent pink for special emphasis.",colors:t.secondary.pink,prefix:"secondary-pink"}),e.jsx(o,{title:"Orange",description:"Warm orange for energy and attention.",colors:t.secondary.orange,prefix:"secondary-orange"})]})};var u,x,m;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    maxWidth: '1400px'
  }}>
      <div style={{
      marginBottom: '48px'
    }}>
        <h1 style={{
        fontSize: '32px',
        fontWeight: 700,
        marginBottom: '8px'
      }}>
          Carelon Brand Colors
        </h1>
        <p style={{
        fontSize: '16px',
        color: '#6c6c6c'
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
      fontSize: '28px',
      fontWeight: 700,
      marginTop: '64px',
      marginBottom: '32px'
    }}>
        Secondary Colors
      </h2>
      <p style={{
      fontSize: '14px',
      color: '#6c6c6c',
      marginBottom: '32px'
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
}`,...(m=(x=l.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};var y,g,h;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: '24px',
    maxWidth: '1400px'
  }}>
      <div style={{
      marginBottom: '48px'
    }}>
        <h1 style={{
        fontSize: '32px',
        fontWeight: 700,
        marginBottom: '8px'
      }}>
          Elevance Brand Colors
        </h1>
        <p style={{
        fontSize: '16px',
        color: '#6c6c6c'
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
      fontSize: '28px',
      fontWeight: 700,
      marginTop: '64px',
      marginBottom: '32px'
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
}`,...(h=(g=c.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const B=["CarelonColors","ElevanceColors"];export{l as CarelonColors,c as ElevanceColors,B as __namedExportsOrder,k as default};
