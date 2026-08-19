/**
 * Select Component
 * 
 * A dropdown select component with search, single/multiple selection support.
 * Reuses existing Lean IDS components: InputField, Checkbox, RadioButton, Icon, HelpingText, FieldImportance
 * Based on Figma design: node-id=3634-908
 * 
 * Enhanced with Component Maturity Checklist (7 Pillars):
 * - forwardRef support
 * - Polymorphic 'as' prop
 * - Loading and empty states
 * - Multiple className override points
 * - Comprehensive event callbacks
 * - Full keyboard navigation
 * - Design tokens (no hardcoded values)
 * - Performance optimized (memoization, debouncing, virtual scrolling)
 */

import React, { useState, useRef, useEffect, forwardRef, useId, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { InputField } from '../InputField';
import { Checkbox } from '../Checkbox';
import { RadioButton } from '../RadioButton';
import { Icon } from '../Icon';
import { HelpingText } from '../HelpingText';
import { FieldImportance } from '../FieldImportance';
import { Chip } from '../Chip';
import { SelectProps } from './Select.types';

// Lazy load react-window for virtual scrolling (optional peer dependency)
let FixedSizeList: any = null;
try {
  // @ts-ignore - dynamic require for optional peer dependency
  const reactWindow = require('react-window');
  FixedSizeList = reactWindow.FixedSizeList;
} catch (e) {
  // react-window not installed - virtualization will be disabled
}

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

const InputFieldWrapper = styled.div`
  /* InputField component handles its own background */
`;

// ============================================================================
// CHIPS STYLED COMPONENTS
// ============================================================================

// Container for inline chips (inside input field)
const InlineChipsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[1]};
  flex: 1;
  flex-wrap: wrap; /* Allow chips to wrap to multiple lines */
  min-width: 0; /* Important for flex overflow */
  min-height: 1.5rem; /* Ensure minimum height for placeholder */
`;

// Container for below chips
const BelowChipsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]};
  border: ${({ theme }) => theme.borderWidth[1]} solid ${({ theme }) => theme.colors.palette.neutral[300]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  margin-top: ${({ theme }) => theme.spacing[1]};
  background: ${({ theme }) => theme.colors.palette.neutral[50]};
  max-height: 7.5rem; /* 120px - ~3 rows of chips */
  overflow-y: auto;
`;

// Standalone input wrapper for inline chips mode (matches InputWrapper but with correct background logic)
const InputWithChipsWrapper = styled.div<{ $disabled?: boolean; $error?: boolean; $isOpen?: boolean; $filled?: boolean; $size?: 'xsmall' | 'small' | 'default' | 'large' }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: ${({ theme }) => theme.spacing[1]};
  padding: ${({ theme }) => theme.spacing[2]};
  border-width: 1px;
  border-style: solid;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  transition: all 0.2s ease-in-out;
  
  /* Dynamic height for wrapping chips */
  height: auto;
  min-height: 2.5rem; /* 40px minimum */
  
  /* Background: gray-50 when empty, white when filled */
  background-color: ${({ theme, $disabled, $filled }) => {
    if ($disabled) {
      return theme.colors.palette.neutral[100];
    }
    if ($filled) {
      return '#FFFFFF'; // white when filled
    }
    return theme.colors.palette.neutral[200]; // gray-200 when empty (neutral[50] is white)
  }};
  
  /* Border color for different states */
  border-color: ${({ theme, $error, $isOpen, $disabled }) => {
    if ($disabled) return theme.colors.palette.neutral[300];
    if ($error) return theme.colors.semantic.border.error;
    if ($isOpen) return theme.colors.semantic.focus.indicator;
    return theme.colors.palette.neutral[500];
  }};
  
  &:hover {
    border-color: ${({ theme, $disabled, $error }) => {
      if ($disabled) return theme.colors.palette.neutral[300];
      if ($error) return theme.colors.semantic.border.error;
      return theme.colors.semantic.focus.indicator;
    }};
  }
  
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
  
  ${({ $disabled }) => $disabled && `
    cursor: not-allowed;
    opacity: 0.6;
  `}
`;

// "+N More" chip (non-removable)
const MoreChip = styled.div`
  display: inline-flex;
  align-items: center;
  padding: ${({ theme }) => `${theme.spacing[1]} ${theme.spacing[2]}`};
  background: ${({ theme }) => theme.colors.palette.neutral[200]};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes[12]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.palette.neutral[700]};
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.2s ease-in-out;
  
  &:hover {
    background: ${({ theme }) => theme.colors.palette.neutral[300]};
  }
