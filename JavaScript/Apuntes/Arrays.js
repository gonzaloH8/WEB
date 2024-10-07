// **** ARRAY O ESTRUCTURAS DE DATOS ***
let animal = ["gacela", "mariposa", "leon"]; // DECLARACION DE ARRAY

// *** METODOS ARRAY GENERICOS ****
length; // nos permite saber la longitud del array
push(); // agrega valores al final del array
unshift(); // agrega valores al inicio del array
pop(); // remueve el elemento final y lo devuelve
shift(); //remueve el elemento del principio y lo devuelve
// METODOS ARRAY FUNCTIONS
// DEVUELVE INDEFINIDO
forEach(); // Ejecuta la función definida en ƒ por cada uno de los elementos del array.
// COMPROBACIONES. DEVUELVE BOOLEAN
every(); // Comprueba si todos los elementos del array cumplen la condición de ƒ.
some(); // Comprueba si al menos un elemento del array cumple la condición de ƒ.

// TRANSFORMADORES Y FILTROS. DEVUELVE ARRAY.
filter(); // Filtra un array y se queda sólo con los elementos que cumplen la condición de ƒ.
map(); // Recorre el array, modifica un valor especificado por uno nuevo y el resto se queda undefined.
fill('Valor',1, 4); // Valor, posicion inicial(inclusivo), posicion final(exclusivo). Devuelve el array modificado.

// BUSQUEDAS
find(); // Devuelve el elemento que cumple la condición de ƒ.

// ACUMULADORES. DEVUELVE OBJETO
reduce(); // Ejecuta ƒ con cada elemento (de izq a der), acumulando el resultado.

// DEVUELVE UN STRING Y CAMBIA EL CONTENIDO DEL ARRAY
includes(); // verificar si un elemento existe dentro de un arreglo
concat([]); // añade al array los valores expecificados en el parentesis
slice(2, 4); // muestra los valores especificas por sus posiciones. Si no especificas copia el array
splice(2,0,4); // 1 Indice el cual sera modificado, 2 Elementos a borrar desde el indice 3 Dato a insertar en el indice especificado
join("--"); // cambia el caracter del separador de un array transformandolo en un String
split("--"); // convierte un String en un array
sort((a,b)=> a - b);

// *** SET ***
const miSet = new Set(['Pedro', 'Ricardo', 'Maria', 'Maria']);
set.add(1); // Añadimos un valor en set
miSet.delete(3); // Eliminacion de un valor
let pregunta = miSet.has('Pedro'); // devuelve un booleano
let tamaño = miSet.size; // devuelve el tamaño del set
// Actualizacion, combinando ambas
let miSetOrdenado = Array.from(miSet).sort((a, b) => a - b);
// limpiar un array de duplicados
let array = [1,1,1,2,2,2,3,3,4,4,4,5,5];
let unico = new Set(array);
let nuevoArray = [...unico];
console.log(nuevoArray);

// *** MAP ***
const miMapa = new Map(['Computadores', 10], ['Tablets', 5],['Ratones', 4]);
miMapa2.set("clave1", "valor1"); // inserccion de clave y valor
// Recorrer el map
miMapa.forEach((valor, clave) => {
  console.log(`${clave} : ${valor}`);
});
console.log(miMapa.get("clave1")); // Imprime 'valor1'
miMapa2.delete(42); // eliminacion mediante clave
let preguntaM = miMapa.has('Computadores'); // devuelve un booleano
let tamañoM = miMapa.size; // devuelve el tamaño del set
