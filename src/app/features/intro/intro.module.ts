import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [IntroComponent],
  imports: [
    CommonModule,
    IntroRoutingModule,
    IonicModule
  ]
})
export class IntroModule { }
