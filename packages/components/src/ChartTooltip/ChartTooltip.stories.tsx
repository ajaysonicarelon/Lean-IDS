/**
 * ChartTooltip Component Stories
 * 
 * Demonstrates the reusable ChartTooltip component for displaying contextual information
 * on charts and data visualizations.
 */

import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ChartTooltip } from './ChartTooltip';
import styled from 'styled-components';

const meta: Meta<typeof ChartTooltip> = {
  title: 'Data Visualization/ChartTooltip',
  component: ChartTooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A reusable tooltip component for displaying chart data and contextual information.

**Features:**
- Portal-based rendering (appears on top of all content)
- Fixed positioning (no clipping by parent containers)
- Clean, minimal design matching Figma specifications
- Supports heading and description text
- Fully accessible with ARIA attributes

**Use Cases:**
- Chart segment hover information
- Info icon tooltips
- Data point details
- Contextual help text
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChartTooltip>;

// ============================================================================
// STYLED COMPONENTS FOR DEMO
// ============================================================================

const DemoContainer = styled.div`
  width: 600px;
  height: 400px;
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
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #6222BC;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  
  &:hover {
    background: #4F1B9A;
  }
`;

const ChartSegment = styled.div`
  width: 100px;
  height: 100px;
  background: #E3725F;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #D15E4A;
  }
`;

// ============================================================================
// STORIES
// ============================================================================

/**
 * Basic tooltip with heading only
 */
export const Basic: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <DemoButton
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
        </DemoButton>
        <ChartTooltip
          visible={tooltip.visible}
          heading="Revenue"
          x={tooltip.x}
          y={tooltip.y}
        />
      </DemoContainer>
    );
  },
};

/**
 * Tooltip with heading and description
 */
export const WithDescription: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <DemoButton
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
        </DemoButton>
        <ChartTooltip
          visible={tooltip.visible}
          heading="Product A"
          description="Value: $45,000"
          x={tooltip.x}
          y={tooltip.y}
        />
      </DemoContainer>
    );
  },
};

/**
 * Info icon tooltip (click to toggle)
 */
export const InfoIconTooltip: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <InfoIcon
          onClick={(e) => {
            e.stopPropagation();
            setTooltip((prev) => ({
              visible: !prev.visible,
              x: e.clientX + 10,
              y: e.clientY - 20,
            }));
          }}
        >
          i
        </InfoIcon>
        <ChartTooltip
          visible={tooltip.visible}
          heading="This chart shows revenue distribution by product category"
          x={tooltip.x}
          y={tooltip.y}
        />
      </DemoContainer>
    );
  },
};

/**
 * Chart segment hover tooltip
 */
export const ChartSegmentHover: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <div style={{ display: 'flex', gap: '16px' }}>
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
            Segment A
          </ChartSegment>
          <ChartSegment
            style={{ background: '#1AC2C1' }}
            onMouseMove={(e) => {
              setTooltip({
                visible: true,
                x: e.clientX + 15,
                y: e.clientY - 40,
              });
            }}
            onMouseLeave={() => setTooltip({ visible: false, x: 0, y: 0 })}
          >
            Segment B
          </ChartSegment>
        </div>
        <ChartTooltip
          visible={tooltip.visible}
          heading="Market Share"
          description="35% of total revenue"
          x={tooltip.x}
          y={tooltip.y}
        />
      </DemoContainer>
    );
  },
};

/**
 * Long text tooltip
 */
export const LongText: Story = {
  render: () => {
    const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

    return (
      <DemoContainer>
        <DemoButton
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
        </DemoButton>
        <ChartTooltip
          visible={tooltip.visible}
          heading="Revenue Distribution Analysis"
          description="This chart displays the revenue breakdown across different product categories for the selected time period. Data is updated in real-time."
          x={tooltip.x}
          y={tooltip.y}
        />
      </DemoContainer>
    );
  },
};

/**
 * Always visible (for testing positioning)
 */
export const AlwaysVisible: Story = {
  args: {
    visible: true,
    heading: 'Product Revenue',
    description: 'Value: $125,450',
    x: 300,
    y: 200,
  },
};
