class Producto {
  //atributos
  //el valor de la propiedad readonly solo puede ser cargado en el constructor o al momento de definirlo y luego no puede ser modificado ni desde un método de la clase o fuera de la clase.
  readonly codigo: number;
  descripcion: string;//por defecto public
  private precio: number;

//constructor
  constructor(codigo:number, descripcion:string, precio:number) {
    this.codigo=codigo;
    this.descripcion=descripcion;
    this.precio=precio;
  }

  //metodos
  imprimir() {
    console.log(`Código:${this.codigo} Descripción:${this.descripcion} Precio:${this.precio}`);
  }
}

let producto1: Producto;
producto1 = new Producto(1,'fideos',130);
producto1.imprimir();

//No se puede acceder a un atributo privado por afuera de la clase.
//En tal caso se debe acceder a traves de metodos publicos get y set
// producto1.precio = 200;


