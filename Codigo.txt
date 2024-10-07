ENLACES AL CODIGO DE BOOSTRAP(Colocar en el head de HTML)(estar pendiente de la pagina oficial, para la actualizacion de versiones)
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> // CSS
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script> // JAVASCRIPT
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"> // para ICONOS

CLASES GRID
.container: crea un contenedor responsivo con un ancho maximo fijo que depende del tamaño del dispositivo
.container-fluid: crea un contendor resposivo con el 100% del ancho de la ventana
.row : filas
.col-: columnas
  Con esto nos permite ajustar el numero de columnas que se van a visualizar con respecto al tamaño del dispositivo
.col.xs-1: columna muy pequeña. <576px
.col.sm-2: columna pequeña. >=576px
.col.md-3: columna mediano. >= 768px
.col-lg-4: columna grande >=992px
.col-xl-5: columna extra grande. >=1200px
.col-xxl-6: columna extra muy grande >= 1400px

Estructura
<div clas="container">
  <div class = "row">
    <div class="col"></div>    
    <div class="col"></div>    
  </div>
<div class = "row">
    <div class="col"></div>    
    <div class="col"></div>
    <div class="col"></div>
  </div>
</div>

ICONOS
<i class="bi bi-apple"></i> // Conseguimos el icono mediante el acceso que nos da el enlace en el head

FLEXBOX
<div class="d-flex p-2">I'm a flexbox container!</div>
<div class="d-inline-flex p-2">I'm an inline flexbox container!</div>
