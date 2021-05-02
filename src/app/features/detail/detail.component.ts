import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { IProduit } from 'src/app/interfaces/produit';
import { IUser } from 'src/app/interfaces/user';
import { FavService } from 'src/app/services/fav.service';
import { LikeService } from 'src/app/services/like.service';
import { PostService } from 'src/app/services/post.service';
import { ProductListService } from 'src/app/services/product-list.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { ModalCommentComponent } from 'src/app/shared/components/modal-comment/modal-comment.component';
import { PopoverCommentComponent } from 'src/app/shared/components/popover-comment/popover-comment.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  item;
  id: string;
  user: Partial<IUser> ;
  posts$;
  private _isFav$ = new BehaviorSubject<boolean>(null);
  isFav$ = this._isFav$.asObservable();
  private _isLiked$ = new BehaviorSubject<boolean>(null)
  isLiked$= this._isLiked$.asObservable();
  likesCount:Observable<number>;
  constructor(
    private _productListService: ProductListService,
    private _auth: AngularFireAuth,
    private _userService: UserService,
    private _postService: PostService,
    private _favService: FavService,
    private _likeService: LikeService,
    private routerA: ActivatedRoute,
    private _location: Location,
    private popoverController: PopoverController
  ) {}

  async ngOnInit(): Promise<void> {
    this.id = this.routerA.snapshot.params['id'];
    this.item = (await this._productListService.getByID(this.id).pipe(first()).toPromise())[0]; 
    const { uid = null} = await this._auth.currentUser;
    this.user = await this._userService.getByUid(uid).pipe(first()).toPromise();
    this.posts$ = this._postService.getPostsByProduct(this.id);
    const isLike = await this.isLiked(this.id);
    this._isLiked$.next(isLike);
    const isFavorite = await this.isFav(this.id);
    this._isFav$.next(isFavorite);
    this.likesCount = this._likeService.getCount(this.id);
  }

  // Like actions for one item
  async toggleLike(item: IProduit) {
    const isLiked = await this._likeService.isLiked(item.id).pipe(first()).toPromise();
    if (!isLiked) {
      await this.addLike(item.id);
    } else {
      await this.removeLike(item.id);
    }
    this._isLiked$.next(!isLiked);
  }

  async isLiked(id:string){
    return await this._likeService.isLiked(id).pipe(first()).toPromise();
  }

  async addLike(id: string) {
    await this._likeService.add({id});
  }

  async removeLike(id: string) {
    await this._likeService.remove(id);
  }

 
  // Fav action for one item 
  async toggleFav(item: IProduit) {
    const isFav = await this._favService.isFav$(item.id).pipe(first()).toPromise();
    if (!isFav) {
      await this.addFav(item.id);
    } else {
      await this.removeFav(item.id);
    }
    this._isFav$.next(!isFav);
  }

  async isFav(id:string){
    return await this._favService.isFav$(id).pipe(first()).toPromise();
  }

  async addFav(id: string) {
    await this._favService.add({id});
  }

  async removeFav(id: string) {
    await this._favService.remove(id);
  }
  async presentPopover(ev: any, produit) {
    const popover = await this.popoverController.create({
      component: PopoverCommentComponent,
      cssClass: 'custom-popover',
      event: ev,
      translucent: true,
      componentProps: {
        product: produit,
        user: this.user,
      },
    });
    return await popover.present();
  }

  goBack(){
    this._location.back();
  }
}
