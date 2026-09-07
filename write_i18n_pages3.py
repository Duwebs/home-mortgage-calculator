import os

langs = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it']

def write(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Wrote {path}")

terms_page = """---
import Layout from '../../layouts/Layout.astro';
import Navbar from '../../components/Navbar.astro';
import Footer from '../../components/Footer.astro';
import { getLangFromUrl, useTranslations, useTranslatedPath, type Lang } from '../../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const tp = useTranslatedPath(lang);
const meta = t('meta.terms');
const tc = t('terms');
---

<Layout title={meta.title} description={meta.description} path="/terms-and-conditions">
  <Navbar {lang} />
  <main class="flex-1">
    <section class="py-16 sm:py-24 bg-canvas">
      <div class="container-main max-w-3xl">
        <h1 class="text-ink font-semibold text-3xl sm:text-4xl tracking-tight mb-2">{tc.h1}</h1>
        <p class="text-sm text-mute mb-10">{tc.updated}</p>
        <div class="space-y-8 text-body text-base leading-relaxed">
          <p>{tc.intro}</p>
          {tc.sections.map((s) => (
            <section>
              <h2 class="text-ink font-semibold text-xl tracking-tight mb-3">{s.h}</h2>
              {s.ps.map((para) => <p class="mb-4">{para}</p>)}
              {s.items && (
                <ul class="list-disc pl-5 space-y-2 mt-4">
                  {s.items.map((item) => <li>{item}</li>)}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </section>
  </main>
  <Footer {lang} />
</Layout>
"""

for lang in langs:
    write(f"src/pages/{lang}/terms-and-conditions.astro", terms_page)

print("Phase 3 done.")
