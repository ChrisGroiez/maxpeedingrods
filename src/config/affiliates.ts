import affiliateData from './affiliates.json';

interface AffiliateConfig {
  locale: string;
  tag: string;
  domain: string;
  baseUrl: string;
}

const configMap: Record<string, AffiliateConfig> = {};
for (const country of affiliateData.countries) {
  configMap[country.locale] = country;
}

export const affiliateConfig = configMap;

export function getAffiliateLink(locale: string, asin: string): string {
  const config = affiliateConfig[locale] || affiliateConfig['fr'];
  return `${config.baseUrl}/dp/${asin}?tag=${config.tag}`;
}
