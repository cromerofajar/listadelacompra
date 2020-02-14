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
      descripcion: "Pan blanco",
      comprado: true,
    };
    const compra2 = {
      comprar: "queso",
      descripcion: "Queso azul",
      comprado: false,
    };
    const compra3 = {
      comprar: "carne",
      descripcion: "Ternera",
      comprado: false,
    };
    const compra4 = {
      comprar: "pescado",
      descripcion: "Salmon",
      comprado: false,
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
