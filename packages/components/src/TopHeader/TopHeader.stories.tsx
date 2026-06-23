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
        story: 'Default dark mode header with all features enabled.',
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
  mode="dark"
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
