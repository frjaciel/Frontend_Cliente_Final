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
    
    this.categoriaService.getCatergorias().subscribe(resp =>{
      this.categorias = JSON.parse(resp); 
    });

    this.categoriaService.getTiendas().subscribe(resp =>{
      this.tiendas = JSON.parse(resp); 
    });
    
  }

}
