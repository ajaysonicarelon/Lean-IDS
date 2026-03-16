/**
 * Spacing - Design System Tokens
 * 
 * This page documents all spacing tokens available in the Lean IDS design system.
 * Based on an 8px grid system for consistent spacing throughout the application.
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { spacing } from '../../../tokens/src';

const SpacingToken: React.FC<{
  name: string;
  value: string;
  description?: string;
}> = ({ name, value, description }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const pixelValue = parseInt(value);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '16px',
        border: '1px solid #e6e6e6',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.2s',
        backgroundColor: '#ffffff',
      }}
      onClick={copyToClipboard}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px' }}>
            spacing.{name}
          </div>
          <code
            style={{
              fontSize: '12px',
              color: '#6c6c6c',
              fontFamily: 'monospace',
              backgroundColor: '#f8f8f8',
              padding: '2px 6px',
              borderRadius: '4px',
            }}
          >
            {value}
          </code>
        </div>
        {copied && (
          <span style={{ fontSize: '12px', color: '#108808', fontWeight: 500 }}>
            ✓ Copied
          </span>
        )}
      </div>
      
      {description && (
        <p style={{ fontSize: '12px', color: '#909090', margin: 0 }}>{description}</p>
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
        <div
          style={{
            width: pixelValue,
            height: '32px',
            backgroundColor: '#5009b5',
            borderRadius: '4px',
            transition: 'width 0.3s',
          }}
        />
        <span style={{ fontSize: '11px', color: '#909090' }}>
          {pixelValue}px visual
        </span>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Design Tokens/Spacing',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Spacing Tokens

The Lean IDS design system uses a consistent spacing scale based on an **8px grid system**. This ensures visual rhythm and consistency across all components and layouts.

## Spacing Scale

The spacing scale ranges from \`0px\` to \`112px\`, with increments designed to provide flexibility while maintaining consistency:

- **spacing.0**: 0px - No spacing
- **spacing.1**: 4px - Minimal spacing (half unit)
- **spacing.2**: 8px - Base unit
- **spacing.3**: 16px - Small spacing (2x base)
- **spacing.4**: 24px - Medium spacing (3x base)
- **spacing.5**: 32px - Large spacing (4x base)
- **spacing.6-15**: Continues in 8px increments up to 112px

## Usage Guidelines

### When to Use Each Size

- **0-4px (0-1)**: Tight spacing within components (icon-text gaps, compact layouts)
- **8-16px (2-3)**: Standard component spacing (padding, gaps between related elements)
- **24-32px (4-5)**: Section spacing (between component groups, card padding)
- **40-64px (6-9)**: Layout spacing (between major sections, page margins)
- **72-112px (10-15)**: Large layout spacing (hero sections, major page divisions)

### Best Practices

- **Consistency**: Use the same spacing values throughout your application
- **Hierarchy**: Larger spacing indicates greater separation and importance
- **Rhythm**: Stick to the 8px grid for visual harmony
- **Responsive**: Consider adjusting spacing values for different screen sizes
- **Components**: Use smaller values (1-3) for internal component spacing
- **Layouts**: Use larger values (4-15) for page-level spacing

### Examples

\`\`\`tsx
// Component padding
<Button style={{ padding: spacing[2] }}>Click me</Button>

// Gap between elements
<Stack gap={spacing[3]}>
  <Item />
  <Item />
</Stack>

// Section margins
<Section style={{ marginBottom: spacing[6] }}>
  Content
</Section>
\`\`\`

## Click to Copy

Click any spacing token to copy its value to your clipboard.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

export const AllSpacingTokens: Story = {
  render: () => (
    <div style={{ padding: '24px', maxWidth: '1200px' }}>
      <div style={{ marginBottom: '48px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: 700, marginBottom: '8px' }}>
          Spacing Tokens
        </h1>
        <p style={{ fontSize: '16px', color: '#6c6c6c', marginBottom: '16px' }}>
          Based on 8px grid system for consistent spacing
        </p>
        <div
          style={{
            padding: '12px 16px',
            backgroundColor: '#f0f4ff',
            borderRadius: '8px',
            border: '1px solid #c1d3ff',
          }}
        >
          <p style={{ fontSize: '14px', color: '#3d5799', margin: 0 }}>
            💡 <strong>Tip:</strong> Click any token to copy its value to clipboard
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '24px',
        }}
      >
        {Object.entries(spacing).map(([key, value]) => {
          let description = '';
          const numKey = parseInt(key);
          
          if (numKey === 0) description = 'No spacing';
          else if (numKey === 1) description = 'Minimal spacing (half unit)';
          else if (numKey === 2) description = 'Base unit (8px grid)';
          else if (numKey === 3) description = 'Small spacing';
          else if (numKey === 4) description = 'Medium spacing';
          else if (numKey === 5) description = 'Large spacing';
          else if (numKey >= 6 && numKey <= 9) description = 'Layout spacing';
          else description = 'Large layout spacing';

          return (
            <SpacingToken
              key={key}
              name={key}
              value={value}
              description={description}
            />
          );
        })}
      </div>

      <div style={{ marginTop: '64px', padding: '24px', backgroundColor: '#fafafa', borderRadius: '8px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>
          Visual Scale Reference
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {Object.entries(spacing).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <span style={{ fontSize: '14px', fontWeight: 500, minWidth: '100px' }}>
                spacing.{key}
              </span>
              <div
                style={{
                  height: '24px',
                  width: value,
                  backgroundColor: '#5009b5',
                  borderRadius: '4px',
                }}
              />
              <span style={{ fontSize: '12px', color: '#6c6c6c' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
