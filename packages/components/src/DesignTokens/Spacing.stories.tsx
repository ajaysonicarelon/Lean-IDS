/**
 * Spacing - Design System Tokens
 * 
 * This page documents all spacing tokens available in the Lean IDS design system.
 * Based on an 8px grid system for consistent spacing throughout the application.
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { spacing, carelonSemanticColors, borderRadius, fontSizes, fontWeights } from '../../../tokens/src';

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
        gap: spacing['5'],
        padding: spacing['7'],
        border: `1px solid ${carelonSemanticColors.border.default}`,
        borderRadius: borderRadius.md,
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
          <div style={{ fontWeight: fontWeights.semibold, fontSize: fontSizes[14], marginBottom: spacing['1'] }}>
            spacing.{name}
          </div>
          <code
            style={{
              fontSize: fontSizes[12],
              color: carelonSemanticColors.text.secondary,
              fontFamily: 'monospace',
              backgroundColor: carelonSemanticColors.background.secondary,
              padding: `2px ${spacing['2']}`,
              borderRadius: borderRadius.sm,
            }}
          >
            {value}
          </code>
        </div>
        {copied && (
          <span style={{ fontSize: fontSizes[12], color: carelonSemanticColors.text.success, fontWeight: fontWeights.medium }}>
            ✓ Copied
          </span>
        )}
      </div>
      
      {description && (
        <p style={{ fontSize: fontSizes[12], color: carelonSemanticColors.text.secondary, margin: 0 }}>{description}</p>
      )}
      
      <div style={{ display: 'flex', alignItems: 'center', gap: spacing['3'], marginTop: spacing['3'] }}>
        <div
          style={{
            width: pixelValue,
            height: '32px',
            backgroundColor: carelonSemanticColors.interactive.default,
            borderRadius: borderRadius.sm,
            transition: 'width 0.3s',
          }}
        />
        <span style={{ fontSize: fontSizes[10], color: carelonSemanticColors.text.secondary }}>
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
    <div style={{ padding: spacing['10'], maxWidth: '1200px' }}>
      <div style={{ marginBottom: spacing['17'] }}>
        <h1 style={{ fontSize: fontSizes[32], fontWeight: fontWeights.bold, marginBottom: spacing['3'] }}>
          Spacing Tokens
        </h1>
        <p style={{ fontSize: fontSizes[16], color: carelonSemanticColors.text.secondary, marginBottom: spacing['7'] }}>
          Based on 8px grid system for consistent spacing
        </p>
        <div
          style={{
            padding: `${spacing['5']} ${spacing['7']}`,
            backgroundColor: carelonSemanticColors.background.primary,
            borderRadius: borderRadius.md,
            border: `1px solid ${carelonSemanticColors.border.default}`,
          }}
        >
          <p style={{ fontSize: fontSizes[14], color: carelonSemanticColors.text.primary, margin: 0 }}>
            💡 <strong>Tip:</strong> Click any token to copy its value to clipboard
          </p>
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: spacing['10'],
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

      <div style={{ marginTop: spacing['20'], padding: spacing['10'], backgroundColor: carelonSemanticColors.background.secondary, borderRadius: borderRadius.md }}>
        <h2 style={{ fontSize: fontSizes[20], fontWeight: fontWeights.semibold, marginBottom: spacing['7'] }}>
          Visual Scale Reference
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing['7'] }}>
          {Object.entries(spacing).map(([key, value]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: spacing['7'] }}>
              <span style={{ fontSize: fontSizes[14], fontWeight: fontWeights.medium, minWidth: '100px' }}>
                spacing.{key}
              </span>
              <div
                style={{
                  height: '24px',
                  width: value,
                  backgroundColor: carelonSemanticColors.interactive.default,
                  borderRadius: borderRadius.sm,
                }}
              />
              <span style={{ fontSize: fontSizes[12], color: carelonSemanticColors.text.secondary }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ),
};
