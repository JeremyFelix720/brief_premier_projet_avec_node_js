import fs, { outputJsonSync } from "fs-extra"
//import fs from "fs"

// Les consignes des exos sont dans le fichier "Mon premier programme Node JS"

// LES ARGUMENTS

console.log('Hello world', process.argv); // "process.argv" est un tableau de type "string" qui contient le détail des arguments du script "start".

// 1 - lire un argument --help du programme et loguer "je vais vous aider" si l'argument est présent
// 2 - lire un argument --name du programme et loguer "Bonjour" et le nom fourni si l'argument est présent

// Première méthode
if (process.argv.includes("--help")) {  // La méthode "includes(valeur)" renvoit true SI la valeur existe dans le tableau. SINON, elle renvoit false.
    console.log("Je vais vous aider !");
}
if (process.argv.includes("--name")) {
    console.log("Bonjour " + process.argv[process.argv.indexOf("--name") + 1]);
}

/* // Deuxième méthode
process.argv.forEach(argument => {
    if(argument == "--help") {
        console.log("Je vais vous aider !");
    }
    if(argument == "--name") {
        console.log("Bonjour " + process.argv[process.argv.indexOf(argument) + 1]); // la méthode "indexOf(valeur)" retourne l'index du tableau correspondant à la position de la valeur indiquée.
    }
});
*/

// LES OBJETS

// 1 - créer un objet "personne" avec les propriétés suivantes : nom, prenom, age, sexe
interface IPersonne { // Je crée un objet "IPersonne" avec des propriétés définies et typées à l'intérieur.
    prenom:string,
    nom:string,
    age:number,
    sexe:"m" | "f" | "masculin" | "feminin"
}

let jeremy:IPersonne = {prenom:"Jérémy", nom:"FELIX", age:20, sexe:"m"};

// 2 - loguer l'objet
console.log(jeremy);

// 3 - changer l'age de la personne Jérémy
jeremy.age = 26;

// 4 - loguer l'objet initial et l'objet modifié
console.log(jeremy);

// 5 - créer un objet "personne2" à partir de la première personne (copie)
let thomas = {...jeremy};

// 6 - changer le nom et le prenom de la personne2 par Amish et Fatir
thomas.prenom = "Thomas";
thomas.nom = "LAFORGE";
thomas.age = 32;

// 7 - loguer les trois objets
console.log(thomas);


// CREATION D'UN FICHIER JSON

const file = "./file.json"
outputJsonSync(file, thomas)

const data = fs.readJsonSync(file)
console.log(data) // => JP

import "dotenv/config"

console.log("env", process.env.NAME)


// EXO API

/*
Routes à créer:
/toto => affiche dans la console : "toto" et renvoie "toto"
/date  => renvoie la date actuelle
/thomas => renvoie un objet javascript { nom: "Laforge", prenom: "Thomas" }
/files => crée un fichier toto.txt sur le serveur
NOUVEAU
[14:14]
/random => renvoie un nombre aléatoire
/randomBetween => renvoie un nombre compris entre deux nombre fourni dans request
*/

/*
Installer l'extension VSC "RestClient"

npm i express

Dans "index.ts" :

copier-coller le code ici : https://expressjs.com/en/starter/hello-world.html

Changer le "const express" par "import express from 'express'"

npm i --save-dev @types/express

npm i dotenv/config

npm run start // A relancer à chaque fois qu'il y a un changement dans le code

Ouvrir la fenetre "Response" avec "RestClient" (sinon, mettre des "console.log()" après les "res.send()")

Dans ".http" :

rajouter GET url (en séparant les routes par "###")

cliquer sur "send request"
*/

// const express = require('express')
import express from "express"

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/toto', (req, res) => {
    res.send('toto')
})

let date = new Date();

app.get('/date', (req, res) => {
    res.send(date.toISOString().split('T')[0])
})

app.get('/thomas', (req, res) => {
    res.send(JSON.stringify(thomas))
})

app.get('/files', (req, res) => {
    fs.outputFileSync("toto.txt", "blabla") // crée un fichier qui a pour contenu "blabla"
    res.send("ajouté")
})

app.get('/random', (req, res) => {
    res.send(Math.random().toString())
    console.log(Math.random().toString())
})

app.get('/randomBetween/:min/:max', (req, res) => {
    let min = parseFloat(req.params.min)
    let max = parseFloat(req.params.max)
    res.send("Nombre min rentré = " + min + " / Nombre min rentré = " + max)
    console.log("Nombre min rentré = " + min + " / Nombre min rentré = " + max)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


