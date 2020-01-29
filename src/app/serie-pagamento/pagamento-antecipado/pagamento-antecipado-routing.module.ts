import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoAntecipadoPage } from './pagamento-antecipado.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoAntecipadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentoAntecipadoPageRoutingModule {}
