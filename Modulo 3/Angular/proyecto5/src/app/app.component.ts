//Aplicacion 11: Servicios
import { Component, OnInit } from '@angular/core';
import  { ClimaService } from './clima.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto5';

  clima: any;

  constructor(private climaService: ClimaService) {}

  ngOnInit() {
    this.climaService.retornar()
      .subscribe( result =>  this.clima = result)
  }
}
