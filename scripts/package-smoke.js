import { execFileSync } from "node:child_process";

const output = execFileSync("npm", ["pack", "--dry-run", "--json"], {
  encoding: "utf8"
});
const [pack] = JSON.parse(output);
const files = new Set(pack.files.map((file) => file.path));

const required = [
  "src/cli.js",
  "src/index.js",
  "SKILL.md",
  "docs/EXAMPLES.md",
  "docs/LIMITATIONS.md",
  "docs/SAFETY.md",
  "fixtures/meeting-notes.txt",
  "README.md",
  "LICENSE",
  "SECURITY.md",
  "CHANGELOG.md",
  "CONTRIBUTING.md"
];

const missing = required.filter((file) => !files.has(file));
if (missing.length > 0) {
  console.error(`Package smoke failed; missing files:\n${missing.join("\n")}`);
  process.exit(1);
}

console.log(`package smoke ok: ${pack.filename} includes ${pack.files.length} files`);
