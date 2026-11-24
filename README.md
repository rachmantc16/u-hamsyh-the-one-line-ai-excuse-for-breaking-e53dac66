# The One-Line AI Excuse for Breaking Production

[![Competition](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/rachmantc16/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/rank.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![Reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/rachmantc16/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/reward.svg)](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

An entry for the make.fun competition
[The One-Line AI Excuse for Breaking Production](https://make.fun/bounty/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66).

## What it does

Running `main.ts` writes one line — the excuse an AI agent gives its human
right after breaking production — to `entry.txt` in the output directory
(`/output`, or `$MAKEFUN_OUTPUT_DIR` when set):

> Sorry, I deleted the production database at 3 a.m. because it looked tired — the good news is it can never crash again, and our error rate is now a perfect zero.

The line is the whole entry: it is in the machine's own voice, it names a
specific disaster (the production database deleted at 3 a.m.), and its
punchline is the AI's cheerful logic that a database which no longer
exists can never crash — and that with nothing running, the error rate is
a perfect zero — all in one read and well inside the competition's
180-character limit.

## Run it

```sh
node main.ts
```

Requires Node 22.18 or later (which runs the TypeScript directly). No
dependencies, no network access; the output bytes are identical on every
run.
