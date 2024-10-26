# PASOS PARA LA PREPARACION DE UN PROYECTO
## GENERACION DEL PROYECTO
    ng new nombre_proyecto -- genera todos los archivos necesarios para empezar el proyecto(POWERSHELL)
    Decir no a que se comunique con google
    
## INSTALACIÓN DE BOOSTRAP
    npm i bootstrap@5.3.3 -- se instala la carpeta de boostrap en node_modules y se genera en package.json package-dependencies-boostrap
    En node_modules/boostrap/dist/css/boostrap.min.css -- copiar su ruta y pegarla en el archivo angular.json seccion 1ºbuild/style, hay que modificar las barras invertidas por barras normales y entre comillarlo 
    En node_modules/boostrap/dist/js/boostrap.bundle.min.js, copiar su ruta y pegarla en el archivo angular.json seccion 1ºbuild/scripts, hay que modificar las barras invertidas por barras normales y entre comillarlo

## FICHEROS
    ng generate component nombre_carpeta -- genera una carpeta con todos los archivos que componen el componente
    ng generate service nombre_servidor -- genera un archivo de control de servicios
    ng generate directive nombre_directiva -- genera un archivo de control de directivas
    ng generate pipe nombre_pipe -- genera un archivo de pipes
    ng add @angular/material
    ng add @angular/pwa
    ng add _____
    ng test
    ng build
    npm start/ng serve -- inicia el proyecto y genera un localHost con la web

## GENERACION DE CODIGO DE APIS
    Coges el codigo de una API
    Lo pasas por el programa POSTMAN, verificando los datos que vas a manejar y como los quieres manejar
    Copias el codigo generado en el POSTMAN
    Lo pegas en la pagina de QUICK, seleccionas el nombre elegido para la interface, seleccionar TYPESCRIPT y lo generado lo pegas en service.ts

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
    
# ERRORES 400-500
[Errores](https://vicentferrer.com/errores-en-http/)
- 400(Bad Request): en la peticion, el servidor no puede procesar la solicitud.
  - caracteres incorrectors en la URL
  - Cookies con errores(borralas)
  - DNS antiguos
  - Archivos demasiado grandes
- 401(Unauthorized): nos informa de que la peticion http no ha sido ejecutada porque debemos iniciar una sesion
  - 401.1: error de inicio de sesion
  - 401.2: por error de configuracion del servidor
  - 401.3: fallo por ACL
  - 401.4: Auth Filtro
  - 401.5: Auth APP ISAPI CGI
- 403 Forbidden: la autentificacion no es posible, no tenemos permisos y esta prohibido acceder al recurso solicitado.
- 404 Not Found: el servidor no ha podido encontrar la pagina solicitada(contenido borrado, enlace incorrecto o defectuoso). Search Console
- 500 Internal Server Error: por fallo en la programacion o aplicacion web.
  - Otros nombre: 500 Internal Server Error
  - HTTP 500 -Internal Server Error
  - Temporary Error(500)
  - HTTP 500 Internal Error
  - 500 Error
  - HTTP Error 500
  - 500. That's an error
Para saber mas revisar el log de errores de Apache, /error_log.
Si nuestro hosting utiliza Cpanel, tiene una seccion para los errores
    - Error de Permisos: error 500
    - Demasido tiempo de Espera: en caso de que el script de php dependa de recursos y el tiempo de ejecucion lo limite.
    - Fallo en el .htaccess: en este archivo, puede haberse tocado algo
    - Fallo por limite de memoria: el archivo php.ini o wp-config(wordpress) estan limitados de memoria, habra que aumentarla.
- 502 Bad Gateway: error en la comunicacion del servidor web y algunos servidores que actuan por proxy
  - Firewall bloqueando la solicitud: o se ha activado alguna regla por error
  - Fallo en el servidor Proxy: como no puede conectarse al servidor web, nos devuelve un error
  - Fallo en un cluster, o CDN(sobrecarga)
  - Estamos recibiendo un DDOS
