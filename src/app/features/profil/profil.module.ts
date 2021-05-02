import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SafePipe } from 'src/app/pipes/safe.pipe';


@NgModule({
  declarations: [
    ProfilComponent,
    SafePipe],
  imports: [
    CommonModule,
    ProfilRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class ProfilModule { }
