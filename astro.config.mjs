// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { readdir, writeFile } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// https://astro.build/config
const SITE = 'https://homemortgagecalculator.vercel.app';

// Generates a rooted sitemap.xml and robots.txt from the built HTML output.
// Error pages (404/500) are emitted with `noindex` by Layout and are excluded.
function siteFiles() {
  return {
    name: 'site-files',
    hooks: {
      async 'astro:build:done'({ dir }) {
        const root = fileURLToPath(dir);
        const html = [];
        const walk = async (current) => {
          for (const entry of await readdir(current, { withFileTypes: true })) {
            const abs = join(current, entry.name);
            if (entry.isDirectory()) {
              await walk(abs);
            } else if (entry.isFile() && entry.name.endsWith('.html')) {
              html.push(relative(root, abs));
            }
          }
        };

        await walk(root);

        const toUrl = (rel) => {
          const segments = rel.split(sep);
          const fileName = segments[segments.length - 1];
          if (fileName === 'error.html') {
            return null;
          }
          const isRootFile = segments.length === 1;
          if (fileName === '404.html' || fileName === '500.html') {
            return null;
          }
          if (!isRootFile && (segments.includes('404') || segments.includes('500'))) {
            return null;
          }
          let p = rel.split(sep).join('/');
          if (p.endsWith('index.html')) {
            p = p.slice(0, -'index.html'.length);
          } else if (p.endsWith('.html')) {
            p = p.slice(0, -'.html'.length);
          }
          return '/' + p;
        };

        const urls = html
          .filter((rel) => rel.length > 0)
          .map(toUrl)
          .filter((url) => url !== null)
          .map((url) => SITE + url)
          .sort();

        const lastmod = new Date().toISOString().slice(0, 10);
        const urlsXml = urls
          .map(
            (loc) =>
              `  <url>\n` +
              `    <loc>${loc}</loc>\n` +
              `    <lastmod>${lastmod}</lastmod>\n` +
              `    <changefreq>monthly</changefreq>\n` +
              `  </url>`,
          )
          .join('\n');

        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlsXml}\n</urlset>\n`;
        const robots = `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;

        await writeFile(join(root, 'sitemap.xml'), sitemap, 'utf-8');
        await writeFile(join(root, 'robots.txt'), robots, 'utf-8');
      },
    },
  };
}

export default defineConfig({
  site: SITE,
  integrations: [siteFiles()],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});