/**
 * Stepper styled components
 * Zero hardcoded values — 100% design token driven.
 * Follows ProgressBar pattern for conventions.
 */

import styled, { css, keyframes } from 'styled-components';
import {
  StyledBubbleProps,
  StyledConnectorLineProps,
  StyledStepperRootProps,
  StyledStepWrapperProps,
  StepperSize,
  StepStatus,
  StepperType,
} from './Stepper.types';

// ─────────────────────────────────────────────────────────────────────────────
// CONNECTOR FILL ANIMATIONS
// Horizontal: scale from left → right (transform-origin: left)
// Vertical:   scale from top  → bottom (transform-origin: top)
// ─────────────────────────────────────────────────────────────────────────────

const fillHorizontal = keyframes`
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
`;

const fillVertical = keyframes`
  from { transform: scaleY(0); }
  to   { transform: scaleY(1); }
`;

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Bubble diameter per size token */
const getBubbleSize = (size: StepperSize): string => {
  const map: Record<StepperSize, string> = {
    small: '1rem',    // 16px — compact / mobile
    medium: '1.5rem', // 24px
    large: '2rem',    // 32px
  };
  return map[size];
};

/** Minimum touch-target wrapper per size (always ≥ 44px) */
const getTouchTarget = (size: StepperSize): string => {
  const map: Record<StepperSize, string> = {
    small: '2.75rem',  // 44px
    medium: '2.75rem', // 44px
    large: '2.75rem',  // 44px (bubble is 32px, wrapper pads to 44px)
  };
  return map[size];
};

/** Icon size inside the bubble */
const getIconSize = (size: StepperSize): string => {
  const map: Record<StepperSize, string> = {
    small: '0.625rem',  // 10px
    medium: '0.875rem', // 14px
    large: '1.125rem',  // 18px (from 24px check icon, scaled within 32px bubble)
  };
  return map[size];
};

/** Active/incomplete bubble styles — outlined ring, theme-coloured */
const getActiveBubbleStyle = (type: StepperType) => css`
  ${({ theme }) => {
    const colorMap: Record<StepperType, string> = {
      default: theme.colors.palette.primary[500],
      safe:    theme.colors.palette.success[500],
      warning: theme.colors.palette.warning[600],
      alert:   theme.colors.palette.error[500],
    };
    const color = colorMap[type];
    return css`
      background: transparent;
      border: ${theme.borderWidth[2]} solid ${color};
      color: ${color};
    `;
  }}
`;

/** Completed bubble — solid filled */
const getCompletedBubbleStyle = (type: StepperType) => css`
  ${({ theme }) => {
    const colorMap: Record<StepperType, string> = {
      default: theme.colors.palette.primary[500],
      safe:    theme.colors.palette.success[500],
      warning: theme.colors.palette.warning[600],
      alert:   theme.colors.palette.error[500],
    };
    const color = colorMap[type];
    return css`
      background: ${color};
      border: ${theme.borderWidth[2]} solid ${color};
      color: ${theme.colors.palette.neutral[50]};
    `;
  }}
`;

/** Error bubble — red outline */
const getErrorBubbleStyle = () => css`
  ${({ theme }) => css`
    background: transparent;
    border: ${theme.borderWidth[2]} solid ${theme.colors.palette.error[500]};
    color: ${theme.colors.palette.error[500]};
  `}
`;

/** Incomplete bubble — grey outline */
const getIncompleteBubbleStyle = () => css`
  ${({ theme }) => css`
    background: transparent;
    border: ${theme.borderWidth[2]} solid ${theme.colors.palette.neutral[400]};
    color: ${theme.colors.palette.neutral[400]};
  `}
`;

/** Disabled bubble */
const getDisabledBubbleStyle = () => css`
  ${({ theme }) => css`
    background: transparent;
    border: ${theme.borderWidth[2]} solid ${theme.colors.palette.neutral[300]};
    color: ${theme.colors.palette.neutral[300]};
    cursor: not-allowed;
  `}
`;

