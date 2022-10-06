# front-geotrace
front de l'application Geo-Trace

## Installation du projet manuel 

### prérequis 

- [NodeJs](https://nodejs.org/fr/) 

### procédure d'installation

- cloner le dossier et placer vous dans le dossier 
- taper la commande : `npm install`
- taper la commande : `npm start`  pour lancer le serveur de dévellopement


## installation avec Dockerfile 


pour crée l'image taper cette commande : `docker build -t front-geotrace .` ( à la racine de front-geotrace)

ensuite pour lancer le container, taper cette commande : `docker run -d -p 80:80 front-geotrace`

le container expose le port : 80 (affichage web )

_version traduit en français_ 

# Premiers pas avec l'application Create React

Ce projet a été démarré avec Create React App.


## Scripts disponibles

Dans le répertoire du projet, vous pouvez exécuter :

### `npm start`

Exécute l'application en mode développement.
Ouvre [http://localhost:3000](http://localhost:3000) pour l'afficher dans le navigateur.

La page se rechargera si vous apportez des modifications.
Vous verrez également toutes les erreurs du linter dans la console.

### `npm test`

Lance le testeur en mode montre interactive.
Voir la section sur [l'exécution des tests](https://create-react-app.dev/docs/running-tests) pour plus d'informations.

### `npm run build`

Génère l'application pour la production dans le dossier de `build`.
Il regroupe correctement React en mode production et optimise la construction pour les meilleures performances.

La construction est minifiée et les noms de fichiers incluent les hachages.
Votre application est prête à être déployée !

Voir la section sur le [déploiement](https://create-react-app.dev/docs/deployment) pour plus d'informations.

### `npm run eject`

**Remarque : il s'agit d'une opération à sens unique. Une fois éjecté, impossible de revenir en arrière !**

Si vous n'êtes pas satisfait de l'outil de construction et des choix de configuration, vous pouvez `eject` à tout moment. Cette commande supprimera la dépendance de construction unique de votre projet.

Au lieu de cela, il copiera tous les fichiers de configuration et les dépendances transitives (webpack, Babel, ESLint, etc.) directement dans votre projet afin que vous ayez un contrôle total sur eux. Toutes les commandes sauf `eject` fonctionneront toujours, mais elles pointeront vers les scripts copiés afin que vous puissiez les modifier. À ce stade, vous êtes seul.

Vous n'avez jamais besoin d'utiliser `eject`. L'ensemble de fonctionnalités organisé convient aux déploiements de petite et moyenne taille, et vous ne devriez pas vous sentir obligé d'utiliser cette fonctionnalité. Cependant, nous comprenons que cet outil ne serait pas utile si vous ne pouviez pas le personnaliser lorsque vous êtes prêt.

## Apprendre encore plus

Vous pouvez en savoir plus dans la [documentation Créer une application React](https://create-react-app.dev/docs/getting-started).

Pour apprendre React, consultez la [documentation de React](https://reactjs.org).

_original version_

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
