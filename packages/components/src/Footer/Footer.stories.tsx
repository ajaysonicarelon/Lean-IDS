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
✅ **Visibility Controls** - Show/hide individual sections
✅ **Custom Content** - Add custom elements before/after default items
✅ **Custom Styling** - Matches design system
✅ **Responsive** - Adapts to screen size

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| lastUpdated | string | 'Sept 23, 2024' | Last updated date text |
| version | string | '1.0' | Version number |
| feedbackUrl | string | '#' | Feedback link URL |
| feedbackText | string | 'Send us a Feedback here' | Feedback link text |
| onFeedbackClick | () => void | - | Feedback click handler |
| showLastUpdated | boolean | true | Show/hide last updated section |
| showVersion | boolean | true | Show/hide version section |
| showFeedback | boolean | true | Show/hide feedback section |
| customContentBefore | React.ReactNode | - | Custom content before default items |
| customContentAfter | React.ReactNode | - | Custom content after default items |
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

### Show Only Specific Sections
\`\`\`tsx
// Only version
<Footer 
  version="2.0" 
  showLastUpdated={false}
  showFeedback={false}
/>

// Only feedback
<Footer 
  feedbackUrl="#"
  feedbackText="Contact Support"
  showLastUpdated={false}
  showVersion={false}
/>
\`\`\`

### With Custom Content
\`\`\`tsx
// Add copyright before default items
<Footer 
  lastUpdated="Sept 23, 2024"
  version="1.0"
  customContentBefore={
    <div>© 2024 Company Name</div>
  }
/>

// Add links after default items
<Footer 
  lastUpdated="Sept 23, 2024"
  version="1.0"
  customContentAfter={
    <div>
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
    </div>
  }
/>

// Fully custom footer
<Footer 
  showLastUpdated={false}
  showVersion={false}
  showFeedback={false}
  customContentBefore={
    <div>My Custom Footer Content</div>
  }
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

export const OnlyVersion: Story = {
  args: {
    version: '2.0',
    showLastUpdated: false,
    showFeedback: false,
  },
};

export const OnlyFeedback: Story = {
  args: {
    feedbackUrl: '#',
    feedbackText: 'Contact Support',
    showLastUpdated: false,
    showVersion: false,
  },
};

export const VersionAndFeedback: Story = {
  args: {
    version: '1.5.2',
    feedbackUrl: '#',
    feedbackText: 'Report Bug',
    showLastUpdated: false,
  },
};

export const WithCustomContentBefore: Story = {
  args: {
    lastUpdated: 'Sept 23, 2024',
    version: '1.0',
    feedbackUrl: '#',
    customContentBefore: (
      <div style={{ padding: '0 16px', color: '#666', fontSize: '14px' }}>
        © 2024 Company Name. All rights reserved.
      </div>
    ),
  },
};

export const WithCustomContentAfter: Story = {
  args: {
    lastUpdated: 'Sept 23, 2024',
    version: '1.0',
    feedbackUrl: '#',
    customContentAfter: (
      <div style={{ padding: '0 16px', display: 'flex', gap: '16px' }}>
        <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontSize: '14px' }}>Privacy</a>
        <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontSize: '14px' }}>Terms</a>
      </div>
    ),
  },
};

export const CustomContentOnly: Story = {
  args: {
    showLastUpdated: false,
    showVersion: false,
    showFeedback: false,
    customContentBefore: (
      <div style={{ 
        padding: '0 16px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        width: '100%',
        fontSize: '14px',
        color: '#666'
      }}>
        <div>© 2024 My Company</div>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Contact</a>
          <a href="#" style={{ color: '#0066cc', textDecoration: 'none' }}>Privacy</a>
        </div>
      </div>
    ),
  },
};

export const FullyCustomized: Story = {
  args: {
    lastUpdated: 'July 20, 2026',
    version: '4.2.1',
    feedbackUrl: 'https://support.example.com',
    feedbackText: 'Get Help',
    showVersion: true,
    showLastUpdated: true,
    showFeedback: true,
    customContentBefore: (
      <div style={{ padding: '0 16px', fontSize: '14px', color: '#666' }}>
        © 2026 Lean IDS
      </div>
    ),
    customContentAfter: (
      <div style={{ padding: '0 16px', display: 'flex', gap: '16px' }}>
        <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontSize: '14px' }}>Docs</a>
        <a href="#" style={{ color: '#0066cc', textDecoration: 'none', fontSize: '14px' }}>API</a>
      </div>
    ),
  },
};
