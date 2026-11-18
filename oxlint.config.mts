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
    // Progressive migration: remove one rule at a time as its files are fixed.
    {
      files: ['scripts/build-schemas.ts', 'src/validator.ts'],
      rules: {
        'func-style': 'off',
      },
    },
    {
      files: [
        'examples/javascript-usage.js',
        'examples/typescript-usage.ts',
        'test/job.spec.js',
      ],
      rules: {
        'no-inline-comments': 'off',
      },
    },
    {
      files: ['examples/typescript-usage.ts'],
      rules: {
        'no-unused-vars': 'off',
      },
    },
    {
      files: ['src/schemas/iso8601.ts'],
      rules: {
        'prefer-named-capture-group': 'off',
        'require-unicode-regexp': 'off',
      },
    },
    {
      files: ['examples/javascript-usage.js', 'examples/typescript-usage.ts'],
      rules: {
        'unicorn/no-array-for-each': 'off',
      },
    },
    {
      files: [
        'test/awards.spec.js',
        'test/basics.spec.js',
        'test/certificates.spec.js',
        'test/dates.spec.js',
        'test/education.spec.js',
        'test/interests.spec.js',
        'test/job.spec.js',
        'test/languages.spec.js',
        'test/meta.spec.js',
        'test/projects.spec.js',
        'test/publications.spec.js',
        'test/references.spec.js',
        'test/skills.spec.js',
        'test/volunteer.spec.js',
        'test/work.spec.js',
      ],
      plugins: ['vitest'],
      rules: {
        'vitest/require-top-level-describe': 'off',
      },
    },
  ],
});
