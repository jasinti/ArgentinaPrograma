// Un bucle forEach se usa en JavaScript para iterar fácilmente sobre una colección, por ejemplo, un Array. En el ejemplo anterior, creamos una matriz de vocales y luego usamos forEach para iterar en la matriz y registrar cada elemento.

console.log('Ejemplo 1: foreach');

var numeros = [45, 4, 9, 16, 25];

numeros.forEach(miFuncion);

//definicion de la funcion
function miFuncion(valor) 
{
   if(valor >= 18)
    console.log(valor); 
}

console.log('------------------------');


console.log('Ejemplo 2: for of');

// En cada una de las iteraciones sobre el array tenemos el contenido 
// de los elementos del array dentro de la variable numero.

let miArray: number[] = [10,20,30,40,50];

for (let numero of miArray){
  console.log(numero);
}

console.log('------------------------');

console.log('Ejemplo 3: for in');

// En cada una de las iteraciones sobre el array tenemos el indice de los elementos del array dentro de la variable clave.

let miArray2: string[] = ['Juan','Carlos','Maria','Jose'];

for (let clave in miArray2){
    console.log(clave);
    //   console.log('indice: ',clave,' valor: ',miArray2[clave]);
}


console.log('------------------------');

console.log('Ejemplo 4: sort y toString');

miArray2.sort();
console.log(miArray2.toString());

console.log('------------------------');

console.log('Ejemplo 5: reverse y toString');

miArray2.reverse();
console.log(miArray2.toString());

console.log('------------------------');

console.log('Ejemplo 6: map');
/*
    El método map() crea un nuevo array realizando una función en cada 
    elemento del array.

    El método map() no ejecuta la función para elementos de array sin 
    valores.

    El método map() no cambia el array original.

    Este ejemplo multiplica cada valor del array por 2:
*/

let numeros1 = [45, 4, 9, 16, 25];
let numeros2 = numeros1.map(miFuncion2);

function miFuncion2(valor) 
{
    if(valor >= 18)
        console.log(valor) 
}


console.log('------------------------');

console.log('Ejemplo 6: filter');

// Toma una array, y filtra los elementos no deseados.

// Obtener una lista de las tareas que me llevó dos o mas horas en hacer.
var tareas = [
    {
      'nombre'     : 'Tomar pedidos',
      'duracion' : 40
    },
    {
      'nombre'     : 'Produccion',
      'duracion' : 120
    },
    {
      'nombre'     : 'Reparto',
      'duracion' : 240
    }
];

// Usando forEach, escribiríamos:
var tareas_dificiles = [];
 
tareas.forEach(function (tarea) {
    if (tarea.duracion >= 120) {
        tareas_dificiles.push(tarea);
    }
});

console.log(tareas_dificiles)


console.log('*****')


// Con filter:
var tareas_dificiles2 = tareas.filter(function (tareas) {
    return tareas.duracion >= 120;
});

console.log(tareas_dificiles2)
 
console.log('*****')

// Using ES6
var tareas_dificiles3 = tareas.filter(tareas => tareas.duracion >= 120 );

console.log(tareas_dificiles3)


console.log('------------------------');

console.log('Ejemplo 7: reduce');

// Queremos encontrar la suma de una lista de números. Usando un bucle seria:


var numbers = [1, 2, 3, 4, 5], total = 0;
     
numbers.forEach(function (number) {
    total += number;//total = total + number
});

// Si bien esto no es un mal caso de uso para forEach, reduce aún tiene sintaxis mas practica:

var total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 0);




