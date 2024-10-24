class sorteo<T>{ // le aplico un type generico
constructor(nombre) { // nombre no puede ser accedido fuera de esta clase
  this.nombre = nombre;
}
   

setTicket(ticket:T){ // encapsulamiento de datos: ticket esta inicializado y al llamar al metodo le aplicamos un valor
this.ticket = ticket
}

getTicket(){ // encapsulamiento de datos: ticket tiene un valor predefinido y lo podemos recibir
return this.ticket
}

public sortear(){ // public permito que sea accesible desde fuera
  return `Para ${this.nombre} el ticket es ${this.ticket}`
}

}

let sorteo = new Sorteo('Irina') // indico el type que va a tener T y el nombre
sorteo.setTicket(7) // le indico el valor deseado desde fuera
console.log(sorteo.sortear()) // imprime el valor del metodo
