/**
 * Styled-components theme type declaration
 */

import 'styled-components';
import type { Theme } from '../../tokens/src/theme';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
