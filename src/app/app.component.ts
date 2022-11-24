import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes : Componente[] = [
    {
      
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio'
    },

    {

      icon: 'card-outline',
      name: 'pago',
      redirecTo: '/pago'
    },
    {

      icon: 'newspaper-outline',
      name: 'detalle',
      redirecTo: '/detalle'
    },
    {
       icon: 'card-outline',
       name: 'Conductores Destacados',
       redirecTo: '/api'
    }

  ];
  
  }