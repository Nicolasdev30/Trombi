# Challenge S07E03


PENSER AUX SCHEMAS

## Installation

Après avoir cloné le dépôt :

- Se déplacer dans le dépôt `cd ...`
- `npm i`
- Faire un fichier `.env` et y mettre les bonnes infos : `cp .env.example .env`
- `npm run dev`

## Écrire du SQL (oui, encore !)

Reprendre le fichier de requêtes SQL préparé hier, et ajouter les requêtes suivantes :

- Insérer dans la table "student" un étudiant qui s'appelle "Chuck Norris" appartenant à la promo 5
- Insérer dans la table "promo" une promo qui s'appelle "César" et ne possède pas d'orga
- Mettre à jour la promo 5 pour la renommer "Cleo"
- Supprimer la promo 123


## BONUS async / await

Faire de la gestion d'erreur dans les méthodes des controllers, il y a pour l'instant 0 gestion d'erreur :

- page 404 : on l'affiche si on ne trouve pas la route, ou la ressource demandée
- page 'error' : on affiche cette page par défaut


Quand on appelle `next(err)` avec un argument, express lève une erreur : un évènement est émis, qu'un middleware de gestion d'erreur est capable d'intercepter

Quand on appelle next sans argument, on déclenche le middleware suivant (dans notre app, c'est le `notFound`)

<https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/try...catch>


## Challenge S07E02

---

### écrire du SQL

Dans le dossier doc, créer un fichier sql.md. Dans ce fichier, écrire les requêtes SQL pour obtenir les informations suivantes :

- toutes les promos, dans l'ordre alphabétique
- tous les étudiants, dans l'ordre alphabétique des noms de famille
- tous les étudiants de la promo 135
- les étudiants dont le nom ou le prénom ressemble à "max"


### Lire de la doc


<https://sql.sh/>

### Explorer l'application suivante :

<https://sqlbolt.com/>

---


## Challenge S07E01




## Lister les étudiants d'une promo

Énoncé du débrouillard: Dans la page détails d'une promo, ajouter un lien "voir les étudiants de la promo" et implémenter la fonctionnalité.

## Factoriser les views

faire les partials :)

## Bonus
L'intégration faite par le stagiaire est ... sommaire. N'hésitez pas à la retravailler !

<details>
<summary>Énoncé détaillé</summary>

- La fonctionnalité concerne une seule promo, donc là encore on a besoin d'une route paramétrée pour cibler un ID. par exemple `/promo/:id/students`
- La méthode associée doit être dans un controller. Soit `promoController`, soit `studentController`, à vous de voir ce qui vous semble le plus logique, du moment que la méthode porte un nom explicite !
- Dans cette méthode il faut :
    - récupérer l'id de la promo ciblée
    - trouver la liste des étudiants de la promo. Importer la liste des étudiants depuis le json, et utiliser une boucle ou un [`.filter`](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#syntaxe).
    - "render" la view, sans oublier de lui transmettre les données !
- Contruire la view en listant les étudiants
- Ne pas oublier d'ajouter le lien vers la fonctionnalité dans la page "détails d'une promo".
</details>


## Gestion de Projet

---

## Création d'un dépôt git

- [x] Se déplacer dans le répertoire de travail
- [x] On crée le répertoire de l'application
- [x] On se déplace dans le répertoire de l'application
- [x] On pense à créer un fichier `.gitignore` dans lequel on liste les fichiers et répertoires qu'on ne souhaite pas suivre.
- [x] On fait un README avec le titre : nom de l'application
- [x] On ajoute un dossier `docs` qui contient le cahier des charges
- [x] On fait la commande `git init` : pour initialiser un dépôt tout neuf
- [x] On fait un premier commit avec le message `init`
- [x] On fait un dépôt sur github
- [x] Dans le répertoire de l'application, on fait les commandes que github nous donne pour relier le dépôt local avec le dépôt distant

---

## Conception

- (penser sécurité)

## Plan de création d'un serveur web avec express

1. [x] `npm init`
2. [x] installation des modules nécessaires et dev
3. [x] npm install express ejs
4. [x] npm i -D nodemon
5. [x] Checker package.json
8. [x] .gitignore
9. [x] scripts dev
11.[x] créer le point d'entrée
13.[x] Importer les modules express
14.[x] Initialiser le server sur le port ($PORT) (variables d'environnement)
15.[x] Configuration du serveur dans un fichier app.js
16.[x] Tester le serveur
17.[x] on met en place le moteur de rendu
18.[x] Ajouter "type": "module", dans le package de Jason
19.[x] types : modules a ajouter dans json
20.[x] importer path pour definir __dirname en prevision du repertoire statique
21.[x] npm install nodemon --save
22.[x] faire des middlewares et routes
23.[x] on met en place le port d'écoute avec un console.log pour afficher l'ip
24.[x] Mettre en place les routes
25.[x] création du fichier router et brancher celui-ci
26.[x] création de l'url racine
27.[x] nitialiser le serveur sur app.js et l'importer sur index.js
28.[x] faire des modules: router.js, fichiers statiques, etc.
29.[x] Changer "test" par "start" et ajouter "dev":"nodemon index.js" toujours dans package
30.[x] création du fichier view et prévoir des partials
31.[x] prévoir aussi l'html et sont contenu
32.[x] definir la route par default
33.[x] créer un dossier 'viwes'
34.[x] Créer index.ejs et style.css
35.[x] creer un doccier assets
36.[x] créer 3 routes : page d'accueil, page profil étudiant et page détails profil
37.[x] peut-etre plus tard faire les midlewear pour les page d'erreur
36.[x]  créer une route dynamique / paramétrée
37.[x] Création des pages d'erreur automatique