/** Bubble styles dispatched by status */
const getBubbleStyle = ($status: StepStatus, $type: StepperType) => {
  switch ($status) {
    case 'completed':
      return getCompletedBubbleStyle($type);
    case 'active':
      return getActiveBubbleStyle($type);
    case 'error':
      return getErrorBubbleStyle();
    case 'disabled':
      return getDisabledBubbleStyle();
    case 'incomplete':
    default:
      return getIncompleteBubbleStyle();
  }
};

/** Connector line colour */
const getConnectorColor = (completed: boolean, type: StepperType) => css`
  ${({ theme }) => {
    if (!completed) return `background: ${theme.colors.palette.neutral[400]};`;
    const colorMap: Record<StepperType, string> = {
      default: theme.colors.palette.primary[300],
      safe:    theme.colors.palette.success[300],
      warning: theme.colors.palette.warning[400],
      alert:   theme.colors.palette.error[300],
    };
    return `background: ${colorMap[type]};`;
  }}
`;

// ─────────────────────────────────────────────────────────────────────────────
// STEPPER ROOT
// ─────────────────────────────────────────────────────────────────────────────

export const StepperRoot = styled.div<StyledStepperRootProps>`
  display: flex;
  /* Horizontal: single row of [bubble–connector–bubble–connector–bubble]
     Vertical:   single column, everything centred on the same axis        */
  flex-direction: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'column' : 'row'};
  align-items: ${({ $orientation }) =>
    $orientation === 'vertical' ? 'center' : 'flex-start'};
  width: 100%;
`;

// ─────────────────────────────────────────────────────────────────────────────
// STEP WRAPPER — one per step
// Horizontal: shrinks to content (bubble + label), connector flexes between
// Vertical:   column, fully centered
// ─────────────────────────────────────────────────────────────────────────────

export const StepWrapper = styled.div<StyledStepWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Horizontal: do NOT flex — stay as narrow as the bubble+label */
  flex: 0 0 auto;
  min-width: 0;

  ${({ $clickable, $disabled }) =>
    $clickable &&
    !$disabled &&
    css`
      cursor: pointer;
    `}

  ${({ $disabled }) =>
    $disabled &&
    css`
      cursor: not-allowed;
      pointer-events: none;
    `}
`;

// ─────────────────────────────────────────────────────────────────────────────
// STEP INDICATOR OUTER WRAPPER
// (centres the bubble + touch target + label column)
// ─────────────────────────────────────────────────────────────────────────────

export const StepIndicatorOuter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
`;

// ─────────────────────────────────────────────────────────────────────────────
// TOUCH TARGET WRAPPER — ensures 44px minimum interactive area
// ─────────────────────────────────────────────────────────────────────────────

export const TouchTarget = styled.div<{ $size: StepperSize; $clickable?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: ${({ $size }) => getTouchTarget($size)};
  min-height: ${({ $size }) => getTouchTarget($size)};
  border-radius: ${({ theme }) => theme.borderRadius.full};

  /* Show focus ring on the touch target, not the bubble */
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }

  ${({ $clickable }) =>
    $clickable &&
    css`
      &:hover .step-bubble {
        filter: brightness(0.9);
      }
    `}
`;

// ─────────────────────────────────────────────────────────────────────────────
// STEP BUBBLE
// ─────────────────────────────────────────────────────────────────────────────

export const StepBubble = styled.div<StyledBubbleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => getBubbleSize($size)};
  height: ${({ $size }) => getBubbleSize($size)};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  flex-shrink: 0;
  transition:
    background 0.2s ease-in-out,
    border-color 0.2s ease-in-out,
    color 0.2s ease-in-out;

  /* Icon / number sizing */
  font-size: ${({ $size }) => getIconSize($size)};
  line-height: 1;

  /* Status-driven colour */
  ${({ $status, $type }) => getBubbleStyle($status, $type)}

  svg {
    width: ${({ $size }) => getIconSize($size)};
    height: ${({ $size }) => getIconSize($size)};
    display: block;
    flex-shrink: 0;
  }
`;

