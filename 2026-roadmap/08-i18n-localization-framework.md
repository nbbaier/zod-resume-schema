# I18n & Localization Framework

**Category:** New Feature
**Quarter:** Q3
**T-shirt Size:** L

## Why This Matters

Careers are global, but JSON Resume is English-centric. Error messages, field descriptions, and documentation all assume English. This excludes non-English speakers, limits adoption in non-English markets, and makes the standard feel like it's "not for them." A localization framework makes JSON Resume truly universal.

Internationalization isn't just translation—it's about respecting regional differences in how resumes are structured. A German CV includes a photo and date of birth; a US resume excludes them. A Japanese resume has specific formatting expectations. True i18n means the schema itself can adapt to regional norms.

## Current State

- All schema descriptions are in English only
- Error messages from Zod are in English only
- No way to localize field labels or descriptions
- Date formats are ISO 8601 (universal) but display formatting is undefined
- Country codes exist but no localized country names
- No RTL (right-to-left) language consideration
- The README and documentation are English only

## Proposed Future State

A comprehensive localization system:

```typescript
import { validateResume, setLocale, getLocalizedSchema } from '@jsonresume/schema';
import '@jsonresume/schema/locales/de';  // German locale

// Set global locale
setLocale('de');

const result = validateResume(resume);
// Errors are now in German:
// { message: "E-Mail-Adresse ist ungültig", path: ['basics', 'email'] }

// Get localized schema for UI generation
const schema = getLocalizedSchema('de');
// {
//   basics: {
//     label: 'Grundlagen',
//     fields: {
//       name: { label: 'Name', description: 'Ihr vollständiger Name' }
//     }
//   }
// }

// Locale-specific validation rules
const result = validateResume(resume, { locale: 'de', useLocalRules: true });
// Applies German resume norms (photo expected, etc.)
```

## Key Deliverables

- [ ] Create locale file structure (`locales/{lang}.json`)
- [ ] Implement `setLocale(locale)` and `getLocale()` functions
- [ ] Localize all Zod error messages
- [ ] Create localized schema descriptions for all fields
- [ ] Implement `getLocalizedSchema(locale)` for UI generation
- [ ] Add locale-specific validation rules (optional photo, etc.)
- [ ] Create initial translations: English, German, Spanish, French, Chinese, Japanese
- [ ] Build locale fallback chain (de-AT → de → en)
- [ ] Add RTL language support considerations
- [ ] Create translation contribution guide
- [ ] Implement locale-aware date display formatting
- [ ] Add localized sample resumes

## Prerequisites

- **05-advanced-validation-rules.md**: Locale-specific validation rules depend on advanced validation

## Risks & Open Questions

- Who maintains translations? Community vs. professional translators?
- How do we handle locale-specific resume norms without being prescriptive?
- Should localization be in the main package or a separate package?
- How do we handle languages with multiple regional variants (en-US vs en-GB)?
- What's our strategy for RTL languages (Arabic, Hebrew)?
- How do we keep translations in sync as the schema evolves?

## Notes

- Consider using existing i18n libraries (i18next, FormatJS)
- Zod v4 has i18n support via custom error maps
- The EU has multiple official languages; Europass is already localized
- Machine translation can bootstrap, but human review is essential
- Crowdsourcing translations via GitHub could work well
- Consider integrating with translation platforms (Crowdin, Transifex)
- The sample resume could have localized versions demonstrating regional norms
