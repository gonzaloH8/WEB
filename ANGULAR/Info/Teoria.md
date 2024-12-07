# 3 ANGULAR
  Es un framework de diseño de aplicaciones y plataforma de desarrollo para crear apliacion de una sola pagina eficientes y sofisticadas
    ## REQUIRIMIENTOS
    Requiere conocimientos en HTML,CSS,JAVASCRIPT Y TYPESCRIPT. 
    Requiere tener instalada la version LTS de NODE y NPM. Requiere conocimientos basicos de terminal/bash

  # MVC
  Es un patron de diseño de software ampliamente utilizado en la industria del desarrollo de aplicaciones. 
  Su objetivo principal es separar las preocupaciones dentro de una apliacion en tres componentes distintos para mejorar la modularidad, la mantenibilidad y la escalabilidad del codigo

  # MODELO
  Representa principalmente los datos y la logica de negocio de la aplicacion. 
  Los modelos se definen generalmente como clases TypeScript y pueden incluir propiedades y metodos que describen como se acceden y se manipulan los datos

  # VISTA
  Es la capa de presentacion de la aplicacion. Se encarga de mostrar los datos al usuario y de presentar la interfaz de usuario de manera adecuada. 
  La vista recibe datos del modelo y muestra la informacion de una manera que sea comprensible y atractiva para usuario. 
  En muchas aplicaciones web, la vista suele estar implementada en HTML y CSS

  # CONTROLADOR
  Actua como intermediario entre el modelo y la vista. 
  Se encarga de manejar las interacciones del usuario, como clics de boton o eventos de entrada, y coordina las acciones necesarias para que el modelo y la vista se mantengan sincronizados. 
  En otras palabras, el controlador controla el flujo de datos entre el modelo y la vista

  # CLI DE ANGULAR
  Angular Command Line Interface, es una herramienta de linea de comandos que se utiliza para crear, desarrollar y administrar apliaciones web en Angular de manera eficiente. 
  Angular es un popular framework de desarrollo de apliaciones web y el CLI proporciona una serie de utilidades y comandos que simplifican muchas tareas comunes en el proceso de desarrollo

  # CONCEPTOS BASICOS
  - Modulos
  - Componentes
  - Servicios
  - Dependencias
  - Plantillas
  - Directivas
  - Enrutamiento
  - Metadata

  ## MODULOS
  Son una parte fundamental de la arquitectura de la aplicacion. 
  Un modulo es un mecanismo de organizacion y encapsulacion que se utiliza para agrupar componentes, directivas,pipes(filtros),servicios y otros elementos relacionados en una unidad funcional coherente. 
  Los modulos ayudan a dividir una aplicacion en partes mas pequeñas y manejables, lo que facilita el desarrollo, la mantenibilidad y la escalabilidad

  # COMPONENTES
  Es un bloque fundamental de construccion para la creacion de interfaces de usuario(UI) en una aplicacion web. 
  Los componentes son responsables de definir como se ve y se comporta una parte especifica de la interfaz de usaurio de la apliacion. 
  Cada compomente representa un elemento visual o funcional de la pagina web, como un encabezado, un pie de pagina, formulario, lista de elementos, etc
  - Bloques de UI
  - Definen vistas y logica
  - Usan clases TypeScript
  - Tienen plantillas HTML
  - Son recreativos
  - Altamente reutilizables
  - Se encapsulan
  - Jerargui en la UI

    ## COMPONENTES CON CLI
    Se crearan 4 archivos:
    - El archivo del compenete(nombre-del-componente.component.ts)
    - EL archivo HTML de la plantilla(nombre-del-componente.component.html)
    - El archivo de estilos CSS(nombre-del-componente.component.css)
    - Un archivo de prueba(nombre-del-componente.component.spec.ts)

# ENLACES DE DATOS
Se refiere a la capacidad de conectar y sincronizar automaticamente los datos entre el modelo(que representa el estado de a aplacicacion) y la vista(la interfaz de usuario que muestra esos datos). El enlace de datos es una caracteristica fundamental que permite que los cambios en el modelo se reflejen automaticamente en la vista y viceversa, sin necesidad de intervencion manual.
  ## FUNCION DEL ENALECE DE DATOS
