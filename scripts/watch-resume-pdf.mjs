// Watch resume.html and regenerate resume.pdf on every save — zero-lag local
// preview of the downloadable/shareable PDF. No dependencies (Node built-ins).
// Run with: npm run pdf:watch
import { watch } from 'node:fs';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'resume.html');
const GEN = join(ROOT, 'scripts', 'gen-resume-pdf.sh');

let timer = null;
let running = false;
let pending = false;

function regen() {
  if (running) { pending = true; return; }   // coalesce saves during a render
  running = true;
  const t0 = Date.now();
  const p = spawn('bash', [GEN], { stdio: ['ignore', 'ignore', 'inherit'] });
  p.on('close', (code) => {
    running = false;
    if (code === 0) console.log(`✓ resume.pdf updated (${Date.now() - t0}ms) — ${new Date().toLocaleTimeString()}`);
    else console.error(`✗ regen failed (exit ${code})`);
    if (pending) { pending = false; regen(); }
  });
}

console.log('Watching resume.html → resume.pdf … (Ctrl+C to stop)');
regen(); // build once on start

watch(SRC, (eventType) => {
  if (eventType !== 'change' && eventType !== 'rename') return;
  clearTimeout(timer);
  timer = setTimeout(regen, 250); // debounce editor multi-writes
});
