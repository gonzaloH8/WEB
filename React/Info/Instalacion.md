# PASOS DE INSTALACION DE REACT
# INSTALACION NECESARIAS PARA EL USO DE REACT
- [CHROME(NAVEGADOR)](https://www.google.com/intl/es_es/chrome/)
- [VISUAL STUDIO CODE(EDITOR DE TEXTOS)](https://code.visualstudio.com/download)
- [GIT(MANEJADOR DE VERSIONES)](https://git-scm.com/)
- [NODE](https://nodejs.org/en/download/package-manager/current)
- [VSC REACT SNIPPTES](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)
- [VSC REACT SNIPPTES2](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

## INSTALACION RECOMENDADAS
- [POSTMAN](https://www.postman.com/downloads/)
- [MOGO COMPASS](https://www.mongodb.com/try/download/shell)
- [REACT DEV TOOLS](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=es&authuser=1)
- [REDUX DEV TOOLS](https://chromewebstore.google.com/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=es)
  
## TERMINAL POWERSHELL(para generar una carpeta con todos los archivos)
- npm create vite@latest(aplicar en la terminal de powerShell)
- Elegimos el nombre del proyecto
- Seleccionamos el framework elegido
- Seleccionamos JavaScript + SWC(nos permite hacer un building mas rapido)
- Nos genera una carpeta en nuestro escritorio que debemos ingresar en nuestro Visual Studio
  - package json
  - En el apartado Scripts, cada atributo nos permite hacer una funcionalidad en la terminal Node de VisualStudio
  - npm run dev(nos permite abrir la aplicacion de Vite)
  - npm run build(Construye todo lo hecho en Vite en archivos HTML, CSS y JavaScript)
  - La extension .jsx es una combinacion de html y Javascript

  ## Instalacion de la apliacion de React
  - npm install(instala los paquetes de node_modules)
  - npm run dev(Nos permite empezar a correr la apliacion react)

## Que hacer antes de iniciar a generar nuestra apliacion</h1>
- Borrar la carpeta public
- En la carpeta assets borramos el reac.svg, los archivos(App.css, App.jsx y index.css)
- En el archivo main.jsx borramos el import de app.jsx e index.css y por ultimo la etiqueta de app
- Con esto quedara la pagina vacia, lista para empezar a crear nuestro proyecto. Todos los archivos nuevos seran con .jsx
