# JSON Resume Schema

[![GitHub Releases](https://badgen.net/github/tag/jsonresume/resume-schema)](https://github.com/jsonresume/resume-schema/releases) [![NPM Release](https://badgen.net/npm/v/resume-schema)](https://www.npmjs.com/package/resume-schema) [![Latest Status](https://github.com/jsonresume/resume-schema/workflows/Latest/badge.svg)](https://github.com/vanillawc/wc-template/actions) [![Release Status](https://github.com/jsonresume/resume-schema/workflows/Release/badge.svg)](https://github.com/vanillawc/wc-template/actions)

[![](https://dcbadge.limes.pink/api/server/GTZtn8pTXC)](https://discord.gg/GTZtn8pTXC)

Standard, Specification, Schema

## Important Note

The current working version of the schema is `v1.0.0` that is represented by the `master` branch and the files `schema.json` and `sample.resume.json`.

All PR's for the next version should be made against the `develop` branch.

This enforces that the schema package always has the official stable release of the schema.

### Homepage and Registry

If you are looking for the homepage, registry, tooling or themes, see the JSON Resume monorepo

[@jsonresume/jsonresume.org](https://github.com/jsonresume/jsonresume.org/)

### Getting started

```
npm install --save @jsonresume/schema
```

To use

```js
import resumeSchema from '@jsonresume/schema';
resumeSchema.validate(
  { basics: { name: 'Thomas' } },
  function (err, report) {
    if (err) {
      console.error('The resume was invalid:', err);
      return;
    }
    console.log('Resume validated successfully:', report);
  },
  function (err) {
    console.error('The resume was invalid:', err);
  }
);
```

Or against a full `resume.json`

```js
import fs = require('fs');
import schema from 'resume-schema';
const resumeObject = JSON.parse(fs.readFileSync('./resume.json', 'utf8'));
resumeSchema.validate(resumeObject);
```

The JSON Resume schema is available from:

```js
require('resume-schema').schema;
```

### Contribute

We encourage anyone who's interested in participating in the formation of this standard to join the discussions [here on GitHub](https://github.com/jsonresume/resume-schema/issues). Also feel free to fork this project and submit new ideas to add to the JSON Resume Schema standard. To make sure all formatting is kept in check, please install the [EditorConfig plugin](http://editorconfig.org/) for your editor of choice.

### Development checks

Development tooling uses Bun and Node.js `^22.22.2 || >=24.15.0` (Ultracite's requirement). The library's runtime requirement is unchanged.

```sh
bun install
bun run check
bun run fix
bun run test
```

Ultracite uses Oxlint and Oxfmt with the core and Vitest lint presets. The former Prettier `singleQuote: true` setting is retained in `oxfmt.config.mts`. Generated schemas are excluded from formatting; regenerate them with `bun run build`. Import and package-key sorting are deferred to keep this migration formatting-only.

Project-specific overrides retain `.spec.js` section tests, callback API coverage, strict boolean assertions, and the CommonJS compatibility shim. Temporary overrides under the progressive migration comment in `oxlint.config.mts` disable only rules in files that fail them today. New files still receive the full presets. To migrate a batch, remove one rule's temporary override, run `bun run fix`, fix remaining errors, then run `bun run check` and `bun run test`. Do not disable additional rules globally to hide new errors.

### Versioning

JSON Resume Schema adheres to Semantic Versioning 2.0.0. If there is a violation of this scheme, report it as a bug. Specifically, if a patch or minor version is released and breaks backward compatibility, that version should be immediately yanked and/or a new version should be immediately released that restores compatibility. Any change that breaks the public API will only be introduced at a major-version release. As a result of this policy, you can (and should) specify any dependency on JSON Resume Schema by using the Pessimistic Version Constraint with two digits of precision.

We use automatic semver system.

Pull requests titles should be formatted as such

```
"fix: added something" - will bump the patch version
"feat: added something" - will bump the minor version
```

`major` version bumps will be few and far between for this schema.

### Job Description Schema

A draft schema for job descriptions is available in this project as well. It is not yet finalized, but we encourage you to check it out and provide feedback. See `job-schema.json` and `sample.job.json`.

The JSON Job schema is available from:

```js
require('resume-schema').jobSchema;
```

### Other resume standards

- [HR-XML](https://schemas.liquid-technologies.com/HR-XML/2007-04-15/)
- [Europass](http://europass.cedefop.europa.eu/about-europass)
