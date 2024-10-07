// *** CLASE MATH (Generador de Indices)***
// ~~ redondeo hacia abajo del número en coma flotante al entero más cercano hacia cero. Es lo mismo que Math.floor()
Math.floor(); //redondea hacia abajo
Math.ceil(); //redondea hacia arriba
Math.round(); //redondea en funcion del decimal hacia arriba o hacia abajo
const n = Math.random() * 5; // crea un numero random entre 0 y 5
toFixed(); // toFixed() devuelve una representación de cadena de numObj que no usa notación exponencial y tiene exactamente dígitos dígitos después del decimal.
Math.pow(x,y); // el numero x elevado al numero y
let cadena = "0123456789ABCDEF"; // puedo recorrer de forma aleatoria esta cadena y generar colores

// *** CLASE STRING ***
charAt(0); //  devuelve un número indicando el valor Unicode del carácter en el índice proporcionado
startsWith("M"); // indica si una cadena de texto comienza con los caracteres de una cadena de texto concreta, devolviendo true o false según corresponda.
toUpperCase(); // convierte una cadena a letras mayúsculas
console.log(`Estas comillas nos permite introducir variables, ${num}`);
console.log(palabra.substring());
console.log(palabra.toLocaleLowerCase());
console.log(palabra.toLocaleUpperCase());
console.log(palabra.concat(pal));
console.log(palabra.startsWith('M'));
console.log(palabra.endsWith('o'));
console.log(palabra.length);
console.log(palabra.charAt(0));

//*** FECHAS */
// FORMATO AMERICANO  AÑO-MES-DIAS()
// SHORT 03/15/2020
// LONG Mar 25 2020
// los meses los cuenta como un array
let meses = ['Enero', 'Febrero', ' Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const fecha = new Date("2021-05-01");
console.log(fecha.getFullYear());
const resultado = fecha.getDate() + ' ' + meses[fecha.getMonth()] + ' ' + fecha.getFullYear();
console.log(resultado);
fecha.setFullYear(2029); // modifica el año manteniendo los dias y meses
