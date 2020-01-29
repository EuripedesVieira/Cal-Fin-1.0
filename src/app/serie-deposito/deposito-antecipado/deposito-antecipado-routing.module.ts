import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositoAntecipadoPage } from './deposito-antecipado.page';

const routes: Routes = [
  {
    path: '',
    component: DepositoAntecipadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositoAntecipadoPageRoutingModule {}
