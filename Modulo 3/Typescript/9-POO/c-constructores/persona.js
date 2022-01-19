var Persona = /** @class */ (function () {
    //metodos constructores
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    //metodos
    //con acento grave(alt+96) ye interpolacion puedo ver en consola en 
    //diferentes lineas
    Persona.prototype.informarDatos = function () {
        console.log("El nombre es ".concat(this.nombre, " y tiene ").concat(this.edad, " a\u00F1os"));
    };
    Persona.prototype.informarDatos2 = function () {
        console.log('El nombre es ' + this.nombre + ' y tiene ' + this.edad + ' años');
    };
    return Persona;
}());
//creo 2 objetos mediante el constructor parametrizado e informo datos
var persona1;
persona1 = new Persona('Juan Perez', 30);
persona1.informarDatos();
var persona2 = new Persona('Maria Garcia', 25);
persona2.informarDatos2();
