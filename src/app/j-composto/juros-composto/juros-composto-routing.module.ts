import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JurosCompostoPage } from './juros-composto.page';

const routes: Routes = [
  {
    path: '',
    component: JurosCompostoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JurosCompostoPageRoutingModule {}
