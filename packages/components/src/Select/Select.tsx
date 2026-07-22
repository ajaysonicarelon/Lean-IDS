/**
 * Select Component
 * 
 * A dropdown select component with search, single/multiple selection support.
 * Reuses existing Lean IDS components: InputField, Checkbox, RadioButton, Icon, HelpingText, FieldImportance
 * Based on Figma design: node-id=3634-908
 * 
 * Enhanced with Component Maturity Checklist:
 * - forwardRef support
 * - Polymorphic 'as' prop
 * - Loading and empty states
 * - Multiple className override points
 * - Comprehensive event callbacks
 * - Full keyboard navigation
 * - Design tokens (no hardcoded values)
 */

import React, { useState, useRef, useEffect, forwardRef, useId } from 'react';
import styled from 'styled-components';
import { InputField } from '../InputField';
import { Checkbox } from '../Checkbox';
import { RadioButton } from '../RadioButton';
import { Icon } from '../Icon';
import { HelpingText } from '../HelpingText';
import { FieldImportance } from '../FieldImportance';
import { SelectProps, SelectOption } from './Select.types';

// ============================================================================
// STYLED COMPONENTS
// ============================================================================

const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const DropdownContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: calc(100% + ${({ theme }) => theme.spacing[1]});
  left: 0;
  right: 0;
  max-height: 18.75rem; /* 300px */
  background: ${({ theme }) => theme.colors.palette.neutral[50]};
  border: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.palette.neutral[500]}; // Updated from 400 to 500
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  box-shadow: ${({ theme }) => theme.shadows.md};
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
  transition: opacity 0.2s ease-in-out;
`;

const OptionItem = styled.div<{ $selected: boolean; $disabled: boolean; $focused: boolean }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[2]};
  padding: ${({ theme }) => `${theme.spacing[2]} ${theme.spacing[3]}`};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background: ${({ theme, $selected, $focused }) => {
    if ($focused) return theme.colors.semantic.background.secondary;
    if ($selected) return theme.colors.palette.primary[50];
    return theme.colors.palette.neutral[50];
  }};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme, $selected }) => ($selected ? theme.fontWeights.medium : theme.fontWeights.regular)};
  color: ${({ theme }) => theme.colors.palette.neutral[900]};
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme, $disabled }) => ($disabled ? theme.colors.palette.neutral[50] : theme.colors.semantic.background.secondary)};
  }
  
  &:active {
    background: ${({ theme, $disabled }) => ($disabled ? theme.colors.palette.neutral[50] : theme.colors.semantic.background.tertiary)};
  }
`;

const NoResults = styled.div`
  padding: ${({ theme }) => theme.spacing[5]};
  text-align: center;
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
`;

const SearchInputWrapper = styled.div`
  padding: ${({ theme }) => theme.spacing[2]};
  border-bottom: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.palette.neutral[300]};
  background: ${({ theme }) => theme.colors.palette.neutral[50]};
  
  /* Ensure the input field inside doesn't overflow */
  & > div {
    width: 100%;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing[1]};
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing[1]};
`;

const Label = styled.label<{ $disabled?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme, $disabled }) => ($disabled ? theme.colors.palette.neutral[400] : theme.colors.palette.neutral[900])};
`;

// ============================================================================
// COMPONENT
// ============================================================================

const LoadingOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[5]};
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
`;

const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing[5]};
  gap: ${({ theme }) => theme.spacing[2]};
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  text-align: center;
`;

export const Select = forwardRef<HTMLDivElement, SelectProps>((
  {
    as,
    label,
    placeholder = 'Placeholder',
    options = [],
    value,
    onChange,
    multiple = false,
    searchable = false,
    showLeadingIcon = true,
    showTrailingIcon = true,
    required = false,
    disabled = false,
    error = false,
    isInvalid = false,
    isLoading = false,
    isEmpty = false,
    emptyMessage = 'No options available',
    helperText,
    helperTextState = 'default',
    size = 'default',
    className,
    style,
    labelClassName,
    dropdownClassName,
    optionClassName,
    helperTextClassName,
    showSelectionIndicator = true,
    onOpen,
    onClose,
    onAfterOpen,
    onAfterClose,
    onSearchChange,
    onEnter,
    onEscape,
    ...restProps
  },
  ref
) => {
  const generatedId = useId();
  const selectId = generatedId;
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Determine actual error state
  const hasError = error || isInvalid;
  
  // Polymorphic component
  const Container = as || 'div';

  // Get selected label(s) for display
  const getDisplayValue = () => {
    if (!value) return '';
    
    if (multiple && Array.isArray(value)) {
      if (value.length === 0) return '';
      if (value.length === 1) {
        const option = options.find(opt => opt.value === value[0]);
        return option?.label || '';
      }
      return `${value.length} selected`;
    }
    
    const option = options.find(opt => opt.value === value);
    return option?.label || '';
  };

  // Filter options based on search
  const filteredOptions = searchable && searchQuery
    ? options.filter(opt =>
        opt.label.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : options;

  // Handle option selection
  const handleSelect = (optionValue: string) => {
    if (disabled) return;

    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      const newValues = currentValues.includes(optionValue)
        ? currentValues.filter(v => v !== optionValue)
        : [...currentValues, optionValue];
      onChange?.(newValues);
    } else {
      onChange?.(optionValue);
      setIsOpen(false);
      setSearchQuery('');
    }
  };

  // Check if option is selected
  const isSelected = (optionValue: string) => {
    if (multiple && Array.isArray(value)) {
      return value.includes(optionValue);
    }
    return value === optionValue;
  };

  // Handle dropdown open/close with callbacks
  const handleOpen = () => {
    if (disabled || isLoading) return;
    setIsOpen(true);
    onOpen?.();
    
    // Fire onAfterOpen after animation (200ms)
    setTimeout(() => {
      onAfterOpen?.();
    }, 200);
  };
  
  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery('');
    setFocusedIndex(-1);
    onClose?.();
    
    // Fire onAfterClose after animation (200ms)
    setTimeout(() => {
      onAfterClose?.();
    }, 200);
  };
  
  // Handle search change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearchChange?.(query);
  };
  
  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
        onEscape?.(e as any);
      } else if (e.key === 'Enter') {
        if (focusedIndex >= 0 && focusedIndex < filteredOptions.length) {
          const option = filteredOptions[focusedIndex];
          if (!option.disabled) {
            handleSelect(option.value);
          }
        }
        onEnter?.(e as any);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setFocusedIndex(prev => 
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusedIndex(prev => (prev > 0 ? prev - 1 : 0));
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, focusedIndex, filteredOptions]);
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        handleClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayValue = getDisplayValue();
  
  // Show loading state
  if (isLoading) {
    return (
      <SelectWrapper as={Container} ref={ref || wrapperRef} className={className} style={style} {...restProps}>
        <LabelContainer>
          <Label $disabled={true} className={labelClassName}>{label}</Label>
          {required && <FieldImportance variant="asterisk" style="normal" />}
        </LabelContainer>
        <div>
          <InputField
            value="Loading..."
            placeholder={placeholder}
            disabled={true}
            size={size}
            fullWidth={true}
            trailingIcon={
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
            }
            readOnly
          />
        </div>
        {helperText && (
          <div style={{ marginTop: '4px' }}>
            <HelpingText
              text={helperText}
              state="default"
              showIcon={true}
              size="default"
              className={helperTextClassName}
            />
          </div>
        )}
      </SelectWrapper>
    );
  }
  
  // Show empty state
  if (isEmpty) {
    return (
      <SelectWrapper as={Container} ref={ref || wrapperRef} className={className} style={style} {...restProps}>
        <LabelContainer>
          <Label $disabled={true} className={labelClassName}>{label}</Label>
          {required && <FieldImportance variant="asterisk" style="normal" />}
        </LabelContainer>
        <div>
          <InputField
            value=""
            placeholder={emptyMessage}
            disabled={true}
            size={size}
            fullWidth={true}
            readOnly
          />
        </div>
        {helperText && (
          <div style={{ marginTop: '4px' }}>
            <HelpingText
              text={emptyMessage}
              state="default"
              showIcon={true}
              size="default"
              className={helperTextClassName}
            />
          </div>
        )}
      </SelectWrapper>
    );
  }

  return (
    <SelectWrapper as={Container} ref={ref || wrapperRef} className={className} style={style} {...restProps}>
      {/* Label with required indicator */}
      <LabelContainer>
        <Label $disabled={disabled} className={labelClassName}>{label}</Label>
        {required && <FieldImportance variant="asterisk" style="normal" />}
      </LabelContainer>

      {/* Input Field (acts as trigger) */}
      <div onClick={() => !disabled && (isOpen ? handleClose() : handleOpen())}>
        <InputField
          value={displayValue}
          placeholder={placeholder}
          disabled={disabled}
          error={hasError}
          size={size}
          fullWidth={true}
          leadingIcon={showLeadingIcon ? <Icon name="Search" size="small" /> : undefined}
          trailingIcon={
            showTrailingIcon ? (
              <Icon
                name={isOpen ? 'ExpandLess' : 'ExpandMore'}
                size="small"
              />
            ) : undefined
          }
          onKeyDown={(e) => e.preventDefault()}
          onFocus={(e) => e.target.blur()}
          style={{ cursor: disabled ? 'not-allowed' : 'pointer' }}
          readOnly
        />
      </div>

      {/* Dropdown Options */}
      <DropdownContainer 
        ref={dropdownRef}
        $isOpen={isOpen && !disabled} 
        className={dropdownClassName}
        role="listbox"
        aria-label={`${label} options`}
      >
        {searchable && (
          <SearchInputWrapper>
            <InputField
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              size="small"
              fullWidth={true}
              leadingIcon={<Icon name="Search" size="small" />}
              autoFocus
              aria-label="Search options"
            />
          </SearchInputWrapper>
        )}

        {filteredOptions.length === 0 ? (
          <NoResults>No options found</NoResults>
        ) : (
          filteredOptions.map((option, index) => (
            <OptionItem
              key={option.value}
              $selected={isSelected(option.value)}
              $disabled={!!option.disabled}
              $focused={index === focusedIndex}
              onClick={() => !option.disabled && handleSelect(option.value)}
              className={optionClassName}
              role="option"
              aria-selected={isSelected(option.value)}
              aria-disabled={option.disabled}
            >
              {showSelectionIndicator && (
                multiple ? (
                  <Checkbox
                    checked={isSelected(option.value)}
                    disabled={option.disabled}
                    size="default"
                    onChange={() => {}}
                  />
                ) : (
                  <RadioButton
                    checked={isSelected(option.value)}
                    disabled={option.disabled}
                    size="default"
                    onChange={() => {}}
                  />
                )
              )}
              <span>{option.label}</span>
            </OptionItem>
          ))
        )}
      </DropdownContainer>

      {/* Helper Text */}
      {helperText && (
        <div style={{ marginTop: '4px' }}>
          <HelpingText
            text={helperText}
            state={hasError ? 'error' : helperTextState}
            showIcon={true}
            size="default"
            className={helperTextClassName}
          />
        </div>
      )}
    </SelectWrapper>
  );
});

Select.displayName = 'Select';
