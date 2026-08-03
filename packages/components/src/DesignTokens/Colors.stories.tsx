/**
 * Colors - Design System Tokens
 * 
 * This page documents all color tokens available in the Lean IDS design system.
 * Colors are organized into primary, neutral, semantic (error, warning, success, info),
 * and secondary color palettes.
 */

import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { carelonColors, elevanceColors, carelonSemanticColors, spacing, borderRadius, fontSizes, fontWeights } from '../../../tokens/src';

const ColorSwatch: React.FC<{
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

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing['3'],
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
      onClick={copyToClipboard}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <div
        style={{
          width: '100%',
          height: '80px',
          backgroundColor: value,
          borderRadius: borderRadius.md,
          border: `1px solid ${carelonSemanticColors.border.default}`,
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        }}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing['1'] }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: fontWeights.semibold, fontSize: fontSizes[14] }}>{name}</span>
          {copied && (
            <span style={{ fontSize: fontSizes[12], color: carelonSemanticColors.text.success, fontWeight: fontWeights.medium }}>
              ✓ Copied
            </span>
          )}
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
        {description && (
          <span style={{ fontSize: fontSizes[10], color: carelonSemanticColors.text.secondary }}>{description}</span>
        )}
      </div>
    </div>
  );
};

const ColorPaletteSection: React.FC<{
  title: string;
  description: string;
  colors: any;
  prefix?: string;
}> = ({ title, description, colors, prefix = '' }) => {
  return (
    <div style={{ marginBottom: spacing['17'] }}>
      <h2 style={{ fontSize: fontSizes[24], fontWeight: fontWeights.bold, marginBottom: spacing['3'] }}>{title}</h2>
      <p style={{ fontSize: fontSizes[14], color: carelonSemanticColors.text.secondary, marginBottom: spacing['10'] }}>{description}</p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          gap: spacing['10'],
        }}
      >
        {Object.entries(colors).map(([key, value]) => (
          <ColorSwatch
            key={key}
            name={prefix ? `${prefix}-${key}` : key}
            value={value as string}
          />
        ))}
      </div>
    </div>
  );
};

