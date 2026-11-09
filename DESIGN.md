---
name: Agence Obvious
description: Vos agents préparent, vous validez. Le site prolonge le monde du dashboard client.
colors:
  vert: "#24524a"
  vert-pale: "#e6eeeb"
  sur-vert: "#ffffff"
  aplat: "#24524a"
  aplat-texte: "#f4f7f6"
  aplat-doux: "#c2d6d0"
  aplat-trait: "#3d6a61"
  fond: "#f6f6f4"
  surface: "#ffffff"
  texte: "#1b1b1a"
  doux: "#5c5c58"
  trait: "#e2e2dd"
  erreur: "#a3341f"
  fond-sombre: "#121211"
  surface-sombre: "#1b1b1a"
  texte-sombre: "#ececea"
  doux-sombre: "#a3a39e"
  trait-sombre: "#2d2d2b"
  vert-sombre: "#7fc4b5"
  sur-vert-sombre: "#0f1f1c"
  vert-pale-sombre: "#1c2c28"
  aplat-sombre: "#173a33"
  aplat-texte-sombre: "#e8f1ee"
  aplat-doux-sombre: "#a7c7bf"
  aplat-trait-sombre: "#2b5249"
  erreur-sombre: "#f0907c"
typography:
  display:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 1.4rem + 4.4vw, 5.25rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.04em"
    fontFeature: "ss01"
  headline:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 2.4vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.035em"
    fontFeature: "ss01"
  statement:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.1rem + 1.4vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.025em"
    fontFeature: "ss01"
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 1.2rem + 1vw, 2rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontFeature: "ss01"
  title-sm:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    letterSpacing: "-0.015em"
    fontFeature: "ss01"
  lead:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "ss01"
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "ss01"
  body-ui:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 500
    fontFeature: "ss01"
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.45
    fontFeature: "ss01"
  caption:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.01em"
    fontFeature: "ss01"
rounded:
  sm: "8px"
  md: "10px"
  rayon: "12px"
  lg: "16px"
  pill: "999px"
spacing:
  marge: "clamp(1rem, 4vw, 2rem)"
  mesure: "72rem"
  section: "clamp(4rem, 10vw, 8rem)"
  colonnes: "clamp(2.5rem, 6vw, 5rem)"
  carte: "1.375rem"
  fragment: "1.25rem"
  ligne: "0.75rem"
components:
  button-primary:
    backgroundColor: "{colors.vert}"
    textColor: "{colors.sur-vert}"
    typography: "{typography.body-ui}"
    rounded: "{rounded.md}"
    padding: "0 1.25rem"
    height: "2.875rem"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.texte}"
    rounded: "{rounded.md}"
    padding: "0 1.25rem"
    height: "2.875rem"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
    padding: "{spacing.carte}"
  fragment:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.rayon}"
    padding: "{spacing.fragment}"
  input:
    backgroundColor: "{colors.fond}"
    textColor: "{colors.texte}"
    rounded: "{rounded.md}"
    padding: "0.75rem 0.875rem"
  chip-etat:
    backgroundColor: "{colors.vert-pale}"
    textColor: "{colors.vert}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.625rem"
  chip-etat-validee:
    backgroundColor: "{colors.vert}"
    textColor: "{colors.sur-vert}"
  chip-bientot:
    backgroundColor: "transparent"
    textColor: "{colors.doux}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0.1875rem 0.625rem"
  action-mini:
    backgroundColor: "transparent"
    textColor: "{colors.texte}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.375rem 0.75rem"
  aplat:
    backgroundColor: "{colors.aplat}"
    textColor: "{colors.aplat-texte}"
---

# Design System: Agence Obvious

## Overview

**Creative North Star: "Le dashboard ouvert sur la rue"**

Le site n'invente pas un monde de marque à côté du produit : il prolonge le dashboard client de la même entreprise. Même fond blanc cassé, mêmes cartes blanches à bord fin, même vert profond pour l'action, même Geist. Le visiteur voit d'emblée la matière qu'il retrouvera dans son espace, et la preuve passe par des fragments d'interface réelle plutôt que par des illustrations.

