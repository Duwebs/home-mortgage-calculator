// Central i18n registry. Each language lives in its own file and exports a
// dictionary typed against the English source so missing keys fail fast.
import en from './en';
import es from './es';
import ja from './ja';
import fr from './fr';
import de from './de';
import pt from './pt';
import ko from './ko';
import it from './it';

export const defaultLang = 'en' as const;
export const showDefaultLang = false;

export const languages = {
  en: 'English',
  es: 'Español',
  ja: '日本語',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ko: '한국어',
  it: 'Italiano',
} as const;

export type Lang = keyof typeof languages;

export const ui = { en, es, ja, fr, de, pt, ko, it };
export type Translation = typeof en;

export const locales = Object.keys(languages) as Lang[];

/** BCP-47 hreflang / og:locale values per route prefix. */
export const localeTags: Record<Lang, { hreflang: string; ogLocale: string }> = {
  en: { hreflang: 'en', ogLocale: 'en_US' },
  es: { hreflang: 'es', ogLocale: 'es_ES' },
  ja: { hreflang: 'ja', ogLocale: 'ja_JP' },
  fr: { hreflang: 'fr', ogLocale: 'fr_FR' },
  de: { hreflang: 'de', ogLocale: 'de_DE' },
  pt: { hreflang: 'pt', ogLocale: 'pt_BR' },
  ko: { hreflang: 'ko', ogLocale: 'ko_KR' },
  it: { hreflang: 'it', ogLocale: 'it_IT' },
};