/**
 * Stepper component types
 * Enterprise-grade step-by-step wizard indicator
 *
 * Architecture: Option C — single <Stepper> orchestrator with two composable
 * primitives (<StepIndicator> and <StepConnector>) exported for custom layouts.
 */

import { HTMLAttributes, ReactNode, ElementType, CSSProperties } from 'react';

// ─────────────────────────────────────────────────────────────────────────────
// SHARED ENUMS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Visual size of the step bubble.
 * - small:  16px — compact / mobile use
 * - medium: 24px — standard inline flows
 * - large:  32px — prominent desktop steppers (default)
 */
export type StepperSize = 'small' | 'medium' | 'large';

/**
 * Semantic color type applied to the whole stepper or overridden per step.
 * - default: brand purple
 * - safe:    green  (all steps succeeded)
 * - warning: yellow (attention needed)
 * - alert:   red    (error / failure)
 */
export type StepperType = 'default' | 'safe' | 'warning' | 'alert';

/**
 * Lifecycle status of an individual step.
 * - completed:  step is finished (filled bubble + check/number)
 * - active:     currently in progress (outlined filled bubble, aria-current)
 * - incomplete: not yet reached (outlined grey bubble)
 * - error:      active step that failed validation (red outline, error message)
 * - disabled:   step is locked / not reachable yet
 */
export type StepStatus = 'completed' | 'active' | 'incomplete' | 'error' | 'disabled';

/**
 * Connector orientation — driven by the parent Stepper orientation.
 */
export type StepperOrientation = 'horizontal' | 'vertical';

/**
 * What is rendered inside the step bubble.
 * - icon:   checkmark (completed) or custom icon
 * - number: step index (1-based)
 */
export type StepContent = 'icon' | 'number';

// ─────────────────────────────────────────────────────────────────────────────
// STEP DATA MODEL
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Data shape for a single step passed to the <Stepper> `steps` prop.
 */
export interface StepItem {
  /**
   * Primary label shown below the step bubble.
   * @required
   */
  label: string;

  /**
   * Optional secondary description line below the label.
   */
  description?: string;

  /**
   * Override the step's status.
   * When omitted, Stepper derives status from `activeStep` index automatically.
   */
  status?: StepStatus;

  /**
   * Error message shown below the label when status is 'error'.
   * Has no effect unless status === 'error'.
   */
  errorMessage?: string;

  /**
   * Mark this step as optional. Renders a small "(Optional)" hint under the label.
   */
  optional?: boolean;

  /**
   * Disable this step — greys it out and blocks click navigation.
   */
  disabled?: boolean;

  /**
   * Custom icon rendered inside the bubble (overrides the default check/number).
   * Accepts any ReactNode (Material Icon component, SVG, etc.).
   * When provided, overrides the `content` prop for this step only.
   */
  icon?: ReactNode;

  /**
   * Unique key for the step (falls back to index if omitted).
   */
  key?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// STEPPER (ORCHESTRATOR)
// ─────────────────────────────────────────────────────────────────────────────

export interface StepperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * Array of step data objects.
   * @required
   */
  steps: StepItem[];

  /**
   * Zero-based index of the currently active step.
   * @default 0
   */
  activeStep?: number;

  /**
   * Orientation of the stepper.
   * @default 'horizontal'
   */
  orientation?: StepperOrientation;

  /**
   * Global size applied to all step bubbles unless overridden per step.
   * @default 'large'
   */
  size?: StepperSize;

  /**
   * Semantic type (color) applied globally.
   * @default 'default'
   */
  type?: StepperType;

  /**
   * What to render inside each bubble — icon or step number.
   * @default 'icon'
   */
  content?: StepContent;

  /**
   * Whether steps are clickable for non-linear navigation.
   * When true, `onStepClick` is called on each completed/incomplete step.
   * @default false
   */
  clickable?: boolean;

  /**
   * Hide labels below every step bubble — compact/icon-only mode.
   * Useful for tight horizontal spaces or mobile layouts.
   * @default true
   */
  showLabel?: boolean;

  /**
   * Callback fired when a user clicks a step (requires `clickable` to be true).
   */
  onStepClick?: (stepIndex: number, step: StepItem) => void;

  /**
   * Polymorphic: render the stepper root as a different element.
   * @default 'div'
   */
  as?: ElementType;

  /** Additional className for the root container. */
  className?: string;

  /** Inline style for the root container. */
  style?: CSSProperties;

  /** Additional className for each step wrapper. */
  stepClassName?: string;

  /** Additional className for each connector. */
  connectorClassName?: string;

  /**
   * ARIA label for the stepper navigation landmark.
   * @default 'Progress steps'
   */
  'aria-label'?: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP INDICATOR (PRIMITIVE)
// ─────────────────────────────────────────────────────────────────────────────

export interface StepIndicatorProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Lifecycle status of this step.
   * @default 'incomplete'
   */
  status?: StepStatus;

  /**
   * Size of the bubble.
   * @default 'large'
   */
  size?: StepperSize;

  /**
   * Semantic color type.
   * @default 'default'
   */
  type?: StepperType;

  /**
   * What to render inside the bubble.
   * @default 'icon'
   */
  content?: StepContent;

  /**
   * Step number displayed when content === 'number'.
   * @default 1
   */
  stepNumber?: number;

  /**
   * Custom icon to render inside the bubble (overrides content prop).
   */
  icon?: ReactNode;

  /**
   * Label text shown below the bubble.
   */
  label?: string;

  /**
   * Description text shown below the label.
   */
  description?: string;

  /**
   * Optional hint text "(Optional)" shown below the label.
   */
  optional?: boolean;

  /**
   * Error message shown below the label (only when status === 'error').
   */
  errorMessage?: string;

  /**
   * Hide the label below the bubble — compact/icon-only mode.
   * @default true
   */
  showLabel?: boolean;

  /**
   * Whether this step is part of a clickable stepper.
   * Adds tabIndex and keyboard handler.
   * @default false
   */
  clickable?: boolean;

  /**
   * Callback when this step is clicked or activated via keyboard.
   */
  onClick?: () => void;

  /** Additional className for the outer wrapper. */
  className?: string;

  /** Inline style for the outer wrapper. */
  style?: CSSProperties;
}

// ─────────────────────────────────────────────────────────────────────────────
// STEP CONNECTOR (PRIMITIVE)
// ─────────────────────────────────────────────────────────────────────────────

export interface StepConnectorProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the step before this connector is completed.
   * Controls the colour of the line.
   * @default false
   */
  completed?: boolean;

  /**
   * Connector orientation.
   * @default 'horizontal'
   */
  orientation?: StepperOrientation;

  /**
   * Semantic type — drives completed line colour.
   * @default 'default'
   */
  type?: StepperType;

  /** Additional className. */
  className?: string;

  /** Inline style. */
  style?: CSSProperties;
}

// ─────────────────────────────────────────────────────────────────────────────
// STYLED COMPONENT INTERNAL PROPS
// ─────────────────────────────────────────────────────────────────────────────

export interface StyledBubbleProps {
  $size: StepperSize;
  $status: StepStatus;
  $type: StepperType;
  $clickable?: boolean;
}

export interface StyledConnectorLineProps {
  $completed: boolean;
  $orientation: StepperOrientation;
  $type: StepperType;
}

export interface StyledStepperRootProps {
  $orientation: StepperOrientation;
}

export interface StyledStepWrapperProps {
  $orientation: StepperOrientation;
  $clickable?: boolean;
  $disabled?: boolean;
}
