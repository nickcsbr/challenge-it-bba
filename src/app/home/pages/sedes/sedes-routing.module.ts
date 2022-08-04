import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SedeItemComponent } from './sede-item/sede-item.component';
import { SedesListComponent } from './sedes-list/sedes-list.component';

const routes: Routes = [
  { path: '', component: SedesListComponent },
  { path: ':id', component: SedeItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SedesRoutingModule { }
