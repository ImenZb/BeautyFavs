import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskRoutingModule } from './ask-routing.module';
import { AskComponent } from './ask.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [AskComponent],
  imports: [
    CommonModule,
    AskRoutingModule,
    IonicModule
  ]
})
export class AskModule { }
