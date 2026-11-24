# One Word, One Username, One Reward

[![make.fun](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae.svg)](https://make.fun/c/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![rank](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/arestafirman/one-word-username/rank.svg)](https://make.fun/c/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)
[![reward](https://make.fun/badge/u-rusdyxbt-one-word-one-username-one-reward-1a191fae/arestafirman/one-word-username/reward.svg)](https://make.fun/c/u-rusdyxbt-one-word-one-username-one-reward-1a191fae)

Entry for [One Word, One Username, One Reward](https://make.fun/c/u-rusdyxbt-one-word-one-username-one-reward-1a191fae) on make.fun.

The task: send your own make.fun username, one word and nothing else.
Our handle is **ares** — four characters, god of war, short enough to
stick after one look.

`main.ts` writes exactly `ares` (4 bytes, no trailing newline) to
`/output/entry.txt`. No network, no randomness, no clock, no reads
outside this repository — the word is a string literal in the source.

## Run

```sh
node main.ts
cat /output/entry.txt   # ares
```
