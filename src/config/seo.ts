import type { Locale } from '../i18n/utils';

interface SEOMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export const homeSEO: Record<Locale, SEOMeta> = {
  fr: {
    title: 'Maxpeedingrods | Générateurs Portables Inverter — Groupes Électrogènes',
    description: 'Découvrez les générateurs portables Maxpeedingrods : inverter silencieux, du 1200W au 5500W. Qualité professionnelle au meilleur prix.',
  },
  en: {
    title: 'Maxpeedingrods | Portable Inverter Generators — Power Generators',
    description: 'Discover Maxpeedingrods portable generators: quiet inverter technology, from 1200W to 5500W. Professional quality at the best price.',
  },
  de: {
    title: 'Maxpeedingrods | Tragbare Inverter Stromerzeuger — Notstromaggregate',
    description: 'Entdecken Sie die tragbaren Maxpeedingrods Stromerzeuger: leise Inverter-Technologie, von 1200W bis 5500W. Professionelle Qualität zum besten Preis.',
  },
  es: {
    title: 'Maxpeedingrods | Generadores Portátiles Inverter — Grupos Electrógenos',
    description: 'Descubre los generadores portátiles Maxpeedingrods: tecnología inverter silenciosa, de 1200W a 5500W. Calidad profesional al mejor precio.',
  },
  it: {
    title: 'Maxpeedingrods | Generatori Portatili Inverter — Gruppi Elettrogeni',
    description: 'Scopri i generatori portatili Maxpeedingrods: tecnologia inverter silenziosa, da 1200W a 5500W. Qualità professionale al miglior prezzo.',
  },
  nl: {
    title: 'Maxpeedingrods | Draagbare Inverter Generatoren — Stroomgeneratoren',
    description: 'Ontdek de draagbare Maxpeedingrods generatoren: stille inverter technologie, van 1200W tot 5500W. Professionele kwaliteit voor de beste prijs.',
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
