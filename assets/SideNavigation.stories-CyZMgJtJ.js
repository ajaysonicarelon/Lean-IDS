import{j as e}from"./jsx-runtime-DSvmvvsx.js";import{S as K}from"./SideNavigation-DFjSW3iC.js";import{I as i}from"./Icon-BytZhcyh.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./Brand-D2_m1Vnv.js";import"./MenuItem-qyRq59Mo.js";import"./Avatar-BtdRwqdw.js";const se={title:"Components/SideNavigation",component:K,parameters:{layout:"fullscreen",docs:{description:{component:`A vertical navigation sidebar with flexible expand/collapse behavior.

**Dimensions:**
- **Collapsed:** 60px width - shows only icons
- **Expanded:** 236px width - shows icons, labels, and group titles
- **Height:** 100vh (fixed viewport height)

**Positioning:**
- Uses \`position: sticky\` with \`top: 0\`
- Stays at viewport height while content scrolls
- Consistent height across all content lengths

**Expand Modes:**
- **hover** (default): Expands on mouse hover
- **button**: Expands only via toggle button click
- **both**: Expands on hover OR button click

**Features:**
- Multiple navigation groups with titles (visible when expanded)
- Active state indicators & notification badges
- **Pin Button:** Locks sidebar in expanded state (visible on hover, right of logo)
- **Toggle Button:** Circular button on right edge for manual expand/collapse
  - Sizes: small (24px) or large (32px, default)
  - Positions: top or bottom with adjustable offset
  - Custom icon support
  - Half inside/half outside sidebar
- User profile section with avatar & click handler
- Mouse enter/leave events on menu items
- Smooth transitions
- Scrollable content area within fixed viewport height

## Usage

### Basic Example

\`\`\`tsx
import { SideNavigation } from '@lean-ids/components';
import { Icon } from '@lean-ids/components';

function App() {
  const navigationGroups = [
    {
      title: 'MAIN MENU',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: true,
          onClick: () => console.log('Home clicked')
        },
        {
          id: 'about',
          label: 'About',
          icon: <Icon name="Info" size="medium" />,
          onClick: () => console.log('About clicked')
        }
      ]
    }
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID'
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
    />
  );
}
\`\`\`

### With Pin State Control

\`\`\`tsx
import { SideNavigation } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => setIsPinned(pinned)}
    />
  );
}
\`\`\`

### With Notification Indicators

\`\`\`tsx
const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true, // Shows notification dot
        onClick: () => console.log('Messages clicked')
      }
    ]
  }
];
\`\`\``}}},tags:["autodocs"],argTypes:{groups:{description:"Array of navigation groups with menu items",control:"object"},user:{description:"User profile information (initials, name, subtitle, avatarUrl)",control:"object"},isPinned:{control:"boolean",description:"Whether sidebar is pinned (locked in expanded state)"},onPinChange:{description:"Callback when pin state changes"},className:{description:"Additional CSS class",control:"text"}}},g=[{title:"MAIN MENU",items:[{id:"home",label:"Home",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"about",label:"About Us",icon:e.jsx(i,{name:"Info",size:"medium"}),showIndicator:!0},{id:"services",label:"Services",icon:e.jsx(i,{name:"Settings",size:"medium"})},{id:"blog",label:"Blog",icon:e.jsx(i,{name:"Edit",size:"medium"})},{id:"portfolio",label:"Portfolio",icon:e.jsx(i,{name:"Visibility",size:"medium"})}]},{title:"SETTINGS",items:[{id:"profile",label:"Profile",icon:e.jsx(i,{name:"AccountCircle",size:"medium"})},{id:"preferences",label:"Preferences",icon:e.jsx(i,{name:"Tune",size:"medium"})}]}],o={initials:"AS",name:"Ajay Soni",subtitle:"Employee ID"},t={args:{groups:g,user:o},parameters:{layout:"fullscreen",docs:{description:{story:"Default collapsed sidebar. Hover to expand temporarily, or click the pin button to lock it in expanded state."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'about',
        label: 'About Us',
        icon: <Icon name="Info" size="medium" />,
      },
    ],
  },
];

