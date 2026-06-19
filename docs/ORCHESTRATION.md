# Orchestration

Use followdraft-skill when an agent needs a local follow-up packet before taking action.

## Inputs

- Local text files or JSON fixtures.
- Optional `--format json` for machine routing.

## Side-Effect Boundary

The tool never sends email, updates a CRM, or writes to external systems. It drafts local text and flags approvals.

## Verification

1. Run `npm test`.
2. Run `npm run smoke`.
3. Review generated Markdown for approval language.
