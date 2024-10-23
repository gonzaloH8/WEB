# EVENTOS GENERICOS
    onchange; -- Deseleccionar un elemento que se ha modificado(input, select, textarea)
    onclick; -- pinchar y soltar el raton.(todos los elementos)
    onfocus; -- seleccionar un elemento.(button, input, label, select, textarea, body)
    onkeydown; -- pulsar una tecla(sin soltar)(elementos del formulario y body)
    onkeypress; -- pulsar una tecla(elementos del formulario y body)
    onkeyup; -- soltar una tecla pulsada(elementos del formulario y body)
    onload; -- la pagina se ha cargado completamente(body)
    onmouseout; --el raton sale del elemento(pasa por encima de otro elemento)(todos los elementos)
    onmouseover; -- el raton sale del elemento(pasa por encima del elemento)(todos los elementos)
    onsubmit; -- enviar formulario(form)
    preventDefault; -- Impide la ejecucion del evento

# EVENTOS MOUSE
    click; -- cuando el mouse hace click sobre un elemento
    contextmenu; -- cuando el mouse hace click derecho sobre un elemento
    mouseover / mouseout; -- cuando el cursor del mouse ingresa/abandona un elemento
    mousedown / mouseup; -- cuando el boton del mouse es presionado/ soltado sobre un elemento
    mousemove; -- cuando el mouse se mueve

# EVENTOS DE TECLADO
    keydown / keyup; -- cuando se presiona/suelta una tecla

# EVENTOS DE FORM
    submit; -- cuando el visitante envio un form
    focus; -- cuando el visitante hace foco en un elemento, Input

# EVENTOS DEL DOCUMENTO
    DOMContentLoaded; -- cuando el HTML es cargado y procesado, el DOM esta completamente construido

# EVENTOS CSS
    transitiomend; -- cuando una animacion CSS concluye

# DOCUMENT
    document.write(html); -- agrega HTML a la pagina antes de que haya cargado
    document.createElement("li");
    document.querySelector(); -- busca por CSS
    document.querySelectAll(); -- busca por CSS
    elem.cloneDone(); -- clona elemento. Si es true clona los descendientes
    miNodoBoton.classList.add("btn", "btn-primary"); -- AÑADIMOS LA CLASE CORRESPONDIENTE A LA ETIQUETA
    miNodoBoton.textContent = "+"; -- AÑADIMOS TEXTO A LA ETIQUETA
    miNodoBoton.setAttribute("marcador", producto.id); -- CREAMOS EL ATRIBUTO MARCADOR CON SU CORRESPONDIENTE VALOR A LA ETIQUETA BUTTON
    miNodoBoton.addEventListener("click", anyadirProductoAlCarrito); -- CREAMOS UN EVENTO DE TIPO CLICK Y SU VALOR(FUNCION)
    miBoton.style.marginLeft = "1rem"; -- AÑADE UN ESTILO A LA ETIQUETA
    miBoton.dataset.idProducto = producto.id; -- ´???

# PROPIEDADES
    const idBorrar = evento.target.dataset.idProducto; -- OBTENGO LA ETIQUETA QUE APLICA EL EVENTO Y OBTENGO SU ID
    tagName; --Propiedad devuelve el nombre de etiqueta de un elemento.
    nodeName; --

# INSERCCION Y ELMIMINACION
    node.append(); -- inserta en node, al final
    node.prepend(); -- inserta en node, al principio
    node.before(); -- inserta inmediatamente antes de node
    node.after(); -- inserta inmediatamente despues de node
    node.replaceWith(); -- reemplaza node
    node.remove(); -- quita el node

# JSON
    JSON.parse(); -- Convierte el texto(str) si es un JSON valido a un objeto y lo devuelve
    JSON.stringify(); -- convierte un objeto JavaScript(obj) a su representacion JSON y la devuelve en formato String
    boton.dataset.datosAlumno = JSON.stringify(alumno); -- al elemento boton. Se aplica en el input
    boton; -- elemento html ya definido
    dataset; -- me permite enlazar un etiqueta para su lectura/escritura con una variable de datos
    datosAlumno; -- variable que recoge en formato String los datos de alumno
    const datos = JSON.parse(evento.target.dataset.datosAlumno); -- VARIABLE
    evento; -- variable en parametro de la funcion
    target; -- Propiedad devuelve el elemento donde ocurrió el evento.
    dataset; -- me permite enlazar un etiqueta para su lectura/escritura con una variable de datos
    datosAlumno; -- variable que alberga los datos de los alumnos

-- ERRORES DE LA PAGINA
200 -- esta todo bien
400 -- error del usuario
500 -- error de la base de datos
