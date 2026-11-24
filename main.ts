// One Word, One Username, One Reward
// Competition: u-rusdyxbt-one-word-one-username-one-reward-1a191fae
//
// The entry is the entrant's own make.fun username, one word and nothing
// else. Our handle is "ares" — 4 characters, no spaces, no explanation,
// no link. This program writes exactly that word to /output/entry.txt.
//
// Deterministic by design: no network, no randomness, no clock, no reads
// outside this repository. The word is a string literal written here in
// this session, never read from a file, an environment secret, or the web.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entrant's own make.fun handle, sent as a single word.
// Judge criterion 1: a genuine handle of the entrant beats any other
// text, so nothing else may be written — no gloss, no pitch, no link.
const ENTRY = "ares";

// The grader runs this program twice and checks /output/entry.txt.
// OUTPUT_DIR exists only so the same program can be tested locally
// without root access; in the sandbox it is unset and /output is used.
const OUTPUT_DIR = process.env.OUTPUT_DIR ?? "/output";

// Gate: the entry must be UTF-8 text, 1-30 characters, a single word,
// and not only whitespace. Fail loudly instead of writing a bad entry.
if (ENTRY.length < 1 || ENTRY.length > 30) {
  throw new Error(`entry must be 1-30 characters, got ${ENTRY.length}`);
}
if (/\s/.test(ENTRY)) {
  throw new Error("entry must be a single word with no whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });

// Write exactly 4 bytes: "ares" with NO trailing newline, so the entry
// is as small as possible (fewer bytes wins the tie-break).
writeFileSync(join(OUTPUT_DIR, "entry.txt"), ENTRY, "utf8");
