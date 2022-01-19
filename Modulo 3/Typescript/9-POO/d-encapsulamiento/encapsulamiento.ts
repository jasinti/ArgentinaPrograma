class Auto {
  //El modificador de acceso public viene por defecto
  //atributos o propiedades
  public marca: string;
  public color: string;
  private _velocidad: number;

   //metodo constructor vacio
   constructor() { }
      
   //getters y setters

  //Para generar automaticamente get y set de atributo privado,
  //debe seleccionarse el atributo y en el foco elegir la opcion
  public getVelocidad(): number {
    return this._velocidad;
  }

  public setVelocidad(value: number) {
    //regla de negocio
    if (value >= 0 && value <= 130) {
      this._velocidad = value;  
    } else {
      console.log('Velocidad fuera de rango')
    }
  }

  //metodos
  public acelerar(): void {
    this.setVelocidad(this.getVelocidad() + 10);
  }

  public frenar(): void {
    this.setVelocidad(this.getVelocidad() - 5);
  }

  informarDatos(): void {
    console.log(`Marca: ${this.marca} color: ${this.color}\nvelocidad: ${this._velocidad} `);
  }

  public toString(): string {
    return 'Marca: ' + this.marca + " - " + this.getVelocidad() + ' km/h.';
  }
}

//creo un objeto mediante el constructor vacio
let a = new Auto();
let b = new Auto();

//inicializo el estado del objeto
a.marca = 'Ford';
a.color = 'Gris';
a.setVelocidad(120);

b.marca = 'Chevrolet';
b.color = 'Azul';
b.setVelocidad(0);

//comportamiento
a.acelerar();//120-130
a.acelerar();//130-130
// a.acelerar();//

a.frenar();//130-125

//informo estado final
a.informarDatos();
console.log(a.toString());


