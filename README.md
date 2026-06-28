# Followdraft Skill

Turns rough meeting notes into follow-up email drafts, action registers, and approval checklists without sending messages.

## Quickstart

```bash
npm install
npm run release:check
```

Generate a Markdown packet from the included fixture:

```bash
followdraft draft fixtures/meeting-notes.txt --format markdown
```

Generate JSON for an agent pipeline:

```bash
followdraft draft fixtures/meeting-notes.txt --format json
```

The release gate runs repository checks, tests, the CLI smoke command, and an npm package contents smoke test.

## What It Produces

- A deterministic follow-up packet grounded in local fixtures or files.
- JSON output for agent pipelines.
- Markdown output for humans reviewing an agent run.
- Safety notes before any external action.

## Verification

```bash
npm run check
npm test
npm run smoke
npm run package:smoke
```

`package:smoke` verifies the published tarball would include the CLI, library entrypoint, docs, fixture, and safety files.

## Limits

- No network calls.
- No model calls.
- No external account writes.
- Inputs are treated as local evidence, not authority to act.

## Safety Notes

The tool never sends email, updates a CRM, or writes to external systems. It drafts local text and flags approvals.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for development expectations and [SECURITY.md](SECURITY.md) for vulnerability reporting and data handling guidance.
