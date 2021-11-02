import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
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



  constructor(
    private router: Router
  ) { 
    this.verCategorias();
  }

  ngOnInit(): void {
  }
  
  verCategorias(){
    console.log('categorias generadas');
  }
}
