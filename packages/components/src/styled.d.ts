/**
 * Styled-components theme type declaration
 */

import 'styled-components';
import type { Theme } from '@ajaysoni7832/lean-ids-tokens';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
