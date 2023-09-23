import { Component } from '@angular/core';
import { IProductos } from '../iproductos';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent {
  
  imageWidth: number = 50;
  imageMargin: number = 2;
  muestraImg: boolean = true;
  listFilter: string = '';

  showImage(): void{
    this.muestraImg =! this.muestraImg;
  }


  productos: IProductos[] = [
    {
    "Modelo":'Sentra',
    "Descripcion": "4 puertas Familiar",
    "Year": "febrero 2 2022",
    "Precio": 120000,
    "Marca": "Nissan",
    "Color": "Azul",
    "ImagenUrl": "https://img.remediosdigitales.com/ba619b/img_9447-copia/1366_2000.jpg"
    },
    {
      "Modelo":'A4',
      "Descripcion": "4 puertas Familiar",
      "Year": "marzo 5 2020",
      "Precio": 180000,
      "Marca": "Audi",
      "Color": "Blanco",
      "ImagenUrl": "https://static.vecteezy.com/system/resources/previews/008/728/925/non_2x/side-turkey-february-28-2022-white-audi-a4-is-parked-on-the-street-on-a-warm-day-against-the-backdrop-of-park-free-photo.jpg"
      },
      {
        "Modelo":'Rio',
        "Descripcion": "2 puertas Familiar",
        "Year": "febrero 2 2019",
        "Precio": 130000,
        "Marca": "Kia",
        "Color": "Negro",
        "ImagenUrl": "https://soloautos.li.csnstatic.com/soloautos/cars/dealer/53ojafzx7qbgee97vd8euce9e.jpg?pxc_method=fitfill&pxc_bgtype=self&height=725&width=1087"
        },
  ]
}
