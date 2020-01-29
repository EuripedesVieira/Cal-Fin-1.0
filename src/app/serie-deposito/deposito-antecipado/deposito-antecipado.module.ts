import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositoAntecipadoPageRoutingModule } from './deposito-antecipado-routing.module';

import { DepositoAntecipadoPage } from './deposito-antecipado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositoAntecipadoPageRoutingModule
  ],
  declarations: [DepositoAntecipadoPage]
})
export class DepositoAntecipadoPageModule {}
