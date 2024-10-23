# METODOS SINTAXIS GLOBAL
    console.log(); -- permite imprimir las variables
    alert(); -- permite crear una ventana emergente
    confirm(); -- permite generar unos botones de confirmacion
    promt("Quien es"); -- crea una ventana emergente con el mensaje designado esperando una respuesta del usuario

# DICCIONARIO DE DATOS
    const USER_LOGGED = true; -- Mostrar una información al usuario dependiendo de si está conectado o no.

# CONVERSION DE STRING A NUMBER
    let a = Number('1');
# CONVERSION DE NUMBER A STRING
    let b = String(1);
    let c = 1;
    let d = b.toString();

# CONVERSION DE DATE A NUMBER
    let e = new Date().toDateString; -- pierde la funcionalidad de los date
    let f = Number(e);

# DATES A STRING
    let g = String(e);

# NUMBER A BOOLEAN
    let h = Boolean(0);
    let i = Boolean(1);

# ESTADOS DE VARIABLES
    console.log(undefined) -- valor indifinido
    console.log(null) -- la variable no tiene valor
    console.log(boolean) -- tipo booleano
    console.log(string) -- tipo cadena de texto
    console.log(number) -- tipo numerico entero
    console.log(NaN) --  No es un valor numerico

# VARIABLES GLOBALES
    let nombre = "gonzalo"; -- variable simple que obtiene el tipo en funcion de su valor
    let num = 49829; -- variable simple de tipo numerico
    const pi = 3.14; -- variable constante
    const message = "Hello world"; -- variable de tipo cadena
    const logicoT = true; -- variable booleano verdadero
    const logicoF = false; -- variable booleano falso
    console.log(message); -- imprime el valor en la consola del navegador o terminal
    miLi.textContent = `${numUnidadesProducto} X ${producto.nombre} - ${producto.precio}${divisa} `; -- AÑADIMOS TEXTO A LA ETIQUETA

# VARIABLES LOCALES(FUNCIONES, CONDICIONALES, BUCLES)
    function sayHello() {
      const message = "Hello Mari";
      console.log(message);
    }
    sayHello(); -- Llamada a la funcion

# TIPO AL QUE PERTENECE QUE VALOR ASIGNADO
    console.log(typeof "foo");
    console.log(typeof true);
    console.log(typeof 0);
    console.log(typeof undefined); --typeof(num) nos permite averiguar cual es el estado/tipo de una variable

# COLORES
    hexadecimal = "0123456789ABCDEF";
    RGB = "rango de 0 a 155, R(23)G(41)B(56)";
