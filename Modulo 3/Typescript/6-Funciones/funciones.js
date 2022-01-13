console.log('Pasando parámetros y valor de retorno');
// Podemos agregar parámetros y esperar un valor de retorno como parte de la definición de la función. En el siguiente ejemplo, pasamos dos parámetros i y j del número de tipo de datos, con el valor de retorno como número.
function sumar(i, j) {
    return i + j;
}
function mul(i, j) {
    return i * j;
}
var resultado = sumar(3, 4);
console.log("sumar(3,4) es " + resultado);
console.log('******');
resultado = mul(3, 4);
console.log("mul(3,4) es " + resultado);
console.log('--------------------------------');
console.log('Parámetros Opcionales');
// El ejemplo anterior declara una función parametrizada. Aquí, el tercer parámetro, es decir, mail_id es un parámetro opcional.
// Si no se pasa un valor a un parámetro opcional durante la llamada a la función, el valor del parámetro se establece en indefinido.
// La función imprime el valor de mail_id solo si al argumento se le pasa un valor.
function mostrarDatos(id, nombre, email) {
    console.log("ID: ", id);
    console.log("Nombre: ", nombre);
    if (email != undefined)
        console.log("Email: ", email);
}
mostrarDatos(123, "Juan");
console.log('******');
mostrarDatos(111, "Maria", "maria@gmail.com");
console.log('---------------------------------------');
console.log('Parámetros Predeterminados');
// El ejemplo declara la función, calcular_descuento . La función tiene dos parámetros: precio y tarifa.
// El valor de la tasa del parámetro se establece en 0,50 de forma predeterminada.
// El programa invoca la función, pasándole solo el valor del parámetro precio. Aquí, el valor de la tasa es 0,50 (predeterminado)
// Se invoca la misma función, pero con dos argumentos. El valor predeterminado de la tasa se sobrescribe y se establece en el valor pasado explícitamente.
// A los parámetros de función también se les pueden asignar valores por defecto. Sin embargo, dichos parámetros también pueden ser valores pasados ​​explícitamente.
function calcular_descuento(precio, descuento, articulo) {
    if (descuento === void 0) { descuento = 0.50; }
    var descuento = precio * descuento;
    console.log("descuento: ", descuento);
}
calcular_descuento(700, undefined, 'banana'); //descuento del 50%
calcular_descuento(1000, 0.30, 'peras'); //descuento del 30%
console.log('--------------------------------');
console.log('Función anónima');
// Las funciones que no están vinculadas a un identificador (nombre de la función) se denominan funciones anónimas . Estas funciones se declaran dinámicamente en tiempo de ejecución. Las funciones anónimas pueden aceptar entradas y devolver salidas, al igual que las funciones estándar. 
// A las variables se les puede asignar una función anónima. Esta expresión se llama expresión de función.
// Ejemplo: una función anónima simple
var mensaje = function () {
    return "Hola Mundo!";
};
console.log(mensaje());
console.log('--------------------------------');
console.log('función anónima con parámetros');
var res = function (a, b) {
    return a * b;
};
console.log(res(12, 2));
console.log('--------------------------------');
console.log('Funciones lambda');
// Lambda se refiere a funciones anónimas en programación. Las funciones Lambda son un mecanismo breve para representar funciones anónimas. Estas funciones también se denominan funciones de flecha .
// Función Lambda - Anatomía
// Hay 3 partes en una función Lambda:
// Parámetros : una función puede tener parámetros opcionalmente
// La notación de flecha gruesa / notación lambda (=>) - También se llama como el operador va a
// Declaraciones : representan el conjunto de instrucciones de la función
// Sugerencia : por convención, se recomienda el uso de un parámetro de una sola letra para una declaración de función compacta y precisa.
// Expresión Lambda
// Es una expresión de función anónima que apunta a una sola línea de código. Su sintaxis es la siguiente:
// ( [param1, parma2,…param n] )=>statement;
var foo = function (monto) { return 1.21 * monto; };
// console.log(foo(100))      //salida: 110 
console.log('Monto con IVA: ' + foo(parseInt(prompt('Ingrese monto: '))));
