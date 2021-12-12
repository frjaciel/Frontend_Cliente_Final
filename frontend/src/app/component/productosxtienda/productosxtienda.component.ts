import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService, Tienda } from '../../services/categorias.service';
import { ProductosService, Producto, DetalleFact } from '../../services/productos.service';
import { LoginService } from '../../services/login.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup } from '@angular/forms';
import { couldStartTrivia } from 'typescript';

@Component({
  selector: 'app-productosxtienda',
  templateUrl: './productosxtienda.component.html',
  styleUrls: ['./productosxtienda.component.css']
})
export class ProductosxtiendaComponent implements OnInit {

  productosxtienda: Producto[];
  closeResult = '';
  cantidad = 0;
  nombreTienda: Tienda = {
    _id: 0,
    nombreEmpresa: '',
    logo: '',
    calificacion: 0,
    descripcion: '',
    idCategoria: ''
  };

  productoSelect: Producto = {
    _id: 0,
    nombreProducto: '',
    imagen: '',
    precio: 0,
    descripcion: '',
    idTienda: ''
  };

  DetalleFactura: DetalleFact[] = [];
  CantidadCarrito = 0;

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private productosService: ProductosService,
              private modalService: NgbModal,
              private fb: FormBuilder,
              private loginServ: LoginService,
              private categoriaService: CategoriasService) { 

        this.activateRoute.params.subscribe( params =>{
            this.productosService.getProductosxTienda(params['id']).subscribe(resp =>{
              this.productosxtienda = JSON.parse(resp); 
          });
        });  
 }

  ngOnInit(): void {
    if (localStorage.getItem('DetalleFactura') == null) {
      localStorage.setItem('DetalleFactura', JSON.stringify(this.DetalleFactura));
    }else{
      this.DetalleFactura = JSON.parse(localStorage.getItem('DetalleFactura'));
    }
    if (localStorage.getItem('CantidadCarrito') == null) {
      localStorage.setItem('CantidadCarrito', this.CantidadCarrito.toString());
    }else{
      this.CantidadCarrito = +localStorage.getItem('CantidadCarrito');
    }
  }

  DescripcionCompra(idx: number, content ){

    this.cantidad = 0;

    this.productosService.getProductoxId(idx).subscribe(resp =>{
      this.productoSelect = JSON.parse(resp);
      this.obtenerTienda(this.productoSelect.idTienda);
    });

    this.open(content);

  }

  obtenerTienda(idtienda){
    this.categoriaService.getTiendasID(idtienda).subscribe(resp=>{
      this.nombreTienda = JSON.parse(resp);
    });
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  cantidadProd(operacion: string){
    
    if (this.cantidad >= 0) {
      switch(operacion) { 
        case "+": { 
          this.cantidad = this.cantidad + 1;
          break; 
        } 
        case "-": { 
          this.cantidad = this.cantidad - 1;
          break; 
        } 
        default: { 
          //statements; 
          break; 
        } 
      } 
    }
  }

  AgregarAFactura(){
    
    let item: DetalleFact;
    let item0 = this.productoSelect;

    item = {
      idProducto: item0._id,
      nombreProducto: item0.nombreProducto,
      idTienda: item0.idTienda,
      tienda: this.nombreTienda.nombreEmpresa,
      descripcion: item0.descripcion,
      precio: item0.precio,
      cantidad: this.cantidad,
      total: (item0.precio * this.cantidad)
    };

    this.CantidadCarrito += 1;

    this.DetalleFactura.push(item);
    localStorage.setItem('DetalleFactura', JSON.stringify(this.DetalleFactura)); 
    localStorage.setItem('CantidadCarrito',this.CantidadCarrito.toString());

    this.loginServ.cantidadCarrito$.emit(this.CantidadCarrito);
  }

}
