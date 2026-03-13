/**
 * Global styles for Lean IDS
 */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.semantic.text.primary};
    background-color: ${({ theme }) => theme.colors.semantic.background.primary};
    line-height: ${({ theme }) => theme.lineHeights.normal};
  }

  /* Focus visible styles for accessibility */
  *:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.semantic.border.focus};
    outline-offset: 2px;
  }

  /* Remove default button styles */
  button {
    font-family: inherit;
    cursor: pointer;
  }

  /* Remove default input styles */
  input,
  textarea,
  select {
    font-family: inherit;
  }
`;
