import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilProComponent } from '../ask/profil-pro/profil-pro.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { ProfilComponent } from './profil.component';

const routes: Routes = [
  {path:'', component: ProfilComponent},
  {path:'edit', component: EditProfilComponent},
  {path:'pro/:id', component:ProfilProComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilRoutingModule { }
