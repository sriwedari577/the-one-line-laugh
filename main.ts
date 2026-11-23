import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The laugh lands on "sitting on": the desk lets him stand while he
// keeps sitting on the email he was supposed to answer.
// Single sentence, kept under the 200-character gate.
const LINE = "I bought a standing desk so I could stand while I ignored the email I'd been sitting on all week.";

function main(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), LINE + "\n", "utf8");
  console.log(`entry.txt: ${[...LINE].length} characters`);
}

main();
