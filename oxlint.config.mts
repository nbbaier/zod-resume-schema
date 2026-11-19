import { defineConfig } from 'oxlint';
import core from 'ultracite/oxlint/core';
import vitest from 'ultracite/oxlint/vitest';

export default defineConfig({
  env: core.env,
  extends: [core, vitest],
  ignorePatterns: [
    ...core.ignorePatterns,
    '.agents/**',
    '.claude/**',
    '.cachebro/**',
  ],
  overrides: [
    {
      // Coding standards require one .spec.js file per section.
      files: ['test/*.spec.js'],
      plugins: ['vitest'],
      rules: {
        'vitest/consistent-test-filename': [
          'error',
          { pattern: '\\.spec\\.js$' },
        ],
        // Callback API coverage needs Promise wrappers; keep strict booleans.
        'promise/avoid-new': 'off',
        'promise/prefer-await-to-callbacks': 'off',
        'vitest/prefer-to-be-truthy': 'off',
        'vitest/prefer-to-be-falsy': 'off',
      },
    },
    {
      // The public callback validator API is fixed for compatibility.
      files: ['src/validator.ts'],
      rules: { 'promise/prefer-await-to-callbacks': 'off' },
    },
    {
      // The root shim and its JavaScript example intentionally use CommonJS.
      files: ['validator.js', 'examples/javascript-usage.js'],
      rules: { 'unicorn/prefer-module': 'off' },
    },
  ],
});
