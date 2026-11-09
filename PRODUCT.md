# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

HTML et CSS statiques, sans framework, servis par GitHub Pages depuis `docs/`, sur le domaine `agenceobvious.com` (`www` et `agenceobvious.fr` y redirigent). Le formulaire de contact poste vers un webhook du n8n de John (n8n-prod), qui transmet la demande par email. Rien d'autre ne tourne côté serveur.

## Users

Les entrepreneurs solo et les toutes petites équipes (John, 9 novembre 2026) : des gens qui vendent et livrent leur propre travail, perdent du temps sur de petites tâches répétées (comptes rendus d'appels, suivis, relances, agenda, mails) et les repoussent. Ils arrivent sur le site par une recommandation ou un lien, et décident s'ils ouvrent la conversation.

## Product Purpose

Agence Obvious conçoit, installe et fait évoluer des agents IA pour chaque client, taillés pour ses propres tâches, dans un espace privé qui n'appartient qu'à lui. Le site réussit quand un visiteur comprend cela en quelques secondes et envoie le formulaire.

## Positioning

Du sur mesure, pas un outil en libre-service (John, 9 novembre 2026) : l'agence étudie les tâches du client, puis construit et fait tourner ses agents. Chaque client a un serveur dédié, isolé des autres ; un agent prépare, et n'envoie, ne réserve ni ne publie rien sans la validation du client, donnée d'un geste depuis son téléphone. Les accès du client (Google) sont chiffrés et jamais montrés à un agent. Les agents tournent sur l'abonnement ChatGPT du client.

## Operating Context

Le client parle à ses agents sur Telegram et valide depuis le dashboard, installé comme une app sur son téléphone. Ses appels sont enregistrés avec Fathom : il envoie le lien de l'enregistrement et reçoit un compte rendu. Un navigateur virtuel permet aux agents d'utiliser les outils sans API, après que le client s'y est connecté lui-même.

## Capabilities and Constraints

Ce qui tourne aujourd'hui (peut être montré comme tel) :
- le compte rendu d'un appel de vente à partir de son lien d'enregistrement, au format de la grille du client, horodaté ;
- une base des appels où l'on retrouve un appel par prénom (le deuxième rendez-vous retrouve le premier) ; un prospect sans rendez-vous depuis 12 mois est anonymisé ;
- le dashboard privé, installable sur le téléphone, avec le suivi de la consommation ;
- la connexion Google, un ou plusieurs comptes : l'agent lit l'agenda et les mails (lecture seule), sans jamais voir l'autorisation elle-même.

Codé le 9 novembre 2026, à montrer comme « tourne » seulement après un premier essai réel : après un premier appel, le rendez-vous suivant proposé par l'agent (Google Meet ou Zoom, prospect invité), créé dans l'agenda une fois validé.

Prévu pour décembre 2026 (John accepte de le montrer, marqué « dès décembre ») : après un premier appel, le suivi préparé dans une seule carte (prochain rendez-vous dans l'agenda, mail de suivi depuis l'adresse du client, message WhatsApp prêt à partir de son propre numéro), validé d'un geste ; la liste des prospects à suivre.

À ne pas affirmer : des prix (aucun affiché), la création de contenu (plus tard), des noms de clients, un nombre de clients, du temps gagné chiffré, des délais de mise en place, et toute promesse que les données du client n'atteignent jamais un fournisseur d'IA (elles passent par son propre abonnement ChatGPT).

## Brand Commitments

- Nom : Agence Obvious. Pas encore de logo : le nom composé en typographie fait office de marque.
- Voix : « nous », l'agence (John, 9 novembre 2026). En français. Directe, concrète, sans emphase.
- Ligne visuelle (John, 9 novembre 2026) : sobre et premium, dans la lignée du dashboard client (vert profond `#24524a`, fond blanc cassé, Geist).

## Evidence on Hand

- Un client en production (un closer), pas encore de témoignage : à ajouter après décembre avec son accord écrit. Ne pas le nommer.
- Ni logo, ni photos, ni presse, ni chiffres. Les fragments d'interface montrés sur le site illustrent le vrai produit et portent la mention « Exemple ».
- Règles de confidentialité : `docs/confidentialite/`. Les mentions légales manquent encore : John publie sans pour l'instant.

## Product Principles

1. Montrer plutôt que promettre : le travail qu'un agent rend, présenté comme un exemple, plutôt que des adjectifs.
2. Le client garde la main : toute action vers l'extérieur attend sa validation.
3. Le sur-mesure plutôt que le catalogue : les exemples viennent d'un métier, les agents du visiteur suivront ses propres tâches.
4. Un périmètre honnête : ce qui tourne est montré comme tel, ce qui arrive en décembre le dit, rien d'autre n'est affirmé.
