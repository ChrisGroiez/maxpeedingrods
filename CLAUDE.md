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

### Typographie

**Combinaison choisie** : **Barlow** (titres) + **Inter** (corps de texte)

```javascript
// tailwind.config.mjs — Typographie
fontFamily: {
  heading: ['Barlow', 'sans-serif'],      // Titres, nav, boutons
  body: ['Inter', 'sans-serif'],           // Corps de texte, descriptions, specs
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

---

## 📦 Produits — Générateurs Maxpeedingrods

| Modèle | Puissance approx. | Slug URL |
|--------|--------------------|----------|
| MXR1500 | ~1200W | `mxr1500` |
| MXR2300 | ~2300W | `mxr2300` |
| MXR3500 | ~3300W | `mxr3500` |
| MXR3500S | ~3500W | `mxr3500s` |
| MXR4000GT | ~4000W | `mxr4000gt` |
| MXR4500i | ~4500W | `mxr4500i` |
| MXR5500 | ~5500W | `mxr5500` |

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
│   │   ├── index.html
│   │   └── config.yml
│   ├── images/
│   │   ├── products/[slug]/
│   │   ├── brand/
│   │   └── ui/
│   ├── favicon.ico
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro
│   │   │   ├── Footer.astro
│   │   │   ├── LanguageSwitcher.astro
│   │   │   ├── MobileMenu.astro
│   │   │   └── Breadcrumb.astro
│   │   ├── product/
│   │   │   ├── ProductCard.astro
│   │   │   ├── ProductGallery.astro
│   │   │   ├── ProductSpecs.astro
│   │   │   ├── AffiliateButton.astro
│   │   │   ├── ReviewStars.astro
│   │   │   └── StickyMobileCTA.astro
│   │   ├── reviews/
│   │   │   ├── ReviewList.astro
│   │   │   ├── ReviewCard.astro
│   │   │   ├── ReviewForm.astro
│   │   │   └── ReviewSummary.astro
│   │   ├── home/
│   │   │   ├── Hero.astro
│   │   │   ├── FeaturedProducts.astro
│   │   │   └── WhyChoose.astro
│   │   ├── category/
│   │   │   ├── FilterSidebar.astro
│   │   │   └── SortDropdown.astro
│   │   └── seo/
│   │       ├── SEOHead.astro
│   │       └── StructuredData.astro
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── api/
│   │   │   └── reviews.ts
│   │   └── [lang]/
│   │       ├── index.astro
│   │       └── generators/
│   │           ├── index.astro
│   │           └── [slug].astro
│   ├── data/
│   │   ├── products/
│   │   └── reviews/
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
│   │   ├── affiliates.json
│   │   ├── site.ts
│   │   └── seo.ts
│   ├── utils/
│   │   ├── products.ts
│   │   └── url.ts
│   └── styles/
│       └── global.css
```

---

## 🔍 SEO — Checklist technique

- [ ] **Meta title + description uniques** par page et par langue
- [ ] **Balises hreflang** sur chaque page (6 langues + x-default)
- [ ] **URL canonique** sur chaque page
- [ ] **Open Graph** complet
- [ ] **Twitter Cards** (summary_large_image)
- [ ] **Schema.org JSON-LD** : Product, BreadcrumbList, WebSite
- [ ] **Sitemap XML multilingue** auto-généré
- [ ] **robots.txt** avec lien vers sitemap, Disallow /api/ et /admin/
- [ ] **Trailing slashes** sur toutes les URLs
- [ ] **`<html lang="xx">`** dynamique
- [ ] **Images optimisées** : WebP, width/height, alt text par langue
- [ ] **Lazy loading** sauf LCP
- [ ] **Preconnect** vers Google Fonts
- [ ] **Heading hierarchy** : Un seul H1 par page
- [ ] **Internal linking** : Breadcrumb, produits similaires
- [ ] **Core Web Vitals** : Score Lighthouse > 95

---

## ⚠️ Règles impératives

1. **JAMAIS "Amazon"** visible sauf disclaimer footer (obligation légale Partenaires Amazon)
2. **Pas de panier, pas de checkout** — Site d'AFFILIATION uniquement. CTA = "Voir l'offre"
3. **`rel="nofollow noopener sponsored"`** sur TOUS les liens d'affiliation
4. **Toutes images en WebP** avec width/height explicites
5. **Lazy loading** sauf LCP
6. **Mobile-first** — Design responsive irréprochable
7. **CTA sticky mobile** sur les fiches produits
8. **Core Web Vitals** > 95 Lighthouse
9. **Minimal JS client** — Astro Islands uniquement où nécessaire
10. **LanguageSwitcher** redirige vers la même page dans l'autre langue
11. **Trailing slashes** sur toutes les URLs
12. **Canonical** = chaque page pointe vers elle-même
13. **Textes SEO uniques** par langue (pas de traduction mot-à-mot)
14. **AUCUN PRIX affiché** sur le site
15. **Code propre, typé, commenté** pour maintenance facile
16. **Polices** : Barlow (titres/nav/boutons) + Inter (corps/descriptions/specs)
17. **Design cohérent** avec l'identité produit : jaune industriel + noir + fonds clairs
18. **Page `/admin/` non indexée** : `<meta name="robots" content="noindex">`
19. **Decap CMS** : fichiers de données en **JSON** pour être éditables via Decap
