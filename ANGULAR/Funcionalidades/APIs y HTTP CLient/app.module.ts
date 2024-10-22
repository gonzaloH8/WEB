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
import { DniComponent } from './contact/dni/dni.component';
import { HttpClientModule } from '@angular/common/http';
// declarations: importa la clase y por ser la principal tambien en boostrap

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductDetailsComponent,
    ProductComponent,
    DniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // formularios de tipo plantilla
    ReactiveFormsModule, // formularios de tipo reactive
    HttpClientModule // para hacer peticiones http
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
