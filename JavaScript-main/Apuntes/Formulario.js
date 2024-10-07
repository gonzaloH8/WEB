// FORMS VALIDACION DE COMPONENTES
const email = document.forms.formEmail.mail; // almaceno en una variable la coleccion forms con su name y el name del input
const observaciones = document.getElementById("observaciones");

// *** PROPIEDADES DE UN CHECKBOX ***
checked; // Informa sobre el estado del checkbox. Puede ser true o false.
defaultChecked; // Si está chequeada por defecto o no.
//Métodos del checkbox
click(); // Es como si hiciésemos un click sobre el checkbox, es decir, cambia el estado del checkbox.
blur(); // Retira el foco de la aplicación del checkbox.
focus(); // Coloca el foco de la aplicación en el checkbox.

// Propiedades del objeto radio
checked; // Indica si está chekeado o no un botón de radio.
defaultChecked; // Su estado por defecto.
value; // El valor del campo de radio, asignado por la propiedad value del radio.

Length; // (como propiedad del array de radios):
// El número de botones de radio que forman parte en el grupo. Accesible en el vector de radios.

// Métodos del checkbox
click(); // Es como si hiciésemos un click sobre el checkbox, es decir, cambia el estado del checkbox.
blur(); // Retira el foco de la aplicación del checkbox.
focus(); // Coloca el foco de la aplicación en el checkbox.

// Propiedades del objeto select
length; // Guarda la cantidad de opciones del campo select. Cantidad de etiquetas <OPTION>
Option; // Hace referencia a cada una de sus opciones. Son por si mismas objetos.
options; // Un array con cada una de las opciones del select.
selectedIndex; // Es el índice de la opción que se encuentra seleccionada.
// Aparte de las conocidas propiedades comunes a todos los elementos de formulario: form y name y type.

// Métodos del objeto select
blur(); // Para retirar el foco de la aplicación de ese elemento de formulario.
focus(); // Para poner el foco de la aplicación.

// Propiedades de option
// Estos objetos sólo tienen propiedades, no tienen métodos.
defaultSelected; // Indica con un true o un false si esa opción es la opción por defecto.
// La opción por defecto se consigue con HTML colocando el atributo selected a un option.
index; // El índice de esa opción dentro del select.
selected; // Indica si esa opción se encuentra seleccionada o no.
text; // Es el texto de la opción. Lo que puede ver el usuario en el select, que se escribe después de la etiqueta <OPTION>.
value; // Indica el valor de la opción, que se introduce con el atributo VALUE de la etiqueta <OPTION>.
