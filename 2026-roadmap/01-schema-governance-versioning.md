# Schema Governance & Versioning System

**Category:** Architecture
**Quarter:** Q1
**T-shirt Size:** L

## Why This Matters

The JSON Resume Schema is a public contract used by thousands of developers, resume tools, and HR platforms worldwide. Any breaking change to this schema can cascade through the entire ecosystem, breaking integrations and corrupting data. Currently, there's no formal system for managing schema evolution—versioning is ad-hoc, breaking changes aren't clearly communicated, and there's no migration path for users moving between versions.

A robust governance system establishes JSON Resume as a trustworthy, enterprise-grade standard that organizations can depend on for years. It unlocks the ability to innovate on the schema without fear of breaking the ecosystem, and positions this project as the definitive authority on professional data standards.

## Current State

- Version is tracked informally in `package.json` (currently 1.1.2)
- `CHANGELOG.md` exists but is sparse and references "WIP Version 1.0.0"
- JSON Schema `$id` hardcodes `v1.0.0` in the URL
- No formal deprecation process for fields
- No schema diff tooling to visualize changes
- No migration utilities for users to upgrade data between versions
- `meta.version` field exists but isn't validated or enforced

## Proposed Future State

A complete schema governance framework that includes:

1. **Semantic Version Registry**: Every schema version is published with a unique, immutable identifier. The registry tracks all versions, their relationships, and compatibility guarantees.

2. **Breaking Change Detection**: Automated tooling in CI that detects breaking vs. non-breaking changes and enforces proper version bumps. Breaking changes require RFC-style proposals.

3. **Migration Engine**: A programmatic way to migrate resume data between schema versions. Transformers are versioned and composable (e.g., v0.0.17 → v1.0.0 → v1.1.0).

4. **Deprecation Lifecycle**: Fields can be marked deprecated with warnings before removal. The schema self-documents deprecations with migration hints.

5. **Schema Diff API**: Developers can programmatically compare any two versions and see exactly what changed (added fields, removed fields, type changes, etc.).

## Key Deliverables

- [ ] Define and document the versioning policy (SemVer rules specific to schema changes)
- [ ] Create a `SchemaRegistry` class that tracks all published versions
- [ ] Build automated breaking-change detection in CI (compare PRs against baseline)
- [ ] Implement `migrateResume(data, fromVersion, toVersion)` function
- [ ] Add deprecation support to Zod schemas with runtime warnings
- [ ] Create `diffSchemas(v1, v2)` utility that returns structured change report
- [ ] Publish historical versions (v0.0.0 through v1.0.0) in the registry
- [ ] Add `meta.schemaVersion` validation that warns on outdated data
- [ ] Create RFC template and process for proposing breaking changes
- [ ] Update CI to auto-generate changelog entries from commit messages

## Prerequisites

None - this is foundational work that other initiatives depend on.

## Risks & Open Questions

- How do we handle the existing gap between the "v1.0.0" in JSON Schema IDs and the 1.1.2 npm version?
- Should migration be automatic (transform on parse) or explicit (user calls migrate)?
- How far back should we support migrations? v0.0.0 is from 2014.
- Who has authority to approve breaking changes? What's the governance model for the RFC process?

## Notes

- The `CHANGELOG.md` references GitHub discussions for v1.0.0 planning: https://github.com/jsonresume/resume-schema/issues/372
- Zod v4's `z.toJSONSchema()` makes it possible to generate versioned JSON schemas automatically
- Consider using `zod-to-json-schema` package options for `$id` customization
- The jsonresume.org monorepo has related tooling that may need coordinated updates
