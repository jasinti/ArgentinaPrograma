class Persona {
  //atributos o propiedades
    nombre: string;
    edad: number;
  
    //metodos constructores
    constructor(nombre:string, edad:number) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    //metodos
    //con acento grave(alt+96) e interpolacion puedo ver en consola en 
    //diferentes lineas
    informarDatos() {
      console.log(`El nombre es ${this.nombre} y tiene ${this.edad} años`);
    }
    
    informarDatos2() {
      console.log('El nombre es ' + this.nombre + ' y tiene ' + this.edad + ' años');
    }
  }
  
  //creo 2 objetos mediante el constructor parametrizado e informo datos
  let persona1: Persona;
  persona1 = new Persona('Juan Perez', 30);
  persona1.informarDatos();

  let persona2: Persona  = new Persona('Maria Garcia', 25);
  persona2.informarDatos2();

