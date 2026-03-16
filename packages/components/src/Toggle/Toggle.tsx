/**
 * Toggle Component
 * 
 * A fully accessible toggle/switch component with support for:
 * - On/Off states
 * - Disabled state
 * - Optional label text
 * - Smooth animations
 * - Full WCAG 2.1 AA compliance
 */

import React, { forwardRef, useId } from 'react';
import { ToggleProps } from './Toggle.types';
import {
  ToggleContainer,
  HiddenToggleInput,
  ToggleTrack,
  ToggleThumb,
  ToggleLabel,
} from './Toggle.styles';

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      checked = false,
      disabled = false,
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
    const toggleId = providedId || generatedId;

    const handleTrackClick = () => {
      if (disabled) return;
      
      // Trigger change on the hidden input
      const input = document.getElementById(toggleId) as HTMLInputElement;
      if (input) {
        input.click();
      }
    };

    const handleLabelClick = (e: React.MouseEvent) => {
      // Prevent double-firing since label already triggers input
      e.preventDefault();
      handleTrackClick();
    };

    return (
      <ToggleContainer className={className}>
        <HiddenToggleInput
          ref={ref}
          id={toggleId}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          name={name}
          value={value}
          role="switch"
          aria-checked={checked}
          {...restProps}
        />
        
        <ToggleTrack
          $checked={checked}
          $disabled={disabled}
          onClick={handleTrackClick}
          role="presentation"
        >
          <ToggleThumb $checked={checked} $disabled={disabled} />
        </ToggleTrack>
        
        {label && (
          <ToggleLabel
            htmlFor={toggleId}
            $disabled={disabled}
            onClick={handleLabelClick}
          >
            {label}
          </ToggleLabel>
        )}
      </ToggleContainer>
    );
  }
);

Toggle.displayName = 'Toggle';
