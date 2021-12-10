import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriasService, Tienda } from '../../services/categorias.service';

@Component({
  selector: 'app-tiendasxcategoria',
  templateUrl: './tiendasxcategoria.component.html',
  styleUrls: ['./tiendasxcategoria.component.css']
})
export class TiendasXCategoriaComponent implements OnInit {

  public max: number;
  public rating: number;
  public readonly: boolean = false;

  tiendasxcategoria: Tienda[];

  constructor(private router: Router,
              private categoriaService: CategoriasService,
              private activateRoute:ActivatedRoute ) {
              
    this.activateRoute.params.subscribe( params =>{
        this.categoriaService.getTiendasxCategoria(params['id']).subscribe(resp =>{
          this.tiendasxcategoria = JSON.parse(resp); 
      });
    });
  }

  ngOnInit(): void {

  }

  verProductos(idx:number){
    this.router.navigate(['/ProductosXTienda', idx]);
  }

}

