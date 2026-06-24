import{j as m}from"./jsx-runtime-DSvmvvsx.js";import{T as b}from"./TopHeader-D8H5tFj4.js";import{I as i}from"./Icon-BytZhcyh.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-BIi91Tbq.js";import"./Brand-D2_m1Vnv.js";import"./MenuItem-qyRq59Mo.js";import"./Avatar-BtdRwqdw.js";const x={title:"Components/TopHeader",component:b,parameters:{layout:"fullscreen",docs:{description:{component:`A horizontal navigation header with branding, app name, menu items, and user avatar.

## Features

- **Two Modes**: Dark and light color schemes
- **Flexible Layout**: Show/hide logo, app name, divider, menu items, and avatar
- **Menu Items**: Support for icons, labels, active states, and notification indicators
- **User Avatar**: Display user initials or avatar image
- **Responsive**: Adapts to different screen sizes

## Usage

### Basic Example

\`\`\`tsx
import { TopHeader, Icon } from '@lean-ids/components';

function App() {
  const menuItems = [
    {
      id: 'home',
      label: 'Home',
      icon: <Icon name="Home" size="small" />,
      active: true,
      onClick: () => navigate('/home'),
    },
    {
      id: 'about',
      label: 'About',
      icon: <Icon name="Info" size="small" />,
      onClick: () => navigate('/about'),
    },
  ];

  return (
    <TopHeader
      mode="dark"
      appName="Product Name"
      showLogo={true}
      showAppName={true}
      showDivider={true}
      showMenuItems={true}
      showAvatar={true}
      menuItems={menuItems}
      userInitials="AS"
    />
  );
}
\`\`\`

### With Notification Indicators

\`\`\`tsx
const menuItems = [
  {
    id: 'messages',
    label: 'Messages',
    icon: <Icon name="Info" size="small" />,
    showIndicator: true, // Shows notification dot
  },
];

<TopHeader menuItems={menuItems} userInitials="AS" />
\`\`\`

### Light Mode

\`\`\`tsx
<TopHeader
  mode="light"
  appName="Product Name"
  menuItems={menuItems}
  userInitials="AS"
/>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`mode\` | 'dark' | 'light' | 'dark' | Color scheme |
| \`appName\` | string | - | Application name |
| \`showLogo\` | boolean | true | Show brand logo |
| \`showAppName\` | boolean | true | Show app name |
| \`showDivider\` | boolean | true | Show divider after logo |
| \`showMenuItems\` | boolean | true | Show menu items |
| \`showAvatar\` | boolean | true | Show user avatar |
| \`menuItems\` | MenuItem[] | [] | Navigation menu items |
| \`userInitials\` | string | - | User initials for avatar |
| \`avatarUrl\` | string | - | User avatar image URL |`}}},tags:["autodocs"],argTypes:{mode:{control:"radio",options:["dark","light"],description:"Color mode"}}},t=[{id:"home",label:"Home",icon:m.jsx(i,{name:"Home",size:"small"}),active:!0},{id:"about",label:"About",icon:m.jsx(i,{name:"Info",size:"small"}),showIndicator:!0}],e={args:{mode:"dark",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!0,showAvatar:!0,menuItems:t,userInitials:"AS"},parameters:{layout:"fullscreen",docs:{description:{story:"Default dark mode header with all features enabled."},story:{inline:!1,iframeHeight:200},source:{code:`import { TopHeader, Icon } from '@lean-ids/components';

const menuItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <Icon name="Home" size="small" />,
    active: true,
  },
  {
    id: 'about',
    label: 'About',
    icon: <Icon name="Info" size="small" />,
    showIndicator: true,
  },
];

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={true}
  showAvatar={true}
  menuItems={menuItems}
  userInitials="AS"
/>`}}}},o={args:{mode:"light",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!0,showAvatar:!0,menuItems:t,userInitials:"AS"},parameters:{layout:"fullscreen",docs:{description:{story:"Light mode variant with white background."},story:{inline:!1,iframeHeight:200},source:{code:`import { TopHeader, Icon } from '@lean-ids/components';

const menuItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <Icon name="Home" size="small" />,
    active: true,
  },
  {
    id: 'about',
    label: 'About',
    icon: <Icon name="Info" size="small" />,
    showIndicator: true,
  },
];

<TopHeader
  mode="light"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={true}
  showAvatar={true}
  menuItems={menuItems}
  userInitials="AS"
/>`}}}},a={args:{mode:"dark",appName:"Product Name",showLogo:!1,showAppName:!0,showDivider:!1,showMenuItems:!0,showAvatar:!0,menuItems:t,userInitials:"AS"},parameters:{layout:"fullscreen",docs:{description:{story:"Header without brand logo, showing only app name."},story:{inline:!1,iframeHeight:200},source:{code:`import { TopHeader, Icon } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={false}
  showAppName={true}
  showDivider={false}
  showMenuItems={true}
  showAvatar={true}
  menuItems={menuItems}
  userInitials="AS"
/>`}}}},s={args:{mode:"dark",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!1,showAvatar:!0,userInitials:"AS"},parameters:{layout:"fullscreen",docs:{description:{story:"Header without navigation menu items."},story:{inline:!1,iframeHeight:200},source:{code:`import { TopHeader } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={false}
  showAvatar={true}
  userInitials="AS"
/>`}}}},r={args:{mode:"dark",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!1,showAvatar:!1},parameters:{layout:"fullscreen",docs:{description:{story:"Minimal header with just logo and app name, no menu items or avatar."},story:{inline:!1,iframeHeight:200},source:{code:`import { TopHeader } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={false}
  showAvatar={false}
/>`}}}};var n,u,d;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS'
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default dark mode header with all features enabled.'
      },
      story: {
        inline: false,
        iframeHeight: 200
      },
      source: {
        code: \`import { TopHeader, Icon } from '@lean-ids/components';

const menuItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <Icon name="Home" size="small" />,
    active: true,
  },
  {
    id: 'about',
    label: 'About',
    icon: <Icon name="Info" size="small" />,
    showIndicator: true,
  },
];

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={true}
  showAvatar={true}
  menuItems={menuItems}
  userInitials="AS"
/>\`
      }
    }
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,l,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    mode: 'light',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS'
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Light mode variant with white background.'
      },
      story: {
        inline: false,
        iframeHeight: 200
      },
      source: {
        code: \`import { TopHeader, Icon } from '@lean-ids/components';

const menuItems = [
  {
    id: 'home',
    label: 'Home',
    icon: <Icon name="Home" size="small" />,
    active: true,
  },
  {
    id: 'about',
    label: 'About',
    icon: <Icon name="Info" size="small" />,
    showIndicator: true,
  },
];

<TopHeader
  mode="light"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={true}
  showAvatar={true}
  menuItems={menuItems}
  userInitials="AS"
/>\`
      }
    }
  }
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var h,w,I;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: false,
    showAppName: true,
    showDivider: false,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS'
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Header without brand logo, showing only app name.'
      },
      story: {
        inline: false,
        iframeHeight: 200
      },
      source: {
        code: \`import { TopHeader, Icon } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={false}
  showAppName={true}
  showDivider={false}
  showMenuItems={true}
  showAvatar={true}
  menuItems={menuItems}
  userInitials="AS"
/>\`
      }
    }
  }
}`,...(I=(w=a.parameters)==null?void 0:w.docs)==null?void 0:I.source}}};var g,f,A;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: false,
    showAvatar: true,
    userInitials: 'AS'
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Header without navigation menu items.'
      },
      story: {
        inline: false,
        iframeHeight: 200
      },
      source: {
        code: \`import { TopHeader } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={false}
  showAvatar={true}
  userInitials="AS"
/>\`
      }
    }
  }
}`,...(A=(f=s.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var v,N,H;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: false,
    showAvatar: false
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Minimal header with just logo and app name, no menu items or avatar.'
      },
      story: {
        inline: false,
        iframeHeight: 200
      },
      source: {
        code: \`import { TopHeader } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={false}
  showAvatar={false}
/>\`
      }
    }
  }
}`,...(H=(N=r.parameters)==null?void 0:N.docs)==null?void 0:H.source}}};const j=["DarkMode","LightMode","WithoutLogo","WithoutMenuItems","MinimalHeader"];export{e as DarkMode,o as LightMode,r as MinimalHeader,a as WithoutLogo,s as WithoutMenuItems,j as __namedExportsOrder,x as default};
