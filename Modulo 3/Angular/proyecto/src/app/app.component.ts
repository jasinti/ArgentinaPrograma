import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//Aplicacion 1: Hola Mundo
// export class AppComponent {
//   title = 'Aplicacion 1';
// }







//Aplicacion 2: Interpolacion
// export class AppComponent {
//   title = 'Aplicacion 2';

//   sitio='http://www.google.com';

//   articulo = 'Azucar';
//   marcas = [{'nombre':'Arcor','precio':120},{'nombre':'Ledesma','precio':100}];
  
//   sumarPrecios() {
//     let total = 0;
//     for(let i = 0; i < this.marcas.length; i++)
//       total += this.marcas[i].precio;
//     return total;  
//   }
// }







//Aplicacion 3: Directivas *ngIf y *ngFor

// Las directivas *ngIf y *ngFor son atributos que podemos agregarle a los elementos HTML que nos permiten en el caso del *ngIf condicionar si dicha marca debe agregarse a la página HTML.

// La directiva *ngFor nos permite generar muchos elementos HTML repetidos a partir del recorrido de un arreglo de datos.

// export class AppComponent {
//   title = 'Aplicacion 3';

//   public titulo = 'Don Quijote de la Mancha';
//   public disponible = 'no';
//   public autor = 'Miguel Cervantes';
//   public librerias = ['El Ateneo', 'La Cueva', 'Cuspide'];
// }





//Aplicacion 4: Manejo de Eventos
// export class AppComponent {
//   public pago:string = '';

//   pagarEfectivo() {
//     this.pago = 'Efectivo';
//   }
  
//   pagarTarjeta() {
//     this.pago = 'Tarjeta';
//   }
// }







//Aplicacion 5: Directiva ngModel
// export class AppComponent {
//   articulo ='';
//   comentarios ='';
// }





//Aplicacion 6: CRUD con directiva ngModel
export class AppComponent {
  
  cli={
    idcliente:0 ,
    nombre:"",
    edad:0
  }

  clientes = [{idcliente:1, nombre:'Juan Perez', edad:25},
               {idcliente:2, nombre:'Maria Garcia', edad:42},
               {idcliente:3, nombre:'Jose Flores', edad:30},
               {idcliente:4, nombre:'Carla Gomez', edad:27},
               {idcliente:5, nombre:'Carlos Rios', edad:50},
              ];

  existeClientes() {
    return this.clientes.length>0;              
  }

  eliminar(idcliente:number) {
    for(let x=0;x<this.clientes.length;x++)
      if (this.clientes[x].idcliente==idcliente)
      {
        this.clientes.splice(x,1);
        return;
      }
  }

  agregar() {
    if (this.cli.idcliente==0) {
      alert('Debe ingresar un idcliente distinto a cero');
      return;
    }
    for(let x=0;x<this.clientes.length;x++)
    if (this.clientes[x].idcliente==this.cli.idcliente)
    {
      alert('ya existe un cliente con dicho idcliente');
      return;
    }        
    this.clientes.push({idcliente:this.cli.idcliente,
                         nombre:this.cli.nombre,
                         edad:this.cli.edad });
    this.cli.idcliente=0;
    this.cli.nombre="";	
    this.cli.edad=0;    
  }

  datos(cli: { idcliente: number; nombre: string; edad: number; }) {
    this.cli.idcliente=cli.idcliente;
    this.cli.nombre=cli.nombre;
    this.cli.edad=cli.edad;
  }

  actualizar() {
    for(let x=0;x<this.clientes.length;x++)
      if (this.clientes[x].idcliente==this.cli.idcliente)
      {
        this.clientes[x].nombre=this.cli.nombre;
        this.clientes[x].edad=this.cli.edad;
        return;
      }        
    alert('No existe el idcliente ingresado');
  }
}







