import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-pro-account-modal',
  templateUrl: './pro-account-modal.component.html',
  styleUrls: ['./pro-account-modal.component.scss']
})
export class ProAccountModalComponent implements OnInit {
  user$;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
  }

  closeModal(){
    this.modalCtrl.dismiss();
  }

  onClick(){}
}
