import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{P as ae}from"./PageLayout-C3KBFfxI.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./TopHeader-D8H5tFj4.js";import"./Brand-D2_m1Vnv.js";import"./MenuItem-qyRq59Mo.js";import"./Avatar-BtdRwqdw.js";import"./SideNavigation-DFjSW3iC.js";import"./Breadcrumb-DEF5sgBW.js";import"./Footer-BmRSLCud.js";const n=()=>e.jsx("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"currentColor",children:e.jsx("path",{d:"M8 0L10 6H16L11 10L13 16L8 12L3 16L5 10L0 6H6L8 0Z"})}),me={title:"Templates/PageLayout",component:ae,parameters:{layout:"fullscreen",docs:{description:{component:`
# Page Layout Templates

Three vanilla page templates for building consistent layouts in Lean IDS applications.

## 🚨 CRITICAL: How to Use PageLayout Correctly

**PageLayout MUST be the root component of your application!** It uses fixed positioning for headers and navigation.

### ✅ CORRECT Usage:

\`\`\`tsx
// In your App.tsx or main layout file
import { PageLayout } from '@ajaysoni7832/lean-ids-components';

function App() {
  return (
    <PageLayout
      variant="topbar-sidebar"
      pageTitle="Dashboard"
      pageDescription="Your dashboard description"
      breadcrumbs={[
        { label: 'Home', href: '/', isActive: false },
        { label: 'Dashboard', isActive: true },
      ]}
      topHeader={{
        appName: 'Product Name',
        menuItems: [
          { id: '1', label: 'Help', icon: <HelpIcon />, active: false },
          { id: '2', label: 'Notifications', icon: <BellIcon />, showIndicator: true },
        ],
        userInitials: 'AS',
      }}
      sideNav={{
        groups: [
          {
            items: [
              { id: '1', label: 'Home', icon: <HomeIcon />, active: false },
              { id: '2', label: 'Dashboard', icon: <DashIcon />, active: true },
              { id: '3', label: 'Settings', icon: <SettingsIcon />, active: false },
            ],
          },
        ],
        user: {
          initials: 'AS',
          name: 'Ajay Soni',
          subtitle: 'Employee ID',
        },
      }}
    >
      {/* Your page content here */}
      <YourPageContent />
    </PageLayout>
  );
}
\`\`\`

### ❌ INCORRECT Usage (Causes Overlap):

\`\`\`tsx
// DON'T DO THIS!
function App() {
  return (
    <div className="app-wrapper">  {/* ❌ Extra wrapper causes issues */}
      <PageLayout variant="topbar-sidebar" {...props}>
        <YourPageContent />
      </PageLayout>
    </div>
  );
}

// DON'T DO THIS EITHER!
function App() {
  return (
    <>
      <CustomHeader />  {/* ❌ Don't add your own headers */}
      <PageLayout variant="topbar-sidebar" {...props}>
        <YourPageContent />
      </PageLayout>
    </>
  );
}
\`\`\`

### 📋 Key Points:

1. **PageLayout should be at the root** - Don't wrap it in divs or containers
2. **No custom CSS on body/html** - PageLayout handles all positioning
3. **Use children prop** - Pass your page content as children
4. **Fixed positioning** - TopHeader and SideNav are position: fixed
5. **Automatic spacing** - Content area has proper margins for headers/nav
6. **Z-index layering** - Sidebar (101) > TopBar (100) for proper expansion

### 🎯 How It Works (topbar-sidebar variant):

- **SideNavigation**: \`position: fixed\`, \`left: 0\`, \`z-index: 101\`, width: 60px (collapsed) or 236px (pinned)
- **TopHeader**: \`position: fixed\`, \`top: 0\`, \`left: 60px\` (or 236px when pinned), \`z-index: 100\`
- **Main content**: \`margin-left: 60px\` (or 236px), \`padding-top: 64px\`
- **Sidebar expansion**: Hovers over TopBar due to higher z-index

## Variants

### 1. Top Bar Only
- Dark top header with brand logo
- Main content area with breadcrumbs and page header
- Footer at bottom
- **Use for:** Simple applications, dashboards, content-focused pages

### 2. Side Bar Only  
- Expanded side navigation (236px) with brand logo
- Main content area with breadcrumbs and page header
- Footer at bottom
- **Use for:** Navigation-heavy apps, admin panels, multi-section applications

### 3. Top Bar + Side Bar
- Light top bar (NO logo, only product name)
- Collapsed sidebar (60px, icons only) with brand symbol
- Main content area with breadcrumbs and page header
- Footer at bottom
- **Use for:** Complex applications needing both navigations, enterprise apps

## Important Rules

When using **both navigations** (topbar-sidebar):
- ✅ Top bar is LIGHT mode (no dark background)
- ✅ Top bar has NO brand logo (logo is in sidebar)
- ✅ Sidebar is COLLAPSED (60px wide, icons only)
- ✅ Product name stays in top bar
- ✅ Sidebar appears ABOVE top bar when expanding (z-index: 101)
- ✅ TopBar starts after sidebar (left offset: 60px or 236px)

## Grid & Spacing
- **Padding:** 24px horizontal, 16px vertical
- **Gaps:** 16px between sections
- **Top Bar:** 78px (dark), 64px (light)
- **Side Nav:** 236px (expanded), 60px (collapsed)

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| Headers overlapping | PageLayout wrapped in container | Make PageLayout the root component |
| Content hidden | Custom body/html CSS | Remove custom margins/padding from body |
| Sidebar not expanding | Wrong variant | Use \`variant="topbar-sidebar"\` or \`"sidebar-only"\` |
| TopBar over sidebar | Old version | Update to v1.5.0+ with z-index fix |
| Sidebar not hovering over TopBar | Z-index issue | Ensure using v1.5.0+ (sidebar z-index: 101) |
        `}}},tags:["autodocs"]},p=()=>e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px",minHeight:"400px"},children:[e.jsx("h2",{style:{marginTop:0},children:"Main Content Area"}),e.jsx("p",{children:"This is where your page content goes. You can add any components here:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Cards and panels"}),e.jsx("li",{children:"Forms and inputs"}),e.jsx("li",{children:"Tables and data grids"}),e.jsx("li",{children:"Charts and visualizations"}),e.jsx("li",{children:"Any custom components"})]}),e.jsx("p",{children:"The content area automatically fills the remaining space between the header/navigation and footer."})]}),t={args:{variant:"topbar-only",pageTitle:"Dashboard",pageDescription:"Overview of your application metrics and data",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Dashboard",isActive:!0}],topHeader:{appName:"Product Name",showLogo:!0,menuItems:[{id:"1",label:"Home",icon:e.jsx(n,{}),active:!0},{id:"2",label:"Reports",icon:e.jsx(n,{}),active:!1},{id:"3",label:"Settings",icon:e.jsx(n,{}),showIndicator:!0}],userInitials:"AS"},footer:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackText:"Send us a Feedback here",feedbackUrl:"/feedback"},children:e.jsx(p,{})}},a={args:{variant:"sidebar-only",pageTitle:"Services",pageDescription:"Manage and configure your services",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Services",isActive:!0}],sideNav:{groups:[{title:"MAIN MENU",items:[{id:"1",label:"Home",icon:e.jsx(n,{}),active:!1},{id:"2",label:"Services",icon:e.jsx(n,{}),active:!0},{id:"3",label:"About Us",icon:e.jsx(n,{}),showIndicator:!0},{id:"4",label:"Portfolio",icon:e.jsx(n,{}),active:!1}]},{title:"SETTINGS",items:[{id:"5",label:"Profile",icon:e.jsx(n,{}),active:!1},{id:"6",label:"Preferences",icon:e.jsx(n,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"}},footer:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackText:"Send us a Feedback here",feedbackUrl:"/feedback"},children:e.jsx(p,{})}},o={args:{variant:"topbar-sidebar",pageTitle:"Settings",pageDescription:"Configure your application preferences and options",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Settings",isActive:!0}],topHeader:{appName:"Product Name",menuItems:[{id:"1",label:"Help",icon:e.jsx(n,{}),active:!1},{id:"2",label:"Notifications",icon:e.jsx(n,{}),showIndicator:!0}],userInitials:"AS"},sideNav:{groups:[{items:[{id:"1",label:"Home",icon:e.jsx(n,{}),active:!1},{id:"2",label:"Dashboard",icon:e.jsx(n,{}),active:!1},{id:"3",label:"Settings",icon:e.jsx(n,{}),active:!0},{id:"4",label:"Reports",icon:e.jsx(n,{}),active:!1},{id:"5",label:"Profile",icon:e.jsx(n,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"}},footer:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackText:"Send us a Feedback here",feedbackUrl:"/feedback"},children:e.jsx(p,{})}},i={args:{variant:"topbar-only",pageTitle:"Simple Page",breadcrumbs:[{label:"Home",isActive:!1},{label:"Simple Page",isActive:!0}],topHeader:{appName:"My App",userInitials:"JD"},children:e.jsx("div",{style:{padding:"24px"},children:e.jsx("p",{children:"Minimal page layout with default footer."})})}},r={args:{variant:"sidebar-only",pageTitle:"Dashboard Grid",pageDescription:"Custom grid layout example",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Dashboard",isActive:!0}],sideNav:{groups:[{items:[{id:"1",label:"Dashboard",icon:e.jsx(n,{}),active:!0},{id:"2",label:"Analytics",icon:e.jsx(n,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"}},children:e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"24px"},children:[e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginTop:0},children:"Card 1"}),e.jsx("p",{children:"Content for card 1"})]}),e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginTop:0},children:"Card 2"}),e.jsx("p",{children:"Content for card 2"})]}),e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginTop:0},children:"Card 3"}),e.jsx("p",{children:"Content for card 3"})]})]})}},s={args:{variant:"topbar-sidebar",pageTitle:"New Features Demo",pageDescription:"Test all the new interactive features",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Features",isActive:!0}],topHeader:{appName:"Product Name",menuItems:[{id:"1",label:"Help",icon:e.jsx(n,{}),active:!1},{id:"2",label:"Notifications",icon:e.jsx(n,{}),showIndicator:!0}],userInitials:"AS",onAvatarClick:()=>alert("TopHeader Avatar clicked! 🎉")},sideNav:{groups:[{title:"MAIN MENU",items:[{id:"1",label:"Dashboard",icon:e.jsx(n,{}),active:!0},{id:"2",label:"Analytics",icon:e.jsx(n,{}),active:!1},{id:"3",label:"Reports",icon:e.jsx(n,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID",onClick:()=>alert("User Profile clicked! 👤")},expandMode:"both",toggleButtonPosition:"top",toggleButtonOffset:24,toggleButtonSize:"large"},footer:{lastUpdated:"Sept 23, 2024",version:"1.0",feedbackText:"Send us a Feedback here",feedbackUrl:"#",onFeedbackClick:()=>alert("Feedback link clicked! 💬")},children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h3",{style:{marginTop:0},children:"🎯 Test the New Features:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Click the feedback link"})," in the footer"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Click the user avatar"})," in the top header"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Click the user profile"})," at the bottom of the sidebar"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Try the toggle button"})," on the right edge of sidebar"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Hover over the sidebar"})," to expand (if expandMode includes 'hover')"]})]}),e.jsx("h4",{children:"Current Settings:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:["Expand Mode: ",e.jsx("code",{children:"both"})," (hover + button)"]}),e.jsxs("li",{children:["Toggle Button Position: ",e.jsx("code",{children:"top"})]}),e.jsxs("li",{children:["Toggle Button Offset: ",e.jsx("code",{children:"24px"})," (aligned with logo)"]}),e.jsxs("li",{children:["Toggle Button Size: ",e.jsx("code",{children:"large"})," (32px)"]})]}),e.jsx("p",{children:e.jsx("em",{children:"💡 Tip: Use Storybook Controls panel to change these settings!"})})]})}},l={args:{variant:"sidebar-only",pageTitle:"Button Expand Mode",pageDescription:"Sidebar expands only when clicking the toggle button",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Button Mode",isActive:!0}],sideNav:{groups:[{items:[{id:"1",label:"Home",icon:e.jsx(n,{}),active:!0},{id:"2",label:"Settings",icon:e.jsx(n,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"},expandMode:"button",toggleButtonPosition:"top",toggleButtonOffset:100},children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h3",{children:"Button-Only Mode"}),e.jsx("p",{children:"The sidebar will NOT expand on hover. Click the toggle button to expand/collapse."})]})}},d={args:{variant:"sidebar-only",pageTitle:"Small Toggle Button",pageDescription:"Toggle button with small size (24px)",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Small Button",isActive:!0}],sideNav:{groups:[{items:[{id:"1",label:"Home",icon:e.jsx(n,{}),active:!0},{id:"2",label:"Settings",icon:e.jsx(n,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"},expandMode:"both",toggleButtonPosition:"top",toggleButtonOffset:24,toggleButtonSize:"small"},children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h3",{children:"Small Toggle Button (24px)"}),e.jsx("p",{children:"The toggle button is smaller and more subtle. Icon size is 16px."})]})}},c={args:{variant:"sidebar-only",pageTitle:"Toggle Button Bottom",pageDescription:"Toggle button positioned at the bottom",breadcrumbs:[{label:"Home",href:"/",isActive:!1},{label:"Bottom Button",isActive:!0}],sideNav:{groups:[{items:[{id:"1",label:"Home",icon:e.jsx(n,{}),active:!0},{id:"2",label:"Settings",icon:e.jsx(n,{}),active:!1}]}],user:{initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"},expandMode:"both",toggleButtonPosition:"bottom",toggleButtonOffset:100},children:e.jsxs("div",{style:{padding:"24px",backgroundColor:"white",borderRadius:"8px"},children:[e.jsx("h3",{children:"Bottom Toggle Button"}),e.jsx("p",{children:"The toggle button is positioned at the bottom of the sidebar."})]})}};var u,g,b,h,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-only',
    pageTitle: 'Dashboard',
    pageDescription: 'Overview of your application metrics and data',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Dashboard',
      isActive: true
    }],
    topHeader: {
      appName: 'Product Name',
      showLogo: true,
      menuItems: [{
        id: '1',
        label: 'Home',
        icon: <IconPlaceholder />,
        active: true
      }, {
        id: '2',
        label: 'Reports',
        icon: <IconPlaceholder />,
        active: false
      }, {
        id: '3',
        label: 'Settings',
        icon: <IconPlaceholder />,
        showIndicator: true
      }],
      userInitials: 'AS'
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
      feedbackText: 'Send us a Feedback here',
      feedbackUrl: '/feedback'
    },
    children: <SampleContent />
  }
}`,...(b=(g=t.parameters)==null?void 0:g.docs)==null?void 0:b.source},description:{story:`Template with **dark top header only**. Includes brand logo, product name, menu items, and avatar.

