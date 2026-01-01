# Semantic Skills Taxonomy

**Category:** Architecture
**Quarter:** Q4
**T-shirt Size:** L

## Why This Matters

Skills in the current schema are free-text strings: "JavaScript", "JS", "Javascript", "ECMAScript", and "Node.js/JavaScript" all represent the same skill differently. This makes matching, aggregation, and analysis nearly impossible. Without normalized skill identifiers, the Resume-Job Matching Engine can only do fuzzy string matching, which is unreliable.

A semantic skills taxonomy transforms skills from strings into structured, linked data. Each skill has a canonical identifier, relationships to other skills (parent/child, related), and standard metadata. This enables precise matching, skill gap analysis, and career path recommendations. It's the foundation for intelligent career tooling.

## Current State

- Skills are free-text: `{ name: "Web Development", level: "Master", keywords: ["HTML", "CSS"] }`
- No skill normalization or deduplication
- No skill hierarchy (React → JavaScript → Programming)
- No skill relationships (TypeScript is related to JavaScript)
- No standard skill identifiers
- Keywords within skills are also free-text
- Job schema skills suffer the same issues

## Proposed Future State

A comprehensive skills system with taxonomy support:

```typescript
import {
  normalizeSkill,
  getSkillTaxonomy,
  inferSkillLevel,
  findRelatedSkills
} from '@jsonresume/schema/skills';

// Normalize free-text to canonical skill
const skill = normalizeSkill('React.js');
// {
//   id: 'skill:react',
//   name: 'React',
//   aliases: ['React.js', 'ReactJS', 'React Framework'],
//   parent: 'skill:javascript',
//   category: 'frontend-framework',
//   related: ['skill:vue', 'skill:angular', 'skill:redux']
// }

// Get skill taxonomy
const taxonomy = getSkillTaxonomy('programming');
// Returns hierarchical tree of programming skills

// Infer skill level from resume content
const level = inferSkillLevel(resume, 'skill:react');
// Analyzes work history, projects to estimate proficiency

// Find related skills for suggestions
const related = findRelatedSkills('skill:react');
// ['skill:redux', 'skill:nextjs', 'skill:typescript']
```

## Key Deliverables

- [ ] Design skill schema with ID, aliases, hierarchy, relationships
- [ ] Create initial taxonomy of 1000+ common skills
- [ ] Implement `normalizeSkill(text)` with fuzzy matching
- [ ] Build skill hierarchy (categories → subcategories → skills)
- [ ] Add skill relationships (parent, child, related, complementary)
- [ ] Create `getSkillTaxonomy(category)` function
- [ ] Implement skill inference from resume content
- [ ] Build skill suggestion engine
- [ ] Add skill versioning (React 16 vs React 18)
- [ ] Create skill trend data (rising, stable, declining)
- [ ] Build community contribution process for new skills
- [ ] Integrate with external taxonomies (ESCO, O*NET)

## Prerequisites

None - but this initiative enables the Resume-Job Matching Engine.

## Risks & Open Questions

- Who maintains the taxonomy? How do we handle disputes?
- How do we handle rapidly evolving tech skills (new frameworks)?
- Should we build our own taxonomy or adopt an existing one (ESCO, O*NET)?
- How do we handle soft skills vs. hard skills?
- What about skills that are combinations (e.g., "Full Stack Development")?
- How do we handle skill equivalence (AWS Solutions Architect ≈ Cloud Architecture)?

## Notes

- ESCO (European Skills/Competences, Qualifications and Occupations): https://esco.ec.europa.eu/
- O*NET (US Occupational Information Network): https://www.onetonline.org/
- LinkedIn has a skills graph with 35,000+ skills
- Consider using NLP/ML for skill extraction from text
- Skill levels are subjective—consider alternative metrics (years, certifications)
- The skills at `src/schemas/skills.ts` could be extended to support skill IDs
- Taxonomy could be stored externally and loaded on demand
- Version skill taxonomy separately from schema (faster iteration)
