console.log('Ejemplo 1');

// var num:number = 12; 
var num:number = parseInt(prompt('Ingrese un numero: ')); 
if (num % 2==0) { 
   console.log("Par"); 
} else {
   console.log("Impar"); 
}

console.log('------------------------');

console.log('Ejemplo 2');

var num:number = 2
var num:number = parseInt(prompt('Ingrese un numero: '));  
if(num > 0) { 
   console.log(num+" es positivo") 
} else if(num < 0) { 
   console.log(num+" es negativo") 
} else { 
   console.log(num+" es cero") 
}


console.log('------------------------');

console.log('Ejemplo 3');

var nota:string = prompt('Ingrese una calificacion alfabetica: ');   
switch(nota.toLocaleUpperCase()) { 
   case "A": { 
      console.log("Excelente"); 
      break; 
   } 
   case "B": { 
      console.log("Bueno"); 
      break; 
   } 
   case "C": {
      console.log("Regular"); 
      break;    
   } 
   case "D": { 
      console.log("Insuficiente"); 
      break; 
   }  
   default: { 
      console.log("Eleccion Invalida"); 
      break;              
   } 
}

