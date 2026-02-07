import type { Locale } from '../i18n/utils';

export interface ProductSpecs {
  rated_power_w: number;
  max_power_w: number;
  engine_type: string;
  engine_displacement_cc: number;
  fuel_type: string;
  fuel_tank_l: number;
  runtime_hours: number;
  noise_level_db: number;
  weight_kg: number;
  dimensions_cm: string;
  outlets: string[];
  inverter: boolean;
  electric_start: boolean;
  parallel_ready: boolean;
}

export interface Product {
  id: string;
  model: string;
  brand: string;
  category: string;
  slug: string;
  wattage: number;
  images: string[];
  specs: ProductSpecs;
  asins: Record<string, string>;
  rating: number;
  reviewCount: number;
}

const productModules = import.meta.glob<Product>('../data/products/*.json', { eager: true, import: 'default' });

export function getAllProducts(): Product[] {
  return Object.values(productModules).sort((a, b) => a.wattage - b.wattage);
}

export function getProductBySlug(slug: string): Product | undefined {
  return getAllProducts().find(p => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  const featured = ['mxr3500', 'mxr4500i', 'mxr5500'];
  return getAllProducts().filter(p => featured.includes(p.slug));
}

export function getSimilarProducts(currentSlug: string, limit = 3): Product[] {
  return getAllProducts()
    .filter(p => p.slug !== currentSlug)
    .slice(0, limit);
}

export function getProductAsin(product: Product, locale: Locale): string {
  return product.asins[locale] || product.asins['fr'] || 'BXXXXXXXXX';
}
