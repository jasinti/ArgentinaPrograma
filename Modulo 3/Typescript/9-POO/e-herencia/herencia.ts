class Persona {
    //El atributo protected sera visible solo x las clases hijas.
    //Para el resto de las clases seguiera siendo de acceso privado. 
    protected nombre:string;
    protected edad:number;

    constructor(nombre:string, edad:number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    imprimir() {
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Edad: ${this.edad}`);
    }    
  }
  
  class Cliente extends Persona {
    private importe:number;

    constructor(nombre:string, edad:number, importe:number) {
      super(nombre, edad);//llamo al constructor del padre
      this.importe = importe;
    }
  
    imprimir() {
      super.imprimir();
      console.log(`Importe: ${this.importe}`);      
    }
  
    hacerDescuento() {
      if (this.importe>5000)
        console.log(`A ${this.nombre} se le hace un descuento`);
      else
        console.log(`A ${this.nombre} no se le hace descuento`);
    }
  }
  
  
  const persona1:Persona = new Persona('Juan Perez', 35);
  persona1.imprimir();

  console.log('---------------------------');
  
  const cliente1=new Cliente('Maria Garcia', 26, 6500);
  cliente1.imprimir();
  cliente1.hacerDescuento();