/**
 * Tooltip Component Stories
 * 
 * Universal tooltip component with two variants:
 * - default: Rectangular (for chart hovers)
 * - pointer: With triangular tip (for info icons)
 */

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import styled from 'styled-components';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Tooltip

Universal tooltip component for contextual information with default and pointer variants.

## Installation
\`\`\`bash
npm install @ajaysoni7832/lean-ids-components
\`\`\`

## Basic Usage
\`\`\`tsx
import { Tooltip } from '@ajaysoni7832/lean-ids-components';

<Tooltip content="Helpful information" variant="pointer" pointerPosition="top">
  <InfoIcon />
</Tooltip>
\`\`\`

## Features
✅ **Two Variants** - Default (rectangular) and pointer (with arrow)
✅ **Four Positions** - Top, bottom, left, right
✅ **Portal Rendering** - No clipping issues
✅ **Accessible** - ARIA attributes

## Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| content | ReactNode | required | Tooltip content |
| children | ReactNode | required | Trigger element |
| variant | 'default' \\| 'pointer' | 'default' | Tooltip style |
| pointerPosition | 'top' \\| 'bottom' \\| 'left' \\| 'right' | 'top' | Arrow position |
| show | boolean | - | Controlled visibility |

## Examples
### Info Icon Tooltip
\`\`\`tsx
<Tooltip content="More information" variant="pointer" pointerPosition="top">
  <InfoIcon />
</Tooltip>
\`\`\`

### Chart Hover
\`\`\`tsx
<Tooltip content="Value: 42" variant="default">
  <ChartBar />
</Tooltip>
\`\`\`
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'pointer'],
      description: 'Tooltip variant',
    },
    pointerPosition: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the pointer triangle (only for pointer variant)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// ============================================================================
// STYLED COMPONENTS FOR DEMO
// ============================================================================

const DemoContainer = styled.div`
  width: 700px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #F8F8F8;
  border: 1px solid #D5D5D5;
  border-radius: 8px;
  position: relative;
`;

const DemoButton = styled.button`
  padding: 12px 24px;
  background: #6222BC;
  color: white;
  border: none;
  border-radius: 6px;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #4F1B9A;
  }
`;

const InfoIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #6222BC;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #4F1B9A;
  }
`;

const ChartSegment = styled.div`
  width: 120px;
  height: 120px;
  background: #E3725F;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #D15E4A;
  }
`;

// ============================================================================
// STORIES - DEFAULT VARIANT (Rectangular)
// ============================================================================

/**
 * Default rectangular tooltip - perfect for chart hovers
 */
export const DefaultVariant: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <ChartSegment
          onMouseMove={(e) => {
            setTooltip({
              visible: true,
              x: e.clientX + 15,
              y: e.clientY - 40,
            });
          }}
          onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0 })}
        >
          Hover Me
        </ChartSegment>
        <Tooltip
          visible={tooltip.visible}
          heading="Product A"
          description="Value: $45,000 (35%)"
          x={tooltip.x}
          y={tooltip.y}
          variant="default"
        />
      </DemoContainer>
    );
  },
};

// ============================================================================
// STORIES - POINTER VARIANT (With Triangle)
// ============================================================================

/**
 * Pointer tooltip with triangle on top - for info icons
 */
export const PointerTop: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <InfoIcon
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltip((prev) => ({
              visible: !prev.visible,
              x: rect.left,
              y: rect.bottom + 10,
            }));
          }}
        >
          i
        </InfoIcon>
        <Tooltip
          visible={tooltip.visible}
          heading="This chart shows revenue distribution by product category for the selected time period"
          x={tooltip.x}
          y={tooltip.y}
          variant="pointer"
          pointerPosition="top"
        />
      </DemoContainer>
    );
  },
};

/**
 * Pointer tooltip with triangle on bottom
 */
