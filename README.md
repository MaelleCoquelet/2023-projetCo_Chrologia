[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/tijRgSP0)

# Projet Co S2

Le repository suivant contient une configuration de Vue 3 avec Tailwindcss et l'ensemble des icônes sous forme de composant vue. À partir de cela :

- Dans le répertoire `components`, créer un composant Vuejs pour le pied de page (`FooterPage.vue`), importez-le dans `App.vue`
- Construire la structure HTML du pied de page
- Mettre en place la police de caractère utilisée dans la maquette (Inter) :
  - Récupérer le code HTML d'intégration de la police sur [Google Font](https://fonts.google.com/share?selection.family=Inter:wght@100;200;300;400;500;600;700;800;900) puis l'intégrer dans le le fichier `index.html`
  - Définir la police de caractère comme indiqué dans la [documentation Tailwind](https://tailwindcss.com/docs/configuration) dans le fichier tailwind.config.js
- Définir quelques règles de base avec [`@layer base`](https://tailwindcss.com/docs/functions-and-directives#layer) dans le fichier `style.css` (pour `body`, `h1`, `h2`, `h3` d'après la maquette)
- Toujours dans le fichier `style.css`, ajouter une classe personnalisée `container` avec [`@layer components`](https://tailwindcss.com/docs/functions-and-directives#layer) pour définir une largeur maximum de 1280px, centrer le contenu et ajouter des marges internes de chaque coté de 24px. Appliquez cette classe au `footer`.
- Faire la mise en forme du pied de page dans sa version mobile en utilisant les classes utilitaires de Tailwind
- Faire la mise en forme du pied de page dans sa version desktop en ajoutant des règles spécifiques pour ce support
