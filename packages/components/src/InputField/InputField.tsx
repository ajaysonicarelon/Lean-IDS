/**
 * InputField Component
 * 
 * A fully accessible input field component with support for:
 * - Multiple input types (text, email, password, number, etc.)
 * - Three sizes (small, medium, large)
 * - Multiple states (default, hover, focused, disabled, error, success)
 * - Leading and trailing icons
 * - Helper text and error messages
 * - Full WCAG 2.1 AA compliance
 */

import React, { forwardRef, useId } from 'react';
import { InputFieldProps } from './InputField.types';
import {
  InputContainer,
  Label,
  InputWrapper,
  StyledInput,
  IconWrapper,
  HelperText,
} from './InputField.styles';

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      successMessage,
      type = 'text',
      size = 'medium',
      required = false,
      disabled = false,
      error = false,
      success = false,
      leadingIcon,
      trailingIcon,
      placeholder,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      fullWidth = false,
      name,
      id: providedId,
      className,
      'aria-label': ariaLabel,
      'aria-describedby': ariaDescribedBy,
      ...restProps
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = providedId || generatedId;
    const helperTextId = `${inputId}-helper-text`;
    const labelId = `${inputId}-label`;

    // Determine which message to show
    const displayMessage = errorMessage || successMessage || helperText;
    const hasError = error || !!errorMessage;
    const hasSuccess = success || !!successMessage;

    // Compute ARIA attributes
    const ariaDescribedByValue = [
      displayMessage ? helperTextId : null,
      ariaDescribedBy,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    return (
      <InputContainer $fullWidth={fullWidth} className={className}>
        {label && (
          <Label
            htmlFor={inputId}
            id={labelId}
            $required={required}
            $disabled={disabled}
          >
            {label}
          </Label>
        )}
        
        <InputWrapper
          $size={size}
          $error={hasError}
          $success={hasSuccess}
          $disabled={disabled}
          $hasLeadingIcon={!!leadingIcon}
          $hasTrailingIcon={!!trailingIcon}
        >
          {leadingIcon && (
            <IconWrapper $position="leading" $size={size}>
              {leadingIcon}
            </IconWrapper>
          )}
          
          <StyledInput
            ref={ref}
            id={inputId}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            required={required}
            aria-label={ariaLabel || (label ? undefined : placeholder)}
            aria-labelledby={label ? labelId : undefined}
            aria-describedby={ariaDescribedByValue}
            aria-invalid={hasError}
            aria-required={required}
            {...restProps}
          />
          
          {trailingIcon && (
            <IconWrapper $position="trailing" $size={size}>
              {trailingIcon}
            </IconWrapper>
          )}
        </InputWrapper>
        
        {displayMessage && (
          <HelperText
            id={helperTextId}
            $error={hasError}
            $success={hasSuccess}
            role={hasError ? 'alert' : undefined}
          >
            {displayMessage}
          </HelperText>
        )}
      </InputContainer>
    );
  }
);

InputField.displayName = 'InputField';
