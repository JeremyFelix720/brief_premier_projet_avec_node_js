# DOC PERSO BRIEF PREMIER PROJET NODE JS

## ETAPES A SUIVRE

mkdir project_name
cd project_name

// création s'un fichier qui contient la version de node à utiliser
touch .nvmrc
chmod +w .nvmrc
code .nvmrc
node -v // copier-coller le résultat dans le fichier ".nvmrc"

nvm use // pour utiliser la version de node js qui a été indiquée dans le fichier ".nvmrc"

____

// Suivre les étapes dans le fichier "Mon_premier_programme_NodeJS"

npm init // creation du fichier package.json (la "colonne vertebrale" du projet)

npm install --save-dev concurrently typescript nodemon @types/node // création du dossier "node_modules" et du fichier "package.json"

npx tsc --init // création du fichier "tsconfig.json"
// remplacer tout le contenu de ce fichier par les propriétés listées en dessous

____

// les noms des dossiers et fichiers listés dans ".gitignore" seront ignorés dont pas enregistrés dans git et dans github (ce n'est pas necessaire de les stocker inutilement)
