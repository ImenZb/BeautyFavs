import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { runInThisContext } from 'node:vm';
import { BehaviorSubject, Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { IUser } from 'src/app/interfaces/user';
import { FavService } from 'src/app/services/fav.service';
import { LikeService } from 'src/app/services/like.service';
import { PhotoService } from 'src/app/services/photo.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  openedSegment = 'grid';
  user$: Observable<Partial<IUser>>;
  favProducsList;
  likedProducsList;
  avatarURL: string;
  photoUrl;
  isActivatedCam = false;
  likes: Observable<number>;
  favs:Observable<number>;
  constructor(public actionSheetCtrl: ActionSheetController,
              private _auth: AngularFireAuth,
              private _router: Router,
              private _menu: MenuController,
              private _userService: UserService,
              private _favs: FavService,
              private _likes: LikeService,
              private _photo:PhotoService) { }

  async ngOnInit(): Promise<void> {
    const {uid = null} = await this._auth.currentUser;
    this.user$ = this._userService.getByUid(uid);
    this.photoUrl = await this.user$.pipe(first(),map(user => user.photoUrl?user.photoUrl:'assets/images/users/profile_32.png')).toPromise();
    this.favProducsList = this._favs.getFavProductsList();
    this.likedProducsList = this._likes.getLikedProductsList();
    this.likes = this._likes.getCountByUID(uid);
    this.favs = this._favs.getCountByUID(uid);
  }

  async takePicture(){
    await this._photo.takePict();
    this.photoUrl = this._photo.avatarURL;
    this.isActivatedCam = true;
    
  }

  savePicture(){
    this._photo.savePict();
    this.isActivatedCam = false;
  }


  openFirst() {
    this._menu.enable(true, 'first');
    this._menu.open('first');
  }

  openEnd() {
    this._menu.open('end');
  }

  openCustom() {
    this._menu.enable(true, 'custom');
    this._menu.open('custom');
  }

  segmentChanged(ev: any) {
    this.openedSegment = ev.detail.value
    
  }

  logout(){
    this._auth.signOut();
    this._router.navigate(['/login']);
  }
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      cssClass: 'my-custom-class',
      buttons: [
         {
        text: 'edit',
        icon: 'create-outline',
        handler: () => {
          console.log('edit clicked');
        }
      }, {
        text: 'logout',
        icon: 'log-out-outline',
        handler: () => {
          this._auth.signOut();
          this._router.navigate(['/login']);
          console.log('logout clicked');
        }
      },
       {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role } = await actionSheet.onDidDismiss();

  }
}
