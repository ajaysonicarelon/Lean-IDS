import type { Meta, StoryObj } from '@storybook/react';
import { TopHeader } from './TopHeader';
import { Icon } from '../Icon';

const meta: Meta<typeof TopHeader> = {
  title: 'Components/TopHeader',
  component: TopHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `A horizontal navigation header with branding, app name, menu items, and user avatar.

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
| \`mode\` | 'dark' \| 'light' | 'dark' | Color scheme |
| \`appName\` | string | - | Application name |
| \`showLogo\` | boolean | true | Show brand logo |
| \`showAppName\` | boolean | true | Show app name |
| \`showDivider\` | boolean | true | Show divider after logo |
| \`showMenuItems\` | boolean | true | Show menu items |
| \`showAvatar\` | boolean | true | Show user avatar |
| \`menuItems\` | MenuItem[] | [] | Navigation menu items |
| \`userInitials\` | string | - | User initials for avatar |
| \`avatarUrl\` | string | - | User avatar image URL |`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    mode: {
      control: 'radio',
      options: ['dark', 'light'],
      description: 'Color mode',
    },
    appName: {
      control: 'text',
      description: 'Application name',
    },
    showLogo: {
      control: 'boolean',
      description: 'Whether to show brand logo',
    },
    showAppName: {
      control: 'boolean',
      description: 'Whether to show app name',
    },
    showDivider: {
      control: 'boolean',
      description: 'Whether to show divider between logo and app name',
    },
    showMenuItems: {
      control: 'boolean',
      description: 'Whether to show menu items',
    },
    showAvatar: {
      control: 'boolean',
      description: 'Whether to show user avatar',
    },
    menuItems: {
      control: 'object',
      description: 'Navigation menu items',
    },
    userInitials: {
      control: 'text',
      description: 'User initials for avatar',
    },
    userAvatarUrl: {
      control: 'text',
      description: 'User avatar image URL',
    },
    customLogoUrl: {
      control: 'text',
      description: 'Custom logo URL',
    },
    leftOffset: {
      control: 'number',
      description: 'Left offset in pixels (used when sidebar is present)',
    },
    onAvatarClick: {
      description: 'Click handler for user avatar',
      action: 'avatarClicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS class',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopHeader>;

const sampleMenuItems = [
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

export const DarkMode: Story = {
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Default dark mode header with all features enabled. Use controls to customize the header.',
      },
      story: {
        inline: true,
        iframeHeight: 200,
      },
      source: {
        transform: (_code: string, storyContext: any) => {
          const { args } = storyContext;
          const props = [];
          
          if (args.mode && args.mode !== 'dark') props.push(`mode="${args.mode}"`);
          if (args.appName) props.push(`appName="${args.appName}"`);
          if (args.showLogo === false) props.push('showLogo={false}');
          if (args.showAppName === false) props.push('showAppName={false}');
          if (args.showDivider === false) props.push('showDivider={false}');
          if (args.showMenuItems === false) props.push('showMenuItems={false}');
          if (args.showAvatar === false) props.push('showAvatar={false}');
          if (args.userInitials) props.push(`userInitials="${args.userInitials}"`);
          if (args.userAvatarUrl) props.push(`userAvatarUrl="${args.userAvatarUrl}"`);
          if (args.customLogoUrl) props.push(`customLogoUrl="${args.customLogoUrl}"`);
          if (args.leftOffset) props.push(`leftOffset={${args.leftOffset}}`);
          
          const propsString = props.length > 0 ? '\n  ' + props.join('\n  ') + '\n' : '';
          
          return `import { TopHeader, Icon } from '@lean-ids/components';

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

<TopHeader${propsString}  menuItems={menuItems}
/>`;
        },
      },
    },
  },
};

export const LightMode: Story = {
  args: {
    mode: 'light',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Light mode variant with white background.',
      },
      story: {
        inline: false,
        iframeHeight: 200,
      },
      source: {
        code: `import { TopHeader, Icon } from '@lean-ids/components';

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
/>`,
      },
    },
  },
};

export const WithoutLogo: Story = {
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: false,
    showAppName: true,
    showDivider: false,
    showMenuItems: true,
    showAvatar: true,
    menuItems: sampleMenuItems,
    userInitials: 'AS',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Header without brand logo, showing only app name.',
      },
      story: {
        inline: false,
        iframeHeight: 200,
      },
      source: {
        code: `import { TopHeader, Icon } from '@lean-ids/components';

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
/>`,
      },
    },
  },
};

export const WithoutMenuItems: Story = {
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: false,
    showAvatar: true,
    userInitials: 'AS',
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Header without navigation menu items.',
      },
      story: {
        inline: false,
        iframeHeight: 200,
      },
      source: {
        code: `import { TopHeader } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={false}
  showAvatar={true}
  userInitials="AS"
/>`,
      },
    },
  },
};

export const MinimalHeader: Story = {
  args: {
    mode: 'dark',
    appName: 'Product Name',
    showLogo: true,
    showAppName: true,
    showDivider: true,
    showMenuItems: false,
    showAvatar: false,
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Minimal header with just logo and app name, no menu items or avatar.',
      },
      story: {
        inline: false,
        iframeHeight: 200,
      },
      source: {
        code: `import { TopHeader } from '@lean-ids/components';

<TopHeader
  mode="dark"
  appName="Product Name"
  showLogo={true}
  showAppName={true}
  showDivider={true}
  showMenuItems={false}
  showAvatar={false}
/>`,
      },
    },
  },
};
