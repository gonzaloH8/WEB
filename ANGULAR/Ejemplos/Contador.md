# CONTADOR

  ## CREACION DE LA VARIABLE Y SUS METODOS EN LA CLASE
    padre.component.ts
    import { Component } from '@angular/core';
    @Component({
      selector: 'app-padre',
      templateUrl: './padre.component.html',
      styleUrls: ['./padre.component.css']
    })
    export class PadreComponent {
            ValorComponente: number = 0;
           
    
            Incrementar(){
              this.ValorComponente++;
            }
    
            Decrementar(){
              this.ValorComponente--;
            }
    }
  ## INICIALIZACION DE VARIABLES Y EVENTOS
    padre.component.html
    <h1>CONTADOR: </h1>
    <p>{{ValorComponente}}</p>
    <button (click)="Incrementar()">Incrementar</button>
    <button (click)="Decrementar()">Decrementar</button>

  ## INICIALIZAMOS EL COMPONENTE EN EL COMPONENTE PRINCIPAL
    app.component.html
    <app-padre/> <!-- LLAMADO DE OTRO COMPONENTE-->
