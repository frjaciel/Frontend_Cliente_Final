import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService, Tienda } from '../../services/categorias.service';

@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  public max: number;
  public rating: number;
  public readonly: boolean = false;

  tiendas: Tienda[];

  constructor( private router: Router,
               private categoriaService: CategoriasService) { }

  ngOnInit(): void {

    this.categoriaService.getTiendas().subscribe(resp =>{
      this.tiendas = JSON.parse(resp); 
    });
  }

  verProductos(idx:number){
    this.router.navigate(['/ProductosXTienda', idx]);
  }


}