- Conexion automatica: sincroniza datos entre el modelo y la vista
- Unidireccional: los cambios en el modelo se reflejan en la vista
- Bidireccional: cambios en la vista actualizan el modelo(por ejemplo, formularios)
- Reactivo: utiliza observables para actualizaciones en tiempo real
- Simplifica Interaccion: facilita la creacion de apliaciones interactivas
- Automatiza Actualizaciones: cambios se reflejan sin intervencion manual

# METADATA
Se refiere a la informacion adicional qie se proporciona mediante decoradores en las calses que definen componentes, modulos,servicios y otras partes de una apliacion. La metadata se utiliza para configurar y personalizar el comportamiento de estas partes de la aplicacion. Los decoradores, como @Component, @NgModule, @Injectable, entre otros, se utilizan para adjuntar esta metadata a las clases.
  ## FUNCIONALIDAD
- Configuracion: define como se comportan las partes de la apliacion
- Decoradores: se utiliza con decoradores como @COmponent, @NgModule,@Injectable
- Personalizacion: ajusta el comportamiento con propiedades clave
- Componente: metadata para componentes, incluye plantilla y estilos
- Modulo: configuracion de modulos, como declaraciones e importaciones
- Servicio: metadata para sercios, define su alcance y proveedores
- Directiva: define metadata de directivas personalizadas, como selectores

# INFORMACION ENTRE COMPONENTES
Los componentes puden comunicarse a traves de las propiedades de entrada y salida. Un componente padre puede pasar datos a un comonente hijo mediante la vinculacion de propiedades de entrada, y un componente hijo puede emitir eventos que el componente padre puede escuchar a traves de propiedades de salida.

  ## INPUT
  - En el componente hijo, puedes definir propiedades de entrada utilizando el decorador **@input()**. Estas propiedades representaran los datos que se esperan recibir del componente padre.

        @input() datoEntrada: string;
  
  - Componente padre, puedes vincular datos a la propiedad de entrada del componente hijo utilizando la sintaxis de **corchetes[]** en el marcado del template.

        <app-hijo [datoEntrada]="valorDesdePadre"></app-hijo>
    
  - Cuando el valor de la propiedad en el componente padre cambia. Angular automaticamente actualiza la propiedad de entrada en el comportamiento hijo. Esto proporciona una forma eficiente y automatica de mantener sincronizados los datos entre componentes.
  
        valorDesdePadre = "Hola Mundo!";
    
  - En el componente hijo, puedes utilizar la propiedad de entrada (datoEntrada en este caso) como cualquier otra propiedad local. Puedes mostrarla en el template, realizar logica basada en ese valor, etc.

        <p>{{ datoEntrada }}</p>

    ## OUTPUT
  - Se usa **@Output** y **EventEmitter** para lograr una comunicacion entre compontente hijo y su componente padre. Declaras una propiedad con @Output en el componete hijo y emites eventos con EventEmitter.

        @Output() MessageEvent = new EventEmitter<string>();
        message: string = '';
        sendMessage(){this.messageEvent.emit(this.message)}
    
  - Este archivo HTML contiene la interfaz de usuario del componente hijo, incluye un input para que el usuario ingrese un mensaje y un boton para enviarlo. Utiliza ngModel para vincular el input con la propiedad message del componente TypeScript

        <div>
          <label for="childInput">Mensaje:</label>
          <input id="childInput" [(ngModel)]="message"/>
          <button (click)="sendMessage()">Enviar Mensaje</button>
        <div>
    
- El archivo TypesScript define el comportamiento ParentComponent, que tiene una propiedad (receivedMessage) para almacenar mensajes recibidos del componente hijo. Incluye un metodo(receiveMessage) que actualiza esta propiedad cuando se emite el evento desde el componente hijo

        receiveMessage: string = '';
        receiveMessage(message: string){this.receiveMessage = message;}

