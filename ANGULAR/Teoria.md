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
