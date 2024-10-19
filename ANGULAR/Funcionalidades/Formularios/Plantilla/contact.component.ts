# COMPONENTE APP-MODULE TS
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { EstiloHermanosDirective } from './estilo-hermanos.directive';
// import { MiPipePersonalizadoPipe } from './mi-pipe-personalizado.pipe';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductComponent } from './product/product.component';

// declarations: importa la clase y por ser la principal tambien en boostrap

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductDetailsComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // formularios de tipo plantilla
    ReactiveFormsModule // formularios de tipo reactive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



# COMPONENTE CONTACT TS
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
        public usuario: any = {
          nombre: '',
          email: ''
        }

        enviar(){
          console.log(this.usuario)
        }
}
