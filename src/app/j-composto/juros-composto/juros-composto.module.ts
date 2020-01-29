import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JurosCompostoPageRoutingModule } from './juros-composto-routing.module';

import { JurosCompostoPage } from './juros-composto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JurosCompostoPageRoutingModule
  ],
  declarations: [JurosCompostoPage]
})
export class JurosCompostoPageModule {}
