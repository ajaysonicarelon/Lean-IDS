import { forwardRef, useCallback, useEffect, useRef, useState, Children, cloneElement, isValidElement } from 'react';
import { SegmentControllerGroupProps, SegmentControllerItemProps } from './SegmentController.types';
import { StyledSegmentControllerGroup } from './SegmentController.styles';

export const SegmentControllerGroup = forwardRef<HTMLDivElement, SegmentControllerGroupProps>(
  (
    {
      size = 'large',
      value: controlledValue,
      defaultValue,
      onChange,
      disabled = false,
      children,
      orientation = 'horizontal',
      width,
      minWidth,
      maxWidth,
      className,
      style,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledBy,
      ...restProps
    },
    ref
  ) => {
    const [selectedValue, setSelectedValue] = useState<string | number | undefined>(
      controlledValue ?? defaultValue
    );
    const groupRef = useRef<HTMLDivElement>(null);
    const isControlled = controlledValue !== undefined;
    const currentValue = isControlled ? controlledValue : selectedValue;

    useEffect(() => {
      if (isControlled) {
        setSelectedValue(controlledValue);
      }
    }, [controlledValue, isControlled]);

    const handleSelect = useCallback(
      (value: string | number) => {
        if (disabled) return;

        if (!isControlled) {
          setSelectedValue(value);
        }
        onChange?.(value);
      },
      [disabled, isControlled, onChange]
    );

    const handleKeyDown = useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (disabled) return;

        const childArray = Children.toArray(children).filter(
          (child) => isValidElement(child) && !child.props.disabled
        );

        if (childArray.length === 0) return;

        const currentIndex = childArray.findIndex(
          (child) => isValidElement(child) && child.props.value === currentValue
        );

        let nextIndex = currentIndex;
        const isHorizontal = orientation === 'horizontal';

        switch (event.key) {
          case 'ArrowRight':
            if (isHorizontal) {
              event.preventDefault();
              nextIndex = currentIndex + 1 >= childArray.length ? 0 : currentIndex + 1;
            }
            break;
          case 'ArrowLeft':
            if (isHorizontal) {
              event.preventDefault();
              nextIndex = currentIndex - 1 < 0 ? childArray.length - 1 : currentIndex - 1;
            }
            break;
          case 'ArrowDown':
            if (!isHorizontal) {
              event.preventDefault();
              nextIndex = currentIndex + 1 >= childArray.length ? 0 : currentIndex + 1;
            }
            break;
          case 'ArrowUp':
            if (!isHorizontal) {
              event.preventDefault();
              nextIndex = currentIndex - 1 < 0 ? childArray.length - 1 : currentIndex - 1;
            }
            break;
          case 'Home':
            event.preventDefault();
            nextIndex = 0;
            break;
          case 'End':
            event.preventDefault();
            nextIndex = childArray.length - 1;
            break;
          default:
            return;
        }

        const nextChild = childArray[nextIndex];
        if (isValidElement(nextChild)) {
          const nextValue = (nextChild.props as SegmentControllerItemProps).value;
          if (nextValue !== undefined) {
            handleSelect(nextValue);
          }
        }
      },
      [children, currentValue, disabled, handleSelect, orientation]
    );

    const enhancedChildren = Children.map(children, (child) => {
      if (!isValidElement<SegmentControllerItemProps>(child)) {
        return child;
      }

      const childValue = child.props.value;
      const isSelected = childValue === currentValue;

      return cloneElement(child, {
        ...child.props,
        size: child.props.size ?? size,
        selected: isSelected,
        disabled: child.props.disabled ?? disabled,
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
          child.props.onClick?.(event);
          if (childValue !== undefined) {
            handleSelect(childValue);
          }
        },
        'aria-selected': isSelected,
        tabIndex: isSelected ? 0 : -1,
      } as any);
    });

    return (
      <StyledSegmentControllerGroup
        ref={ref || groupRef}
        $orientation={orientation}
        $width={width}
        $minWidth={minWidth}
        $maxWidth={maxWidth}
        role="tablist"
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-orientation={orientation}
        onKeyDown={handleKeyDown}
        className={className}
        style={style}
        {...restProps}
      >
        {enhancedChildren}
      </StyledSegmentControllerGroup>
    );
  }
);

SegmentControllerGroup.displayName = 'SegmentControllerGroup';