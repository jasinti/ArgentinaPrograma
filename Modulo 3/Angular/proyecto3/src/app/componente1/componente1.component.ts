import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  @Input() valor: string = 'Norte Argentino';

  constructor() { }

  ngOnInit(): void {
  }

}