const userProfile = {
  initials: 'AS',
  name: 'Ajay Soni',
  subtitle: 'Employee ID',
};

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},s={args:{groups:[{title:"MAIN MENU",items:[{id:"home",label:"Home",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"messages",label:"Messages",icon:e.jsx(i,{name:"Info",size:"medium"}),showIndicator:!0},{id:"alerts",label:"Alerts",icon:e.jsx(i,{name:"Warning",size:"medium"}),showIndicator:!0}]}],user:o},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar with notification indicators on menu items."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true, // Shows notification dot
      },
      {
        id: 'alerts',
        label: 'Alerts',
        icon: <Icon name="Warning" size="medium" />,
        showIndicator: true, // Shows notification dot
      },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},n={args:{groups:g},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar without user profile section."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'about',
        label: 'About Us',
        icon: <Icon name="Info" size="medium" />,
      },
    ],
  },
];

// No user prop provided
<SideNavigation groups={navigationGroups} />`}}}},a={args:{groups:[{title:"NAVIGATION",items:[{id:"dashboard",label:"Dashboard",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0,onClick:()=>alert("Dashboard clicked!")},{id:"analytics",label:"Analytics",icon:e.jsx(i,{name:"Visibility",size:"medium"}),onClick:()=>alert("Analytics clicked!")},{id:"settings",label:"Settings",icon:e.jsx(i,{name:"Settings",size:"medium"}),onClick:()=>alert("Settings clicked!")}]}],user:o},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar with click handlers on menu items. Click any item to see the handler in action."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'NAVIGATION',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Icon name="Home" size="medium" />,
        active: true,
        onClick: () => navigate('/dashboard'),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />,
        onClick: () => navigate('/analytics'),
      },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},r={args:{groups:[{title:"MAIN",items:[{id:"home",label:"Home",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"dashboard",label:"Dashboard",icon:e.jsx(i,{name:"Visibility",size:"medium"})}]},{title:"MANAGEMENT",items:[{id:"users",label:"Users",icon:e.jsx(i,{name:"AccountCircle",size:"medium"})},{id:"settings",label:"Settings",icon:e.jsx(i,{name:"Settings",size:"medium"})}]},{title:"SUPPORT",items:[{id:"help",label:"Help Center",icon:e.jsx(i,{name:"Info",size:"medium"})},{id:"feedback",label:"Feedback",icon:e.jsx(i,{name:"Edit",size:"medium"})}]}],user:o},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar with multiple navigation groups separated by dividers."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN',
    items: [
      { id: 'home', label: 'Home', icon: <Icon name="Home" size="medium" />, active: true },
      { id: 'dashboard', label: 'Dashboard', icon: <Icon name="Visibility" size="medium" /> },
    ],
  },
  {
    title: 'MANAGEMENT',
    items: [
      { id: 'users', label: 'Users', icon: <Icon name="AccountCircle" size="medium" /> },
      { id: 'settings', label: 'Settings', icon: <Icon name="Settings" size="medium" /> },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},l={args:{groups:[{title:"PAGES",items:[{id:"home",label:"Home",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!1},{id:"about",label:"About",icon:e.jsx(i,{name:"Info",size:"medium"}),active:!0},{id:"contact",label:"Contact",icon:e.jsx(i,{name:"Edit",size:"medium"}),active:!1}]}],user:o},parameters:{layout:"fullscreen",docs:{description:{story:'Sidebar showing active state on the "About" menu item. Active items have a blue left border and background.'},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';
import { useState } from 'react';

function Navigation() {
  const [activeId, setActiveId] = useState('about');

  const navigationGroups = [
    {
      title: 'PAGES',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: activeId === 'home',
          onClick: () => setActiveId('home'),
        },
        {
          id: 'about',
          label: 'About',
          icon: <Icon name="Info" size="medium" />,
          active: activeId === 'about',
          onClick: () => setActiveId('about'),
        },
      ],
    },
  ];

  return <SideNavigation groups={navigationGroups} user={userProfile} />;
}`}}}},c={args:{groups:g,user:o,isPinned:!0},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar in pinned state (locked at 236px width). The pin button is filled when pinned."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => {
        setIsPinned(pinned);
        console.log('Sidebar pinned:', pinned);
      }}
    />
  );
}`}}}},m={args:{groups:g,user:{initials:"JD",name:"John Doe",subtitle:"Admin User",avatarUrl:"https://i.pravatar.cc/150?img=12"}},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar with user profile including an avatar image."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation } from '@lean-ids/components';

const userProfile = {
  initials: 'JD',
  name: 'John Doe',
  subtitle: 'Admin User',
  avatarUrl: 'https://example.com/avatar.jpg', // Optional
};

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},d={args:{groups:[{title:"DASHBOARD",items:[{id:"overview",label:"Overview",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"analytics",label:"Analytics",icon:e.jsx(i,{name:"Visibility",size:"medium"})},{id:"reports",label:"Reports",icon:e.jsx(i,{name:"Edit",size:"medium"})}]},{title:"CONTENT",items:[{id:"posts",label:"Posts",icon:e.jsx(i,{name:"Edit",size:"medium"})},{id:"pages",label:"Pages",icon:e.jsx(i,{name:"Info",size:"medium"})},{id:"media",label:"Media",icon:e.jsx(i,{name:"Visibility",size:"medium"})},{id:"comments",label:"Comments",icon:e.jsx(i,{name:"Info",size:"medium"})}]},{title:"USERS",items:[{id:"all-users",label:"All Users",icon:e.jsx(i,{name:"AccountCircle",size:"medium"})},{id:"add-user",label:"Add New",icon:e.jsx(i,{name:"Add",size:"medium"})},{id:"roles",label:"Roles",icon:e.jsx(i,{name:"Settings",size:"medium"})}]},{title:"SETTINGS",items:[{id:"general",label:"General",icon:e.jsx(i,{name:"Settings",size:"medium"})},{id:"security",label:"Security",icon:e.jsx(i,{name:"Lock",size:"medium"})},{id:"notifications",label:"Notifications",icon:e.jsx(i,{name:"Info",size:"medium"})},{id:"integrations",label:"Integrations",icon:e.jsx(i,{name:"Settings",size:"medium"})}]},{title:"TOOLS",items:[{id:"import",label:"Import",icon:e.jsx(i,{name:"Upload",size:"medium"})},{id:"export",label:"Export",icon:e.jsx(i,{name:"Download",size:"medium"})},{id:"backup",label:"Backup",icon:e.jsx(i,{name:"Save",size:"medium"})}]}],user:o},parameters:{layout:"fullscreen",docs:{description:{story:"Sidebar with many menu items demonstrating automatic scrolling when content overflows. The navigation area becomes scrollable while the user profile remains fixed at the bottom."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'DASHBOARD',
    items: [
      { id: 'overview', label: 'Overview', icon: <Icon name="Home" size="medium" />, active: true },
      { id: 'analytics', label: 'Analytics', icon: <Icon name="Visibility" size="medium" /> },
      { id: 'reports', label: 'Reports', icon: <Icon name="Edit" size="medium" /> },
    ],
  },
  {
    title: 'CONTENT',
    items: [
      { id: 'posts', label: 'Posts', icon: <Icon name="Edit" size="medium" /> },
      { id: 'pages', label: 'Pages', icon: <Icon name="Info" size="medium" /> },
      { id: 'media', label: 'Media', icon: <Icon name="Visibility" size="medium" /> },
      { id: 'comments', label: 'Comments', icon: <Icon name="Info" size="medium" /> },
    ],
  },
  // ... more groups
];

<SideNavigation groups={navigationGroups} user={userProfile} />`}}}},u={args:{groups:[{title:"DASHBOARD",items:[{id:"overview",label:"Overview",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"analytics",label:"Analytics",icon:e.jsx(i,{name:"Visibility",size:"medium"})}]},{title:"CONTENT",items:[{id:"posts",label:"Posts",icon:e.jsx(i,{name:"Edit",size:"medium"}),showIndicator:!0},{id:"media",label:"Media",icon:e.jsx(i,{name:"Visibility",size:"medium"})},{id:"comments",label:"Comments",icon:e.jsx(i,{name:"Info",size:"medium"}),showIndicator:!0}]},{title:"SETTINGS",items:[{id:"profile",label:"Profile",icon:e.jsx(i,{name:"AccountCircle",size:"medium"})},{id:"preferences",label:"Preferences",icon:e.jsx(i,{name:"Settings",size:"medium"})}]}],user:o},parameters:{layout:"fullscreen",docs:{description:{story:"Complete example showing all features: multiple groups, active states, notification indicators, and user profile."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [activeId, setActiveId] = useState('overview');
  const [isPinned, setIsPinned] = useState(false);

  const navigationGroups = [
    {
      title: 'DASHBOARD',
      items: [
        {
          id: 'overview',
          label: 'Overview',
          icon: <Icon name="Home" size="medium" />,
          active: activeId === 'overview',
          onClick: () => setActiveId('overview'),
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: <Icon name="Visibility" size="medium" />,
          active: activeId === 'analytics',
          onClick: () => setActiveId('analytics'),
        },
      ],
    },
    {
      title: 'CONTENT',
      items: [
        {
          id: 'posts',
          label: 'Posts',
          icon: <Icon name="Edit" size="medium" />,
          showIndicator: true, // Shows notification dot
          active: activeId === 'posts',
          onClick: () => setActiveId('posts'),
        },
        {
          id: 'media',
          label: 'Media',
          icon: <Icon name="Visibility" size="medium" />,
          active: activeId === 'media',
          onClick: () => setActiveId('media'),
        },
      ],
    },
    {
      title: 'SETTINGS',
      items: [
        {
          id: 'profile',
          label: 'Profile',
          icon: <Icon name="AccountCircle" size="medium" />,
          active: activeId === 'profile',
          onClick: () => setActiveId('profile'),
        },
        {
          id: 'preferences',
          label: 'Preferences',
          icon: <Icon name="Settings" size="medium" />,
          active: activeId === 'preferences',
          onClick: () => setActiveId('preferences'),
        },
      ],
    },
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
    avatarUrl: 'https://example.com/avatar.jpg', // Optional
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => setIsPinned(pinned)}
    />
  );
}`}}}},p={args:{groups:[{title:"MAIN MENU",items:[{id:"home",label:"Home",icon:e.jsx(i,{name:"Home",size:"medium"}),active:!0},{id:"products",label:"Products",icon:e.jsx(i,{name:"ShoppingCart",size:"medium"}),children:[{id:"products-all",label:"All Products"},{id:"products-categories",label:"Categories",children:[{id:"cat-electronics",label:"Electronics"},{id:"cat-clothing",label:"Clothing"},{id:"cat-food",label:"Food & Beverages"}]},{id:"products-featured",label:"Featured Items"}]},{id:"orders",label:"Orders",icon:e.jsx(i,{name:"Receipt",size:"medium"}),showIndicator:!0,children:[{id:"orders-pending",label:"Pending Orders"},{id:"orders-completed",label:"Completed Orders"},{id:"orders-cancelled",label:"Cancelled Orders"}]}]},{title:"REPORTS",items:[{id:"analytics",label:"Analytics",icon:e.jsx(i,{name:"Visibility",size:"medium"}),children:[{id:"analytics-sales",label:"Sales Report"},{id:"analytics-traffic",label:"Traffic Report",children:[{id:"traffic-daily",label:"Daily Traffic"},{id:"traffic-monthly",label:"Monthly Traffic"}]},{id:"analytics-customers",label:"Customer Report"}]}]},{title:"SETTINGS",items:[{id:"settings",label:"Settings",icon:e.jsx(i,{name:"Settings",size:"medium"}),children:[{id:"settings-general",label:"General"},{id:"settings-security",label:"Security"},{id:"settings-notifications",label:"Notifications"}]}]}],user:o},parameters:{layout:"fullscreen",docs:{description:{story:"Example showing nested menu functionality. Hover over menu items with arrows to see nested submenus appear on the right. Supports multiple levels of nesting."},story:{inline:!1,iframeHeight:600},source:{code:`import { SideNavigation, Icon } from '@lean-ids/components';

function App() {
  const navigationGroups = [
    {
      title: 'MAIN MENU',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: true,
        },
        {
          id: 'products',
          label: 'Products',
          icon: <Icon name="ShoppingCart" size="medium" />,
          children: [
            {
              id: 'products-all',
              label: 'All Products',
            },
            {
              id: 'products-categories',
              label: 'Categories',
              children: [
                {
                  id: 'cat-electronics',
                  label: 'Electronics',
                },
                {
                  id: 'cat-clothing',
                  label: 'Clothing',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
    />
  );
}`}}}};var b,f,v;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups,
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default collapsed sidebar. Hover to expand temporarily, or click the pin button to lock it in expanded state.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'about',
        label: 'About Us',
        icon: <Icon name="Info" size="medium" />,
      },
    ],
  },
];

const userProfile = {
  initials: 'AS',
  name: 'Ajay Soni',
  subtitle: 'Employee ID',
};

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var I,h,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'MAIN MENU',
      items: [{
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true
      }, {
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true
      }, {
        id: 'alerts',
        label: 'Alerts',
        icon: <Icon name="Warning" size="medium" />,
        showIndicator: true
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with notification indicators on menu items.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'messages',
        label: 'Messages',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true, // Shows notification dot
      },
      {
        id: 'alerts',
        label: 'Alerts',
        icon: <Icon name="Warning" size="medium" />,
        showIndicator: true, // Shows notification dot
      },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var y,A,z;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar without user profile section.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN MENU',
    items: [
      {
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true,
      },
      {
        id: 'about',
        label: 'About Us',
        icon: <Icon name="Info" size="medium" />,
      },
    ],
  },
];

// No user prop provided
<SideNavigation groups={navigationGroups} />\`
      }
    }
  }
}`,...(z=(A=n.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var N,P,w;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'NAVIGATION',
      items: [{
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Icon name="Home" size="medium" />,
        active: true,
        onClick: () => alert('Dashboard clicked!')
      }, {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />,
        onClick: () => alert('Analytics clicked!')
      }, {
        id: 'settings',
        label: 'Settings',
        icon: <Icon name="Settings" size="medium" />,
        onClick: () => alert('Settings clicked!')
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with click handlers on menu items. Click any item to see the handler in action.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'NAVIGATION',
    items: [
      {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Icon name="Home" size="medium" />,
        active: true,
        onClick: () => navigate('/dashboard'),
      },
      {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />,
        onClick: () => navigate('/analytics'),
      },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(w=(P=a.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var x,C,H;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'MAIN',
      items: [{
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true
      }, {
        id: 'dashboard',
        label: 'Dashboard',
        icon: <Icon name="Visibility" size="medium" />
      }]
    }, {
      title: 'MANAGEMENT',
      items: [{
        id: 'users',
        label: 'Users',
        icon: <Icon name="AccountCircle" size="medium" />
      }, {
        id: 'settings',
        label: 'Settings',
        icon: <Icon name="Settings" size="medium" />
      }]
    }, {
      title: 'SUPPORT',
      items: [{
        id: 'help',
        label: 'Help Center',
        icon: <Icon name="Info" size="medium" />
      }, {
        id: 'feedback',
        label: 'Feedback',
        icon: <Icon name="Edit" size="medium" />
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with multiple navigation groups separated by dividers.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'MAIN',
    items: [
      { id: 'home', label: 'Home', icon: <Icon name="Home" size="medium" />, active: true },
      { id: 'dashboard', label: 'Dashboard', icon: <Icon name="Visibility" size="medium" /> },
    ],
  },
  {
    title: 'MANAGEMENT',
    items: [
      { id: 'users', label: 'Users', icon: <Icon name="AccountCircle" size="medium" /> },
      { id: 'settings', label: 'Settings', icon: <Icon name="Settings" size="medium" /> },
    ],
  },
];

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(H=(C=r.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var E,G,k;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'PAGES',
      items: [{
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: false
      }, {
        id: 'about',
        label: 'About',
        icon: <Icon name="Info" size="medium" />,
        active: true
      }, {
        id: 'contact',
        label: 'Contact',
        icon: <Icon name="Edit" size="medium" />,
        active: false
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar showing active state on the "About" menu item. Active items have a blue left border and background.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';
import { useState } from 'react';

function Navigation() {
  const [activeId, setActiveId] = useState('about');

  const navigationGroups = [
    {
      title: 'PAGES',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: activeId === 'home',
          onClick: () => setActiveId('home'),
        },
        {
          id: 'about',
          label: 'About',
          icon: <Icon name="Info" size="medium" />,
          active: activeId === 'about',
          onClick: () => setActiveId('about'),
        },
      ],
    },
  ];

  return <SideNavigation groups={navigationGroups} user={userProfile} />;
}\`
      }
    }
  }
}`,...(k=(G=l.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var j,M,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups,
    user: sampleUser,
    isPinned: true
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar in pinned state (locked at 236px width). The pin button is filled when pinned.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [isPinned, setIsPinned] = useState(false);

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => {
        setIsPinned(pinned);
        console.log('Sidebar pinned:', pinned);
      }}
    />
  );
}\`
      }
    }
  }
}`,...(T=(M=c.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};var U,D,O;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    groups: sampleGroups,
    user: {
      initials: 'JD',
      name: 'John Doe',
      subtitle: 'Admin User',
      avatarUrl: 'https://i.pravatar.cc/150?img=12'
    }
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with user profile including an avatar image.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation } from '@lean-ids/components';

const userProfile = {
  initials: 'JD',
  name: 'John Doe',
  subtitle: 'Admin User',
  avatarUrl: 'https://example.com/avatar.jpg', // Optional
};

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(O=(D=m.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var R,V,W;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'DASHBOARD',
      items: [{
        id: 'overview',
        label: 'Overview',
        icon: <Icon name="Home" size="medium" />,
        active: true
      }, {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />
      }, {
        id: 'reports',
        label: 'Reports',
        icon: <Icon name="Edit" size="medium" />
      }]
    }, {
      title: 'CONTENT',
      items: [{
        id: 'posts',
        label: 'Posts',
        icon: <Icon name="Edit" size="medium" />
      }, {
        id: 'pages',
        label: 'Pages',
        icon: <Icon name="Info" size="medium" />
      }, {
        id: 'media',
        label: 'Media',
        icon: <Icon name="Visibility" size="medium" />
      }, {
        id: 'comments',
        label: 'Comments',
        icon: <Icon name="Info" size="medium" />
      }]
    }, {
      title: 'USERS',
      items: [{
        id: 'all-users',
        label: 'All Users',
        icon: <Icon name="AccountCircle" size="medium" />
      }, {
        id: 'add-user',
        label: 'Add New',
        icon: <Icon name="Add" size="medium" />
      }, {
        id: 'roles',
        label: 'Roles',
        icon: <Icon name="Settings" size="medium" />
      }]
    }, {
      title: 'SETTINGS',
      items: [{
        id: 'general',
        label: 'General',
        icon: <Icon name="Settings" size="medium" />
      }, {
        id: 'security',
        label: 'Security',
        icon: <Icon name="Lock" size="medium" />
      }, {
        id: 'notifications',
        label: 'Notifications',
        icon: <Icon name="Info" size="medium" />
      }, {
        id: 'integrations',
        label: 'Integrations',
        icon: <Icon name="Settings" size="medium" />
      }]
    }, {
      title: 'TOOLS',
      items: [{
        id: 'import',
        label: 'Import',
        icon: <Icon name="Upload" size="medium" />
      }, {
        id: 'export',
        label: 'Export',
        icon: <Icon name="Download" size="medium" />
      }, {
        id: 'backup',
        label: 'Backup',
        icon: <Icon name="Save" size="medium" />
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Sidebar with many menu items demonstrating automatic scrolling when content overflows. The navigation area becomes scrollable while the user profile remains fixed at the bottom.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

const navigationGroups = [
  {
    title: 'DASHBOARD',
    items: [
      { id: 'overview', label: 'Overview', icon: <Icon name="Home" size="medium" />, active: true },
      { id: 'analytics', label: 'Analytics', icon: <Icon name="Visibility" size="medium" /> },
      { id: 'reports', label: 'Reports', icon: <Icon name="Edit" size="medium" /> },
    ],
  },
  {
    title: 'CONTENT',
    items: [
      { id: 'posts', label: 'Posts', icon: <Icon name="Edit" size="medium" /> },
      { id: 'pages', label: 'Pages', icon: <Icon name="Info" size="medium" /> },
      { id: 'media', label: 'Media', icon: <Icon name="Visibility" size="medium" /> },
      { id: 'comments', label: 'Comments', icon: <Icon name="Info" size="medium" /> },
    ],
  },
  // ... more groups
];

<SideNavigation groups={navigationGroups} user={userProfile} />\`
      }
    }
  }
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var B,J,F;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'DASHBOARD',
      items: [{
        id: 'overview',
        label: 'Overview',
        icon: <Icon name="Home" size="medium" />,
        active: true
      }, {
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />
      }]
    }, {
      title: 'CONTENT',
      items: [{
        id: 'posts',
        label: 'Posts',
        icon: <Icon name="Edit" size="medium" />,
        showIndicator: true
      }, {
        id: 'media',
        label: 'Media',
        icon: <Icon name="Visibility" size="medium" />
      }, {
        id: 'comments',
        label: 'Comments',
        icon: <Icon name="Info" size="medium" />,
        showIndicator: true
      }]
    }, {
      title: 'SETTINGS',
      items: [{
        id: 'profile',
        label: 'Profile',
        icon: <Icon name="AccountCircle" size="medium" />
      }, {
        id: 'preferences',
        label: 'Preferences',
        icon: <Icon name="Settings" size="medium" />
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Complete example showing all features: multiple groups, active states, notification indicators, and user profile.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';
import { useState } from 'react';

function App() {
  const [activeId, setActiveId] = useState('overview');
  const [isPinned, setIsPinned] = useState(false);

  const navigationGroups = [
    {
      title: 'DASHBOARD',
      items: [
        {
          id: 'overview',
          label: 'Overview',
          icon: <Icon name="Home" size="medium" />,
          active: activeId === 'overview',
          onClick: () => setActiveId('overview'),
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: <Icon name="Visibility" size="medium" />,
          active: activeId === 'analytics',
          onClick: () => setActiveId('analytics'),
        },
      ],
    },
    {
      title: 'CONTENT',
      items: [
        {
          id: 'posts',
          label: 'Posts',
          icon: <Icon name="Edit" size="medium" />,
          showIndicator: true, // Shows notification dot
          active: activeId === 'posts',
          onClick: () => setActiveId('posts'),
        },
        {
          id: 'media',
          label: 'Media',
          icon: <Icon name="Visibility" size="medium" />,
          active: activeId === 'media',
          onClick: () => setActiveId('media'),
        },
      ],
    },
    {
      title: 'SETTINGS',
      items: [
        {
          id: 'profile',
          label: 'Profile',
          icon: <Icon name="AccountCircle" size="medium" />,
          active: activeId === 'profile',
          onClick: () => setActiveId('profile'),
        },
        {
          id: 'preferences',
          label: 'Preferences',
          icon: <Icon name="Settings" size="medium" />,
          active: activeId === 'preferences',
          onClick: () => setActiveId('preferences'),
        },
      ],
    },
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
    avatarUrl: 'https://example.com/avatar.jpg', // Optional
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
      isPinned={isPinned}
      onPinChange={(pinned) => setIsPinned(pinned)}
    />
  );
}\`
      }
    }
  }
}`,...(F=(J=u.parameters)==null?void 0:J.docs)==null?void 0:F.source}}};var L,_,q;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    groups: [{
      title: 'MAIN MENU',
      items: [{
        id: 'home',
        label: 'Home',
        icon: <Icon name="Home" size="medium" />,
        active: true
      }, {
        id: 'products',
        label: 'Products',
        icon: <Icon name="ShoppingCart" size="medium" />,
        children: [{
          id: 'products-all',
          label: 'All Products'
        }, {
          id: 'products-categories',
          label: 'Categories',
          children: [{
            id: 'cat-electronics',
            label: 'Electronics'
          }, {
            id: 'cat-clothing',
            label: 'Clothing'
          }, {
            id: 'cat-food',
            label: 'Food & Beverages'
          }]
        }, {
          id: 'products-featured',
          label: 'Featured Items'
        }]
      }, {
        id: 'orders',
        label: 'Orders',
        icon: <Icon name="Receipt" size="medium" />,
        showIndicator: true,
        children: [{
          id: 'orders-pending',
          label: 'Pending Orders'
        }, {
          id: 'orders-completed',
          label: 'Completed Orders'
        }, {
          id: 'orders-cancelled',
          label: 'Cancelled Orders'
        }]
      }]
    }, {
      title: 'REPORTS',
      items: [{
        id: 'analytics',
        label: 'Analytics',
        icon: <Icon name="Visibility" size="medium" />,
        children: [{
          id: 'analytics-sales',
          label: 'Sales Report'
        }, {
          id: 'analytics-traffic',
          label: 'Traffic Report',
          children: [{
            id: 'traffic-daily',
            label: 'Daily Traffic'
          }, {
            id: 'traffic-monthly',
            label: 'Monthly Traffic'
          }]
        }, {
          id: 'analytics-customers',
          label: 'Customer Report'
        }]
      }]
    }, {
      title: 'SETTINGS',
      items: [{
        id: 'settings',
        label: 'Settings',
        icon: <Icon name="Settings" size="medium" />,
        children: [{
          id: 'settings-general',
          label: 'General'
        }, {
          id: 'settings-security',
          label: 'Security'
        }, {
          id: 'settings-notifications',
          label: 'Notifications'
        }]
      }]
    }],
    user: sampleUser
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Example showing nested menu functionality. Hover over menu items with arrows to see nested submenus appear on the right. Supports multiple levels of nesting.'
      },
      story: {
        inline: false,
        iframeHeight: 600
      },
      source: {
        code: \`import { SideNavigation, Icon } from '@lean-ids/components';

function App() {
  const navigationGroups = [
    {
      title: 'MAIN MENU',
      items: [
        {
          id: 'home',
          label: 'Home',
          icon: <Icon name="Home" size="medium" />,
          active: true,
        },
        {
          id: 'products',
          label: 'Products',
          icon: <Icon name="ShoppingCart" size="medium" />,
          children: [
            {
              id: 'products-all',
              label: 'All Products',
            },
            {
              id: 'products-categories',
              label: 'Categories',
              children: [
                {
                  id: 'cat-electronics',
                  label: 'Electronics',
                },
                {
                  id: 'cat-clothing',
                  label: 'Clothing',
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const userProfile = {
    initials: 'AS',
    name: 'Ajay Soni',
    subtitle: 'Employee ID',
  };

  return (
    <SideNavigation 
      groups={navigationGroups}
      user={userProfile}
    />
  );
}\`
      }
    }
  }
}`,...(q=(_=p.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const ne=["Default","WithNotifications","WithoutUser","WithClickHandlers","MultipleGroups","WithActiveState","PinnedState","WithAvatarImage","WithManyItems","CompleteExample","WithNestedMenus"];export{u as CompleteExample,t as Default,r as MultipleGroups,c as PinnedState,l as WithActiveState,m as WithAvatarImage,a as WithClickHandlers,d as WithManyItems,p as WithNestedMenus,s as WithNotifications,n as WithoutUser,ne as __namedExportsOrder,se as default};
