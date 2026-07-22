/**
 * TableRow Component
 * 
 * Standalone table row component that can be used independently.
 * Provides consistent styling, hover effects, selection states, and accessibility.
 * 
 * @example
 * ```tsx
 * <table>
 *   <tbody>
 *     <TableRow selected hoverable>
 *       <TableCell>Cell 1</TableCell>
 *       <TableCell>Cell 2</TableCell>
 *     </TableRow>
 *   </tbody>
 * </table>
 * ```
 */

import React, { forwardRef } from 'react';
import { TableRowProps } from './TableRow.types';
import { StyledTableRow } from './TableRow.styles';

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    {
      as,
      selected = false,
      hoverable = true,
      clickable = false,
      onClick,
      className,
      style,
      children,
      disabled = false,
      role = 'row',
      'aria-selected': ariaSelected,
      'aria-label': ariaLabel,
      ...restProps
    },
    ref
  ) => {
    const Component = as || StyledTableRow;

    const handleClick = (event: React.MouseEvent<HTMLTableRowElement>) => {
      if (!disabled && onClick) {
        onClick(event);
      }
    };

    return (
      <Component
        ref={ref}
        $selected={selected}
        $hoverable={hoverable}
        $clickable={clickable || !!onClick}
        $disabled={disabled}
        onClick={handleClick}
        className={className}
        style={style}
        role={role}
        aria-selected={ariaSelected !== undefined ? ariaSelected : selected}
        aria-label={ariaLabel}
        aria-disabled={disabled}
        {...restProps}
      >
        {children}
      </Component>
    );
  }
);

TableRow.displayName = 'TableRow';
