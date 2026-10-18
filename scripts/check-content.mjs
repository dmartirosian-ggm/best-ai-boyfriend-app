#!/usr/bin/env node
/**
 * Fast content linter for src/content/articles/**\/*.mdx (no full build needed).
 * Usage: node scripts/check-content.mjs [file ...]   (defaults to all articles)
 * Checks: frontmatter schema basics, MDX compiles, only known components, valid app slugs,
 * internal links point at real/planned URLs.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { compile } from '@mdx-js/mdx';
import YAML from 'yaml';

const ROOT = new URL('..', import.meta.url).pathname;
const ART = join(ROOT, 'src/content/articles');
const appsSrc = readFileSync(join(ROOT, 'src/data/apps.ts'), 'utf8');
const SLUGS = new Set([...appsSrc.matchAll(/"slug": "([^"]+)"/g)].map((m) => m[1]));
const PLANNED = new Set(JSON.parse(readFileSync(join(ROOT, 'scripts/planned-urls.json'), 'utf8')));
const COMPONENTS = new Set(['AppCard', 'CompareTable', 'ReviewSummary', 'VsTable', 'CTA', 'Callout', 'ProsCons', 'TopPicksStrip', 'PlanTable']);
const TYPES = new Set(['home', 'listicle', 'review', 'review-support', 'vs', 'alternatives', 'guide', 'faq', 'page']);

const walk = (d) => readdirSync(d).flatMap((f) => (statSync(join(d, f)).isDirectory() ? walk(join(d, f)) : [join(d, f)]));
const files = process.argv.slice(2).length ? process.argv.slice(2) : walk(ART).filter((f) => f.endsWith('.mdx'));
const existing = new Set(walk(ART).filter((f) => f.endsWith('.mdx')).map((f) => {
  const id = relative(ART, f).replace(/\.mdx$/, '');
  return id === 'home' ? '/' : `/${id}/`;
}));
const known = (u) => PLANNED.has(u) || existing.has(u) || /^\/go\/[a-z0-9-]+\/$/.test(u);

let errors = 0;
for (const file of files) {
  const rel = relative(ROOT, file);
  const err = (m) => { errors++; console.log(`✗ ${rel}: ${m}`); };
  const src = readFileSync(file, 'utf8');
  const m = src.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) { err('missing frontmatter'); continue; }
  let fm;
  try { fm = YAML.parse(m[1]); } catch (e) { err(`YAML: ${e.message}`); continue; }
  for (const k of ['title', 'description', 'keyword', 'type', 'published', 'updated']) if (!fm[k]) err(`frontmatter missing "${k}"`);
  if (fm.type && !TYPES.has(fm.type)) err(`bad type "${fm.type}"`);
  if (fm.title && fm.title.length > 65) err(`title is ${fm.title.length} chars (keep ≤ 65)`);
  if (fm.description && (fm.description.length > 165 || fm.description.length < 110)) err(`description is ${fm.description.length} chars (aim 110–160)`);
  for (const s of fm.apps ?? []) if (!SLUGS.has(s)) err(`unknown app slug in frontmatter: ${s}`);
  for (const f of fm.faqs ?? []) {
    if (!f.q || !f.a) err('faq item needs q and a');
    for (const l of String(f.a ?? '').matchAll(/\]\((\/[^)#\s]*)/g)) if (!known(l[1])) err(`faq links to unknown URL ${l[1]}`);
  }
  for (const r of fm.related ?? []) if (!known(r)) err(`related URL not planned/existing: ${r}`);

  const body = m[2];
  try { await compile(body); } catch (e) { err(`MDX: ${e.message}`); }
  for (const c of body.matchAll(/<([A-Z][A-Za-z]*)/g)) if (!COMPONENTS.has(c[1])) err(`unknown component <${c[1]}>`);
  for (const s of body.matchAll(/\bapp="([^"]+)"/g)) if (!SLUGS.has(s[1])) err(`unknown app slug ${s[1]}`);
  for (const s of body.matchAll(/\b[ab]="([^"]+)"/g)) if (!SLUGS.has(s[1])) err(`unknown app slug ${s[1]}`);
  for (const arr of body.matchAll(/apps=\{\[([^\]]*)\]\}/g))
    for (const s of arr[1].matchAll(/"([^"]+)"/g)) if (!SLUGS.has(s[1])) err(`unknown app slug ${s[1]}`);
  for (const p of body.matchAll(/app: "([^"]+)"/g)) if (!SLUGS.has(p[1])) err(`unknown app slug ${p[1]}`);
  for (const l of body.matchAll(/\]\((\/[^)#\s]*)/g)) if (!known(l[1])) err(`links to unknown URL ${l[1]}`);
  if (/^#\s/m.test(body)) err('body has an H1 (#) — the layout renders the H1; start at ##');
  const words = body.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  console.log(`${errors ? '·' : '✓'} ${rel} (${words} words)`);
}
console.log(errors ? `\n${errors} problem(s)` : '\nAll good.');
process.exit(errors ? 1 : 0);
