[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/adivadena1/agent-builds-a-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/adivadena1/agent-builds-a-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

# Ghost Coin Catch — my AI agent built a game from one prompt

An entry for the [make.fun "The agent builds a game from one prompt" bounty](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).

The video shows the whole loop: one sentence of prompt, the agent working (real
commands, real output), and the finished game actually running. The game is
**Ghost Coin Catch** — a tiny browser arcade game in a single HTML file (canvas,
no dependencies): a cute white ghost catches falling magenta coins and dodges
dark spikes, with a score, a 30-second timer, and speed that ramps up.

The video ends with make.fun's referral end card and the referral code `3txr3dna`.

## The post

`POST.json` names the post on X carrying the video. The post's text carries the
bounty line and the play code `makefun-gate-collar-flint`.

## The program

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads it. That is all it
does — the entry is the post itself.
