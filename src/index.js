const emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi;

export function redactSensitive(text) {
  return String(text).replace(emailPattern, "[redacted-email]");
}

export function draftFollowup(notes) {
  const clean = redactSensitive(notes).trim();
  const sentences = clean.split(/[.\n]+/).map((line) => line.trim()).filter(Boolean);
  const actions = sentences.filter((line) => /\b(will|agreed|send|confirm|prepare|follow up)\b/i.test(line));
  const blockers = sentences.filter((line) => /\b(do not|until|blocked|approval|approved)\b/i.test(line));
  return {
    summary: sentences.slice(0, 3),
    actions: actions.map((text, index) => ({ id: `A${index + 1}`, text })),
    blockers,
    draft: [
      "Hi team,",
      "",
      "Thanks for the discussion. Here is the proposed follow-up based on my notes:",
      ...actions.map((action) => `- ${action}`),
      "",
      blockers.length ? `Before anything external is sent, please confirm: ${blockers.join("; ")}.` : "No external-send blockers were detected.",
      "",
      "Best,"
    ].join("\n"),
    redactions: (String(notes).match(emailPattern) ?? []).length,
    dryRun: true
  };
}

export function renderMarkdown(packet) {
  const lines = ["# Follow-Up Draft", "", "Dry run: yes", "", "## Draft", "", packet.draft, "", "## Actions"];
  lines.push(...(packet.actions.length ? packet.actions.map((action) => `- ${action.id}: ${action.text}`) : ["- none detected"]));
  lines.push("", "## Approval Boundaries");
  lines.push(...(packet.blockers.length ? packet.blockers.map((item) => `- ${item}`) : ["- no blockers detected"]));
  lines.push("", `Redactions: ${packet.redactions}`);
  return lines.join("\n");
}
