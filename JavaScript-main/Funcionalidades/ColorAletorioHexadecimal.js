/** VARIABLES */

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

  const hexade = document.createElement("h2");
  hexade.textContent = "#14AF89";

  const boton = document.createElement("button");
  boton.textContent = "Cambio Color";
  boton.addEventListener("click", ()=>{
    let colorAletaorio = hexa();
    hexade.textContent = colorAletaorio;
    document.body.style.backgroundColor = colorAletaorio;
  });

  Contenido.append(cajaContenido);
  cajaContenido.append(hexade);
  cajaContenido.append(boton);
  
}

function hexa (){
  let hexadecimal = "0123456789ABCDEF";
  let aloamilla = "#";
  for (let a = 0; a < 6; a++) {
    let Aleatorio = Math.floor(Math.random() * 16);
    aloamilla += hexadecimal[Aleatorio];
  }
  return aloamilla;
}

/** LLAMADAS DE FUNCIONES */
estructura();
contenido();
