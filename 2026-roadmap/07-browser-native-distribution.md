# Browser-Native Distribution

**Category:** Architecture / DX Improvement
**Quarter:** Q2
**T-shirt Size:** M

## Why This Matters

The current package only works in Node.js environments (CommonJS module format). This excludes a massive use case: browser-based resume builders, validators, and editors. Every web application that wants to use JSON Resume validation must either bundle Node.js polyfills, run validation server-side, or reimplement validation logic. This fragmentation hurts adoption and creates inconsistency.

A browser-native distribution unlocks the entire frontend ecosystem. It enables real-time validation in web forms, client-side resume editors, and static sites that don't require a backend. It makes JSON Resume accessible to the JavaScript community's largest platform.

## Current State

- Package uses CommonJS (`"module": "commonjs"` in tsconfig)
- No browser bundle or ES modules distribution
- Zod itself supports browsers, but the package structure doesn't
- Users must configure bundlers to include this package
- No CDN distribution (jsDelivr, unpkg, skypack)
- The `dist/` folder contains only CommonJS files
- Tests run in Node.js only via Vitest

## Proposed Future State

Full browser compatibility with multiple distribution formats:

```html
<!-- CDN usage -->
<script type="module">
  import { validateResume, resumeSchema } from 'https://esm.sh/@jsonresume/schema';

  const result = validateResume({ basics: { name: 'John' } });
  console.log(result.valid);
</script>
```

```typescript
// ES Modules import (bundlers)
import { validateResume } from '@jsonresume/schema';

// Dynamic import
const { validateResume } = await import('@jsonresume/schema');
```

## Key Deliverables

- [ ] Add ESM build target alongside CommonJS
- [ ] Configure dual package.json exports (`import` and `require`)
- [ ] Create UMD bundle for script tag usage
- [ ] Set up CDN publishing (esm.sh, skypack, jsDelivr)
- [ ] Minimize bundle size (tree-shaking, code splitting)
- [ ] Remove any Node.js-specific dependencies
- [ ] Add browser test suite (Playwright or similar)
- [ ] Create TypeScript declaration maps for browser debugging
- [ ] Document browser usage with examples
- [ ] Set up bundle size monitoring in CI
- [ ] Create code sandbox / StackBlitz examples
- [ ] Add `"sideEffects": false` to package.json for better tree-shaking

## Prerequisites

None - can be developed independently.

## Risks & Open Questions

- Does Zod v4 have any Node.js-specific code paths we need to avoid?
- How do we handle the `jsonschema` dependency which may have Node.js code?
- What's our bundle size budget? Current Zod is ~13KB gzipped.
- Should we offer a "lite" browser bundle without full Zod?
- How do we version CDN assets?

## Notes

- The tsconfig.json currently targets ES2020 which browsers support
- Consider using `tsup` or `esbuild` for fast, optimized builds
- The `exports` field in package.json already has structure for multiple entry points
- Check that all dependencies are browser-compatible
- Vitest supports browser mode for testing
- Bundle analysis tools: `source-map-explorer`, `webpack-bundle-analyzer`
- Consider providing a separate `@jsonresume/schema/lite` for minimal browser use
