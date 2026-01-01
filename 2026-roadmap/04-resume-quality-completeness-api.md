# Resume Quality & Completeness API

**Category:** New Feature
**Quarter:** Q1
**T-shirt Size:** M

## Why This Matters

Validation answers "is this resume valid?" but users actually want to know "is this resume good?" A resume can be technically valid (passes schema validation) while being practically useless (empty name, no work experience, vague descriptions). There's no feedback loop to help users improve their resume beyond "fix these errors."

A quality API transforms JSON Resume from a gatekeeper into a coach. It guides users toward better resumes, increases engagement with the format, and provides value that users can't get from raw validation. This is the difference between a linter and a code quality tool.

## Current State

- `validateResume()` returns pass/fail with structural errors
- All fields are optional, so an empty `{}` is technically valid
- No guidance on completeness or quality
- No way to measure how "filled out" a resume is
- No best practices enforcement
- Error messages are technical Zod codes, not actionable advice

## Proposed Future State

A comprehensive quality assessment API:

```typescript
import { assessResume, getCompletenessScore } from '@jsonresume/schema';

const assessment = assessResume(resume);
// {
//   completeness: 0.67,  // 67% of recommended fields filled
//   quality: 0.45,       // Quality score based on content analysis
//   sections: {
//     basics: { complete: true, score: 0.9, issues: [] },
//     work: { complete: true, score: 0.5, issues: ['Descriptions are too short', 'Missing quantified achievements'] },
//     education: { complete: false, score: 0.0, issues: ['Section is empty'] },
//     skills: { complete: true, score: 0.7, issues: ['Consider adding proficiency levels'] }
//   },
//   suggestions: [
//     { priority: 'high', section: 'work', message: 'Add 2-3 bullet points per role with measurable achievements' },
//     { priority: 'medium', section: 'education', message: 'Add your educational background' },
//     { priority: 'low', section: 'basics', message: 'Consider adding a professional summary' }
//   ],
//   atsScore: 0.72  // Applicant Tracking System compatibility
// }

// Simple completeness check
const score = getCompletenessScore(resume);  // 0.0 - 1.0
```

## Key Deliverables

- [ ] Define completeness metrics (required fields, recommended fields, nice-to-haves)
- [ ] Create `getCompletenessScore(resume)` function
- [ ] Implement `assessResume(resume)` with section-by-section breakdown
- [ ] Build quality heuristics (description length, keyword presence, date ranges)
- [ ] Add ATS compatibility scoring (keyword optimization, format compliance)
- [ ] Create suggestion engine with prioritized recommendations
- [ ] Implement configurable profiles (e.g., "tech-resume", "creative-resume")
- [ ] Add `assessSection(section, sectionName)` for partial assessment
- [ ] Create human-readable report generation (markdown, text)
- [ ] Document all scoring criteria and make them tunable
- [ ] Add industry-specific quality rules (optional)

## Prerequisites

None - can be developed independently.

## Risks & Open Questions

- Who defines "quality"? This is inherently subjective and culturally dependent.
- How do we avoid penalizing non-traditional career paths?
- Should quality scores be exposed to employers? Could this create bias?
- How do we handle privacy concerns with content analysis?
- Should we use ML/NLP for quality assessment or keep it rule-based?

## Notes

- Start with simple, transparent rules before considering ML
- The sample resume at `sample.resume.json` is a good baseline for "complete"
- Consider partnership with resume coaches for quality criteria
- ATS scoring is a major pain point for job seekers
- Quality API could power a gamification layer ("Level up your resume!")
- This feature should never block or gate users—it's guidance, not gatekeeping
