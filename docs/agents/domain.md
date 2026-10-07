# Domain docs

This repo uses a single-context layout:
- `GLOSSARY.md` at the repo root for domain vocabulary.
- `docs/adr/` for architectural decisions.

## Before exploring the codebase

Read the root glossary and ADRs relevant to the area being explored.

If these files do not exist, proceed silently. Domain-modeling creates
them lazily when terms or decisions are resolved.

## Use the glossary's vocabulary

Use defined domain terms in issue titles, proposals, hypotheses,
and test names.

If a needed concept is missing, reconsider whether the term belongs
to the project; record real vocabulary gaps for domain-modeling.

## Surface ADR conflicts

If a proposal contradicts an existing ADR, identify the ADR and
explain why the decision should be reopened.
