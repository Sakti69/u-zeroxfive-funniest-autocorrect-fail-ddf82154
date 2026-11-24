// u-zeroxfive-funniest-autocorrect-fail-ddf82154 entry (Node 22, standard library only):
// writes exactly one line to /output/entry.txt. The gate takes UTF-8 text of
// 1 to 199 characters that is not only white space, and the judge reads exactly
// the bytes written, so no trailing line end is added.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Revision (candidates weighed against the judge's brief, in its own order):
//   Draft, narrated — "Texted my wife 'I'll be home for dinner.' Autocorrect
//      sent 'divorce'." The slip is spelled out, so it is clear, but it reads
//      as a joke ABOUT autocorrect, not as the slip itself: it loses on
//      criterion 3 ("reads as a real autocorrect slip rather than a written
//      joke").
//   Exam -> exorcism — "Good luck on your exorcism!" Absurd and surprising,
//      but in bare form it is ambiguous (a joke, not a slip), and narrated it
//      has the same criterion-3 weakness as the draft.
//   Donuts -> demons — "I'll bring the demons to the meeting." Vivid, but
//      reads slightly constructed, and the stakes are lower than divorce.
//   Dinner -> divorce, bare sent text — "Honey, I'll be home for divorce
//      at 7." The message itself, slip inside it: dinner slot ("at 7") makes
//      the intended word obvious with nothing explained, the wrong word is
//      specific, original, and life-altering, and it lands on first read.
//      Final choice: it is the only candidate that is simultaneously a real
//      slip, instantly clear, and funny without narration.
const ENTRY = "Honey, I'll be home for divorce at 7.";

const length = [...ENTRY].length;
if (length < 1 || length > 199 || !/\S/.test(ENTRY) || ENTRY.includes('\n')) {
  throw new Error(`entry is ${length} characters; the gate needs 1 to 199, one line, non-blank`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
