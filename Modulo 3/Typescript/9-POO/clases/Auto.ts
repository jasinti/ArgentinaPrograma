class Auto {
    //El modificador de acceso public viene por defecto
    //atributos o propiedades
      public marca: string;
      public color: string;
      public velocidad: number;
    
      //metodo constructor vacio
      constructor() {}

     //metodos
      public acelerar():void {
        this.velocidad += 10;
      }
     
      public frenar():void {
        this.velocidad -= 5;
      }
      
      informarDatos():void {
        console.log(`Marca: ${this.marca} color: ${this.color}\nvelocidad: ${this.velocidad} `);
      }

      public toString():string {
         return 'Marca: ' + this.marca + " - " + this.velocidad + ' km/h.';
      }
    }
    
    //creo un objeto mediante el constructor vacio
    let a = new Auto();
    let b = new Auto();

    //inicializo el estado del objeto
    a.marca = 'Ford';
    a.color = 'Gris';
    a.velocidad = 0;
    
    b.marca = 'Chevrolet';
    b.color = 'Azul';
    b.velocidad = 25;

    b.velocidad = 5000
  
    //comportamiento
    a.acelerar();//0-10
    a.acelerar();//10-20
    a.acelerar();//20-30
    
    a.frenar();//30-25

    b.acelerar();//25-35
    
    //informo estado final
    a.informarDatos();
    console.log(a.toString());
    
    console.log('-----------------');

    console.log(b.toString());



