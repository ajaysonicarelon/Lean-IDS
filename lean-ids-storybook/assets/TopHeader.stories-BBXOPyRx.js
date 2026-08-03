import{j as m}from"./jsx-runtime-DSvmvvsx.js";import{T as y}from"./TopHeader-_BkLFTlu.js";import{I as u}from"./Icon-D9wW9sG4.js";import"./index-B0WjJBI_.js";import"./_commonjsHelpers-CqkleIqs.js";import"./styled-components.browser.esm-CuwBLqEg.js";import"./Brand-JJJEzcvX.js";import"./MenuItem-CHS1uLTd.js";import"./Typography-DlcmwxwF.js";import"./Avatar-BXUW_YG5.js";import"./Search-3OWEky2d.js";import"./createSvgIcon-B7ekv6yR.js";import"./ExpandMore-DhGl5KfG.js";import"./Close-Bujf63ZX.js";import"./Settings-DTDGO7Gi.js";import"./Home-l5wlLBdJ.js";const q={title:"Components/TopHeader",component:y,parameters:{layout:"fullscreen",docs:{description:{component:`A horizontal navigation header with branding, app name, menu items, and user avatar.

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
| \`avatarUrl\` | string | - | User avatar image URL |`}}},tags:["autodocs"],argTypes:{mode:{control:"radio",options:["dark","light"],description:"Color mode"},appName:{control:"text",description:"Application name"},showLogo:{control:"boolean",description:"Whether to show brand logo"},showAppName:{control:"boolean",description:"Whether to show app name"},showDivider:{control:"boolean",description:"Whether to show divider between logo and app name"},showMenuItems:{control:"boolean",description:"Whether to show menu items"},showAvatar:{control:"boolean",description:"Whether to show user avatar"},menuItems:{control:"object",description:"Navigation menu items"},userInitials:{control:"text",description:"User initials for avatar"},userAvatarUrl:{control:"text",description:"User avatar image URL"},customLogoUrl:{control:"text",description:"Custom logo URL"},leftOffset:{control:"number",description:"Left offset in pixels (used when sidebar is present)"},onAvatarClick:{description:"Click handler for user avatar",action:"avatarClicked"},className:{control:"text",description:"Additional CSS class"}}},i=[{id:"home",label:"Home",icon:m.jsx(u,{name:"Home",size:"small"}),active:!0},{id:"about",label:"About",icon:m.jsx(u,{name:"Info",size:"small"}),showIndicator:!0}],s={args:{mode:"dark",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!0,showAvatar:!0,menuItems:i,userInitials:"AS"},parameters:{layout:"fullscreen",docs:{description:{story:"Default dark mode header with all features enabled. Use controls to customize the header."},story:{inline:!0,iframeHeight:200},source:{transform:(S,M)=>{const{args:e}=M,o=[];return e.mode&&e.mode!=="dark"&&o.push(`mode="${e.mode}"`),e.appName&&o.push(`appName="${e.appName}"`),e.showLogo===!1&&o.push("showLogo={false}"),e.showAppName===!1&&o.push("showAppName={false}"),e.showDivider===!1&&o.push("showDivider={false}"),e.showMenuItems===!1&&o.push("showMenuItems={false}"),e.showAvatar===!1&&o.push("showAvatar={false}"),e.userInitials&&o.push(`userInitials="${e.userInitials}"`),e.userAvatarUrl&&o.push(`userAvatarUrl="${e.userAvatarUrl}"`),e.customLogoUrl&&o.push(`customLogoUrl="${e.customLogoUrl}"`),e.leftOffset&&o.push(`leftOffset={${e.leftOffset}}`),`import { TopHeader, Icon } from '@lean-ids/components';

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

<TopHeader${o.length>0?`
  `+o.join(`
  `)+`
`:""}  menuItems={menuItems}
/>`}}}}},a={args:{mode:"light",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!0,showAvatar:!0,menuItems:i,userInitials:"AS"},parameters:{layout:"fullscreen",docs:{description:{story:"Light mode variant with white background."},story:{inline:!1,iframeHeight:200},source:{code:`import { TopHeader, Icon } from '@lean-ids/components';

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
/>`}}}},r={args:{mode:"dark",appName:"Product Name",showLogo:!1,showAppName:!0,showDivider:!1,showMenuItems:!0,showAvatar:!0,menuItems:i,userInitials:"AS"},parameters:{layout:"fullscreen",docs:{description:{story:"Header without brand logo, showing only app name."},story:{inline:!1,iframeHeight:200},source:{code:`import { TopHeader, Icon } from '@lean-ids/components';

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
/>`}}}},t={args:{mode:"dark",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!1,showAvatar:!0,userInitials:"AS"},parameters:{layout:"fullscreen",docs:{description:{story:"Header without navigation menu items."},story:{inline:!1,iframeHeight:200},source:{code:`import { TopHeader } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={false}
  showAvatar={true}
  userInitials="AS"
/>`}}}},n={args:{mode:"dark",appName:"Product Name",showLogo:!0,showAppName:!0,showDivider:!0,showMenuItems:!1,showAvatar:!1},parameters:{layout:"fullscreen",docs:{description:{story:"Minimal header with just logo and app name, no menu items or avatar."},story:{inline:!1,iframeHeight:200},source:{code:`import { TopHeader } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={false}
  showAvatar={false}
/>`}}}};var p,l,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        story: 'Default dark mode header with all features enabled. Use controls to customize the header.'
      },
      story: {
        inline: true,
        iframeHeight: 200
      },
      source: {
        transform: (_code: string, storyContext: any) => {
          const {
            args
          } = storyContext;
          const props = [];
          if (args.mode && args.mode !== 'dark') props.push(\`mode="\${args.mode}"\`);
          if (args.appName) props.push(\`appName="\${args.appName}"\`);
          if (args.showLogo === false) props.push('showLogo={false}');
          if (args.showAppName === false) props.push('showAppName={false}');
          if (args.showDivider === false) props.push('showDivider={false}');
          if (args.showMenuItems === false) props.push('showMenuItems={false}');
          if (args.showAvatar === false) props.push('showAvatar={false}');
          if (args.userInitials) props.push(\`userInitials="\${args.userInitials}"\`);
          if (args.userAvatarUrl) props.push(\`userAvatarUrl="\${args.userAvatarUrl}"\`);
          if (args.customLogoUrl) props.push(\`customLogoUrl="\${args.customLogoUrl}"\`);
          if (args.leftOffset) props.push(\`leftOffset={\${args.leftOffset}}\`);
          const propsString = props.length > 0 ? '\\n  ' + props.join('\\n  ') + '\\n' : '';
          return \`import { TopHeader, Icon } from '@lean-ids/components';

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

<TopHeader\${propsString}  menuItems={menuItems}
/>\`;
        }
      }
    }
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var c,h,w;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(w=(h=a.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,g,I;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(g=r.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var v,A,N;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(N=(A=t.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var H,b,L;n.parameters={...n.parameters,docs:{...(H=n.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(L=(b=n.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};const G=["DarkMode","LightMode","WithoutLogo","WithoutMenuItems","MinimalHeader"];export{s as DarkMode,a as LightMode,n as MinimalHeader,r as WithoutLogo,t as WithoutMenuItems,G as __namedExportsOrder,q as default};
