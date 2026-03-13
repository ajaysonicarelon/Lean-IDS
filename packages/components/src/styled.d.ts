/**
 * Styled-components theme type declaration
 */

import 'styled-components';
import { Theme } from '@lean-ids/tokens';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
