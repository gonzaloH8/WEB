# GENERACION DE COMPONENTES
    ng generate component nombre_carpeta -- genera una carpeta con todos los archivos que componenen el componente
    ng generate service nombre_servidor -- genera un archivo de control de servicios
    ng generate directive nombre_directiva -- genera un archiv de control de directivas
    ng generate pipe nombre_pipe
    ng add @angular/material
    ng add @angular/pwa
    ng add _____
    ng test
    ng build

# ESTRUCTURA
    Index.html-style.css-main.ts(Estructura PADRE)
    Componenete Padre: 
        app-routing.module.ts -- soporte al ts principal
        app.component.css -- css del componente(Apariencia)
        app.component.html -- html del componente(Escritura)
        app.component.ts -- ts del componente(logica)
        app.module.ts -- soporte al ts principal
    Componentes Hijos
        hijo.component.css -- css del componente(Apariencia)
        hijo.component.html -- html del componente(Escritura)
        hijo.component.ts -- ts del componente(logica)

# ESCRITURA
    {{ ValorPlano }} -- muestra texto plano
    (TipoEvento)="" -- llamamos al evento
    [propiedades] -- muestra las propiedades de la etiqueta
        

# ESCTRUCTURAS DE CONTROL
## NGIF 
    <div ngIf="mostrarElemento">
      Contenido visisble si mostrarElemento es true
    </div>

## NGFOR
    <ul>
      <li *ngFor="let item of listaItems">
        {{ item }}
      </li>
    </ul>

## NGSWITCH
    <div [ngSwitch]="opcion">
      <p *ngSwitchCase="'opcion1'">Contenido para opcion 1</p>
      <p *ngSwitchCase="'opcion2'">Contenido para opcion 2</p>
      <p *ngSwitchDefault>Contenido por defecto</p>
    </div>

## NGCLASS
    <div [ngClass]="{'clase1': condicion1, 'clase2': condicion2 }">
      <!--Contenido con clases dinamicas-->
    </div>
  
## NGSTYLE
    <div [ngStyle]="{'color': color, 'font-size': tamano}">
     <!--Contenido con estilos dinamicos-->
    </div>

 ## NGCONTSINER
     <ng-container *ngIf='xondicion'>
       <!--Contenido que no afecta al DOM directamente-->
    </ng-container>

# APP-MODUL
    IMPORTACIONES
    import { NgModule } from '@angular/core';
    import { BrowserModule } from '@angular/platform-browser';
    import { FormsModule, ReactiveFormsModule } from '@angular/forms';
    import { HomeComponent } from './home/home.component';
    import { AppComponent } from './app.component';
    @NGMODULE: ({
        declarations: [ -- Inicializacion de componentes
            AppComponent,
            HomeComponent
        ]
        imports: [     -- Inicializacion de modulos
            HttpClientModule,
            BrowserModule,
            AppRoutingModule,
            FormsModule, --formularios de tipo plantilla
            ReactiveFormsModule -- formularios de tipo reactive         
        ]
        boostrap: [AppComponent] -- boostrap funciones
    })
    export class AppModule{} -- clases
