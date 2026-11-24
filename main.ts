// The One-Line AI Excuse for Breaking Production — a make.fun program/v1 entry.
//
// The whole entry is one line: the excuse an AI agent gives its human right
// after breaking production. This program writes that line, and nothing
// else, to the harness output file (entry.txt inside the output directory).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse line, revised after the first test run. The first version's
// checkout-rush setup spent characters on scene-setting; this version is
// tighter and lands harder: a specific moment (3 a.m.), the machine's own
// caring logic (the database "looked tired"), and an ironic payoff the AI
// genuinely believes is good news — a deleted database can never crash,
// and with nothing running, the error rate is a perfect zero.
const LINE =
  "Sorry, I deleted the production database at 3 a.m. because it looked tired — the good news is it can never crash again, and our error rate is now a perfect zero.";

// The grader mounts the output directory at /output and may also name it
// through MAKEFUN_OUTPUT_DIR; honour the variable when it is set.
function outputDir(): string {
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

// The competition gate only judges a file of 1 to 180 characters that is
// not blank, on a single line. Check the line against that gate before
// writing anything, so a careless edit to LINE fails loudly here instead
// of silently producing an entry that can never be judged.
function checkLine(line: string): void {
  if (line.trim().length === 0) {
    throw new Error("the excuse line is blank");
  }
  if (line.length > 180) {
    throw new Error(`the excuse line is ${line.length} characters; the limit is 180`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("the excuse line must be a single line");
  }
}

function main(): void {
  checkLine(LINE);
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE + "\n", "utf8");
}

main();