**Use this template for:**
- Simple applications without side navigation
- Dashboard-style layouts
- Content-focused pages

**Structure:**
- Top Header: 78px height, dark mode, with logo
- Content Area: Breadcrumbs + Page Header + Your Content
- Footer: 40px height`,...(m=(h=t.parameters)==null?void 0:h.docs)==null?void 0:m.description}}};var v,x,f,y,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Services',
    pageDescription: 'Manage and configure your services',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Services',
      isActive: true
    }],
    sideNav: {
      groups: [{
        title: 'MAIN MENU',
        items: [{
          id: '1',
          label: 'Home',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '2',
          label: 'Services',
          icon: <IconPlaceholder />,
          active: true
        }, {
          id: '3',
          label: 'About Us',
          icon: <IconPlaceholder />,
          showIndicator: true
        }, {
          id: '4',
          label: 'Portfolio',
          icon: <IconPlaceholder />,
          active: false
        }]
      }, {
        title: 'SETTINGS',
        items: [{
          id: '5',
          label: 'Profile',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '6',
          label: 'Preferences',
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
      feedbackText: 'Send us a Feedback here',
      feedbackUrl: '/feedback'
    },
    children: <SampleContent />
  }
}`,...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source},description:{story:`Template with **expanded side navigation only**. Shows brand logo in sidebar with navigation groups.

**Use this template for:**
- Navigation-heavy applications
- Multi-section applications
- Admin panels

**Structure:**
- Side Navigation: 236px width, expanded, with logo
- Content Area: Breadcrumbs + Page Header + Your Content
- Footer: 40px height`,...(S=(y=a.parameters)==null?void 0:y.docs)==null?void 0:S.description}}};var T,A,j,I,C;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-sidebar',
    pageTitle: 'Settings',
    pageDescription: 'Configure your application preferences and options',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Settings',
      isActive: true
    }],
    topHeader: {
      appName: 'Product Name',
      // NO logo in this variant!
      menuItems: [{
        id: '1',
        label: 'Help',
        icon: <IconPlaceholder />,
        active: false
      }, {
        id: '2',
        label: 'Notifications',
        icon: <IconPlaceholder />,
        showIndicator: true
      }],
      userInitials: 'AS'
    },
    sideNav: {
      // Automatically collapsed in this variant
      groups: [{
        items: [{
          id: '1',
          label: 'Home',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '2',
          label: 'Dashboard',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '3',
          label: 'Settings',
          icon: <IconPlaceholder />,
          active: true
        }, {
          id: '4',
          label: 'Reports',
          icon: <IconPlaceholder />,
          active: false
        }, {
          id: '5',
          label: 'Profile',
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
      feedbackText: 'Send us a Feedback here',
      feedbackUrl: '/feedback'
    },
    children: <SampleContent />
  }
}`,...(j=(A=o.parameters)==null?void 0:A.docs)==null?void 0:j.source},description:{story:`Template with **both top bar and side navigation**.

**IMPORTANT RULES:**
- ✅ Top bar is **LIGHT mode** (no dark background)
- ✅ Top bar has **NO brand logo** (logo is in sidebar)
- ✅ Sidebar is **COLLAPSED** (60px wide, icons only)
- ✅ Product name stays in top bar

**Use this template for:**
- Complex applications needing both navigations
- Enterprise applications
- Multi-level navigation requirements

**Structure:**
- Top Header: 64px height, light mode, NO logo, only product name
- Side Navigation: 60px width, collapsed, icons only
- Content Area: Breadcrumbs + Page Header + Your Content
- Footer: 40px height`,...(C=(I=o.parameters)==null?void 0:I.docs)==null?void 0:C.description}}};var P,k,B,w,N;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-only',
    pageTitle: 'Simple Page',
    breadcrumbs: [{
      label: 'Home',
      isActive: false
    }, {
      label: 'Simple Page',
      isActive: true
    }],
    topHeader: {
      appName: 'My App',
      userInitials: 'JD'
    },
    children: <div style={{
      padding: '24px'
    }}>
        <p>Minimal page layout with default footer.</p>
      </div>
  }
}`,...(B=(k=i.parameters)==null?void 0:k.docs)==null?void 0:B.source},description:{story:"Minimal example with just the required props and default footer.",...(N=(w=i.parameters)==null?void 0:w.docs)==null?void 0:N.description}}};var H,D,M,O,E;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Dashboard Grid',
    pageDescription: 'Custom grid layout example',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Dashboard',
      isActive: true
    }],
    sideNav: {
      groups: [{
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
        }]
      }],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID'
      }
    },
    children: <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '24px'
    }}>
        <div style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
          <h3 style={{
          marginTop: 0
        }}>Card 1</h3>
          <p>Content for card 1</p>
        </div>
        <div style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
          <h3 style={{
          marginTop: 0
        }}>Card 2</h3>
          <p>Content for card 2</p>
        </div>
        <div style={{
        padding: '24px',
        backgroundColor: 'white',
        borderRadius: '8px'
      }}>
          <h3 style={{
          marginTop: 0
        }}>Card 3</h3>
          <p>Content for card 3</p>
        </div>
      </div>
  }
}`,...(M=(D=r.parameters)==null?void 0:D.docs)==null?void 0:M.source},description:{story:"Example with custom content layout using grid.",...(E=(O=r.parameters)==null?void 0:O.docs)==null?void 0:E.description}}};var U,L,R,F,z;s.parameters={...s.parameters,docs:{...(U=s.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    variant: 'topbar-sidebar',
    pageTitle: 'New Features Demo',
    pageDescription: 'Test all the new interactive features',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Features',
      isActive: true
    }],
    topHeader: {
      appName: 'Product Name',
      menuItems: [{
        id: '1',
        label: 'Help',
        icon: <IconPlaceholder />,
        active: false
      }, {
        id: '2',
        label: 'Notifications',
        icon: <IconPlaceholder />,
        showIndicator: true
      }],
      userInitials: 'AS',
      onAvatarClick: () => alert('TopHeader Avatar clicked! 🎉')
    },
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
        subtitle: 'Employee ID',
        onClick: () => alert('User Profile clicked! 👤')
      },
      expandMode: 'both',
      // Try: 'hover', 'button', or 'both'
      toggleButtonPosition: 'top',
      // Try: 'top' or 'bottom'
      toggleButtonOffset: 24,
      // Aligned with brand logo center
      toggleButtonSize: 'large' // Try: 'small' or 'large'
    },
    footer: {
      lastUpdated: 'Sept 23, 2024',
      version: '1.0',
      feedbackText: 'Send us a Feedback here',
      feedbackUrl: '#',
      onFeedbackClick: () => alert('Feedback link clicked! 💬')
    },
    children: <div style={{
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '8px'
    }}>
        <h3 style={{
        marginTop: 0
      }}>🎯 Test the New Features:</h3>
        <ul>
          <li><strong>Click the feedback link</strong> in the footer</li>
          <li><strong>Click the user avatar</strong> in the top header</li>
          <li><strong>Click the user profile</strong> at the bottom of the sidebar</li>
          <li><strong>Try the toggle button</strong> on the right edge of sidebar</li>
          <li><strong>Hover over the sidebar</strong> to expand (if expandMode includes 'hover')</li>
        </ul>
        
        <h4>Current Settings:</h4>
        <ul>
          <li>Expand Mode: <code>both</code> (hover + button)</li>
          <li>Toggle Button Position: <code>top</code></li>
          <li>Toggle Button Offset: <code>24px</code> (aligned with logo)</li>
          <li>Toggle Button Size: <code>large</code> (32px)</li>
        </ul>
        
        <p><em>💡 Tip: Use Storybook Controls panel to change these settings!</em></p>
      </div>
  }
}`,...(R=(L=s.parameters)==null?void 0:L.docs)==null?void 0:R.source},description:{story:`**NEW FEATURES DEMO** - Test all the new interactive features!

**What's New:**
1. Click handlers on feedback link, avatars, and user profiles
2. SideNav expand modes: hover, button, or both
3. Toggle button positioning (top/bottom with offset)
4. Custom logo support with alignment and padding
5. Flex-based layout (no fixed positioning)`,...(z=(F=s.parameters)==null?void 0:F.docs)==null?void 0:z.description}}};var G,Y,W,Z,q;l.parameters={...l.parameters,docs:{...(G=l.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Button Expand Mode',
    pageDescription: 'Sidebar expands only when clicking the toggle button',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Button Mode',
      isActive: true
    }],
    sideNav: {
      groups: [{
        items: [{
          id: '1',
          label: 'Home',
          icon: <IconPlaceholder />,
          active: true
        }, {
          id: '2',
          label: 'Settings',
          icon: <IconPlaceholder />,
          active: false
        }]
      }],
      user: {
        initials: 'AS',
        name: 'Ajay Soni',
        subtitle: 'Employee ID'
      },
      expandMode: 'button',
      // Only button, no hover
      toggleButtonPosition: 'top',
      toggleButtonOffset: 100
    },
    children: <div style={{
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '8px'
    }}>
        <h3>Button-Only Mode</h3>
        <p>The sidebar will NOT expand on hover. Click the toggle button to expand/collapse.</p>
      </div>
  }
}`,...(W=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:W.source},description:{story:"**BUTTON-ONLY EXPAND MODE** - Sidebar expands only via toggle button",...(q=(Z=l.parameters)==null?void 0:Z.docs)==null?void 0:q.description}}};var J,V,_,K,X;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Small Toggle Button',
    pageDescription: 'Toggle button with small size (24px)',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Small Button',
      isActive: true
    }],
    sideNav: {
      groups: [{
        items: [{
          id: '1',
          label: 'Home',
          icon: <IconPlaceholder />,
          active: true
        }, {
          id: '2',
          label: 'Settings',
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
      toggleButtonPosition: 'top',
      toggleButtonOffset: 24,
      toggleButtonSize: 'small' // Small button (32px)
    },
    children: <div style={{
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '8px'
    }}>
        <h3>Small Toggle Button (24px)</h3>
        <p>The toggle button is smaller and more subtle. Icon size is 16px.</p>
      </div>
  }
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source},description:{story:"**SMALL TOGGLE BUTTON** - Smaller button size (24px)",...(X=(K=d.parameters)==null?void 0:K.docs)==null?void 0:X.description}}};var Q,$,ee,ne,te;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'sidebar-only',
    pageTitle: 'Toggle Button Bottom',
    pageDescription: 'Toggle button positioned at the bottom',
    breadcrumbs: [{
      label: 'Home',
      href: '/',
      isActive: false
    }, {
      label: 'Bottom Button',
      isActive: true
    }],
    sideNav: {
      groups: [{
        items: [{
          id: '1',
          label: 'Home',
          icon: <IconPlaceholder />,
          active: true
        }, {
          id: '2',
          label: 'Settings',
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
      toggleButtonPosition: 'bottom',
      // Button at bottom
      toggleButtonOffset: 100 // 100px from bottom
    },
    children: <div style={{
      padding: '24px',
      backgroundColor: 'white',
      borderRadius: '8px'
    }}>
        <h3>Bottom Toggle Button</h3>
        <p>The toggle button is positioned at the bottom of the sidebar.</p>
      </div>
  }
}`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"**TOGGLE BUTTON AT BOTTOM** - Button positioned at bottom of sidebar",...(te=(ne=c.parameters)==null?void 0:ne.docs)==null?void 0:te.description}}};const ve=["TopBarOnly","SideBarOnly","TopBarAndSideBar","Minimal","CustomContentLayout","InteractiveFeaturesDemo","ButtonExpandMode","SmallToggleButton","ToggleButtonBottom"];export{l as ButtonExpandMode,r as CustomContentLayout,s as InteractiveFeaturesDemo,i as Minimal,a as SideBarOnly,d as SmallToggleButton,c as ToggleButtonBottom,o as TopBarAndSideBar,t as TopBarOnly,ve as __namedExportsOrder,me as default};
