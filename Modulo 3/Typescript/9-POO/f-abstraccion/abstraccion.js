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
//Las clases abstractas no instancian objetos
//Sirven como clase base en la jerarquia de clases(arbol de herencia)
var Vehiculo = /** @class */ (function () {
    //constructores
    function Vehiculo(velocidad) {
        this.setVelocidad(velocidad);
    }
    //getters y setters
    Vehiculo.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Vehiculo.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
    };
    Vehiculo.prototype.toString = function () {
        return " velocidad=" + this.velocidad + " km./h.";
    };
    return Vehiculo;
}());
var Bici = /** @class */ (function (_super) {
    __extends(Bici, _super);
    //constructores
    function Bici(rodado, velocidad) {
        var _this = _super.call(this, velocidad) || this;
        _this.rodado = rodado;
        return _this;
    }
    //get y set
    Bici.prototype.getRodado = function () {
        return this.rodado;
    };
    Bici.prototype.setRodado = function (rodado) {
        this.rodado = rodado;
    };
    //metodos
    //implementamos el metodo abstracto acelerar del padre(Vehiculo)
    Bici.prototype.acelerar = function () {
        this.velocidad += 5;
    };
    Bici.prototype.toString = function () {
        return "Rodado=" + this.rodado + _super.prototype.toString.call(this);
    };
    return Bici;
}(Vehiculo));
var Avion = /** @class */ (function (_super) {
    __extends(Avion, _super);
    //constructores
    function Avion(asientos, velocidad) {
        var _this = _super.call(this, velocidad) || this;
        _this.setAsientos(asientos);
        return _this;
    }
    //get y set
    Avion.prototype.getAsientos = function () {
        return this.asientos;
    };
    Avion.prototype.setAsientos = function (asientos) {
        this.asientos = asientos;
    };
    //metodos
    //implementamos el metodo abstracto acelerar del padre(Vehiculo)
    Avion.prototype.acelerar = function () {
        this.velocidad += 100;
    };
    Avion.prototype.toString = function () {
        return "Asientos= " + this.asientos + _super.prototype.toString.call(this);
    };
    return Avion;
}(Vehiculo));
//no se puede crear objetos de una clase abstracta
// let v: Vehiculo = new Vehiculo(0);
var a = new Avion(85, 0);
var b = new Bici(28, 0);
//comportamiento
a.acelerar(); //0-100
b.acelerar(); //0-5
//estado
console.log(a.toString());
console.log("-------------");
console.log(b);
