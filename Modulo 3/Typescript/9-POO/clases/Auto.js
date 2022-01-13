var Auto = /** @class */ (function () {
    //metodo constructor vacio
    function Auto() {
    }
    //metodos
    Auto.prototype.acelerar = function () {
        this.velocidad += 10;
    };
    Auto.prototype.frenar = function () {
        this.velocidad -= 5;
    };
    Auto.prototype.informarDatos = function () {
        console.log("Marca: ".concat(this.marca, " color: ").concat(this.color, "\nvelocidad: ").concat(this.velocidad, " "));
    };
    Auto.prototype.toString = function () {
        return 'Marca: ' + this.marca + " - " + this.velocidad + ' km/h.';
    };
    return Auto;
}());
//creo un objeto mediante el constructor vacio
var a = new Auto();
var b = new Auto();
//inicializo el estado del objeto
a.marca = 'Ford';
a.color = 'Gris';
a.velocidad = 0;
b.marca = 'Chevrolet';
b.color = 'Azul';
b.velocidad = 25;
//comportamiento
a.acelerar(); //0-10
a.acelerar(); //10-20
a.acelerar(); //20-30
a.frenar(); //30-25
b.acelerar(); //25-35
//informo estado final
a.informarDatos();
console.log(a.toString());
console.log('-----------------');
console.log(b.toString());
