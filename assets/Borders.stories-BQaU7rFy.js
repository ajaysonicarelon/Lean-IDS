import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{r as b}from"./index-B0WjJBI_.js";import"./breakpoints-DqB60pr6.js";import{b as v,a as j,s as S}from"./borders-4i-t20as.js";import"./_commonjsHelpers-CqkleIqs.js";const k=({name:o,value:n})=>{const[a,t]=b.useState(!1),l=()=>{navigator.clipboard.writeText(n),t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px",border:"1px solid #e6e6e6",borderRadius:"8px",cursor:"pointer",transition:"all 0.2s",backgroundColor:"#ffffff"},onClick:l,onMouseEnter:r=>{r.currentTarget.style.boxShadow="0 4px 8px rgba(0,0,0,0.1)"},onMouseLeave:r=>{r.currentTarget.style.boxShadow="none"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontWeight:600,fontSize:"14px",marginBottom:"4px"},children:["borderRadius.",o]}),e.jsx("code",{style:{fontSize:"12px",color:"#6c6c6c",fontFamily:"monospace",backgroundColor:"#f8f8f8",padding:"2px 6px",borderRadius:"4px"},children:n})]}),a&&e.jsx("span",{style:{fontSize:"12px",color:"#108808",fontWeight:500},children:"✓ Copied"})]}),e.jsx("div",{style:{width:"100%",height:"80px",backgroundColor:"#5009b5",borderRadius:n,marginTop:"8px"}})]})},w=({name:o,value:n})=>{const[a,t]=b.useState(!1),l=()=>{navigator.clipboard.writeText(n),t(!0),setTimeout(()=>t(!1),2e3)};return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",padding:"16px",border:"1px solid #e6e6e6",borderRadius:"8px",cursor:"pointer",transition:"all 0.2s",backgroundColor:"#ffffff"},onClick:l,onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-2px)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{fontWeight:600,fontSize:"14px",marginBottom:"4px"},children:["shadows.",o]}),e.jsx("code",{style:{fontSize:"11px",color:"#6c6c6c",fontFamily:"monospace",backgroundColor:"#f8f8f8",padding:"2px 6px",borderRadius:"4px",display:"block",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",maxWidth:"200px"},children:n})]}),a&&e.jsx("span",{style:{fontSize:"12px",color:"#108808",fontWeight:500},children:"✓ Copied"})]}),e.jsx("div",{style:{width:"100%",height:"80px",backgroundColor:"#ffffff",borderRadius:"8px",boxShadow:n,marginTop:"8px",display:"flex",alignItems:"center",justifyContent:"center",color:"#6c6c6c",fontSize:"12px"},children:"Shadow Preview"})]})},R={title:"Design Tokens/Borders & Shadows",parameters:{layout:"padded",docs:{description:{component:`
# Borders & Shadows Tokens

The Lean IDS design system provides tokens for border radius, border width, and shadows to create consistent visual styles and depth.

## Border Radius

Border radius tokens define the roundness of corners:

- **xs** (2px): Subtle rounding for small elements
- **sm** (4px): Standard rounding for buttons and inputs
- **md** (8px): Medium rounding for cards and containers
- **lg** (12px): Large rounding for prominent elements
- **xl** (16px): Extra large rounding for special cases
- **full** (999px): Fully rounded (pills, circular elements)

## Border Width

Border width tokens define the thickness of borders:

- **0**: No border
- **1** (1px): Thin border (default)
- **2** (2px): Medium border
- **4** (4px): Thick border
- **8** (8px): Extra thick border (decorative)

## Shadows

Shadow tokens create depth and elevation:

- **none**: No shadow
- **xs**: Subtle shadow for slight elevation
- **sm**: Small shadow for cards and dropdowns
- **md**: Medium shadow for modals and popovers
- **lg**: Large shadow for prominent overlays
- **xl**: Extra large shadow for major elements
- **2xl**: Maximum shadow for hero elements
- **inner**: Inset shadow for pressed states
- **focus**: Focus ring for accessibility

## Usage Guidelines

### Border Radius

- Use consistent border radius throughout your application
- Smaller radius (xs, sm) for compact UI elements
- Larger radius (md, lg, xl) for spacious layouts
- Use 'full' for circular avatars, badges, and pills

### Shadows

- Use shadows to indicate elevation and hierarchy
- Lighter shadows (xs, sm) for subtle depth
- Heavier shadows (lg, xl, 2xl) for overlays and modals
- Use focus shadow for keyboard navigation
- Avoid excessive shadows that create visual clutter

### Accessibility

- Ensure sufficient contrast between elements and shadows
- Use focus shadows for keyboard navigation
- Don't rely solely on shadows to convey information

## Click to Copy

Click any token to copy its value to your clipboard.
        `}}},tags:["autodocs"]},s={render:()=>e.jsxs("div",{style:{padding:"24px",maxWidth:"1200px"},children:[e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h1",{style:{fontSize:"32px",fontWeight:700,marginBottom:"8px"},children:"Border Radius Tokens"}),e.jsx("p",{style:{fontSize:"16px",color:"#6c6c6c",marginBottom:"16px"},children:"Consistent corner rounding for UI elements"}),e.jsx("div",{style:{padding:"12px 16px",backgroundColor:"#f0f4ff",borderRadius:"8px",border:"1px solid #c1d3ff"},children:e.jsxs("p",{style:{fontSize:"14px",color:"#3d5799",margin:0},children:["💡 ",e.jsx("strong",{children:"Tip:"})," Click any token to copy its value to clipboard"]})})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"24px"},children:Object.entries(v).map(([o,n])=>e.jsx(k,{name:o,value:n},o))})]})},i={render:()=>e.jsxs("div",{style:{padding:"24px",maxWidth:"1200px"},children:[e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h1",{style:{fontSize:"32px",fontWeight:700,marginBottom:"8px"},children:"Border Width Tokens"}),e.jsx("p",{style:{fontSize:"16px",color:"#6c6c6c"},children:"Standard border thickness values"})]}),e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:Object.entries(j).map(([o,n])=>e.jsxs("div",{style:{padding:"16px",border:"1px solid #e6e6e6",borderRadius:"8px",backgroundColor:"#ffffff"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"12px"},children:e.jsxs("div",{children:[e.jsxs("div",{style:{fontWeight:600,fontSize:"14px",marginBottom:"4px"},children:["borderWidth.",o]}),e.jsx("code",{style:{fontSize:"12px",color:"#6c6c6c",fontFamily:"monospace",backgroundColor:"#f8f8f8",padding:"2px 6px",borderRadius:"4px"},children:n})]})}),e.jsxs("div",{style:{width:"100%",height:"60px",border:`${n} solid #5009b5`,borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",color:"#6c6c6c",fontSize:"12px"},children:["Border Width: ",n]})]},o))})]})},d={render:()=>e.jsxs("div",{style:{padding:"24px",maxWidth:"1200px"},children:[e.jsxs("div",{style:{marginBottom:"48px"},children:[e.jsx("h1",{style:{fontSize:"32px",fontWeight:700,marginBottom:"8px"},children:"Shadow Tokens"}),e.jsx("p",{style:{fontSize:"16px",color:"#6c6c6c",marginBottom:"16px"},children:"Elevation system for depth and hierarchy"}),e.jsx("div",{style:{padding:"12px 16px",backgroundColor:"#f0f4ff",borderRadius:"8px",border:"1px solid #c1d3ff"},children:e.jsxs("p",{style:{fontSize:"14px",color:"#3d5799",margin:0},children:["💡 ",e.jsx("strong",{children:"Tip:"})," Click any token to copy its value to clipboard"]})})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:"24px"},children:Object.entries(S).map(([o,n])=>e.jsx(w,{name:o,value:n},o))})]})};var p,c,x;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          Border Radius Tokens
        </h1>
        <p style={{
        fontSize: '16px',
        color: '#6c6c6c',
        marginBottom: '16px'
      }}>
          Consistent corner rounding for UI elements
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
            💡 <strong>Tip:</strong> Click any token to copy its value to clipboard
          </p>
        </div>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '24px'
    }}>
        {Object.entries(borderRadius).map(([key, value]) => <BorderRadiusExample key={key} name={key} value={value} />)}
      </div>
    </div>
}`,...(x=(c=s.parameters)==null?void 0:c.docs)==null?void 0:x.source}}};var f,m,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          Border Width Tokens
        </h1>
        <p style={{
        fontSize: '16px',
        color: '#6c6c6c'
      }}>
          Standard border thickness values
        </p>
      </div>

      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        {Object.entries(borderWidth).map(([key, value]) => <div key={key} style={{
        padding: '16px',
        border: '1px solid #e6e6e6',
        borderRadius: '8px',
        backgroundColor: '#ffffff'
      }}>
            <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}>
              <div>
                <div style={{
              fontWeight: 600,
              fontSize: '14px',
              marginBottom: '4px'
            }}>
                  borderWidth.{key}
                </div>
                <code style={{
              fontSize: '12px',
              color: '#6c6c6c',
              fontFamily: 'monospace',
              backgroundColor: '#f8f8f8',
              padding: '2px 6px',
              borderRadius: '4px'
            }}>
                  {value}
                </code>
              </div>
            </div>
            <div style={{
          width: '100%',
          height: '60px',
          border: \`\${value} solid #5009b5\`,
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#6c6c6c',
          fontSize: '12px'
        }}>
              Border Width: {value}
            </div>
          </div>)}
      </div>
    </div>
}`,...(h=(m=i.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var u,g,y;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
          Shadow Tokens
        </h1>
        <p style={{
        fontSize: '16px',
        color: '#6c6c6c',
        marginBottom: '16px'
      }}>
          Elevation system for depth and hierarchy
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
            💡 <strong>Tip:</strong> Click any token to copy its value to clipboard
          </p>
        </div>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '24px'
    }}>
        {Object.entries(shadows).map(([key, value]) => <ShadowExample key={key} name={key} value={value} />)}
      </div>
    </div>
}`,...(y=(g=d.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const E=["BorderRadius","BorderWidths","Shadows"];export{s as BorderRadius,i as BorderWidths,d as Shadows,E as __namedExportsOrder,R as default};
