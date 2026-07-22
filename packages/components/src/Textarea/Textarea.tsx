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
 * 
 * Enhanced with Component Maturity Checklist:
 * - Polymorphic 'as' prop
 * - Loading and empty states
 * - Multiple className override points
 * - Comprehensive event callbacks
 * - All 8 states (default, hover, focus, active, disabled, loading, empty, error)
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
      as,
      label,
      helperText,
      errorMessage,
      required = false,
      disabled = false,
      error = false,
      isInvalid = false,
      isLoading = false,
      isEmpty = false,
      emptyMessage = 'No data available',
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
      onAfterFocus,
      onAfterBlur,
      onClear,
      onEscape,
      fullWidth = false,
      rows = 4,
      resizable = true,
      name,
      id: providedId,
      className,
      style,
      labelClassName,
      wrapperClassName,
      textareaClassName,
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
    const hasError = error || isInvalid || !!errorMessage;
    
    // Determine which message to show
    const displayMessage = errorMessage || helperText;
    
    // Polymorphic component type
    const Component = as || 'textarea';
    
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
      
      // Fire onAfterFocus after transition completes (200ms)
      setTimeout(() => {
        onAfterFocus?.();
      }, 200);
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
      
      // Fire onAfterBlur after transition completes (200ms)
      setTimeout(() => {
        onAfterBlur?.();
      }, 200);
    };
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Escape') {
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

    // Determine helper text state
    const helpingTextState = hasError ? 'error' : 'default';

    // Show loading state
    if (isLoading) {
      return (
        <TextareaContainer $fullWidth={fullWidth} className={className} style={style}>
          {showLabel && label && (
            <LabelContainer>
              <Label
                htmlFor={inputId}
                id={labelId}
                $disabled={true}
                className={labelClassName}
              >
                {label}
              </Label>
              {showFieldImportance && (
                <FieldImportance variant={fieldImportanceVariant} />
              )}
            </LabelContainer>
          )}
          <TextareaWrapper
            $error={false}
            $disabled={true}
            $isFocused={false}
            $hasValue={false}
            className={wrapperClassName}
          >
            <StyledTextarea
              ref={ref}
              id={inputId}
              placeholder="Loading..."
              disabled={true}
              value=""
              readOnly
              rows={rows}
              className={textareaClassName}
              aria-busy="true"
              aria-label={ariaLabel || 'Loading'}
              style={{ resize: 'none' }}
            />
            {/* Loading spinner icon */}
            <IconWrapper>
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
          </TextareaWrapper>
        </TextareaContainer>
      );
    }
    
    // Show empty state
    if (isEmpty) {
      return (
        <TextareaContainer $fullWidth={fullWidth} className={className} style={style}>
          {showLabel && label && (
            <LabelContainer>
              <Label
                htmlFor={inputId}
                id={labelId}
                $disabled={true}
                className={labelClassName}
              >
                {label}
              </Label>
              {showFieldImportance && (
                <FieldImportance variant={fieldImportanceVariant} />
              )}
            </LabelContainer>
          )}
          <TextareaWrapper
            $error={false}
            $disabled={true}
            $isFocused={false}
            $hasValue={false}
            className={wrapperClassName}
          >
            <StyledTextarea
              ref={ref}
              id={inputId}
              placeholder={emptyMessage}
              disabled={true}
              value=""
              readOnly
              rows={rows}
              className={textareaClassName}
              aria-label={ariaLabel || emptyMessage}
              style={{ resize: 'none' }}
            />
          </TextareaWrapper>
          {showInlineText && emptyMessage && (
            <HelpingText
              text={emptyMessage}
              state="default"
              size="default"
              showIcon={true}
              className={helperTextClassName}
            />
          )}
        </TextareaContainer>
      );
    }

    return (
      <TextareaContainer $fullWidth={fullWidth} className={className} style={style}>
        {showLabel && label && (
          <LabelContainer>
            <Label
              htmlFor={inputId}
              id={labelId}
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
        
        <TextareaWrapper
          $error={hasError}
          $disabled={disabled}
          $isFocused={isFocused}
          $hasValue={hasValue}
          className={wrapperClassName}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {leadingIcon && (
            <IconWrapper>
              {leadingIcon}
            </IconWrapper>
          )}
          
          <StyledTextarea
            as={Component}
            ref={ref}
            id={inputId}
            name={name}
            placeholder={placeholder}
            value={value}
            defaultValue={defaultValue}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            disabled={disabled}
            required={required}
            rows={rows}
            aria-label={ariaLabel || (label ? undefined : placeholder)}
            aria-labelledby={label ? labelId : undefined}
            aria-describedby={ariaDescribedByValue}
            aria-invalid={hasError}
            aria-required={required}
            className={textareaClassName}
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
            className={helperTextClassName}
          />
        )}
      </TextareaContainer>
    );
  }
);

Textarea.displayName = 'Textarea';
