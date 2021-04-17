import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { ModalAddComponent } from 'src/app/shared/components/modal-add/modal-add.component';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
 
  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
  }

  async openModal() {
    const ionModal = await this.modalCtrl.create({
      component: ModalAddComponent,
      componentProps: {
        'productName': '',
        'productImg': ''
      },
      cssClass: 'modal'
    });
    await ionModal.present();
  }
}
