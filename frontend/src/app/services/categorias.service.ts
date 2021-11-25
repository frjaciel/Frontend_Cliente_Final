import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CategoriasService {

    private categorias: Categoria[]= [
        {
          id:1,
          nombre: "restaurantes",
          icono: "assets/img/iconos/restaurante.png" 
        },
        {
          id:2,
          nombre: "supermercados",
          icono: "assets/img/iconos/supermercado.png" 
        },
        {
          id:3,
          nombre: "farmacias",
          icono: "assets/img/iconos/farmacia.png" 
        },
        {
          id:4,
          nombre: "ropa",
          icono: "assets/img/iconos/ropa.png" 
        },
        {
          id:5,
          nombre: "zapatos",
          icono: "assets/img/iconos/zapatos.png" 
        },
        {
          id:6,
          nombre: "celulares",
          icono: "assets/img/iconos/celular.png" 
        }
    ];   
    
    tiendas: Tienda[]=
    [
      {
        idCategoria: 4,
        id: 1,
        nombre: "Carrion",
        icono: "assets/img/tiendas/1.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
        estrellas: 4 
      },
      {
        idCategoria: 2,
        id: 2,
        nombre: "La Colonia",
        icono: "assets/img/tiendas/2.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
        estrellas: 2  
      },
      {
        idCategoria: 5,
        id: 3,
        nombre: "Payless",
        icono: "assets/img/tiendas/3.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
        estrellas: 5  
      },
      {
        idCategoria: 3,
        id: 4,
        nombre: "Farmacia Siman",
        icono: "assets/img/tiendas/4.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
        estrellas: 3  
      },
      {
        idCategoria: 1,
        id: 5,
        nombre: "Burguer King",
        icono: "assets/img/tiendas/5.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
        estrellas: 2  
      },
      {
        idCategoria: 1,
        id: 6,
        nombre: "Tacostado",
        icono: "assets/img/tiendas/6.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
        estrellas: 3  
      },
      {
        idCategoria: 1,
        id: 7,
        nombre: "Pizza Hut",
        icono: "assets/img/tiendas/7.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
        estrellas: 4  
      },
      {
        idCategoria: 1,
        id: 8,
        nombre: "Little Ceasars",
        icono: "assets/img/tiendas/8.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet.",
        estrellas: 5  
      },
    ];
    
    constructor() { }

    getCatergorias(){
        return this.categorias;
    }

    getTiendasxCategoria( idCategoria:number ){

      let tiendasXC: Tienda[] = [];

      for (let tienda of this.tiendas) {

        const elemento = tienda.idCategoria;
        
        if (elemento != idCategoria) {
          continue;
        }else{
          tiendasXC.push(tienda);
        }

      }

      return tiendasXC;

    }

}

export interface Categoria{
  id: number,
  nombre: string,
  icono: string,
}

export interface Tienda{
  idCategoria: number,
  id: number,
  nombre: string,
  icono: string,
  informacion: string,
  estrellas: number
}