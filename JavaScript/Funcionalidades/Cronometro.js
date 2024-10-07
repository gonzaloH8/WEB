/** VARIABLES */
let [horas, minutos, segundos] = [0,0,0];
let intervaloTiempo;
let estadoPausado = "Pausado";
const cronometro = document.createElement("div");

/** ESTRUCTURA */
const DOMContainer = document.querySelector("#Container");
const Contenido = document.createElement("main");

function estructura() {
  DOMContainer.append(Contenido);
}

/** MAIN */
function contenido() { // Creamos un pasador de citas
  const cajaContenido = document.createElement("div");
  cajaContenido.style.width = "500px";
  cajaContenido.style.height = "500px";
  cajaContenido.style.border = "solid 5px black";
  cajaContenido.style.margin = "auto";

  
  cronometro.textContent = "00:00:00";

  const cajaBotones = document.createElement("div");
  const boton1 = document.createElement("button");
  boton1.textContent = "Iniciar/pausar";
  boton1.addEventListener("click", () =>{
    if(estadoPausado === "Pausado"){
      intervaloTiempo = window.setInterval(ActualizarCronometro, 1000); // milisegundos = 1 segundo
      estadoPausado = "andando";
    }else{
      window.clearInterval(intervaloTiempo);
      estadoPausado = "Pausado";
    }
  });
  const boton2 = document.createElement("button");
  boton2.textContent = "Reiniciar";
  boton2.addEventListener("click", () =>{
    window.clearInterval(intervaloTiempo);
    horas = 0;
    minutos = 0;
    segundos = 0;

    cronometro.textContent = "00:00:00";
    estadoPausado = "pausado";
  });

  Contenido.append(cajaContenido);
  cajaContenido.append(cronometro);
  cajaContenido.append(cajaBotones);
  cajaBotones.append(boton1);
  cajaBotones.append(boton2);
  
}

function ActualizarCronometro (){
 segundos++;
 if(segundos / 60 === 1){
  segundos = 0;
  minutos++;
   if(minutos / 60 === 1){
    minutos = 0;
    horas++;
  }
 }
 const formatoSegundos = asignarFormato(segundos);
 const formatoMinutos = asignarFormato(minutos);
 const formatoHoras = asignarFormato(horas);

 cronometro.textContent = `${formatoHoras}:${formatoMinutos}:${formatoSegundos}`;
}

function asignarFormato(unidadDeTiempo){
  return unidadDeTiempo < 10 ?  '0' + unidadDeTiempo : unidadDeTiempo;
}

/** LLAMADAS DE FUNCIONES */
estructura();
contenido();
