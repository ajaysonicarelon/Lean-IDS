import { forwardRef } from 'react';
import { Typography } from '../Typography';
import { SegmentControllerProps } from './SegmentController.types';
import { StyledSegmentController, StyledIconSlot, StyledTypographyWrapper } from './SegmentController.styles';

export const SegmentController = forwardRef<HTMLButtonElement, SegmentControllerProps>(
  (
    {
      size = 'large',
      selected = false,
      disabled = false,
      leadIcon,
      trailIcon,
      showLeadIcon = true,
      showTrailIcon = true,
      children,
      onClick,
      onFocus,
      onBlur,
      onKeyDown,
      as,
      className,
      style,
      'aria-label': ariaLabel,
      'aria-selected': ariaSelected,
      'aria-disabled': ariaDisabled,
      role = 'tab',
      tabIndex,
      id,
      ...restProps
    },
    ref
  ) => {
    const getTypographyVariant = () => {
      if (size === 'small') {
        return 'body';
      }
      return 'headingS';
    };

    const getTypographyWeight = () => {
      return selected ? 'semibold' : 'medium';
    };

    return (
      <StyledSegmentController
        ref={ref}
        as={as}
        $size={size}
        $selected={selected}
        $disabled={disabled}
        disabled={disabled}
        onClick={onClick}
        onFocus={onFocus}
        onBlur={onBlur}
        onKeyDown={onKeyDown}
        className={className}
        style={style}
        aria-label={ariaLabel}
        aria-selected={ariaSelected ?? selected}
        aria-disabled={ariaDisabled ?? disabled}
        role={role}
        tabIndex={tabIndex ?? (selected ? 0 : -1)}
        id={id}
        {...restProps}
      >
        {showLeadIcon && leadIcon && (
          <StyledIconSlot $selected={selected} $disabled={disabled}>
            {leadIcon}
          </StyledIconSlot>
        )}
        
        <StyledTypographyWrapper $selected={selected} $disabled={disabled}>
          <Typography
            variant={getTypographyVariant()}
            weight={getTypographyWeight()}
            as="span"
          >
            {children}
          </Typography>
        </StyledTypographyWrapper>

        {showTrailIcon && trailIcon && (
          <StyledIconSlot $selected={selected} $disabled={disabled}>
            {trailIcon}
          </StyledIconSlot>
        )}
      </StyledSegmentController>
    );
  }
);

SegmentController.displayName = 'SegmentController';
