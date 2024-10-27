# INSTALACIONES NECESARIAS PARA TRABAR CON ANGULAR
- [CHROME(NAVEGADOR)](https://www.google.com/intl/es_es/chrome/)
- [VISUALSTUDIOCODE(EDITOR DE CODIGO)](https://code.visualstudio.com/download)
- [GIT(MANEJADOR DE VERSIONES)](https://git-scm.com/)
- [NODE](https://nodejs.org/en/)
- [TYPESCRIPT](https://www.typescriptlang.org/download/)
- [POSTMAN(Generacion de Codigo APIs)](https://www.postman.com/downloads/)
- [ANGULAR SNIPPTES](https://marketplace.visualstudio.com/items?itemName=johnpapa.Angular2)
- [BOOSTRAP](https://getbootstrap.com/)
- [ANGULAR MATERIAL](https://material.angular.io/)
- [ANGULAR DEVTOOLS](https://chromewebstore.google.com/detail/angular-devtools/ienfalfjdbdpebioblfackkekamfmbnh)

 # INSTALACION DE ANGULAR
  - Abrir PowerShell
  - Comprobar si tienes restringido los scripts 'Get-ExecutionPolicy'
  - Si te sale por consola 'restricted' ejecuta 'Set-ExecutionPolicy Unrestricted'
  - Instalacion de version de angular: npm i -g @angular/cli@16.2.10
  - Desinstalacion Angular(Opcional): npm uninstall -g @angular/cli
  - ng analytics disable --global
  - Ejecutar 'ng new Nombre_Proyecto'
  - Confirmar
  - Ejecutar CSS
  - Instalacion de funcionalidades tanto para server como local. Respuesta S
  - Se descarga una carpeta que trasladaremos al editor de texto
  - Instalar en Visual Studio
    - Angular Essentials (Version 16)
    - Angular Language Services
    - Angular Snippets (Version 16)
    - EsLint
    - GitHub Copilot
    - GitHub Copilot Chat
    - Material Icon Themes
    - Peacock
    - Prettier - Code formater
    - Winter is Coming Theme

## REVISION DE VERSION DE LOS DISTINTOS PROGRAMAS NECESARIOS PARA ANGULAR
    node -v -- verifica que version tienes instalada
    node -init -- inicia node
    npm -v -- verifica la version de npm(Node Package Manager) instalada
    npm start -- inicia el proyecto y generar un localHost para ver la pagina en local
    ng version -- permite saber la version de angular instalada

## INSTALACION DE ANGULAR
    bash? npm install -g @angular/cli@latest -- instala la ultima version de Angular
    npm i -g @angular/cli@16.2.10 -- instala la version de Angular 16.2.10
    ng new nombre_proyecto -- genera todos los archivos necesarios para empezar el proyecto
    ng new nombre_proyecto --defaults --style=scss --standalone --routing --inline-template --inline-style -- revisar comando
    
## ACTUALIZACION DE ANGULAR
    npm uninstall -g @angular/cli -- desinstala Angular
    npm cache verify -- limpia la cache de npm para evitar conflicto
    bash? npm install -g @angular/cli@latest -- instalara la ultima version de Angular
    ng update -- actualiza los paquetes de package.json
    npm install typescript@latest --save-dev -- actualiza Typesscript a la ultima version
