import type { StorybookConfig } from '@storybook/react-vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../.storybook/**/*.mdx',
    '../packages/components/src/**/*.mdx',
    '../packages/components/src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  viteFinal: async (config) => {
    // Ensure proper module resolution
    config.resolve = {
      ...config.resolve,
      dedupe: ['styled-components', 'react', 'react-dom', '@mui/material'],
    };

    // Handle "use client" directives
    config.build = {
      ...config.build,
      rollupOptions: {
        ...config.build?.rollupOptions,
        onwarn(warning, warn) {
          // Ignore "use client" directive warnings
          if (
            warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
            warning.message.includes('"use client"')
          ) {
            return;
          }
          // Ignore dynamic import warnings
          if (
            warning.code === 'MISSING_EXPORT' &&
            warning.message.includes('@mui/icons-material')
          ) {
            return;
          }
          warn(warning);
        },
      },
    };
    
    // Configure optimizeDeps for Material UI
    if (!config.optimizeDeps) {
      config.optimizeDeps = {};
    }
    
    // Include Material UI core for pre-bundling
    config.optimizeDeps.include = [
      ...(config.optimizeDeps.include || []),
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled',
    ];

    return config;
  },
};

export default config;
