import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '../packages/components/src/ThemeProvider';
import { GlobalStyles } from '../packages/components/src/GlobalStyles';
import { carelonTheme, elevanceTheme } from '../packages/tokens/src';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#FFFFFF',
        },
        {
          name: 'dark',
          value: '#1F2937',
        },
      ],
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'carelon',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: [
          { value: 'carelon', title: 'Carelon', icon: 'circlehollow' },
          { value: 'elevance', title: 'Elevance', icon: 'circle' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme === 'elevance' ? elevanceTheme : carelonTheme;
      
      return (
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
