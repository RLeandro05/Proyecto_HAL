import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeccionesComponent } from './components/secciones/secciones.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CarruselImagenesComponent } from './components/carrusel-imagenes/carrusel-imagenes.component';
import { InformacionSaludComponent } from './components/informacion-salud/informacion-salud.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SeccionesComponent,
    HomeComponent,
    HeaderComponent,
    CarruselImagenesComponent,
    InformacionSaludComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
