import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Angular Material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

//Angular Maps
import { AgmCoreModule } from '@agm/core';

//Componentes
import { AppComponent } from './app.component';
import { MapaComponent } from './components/mapa/mapa.component';

@NgModule({
  declarations: [AppComponent, MapaComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBA2DvVV1HU0ImryeXEYpjNY1zn4eZKzyc',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
