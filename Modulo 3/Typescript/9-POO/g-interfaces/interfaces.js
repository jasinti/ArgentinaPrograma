//las interfaces soin estructuras de datos que contienen 
//un contrato
//El contrato es el conjunto de metodos abstractos q las
//clases que la implementen deberan codificar.
var Administrativo = /** @class */ (function () {
    //constructor
    function Administrativo(nombre, valorHora, horasTrabajadas) {
        this.setValorHora(valorHora);
        this.setHorasTrabajadas(horasTrabajadas);
    }
    //getters y setters
    Administrativo.prototype.getValorHora = function () {
        return this.valorHora;
    };
    Administrativo.prototype.setValorHora = function (valorHora) {
        this.valorHora = valorHora;
    };
    Administrativo.prototype.getHorasTrabajadas = function () {
        return this.horasTrabajadas;
    };
    Administrativo.prototype.setHorasTrabajadas = function (horasTrabajadas) {
        this.horasTrabajadas = horasTrabajadas;
    };
    //metodos
    Administrativo.prototype.toString = function () {
        return "nombre = " + this.nombre + " horas trabajadas = " + this.horasTrabajadas + " valor hora = " + this.valorHora;
    };
    //implemento el metodo abstracto de la interface Empleado
    Administrativo.prototype.calcularSueldo = function () {
        console.log('Sueldo Administrativo = ' + this.horasTrabajadas * this.valorHora);
    };
    return Administrativo;
}());
var Gerente = /** @class */ (function () {
    //constructor
    function Gerente(nombre, antiguedad, sueldoBase) {
        this.setAntiguedad(antiguedad);
        this.setSueldoBase(sueldoBase);
    }
    //getters y setters
    Gerente.prototype.getAntiguedad = function () {
        return this.antiguedad;
    };
    Gerente.prototype.setAntiguedad = function (antiguedad) {
        this.antiguedad = antiguedad;
    };
    Gerente.prototype.getSueldoBase = function () {
        return this.sueldoBase;
    };
    Gerente.prototype.setSueldoBase = function (sueldoBase) {
        this.sueldoBase = sueldoBase;
    };
    //metodos
    Gerente.prototype.toString = function () {
        return "nombre = " + this.nombre + " antiguedad = " + this.antiguedad + " sueldo base = " + this.sueldoBase;
    };
    //implemento el metodo abstracto de la interface Empleado
    Gerente.prototype.calcularSueldo = function () {
        console.log('Sueldo Gerente = ' + (this.sueldoBase + this.sueldoBase * this.antiguedad * 0.1));
    };
    return Gerente;
}());
var a = new Administrativo("Juan Perez", 750, 160);
var g = new Gerente("Maria Garcia", 5, 240000);
a.calcularSueldo();
console.log('--------------------');
g.calcularSueldo();
