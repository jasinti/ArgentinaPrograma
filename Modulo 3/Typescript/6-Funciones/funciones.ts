console.log('Pasando parámetros y valor de retorno')

// Podemos agregar parámetros y esperar un valor de retorno como parte de la definición de la función. En el siguiente ejemplo, pasamos dos parámetros i y j del número de tipo de datos, con el valor de retorno como número.

function sumar(i: number, j: number): number
{
	return i + j;
}

function mul(i: number, j: number): number
{
	return i * j;
}

let resultado = sumar(3,4);
console.log("sumar(3,4) es " + resultado);

console.log('******')

resultado = mul(3,4);
console.log("mul(3,4) es " + resultado);



console.log('--------------------------------')

console.log('Parámetros Opcionales')

// El ejemplo anterior declara una función parametrizada. Aquí, el tercer parámetro, es decir, mail_id es un parámetro opcional.

// Si no se pasa un valor a un parámetro opcional durante la llamada a la función, el valor del parámetro se establece en indefinido.

// La función imprime el valor de mail_id solo si al argumento se le pasa un valor.

function mostrarDatos(id:number,nombre:string,email?:string) { 
   console.log("ID: ", id); 
   console.log("Nombre: ",nombre); 
   
   if(email != undefined)  
      console.log("Email: ",email); 
}

mostrarDatos(123,"Juan");

console.log('******')

mostrarDatos(111,"Maria","maria@gmail.com");



console.log('---------------------------------------')

console.log('Parámetros Predeterminados')

function calcular_descuento(precio:number,descuento:number = 0.50) { 
    var descuento = precio * descuento; 
    console.log("descuento: ",descuento); 
 }

 calcular_descuento(700); //descuento del 50%
 calcular_descuento(1000,0.30) //descuento del 30%

 console.log('--------------------------------')

 console.log('Función anónima')

// A las variables se les puede asignar una función anónima. Esta expresión se llama expresión de función.

// Ejemplo: una función anónima simple
var mensaje = function() { 
   return "Hola Mundo!";  
}

console.log(mensaje())


console.log('--------------------------------')

console.log('función anónima con parámetros')

var res = function(a:number,b:number) { 
   return a*b;  
}; 
console.log(res(12,2)) 


console.log('--------------------------------')

console.log('Funciones lambda')

// Expresión Lambda
// Es una expresión de función anónima que apunta a una sola línea de código. Su sintaxis es la siguiente:

// ( [param1, parma2,…param n] )=>statement;

var foo = (monto:number) => 1.21 * monto 
// console.log(foo(100))      //salida: 110 
console.log('Monto con IVA: '+foo(parseInt(prompt('Ingrese monto: '))))    