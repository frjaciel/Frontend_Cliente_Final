import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService, Producto } from "../../services/productos.service";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productosxtienda',
  templateUrl: './productosxtienda.component.html',
  styleUrls: ['./productosxtienda.component.css']
})
export class ProductosxtiendaComponent implements OnInit {

  productosxtienda: Producto[];
  closeResult = '';

  constructor(private router: Router,
              private activateRoute: ActivatedRoute,
              private productosService: ProductosService,
              private modalService: NgbModal) { 

              this.activateRoute.params.subscribe(params=>{
                  this.productosxtienda = this.productosService.getProductosxTienda(params['id']);
              });
  }

  ngOnInit(): void {
  }

  DescripcionCompra(idx:number){

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

}
