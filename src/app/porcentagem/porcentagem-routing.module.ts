import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorcentagemPage } from './porcentagem.page';

const routes: Routes = [
  {
    path: '',
    component: PorcentagemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorcentagemPageRoutingModule {}
