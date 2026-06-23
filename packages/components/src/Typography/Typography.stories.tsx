import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `A flexible typography component that provides consistent text styling across your application.

## Features

- **11 Variants**: displayL, displayM, displayS, headingXL, headingL, headingM, headingS, body, paragraph, caption, code
- **5 Weights**: light, regular, medium, semibold, bold
- **Semantic HTML**: Automatically renders appropriate HTML elements (h1-h6, p, span, code)
- **Customizable**: Override element type, alignment, and color
- **Type-safe**: Full TypeScript support

## Usage

### Basic Example

\`\`\`tsx
import { Typography } from '@lean-ids/components';

function App() {
  return (
    <>
      <Typography variant="headingXL" weight="semibold">
        Page Title
      </Typography>
      
      <Typography variant="paragraph">
        This is a paragraph of body text with regular weight.
      </Typography>
      
      <Typography variant="caption" weight="medium">
        Small caption text
      </Typography>
    </>
  );
}
\`\`\`

### All Variants

\`\`\`tsx
// Display variants (hero text)
<Typography variant="displayL">Large Display</Typography>
<Typography variant="displayM">Medium Display</Typography>
<Typography variant="displayS">Small Display</Typography>

// Heading variants
<Typography variant="headingXL">Extra Large Heading</Typography>
<Typography variant="headingL">Large Heading</Typography>
<Typography variant="headingM">Medium Heading</Typography>
<Typography variant="headingS">Small Heading</Typography>

// Body variants
<Typography variant="body">Body text (16px)</Typography>
<Typography variant="paragraph">Paragraph text (14px)</Typography>
<Typography variant="caption">Caption text (12px)</Typography>

// Code variant
<Typography variant="code" codeSize="14">
  const greeting = 'Hello, World!';
</Typography>
\`\`\`

### With Different Weights

\`\`\`tsx
<Typography variant="body" weight="light">Light weight</Typography>
<Typography variant="body" weight="regular">Regular weight</Typography>
<Typography variant="body" weight="medium">Medium weight</Typography>
<Typography variant="body" weight="semibold">Semibold weight</Typography>
<Typography variant="body" weight="bold">Bold weight</Typography>
\`\`\`

### Custom Element & Alignment

\`\`\`tsx
// Override default element
<Typography variant="body" as="div">
  This renders as a div instead of p
</Typography>

// Text alignment
<Typography variant="paragraph" align="center">
  Centered text
</Typography>

<Typography variant="paragraph" align="right">
  Right-aligned text
</Typography>
\`\`\`

### With Custom Color

\`\`\`tsx
<Typography variant="headingM" color="#108808">
  Green heading
</Typography>

<Typography variant="paragraph" color="#666">
  Gray paragraph
</Typography>
\`\`\`

### Code Sizes

\`\`\`tsx
<Typography variant="code" codeSize="10">Small code</Typography>
<Typography variant="code" codeSize="12">Medium code</Typography>
<Typography variant="code" codeSize="14">Large code</Typography>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`variant\` | TypographyVariant | \`'paragraph'\` | Text style variant |
| \`weight\` | TypographyWeight | \`'regular'\` | Font weight |
| \`codeSize\` | '10' \\| '12' \\| '14' | \`'14'\` | Font size for code variant |
| \`as\` | HTML Element | auto | Override default HTML element |
| \`align\` | 'left' \\| 'center' \\| 'right' \\| 'justify' | - | Text alignment |
| \`color\` | string | - | Custom text color |
| \`className\` | string | - | Additional CSS class |
| \`children\` | ReactNode | - | Content to display |

## Best Practices

1. **Use semantic variants**: Choose variants that match content hierarchy
2. **Limit weights**: Stick to regular, medium, and semibold for most content
3. **Maintain hierarchy**: Use larger variants for more important content
4. **Accessibility**: Ensure proper heading order (h1 → h2 → h3)
5. **Consistency**: Use the same variants for similar content types`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['displayL', 'displayM', 'displayS', 'headingXL', 'headingL', 'headingM', 'headingS', 'body', 'paragraph', 'caption', 'code'],
      description: 'Typography variant/style',
    },
    weight: {
      control: 'select',
      options: ['light', 'regular', 'medium', 'semibold', 'bold'],
      description: 'Font weight',
    },
    codeSize: {
      control: 'select',
      options: ['10', '12', '14'],
      description: 'Font size for code variant',
      if: { arg: 'variant', eq: 'code' },
    },
    as: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div', 'code'],
      description: 'HTML element to render',
    },
    align: {
      control: 'select',
      options: ['left', 'center', 'right', 'justify'],
      description: 'Text alignment',
    },
    color: {
      control: 'color',
      description: 'Custom text color',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    variant: 'paragraph',
    weight: 'regular',
    children: 'The quick brown fox jumps over the lazy dog',
  },
};

export const DisplayStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Typography variant="displayL" weight="regular">
        Display L / Regular
      </Typography>
      <Typography variant="displayM" weight="semibold">
        Display M / Semibold
      </Typography>
      <Typography variant="displayS" weight="medium">
        Display S / Medium
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Large display text for hero sections and major page titles (48px-72px).',
      },
    },
  },
};

