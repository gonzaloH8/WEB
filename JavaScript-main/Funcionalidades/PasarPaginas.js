/** OBJETOS */
let citas = [
    {
      autor: 'Albert Einstein',
      texto: 'No poseo talentos especiales. Solo soy apasionadamente curioso.'
    },
    {
      autor: 'Anónimo',
      texto: 'Semanas de programación te pueden ahorrar horas de planeación.'
    },
    {
      autor: 'Alan Kay',
      texto: 'La mejor forma de predecir el futuro es inventarlo.'
    },
    {
      autor: 'Amelia Earhart',
      texto: 'Lo más dificil es tomar la decisión de actuar. El resto es simplemente tenacidad.'
    },
    {
      autor: 'Aristotle',
      texto: 'La calidad no es un acto, es un hábito.'
    },
    {
      autor: 'Benjamin Franklin',
      texto: 'Dímelo y lo olvidaré. Enséñamelo y lo recordaré. Involúcrame y lo aprenderé.'
    },
    {
      autor: 'Charles R. Swindoll',
      texto: 'La vida es 10% lo que te ocurre y 90% cómo reaccionas.'
    },
    {
      autor: 'Jane Goodall',
      texto: 'Lo que haces hace una diferencia. Y debes decidir si qué tipo de diferencia quieres hacer.'
    },
    {
      autor: 'John Muir',
      texto: 'El poder de la imaginación nos hace infinitos.'
    },
    {
      autor: 'Mark Twain',
      texto: 'Los dos días más importantes de tu vida son el día que naciste y el día que descubres por qué.'
    }
  ];

/** VARIABLES */
let indice = 1;

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

  const titulo = document.createElement("h2");
  titulo.textContent = "Citas motivacionales";

  let cit = document.createElement("p");
  cit.textContent = citas[0].texto;
  let aut = document.createElement("h5");
  aut.textContent = citas[0].autor;

  const boton = document.createElement("button");
  boton.textContent = "Siguiente cita";
  boton.addEventListener("click", () => {
    if (indice < citas.length - 1) {
      indice++;
      cit.textContent = citas[indice].texto;
      aut.textContent = citas[indice].autor;
      
    } else {
      alert("No hay mas citas");
    }
  });

  const botonA = document.createElement("button");
  botonA.textContent = "Anterior cita";
  botonA.addEventListener("click", () => {
    if (indice > 0) {
      indice--;
      cit.textContent = citas[indice].texto;
      aut.textContent = citas[indice].autor;
      
    } else {
      alert("has llegado a la primera cita");
    }
  });

  Contenido.append(cajaContenido);
  cajaContenido.append(titulo);
  cajaContenido.append(cit);
  cajaContenido.append(aut);
  cajaContenido.append(boton);
  cajaContenido.append(botonA);
}

/** LLAMADAS DE FUNCIONES */
estructura();
contenido();
