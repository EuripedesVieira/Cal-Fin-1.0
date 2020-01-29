import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescontoSimplesPage } from './desconto-simples.page';

const routes: Routes = [
  {
    path: '',
    component: DescontoSimplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescontoSimplesPageRoutingModule {}
