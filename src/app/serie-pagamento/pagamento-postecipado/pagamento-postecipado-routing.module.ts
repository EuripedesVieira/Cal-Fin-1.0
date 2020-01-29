import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagamentoPostecipadoPage } from './pagamento-postecipado.page';

const routes: Routes = [
  {
    path: '',
    component: PagamentoPostecipadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagamentoPostecipadoPageRoutingModule {}
