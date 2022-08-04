import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './app-material/app-material.module';
import { CepComponent } from './components/cep/cep.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    CepComponent,
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    RouterModule,
    ReactiveFormsModule

  ],
  exports: [
    AppMaterialModule,
    HeaderComponent,
    CepComponent
  ]
})
export class SharedModule { }
