import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';

import { SedesRoutingModule } from './sedes-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SedesRoutingModule
  ],
  providers: [
    CurrencyPipe
  ]
})
export class SedesModule { }
