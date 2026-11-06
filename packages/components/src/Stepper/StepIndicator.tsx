/**
 * StepIndicator — primitive step bubble with optional label area.
 *
 * Exported as a named sub-component for teams building custom step layouts.
 * The parent <Stepper> composes these automatically.
 *
 * Usage:
 *   <StepIndicator status="completed" size="large" type="default" label="Profile" />
 *   <StepIndicator status="active"    size="large" content="number" stepNumber={2} label="Review" />
 *   <StepIndicator status="error"     size="large" label="Payment" errorMessage="Card declined" />
 */

import { forwardRef, useCallback, KeyboardEvent } from 'react';
import CheckIcon from '@mui/icons-material/Check';

import { StepIndicatorProps } from './Stepper.types';
import {
  StepIndicatorOuter,
  TouchTarget,
  StepBubble,
  StepLabelBlock,
  StepLabelText,
  StepDescriptionText,
  StepOptionalText,
  StepErrorText,
  BubbleNumber,
} from './Stepper.styles';
import { Typography } from '../Typography';

export const StepIndicator = forwardRef<HTMLDivElement, StepIndicatorProps>(
  (
    {
      status = 'incomplete',
      size = 'large',
      type = 'default',
      content = 'icon',
      stepNumber = 1,
      icon,
      label,
      description,
      optional = false,
      errorMessage,
      showLabel = true,
      clickable = false,
      onClick,
      className,
      style,
      ...restProps
    },
    ref
  ) => {
    const isDisabled = status === 'disabled';
    const isCompleted = status === 'completed';
    const isError = status === 'error';
    const isActive = status === 'active';
    const isInteractive = clickable && !isDisabled;

    // Keyboard handler: Enter / Space activate the step
    const handleKeyDown = useCallback(
      (e: KeyboardEvent<HTMLDivElement>) => {
        if (!isInteractive) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      },
      [isInteractive, onClick]
    );

    // ─── What to render inside the bubble ────────────────────────────────────
    const renderBubbleContent = () => {
      // 1. Per-step custom icon always wins
      if (icon) return icon;

      // 2. Completed step — always show check unless custom icon
      if (isCompleted) return <CheckIcon fontSize="inherit" />;

      // 3. Error step — show check-like mark (same visual as active but red)
      if (isError) {
        return content === 'number' ? (
          <BubbleNumber $size={size}>{stepNumber}</BubbleNumber>
        ) : (
          <CheckIcon fontSize="inherit" />
        );
      }

      // 4. Number content
      if (content === 'number') {
        return <BubbleNumber $size={size}>{stepNumber}</BubbleNumber>;
      }

      // 5. Icon content — active/incomplete: bare outline bubble (Figma convention)
      return null;
    };

    // ─── ARIA attributes ──────────────────────────────────────────────────────
    const ariaLabel = label
      ? `${label}${isActive ? ' — current step' : ''}${isCompleted ? ' — completed' : ''}${isError ? ' — error' : ''}${isDisabled ? ' — disabled' : ''}`
      : undefined;

    return (
      <StepIndicatorOuter
        ref={ref}
        className={className}
        style={style}
        {...restProps}
      >
        {/* Touch target provides the 44px minimum interactive area */}
        <TouchTarget
          $size={size}
          $clickable={isInteractive}
          role={isInteractive ? 'button' : undefined}
          tabIndex={isInteractive ? 0 : undefined}
          aria-label={ariaLabel}
          aria-current={isActive ? 'step' : undefined}
          aria-disabled={isDisabled ? true : undefined}
          onClick={isInteractive ? onClick : undefined}
          onKeyDown={handleKeyDown}
        >
          <StepBubble
            className="step-bubble"
            $size={size}
            $status={status}
            $type={type}
            $clickable={isInteractive}
          >
            {renderBubbleContent()}
          </StepBubble>
        </TouchTarget>

        {/* Label area */}
        {showLabel && label && (
          <StepLabelBlock>
            {/* Primary label */}
            <StepLabelText $disabled={isDisabled}>
              <Typography variant="caption" weight="medium" as="span">
                {label}
              </Typography>
            </StepLabelText>

            {/* Optional hint */}
            {optional && (
              <StepOptionalText>
                <Typography variant="caption" as="span">
                  (Optional)
                </Typography>
              </StepOptionalText>
            )}

            {/* Description — shown when defined, no flag needed */}
            {description && (
              <StepDescriptionText $disabled={isDisabled}>
                <Typography variant="caption" as="span">
                  {description}
                </Typography>
              </StepDescriptionText>
            )}

            {/* Error message — only shown when status === 'error' */}
            {isError && errorMessage && (
              <StepErrorText role="alert">
                <Typography variant="caption" as="span">
                  {errorMessage}
                </Typography>
              </StepErrorText>
            )}
          </StepLabelBlock>
        )}
      </StepIndicatorOuter>
    );
  }
);

StepIndicator.displayName = 'StepIndicator';
