import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskRoutingModule } from './ask-routing.module';
import { AskComponent } from './ask.component';
import { IonicModule } from '@ionic/angular';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule } from '@angular/forms';
import { UsernamePipe } from 'src/app/pipes/username.pipe';


@NgModule({
  declarations: [AskComponent, AddQuestionComponent,
    UsernamePipe],
  imports: [
    CommonModule,
    AskRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class AskModule { }
