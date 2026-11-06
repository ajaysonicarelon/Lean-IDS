/**
 * StepConnector — primitive connector line between two steps.
 *
 * Exported as a named sub-component for teams building fully custom stepper
 * layouts. The parent <Stepper> uses this internally.
 *
 * Usage:
 *   <StepConnector orientation="horizontal" completed type="default" />
 *   <StepConnector orientation="vertical" completed={false} />
 */

import { forwardRef } from 'react';
import { StepConnectorProps } from './Stepper.types';
import { ConnectorWrapper, ConnectorLine } from './Stepper.styles';

export const StepConnector = forwardRef<HTMLDivElement, StepConnectorProps>(
  (
    {
      completed = false,
      orientation = 'horizontal',
      type = 'default',
      className,
      style,
      ...restProps
    },
    ref
  ) => (
    <ConnectorWrapper
      ref={ref}
      $orientation={orientation}
      className={className}
      style={style}
      /* Connectors are purely decorative — hidden from AT */
      aria-hidden="true"
      {...restProps}
    >
      <ConnectorLine
        $completed={completed}
        $orientation={orientation}
        $type={type}
      />
    </ConnectorWrapper>
  )
);

StepConnector.displayName = 'StepConnector';
