import { Component } from '@angular/core';
import { Marcador } from '../../classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css'],
})
export class MapaComponent {
  marcadores: Marcador[] = [];

  lat = 20.59334;
  lng = -100.38974;
  zoom = 15;

  constructor() {
    const nuevoMarcador = new Marcador(this.lat, this.lng, this.zoom);
    this.marcadores.push(nuevoMarcador);
  }

  agregarMarcador(evento: any) {
    console.log(evento);
  }
}

//npm i @agm/core@1.1.0
