import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import styled from 'styled-components';

const AvatarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 24px;
  align-items: center;
`;

const AvatarColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
## Usage

\`\`\`tsx
import { Avatar } from '@lean-ids/components';

function UserProfile() {
  return (
    <div>
      {/* With image */}
      <Avatar 
        size="large" 
        src="https://example.com/avatar.jpg" 
        alt="John Doe" 
      />
      
      {/* With initials */}
      <Avatar 
        size="medium" 
        color="purple" 
        initials="JD" 
      />
      
      {/* Disabled state */}
      <Avatar 
        size="small" 
        initials="AB" 
        disabled 
      />
    </div>
  );
}
\`\`\`

Avatar component displays user profile pictures or initials in a circular container with various sizes and color options.
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'radio',
      options: ['large', 'medium', 'small'],
      description: 'Size of the avatar (72px, 48px, or 32px)',
    },
    color: {
      control: 'select',
      options: ['default', 'purple', 'amber', 'cyan', 'lime', 'yellow', 'grey'],
      description: 'Background color variant',
    },
    src: {
      control: 'text',
      description: 'Image URL for the avatar',
    },
    initials: {
      control: 'text',
      description: 'Initials to display (max 2 characters)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled/greyed out state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 'medium',
    color: 'default',
    initials: 'AA',
  },
};

export const AllSizes: Story = {
  render: () => (
    <AvatarGrid>
      <Avatar size="large" color="default" initials="AA" />
      <Avatar size="medium" color="default" initials="AA" />
      <Avatar size="small" color="default" initials="AA" />
    </AvatarGrid>
  ),
};

export const AllColors: Story = {
  render: () => (
    <AvatarColumn>
      <AvatarGrid>
        <Avatar size="large" color="default" initials="AA" />
        <Avatar size="medium" color="default" initials="AA" />
        <Avatar size="small" color="default" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="purple" initials="AA" />
        <Avatar size="medium" color="purple" initials="AA" />
        <Avatar size="small" color="purple" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="amber" initials="AA" />
        <Avatar size="medium" color="amber" initials="AA" />
        <Avatar size="small" color="amber" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="cyan" initials="AA" />
        <Avatar size="medium" color="cyan" initials="AA" />
        <Avatar size="small" color="cyan" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="lime" initials="AA" />
        <Avatar size="medium" color="lime" initials="AA" />
        <Avatar size="small" color="lime" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="yellow" initials="AA" />
        <Avatar size="medium" color="yellow" initials="AA" />
        <Avatar size="small" color="yellow" initials="AA" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" color="grey" initials="AA" />
        <Avatar size="medium" color="grey" initials="AA" />
        <Avatar size="small" color="grey" initials="AA" />
      </AvatarGrid>
    </AvatarColumn>
  ),
};

export const WithImages: Story = {
  render: () => (
    <AvatarColumn>
      <AvatarGrid>
        <Avatar size="large" src="https://i.pravatar.cc/72?img=1" alt="User 1" />
        <Avatar size="medium" src="https://i.pravatar.cc/48?img=1" alt="User 1" />
        <Avatar size="small" src="https://i.pravatar.cc/32?img=1" alt="User 1" />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" src="https://i.pravatar.cc/72?img=5" alt="User 2" />
        <Avatar size="medium" src="https://i.pravatar.cc/48?img=5" alt="User 2" />
        <Avatar size="small" src="https://i.pravatar.cc/32?img=5" alt="User 2" />
      </AvatarGrid>
    </AvatarColumn>
  ),
};

export const Disabled: Story = {
  render: () => (
    <AvatarColumn>
      <AvatarGrid>
        <Avatar size="large" initials="AA" disabled />
        <Avatar size="medium" initials="AA" disabled />
        <Avatar size="small" initials="AA" disabled />
      </AvatarGrid>
      <AvatarGrid>
        <Avatar size="large" src="https://i.pravatar.cc/72?img=3" alt="User" disabled />
        <Avatar size="medium" src="https://i.pravatar.cc/48?img=3" alt="User" disabled />
        <Avatar size="small" src="https://i.pravatar.cc/32?img=3" alt="User" disabled />
      </AvatarGrid>
    </AvatarColumn>
  ),
};

export const CustomInitials: Story = {
  render: () => (
    <AvatarGrid>
      <Avatar size="large" color="purple" initials="JD" />
      <Avatar size="medium" color="cyan" initials="SM" />
      <Avatar size="small" color="amber" initials="AB" />
    </AvatarGrid>
  ),
};

export const LargeSize: Story = {
  args: {
    size: 'large',
    color: 'default',
    initials: 'AA',
  },
};

export const MediumSize: Story = {
  args: {
    size: 'medium',
    color: 'purple',
    initials: 'JD',
  },
};

export const SmallSize: Story = {
  args: {
    size: 'small',
    color: 'cyan',
    initials: 'SM',
  },
};