`;

// Placeholder text for inline chips
const PlaceholderText = styled.span`
  color: ${({ theme }) => theme.colors.palette.neutral[600]};
  font-size: ${({ theme }) => theme.fontSizes[14]};
  font-family: ${({ theme }) => theme.fonts.primary};
  flex: 1; /* Take available space so icon stays on right */
`;

// Icon wrapper to keep icon on the right
const TrailingIconWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0; /* Never shrink, always stay on right */
`;

// ============================================================================
// COMPONENT
// ============================================================================


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
    onSearchInput,
    onEnter,
    onEscape,
    // Performance props
    searchDebounceDelay = 300,
    enableVirtualization = false,
    itemHeight = 40,
    maxItemsBeforeWarning = 100,
    disablePerformanceWarnings = false,
    // Chips props
    showChips = false,
    chipsPosition = 'below',
    maxInlineChips = 0,
    chipsClassName,
    onChipRemove,
    onMoreChipsClick,
    ...restProps
  },
  ref
) => {
  useId();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  
  const [visibleInlineChips, setVisibleInlineChips] = useState<number>(maxInlineChips || 0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // Determine actual error state
  const hasError = error || isInvalid;
  
  // Polymorphic component
  const Container = as || 'div';

  // ============================================================================
  // PERFORMANCE: MEMOIZATION
  // ============================================================================
  
  // Memoize display value calculation
  const displayValue = useMemo(() => {
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
  }, [value, options, multiple]);

  // Memoize filtered options (expensive operation for large lists)
  const filteredOptions = useMemo(() => {
    if (!searchable || !searchQuery) return options;
    
    const lowerQuery = searchQuery.toLowerCase();
    return options.filter(opt =>
      opt.label.toLowerCase().includes(lowerQuery)
    );
  }, [options, searchQuery, searchable]);

  // Memoize selection handler
  const handleSelect = useCallback((optionValue: string) => {
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
  }, [disabled, multiple, value, onChange]);

  // Memoize selection check
  const isSelected = useCallback((optionValue: string) => {
    if (multiple && Array.isArray(value)) {
      return value.includes(optionValue);
    }
    return value === optionValue;
  }, [value, multiple]);

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
  
  // ============================================================================
  // PERFORMANCE: DEBOUNCED SEARCH
  // ============================================================================
  
  // Debounced search callback
  const debouncedSearchChange = useMemo(
    () => debounce((query: string) => {
      onSearchChange?.(query);
    }, searchDebounceDelay),
    [onSearchChange, searchDebounceDelay]
  );
  
  // Cleanup debounced function on unmount
  useEffect(() => {
    return () => {
      debouncedSearchChange.cancel();
    };
  }, [debouncedSearchChange]);
  
  // Handle search change
  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);           // Update UI immediately
    onSearchInput?.(query);          // Immediate callback
    debouncedSearchChange(query);    // Debounced callback
  }, [onSearchInput, debouncedSearchChange]);
  
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
  
  // ============================================================================
  // PERFORMANCE: WARNINGS
  // ============================================================================
  
  useEffect(() => {
    // @ts-ignore - process.env is available in build environment
    if (process.env.NODE_ENV === 'development' && !disablePerformanceWarnings) {
      // Warn about large datasets without virtualization
      if (options.length > maxItemsBeforeWarning && !enableVirtualization) {
        console.warn(
          `⚠️ Performance Warning: Select component has ${options.length} options.\n` +
          `Consider enabling virtualization for better performance:\n` +
          `<Select enableVirtualization={true} itemHeight={40} />\n` +
          `Note: Requires 'react-window' to be installed: npm install react-window`
        );
      }
      
      // Warn about searchable without debouncing
      if (searchable && searchDebounceDelay === 0) {
        console.warn(
          `⚠️ Performance Warning: Searchable Select should use debouncing.\n` +
          `Add searchDebounceDelay prop (default: 300ms):\n` +
          `<Select searchable searchDebounceDelay={300} />`
        );
      }
      
      // Warn if virtualization enabled but react-window not installed
      if (enableVirtualization && !FixedSizeList) {
        console.error(
          `❌ Error: Virtual scrolling enabled but 'react-window' is not installed.\n` +
          `Install it with: npm install react-window\n` +
          `Falling back to non-virtualized rendering.`
        );
      }
    }
  }, [options.length, enableVirtualization, searchable, searchDebounceDelay, maxItemsBeforeWarning, disablePerformanceWarnings]);
  
  // ============================================================================
  // CHIPS: INLINE OVERFLOW CALCULATION
  // ============================================================================
  
  // Set visible chips based on manual limit only
  useEffect(() => {
    if (!showChips || chipsPosition !== 'inline' || !multiple || !Array.isArray(value)) {
      return;
    }
    
    // Reset if no chips
    if (value.length === 0) {
      setVisibleInlineChips(0);
      return;
    }
    
    // Manual limit mode (required for inline chips)
    if (maxInlineChips > 0) {
      setVisibleInlineChips(Math.min(maxInlineChips, value.length));
    } else {
      // No limit specified - show all chips
      setVisibleInlineChips(value.length);
    }
  }, [value, showChips, chipsPosition, maxInlineChips, multiple, isOpen]);
  
  // ============================================================================
  // CHIPS: RENDER FUNCTIONS
  // ============================================================================
  
  // Render a single chip
  const renderChip = useCallback((selectedValue: string) => {
    const option = options.find(opt => opt.value === selectedValue);
    if (!option) return null;
    
    return (
      <Chip
        key={selectedValue}
        label={option.label}
        size="small"
        variant="filled"
        type="default"
        trailingIcon={<Icon name="Close" size="small" />}
        onTrailingIconClick={(e) => {
          e.stopPropagation();
          const newValues = (value as string[]).filter(v => v !== selectedValue);
          onChange?.(newValues);
          onChipRemove?.(selectedValue);
        }}
      />
    );
  }, [options, value, onChange, onChipRemove]);
  
  // Render inline chips (wrapping or with manual limit)
  const renderInlineChips = useCallback(() => {
    if (!multiple || !Array.isArray(value) || value.length === 0) {
      return <PlaceholderText>{placeholder}</PlaceholderText>;
    }
    
    // If maxInlineChips is set, show limited chips with "+N More"
    if (maxInlineChips > 0 && visibleInlineChips < value.length) {
      const visibleChips = value.slice(0, visibleInlineChips);
      const hiddenCount = value.length - visibleInlineChips;
      
      return (
        <InlineChipsWrapper>
          {visibleChips.map((val) => renderChip(val))}
          <MoreChip 
            onClick={(e) => {
              e.stopPropagation();
              onMoreChipsClick?.();
            }}
            role="button"
            aria-label={`${hiddenCount} more items selected`}
          >
            +{hiddenCount} More
          </MoreChip>
        </InlineChipsWrapper>
      );
    }
    
    // Otherwise, show all chips with wrapping
    return (
      <InlineChipsWrapper>
        {value.map((val) => renderChip(val))}
      </InlineChipsWrapper>
    );
  }, [multiple, value, placeholder, visibleInlineChips, maxInlineChips, renderChip, onMoreChipsClick]);
  
  // Render below chips (all visible, wrapping)
  const renderBelowChips = useCallback(() => {
    if (!multiple || !Array.isArray(value) || value.length === 0) {
      return null;
    }
    
    return (
      <BelowChipsContainer className={chipsClassName}>
        {value.map((val) => renderChip(val))}
      </BelowChipsContainer>
    );
  }, [multiple, value, chipsClassName, renderChip]);
  
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
      {showChips && chipsPosition === 'inline' && multiple ? (
        // Inline chips mode - custom input with chips inside
        (() => {
          const filled = !!(Array.isArray(value) && value.length > 0);
          return (
            <InputWithChipsWrapper 
              onClick={() => !disabled && (isOpen ? handleClose() : handleOpen())}
              $disabled={disabled}
              $error={hasError}
              $isOpen={isOpen}
              $filled={filled}
              $size={size}
              role="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          tabIndex={disabled ? -1 : 0}
        >
          {renderInlineChips()}
          {showTrailingIcon && (
            <TrailingIconWrapper>
              <Icon
                name={isOpen ? 'ExpandLess' : 'ExpandMore'}
                size="small"
              />
            </TrailingIconWrapper>
          )}
        </InputWithChipsWrapper>
          );
        })()
      ) : (
        // Regular input field mode
        <InputFieldWrapper>
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
        </InputFieldWrapper>
      )}

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
        ) : enableVirtualization && FixedSizeList ? (
          // ============================================================================
          // PERFORMANCE: VIRTUAL SCROLLING
          // ============================================================================
          <FixedSizeList
            height={Math.min(300, filteredOptions.length * itemHeight)}
            itemCount={filteredOptions.length}
            itemSize={itemHeight}
            width="100%"
          >
            {({ index, style }: { index: number; style: React.CSSProperties }) => {
              const option = filteredOptions[index];
              return (
                <OptionItem
                  key={option.value}
                  style={style}
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
              );
            }}
          </FixedSizeList>
        ) : (
          // Non-virtualized rendering (default)
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

      {/* Below Chips (if enabled) */}
      {showChips && chipsPosition === 'below' && renderBelowChips()}

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
