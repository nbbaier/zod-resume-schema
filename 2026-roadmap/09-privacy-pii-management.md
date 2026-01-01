# Privacy & PII Management

**Category:** Security
**Quarter:** Q3
**T-shirt Size:** M

## Why This Matters

Resumes contain highly sensitive personal information: names, addresses, phone numbers, email addresses, employment history. This data is subject to privacy regulations (GDPR, CCPA, etc.) and represents significant identity theft risk. Currently, JSON Resume provides no tools for handling this data responsibly.

Privacy-first design transforms JSON Resume from a liability into a trust asset. It enables compliant data sharing, reduces risk for platforms using the format, and gives individuals control over their professional identity. In an era of increasing privacy awareness, this is both an ethical imperative and a competitive advantage.

## Current State

- All fields are stored in plaintext
- No distinction between public and private fields
- No redaction or anonymization utilities
- No consent or data sharing framework
- No guidance on GDPR/CCPA compliance
- Validation doesn't warn about PII exposure
- No field-level access control

## Proposed Future State

A comprehensive privacy toolkit:

```typescript
import {
  redactResume,
  anonymizeResume,
  classifyPII,
  createShareableResume
} from '@jsonresume/schema/privacy';

// Classify what PII exists in a resume
const piiReport = classifyPII(resume);
// {
//   high: ['basics.email', 'basics.phone', 'basics.location.address'],
//   medium: ['basics.name', 'basics.location.city'],
//   low: ['work[0].name', 'education[0].institution']
// }

// Create redacted version for public sharing
const publicResume = redactResume(resume, {
  keep: ['basics.name', 'basics.label', 'skills', 'work.*.position'],
  redact: ['basics.email', 'basics.phone', 'basics.location.address']
});

// Fully anonymize for statistical analysis
const anonymized = anonymizeResume(resume);
// Replaces names with hashes, removes identifying info

// Create shareable version with consent tracking
const shareable = createShareableResume(resume, {
  purpose: 'job-application',
  recipient: 'company-xyz',
  expiresAt: '2024-12-31',
  includeFields: ['basics', 'work', 'education', 'skills']
});
```

## Key Deliverables

- [ ] Create PII classification for all schema fields
- [ ] Implement `classifyPII(resume)` function
- [ ] Build `redactResume(resume, options)` with configurable field selection
- [ ] Create `anonymizeResume(resume)` for full anonymization
- [ ] Implement `hashPII(resume)` for pseudonymization
- [ ] Add `meta.privacy` field for consent and sharing metadata
- [ ] Create data retention policy helpers
- [ ] Build GDPR-compliant data export/delete utilities
- [ ] Implement field-level encryption support
- [ ] Create sharing tokens with expiration
- [ ] Add privacy impact assessment tooling
- [ ] Document privacy best practices for implementers

## Prerequisites

None - can be developed independently.

## Risks & Open Questions

- How do we handle "right to be forgotten" in distributed systems?
- Should encryption be mandatory for certain fields?
- How do we balance privacy with resume matching functionality?
- What's our liability if someone's data is exposed?
- Should we integrate with identity providers (Verifiable Credentials)?
- How do we handle cross-border data transfers?

## Notes

- GDPR Article 17 covers right to erasure
- CCPA gives California residents privacy rights
- Consider integration with privacy frameworks like Privacy by Design
- Resume redaction is common in recruiting (blind hiring)
- Field-level encryption could use NaCl/libsodium
- The `meta` schema could be extended for privacy metadata
- Consider partnership with privacy-focused identity providers
- Anonymization must prevent re-identification attacks
