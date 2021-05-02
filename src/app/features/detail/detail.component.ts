import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { IProduit } from 'src/app/interfaces/produit';
import { IUser } from 'src/app/interfaces/user';
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
  constructor(
    private _productListService: ProductListService,
    private _auth: AngularFireAuth,
    private _userService: UserService,
    private _postService: PostService,
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
