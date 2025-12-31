# JSON Resume Schema: 2026 Strategic Roadmap

## Executive Summary

JSON Resume has established itself as the open-source standard for structured resume data. With its recent migration to Zod-first architecture, the project has a modern, type-safe foundation. However, validation alone is table stakes—the opportunity is to become the **intelligence layer for careers**.

This roadmap envisions JSON Resume evolving from a schema specification into a comprehensive career data platform. By 2026, JSON Resume should be:

1. **The universal interchange format** - Import from any source (LinkedIn, PDF, Word), export to any destination (ATS systems, Europass, HR-XML)
2. **An intelligent matching engine** - Programmatically match resumes to jobs with explainable scoring
3. **A privacy-first data standard** - Give individuals control over their professional identity
4. **A global standard** - Localized for every major language and regional resume norm
5. **A developer-first toolkit** - CLI tools, browser support, and world-class DX

The roadmap is organized into four quarters, with foundational work front-loaded (Q1) and transformative features built throughout the year. One moonshot initiative imagines the most ambitious possible future: an AI-native career operating system.

## High-Level Themes

| Theme | Description | Initiatives |
|-------|-------------|-------------|
| **Governance & Stability** | Make the schema trustworthy for enterprise adoption | 01, 05 |
| **Developer Experience** | Lower friction for adoption and integration | 02, 07 |
| **Career Intelligence** | Transform data into insights and matching | 03, 04, 10 |
| **Interoperability** | Connect with the broader ecosystem | 06, 08 |
| **Trust & Privacy** | Handle sensitive data responsibly | 09 |
| **Moonshot** | The most ambitious vision | 00 |

## Initiative Summary

| # | Initiative | Category | Quarter | Size | Dependencies |
|---|-----------|----------|---------|------|--------------|
| 00 | [AI-Native Career Operating System](./00-moonshot.md) | Moonshot | Q4+ | XXL | All |
| 01 | [Schema Governance & Versioning](./01-schema-governance-versioning.md) | Architecture | Q1 | L | None |
| 02 | [Developer CLI Toolkit](./02-developer-cli-toolkit.md) | DX | Q1 | M | None |
| 03 | [Resume-Job Matching Engine](./03-resume-job-matching-engine.md) | Feature | Q2 | XL | 10 |
| 04 | [Resume Quality & Completeness API](./04-resume-quality-completeness-api.md) | Feature | Q1 | M | None |
| 05 | [Advanced Validation Rules](./05-advanced-validation-rules.md) | Technical | Q2 | M | None |
| 06 | [Cross-Format Conversion SDK](./06-cross-format-conversion-sdk.md) | Integration | Q2-Q3 | XL | 01 |
| 07 | [Browser-Native Distribution](./07-browser-native-distribution.md) | Architecture | Q2 | M | None |
| 08 | [I18n & Localization Framework](./08-i18n-localization-framework.md) | Feature | Q3 | L | 05 |
| 09 | [Privacy & PII Management](./09-privacy-pii-management.md) | Security | Q3 | M | None |
| 10 | [Semantic Skills Taxonomy](./10-semantic-skills-taxonomy.md) | Architecture | Q4 | L | None |

## Dependency Graph

```
                    ┌─────────────────────────────────────────────────────────┐
                    │                                                         │
                    │                   00-MOONSHOT                           │
                    │             AI-Native Career OS                         │
                    │                                                         │
                    └─────────────────────────────────────────────────────────┘
                                            ▲
                                            │ Depends on all
                    ┌───────────────────────┴───────────────────────┐
                    │                                               │
    Q4              │                10-Skills Taxonomy             │
                    │                                               │
                    └───────────────────────┬───────────────────────┘
                                            │
                    ┌───────────────────────┼───────────────────────┐
                    │                       │                       │
    Q3              │    08-I18n            │      09-Privacy       │
                    │       │               │                       │
                    └───────┼───────────────┼───────────────────────┘
                            │               │
                    ┌───────┼───────────────┼───────────────────────┐
                    │       │               │                       │
    Q2              │  05-Validation ◄──────┤    03-Matching        │
                    │       │               │        ▲              │
                    │  06-Conversion        │        │              │
                    │       │               │   Depends on 10       │
                    │  07-Browser           │                       │
                    │                       │                       │
                    └───────┼───────────────┼───────────────────────┘
                            │               │
                    ┌───────┼───────────────┼───────────────────────┐
                    │       │               │                       │
    Q1              │  01-Governance        │   04-Quality API      │
                    │  (Foundation)         │                       │
                    │                       │                       │
                    │  02-CLI Toolkit       │                       │
                    │                       │                       │
                    └───────────────────────┴───────────────────────┘
```

## Q1 Focus: Foundation & Quick Wins

**Goal**: Establish trust and improve developer experience immediately.

| Initiative | Rationale |
|------------|-----------|
| 01-Governance | Creates the foundation for all future changes. Essential for enterprise trust. |
| 02-CLI | Quick win that improves DX dramatically. Low risk, high visibility. |
| 04-Quality API | Immediate value to users. Differentiates from other schema validators. |

## Q2 Focus: Intelligence & Reach

**Goal**: Add intelligent features and expand platform reach.

| Initiative | Rationale |
|------------|-----------|
| 03-Matching | Strategic differentiator—no other schema offers resume-job matching. |
| 05-Validation | Builds on Zod foundation to add semantic correctness. |
| 06-Conversion | Unlocks adoption by removing import/export friction. |
| 07-Browser | Expands from Node.js to the entire JavaScript ecosystem. |

## Q3 Focus: Global & Trustworthy

**Goal**: Make JSON Resume work for everyone, everywhere.

| Initiative | Rationale |
|------------|-----------|
| 08-I18n | Opens up non-English markets and respects regional norms. |
| 09-Privacy | Addresses critical compliance needs and builds user trust. |

## Q4 Focus: Intelligence Foundation

**Goal**: Build the data layer for intelligent career tooling.

| Initiative | Rationale |
|------------|-----------|
| 10-Skills Taxonomy | Enables precise matching and career path recommendations. |

## Success Metrics

By end of 2026, we should see:

- **Adoption**: 2x npm weekly downloads
- **Quality**: 90%+ test coverage, zero critical security vulnerabilities
- **Community**: 50+ contributors, translations in 10+ languages
- **Ecosystem**: 10+ integrations (LinkedIn, Indeed, ATS systems)
- **DX**: <100ms validation time, <50KB browser bundle

## How to Use This Roadmap

1. **Prioritization**: Initiatives are numbered by recommended priority. Start with 01 and work down.
2. **Dependencies**: Check the dependency graph before starting an initiative.
3. **Flexibility**: Quarters are guidance, not deadlines. Adjust based on capacity.
4. **Moonshot**: Keep initiative 00 in mind as the north star, even if it takes years.

## Contributing

Each initiative file contains detailed deliverables. To contribute:

1. Pick an initiative that interests you
2. Read the detailed specification
3. Start with the first unchecked deliverable
4. Open a PR referencing the initiative number

---

*This roadmap was created as part of strategic planning for the JSON Resume project. It assumes unlimited resources and ambition—actual implementation will depend on community capacity and priorities.*
