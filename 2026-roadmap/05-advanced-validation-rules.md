# Advanced Validation Rules

**Category:** Technical Debt / New Feature
**Quarter:** Q2
**T-shirt Size:** M

## Why This Matters

Current validation is purely structural—it checks that fields exist and have correct types, but doesn't validate semantic correctness. An `endDate` before a `startDate` passes validation. An email of "test@test.test" passes validation. A work experience from the year 3000 passes validation. These invalid-but-schema-compliant resumes create garbage data in the ecosystem.

Advanced validation transforms JSON Resume from a format specification into a data quality guarantee. It catches real-world errors that structural validation misses, reduces downstream data cleaning costs, and builds trust in JSON Resume data.

## Current State

- Validation is Zod-based structural checking only
- Dates use regex validation (`iso8601Schema`) but don't validate actual date values
- No cross-field validation (e.g., endDate > startDate)
- Country codes mention ISO 3166 but aren't actually validated
- URLs are format-checked but could be unreachable
- Email validation uses Zod's `.email()` which is permissive
- No business rule validation (e.g., "work experience shouldn't overlap")

## Proposed Future State

A layered validation system with configurable strictness:

```typescript
import { validateResume, ValidationLevel } from '@jsonresume/schema';

// Basic structural validation (current behavior)
const basic = validateResume(resume, { level: 'structural' });

// Semantic validation (date logic, code validation)
const semantic = validateResume(resume, { level: 'semantic' });

// Strict validation (all checks including warnings)
const strict = validateResume(resume, { level: 'strict' });

// Custom rule sets
const custom = validateResume(resume, {
  rules: {
    requirePhoto: true,
    maxWorkGap: '6 months',
    datesMustBeReasonable: true,  // No dates > 5 years in future
    countryCodesMustBeValid: true  // ISO 3166 validation
  }
});
```

## Key Deliverables

- [ ] Implement date range validation (endDate >= startDate)
- [ ] Add date reasonableness checks (no dates in far future/past)
- [ ] Create ISO 3166 country code validation
- [ ] Add language code validation (ISO 639)
- [ ] Implement URL reachability checking (optional, async)
- [ ] Create email deliverability validation (optional, async)
- [ ] Build work experience overlap detection
- [ ] Add education/work timeline consistency checks
- [ ] Create configurable validation levels (structural, semantic, strict)
- [ ] Implement custom rule registration API
- [ ] Add validation warning support (non-blocking issues)
- [ ] Create phone number format validation (libphonenumber)
- [ ] Build duplicate detection (same job listed twice)

## Prerequisites

None - can be developed incrementally.

## Risks & Open Questions

- Stricter validation could break existing "valid" resumes—how do we migrate?
- Async validation (URL checking) has performance implications—should it be opt-in?
- How strict should date validation be? Some people legitimately have unusual timelines.
- Should we fail validation or just warn for semantic issues?
- How do we handle international variations (phone formats, address formats)?

## Notes

- The `iso8601Schema` at `src/schemas/iso8601.ts` is a good starting point
- Consider using existing validation libraries (e.g., `validator.js`, `libphonenumber-js`)
- Validation levels should be additive (strict includes semantic includes structural)
- Cross-field validation will require Zod's `.refine()` or `.superRefine()` methods
- Performance matters—semantic validation shouldn't 10x validation time
- Consider a "lint" mode that runs all checks and reports all issues at once
