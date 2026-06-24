import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{P as L}from"./PageLayout-C3KBFfxI.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./TopHeader-D8H5tFj4.js";import"./Brand-D2_m1Vnv.js";import"./MenuItem-qyRq59Mo.js";import"./Avatar-BtdRwqdw.js";import"./SideNavigation-DFjSW3iC.js";import"./Breadcrumb-DEF5sgBW.js";import"./Footer-BmRSLCud.js";const q={title:"Templates/PageLayout/Flex Layout Tests",component:L,parameters:{layout:"fullscreen",docs:{description:{component:`
# Flex Layout Testing Stories

These stories demonstrate the **flex-based layout** (no fixed positioning) and how you can:
- Adjust page height and width dynamically
- Scroll content independently
- Resize the browser window to see responsive behavior

**What Changed:**
- ❌ OLD: \`position: fixed\` on TopHeader, SideNavigation, Footer
- ✅ NEW: Flexbox layout - everything flows naturally

**How to Test:**
1. Resize your browser window - everything adjusts
2. Add lots of content - footer stays at bottom
3. Scroll - header/sidebar stay in place naturally
4. Change viewport height - layout adapts
        `}}}},t=()=>e.jsx("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("rect",{width:"20",height:"20",rx:"4"})}),i={args:{variant:"topbar-sidebar",pageTitle:"Flex Layout: Scrollable Content",pageDescription:"Test how the layout handles lots of content with flex positioning",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Flex Tests",href:"/flex",isActive:!1},{label:"Scrollable",isActive:!0}],topHeader:{appName:"Flex Layout Test",menuItems:[{id:"1",label:"Help",icon:e.jsx(t,{}),active:!1}],userInitials:"AS"},sideNav:{groups:[{title:"NAVIGATION",items:[{id:"1",label:"Dashboard",icon:e.jsx(t,{}),active:!0},{id:"2",label:"Analytics",icon:e.jsx(t,{}),active:!1},{id:"3",label:"Reports",icon:e.jsx(t,{}),active:!1},{id:"4",label:"Settings",icon:e.jsx(t,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"}},footer:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackText:"Send Feedback",feedbackUrl:"#"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h2",{children:"🧪 Flex Layout Test: Scrollable Content"}),e.jsx("p",{children:e.jsx("strong",{children:"What to test:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"✅ Scroll down - header and sidebar stay in place"}),e.jsx("li",{children:"✅ Footer appears at the bottom after all content"}),e.jsx("li",{children:"✅ Resize browser window - layout adjusts dynamically"}),e.jsx("li",{children:"✅ No fixed positioning - everything uses flexbox"})]})]}),Array.from({length:20},(r,n)=>e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px",border:"1px solid #e0e0e0"},children:[e.jsxs("h3",{children:["Content Card ",n+1]}),e.jsxs("p",{children:["This is card number ",n+1,". The layout uses flexbox instead of fixed positioning, so you can scroll naturally. The header and sidebar stay in place because they're part of the flex container structure, not because of position: fixed."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Height:"})," ",100+n*10,"px of content"]})]},n)),e.jsxs("div",{style:{padding:"24px",backgroundColor:"#f0f9ff",borderRadius:"8px"},children:[e.jsx("h3",{children:"🎉 You reached the end!"}),e.jsx("p",{children:"The footer should appear right below this content."})]})]})}},o={args:{variant:"topbar-sidebar",pageTitle:"Flex Layout: Minimal Content",pageDescription:"Test how footer behaves with minimal content",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Minimal",isActive:!0}],topHeader:{appName:"Flex Layout Test",userInitials:"AS"},sideNav:{groups:[{items:[{id:"1",label:"Dashboard",icon:e.jsx(t,{}),active:!0}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"}},footer:{lastUpdated:"Sept 23, 2024",version:"1.0"},children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h2",{children:"🧪 Minimal Content Test"}),e.jsx("p",{children:e.jsx("strong",{children:"What to test:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"✅ Footer should be at the bottom of the viewport (not floating)"}),e.jsx("li",{children:"✅ Content area fills available space"}),e.jsx("li",{children:"✅ Resize window - footer stays at bottom"})]}),e.jsx("p",{children:"This page has very little content. With flex layout, the footer should still appear at the bottom of the viewport."})]})}},a={args:{variant:"topbar-only",pageTitle:"Flex Layout: Topbar Only",pageDescription:"Test topbar-only variant with flex positioning",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Topbar Only",isActive:!0}],topHeader:{appName:"My Application",menuItems:[{id:"1",label:"Help",icon:e.jsx(t,{}),active:!1},{id:"2",label:"Settings",icon:e.jsx(t,{}),active:!1}],userInitials:"AS",showLogo:!0},footer:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackText:"Send Feedback"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h2",{children:"🧪 Topbar Only - Flex Layout"}),e.jsx("p",{children:e.jsx("strong",{children:"What to test:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"✅ No sidebar - full width content"}),e.jsx("li",{children:"✅ Header at top (not fixed)"}),e.jsx("li",{children:"✅ Footer at bottom after content"}),e.jsx("li",{children:"✅ Resize window - everything adjusts"})]})]}),Array.from({length:10},(r,n)=>e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px",border:"1px solid #e0e0e0"},children:[e.jsxs("h3",{children:["Section ",n+1]}),e.jsxs("p",{children:["Content section ",n+1," - scroll to see more"]})]},n))]})}},l={args:{variant:"sidebar-only",pageTitle:"Flex Layout: Sidebar Only",pageDescription:"Test sidebar-only variant with flex positioning",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Sidebar Only",isActive:!0}],sideNav:{groups:[{title:"MAIN MENU",items:[{id:"1",label:"Dashboard",icon:e.jsx(t,{}),active:!0},{id:"2",label:"Analytics",icon:e.jsx(t,{}),active:!1},{id:"3",label:"Reports",icon:e.jsx(t,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"},expandMode:"both",toggleButtonSize:"large"},footer:{lastUpdated:"Sept 23, 2024",version:"1.0"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h2",{children:"🧪 Sidebar Only - Flex Layout"}),e.jsx("p",{children:e.jsx("strong",{children:"What to test:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"✅ Sidebar on left (not fixed)"}),e.jsx("li",{children:"✅ Content area adjusts when sidebar expands/collapses"}),e.jsx("li",{children:"✅ Footer at bottom after content"}),e.jsx("li",{children:"✅ Try expanding sidebar - content area shrinks"})]})]}),Array.from({length:8},(r,n)=>e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px",border:"1px solid #e0e0e0"},children:[e.jsxs("h3",{children:["Content Block ",n+1]}),e.jsx("p",{children:"This content adjusts width when sidebar expands/collapses"})]},n))]})}},s={args:{variant:"topbar-sidebar",pageTitle:"Flex Layout: Dynamic Height",pageDescription:"Test how layout handles dynamic content height changes",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Dynamic Height",isActive:!0}],topHeader:{appName:"Flex Layout Test",userInitials:"AS"},sideNav:{groups:[{items:[{id:"1",label:"Dashboard",icon:e.jsx(t,{}),active:!0}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"}},footer:{lastUpdated:"Sept 23, 2024",version:"1.0"},children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h2",{children:"🧪 Dynamic Height Test"}),e.jsx("p",{children:e.jsx("strong",{children:"What to test:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"✅ Resize your browser window vertically"}),e.jsx("li",{children:"✅ Layout adjusts automatically"}),e.jsx("li",{children:"✅ Footer always appears after content"}),e.jsx("li",{children:"✅ No overlapping or fixed positioning issues"})]}),e.jsx("p",{children:e.jsx("strong",{children:"Instructions:"})}),e.jsxs("ol",{children:[e.jsx("li",{children:"Make your browser window very tall - footer should be at bottom"}),e.jsx("li",{children:"Make your browser window very short - you should be able to scroll"}),e.jsx("li",{children:"Try different aspect ratios - everything should work"})]})]}),e.jsxs("div",{style:{padding:"24px",backgroundColor:"#fff3cd",borderRadius:"8px"},children:[e.jsx("h3",{children:"⚠️ Old Fixed Positioning Issues (Now Fixed!)"}),e.jsx("p",{children:e.jsx("strong",{children:"Problems with old fixed positioning:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"❌ Header/Footer overlapped content"}),e.jsx("li",{children:"❌ Couldn't adjust page height dynamically"}),e.jsx("li",{children:"❌ Content had to account for fixed header/footer heights"}),e.jsx("li",{children:"❌ Sidebar didn't work well with page scrolling"})]})]}),e.jsxs("div",{style:{padding:"24px",backgroundColor:"#d1f2eb",borderRadius:"8px"},children:[e.jsx("h3",{children:"✅ New Flex Layout Benefits"}),e.jsx("p",{children:e.jsx("strong",{children:"Advantages of flex positioning:"})}),e.jsxs("ul",{children:[e.jsx("li",{children:"✅ Natural document flow - no overlapping"}),e.jsx("li",{children:"✅ Fully responsive - adjusts to any viewport size"}),e.jsx("li",{children:"✅ Content area automatically sized"}),e.jsx("li",{children:"✅ Sidebar and content work together seamlessly"}),e.jsx("li",{children:"✅ Footer always at the right place"}),e.jsx("li",{children:"✅ Easier to maintain and extend"})]})]}),Array.from({length:5},(r,n)=>e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px",border:"1px solid #e0e0e0"},children:[e.jsxs("h3",{children:["Flexible Content ",n+1]}),e.jsx("p",{children:"This content flows naturally in the flex container."})]},n))]})}};var d,c,p,h,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-sidebar',
    pageTitle: 'Flex Layout: Scrollable Content',
    pageDescription: 'Test how the layout handles lots of content with flex positioning',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Flex Tests',
      href: '/flex',
      isActive: false
    }, {
      label: 'Scrollable',
      isActive: true
    }],
    topHeader: {
      appName: 'Flex Layout Test',
      menuItems: [{
        id: '1',
        label: 'Help',
        icon: <IconPlaceholder />,
        active: false
      }],
      userInitials: 'AS'
    },
    sideNav: {
      groups: [{
        title: 'NAVIGATION',
        items: [{
          id: '1',
          label: 'Dashboard',
          icon: <IconPlaceholder />,
          active: true
        }, {
          id: '2',
          label: 'Analytics',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '3',
          label: 'Reports',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '4',
          label: 'Settings',
          icon: <IconPlaceholder />,
          active: false
        }]
      }],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID'
      }
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
      feedbackText: 'Send Feedback',
      feedbackUrl: '#'
    },
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
          <h2>🧪 Flex Layout Test: Scrollable Content</h2>
          <p><strong>What to test:</strong></p>
          <ul>
            <li>✅ Scroll down - header and sidebar stay in place</li>
            <li>✅ Footer appears at the bottom after all content</li>
            <li>✅ Resize browser window - layout adjusts dynamically</li>
            <li>✅ No fixed positioning - everything uses flexbox</li>
          </ul>
        </div>

        {/* Generate lots of content cards */}
        {Array.from({
        length: 20
      }, (_, i) => <div key={i} style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
            <h3>Content Card {i + 1}</h3>
            <p>
              This is card number {i + 1}. The layout uses flexbox instead of fixed positioning,
              so you can scroll naturally. The header and sidebar stay in place because they're
              part of the flex container structure, not because of position: fixed.
            </p>
            <p>
              <strong>Height:</strong> {100 + i * 10}px of content
            </p>
          </div>)}

        <div style={{
        padding: '24px',
        backgroundColor: '#f0f9ff',
        borderRadius: '8px'
      }}>
          <h3>🎉 You reached the end!</h3>
          <p>The footer should appear right below this content.</p>
        </div>
      </div>
  }
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"**SCROLLABLE CONTENT TEST** - Lots of content to test scrolling behavior",...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};var x,b,y,g,f;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-sidebar',
    pageTitle: 'Flex Layout: Minimal Content',
    pageDescription: 'Test how footer behaves with minimal content',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Minimal',
      isActive: true
    }],
    topHeader: {
      appName: 'Flex Layout Test',
      userInitials: 'AS'
    },
    sideNav: {
      groups: [{
        items: [{
          id: '1',
          label: 'Dashboard',
          icon: <IconPlaceholder />,
          active: true
        }]
      }],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID'
      }
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0'
    },
    children: <div style={{
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '8px'
    }}>
        <h2>🧪 Minimal Content Test</h2>
        <p><strong>What to test:</strong></p>
        <ul>
          <li>✅ Footer should be at the bottom of the viewport (not floating)</li>
          <li>✅ Content area fills available space</li>
          <li>✅ Resize window - footer stays at bottom</li>
        </ul>
        <p>This page has very little content. With flex layout, the footer should still appear at the bottom of the viewport.</p>
      </div>
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source},description:{story:"**MINIMAL CONTENT TEST** - Test with very little content",...(f=(g=o.parameters)==null?void 0:g.docs)==null?void 0:f.description}}};var m,v,j,w,T;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-only',
    pageTitle: 'Flex Layout: Topbar Only',
    pageDescription: 'Test topbar-only variant with flex positioning',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Topbar Only',
      isActive: true
    }],
    topHeader: {
      appName: 'My Application',
      menuItems: [{
        id: '1',
        label: 'Help',
        icon: <IconPlaceholder />,
        active: false
      }, {
        id: '2',
        label: 'Settings',
        icon: <IconPlaceholder />,
        active: false
      }],
      userInitials: 'AS',
      showLogo: true
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
      feedbackText: 'Send Feedback'
    },
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
          <h2>🧪 Topbar Only - Flex Layout</h2>
          <p><strong>What to test:</strong></p>
          <ul>
            <li>✅ No sidebar - full width content</li>
            <li>✅ Header at top (not fixed)</li>
            <li>✅ Footer at bottom after content</li>
            <li>✅ Resize window - everything adjusts</li>
          </ul>
        </div>

        {Array.from({
        length: 10
      }, (_, i) => <div key={i} style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
            <h3>Section {i + 1}</h3>
            <p>Content section {i + 1} - scroll to see more</p>
          </div>)}
      </div>
  }
}`,...(j=(v=a.parameters)==null?void 0:v.docs)==null?void 0:j.source},description:{story:"**TOPBAR ONLY TEST** - Test topbar-only variant with flex layout",...(T=(w=a.parameters)==null?void 0:w.docs)==null?void 0:T.description}}};var S,A,C,F,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Flex Layout: Sidebar Only',
    pageDescription: 'Test sidebar-only variant with flex positioning',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Sidebar Only',
      isActive: true
    }],
    sideNav: {
      groups: [{
        title: 'MAIN MENU',
        items: [{
          id: '1',
          label: 'Dashboard',
          icon: <IconPlaceholder />,
          active: true
        }, {
          id: '2',
          label: 'Analytics',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '3',
          label: 'Reports',
          icon: <IconPlaceholder />,
          active: false
        }]
      }],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID'
      },
      expandMode: 'both',
      toggleButtonSize: 'large'
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0'
    },
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
          <h2>🧪 Sidebar Only - Flex Layout</h2>
          <p><strong>What to test:</strong></p>
          <ul>
            <li>✅ Sidebar on left (not fixed)</li>
            <li>✅ Content area adjusts when sidebar expands/collapses</li>
            <li>✅ Footer at bottom after content</li>
            <li>✅ Try expanding sidebar - content area shrinks</li>
          </ul>
        </div>

        {Array.from({
        length: 8
      }, (_, i) => <div key={i} style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
            <h3>Content Block {i + 1}</h3>
            <p>This content adjusts width when sidebar expands/collapses</p>
          </div>)}
      </div>
  }
}`,...(C=(A=l.parameters)==null?void 0:A.docs)==null?void 0:C.source},description:{story:"**SIDEBAR ONLY TEST** - Test sidebar-only variant with flex layout",...(k=(F=l.parameters)==null?void 0:F.docs)==null?void 0:k.description}}};var I,N,D,R,H;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-sidebar',
    pageTitle: 'Flex Layout: Dynamic Height',
    pageDescription: 'Test how layout handles dynamic content height changes',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Dynamic Height',
      isActive: true
    }],
    topHeader: {
      appName: 'Flex Layout Test',
      userInitials: 'AS'
    },
    sideNav: {
      groups: [{
        items: [{
          id: '1',
          label: 'Dashboard',
          icon: <IconPlaceholder />,
          active: true
        }]
      }],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID'
      }
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0'
    },
    children: <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
          <h2>🧪 Dynamic Height Test</h2>
          <p><strong>What to test:</strong></p>
          <ul>
            <li>✅ Resize your browser window vertically</li>
            <li>✅ Layout adjusts automatically</li>
            <li>✅ Footer always appears after content</li>
            <li>✅ No overlapping or fixed positioning issues</li>
          </ul>
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>Make your browser window very tall - footer should be at bottom</li>
            <li>Make your browser window very short - you should be able to scroll</li>
            <li>Try different aspect ratios - everything should work</li>
          </ol>
        </div>

        <div style={{
        padding: '24px',
        backgroundColor: '#fff3cd',
        borderRadius: '8px'
      }}>
          <h3>⚠️ Old Fixed Positioning Issues (Now Fixed!)</h3>
          <p><strong>Problems with old fixed positioning:</strong></p>
          <ul>
            <li>❌ Header/Footer overlapped content</li>
            <li>❌ Couldn't adjust page height dynamically</li>
            <li>❌ Content had to account for fixed header/footer heights</li>
            <li>❌ Sidebar didn't work well with page scrolling</li>
          </ul>
        </div>

        <div style={{
        padding: '24px',
        backgroundColor: '#d1f2eb',
        borderRadius: '8px'
      }}>
          <h3>✅ New Flex Layout Benefits</h3>
          <p><strong>Advantages of flex positioning:</strong></p>
          <ul>
            <li>✅ Natural document flow - no overlapping</li>
            <li>✅ Fully responsive - adjusts to any viewport size</li>
            <li>✅ Content area automatically sized</li>
            <li>✅ Sidebar and content work together seamlessly</li>
            <li>✅ Footer always at the right place</li>
            <li>✅ Easier to maintain and extend</li>
          </ul>
        </div>

        {Array.from({
        length: 5
      }, (_, i) => <div key={i} style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px',
        border: '1px solid #e0e0e0'
      }}>
            <h3>Flexible Content {i + 1}</h3>
            <p>This content flows naturally in the flex container.</p>
          </div>)}
      </div>
  }
}`,...(D=(N=s.parameters)==null?void 0:N.docs)==null?void 0:D.source},description:{story:"**DYNAMIC HEIGHT TEST** - Test with content that changes height",...(H=(R=s.parameters)==null?void 0:R.docs)==null?void 0:H.description}}};const J=["ScrollableContent","MinimalContent","TopbarOnlyFlexTest","SidebarOnlyFlexTest","DynamicHeightTest"];export{s as DynamicHeightTest,o as MinimalContent,i as ScrollableContent,l as SidebarOnlyFlexTest,a as TopbarOnlyFlexTest,J as __namedExportsOrder,q as default};
