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
      
# VARIABLES
    {{ ValorPlano }} -- muestra texto plano
    (TipoEvento)="" -- llamamos al evento
    [propiedades] -- muestra las propiedades de la etiqueta
    producto?: number; inicializacion de una variable que puede o no tener valor
        
# ESCTRUCTURAS DE CONTROL
## NGIF 
    @if (){
     <div >
      Contenido visisble si mostrarElemento es true
    </div>
    }
   
## NGFOR
    <div>
    @for (item of listArticle; track $index) {
        <div class="card" style="width: 18rem;">
            <img src={{item.image}} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">{{item.title}}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Detalles</a>
            </div>
          </div>
    }
    </div>

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

# ENRUTAMIENTO/ PATH DE ARCHIVOS/CARPETAS
    const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent },
    ];
    <router-outlet/> <!-- SELECTOR DE RUTAS -->

# MANEJO DE INFORMACION
    get: obtengo/pido la informacion. Misma URL que put y delete / id
    put: para editar una informacion que ya este en la Base de Datos/servicio. Misma URL que get y delete / id
    delete: para eliminar un dato a traves de una id. Misma URL que get y put / id
    getAll/post: envio la informacion. Tienen la misma URL

# CORE
import {  } from '@angular/core';
ONINIT
- [DOCUMENTACION](https://v17.angular.io/api/core/OnInit)
Un método de devolución de llamada que se invoca inmediatamente después de que el detector de cambios predeterminado haya verificado las propiedades enlazadas a datos de la directiva por primera vez, y antes de que se haya verificado cualquiera de los elementos secundarios de la vista o el contenido. Se invoca solo una vez cuando se crea una instancia de la directiva.
    `class MyComponent implements OnInit {
      ngOnInit() { // metodo de comportamiento de la clase al iniciar este componente
        // ...
      }
    }`
COMPONENT //

# RxJS 
import {  } from 'rxjs';
    Observable -- A representation of any set of values over any amount of time. This is the most basic building block of RxJS.
    const numbers$ = of(1, 2, 3); // observable simple que emite 3 valores
    numbers$.subscribe(); // metodo del observable que permite emitir sus valores
        - next: controlador para cada valor entregado. `next: value => console.log('Observable emitted the next value: ' + value)`
        - error: controlador para una notificacion de error `error: err => console.error('Observable emitted an error: ' + err)`
        - complete: controlador para la notificacion de finalizacion de la ejecucion `complete: () => console.log('Observable emitted the complete notification')`

# ROUTER
import {  } from '@angular/router';
    params // captacion de paramentros de la URL
    ActivatedRoute // 

# COMMON/HTTP
import { HttpClient } from '@angular/common/http'; // Cliente HTTP de Angular para hacer peticiones HTTP
