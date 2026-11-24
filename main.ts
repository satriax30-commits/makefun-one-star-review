// One-Star Review of Something Essential — make.fun entry program.
//
// Writes one deadpan one-star review (a single line, at most 160
// characters) of an everyday essential to /output/entry.txt.
//
// Deterministic by design: no clock, no randomness, no network, no
// input files. Node 22 stdlib only. The review text is fixed in this
// file, so every run writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The review. Gravity was chosen over sleep / the sun / oxygen because
// its grievance is the sharpest daily one everyone recognises: it drops
// things and breaks them. The twist lands in the last few words —
// gravity personified as a culprit that has never once apologised —
// and "One star." closes it as a review, deadpan, no exclamation mark.
const REVIEW =
  "Gravity drops everything I own, breaks most of it, and has never once apologised. One star.";

// The grader mounts /output in its sandbox and reads entry.txt from
// there. OUTPUT_DIR exists only so the same program can be verified
// locally against a scratch directory; it is never set by the grader,
// so the default path is always /output/entry.txt.
const OUT_DIR = process.env.OUTPUT_DIR ?? "/output";
const OUT_PATH = join(OUT_DIR, "entry.txt");

mkdirSync(dirname(OUT_PATH), { recursive: true });

// Exactly the review, no trailing newline: the gate counts characters
// and the entry must be a single line.
writeFileSync(OUT_PATH, REVIEW, "utf8");
