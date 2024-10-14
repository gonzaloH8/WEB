# mi-pipe-personalizado.pipe.ts
    import { Pipe, PipeTransform } from '@angular/core';
  
    @Pipe({
      name: 'miPipePersonalizado'
    })
    export class MiPipePersonalizadoPipe implements PipeTransform {
  
    transform(valor: string | undefined): string {
      return valor?.toUpperCase() || '';
    }
    }

# Padre.component.ts
    import { Component, OnInit } from '@angular/core';
    import { ServicioFamiliarService } from '../servicio-familiar.service';
    
    @Component({
      selector: 'app-padre',
      templateUrl: './padre.component.html',
      styleUrls: ['./padre.component.css']
    })
    export class PadreComponent implements OnInit {
    
      nombre?: string;
      fecha?: Date = new Date()
      dolar?: number = 1000.5
      pi?: number = Math.PI
      factor: number = 0.5
    
      constructor(
        private _servicioFamiliar: ServicioFamiliarService
      ){} 
    
      ngOnInit(): void {
        this._servicioFamiliar.setHermanoGrande('Juan');
        this.nombre = this._servicioFamiliar.getHermanoGrande();
      }
           
      saludar(){
        this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoPequeno() || '')
      }
    
      preguntar(){
        console.log(this._servicioFamiliar.preguntarPorHijo())
      }
    }

# Padre.component.html
    <h1>{{nombre | uppercase}}</h1>
    <h2>Mi fecha de hoy es: {{fecha | date: 'dd/MM/YYYY'}}</h2>
    <h2>Cotizacion del dolar: {{ dolar | currency: 'EUR' }}</h2>
    <h2>El numero PI: {{ pi | number: '1.2-2' }}</h2>
    <h2>El porcentaje es: {{ factor | percent }}</h2>
    <button type="button" (click)="saludar()">Saludar</button>
    <button type="button" (click)="preguntar()">Saludar</button>
