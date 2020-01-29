import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescontoSimplesPageRoutingModule } from './desconto-simples-routing.module';

import { DescontoSimplesPage } from './desconto-simples.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescontoSimplesPageRoutingModule
  ],
  declarations: [DescontoSimplesPage]
})
export class DescontoSimplesPageModule {}
