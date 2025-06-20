# typescript-learn

## installation 

### initialiser le projet

commande [npm init -y](https://docs.npmjs.com/cli/init)

### installations des dépendances

commande [npm install typescript --save-dev](https://docs.npmjs.com/cli/install)



## compilation

### classic

commande [npx tsc nom-du-fichier.ts](https://www.typescriptlang.org/docs/handbook/compiler-options.html)



## configuration

### configuration du compliateur 

#### compilation plus professionnel 

commande [npx tsc --outDir](https://www.typescriptlang.org/docs/handbook/compiler-options.html)



#### compilation en mode watch

ajouter un fichier tsconfig.json avec des options de compilation :

{
    "compilerOptions": {
        "outDir" : "dist",
    },
    "files": [
        "src/app.ts"
    ],
}

exécuter la commande simple [npx tsc --watch](https://www.typescriptlang.org/docs/handbook/compiler-options.html)
va chercher dans le fichier tsconfig.json le root défini et compiler en mode watch.
si le fichier change, il va compiler automatiquement.


### configuration du version compilateur ES

ajouter dans le fichier tsconfig.json : "target" : "es5" ou "es6" ou "es7" etc.
{
    "compilerOptions": {
        "outDir" : "dist",
        "target" : "es5"
    },
    "files": [
        "src/app.ts"
    ],
}

### gestion d'error

ajouter dans le fichier tsconfig.jon : "noEmitOnError" : true

{
    "compilerOptions": {
        "outDir" : "dist",
        "target" : "es5",
        "noEmitOnError" : true
    },
    "files": [
        "src/app.ts"
    ],
}

cela va empêcher la compilation si il y a des erreurs dans le code.

### mode strict

ajouter cette option pourrait générer des erreurs dans votre code qui fonctionné déjà, si vous utilisez des fonctionnalités non strictes. ça peut être utile pour les projets de grande envergure, mais cela va augmenter le temps de compilation. pouvez vous en passer si vous débutez.

ajouter dans le fichier tsconfig.json : "strict": true

{
    "compilerOptions": {
        "outDir" : "dist",
        "target" : "es5",
        "noEmitOnError" : true,
        "strict" : true
    },
    "files": [
        "src/app.ts"
    ],
}