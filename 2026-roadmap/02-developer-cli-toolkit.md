# Developer CLI Toolkit

**Category:** DX Improvement
**Quarter:** Q1
**T-shirt Size:** M

## Why This Matters

Currently, using JSON Resume Schema requires writing JavaScript/TypeScript code. There's no quick way to validate a resume from the command line, no way to generate sample data, and no interactive tooling for debugging validation errors. This creates unnecessary friction for developers evaluating the standard, building tools, or debugging issues.

A first-class CLI transforms the developer experience from "write code to use this library" to "just run a command." It lowers the barrier to adoption, enables shell scripting and CI/CD integration, and makes the JSON Resume standard more accessible to non-JavaScript developers.

## Current State

- The only way to validate is programmatically via `validate()` or `validateResume()` functions
- No `npx` or global CLI command available
- Sample data exists (`sample.resume.json`) but there's no generator for custom samples
- Validation errors are returned as objects, not formatted for terminal output
- No tooling for schema introspection or exploration

## Proposed Future State

A comprehensive CLI toolkit available via `npx @jsonresume/schema` or global install:

```bash
# Validate a resume file
resume-schema validate resume.json

# Validate with detailed error output
resume-schema validate resume.json --verbose

# Validate from stdin (pipe support)
cat resume.json | resume-schema validate -

# Generate sample resume (full or by section)
resume-schema generate --full > my-resume.json
resume-schema generate --section work --count 3

# Inspect schema structure
resume-schema inspect basics.location
resume-schema inspect --list-sections

# Diff two resumes
resume-schema diff old-resume.json new-resume.json

# Format/prettify resume JSON
resume-schema format resume.json --output formatted.json

# Validate job description
resume-schema validate-job job.json
```

## Key Deliverables

- [ ] Create CLI entry point using a framework like `commander` or `yargs`
- [ ] Implement `validate` command with file and stdin support
- [ ] Add colorized, human-readable error output for terminal
- [ ] Implement `generate` command with section and count options
- [ ] Create `inspect` command to explore schema structure
- [ ] Add `diff` command to compare two resume files
- [ ] Implement `format` command with prettify options
- [ ] Add `validate-job` command for job schema
- [ ] Configure package.json `bin` field for global install
- [ ] Add shell completion support (bash, zsh, fish)
- [ ] Write comprehensive CLI documentation with examples
- [ ] Add `--json` flag to all commands for machine-readable output

## Prerequisites

None - can be developed independently.

## Risks & Open Questions

- Should we bundle the CLI with the main package or create a separate `@jsonresume/cli` package?
- How do we handle large files efficiently? Streaming validation?
- Should the CLI support YAML input in addition to JSON?
- What's the minimum Node.js version for CLI features?

## Notes

- The CLI should be zero-config by default but support a `.jsonresumerc` config file
- Consider integration with `husky` for pre-commit hooks
- Look at how `ajv-cli` handles similar functionality for inspiration
- The `examples/` directory has TypeScript examples that could inform CLI design
- Consider adding a `resume-schema init` command to scaffold a new resume
