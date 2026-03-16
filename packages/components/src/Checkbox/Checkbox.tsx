/**
 * Checkbox Component
 * 
 * A fully accessible checkbox component with support for:
 * - Two sizes (default 16px, large 24px)
 * - Multiple states (unchecked, checked, disabled)
 * - Optional label text
 * - Optional trailing info icon
 * - Full WCAG 2.1 AA compliance
 */

import React, { forwardRef, useId } from 'react';
import { CheckboxProps } from './Checkbox.types';
import {
  CheckboxContainer,
  CheckboxWrapper,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel,
  TrailingIcon,
} from './Checkbox.styles';

// Check icon SVG
const CheckIcon = () => (
  <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 3L4.5 8.5L2 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Info icon SVG
const InfoIcon = () => (
  <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 0C3.6 0 0 3.6 0 8C0 12.4 3.6 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0ZM8.8 12H7.2V7.2H8.8V12ZM8.8 5.6H7.2V4H8.8V5.6Z" />
  </svg>
);

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
    const checkboxId = providedId || generatedId;

    const handleCheckboxClick = () => {
      if (disabled) return;
      
      // Trigger change on the hidden input
      const input = document.getElementById(checkboxId) as HTMLInputElement;
      if (input) {
        input.click();
      }
    };

    const handleLabelClick = (e: React.MouseEvent) => {
      // Prevent double-firing since label already triggers input
      e.preventDefault();
      handleCheckboxClick();
    };

    return (
      <CheckboxContainer className={className}>
        <CheckboxWrapper>
          <HiddenCheckbox
            ref={ref}
            id={checkboxId}
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            name={name}
            value={value}
            aria-checked={checked}
            $size={size}
            {...restProps}
          />
          
          <StyledCheckbox
            $size={size}
            $checked={checked}
            $disabled={disabled}
            onClick={handleCheckboxClick}
            role="presentation"
          >
            {checked && <CheckIcon />}
          </StyledCheckbox>
          
          {label && (
            <CheckboxLabel
              htmlFor={checkboxId}
              $size={size}
              $disabled={disabled}
              onClick={handleLabelClick}
            >
              {label}
            </CheckboxLabel>
          )}
        </CheckboxWrapper>
        
        {showTrailingIcon && (
          <TrailingIcon $size={size} $disabled={disabled}>
            <InfoIcon />
          </TrailingIcon>
        )}
      </CheckboxContainer>
    );
  }
);

Checkbox.displayName = 'Checkbox';
