import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Slides1Page } from './slides1.page';

const routes: Routes = [
  {
    path: '',
    component: Slides1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Slides1PageRoutingModule {}
