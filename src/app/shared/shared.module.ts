import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppMaterialModule } from './app-material/app-material.module';
import { CepComponent } from './components/cep/cep.component';
import { HeaderComponent } from './components/header/header.component';
import { InputComponent } from './components/input/input.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { CnpjPipe } from './pipes/cnpj.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    CepComponent,
    UserProfileComponent,
    InputComponent,
    CnpjPipe,
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
    CepComponent,
    InputComponent,
    
  ],
  providers: [
    CnpjPipe
  ]
})
export class SharedModule { }
