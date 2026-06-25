/**
 * Post-build script: inject CSP script-src hashes into dist/_headers.
 *
 * Astro emits small inline <script> tags (module preloads, hydration shims).
 * Rather than allowing 'unsafe-inline', we compute SHA-256 hashes of each
 * unique inline script and append them to the Content-Security-Policy header.
 *
 * Run automatically via the "postbuild" npm script.
 */

import { createHash } from 'node:crypto';
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');

/**
 * Recursively find all .html files in a directory.
 */
async function findHtml(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await findHtml(full)));
    } else if (entry.name.endsWith('.html')) {
      files.push(full);
    }
  }
  return files;
}

/**
 * Extract all inline <script> contents from an HTML string.
 * Matches <script>…</script> but NOT <script src="…">…</script>.
 */
function extractInlineScripts(html) {
  const results = [];
  // Match <script> tags that do NOT have a src attribute
  const re = /<script(?:\s+(?!src[ =])[^>]*)?>([^]*?)<\/script>/gi;
  let m;
  while ((m = re.exec(html)) !== null) {
    const content = m[1];
    if (content.trim().length > 0) {
      results.push(content);
    }
  }
  return results;
}

/**
 * Compute CSP-compatible SHA-256 hash for a script body.
 */
function cspHash(scriptContent) {
  const hash = createHash('sha256').update(scriptContent, 'utf8').digest('base64');
  return `'sha256-${hash}'`;
}

async function main() {
  // 1. Collect all unique inline script hashes
  const htmlFiles = await findHtml(DIST);
  const hashes = new Set();

  for (const file of htmlFiles) {
    const html = await readFile(file, 'utf8');
    const scripts = extractInlineScripts(html);
    for (const script of scripts) {
      hashes.add(cspHash(script));
    }
  }

  if (hashes.size === 0) {
    console.log('[csp-hashes] No inline scripts found — _headers unchanged.');
    return;
  }

  // 2. Read existing _headers
  const headersPath = join(DIST, '_headers');
  let headers = await readFile(headersPath, 'utf8');

  // 3. Inject hashes into script-src directive
  const hashStr = [...hashes].join(' ');

  // Replace script-src 'self' data: with script-src 'self' data: + hashes
  headers = headers.replace(/script-src 'self'( data:)?/, `script-src 'self' data: ${hashStr}`);

  await writeFile(headersPath, headers, 'utf8');
  console.log(`[csp-hashes] Injected ${hashes.size} script hash(es) into dist/_headers.`);
  for (const h of hashes) {
    console.log(`  ${h}`);
  }
}

main().catch((err) => {
  console.error('[csp-hashes] Error:', err);
  process.exit(1);
});
