import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ProductosService {

    constructor(protected http: HttpClient) { }

    getProductosxTienda(idTienda:number){   
      const AutData = {
        idTienda: idTienda
      };
      return this.http.get('http://127.0.0.1:8889/productos/' + AutData.idTienda).pipe(
        map((resp) => {
          return JSON.stringify(resp);
        }));
    }

    getProductoxId(idProducto: number){
      const AutData = {
        _id: idProducto
      };
      return this.http.get('http://127.0.0.1:8889/productos/'+ AutData._id +'/producto').pipe(
        map((resp) => {
          return JSON.stringify(resp);
        }));
    }

    getUsuarioXId(idUsuario: string){
      const AutData = {
        _id: idUsuario
      };
      return this.http.get('http://127.0.0.1:8889/usuarios/usuarioID/'+ AutData._id).pipe(
        map((resp) => {
          return JSON.stringify(resp);
        }));
    }
}

export interface Producto{
  _id: number,
  nombreProducto: string,
  imagen: string,
  precio: number,
  descripcion: string,
  idTienda: string
}

export interface DetalleFact{
  idProducto: number,
  nombreProducto: string,
  idTienda: string,
  descripcion: string,
  precio: number,
  cantidad: number,
  total: number
}

export interface Usuario{
  _id: string,
  email: string,
  numberPhone: string,
  password: string,
  nombre: string,
  nacionalidad: string,
  tipoUsuario: string
}