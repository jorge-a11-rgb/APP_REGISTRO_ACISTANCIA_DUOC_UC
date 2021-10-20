import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DvusPage } from './dvus.page';

const routes: Routes = [
  {
    path: '',
    component: DvusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DvusPageRoutingModule {}
