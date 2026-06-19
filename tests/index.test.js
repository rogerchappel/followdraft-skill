import test from "node:test";
import assert from "node:assert/strict";
import { draftFollowup, renderMarkdown } from "../src/index.js";

test("drafts local follow-up packets without sending", () => {
  const packet = draftFollowup("Roger agreed to send notes. Do not email until pricing is approved. alex@example.com");
  assert.equal(packet.dryRun, true);
  assert.equal(packet.redactions, 1);
  assert.match(packet.draft, /please confirm/i);
});

test("renders actions and approval boundaries", () => {
  const packet = draftFollowup("Maya will confirm the CRM export.");
  assert.match(renderMarkdown(packet), /Actions/);
  assert.match(renderMarkdown(packet), /Maya/);
});
