var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Persona.prototype.imprimir = function () {
        console.log("Nombre: ".concat(this.nombre));
        console.log("Edad: ".concat(this.edad));
    };
    return Persona;
}());
var Cliente = /** @class */ (function (_super) {
    __extends(Cliente, _super);
    function Cliente(nombre, edad, importe) {
        var _this = _super.call(this, nombre, edad) || this;
        _this.importe = importe;
        return _this;
    }
    Cliente.prototype.imprimir = function () {
        _super.prototype.imprimir.call(this);
        console.log("Importe: ".concat(this.importe));
    };
    Cliente.prototype.hacerDescuento = function () {
        if (this.importe > 5000)
            console.log("A ".concat(this.nombre, " se le hace un descuento"));
        else
            console.log("A ".concat(this.nombre, " no se le hace descuento"));
    };
    return Cliente;
}(Persona));
var persona1 = new Persona('Juan Perez', 35);
persona1.imprimir();
console.log('---------------------------');
var cliente1 = new Cliente('Maria Garcia', 26, 6500);
cliente1.imprimir();
cliente1.hacerDescuento();
