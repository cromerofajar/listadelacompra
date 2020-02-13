import { Component, OnInit  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListaComprasComponent implements OnInit {

  compras: any[];

  constructor() {
    const compra1 = {
      comprar: "pan",
      leido: true,
    };
    const compra2 = {
      comprar: "queso",
      leido: false,
    };
    const compra3 = {
      comprar: "carne",
      leido: false,
    };
    const compra4 = {
      comprar: "pescado",
      leido: false,
    };
    this.compras = [];
    this.compras.push(compra1);
    this.compras.push(compra2);
    this.compras.push(compra3);
    this.compras.push(compra4);
  }

  ngOnInit() {
  }
}
