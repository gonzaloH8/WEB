// **** OBJETOS ***
const objeto = { nombre: "Tanjiro", apellido: "Kasante" };
function crearObjeto(name, email) {
  return {
    email,
    name,
    activo: true,
    recuperarClave: function () {
      console.log("Recuperando clave...");
    },
  };
}
let crearUsuario1 = crearObjeto("gonza", "gonza@gmail.com");
const objetoNuevo = {nombre: 'Cristinini', tel: 2842938}; // me permite crear un objeto fuera del arrayObjeto
contactos.push(objetoNuevo); // me permite añadir el objeto al arrayObjeto
console.log(crearUsuario1);
delete objeto.apellido; // me permite borrar un elemento
objeto.apellido='Lopez'; // actualizacion de un elemento del objeto
let objeto = Object.keys(objeto).sort(); // ordena el objeto
const baseDatos = [{}, {}];
const objeto1 = Object.freeze({ nombre: "Tanjiro", apellido: "Kasante" }); // me permite bloquear cualquier cambio que se quiera hacer sobre el objeto
const objeto2 = Object.seal({ nombre: "Tanjiro", apellido: "Kasante" }); // permite solo modificar los valores del objeto
