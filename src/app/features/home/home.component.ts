import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { IProduit } from 'src/app/interfaces/produit';
import { IUser } from 'src/app/interfaces/user';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverCommentComponent } from 'src/app/shared/components/popover-comment/popover-comment.component';
import { ModalCommentComponent } from 'src/app/shared/components/modal-comment/modal-comment.component';
import { AngularFireDatabase } from '@angular/fire/database';
//import { ProductService } from 'src/app/servicesFirebase/product.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Observable<IProduit[]>;
  productList: Observable<IProduit[]>;//from Firebase
  filtered:boolean = false;
  category:string='all';
  searchTag:string=null;
  filteredList: Observable<IProduit[]>;
  post: Observable<any>;
  user: IUser = {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "city": "Lebsackbury",
      "zipcode": "31428-2261"
    },
    "photoUrl":"10.jpg"
  };

  tags:string[]=['anti-acne','anti-rides','anti-rougeurs','anti-UV','bronzant',
                'hydratant','nettoyant','peaux-sensibles','peaux-mixtes','peaux-seches',
                'peaux-normales','cheveux','masque','corps','rasage','mains'];

  constructor(private serviceProduct: ProductService,
              private userService: UserService,
              public popoverController: PopoverController,
              public modalController: ModalController,
              private db: AngularFireDatabase) { }

  ngOnInit(): void {
    this.products = this.serviceProduct.getAll();
    /*Angular firebase
    this.productList = this.db.list('product').snapshotChanges.pipe(
      map(changes => changes.map(c =>
        ({ key: c.payload.key, ...c.payload.val() })
      )))*/
  }
  async presentPopover(ev: any,product) {
    const popover = await this.popoverController.create({
      component: PopoverCommentComponent,
      cssClass: 'custom-popover',
      event: ev,
      translucent: true,
      componentProps: {
        "product": product,
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

  segmentChanged(event){
    this.searchTag = event.detail.value;
    if(this.searchTag !== 'null'){
      this.filtered = true;
      if(this.category !== 'all'){
        this.filteredList = this.serviceProduct.getByTagCategory(this.category,this.searchTag);
        //in category != all && tag !=all'
      }else{
        this.filteredList = this.serviceProduct.getByTag(this.searchTag);
        //in category all && tag != all'
      }   
    }else{
      this.filtered = false;
      if(this.category === 'all'){
        //in category = all && tag = all
        this.products = this.serviceProduct.getAll();
      }else{
        //in category != all && tag = all'
        this.products = this.serviceProduct.getByCategory(this.category);
      } 
    }
  }

  onChange(event){
    this.category = event.target.value;
    switch (true) {
      case (this.searchTag === null && this.category === 'all'):
        //searchtag all et categorie all
        this.products = this.serviceProduct.getAll();
        break;
      case (this.searchTag !== null && this.category !== 'all'):
        //searchtag et category != all
        this.filteredList = this.serviceProduct.getByTagCategory(this.category,this.searchTag);
        break;
      case (this.searchTag !== null && this.category === 'all'):
        //searchtag !=all et category = all
        this.filteredList = this.serviceProduct.getByTag(this.searchTag);
        break;
      case (this.searchTag === null && this.category !== 'all'):
        //searchtag est all et category!= all
        this.products = this.serviceProduct.getByCategory(this.category);
        break;
      default:
        break;
    }
  }
}