La densité est calme : de larges respirations entre sections, deux colonnes asymétriques sur grand écran, du texte courant en gris doux et des titres très serrés (interlettrage négatif) qui portent la voix. La couleur reste rare, sauf une fois : un grand aplat vert pleine largeur porte l'engagement de confidentialité. Le mode sombre suit le système (prefers-color-scheme) et remappe chaque rôle, il n'est pas une inversion.

Rejets confirmés par le contrat de direction : pas de héros SaaS avec dégradé, pas de capture d'écran en perspective, pas de grille de six icônes.

**Key Characteristics:**
- Fond blanc cassé, cartes blanches définies par un bord fin de 1px, ombre courte et douce.
- Un seul accent, le vert profond, pour l'action, l'état et les valeurs clés.
- Geist auto-hébergée, graisse 600 pour toute la hiérarchie, chiffres tabulaires partout où il y a des données.
- Listes à filets fins plutôt que boîtes imbriquées.
- Clair et sombre à rôles égaux, pilotés par le système.

## Colors

Une palette neutre chaude à un seul accent vert, doublée d'un jeu sombre qui remappe chaque rôle.

### Primary
- **Vert sapin profond** (vert): bouton principal, liens, anneau de focus, sélection, curseur, seconde ligne du titre d'ouverture, notes et dates clés dans les fragments, numéros d'étapes. En sombre il devient le **vert d'eau clair** (vert-sombre), avec un texte posé dessus quasi noir (sur-vert-sombre).
- **Vert brume** (vert-pale): fond des pastilles d'état, des pictogrammes d'action et de la bulle de message. Le vert en aplat léger, jamais en texte.

### Secondary
- **Aplat sapin** (aplat, aplat-texte, aplat-doux, aplat-trait): la section pleine largeur de l'engagement « Vous gardez la main ». Texte clair, texte secondaire vert grisé, filets vert moyen. En sombre l'aplat descend vers un sapin nocturne (aplat-sombre) pour rester une surface et non une lumière.

### Neutral
- **Papier cassé** (fond): fond de page, et fond des champs de saisie (le champ se creuse dans la carte blanche).
- **Blanc carte** (surface): cartes, fragments, formulaire, message de remerciement.
- **Encre chaude** (texte): texte principal, filets épais de 2px qui ouvrent les étapes et la phrase de sur-mesure.
- **Gris galet** (doux): texte secondaire, métadonnées, placeholders, pied de page.
- **Filet** (trait): bords des cartes et des champs, séparateurs de listes et de tableaux.
- **Brique** (erreur): champ invalide et message d'échec d'envoi, rien d'autre.
- Sombre : charbon (fond-sombre), surface charbon clair (surface-sombre), texte ivoire (texte-sombre), gris pierre (doux-sombre), filet sombre (trait-sombre), corail doux (erreur-sombre).

### Named Rules
**The Un Seul Vert Rule.** Le vert est la seule couleur d'accent. Il désigne ce qui agit ou ce qui compte (action, état, valeur), jamais la décoration.

**The Un Seul Aplat Rule.** Une page porte au plus un aplat vert pleine largeur, réservé à un engagement. Le reste vit sur le papier cassé.

**The Rôles Doublés Rule.** Toute couleur ajoutée reçoit sa valeur claire et sa valeur sombre, déclarées ensemble dans les propriétés de :root et son bloc prefers-color-scheme: dark.

## Typography

**Display Font:** Geist (variable 100-900, auto-hébergée, avec system-ui, sans-serif)
**Body Font:** Geist (même famille)

**Character:** Une seule famille, la même que le dashboard. La hiérarchie vient de la taille et de l'interlettrage, pas du contraste de graisse : tous les titres sont en 600, le texte courant en 400, l'interface en 500. Le jeu stylistique ss01 est actif sur tout le document.

