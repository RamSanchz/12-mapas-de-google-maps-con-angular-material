import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';

// Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

// Componentes
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';

// Angular Maps
import { AgmCoreModule } from '@agm/core';

// Forms Reactivos
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // entryComponents: [MapaEditarComponent], esto ya no es necesario en angular 11
  declarations: [AppComponent, MapaComponent, MapaEditarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCAdkVeaaNzXe89VT8FVVJMUGuPjtmgH4M',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
