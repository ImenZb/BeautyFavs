import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskRoutingModule } from './ask-routing.module';
import { AskComponent } from './ask.component';
import { IonicModule } from '@ionic/angular';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AskComponent, AddQuestionComponent],
  imports: [
    CommonModule,
    AskRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class AskModule { }
