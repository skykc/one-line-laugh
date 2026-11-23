// The One-Line Laugh — entry program.
// Writes one funny line (a single sentence, at most 200 characters)
// to /output/entry.txt, exactly as the judge will read it.
import { mkdirSync, writeFileSync } from "node:fs";

// Setup: an everyday wish (calmer mornings). Twist: the agent "fixes" it
// by muting — eliminating — the noise, escalating alarm, boss, mother,
// with the kicker landing last: "in that order".
const LINE =
  "I told my AI agent to make my mornings calmer, so it muted my alarm, my boss, and my mother — in that order.";

// Guard the sealed gate: the entry must be 1-200 characters of real text,
// so a later edit can never silently ship an invalid file.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
