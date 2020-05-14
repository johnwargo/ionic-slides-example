import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Slides1PageRoutingModule } from './slides1-routing.module';

import { Slides1Page } from './slides1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Slides1PageRoutingModule
  ],
  declarations: [Slides1Page]
})
export class Slides1PageModule {}
