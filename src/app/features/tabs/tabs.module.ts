import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsRoutingModule } from './tabs-routing.module';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './tabs.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [TabsComponent],
  imports: [
    CommonModule,
    IonicModule,
    TabsRoutingModule,
    SharedModule
  ]
})
export class TabsModule { }
