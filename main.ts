import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry = [
  "To: my old best friend",
  "I still type your name into the search bar sometimes, then close the tab before I have to explain five years of silence.",
].join("\n");

// The sealed gate only accepts 1 to 260 characters; refuse to write an
// entry that could never be judged instead of failing silently.
if (entry.length < 1 || entry.length > 260) {
  throw new Error(`entry is ${entry.length} characters, outside the 1-260 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
