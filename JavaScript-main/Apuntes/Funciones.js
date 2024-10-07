// *** DECLARACION DE FUNCIONES ***
// Funciones. Estas pueden ser llamadas antes o despues de su inicializacion
// Las funciones pueden tener return o no, a eleccion del programador

// FORMA 1 EXPRESION DE FUNCION ANONIMA(se crean cuando el flujo de ejecución las alcanza)
let hola = function () {
  alert("HOLA");
};

// FORMA 2 DECLARACION DE FUNCION¡MAS USADA(se procesan antes de ejecutar el bloque de código. Son visibles en todas partes del bloque.)
function hola() {
  alert("HOLA");
}

// FORMA 3 FUNCION FLECHA(LAMBDA)
const hola = () => {
  alert("HOLA");
}; 
// EXPRESION DE FUNCION
const sayHello = (name) => `Hello ${name}`; // EN CASO DE UNA SOLA LINEA DE CODIGO LOGICO SE PUEDE PRESCINDIR DE LAS LLAVES
losSimpson.filter((nombre) => nombre.length); // recorro el array con el metodo filter, genero una funcion con el parametro nombre y genero la logica con este parametro

// FUNCION CON VALOR POR DEFECTO EN EL PARAMETRO
function sayHello(name = "World") {
  console.log("Hello " + name);
}
function sayHello(name = "world") {
  return `Hello ${name}`;
} 
// FORMA CORRECTA DE LLAMAR AL PARAMETRO Y LAS CONCATENACIONES
console.log(sayHello("Mari")); // PERMITE MACHACAR EL VALOR DEL PARAMETRO
console.log(losSimpson.filter((nombre) => nombre.charAt(0) === letra)); // for a traves de una funcion con una variable con la que hacer la logica
