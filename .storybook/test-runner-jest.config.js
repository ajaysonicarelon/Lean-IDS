const { getJestConfig } = require('@storybook/test-runner');

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  ...getJestConfig(),
  testTimeout: 30000,
  maxWorkers: 4,
  bail: false,
  verbose: true,
  collectCoverage: false,
  testEnvironmentOptions: {
    'jest-playwright': {
      browsers: ['chromium'],
      launchOptions: {
        headless: true,
      },
    },
  },
};
