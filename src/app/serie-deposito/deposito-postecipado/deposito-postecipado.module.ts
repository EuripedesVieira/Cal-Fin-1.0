import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepositoPostecipadoPageRoutingModule } from './deposito-postecipado-routing.module';

import { DepositoPostecipadoPage } from './deposito-postecipado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DepositoPostecipadoPageRoutingModule
  ],
  declarations: [DepositoPostecipadoPage]
})
export class DepositoPostecipadoPageModule {}
