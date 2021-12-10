import { Injectable } from '@angular/core';
import { HttpClient, JsonpClientBackend } from '@angular/common/http';
import { CategoriaModel } from "../../app/models/categoria.model";
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class CategoriasService {
    
    constructor(protected http: HttpClient) { }

    getCatergorias(){
      
      //return this.categorias;
      return this.http.get('http://127.0.0.1:8889/categorias/').pipe(
      map((resp) => {
        return JSON.stringify(resp);
      }));
    }

    getTiendas(){
      return this.http.get('http://127.0.0.1:8889/tiendas/').pipe(
      map((resp) => {
        return JSON.stringify(resp);
      }));
    }

    getTiendasxCategoria( idCategoria: string ){
      const AutData = {
        idCategoria: idCategoria
      };
      return this.http.get('http://127.0.0.1:8889/tiendas/' + AutData.idCategoria).pipe(
        map((resp) => {
          return JSON.stringify(resp);
        }));
    }

}

export interface Categoria{
  _id: number,
  nombreCategoria: string,
  imagen: string,
}

export interface Tienda{
  _id: number,
  nombreEmpresa: string,
  logo: string,
  calificacion: number,
  descripcion: string,
  idCategoria: string
}