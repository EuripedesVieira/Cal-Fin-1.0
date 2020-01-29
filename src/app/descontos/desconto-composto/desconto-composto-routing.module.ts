import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescontoCompostoPage } from './desconto-composto.page';

const routes: Routes = [
  {
    path: '',
    component: DescontoCompostoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescontoCompostoPageRoutingModule {}
