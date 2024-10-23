# FUNCIONES CALLBACKS(intrudocur una funcion dentro de los parametros de otra funcion)
    function mostrarConsola(num){
      console.log(num);
    }
    function calcular(num1, num2, callback){ 
      let suma = num1 + num2;
      callback(suma); // la variable callback le cambiamos el tipo a function
    }
    calcular(1,3,mostrarConsola); // renombra la funcion callback por mostrarConsola

# SINCRONA
 ## ASINCRONA(PROMESAS: TIPO ESPECIAL DE OBJETOS[APIS])
    let promesa = new Promise((response, reject) => { // CON VARIABLES
      let resp = 'Esta es la respuesta del servicio';
      response(resp);
      reject('Fallo');
    });
    
    let promesaa = new Promise((response, reject) => { // CON OBJETOS
      let resp = {
        response: 200,
        description: 'Esta info es importante'
      }
      response(resp);
      reject('Fallo');
    });

    let promesaaa = new Promise((response, reject) => { // CON OBJETOS
      setTimeout(()=>{
        let resp = {
        response: 200,
        description: 'Esta info es importante'
      }
      response(resp);
      reject('Fallo');
      }, 3000);
    });

# EJECUCION DE LAS PROMESAS ORDENADO
    async function ejecutarPromesas(){
      let respuestaProm1 = await promesa;
      console.log(respuestaProm1);
      let respuestaProm2 = await promesaa;
      console.log(respuestaProm2);
      let respuestaProm3 = await promesaaa;
      console.log(respuestaProm3);
    }
    
    ejecutarPromesas();
    
    promesa.then(res => {
      console.log(res)
    }).catch(e => {
      console.error(e); // 1 forma
      console.warn(e); // 2 forma
    });
