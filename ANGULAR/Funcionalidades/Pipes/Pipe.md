# FICHERO.PIPE.TS
    import { Pipe, PipeTransform } from '@angular/core'; -- Implementa la funcionalidad principal de Angular, servicios de bajo nivel y utilidades.
    import { Jedis } from '../../core/models/jedi'; -- importa la interface del array jedi
  
    @Pipe({
      name: 'search', -- selector del archivo
      standalone: true
    })
    
    export class SearchPipe implements PipeTransform { -- Clase que implementa un tipo de interface Pipe
  
    transform(value: Jedis[], searchInput: string) { -- value asigna como valor el array que manejamos, searchInput es una variable con funcion de argumento de value
      searchInput = searchInput ? searchInput.toLowerCase(): ''; -- si el argumento searchInput no esta en minusculas, se ejecuta vacio
      return searchInput ? value.filter(jedi => jedi.name.toLowerCase().includes(searchInput)): value; -- searchInput tiene algun nombre del array, mostramos el array nuevo si no se queda el array original
    }
     transform(value: number) {
     return value * 2 -- 
     }
    }

# FICHERO.COMPONENT.HTML
    <h2>MI CAMPO DE PRUEBAS</h2>
    <P>{{ message | uppercase }}</P> -- generamos el mensage en mayus
    <p>{{ date | date: "dd/MM/yyyy"}}</p> -- asignamos un formato a la fecha
    <p>{{ num | double }}</p> -- reasignamos la variable num al value del pipe y realizamos la operacion
    <input type="text" name="searchValue" id="search-Value" [(ngModel)]="searchValue"/> -- asignamos al input una variable vacia
    <ul *ngFor="let jedi of jediOrder | search: searchValue"> -- imprimimos el array de jedi, con la funcionalidad de filtro del pipe con la variable searchInput vacia
        <li>{{ jedi.name | titlecase}} - {{ jedi.rank }}</li> -- imprimimos los valores del array
    </ul>

# FICHERO.COMPONENT.TS
    import { Component } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { DoublePipe } from '../pipes/double/double.pipe';
    import { Jedis } from '../core/models/jedi';
    import { FormsModule } from '@angular/forms';
    import { SearchPipe } from '../pipes/search/search.pipe';
    
    @Component({
      selector: 'app-list-productos',
      standalone: true,
      imports: [CommonModule, SearchPipe, DoublePipe, FormsModule], -- importamos las clases de los pipes y la clase del form
      templateUrl: './list-productos.component.html',
      styleUrl: './list-productos.component.css'
    })
    
    export class ListProductosComponent {
      message = "Hola este es un nuevo mensaje";
      date= new Date();
      num : number = 4;
      searchValue : string= '';
      jediOrder: Jedis[] = [
        {name : "obi-wan Kenobi", rank: "master"},
        {name : "yoda", rank: "master"},
        {name : "anakin Skywalker", rank: "padawan"},
        {name : "mace Windou", rank: "master"},
        {name : "adi Galia", rank: "master"}
      ]
    }

# FICHERO.MODEL.TS
    export interface Jedis{
      name: string
      rank: string
    }
