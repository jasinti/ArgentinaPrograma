var Producto = /** @class */ (function () {
    //constructor
    function Producto(codigo, descripcion, precio) {
        this.codigo = codigo;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    //metodos
    Producto.prototype.imprimir = function () {
        console.log("C\u00F3digo:".concat(this.codigo, " Descripci\u00F3n:").concat(this.descripcion, " Precio:").concat(this.precio));
    };
    return Producto;
}());
var producto1;
producto1 = new Producto(1, 'fideos', 130);
producto1.imprimir();
//No se puede acceder a un atributo privado por afuera de la clase.
// producto1.precio = 200;
