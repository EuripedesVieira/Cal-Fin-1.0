import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontanteSimplesPage } from './montante-simples.page';

const routes: Routes = [
  {
    path: '',
    component: MontanteSimplesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontanteSimplesPageRoutingModule {}
