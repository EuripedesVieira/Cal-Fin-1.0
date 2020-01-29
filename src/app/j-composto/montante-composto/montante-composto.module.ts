import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MontanteCompostoPageRoutingModule } from './montante-composto-routing.module';

import { MontanteCompostoPage } from './montante-composto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MontanteCompostoPageRoutingModule
  ],
  declarations: [MontanteCompostoPage]
})
export class MontanteCompostoPageModule {}
