import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ProductosService, Producto, DetalleFact } from '../../services/productos.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  DetalleFactura: DetalleFact[] = [];

  subTotal: number = 0;
  impuesto: number = 0;
  TOTAL: number = 0;

  closeResult = '';

  formaPago: string;

  constructor(private productosService: ProductosService,
              private router: Router,
              private modalService: NgbModal,) { }
 
  ngOnInit(): void {
    if (localStorage.getItem('DetalleFactura') == null) {
      localStorage.setItem('DetalleFactura', JSON.stringify(this.DetalleFactura));
    }else{
      this.DetalleFactura = JSON.parse(localStorage.getItem('DetalleFactura'));
    }
  }

  cantMax(text: string){
    if(text.length > 20) 
    text = text.substring(0,20) +"...";
    return text;
  }

  subtotalCal(){

    this.DetalleFactura.forEach(item=>{
      this.subTotal = this.subTotal + item.total;
    });
    
    return this.subTotal;

  }

  impuestoCal(){
    this.impuesto = this.subTotal * 0.15;
    return this.impuesto.toFixed(2);
  }

  TOTALCal(){
    this.TOTAL = this.subTotal * 1.15;
    return this.TOTAL.toFixed(2);
  }

  fechaEmision(){
    let date: Date = new Date();
    return date.toLocaleDateString();
  }

  RealizarcompraModal(content){
    this.open(content);
  }

  FormaPago(forma){
    this.formaPago = forma;
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