- La plantilla HTML del componente padre incluye el componente hijo(<app-child>) y utiliza el evento de salida messageEvent para llamar al metodo receiveMessage cuando se emite un mensaje desde el componente hijo. Muestra el mensaje recibido en la interfaz del componente padre.

         <div>
            <app-child (messageEvent)="receiveMessage($event)"></app-child>
            <p>Mensaje recibido en el padre: {{ recieveMessage }}</p>
        </div>

# SERVICIOS
  Es una clase TypeScript que se utiliza para organizar y compartir lógica, datos o funcionalidades comunes entre diferentes componentes de una apliacion. Los servicios son una parte fundamental de la arquitectura de Angular y proporcionan una forma de centralizar y reutilizar la lógica que no está relacionada directamente con la interfaz de usuario
  - Reutulización: Lógica compartida.
  - Separación de preocupaciones: divide lógica y UI.
  - Inyección de dependencias: Instancias proporcionadas
  - Centralización de datos: Almacena y gestiona datos compartidos.
  - Comunicación entre componetes: facilita la comunucación.
  - Lifcycle independiente: no vinculado a vistas.
  - Testeabilidad: facil de probar.

# DEPENDENCIAS
Son los recursos externos y modulos de codigo que una apliacion necesita para funcionar correctamente. Estos recursos pueden incluir bibliotecas externas, módulos de Angular. servicios personalizados, componentes y otros elementos que se utilizan en la apliación para realizar tareas específicas.
Las dependencias en Angular se gestionan principalmente a través del sistema de inyección de dependencias [DI],que es una caracteristica clave del framework.
  - Recursos Externos: bibliotecas y recursos de terceros.
  - Modulos de Angular: Unidades organizativas con funcionalidades
  - Servicios Personalizados: funcionalidad compartida.
  - Inyección de Dependencias: gestión automática de instancias.
  - Inyección en Contructores: dependencias pasadas a través de constructores.
  - Gestión de Ciclo de Vida: control de creación y destrucción.
  - Testeabilidad: facilita pruebas unitarias y de integración

# DIRECTIVAS/ESTRUCTURAS DE CONTROL
Son instrucciones en el marcado HTML que proporcionan funcionalidad adicional a los elementos DOM existentes o personalizan su comportamiento. Las directivas son un componente clave en la construcción de apliaciones web en Angular, ya que permiten extender y manipular el DOM de manera declarativa, lo que facilita la creación de interfaces de usuario dinámicas e interactivas. Angular proporciona varias directivas incorporadas y también permite la creación de directivas personalizadas.
  - Instrucciones HTML: Estienden o personalizan elementos HTML.
  - Directivas Incorporadas: ofrecen funcionalidad predefinida.
  - Directivas Estructurales: manipulan la estructura del DOM.
  - Directivas de Atributos: cambian atributos y propiedades.
  - Directivas de Eventos: capturan y responden a eventos del usario.
  - Directivas Personalizadas: creadas para necesidades especificas.
  - Inyeccion de Dependencias: acceso a servicios y datos.
  - Flexibilidad de Apliacion: se pueden apliacar como atributos o elementos.

# PIPES
Son una caracteristicas que permite formatear y transformar datos en la vista de una apliacion web de manera sencilla y legible. Los pipes son funciones que toman un valor de entrada(como una cadena de texto, un numero o un objeto) y lo procesan para proporcionar una representacion modificada o formateada en la interfaz de usuario.
Los pipes se utilizan en las plantillas HTML de Angular y se aplican utilizando el simbolo de barra vertical | . Algunos ejemplos comunes de uso de pipes incluyen el formateo de fechas, numeros, monedasm texto en mayúsculas o minúsculas, entre otros.
Angular proporciona una serie de pipes integrados, como DatePipe, UpperCasePipe, LowerCasePipe,CurrencyPipe,DecimalPipe,PercentPipe,entre otros. Ademas, también puedes crear tus propios pipes personalizados cuando necesites realizar transformaciones específicas.
  - Formateo de Datos: transforma datos para representarlos.
  - Sintaxis de Pipe: se apliaca en plantillas con | .
  - Pipes Integrados: angular proporciona pipes predefinidos.
  - Pipes Encadenados: se pueden combinar varios pipes.
  - Pipes Personalizados: creados para necesidades específicas.
  - Prámetros de Pipe: aceptan configuración adicional.
  - Inmutabilidad: no alteran los datos originales.

