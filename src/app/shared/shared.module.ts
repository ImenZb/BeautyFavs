import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { COMPONENTS } from './components';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverCommentComponent } from './components/popover-comment/popover-comment.component';
import { ModalCommentComponent } from './components/modal-comment/modal-comment.component';



@NgModule({
  declarations: [...COMPONENTS, PopoverCommentComponent, ModalCommentComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
