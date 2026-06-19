#!/usr/bin/env node
import fs from "node:fs";
import { draftFollowup, renderMarkdown } from "./index.js";

const [, , command, notesPath, ...args] = process.argv;
if (command !== "draft" || !notesPath) {
  console.error("Usage: followdraft draft <notes.txt> [--format json|markdown]");
  process.exit(2);
}
const format = args.includes("--format") ? args[args.indexOf("--format") + 1] : "markdown";
const notes = fs.readFileSync(notesPath, "utf8");
const packet = draftFollowup(notes);
console.log(format === "json" ? JSON.stringify(packet, null, 2) : renderMarkdown(packet));
