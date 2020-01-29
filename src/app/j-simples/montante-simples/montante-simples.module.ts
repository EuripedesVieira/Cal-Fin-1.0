import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontanteSimplesPageRoutingModule } from './montante-simples-routing.module';

import { MontanteSimplesPage } from './montante-simples.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontanteSimplesPageRoutingModule
  ],
  declarations: [MontanteSimplesPage]
})
export class MontanteSimplesPageModule {}
