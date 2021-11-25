import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-estrella',
  templateUrl: './estrella.component.html',
  styleUrls: ['./estrella.component.css']
})
export class EstrellaComponent implements OnInit {

  @Input()
  public rating: number;
 
  @Input()
  public max: number;
 
  @Input()
  public readonly: boolean;

  public estrellas = [];

  constructor() { }

  ngOnInit(): void {
    this.estrellas = [];
    for (let i = 0; i < this.max; i++) {
             this.estrellas.push ('fas');
    }
    for (let index = this.max; index < this.rating; index++) {
            this.estrellas.push ('far');
    }
  }

}
