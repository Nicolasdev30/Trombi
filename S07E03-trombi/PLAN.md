# Plan E03 : express + postgres

---

## Connecter postgreSQL avec express en utilisant le module pg

On a installé le module `pg` dans notre app, on veut l'utiliser pour manipuler la BDD. Il y a quelques étapes à suivre pour brancher ce module dans notre application.

0. `npm install pg`
1. Il faut créer un module de connexion à la BDD : On va créer un client `pg` (src/database/client.js)
2. On a besoin de connaitre le nom de la BDD,
    - l'utilisateur de la BDD,
    - le mot de passe de l'utilisateur de la BDD
    - on doit aussi savoir ou se trouve la BDD : son URL nous permet de nous y connecter

## Plan E02

---

Énoncé du débrouillard: Dans la page détails d'une promo, ajouter un lien "voir les étudiants de la promo" et implémenter la fonctionnalité.

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

---

1. [x] Faire le lien dans les fichiers concernés
2. [x] Faire la route
3. [x] Faire la méthode du controller
4. [x] Faire la vue static
5. [x] On teste
6. [x] Dynamiser la vue
    - [x] importer les données
    - [x] tester les données
    - [x] filtrer les students par promo
    - [x] trouver la bonne promo
    - [x] transmettre les données à la vue
    - [x] afficher les données
npm install pg

    **sécurité**
