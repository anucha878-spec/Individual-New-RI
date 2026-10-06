// Build the wiki mirror: turn cenpay-content-*.json into per-page Markdown files.
// Usage: node wiki/_build.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const OUT = path.join(__dirname, 'pages');
const BASE = 'http://wiki.thaisamut.co.th';

const load = (f) => {
  let o = JSON.parse(fs.readFileSync(f, 'utf8'));
  if (typeof o === 'string') o = JSON.parse(o);
  return o;
};

const tree = JSON.parse(fs.readFileSync(path.join(__dirname, 'pagetree.json'), 'utf8'));
const byId = new Map(tree.map(n => [n.id, n]));

const pages = [];
for (const f of fs.readdirSync(ROOT).filter(f => /^cenpay-content-\d+\.json$/.test(f))) {
  pages.push(...load(path.join(ROOT, f)).pages);
}

const slug = (s) => (s || 'untitled')
  .replace(/[\\/:*?"<>|]/g, '-')
  .replace(/\s+/g, ' ')
  .trim()
  .slice(0, 80);

const breadcrumb = (id) => {
  const parts = [];
  let n = byId.get(id);
  while (n) { parts.unshift(n.title); n = n.parent ? byId.get(n.parent) : null; }
  return parts.join(' > ');
};

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

const index = [];
for (const p of pages) {
  const node = byId.get(p.id) || p;
  const file = `${p.id} - ${slug(p.title)}.md`;
  const links = (p.links || []).filter(l => l.href && !l.href.startsWith('#'));
  const body = [
    `# ${p.title}`,
    '',
    `- **Page ID:** ${p.id}`,
    `- **URL:** ${BASE}${p.url}`,
    `- **Path:** ${breadcrumb(p.id)}`,
    `- **Depth:** ${node.depth}`,
    '',
    '---',
    '',
    p.md || '_(หน้าว่าง - ไม่มีเนื้อหา)_',
  ];
  if (links.length) {
    body.push('', '---', '', '## Hyperlinks บนหน้านี้', '');
    for (const l of links) body.push(`- [${l.text || l.href}](${l.href.startsWith('http') ? l.href : BASE + l.href})`);
  }
  if ((p.atts || []).length) {
    body.push('', '## Attachments', '');
    for (const a of p.atts) body.push(`- ${BASE}${a}`);
  }
  fs.writeFileSync(path.join(OUT, file), body.join('\n') + '\n');
  index.push({ id: p.id, title: p.title, depth: node.depth, file, chars: (p.md || '').length, links: links.length, atts: (p.atts || []).length });
}

// INDEX.md - flat, sorted by tree order
const order = new Map(tree.map((n, i) => [n.id, i]));
index.sort((a, b) => (order.get(a.id) ?? 1e9) - (order.get(b.id) ?? 1e9));
const idx = ['# CENPAY_ENH Wiki - Index', '',
  'Space `RDSCPENH` - Centralized Payment : enhancement & integration',
  `แหล่งที่มา: ${BASE}/display/RDSCPENH/Home`, '',
  `รวม ${index.length} หน้า | มีเนื้อหา ${index.filter(i => i.chars).length} หน้า | ว่าง ${index.filter(i => !i.chars).length} หน้า`, '',
  '| # | Page | Depth | Chars | Links | Att | File |', '|---|---|---|---|---|---|---|'];
index.forEach((i, n) => idx.push(`| ${n + 1} | ${i.title} | ${i.depth} | ${i.chars} | ${i.links} | ${i.atts} | [${i.file}](pages/${encodeURIComponent(i.file)}) |`));
fs.writeFileSync(path.join(__dirname, 'INDEX.md'), idx.join('\n') + '\n');

console.log(`wrote ${index.length} pages -> wiki/pages/`);
console.log(`total content chars: ${index.reduce((a, b) => a + b.chars, 0)}`);
console.log(`empty pages: ${index.filter(i => !i.chars).length}`);
