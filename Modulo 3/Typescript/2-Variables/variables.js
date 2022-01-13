console.log('Ejemplo 1: ');
//uso de variables
var puntuacion1 = 50;
var puntuacion2 = 42.50;
var suma = puntuacion1 + puntuacion2;
console.log("primera puntuacion: " + puntuacion1);
console.log("segunda puntuacion: " + puntuacion2);
console.log("suma de las puntuaciones: " + suma);
console.log('--------------------------------');
console.log('Variante Ejemplo 1: ');
var n1 = parseInt(prompt('Ingrese n1: '));
var n2 = parseInt(prompt('Ingrese n2: '));
var producto = n1 * n2;
alert("Producto = " + producto);
console.log('--------------------------------');
console.log('Ejemplo 2: ');
//tipo de dato string
var nombre = 'Juan Perez';
console.log("El nombre de la persona es: " + nombre);
console.log('--------------------------------');
console.log('Ejemplo 3: ');
//tipo de dato booleano
var abierto = true;
if (abierto) {
    console.log("La puerta esta abierta");
}
else {
    console.log("La puerta esta cerrada");
}
console.log('--------------------------------');
console.log('Ejemplo 4: ');
//tipo de dato any
var cualquierValor;
typeof (cualquierValor);
cualquierValor = "Hola Mundo!";
console.log('Cantidad de caracteres: ' + cualquierValor.length);
cualquierValor = true;
console.log(cualquierValor);
cualquierValor = 20;
console.log(cualquierValor);
console.log('--------------------------------');
console.log('Ejemplo 5: ');
// TypeScript permite cambiar una variable de un tipo a otro.
var numero = 15;
var numeroComoCadena = String(numero);
console.log(typeof numero);
console.log(typeof numeroComoCadena);
console.log('--------------------------------');
console.log('Ejemplo 6: ');
// Escritura inferida
var num = 2; // el tipo de dato es inferido como number 
console.log("valor de num: " + num);
//num = "12";//genera error xq ts infiere q num es numerico y no string
console.log(num);
console.log('--------------------------------');
console.log('Ejemplo 7: ');
// Alcance o scope de variable
var global_num = 12; //variable global  
var Numeros = /** @class */ (function () {
    function Numeros() {
        this.num_val = 13; //variable de clase 
    }
    Numeros.prototype.storeNum = function () {
        var local_num = 14; //variable local  
    };
    Numeros.sval = 10; //atributo estatico 
    return Numeros;
}());
console.log("numero Global: " + global_num);
console.log(Numeros.sval); //static variable  
var obj = new Numeros();
console.log("numero Global: " + obj.num_val);
