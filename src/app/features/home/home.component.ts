import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
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
import { LikeService } from 'src/app/services/like.service';
import { first } from 'rxjs/operators';
import { FavService } from 'src/app/services/fav.service';

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
  category:string='all';
  searchTag:string=null;
  user$ : Observable<Partial<IUser>> ;
  tags:string[]=['anti-acne','anti-rides','anti-rougeurs','anti-UV','bronzant',
                'hydratant','nettoyant','peaux-sensibles','peaux-mixtes','peaux-seches',
                'peaux-normales','cheveux','masque','corps','rasage','mains'];
  
  private _isLiked$ = new Subject<boolean>()
  isLiked$= this._isLiked$.asObservable();
  likesCount:Observable<number>;
  
  private _isFav$ = new Subject<boolean>();
  isFav$ = this._isFav$.asObservable();

  constructor(
              private _auth: AngularFireAuth,
              private _userService: UserService,
              public popoverController: PopoverController,
              public modalController: ModalController,
              private _productListService: ProductListService,
              private _postService: PostService,
              private _likeService: LikeService,
              private _favService: FavService
              ) {
                
               }

  async ngOnInit(): Promise<void> {
    this.productList$ = this._productListService.getProducts();
    const { uid = null} = await this._auth.currentUser;
    this.user$ = this._userService.getByUid(uid);
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
  // Like actions
  async toggleLike(item: IProduit) {
    const isLiked = await this._likeService.isLiked(item.id).pipe(first()).toPromise();
    if (!isLiked) {
      await this.addLike(item.id);
    } else {
      await this.removeLike(item.id);
    }
    this._isLiked$.next(!isLiked);
  }

  async addLike(id: string) {
    await this._likeService.add({id});
  }

  async removeLike(id: string) {
    await this._likeService.remove(id);
  }

  // Fav actions 
  async toggleFav(item: IProduit) {
    const isFav = await this._favService.isFav$(item.id).pipe(first()).toPromise();
    if (!isFav) {
      await this.addFav(item.id);
    } else {
      await this.removeFav(item.id);
    }
    this._isFav$.next(!isFav);
  }

  async addFav(id: string) {
    await this._favService.add({id});
  }

  async removeFav(id: string) {
    await this._favService.remove(id);
  }
}