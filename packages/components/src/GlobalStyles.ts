/**
 * Global styles for Lean IDS
 */

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Elevance Sans Font Family */
  @font-face {
    font-family: 'Elevance Sans';
    src: url('https://fonts.cdnfonts.com/s/93849/ElevanceSans-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Elevance Sans';
    src: url('https://fonts.cdnfonts.com/s/93849/ElevanceSans-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Elevance Sans';
    src: url('https://fonts.cdnfonts.com/s/93849/ElevanceSans-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Elevance Sans';
    src: url('https://fonts.cdnfonts.com/s/93849/ElevanceSans-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Elevance Sans';
    src: url('https://fonts.cdnfonts.com/s/93849/ElevanceSans-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  /* Roboto Mono for code */
  @font-face {
    font-family: 'Roboto Mono';
    src: url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap');
    font-weight: 400 700;
    font-style: normal;
    font-display: swap;
  }

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
    color: ${({ theme }) => theme.colors.semantic.text.primary}; /* gray-900 - default for custom text */
    background-color: ${({ theme }) => theme.colors.semantic.background.primary};
    line-height: 1.5;
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