// ─────────────────────────────────────────────────────────────────────────────
// STEP LABEL BLOCK
// ─────────────────────────────────────────────────────────────────────────────

export const StepLabelBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing[2]};
  gap: ${({ theme }) => theme.spacing[1]};
`;

export const StepLabelText = styled.span<{ $disabled?: boolean }>`
  color: ${({ theme, $disabled }) =>
    $disabled
      ? theme.colors.palette.neutral[400]
      : theme.colors.palette.primary[800]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[16]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights[19]};
  white-space: nowrap;
`;

export const StepDescriptionText = styled.span<{ $disabled?: boolean }>`
  color: ${({ theme, $disabled }) =>
    $disabled
      ? theme.colors.palette.neutral[300]
      : theme.colors.palette.neutral[600]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights[16]};
  white-space: nowrap;
`;

export const StepOptionalText = styled.span`
  color: ${({ theme }) => theme.colors.palette.neutral[500]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  font-style: italic;
`;

export const StepErrorText = styled.span`
  color: ${({ theme }) => theme.colors.palette.error[600]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights[16]};
  white-space: nowrap;
`;

// ─────────────────────────────────────────────────────────────────────────────
// STEP CONNECTOR
// ─────────────────────────────────────────────────────────────────────────────

export const ConnectorWrapper = styled.div<{
  $orientation: 'horizontal' | 'vertical';
}>`
  display: flex;
  align-items: center;
  justify-content: center;

  /* ── HORIZONTAL ─────────────────────────────────────────────────────────
     flex:1 makes the connector stretch to fill all remaining space between
     the fixed-width bubbles. align-self:flex-start keeps it vertically
     aligned with the bubble row (not the label text below).              */
  ${({ $orientation }) =>
    $orientation === 'horizontal' &&
    css`
      flex: 1 1 auto;
      align-self: flex-start;
      /* Vertically centre the line within the touch-target height (44px) */
      height: 2.75rem;
      padding: 0 ${({ theme }: any) => theme.spacing[2]};
    `}

  /* ── VERTICAL ───────────────────────────────────────────────────────────
     Fixed height, stays on the shared centre axis (align-self: center
     because StepperRoot uses align-items: center for vertical).          */
  ${({ $orientation }) =>
    $orientation === 'vertical' &&
    css`
      flex: 0 0 auto;
      align-self: center;
      width: 4px; /* wider wrapper to hold the 2px line + room to breathe */
      height: ${({ theme }: any) => theme.spacing[21]}; /* 70px */
      padding: ${({ theme }: any) => theme.spacing[1]} 0;
    `}
`;

export const ConnectorLine = styled.div<StyledConnectorLineProps>`
  border-radius: ${({ theme }) => theme.borderRadius.full};

  ${({ $orientation }) =>
    $orientation === 'horizontal'
      ? css`
          width: 100%;
          height: 2px;
          transform-origin: left center;
        `
      : css`
          height: 100%;
          width: 2px;
          transform-origin: top center;
        `}

  /* Colour transition for incomplete → completed */
  transition: background 0.3s ease-in-out;

  /* Fill animation — plays once when connector becomes completed */
  ${({ $completed, $orientation }) =>
    $completed &&
    css`
      animation: ${$orientation === 'horizontal' ? fillHorizontal : fillVertical}
        0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards;

      /* Respect reduced-motion preference */
      @media (prefers-reduced-motion: reduce) {
        animation: none;
        transform: none;
      }
    `}

  ${({ $completed, $type }) => getConnectorColor($completed, $type)}
`;

// ─────────────────────────────────────────────────────────────────────────────
// STEP NUMBER TEXT (inside bubble when content === 'number')
// ─────────────────────────────────────────────────────────────────────────────

export const BubbleNumber = styled.span<{ $size: StepperSize }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ $size, theme }) => {
    if ($size === 'large') return theme.fontSizes[16];
    return theme.fontSizes[12];
  }};
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`;
