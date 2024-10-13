# SERVICIO-FAMILIAR.SERVICE.TS
    import { Injectable } from '@angular/core';
    
    @Injectable({
      providedIn: 'root'
    })
    export class ServicioFamiliarService {
  
    hermanoGrande?: string;
    hermanoPequeno?: string;
  
    getHermanoGrande(): string {
      return this.hermanoGrande || '';
    }
    
    setHermanoGrande(hermano: string) {
      return this.hermanoGrande = hermano;
    }
  
    getHermanoPequeno(): string {
      return this.hermanoPequeno || '';
    }
    
    setHermanoPequeno(hermano: string) {
      return this.hermanoPequeno = hermano;
    }
  
    saludar(hermano: string){
      console.log(`Hola ${hermano}`);
    }
  
    preguntarPorHijo():string{
      return '¿Como esta tu hijo?'
    }
  
    constructor() { 
      
    }
    }

# PADRE.COMPONENT.HTML
    <h1>{{nombre}}</h1>
    <button type="button" (click)="saludar()">Saludar</button>
    <button type="button" (click)="preguntar()">Saludar</button>

# PADRE.COMPONENT.TS
    import { Component, OnInit } from '@angular/core';
    import { ServicioFamiliarService } from '../servicio-familiar.service';
    
    @Component({
      selector: 'app-padre',
      templateUrl: './padre.component.html',
      styleUrls: ['./padre.component.css']
    })
    export class PadreComponent implements OnInit {
    
      nombre?: string;
    
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

# HERMANO.COMPONET.TS
    import { Component, OnInit } from '@angular/core';
    import { ServicioFamiliarService } from '../servicio-familiar.service';
    
    @Component({
      selector: 'app-hermano',
      templateUrl: './hermano.component.html',
      styleUrls: ['./hermano.component.css']
    })
    export class HermanoComponent implements OnInit{
    
      nombre?: string;
    
      constructor(
        private _servicioFamiliar: ServicioFamiliarService
      ){}
    
      ngOnInit(): void {
        this._servicioFamiliar.setHermanoPequeno('Irina');
        this.nombre = this._servicioFamiliar.getHermanoPequeno();
      }
    
      saludar(){
        this._servicioFamiliar.saludar(this._servicioFamiliar.getHermanoGrande() || '')
      }
    
      preguntar(){
        console.log(this._servicioFamiliar.preguntarPorHijo())
      }
    }

# HERMANO.COMPONENT.HTML
    <h1>{{nombre}}</h1>
    <button type="button" (click)="saludar()">Saludar</button>
    <button type="button" (click)="preguntar()">Saludar</button>
