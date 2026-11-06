/**
 * Stepper component exports
 *
 * Primary component:
 *   <Stepper steps={steps} activeStep={1} orientation="horizontal" />
 *
 * Sub-components (for custom layouts):
 *   <StepIndicator status="completed" label="Profile" />
 *   <StepConnector orientation="horizontal" completed />
 */

export { Stepper } from './Stepper';
export { StepIndicator } from './StepIndicator';
export { StepConnector } from './StepConnector';

export type {
  StepperProps,
  StepIndicatorProps,
  StepConnectorProps,
  StepItem,
  StepperSize,
  StepperType,
  StepStatus,
  StepperOrientation,
  StepContent,
} from './Stepper.types';