# ENRUTAMIENTO
Es la capacidad de navegar entre diferentes componentes o vistas de una aplicación web sin recargar la página completa. Permite crear apliaciones de una sola página(SPA) donde los cambios en la URL desencadenan la carga de diferentes componentes, proporcionando asi una experiencia de usuario más fluida y rápida.
- Las rutas definen la correspondencia entre la URL y los componentes que deben cargarse cuando esa URL esta activa. Se configuran en un array dentro el módulo de la aplicación.

      const routes: Routes = [
      { path: 'inicio', component: InicioComponent },
      { path: 'productos', component: ProductosComponent },
      { path: 'contacto', component: ContactoComponent },
      ];
- Router Outlet: la directiva router-outlet se utiliza en la plantilla para indicar el lugar donde Angular debe cargar dinámicamente los componentes asociados a las rutas.
  
      Ejemplo: <router-outlet></router-outlet>

- Navegación: se puede realizar mediante enlaces(<a>), botones, o programaticamente utilizando el servicio de Angular. 

      Ejemplo: <a router-outlet="/Inicio">Inicio</a>
  
- Parametro de Ruta: pueden contener parámetros que permiten pasar datos específicos entre componentes
Ejemplo:

      { path: 'producto/id', component: DetalleProductoConponent }
      <a [routerLink]='['/producto', producto.id]'>Ver Detalles</a>
- routerLinkActive

      <nav>
      <a routerLink='/inicio' routerLinkActive='active'>Inicio</a>
      <a routerLink='/productos' routerLinkActive='active'>Productos</a>
      <a routerLink='/contacto' routerLinkActive='active'>Contactos</a>
  
- Parametros por la URL: 
    1)Definir una ruta con varios componentes

      Ejemplo: const routes: Routes = [{ path: 'producto/:categoria/:id', component: DetalleProductoComponent },];
  
    2) Enlazar a la ruta con múltiples parámetros
  
      Ejemplo: <a [routerLink]='['/producto', producto.categoria, producto.id]'>Ver detalles</a>
    
  3) Recupera los parámetros en el componente

          Ejemplo:
            import { ActivedRoute } from '@angular/router'
            constructor(private route: ActivedRoute){}
            ngOnInit(){
            this.route.params.subscribe(params => {
            const categoria = params['categoria'];
            const productId = params['id'];
            // Hacer algo con los valores de los paramentros
            })
            }

- Navegar desde el controller: proporciona métodos para realizar la navegación entre rutas(Este método se va a usar)

      import { Router } from '@angular/router'
      constructor(private router: Router){}
      navegarAProducto(productoID: number){
      // Puedes navegar a una ruta específica programáticamente
      this.router.navigate(['/producto', productoID]);
      }

# ESTRUCTURAS DE CONTTROL
Las estructuras de control son herramientes que te permiten manipular el flujo de ejecución en tu apliación
- NGIF: permite mostrar u ocultar un elemento en función de una expresion booleana
- NGFOR:: utilizado para iterar sobre una lista y renderizar elementos repetitivos
- NGSWITCH: muestra un bloque de contenido segun el valor de una expresion
- NGCLASS: permite cambiar dinamicamente las clases un elemento
- NGSTYLE: permite cambiar dinamicamente los estilos un elemento
- NGCONTSINER: estructura de control que no afecta al DOM. Se utiliza para agrupar elementos sin agregar nodos adicionales al arbol DOM
- MOC: pagina falsa de muestra
- ngTemplate
- ngPlural
- ngComponenetOutlet

