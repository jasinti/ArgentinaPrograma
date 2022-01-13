console.log('Ejemplo 1: ');
//uso de variables
var puntuacion1:number = 50;
var puntuacion1b;//inferencia del tipo de dato
puntuacion1b = true;
puntuacion1b = "dklbndfjknbjdfnbjk";
puntuacion1b = 90;

var puntuacion2:number = 42.50
var suma = puntuacion1 + puntuacion2;

console.log("primera puntuacion: "+puntuacion1) 
console.log("segunda puntuacion: "+puntuacion2) 
console.log("suma de las puntuaciones: "+suma)

console.log('--------------------------------');

console.log('Variante Ejemplo 1: ');
var n1:number = parseInt(prompt('Ingrese n1: '));
var n2:number = parseInt(prompt('Ingrese n2: '));
var producto = n1 * n2;
alert("Producto = "+ producto);


console.log('--------------------------------');

console.log('Ejemplo 2: ');
//tipo de dato string
var nombre:string = 'Juan Perez';
console.log("El nombre de la persona es: "+nombre);
console.log('--------------------------------');

console.log('Ejemplo 3: ');
//tipo de dato booleano
var abierto:boolean = false ;
if (abierto) {
   console.log("La puerta esta abierta");   
} else {
   console.log("La puerta esta cerrada");
}

console.log('--------------------------------');

console.log('Ejemplo 4: ');
//tipo de dato any
var cualquierValor;
typeof(cualquierValor);

cualquierValor = "Hola Mundo!";
console.log('Cantidad de caracteres: ' + cualquierValor.length);

cualquierValor = true;
console.log(cualquierValor);

cualquierValor = 20;
console.log(cualquierValor);






