import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService, Categoria, Tienda } from '../../services/categorias.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  categorias:Categoria[];
  tiendas: Tienda[];
  
  constructor(  private router: Router,
                private categoriaService: CategoriasService) { }

  ngOnInit(): void {
    this.categorias = this.categoriaService.getCatergorias();
    this.tiendas = this.categoriaService.getTiendas();
  }

}
