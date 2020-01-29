import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorcentagemPageRoutingModule } from './porcentagem-routing.module';

import { PorcentagemPage } from './porcentagem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorcentagemPageRoutingModule
  ],
  declarations: [PorcentagemPage]
})
export class PorcentagemPageModule {}
