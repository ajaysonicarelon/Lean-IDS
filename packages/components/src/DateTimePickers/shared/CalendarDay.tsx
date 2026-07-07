/**
 * CalendarDay Component
 * Internal component for rendering individual calendar day cells
 * Supports all states: Default, Hover, Active, Focus, Selected
 * Supports range selection: none, Start, Middle, End
 */

import React, { useState } from 'react';
import { CalendarDayProps } from './CalendarDay.types';
import { DayContainer, DayInner, DayText } from './CalendarDay.styles';

export const CalendarDay: React.FC<CalendarDayProps> = ({
  date,
  fullDate,
  dayOfWeek,
  range = 'none',
  state = 'Default',
  onClick,
  onMouseEnter,
  onMouseLeave,
  disabled = false,
  className,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick(fullDate);
    }
  };

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsHovering(true);
      if (onMouseEnter) {
        onMouseEnter(fullDate);
      }
    }
  };

  const handleMouseLeave = () => {
    if (!disabled) {
      setIsHovering(false);
      setIsActive(false);
      if (onMouseLeave) {
        onMouseLeave();
      }
    }
  };

  const handleMouseDown = () => {
    if (!disabled) {
      setIsActive(true);
    }
  };

  const handleMouseUp = () => {
    if (!disabled) {
      setIsActive(false);
    }
  };

  // Determine the current state based on props and local interaction
  const getCurrentState = () => {
    if (disabled) return 'Default';
    if (state === 'Selected') return 'Selected';
    if (state === 'Focus') return 'Focus';
    if (isActive) return 'Active';
    if (isHovering) return 'Hover';
    return 'Default';
  };

  const currentState = getCurrentState();

  return (
    <DayContainer
      $dayOfWeek={dayOfWeek}
      $range={range}
      $state={currentState}
      $disabled={disabled}
      className={className}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      role="button"
      tabIndex={disabled ? -1 : 0}
      aria-label={`${fullDate.toDateString()}`}
      aria-selected={currentState === 'Selected'}
      aria-disabled={disabled}
    >
      <DayInner $state={currentState} $range={range}>
        <DayText $dayOfWeek={dayOfWeek} $state={currentState} $range={range}>
          {date}
        </DayText>
      </DayInner>
    </DayContainer>
  );
};

CalendarDay.displayName = 'CalendarDay';
