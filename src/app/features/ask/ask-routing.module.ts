import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AskComponent } from './ask.component';
import { ProfilProComponent } from './profil-pro/profil-pro.component';

const routes: Routes = [
  {
    path:'', component: AskComponent
  }, 
  {
    path:'question', component:AddQuestionComponent
  },
  {
    path:'pro/:id', component:ProfilProComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AskRoutingModule { }
