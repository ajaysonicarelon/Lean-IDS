/**
 * RadioButton Component
 * 
 * A fully accessible radio button component with support for:
 * - Two sizes (default 16px, large 24px)
 * - Multiple states (unselected, selected, disabled)
 * - Optional label text
 * - Optional trailing expand icon
 * - Full WCAG 2.1 AA compliance
 */

import React, { forwardRef, useId } from 'react';
import { RadioButtonProps } from './RadioButton.types';
import {
  RadioButtonContainer,
  RadioButtonWrapper,
  HiddenRadioInput,
  StyledRadio,
  RadioInnerDot,
  RadioLabel,
  TrailingIcon,
} from './RadioButton.styles';

// Expand More icon SVG
const ExpandMoreIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 10.5L4 6.5L4.7 5.8L8 9.1L11.3 5.8L12 6.5L8 10.5Z" />
  </svg>
);

export const RadioButton = forwardRef<HTMLInputElement, RadioButtonProps>(
  (
    {
      label,
      size = 'default',
      checked = false,
      disabled = false,
      showTrailingIcon = false,
      onChange,
      className,
      name,
      value,
      id: providedId,
      ...restProps
    },
    ref
  ) => {
    const generatedId = useId();
    const radioId = providedId || generatedId;

    const handleRadioClick = () => {
      if (disabled) return;
      
      // Trigger change on the hidden input
      const input = document.getElementById(radioId) as HTMLInputElement;
      if (input) {
        input.click();
      }
    };

    const handleLabelClick = (e: React.MouseEvent) => {
      // Prevent double-firing since label already triggers input
      e.preventDefault();
      handleRadioClick();
    };

    return (
      <RadioButtonContainer className={className}>
        <RadioButtonWrapper>
          <HiddenRadioInput
            ref={ref}
            id={radioId}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            name={name}
            value={value}
            aria-checked={checked}
            $size={size}
            {...restProps}
          />
          
          <StyledRadio
            $size={size}
            $checked={checked}
            $disabled={disabled}
            onClick={handleRadioClick}
            role="presentation"
          >
            {checked && <RadioInnerDot $size={size} $disabled={disabled} />}
          </StyledRadio>
          
          {label && (
            <RadioLabel
              htmlFor={radioId}
              $size={size}
              $disabled={disabled}
              onClick={handleLabelClick}
            >
              {label}
            </RadioLabel>
          )}
        </RadioButtonWrapper>
        
        {showTrailingIcon && (
          <TrailingIcon $size={size} $disabled={disabled}>
            <ExpandMoreIcon />
          </TrailingIcon>
        )}
      </RadioButtonContainer>
    );
  }
);

RadioButton.displayName = 'RadioButton';
