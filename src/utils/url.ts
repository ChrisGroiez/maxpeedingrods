import type { Locale } from '../i18n/utils';
import { locales } from '../i18n/utils';
import { siteConfig } from '../config/site';

export function getLocalizedPath(path: string, locale: Locale): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
}

export function getCanonicalUrl(path: string): string {
  const cleanPath = path.endsWith('/') ? path : `${path}/`;
  return `${siteConfig.url}${cleanPath}`;
}

export function getAlternateUrls(basePath: string): Array<{ locale: Locale; url: string }> {
  return locales.map(locale => ({
    locale,
    url: getCanonicalUrl(getLocalizedPath(basePath, locale)),
  }));
}

export function getProductUrl(slug: string, locale: Locale): string {
  return `/${locale}/generators/${slug}/`;
}

export function getCategoryUrl(locale: Locale): string {
  return `/${locale}/generators/`;
}

export function getHomeUrl(locale: Locale): string {
  return `/${locale}/`;
}

export function switchLocaleUrl(currentPath: string, newLocale: Locale): string {
  const parts = currentPath.split('/').filter(Boolean);
  if (parts.length > 0 && locales.includes(parts[0] as Locale)) {
    parts[0] = newLocale;
  } else {
    parts.unshift(newLocale);
  }
  return `/${parts.join('/')}/`;
}
