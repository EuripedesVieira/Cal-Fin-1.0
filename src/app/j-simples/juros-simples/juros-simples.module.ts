import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JurosSimplesPageRoutingModule } from './juros-simples-routing.module';

import { JurosSimplesPage } from './juros-simples.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JurosSimplesPageRoutingModule
  ],
  declarations: [JurosSimplesPage]
})
export class JurosSimplesPageModule {}