### Hierarchy
- **Display** (600, clamp 2.75rem à 5.25rem, 0.98): le titre d'ouverture seul. Sa seconde moitié passe à la ligne et en vert.
- **Headline** (600, clamp 2rem à 3.25rem, 1.05): titres de section. Le constat monte jusqu'à 4rem ; la page de texte utilise clamp 2.25rem à 3.5rem pour son h1.
- **Statement** (600, clamp 1.5rem à 2.25rem, 1.2, max 34ch): la phrase qui clôt une section et pose le positionnement, sous un filet d'encre de 2px.
- **Title** (600, clamp 1.5rem à 2rem, 1.1): titres des exemples. Variantes plus petites : étapes (1.25rem), engagements (clamp 1.375rem à 1.75rem), titres de la page de texte et du remerciement (1.375rem).
- **Lead** (400, 1.125rem): chapeaux de section, max 40rem.
- **Body** (400, 1.0625rem, 1.6): texte courant. 68ch au plus sur la page de texte.
- **Body UI** (500, 0.9375rem): contenu des cartes, labels de formulaire, navigation.
- **Label** (500 ou 600, 0.8125rem, 1.45): métadonnées, pastilles, statuts, consentement.
- **Caption** (500, 0.75rem, 0.01em): le marqueur « Exemple » et les en-têtes de tableau.

### Named Rules
**The Titres Serrés Rule.** Plus le titre est grand, plus l'interlettrage est négatif (de -0.015em à -0.04em) et plus l'interlignage est court. Le texte courant garde un interlettrage normal.

**The Chiffres Tabulaires Rule.** Notes, dates, heures et compteurs sont en font-variant-numeric: tabular-nums.

## Layout

Un cadre centré de 72rem au plus, avec une marge latérale fluide (clamp 1rem à 2rem). Les sections respirent fortement (clamp 4rem à 8rem en haut et en bas) et se séparent par un filet fin plutôt que par un changement de fond, sauf l'aplat. Sur grand écran, chaque section est une grille à deux colonnes asymétriques (rapports 1.05/0.95, 1.1/0.9, 0.85/1.15, 0.9/1.1) avec un écart fluide de clamp 2.5rem à 5rem ; les exemples alternent texte à gauche, puis à droite. Les étapes sont une grille de trois colonnes.

Sous 860px tout passe à une colonne et l'alternance cesse. Sous 520px les champs du formulaire en paire s'empilent et les lignes de suivi passent sur deux rangs. Les listes de données sont des rangées séparées par des filets (padding vertical 0.625rem à 0.875rem), jamais des boîtes dans des boîtes.

## Elevation & Depth

Le système est quasi plat. La profondeur vient d'abord du bord fin de 1px et du contraste papier cassé / blanc carte ; une ombre courte et douce, légèrement décalée vers le bas, pose les cartes, les fragments et le formulaire sans les faire flotter. En sombre l'ombre se renforce en opacité pour rester lisible.

### Shadow Vocabulary
- **Pose** (`box-shadow: 0 1px 2px rgb(27 27 26 / 0.05), 0 6px 14px -8px rgb(27 27 26 / 0.16)`; sombre `0 1px 2px rgb(0 0 0 / 0.3), 0 6px 14px -8px rgb(0 0 0 / 0.5)`): toutes les surfaces blanches.
- **Halo d'action** (`box-shadow: 0 6px 18px -8px var(--vert)`): survol du bouton, seulement.
- **Anneau de saisie** (`box-shadow: 0 0 0 3px color-mix(in srgb, var(--vert) 22%, transparent)`): champ en focus.

### Named Rules
**The Le Bord Avant l'Ombre Rule.** C'est le filet qui définit une carte ; l'ombre reste courte et ne remplace jamais le bord.

## Shapes

Des coins doux et réguliers, gradués selon la taille de l'objet : 8px pour les petits éléments (pictogrammes, actions mini, recherche, lien d'évitement), 10px pour les boutons et les champs, 12px pour les fragments d'exemple, 16px pour les grandes surfaces (carte « À valider », formulaire, remerciement), pilule pour les pastilles. La bulle de message a un coin bas droit resserré (14px 14px 4px 14px). Les filets sont de 1px, sauf les filets d'encre de 2px qui ouvrent une étape ou la phrase de sur-mesure. Le favicon reprend la tuile verte à coins arrondis.

## Components

