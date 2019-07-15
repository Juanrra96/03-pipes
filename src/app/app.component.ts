import { Component } from '@angular/core';
import { logWarnings } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre: string="Juan Ramon";
  nombre2 = "juan raMon visCarra holgUin";
  PI = Math.PI;
  number = 0.234;
  salario = 6543.50;
  
  heroe= {
  nombre: "Logan",
  clave: "Wolverine",
  edad: 500,
  direccion:{
    calle: "primera",
    casa: 19
  }
  }

  valorDePromesa = new Promise( ( resolve, reject )=>{

    setTimeout( ()=>resolve('Llego la data!'), 3500);
  })

  fecha = new Date();

  video="y8lwG8IM82k";

  activar:boolean = true;
}
