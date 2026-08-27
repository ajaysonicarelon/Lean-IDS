import{j as o}from"./jsx-runtime-DSvmvvsx.js";import{r as g}from"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";const y=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M20 6L9 17L4 12",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),L=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M18 6L6 18M6 6L18 18",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),I=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M5 12H19M19 12L12 5M19 12L12 19",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),S=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8",stroke:"currentColor",strokeWidth:"2"}),o.jsx("path",{d:"M21 21L16.65 16.65",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),M=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2"}),o.jsx("path",{d:"M12 16V12M12 8H12.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),W=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M12 2L2 20H22L12 2Z",stroke:"currentColor",strokeWidth:"2",strokeLinejoin:"round"}),o.jsx("path",{d:"M12 9V13M12 17H12.01",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),B=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2"}),o.jsx("path",{d:"M15 9L9 15M9 9L15 15",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),R=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("circle",{cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"2"}),o.jsx("path",{d:"M9 12L11 14L15 10",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),z=()=>o.jsx("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:o.jsx("path",{d:"M3 12H21M3 6H21M3 18H21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})}),E=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("circle",{cx:"12",cy:"12",r:"3",stroke:"currentColor",strokeWidth:"2"}),o.jsx("path",{d:"M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),G=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("circle",{cx:"12",cy:"8",r:"5",stroke:"currentColor",strokeWidth:"2"}),o.jsx("path",{d:"M3 21C3 17 7 14 12 14C17 14 21 17 21 21",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round"})]}),H=()=>o.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("path",{d:"M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),o.jsx("path",{d:"M9 22V12H15V22",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]}),T={check:{component:y,name:"Check"},close:{component:L,name:"Close"},arrowRight:{component:I,name:"Arrow Right"},search:{component:S,name:"Search"},info:{component:M,name:"Info"},warning:{component:W,name:"Warning"},error:{component:B,name:"Error"},success:{component:R,name:"Success"},menu:{component:z,name:"Menu"},settings:{component:E,name:"Settings"},user:{component:G,name:"User"},home:{component:H,name:"Home"}},V=({name:n,IconComponent:a,iconKey:t})=>{const[j,h]=g.useState(!1),[m,c]=g.useState(null),d=g.useRef(null),C=()=>{var i;const e=(i=document.getElementById(`icon-${t}`))==null?void 0:i.innerHTML;if(!e)return;const p=new Blob([`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">${e}</svg>`],{type:"image/svg+xml"}),r=URL.createObjectURL(p),s=document.createElement("a");s.href=r,s.download=`${t}-icon.svg`,s.click(),URL.revokeObjectURL(r),c("svg"),setTimeout(()=>c(null),2e3)},b=()=>{const e=document.getElementById(`icon-${t}`);if(!e||!d.current)return;const p=new XMLSerializer().serializeToString(e),r=d.current,s=r.getContext("2d"),i=new Image;i.onload=()=>{r.width=128,r.height=128,s==null||s.drawImage(i,0,0,128,128),r.toBlob(u=>{if(u){const f=URL.createObjectURL(u),x=document.createElement("a");x.href=f,x.download=`${t}-icon.png`,x.click(),URL.revokeObjectURL(f)}}),c("png"),setTimeout(()=>c(null),2e3)},i.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(p)))};return o.jsxs("div",{style:{position:"relative",padding:"24px",border:"1px solid #e6e6e6",borderRadius:"8px",display:"flex",flexDirection:"column",alignItems:"center",gap:"12px",cursor:"pointer",transition:"all 0.2s",backgroundColor:"#ffffff"},onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[o.jsx("div",{id:`icon-${t}`,style:{width:"48px",height:"48px",color:"#5009b5"},children:o.jsx(a,{})}),o.jsxs("div",{style:{textAlign:"center"},children:[o.jsx("div",{style:{fontWeight:600,fontSize:"14px",marginBottom:"4px"},children:n}),o.jsx("code",{style:{fontSize:"11px",color:"#6c6c6c",fontFamily:"monospace",backgroundColor:"#f8f8f8",padding:"2px 6px",borderRadius:"4px"},children:t})]}),j&&o.jsxs("div",{style:{display:"flex",gap:"8px",marginTop:"8px"},children:[o.jsx("button",{onClick:C,style:{padding:"6px 12px",fontSize:"12px",fontWeight:500,backgroundColor:"#5009b5",color:"#ffffff",border:"none",borderRadius:"4px",cursor:"pointer",transition:"background-color 0.2s"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#400791"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#5009b5"},children:"Export SVG"}),o.jsx("button",{onClick:b,style:{padding:"6px 12px",fontSize:"12px",fontWeight:500,backgroundColor:"#ffffff",color:"#5009b5",border:"1px solid #5009b5",borderRadius:"4px",cursor:"pointer",transition:"all 0.2s"},onMouseEnter:e=>{e.currentTarget.style.backgroundColor="#f8f7fb"},onMouseLeave:e=>{e.currentTarget.style.backgroundColor="#ffffff"},children:"Export PNG"})]}),m&&o.jsxs("div",{style:{position:"absolute",top:"8px",right:"8px",padding:"4px 8px",backgroundColor:"#108808",color:"#ffffff",fontSize:"11px",fontWeight:500,borderRadius:"4px"},children:["✓ ",m.toUpperCase()," Downloaded"]}),o.jsx("canvas",{ref:d,style:{display:"none"}})]})},D={title:"Design Tokens/Icons",parameters:{layout:"padded",docs:{description:{component:`
# Icons

Common icons used throughout the Lean IDS design system. All icons are SVG-based for scalability and can be exported as SVG or PNG.

## Available Icons

The design system includes commonly used icons for:
- **Actions**: Check, Close, Arrow Right, Search
- **Status**: Info, Warning, Error, Success
- **Navigation**: Menu, Settings, User, Home

## Export Options

Hover over any icon to reveal export options:
- **Export SVG**: Download as scalable vector graphic (recommended)
- **Export PNG**: Download as 128x128px raster image

## Usage

Icons are designed to work with the current text color using \`currentColor\`. This allows them to inherit color from their parent element.

\`\`\`tsx
// Basic usage
<CheckIcon />

// With custom color
<div style={{ color: '#5009b5' }}>
  <CheckIcon />
</div>

// With custom size
<div style={{ width: '24px', height: '24px' }}>
  <CheckIcon />
</div>
\`\`\`

## Guidelines

- Use icons consistently throughout your application
- Maintain appropriate icon sizes (16px, 24px, 32px, 48px)
- Ensure sufficient contrast for accessibility
- Pair icons with text labels when possible
- Use semantic icons that match their meaning
        `}}},tags:["autodocs"]},l={render:()=>o.jsxs("div",{style:{padding:"24px",maxWidth:"1400px"},children:[o.jsxs("div",{style:{marginBottom:"48px"},children:[o.jsx("h1",{style:{fontSize:"32px",fontWeight:700,marginBottom:"8px"},children:"Icon Library"}),o.jsx("p",{style:{fontSize:"16px",color:"#6c6c6c",marginBottom:"16px"},children:"Common icons with SVG and PNG export functionality"}),o.jsx("div",{style:{padding:"12px 16px",backgroundColor:"#f0f4ff",borderRadius:"8px",border:"1px solid #c1d3ff"},children:o.jsxs("p",{style:{fontSize:"14px",color:"#3d5799",margin:0},children:["💡 ",o.jsx("strong",{children:"Tip:"})," Hover over any icon to export as SVG or PNG"]})})]}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"24px"},children:Object.entries(T).map(([n,{component:a,name:t}])=>o.jsx(V,{name:t,IconComponent:a,iconKey:n},n))}),o.jsxs("div",{style:{marginTop:"64px",padding:"24px",backgroundColor:"#fafafa",borderRadius:"8px"},children:[o.jsx("h2",{style:{fontSize:"20px",fontWeight:600,marginBottom:"16px"},children:"Icon Sizes Reference"}),o.jsx("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end",flexWrap:"wrap"},children:[16,24,32,48,64].map(n=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[o.jsx("div",{style:{width:`${n}px`,height:`${n}px`,color:"#5009b5"},children:o.jsx(y,{})}),o.jsxs("span",{style:{fontSize:"12px",color:"#6c6c6c"},children:[n,"px"]})]},n))})]})]})};var v,k,w;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
          Icon Library
        </h1>
        <p style={{
        fontSize: '16px',
        color: '#6c6c6c',
        marginBottom: '16px'
      }}>
          Common icons with SVG and PNG export functionality
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
            💡 <strong>Tip:</strong> Hover over any icon to export as SVG or PNG
          </p>
        </div>
      </div>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '24px'
    }}>
        {Object.entries(icons).map(([key, {
        component,
        name
      }]) => <IconCard key={key} name={name} IconComponent={component} iconKey={key} />)}
      </div>

      <div style={{
      marginTop: '64px',
      padding: '24px',
      backgroundColor: '#fafafa',
      borderRadius: '8px'
    }}>
        <h2 style={{
        fontSize: '20px',
        fontWeight: 600,
        marginBottom: '16px'
      }}>
          Icon Sizes Reference
        </h2>
        <div style={{
        display: 'flex',
        gap: '32px',
        alignItems: 'flex-end',
        flexWrap: 'wrap'
      }}>
          {[16, 24, 32, 48, 64].map(size => <div key={size} style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px'
        }}>
              <div style={{
            width: \`\${size}px\`,
            height: \`\${size}px\`,
            color: '#5009b5'
          }}>
                <CheckIcon />
              </div>
              <span style={{
            fontSize: '12px',
            color: '#6c6c6c'
          }}>{size}px</span>
            </div>)}
        </div>
      </div>
    </div>
}`,...(w=(k=l.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};const N=["AllIcons"];export{l as AllIcons,N as __namedExportsOrder,D as default};
