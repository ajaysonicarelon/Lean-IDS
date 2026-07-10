import type { StorybookConfig } from '@storybook/react-vite';

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
    // Ensure styled-components is properly resolved
    config.resolve = {
      ...config.resolve,
      dedupe: ['styled-components', 'react', 'react-dom'],
    };

    // Handle "use client" directives and dynamic imports
    config.build = {
      ...config.build,
      rollupOptions: {
        ...config.build?.rollupOptions,
        onwarn(warning, warn) {
          // Ignore "use client" directive warnings from @mui/icons-material and lucide-react
          if (
            warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
            warning.message.includes('"use client"') &&
            (warning.message.includes('@mui/icons-material') || 
             warning.message.includes('lucide-react'))
          ) {
            return;
          }
          // Ignore dynamic import warnings from Icon component
          if (
            warning.code === 'MISSING_EXPORT' &&
            warning.message.includes('@mui/icons-material')
          ) {
            return;
          }
          // Ignore unresolved import warnings for @mui/material
          if (
            warning.code === 'UNRESOLVED_IMPORT' &&
            (warning.message.includes('@mui/material') || 
             warning.message.includes('@mui/icons-material'))
          ) {
            return;
          }
          warn(warning);
        },
      },
    };
    
    // Configure dynamic import handling
    if (!config.optimizeDeps) {
      config.optimizeDeps = {};
    }
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
