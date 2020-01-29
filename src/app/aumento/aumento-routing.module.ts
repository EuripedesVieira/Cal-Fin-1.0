import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AumentoPage } from './aumento.page';

const routes: Routes = [
  {
    path: '',
    component: AumentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AumentoPageRoutingModule {}
