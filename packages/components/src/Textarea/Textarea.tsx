/**
 * Textarea Component
 * 
 * A fully accessible textarea component based on Figma design system with support for:
 * - Multiple states (default, active/focused, error, disabled, filled)
 * - Leading and trailing icons
 * - Helper text and error messages
 * - Field importance indicator (Required)
 * - Resizable textarea
 * - Full WCAG 2.1 AA compliance
 */

import React, { forwardRef, useId, useState } from 'react';
import { TextareaProps } from './Textarea.types';
import {
  TextareaContainer,
  LabelContainer,
  Label,
  TextareaWrapper,
  StyledTextarea,
  IconWrapper,
  ResizeIconWrapper,
} from './Textarea.styles';
import { FieldImportance } from '../FieldImportance';
import { HelpingText } from '../HelpingText';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      errorMessage,
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
      rows = 4,
      resizable = true,
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
    
    // Check if textarea has value
    const hasValue = !!(value || defaultValue);

    // Compute ARIA attributes
    const ariaDescribedByValue = [
      displayMessage ? helperTextId : null,
      ariaDescribedBy,
    ]
      .filter(Boolean)
      .join(' ') || undefined;

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
    };

    // Determine helper text state
    const helpingTextState = hasError ? 'error' : 'default';

    return (
      <TextareaContainer $fullWidth={fullWidth} className={className}>
        {showLabel && label && (
          <LabelContainer>
            <Label
              htmlFor={inputId}
              id={labelId}
              $disabled={disabled}
            >
              {label}
            </Label>
            {showFieldImportance && (
              <FieldImportance variant={fieldImportanceVariant} />
            )}
          </LabelContainer>
        )}
        
        <TextareaWrapper
          $error={hasError}
          $disabled={disabled}
          $isFocused={isFocused}
          $hasValue={hasValue}
        >
          {leadingIcon && (
            <IconWrapper>
              {leadingIcon}
            </IconWrapper>
          )}
          
          <StyledTextarea
            ref={ref}
            id={inputId}
            name={name}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            required={required}
            rows={rows}
            aria-label={ariaLabel || (label ? undefined : placeholder)}
            aria-labelledby={label ? labelId : undefined}
            aria-describedby={ariaDescribedByValue}
            aria-invalid={hasError}
            aria-required={required}
            style={{ resize: resizable ? 'vertical' : 'none' }}
            {...restProps}
          />
          
          {trailingIcon && (
            <ResizeIconWrapper>
              {trailingIcon}
            </ResizeIconWrapper>
          )}
        </TextareaWrapper>
        
        {showInlineText && displayMessage && (
          <HelpingText
            text={displayMessage}
            state={helpingTextState}
            size="default"
            showIcon={true}
          />
        )}
      </TextareaContainer>
    );
  }
);

Textarea.displayName = 'Textarea';
