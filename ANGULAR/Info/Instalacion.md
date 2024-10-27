# INSTALACIONES NECESARIAS PARA TRABAJAR CON ANGULAR
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

 # PROCESO DE INSTALACION DE ANGULAR
  - POWERSHELL
    - Comprobar si tienes restringido los scripts 'Get-ExecutionPolicy'
    - Si te sale por consola 'restricted' ejecuta 'Set-ExecutionPolicy Unrestricted'
    - Instalacion de version de angular: npm i -g @angular/cli
    - Desinstalacion Angular(Opcional): npm uninstall -g @angular/cli
    - ng analytics disable --global
 
 # DESCARGA DE LOS PAQUETES NECESARIOS PARA EL PROYECTO
  - Ejecutar 'ng new Nombre_Proyecto'
  - Confirmar
  - Ejecutar CSS
  - Instalacion de funcionalidades tanto para server como local. Respuesta S
  - Se descarga una carpeta que trasladaremos al editor de texto
  - Decir no a que se comunique con google?

 # PROGRAMAS A INSTALAR EN VISUAL ESTUDIO
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

## INSTALACIÓN DE BOOSTRAP
- npm i bootstrap@5.3.3 -- se instala la carpeta de boostrap en node_modules y se genera en package.json package-dependencies-boostrap
- En node_modules/boostrap/dist/css/boostrap.min.css -- copiar su ruta y pegarla en el archivo angular.json seccion 1ºbuild/style, hay que modificar las barras invertidas por barras normales y entre comillarlo 
- En node_modules/boostrap/dist/js/boostrap.bundle.min.js, copiar su ruta y pegarla en el archivo angular.json seccion 1ºbuild/scripts, hay que modificar las barras invertidas por barras normales y entre comillarlo

## FICHEROS
- ng generate component nombre_carpeta -- genera una carpeta con todos los archivos que componen el componente
- ng generate service nombre_servidor -- genera un archivo de control de servicios
- ng generate directive nombre_directiva -- genera un archivo de control de directivas
- ng generate pipe nombre_pipe -- genera un archivo de pipes
- npm start/ng serve -- inicia el proyecto y genera un localHost con la web
- ng add @angular/material
- ng add @angular/pwa
- ng add _____
- ng test
- ng build

## GENERACION DE CODIGO DE APIS
- Coges el codigo de una API
- Lo pasas por el programa POSTMAN, verificando los datos que vas a manejar y como los quieres manejar
- Copias el codigo generado en el POSTMAN
- Lo pegas en la pagina de QUICK, seleccionas el nombre elegido para la interface, seleccionar TYPESCRIPT y lo generado lo pegas en service.ts

## INSTALACION DE ANGULAR
- bash? npm install -g @angular/cli@latest -- instala la ultima version de Angular
- npm i -g @angular/cli@16.2.10 -- instala la version de Angular 16.2.10
- ng new nombre_proyecto -- genera todos los archivos necesarios para empezar el proyecto
- ng new nombre_proyecto --defaults --style=scss --standalone --routing --inline-template --inline-style -- revisar comando
    
## ACTUALIZACION DE ANGULAR
- npm uninstall -g @angular/cli -- desinstala Angular
- npm cache verify -- limpia la cache de npm para evitar conflicto
- bash? npm install -g @angular/cli@latest -- instalara la ultima version de Angular
- ng update -- actualiza los paquetes de package.json
- npm install typescript@latest --save-dev -- actualiza Typesscript a la ultima version

## REVISION DE VERSION DE LOS PROGRAMAS NECESARIOS PARA ANGULAR
- node -v -- verifica que version tienes instalada
- node -init -- inicia node
- npm -v -- verifica la version de npm(Node Package Manager) instalada
- npm start -- inicia el proyecto y generar un localHost para ver la pagina en local
- ng version -- permite saber la version de angular instalada
- git -v -- revision de la version
