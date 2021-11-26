import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProductosService {

    private Productos: Producto[]= [
        {
            idTienda: 5,
            id: 1,
            nombre: "Hamburger",
            icono: "assets/img/Productos/1.png",
            informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
            precio: 135.58
        },
        {
            idTienda: 5,
            id: 2,
            nombre: "Hamburger1",
            icono: "assets/img/Productos/1.png",
            informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
            precio: 225.4
        },
        {
            idTienda: 5,
            id: 3,
            nombre: "Hamburger2",
            icono: "assets/img/Productos/1.png",
            informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
            precio: 80.54
        },
        {
            idTienda: 5,
            id: 4,
            nombre: "Hamburger3",
            icono: "assets/img/Productos/1.png",
            informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
            precio: 254.6
        },
        {
            idTienda: 4,
            id: 5,
            nombre: "PANADOL EXTRA FUERTE X 8 SOBRES X2 TAB",
            icono: "assets/img/Productos/2.jpg",
            informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
            precio: 135.58
        },
        {
            idTienda: 4,
            id: 6,
            nombre: "PANADOL EXTRA FUERTE X 8 SOBRES X2 TAB",
            icono: "assets/img/Productos/2.jpg",
            informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
            precio: 135.58
        }
    ];

    constructor() { }

    getProductosxTienda(idTienda:number){
        
      let productosXT: Producto[] = [];

      for (let producto of this.Productos) {

        const elemento = producto.idTienda;
        
        if (elemento != idTienda) {
          continue;
        }else{
            productosXT.push(producto);
        }

      }

      return productosXT;

    }

    getProductoxId(idProducto: number){

      let productosXT: Producto;

      for (let producto of this.Productos) {

        const elemento = producto.id;
        
        if (elemento != idProducto) {
          continue;
        }else{
            productosXT = producto;
        }

      }

      return productosXT;

    }
}

export interface Producto{
  idTienda: number,
  id: number,
  nombre: string,
  icono: string,
  informacion: string,
  precio: number
}