/**
 * Global Focus Indicator Styles
 * 
 * Design System Standard:
 * - ALL keyboard navigation focus indicators use turquoise-400 (#1AC2C1)
 * - This includes buttons, links, breadcrumbs, checkboxes, toggles, AND input fields
 * - Both theme.colors.semantic.focus.indicator and theme.colors.semantic.focus.input use turquoise-400
 * - This ensures consistent accessibility and visual feedback across all components
 * - Use these utilities instead of custom focus styles
 * 
 * To change the focus color system-wide, update the semantic color in:
 * /packages/tokens/src/semantic-colors.ts
 */

import { css } from 'styled-components';

/**
 * Standard focus outline for keyboard navigation
 * Use this for buttons, links, breadcrumbs, and interactive elements
 * 
 * @example
 * ```tsx
 * const Button = styled.button`
 *   ${focusOutline}
 * `;
 * ```
 */
export const focusOutline = css`
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.focus.indicator};
    outline-offset: 2px;
  }
`;

/**
 * Focus border for input-like components
 * Use this for text inputs, textareas, selects, etc.
 * Uses the same turquoise-400 focus color as all other interactive elements
 * 
 * @example
 * ```tsx
 * const InputWrapper = styled.div`
 *   border: 1px solid gray;
 *   ${focusBorder}
 * `;
 * ```
 */
export const focusBorder = css`
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.semantic.focus.input};
  }
`;

/**
 * Focus ring for circular or custom-shaped elements
 * Use this for checkboxes, toggles, radio buttons, avatars, icons, etc.
 * 
 * @example
 * ```tsx
 * const Checkbox = styled.div`
 *   ${HiddenInput}:focus-visible + & {
 *     ${focusRing}
 *   }
 * `;
 * ```
 */
export const focusRing = css`
  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.semantic.focus.indicator};
  }
`;

/**
 * Remove default browser focus outline
 * Only use this if you're applying a custom focus indicator
 * NEVER use this without adding a custom focus style
 */
export const removeFocusOutline = css`
  &:focus {
    outline: none;
  }
`;

/**
 * Focus color constant
 * Use this when you need the focus color value directly
 */
export const FOCUS_COLOR = 'turquoise-400';
export const FOCUS_COLOR_HEX = '#1AC2C1';
