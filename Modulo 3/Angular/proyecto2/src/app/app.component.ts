//Aplicacion 7: Lectura de API Rest
import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto3';
  
  persona: any;

  // definimos una propiedad en los parámetros del constructor que se inyecta cuando se crea el componente
  constructor(private http: HttpClient) { }

  // En el método onInit que se ejecuta una vez que el template del componente está creado procedemos a recuperar del servidor los datos llamando al método get de la propiedad http
  
  // Del objeto que retorna el método get llamamos al método subscribe y le pasamos una función anónima. Recibe como parámetro los datos recuperados del servidor.
  ngOnInit() {
    
    this.http.get("https://randomuser.me/api/")
      .subscribe(
        resultado => {
          this.persona = resultado;
        }
      );
  }
}
