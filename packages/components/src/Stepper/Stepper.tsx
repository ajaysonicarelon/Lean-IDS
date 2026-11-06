/**
 * Stepper Component
 * Enterprise-grade multi-step wizard indicator
 *
 * Features:
 * - Horizontal and vertical orientations
 * - 3 size variants (small, medium, large)
 * - 4 semantic type variants (default, safe, warning, alert)
 * - Icon or number content inside each bubble
 * - Per-step: label, description, optional flag, error message, custom icon, disabled
 * - Clickable steps for non-linear navigation (with onStepClick)
 * - Full keyboard navigation (Arrow keys, Home, End)
 * - ARIA: role="group", aria-current="step", aria-disabled
 * - forwardRef + polymorphic 'as' prop
 * - Multiple className override slots
 * - React.memo on sub-components for performance
 */

import { forwardRef, useCallback, KeyboardEvent, Fragment } from 'react';
import { StepperProps, StepItem, StepStatus } from './Stepper.types';
import { StepperRoot, StepWrapper } from './Stepper.styles';
import { StepIndicator } from './StepIndicator';
import { StepConnector } from './StepConnector';

// ─────────────────────────────────────────────────────────────────────────────
// HELPER: derive step status from activeStep index
// ─────────────────────────────────────────────────────────────────────────────

function deriveStatus(step: StepItem, index: number, activeStep: number): StepStatus {
  // Explicit override always wins
  if (step.status) return step.status;
  if (step.disabled) return 'disabled';
  if (index < activeStep) return 'completed';
  if (index === activeStep) return 'active';
  return 'incomplete';
}

// ─────────────────────────────────────────────────────────────────────────────
// STEPPER
// ─────────────────────────────────────────────────────────────────────────────

export const Stepper = forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      steps,
      activeStep = 0,
      orientation = 'horizontal',
      size = 'large',
      type = 'default',
      content = 'icon',
      clickable = false,
      showLabel = true,
      onStepClick,
      as,
      className,
      style,
      stepClassName,
      connectorClassName,
      'aria-label': ariaLabel = 'Progress steps',
      ...restProps
    },
    ref
  ) => {
    const Container = as || 'div';

    // ─── Keyboard navigation handler (Arrow keys, Home, End) ─────────────────
    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        if (!clickable) return;

        const currentFocused = document.activeElement;
        const stepButtons = Array.from(
          e.currentTarget.querySelectorAll<HTMLElement>('[role="button"]')
        );
        const focusedIndex = stepButtons.indexOf(currentFocused as HTMLElement);

        const isHorizontal = orientation === 'horizontal';
        const nextKey = isHorizontal ? 'ArrowRight' : 'ArrowDown';
        const prevKey = isHorizontal ? 'ArrowLeft' : 'ArrowUp';

        if (e.key === nextKey) {
          e.preventDefault();
          const next = stepButtons[focusedIndex + 1];
          next?.focus();
        } else if (e.key === prevKey) {
          e.preventDefault();
          const prev = stepButtons[focusedIndex - 1];
          prev?.focus();
        } else if (e.key === 'Home') {
          e.preventDefault();
          stepButtons[0]?.focus();
        } else if (e.key === 'End') {
          e.preventDefault();
          stepButtons[stepButtons.length - 1]?.focus();
        }
      },
      [clickable, orientation, steps]
    );

    return (
      <StepperRoot
        as={Container}
        ref={ref}
        $orientation={orientation}
        role="group"
        aria-label={ariaLabel}
        className={className}
        style={style}
        onKeyDown={handleKeyDown}
        {...restProps}
      >
        {steps.map((step, index) => {
          const status = deriveStatus(step, index, activeStep);
          const isDisabled = status === 'disabled';
          const stepKey = step.key ?? String(index);

          // Connector between steps: colour driven by whether the PREVIOUS
          // step is completed.
          const prevStatus = index > 0
            ? deriveStatus(steps[index - 1], index - 1, activeStep)
            : null;
          const connectorCompleted = prevStatus === 'completed';

          return (
            <Fragment key={stepKey}>
              {/* ── Connector is a SIBLING of StepWrapper (not a child) so it
                  sits directly in the StepperRoot flex row/column and
                  stretches correctly between fixed-width bubbles.          */}
              {index > 0 && (
                <StepConnector
                  orientation={orientation}
                  completed={connectorCompleted}
                  type={type}
                  className={connectorClassName}
                />
              )}

              <StepWrapper
                $orientation={orientation}
                $clickable={clickable && !isDisabled}
                $disabled={isDisabled}
                className={stepClassName}
              >
                {/* Step indicator bubble + label */}
                <StepIndicator
                  status={status}
                  size={size}
                  type={type}
                  content={content}
                  stepNumber={index + 1}
                  icon={step.icon}
                  label={step.label}
                  description={step.description}
                  optional={step.optional}
                  errorMessage={step.errorMessage}
                  showLabel={showLabel}
                  clickable={clickable && !isDisabled}
                  onClick={
                    clickable && !isDisabled
                      ? () => onStepClick?.(index, step)
                      : undefined
                  }
                />
              </StepWrapper>
            </Fragment>
          );
        })}
      </StepperRoot>
    );
  }
);

Stepper.displayName = 'Stepper';
