import { mkdirSync, writeFileSync, existsSync, readFileSync, readdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const locales = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];

// Fix import paths for files one level deeper in the directory tree
function fixPaths(content) {
  // Match only the first '../' or '../../' after from '...' or from "..."
  // and add one more level
  return content.replace(
    /(from\s+['"])(\.\.\/|\.\.\/\.\.\/)/g,
    (_, prefix, path) => {
      if (path === '../') return prefix + '../../';
      if (path === '../../') return prefix + '../../../';
      return prefix + path;
    }
  );
}

for (const locale of locales) {
  const dir = join(root, 'src', 'pages', locale);
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

  const pagesDir = join(root, 'src', 'pages');
  const files = readdirSync(pagesDir).filter(f => f.endsWith('.astro') && !f.startsWith('['));

  for (const file of files) {
    const srcPath = join(pagesDir, file);
    const destPath = join(dir, file);

    let content = readFileSync(srcPath, 'utf8');

    // Hardcode the locale since Astro routing handles it via directory
    content = content.replace(
      /const lang = getLangFromUrl\(Astro\.url\);/,
      "const lang = '" + locale + "' as Lang;"
    );

    // Fix import paths - we're one level deeper so add one more ../
    content = fixPaths(content);

    writeFileSync(destPath, content);
    console.log('Created ' + destPath);
  }
}

console.log('Done!');