const meta: Meta = {
  title: 'Design Tokens/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Color Tokens

The Lean IDS design system uses a comprehensive color palette organized into several categories:

## Color Categories

### Primary Colors
The main brand colors used for primary actions, headers, and key UI elements. Available in 11 shades from lightest (50) to darkest (800).

### Neutral Colors
Grayscale colors used for text, backgrounds, borders, and other neutral UI elements. Available in 11 shades from white (50) to black (900).

### Semantic Colors
Purpose-driven colors that communicate meaning:
- **Error**: Red tones for errors, destructive actions, and critical alerts
- **Warning**: Yellow/orange tones for warnings and caution
- **Success**: Green tones for success states and positive feedback
- **Info**: Blue tones for informational messages and hints
- **Link**: Blue tones specifically for hyperlinks

### Secondary Colors
Extended color palette for data visualization, illustrations, and decorative elements:
- **Blue**: Various blue shades for charts and graphics
- **Turquoise**: Teal-cyan tones for accents
- **Teal Green**: Green-teal tones for nature/health themes
- **Terracotta**: Warm earth tones
- **Yellow**: Bright yellows for highlights
- **Pink**: Accent pink for special emphasis
- **Orange**: Warm orange for energy and attention

## Usage Guidelines

- **Click any color swatch** to copy its hex value to clipboard
- Use primary colors for main brand elements and CTAs
- Use neutral colors for text, backgrounds, and borders
- Use semantic colors to communicate status and meaning
- Use secondary colors for data visualization and decorative purposes
- Maintain sufficient contrast ratios for accessibility (WCAG 2.1 AA: 4.5:1 for text)

## Brand Variants

The design system supports two brand variants:
- **Carelon**: Purple-based primary palette
- **Elevance**: Blue-based primary palette
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

// Carelon Brand Colors
export const CarelonColors: Story = {
  render: () => (
    <div style={{ padding: spacing['10'], maxWidth: '1400px' }}>
      <div style={{ marginBottom: spacing['17'] }}>
        <h1 style={{ fontSize: fontSizes[32], fontWeight: fontWeights.bold, marginBottom: spacing['3'] }}>
          Carelon Brand Colors
        </h1>
        <p style={{ fontSize: fontSizes[16], color: carelonSemanticColors.text.secondary }}>
          Purple-based color palette for Carelon brand
        </p>
      </div>

      <ColorPaletteSection
        title="Primary Colors"
        description="Main brand colors for primary actions, headers, and key UI elements. Use these for buttons, links, and important interactive elements."
        colors={carelonColors.primary}
        prefix="primary"
      />

      <ColorPaletteSection
        title="Neutral Colors"
        description="Grayscale palette for text, backgrounds, borders, and neutral UI elements. Essential for creating hierarchy and structure."
        colors={carelonColors.neutral}
        prefix="neutral"
      />

      <ColorPaletteSection
        title="Error Colors"
        description="Red tones for error states, destructive actions, and critical alerts. Use to communicate problems or dangerous actions."
        colors={carelonColors.error}
        prefix="error"
      />

      <ColorPaletteSection
        title="Warning Colors"
        description="Yellow/orange tones for warnings and cautionary messages. Use to alert users to potential issues."
        colors={carelonColors.warning}
        prefix="warning"
      />

      <ColorPaletteSection
        title="Success Colors"
        description="Green tones for success states and positive feedback. Use to confirm successful actions."
        colors={carelonColors.success}
        prefix="success"
      />

      <ColorPaletteSection
        title="Info Colors"
        description="Blue tones for informational messages and helpful hints. Use for neutral, informative content."
        colors={carelonColors.info}
        prefix="info"
      />

      <h2 style={{ fontSize: fontSizes[28], fontWeight: fontWeights.bold, marginTop: spacing['20'], marginBottom: spacing['12'] }}>
        Secondary Colors
      </h2>
      <p style={{ fontSize: fontSizes[14], color: carelonSemanticColors.text.secondary, marginBottom: spacing['12'] }}>
        Extended palette for data visualization, illustrations, and decorative elements.
      </p>

      <ColorPaletteSection
        title="Blue"
        description="Various blue shades for charts, graphs, and secondary UI elements."
        colors={carelonColors.secondary.blue}
        prefix="secondary-blue"
      />

      <ColorPaletteSection
        title="Turquoise"
        description="Teal-cyan tones for accents and data visualization."
        colors={carelonColors.secondary.turquoise}
        prefix="secondary-turquoise"
      />

      <ColorPaletteSection
        title="Teal Green"
        description="Green-teal tones for nature, health, and wellness themes."
        colors={carelonColors.secondary.tealgreen}
        prefix="secondary-tealgreen"
      />

      <ColorPaletteSection
        title="Terracotta"
        description="Warm earth tones for warmth and approachability."
        colors={carelonColors.secondary.terracotta}
        prefix="secondary-terracotta"
      />

      <ColorPaletteSection
        title="Yellow"
        description="Bright yellows for highlights and attention."
        colors={carelonColors.secondary.yellow}
        prefix="secondary-yellow"
      />

      <ColorPaletteSection
        title="Pink"
        description="Accent pink for special emphasis."
        colors={carelonColors.secondary.pink}
        prefix="secondary-pink"
      />

      <ColorPaletteSection
        title="Orange"
        description="Warm orange for energy and attention."
        colors={carelonColors.secondary.orange}
        prefix="secondary-orange"
      />
    </div>
  ),
};

// Elevance Brand Colors
export const ElevanceColors: Story = {
  render: () => (
    <div style={{ padding: spacing['10'], maxWidth: '1400px' }}>
      <div style={{ marginBottom: spacing['17'] }}>
        <h1 style={{ fontSize: fontSizes[32], fontWeight: fontWeights.bold, marginBottom: spacing['3'] }}>
          Elevance Brand Colors
        </h1>
        <p style={{ fontSize: fontSizes[16], color: carelonSemanticColors.text.secondary }}>
          Blue-based color palette for Elevance brand
        </p>
      </div>

      <ColorPaletteSection
        title="Primary Colors"
        description="Main brand colors for primary actions, headers, and key UI elements."
        colors={elevanceColors.primary}
        prefix="primary"
      />

      <ColorPaletteSection
        title="Neutral Colors"
        description="Grayscale palette for text, backgrounds, borders, and neutral UI elements."
        colors={elevanceColors.neutral}
        prefix="neutral"
      />

      <ColorPaletteSection
        title="Error Colors"
        description="Red tones for error states, destructive actions, and critical alerts."
        colors={elevanceColors.error}
        prefix="error"
      />

      <ColorPaletteSection
        title="Warning Colors"
        description="Yellow/orange tones for warnings and cautionary messages."
        colors={elevanceColors.warning}
        prefix="warning"
      />

      <ColorPaletteSection
        title="Success Colors"
        description="Green tones for success states and positive feedback."
        colors={elevanceColors.success}
        prefix="success"
      />

      <ColorPaletteSection
        title="Info Colors"
        description="Blue tones for informational messages and helpful hints."
        colors={elevanceColors.info}
        prefix="info"
      />

      <h2 style={{ fontSize: fontSizes[28], fontWeight: fontWeights.bold, marginTop: spacing['20'], marginBottom: spacing['12'] }}>
        Secondary Colors
      </h2>

      <ColorPaletteSection
        title="Blue"
        description="Various blue shades for charts, graphs, and secondary UI elements."
        colors={elevanceColors.secondary.blue}
        prefix="secondary-blue"
      />

      <ColorPaletteSection
        title="Turquoise"
        description="Teal-cyan tones for accents and data visualization."
        colors={elevanceColors.secondary.turquoise}
        prefix="secondary-turquoise"
      />

      <ColorPaletteSection
        title="Teal Green"
        description="Green-teal tones for nature, health, and wellness themes."
        colors={elevanceColors.secondary.tealgreen}
        prefix="secondary-tealgreen"
      />

      <ColorPaletteSection
        title="Terracotta"
        description="Warm earth tones for warmth and approachability."
        colors={elevanceColors.secondary.terracotta}
        prefix="secondary-terracotta"
      />

      <ColorPaletteSection
        title="Yellow"
        description="Bright yellows for highlights and attention."
        colors={elevanceColors.secondary.yellow}
        prefix="secondary-yellow"
      />

      <ColorPaletteSection
        title="Pink"
        description="Accent pink for special emphasis."
        colors={elevanceColors.secondary.pink}
        prefix="secondary-pink"
      />

      <ColorPaletteSection
        title="Orange"
        description="Warm orange for energy and attention."
        colors={elevanceColors.secondary.orange}
        prefix="secondary-orange"
      />
    </div>
  ),
};
