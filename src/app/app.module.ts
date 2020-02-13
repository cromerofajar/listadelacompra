import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListaComprasComponent } from './app.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    ListaComprasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ListaComprasComponent]
})
export class AppModule { }