### Buttons
Francs et compacts, comme dans le dashboard.
- **Shape:** coins doux (10px), hauteur 2.875rem (2.5rem dans le pied d'une carte).
- **Primary:** fond vert, texte sur-vert, 600 à 0.9875rem, padding horizontal 1.25rem, bord transparent de 1px.
- **Hover / Focus:** halo vert diffus au survol, enfoncement de 1px à l'appui (160ms, cubic-bezier(0.16, 1, 0.3, 1)), anneau de focus vert de 2px décalé de 3px. Désactivé : opacité 0.6, curseur d'attente.
- **Discret:** fond transparent, bord filet, texte encre.
- **Lien d'action:** bouton sans fond, texte gris doux souligné (« Revoir l'exemple »).

### Chips
- **État:** pilule vert brume, texte vert, 600 à 0.8125rem ; une fois validée, elle passe en vert plein (transition 300ms).
- **Bientôt:** pilule à bord filet, texte gris doux, pour ce qui arrive plus tard (« Dès décembre »).
- **Action mini:** rectangle à 8px, bord filet, petit pictogramme de 0.875rem, pour une action dans un fragment.

### Cards / Containers
- **Corner Style:** 16px pour la carte d'action et le formulaire, 12px pour les fragments.
- **Background:** blanc carte.
- **Shadow Strategy:** ombre Pose (voir Elevation & Depth).
- **Border:** 1px filet.
- **Internal Padding:** 1.375rem (carte), 1.25rem (fragment), clamp 1.25rem à 2rem (formulaire).

### Inputs / Fields
- **Style:** fond papier cassé creusé dans la carte, bord filet, coins de 10px, 1rem, padding 0.75rem 0.875rem ; label au-dessus en 500, placeholder gris doux.
- **Focus:** le bord passe au vert et un anneau vert à 22% apparaît, sans outline.
- **Error:** bord brique après interaction (:user-invalid), message d'envoi en brique.

### Navigation
L'en-tête tient sur une ligne : la marque en texte (650, -0.01em, encre, non soulignée) et un lien unique en 500. Les liens courants sont verts, soulignés à 1px avec un décalage de 0.2em, et le soulignement s'épaissit à 2px au survol. Le pied de page aligne la marque et ses liens en gris doux sous un filet.

### Carte « À valider » (signature)
La carte du dashboard, à taille réelle : en-tête avec pastille d'état et marqueur « Exemple », titre, métadonnée, puis une liste d'actions en rangées à filets (pictogramme sur tuile vert brume de 2rem, intitulé, détail, statut tabulaire). Le bouton Valider joue le geste : chaque statut reçoit une coche et son libellé final l'un après l'autre (520ms, décalage de 260ms par rang, entrée avec léger flou), puis la ligne de confirmation apparaît en vert. Avec prefers-reduced-motion, tout est instantané.

### Fragment d'exemple
Un morceau d'interface réelle posé sur une surface blanche à 12px : en-tête (titre en 600 et marqueur « Exemple » à droite), contenu de données en rangées à filets ou en tableau tabulaire, action mini en pied. Il sert de preuve, jamais d'illustration décorative.

## Do's and Don'ts

### Do:
- **Do** définir une carte par son bord de 1px en filet, puis seulement l'ombre Pose.
- **Do** réserver le vert à l'action, à l'état et aux valeurs clés ; le texte secondaire est en gris doux.
- **Do** marquer chaque fragment d'interface fictif par « Exemple » (caption, 0.75rem, gris doux) dans son en-tête, et dire ce qui n'arrive qu'en décembre avec la pastille Bientôt.
- **Do** déclarer chaque nouvelle couleur en clair et en sombre dans les propriétés de :root.
- **Do** utiliser les chiffres tabulaires pour toute donnée chiffrée ou datée.
- **Do** numéroter une suite seulement quand l'ordre porte une information, comme les trois étapes.

### Don't:
- **Don't** utiliser de dégradé, de capture d'écran en perspective ni de grille de six icônes.
- **Don't** ajouter une seconde couleur d'accent ou un second aplat vert sur la même page.
- **Don't** utiliser le marqueur « Exemple » comme surtitre au-dessus d'un titre de section : il ne qualifie qu'un fragment d'interface.
- **Don't** emboîter des cartes dans des cartes ; à l'intérieur d'une surface, on sépare par des filets.
- **Don't** remplacer les pictogrammes SVG à trait (1.75, coins arrondis) par des glyphes ou des emojis.
