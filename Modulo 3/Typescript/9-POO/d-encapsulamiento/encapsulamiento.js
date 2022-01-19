var Auto = /** @class */ (function () {
    //metodo constructor vacio
    function Auto() {
    }
    //getters y setters
    //Para generar automaticamente get y set de atributo privado,
    //debe seleccionarse el atributo y en el foco elegir la opcion
    Auto.prototype.getVelocidad = function () {
        return this._velocidad;
    };
    Auto.prototype.setVelocidad = function (value) {
        //regla de negocio
        if (value >= 0 && value <= 130) {
            this._velocidad = value;
        }
        else {
            console.log('Velocidad fuera de rango');
        }
    };
    //metodos
    Auto.prototype.acelerar = function () {
        this.setVelocidad(this.getVelocidad() + 10);
    };
    Auto.prototype.frenar = function () {
        this.setVelocidad(this.getVelocidad() - 5);
    };
    Auto.prototype.informarDatos = function () {
        console.log("Marca: ".concat(this.marca, " color: ").concat(this.color, "\nvelocidad: ").concat(this._velocidad, " "));
    };
    Auto.prototype.toString = function () {
        return 'Marca: ' + this.marca + " - " + this.getVelocidad() + ' km/h.';
    };
    return Auto;
}());
//creo un objeto mediante el constructor vacio
var a = new Auto();
var b = new Auto();
//inicializo el estado del objeto
a.marca = 'Ford';
a.color = 'Gris';
a.setVelocidad(120);
b.marca = 'Chevrolet';
b.color = 'Azul';
b.setVelocidad(0);
//comportamiento
a.acelerar(); //120-130
a.acelerar(); //130-130
// a.acelerar();//
a.frenar(); //130-125
//informo estado final
a.informarDatos();
console.log(a.toString());
