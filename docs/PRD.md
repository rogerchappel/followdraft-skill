# PRD: followdraft-skill

Status: in-progress
Decision: build now
Factory run: 2026-06-19 agent-skill lane

## Pitch

Turns rough meeting notes into follow-up email drafts, action registers, and approval checklists without sending messages.

## Why It Matters

Agents often draft follow-ups from messy meeting notes, but they need explicit action owners, blocked external sends, and redaction hints.

## V1 Scope

- Local-first JavaScript CLI.
- Fixture-backed tests.
- Markdown and JSON output.
- Dry-run plan with approval boundaries.
- Reusable `SKILL.md` instructions for agents.

## Out of Scope

- Live external writes.
- Sending messages.
- Installing skills automatically.
- Calling hosted model APIs.

## Verification

Run `npm test`, `npm run check`, `npm run build`, `npm run smoke`, and `bash scripts/validate.sh`.
