import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AskComponent } from './ask.component';

const routes: Routes = [
  {
    path:'', component: AskComponent
  }, 
  {
    path:'question', component:AddQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskRoutingModule { }
