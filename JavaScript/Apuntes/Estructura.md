# CONDICIONALES O ESTRUCTURAS DE CONTROL
    if (true) {
    } else if (true) {
    } else {
    }
    let opcion = prompt('Dime numero');
    switch (opcion) {
      case "listar":
        console.log('Primera opcion')
        break;
        default:
          console.log('Salir');
    }

# BUCLE FOR
    for (let index = 0; index < animal.length; index++) {} // FOR TRADICIONAL

# FOR OF PARA OBJETOS RECOMENDADA. USADA PARA COMPARAR ELEMENTOS DE UN ARRAY
    for (const mi of animal) {
      console.log(animal[mi]);
    } 

# FOR IN ¡¡¡NO SE USA¡¡¡
    for (const ma in animal) {
      console.log(ma, animal[ma]);
    } 
    
# FOR EACH
    animal.forEach((element) => {}); // FOREACH

# BUCLE WHILE 
    do {} while (i < 10);
    {
      // break;  nos permite saltarnos un codigo o frenarlo
      // continue;  nos permite saltarnos una trozo de codigo
    }

# GESTION DE ERRORES 
    try {
      // LLAMADO AL BACKEND (A TRAVES DE UN API)
      console.log('llamando al backend')
      throw('Salio todo con exito');
      setTimeout(()=> {
        console.log('EL backend nos responde:');
        console.log('CLiente Apto para la compra')
      },1000);
    } 
    catch (e) {

## TOMAMOS EL ERROR Y HACEMOS ALGO QUE NOS PAREZACA CORRECTO
    console.log('algo fallo', e);
    }finally{

## SE EJECUTA SIEMPRE POR MAS QUE FALLE O NO FALLE
    console.log('Se ejecuta siempre');
    }
