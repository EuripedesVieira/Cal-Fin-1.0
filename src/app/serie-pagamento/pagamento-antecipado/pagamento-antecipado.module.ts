import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentoAntecipadoPageRoutingModule } from './pagamento-antecipado-routing.module';

import { PagamentoAntecipadoPage } from './pagamento-antecipado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentoAntecipadoPageRoutingModule
  ],
  declarations: [PagamentoAntecipadoPage]
})
export class PagamentoAntecipadoPageModule {}
