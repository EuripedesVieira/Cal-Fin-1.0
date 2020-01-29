import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AumentoPageRoutingModule } from './aumento-routing.module';

import { AumentoPage } from './aumento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AumentoPageRoutingModule
  ],
  declarations: [AumentoPage]
})
export class AumentoPageModule {}
