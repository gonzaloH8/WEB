//*** EXPRESIONES REGULARES */
let texto = " Este curso es de JavaScript y esta dado por Mi";
let busqueda = texto.search(/curso/i);

// MODIFICADORES
// i: ignorar mayusculas y minisculas
// g: buscar en todo el texto pasado
// m: busqueda multilinea

let pattern = /mi/i;
let patternNmbr = /[0-9]/;
let correoElectronico = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z][2,63]$/i;
console.log(pattern.test('gonzalo@1.1'));
let resultadoP = pattern.test(texto);
let resultadoPe = pattern.exec(texto);
console.log(resultadoP);
