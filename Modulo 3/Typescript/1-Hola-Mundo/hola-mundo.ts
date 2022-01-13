/*
    1) Para instalar Typescript, se debe tener instalado
    previamente node js.

    Para verificar instalacion de node en la terminal escribir:
    node --version
    node -v

    Para verificar instalacion de npm en la terminal escribir:
    npm --version
    npm -v

    Para instalar en forma global typescript en la terminal escribir:
    npm i typescript -g

    Luego verificar que se haya instalado, escribiendo en la terminal:
    tsc --version
    NOTA IMPORTANTE: para que funcione, seleccionar en la terminal la 
    opcion Command Prompt en lugar de PowerShell.

    2) Crear archivo hola-mundo.ts y codificar.
    3) Transpilar (traducir de ts a js) escribiendo en la terminal:
    tsc hola-mundo.ts

    4) Si queremos modificar el codigo, deberiamos volver a transpilar,
    lo cual es incomodo. Entonces se puede transpilar haciendo:
    tsc hola-mundo.ts -w 

    o tambien

    tsc hola-mundo.ts --watch

    Luego, todos los cambios que vaya haciendo en el archivo ts
    se veran reflejados automaticamente en el archivo js.
*/

alert('Hola Argentina!!');
// console.log('Hola Argentina!!');