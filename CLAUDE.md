# PROMPT CLAUDE CODE — Projet Maxpeedingrods.lu (Site d'affiliation)

## 🎯 Objectif global

Crée un site d'affiliation e-commerce complet pour le domaine **maxpeedingrods.lu**. Le site doit ressembler en tout point à un vrai site e-commerce (page d'accueil, catégories, fiches produits), mais il n'y a **aucun panier, aucun checkout, aucun paiement**. À la place, chaque produit a un bouton **"Voir l'offre"** qui redirige l'utilisateur vers un lien d'affiliation externe.

**⚠️ RÈGLE ABSOLUE** : Le nom "Amazon" ne doit **JAMAIS** apparaître sur les pages du site (ni sur les pages produits, ni sur les catégories, ni sur la page d'accueil, ni dans les boutons, ni dans les textes). La **seule exception** est une mention légale discrète et obligatoire dans le footer du site, dans un texte en petits caractères. Le site doit paraître être un site e-commerce indépendant.

**Phase 1 (scope actuel)** : Uniquement les **générateurs électriques / groupes électrogènes** de la marque Maxpeedingrods.

---

## 🏗️ Stack technique

| Composant | Technologie | Pourquoi |
|-----------|-------------|----------|
| **Framework** | Astro v5+ (SSG) | Génère du HTML statique pur, 0 JS inutile → score Lighthouse ~100, parfait pour le SEO |
| **Styling** | Tailwind CSS v4 | Utility-first, purge automatique, léger en production |
| **Langage** | TypeScript | Typage strict pour la robustesse |
| **Contenu** | Fichiers JSON structurés | Facile à éditer, pas de base de données |
| **Reviews** | JSON statique + endpoint API Astro (SSR hybride) | Avis pré-remplis + soumission de nouveaux avis |
| **CMS** | Decap CMS (ex-Netlify CMS) | Interface admin web pour modifier contenus/images sans toucher au code |
| **Déploiement** | Build statique → VPS nginx | `npm run build` → copier `dist/` sur le serveur |
| **Routing i18n** | Astro built-in i18n | Préfixe de langue automatique |

### Remarques sur la stack
- **Tout est en JavaScript/TypeScript**. Installation et mises à jour via `npm install` / `npm update`.
- **Astro est simple** : fichiers `.astro` = HTML avec logique serveur. Pas de React/Vue sauf si nécessaire (Astro Islands).
- **Mises à jour faciles** : `npm update` suffit. Breaking changes Astro = rares et documentés.

---

## 🎨 Identité visuelle — Design System complet

### Philosophie du design

Les produits Maxpeedingrods utilisent un code couleur **jaune/orange industriel + noir**, identique à celui de marques professionnelles comme DeWalt, Caterpillar ou Stanley. Ce code couleur évoque immédiatement la **robustesse, la fiabilité et le professionnalisme**. Le site doit refléter cette identité en reprenant ces couleurs produit comme fil conducteur du design.

Le site doit être **visuellement beau et soigné**, avec une **UI/UX irréprochable** aussi bien sur desktop que sur mobile. L'expérience doit être fluide, rapide, et donner confiance à l'utilisateur dès la première seconde. On vise un design e-commerce premium, pas un template générique.

### Palette de couleurs

La palette est directement inspirée des produits (jaune-orange + noir) et enrichie de couleurs complémentaires pour la lisibilité et la confiance.

```javascript
// tailwind.config.mjs — Couleurs personnalisées
colors: {
  // Couleurs primaires — tirées des produits
  brand: {
    yellow: '#F5A623',       // Jaune-orange industriel des générateurs (couleur dominante produit)
    'yellow-light': '#FDB940', // Hover / variante claire
    'yellow-dark': '#E09000',  // Active / variante foncée
    black: '#1A1A1A',         // Noir profond des produits
    'black-light': '#2D2D2D', // Variante légèrement plus claire
  },

  // Couleurs fonctionnelles
  ui: {
    dark: '#111827',          // Fond header/footer (quasi-noir bleuté, plus riche que du noir pur)
    'dark-alt': '#1F2937',    // Fond sections alternées
    light: '#F9FAFB',         // Fond de page principal (gris très clair, presque blanc)
    white: '#FFFFFF',         // Cards, modales
    border: '#E5E7EB',        // Bordures subtiles
    'border-dark': '#374151', // Bordures sur fond sombre
  },

  // CTA et actions
  cta: {
    DEFAULT: '#F5A623',       // Bouton "Voir l'offre" — même jaune que les produits
    hover: '#E09000',         // Hover du CTA
    active: '#C97E00',        // Active du CTA
    text: '#1A1A1A',          // Texte sur bouton CTA (noir pour contraste sur jaune)
  },

  // Texte
  text: {
    primary: '#111827',       // Titres et texte principal
    secondary: '#4B5563',     // Descriptions, labels
    muted: '#9CA3AF',         // Texte discret (mentions légales, etc.)
    inverse: '#FFFFFF',       // Texte sur fond sombre
  },

  // Statuts
  status: {
    success: '#059669',       // "En stock", avis positifs
    warning: '#D97706',       // Alertes
    error: '#DC2626',         // Erreurs
    info: '#2563EB',          // Informations
  },

  // Étoiles reviews
  star: {
    filled: '#F59E0B',        // Étoile pleine (ambre)
    empty: '#D1D5DB',         // Étoile vide (gris)
  }
}
```

### Cas d'usage des couleurs

| Élément | Couleur | Code | Pourquoi |
|---------|---------|------|----------|
| Header / Footer | Quasi-noir bleuté | `ui.dark` (#111827) | Ancrage visuel fort, contraste avec le jaune |
| Fond de page | Gris très clair | `ui.light` (#F9FAFB) | Aéré, repose les yeux, met en valeur les cards |
| Cards produit | Blanc | `ui.white` (#FFFFFF) | Clarté, ombre légère `shadow-sm hover:shadow-md` |
| Bouton "Voir l'offre" | Jaune Maxpeedingrods | `cta.DEFAULT` (#F5A623) | Cohérence avec la couleur des produits physiques |
| Texte du bouton CTA | Noir | `cta.text` (#1A1A1A) | Contraste maximal sur fond jaune |
| Badge "En stock" | Vert | `status.success` (#059669) | Convention e-commerce universelle |
| Titres H1/H2 | Noir profond | `text.primary` (#111827) | Lisibilité maximale, sérieux |
| Spécifications techniques | Alternance gris/blanc | `ui.light` / `ui.white` | Tableau rayé pour la lisibilité |
| Hover cards | Ombre agrandie + léger scale | `shadow-md` + `scale-[1.02]` | Feedback visuel élégant |

### Typographie

**Combinaison choisie** : **Barlow** (titres) + **Inter** (corps de texte)

Ce pairing est idéal pour un site e-commerce de produits industriels/professionnels :

- **Barlow** (Google Font, gratuite) : Police géométrique légèrement condensée, évoquant l'univers industriel et technique. Ses formes nettes et son côté "ingénieur" s'accordent parfaitement avec des produits de type générateurs. Utilisée en **Semi-Bold (600)** et **Bold (700)** pour les titres.

- **Inter** (Google Font, gratuite) : La référence en matière de lisibilité sur écran. Conçue spécifiquement pour les interfaces numériques. Parfaite pour le corps de texte, les descriptions produits et les spécifications. Utilisée en **Regular (400)** et **Medium (500)**.

```javascript
// tailwind.config.mjs — Typographie
fontFamily: {
  heading: ['Barlow', 'sans-serif'],      // Titres, nav, boutons
  body: ['Inter', 'sans-serif'],           // Corps de texte, descriptions, specs
}
```

**Chargement optimisé des polices** (à placer dans le `<head>` via SEOHead.astro) :

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

### Hiérarchie typographique

| Élément | Police | Poids | Taille (mobile → desktop) | Couleur |
|---------|--------|-------|---------------------------|---------|
| H1 (titre de page) | Barlow | 700 (Bold) | 28px → 40px | `text.primary` |
| H2 (sections) | Barlow | 700 (Bold) | 24px → 32px | `text.primary` |
| H3 (sous-sections) | Barlow | 600 (Semi-Bold) | 20px → 24px | `text.primary` |
| Navigation | Barlow | 600 (Semi-Bold) | 15px → 16px | `text.inverse` (sur header sombre) |
| Bouton CTA | Barlow | 700 (Bold) | 16px → 18px | `cta.text` (noir sur jaune) |
| Corps de texte | Inter | 400 (Regular) | 15px → 16px | `text.primary` |
| Description produit | Inter | 400 (Regular) | 15px → 16px | `text.secondary` |
| Spécifications | Inter | 500 (Medium) pour labels, 400 pour valeurs | 14px → 15px | `text.secondary` / `text.primary` |
| Badges | Inter | 500 (Medium) | 12px → 13px | Variable |
| Mentions légales | Inter | 400 (Regular) | 12px → 13px | `text.muted` |

### Effets et micro-interactions

Pour donner une sensation premium et soignée :

```css
/* Transitions globales */
.transition-base { @apply transition-all duration-200 ease-in-out; }

/* Cards produit */
.product-card {
  @apply bg-white rounded-xl shadow-sm border border-gray-100
         hover:shadow-lg hover:scale-[1.02] hover:border-brand-yellow/30
         transition-all duration-300 ease-out;
}

/* Bouton CTA "Voir l'offre" */
.btn-cta {
  @apply bg-cta text-cta-text font-heading font-bold
         py-4 px-8 rounded-lg text-lg
         shadow-md hover:shadow-xl hover:bg-cta-hover
         active:bg-cta-active active:scale-[0.98]
         transition-all duration-200;
}

/* Image produit au hover */
.product-image-hover {
  @apply transition-transform duration-500 ease-out hover:scale-105;
}

/* Onglets fiche produit */
.tab-active {
  @apply border-b-2 border-brand-yellow text-text-primary font-medium;
}
.tab-inactive {
  @apply border-b-2 border-transparent text-text-secondary hover:text-text-primary hover:border-gray-300;
}
```

### Responsive design — Breakpoints

Le site est conçu **mobile-first** et doit être parfait sur toutes les tailles d'écran :

| Breakpoint | Taille | Layout |
|------------|--------|--------|
| Mobile | < 640px | 1 colonne, nav hamburger, CTA full-width |
| Tablette | 640px - 1024px | 2 colonnes grille produits, nav visible |
| Desktop | > 1024px | 3 colonnes grille, sidebar filtres, layout 2 colonnes fiche produit |
| Large | > 1280px | Conteneur max-width 1280px centré |

**Points critiques responsive** :
- **Header** : Sur mobile, navigation hamburger avec menu déroulant. Sur desktop, navigation horizontale complète avec LanguageSwitcher visible.
- **Page catégorie** : Sur mobile, les filtres sont dans un tiroir (drawer) accessible via un bouton "Filtrer". Sur desktop, sidebar à gauche.
- **Fiche produit** : Sur mobile, l'image passe au-dessus, puis le bloc CTA, puis les specs. Sur desktop, layout 2 colonnes (60/40).
- **Bouton CTA** : Sur mobile, toujours **full-width** et **sticky en bas d'écran** quand l'utilisateur scrolle la fiche produit (pour maximiser les conversions).
- **Footer** : Sur mobile, sections empilées en accordéon. Sur desktop, grille 4 colonnes.

### Composants visuels clés

#### Card produit (grille catégorie)
```
┌──────────────────────────┐
│  ┌────────────────────┐  │
│  │                    │  │
│  │   Image produit    │  │  ← Ratio 4:3, object-fit: contain, fond gris clair
│  │                    │  │
│  └────────────────────┘  │
│                          │
│  Maxpeedingrods MXR3500  │  ← Barlow Semi-Bold, text-primary
│  Générateur Inverter     │  ← Inter Regular, text-secondary
│  3300W                   │
│                          │
│  ★★★★☆  (47 avis)       │  ← Étoiles ambre + count gris
│                          │
│  • 3300W • 58 dB • 23 kg │  ← Specs clés résumées, Inter, text-muted
│                          │
│  ┌────────────────────┐  │
│  │   Voir l'offre  ↗  │  │  ← btn-cta pleine largeur
│  └────────────────────┘  │
└──────────────────────────┘
```

#### Bloc CTA fiche produit (colonne droite)
```
┌──────────────────────────────┐
│  🏷️ Générateur Inverter      │  ← Badge catégorie, fond jaune/10
│                              │
│  Maxpeedingrods MXR3500      │  ← H1, Barlow Bold 32px
│  Générateur Inverter         │
│  Portable 3300W              │
│                              │
│  ★★★★☆  (47 avis)           │  ← Cliquable → scroll vers avis
│                              │
│  ✓ En stock                  │  ← status-success
│                              │
│  • Puissance : 3300W         │  ← 4-5 specs clés, Inter Medium
│  • Autonomie : 8.5h          │
│  • Poids : 23.5 kg           │
│  • Niveau sonore : 58 dB     │
│  • Inverter : Oui            │
│                              │
│  ┌────────────────────────┐  │
│  │                        │  │
│  │    Voir l'offre  ↗     │  │  ← GROS bouton, Barlow Bold 18px
│  │                        │  │     bg jaune, texte noir, shadow-xl
│  └────────────────────────┘  │
│  Découvrez le prix et la     │  ← Inter 12px, text-muted
│  disponibilité chez notre    │
│  partenaire                  │
└──────────────────────────────┘
```

---

## 🌍 Marchés et langues

Le site est multilingue avec 6 marchés :

| Marché | Préfixe URL | Langue | Devise | Domaine affiliation |
|--------|-------------|--------|--------|---------------------|
| France | `/fr/` (défaut) | Français | EUR (€) | Lien externe FR |
| UK | `/en/` | English | GBP (£) | Lien externe UK |
| Allemagne | `/de/` | Deutsch | EUR (€) | Lien externe DE |
| Espagne | `/es/` | Español | EUR (€) | Lien externe ES |
| Italie | `/it/` | Italiano | EUR (€) | Lien externe IT |
| Pays-Bas | `/nl/` | Nederlands | EUR (€) | Lien externe NL |

La **langue par défaut** est le français. La racine `/` redirige vers `/fr/`.

### Configuration centralisée des liens d'affiliation

Tous les liens d'affiliation sont dans un seul fichier `src/config/affiliates.ts` :

```typescript
export const affiliateConfig = {
  fr: { tag: "MONTAG-FR-21", domain: "amazon.fr", baseUrl: "https://www.amazon.fr" },
  en: { tag: "MONTAG-UK-21", domain: "amazon.co.uk", baseUrl: "https://www.amazon.co.uk" },
  de: { tag: "MONTAG-DE-21", domain: "amazon.de", baseUrl: "https://www.amazon.de" },
  es: { tag: "MONTAG-ES-21", domain: "amazon.es", baseUrl: "https://www.amazon.es" },
  it: { tag: "MONTAG-IT-21", domain: "amazon.it", baseUrl: "https://www.amazon.it" },
  nl: { tag: "MONTAG-NL-21", domain: "amazon.nl", baseUrl: "https://www.amazon.nl" }
};

export function getAffiliateLink(locale: string, asin: string): string {
  const config = affiliateConfig[locale];
  return `${config.baseUrl}/dp/${asin}?tag=${config.tag}`;
}
```

> Tags = placeholders. Je les remplacerai avec mes vrais tags.

---

## 📦 Produits — Générateurs Maxpeedingrods

**Scrape les données réelles** (specs, descriptions, images) depuis `maxpeedingrods.com` pour ces 7 générateurs :

| Modèle | Puissance approx. | Slug URL |
|--------|--------------------|----------|
| MXR1500 | ~1200W | `mxr1500` |
| MXR2300 | ~2300W | `mxr2300` |
| MXR3500 | ~3300W | `mxr3500` |
| MXR3500S | ~3500W | `mxr3500s` |
| MXR4000GT | ~4000W | `mxr4000gt` |
| MXR4500i | ~4500W | `mxr4500i` |
| MXR5500 | ~5500W | `mxr5500` |

### Structure des données produit

Chaque produit = un fichier JSON dans `src/data/products/` :

```json
{
  "id": "mxr3500",
  "model": "MXR3500",
  "brand": "Maxpeedingrods",
  "category": "generators",
  "slug": "mxr3500",
  "wattage": 3300,
  "images": [
    "/images/products/mxr3500/main.webp",
    "/images/products/mxr3500/side.webp",
    "/images/products/mxr3500/panel.webp",
    "/images/products/mxr3500/detail.webp"
  ],
  "specs": {
    "rated_power_w": 3300,
    "max_power_w": 3500,
    "engine_type": "4-stroke OHV",
    "engine_displacement_cc": 212,
    "fuel_type": "Gasoline",
    "fuel_tank_l": 4.5,
    "runtime_hours": 8.5,
    "noise_level_db": 58,
    "weight_kg": 23.5,
    "dimensions_cm": "51 x 44 x 45",
    "outlets": ["2x 230V AC", "1x 12V DC", "2x USB"],
    "inverter": true,
    "electric_start": false,
    "parallel_ready": true
  },
  "asins": {
    "fr": "BXXXXXXXXX",
    "en": "BXXXXXXXXX",
    "de": "BXXXXXXXXX",
    "es": "BXXXXXXXXX",
    "it": "BXXXXXXXXX",
    "nl": "BXXXXXXXXX"
  },
  "rating": 4.3,
  "reviewCount": 47
}
```

### Gestion des images — Convention de nommage multilingue

Le site est multilingue et certaines images contiennent du texte (visuels marketing, callouts de features, etc.). Voici les **3 types d'images** et leur convention de nommage :

| Suffixe | Signification | Utilisation |
|---------|---------------|-------------|
| `-Main` | Photo principale du produit | **Universelle** — affichée pour TOUTES les langues |
| `-all` | Contenu enrichi sans texte (features, détails techniques) | **Universelle** — affichée pour TOUTES les langues |
| `-FR`, `-EN`, `-DE`, `-ES`, `-IT`, `-NL` | Image avec texte dans une langue spécifique | **Locale uniquement** — affichée UNIQUEMENT pour la langue correspondante |

**⚠️ RÈGLE CRITIQUE** : Les images avec suffixe de langue (ex: `-FR`) ne doivent JAMAIS être affichées pour une autre langue. Une image `-FR` = français uniquement. Si aucune image locale n'existe pour une langue, seule l'image `-Main` est affichée.

**Exemple concret** (MXR2350) :

```
public/images/products/mxr2350/
├── mxr-2350-Main.jpg              ← Universelle (toutes langues)
├── mxr-2350-1-FR.jpg              ← Français uniquement
├── mxr-2350-2-FR.jpg              ← Français uniquement
├── ...
├── mxr-2350-8-FR.jpg              ← Français uniquement
├── inverter-technologie-all.jpg   ← Universelle (contenu enrichi, pas de texte)
├── bobinage-cuivre-pur-all.jpg    ← Universelle (contenu enrichi, pas de texte)
├── portable-et-leger-all.jpg      ← Universelle (contenu enrichi, pas de texte)
└── affichage-numerique-all.jpg    ← Universelle (contenu enrichi, pas de texte)
```

**Comment le code sélectionne la bonne image** :

Dans le JSON produit, les images universelles sont listées normalement. Les images localisées utilisent un placeholder `{lang}` (en minuscules) qui sera remplacé par le code locale EN MAJUSCULES au build :

```json
{
  "images": [
    "/images/products/mxr2350/mxr-2350-Main.jpg",
    "/images/products/mxr2350/mxr-2350-1-{lang}.jpg",
    "/images/products/mxr2350/mxr-2350-2-{lang}.jpg",
    "/images/products/mxr2350/mxr-2350-3-{lang}.jpg"
  ]
}
```

**Résolution au build** : La fonction `resolveImages()` dans `src/utils/images.ts` :
1. Les images sans `{lang}` passent telles quelles (universelles)
2. Les images avec `{lang}` → le placeholder est remplacé par la locale en MAJUSCULES (ex: `{lang}` → `FR`)
3. **Vérification d'existence** : le fichier est vérifié dans `public/` via `fs.existsSync()`. Si le fichier n'existe pas pour cette locale, l'image est **omise** (pas de fallback, pas d'image cassée)

**Où la résolution se fait** : Dans `src/pages/[lang]/generators/[slug].astro`, AVANT de passer les images à `ProductGallery` :

```typescript
import { resolveImages } from '../../../utils/images';
const productImages = resolveImages(product.images, locale);
// → FR : [Main, 1-FR, 2-FR, ..., 8-FR] (9 images)
// → EN : [Main] (1 seule image, car pas de fichiers -EN)
```

**Helper implémenté** dans `src/utils/images.ts` :

```typescript
import fs from 'node:fs';
import path from 'node:path';

export function resolveImage(imagePath: string, locale: string): string {
  if (!imagePath.includes('{lang}')) return imagePath;
  return imagePath.replace('{lang}', locale.toUpperCase());
}

export function resolveImages(imagePaths: string[], locale: string): string[] {
  const publicDir = path.resolve(process.cwd(), 'public');
  const resolved: string[] = [];
  for (const imagePath of imagePaths) {
    if (!imagePath.includes('{lang}')) {
      resolved.push(imagePath);
      continue;
    }
    const resolvedPath = resolveImage(imagePath, locale);
    if (fs.existsSync(path.join(publicDir, resolvedPath))) {
      resolved.push(resolvedPath);
    }
  }
  return resolved;
}
```

**Quand on ajoute des images pour un nouveau marché** : Il suffit d'uploader les fichiers avec le bon suffixe (ex: `mxr-2350-1-EN.jpg`, `mxr-2350-2-EN.jpg`, etc.) dans le dossier du produit. Au prochain build, elles seront automatiquement détectées et affichées pour la langue correspondante. Aucun changement de code nécessaire.

**Images `-all` (contenu enrichi)** : Ces images sont utilisées dans le composant `ProductFeatures.astro` et sont référencées directement (pas via le JSON produit). Elles n'ont pas besoin de résolution car elles sont universelles.

**Alt text** : Toujours traduit par le système i18n, jamais incrusté dans l'image.

---

## 🗂️ Architecture du site

### Arborescence des pages

```
/                                         → Redirection 301 vers /fr/
/[lang]/                                  → Page d'accueil
/[lang]/generators/                       → Page catégorie générateurs
/[lang]/generators/[slug]/                → Fiche produit
```

### Structure du projet

```
maxpeedingrods.lu/
├── astro.config.mjs
├── tailwind.config.mjs
├── package.json
├── tsconfig.json
├── public/
│   ├── admin/                             # Decap CMS
│   │   ├── index.html                     # Page admin (charge l'interface Decap)
│   │   └── config.yml                     # Configuration des collections et champs
│   ├── images/
│   │   ├── products/[slug]/              # Images WebP par produit (voir convention de nommage ci-dessous)
│   │   ├── brand/                        # Logo, favicon, og-default.webp
│   │   └── ui/                           # Icônes SVG
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── LanguageSwitcher.astro
│   │   │   ├── MobileMenu.astro          # Menu hamburger mobile (Astro Island)
│   │   │   └── Breadcrumb.astro
│   │   ├── product/
│   │   │   ├── ProductCard.astro
│   │   │   ├── ProductGallery.astro      # Astro Island (interaction thumbnails)
│   │   │   ├── ProductSpecs.astro
│   │   │   ├── AffiliateButton.astro
│   │   │   ├── ReviewStars.astro
│   │   │   └── StickyMobileCTA.astro     # CTA sticky mobile (Astro Island)
│   │   ├── reviews/
│   │   │   ├── ReviewList.astro
│   │   │   ├── ReviewCard.astro
│   │   │   ├── ReviewForm.astro          # Astro Island
│   │   │   └── ReviewSummary.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── FeaturedProducts.astro
│   │   │   └── WhyChoose.astro
│   │   ├── category/
│   │   │   ├── FilterSidebar.astro       # Astro Island (interactivité filtres)
│   │   │   └── SortDropdown.astro        # Astro Island
│   │   └── seo/
│   │       ├── SEOHead.astro
│   │       └── StructuredData.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro                   # Redir / → /fr/
│   │   ├── api/
│   │   │   └── reviews.ts               # POST endpoint reviews (SSR)
│   │   └── [lang]/
│   │       ├── index.astro
│   │       └── generators/
│   │           ├── index.astro
│   │           └── [slug].astro
│   ├── data/
│   │   ├── products/                     # 7 JSON produits
│   │   └── reviews/                      # JSON avis par produit
│   ├── i18n/
│   │   ├── fr.json
│   │   ├── en.json
│   │   ├── de.json
│   │   ├── es.json
│   │   ├── it.json
│   │   ├── nl.json
│   │   └── utils.ts
│   ├── config/
│   │   ├── affiliates.ts
│   │   ├── site.ts
│   │   └── seo.ts
│   ├── utils/
│   │   ├── products.ts
│   │   ├── images.ts                      # Helper resolveImage() pour images localisées
│   │   └── url.ts
│   └── styles/
│       └── global.css
```

---

## 🖥️ Pages — Design détaillé

### Page d'accueil (`/[lang]/`)

1. **Hero banner** full-width :
   - Fond sombre (`ui.dark`) avec image de générateur en situation (camping, chantier)
   - Titre H1 en Barlow Bold blanc, sous-titre en Inter Regular blanc/80%
   - Bouton CTA jaune "Découvrir les générateurs" → lien vers `/[lang]/generators/`
   - Sur mobile : image en background avec overlay sombre

2. **Section "Nos générateurs les plus populaires"** :
   - Titre H2 centré
   - Grille 3 colonnes (1 sur mobile) de ProductCards
   - Best-sellers : MXR3500, MXR4500i, MXR5500

3. **Section "Pourquoi Maxpeedingrods"** :
   - 4 blocs en grille (2x2 desktop, 1 colonne mobile)
   - Chaque bloc : icône SVG dans cercle jaune/10, titre Barlow SemiBold, description Inter Regular
   - Thèmes : Qualité premium, Rapport qualité-prix, Garantie, Livraison rapide

4. **Texte SEO** bas de page : 150-200 mots unique par langue

### Page catégorie (`/[lang]/generators/`)

1. **H1 + intro** optimisés par langue avec mots-clés
2. **Layout** : Sidebar filtres (desktop) | Bouton "Filtrer" + drawer (mobile)
3. **Grille produits** : 3 colonnes desktop, 2 tablette, 1 mobile
4. **Tri** : dropdown en haut à droite
5. **Texte SEO** bas de page : 200-300 mots unique par langue

### Fiche produit (`/[lang]/generators/[slug]/`)

1. **Breadcrumb** avec schema.org
2. **Layout 2 colonnes** (60% galerie / 40% infos+CTA) — empilé sur mobile
3. **Galerie** : Image principale zoomable + row de thumbnails
4. **Bloc CTA** : Badge, H1, étoiles, specs clés, bouton CTA, mention partenaire
5. **CTA sticky mobile** : Quand l'utilisateur scrolle, barre fixe en bas avec bouton "Voir l'offre"
6. **Onglets** : Description, Caractéristiques (tableau complet), Avis clients
7. **Section "Vous aimerez aussi"** : 3 autres générateurs
8. **Texte SEO** unique par langue

---

## 🔍 SEO — Configuration complète

Le site doit **ranker correctement** sur tous les marchés. Voici tout ce qui doit être implémenté :

### Checklist SEO technique

- [ ] **Meta title + description uniques** par page et par langue, intégrant les mots-clés cibles
- [ ] **Balises hreflang** sur chaque page (6 langues + x-default)
- [ ] **URL canonique** sur chaque page (pointe vers elle-même)
- [ ] **Open Graph** complet (title, description, image 1200x630, url, type, locale, site_name)
- [ ] **Twitter Cards** (summary_large_image)
- [ ] **Schema.org JSON-LD** : Product (fiches), BreadcrumbList (toutes pages), WebSite (accueil)
- [ ] **Sitemap XML multilingue** auto-généré avec `@astrojs/sitemap` et xhtml:link alternate
- [ ] **robots.txt** avec lien vers sitemap, Disallow /api/ et /admin/
- [ ] **Trailing slashes** sur toutes les URLs
- [ ] **Balise `<html lang="xx">`** dynamique selon la page
- [ ] **Images optimisées** : WebP, dimensions explicites (width/height), alt text descriptif par langue (via i18n, pas dans l'image). Images localisées sélectionnées via `resolveImage()` avec placeholder `{lang}`
- [ ] **Lazy loading** sur toutes images sauf LCP (hero, image principale produit)
- [ ] **Preconnect** vers Google Fonts
- [ ] **Font-display: swap** pour les polices
- [ ] **Heading hierarchy** : Un seul H1 par page, H2/H3 en cascade logique
- [ ] **Internal linking** : Breadcrumb, produits similaires, lien catégorie → fiches et vice-versa
- [ ] **Core Web Vitals** : LCP < 2.5s, FID < 100ms, CLS < 0.1 — Score Lighthouse > 95

### Mots-clés cibles par marché

**FR** : "groupe électrogène maxpeedingrods", "maxpeedingrods 3300w", "maxpeedingrods 3500w", "maxpeedingrods mxr4500i", "maxpeedingrods 5500w", "maxpeedingrods groupe électrogène avis"

**EN** : "maxpeedingrods generator", "maxpeedingrods 3300w portable inverter generator", "maxpeedingrods 3500w inverter generator", "maxpeedingrods 5500w", "maxpeedingrods 2300w portable inverter generator"

**DE** : "maxpeedingrods inverter stromerzeuger 3300w", "maxpeedingrods mxr3500", "maxpeedingrods stromgenerator inverter 3500w", "maxpeedingrods mxr4500i", "maxpeedingrods notstromaggregat"

**ES** : "generador maxpeedingrods", "maxpeedingrods generador electrico gasolina 3300w", "maxpeedingrods inverter generador portátil 3500w", "maxpeedingrods mxr4500i"

**IT** : "generatore maxpeedingrods", "maxpeedingrods mxr 3500", "maxpeedingrods 3300w", "maxpeedingrods mxr4500i"

**NL** : "maxpeedingrods generator", "maxpeedingrods mxr3500", "maxpeedingrods mxr3500s", "maxpeedingrods 3500w"

### Schema.org JSON-LD — Fiches produits

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Maxpeedingrods MXR3500 - Générateur Inverter Portable 3300W",
  "brand": { "@type": "Brand", "name": "Maxpeedingrods" },
  "image": ["https://maxpeedingrods.lu/images/products/mxr3500/main.webp"],
  "description": "...",
  "sku": "MXR3500",
  "mpn": "MXR3500",
  "offers": {
    "@type": "Offer",
    "url": "https://maxpeedingrods.lu/fr/generators/mxr3500/",
    "availability": "https://schema.org/InStock"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.3",
    "bestRating": "5",
    "reviewCount": "47"
  }
}
```

---

## 🌐 Système i18n

### Fichier `fr.json` (modèle — à traduire dans les 5 autres langues de manière naturelle)

```json
{
  "site": {
    "name": "Maxpeedingrods",
    "tagline": "Générateurs portables de qualité professionnelle"
  },
  "nav": {
    "home": "Accueil",
    "generators": "Générateurs"
  },
  "product": {
    "see_offer": "Voir l'offre",
    "redirect_notice": "Découvrez le prix et la disponibilité chez notre partenaire",
    "specifications": "Caractéristiques techniques",
    "description": "Description",
    "reviews": "Avis clients",
    "similar_products": "Vous aimerez aussi",
    "rated_power": "Puissance nominale",
    "max_power": "Puissance maximale",
    "engine_type": "Type de moteur",
    "engine_displacement": "Cylindrée",
    "fuel_type": "Carburant",
    "fuel_tank": "Réservoir",
    "runtime": "Autonomie",
    "noise_level": "Niveau sonore",
    "weight": "Poids",
    "dimensions": "Dimensions",
    "outlets": "Prises de sortie",
    "inverter": "Technologie Inverter",
    "electric_start": "Démarrage électrique",
    "parallel_ready": "Compatible parallèle",
    "yes": "Oui",
    "no": "Non",
    "in_stock": "En stock",
    "category_badge": "Générateur Inverter"
  },
  "reviews_section": {
    "title": "Avis clients",
    "write_review": "Écrire un avis",
    "your_name": "Votre prénom",
    "your_rating": "Votre note",
    "your_title": "Titre de votre avis",
    "your_review": "Votre avis détaillé",
    "submit": "Publier mon avis",
    "based_on": "Basé sur {count} avis",
    "verified": "Achat vérifié",
    "moderation_notice": "Votre avis sera publié après modération.",
    "thank_you": "Merci pour votre avis !"
  },
  "home": {
    "hero_title": "Générateurs Maxpeedingrods",
    "hero_subtitle": "Puissance portable, qualité professionnelle. Découvrez les meilleurs générateurs inverter au meilleur prix.",
    "hero_cta": "Découvrir les générateurs",
    "featured_title": "Nos générateurs les plus populaires",
    "why_title": "Pourquoi choisir Maxpeedingrods ?",
    "why_quality": "Qualité premium",
    "why_quality_desc": "Composants de grade professionnel, testés dans les conditions les plus exigeantes.",
    "why_price": "Meilleur rapport qualité-prix",
    "why_price_desc": "Des performances haut de gamme à une fraction du prix des grandes marques.",
    "why_warranty": "Garantie fabricant",
    "why_warranty_desc": "Service client réactif et garantie constructeur sur tous les produits.",
    "why_shipping": "Livraison rapide",
    "why_shipping_desc": "Expédié rapidement, livraison en 24 à 48h."
  },
  "category": {
    "title": "Générateurs Maxpeedingrods",
    "intro": "Découvrez notre gamme complète de groupes électrogènes portables Maxpeedingrods, du 1200W au 5500W.",
    "meta_title": "Générateurs Maxpeedingrods | Groupes Électrogènes Inverter Portables",
    "meta_description": "Gamme complète de groupes électrogènes Maxpeedingrods : du 1200W au 5500W. Générateurs inverter portables, silencieux et fiables au meilleur prix.",
    "filter_power": "Puissance",
    "filter_all": "Tous",
    "filter_button": "Filtrer",
    "sort_by": "Trier par",
    "sort_power_asc": "Puissance croissante",
    "sort_power_desc": "Puissance décroissante",
    "sort_popular": "Popularité"
  },
  "footer": {
    "about_title": "À propos",
    "about_text": "Maxpeedingrods.lu est un site comparateur indépendant spécialisé dans les générateurs portables. Nous vous aidons à trouver le meilleur produit au meilleur prix.",
    "legal": "Mentions légales",
    "privacy": "Politique de confidentialité",
    "affiliate_disclaimer": "En tant que Partenaire Amazon, nous réalisons un bénéfice sur les achats remplissant les conditions requises.",
    "copyright": "© {year} maxpeedingrods.lu — Site indépendant, non affilié à Maxpeedingrods Inc."
  },
  "common": {
    "back_to_home": "Retour à l'accueil",
    "page_not_found": "Page non trouvée",
    "page_not_found_text": "La page que vous recherchez n'existe pas ou a été déplacée."
  }
}
```

> **Traduis intégralement** ce fichier dans les 5 autres langues (en, de, es, it, nl) avec des traductions **naturelles** — pas du mot-à-mot.

---

## ⭐ Système d'avis

### Données initiales

Pour chaque produit, fichier `src/data/reviews/[slug].json` contenant **5-8 avis par langue** :
- Prénoms typiques de chaque pays
- Notes entre 3 et 5 étoiles (majorité 4-5, quelques 3 pour la crédibilité)
- Longueur variée (courts + détaillés)
- Cas d'usage réalistes : camping, chantier, maison coupure courant, camping-car, food truck
- Champ `"lang"` → seuls les avis de la langue active sont affichés

### Formulaire de soumission

ReviewForm = Astro Island (JS client minimal) :
- Champs : nom, note (étoiles cliquables), titre, contenu
- Honeypot anti-spam
- POST vers `/api/reviews` (SSR)
- Avis soumis = en attente de modération, pas affichés automatiquement

---

## 📝 Decap CMS — Interface d'administration

### Objectif

Permettre de modifier les contenus du site (textes, images, specs produits, avis) depuis une interface web accessible à `https://maxpeedingrods.lu/admin/` **sans toucher au code, sans ligne de commande, sans Claude Code**.

### Authentification

L'admin est protégé via **GitHub OAuth**. Pour accéder à `/admin/` :
1. L'utilisateur clique "Se connecter avec GitHub"
2. GitHub vérifie l'identité et les droits sur le repo
3. Seuls les comptes ayant accès en écriture au repo peuvent modifier le contenu
4. Toute modification crée un commit Git automatiquement

### Fichier `public/admin/index.html`

```html
<!doctype html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex" />
  <title>Admin — Maxpeedingrods.lu</title>
</head>
<body>
  <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
</body>
</html>
```

### Fichier `public/admin/config.yml`

```yaml
backend:
  name: github
  repo: "MON-USERNAME/maxpeedingrods.lu"   # ← Remplacer avec le vrai repo
  branch: main
  base_url: https://maxpeedingrods.lu      # Pour l'OAuth callback
  auth_endpoint: /api/auth                  # Optionnel : proxy OAuth si nécessaire

media_folder: "public/images"
public_folder: "/images"

# Désactiver l'éditeur de brouillons si pas nécessaire
publish_mode: editorial_workflow

locale: "fr"

collections:
  # ═══════════════════════════════════════
  # COLLECTION 1 : Produits (générateurs)
  # ═══════════════════════════════════════
  - name: "products"
    label: "Produits"
    label_singular: "Produit"
    folder: "src/data/products"
    format: "json"
    create: true                            # Permet de créer de nouveaux produits
    delete: true
    slug: "{{id}}"
    identifier_field: "id"
    summary: "{{model}} — {{wattage}}W"
    fields:
      - { label: "ID (slug)", name: "id", widget: "string", hint: "Ex: mxr3500 — sert aussi de slug URL" }
      - { label: "Modèle", name: "model", widget: "string", hint: "Ex: MXR3500" }
      - { label: "Marque", name: "brand", widget: "hidden", default: "Maxpeedingrods" }
      - { label: "Catégorie", name: "category", widget: "hidden", default: "generators" }
      - { label: "Slug URL", name: "slug", widget: "string" }
      - { label: "Puissance (W)", name: "wattage", widget: "number", value_type: "int" }
      - label: "Images"
        name: "images"
        widget: "list"
        field: { label: "Image", name: "image", widget: "image" }
      - label: "Spécifications techniques"
        name: "specs"
        widget: "object"
        fields:
          - { label: "Puissance nominale (W)", name: "rated_power_w", widget: "number", value_type: "int" }
          - { label: "Puissance max (W)", name: "max_power_w", widget: "number", value_type: "int" }
          - { label: "Type moteur", name: "engine_type", widget: "string" }
          - { label: "Cylindrée (cc)", name: "engine_displacement_cc", widget: "number", value_type: "int" }
          - { label: "Carburant", name: "fuel_type", widget: "string" }
          - { label: "Réservoir (L)", name: "fuel_tank_l", widget: "number", value_type: "float" }
          - { label: "Autonomie (h)", name: "runtime_hours", widget: "number", value_type: "float" }
          - { label: "Niveau sonore (dB)", name: "noise_level_db", widget: "number", value_type: "int" }
          - { label: "Poids (kg)", name: "weight_kg", widget: "number", value_type: "float" }
          - { label: "Dimensions (cm)", name: "dimensions_cm", widget: "string" }
          - label: "Prises de sortie"
            name: "outlets"
            widget: "list"
            field: { label: "Prise", name: "outlet", widget: "string" }
          - { label: "Inverter", name: "inverter", widget: "boolean" }
          - { label: "Démarrage électrique", name: "electric_start", widget: "boolean" }
          - { label: "Compatible parallèle", name: "parallel_ready", widget: "boolean" }
      - label: "ASINs par pays"
        name: "asins"
        widget: "object"
        fields:
          - { label: "France (ASIN)", name: "fr", widget: "string", required: false }
          - { label: "UK (ASIN)", name: "en", widget: "string", required: false }
          - { label: "Allemagne (ASIN)", name: "de", widget: "string", required: false }
          - { label: "Espagne (ASIN)", name: "es", widget: "string", required: false }
          - { label: "Italie (ASIN)", name: "it", widget: "string", required: false }
          - { label: "Pays-Bas (ASIN)", name: "nl", widget: "string", required: false }
      - { label: "Note moyenne", name: "rating", widget: "number", value_type: "float", min: 0, max: 5, step: 0.1 }
      - { label: "Nombre d'avis", name: "reviewCount", widget: "number", value_type: "int" }

  # ═══════════════════════════════════════
  # COLLECTION 2 : Avis clients par produit
  # ═══════════════════════════════════════
  - name: "reviews"
    label: "Avis clients"
    label_singular: "Fichier d'avis"
    folder: "src/data/reviews"
    format: "json"
    create: true
    slug: "{{slug}}"
    identifier_field: "slug"
    summary: "Avis — {{slug}}"
    fields:
      - { label: "Produit (slug)", name: "slug", widget: "string", hint: "Ex: mxr3500" }
      - label: "Liste des avis"
        name: "reviews"
        widget: "list"
        summary: "{{fields.author}} — {{fields.rating}}★ ({{fields.lang}})"
        fields:
          - { label: "ID", name: "id", widget: "string" }
          - { label: "Auteur", name: "author", widget: "string" }
          - { label: "Date", name: "date", widget: "date", format: "YYYY-MM-DD" }
          - { label: "Note", name: "rating", widget: "number", value_type: "int", min: 1, max: 5 }
          - { label: "Titre", name: "title", widget: "string" }
          - { label: "Contenu", name: "content", widget: "text" }
          - { label: "Langue", name: "lang", widget: "select", options: ["fr", "en", "de", "es", "it", "nl"] }
          - { label: "Achat vérifié", name: "verified", widget: "boolean", default: true }

  # ═══════════════════════════════════════
  # COLLECTION 3 : Traductions (i18n)
  # ═══════════════════════════════════════
  - name: "translations"
    label: "Traductions"
    label_singular: "Langue"
    files:
      - label: "Français"
        name: "fr"
        file: "src/i18n/fr.json"
        fields:
          - { label: "Contenu JSON", name: "body", widget: "code", default_language: "json" }
      - label: "English"
        name: "en"
        file: "src/i18n/en.json"
        fields:
          - { label: "Contenu JSON", name: "body", widget: "code", default_language: "json" }
      - label: "Deutsch"
        name: "de"
        file: "src/i18n/de.json"
        fields:
          - { label: "Contenu JSON", name: "body", widget: "code", default_language: "json" }
      - label: "Español"
        name: "es"
        file: "src/i18n/es.json"
        fields:
          - { label: "Contenu JSON", name: "body", widget: "code", default_language: "json" }
      - label: "Italiano"
        name: "it"
        file: "src/i18n/it.json"
        fields:
          - { label: "Contenu JSON", name: "body", widget: "code", default_language: "json" }
      - label: "Nederlands"
        name: "nl"
        file: "src/i18n/nl.json"
        fields:
          - { label: "Contenu JSON", name: "body", widget: "code", default_language: "json" }

  # ═══════════════════════════════════════
  # COLLECTION 4 : Configuration affiliation
  # ═══════════════════════════════════════
  - name: "config"
    label: "Configuration"
    files:
      - label: "Liens d'affiliation"
        name: "affiliates"
        file: "src/config/affiliates.json"
        fields:
          - label: "Pays"
            name: "countries"
            widget: "list"
            summary: "{{fields.locale}} — {{fields.domain}}"
            fields:
              - { label: "Code locale", name: "locale", widget: "select", options: ["fr", "en", "de", "es", "it", "nl"] }
              - { label: "Tag affiliation", name: "tag", widget: "string" }
              - { label: "Domaine", name: "domain", widget: "string" }
              - { label: "URL de base", name: "baseUrl", widget: "string" }
```

> **Note importante** : Le champ `repo` dans le backend doit être remplacé par le vrai chemin du repo GitHub (ex: `monusername/maxpeedingrods.lu`). Le `publish_mode: editorial_workflow` permet de créer des brouillons et de relire les modifications avant publication. Si tu veux que les changements soient publiés immédiatement sans étape de relecture, supprime cette ligne.

### Déploiement automatique (webhook GitHub → VPS)

Pour que les modifications faites via Decap CMS soient déployées automatiquement sur le VPS, il faut configurer un **webhook GitHub** qui déclenche un rebuild :

1. Sur le VPS, créer un petit script `deploy.sh` :
```bash
#!/bin/bash
cd /var/www/maxpeedingrods.lu
git pull origin main
npm run build
# Copier le build vers le dossier servi par nginx
rsync -a dist/ /var/www/maxpeedingrods.lu/public/
```

2. Utiliser un outil comme **webhook** (https://github.com/adnanh/webhook) pour écouter les notifications de GitHub et exécuter `deploy.sh` à chaque push.

> Claude Code n'a pas besoin de configurer le webhook VPS — ce sera fait lors du déploiement. Mais la structure du projet doit inclure les fichiers Decap CMS.

---

## ⚙️ Configuration Astro

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

export default defineConfig({
  site: 'https://maxpeedingrods.lu',
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  trailingSlash: 'always',
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr', en: 'en', de: 'de', es: 'es', it: 'it', nl: 'nl' }
      }
    })
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'de', 'es', 'it', 'nl'],
    routing: { prefixDefaultLocale: true, redirectToDefaultLocale: true }
  }
});
```

---

## 🚀 Ordre d'exécution

Après chaque étape, vérifie `npm run build` avant de continuer.

### Étape 1 — Setup projet
1. Créer le projet Astro (template minimal, TypeScript strict)
2. Installer : `@astrojs/tailwind`, `@astrojs/sitemap`, `@astrojs/node`
3. Configurer astro.config.mjs, tailwind.config.mjs (couleurs, fonts), global.css
4. Ajouter les Google Fonts (Barlow + Inter)
5. Vérifier `npm run dev`

### Étape 2 — Données
1. Scraper les specs des 7 générateurs depuis maxpeedingrods.com
2. Créer les 7 JSON produits
3. Télécharger images → WebP → `public/images/products/[slug]/` (convention de nommage : pas de suffixe si universelle, suffixe `-fr`, `-en`, etc. si texte localisé)
4. Créer les reviews réalistes (5-8 par produit par langue)
5. Créer helpers : products.ts, images.ts (resolveImage), url.ts

### Étape 3 — i18n
1. Créer les 6 fichiers de traduction complets
2. Créer i18n/utils.ts
3. Créer config/affiliates.ts, config/site.ts, config/seo.ts

### Étape 4 — Layout et composants de base
1. SEOHead.astro, StructuredData.astro
2. BaseLayout.astro
3. Header.astro avec nav responsive + LanguageSwitcher
4. MobileMenu.astro (Astro Island)
5. Footer.astro (avec disclaimer affiliation)
6. Breadcrumb.astro

### Étape 5 — Composants produit et reviews
1. ProductCard, ProductGallery (Island), ProductSpecs
2. AffiliateButton, ReviewStars
3. StickyMobileCTA (Island)
4. ReviewSummary, ReviewList, ReviewCard, ReviewForm (Island)
5. FilterSidebar (Island), SortDropdown (Island)

### Étape 6 — Pages
1. index.astro (redirection /fr/)
2. Hero, FeaturedProducts, WhyChoose
3. [lang]/index.astro (accueil)
4. [lang]/generators/index.astro (catégorie)
5. [lang]/generators/[slug].astro (fiche produit)
6. Page 404 multilingue

### Étape 7 — API Reviews
1. Créer src/pages/api/reviews.ts (POST, mode server)
2. Validation + stockage + honeypot anti-spam
3. Tester l'endpoint

### Étape 8 — Decap CMS (interface admin)
1. Créer `public/admin/index.html`
2. Créer `public/admin/config.yml` avec toutes les collections (produits, reviews, traductions, config)
3. Si nécessaire, convertir `src/config/affiliates.ts` en `src/config/affiliates.json` + helper TS qui lit le JSON (pour que Decap puisse l'éditer)
4. Vérifier que `/admin/` charge bien l'interface Decap en local
5. Vérifier que les collections correspondent aux fichiers JSON existants

### Étape 9 — SEO et finalisation
1. robots.txt
2. Vérifier sitemap XML multilingue
3. Vérifier hreflang sur toutes les pages
4. Vérifier JSON-LD
5. Vérifier canonicals, OG, Twitter Cards
6. Vérifier redirection / → /fr/
7. Build complet : `npm run build`
8. Test : `npm run preview`
9. Test Lighthouse > 95

---

## ⚠️ Règles impératives

1. **JAMAIS "Amazon"** visible sauf disclaimer footer (obligation légale Partenaires Amazon)
2. **Pas de panier, pas de checkout** — Site d'AFFILIATION uniquement. CTA = "Voir l'offre"
3. **`rel="nofollow noopener sponsored"`** sur TOUS les liens d'affiliation
4. **Toutes images en WebP** avec width/height explicites
5. **Images sans texte = pas de suffixe** (universelles). **Images avec texte = suffixe `-fr`, `-en`, etc.** Fallback vers `-en` si une variante manque.
5. **Lazy loading** sauf LCP
6. **Mobile-first** — Design responsive irréprochable
7. **CTA sticky mobile** sur les fiches produits
8. **Core Web Vitals** > 95 Lighthouse
9. **Minimal JS client** — Astro Islands uniquement où nécessaire
10. **LanguageSwitcher** redirige vers la même page dans l'autre langue
11. **Trailing slashes** sur toutes les URLs
12. **Canonical** = chaque page pointe vers elle-même
13. **Textes SEO uniques** par langue (pas de traduction mot-à-mot)
14. **AUCUN PRIX affiché** sur le site — Le client doit cliquer "Voir l'offre" pour découvrir le prix chez le partenaire
15. **Code propre, typé, commenté** pour maintenance facile
16. **Polices** : Barlow (titres/nav/boutons) + Inter (corps/descriptions/specs)
17. **Design cohérent** avec l'identité produit : jaune industriel + noir + fonds clairs
18. **Page `/admin/` non indexée** : `<meta name="robots" content="noindex">` + exclue du sitemap
19. **Decap CMS** : les fichiers de données (produits, reviews, traductions, config affiliation) doivent être en **JSON** pour être éditables via Decap. Si un fichier est en `.ts`, créer un `.json` source que le `.ts` importe.
