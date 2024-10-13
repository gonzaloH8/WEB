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
  - Enrtamiento
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
  
        valorDesdePadre = "Holam Mundo!";
    
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

        ng generate service nombre_del_servicio
        ng g s nombre_del_servicio
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
