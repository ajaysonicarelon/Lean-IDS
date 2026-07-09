import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
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
✅ **Custom Styling** - Matches design system
✅ **Responsive** - Adapts to screen size

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| lastUpdated | string | required | Last updated date text |
| version | string | required | Version number |
| feedbackUrl | string | - | Feedback link URL |
| feedbackText | string | 'Send Feedback' | Feedback link text |
| onFeedbackClick | () => void | - | Feedback click handler |
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
        `,
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
    onFeedbackClick: () => alert('Feedback link clicked!'),
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
