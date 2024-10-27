# ARCHIVOS IMPORTANTES
- .angular -- archivos necesarios para crear la apliacion Angular
- .e2e -- tiene archivos utilizados para probar la aplicacion
- .node_modules -- tiene los paquetes node.js que utiliza la acplicacion
- angular.json -- describe la apliacion Angular para la herramientas de creacion de aplicaciones
- package.json -- dependencias de librerias que se han instalado. Permite añadir mas, actualizar librerias,etc
- tsconfig.* -- son los archivos que describen la configuracion de la aplicacion para le compilador Typescript
    
# ESTRUCTURA
- SRC (CARPETA PRINCIPAL)
    - index.html -- es la plantilla HTML de nivel superior de la aplicacion
    - style.css -- es la hoja de estilo de nivel superior de la aplicacion
    - main.ts -- es donde la aplicacion empieza a ejecutarse
    - main.server.ts -- 
        - APP (CARPETA PADRE COMPONENTES)
            - app.component.css -- hoja de estilo para este componente
            - app.component.html -- hoja de HTML para este componenete. Imprime los componentes hijos
            - app.component.spec.ts -- bugger, revision de errores
            - app.component.ts -- archivo fuente que describe el app-root. Componente de nivel superior
            - app.config.server.ts --
            - app.config.ts -- fichero de configuracion de nuestra aplicacion
            - app.routes.ts -- implementacion de path(rutas) de los componentes hijos
                - COMPONENTES
                - SERVICE
                - PIPE
                - ROUTES
- ORGANIZACION CARPETAS
  - ADMIN -- administracion
    - ADMIN.LAYOUT
    - CALENDAR
    - DASHBOARD
    - ADMIN.ROUTES.TS
  - ARTICLES -- articulos
    - ARTICLE-DETAIL
    - ARTICLE-LIST
    - ARTICLE.ROUTES.TS
  - AUTH -- todo lo relacionado con la autentificacion y registro
    - LOGIN
    - REGISTER
    - AUTH.ROUTES.TS
  - CORE -- elementos de funcionalidad global, que no generan interfaz grafica
    - GUARDS -- definen el flujo de la aplicacion, limitacion de rutas-componentes
    - INTERCEPTORS -- configura la salida y las entradas de la aplicacion
    - MODELS -- modelo de nuestros articulos mediante interfaces
    - SERVICES -- da acceso a datos externos
  - SHARED -- almacenara todo aquello dedicado a la interfaz grafica
    - COMPONENTS -- componentes que vamos a utilizar en todas nuestras paginas
    - DIRECTIVES
    - PIPES
      
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

# INPUT
    @input() datoEntrada: string; -- otorgas la funcionalidad a la variable para que tenga el valor del padre
    <app-hijo [datoEntrada]="ValorDesdePadre"></app-hijo> -- asignacion de la variable-hijo un valor de variable-padre
    ValorDesdePadre="HolaMundo"; -- variable del padre con un valor
    <p>{{ datoEntrada }}</p> -- imprimes en web el valor

# OUTPUT
    @Output() variable_hijo = new EventEmitter<string/void/number>(); -- permite enviar eventos desde el hijo al padre
    (variable_hijo)="evento()" -- imprimimos en el HTML padre los eventos del hijo

# ENRUTAMIENTO
    const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent },
    ];

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

# MANEJO DE INFORMACION
    get: obtengo/pido la informacion. Misma URL que put y delete / id
    put: para editar una informacion que ya este en la Base de Datos/servicio. Misma URL que get y delete / id
    delete: para eliminar un dato a traves de una id. Misma URL que get y put / id
    getAll/post: envio la informacion. Tienen la misma URL
