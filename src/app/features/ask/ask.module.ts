import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AskRoutingModule } from './ask-routing.module';
import { AskComponent } from './ask.component';
import { IonicModule } from '@ionic/angular';
import { AddQuestionComponent } from './add-question/add-question.component';
import { FormsModule } from '@angular/forms';
import { UsernamePipe } from 'src/app/pipes/username.pipe';
import { FilterByTagPipe } from 'src/app/pipes/filter-by-tag.pipe';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [AskComponent, AddQuestionComponent,
    UsernamePipe,
    FilterByTagPipe],
  imports: [
    CommonModule,
    AskRoutingModule,
    IonicModule,
    FormsModule, SharedModule
  ]
})
export class AskModule { }
