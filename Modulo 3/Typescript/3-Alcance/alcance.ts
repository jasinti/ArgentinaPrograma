/*

Var se utiliza para declarar una variable y adicionalmente se puede inicializar el valor de esta variable. Por ejemplo:var i = 0.

Podemos decir que:

Las variables declaradas con var son procesadas antes de la ejecución del código.

El scope de una variable declarada con var, es su contexto de ejecución.

El scope de una variable declarada fuera de la función es global.

En JavaScript, el contexto de ejecución es un concepto abstracto que contiene información sobre el entorno en el que se está ejecutando el código actual.

*/

console.log('Ejemplo 1');

//defino la funcion
function expliqueVar(){
    var a = 10;

    console.log(a);  // salida 10
    
    if(true){
     var a = 20;
     console.log(a); // salida 20
    }
    
    console.log(a);  // salida 20
   }

   //llamada a la funcion
expliqueVar();


console.log('----------------------------');

console.log('Ejemplo 2');
/*
  Si declaramos la variable dentro de una función IIFE (Inmediately Invoked Function Expression), el valor de nuestra variable vivirá solamente dentro del scope de esta función. Por ende, fuera de expliqueVar2() nuestra variable tomará el valor asignado previamente.
 */

var i = 50;
console.log(i);

(
    function expliqueVar2()
    {
        for(var i = 0; i < 5; i++)
        {
            console.log(i); //salida 0, 1, 2, 3, 4
        }
    }
)();
 

console.log("Despues del loop", i) // salida 50


console.log('----------------------------');


console.log('Ejemplo 3');
// ES6 resuelve esto implementando let.
// Let introduce el “block scope”. La variable asignada como let solo será accesible dentro del for loop.

var i = 50;

(
    function expliqueVar4(){
        for(let i = 0; i < 5; i++){
            console.log(i)                   //salida 0, 1, 2, 3, 4
        }
    }
)(); 

console.log("Despues del loop", i) // salida 50


console.log('----------------------------');

console.log('Ejemplo 4');

function expliqueLet(){
    let a = 10;
    console.log(a);  // salida 10
    if(true){
     let a = 20;
     console.log(a); // salida 20
    }
    console.log(a);  // salida 10
   }

   expliqueLet();

console.log('----------------------------');

console.log('Ejemplo 5');
//Const es igual que let, con una gran diferencia: no podemos reasignar su valor.

// ¿Qué pasa si tratamos de reasignar la variable const?
function expliqueConst2(){
 const x = 10;
 console.log(x); // salida 10
//  x = 20; //lanza error
 //console.log(x);
}

expliqueConst2();

// La consola mostrara un error cuando tratemos de re asignar el valor de una variable const:
// Error Message : Uncaught TypeError: Assignment to constant variable.