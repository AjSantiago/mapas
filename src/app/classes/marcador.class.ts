// export class Marcador{
//   constructor(public lat: number, public lng: number){}
// }

export class Marcador {
  public lat: number;
  public lng: number;
  public zoom: number;

  public titulo = 'Sin título';
  public desc = 'Sin descripción';

  constructor(lat: number, lng: number, zoom: number) {
    this.lat = lat;
    this.lng = lng;
    this.zoom = zoom;
  }
}
