console.log('charAt()');
// Devuelve el carácter en el índice especificado.
var str = new String("Curso de Full Stack");
console.log("str.charAt(0) es:" + str.charAt(0));
console.log("str.charAt(1) es:" + str.charAt(1));
console.log("str.charAt(2) es:" + str.charAt(2));
console.log('----------------------------');
console.log('concat()');
// Combina el texto de dos cadenas y devuelve una nueva cadena.
var str1 = new String("Hola");
var str2 = new String("      Mundo");
var str3 = str1.concat(str2.toString());
console.log("str1 + str2 : " + str3);
console.log('----------------------------');
console.log('indexOf()');
// Devuelve el índice dentro del objeto String que llama de la primera aparición del valor especificado, o -1 si no se encuentra.
var str1 = new String(" Esta es la primera cadena");
var index = str1.indexOf("string");
console.log("indexOf encontrado String :" + index);
var index = str1.indexOf("one");
console.log("indexOf encontrado String :" + index);
// indexOf encontrado String :8 
// indexOf encontrado String :15
console.log('----------------------------');
console.log('replace()');
// Se utiliza para encontrar una coincidencia entre una expresión regular y una cadena, y para reemplazar la subcadena coincidente con una nueva subcadena.
var re = /Manzanas/gi;
var cadena = "Las manzanas son redondas, y las manzanas son jugosas.";
var nuevaCadena = cadena.replace(re, "naranjas");
console.log(nuevaCadena);
console.log('----------------------------');
console.log('slice()');
// Extrae una sección de una cadena y devuelve una nueva cadena.
var cadena2 = "Las manzanas son redondas y las manzanas son jugosas.";
var partido = cadena2.slice(3, -2);
console.log(partido);
console.log('----------------------------');
console.log('split()');
// Divide un objeto String en una matriz de cadenas separando la cadena en subcadenas.
var cadena3 = "Hola Mundo, como estan?";
var dividido = cadena3.split(" ", 2);
console.log(dividido);
console.log('----------------------------');
console.log('toLowerCase()');
var cadena4 = "Curso Full Stack.";
console.log(cadena4.toLowerCase());
console.log('----------------------------');
console.log('toUpperCase()');
var cadena4 = "Curso Full Stack.";
console.log(cadena4.toUpperCase());
