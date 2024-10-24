class Pelicula{

  constructor(nombre: string, protagonistas: string[], actores: string[]){
    this.nombre = nombre,
    this.protagonistas = protagonistas,
    this.actores = actores
  }

  proyectarCine(){
    console.log(`La pelicula ${this.nombre} esta siendo proyectada`);
  }
}

const pelicula = new Pelicula('Barbie', ['BArbie', 'Kent'], ['Margot Robbie', 'Rayn Gosglie']);
const pelicula2 = new Pelicula('Oppenheimer', ['Oppenheimer', 'LOL'], ['Pesoa', 'maske']);

pelicula.proyectarCine()
console.log(pelicula2)
