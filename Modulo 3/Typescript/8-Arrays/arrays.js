// Un bucle forEach se usa en JavaScript para iterar fácilmente sobre una colección, por ejemplo, un Array. En el ejemplo anterior, creamos una matriz de vocales y luego usamos forEach para iterar en la matriz y registrar cada elemento.
console.log('Ejemplo 1: foreach');
var numeros = [45, 4, 9, 16, 25];
numeros.forEach(miFuncion);
//definicion de la funcion
function miFuncion(valor) {
    if (valor >= 18)
        console.log(valor);
}
console.log('------------------------');
console.log('Ejemplo 2: variante foreach');
var vocales = ["a", "e", "i", "o", "u"];
vocales.forEach(function (entrada) {
    console.log(entrada + " ");
});
//salida:  a e i o u
console.log('------------------------');
console.log('Ejemplo 3: for of');
// En cada una de las iteraciones sobre el array tenemos el contenido 
// de los elementos del array dentro de la variable numero.
var miArray = [10, 20, 30, 40, 50];
for (var _i = 0, miArray_1 = miArray; _i < miArray_1.length; _i++) {
    var numero = miArray_1[_i];
    console.log(numero);
}
console.log('------------------------');
console.log('Ejemplo 4: for in');
// En cada una de las iteraciones sobre el array tenemos el indice de los elementos del array dentro de la variable clave.
var miArray2 = ['Juan', 'Carlos', 'Maria', 'Jose'];
for (var clave in miArray2) {
    console.log(clave);
    //   console.log('indice: ',clave,' valor: ',miArray2[clave]);
}
console.log('------------------------');
console.log('Ejemplo 5: sort y toString');
miArray2.sort();
console.log(miArray2.toString());
console.log('------------------------');
console.log('Ejemplo 6: reverse y toString');
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
var numeros1 = [45, 4, 9, 16, 25];
var numeros2 = numeros1.map(miFuncion2);
function miFuncion2(valor) {
    if (valor >= 18)
        console.log(valor);
}
console.log('------------------------');
console.log('Ejemplo 6: filter');
// Toma una array, y filtra los elementos no deseados.
// Al igual que map, filter se define en Array.prototype. Está disponible en cualquier array y le pasa una devolución de llamada como su primer argumento. Filter ejecuta esa devolución de llamada en cada elemento del array y devuelve un nuevo array que contiene sólo los elementos para los que la devolución de llamada devuelve true.
// También como map, filter pasa su devolución de llamada tres argumentos:
// El elemento actual
// El índice actual
// El array a la que llamó filter
// Obtener una lista de las tareas que me llevó dos o mas horas en hacer.
var tareas = [
    {
        'nombre': 'Tomar pedidos',
        'duracion': 40
    },
    {
        'nombre': 'Produccion',
        'duracion': 120
    },
    {
        'nombre': 'Reparto',
        'duracion': 240
    }
];
// Usando forEach, escribiríamos:
var tareas_dificiles = [];
tareas.forEach(function (tarea) {
    if (tarea.duracion >= 120) {
        tareas_dificiles.push(tarea);
    }
});
console.log(tareas_dificiles);
console.log('*****');
// Con filter:
var tareas_dificiles2 = tareas.filter(function (tareas) {
    return tareas.duracion >= 120;
});
console.log(tareas_dificiles2);
console.log('*****');
// Using ES6
var tareas_dificiles3 = tareas.filter(function (tareas) { return tareas.duracion >= 120; });
console.log(tareas_dificiles3);
// Dejamos de lado los argumentos array e index a nuestra devolución de llamada, ya que no los usamos.
console.log('------------------------');
console.log('Ejemplo 7: reduce');
// Queremos encontrar la suma de una lista de números. Usando un bucle seria:
var numbers = [1, 2, 3, 4, 5], total = 0;
numbers.forEach(function (number) {
    total += number; //total = total + number
});
// Si bien esto no es un mal caso de uso para forEach, reduce aún tiene sintaxis mas practica:
var total = [1, 2, 3, 4, 5].reduce(function (previous, current) {
    return previous + current;
}, 0);
// Primero, llamamos reduce en nuestra lista de númbers. Pasamos una devolución de llamada, que acepta el valor anterior y el valor actual como argumentos, y devuelve el resultado de agregarlos juntos. Puesto que pasamos 0 como segundo argumento para reduce, usaremos eso como el valor de previous en la primera iteración.
console.log('------------------------');
console.log('Ejemplo 7: reduce parte 2');
// Queremos saber la cantidad total de tiempo que pasamos trabajando hoy.
// Usando un bucle forEach, escribiríamos:
var total_time = 0;
tareas.forEach(function (tarea) {
    // El signo más simplemente coacciona tarea.duracion de una cadena a un número
    total_time += (+tarea.duracion);
});
console.log('total_time: ', total_time);
// Con reduce, se convierte en:
var total_time2 = tareas.reduce(function (previous2, current2) {
    return previous2 + current2.duracion;
}, 0);
console.log('total_time 2: ', total_time2);
// Usar funciones de flecha
var total_time3 = tareas.reduce(function (previo, actual) { return previo + actual.duracion; }, 0);
console.log('total_time 3: ', total_time3);
console.log('------------------------');
console.log('Ejemplo 8: operador spread');
// el spread operator fue incluido en la nueva versión de Javascript ES6 y ya funciona en todos los navegadores.
var arrayNumerico = [4, 16, 25, 2, 45, 8];
// let mayor = Math.max(arrayNumerico);
// console.log(mayor); // NaN
// Observamos que el valor de la variable numeroMayor es NAN, esto es porque el método max() puede recibir una lista de argumentos y no le podemos pasar un array.
// Entonces podríamos hacer los siguiente:
var mayor2 = Math.max(4, 16, 25, 2, 45, 8);
console.log(mayor2); // 45 
// Ahora sí podemos acceder al número más alto de la lista de argumentos. De todos modos podemos mejorar este código gracias al spread operator.
var arrayNumerico2 = [4, 16, 25, 2, 45, 8];
var numeroMayor = Math.max.apply(Math, numeros);
console.log(numeroMayor); // 45
// Al anteponer los tres puntos que representan al spread operator transformamos la variable numeros (que en el ejemplo representa un array con números) en una lista de argumentos, y es por ello que podemos acceder al número mayor del array numeros. Es como si le quitáramos los corchetes ( “[]” ) al array.
var arrayNumerico3 = [10, 4, 7, 15, 3, 25];
console.log(arrayNumerico3); // Imprime un array.
console.log.apply(// Imprime un array.
console, arrayNumerico3); // Imprime una lista de argumentos.
