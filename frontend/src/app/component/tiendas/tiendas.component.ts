import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {
  
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


  constructor(
    private router: Router
              )
  {
    
    this.generarTiendas();
  }

  ngOnInit(): void {
  }

  generarTiendas(){
    console.log('tiendas generadas');
    //this.router.navigate(['Tiendas']);
  }

}
