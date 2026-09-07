import os

langs = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it']

def write(path, content):
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Wrote {path}")

index_page = """---
import Layout from '../../layouts/Layout.astro';
import Navbar from '../../components/Navbar.astro';
import Hero from '../../components/Hero.astro';
import Calculator from '../../components/Calculator.astro';
import AmortizationTable from '../../components/AmortizationTable.astro';
import ExtraPayments from '../../components/ExtraPayments.astro';
import EducationSection from '../../components/EducationSection.astro';
import SEOContent from '../../components/SEOContent.astro';
import CTABand from '../../components/CTABand.astro';
import Footer from '../../components/Footer.astro';
import { getLangFromUrl, useTranslations, type Lang } from '../../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const meta = t('meta.home');
---

<Layout title={meta.title} description={meta.description} path="/">
  <Navbar {lang} />
  <main class="flex-1">
    <Hero {lang} />
    <Calculator {lang} />
    <AmortizationTable {lang} />
    <ExtraPayments {lang} />
    <EducationSection {lang} />
    <SEOContent {lang} />
    <CTABand {lang} />
  </main>
  <Footer {lang} />
</Layout>
"""

about_page = """---
import Layout from '../../layouts/Layout.astro';
import Navbar from '../../components/Navbar.astro';
import Footer from '../../components/Footer.astro';
import { getLangFromUrl, useTranslations, useTranslatedPath, type Lang } from '../../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
const tp = useTranslatedPath(lang);
const meta = t('meta.about');
const a = t('about');
---

<Layout title={meta.title} description={meta.description} path="/about-us">
  <Navbar {lang} />
  <main class="flex-1">
    <section class="py-16 sm:py-24 bg-canvas">
      <div class="container-main max-w-3xl">
        <h1 class="text-ink font-semibold text-3xl sm:text-4xl tracking-tight mb-6">{a.h1}</h1>
        <div class="space-y-6 text-body text-base leading-relaxed mb-10">
          <p class="text-lg text-ink leading-relaxed">{a.lead}</p>
          <p>{a.p1}</p>
          <p>{a.p2}</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6 mb-10">
          {a.cards.map((card) => (
            <div class="border border-hairline rounded-lg p-6 bg-elevated">
              <h2 class="text-ink font-semibold text-lg tracking-tight mb-2">{card.h}</h2>
              <p class="text-body text-sm leading-relaxed">{card.p}</p>
            </div>
          ))}
        </div>
        <div class="space-y-8 text-body text-base leading-relaxed">
          <section>
            <h2 class="text-ink font-semibold text-xl tracking-tight mb-3">{a.whatWeDo.h}</h2>
            <p>{a.whatWeDo.p1}</p>
            <p class="mt-4">{a.whatWeDo.p2}</p>
          </section>
          <section>
            <h2 class="text-ink font-semibold text-xl tracking-tight mb-3">{a.values.h}</h2>
            <ul class="list-disc pl-5 space-y-2">
              {a.values.items.map((item) => (<li set:html={item} />))}
            </ul>
          </section>
          <section>
            <h2 class="text-ink font-semibold text-xl tracking-tight mb-3">{a.note.h}</h2>
            <p>{a.note.p}</p>
          </section>
          <section>
            <h2 class="text-ink font-semibold text-xl tracking-tight mb-3">{a.touch.h}</h2>
            <p>{a.touch.p} <a href={tp('/contact-us')} class="text-link underline underline-offset-2 decoration-link/40 hover:decoration-link">{a.touch.linkText}</a>.</p>
          </section>
        </div>
      </div>
    </section>
  </main>
  <Footer {lang} />
</Layout>
"""

for lang in langs:
    os.makedirs(f"src/pages/{lang}", exist_ok=True)
    write(f"src/pages/{lang}/index.astro", index_page)
    write(f"src/pages/{lang}/about-us.astro", about_page)

print("Phase 1 done.")
