import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ActionSheetController, MenuController } from '@ionic/angular';
import { FavService } from 'src/app/services/fav.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  openedSegment = 'grid';
  user$;
  favProducsList;
  constructor(public actionSheetCtrl: ActionSheetController,
              private _auth: AngularFireAuth,
              private _router: Router,
              private _menu: MenuController,
              private _userService: UserService,
              private _favs: FavService) { }

  async ngOnInit(): Promise<void> {
    const {uid = null} = await this._auth.currentUser;
    this.user$ = this._userService.getByUid(uid);
    this.favProducsList = this._favs.getFavProductsList();
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
