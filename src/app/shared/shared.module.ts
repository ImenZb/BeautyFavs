import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS, PIPES } from './components';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeolocateComponent } from './components/geolocate/geolocate.component';



@NgModule({
  declarations: [...COMPONENTS, ...PIPES, GeolocateComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [...PIPES, ...COMPONENTS]
})
export class SharedModule { }
