/** VARIABLES */
let x = 5;
let y = 8;
// *** OPERADORES DE ASIGNACION ***
// SUMAS
console.log(x + y);
console.log(x += y);

// RESTAS
console.log(x - y);
console.log(x -= y);

// MULTIPLICACION
console.log(x = x * y);
console.log(x *= y);

// DIVISION
console.log(x = x / y);
console.log(x /= y);

// PORCENTAJE
console.log(x % y);
console.log(x %= y);

// *** OPERADORES LOGICOS ***
// OR
console.log(x = x || (x = y));
console.log(x || (x = y));

// AND
console.log(x = x && (x = y));
console.log(x && (x = y));

// *** OPERADORES DE COMPARACION ***
// Igual en valor
console.log(x == y);

// Igualdad estricta en valor y tipo
console.log(x === y);

// no es igual
console.log(x != y);

// desigualdad estricta
conosle.log(x !== y);

// Mayor que
console.log(x > y);

// Mayor o igual que
console.log(x >= y);

// Menor que
console.log(x < y);

// Menor o igual que
console.log(x <= y);

// *** OPERADORES ARITMETICOS ***
// Incremento
console.log(++x);
console.log(x++);

// Decremento
console.log(--y);
console.log(y--);

// *** OPERADORES BIT A BIT ***
let bit1 = 6;
let bit2 = 8;

//Desplazamiento a la izquierda
console.log('Desplazamiento a la izquierda:', bit1 << bit2);

//Desplazamiento a la derecha
console.log('Desplazamiento a la derecha:', bit1 >> bit2);

//AND
console.log('AND bit a bit:', bit1 & bit2);

//OR
console.log('AND bit a bit:', bit1 | bit2);

//XOR
console.log('AND bit a bit:', bit1 ^ bit2);

//NOT
console.log('AND bit a bit:', bit1, ~bit2);
