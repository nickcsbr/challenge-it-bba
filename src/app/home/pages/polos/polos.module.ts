import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorIntlBrl } from 'src/app/shared/classes/mat-paginator-intl-brl';

import { PolosRoutingModule } from './polos-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PolosRoutingModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlBrl},
    CurrencyPipe
  ]
})
export class PolosModule { }
