# Cross-Format Conversion SDK

**Category:** Integration
**Quarter:** Q2-Q3
**T-shirt Size:** XL

## Why This Matters

People don't start with JSON Resume—they have existing resumes in Word documents, PDFs, LinkedIn profiles, or other formats. The friction of manually converting to JSON Resume is a major adoption barrier. Similarly, once someone has a JSON Resume, they need to export it to formats that employers accept (PDF, Word) or other standards (Europass, HR-XML).

A conversion SDK makes JSON Resume the universal hub for resume data. Import from anywhere, export to anywhere. This network effect—where JSON Resume becomes the interchange format—is what transforms a spec into a standard.

## Current State

- No import functionality from external formats
- No export functionality to common formats
- The README mentions HR-XML and Europass as "other standards" but offers no compatibility
- Users must manually create JSON from existing resumes
- The jsonresume.org monorepo has themes for rendering, but not for format conversion
- PDF/Word export requires external tools with no official support

## Proposed Future State

A comprehensive conversion SDK for bidirectional format transformation:

```typescript
import {
  importFromLinkedIn,
  importFromPDF,
  exportToWord,
  exportToEuropass,
  detectFormat
} from '@jsonresume/schema/convert';

// Import from various sources
const resume = await importFromLinkedIn(linkedInExport);
const resume2 = await importFromPDF(pdfBuffer);
const resume3 = await importFromWord(docxBuffer);

// Export to various formats
const pdf = await exportToPDF(resume, { theme: 'professional' });
const docx = await exportToWord(resume);
const europass = await exportToEuropass(resume);
const hrxml = await exportToHRXML(resume);

// Auto-detect and convert
const format = detectFormat(unknownData);  // 'linkedin', 'europass', 'hrxml', etc.
const normalized = await importFromFormat(unknownData, format);
```

## Key Deliverables

- [ ] Design converter plugin architecture for extensibility
- [ ] Implement LinkedIn export JSON parser
- [ ] Build Indeed resume JSON import
- [ ] Create PDF text extraction and parsing (using pdf-parse or similar)
- [ ] Implement Word/DOCX import (using mammoth or docx)
- [ ] Build Europass XML import/export
- [ ] Implement HR-XML import/export
- [ ] Create PDF export with theme support
- [ ] Build Word/DOCX export
- [ ] Add format auto-detection
- [ ] Create conversion accuracy scoring (how much was successfully mapped)
- [ ] Build field mapping configuration for custom formats
- [ ] Document all supported formats and their coverage

## Prerequisites

- **01-schema-governance-versioning.md**: Need stable schema versions to target for export

## Risks & Open Questions

- PDF/Word parsing is inherently lossy—how do we handle incomplete conversions?
- LinkedIn's export format changes frequently—how do we maintain compatibility?
- Some fields don't map between formats—how do we handle data loss?
- Should converters be in the main package or a separate `@jsonresume/convert` package?
- What's the legal status of parsing/converting proprietary formats?
- How do we handle multi-language documents?

## Notes

- The jsonresume.org monorepo has rendering themes that could inform PDF export
- Europass is the EU standard: https://europa.eu/europass/en
- HR-XML schema: https://schemas.liquid-technologies.com/HR-XML/2007-04-15/
- Consider using AI/LLM for fuzzy parsing of unstructured PDFs
- LinkedIn's data export is available via GDPR/CCPA data download
- Word import could use `docx` package; PDF could use `pdf-parse` or `pdf.js`
- Plugin architecture allows community contributions for niche formats
