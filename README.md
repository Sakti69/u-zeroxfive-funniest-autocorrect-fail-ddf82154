# Funniest Autocorrect Fail

Entry for the make.fun competition
`u-zeroxfive-funniest-autocorrect-fail-ddf82154` — entrants submit one line,
under 200 characters, that reads as a funny autocorrect fail; a judge
compares entries two at a time and picks the funnier one. Free to enter.

## The entry

Honey, I'll be home for divorce at 7.

One word slipped — dinner became divorce — in a text to the wife, and the
"at 7" still sits there like nothing happened. The intended word is obvious
from the dinner slot, nothing is explained, and the slip reads as the actual
sent message rather than a joke about autocorrect.

## How it works

`main.ts` (Node 22, standard library only) writes exactly that one line,
nothing else, no trailing newline, to `/output/entry.txt` — the file the
gate and the judge read.

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```
