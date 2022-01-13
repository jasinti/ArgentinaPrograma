console.log('Ejemplo 1');

var i:number = 1 
while(i<=10) { 
   if (i % 5 == 0) {   
      console.log ("El primer múltiplo de 5 entre 1 y 10 es : "+i) 
      break     //salir del bucle si se encuentra el primer múltiplo
   } 
   i++ 
}  //si la salida es 5 entonces sale del bucle

console.log('------------------------');

console.log('Ejemplo 2');
// El ejemplo siguiente muestra el número de valores impares entre 0 y 20. 
// El ciclo sale de la iteración actual si el número es par. Esto se logra 
// utilizando la sentencia continue .
var num:number = 0
var count:number = 0;

for(num=0;num<=20;num++) {
   if (num % 2==0) {
      continue
   }
   count++
}
console.log (" El recuento de valores impares entre 0 y 20 es: "+count)    //salida 10 

console.log('------------------------');



