import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafePipe } from 'src/app/pipes/safe.pipe';
import { ProAccountModalComponent } from './pro-account-modal/pro-account-modal.component';
import { EditProfilComponent } from './edit-profil/edit-profil.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProfilComponent,
    SafePipe,
    ProAccountModalComponent,
    EditProfilComponent],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProfilModule { }
