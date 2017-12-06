# Menu fetcher

## Implémentés

- [x] Récupérer l'image du menu de la semaine (fichier `menu.jpg`)

## À faire

- [ ] Utiliser un OCR (e.g. tesseract) pour lire le texte de l'image

## Utilisation

Le script est implémenté en `fish`, mais est facilement portable à bash/sh.

Le script est fait pour être éxécuté une ou deux fois par jour, les résultats
étant alors servis statiquement (via nginx ou autre) pour éviter de surcharger
quoi que ce soit.

## Dépendances

- `grep` et `tail`
- `wget` et `curl`
- `fish`
