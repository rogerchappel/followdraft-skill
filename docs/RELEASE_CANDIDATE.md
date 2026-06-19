# Release Candidate

## Verification

- `npm test` - pass
- `npm run check` - pass
- `npm run build` - pass
- `npm run smoke` - pass
- `bash scripts/validate.sh` - pass

## Classification

ship

## Release Notes

- Adds local follow-up packet drafting from meeting notes.
- Extracts actions, approval blockers, and email redactions before external sharing.
- Keeps all behavior local-first with no message sending or CRM writes.
