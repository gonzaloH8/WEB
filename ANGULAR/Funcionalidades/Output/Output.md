# OUTPUT
  ## PADRE.COMPONENT.TS
    import { Component } from '@angular/core';
  
    @Component({
      selector: 'app-padre',
      templateUrl: './padre.component.html',
      styleUrls: ['./padre.component.css']
    })
    export class PadreComponent {
         
    mensajeRecibido: string = '';
  
    recibirMensaje($event: string){
      this.mensajeRecibido = $event;
    }
  
  
    // CONTADOR
    valorContador: number = 0;
    incrementar(){
      this.valorContador++;
    }
    decrementar(){
      this.valorContador--;
    }
    }

  ## PADRE.COMPONENT.HTML
    <app-hijo 
    (incrementarDesdeHijo)="incrementar()"
    (decrementarDesdeHijo)="decrementar()"
    (mensajeDesdeHijo)="recibirMensaje($event)"
    />
    <h5>El mensaje recibido desde el hijo es: {{mensajeRecibido}}</h5>
    
    <h2>CONTADOR: </h2>
    <p>{{valorContador}}</p>

 ## HIJO.COMPONENT.TS
     import { Component, EventEmitter, Input, Output } from '@angular/core';
  
    @Component({
      selector: 'app-hijo',
      templateUrl: './hijo.component.html',
      styleUrls: ['./hijo.component.css']
    })
    export class HijoComponent {
  
    @Output() mensajeDesdeHijo = new EventEmitter<string>();
    @Output() incrementarDesdeHijo = new EventEmitter<void>();
    @Output() decrementarDesdeHijo = new EventEmitter<void>();
    mensaje: string = '';
  
    EnviarMensaje(){
      this.mensajeDesdeHijo.emit(this.mensaje);
    }
  
    incrementar(){
      this.incrementarDesdeHijo.emit();
    }
    decrementar(){
      this.decrementarDesdeHijo.emit();
    }
    }

  ## HIJO.COMPONENT.HTML
    <div>
    <label form="entrada">Escribir un mensaje para el padre: </label>
    <input type="text" id="entrada" [(ngModel)]="mensaje">
    <button type="button" (click)="EnviarMensaje()">EnviarMensaje</button>
    </div>
    
    <div>
        <button (click)="incrementar()">Incrementar</button>
        <button (click)="decrementar()">Decrementar</button>
    </div>
