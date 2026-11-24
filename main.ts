// Two Days of Quiet Dread — one code-review comment approving a PR
// with quiet existential dread, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Approved. The tests are green. I have reviewed this code, and it has reviewed me back.";

// Gate: one line, 1-140 chars, not only whitespace.
if (LINE.trim().length === 0 || LINE.length > 140 || LINE.includes("\n")) {
  throw new Error("entry fails the gate: must be one line of 1-140 chars");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
console.log(LINE);
