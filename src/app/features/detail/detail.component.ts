import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IProduit } from 'src/app/interfaces/produit';
import { IUser } from 'src/app/interfaces/user';
import { ProductService } from 'src/app/services/product.service';
import { ModalCommentComponent } from 'src/app/shared/components/modal-comment/modal-comment.component';
import { PopoverCommentComponent } from 'src/app/shared/components/popover-comment/popover-comment.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  @Input() produit:IProduit;
  item: Observable<IProduit>;
  id:string;
  user: IUser = {
    "uid": "10",
    "firstName": "Clementina",
    "lastName": "DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "role": "member",
    "photoUrl":"10.jpg"
  };
  constructor(private serviceProduit: ProductService,
              private routerA: ActivatedRoute,
              private popoverController: PopoverController,
              private modalController: ModalController) { }

  ngOnInit(): void {
    this.id = this.routerA.snapshot.params['id'];
    this.item = this.serviceProduit.getById(this.id);
  }

  
  async presentPopover(ev: any,produit) {
    const popover = await this.popoverController.create({
      component: PopoverCommentComponent,
      cssClass: 'custom-popover',
      event: ev,
      translucent: true,
      componentProps: {
        "product": produit,
        "user": this.user
      }
    });
    return await popover.present();
  }

  async openModal(produit) {
    const ionModal = await this.modalController.create({
      component: ModalCommentComponent,
      componentProps: {
        'produitFeed': produit.feed,
        'produit':produit,
        'user':this.user
      }
    });
    await ionModal.present();
  }

}
