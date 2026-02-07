import fr from './fr.json';
import en from './en.json';
import de from './de.json';
import es from './es.json';
import it from './it.json';
import nl from './nl.json';

const translations: Record<string, typeof fr> = { fr, en, de, es, it, nl };

export const locales = ['fr', 'en', 'de', 'es', 'it', 'nl'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'fr';

export function t(locale: string, key: string): string {
  const keys = key.split('.');
  let result: any = translations[locale] || translations[defaultLocale];
  for (const k of keys) {
    result = result?.[k];
  }
  return typeof result === 'string' ? result : key;
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (locales.includes(lang as Locale)) return lang as Locale;
  return defaultLocale;
}

export function getLocalizedUrl(path: string, locale: Locale): string {
  return `/${locale}${path.startsWith('/') ? path : '/' + path}`;
}
