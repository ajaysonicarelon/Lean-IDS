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
      as,
      label,
      helperText,
      helperTextState = 'default',
      type = 'text',
      size = 'default',
      required = false,
      disabled = false,
      readOnly = false,
      error = false,
      isLoading = false,
      isEmpty = false,
      emptyMessage = 'No data available',
      isInvalid = false,
      showLabel = true,
      showFieldImportance = false,
      fieldImportanceVariant = 'asterisk',
      showInlineText = true,
      leadingIcon,
      trailingIcon,
      placeholder,
      value,
      defaultValue,
      onChange,
      onFocus,
      onBlur,
      onAfterFocus,
      onAfterBlur,
      onClear,
      onEnter,
      onEscape,
      fullWidth = false,
      name,
      id: providedId,
      className,
      style,
      labelClassName,
      wrapperClassName,
      inputClassName,
      helperTextClassName,
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
    const [isHovered, setIsHovered] = useState(false);

    // Determine actual error state
    const hasError = error || isInvalid;
    
    // Use helperText directly
    const displayMessage = helperText;
    
    // Polymorphic component type
    const Component = as || 'input';

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
      
      // Fire onAfterFocus after transition completes (200ms)
      setTimeout(() => {
        onAfterFocus?.();
      }, 200);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
      
      // Fire onAfterBlur after transition completes (200ms)
      setTimeout(() => {
        onAfterBlur?.();
      }, 200);
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onEnter?.(e);
      } else if (e.key === 'Escape') {
        onEscape?.(e);
      }
      
      // Call original onKeyDown if provided
      restProps.onKeyDown?.(e);
    };
    
    const handleMouseEnter = () => {
      setIsHovered(true);
    };
    
    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    // Determine helper text state from prop
    const finalHelpingTextState = helperTextState;
    const helpingTextSize = size === 'large' ? 'large' : 'default';

    // Show loading state
    if (isLoading) {
      return (
        <InputContainer $fullWidth={fullWidth} className={className} style={style}>
          {showLabel && label && (
            <LabelContainer>
              <Label
                htmlFor={inputId}
                id={labelId}
                $size={size}
                $disabled={disabled}
                className={labelClassName}
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
            $error={false}
            $disabled={true}
            $readOnly={false}
            $isFocused={false}
            $filled={false}
            className={wrapperClassName}
          >
            <StyledInput
              ref={ref}
              id={inputId}
              type={type}
              placeholder="Loading..."
              disabled={true}
              value=""
              readOnly
              $size={size}
              className={inputClassName}
              aria-busy="true"
              aria-label={ariaLabel || 'Loading'}
            />
            {/* Loading spinner icon */}
            <IconWrapper $size={size}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeDasharray="9.42 9.42">
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    from="0 8 8"
                    to="360 8 8"
                    dur="1s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </IconWrapper>
          </InputWrapper>
        </InputContainer>
      );
    }
    
    // Show empty state
    if (isEmpty) {
      return (
        <InputContainer $fullWidth={fullWidth} className={className} style={style}>
          {showLabel && label && (
            <LabelContainer>
              <Label
                htmlFor={inputId}
                id={labelId}
                $size={size}
                $disabled={disabled}
                className={labelClassName}
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
            $error={false}
            $disabled={true}
            $readOnly={false}
            $isFocused={false}
            $filled={false}
            className={wrapperClassName}
          >
            <StyledInput
              ref={ref}
              id={inputId}
              type={type}
              placeholder={emptyMessage}
              disabled={true}
              value=""
              readOnly
              $size={size}
              className={inputClassName}
              aria-label={ariaLabel || emptyMessage}
            />
          </InputWrapper>
          {showInlineText && emptyMessage && (
            <HelpingText
              text={emptyMessage}
              state="default"
              size={helpingTextSize}
              showIcon={true}
              className={helperTextClassName}
            />
          )}
        </InputContainer>
      );
    }
    
    return (
      <InputContainer $fullWidth={fullWidth} className={className} style={style}>
        {showLabel && label && (
          <LabelContainer>
            <Label
              htmlFor={inputId}
              id={labelId}
              $size={size}
              $disabled={disabled}
              className={labelClassName}
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
          $readOnly={readOnly}
          $isFocused={isFocused}
          $filled={!!value}
          className={wrapperClassName}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {leadingIcon && (
            <IconWrapper $size={size}>
              {leadingIcon}
            </IconWrapper>
          )}
          
          <StyledInput
            as={Component}
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
            onKeyDown={handleKeyDown}
            disabled={disabled}
            readOnly={readOnly}
            required={required}
            aria-label={ariaLabel || (label ? undefined : placeholder)}
            aria-labelledby={label ? labelId : undefined}
            aria-describedby={ariaDescribedByValue}
            aria-invalid={hasError}
            aria-required={required}
            $size={size}
            className={inputClassName}
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
            state={finalHelpingTextState}
            size={helpingTextSize}
            showIcon={true}
            className={helperTextClassName}
          />
        )}
      </InputContainer>
    );
  }
);

InputField.displayName = 'InputField';
