import os

langs = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it']

def write(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Wrote {path}")

contact_page = """---
import Layout from '../../layouts/Layout.astro';
import Navbar from '../../components/Navbar.astro';
import Footer from '../../components/Footer.astro';
import { getLangFromUrl, useTranslations, useTranslatedPath, type Lang } from '../../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const tp = useTranslatedPath(lang);
const meta = t('meta.contact');
const c = t('contact');
---

<Layout title={meta.title} description={meta.description} path="/contact-us">
  <Navbar {lang} />
  <main class="flex-1">
    <section class="py-16 sm:py-24 bg-canvas">
      <div class="container-main max-w-3xl">
        <h1 class="text-ink font-semibold text-3xl sm:text-4xl tracking-tight mb-4">{c.h1}</h1>
        <p class="text-body text-base leading-relaxed mb-10">{c.intro}</p>
        <form class="border border-hairline rounded-lg bg-elevated p-6 sm:p-8 space-y-6" action="mailto:openmailon@gmail.com" method="get" enctype="text/plain">
          <div class="grid sm:grid-cols-2 gap-6">
            <label class="flex flex-col gap-2">
              <span class="text-sm font-medium text-ink">{c.nameLabel}</span>
              <input type="text" name="name" required placeholder={c.namePlaceholder} class="w-full rounded-sm border border-hairline bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-link" />
            </label>
            <label class="flex flex-col gap-2">
              <span class="text-sm font-medium text-ink">{c.emailLabel}</span>
              <input type="email" name="email" required placeholder={c.emailPlaceholder} class="w-full rounded-sm border border-hairline bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-link" />
            </label>
          </div>
          <label class="flex flex-col gap-2">
            <span class="text-sm font-medium text-ink">{c.subjectLabel}</span>
            <input type="text" name="subject" placeholder={c.subjectPlaceholder} class="w-full rounded-sm border border-hairline bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-link" />
          </label>
          <label class="flex flex-col gap-2">
            <span class="text-sm font-medium text-ink">{c.messageLabel}</span>
            <textarea name="body" rows="6" required placeholder={c.messagePlaceholder} class="w-full rounded-sm border border-hairline bg-canvas px-3 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:ring-2 focus:ring-link resize-y"></textarea>
          </label>
          <button type="submit" class="btn-primary w-full sm:w-auto">{c.sendBtn}</button>
          <p class="text-xs text-mute leading-relaxed">{c.noBackendNote}</p>
        </form>
        <div class="grid sm:grid-cols-2 gap-6 mt-10">
          <div class="border border-hairline rounded-lg p-6 bg-elevated">
            <h2 class="text-ink font-semibold text-lg tracking-tight mb-2">{c.emailUs.h}</h2>
            <p class="text-body text-sm leading-relaxed">{c.emailUs.p} <a href="mailto:openmailon@gmail.com" class="text-link underline underline-offset-2 decoration-link/40 hover:decoration-link">openmailon@gmail.com</a>.</p>
          </div>
          <div class="border border-hairline rounded-lg p-6 bg-elevated">
            <h2 class="text-ink font-semibold text-lg tracking-tight mb-2">{c.faq.h}</h2>
            <p class="text-body text-sm leading-relaxed">{c.faq.p1} <a href={tp('/#faq')} class="text-link underline underline-offset-2 decoration-link/40 hover:decoration-link">{c.faq.linkText}</a> {c.faq.p2}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer {lang} />
</Layout>
"""

privacy_page = """---
import Layout from '../../layouts/Layout.astro';
import Navbar from '../../components/Navbar.astro';
import Footer from '../../components/Footer.astro';
import { getLangFromUrl, useTranslations, useTranslatedPath, type Lang } from '../../i18n/utils';

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
"""

for lang in langs:
    write(f"src/pages/{lang}/contact-us.astro", contact_page)
    write(f"src/pages/{lang}/privacy-policy.astro", privacy_page)

print("Phase 2 done.")
