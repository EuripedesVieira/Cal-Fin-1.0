import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MontanteCompostoPage } from './montante-composto.page';

const routes: Routes = [
  {
    path: '',
    component: MontanteCompostoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MontanteCompostoPageRoutingModule {}
