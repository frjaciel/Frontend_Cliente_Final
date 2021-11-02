import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
    categorias: any[]= [
      {
        nombre: "restaurantes",
        icono: "assets/img/iconos/restaurante.png" 
      },
      {
        nombre: "supermercados",
        icono: "assets/img/iconos/supermercado.png" 
      },
      {
        nombre: "farmacias",
        icono: "assets/img/iconos/farmacia.png" 
      },
      {
        nombre: "ropa",
        icono: "assets/img/iconos/ropa.png" 
      },
      {
        nombre: "zapatos",
        icono: "assets/img/iconos/zapatos.png" 
      },
      {
        nombre: "celulares",
        icono: "assets/img/iconos/celular.png" 
      }
    ];
  
    tiendas: any[]=
    [
      {
        nombre: "Carrion",
        icono: "assets/img/tiendas/1.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet." 
      },
      {
        nombre: "La Colonia",
        icono: "assets/img/tiendas/2.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet."  
      },
      {
        nombre: "Payless",
        icono: "assets/img/tiendas/3.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet."  
      },
      {
        nombre: "Farmacia Siman",
        icono: "assets/img/tiendas/4.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet."  
      },
      {
        nombre: "Burguer King",
        icono: "assets/img/tiendas/5.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet."  
      },
      {
        nombre: "Tacostado",
        icono: "assets/img/tiendas/6.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet."  
      },
      {
        nombre: "Pizza Hut",
        icono: "assets/img/tiendas/7.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet."  
      },
      {
        nombre: "Little Ceasars",
        icono: "assets/img/tiendas/8.png",
        informacion: "ipsum dolor sit amet consectetur adipisicing elit. Recusandae eveniet amet."  
      },
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
