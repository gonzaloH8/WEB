# ESTILO-HERMANOS.DIRECTIVE.TS
    import { Directive, ElementRef } from '@angular/core';
  
    @Directive({
      selector: '[appEstiloHermanos]'
    })
    export class EstiloHermanosDirective {
  
    constructor(private element: ElementRef) { 
      this.element.nativeElement.style.backgroundColor = 'green';
    }
  
    }

# HERMANO.COMPONENT.HTML
    <h1 appEstiloHermanos>{{nombre}}</h1>
    <button type="button" (click)="saludar()">Saludar</button>
    <button type="button" (click)="preguntar()">Saludar</button>

# PADRE.COMPONENT.HTML
    <h1 appEstiloHermanos>{{nombre}}</h1>
    <button type="button" (click)="saludar()">Saludar</button>
    <button type="button" (click)="preguntar()">Saludar</button>
