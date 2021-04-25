import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';
import { IProduit } from 'src/app/interfaces/produit';
import { IUser } from 'src/app/interfaces/user';
import { ModalController, PopoverController } from '@ionic/angular';
import { PopoverCommentComponent } from 'src/app/shared/components/popover-comment/popover-comment.component';
import { ModalCommentComponent } from 'src/app/shared/components/modal-comment/modal-comment.component';
import { ProductListService } from 'src/app/services/product-list.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  min = 0;
  max = 10;
  products: Observable<IProduit[]>;
  productList$: Observable<IProduit[]>;//from Firebase
  tag$:Observable<string>;
  category$:Observable<string>;
  filtered:boolean = false;
  category:string='all';
  searchTag:string=null;
  filteredList: Observable<IProduit[]>;
  user$ : Observable<Partial<IUser>> ;
  user: IUser = {
    "uid": "10",
    "firstName": "Clementina DuBuque",
    "lastName": "DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "role": "member",
    "photoUrl":"10.jpg"
  };
  posts$;
  tags:string[]=['anti-acne','anti-rides','anti-rougeurs','anti-UV','bronzant',
                'hydratant','nettoyant','peaux-sensibles','peaux-mixtes','peaux-seches',
                'peaux-normales','cheveux','masque','corps','rasage','mains'];
  getFirst = this._postService.getFirstPostsByProduct;
 
  constructor(
              private _auth: AngularFireAuth,
              private _userService: UserService,
              public popoverController: PopoverController,
              public modalController: ModalController,
              private _productListService: ProductListService,
              private _postService: PostService
              ) {
                
               }

  async ngOnInit(): Promise<void> {
    this.productList$ = this._productListService.getProducts();
    const { uid = null} = await this._auth.currentUser;
    this.user$ = this._userService.getByUid(uid);
    const firstPost = await this._postService.getFirstPostsByProduct("727").toPromise();
    console.log('---->',firstPost);
    
  }
  async presentPopover(ev: any,product) {
    const popover = await this.popoverController.create({
      component: PopoverCommentComponent,
      cssClass: 'custom-popover',
      event: ev,
      translucent: true,
      componentProps: {
        "product": product,
        "user$": this.user$
      }
    });
    return await popover.present();
  }

  async openModal(product) {
    const ionModal = await this.modalController.create({
      component: ModalCommentComponent,
      componentProps: {
         'produit':product,
        'user$':this.user$
      }
    });
    await ionModal.present();
  }

  segmentChanged(event){
    this._productListService.setTag(event.detail.value);
  }

  onChange(event){
    this._productListService.setCategory(event.target.value);
  }

  loadData($event){
    this.max = this.max + 10;
    $event.target.complete();
  }
}
