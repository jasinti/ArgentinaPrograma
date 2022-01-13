/*

Var se utiliza para declarar una variable y adicionalmente se puede inicializar el valor de esta variable. Por ejemplo:var i = 0.

Podemos decir que:

Las variables declaradas con var son procesadas antes de la ejecución del código.

El scope de una variable declarada con var, es su contexto de ejecución.

El scope de una variable declarada fuera de la función es global.

En JavaScript, el contexto de ejecución es un concepto abstracto que contiene información sobre el entorno en el que se está ejecutando el código actual.

*/
console.log('Ejemplo 1');
function expliqueVar() {
    var a = 10;
    console.log(a); // salida 10
    if (true) {
        var a = 20;
        console.log(a); // salida 20
    }
    console.log(a); // salida 20
}
expliqueVar();
console.log('----------------------------');
console.log('Ejemplo 2');
/*
  Si declaramos la variable dentro de una función IIFE (Inmediately Invoked Function Expression), el valor de nuestra variable vivirá solamente dentro del scope de esta función. Por ende, fuera de expliqueVar2() nuestra variable tomará el valor asignado previamente.
 */
var i = 50;
(function expliqueVar2() {
    for (var i = 0; i < 5; i++) {
        console.log(i); //salida 0, 1, 2, 3, 4
    }
})();
console.log("Despues del loop", i); // salida 50
console.log('----------------------------');
console.log('Ejemplo 3');
/*
    Si olvidamos declarar una variable dentro de la función o loop (en este caso no declaramos i dentro del for), el interprete de Javascript la va a declarar de forma global. El valor de i a nivel global será reasignado por el loop for.
*/
var i = 50;
(function expliqueVar3() {
    for (i = 0; i < 5; i++) {
        console.log(i); //salida 0, 1, 2, 3, 4
    }
})();
console.log("Despues del loop", i); // salida 5
console.log('----------------------------');
console.log('Ejemplo 4');
// ES6 resuelve esto implementando let.
// Funciona de acuerdo a lo esperado! Esto pasa porque let introduce el “block scope”. La variable asignada como let solo será accesible dentro del for loop.
var i = 50;
(function expliqueVar4() {
    for (var i_1 = 0; i_1 < 5; i_1++) {
        console.log(i_1); //salida 0, 1, 2, 3, 4
    }
})();
console.log("Despues del loop", i); // salida 50
console.log('----------------------------');
console.log('Ejemplo 5');
function expliqueLet() {
    var a = 10;
    console.log(a); // salida 10
    if (true) {
        var a_1 = 20;
        console.log(a_1); // salida 20
    }
    console.log(a); // salida 10
}
expliqueLet();
console.log('----------------------------');
console.log('Ejemplo 6');
//Const es igual que let, con una gran diferencia: no podemos reasignar su valor.
function expliqueConst() {
    var x = 10;
    console.log(x); // salida 10
}
expliqueConst();
// ¿Qué pasa si tratamos de reasignar la variable const?
function expliqueConst2() {
    var x = 10;
    console.log(x); // salida 10
    //  x = 20; //lanza error
    //console.log(x);
}
expliqueConst2();
// La consola mostrara un error cuando tratemos de re asignar el valor de una variable const:
// Error Message : Uncaught TypeError: Assignment to constant variable.
