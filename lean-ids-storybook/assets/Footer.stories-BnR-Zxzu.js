import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{F as N}from"./Footer-CJteDAya.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-CuwBLqEg.js";const _={title:"Components/Footer",component:N,parameters:{layout:"fullscreen",docs:{description:{component:`
# Footer

A footer bar component displaying last updated date, version number, and feedback link.

## Installation

\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage

\`\`\`tsx
import { Footer } from '@ajaysoni7832/lean-ids-components';

function App() {
  return (
    <Footer
      lastUpdated="Sept 23, 2024"
      version="1.0"
      feedbackUrl="#"
      feedbackText="Send us a Feedback here"
      onFeedbackClick={() => console.log('Feedback clicked')}
    />
  );
}
\`\`\`

## Features

✅ **Last Updated Date** - Show when content was last updated
✅ **Version Display** - Application version number
✅ **Feedback Link** - Clickable feedback/support link
✅ **Visibility Controls** - Show/hide individual sections
✅ **Custom Content** - Add custom elements before/after default items
✅ **Custom Styling** - Matches design system
✅ **Responsive** - Adapts to screen size

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| lastUpdated | string | 'Sept 23, 2024' | Last updated date text |
| version | string | '1.0' | Version number |
| feedbackUrl | string | '#' | Feedback link URL |
| feedbackText | string | 'Send us a Feedback here' | Feedback link text |
| onFeedbackClick | () => void | - | Feedback click handler |
| showLastUpdated | boolean | true | Show/hide last updated section |
| showVersion | boolean | true | Show/hide version section |
| showFeedback | boolean | true | Show/hide feedback section |
| customContentBefore | React.ReactNode | - | Custom content before default items |
| customContentAfter | React.ReactNode | - | Custom content after default items |
| className | string | - | Custom CSS class |

## Examples

### Basic Footer
\`\`\`tsx
<Footer
  lastUpdated="Sept 23, 2024"
  version="1.0"
  feedbackUrl="#"
/>
\`\`\`

### With Custom Feedback Text
\`\`\`tsx
<Footer
  lastUpdated="May 7, 2026"
  version="2.1.5"
  feedbackUrl="https://feedback.example.com"
  feedbackText="Report an Issue"
/>
\`\`\`

### With Click Handler
\`\`\`tsx
<Footer
  lastUpdated="Today"
  version="3.0.0-beta"
  feedbackUrl="#"
  feedbackText="Give Feedback"
  onFeedbackClick={() => {
    // Open feedback modal or navigate
    openFeedbackModal();
  }}
/>
\`\`\`

### Show Only Specific Sections
\`\`\`tsx
// Only version
<Footer 
  version="2.0" 
  showLastUpdated={false}
  showFeedback={false}
/>

// Only feedback
<Footer 
  feedbackUrl="#"
  feedbackText="Contact Support"
  showLastUpdated={false}
  showVersion={false}
/>
\`\`\`

### With Custom Content
\`\`\`tsx
// Add copyright before default items
<Footer 
  lastUpdated="Sept 23, 2024"
  version="1.0"
  customContentBefore={
    <div>© 2024 Company Name</div>
  }
/>

// Add links after default items
<Footer 
  lastUpdated="Sept 23, 2024"
  version="1.0"
  customContentAfter={
    <div>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  }
/>

// Fully custom footer
<Footer 
  showLastUpdated={false}
  showVersion={false}
  showFeedback={false}
  customContentBefore={
    <div>My Custom Footer Content</div>
  }
/>
\`\`\`

## Best Practices

1. **Keep version updated** - Match your app version
2. **Use relative dates** - "Today", "Yesterday" for recent updates
3. **Provide working feedback link** - Ensure users can reach support
4. **Place at bottom** - Typically at page/app bottom
5. **Keep text concise** - Footer should be minimal

## Accessibility

- ✅ Semantic HTML
- ✅ Keyboard accessible links
- ✅ Proper contrast ratios
- ✅ Screen reader friendly
        `}}},tags:["autodocs"]},t={args:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackUrl:"#",feedbackText:"Send us a Feedback here",onFeedbackClick:()=>alert("Feedback link clicked!")}},o={args:{lastUpdated:"May 7, 2026",version:"2.1.5",feedbackUrl:"https://feedback.example.com",feedbackText:"Report an Issue"}},a={args:{lastUpdated:"Today",version:"3.0.0-beta",feedbackUrl:"#",feedbackText:"Give Feedback"}},s={args:{version:"2.0",showLastUpdated:!1,showFeedback:!1}},r={args:{feedbackUrl:"#",feedbackText:"Contact Support",showLastUpdated:!1,showVersion:!1}},n={args:{version:"1.5.2",feedbackUrl:"#",feedbackText:"Report Bug",showLastUpdated:!1}},c={args:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackUrl:"#",customContentBefore:e.jsx("div",{style:{padding:"0 16px",color:"#666",fontSize:"14px"},children:"© 2024 Company Name. All rights reserved."})}},d={args:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackUrl:"#",customContentAfter:e.jsxs("div",{style:{padding:"0 16px",display:"flex",gap:"16px"},children:[e.jsx("a",{href:"#",style:{color:"#0066cc",textDecoration:"none",fontSize:"14px"},children:"Privacy"}),e.jsx("a",{href:"#",style:{color:"#0066cc",textDecoration:"none",fontSize:"14px"},children:"Terms"})]})}},i={args:{showLastUpdated:!1,showVersion:!1,showFeedback:!1,customContentBefore:e.jsxs("div",{style:{padding:"0 16px",display:"flex",justifyContent:"space-between",width:"100%",fontSize:"14px",color:"#666"},children:[e.jsx("div",{children:"© 2024 My Company"}),e.jsxs("div",{style:{display:"flex",gap:"24px"},children:[e.jsx("a",{href:"#",style:{color:"#0066cc",textDecoration:"none"},children:"About"}),e.jsx("a",{href:"#",style:{color:"#0066cc",textDecoration:"none"},children:"Contact"}),e.jsx("a",{href:"#",style:{color:"#0066cc",textDecoration:"none"},children:"Privacy"})]})]})}},l={args:{lastUpdated:"July 20, 2026",version:"4.2.1",feedbackUrl:"https://support.example.com",feedbackText:"Get Help",showVersion:!0,showLastUpdated:!0,showFeedback:!0,customContentBefore:e.jsx("div",{style:{padding:"0 16px",fontSize:"14px",color:"#666"},children:"© 2026 Lean IDS"}),customContentAfter:e.jsxs("div",{style:{padding:"0 16px",display:"flex",gap:"16px"},children:[e.jsx("a",{href:"#",style:{color:"#0066cc",textDecoration:"none",fontSize:"14px"},children:"Docs"}),e.jsx("a",{href:"#",style:{color:"#0066cc",textDecoration:"none",fontSize:"14px"},children:"API"})]})}};var p,f,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    lastUpdated: 'Sept 23, 2024',
    version: '1.0',
    feedbackUrl: '#',
    feedbackText: 'Send us a Feedback here',
    onFeedbackClick: () => alert('Feedback link clicked!')
  }
}`,...(m=(f=t.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var u,b,k;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    lastUpdated: 'May 7, 2026',
    version: '2.1.5',
    feedbackUrl: 'https://feedback.example.com',
    feedbackText: 'Report an Issue'
  }
}`,...(k=(b=o.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,h,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    lastUpdated: 'Today',
    version: '3.0.0-beta',
    feedbackUrl: '#',
    feedbackText: 'Give Feedback'
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var v,g,C;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    version: '2.0',
    showLastUpdated: false,
    showFeedback: false
  }
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var U,S,F;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    feedbackUrl: '#',
    feedbackText: 'Contact Support',
    showLastUpdated: false,
    showVersion: false
  }
}`,...(F=(S=r.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};var w,T,D;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    version: '1.5.2',
    feedbackUrl: '#',
    feedbackText: 'Report Bug',
    showLastUpdated: false
  }
}`,...(D=(T=n.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var A,L,j;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    lastUpdated: 'Sept 23, 2024',
    version: '1.0',
    feedbackUrl: '#',
    customContentBefore: <div style={{
      padding: '0 16px',
      color: '#666',
      fontSize: '14px'
    }}>
        © 2024 Company Name. All rights reserved.
      </div>
  }
}`,...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var B,V,z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    lastUpdated: 'Sept 23, 2024',
    version: '1.0',
    feedbackUrl: '#',
    customContentAfter: <div style={{
      padding: '0 16px',
      display: 'flex',
      gap: '16px'
    }}>
        <a href="#" style={{
        color: '#0066cc',
        textDecoration: 'none',
        fontSize: '14px'
      }}>Privacy</a>
        <a href="#" style={{
        color: '#0066cc',
        textDecoration: 'none',
        fontSize: '14px'
      }}>Terms</a>
      </div>
  }
}`,...(z=(V=d.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var P,R,O;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    showLastUpdated: false,
    showVersion: false,
    showFeedback: false,
    customContentBefore: <div style={{
      padding: '0 16px',
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      fontSize: '14px',
      color: '#666'
    }}>
        <div>© 2024 My Company</div>
        <div style={{
        display: 'flex',
        gap: '24px'
      }}>
          <a href="#" style={{
          color: '#0066cc',
          textDecoration: 'none'
        }}>About</a>
          <a href="#" style={{
          color: '#0066cc',
          textDecoration: 'none'
        }}>Contact</a>
          <a href="#" style={{
          color: '#0066cc',
          textDecoration: 'none'
        }}>Privacy</a>
        </div>
      </div>
  }
}`,...(O=(R=i.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var M,I,W;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    lastUpdated: 'July 20, 2026',
    version: '4.2.1',
    feedbackUrl: 'https://support.example.com',
    feedbackText: 'Get Help',
    showVersion: true,
    showLastUpdated: true,
    showFeedback: true,
    customContentBefore: <div style={{
      padding: '0 16px',
      fontSize: '14px',
      color: '#666'
    }}>
        © 2026 Lean IDS
      </div>,
    customContentAfter: <div style={{
      padding: '0 16px',
      display: 'flex',
      gap: '16px'
    }}>
        <a href="#" style={{
        color: '#0066cc',
        textDecoration: 'none',
        fontSize: '14px'
      }}>Docs</a>
        <a href="#" style={{
        color: '#0066cc',
        textDecoration: 'none',
        fontSize: '14px'
      }}>API</a>
      </div>
  }
}`,...(W=(I=l.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};const Y=["Default","CustomDate","BetaVersion","OnlyVersion","OnlyFeedback","VersionAndFeedback","WithCustomContentBefore","WithCustomContentAfter","CustomContentOnly","FullyCustomized"];export{a as BetaVersion,i as CustomContentOnly,o as CustomDate,t as Default,l as FullyCustomized,r as OnlyFeedback,s as OnlyVersion,n as VersionAndFeedback,d as WithCustomContentAfter,c as WithCustomContentBefore,Y as __namedExportsOrder,_ as default};