# FORMULARIOS DE PLANTILLA
Necesita de importar el form moduls: import { FormsModulo } from '@angular/forms'
Utilizan sintaxis del template del HTML para construir y validar formularios
La directiva ngForm se utiliza para crear un formulario y ngModel para enlazar datos bidireccionalmente
    <form #myForm="ngForm" (ngSubmit)='onSubmit()'>
    <label for="name">Nombre:</label>
    <input tye="text" id="name" name="name" [(ngModel)]='user.name' required>
    </form>
Manejo de estado y errores
Angular gestiona el estado y la validacion automaticamente
Se utiliza la propiedad ngModel.valid para verificar si un campo es valido
<div *ngIF="!name.valid && name.touched">Nombre es obligatorio</div>

# FORMULARIOS REACTIVOS
Los formularios reactivos se construyen en el componente utilizando el servicio FormBuilder
Los controles se definen explicitamente y se vinculan al formulario

# CICLOS DE VIDA
El ciclo de vida de un compoenente se cimpone de una serie de eventos que ocurren desde la creacion hasta la destrucion del componente
  - ngOnChanges: se dispara cuando los datos de entrada(@Input) del componente cambian.
  - ngOnInit: ocurre despues de que Angular ha inicializado todas las propiedades del componente.
  - ngDoCheck: se ejecuta durante cada detección de cambios y permte realizar acciones de verificación personalizadas.
  - ngAfterContentInit: icurre despues de que Angular haya proyectado el contenido en el componente.
  - ngAfterContentChecked: se ejecuta despues de cada verificacion del contenido proyectado.
  - ngAfterViewInit: ocurre despues de que Angular haya inicializado las vistas del componente.
  - ngAfterViewChecked: se ejecuta despues de cada verificacion de las vistas del componente.
  - ngOnDestroy: se dispara justo despues de que Angular destruya el componente.

# API
Las API(Interfaces de Programacion de APliaciones, por sus siglas en ingles) se utilizan para permitir la comunicacion entre diferentes sistemas de software. Son conjuntos de reglas y definiciones que permiten que apliaciones y servicios se comuniquen entre si.

## INTEGRACION DE SERVICIOS
Las APIs permiten que diferentes servicios web se integren entre si. Por ejemplo, tu apliacion puede utilizar la API de Google Maps para mostrar mapas, la API de Twitter para mostrar tweets, etc

## ACCESO A DATOS EXTERNOS
Las APIs el acceso a datos y recursos que residen en servidores externos. Puedes usar APIs para obtener informacion de bases de datos, servicios en la nube u otros recursos en linea.

## INTERACCION CON PLATAFORMAS SOCIALES
Muchas plataformas sociales, como Facebook, Twitter o Instagram, proporcionan APIs que permiten a los desarrolladores acceder a funciones específicas de esas plataformas, como publicar contenido o recuperar datos de perfiles de usuario

## DESARROLLO DE APLICACIONES MÓVILES
Las aplicaciones móviles a menudo utilizan APIs para conectarse a servicios en la nube y acceder a funcionalidades específicas, como notificaciones push, almacenamiento en la nube y autentificación.

## AUTOMATIZACIÓN DE PROCESSOS
Las APIs permiten la automatización de procesos al permitir que sistemas diferentes se comuniquen y compartan datos de manera eficiente. Por ejemplo, una empresa puede tener un sistema de gestión de inventario que se conecta a una API de proveedores para realizar pedidos automáticamente cuando se agota el stock.

## DESARROLLO DE APLIACINES WEB
Las apliaciones web modernas a menudo utilizan APIs para cargar datos de forma asíncrona, lo que mejora la velocidad y la eficiencia de la aplicación.

## MICROSERVICIOS
En arquitecturas de microservicios, los diferentes componenetes del sistema se comunican a través de APIs, lo que permite la escalabilidad y flexibilidad en el desarrollo y mantenimiento de aplicaciones.

# VOCABULARIO
- Asincrona
- Sincrona
- Promesas
