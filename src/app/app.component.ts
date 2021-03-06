import { Component, OnInit  } from '@angular/core';
import { ServicioDeAutentService} from './servicio-de-autent.service';
import set = Reflect.set;
import {FireDBService} from './fire-db.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListaComprasComponent implements OnInit {

  compras: any[];
  constructor( public authComponent: ServicioDeAutentService,
               public dbAPP: FireDBService) {
    const compra1 = {
      comprar: 'pan',
      descripcion: 'Pan blanco',
      comprado: true,
    };
    const compra2 = {
      comprar: 'queso',
      descripcion: 'Queso azul',
      comprado: false,
    };
    const compra3 = {
      comprar: 'carne',
      descripcion: 'Ternera',
      comprado: false,
    };
    const compra4 = {
      comprar: 'pescado',
      descripcion: 'Salmon',
      comprado: false,
    };
    const compra5 = {
      comprar: 'jamon',
      descripcion: 'Pata negra',
      comprado: false,
    };
    this.compras = [];
    this.compras.push(compra1);
    this.compras.push(compra2);
    this.compras.push(compra3);
    this.compras.push(compra4);
    this.compras.push(compra5);
  }

  ngOnInit() {
  }

  cambio(lista) {
         lista.comprado = !lista.comprado;
  }
}
