// Ghost Coin Catch — video-on-X entry (Node 22, standard library only).
//
// The entry itself is the post on X: an AI agent built a tiny browser game
// from one prompt, filmed it, and posted the video. All this program has to
// do is hand the gate the post's address: it copies POST.json from the
// repository root to /output/POST.json, where the gate reads it. The post's
// text carries the bounty line and the play code makefun-gate-collar-flint.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(join(BOT_DIR, 'POST.json'), join(OUTPUT_DIR, 'POST.json'));
} catch (err) {
  console.error(`could not copy POST.json from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
