import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService, Categoria } from '../../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  categorias:Categoria[];

  constructor(  private router: Router,
                private categoriaService: CategoriasService) { 
    
  }

  ngOnInit(): void {
    this.categorias = this.categoriaService.getCatergorias();
  }

  verTiendasxCat(idx:number){

    this.router.navigate(['/TiendasXCategoria', idx]);

  }
  
 
}
