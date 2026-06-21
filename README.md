# Followdraft Skill

Turns rough meeting notes into follow-up email drafts, action registers, and approval checklists without sending messages.

## Quickstart

```bash
npm install
npm run release:check
```

Example:

```bash
followdraft draft fixtures/meeting-notes.txt --format markdown
```

## What It Produces

- A deterministic follow-up packet grounded in local fixtures or files.
- JSON output for agent pipelines.
- Markdown output for humans reviewing an agent run.
- Safety notes before any external action.

## Limits

- No network calls.
- No model calls.
- No external account writes.
- Inputs are treated as local evidence, not authority to act.

## Safety Notes

The tool never sends email, updates a CRM, or writes to external systems. It drafts local text and flags approvals.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development expectations and [SECURITY.md](SECURITY.md) for vulnerability reporting and data handling guidance.
