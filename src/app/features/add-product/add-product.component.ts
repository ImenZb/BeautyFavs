import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalAddComponent } from 'src/app/shared/components/modal-add/modal-add.component';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit, AfterViewInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    this.openModal();
  }

  async openModal() {
    const ionModal = await this.modalCtrl.create({
      component: ModalAddComponent,
      componentProps: {
        'productName': '',
        'productImg': ''
      }
    });
    await ionModal.present();
  }
}
