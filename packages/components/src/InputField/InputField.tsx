/**
 * InputField Component
 * 
 * A fully accessible input field component based on Figma design system with support for:
 * - Multiple input types (text, email, password, number, search, etc.)
 * - Three sizes (small, default, large)
 * - Multiple states (default, active/focused, error, disabled)
 * - Leading and trailing icons
 * - Helper text and error messages
 * - Field importance indicator (Required)
 * - Full WCAG 2.1 AA compliance
 */

import React, { forwardRef, useId, useState } from 'react';
import { InputFieldProps } from './InputField.types';
import {
  InputContainer,
  LabelContainer,
  Label,
  InputWrapper,
  StyledInput,
  IconWrapper,
} from './InputField.styles';
import { FieldImportance } from '../FieldImportance';
import { HelpingText } from '../HelpingText';

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    {
      label,
      helperText,
      errorMessage,
      type = 'text',
      size = 'default',
      required = false,
      disabled = false,
      error = false,
      showLabel = true,
      showFieldImportance = false,
      fieldImportanceVariant = 'mandatory',
      showInlineText = true,
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
    
    const [isFocused, setIsFocused] = useState(false);

    // Determine which message to show
    const displayMessage = errorMessage || helperText;
    const hasError = error || !!errorMessage;

    // Compute ARIA attributes
    const ariaDescribedByValue = [
      displayMessage ? helperTextId : null,
      ariaDescribedBy,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    // Determine helper text state
    const helpingTextState = hasError ? 'error' : 'default';
    const helpingTextSize = size === 'large' ? 'large' : 'default';

    return (
      <InputContainer $fullWidth={fullWidth} className={className}>
        {showLabel && label && (
          <LabelContainer>
            <Label
              htmlFor={inputId}
              id={labelId}
              $size={size}
              $disabled={disabled}
            >
              {label}
            </Label>
            {showFieldImportance && (
              <FieldImportance variant={fieldImportanceVariant} />
            )}
          </LabelContainer>
        )}
        
        <InputWrapper
          $size={size}
          $error={hasError}
          $disabled={disabled}
          $isFocused={isFocused}
        >
          {leadingIcon && (
            <IconWrapper $size={size}>
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
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            aria-label={ariaLabel || (label ? undefined : placeholder)}
            aria-labelledby={label ? labelId : undefined}
            aria-describedby={ariaDescribedByValue}
            aria-invalid={hasError}
            aria-required={required}
            $size={size}
            {...restProps}
          />
          
          {trailingIcon && (
            <IconWrapper $size={size}>
              {trailingIcon}
            </IconWrapper>
          )}
        </InputWrapper>
        
        {showInlineText && displayMessage && (
          <HelpingText
            text={displayMessage}
            state={helpingTextState}
            size={helpingTextSize}
            showIcon={true}
          />
        )}
      </InputContainer>
    );
  }
);

InputField.displayName = 'InputField';
