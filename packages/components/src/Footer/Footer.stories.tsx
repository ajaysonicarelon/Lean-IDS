import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A footer bar displaying last updated date, version number, and feedback link.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {
    lastUpdated: 'Sept 23, 2024',
    version: '1.0',
    feedbackUrl: '#',
    feedbackText: 'Send us a Feedback here',
  },
};

export const CustomDate: Story = {
  args: {
    lastUpdated: 'May 7, 2026',
    version: '2.1.5',
    feedbackUrl: 'https://feedback.example.com',
    feedbackText: 'Report an Issue',
  },
};

export const BetaVersion: Story = {
  args: {
    lastUpdated: 'Today',
    version: '3.0.0-beta',
    feedbackUrl: '#',
    feedbackText: 'Give Feedback',
  },
};
