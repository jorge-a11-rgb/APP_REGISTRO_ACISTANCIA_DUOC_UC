import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DvusPageRoutingModule } from './dvus-routing.module';

import { DvusPage } from './dvus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DvusPageRoutingModule
  ],
  declarations: [DvusPage]
})
export class DvusPageModule {}