export const HeadingStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="headingXL" weight="semibold">
        Heading XL / Semibold (32px)
      </Typography>
      <Typography variant="headingL" weight="semibold">
        Heading L / Semibold (28px)
      </Typography>
      <Typography variant="headingM" weight="semibold">
        Heading M / Semibold (24px)
      </Typography>
      <Typography variant="headingS" weight="semibold">
        Heading S / Semibold (20px)
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Heading styles for section titles and subsections (20px-32px).',
      },
    },
  },
};

export const BodyStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="body" weight="regular">
        Body / Regular (16px) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="medium">
        Body / Medium (16px) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="semibold">
        Body / Semibold (16px) - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Body text styles for main content (16px).',
      },
    },
  },
};

export const ParagraphStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="paragraph" weight="regular">
        Paragraph / Regular (14px) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="paragraph" weight="medium">
        Paragraph / Medium (14px) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="paragraph" weight="semibold">
        Paragraph / Semibold (14px) - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Paragraph text styles for standard body content (14px).',
      },
    },
  },
};

export const CaptionStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="caption" weight="regular">
        Caption / Regular (12px) - Small text for labels and supporting information
      </Typography>
      <Typography variant="caption" weight="medium">
        Caption / Medium (12px) - Small text for labels and supporting information
      </Typography>
      <Typography variant="caption" weight="semibold">
        Caption / Semibold (12px) - Small text for labels and supporting information
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Caption text for labels, metadata, and supporting information (12px).',
      },
    },
  },
};

export const CodeStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px' }}>
      <Typography variant="code" codeSize="10" weight="regular">
        const greeting = 'Hello, World!'; // 10px
      </Typography>
      <Typography variant="code" codeSize="12" weight="regular">
        const greeting = 'Hello, World!'; // 12px
      </Typography>
      <Typography variant="code" codeSize="14" weight="regular">
        const greeting = 'Hello, World!'; // 14px
      </Typography>
      <Typography variant="code" codeSize="14" weight="medium">
        const greeting = 'Hello, World!'; // 14px medium
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Monospace code text in three sizes (10px, 12px, 14px).',
      },
    },
  },
};

export const AllWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="body" weight="light">
        Light (300) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="regular">
        Regular (400) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="medium">
        Medium (500) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="semibold">
        Semibold (600) - The quick brown fox jumps over the lazy dog
      </Typography>
      <Typography variant="body" weight="bold">
        Bold (700) - The quick brown fox jumps over the lazy dog
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All available font weights from light (300) to bold (700).',
      },
    },
  },
};

export const TextAlignment: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="paragraph" align="left">
        Left aligned text (default)
      </Typography>
      <Typography variant="paragraph" align="center">
        Center aligned text
      </Typography>
      <Typography variant="paragraph" align="right">
        Right aligned text
      </Typography>
      <Typography variant="paragraph" align="justify">
        Justified text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Text alignment options: left, center, right, justify.',
      },
    },
  },
};

export const CustomColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Typography variant="headingM" color="#108808">
        Green Heading
      </Typography>
      <Typography variant="paragraph" color="#0066cc">
        Blue paragraph text
      </Typography>
      <Typography variant="caption" color="#cc0000">
        Red caption text
      </Typography>
      <Typography variant="paragraph" color="#666666">
        Gray paragraph text
      </Typography>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Custom text colors using the color prop.',
      },
    },
  },
};

export const RealWorldExample: Story = {
  render: () => (
    <div style={{ maxWidth: '800px' }}>
      <Typography variant="headingXL" weight="semibold" style={{ marginBottom: '8px' }}>
        Welcome to Lean IDS
      </Typography>
      
      <Typography variant="caption" weight="medium" color="#666" style={{ marginBottom: '24px' }}>
        Last updated: June 19, 2026
      </Typography>
      
      <Typography variant="body" weight="regular" style={{ marginBottom: '16px' }}>
        Lean IDS is a comprehensive design system built for modern web applications. 
        It provides a complete set of components, design tokens, and guidelines to help 
        you build consistent, accessible, and beautiful user interfaces.
      </Typography>
      
      <Typography variant="headingM" weight="semibold" style={{ marginTop: '32px', marginBottom: '16px' }}>
        Key Features
      </Typography>
      
      <Typography variant="paragraph" weight="regular" style={{ marginBottom: '12px' }}>
        • Fully typed TypeScript components
      </Typography>
      <Typography variant="paragraph" weight="regular" style={{ marginBottom: '12px' }}>
        • Comprehensive design token system
      </Typography>
      <Typography variant="paragraph" weight="regular" style={{ marginBottom: '12px' }}>
        • Accessible and WCAG compliant
      </Typography>
      
      <div style={{ backgroundColor: '#f5f5f5', padding: '16px', borderRadius: '8px', marginTop: '24px' }}>
        <Typography variant="code" codeSize="14" weight="regular">
          npm install @lean-ids/components
        </Typography>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Real-world example showing multiple typography variants working together.',
      },
    },
  },
};
