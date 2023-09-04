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
interface IPersonne { // Je crée un objet "IPersonne" avec des propriétés définies à l'intérieur.
    prenom:string,
    nom:string,
    age:number,
    sexe:string
}

let personne:IPersonne = {prenom:"Jérémy", nom:"FELIX", age:26, sexe:"m"};

// 2 - loguer l'objet
console.log(personne);

// 3 - changer le nom et le prenom par Laforge et Thomas
personne.prenom = "Thomas";
personne.nom = "LAFORGE"

// 4 - loguer l'objet initial et l'objet modifié
console.log(personne);

// 5 - créer un objet "personne2" à partir de la première personne (copie)
let personne2 = {...personne};

// 6 - changer le nom et le prenom de la personne2 par Amish et Fatir
personne2.prenom = "Fatir";
personne2.nom = "AMISH";

// 7 - loguer les trois objets
console.log(personne2);


// CREATION D'UN FICHIER JSON