export const PointerBottom: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <InfoIcon
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltip((prev) => ({
              visible: !prev.visible,
              x: rect.left + rect.width / 2 - 126.5,
              y: rect.top - 90,
            }));
          }}
        >
          i
        </InfoIcon>
        <Tooltip
          visible={tooltip.visible}
          heading="Click the info icon to toggle this tooltip"
          x={tooltip.x}
          y={tooltip.y}
          variant="pointer"
          pointerPosition="bottom"
        />
      </DemoContainer>
    );
  },
};

/**
 * Pointer tooltip with triangle on left
 */
export const PointerLeft: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <InfoIcon
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltip((prev) => ({
              visible: !prev.visible,
              x: rect.right + 10,
              y: rect.top + rect.height / 2 - 40,
            }));
          }}
        >
          i
        </InfoIcon>
        <Tooltip
          visible={tooltip.visible}
          heading="Tooltip with pointer on the left side"
          x={tooltip.x}
          y={tooltip.y}
          variant="pointer"
          pointerPosition="left"
        />
      </DemoContainer>
    );
  },
};

/**
 * Pointer tooltip with triangle on right
 */
export const PointerRight: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <InfoIcon
          onClick={(e) => {
            e.stopPropagation();
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltip((prev) => ({
              visible: !prev.visible,
              x: rect.left - 263,
              y: rect.top + rect.height / 2 - 40,
            }));
          }}
        >
          i
        </InfoIcon>
        <Tooltip
          visible={tooltip.visible}
          heading="Tooltip with pointer on the right side"
          x={tooltip.x}
          y={tooltip.y}
          variant="pointer"
          pointerPosition="right"
        />
      </DemoContainer>
    );
  },
};

// ============================================================================
// COMPARISON STORIES
// ============================================================================

/**
 * Side-by-side comparison of both variants
 */
export const VariantComparison: Story = {
  render: () => {
    const [defaultTooltip, setDefaultTooltip] = useState({ visible: false, x: 0, y: 0 });
    const [pointerTooltip, setPointerTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <div style={{ display: 'flex', gap: '100px', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '16px', fontFamily: 'Elevance Sans', fontSize: '14px', color: '#222' }}>
              Default (Hover)
            </p>
            <ChartSegment
              style={{ width: '100px', height: '100px' }}
              onMouseMove={(e) => {
                setDefaultTooltip({
                  visible: true,
                  x: e.clientX + 15,
                  y: e.clientY - 40,
                });
              }}
              onMouseLeave={() => setDefaultTooltip({ visible: false, x: 0, y: 0 })}
            >
              Chart
            </ChartSegment>
          </div>

          <div style={{ textAlign: 'center' }}>
            <p style={{ marginBottom: '16px', fontFamily: 'Elevance Sans', fontSize: '14px', color: '#222' }}>
              Pointer (Click)
            </p>
            <InfoIcon
              onClick={(e) => {
                e.stopPropagation();
                const rect = e.currentTarget.getBoundingClientRect();
                setPointerTooltip((prev) => ({
                  visible: !prev.visible,
                  x: rect.left,
                  y: rect.bottom + 10,
                }));
              }}
            >
              i
            </InfoIcon>
          </div>
        </div>

        <Tooltip
          visible={defaultTooltip.visible}
          heading="Chart Data"
          description="Value: $125,000"
          x={defaultTooltip.x}
          y={defaultTooltip.y}
          variant="default"
        />

        <Tooltip
          visible={pointerTooltip.visible}
          heading="This is an info tooltip with a pointer triangle"
          x={pointerTooltip.x}
          y={pointerTooltip.y}
          variant="pointer"
          pointerPosition="top"
        />
      </DemoContainer>
    );
  },
};

/**
 * Always visible example for testing positioning
 */
export const AlwaysVisible: Story = {
  args: {
    visible: true,
    heading: 'Product Revenue',
    description: 'Value: $125,450 (42%)',
    x: 300,
    y: 200,
    variant: 'default',
  },
};

/**
 * Pointer variant always visible
 */
export const PointerAlwaysVisible: Story = {
  args: {
    visible: true,
    heading: 'This chart displays revenue breakdown across different product categories',
    x: 300,
    y: 200,
    variant: 'pointer',
    pointerPosition: 'top',
  },
};
