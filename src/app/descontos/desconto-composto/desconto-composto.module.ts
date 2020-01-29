import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescontoCompostoPageRoutingModule } from './desconto-composto-routing.module';

import { DescontoCompostoPage } from './desconto-composto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescontoCompostoPageRoutingModule
  ],
  declarations: [DescontoCompostoPage]
})
export class DescontoCompostoPageModule {}
