import { mkdir, writeFile } from 'node:fs/promises';

// GitHub's public calendar needs no token. Fail rather than publish invented activity.
const response = await fetch('https://github.com/users/rjgrl/contributions', {
  signal: AbortSignal.timeout(30000),
  headers: { 'User-Agent': 'rjgrl-readme' },
});
if (!response.ok) throw new Error(`GitHub calendar returned ${response.status}`);
const html = await response.text();
const days = [...html.matchAll(/<td\b[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="([0-4])"[^>]*>/g)]
  .map(([, date, level]) => ({ date, level: Number(level) }))
  .sort((a, b) => a.date.localeCompare(b.date));
const total = html.match(/id="js-contribution-activity-description"[^>]*>\s*([\d,]+)\s+contributions/);
if (days.length < 350 || !total) throw new Error('GitHub calendar markup changed; refusing an incomplete chart');
const colors = ['#151526', '#244766', '#457cc0', '#78d9ed', '#f4f1ff'];
const first = Date.parse(days[0].date);
const columns = Math.floor((Date.parse(days.at(-1).date) - first) / 86400000 / 7) + 1;
const pitch = Math.min(14, 776 / columns);
const cells = days.map(({ date, level }) => {
  const index = Math.round((Date.parse(date) - first) / 86400000);
  return `<rect x="${(Math.floor(index / 7) * pitch).toFixed(2)}" y="${43 + index % 7 * 13}" width="${(pitch - 2).toFixed(2)}" height="11" rx="2" fill="${colors[level]}"><title>${date}: activity level ${level}</title></rect>`;
}).join('');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="776" height="146" viewBox="0 0 776 146" role="img" aria-label="GitHub contribution calendar for rjgrl">
<title>rjgrl: ${total[1]} contributions in the last year</title>
<text x="0" y="16" fill="#66dff6" font-family="monospace" font-size="12" font-weight="bold" letter-spacing="4">ACTIVITY PULSE</text>
<text x="776" y="16" text-anchor="end" fill="#b6a4db" font-family="sans-serif" font-size="11">${total[1]} contributions</text>
${cells}</svg>`;
await mkdir('.github/assets', { recursive: true });
await writeFile('.github/assets/activity.svg', svg);
console.log(`Rendered ${days.length} days and ${total[1]} contributions`);
