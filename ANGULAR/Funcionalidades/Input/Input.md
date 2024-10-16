# INPUT
  ## DECLARACION DE LA VARIABLE MENSAJEPADRE
    padre.component.ts
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'app-padre',
      templateUrl: './padre.component.html',
      styleUrls: ['./padre.component.css']
    })
    export class PadreComponent {
            mensajePadre = 'Mensage del padre'; // creo la variable con su valor
    }

  ## RECIBO LA VARIABLE Y LA ALMACENO EN LA PROPIEDAD RECIBEHIJO
    padre.component.html
    <app-hijo [recibeHijo]="mensajePadre"></app-hijo> <!--creo una varible como propiedad con el valor del mensajePadre-->

 ## RECIBO LA VARIABLE, INICIALIZANDOLA VACIA
     hijo.component.ts
     import { Component, Input } from '@angular/core';

    @Component({
      selector: 'app-hijo',
      templateUrl: './hijo.component.html',
      styleUrls: ['./hijo.component.css']
    })
    export class HijoComponent {
    
      // Este es el mensaje que recibe de padre
      @Input() recibeHijo: string = '';
    }

## IMPRIMO EL MENSAJE DE PADRE
    hijo.component.html
    <h1>EL mensaje enviado fue: </h1>
    <p>{{recibeHijo}}</p>
