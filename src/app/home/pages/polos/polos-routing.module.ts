import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PoloItemComponent } from './polo-item/polo-item.component';
import { PolosListComponent } from './polos-list/polos-list.component';

const routes: Routes = [
  { path: '', component: PolosListComponent },
  { path: ':id', component: PoloItemComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PolosRoutingModule { }
