import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AccionesComponent } from './acciones/acciones/acciones.component';
import { EstadisticasComponent } from './estadisticas/estadisticas/estadisticas.component';
import { MensajesComponent } from './mensajes/mensajes/mensajes.component';
import { AhorcadoComponent } from './ahorcado/ahorcado/ahorcado.component';

@NgModule({
  declarations: [
    AppComponent,
    AccionesComponent,
    EstadisticasComponent,
    MensajesComponent,
    AhorcadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
