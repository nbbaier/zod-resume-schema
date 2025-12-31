# Resume-Job Matching Engine

**Category:** New Feature
**Quarter:** Q2
**T-shirt Size:** XL

## Why This Matters

JSON Resume is uniquely positioned with both a resume schema AND a job description schema—a combination no other standard offers. This creates an extraordinary opportunity: programmatic matching between candidates and positions. Instead of being just a data format, JSON Resume can become an intelligent matching platform.

This feature transforms the project from a "validation library" into a "career intelligence engine." It provides immediate, tangible value to job seekers (match score, gap analysis) and employers (candidate ranking, skill coverage). It's the kind of functionality that could make JSON Resume the default standard for the HR tech industry.

## Current State

- Resume schema (`src/schema.ts`) and Job schema (`src/job-schema.ts`) exist independently
- No programmatic connection between the two schemas
- Job schema is marked as "draft" and not fully utilized
- Skills in both schemas are free-text strings with no normalization
- No matching, scoring, or comparison functionality exists

## Proposed Future State

A matching engine that computes compatibility between resumes and jobs:

```typescript
import { matchResumeToJob, analyzeGaps } from '@jsonresume/schema';

const match = matchResumeToJob(resume, job);
// {
//   score: 0.73,
//   breakdown: {
//     skills: { score: 0.85, matched: ['React', 'Node.js'], missing: ['GraphQL'] },
//     experience: { score: 0.60, yearsRequired: 5, yearsFound: 3 },
//     education: { score: 0.75, required: 'Bachelor', found: 'Bachelor' },
//     location: { score: 0.80, remote: 'Hybrid', candidateLocation: 'San Francisco' }
//   },
//   recommendations: [
//     'Add GraphQL to your skills section',
//     'Highlight leadership experience to match Senior role'
//   ]
// }

const gaps = analyzeGaps(resume, job);
// Returns structured analysis of what's missing
```

## Key Deliverables

- [ ] Define matching algorithm with weighted scoring components
- [ ] Create `matchResumeToJob(resume, job)` function with typed result
- [ ] Implement skill matching with fuzzy matching and synonym support
- [ ] Build experience level matching (years, seniority inference)
- [ ] Add education requirement matching
- [ ] Implement location/remote work compatibility scoring
- [ ] Create `analyzeGaps(resume, job)` for actionable feedback
- [ ] Add `rankResumes(resumes[], job)` for batch ranking
- [ ] Add `findBestJobs(resume, jobs[])` for job seekers
- [ ] Build configurable weights API for custom scoring
- [ ] Document matching algorithm publicly (transparency)
- [ ] Finalize job schema based on matching requirements

## Prerequisites

- **10-semantic-skills-taxonomy.md**: Skill matching requires normalized skill identifiers

## Risks & Open Questions

- How do we handle the inherent subjectivity of "matching"? Different employers value different things.
- Should matching be deterministic or allow for ML-based scoring?
- How do we prevent gaming/optimization for scores over actual fit?
- What's the liability story if someone doesn't get a job due to a low match score?
- Should the algorithm be open source or a black box?

## Notes

- The job schema at `src/job-schema.ts` needs fields like `yearsExperience` structured
- Skill matching will benefit enormously from the Skills Taxonomy initiative
- Consider integration with external job APIs (LinkedIn, Indeed) for real-world testing
- This could be the basis for a SaaS offering or premium feature
- ATS (Applicant Tracking System) optimization is a related use case
- The `sample.job.json` file shows current job schema capabilities
