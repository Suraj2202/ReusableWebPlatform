/**
 * Pre-build script: Generate WebP versions + responsive sizes for all images.
 * Run before `astro build` via npm script.
 *
 * Generates:
 *  - .webp version of every .jpg/.jpeg/.png in public/assets/
 *  - Responsive sizes (640, 960, 1280) for hero/gallery images
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'node:fs/promises';
import { join, extname, basename, dirname } from 'node:path';
import { existsSync } from 'node:fs';

const ASSETS_DIR = 'public/assets';
const QUALITY = 80;
const RESPONSIVE_WIDTHS = [640, 960, 1280];
const RESPONSIVE_DIRS = ['gallery', 'services']; // Dirs that get responsive sizes

async function getAllImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getAllImages(fullPath)));
    } else if (/\.(jpe?g|png)$/i.test(entry.name)) {
      files.push(fullPath);
    }
  }
  return files;
}

async function generateWebP(filePath) {
  const webpPath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');
  if (existsSync(webpPath)) {
    const srcStat = await stat(filePath);
    const webpStat = await stat(webpPath);
    if (webpStat.mtimeMs >= srcStat.mtimeMs) return; // Skip if up to date
  }

  await sharp(filePath).webp({ quality: QUALITY }).toFile(webpPath);
  console.log(`  ✓ ${webpPath}`);
}

async function generateResponsive(filePath) {
  const ext = extname(filePath);
  const name = basename(filePath, ext);
  const dir = dirname(filePath);

  for (const width of RESPONSIVE_WIDTHS) {
    const responsivePath = join(dir, `${name}-${width}w${ext}`);
    const responsiveWebP = join(dir, `${name}-${width}w.webp`);

    if (!existsSync(responsivePath)) {
      await sharp(filePath).resize(width, null, { withoutEnlargement: true }).jpeg({ quality: QUALITY }).toFile(responsivePath);
      console.log(`  ✓ ${responsivePath}`);
    }

    if (!existsSync(responsiveWebP)) {
      await sharp(filePath).resize(width, null, { withoutEnlargement: true }).webp({ quality: QUALITY }).toFile(responsiveWebP);
      console.log(`  ✓ ${responsiveWebP}`);
    }
  }
}

async function main() {
  console.log('🖼️  Optimizing images...\n');

  if (!existsSync(ASSETS_DIR)) {
    console.log('No assets directory found. Skipping.');
    return;
  }

  const images = await getAllImages(ASSETS_DIR);
  console.log(`Found ${images.length} images\n`);

  for (const img of images) {
    // Skip already-generated responsive images
    if (/-\d+w\.(jpe?g|png|webp)$/i.test(img)) continue;

    await generateWebP(img);

    // Generate responsive sizes for gallery/services images
    const relDir = dirname(img).replaceAll('\\', '/').replace(ASSETS_DIR, '').replace(/^\//, '');
    if (RESPONSIVE_DIRS.includes(relDir)) {
      await generateResponsive(img);
    }
  }

  console.log('\n✅ Image optimization complete!');
}

main().catch(console.error);
