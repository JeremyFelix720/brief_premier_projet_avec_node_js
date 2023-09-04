# Brief - Mon premier programme NodeJS

## Setup

- npm init
    Nom du projet : mon-premier-programme-nodejs
    entry point : dist/index.js
- npm install --save-dev concurrently typescript nodemon @types/node
- ajouter les commandes au package.json
    "dev": "concurrently -k -n \"Typescript,Node\" -p \"[{name}]\" -c \"blue,green\" \"tsc --watch\" \"nodemon dist/index.js\"",
    "start": "tsc && node dist/index.js"
- npx tsc --init
    {
        "compilerOptions": {
            "module": "commonjs",
            "esModuleInterop": true,
            "outDir": "dist",
            "target": "es6",
            "strict": true
        },
        "include": [
            "src/**/*"
        ]
    }
- create src/index.ts
    console.log('Hello world');
- git init
- git ignore node_modules et dist
- git add .
- git commit -m "Initial commit"
- git remote add origin

### Les arguments

https://www.digitalocean.com/community/tutorials/nodejs-command-line-arguments-node-scripts

1 - lire un argument --help du programme et loguer "je vais vous aider" si l'arguemnt est présent
2 - lire un argument --name du programme et loguer "Bonjour" et le nom fourni si l'argument est présent

### Les objets

1 - créer un objet "personne" avec les propriétés suivantes : nom, prenom, age, sexe
2 - loguer l'objet
3 - changer le nom et le prenom par Laforge et Thomas
4 - loguer l'objet initial et l'objet modifié
5 - créer un objet "personne2" à partir de la première personne (copie)
6 - changer le nom et le prenom de la personne2 par Amish et Fatir
7 - loguer les trois objets

### Création d'un fichier JSON

1 - Installer la dépendance fs-extra
2 - Créer un fichier JSON avec l'objet personne
3 - Lire le fichier JSON et loguer le contenu

### Les variables d'environnement

1 - Créer un fichier .env
2 - Ajouter une variable d'environnement "NAME" avec la valeur de votre nom
3 - Installer la dépendance dotenv
4 - Lire la variable d'environnement et loguer "Bonjour" et le nom fourni