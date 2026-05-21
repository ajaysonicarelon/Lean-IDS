/**
 * Select Component
 * 
 * A dropdown select component with search, single/multiple selection support.
 * Reuses existing Lean IDS components: InputField, Checkbox, RadioButton, Icon, HelpingText, FieldImportance
 * Based on Figma design: node-id=3634-908
 */

import React, { useState, useRef, useEffect } from 'react';
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
  top: calc(100% + 4px);
  left: 0;
  right: 0;
  max-height: 300px;
  background: #ffffff;
  border: 1px solid #D5D5D5;
  border-radius: 4px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  overflow-y: auto;
  overflow-x: hidden;
  display: ${({ $isOpen }) => ($isOpen ? 'block' : 'none')};
`;

const OptionItem = styled.div<{ $selected: boolean; $disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background: ${({ $selected }) => ($selected ? '#F8F7FB' : '#ffffff')};
  opacity: ${({ $disabled }) => ($disabled ? 0.5 : 1)};
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: ${({ $selected }) => ($selected ? 500 : 400)};
  color: #222222;
  transition: background 0.2s;

  &:hover {
    background: ${({ $disabled }) => ($disabled ? '#ffffff' : '#F5F5F5')};
  }
`;

const NoResults = styled.div`
  padding: 20px;
  text-align: center;
  color: #909090;
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
`;

const SearchInputWrapper = styled.div`
  padding: 8px 8px 8px 8px;
  border-bottom: 1px solid #E5E5E5;
  background: #ffffff;
  
  /* Ensure the input field inside doesn't overflow */
  & > div {
    width: 100%;
  }
`;

const LabelContainer = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  margin-bottom: 4px;
`;

const Label = styled.label`
  font-family: 'Elevance Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
`;

// ============================================================================
// COMPONENT
// ============================================================================

export const Select: React.FC<SelectProps> = ({
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
  helperText = 'Default helping message',
  size = 'default',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const displayValue = getDisplayValue();

  return (
    <SelectWrapper ref={wrapperRef} className={className}>
      {/* Label with required indicator */}
      <LabelContainer>
        <Label>{label}</Label>
        {required && <FieldImportance variant="asterisk" style="normal" />}
      </LabelContainer>

      {/* Input Field (acts as trigger) */}
      <div onClick={() => !disabled && setIsOpen(!isOpen)}>
        <InputField
          value={displayValue}
          placeholder={placeholder}
          disabled={disabled}
          error={error}
          size={size}
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
        />
      </div>

      {/* Dropdown Options */}
      <DropdownContainer $isOpen={isOpen && !disabled}>
        {searchable && (
          <SearchInputWrapper>
            <InputField
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              size="small"
              leadingIcon={<Icon name="Search" size="small" />}
              autoFocus
            />
          </SearchInputWrapper>
        )}

        {filteredOptions.length === 0 ? (
          <NoResults>No options found</NoResults>
        ) : (
          filteredOptions.map((option) => (
            <OptionItem
              key={option.value}
              $selected={isSelected(option.value)}
              $disabled={!!option.disabled}
              onClick={() => !option.disabled && handleSelect(option.value)}
            >
              {multiple ? (
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
            state={error ? 'error' : 'default'}
            showIcon={true}
            size="default"
          />
        </div>
      )}
    </SelectWrapper>
  );
};
