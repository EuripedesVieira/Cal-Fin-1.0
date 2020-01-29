import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamentoPostecipadoPageRoutingModule } from './pagamento-postecipado-routing.module';

import { PagamentoPostecipadoPage } from './pagamento-postecipado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamentoPostecipadoPageRoutingModule
  ],
  declarations: [PagamentoPostecipadoPage]
})
export class PagamentoPostecipadoPageModule {}
