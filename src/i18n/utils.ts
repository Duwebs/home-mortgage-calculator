import { ui, defaultLang, showDefaultLang, type Lang, type Translation } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

/** Returns a nested translation getter for the given language.
 *  Falls back to English when a key is missing in the target language. */
export function useTranslations(lang: Lang): (key: string) => any {
  return function get(key: string): any {
    const resolve = (dict: Translation) =>
      key.split('.').reduce<any>((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict);
    const value = resolve(ui[lang]);
    return value !== undefined ? value : resolve(ui[defaultLang]);
  };
}

export function useTranslatedPath(lang: Lang) {
  return function translatePath(path: string, l: string = lang): string {
    const normalized = path === '/' ? '' : path;
    return !showDefaultLang && l === defaultLang ? normalized : `/${l}${normalized}`;
  };
}
