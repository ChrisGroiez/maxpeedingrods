import type { Locale } from '../i18n/utils';

interface SEOMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export const homeSEO: Record<Locale, SEOMeta> = {
  fr: {
    title: 'Maxpeedingrods — Groupes Électrogènes & Générateurs Inverter Portables | Avis & Comparatif',
    description: 'Découvrez les générateurs Maxpeedingrods : groupes électrogènes inverter portables de 1200W à 5500W. Avis clients, caractéristiques et meilleures offres. Livraison en France.',
  },
  en: {
    title: 'Maxpeedingrods UK — Portable Inverter Generators | Reviews & Best Deals',
    description: 'Shop Maxpeedingrods generators in the UK: portable inverter generators from 1200W to 5500W. Read customer reviews, compare specs and find the best deals.',
  },
  de: {
    title: 'Maxpeedingrods Deutschland — Inverter Stromerzeuger & Generatoren | Erfahrungen & Test',
    description: 'Maxpeedingrods Inverter Stromerzeuger von 1200W bis 5500W. Erfahrungen, Testberichte und Bewertungen. Tragbare Generatoren zum besten Preis in Deutschland.',
  },
  es: {
    title: 'Maxpeedingrods España — Generadores Inverter Portátiles | Opiniones y Ofertas',
    description: 'Generadores Maxpeedingrods: generadores inverter portátiles de gasolina de 1200W a 5500W. Opiniones de clientes, especificaciones y mejores ofertas en España.',
  },
  it: {
    title: 'Maxpeedingrods Italia — Generatori Inverter Portatili | Recensioni e Offerte',
    description: 'Scopri i generatori Maxpeedingrods: generatori inverter portatili da 1200W a 5500W. Recensioni clienti, schede tecniche e migliori offerte in Italia.',
  },
  nl: {
    title: 'Maxpeedingrods Nederland — Draagbare Inverter Generatoren | Reviews & Aanbiedingen',
    description: 'Ontdek Maxpeedingrods generatoren: draagbare inverter generatoren van 1200W tot 5500W. Klantreviews, specificaties en de beste aanbiedingen in Nederland.',
  },
};

export const categorySEO: Record<Locale, SEOMeta> = {
  fr: {
    title: 'Générateurs Maxpeedingrods | Groupes Électrogènes Inverter Portables',
    description: 'Gamme complète de groupes électrogènes Maxpeedingrods : du 1200W au 5500W. Générateurs inverter portables, silencieux et fiables au meilleur prix.',
  },
  en: {
    title: 'Maxpeedingrods Generators | Portable Inverter Power Generators',
    description: 'Complete range of Maxpeedingrods generators: from 1200W to 5500W. Portable, quiet, and reliable inverter generators at the best price.',
  },
  de: {
    title: 'Maxpeedingrods Stromerzeuger | Tragbare Inverter Notstromaggregate',
    description: 'Komplette Auswahl an Maxpeedingrods Stromerzeugern: von 1200W bis 5500W. Tragbare, leise und zuverlässige Inverter-Stromerzeuger zum besten Preis.',
  },
  es: {
    title: 'Generadores Maxpeedingrods | Grupos Electrógenos Portátiles Inverter',
    description: 'Gama completa de generadores Maxpeedingrods: de 1200W a 5500W. Generadores inverter portátiles, silenciosos y fiables al mejor precio.',
  },
  it: {
    title: 'Generatori Maxpeedingrods | Gruppi Elettrogeni Portatili Inverter',
    description: 'Gamma completa di generatori Maxpeedingrods: da 1200W a 5500W. Generatori inverter portatili, silenziosi e affidabili al miglior prezzo.',
  },
  nl: {
    title: 'Maxpeedingrods Generatoren | Draagbare Inverter Stroomgeneratoren',
    description: 'Compleet assortiment Maxpeedingrods generatoren: van 1200W tot 5500W. Draagbare, stille en betrouwbare inverter generatoren voor de beste prijs.',
  },
};
