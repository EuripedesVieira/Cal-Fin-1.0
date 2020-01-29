import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepositoPostecipadoPage } from './deposito-postecipado.page';

const routes: Routes = [
  {
    path: '',
    component: DepositoPostecipadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepositoPostecipadoPageRoutingModule {}
