import os

def write(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Wrote {path}")

# Privacy Policy
write("src/pages/privacy-policy.astro", """---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import { getLangFromUrl, useTranslations, useTranslatedPath, type Lang } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const tp = useTranslatedPath(lang);
const meta = t('meta.privacy');
const p = t('privacy');
---

<Layout title={meta.title} description={meta.description} path="/privacy-policy">
  <Navbar {lang} />
  <main class="flex-1">
    <section class="py-16 sm:py-24 bg-canvas">
      <div class="container-main max-w-3xl">
        <h1 class="text-ink font-semibold text-3xl sm:text-4xl tracking-tight mb-2">{p.h1}</h1>
        <p class="text-sm text-mute mb-10">{p.updated}</p>
        <div class="space-y-8 text-body text-base leading-relaxed">
          <p>{p.intro}</p>
          {p.sections.map((s) => (
            <section>
              <h2 class="text-ink font-semibold text-xl tracking-tight mb-3">{s.h}</h2>
              <p>{s.p}</p>
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
""")

# Terms & Conditions
write("src/pages/terms-and-conditions.astro", """---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import { getLangFromUrl, useTranslations, useTranslatedPath, type Lang } from '../i18n/utils';

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
""")

# 404
write("src/pages/404.astro", """---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import { getLangFromUrl, useTranslations, useTranslatedPath, type Lang } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const tp = useTranslatedPath(lang);
const meta = t('meta.404');
const e = t('errors.404');
---

<Layout title={meta.title} description={meta.description} path="/404" noindex>
  <Navbar {lang} />
  <main class="flex-1">
    <section class="py-16 sm:py-24 bg-canvas">
      <div class="container-main max-w-3xl text-center">
        <p class="font-mono text-sm tracking-widest text-body uppercase mb-4">{e.eyebrow}</p>
        <h1 class="text-ink font-semibold text-4xl sm:text-5xl tracking-tight mb-6">{e.h1}</h1>
        <p class="text-body text-lg leading-relaxed max-w-xl mx-auto mb-10">{e.p}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={tp('/')} class="btn-primary">{e.homeBtn}</a>
          <a href={tp('/contact-us')} class="btn-secondary">{e.contactBtn}</a>
        </div>
      </div>
    </section>
  </main>
  <Footer {lang} />
</Layout>
""")

# 500
write("src/pages/500.astro", """---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
import { getLangFromUrl, useTranslations, useTranslatedPath, type Lang } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const tp = useTranslatedPath(lang);
const meta = t('meta.500');
const e = t('errors.500');
---

<Layout title={meta.title} description={meta.description} path="/500" noindex>
  <Navbar {lang} />
  <main class="flex-1">
    <section class="py-16 sm:py-24 bg-canvas">
      <div class="container-main max-w-3xl text-center">
        <p class="font-mono text-sm tracking-widest text-body uppercase mb-4">{e.eyebrow}</p>
        <h1 class="text-ink font-semibold text-4xl sm:text-5xl tracking-tight mb-6">{e.h1}</h1>
        <p class="text-body text-lg leading-relaxed max-w-xl mx-auto mb-10">{e.p}</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={tp('/')} class="btn-primary">{e.homeBtn}</a>
          <a href={tp('/contact-us')} class="btn-secondary">{e.contactBtn}</a>
        </div>
      </div>
    </section>
  </main>
  <Footer {lang} />
</Layout>
""")

print("All pages written.")
