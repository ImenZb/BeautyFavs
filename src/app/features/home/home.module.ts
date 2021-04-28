import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { IonicModule } from '@ionic/angular';
import { FirstPipe } from 'src/app/pipes/first.pipe';
import { LikesCountPipe } from 'src/app/pipes/likes-count.pipe';
import { LikesInitPipe } from 'src/app/pipes/likes-init.pipe';
import { FavInitPipe } from 'src/app/pipes/fav-init.pipe';

@NgModule({
  declarations: [HomeComponent, FirstPipe, LikesCountPipe, LikesInitPipe, FavInitPipe],
  imports: [CommonModule, HomeRoutingModule, IonicModule],
})
export class HomeModule {}
