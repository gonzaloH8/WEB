# APP.CONFIG
    import { ApplicationConfig } from '@angular/core';
    import { provideRouter } from '@angular/router';
    
    import { routes } from './app.routes';
    import { provideHttpClient } from '@angular/common/http'; -- es necesario importar este archivo
    
    export const appConfig: ApplicationConfig = {
      providers: [provideRouter(routes), provideHttpClient()] -- aplicamos el componenete del archivo importado
    };

# POKEMON.SERVICE
    import { HttpClient } from '@angular/common/http';
    import { Injectable } from '@angular/core';
    import { Observable } from 'rxjs';
    import { PokemonResults } from '../core/models/pokemon';
    
    @Injectable({
      providedIn: 'root'
    })
    export class PokemonService {
    
      constructor(private http: HttpClient) { }
    
      getPokemonList(): Observable<PokemonResults>{ -- GESTIONAMOS LA API
        return this.http.get<PokemonResults>(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`)
      }
    }

# INTERFACE.MODEL.TS
    export interface Pokemon {
        name: string;
        url: string;
    }
    
    export interface PokemonResults{
        count: number;
        next: string;
        previous?: string;
        results: Pokemon[]
    }

  # POKEMON.ITEM.TS
    import { Component, Input } from '@angular/core';
    import { Pokemon } from '../../core/models/pokemon';
    
    @Component({
      selector: 'app-pokemon-item',
      standalone: true,
      imports: [],
      templateUrl: './pokemon-item.component.html',
      styleUrl: './pokemon-item.component.css'
    })
    export class PokemonItemComponent {
      @Input() pokemonInfo!: Pokemon;
    }

# POKEMON.ITEM.HTML
    <div class="pokemon-card">
        <p>{{pokemonInfo.name}}</p>
    </div>

# POKEMON.LIST.TS
    import { Component, OnInit } from '@angular/core';
    import { CommonModule } from '@angular/common';
    import { PokemonResults } from '../../core/models/pokemon';
    import { Observable } from 'rxjs';
    import { PokemonService } from '../../servicios/Pokemon.service';
    import { PokemonItemComponent } from "../pokemon-item/pokemon-item.component";
    
    @Component({
      selector: 'app-pokemon-list',
      standalone: true,
      imports: [CommonModule, PokemonItemComponent],
      templateUrl: './pokemon-list.component.html',
      styleUrl: './pokemon-list.component.css'
    })
    export class PokemonListComponent implements OnInit {
      public PokemonResults$!: Observable<PokemonResults>;
    
      // CONTRUCTOR
      constructor(private service: PokemonService){}
    
      // METODOS
        ngOnInit(): void {
          this.PokemonResults$ = this.service.getPokemonList();
        }
    }

# POKEMON.LIST.HTML
    @if(PokemonResults$ | async; as resultObject){
        <ul class="pokemon-list">
            @for(item of resultObject.results; track item.name){
                <li>
                    <app-pokemon-item [pokemonInfo]="item"/>
                </li>
            }
            
        </ul>
    }
