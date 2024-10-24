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
   
# INSTALACIÓN DE BOOSTRAP
- npm i bootstrap@5.3.3 -- se instala la carpeta de boostrap en node_modules y se genera en package.json package-dependencies-boostrap
- Buscar el archivo /boostrap/dist/css/boostrap.min.css, copiar su ruta y pegarla en el archivo angular.json seccion 1ºbuild/style, hay que modificar las barras invertidas por barras normales y entre comillarlo
- Buscar el archivo /boostrap/dist/js/boostrap.bundle.min.js, copiar su ruta y pegarla en el archivo angular.json seccion 1ºbuild/scripts, hay que modificar las barras invertidas por barras normales y entre comillarlo

# GENERACION DE CODIGO DE APIS
- Coges el codigo de una API
- Lo pasas por el programa POSTMAN, verificando los datos que vas a manejar y como los quieres manejar
- Copias el codigo generado en el POSTMAN
- Lo pegas en la pagina de QUICK, seleccionas el nombre elegido para la interface, seleccionar TYPESCRIPT y lo generado lo pegas en service.ts
